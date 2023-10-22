import {useEffect, useState} from "react";
import axios from "axios";

export default function NewsFetcher() {
    const API_KEY = 'dc0d34a21d584014811463bd5ed5a39a';
    const API_URL = 'https://newsapi.org/v2/everything';
    const [data,setData] = useState([]);
    const [query,setQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL + `?q=${query}&apiKey=${API_KEY}`);
                console.log(response);
                setData(response.data.articles);
            }
            catch(error) {
                console.error(error);
            }
        }

        fetchData();
    },[query]);

    return (
        <div >
            <input type="text" value={query} onChange={(event) => setQuery(event.target.value)}/>
            {data && <div>
                {
                    data.map((item,index) => (
                        <div key={index}>
                            <h3>{item.title}</h3>
                        </div>
                    ))
                }
            </div>}
        </div>
    );
}