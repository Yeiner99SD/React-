


const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = () => {
  const tareas =[
    {part1 : 'Fundamentals of React', exercises1: 10},
    {part2: 'Using props to pass data', exercises2: 7},
    {part3: 'State of a component', exercises3: 14}
  ]
   return(
    <div>
      <p>{tareas[0].part1} = {tareas[0].exercises1}</p>
      <p>{tareas[1].part2} = {tareas[1].exercises2}</p>
      <p>{tareas[2].part3} = {tareas[2].exercises3}</p>
    </div>
   )
}

const Content = (props) => {
  console.log(props)
  
  
  return(
    <div>
      <Part />
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
 
    const exercises2 = 7
 
    const exercises3 = 14
  return(
    <div>
      <p> Total of exercises : {exercises1 + exercises2 +exercises3}</p>
    </div>
  )
}



const App = () => {

 
  const course = 'Half Stack application development'
  
 

  return (
    <>
      <Header course={course}/>
      <Content />
      <Total/>
    </>
  )
}


export default App