import { LightningElement, wire } from 'lwc';
import getFilteredSpec from '@salesforce/apex/SpeciesService.getFilteredSpecies'; //los métodos se pueden renombrar así

export default class SpeciesList extends LightningElement {
    // PROPERTIES, GETTERS & SETTERS
    searchText = "";

    // LIFECYCLE HOOKS
    

    // WIRE
    @wire(getFilteredSpec, { searchText : '$searchText'})  //le decimos al Lightning Data Service que le delegamos la invocacion de este metodo
    speciesFromDB;    //guarda los valores en esta variable/propiedad

    //speciesFromDB.data --> datos devueltos por Apex
    //speciesFromDB.error --> si hay error, se almacena aqui

    // METHODS
    handleInputChange(event) {
        const searchTextAux = event.target.value;

        if(searchTextAux.length >= 2 || searchTextAux === '') {
            this.searchText = searchTextAux;
        }
    }
    
}