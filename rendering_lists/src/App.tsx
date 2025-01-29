import './App.css'
import ProfileCard from './ProfileCard'
 


function App() {
 
  return (
    <>
      <ProfileCard name="John Doe" img="https://via.placeholder.com/150" skills="React, JavaScript, CSS" city="New York" born={1990} />
    </>
  )
}

export default App
