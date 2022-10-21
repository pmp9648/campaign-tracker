import {
    Session
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
export class SessionApi extends EntityApi<Session> {
    constructor(
        protected config: ServerConfig,
        protected snacker: SnackerService,
        protected generator: QueryGeneratorService,
        protected http: HttpClient
    ) {
        super('session', snacker, config, generator, http);
    }

    queryByCampaign = (campaignId: number) =>
        this.generator.generateSource<Session>(
            'id',
            `${this.endpoint}queryByCampaign/${campaignId}`
        );
}