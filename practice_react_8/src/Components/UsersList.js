import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/usersList/actions";
import {useEffect} from "react";

export const UsersList = () => {
    const usersData = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = usersData.users;

    return (
       <ul>
           {
               users.map((item) => (
                   <li key={item.id}>
                       <p>Name: {item.name}</p>
                       <p>Email: {item.email}</p>
                       <hr/>
                   </li>
               ))
           }
       </ul>
    );
}