import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import styles from './ProductsComponent.css';
import productsAPIClient from '../../api/productsAPIClient';

class ProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { productsData: [] };
    }

    render() {
        let pList = this.state.productsData.map(product =>
            <li className="list-group-item" key={product.id}>
                <Link to={`${this.props.match.url}/${product.id}`}>{product.name}</Link>
            </li>
        );

        return (
            <div>
                <h1>Products Component</h1>
                <div>
                    <div className={styles.graybox}>
                        <ul className="list-group">
                            {pList}
                        </ul>
                    </div>

                    <Route exact path={`${this.props.match.url}/:productId`} render={
                        (props) => {
                            // console.log(props);
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
            </div>
        );
    }

    componentDidMount() {
        productsAPIClient.getAllProducts().then((products) => {
            this.setState({ productsData: products });
        }, (err) => {
            console.error(err);
        });
    }
}

var obj = { id: 1, name: "Manish", city: "Pune" };
var { id, city } = obj;

const ProductDetailsComponent = ({ data, match }) => {
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
        productView = (<h2>Product Not Found...</h2>);
    }

    return (
        <div className={styles.outerdiv}>
            <div className={styles.innerdiv}>
                {productView}
            </div>
        </div>
    );
};

export default ProductsComponent;