import {useEffect, useState} from "react";
import axios from "axios";

export default function FilmSearcher() {
    const API_KEY = '656d35bf';
    const API_URL = 'https://www.omdbapi.com/';

    const [data,setData] = useState({});
    const [title,setTitle] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL + `?t=${title}&apiKey=${API_KEY}`);
                console.dir(response);
                setData(response.data);
            }
            catch(error) {
                console.error(error);
            }
        }

        fetchData();
    },[title]);


    return (
        <div>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            {data && <div>
                <h1>{data.Title}</h1>
                <h4>Plot: {data.Plot}</h4>
            </div>}
        </div>
    );
}