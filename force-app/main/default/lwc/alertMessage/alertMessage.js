import { api, LightningElement, wire } from 'lwc';
import { getRecord , getFieldValue} from 'lightning/uiRecordApi';
import fieldToCheck from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AlertMessage extends LightningElement {
    @api recordId;
    @api txtTitle;
    @api txtMessage;
    @api varient;
    @api fieldValue;

    constructor() {
        super();
        this.isConstructor = true;
        alert(this.recordId);
    }
 
    @wire(getRecord,{recordId: '$recordId',fields: [fieldToCheck]})
    getData({ error, data }) {
        if (data) {
             this.record = data;
             alert('obj name '+data.apiName);
             if(getFieldValue(this.record, fieldToCheck) == this.fieldValue && this.constructor== false) {
                 const evt = new ShowToastEvent({
                     title: this.txtTitle,
                     message: this.txtMessage,
                     variant: this.varient
                 });
                 this.dispatchEvent(evt);
             } else {
                 this.constructor= false;
             }
 
         } 
     }
}