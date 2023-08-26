import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
    constructor(private gifsService: GifsService) {}
    //acceder a la propiedad tagsHistory del servicio

    public get history(): string[] {
        return this.gifsService.tagsHistory;
    }

    public tagTarget(tag: string): void {
        this.gifsService.searchTag(tag);
    }
}
