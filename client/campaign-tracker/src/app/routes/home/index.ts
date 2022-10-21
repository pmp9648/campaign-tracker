import { Route } from '@angular/router';
import { HomeRoute } from './home.route';

import {
  HomeChildComponents,
  HomeChildRoutes
} from './campaigns';

export const HomeComponents = [
  ...HomeChildComponents,
  HomeRoute
];

export const HomeRoutes: Route[] = [
  { path: 'home', component: HomeRoute, children: HomeChildRoutes }
]