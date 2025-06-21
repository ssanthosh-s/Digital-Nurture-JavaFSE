public class Financial_forecasting {




       public static void main(String[] args) {
           double principalAmount = 10000;
           double annualGrowthRate = 0.08;
           int numberOfYears = 5;


           double estimatedValue = GrowthPrediction.predictFutureValue(principalAmount, annualGrowthRate, numberOfYears);
           System.out.println("Estimated Future Value (Recursive): " + estimatedValue);
       }
   }


   class GrowthPrediction {
       public static double predictFutureValue(double currentValue, double growthRate, int remainingYears) {
           if (remainingYears == 0) return currentValue;
           return predictFutureValue(currentValue, growthRate, remainingYears - 1) * (1 + growthRate);
       }
   }




