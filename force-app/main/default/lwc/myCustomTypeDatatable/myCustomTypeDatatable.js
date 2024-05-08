//myCustomTypeDatatable.js
import LightningDatatable from "lightning/datatable";
import customNameTemplate from "./customName.html";
import customNumberTemplate from "./customNumber.html";

import picklistEditable from './picklistEditable.html';
import picklistNotEditable from './picklistNotEditable.html';

import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account.Industry";

export default class MyCustomTypeDatatable extends LightningDatatable {
  value = 'inProgress';

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
        editTemplate: picklistNotEditable,
        standardCellLayout: true,
        typeAttributes: ["name", "options","context","value",'label']
    },
  // Other types here
  };

  get options() {
    return [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'inProgress' },
        { label: 'Finished', value: 'finished' },
    ];
}
}