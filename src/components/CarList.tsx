import {useAppSelector} from "../hooks";
import {useDispatch} from "react-redux";
import {removeCar} from "../store";

export const CarList = () => {
    const appState = useAppSelector(state => {
        return {
            cars: state.cars.data.filter(car => car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())),
            filter: state.form.name
        }
    });
    const dispatch = useDispatch();
    const handleCarRemove = (id:string|undefined) => {
        id && dispatch(removeCar(id));
    }

    return <section className="section">
        {appState.cars.map(car => {
            const className: string = appState.filter && car.name.toLowerCase().includes(appState.filter.toLowerCase())
                ? "has-text-weight-bold"
                : "";
            return <div key={car.id} className="box">
                <div className="columns is-vcentered">
                    <div className={`column is-size-4 ${className}`}>{car.name} - ${car.cost}</div>
                    <div className="column column-max-width-100">
                        <button className="button is-danger" onClick={() => handleCarRemove(car.id)}>Delete</button>
                    </div>
                </div>
            </div>
        })}
    </section>;
};
