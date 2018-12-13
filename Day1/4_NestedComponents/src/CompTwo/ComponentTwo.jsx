import React, { Component } from 'react';

import styles from './ComponentTwo.css';

class ComponentTwo extends Component {
    render() {
        return (
            <div>
                <h1 className={`${styles.card} text-success`}>Hello from Component Two</h1>
            </div>
        );
    }
}

export default ComponentTwo;