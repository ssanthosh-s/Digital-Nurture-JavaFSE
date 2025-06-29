package org.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    // Exercise 1: Mocking and Stubbing
    
    @Test
    public void testExternalApiStub() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        System.out.println("Result: " + result);  // 👈 This will print in the Run window

        assertEquals("Mock Data", result);
    }


    // Exercise 2: Verifying Interactions
    @Test
    public void testVerifyInteraction() {
        // 1. Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // 2. Use the service
        MyService service = new MyService(mockApi);
        service.fetchData();

        // 3. Verify that getData() was called once
        verify(mockApi).getData();
    }


}
