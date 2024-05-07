import { useState } from "react";
import './App.css';
import { Course } from "./Components/Course";

//proje course completed//
/////////////////////////

function App() {
const [courseList, setCourseList]=useState([])
const [newCourse,setNewCourse]=useState("")

const handleChange=(event)=>{
setNewCourse(event.target.value)
}
const addCourse =()=>{
const course={
  id : courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
  courseName : newCourse ,
  iscompeleted:false,
}

  setCourseList([...courseList,course])

}
const deleteCourse=(courseId)=>{
 setCourseList( courseList.filter((course)=>
 courseId !== course.id ))
}
const compeletedCourse=(courseId)=>{
const newCourseList = courseList.map((course)=>{
 if(courseId === course.id) 
 return ({...course, iscompeleted: !course.iscompeleted})
 else return course
})
setCourseList(newCourseList)
}

  return (
    <div className="App">
<div className="add-course">
<input type="text" onChange={handleChange}></input>
<button onClick={addCourse}>add course</button>
</div>
<div className="list">
{courseList.map((course,index)=>{
  return(
<Course key={index} course={course}
 deleteCourse={deleteCourse}
 compeletedCourse={compeletedCourse}/>

  )
})}


</div>
    </div>
  );
}

export default App;

