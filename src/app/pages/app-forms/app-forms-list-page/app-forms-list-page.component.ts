import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cbnu-app-forms-list-page',
  templateUrl: './app-forms-list-page.component.html',
  styleUrls: ['./app-forms-list-page.component.scss']
})
export class AppFormsListPageComponent implements OnInit {

  choiceControl: FormControl = new FormControl('list');

  constructor(public auth: AuthService) {
  }

  get choice(): 'list' | 'manage' {
    return this.choiceControl.value;
  }

  ngOnInit() {
  }
}
