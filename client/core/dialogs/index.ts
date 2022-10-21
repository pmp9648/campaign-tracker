import { CampaignDialogs } from './campaign';
import { ConfirmDialog } from './confirm/confirm.dialog';
import { SessionDialogs } from './session';

export const Dialogs = [
  CampaignDialogs,
  ConfirmDialog,
  SessionDialogs
];

export * from './campaign';
export * from './confirm';
export * from './session';
