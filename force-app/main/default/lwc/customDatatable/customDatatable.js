import { LightningElement, api, wire } from 'lwc';
import CustomDtTypeLwc from 'c/customDtTypeLwc';
const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Status', 
        fieldName: 'Status', 
        type: 'picklistColumn',
        editable: true,
        typeAttributes: {
            options: [                
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
                { label: 'Other', value: 'Other' }
            ],

            context: { fieldName: 'Id' }
        } 
    }
];

export default class CustomDatatable extends LightningElement {
    data = [
        { Id: '1', Name: 'Record 11', Status: 'Male' },
        { Id: '2', Name: 'Record 22', Status: 'Other' }
    ];

    columns = COLUMNS;

    handleRowAction(event) {
        // Handle the row action event here
        console.log('Row action:', event.detail.action.name);
        console.log('Row data:', event.detail.row);
    }    
    handlePicklistValueChange(event) {
        console.log('handlePicklistValueChange:', event.detail.value);
    }
}
