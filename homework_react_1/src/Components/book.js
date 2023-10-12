import './book.css';
export default function Book(props) {
    return (
        <div className='container row wrapper'>
            <div className='col-8 d-flex justify-content-center'>
                <img src={props.book.coverUrl} alt="Cover"/>
            </div>
            <div className='col-4'>
                <h2>Title: <b>{props.book.title}</b></h2>
                <h3>Author: <b>{props.book.author}</b></h3>
                <h3>Genre: <b>{props.book.genre}</b></h3>
                <h3>Page Count: <b>{props.book.pageCount}</b></h3>
                <h4>Reviews:</h4>
                <div className='d-flex flex-column'>
                    { props.book.reviews.map((item) => (
                        <div className='review container row d-flex flex-column'>
                            <h2>{item.author}</h2>
                            <hr/>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}