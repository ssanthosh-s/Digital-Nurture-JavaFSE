CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
); 


INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (1, 'John Doe', TO_DATE('1985-05-15', 'YYYY-MM-DD'), 1000, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (2, 'Jane Smith', TO_DATE('1990-07-20', 'YYYY-MM-DD'), 1500, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1, 1, 'Savings', 1000, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (2, 2, 'Checking', 1500, SYSDATE);

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (1, 1, SYSDATE, 200, 'Deposit');

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (2, 2, SYSDATE, 300, 'Withdrawal');

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (1, 1, 5000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (1, 'Alice Johnson', 'Manager', 70000, 'HR', TO_DATE('2015-06-15', 'YYYY-MM-DD'));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (2, 'Bob Brown', 'Developer', 60000, 'IT', TO_DATE('2017-03-20', 'YYYY-MM-DD'));

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (3, 'Ravi Kumar', TO_DATE('1980-01-01', 'YYYY-MM-DD'), 12000, SYSDATE);


INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (2, 2, 3000, 6, SYSDATE, SYSDATE + 10);

-- Create a new Savings account with balance
INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (3, 1, 'Savings', 2000, SYSDATE);

-- Add an IT employee for testing bonus
INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (3, 'Test Dev', 'Developer', 50000, 'IT', SYSDATE);




--scenario 1 

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
    CURSOR cur_savings IS
        SELECT AccountID, Balance
        FROM Accounts
        WHERE AccountType = 'Savings';

    v_count NUMBER := 0;
    v_interest NUMBER;
BEGIN
    FOR acc_rec IN cur_savings LOOP
        v_interest := acc_rec.Balance * 0.01;

        UPDATE Accounts
        SET Balance = Balance + v_interest,
            LastModified = SYSDATE
        WHERE AccountID = acc_rec.AccountID;

        v_count := v_count + 1;

        DBMS_OUTPUT.PUT_LINE('Interest of ' || TO_CHAR(v_interest, '9990.00') || 
                             ' applied to Account ID: ' || acc_rec.AccountID);
    END LOOP;

    IF v_count = 0 THEN
        DBMS_OUTPUT.PUT_LINE('No savings accounts found.');
    END IF;

    COMMIT;
END;
/
  
SET SERVEROUTPUT ON;

BEGIN
    ProcessMonthlyInterest;
END;
/



--scenario 2 



CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus_pct  IN NUMBER
) IS
    v_count NUMBER := 0;
    v_new_salary NUMBER;
BEGIN

    FOR emp_rec IN (
        SELECT EmployeeID, Name, Salary
        FROM Employees
        WHERE Department = p_department
    ) LOOP
        v_new_salary := emp_rec.Salary + (emp_rec.Salary * p_bonus_pct / 100);

        UPDATE Employees
        SET Salary = v_new_salary
        WHERE EmployeeID = emp_rec.EmployeeID;

        v_count := v_count + 1;
        DBMS_OUTPUT.PUT_LINE('Bonus applied to ' || emp_rec.Name || 
                             '. New Salary: ' || v_new_salary);
    END LOOP;

    IF v_count = 0 THEN
        DBMS_OUTPUT.PUT_LINE('No employees found in department: ' || p_department);
    END IF;

    COMMIT;
END;
/


SET SERVEROUTPUT ON;

BEGIN
    UpdateEmployeeBonus('IT', 10); 
END;
/

--scenario 3



CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER
) IS
    v_source_balance NUMBER;
BEGIN

    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_from_account
    FOR UPDATE;

    IF v_source_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
    END IF;


    UPDATE Accounts
    SET Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_from_account;


    UPDATE Accounts
    SET Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_to_account;

 DBMS_OUTPUT.PUT_LINE('Transferred ' || p_amount || 
                     ' from Account ID ' || p_from_account || 
                     ' to Account ID ' || p_to_account);

    COMMIT;
END;
/


SET SERVEROUTPUT ON;

BEGIN
    TransferFunds(1, 2, 500); 
END;
/


