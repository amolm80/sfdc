import LightningDatatable from 'lightning/datatable';
import picklistEditable from './picklistEditable.html';
import picklistNotEditable from './picklistNotEditable.html';

export default class CustomDtTypeLwc extends LightningDatatable {
    static customTypes = {
        picklistColumn: {
            template: picklistNotEditable,
            editTemplate: picklistEditable,
            standardCellLayout: true,
            typeAttributes: [ 'options','context','value']
        }
    };

    handleChange(event){
      //  this.dispatchEvent(new CustomEvent('picklistvaluechange', { detail: { value: event.detail.value } }));

    }

}
