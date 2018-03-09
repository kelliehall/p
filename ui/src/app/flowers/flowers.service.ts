import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../app.config';
import { Flower } from './flowers';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FlowerService {
    flowers$: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(private http: HttpClient) {
        this.http.get<Flower[]>(Config.api + Config.endpoints.flowers).subscribe(data =>
            this.flowers$.next(data)
        );
    }

    getFlowers(): Observable<any> {
        return this.flowers$;
    }

    createFlower(flower): Observable<any> {
        return this.http.post<Flower>(Config.api + Config.endpoints.flowers, flower);
    }

    deleteFlower(flower): Observable<any> {
        return this.http.delete<Flower>(Config.api + Config.endpoints.flowers + `/${flower._id}`);
    }

    getById(id): Observable<any> {
        return this.http.get<Flower>(Config.api + Config.endpoints.flowers + `/${id}`);
    }

    updateFlowers(): void {
        this.http.get<Flower[]>(Config.api + Config.endpoints.flowers).subscribe(data =>
            this.flowers$.next(data)
        );
    }

    updatebyId(id, body): Observable<any> {
        return this.http.put<any>(Config.api + Config.endpoints.flowers + `/${id}`, body);
    }
}