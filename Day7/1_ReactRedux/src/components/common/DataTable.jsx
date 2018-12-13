import React, { Component } from 'react';

class Th extends Component {
    render() {
        var thArr = new Array();
        for (const key in this.props.item) {
            thArr.push(key);
        }

        var ths = thArr.map(function (item, index) {
            return <th key={index}>{item.toUpperCase()}</th>
        });

        return (
            <tr>{ths}</tr>
        );
    }
}

class Td extends Component {
    render() {
        return <td>{this.props.data}</td>
    }
}

class Tr extends Component {
    render() {
        var tds = new Array();
        var item = this.props.item;
        for (var key in item) {
            var d = item[key];
            tds.push(<Td key={d + key} data={d} />);
        }

        return (
            <tr>{tds}</tr>
        );
    }
}

class TBody extends Component {
    render() {
        var trs = this.props.items.map(function (item, index) {
            return <Tr key={index} item={item} />
        });

        return (
            <tbody>{trs}</tbody>
        );
    }
}

class DataTable extends Component {
    render() {
        if (this.props.items) {
            var item = this.props.items[0];
            var ths = <Th item={item} />
            var tbody = <TBody items={this.props.items} />
        }
        return (
            <div>
                <h3 className="text-success">Datatable Component</h3>
                <table className="table">
                    <thead>
                        {ths}
                    </thead>
                    {tbody}
                </table>
            </div>
        );
    }
}

export default DataTable;