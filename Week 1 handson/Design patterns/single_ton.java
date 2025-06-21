class single_ton {
   private static single_ton instance;


   private single_ton(){
   }


   public static single_ton getInstance() {
       if(instance==null){
           instance=new single_ton();
       }
       return instance;
   }


   public  void statement(String s){
       System.out.println("instance created"+" "+s);
   }
}


public class Singleton {
   public static void main(String[] args) {
       single_ton log1= single_ton.getInstance();
       log1.statement("Person 1");
       single_ton log2= single_ton.getInstance();
       log2.statement("Person 2");
       if(log2==log1){
           System.out.println("Have equal instance");
       }
       else{
           System.out.println("Have no equal instance");
       }
   }
}
