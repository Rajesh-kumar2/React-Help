import React, { Component } from 'react';
import ajaxClient from './api/ajaxClient';
import DataTable from './common/DataTable';

class AjaxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], message: "Loading Data, please wait..." };
    }

    render() {
        return (
            <div>
                <h2 className="text-info">{this.state.message}</h2>
                <DataTable items={this.state.posts} />
            </div>
        );
    }

    componentDidMount() {
        ajaxClient.getPosts((postsData) => {
            this.setState({ posts: postsData }, () => {
                this.setState({ message: "" });
            });
        }, (eMsg) => {
            this.setState({ message: eMsg });
        });
    }
}

export default AjaxComponent;