import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../app.config';
import { Strain } from './strains';

@Injectable()
export class StrainsService {
    constructor(private http: HttpClient) { }

    getStrains(): Observable<any> {
        return this.http.get<Strain[]>(Config.api + Config.endpoints.strains);
    }

    createStrain(strain): Observable<any> {
        return this.http.post<Strain>(Config.api + Config.endpoints.strains, strain);
    }

    deleteStrain(strain): Observable<any> {
        return this.http.delete<Strain>(Config.api + Config.endpoints.strains + `/${strain._id}`)
    }
}