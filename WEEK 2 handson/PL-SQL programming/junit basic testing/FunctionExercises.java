package org.example;

public class FunctionExercises {

        // 1. Max of 3 numbers
        public static int maxOfThree(int a, int b, int c) {
            return Math.max(a, Math.max(b, c));
        }

        // 2. Power of a number
        public static int power(int base, int exponent) {
            return (int) Math.pow(base, exponent);
        }

        // 3. Reverse of a number
        public static int reverseNumber(int number) {
            int reversed = 0;
            while (number != 0) {
                reversed = reversed * 10 + number % 10;
                number /= 10;
            }
            return reversed;
        }
    }


