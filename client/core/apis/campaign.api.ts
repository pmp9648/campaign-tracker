import {
  Campaign
} from '../models';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../config';
import { QueryGeneratorService } from '../services/query-generator.service';
import { EntityApi } from './entity.api';
import { SnackerService } from '../services/snacker.service';
import { Observable } from 'rxjs';

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
    super('campaign', snacker, config, generator, http);
  }

  all$: Observable<Campaign[]> = this.http.get<Campaign[]>(`${this.api}find`);

  all = (): Promise<Campaign[]> =>
    this.execute(this.all$);

  queryByComplete = (isComplete: boolean) =>
    this.generator.generateSource<Campaign>(
      'id',
      `${this.endpoint}queryByComplete/${isComplete}`
    );
}