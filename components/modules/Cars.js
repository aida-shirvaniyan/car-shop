import Location from "../icons/Location";
import styles from "./Cars.module.css"
import Link from "next/link";
const Cars = (props) => {
    const {id , name , model , year , distance , location , price , image} = props
    return (
       <Link href={`/cars/${id}`}>
           <div className={styles.container}>
               <img className={styles.image} src={image} alt="car"/>
               <h4 className={styles.title}>{name} {model}</h4>
               <p className={styles.detail}>{year} . {distance}km</p>
               <div className={styles.footer}>
                   <p className={styles.price}>$ {price}</p>
                   <div className={styles.location}>
                       <p>{location}</p>
                       <Location/>
                   </div>
               </div>
           </div>
       </Link>
    );
};

export default Cars;
