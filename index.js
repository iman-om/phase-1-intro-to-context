// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employeeRecord, timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
    });
    return employeeRecord;
  }
  
  function createTimeOutEvent(employeeRecord, timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
    });
    return employeeRecord;
  }
  
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeIn = employeeRecord.timeInEvents.find((event) => event.date === date);
    const timeOut = employeeRecord.timeOutEvents.find(
      (event) => event.date === date
    );
  
    if (timeIn && timeOut) {
      return (timeOut.hour - timeIn.hour) / 100;
    }
  
    return 0;
  }
  
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hoursWorked * employeeRecord.payPerHour;
  }
  
  function allWagesFor(employeeRecord) {
    const datesWorked = employeeRecord.timeInEvents.map((event) => event.date);
    const totalWages = datesWorked.reduce(
      (total, date) => total + wagesEarnedOnDate(employeeRecord, date),
      0
    );
    return totalWages;
  }
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(
      (totalPayroll, employeeRecord) =>
        totalPayroll + allWagesFor(employeeRecord),
      0
    );
  }
  function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employeeRecord, timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
    });
    return employeeRecord;
  }
  
  function createTimeOutEvent(employeeRecord, timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
    });
    return employeeRecord;
  }
  
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeIn = employeeRecord.timeInEvents.find((event) => event.date === date);
    const timeOut = employeeRecord.timeOutEvents.find(
      (event) => event.date === date
    );
  
    if (timeIn && timeOut) {
      return (timeOut.hour - timeIn.hour) / 100;
    }
  
    return 0;
  }
  
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hoursWorked * employeeRecord.payPerHour;
  }
  
  function allWagesFor(employeeRecord) {
    const datesWorked = employeeRecord.timeInEvents.map((event) => event.date);
    const totalWages = datesWorked.reduce(
      (total, date) => total + wagesEarnedOnDate(employeeRecord, date),
      0
    );
    return totalWages;
  }
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(
      (totalPayroll, employeeRecord) =>
        totalPayroll + allWagesFor(employeeRecord),
      0
    );
  }
  
