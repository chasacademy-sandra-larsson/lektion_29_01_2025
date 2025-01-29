import './App.css'
import Header from "./components/Header"
import Button from "./components/Button"

function App() {

  const links = ["test1", "test2", "test3"]

  return (
    <>
      <Header logo="a logo" title="Best header ever" links={links}/>
      <Button className='primary'>Click me!!!</Button>
    </>
  )
}

export default App
