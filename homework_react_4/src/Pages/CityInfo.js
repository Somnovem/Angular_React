export default function CityInfo(props) {
    return (
        <div className='container card-text'>
            <h1 className='text-center'>{props.city.name}</h1>
            <hr/>
            <h3>Founded: <b>{props.city.founded}</b></h3>
            <h3>Area: <b>{props.city.area}</b></h3>
            <h3>Population: <b>{props.city.population}</b></h3>
            <h3>Density: <b>{props.city.density}</b></h3>
            <h3>Time Zone: <b>{props.city.timezone}</b></h3>
            <h3>Coordinates: <b>{props.city.coords}</b></h3>
        </div>
    );
}