import { api, LightningElement, wire } from 'lwc';
import { getRecord , getFieldValue} from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import accName from '@salesforce/schema/Account.Name';
import getAccount from '@salesforce/apex/LWCDemo.getAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class WireExample extends LightningElement {

    @api recordId;
    @api title = 'Title here';
    @api message = 'Error Message';
    @api varient = 'Warning';
    @api fieldValue;
    @api type;


    // LDS method
  /* @wire(getRecord,{recordId: '$recordId',fields: [accName]})
   record;*/

   @wire(getRecord,{recordId: '$recordId',fields: [accName]})
    wiredContacts({ error, data }) {
       if (data) {
            this.record = data;
            if(getFieldValue(this.record, accName) == 'test' && this.constructor== false) {
                const evt = new ShowToastEvent({
                    title: this.title,
                    message: this.message,
                    variant: this.varient
                });
                this.dispatchEvent(evt);
            } else {
                this.constructor= false;
            }

        } 
    }

    get name() {
        return getFieldValue(this.record, accName);
    }

    // Apex method
    @wire(getAccount,{accid : '$recordId' })
    accounts;

    //renderedCallback() {
       //refreshApex(this.accounts);
    //}
  /* get recname() {
        return this.record.data.fields.Name.value;
    }*/
  
    refresh() {
        refreshApex(this.accounts);
    }


   constructor() {
       super();
       this.constructor = true;

       // alert('constructor');
    }

    connectedCallback() {
        //alert('connectedCallback');
    }

    renderedCallback() {
        //alert('renderedCallback');
     /*   if(this.record) {

        const evt = new ShowToastEvent({
            title: 'test',
            message: 'This is a test',
            variant: 'Error'
        });
        this.dispatchEvent(evt);
    }*/

    }

    disconnectedCallback() {
        //alert('disconnectedCallback');
    }

    errorCallback(error,stack) {
        //alert('errorCallback :' + error);
        //alert(stack);

    }


}