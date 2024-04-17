import { api, LightningElement, track, wire } from 'lwc';
import getCases from '@salesforce/apex/LWCDemo.getCases';


export default class Helloworld extends LightningElement {
    
    @api
    inputname = 'World';
    dateval;


    updatename (event){
        this.inputname = event.target.value;
    }

    dateChange (event) {
        this.dateval = event.target.value;
    }

    @track
    obj = {firstName:'John',lastName: 'Doe'};
    
    //@wire(getCases) 
    cases;

    /*@wire(getCases) 
    wiredCases({ error, data }) {
        if (data) {
            //alert(data);
            //this.cases = data;
            //this.error = undefined;
        } else if (error) {
            alert(error);
            //this.error = error;
            //this.contacts = undefined;
        }
    }*/


   btnClick(event) {
       //this.inputname = 'All';
       this.obj.firstName = 'Bob';
       //alert(this.obj.firstName + '  ' +this.obj.lastName);


       getCases().then(result => {
            this.cases = result;
        })
        .catch(error => {
            this.error = error;
            alert(error);
        });
   }

}