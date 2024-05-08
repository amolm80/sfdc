import { LightningElement, api } from 'lwc';

export default class PicklistEditCell extends LightningElement {
    @api fieldName;
    @api value;
    @api picklistOptions;

    isEditMode = false;

    connectedCallback() {
        this.isEditMode = true;
    }

    handleChange(event) {
        this.dispatchEvent(new CustomEvent('picklistchange', {
            detail: {
                value: event.detail.value
            }
        }));
    }
}
