import {
    Component,
    Input
  } from '@angular/core';
  import { FormGroup } from '@angular/forms';
  
  @Component({
    selector: 'campaign-form',
    templateUrl: 'campaign.form.html'
  })
  export class CampaignForm {
    @Input() form: FormGroup;
  
    get name() { return this.form?.get('name') }
    get description() { return this.form?.get('description') }
    get campaignStart() { return this.form?.get('campaignStart') }
    get campaignEnd() { return this.form?.get('campaignEnd') }
    get current() { return this.form?.get('current') }
    get isComplete() { return this.form?.get('isComplete') }
    
  }