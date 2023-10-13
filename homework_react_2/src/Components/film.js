export default function Film(props) {
    return (
        <div className='container row wrapper'>
            <div className='col-8'>
                <h1>{props.film.title}</h1>
                <hr style={{width:'80%',border:'none','height':'3px',margin:'20px 0',backgroundColor:'darkgray'}}/>
                <h2>Director: <b>{props.film.director}</b></h2>
                <h2>Released: <b>{props.film.release}</b></h2>
                <h2>Studios: <b>{props.film.studio}</b></h2>
                <h3 style={{marginTop:'20px'}}>Plot</h3>
                <hr/>
                <p>{props.film.plot}</p>
            </div>
            <div className='col-4'>
                <img src={props.film.posterUrl}
                     alt="Movie poster"/>
            </div>
        </div>
    );
}