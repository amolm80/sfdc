import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    childNum = 0;
    btnclick (event){
        this.dispatchEvent(
            new CustomEvent("childevent",{ detail : this.childNum, bubbles : true, composed: true})
        );
    }

    //new CustomEvent("childevent",{ detail : this.childNum, bubbles : true}) 

    inputUpdate(event) {
        this.childNum = event.target.value;
    }

    @api
    handleReset() {
        this.childNum = 0;
    }




    /*bubbles = false;
    composed = false;
    value = ['Bubbles'];
    get options() {
        return [
            { label: 'Bubbles', value: "Bubbles" },
            { label: 'Composed', value: "Composed" },
        ];
    }
//new CustomEvent("childevent",{ detail : this.childNum,  bubbles : this.bubbles, composed : this.composed})
    handleChange(e) {
        this.value = e.detail.value;
        if(this.value.includes('Bubbles')) 
            this.bubbles = true; 
        else 
            this.bubbles = false;
        
        if(this.value.includes('Composed')) 
            this.composed = true; 
        else 
            this.composed = false;   
    }*/
}