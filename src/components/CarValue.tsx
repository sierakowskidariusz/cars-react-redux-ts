import {useAppSelector} from "../hooks";
import Car from "../model/car";

export const CarValue = () => {
    const totalCost = useAppSelector(
        state => state.cars.data
            .filter(car => car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase()))
            .reduce((sum: number, item: Car) => sum + item.cost, 0)
    );
    return <section className="section is-flex is-justify-content-flex-end">
        <span className="title is-size-4">Total Cost: ${totalCost}</span>
    </section>;
};
