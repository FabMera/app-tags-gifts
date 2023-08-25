import { Injectable } from '@angular/core';

//Injectable significa que se puede inyectar en otros componentes sin necesidad de importar el servicio
@Injectable({
    providedIn: 'root',
})
export class GifsService {

    //Se inicializa el arreglo de tagsHistory
    private _tagsHistory: string[] = [];

    constructor() {}

    //Se crea un getter para obtener el arreglo de tagsHistory
    public get tagsHistory() {
        return [...this._tagsHistory];
    }

    //Se crea una función para agregar un tag al arreglo de tagsHistory
    public searchTag(tag: string) {
        this._tagsHistory.unshift(tag);
    }
}
