//myCustomTypeDatatable.js
import LightningDatatable from "lightning/datatable";
import customNameTemplate from "./customName.html";
import customNumberTemplate from "./customNumber.html";

export default class MyCustomTypeDatatable extends LightningDatatable {
  static customTypes = {
    customName: {
      template: customNameTemplate,
      standardCellLayout: true,
      typeAttributes: ["accountName"],
    },
    customNumber: {
      template: customNumberTemplate,
      standardCellLayout: false,
      typeAttributes: ["status"],
    },
    picklistColumn: {
        template: picklistNotEditable,
        editTemplate: picklistEditable,
        standardCellLayout: true,
        typeAttributes: [ 'options','context','value']
    }    
    // Other types here
  };
}