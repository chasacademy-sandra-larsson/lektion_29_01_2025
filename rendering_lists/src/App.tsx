import './App.css'
import ProfileCard from './ProfileCard'


/// Man måste inte ane TS typerna här, men man kan om man vill för läsbarheten 
type Person = {
  name: string;
  img: string;
  skills: string;
  city: string;
  born: number
}

const data: Person[] = [
  {name: 'John Doe', img: 'https://via.placeholder.com/150', skills: 'React, JavaScript, CSS', city: 'New York', born: 1990},
  {name: 'Jane Doe', img: 'https://via.placeholder.com/150', skills: 'React, JavaScript, TypeScript', city: 'Stockholm', born: 1991},
  {name: 'John Smith', img: 'https://via.placeholder.com/150', skills: 'React, JavaScript, Python', city: 'Helsinki', born: 1992},
]

//const data: Person[] = []


function App() {
 
  return (
  
    <main>
      <ul>
        {/* Conditionell rendering med ternary operator */}
        {data.length > 0 ? data.map((person : Person) => {
          return(
            <li>
          <ProfileCard 
            key={person.name} 
            name={person.name} 
            img={person.img} 
            skills={person.skills} 
            city={person.city} 
            born={person.born}/>
            </li>
          ) 
        }): <p>No profiles to display</p>
      }
          {/* Conditionell rendering med short circuit &&  */}
        {/* {data.length > 0 && data.map((person : Person) => {
          return(
            <li>
          <ProfileCard 
            key={person.name} 
            name={person.name} 
            img={person.img} 
            skills={person.skills} 
            city={person.city} 
            born={person.born}/>
            </li>
          ) 
        }) 
      }*/}
      </ul>
            {/* <ProfileCard name="John Doe" img="https://via.placeholder.com/150" skills="React, JavaScript, CSS" city="New York" born={1990} /> */}

      </main>

  
  )
}

export default App
