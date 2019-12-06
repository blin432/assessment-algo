

  //   var startTime=[];
    //   var endTime=[];
    //   for(var i=0; i<objRosters.length;i++){
    //      startTime.push(objRosters[i].StartTime)
    //      endTime.push(objRosters[i].EndTime)
    //   }
    //   console.log(endTime);
    //   console.log(startTime)
    //   for(var j = 0; j<startTime.length;j++){
    //       for (var k=0; k <endTime.length;k++){
    //           if (startTime[j]>=endTime[k]){
    //               console.log('false')
    //           }
    //       }
    //   }




//Quesiton 1
/*In order to figure out how to determine if there is overlap between two times,
we need to compare the StartTime with the Endtime for Roster 1 and Roster 2.
For this exercise I am assuming different department does not impact time overlap and there is overlap if an 
employee 1 ends at the same time an employee 2 starts (ends at 9:00am -start at (9:00am)is overlap)*/

var objRoster1 = {
    Id: 1,
    Employee: 1,
    Department: 1,
    StartTime: 1508450400,
    EndTime: 1508479200,
  };
  var objRoster2 = {
      Id: 2,
      Employee: 2,
      Department: 1,
      StartTime: 1508479201,
      EndTime: 1508479360,
    };
  
  
  
  /*checked if the start time is not over end time for each employee and also if there is overlap 
  comparing start time with end time of two employees.  Unix timestamps are displayed in seconds so if a number is higher then the time is later 
  therefore we can compare times by seeing if end time of emplyee1 is greater than start time of employee2.*/
  function isOverlap(roster1,roster2){
      if (roster1.StartTime>roster1.EndTime ||roster2.StartTime<=roster1.EndTime ){
          console.log("There is overlap or time interval is wrong")
      }  else console.log("There is no overlap")
  }
  isOverlap(objRoster1,objRoster2);
  
  /*The instructions for this exercise was to compare 2 employees.
  If there was a larger data set to compare multiple employees */
  
  
   //Question 2
  /*from the example provided the role number provided correlates to the number of parents one user has
  therefore to find the subordinates we take find the role numbers that are higher than the specific users role number */
   
  //example data
  var objUser1 = {
      Id: 1, 
      Name: 'Adam Admin', 
      Role: 1
    };	
  var objUser2 = {
      Id: 2,
      Name: 'Emily Employee',
      Role: 4 
    };
  var objUser3 = {
      Id: 3, 
      Name: 'Sam Supervisor',
       Role: 3
    };	
  var objUser4 = {
      Id: 4,
      Name: 'Mary Manager',
      Role: 2
    };
  
  var roles = [objUser1,objUser2,objUser3,objUser4] 
  
  
  function subordinates(objUser){
      roleNumber= objUser.Role //determine the users Role number
      //If the role number is higher than the current user, they are a subordinate.Filter through and return the users that are subordnates.                                    
      var employees=roles.filter((word)=>word.Role>roleNumber); 
      console.log(employees);// returns all data for subordinates 
      var employeeArray=[]; //makes array of all subordinates
      for (var i=0; i <employees.length; i++){
       employeeArray.push(employees[i].Name);//push names to employeeArray
      }
      console.log(employeeArray);//prints out all names in an array
  
  }
  
  subordinates(objUser1);
  
  
  