import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
    /* View Child es 1 elemento local */
    @ViewChild('search')
    /* Siempre va a tener un valor */
    public tagInput!: ElementRef<HTMLInputElement>;

    constructor() {}

    searchTag() {
        const newTag = this.tagInput.nativeElement.value;
        console.log({ newTag });
    }
}
