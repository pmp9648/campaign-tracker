import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

import {
  SessionEvent,
  GenerateEventForm
} from '../../models';

import { SessionEventApi } from '../../apis';

@Component({
  selector: 'event-editor',
  templateUrl: 'event-editor.component.html',
  providers: [SessionEventApi]
})
export class EventEditorComponent implements OnChanges {
  form: FormGroup;
  duration: number;
  index: number;
  sEvent: SessionEvent;

  @Input() sessionEvent: SessionEvent;
  @Input() label = 'Event';
  @Input() size: number = 320;
  @Input() cardStyle = 'p8';
  @Output() saved = new EventEmitter<SessionEvent>();

  constructor(
    private fb: FormBuilder,
    public sessionEventApi: SessionEventApi
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sessionEvent) {
      this.form = GenerateEventForm(this.sessionEvent, this.fb);
      this.duration = this.sessionEvent.totalDuration ?? 0;
      this.index = this.sessionEvent.index++ ?? 0;
    }
  }

  save = async () => {
    if (this.form?.valid) {
      this.sEvent = Object.assign({} as SessionEvent, this.form.value, { totalDuration: this.duration, index: 1 } as SessionEvent)
      const res = await this.sessionEventApi.save(this.sEvent);
      res && this.saved.emit(res);
    }
  }
  S
  addTime = (duration: number) => {
    duration == 0
      ? this.duration = 0
      : this.duration = this.duration + duration;
    console.log(this.duration)
  }
}