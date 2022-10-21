import { Route } from '@angular/router';
import { CampaignsRoute } from './campaigns.route';
import { 
  CampaignChildRoutes,
  CampaignsChildComponents
 } from './children';
 
export const HomeChildComponents = [
  ...CampaignsChildComponents,
  CampaignsRoute 
];

export const HomeChildRoutes: Route[] = [
  { path: 'campaigns', component: CampaignsRoute, children: CampaignChildRoutes },
  { path: '', redirectTo: 'campaigns', pathMatch: 'prefix' },
  { path: '**', redirectTo: 'campaigns', pathMatch: 'prefix' }
]
