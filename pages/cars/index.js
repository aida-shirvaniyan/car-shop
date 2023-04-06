import CarsPage from "../../components/templates/CarsPage";
import carsData from "../../data/carsData";
import Filter from "../../components/modules/Filter";
import Category from "../../components/modules/Category";
const Cars = () => {
    return (
        <div>
            <Filter/>
            <Category/>
            <CarsPage data={carsData}/>
        </div>
    );
};

export default Cars;
