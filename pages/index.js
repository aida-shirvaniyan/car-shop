import carsData from "../data/carsData";
import Filter from "../components/modules/Filter";
import Category from "../components/modules/Category";
import AllButton from "../components/modules/AllButton";
import CarsPage from "../components/templates/CarsPage";

export default function index() {
    const slicedData = carsData.slice(0, 3);
    return (
        <div>
            <Filter />
            <Category />
            <AllButton/>
            <CarsPage data={slicedData}/>
        </div>
    )
}
