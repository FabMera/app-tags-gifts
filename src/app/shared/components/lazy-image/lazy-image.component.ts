import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shared-lazy-image',
    templateUrl: './lazy-image.component.html',
    styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
    constructor() {}

    @Input()
    public url!: string;

    @Input()
    public alt!: string;

    public hasLoaded: boolean = false;

    ngOnInit(): void {
        if (!this.url) throw new Error('url is undefined');
    }

    public onLoad() {
        setTimeout(() => {
            this.hasLoaded = true;
        }, 2000);
        this.hasLoaded = true;
    }
}
