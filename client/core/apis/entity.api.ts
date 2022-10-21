import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerConfig } from '../config';
import { QueryGeneratorService } from '../services/query-generator.service';
import { SnackerService } from '../services/snacker.service';

export abstract class EntityApi<T> {
  protected api: string;

  private setEndpoint = (endpoint: string): string =>
    endpoint.endsWith('/')
      ? endpoint
      : `${endpoint}/`;

  protected execute = <Data>(stream: Observable<Data>): Promise<Data> =>
    new Promise((resolve, reject) => {
      stream.subscribe({
        next: (data: Data) => {
          this.snacker.sendSuccessMessage('item successfully saved');
          resolve(data)
        },
        error: (err: any) => {
          this.snacker.sendErrorMessage(err.error);
          reject(err)
        }
      })
    })

  constructor(
    protected endpoint: string,
    protected snacker: SnackerService,
    protected config: ServerConfig,
    protected generator: QueryGeneratorService,
    protected http: HttpClient
  ) {
    this.endpoint = this.setEndpoint(endpoint);
    this.api = `${config.api}${this.endpoint}`
  }

  query = () =>
    this.generator.generateSource<T>(
      `id`,
      `${this.endpoint}query`
    )

  find$ = (id: number): Observable<T> =>
    this.http.get<T>(`${this.api}find/${id}`);

  find = (id: number): Promise<T> =>
    this.execute(
      this.find$(id)
    );

  save = (entity: T): Promise<T> =>
    this.execute(
      this.http.post<T>(`${this.api}save`, entity)
    );

  remove = (entity: T): Promise<boolean> =>
    this.execute(
      this.http.delete<boolean>(`${this.api}remove`, { body: entity })
    );
}
