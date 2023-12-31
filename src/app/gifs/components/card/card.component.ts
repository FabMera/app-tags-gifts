import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
    selector: 'gifs-card',
    templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
    constructor() {}
    @Input()
    public gif!: Gif;

    ngOnInit(): void {
        if (!this.gif) throw new Error('gifResults is undefined');
    }
}
