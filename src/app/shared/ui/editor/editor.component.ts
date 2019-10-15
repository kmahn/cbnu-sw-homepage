import { Component, forwardRef, Inject, OnInit, PLATFORM_ID, Provider, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent, CKEditor5, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { StorageService } from '../../../core/services/storage/storage.service';
import { isPlatformBrowser } from '@angular/common';

const CONTROL_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EditorComponent),
  multi: true
};

class UploaderAdapter {
  xhr: XMLHttpRequest;

  constructor(private loader: any, private url: string, private token) {
  }

  // Starts the upload process.
  upload() {
    return new Promise((resolve, reject) => {
      this._initRequest();
      this._initListeners(resolve, reject);
      this._sendRequest();
    });
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest() {
    this.xhr = new XMLHttpRequest();

    this.xhr.open('POST', this.url, true);
    this.xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = 'Couldn\'t upload file:' + ` ${this.loader.file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const response = xhr.response;

      if (!response || response.error) {
        return reject(response && response.error ? response.error.message : genericErrorText);
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      console.log(response);
      resolve({
        default: (response.data || {}).url
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', evt => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest() {
    const data = new FormData();

    data.append('file', this.loader.file);

    this.xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    this.xhr.setRequestHeader('x-access-token', this.token);
    this.xhr.send(data);
  }
}

function uploaderAdapterPluginFactory(url: string, token: string) {
  return editor => editor.plugins.get('FileRepository').createUploadAdapter = loader => new UploaderAdapter(loader, url, token);
}

@Component({
  selector: 'cbnu-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [CONTROL_ACCESSOR]
})
export class EditorComponent implements OnInit, ControlValueAccessor {

  private onChange: any;
  private onTouched: any;

  editor = ClassicEditor;
  disabled: boolean;
  config: CKEditor5.Config;
  @ViewChild(CKEditorComponent, { static: false }) ckeditor: CKEditorComponent;

  constructor(private storage: StorageService, @Inject(PLATFORM_ID) private platformId) {
    if (isPlatformBrowser(this.platformId)) {
      this.config = {
        extraPlugins: [uploaderAdapterPluginFactory('/api/notices/upload', this.storage.get('token'))]
      };
    }
  }

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ckeditor.writeValue(obj);
    }
  }

  valueChange({ editor }: ChangeEvent) {
    if (isPlatformBrowser(this.platformId) && editor) {
      this.onChange(editor.getData());
    }
  }

  ngOnInit() {
  }
}
