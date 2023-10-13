export default function Pet(props) {
    return (
        <div className='container row wrapper'>
            <div className='col-8'>
                <h1>Name: <b>{props.pet.name}</b></h1>
                <h2>Age: <b>{props.pet.age}</b></h2>
                <h2>Sex: <b>{props.pet.sex}</b></h2>
                <h2>Weight: <b>{props.pet.weight}</b></h2>
            </div>
            <div className='col-4'>
                <img src={props.pet.photoUrl}
                     alt="Pet photo"/>
            </div>
        </div>
    );
}