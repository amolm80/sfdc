import { LightningElement } from 'lwc';

export default class Gp extends LightningElement {
    gpVal = 0;

    handleChildEvent(e) {
        this.gpVal = e.detail;
        alert(e.detail);
    }
}