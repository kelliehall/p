import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../app.config';
import { Flower } from './flowers';

@Injectable()
export class FlowerService {
    constructor(private http: HttpClient) { }

    getFlowers(): Observable<any> {
        return this.http.get<Flower[]>(Config.api + Config.endpoints.flowers);
    }

    createFlower(flower): Observable<any> {
        return this.http.post<Flower>(Config.api + Config.endpoints.flowers, flower);
    }

    deleteFlower(flower): Observable<any> {
        return this.http.delete<Flower>(Config.api + Config.endpoints.flowers + `/${flower._id}`);
    }
}