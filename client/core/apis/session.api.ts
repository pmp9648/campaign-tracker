import {
    Session
} from '../models';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../config';
import { QueryGeneratorService } from '../services/query-generator.service';
import { EntityApi } from './entity.api';
import { SnackerService } from '../services/snacker.service';
import { firstValueFrom, Observable } from 'rxjs';

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
        super(http, snacker, config.api, 'session');
    }

    queryByCampaign = (campaignId: number) =>
        this.generator.generateSource<Session>(
            'id',
            `${this.api}/queryByCampaign/${campaignId}`
        );

    getDuration$ = (id: number): Observable<number> => this.http.get<number>(
        `${this.api}/getDuration/${id}`
    );

    getDuration = (id: number): Promise<number> => firstValueFrom(
        this.getDuration$(id)
    );

}