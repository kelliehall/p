import { Injectable } from '@angular/core';
import { Config } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Nute } from './nutes';

@Injectable()
export class NutesService {
    constructor(private http: HttpClient) { }

    getNutes(): Observable<any> {
        return this.http.get<Nute[]>(Config.api + Config.endpoints.nutes);
    }

    createNute(nute): Observable<any> {
        return this.http.post<Nute>(Config.api + Config.endpoints.nutes, nute);
    }

    deleteNute(nute): Observable<any> {
        return this.http.delete<Nute>(Config.api + Config.endpoints.nutes + `/${nute._id}`);
    }
}
