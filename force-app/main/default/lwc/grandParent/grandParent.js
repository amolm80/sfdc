import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    gpVal = 0;

    handleChildEvent(e) {
        this.gpVal = parseInt(this.gpVal) + parseInt(e.detail);
        //alert(e.detail);
    }
}