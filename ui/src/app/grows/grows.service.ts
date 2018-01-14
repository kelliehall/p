import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../app.config';
import { Grow } from './grow';

@Injectable()
export class GrowsService {

    constructor(private http: HttpClient) { }

    getGrows(): Observable<any> {
        return this.http.get<Grow>(Config.api + Config.endpoints.grows);
    }

    createGrow(grow): Observable<any> {
        return this.http.post<Grow>(Config.api + Config.endpoints.grows, grow);
    }

    deleteGrow(grow): Observable<any> {
        return this.http.delete<Grow>(Config.api + Config.endpoints.grows + `/${grow._id}`);
    }
}
