import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { Flower } from '../flowers';
import { FlowerService } from '../flowers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: './flower-edit.component.html',
    styleUrls: ['../flowers.scss']
})
export class FlowerEditComponent implements OnInit {
    flower$: Observable<Flower>;

    constructor(private route: ActivatedRoute,
        private flowerService: FlowerService) {
    }

    ngOnInit() {
        this.route.params.pipe(
            switchMap((params: Params) => {
                return this.flowerService.getById(params['id'])
            }))
            .subscribe(flower => this.flower$ = flower);
    }

}