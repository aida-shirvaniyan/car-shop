import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";
import {useRouter} from "next/router";

const categories = () => {
    const router = useRouter();
    const category = carsData.filter(item => item.category === router.query.category)
    return (
        <div>
            <CarsList data={category}/>
        </div>
    );
};

export default categories;
