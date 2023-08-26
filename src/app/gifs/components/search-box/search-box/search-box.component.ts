import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
    /* View Child es 1 elemento local */
    @ViewChild('search')
    /* Siempre va a tener un valor */
    //Se hace referencia al elemento HTML que tiene el atributo #search.
    public tagInput!: ElementRef<HTMLInputElement>;

    constructor(private gifsService:GifsService) {}

    searchTag() {
        const newTag = this.tagInput.nativeElement.value;

        this.gifsService.searchTag(newTag);
        this.tagInput.nativeElement.value = '';
        console.log();
    }
}
