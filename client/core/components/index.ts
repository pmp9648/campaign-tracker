import { CoreComponents } from './core';
import { ClockComponents } from './clock/';
import { CampaignComponents } from './campaign';
import { GenericComponents } from './generic';
import { SessionComponents } from './session';

export const Components = [
  ...CampaignComponents,
  ...ClockComponents,
  ...CoreComponents,
  ...GenericComponents,
  ...SessionComponents
];

export * from './campaign';
export * from './clock';
export * from './core';
export * from './generic';
export * from './session';
