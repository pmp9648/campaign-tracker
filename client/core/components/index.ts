import { CoreComponents } from './core';
import { ClockComponents } from './clock/';
import { CampaignComponents } from './campaign';
import { EventComponents } from './event';
import { GenericComponents } from './generic';
import { SessionComponents } from './session';

export const Components = [
  ...CampaignComponents,
  ...ClockComponents,
  ...CoreComponents,
  ...EventComponents,
  ...GenericComponents,
  ...SessionComponents
];

export * from './campaign';
export * from './clock';
export * from './core';
export * from './event';
export * from './generic';
export * from './session';
