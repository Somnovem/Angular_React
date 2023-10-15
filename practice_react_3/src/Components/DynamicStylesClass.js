import {Component} from "react";

class DynamicStylesClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:'orange'
        };
    }

    handleColorChange = (color) => {
        this.setState({ color: color });
    }

    render() {
        return (
            <div style={{margin:'10px',padding:'10px'}}>
                <div className='container d-flex' style={{gap:'20px'}}>
                    <button className='btn btn-primary'  onClick={() => {this.handleColorChange('blue')}}>Blue</button>
                    <button className='btn btn-danger'  onClick={() => {this.handleColorChange('red')}}>Red</button>
                    <button className='btn btn-success'  onClick={() => {this.handleColorChange('green')}}>Green</button>
                </div>
                <p style={{padding:'10px',fontWeight:'bold',color:'white',textTransform:'capitalize',fontSize:'1.1rem',width:'fit-content',borderRadius:'10px',margin:'10px auto',backgroundColor:this.state.color}}>
                    {this.state.color}
                </p>
            </div>
        );
    }
}

export default DynamicStylesClass;