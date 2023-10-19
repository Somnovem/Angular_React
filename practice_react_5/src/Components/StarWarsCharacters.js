import {useEffect, useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import {AccordionHeader, AccordionItem} from "react-bootstrap";
import AccordionBody from "react-bootstrap/AccordionBody";
export default function StarWarsCharacters() {
    const [data,setData] = useState(null);
    const [error,setError] = useState('');
    useEffect(() => {
        setError('');
        fetch('https://swapi.dev/api/people')
            .then((response) => response.json()).then((data)=>setData(data)).catch(error => setError(error));
    });
    return (
        <div style={{margin:'20px',padding:'20px'}}>
            {data != null && <Accordion>
                {
                    data.results.map((item,index) => (
                        <AccordionItem key={index} eventKey={`${index}`}>
                            <AccordionHeader><h2>Name: {item.name}</h2></AccordionHeader>
                            <AccordionBody>
                                <h5>Height: {item.height}</h5><br/>
                                <h5>Mass: {item.mass}</h5><br/>
                                <h5>Hair Color: {item.hair_color}</h5><br/>
                                <h5>Eye Color: {item.eye_color}</h5><br/>
                                <h5>Birthdate: {item.birth_year}</h5><br/>
                            </AccordionBody>
                        </AccordionItem>
                    ))
                }
            </Accordion>}
            {error && <h1 className='text-center'>{error}</h1>}
        </div>
    );
}