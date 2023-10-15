import {Component} from "react";

class RoundedImage extends Component {
    render() {
        const {imageUrl, imageTitle} = this.props;
        return <div style={{padding:'10px 20px'}}>
            <img src={imageUrl} alt={imageTitle} style={{borderRadius:'15px',width:'100%'}}/>
        </div>;
    }
}

export default RoundedImage;