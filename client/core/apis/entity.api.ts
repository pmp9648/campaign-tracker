import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, firstValueFrom, Observable, of, Subscription } from "rxjs";
import { EntityBase } from "../models/";
import { SnackerService } from "../../core";

export abstract class EntityApi<T extends EntityBase> {
    private _entities = new BehaviorSubject<T[]>(null);
    private _entity = new BehaviorSubject<T>(null);

    protected api: string;

    entities$ = this._entities.asObservable();
    entity$ = this._entity.asObservable();

    constructor(
        private _http: HttpClient,
        private _snacker: SnackerService,
        protected address: string,
        protected path: string
    ) {
        console.log(this.address)
        this.api = address + path;
    }

    protected execute = <Data>(stream: Observable<Data>): Promise<Data> =>
        new Promise((resolve, reject) => {
            stream.subscribe({
                next: (data: Data) => {
                    this._snacker.sendSuccessMessage('item successfully saved');
                    resolve(data)
                },
                error: (err: any) => {
                    this._snacker.sendErrorMessage(err.error);
                    reject(err)
                }
            })
        })

    storeAll = (): Subscription => this.getAll$()
        .subscribe({
            next: data => {
                this._entities.next(data);
                this._snacker.sendSuccessMessage('data successfully loaded!');
            },
            error: err => this._snacker.sendErrorMessage('something went wrong')
        });

    getAll$ = (): Observable<T[]> => this._http.get<T[]>(
        `${this.api}/getAll`
    );

    getAllAsync = (): Promise<T[]> => firstValueFrom(
        this.getAll$()
    );

    getById$ = (id: number): Observable<T> => this._http.get<T>(
        `${this.api}/getById/${id}`
    );

    getByIdAsync = (id: number): Promise<T> => firstValueFrom(
        this.getById$(id)
    );

    save = (entity: T): Promise<T> =>
        this.execute(
            this._http.post<T>(`${this.api}/save`, entity)
        );

    remove = (entity: T): Promise<boolean> =>
        this.execute(
            this._http.delete<boolean>(`${this.api}/remove`, { body: entity })
        );
}