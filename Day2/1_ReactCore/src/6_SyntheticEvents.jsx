import React, { Component } from 'react';

class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.click2 = this.click2.bind(this);
    }

    click1(e) {
        console.log("this - ", this);
        console.log("Event - ", e);
        e.preventDefault();
    }

    click2(e) {
        console.log("this - ", this);
        console.log("Event - ", e);
        e.preventDefault();
    }

    click3(name, e) {
        console.log("this - ", this);
        console.log("Event - ", e);
        console.log("name - ", name);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <a href="http://www.google.com" onClick={this.click1.bind(this)}>Click One</a>
                <br />
                <a href="http://www.google.com" onClick={this.click2}>Click Two</a>
                <br />
                <a href="http://www.google.com" onClick={this.click3.bind(this, "Manish")}>Click Three</a>
                <br />
                <a href="http://www.google.com" onClick={function (e) {
                    console.log("this - ", this);
                    console.log("Event - ", e);
                    e.preventDefault();
                }}>Click Four</a>
                <br />
                <a href="http://www.google.com" onClick={(function (e) {
                    console.log("this - ", this);
                    console.log("Event - ", e);
                    e.preventDefault();
                }).bind(this)}>Click Five</a>
                <br />
                <a href="http://www.google.com" onClick={(e) => {
                    console.log("this - ", this);
                    console.log("Event - ", e);
                    e.preventDefault();
                }}>Click Six</a>
                <br />
                <a href="http://www.google.com" onClick={(e) => { this.click3("Abhijeet", e); }}>Click Seven</a>
            </div>
        );
    }
}

export default EventComponent;