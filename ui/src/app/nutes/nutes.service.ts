import { Injectable } from '@angular/core';
import { Config } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Nute } from './nutes';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NutesService {
    nutes$: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(private http: HttpClient) {
        this.http.get<Nute[]>(Config.api + Config.endpoints.nutes).subscribe(data =>
            this.nutes$.next(data)
        );
    }

    getNutes(): Observable<any> {
        return this.nutes$;
    }

    createNute(nute): Observable<any> {
        return this.http.post<Nute>(Config.api + Config.endpoints.nutes, nute);
    }

    deleteNute(nute): Observable<any> {
        return this.http.delete<Nute>(Config.api + Config.endpoints.nutes + `/${nute._id}`);
    }

    updateNutes(): void {
        this.http.get<Nute[]>(Config.api + Config.endpoints.nutes).subscribe(data =>
            this.nutes$.next(data)
        );
    }
}
