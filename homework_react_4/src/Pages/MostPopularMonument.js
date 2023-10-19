export default function MostPopularMonument(props) {
    return (
        <div>
            <h1 className='text-center'>{props.city.mainMonumentName}</h1>
            <img src={props.city.mainMonumentUrl} alt="Main Monument" style={{width:'100%'}}/>
        </div>
    );
}