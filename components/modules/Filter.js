import styles from "./Filter.module.css"
import {useState} from 'react';
import {useRouter} from "next/router";

const Filter = () => {
    const router = useRouter();

    const [min, setMin] = useState();
    const [max, setMax] = useState();

    const filterHandler = () => {
        if(min && max){
            router.push(`/filtered/${min}/${max}`)
        }else {
            alert("Please Enter minimum and maximum price!");
        }
    }
    return (
        <div className={styles.container}>
            <div>
                <input type="text" placeholder="Enter min price" value={min} onChange={(e) => setMin(e.target.value)}/>
                <input type="text" placeholder="Enter max price" value={max} onChange={(e) => setMax(e.target.value)}/>
            </div>
            <button onClick={filterHandler}>Search</button>
        </div>
    );
};

export default Filter;
