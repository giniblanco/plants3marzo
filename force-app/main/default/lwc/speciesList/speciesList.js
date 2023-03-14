import { LightningElement, wire } from 'lwc';
import getAllSpec from '@salesforce/apex/SpeciesService.getAllSpecies'; //los métodos se pueden renombrar así

export default class SpeciesList extends LightningElement {
    @wire(getAllSpec)  //le decimos al Lightning Data Service que le delegamos la invocacion de este metodo
    speciesFromDB;    //guarda los valores en esta variable/propiedad

    //speciesFromDB.data --> datos devueltos por Apex
    //speciesFromDB.error --> si hay error, se almacena aqui
    
}