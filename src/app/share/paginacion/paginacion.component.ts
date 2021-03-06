import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/filter'; 

@Component({
    selector: 'app-paginacion',
    templateUrl: './paginacion.component.html',
    styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit, OnChanges {

    @Input() offset: number = 0;
    @Input() limit: number = 1;
    @Input() size: number = 1;
    @Input() range: number = 3;

    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    currentPage: number;
    totalPages: number;
    pages: Observable<number[]>;

    constructor() {
    }

    ngOnInit() {
        this.getPages(this.offset, this.limit, this.size);
    }

    ngOnChanges() {
        this.getPages(this.offset, this.limit, this.size);
    }


    getPages(offset: number, limit: number, size: number) {
        this.currentPage = this.getCurrentPage(offset, limit);
        this.totalPages = this.getTotalPages(limit, size);
        this.pages = Observable.range(-this.range, this.range * 2 + 1)
            .map(offset => this.currentPage + offset)
            .filter(page => this.isValidPageNumber(page, this.totalPages))
            .toArray();

    }

    getCurrentPage(offset: number, limit: number): number {
        return Math.floor(offset / limit) + 1;
    }

    getTotalPages(limit: number, size: number): number {
        return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
    }

    isValidPageNumber(page: number, totalPages: number): boolean {
        return page > 0 && page <= totalPages;
    }

    selectPage(page: number, event) {
        this.cancelEvent(event);
        if (this.isValidPageNumber(page, this.totalPages)) {
            this.pageChange.emit((page - 1) * this.limit);
        }
    }

    cancelEvent(event) {
        event.preventDefault();
    }

}
