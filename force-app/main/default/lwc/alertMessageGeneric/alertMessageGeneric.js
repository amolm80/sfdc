import { api, LightningElement, wire } from 'lwc';
import { getRecord , getFieldValue} from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

import fieldToCheck from '@salesforce/schema/Account.Name';



export default class AlertMessageGeneric extends LightningElement {

    @api recordId;

    @api txtTitle;
    @api txtMessage;
    @api varient;

    @api fieldValue;
    @api fieldName;
    fieldValue;
    objectApiName;
    record;

    constructor() {
        super();
    }

    @wire(getRecord, { recordId: '$recordId', fields: [ '$fieldName' ]  })
    wiredRecord({ error, data }) {
        if (data) {
            this.objectApiName = data.apiName;
            this.record = data;
            alert('ObjName = '+this.objectApiName);
            alert('field Name = '+this.fieldName);
            this.fieldValue = getFieldDisplayValue(data, this.fieldName);

            alert('field value = '+ fieldValue);
        } else if (error) {
            console.error(error);
        }
    }

/*
 FIELDLIST = ['account.Name'];
  @wire(getRecord,{recordId: '$recordId',fields: '$FIELDLIST'})
    getDatas({ error, data }) {
        alert(this.recordId);
        if (data) {
             this.record = data;
             this.objName = data.apiName;
             alert('obj name '+data.apiName);
         } 
     }
*/
}