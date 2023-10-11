export default function Biography(props) {
    return (
        <>
            <h2>ПІБ: {props.person.fullname}<b></b></h2>
            <h2>Контактний телефон: <b>{props.person.phone}</b></h2>
            <h2>Електронна адреса: <b>{props.person.email}</b></h2>
        </>
    );
}