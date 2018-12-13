import React, { Component } from 'react';
import photosClient from './api/photosClient';
import TextInput from './common/TextInput';

// class Form extends Component {
//     handleSubmit(e) {
//         e.preventDefault();
//         var idInput = this.refs.pId.value;
//         this.props.addCard(idInput);
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
//                 <div className="form-group">
//                     <div className="col-md-4">
//                         <input type="text" className="form-control" placeholder="Enter Id" ref="pId" />
//                     </div>
//                     <div className="col-md-2">
//                         <button className="btn btn-primary btn-block">Add</button>
//                     </div>
//                 </div>
//             </form>
//         );
//     }
// }

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { picId: 0 } };
    }

    handleSubmit(e) {
        e.preventDefault();
        var idInput = this.state.data.picId;
        this.props.addCard(idInput);
    }

    handleChange(e) {
        const field = e.target.name;
        var obj = Object.assign({}, this.state.data);
        obj[field] = e.target.value;
        this.setState({ data: obj });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
                <TextInput label={"Photo Id"} name={"picId"} value={this.state.data.picId}
                    onChange={this.handleChange.bind(this)} />
                <div className="form-group">
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-block">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = { pic: {}, msg: "" };
    }

    componentDidMount() {
        photosClient.getPhotoById(this.props.picId).then((data) => {
            this.setState({ pic: data });
        }, (eMsg) => {
            this.setState({ msg: eMsg });
        });
    }

    render() {
        if (this.state.msg) {
            return (
                <div>
                    <h2 className="text-danger">{this.state.msg}</h2>
                    <h3 className="text-danger">Id was: {this.props.picId}</h3>
                    <hr />
                </div>
            )
        }
        return (
            <div>
                <img src={this.state.pic.url} width="80" />
                <h3>{this.state.pic.title}</h3>
                <hr />
            </div>
        );
    }
}

class Assignment extends Component {
    constructor(props) {
        super(props);
        this.state = { pics: [] };
    }

    addCard(id) {
        // this.setState({ pics: this.state.pics.concat(id) });
        this.setState({ pics: [...this.state.pics, id] });
    }

    render() {
        var iCards = this.state.pics.map(function (pic, index) {
            return <ImageCard key={index} picId={pic} />
        });
        return (
            <div>
                <Form addCard={this.addCard.bind(this)} />
                <hr />
                {iCards}
            </div>
        );
    }
}

export default Assignment;