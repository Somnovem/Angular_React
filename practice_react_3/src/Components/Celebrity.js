import {Component} from "react";
import RoundedImage from "./RoundedImage";

class Celebrity extends Component {
    render() {
      const {name,birthday,biography,imageUrl} = this.props;
      return <div className='container row'>
          <div className='col-9'>
                <h1>{name}</h1>
                <h3>Birthday: {birthday}</h3>
                <p><b>Biography: </b>{biography}</p>
          </div>
          <div className='col-3'>
              <RoundedImage imageUrl={imageUrl} imageTitle={name} />
          </div>
      </div>
    };
}

export default Celebrity;