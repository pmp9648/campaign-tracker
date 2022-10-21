import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { 
  Campaign,
  CampaignApi,
  CampaignDialog
} from 'core';

@Component({
  selector: 'campaigns-route',
  templateUrl: 'campaigns.route.html',
  providers: [CampaignApi]
})
export class CampaignsRoute { 

  campaign: Campaign;

  constructor(
    private dialog: MatDialog
  ) { }

  addNewCampaign = () => this.dialog.open(CampaignDialog, {
    data: this.campaign,
    disableClose: true,
    width: '400px'
  }).afterClosed()
  .subscribe(( res: Campaign ) => {
    if (res) {
      this.campaign = res;
    }
  });

}

