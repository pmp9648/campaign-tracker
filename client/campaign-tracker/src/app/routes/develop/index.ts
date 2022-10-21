import { Route } from '@angular/router';
import { DevelopCampaignRoute } from './develop-campaign.route';

export const DevelopCampaignComponents = [
  DevelopCampaignRoute
];

export const DevelopCampaignRoutes: Route[] = [
  { path: 'develop/:id', component: DevelopCampaignRoute }
]