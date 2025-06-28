package org.example;



import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

    public class ControlStructureExercisesTest {

        @Test
        void testEvenOrOdd() {
            assertEquals("Even", ControlStructureExercises.evenOrOdd(2));
            assertEquals("Odd", ControlStructureExercises.evenOrOdd(7));
        }

        @Test
        void testAssignGrade() {
            assertEquals("A", ControlStructureExercises.assignGrade(95));
            assertEquals("B", ControlStructureExercises.assignGrade(80));
            assertEquals("C", ControlStructureExercises.assignGrade(65));
            assertEquals("D", ControlStructureExercises.assignGrade(45));
            assertEquals("F", ControlStructureExercises.assignGrade(20));
        }

        @Test
        void testGetDay() {
            assertEquals("Sunday", ControlStructureExercises.getDay(1));
            assertEquals("Wednesday", ControlStructureExercises.getDay(4));
            assertEquals("Invalid day", ControlStructureExercises.getDay(8));
        }
    }

