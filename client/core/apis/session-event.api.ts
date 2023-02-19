import {
    SessionEvent
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
export class SessionEventApi extends EntityApi<SessionEvent> {
    constructor(
        protected config: ServerConfig,
        protected snacker: SnackerService,
        protected generator: QueryGeneratorService,
        protected http: HttpClient
    ) {
        super(http, snacker, config.api, 'sessionEvent');
    }

    queryBySession = (sessionId: number) =>
        this.generator.generateSource<SessionEvent>(
            'id',
            `${this.api}/queryBySession/${sessionId}`
        );
}