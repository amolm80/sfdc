@iStest
public class helloTest {

    @istest
    public static void test() {
        hello h = new hello();
        h.init();       
        List<test__c> list1 = [select id,name from test__c];
        system.assertEquals(list1, h.rec);
        
    }
    
}