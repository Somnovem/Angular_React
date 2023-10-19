export default function OtherMonuments(props) {
    const midpoint = Math.ceil(props.city.otherMonuments.length / 2);

    const firstHalf = props.city.otherMonuments.slice(0, midpoint);
    const secondHalf = props.city.otherMonuments.slice(midpoint);

    return (
        <div className="row">
            <div className="col-6">
                {
                    firstHalf.map((item,index) => (
                        <div className='image-item' key={index}>
                            <h4 className='text-center'>{item.name}</h4>
                            <img src={item.src} alt={item.name}/>
                        </div>
                    ))
                }
            </div>
            <div className="col-6">
                {
                    secondHalf.map((item,index) => (
                        <div className='image-item' key={index}>
                            <h4 className='text-center'>{item.name}</h4>
                            <img src={item.src} alt={item.name}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}