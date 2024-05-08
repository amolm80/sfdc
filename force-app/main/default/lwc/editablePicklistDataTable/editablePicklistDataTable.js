import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import customDataType from 'c/picklistEditCell';
import customDataType2 from 'c/customDataType';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text', editable: true },
    { label: 'Type', fieldName: 'Type', type: 'text', editable: true },
    { label: 'Industry', fieldName: 'Industry', type: 'text', editable: true },
    { label: 'Phone', fieldName: 'Phone', type: 'text', editable: true },
    { label: 'Website', fieldName: 'Website', type: 'url', editable: true },
    { label: 'Status', fieldName: 'Status', type: 'customDataType', editable: true ,typeAttributes: { options:'$picklistOptions', picklistOptions: '$picklistOptions' } }
];

const PICKLIST_OPTIONS = ['Option 1', 'Option 2', 'Option 3'];

export default class EditablePicklistDataTable extends LightningElement {
    @track data = [
        { Id: '1', Name: 'Account 1123', Type: 'Customer - Direct', Industry: 'Agriculture', Phone: '123-456-7890', Website: 'http://www.example.com', Status: 'Option 2' },
        { Id: '3', Name: 'Account 3', Type: 'Customer - Direct', Industry: 'Agriculture', Phone: '123-456-7890', Website: 'http://www.example.com', Status: 'Option 2' },
        { Id: '2', Name: 'Account 2', Type: 'Customer - Channel', Industry: 'Manufacturing', Phone: '987-654-3210', Website: 'http://www.example.org', Status: 'Option 2' }
    ];

    columns = COLUMNS;
    picklistOptions = PICKLIST_OPTIONS;

    handleCellChange(event) {
        const fieldName = event.detail.fieldName;
        const recordId = event.detail.row.Id;
        const newValue = event.detail.value;
        const updatedData = [...this.data];
        const index = updatedData.findIndex(record => record.Id === recordId);
        if (index !== -1) {
            updatedData[index][fieldName] = newValue;
            this.data = updatedData;
        }
    }

    get picklistOptions() {
        return ['Option 1', 'Option 2', 'Option 3'];
    }    
}
