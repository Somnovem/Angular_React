const {Component} = require("react");

class PersonalPage extends Component {

    default_state = null;

    constructor(props) {
        super(props);
        this.default_state = this.props.person;
        this.state = {
            fullname: this.props.person.fullname,
            phone: this.props.person.phone,
            email: this.props.person.email,
            location: this.props.person.location,
            exp: this.props.person.exp,
            skills: this.props.person.skills,
            selfieUrl : this.props.person.selfieUrl
        }
    }

    handleFullnameChange = (event) => {
        this.setState({ fullname: event.target.value });
    }

    handlePhoneChange = (event) => {
        this.setState({ fullname: event.target.value });
    }

    handleEmailChange = (event) => {
        this.setState({ fullname: event.target.value });
    }

    handleLocationChange = (event) => {
        this.setState({ fullname: event.target.value });
    }

    handleExpChange = (event) => {
        this.setState({ fullname: event.target.value });
    }

    handleSkillsChange = (event) => {
        this.setState({ fullname: event.target.value });
    }

    restoreDefault = () => this.setState(this.default_state);
    render() {
        return (
            <div className='container row wrapper'>
                <div className='col-8'>
                    <h1>Fullname: <b>{this.state.fullname}</b></h1>
                    <h2>Phone: <b>{this.state.phone}</b></h2>
                    <h2>Email: <b>{this.state.email}</b></h2>
                    <h2>Living in: <b>{this.state.location}</b></h2>
                    <h2>Experience: <b>{this.state.exp}</b></h2>
                    <h2>Skills: <b>{this.state.skills}</b></h2>
                    <hr/>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" value={this.state.fullname} onChange={this.handleFullnameChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="phone" placeholder="Enter your phone" value={this.state.phone} onChange={this.handlePhoneChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleEmailChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="location" placeholder="Enter your location" value={this.state.location} onChange={this.handleLocationChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exp">Experience:</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="exp" placeholder="Enter your name" value={this.state.exp} onChange={this.handleExpChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="skills">Skills:</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="skills" placeholder="Enter your name" value={this.state.skills} onChange={this.handleSkillsChange}/>
                        </div>
                    </div>
                    <button onClick={this.restoreDefault} className='btn btn-danger' style={{margin:'10px'}}>Restore Default</button>
                </div>
                <div className='col-4'>
                    <img src={this.state.selfieUrl} alt="Selfie" style={{width:'100%'}}/>
                </div>
            </div>
        );
    }
}

export default PersonalPage;