import { BytesPipe } from './bytes.pipe';
import { TimePipe } from './time.pipe';
import { TruncatePipe } from './truncate.pipe';

export const Pipes = [
  BytesPipe,
  TruncatePipe,
  TimePipe
];

export * from './bytes.pipe';
export * from './truncate.pipe';
export * from './time.pipe';
