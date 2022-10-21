import { Route } from '@angular/router';

import { 
  DevelopCampaignComponents,
  DevelopCampaignRoutes 
} from './develop';

import {
  HomeComponents,
  HomeRoutes
} from './home';

export const RouteComponents = [
  ...DevelopCampaignComponents,
  ...HomeComponents
];

export const Routes: Route[] = [
  ...DevelopCampaignRoutes,
  ...HomeRoutes,
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
