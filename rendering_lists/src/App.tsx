import './App.css'
import ProfileCard from './ProfileCard'
 

const data = [
  {name: 'John Doe', img: 'https://via.placeholder.com/150', skills: 'React, JavaScript, CSS', city: 'New York', born: 1990},
  {name: 'Jane Doe', img: 'https://via.placeholder.com/150', skills: 'React, JavaScript, TypeScript', city: 'Stockholm', born: 1991},
  {name: 'John Smith', img: 'https://via.placeholder.com/150', skills: 'React, JavaScript, Python', city: 'Helsinki', born: 1992},
]



function App() {
 
  return (
  
    <main>
      {data.map((person) => {
        return(
        <ProfileCard 
          key={person.name} 
          name={person.name} 
          img={person.img} 
          skills={person.skills} 
          city={person.city} 
          born={person.born}/>
        )
      })}
            {/* <ProfileCard name="John Doe" img="https://via.placeholder.com/150" skills="React, JavaScript, CSS" city="New York" born={1990} /> */}

      </main>

  
  )
}

export default App
