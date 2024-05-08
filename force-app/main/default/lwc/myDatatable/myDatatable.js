/* myDatatable.js */
import { LightningElement, wire, track } from "lwc";
import getAccountList from "@salesforce/apex/AccountController.getAccountList";

const COLS = [
  {
    label: "Account Name",
    type: "customName",
    typeAttributes: {
      accountName: { fieldName: "Name" },
    },
  },
  {
    label: "Industry",
    fieldName: "Industry",
    cellAttributes: {
      class: { fieldName: "industryColor" },
    },
  },
  {
    label: "Employees",
    type: "customNumber",
    fieldName: "NumberOfEmployees",
    typeAttributes: {
      status: { fieldName: "status" },
    },
    cellAttributes: {
      class: "slds-theme_alert-texture",
    },
  },
  {
    label: "Industry picklist",
    type: "picklistColumn",
    fieldName: "Industry",
    editable: true,
    typeAttributes: {
      value: { fieldName: "Industry" },
      label : "Industry picklist",
      options: "$picklistOptions",
      context: { fieldName: "Id" },
    }
  },
];

export default class MyDatatable extends LightningElement {
  columns = COLS;
  @track accounts = [];
  @track picklistOptions = [ { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Other', value: 'Other' }];

  @wire(getAccountList)
  wiredAccounts({ error, data }) {
    if (error) {
      // Handle error
    } else if (data) {
      // Process record data
      this.accounts = data.map((record) => {
        let industryColor = record.Industry === "Energy" ? "slds-text-color_success" : "";
        let status = record.NumberOfEmployees > 10000 ? "utility:ribbon" : "";
        let picklistOptions = this.picklistOptions;
        return { ...record, industryColor: industryColor, status: status };
      });
      console.log('accounts = ',this.accounts);
    }
  }
}