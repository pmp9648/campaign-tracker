import {
    AfterViewInit,
    Component,
    Input
  } from '@angular/core';
  
  import {
    EntityApi
  } from '../../apis';
  
  import { FormGroup } from '@angular/forms';
import { Campaign } from '../../models';
  
  @Component({
    selector: 'armor-form',
    templateUrl: 'armor.form.html'
  })
  export class CampaignForm {
    @Input() form: FormGroup;
  
    get name() { return this.form?.get('name') }
    get description() { return this.form?.get('description') }
    get campaignStart() { return this.form?.get('campaignStart') }
    get campaignEnd() { return this.form?.get('campaignEnd') }
    get current() { return this.form?.get('current') }
    get isComplete() { return this.form?.get('isComplete') }
    
  
    constructor(
      private entityApi: EntityApi
    ) { }
  }