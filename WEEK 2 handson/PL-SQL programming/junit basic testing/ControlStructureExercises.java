package org.example;

public class ControlStructureExercises {


        // 1. Even or Odd
        public static String evenOrOdd(int number) {
            return (number % 2 == 0) ? "Even" : "Odd";
        }

        // 2. Grade Assignment using if-else
        public static String assignGrade(int marks) {
            if (marks >= 90) return "A";
            else if (marks >= 75) return "B";
            else if (marks >= 60) return "C";
            else if (marks >= 40) return "D";
            else return "F";
        }

    public static String getDay(int dayNumber) {
        switch (dayNumber) {
            case 1: return "Sunday";
            case 2: return "Monday";
            case 3: return "Tuesday";
            case 4: return "Wednesday";
            case 5: return "Thursday";
            case 6: return "Friday";
            case 7: return "Saturday";
            default: return "Invalid day";
        }
    }

    }





