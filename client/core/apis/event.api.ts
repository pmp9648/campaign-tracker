import {
    Event
} from '../models';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../config';
import { QueryGeneratorService } from '../services/query-generator.service';
import { EntityApi } from './entity.api';
import { SnackerService } from '../services/snacker.service';

@Injectable({
    providedIn: 'root'
})
export class EventApi extends EntityApi<Event> {
    constructor(
        protected config: ServerConfig,
        protected snacker: SnackerService,
        protected generator: QueryGeneratorService,
        protected http: HttpClient
    ) {
        super('event', snacker, config, generator, http);
    }

    queryBySession = (sessionId: number) =>
        this.generator.generateSource<Event>(
            'id',
            `${this.endpoint}queryBySession/${sessionId}`
        );
}