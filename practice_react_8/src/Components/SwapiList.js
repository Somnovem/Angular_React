import {useDispatch, useSelector} from "react-redux";
import {fetchPeople} from "../redux/swapi/actions";
import {useEffect} from "react";

export const SwapiList = () => {
    const usersData = useSelector((state) => state);
    console.log(usersData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch]);

    const people = usersData.results;

    return (
        <ul>
            {
                people.map((item) => (
                    <li key={item.id}>
                        <p>Name: {item.name}</p>
                        <p>Age: {item.age}</p>
                        <hr/>
                    </li>
                ))
            }
        </ul>
    );
}