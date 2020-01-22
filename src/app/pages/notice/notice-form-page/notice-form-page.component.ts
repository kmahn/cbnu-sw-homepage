import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Notice } from '../../../models/notice';
import { NoticeService } from '../../../shared/services/notice/notice.service';
import { map, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditorComponent } from '../../../shared/ui/editor/editor.component';

@Component({
  selector: 'cbnu-notice-form-page',
  templateUrl: './notice-form-page.component.html',
  styleUrls: ['./notice-form-page.component.scss']
})
export class NoticeFormPageComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  submitted: boolean;
  loading: boolean;
  notice: Notice;
  formGroup: FormGroup;

  @ViewChild(EditorComponent, { static: false }) editor: EditorComponent;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private noticeService: NoticeService,
              fb: FormBuilder) {
    this.formGroup = fb.group({
      _id: [null],
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
    });
  }

  submit() {
    this.submitted = true;
    this.editor.getData();

    if (this.formGroup.invalid) {
      return;
    }

    const notice = this.formGroup.getRawValue();
    const observable: Observable<any> = notice._id ? this.noticeService.updateNotice(notice._id, notice) : this.noticeService.createNotice(notice);
    observable.subscribe(id => {
      if (!notice._id) {
        this.router.navigate(['/notice', id]);
      } else {
        this.router.navigate(['/notice', notice._id]);
      }
    });
  }

  ngOnInit() {
    this.subscriptions.push(
      this.formGroup.valueChanges.subscribe(() => this.submitted = false),
      this.route.params.pipe(
        map(params => params.id),
        switchMap(id => id ? this.noticeService.getNotice(id) : of(null)),
      ).subscribe(
        notice => {
          this.notice = notice;
          this.formGroup.reset();
          this.formGroup.patchValue(notice || {});
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
