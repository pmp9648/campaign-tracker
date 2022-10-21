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
    Campaign,
    GenerateCampaignForm
  } from '../../models';
  
  import { CampaignApi } from '../../apis';
  
  @Component({
    selector: 'campaign-editor',
    templateUrl: 'campaign-editor.component.html',
    providers: [ CampaignApi ]
  })
  export class CampaignEditorComponent implements OnInit {
    form: FormGroup;
  
    @Input() campaign: Campaign;
    @Input() label = 'Campaign';
    @Input() size: number = 360;
    @Input() cardStyle = 'p8';
    @Output() saved = new EventEmitter<Campaign>();
  
    constructor(
      private fb: FormBuilder,
      public campaignApi: CampaignApi
    ) { }
  
    ngOnInit() {
      this.form = GenerateCampaignForm(this.campaign, this.fb);
    }
  
    save = async () => {
      if (this.form?.valid) {
        const res = await this.campaignApi.save(this.form.value);
        res && this.saved.emit(res);
      }
    }
  }