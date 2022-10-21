import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  Campaign,
  CampaignApi,
  CampaignDialog,
  ConfirmDialog,
  QuerySource
} from 'core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'campaigns-closed-route',
  templateUrl: 'campaigns-closed.route.html',
})
export class CampaignsClosedRoute implements OnInit, OnDestroy {
  campaignSrc: QuerySource<Campaign>;

  constructor(
    private dialog: MatDialog,
    public campaignApi: CampaignApi
  ) { }

  ngOnInit(): void {
    this.campaignSrc = this.campaignApi.queryByComplete(true);
  }

  ngOnDestroy(): void {
    this.campaignSrc.unsubscribe();
  }

  editCampaign = (campaign: Campaign) => this.dialog.open(CampaignDialog, {
    data: campaign,
    disableClose: true,
    width: '400px'
  }).afterClosed()
    .subscribe(res => res && this.campaignSrc.forceRefresh())

  removeCampaign = (campaign: Campaign) => this.dialog.open(ConfirmDialog, {
    data: {
      title: 'Remove Campaign',
      content: `Are you sure you want to remove ${campaign.name}?`
    },
    disableClose: true,
    autoFocus: false
  })
    .afterClosed()
    .subscribe(async (result: boolean) => {
      if (result) {
        const res = await this.campaignApi.remove(campaign)
        res && this.campaignSrc.forceRefresh();
      }
    })
}