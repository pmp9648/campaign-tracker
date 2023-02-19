import {
  Campaign
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
export class CampaignApi extends EntityApi<Campaign> {
  constructor(
    protected config: ServerConfig,
    protected snacker: SnackerService,
    protected generator: QueryGeneratorService,
    protected http: HttpClient
  ) {
    super(http, snacker, config.api, 'campaign');
  }

  queryByComplete = (isComplete: boolean) =>
    this.generator.generateSource<Campaign>(
      'id',
      `${this.api}/queryByComplete/${isComplete}`
    );


  getDuration$ = (id: number): Observable<number> => this.http.get<number>(
    `${this.api}/getDuration/${id}`
  );

  getDuration = (id: number): Promise<number> => firstValueFrom(
    this.getDuration$(id)
  );
}