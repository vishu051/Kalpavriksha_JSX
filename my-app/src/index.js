// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// import React from 'react';
// import ReactDOM from 'react-dom';
// import image1 from './logo512.png';
// import image2 from './logo192.png';
// const emp1={
//   "empId":100,
//   "empName":"Jack",
//   "age":30,
//   "salary":50000
// };
// const emp2={
//   "empId":101,
//   "empName":"Jane",
//   "age":24,
//   "salary":40000
// };
// function getEmployeeDetails(){
//   const element=(
//     <div>
//     <h3>Employee Details</h3>
//     <ol>
//     <li>
//       <div>
//       <span>Name: {emp1.empName}</span><br/>
//       <span>Id: {emp1.empId}</span><br/>
//       <span>Age: {emp1.age}</span><br/>
//       <span>Salary: {emp1.salary}</span><br/>
//       <img alt="Employee" src={image1} width="100px"/><br/>
//       <a href="#">Edit Details</a>
//       </div>    
//     </li>
//     <li>
//       <div>
//       <span>Name: {emp2.empName}</span><br/>
//       <span>Id: {emp2.empId}</span><br/>
//       <span>Age: {emp2.age}</span><br/>
//       <span>Salary: {emp2.salary}</span><br/>
//       <img alt="Employee" src={image2} width="100px"/><br/>
//       <a href="#">Edit Details</a>
//       </div>    
//     </li>
//     </ol>
//     </div>
//   ) 
//   return element;
// }
// ReactDOM.render(getEmployeeDetails(), document.getElementById('root'));

import React from "react"
import ReactDom from "react-dom"
const imgUrl1 = "./logo192.png"
const imgUrl2 = "./logo512.png"

const student1 = {
  name:"Vishu",
  id: 1 ,
  college:"skit" , 
  place: "hanumangarh" ,
};

const student2 = {
  name:"bhanu",
  id: 2,
  college:"BKBIET",
  place: "Jaipur"
};

function getDetails(){
  const stud = (
  <div>
    <h1>Employees Details</h1>
    <ol>
      <li>
        <div>
        <span>Student Name : {student1.name}</span><br/>
        <span>Student Id : {student1.id}</span><br/>
        <span>Student College : {student1.college}</span><br/>
        <span>Student Place : {student1.place}</span><br/>
       
        <img src = {imgUrl1} alt = "Student 1 Photo" width = "100px" /><br/>
        <a href = "#">Go to student Assignments</a>
        </div>
      </li>
        
      <li>
        <div>
        <span>Student Name : {student2.name}</span>
        <span>Student Id : {student2.id}</span>
        <span>Student College : {student2.college}</span>
        <span>Student Place : {student2.place}</span>
        <img src = {imgUrl2} alt = "Student 2 Photo" width = "100px" /><br/>
        <a href = "#">Go to student Assignments</a>
        </div>
      </li>

    </ol>

  </div>
  )
  return stud;
}

ReactDom.render(getDetails(),document.getElementById("root"));
