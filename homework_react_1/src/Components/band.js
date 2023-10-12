import Carousel from 'react-bootstrap/Carousel';
export default function Band() {
    return (
        <div>
            <div className='container d-flex flex-column wrapper'>
                <h1>NF</h1>
                <hr/>
                <p className='mt-3'>
                    <b>Nathan John Feuerstein</b> (born March 30, 1991), known by his initials NF (stylized as ИF), is an American rapper,
                    singer, songwriter, and record producer.He has released two EPs, I'm Free (2012),and a self-titled EP in 2014
                    with Capitol CMG. His first major-label album, Mansion, was released on March 31, 2015. His second studio album,
                    Therapy Session, was released on April 22, 2016, and peaked at number 12 on the US Billboard 200.
                    His albums have earned several accolades, some of which include: the Gospel Music Association Dove Award for Rap/Hip Hop
                    Album of the Year (Therapy Session).
                </p>
                <h2 className='mt-4'>Albums released: </h2>
                <Carousel id='carousel'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-f1qMmZuaVz8%2FVo3Wy5pgXPI%2FAAAAAAAAAEc%2FuBpJka9dwz8%2Fw1200-h630-p-k-no-nu%2Fnfmansion.jpg&f=1&nofb=1&ipt=9a75d4fe83b2f08a3fa2b89a4b04207af59e1d46d0441a37cc1e9aefb235a957&ipo=images"
                            alt="Mansion cover"
                        />
                        <Carousel.Caption>
                            <h3>Mansion</h3>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-bA6U2kVt6mk%2FVxtvPQ26_KI%2FAAAAAAAABC0%2FX9lxK2iZV48dCRmSQsBq0mjeIfTFu9qiACK4B%2Fw1200-h630-p-k-no-nu%2Fnf-therapy-session-cover.jpg&f=1&nofb=1&ipt=743100b9e015b8c31f80719e9cf87095e70ed85d9b499590d889d0ba5bf22712&ipo=images"
                            alt="Therapy Session cover"
                        />
                        <Carousel.Caption>
                            <h3>Therapy Session</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.livenationentertainment.com%2Fwp-content%2Fuploads%2F2019%2F05%2FNF_Facebook_InvestorThumbnail_NewsFeedImage_1200x628_Static.jpg&f=1&nofb=1&ipt=afeb543576c3ce28898e1e3bc513b0c879c38fe2fd837918ef109a4ce028c58f&ipo=images"
                            alt="The Search cover"
                        />
                        <Carousel.Caption>
                            <h3>The Search</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftownsquare.media%2Fsite%2F812%2Ffiles%2F2018%2F03%2FNF-Perception-Album-Cover-feature.jpg%3Fw%3D980%26q%3D75&f=1&nofb=1&ipt=93efc34e006c8c9654030eddcbd37f3da92d43214c4486d2825fae9df0b76463&ipo=images"
                            alt="The Search cover"
                        />
                        <Carousel.Caption>
                            <h3>Perception</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}