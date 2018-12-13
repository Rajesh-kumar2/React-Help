import React, { Component } from 'react';

import styles from './HelloComponent.css';

class HelloComponent extends Component {
    render() {
        return (
            <div>
                <h1 className="text-info">Hello World from React</h1>
                <h1 className={styles.card}>Hello World from React</h1>
                <h1 className={`${styles.card} text-info`}>Hello World from React</h1>
            </div>
        );
    }
}

export default HelloComponent;