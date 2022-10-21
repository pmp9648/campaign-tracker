import { Route } from '@angular/router';
import { CampaignsClosedRoute } from './campaigns-closed.route';
import { CampaignsOpenRoute } from './campaigns-open.route';

export const CampaignsChildComponents = [
  CampaignsOpenRoute,
  CampaignsClosedRoute
];

export const CampaignChildRoutes: Route[] = [
  { path: 'open', component: CampaignsOpenRoute },
  { path: 'closed', component: CampaignsClosedRoute },
  { path: '', redirectTo: 'open', pathMatch: 'prefix' },
  { path: '**', redirectTo: 'open', pathMatch: 'prefix' }
]
