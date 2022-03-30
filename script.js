// let studentRecords = [
//           {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 

// studentRecords.forEach(n=>console.log(n.name.toUpperCase()))



// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

// for (let i = 0; i < studentRecords.length; i++) { 
//     let a=studentRecords[i].marks>50;
//     if(a){
//     console.log(studentRecords[i]);
//     }
//     }


// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

    // for (let j = 0; j < studentRecords.length; j++) { 
    //     let b=(studentRecords[j].marks>50) &&(studentRecords[j].id>120);
    //     if(b){
    //     console.log(studentRecords[j]);
    //     }
    //     }
    

 // Question 4: Consider the same scenario we have discussed above, 
    // but this time we would like to know the sum total of the marks of the students.

    // let sum=studentRecords.map(n=>n.marks).reduce((a,b)=>a+b,0);
    // console.log(sum);

    // Question 5: This time we want to get only the names of the 
    // students who scored more than 50 marks from the same dataset used above.

//  let result11=studentRecords.filter(n=>n.marks>50).map(n=>n.marks).reduce((acc,cur)=>acc+cur,0);
//  console.log(result11);


// Question 6: This time we are required to print the sum of marks of the students with id > 120.

//  let result12=studentRecords.filter(n=>n.id>120).map(n=>n.marks).reduce((acc,cur)=>acc+cur,0);
// console.log(result12);


//  let result12=studentRecords.filter(n=>n.marks>50).map(n=>n.marks).reduce((acc,b)=>acc+cur,0);

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

// let total=studentRecords.map((value)=>{
//     if(value.marks<50){
//         value.marks +=15;
//     }
//    return value;
//  })
// .filter((value)=>value.marks>50).reduce((acc,cur)=>acc+cur.marks ,0)
// console.log(total)


// Create 6 objects , each object will have name, class, roll no as properties.
//  Store these objects in an array of objects. 

// obj1={name:'akash',class:1,rank:1,subject:'math'}
// obj2={name:'kalpana',class:2,rank:2,subject:'math'}
// obj3={name:'suraksha',class:3,rank:1,subject:'math'}
// obj4={name:'harsha',class:4,rank:4,subject:'math'}
// obj5={name:'shannu',class:5,rank:3,subject:'math'}
// obj6={name:'rashmika',class:6,rank:6,subject:'math'}

// let students=[

//     {name:'akash',class:1,rank:1,subject:'math'},
//     {name:'kalpana',class:2,rank:2,subject:'math'},
//     {name:'suraksha',class:3,rank:1,subject:'math'},
//     {name:'harsha',class:4,rank:4,subject:'math'},
//     {name:'shannu',class:5,rank:3,subject:'math'},
//     {name:'rashmika',class:6,rank:6,subject:'math'},
// ]
// console.log(students)

