import {
    Component,
    Input,
    OnInit
  } from '@angular/core';
  
  import {
    Campaign
  } from '../../models';
  
  import { CampaignApi } from '../../apis';
  
  @Component({
    selector: 'campaign-display',
    templateUrl: 'campaign-display.component.html',
    providers: [ CampaignApi ]
  })
  export class CampaignDisplayComponent {
    @Input() campaign: Campaign;
  
    constructor(
    ) { }
  }