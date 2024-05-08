import { LightningElement, api } from 'lwc';

export default class CustomDataType extends LightningElement {
    @api name;
    @api label;
    @api value;
    @api options;

    handleChange(event) {
        this.dispatchEvent(new CustomEvent('picklistchange', {
            detail: {
                value: event.detail.value
            }
        }));
    }
}
