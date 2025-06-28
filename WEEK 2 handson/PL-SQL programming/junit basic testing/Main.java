package org.example;

public class Main {
    public static void main(String[] args) {
        // Testing ControlStructureExercises
        System.out.println("Even/Odd for 5: " + ControlStructureExercises.evenOrOdd(5));
        System.out.println("Grade for 82: " + ControlStructureExercises.assignGrade(82));
        System.out.println("Day for 3: " + ControlStructureExercises.getDay(3));

        // Testing FunctionExercises
        System.out.println("Max of (10, 20, 30): " + FunctionExercises.maxOfThree(10, 20, 30));
        System.out.println("2 raised to 3: " + FunctionExercises.power(2, 3));
        System.out.println("Reverse of 1234: " + FunctionExercises.reverseNumber(1234));
    }
}
