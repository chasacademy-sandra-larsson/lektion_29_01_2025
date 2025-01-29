import styles from "./ProfileCard.module.css"

type ProfileCardProps = {
    name: string;
    img: string;
    skills: string;
    city: string,
    born: number;
}


function ProfileCard({name, img, skills, city, born}: ProfileCardProps) {

     // logik
     const age = new Date().getFullYear() - born;

     
    return (
        <article className={styles.card}>
            <h1>Name {name}</h1>
            <img src={img}/>
            <p> Skills {skills}</p>
            <p> City {city}</p>
            <p> Age {age}</p>
        </article>
    )

}


export default ProfileCard;