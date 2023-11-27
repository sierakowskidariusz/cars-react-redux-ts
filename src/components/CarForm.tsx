import {useDispatch} from "react-redux";
import {addCar, changeCost, changeName} from "../store";
import {ChangeEvent, KeyboardEvent} from "react";
import {useAppSelector} from "../hooks";

export const CarForm = () => {
    const dispatch = useDispatch();
    const formValue = useAppSelector(state => state.form);
    const handleNameChange = (event:ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(event.target.value))
    };
    const handleCostChange = (event:ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCost(Number(event.target.value)))
    };
    const doSubmit = () => {
        formValue.name && formValue.cost && dispatch(addCar({name: formValue.name, cost: formValue.cost}))
    }
    const handleSubmit = () => {
        doSubmit();
    };
    const handlePressEnter = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            doSubmit();
        }
    };
    return <section className="section">
        <div className="title is-3">Add Car</div>
        <form className="columns is-vcentered">
            <div className="column field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input is-expanded" type="text" value={formValue.name} onChange={handleNameChange} onKeyDown={handlePressEnter}/>
                </div>
            </div>
            <div className="column field">
                <label className="label">Cost</label>
                <div className="control">
                    <input className="input is-expanded" type="number" value={formValue.cost || ''} onChange={handleCostChange} onKeyDown={handlePressEnter}/>
                </div>
            </div>
            <div className="column control column-max-width-100">
                <button className="button is-primary" type="button" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>;
};
