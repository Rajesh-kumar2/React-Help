import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import styles from './ProductsComponent.css';
import productsAPIClient from '../../api/productsAPIClient';

class ProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { productsData: [], errMessage: "" };
    }

    render() {
        var pList = null;
        if (this.state.productsData.length > 0) {
            pList = this.state.productsData.map((product, index) => {
                return <li key={index} className="list-group-item">
                    <Link to={`${this.props.match.url}/${product.id}`}>{product.name}</Link>
                </li>;
            });
        }

        return (
            <div>
                <h1>Products Component</h1>
                {this.state.errMessage && (
                    <h4 className="alert alert-danger">{this.state.errMessage}</h4>
                )}
                {pList && (
                    <div>
                        <div className={styles.graybox}>
                            <ul className="list-group">
                                {pList}
                            </ul>
                        </div>

                        <Route exact path={`${this.props.match.url}/:productId`} render={
                            (props) => {
                                return <ProductDetailsComponent data={this.state.productsData} {...props} />
                            }
                        } />

                        <Route exact path={this.props.match.url} render={
                            () => (
                                <div className={styles.outerdiv}>
                                    <div className={styles.innerdiv}>
                                        <h3 className="text-info">Please select a product</h3>
                                    </div>
                                </div>
                            )
                        } />
                    </div>
                )}
            </div>
        );
    }

    componentDidMount() {
        productsAPIClient.getAllProducts().then((products) => {
            this.setState({ productsData: products });
        }, (eMsg) => {
            this.setState({ errMessage: eMsg });
        });
    }
}

const ProductDetailsComponent = ({ data, match }) => {
    // console.log(match);
    let product = data.find(p => p.id == match.params.productId);
    let productView;

    if (product) {
        productView = (
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4>{product.status}</h4>
            </div>
        );
    } else {
        productView = (<h3 className="text-danger">Product Not Found...</h3>);
    }

    return (
        <div className={styles.outerdiv}>
            <div className={styles.innerdiv}>
                {productView}
            </div>
        </div>
    );
}

export default ProductsComponent;