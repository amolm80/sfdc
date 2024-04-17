import CustomerSignedTitle from '@salesforce/schema/Contract.CustomerSignedTitle';
import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    parentVal = 0;

    handleChildEvent(event) {
        this.parentVal = parseInt(this.parentVal) + parseInt(event.detail);
    }


    resetChildValue(e) {
        this.template.querySelector('c-child').handleReset();
        this.parentVal = 0;
    }

}