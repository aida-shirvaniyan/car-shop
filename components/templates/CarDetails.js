import styles from "./CarDetails.module.css"
import Company from "../icons/Company";
import Model from "../icons/Model";
import Calender from "../icons/Calender";
import Road from "../icons/Road";
import Location from "../icons/Location";
import Money from "../icons/Money";

const CarDetails = (props) => {
    const { name, model, year, distance, location, price, image, description} = props

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="car"/>
            <h2 className={styles.header}>{name} {model}</h2>
            <div className={styles.details}>
                <div>
                    <Company/>
                    <p>Company</p>
                    <span>{name}</span>
                </div>
                <div>
                    <Model/>
                    <p>Model</p>
                    <span>{model}</span>
                </div>
                <div>
                    <Calender/>
                    <p>First registration</p>
                    <span>{year}</span>
                </div>
                <div>
                    <Road/>
                    <p>kms driven</p>
                    <span>{distance}</span>
                </div>
            </div>
            <div className={styles.details}>
                <div>
                    <Location/>
                    <p>Location</p>
                    <span>{location}</span>
                </div>
            </div>
            <div className={styles.details}>
                <h4 className={styles.descriptionTitle}>Extra Information</h4>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.price}>
                    <Money/>
                    <p>Price:</p>
                    <span>{price}$</span>
                </div>
            </div>
            <button className={styles.button}>Buy</button>
        </div>
    );
};

export default CarDetails;
