import React from 'react';
import ReactDOM from 'react-dom';

import ComponentOne from './CompOne/ComponentOne';
import ComponentTwo from './CompTwo/ComponentTwo';

ReactDOM.render(<ComponentOne />,
    document.getElementById("container1"));

ReactDOM.render(<ComponentTwo />,
    document.getElementById("container2"));

ReactDOM.render(<div><ComponentOne /><ComponentTwo /></div>,
    document.getElementById("container3"));