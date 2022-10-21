import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter
  } from '@angular/core';
  
  import {
    FormBuilder,
    FormGroup
  } from '@angular/forms';
  
  import {
    Session,
    GenerateSessionForm
  } from '../../models';
  
  import { SessionApi } from '../../apis';
  
  @Component({
    selector: 'session-editor',
    templateUrl: 'session-editor.component.html',
    providers: [ SessionApi ]
  })
  export class SessionEditorComponent implements OnInit {
    form: FormGroup;
  
    @Input() session: Session;
    @Input() label = 'Session';
    @Input() size: number = 360;
    @Input() cardStyle = 'p8';
    @Output() saved = new EventEmitter<Session>();
  
    constructor(
      private fb: FormBuilder,
      public sessionApi: SessionApi
    ) { }
  
    ngOnInit() {
      this.form = GenerateSessionForm(this.session, this.fb);
    }
  
    save = async () => {
      if (this.form?.valid) {
        const res = await this.sessionApi.save(this.form.value);
        res && this.saved.emit(res);
      }
    }
  }