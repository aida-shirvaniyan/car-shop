import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";
import {useRouter} from "next/router";

const Filter = () => {
    const router = useRouter();
    const [min , max] = router.query.filter || [];

    const filtered = carsData.filter((item) => item.price > min && item.price < max)
    return (
        <div>
            <CarsList data={filtered} />)
        </div>
    );
};

export default Filter;
