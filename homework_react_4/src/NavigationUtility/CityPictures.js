export default function CityPictures(props) {
    const midpoint = Math.ceil(props.city.cityPictures.length / 2);
    const firstHalf = props.city.cityPictures.slice(0, midpoint);
    const secondHalf = props.city.cityPictures.slice(midpoint);

    return (
        <div className="row">
            <div className="col-6">
                {
                    firstHalf.map((item,index) => (
                        <div className='image-item' key={index}>
                            <img src={item} alt=""/>
                        </div>
                    ))
                }
            </div>
            <div className="col-6">
                {
                    secondHalf.map((item,index) => (
                        <div className='image-item' key={index}>
                            <img src={item} alt=""/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}