public class hello {
sadf
    public List<test__c> rec {get;set;}	
    
    public void init() {
        this.rec = [select id,name from test__c];
    }
    
}
