import { api, LightningElement } from 'lwc';
import acc from '@salesforce/schema/Account';
import accName from '@salesforce/schema/Account.Name';
import accType from '@salesforce/schema/Account.Type';


export default class LwcDataservice extends LightningElement {

    @api recordId;
    @api objectApiName;

    fields = [accName,accType];


    handleSubmit(event){
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        fields.Name = fields.Name + ' Demo 26/8'; // modify a field
        this.template.querySelector('lightning-record-form').submit(fields);
     }    
}