import React, { Component } from 'react';

class AboutComponent extends Component {
    render() {
        return (
            <div>
                <h1>About Component</h1>
                <h4 className="text-info">This is a simple, React Routing Application</h4>
            </div>
        );
    }

    // componentWillUnmount(){
    //     console.log("About Unmounted...");
    // }
}

export default AboutComponent;