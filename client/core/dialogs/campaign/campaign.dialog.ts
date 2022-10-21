import {
    MatDialogRef,
    MAT_DIALOG_DATA
  } from '@angular/material/dialog';
  
  import {
    Component,
    Inject
  } from '@angular/core';
  
  import { Campaign } from '../../models';
  
  @Component({
    selector: 'campaign-dialog',
    templateUrl: 'campaign.dialog.html'
  })
  export class CampaignDialog {
    constructor(
      public dialog: MatDialogRef<CampaignDialog>,
      @Inject(MAT_DIALOG_DATA) public campaign: Campaign
    ) { }
  }
  