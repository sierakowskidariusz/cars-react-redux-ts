import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks";
import {ChangeEvent} from "react";
import {changeSearchTerm} from "../store";

export const CarSearch = () => {
    const dispatch = useDispatch();
    const searchValue = useAppSelector(state => state.cars.searchTerm);
    const handleSearchTermChange = (event:ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchTerm(event.target.value))
    };
    return <nav className="level">
        <div className="level-left">
            <div className="level-item">
                <h3 className="title">My Cars</h3>
            </div>
        </div>
        <div className="level-right">
            <div className="level-item">
                <div className="field is-horizontal is-flex-direction-row is-align-items-center">
                    <div className="field-label">
                        <label className="label">Search</label>
                    </div>
                    <div className="field-body">
                        <div className="field is-expanded">
                            <div className="control">
                                <input className="input" type="text" value={searchValue} onChange={handleSearchTermChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>;
};
