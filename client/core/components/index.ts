import { CoreComponents } from './core';
import { CampaignComponents } from './campaign';
import { GenericComponents } from './generic';
import { SessionComponents } from './session';

export const Components = [
  ...CampaignComponents,
  ...CoreComponents,
  ...GenericComponents,
  ...SessionComponents
];

export * from './campaign';
export * from './core';
export * from './generic';
export * from './session';
