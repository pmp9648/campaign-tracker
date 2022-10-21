import {
    Character
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
export class CharacterApi extends EntityApi<Character> {
    constructor(
        protected config: ServerConfig,
        protected snacker: SnackerService,
        protected generator: QueryGeneratorService,
        protected http: HttpClient
    ) {
        super('character', snacker, config, generator, http);
    }

    queryByCampaign = (campaignId: number) =>
        this.generator.generateSource<Event>(
            'id',
            `${this.endpoint}queryByCampaign/${campaignId}`
        );
}