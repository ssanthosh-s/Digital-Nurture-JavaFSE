package org.example;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

    public class FunctionExercisesTest {

        @Test
        void testMaxOfThree() {
            assertEquals(30, FunctionExercises.maxOfThree(10, 20, 30));
            assertEquals(20, FunctionExercises.maxOfThree(20, 20, 10));
        }

        @Test
        void testPower() {
            assertEquals(8, FunctionExercises.power(2, 3));
            assertEquals(1, FunctionExercises.power(5, 0));
        }

        @Test
        void testReverseNumber() {
            assertEquals(321, FunctionExercises.reverseNumber(123));
            assertEquals(876, FunctionExercises.reverseNumber(678));
        }
    }


