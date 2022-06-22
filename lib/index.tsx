import React from 'react'
import ReactDOM from 'react-dom'
type Prop = {
  name: string
}
const App: React.FC<Prop> = (props) => {
  return <div>{props.name}</div>
}
export default App
