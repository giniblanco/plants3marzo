import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class SpeciesTile extends NavigationMixin(LightningElement) {
    @api species;

    //species.Location__c = "Indoors";
    //species.Location__c = "Outdoors";
    //species.Location__c = "Indoors,Outdoors";
    //species.Location__c = "Outdoors,Indoors";

    get isOutdoors() {
        return this.species.Location__c.includes("Outdoors");
    }

    get isIndoors() {
        return this.species.Location__c.includes("Indoors");
    }

    navigateToRecordViewPage() {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.species.Id,
                objectApiName: 'Species__c', // objectApiName is optional
                actionName: 'view'
            }
        });
    }
}

    