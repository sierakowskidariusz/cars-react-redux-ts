import {useAppSelector} from "../hooks";
import Car from "../model/car";

export const CarValue = () => {
    const totalCost = useAppSelector(
        state => state.cars.data
            .filter(car => car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase()))
            .reduce((sum: number, item: Car) => sum + item.cost, 0)
    );
    return <section className="section has-text-right">
        <div className="title is-4">Total Cost: ${totalCost}</div>
    </section>;
};
