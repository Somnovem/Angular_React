export default function Biography(props) {
return (
    <div className='container row wrapper'>
        <div className='col-8'>
            <h1>Fullname: <b>{props.person.fullname}</b></h1>
            <h2>Phone: <b>{props.person.phone}</b></h2>
            <h2>Email: <b>{props.person.email}</b></h2>
            <h2>Living in: <b>{props.person.location}</b></h2>
            <h2>Experience: <b>{props.person.exp}</b></h2>
            <h2>Skills: <b>{props.person.skills}</b></h2>
        </div>
        <div className='col-4'>
            <img src={props.person.selfieUrl}
                 alt="Selfie"/>
        </div>
    </div>
);
}