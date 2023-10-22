import {useEffect, useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import {AccordionHeader, AccordionItem} from "react-bootstrap";
import AccordionBody from "react-bootstrap/AccordionBody";

import './starwars.css'

export default function StarWarsCharacters() {
    const [data,setData] = useState(null);
    const [error,setError] = useState('');
    const API_URL = 'https://swapi.dev/api/people';
    useEffect(() => {
        setError('');
        fetch(API_URL)
            .then((response) => response.json())
            .then((data)=> setData(data.results))
            .catch(error => setError(error));
    },[]);

    return (
        <div style={{margin:'20px',padding:'20px'}}>
            {data != null && <Accordion defaultActiveKey={'0'} id='accordion-wrapper'>
                {
                    data.map((item,index) => (
                        <AccordionItem key={index} eventKey={`${index}`} className='accordion-item'>
                            <AccordionHeader className='accordion-header'><h2>{item.name}</h2></AccordionHeader>
                            <AccordionBody className='container row accordion-body'>
                                <div className='col-8' style={{paddingLeft:'30px'}}>
                                    <h5>Height: {item.height}</h5><br/>
                                    <h5>Mass: {item.mass}</h5><br/>
                                    <h5>Hair Color: {item.hair_color}</h5><br/>
                                    <h5>Eye Color: {item.eye_color}</h5><br/>
                                    <h5>Birthdate: {item.birth_year}</h5><br/>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                    ))
                }
            </Accordion>}
            {error && <h1 className='text-center'>{error}</h1>}
        </div>
    );
}