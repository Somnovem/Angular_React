import React, { Component } from "react";

class QuoteGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            quote: props.quote,
            author: props.author,
        };
    }

    getRandomQuote = () => {
        const quoteApiUrl = "https://api.quotable.io/random";
        this.setState({
            loading:true,
            quote: '123',
            author: '123',
        });
        fetch(quoteApiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.dir(data);
                this.setState({
                    loading:false,
                    quote: data.content,
                    author: data.author,
                });
            });
    };

    render() {
        return (
            <div className="container d-flex flex-column justify-content-center">
                <button className="btn btn-primary" onClick={this.getRandomQuote}>
                    Get Random Quote
                </button>
                {!this.state.loading && <div>
                    <h4 style={{ textAlign: "center" }}>{this.state.quote}</h4>
                    <h6 style={{ textAlign: "center" }}>
                        <i>{this.state.author}</i>
                    </h6>
                </div>}
            </div>
        );
    }
}

export default QuoteGenerator;
