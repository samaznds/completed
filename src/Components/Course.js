export const Course=(props)=>{
return(
<div style={{backgroundColor : props.course.iscompeleted ? "orange" : "white"}}>
<h1>{props.course.courseName}</h1>
<button onClick={()=> props.compeletedCourse (props.course.id)}>compeleted</button>
<button onClick={()=>props.deleteCourse(props.course.id)}>XX</button>
</div>
)}
