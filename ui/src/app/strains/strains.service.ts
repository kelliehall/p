import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../app.config';
import { Strain } from './strains';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StrainsService {
    strains$: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(private http: HttpClient) {
        this.http.get<Strain[]>(Config.api + Config.endpoints.strains).subscribe(data =>
            this.strains$.next(data)
        );
    }

    getStrains(): Observable<any> {
        return this.strains$;
    }

    createStrain(strain): Observable<any> {
        return this.http.post<Strain>(Config.api + Config.endpoints.strains, strain);
    }

    deleteStrain(strain): Observable<any> {
        return this.http.delete<Strain>(Config.api + Config.endpoints.strains + `/${strain._id}`)
    }

    updateStrains(): void {
        this.http.get<Strain[]>(Config.api + Config.endpoints.strains).subscribe(data =>
            this.strains$.next(data)
        );
    }
}