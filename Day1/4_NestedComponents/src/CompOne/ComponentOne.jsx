import React, { Component } from 'react';

import styles from './ComponentOne.css';

class ComponentOne extends Component {
    render() {
        return (
            <div>
                <h1 className={`${styles.card} text-info`}>Hello from Component One</h1>
            </div>
        );
    }
}

export default ComponentOne;