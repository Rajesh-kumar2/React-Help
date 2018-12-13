import React, { Component } from 'react';

class ListComponent extends Component {
    render() {
        var listItems = this.props.items.map((item, index, arr) => {
            return <li key={index} className="list-group-item">{item.name}</li>;
        });

        return (
            <div>
                <ul className="list-group">
                    {listItems}
                </ul>
            </div>
        );
    }
}

let employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ramakant" },
    { id: 4, name: "Subodh" },
    { id: 5, name: "Sandeep" },
];

class ListRoot extends Component {
    render() {
        return (
            <div>
                <ListComponent items={employees} />
            </div>
        );
    }
}

export default ListRoot;