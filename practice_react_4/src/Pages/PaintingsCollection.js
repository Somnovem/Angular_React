import { useParams } from 'react-router-dom';
export const PaintingsCollection = (props) => {
    const paintings = [
        {
            src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Frozittarapetti.com%2Fwp-content%2Fuploads%2F2020%2F03%2F20200307_193734.jpg%3Ffit%3D4128%252C2580%26ssl%3D1&f=1&nofb=1&ipt=18b6f236874e650f5c8328431201062b745ab14d39594f32fc9e7fb7d7323ef7&ipo=images',
            title: 'Primavera'
        },
        {
            src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2e%2Fd4%2Fd0%2F2ed4d0ab5c502d1dd86b1066564bc6c8.jpg&f=1&nofb=1&ipt=e27255705eb025aab5baffd22fcb8fc4ab02ee64747593d83ea4b9fbda3d8b29&ipo=images',
            title: 'The Mystical Nativity'
        },
        {
            src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F96%2Ff6%2Fd2%2F96f6d28414f67bbb673930051a0b26c2.png&f=1&nofb=1&ipt=92c86e7d62dfdfadfcd6834135fdd356ec8f8704fc938b6564afc33b8361000b&ipo=images',
            title: 'Adoration Of The Magi'
        },
        {
            src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frozittarapetti.com%2Fwp-content%2Fuploads%2F2020%2F03%2F20201215_184951-scaled.jpg%3Fx85782&f=1&nofb=1&ipt=727e43cd40da4056b1357d83aa288a0000581015dc77dd010f7acdcb5bcb10fb&ipo=images',
            title: 'Rozitta Rapetti'
        }
    ];
    const {id} = useParams();
    let painting = paintings[parseInt(id,10)]
    if (id === undefined || painting === undefined) {
        return (
            <div>
                <h1 style={{textAlign:'center',textDecoration:'underline'}}>Collection of other paintings</h1>
                <div className='image-container'>
                    {
                        paintings.map((item, index) => (
                            <div className='image-item' key={index}>
                                <img src={item.src} alt={item.title}/>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1 style={{textAlign:'center',textDecoration:'underline'}}>{painting.title}</h1>
                <img src={painting.src} alt={painting.title} style={{width:'100%',transform:'scale(0.8)'}}/>
            </div>
        );
    }
}