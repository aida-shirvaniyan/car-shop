import Cars from "../modules/Cars";
import styles from "./CarsPage.module.css"
import Category from "../modules/Category";
import Filter from "../modules/Filter";

const CarsPage = ({data}) => {
    return (
        <>
            <div className={styles.container}>
                {data.map(cars => <Cars key={cars.id} {...cars}/>)}
            </div>
        </>
    );
};

export default CarsPage;
