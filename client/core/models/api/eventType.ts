import { EntityBase } from "../entity-base";
import { SessionEvent } from "./session-event";

export interface EventType extends EntityBase {
    type: string;
    description: string;

    sessionEvents: SessionEvent[];
}