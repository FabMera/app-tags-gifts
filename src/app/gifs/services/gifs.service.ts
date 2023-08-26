import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gif.interfaces';

//Injectable significa que se puede inyectar en otros componentes sin necesidad de importar el servicio
@Injectable({
    providedIn: 'root',
})
export class GifsService {
    //Se inicializa el arreglo de tagsHistory

    public gifList: Gif[] = [];

    private _tagsHistory: string[] = [];

    private apiKey: string = 'S8H5Frniza8D4YEM7LPAdh9B7VV3kob2';
    private url: string = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=`;

    constructor(private http: HttpClient) {
        this.getLocalStorage();
        console.log("Cargando historial de localStorage");
    }

    //Se crea un getter para obtener el arreglo de tagsHistory con spread operator.
    public get tagsHistory() {
        return [...this._tagsHistory];
    }

    //Se crea una función para organizar el arreglo de tagsHistory, se recibe el tag a organizar y se le hace un trim y un toLowerCase
    //SI el tag ya existe en el arreglo, se elimina y se agrega al inicio del arreglo
    private organizeTagsHistory(tag: string) {
        tag = tag.trim().toLowerCase();
        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter(
                (tagHistory) => tagHistory !== tag
            );
        }
        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0, 10);
        this.saveLocalStorage();
    }

    //Se crea una función para guardar el arreglo de tagsHistory en el localStorage
    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }

    //Se crea una función para obtener el arreglo de tagsHistory del localStorage
    public getLocalStorage(): void {
        if (!localStorage.getItem('history')) return;
        this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
        if(this._tagsHistory.length===0) return;
        this.searchTag(this._tagsHistory[0]);
     }

    //Se crea una función para agregar un tag al arreglo de tagsHistory
    public searchTag(tag: string) {
        if (tag.trim().length === 0) {
            return;
        }
        this.organizeTagsHistory(tag);
        //console.log(this._tagsHistory);
        //SearchResponse es la interfaz que se creo para el response de la API.
        this.http
            .get<SearchResponse>(this.url + '/' + `${tag}&limit=10`)
            .subscribe((resp) => {
                this.gifList = resp.data;
                console.log({ gifs: this.gifList });
            });
    }
}
