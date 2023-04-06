import styles from "./CarsList.module.css"
import Cars from "../modules/Cars";
import Back from "../icons/Back";
import {useRouter} from "next/router";

const CarsList = ({data}) => {
    const router = useRouter();
    const BackHandler = () => {
        router.back();
    }
    return (
        <div className={styles.container}>
            <div onClick={BackHandler} className={styles.back}>
                <Back/>
                <p>Back</p>
            </div>
            <div className={styles.cards}>
                {data.map(cars => <Cars key={cars.id} {...cars}/>)}
            </div>
        </div>
    );
};

export default CarsList;
