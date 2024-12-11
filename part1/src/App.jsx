


import './App.css'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name} tienes {props.age}</p>
    </div>
  )
}

const App = () => {
  const friends = [
    {name: 'Peter' , age :4},
    {name: 'Juan' , age :1},
  ]
  const names =['Jose', 'Luis']
  console.log(friends)
  return (
    <>
    
      <h1>Holaa</h1>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{names}</p>
      <Hello name= "Deisy" age={23 + 10}/>
    </>
  )
}

export default App