import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Config } from '../app.config';
import { Grow } from './grow';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GrowsService {
    grows$: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(private http: HttpClient) {
        this.http.get<Grow>(Config.api + Config.endpoints.grows).subscribe(data =>
            this.grows$.next(data)
        );
    }

    getGrows(): Observable<any> {
        return this.grows$;
    }

    createGrow(grow): Observable<any> {
        return this.http.post<Grow>(Config.api + Config.endpoints.grows, grow);
    }

    deleteGrow(grow): Observable<any> {
        return this.http.delete<Grow>(Config.api + Config.endpoints.grows + `/${grow._id}`);
    }

    updateGrows(): void {
        this.http.get<Grow>(Config.api + Config.endpoints.grows).subscribe(data =>
            this.grows$.next(data));
    }
}
