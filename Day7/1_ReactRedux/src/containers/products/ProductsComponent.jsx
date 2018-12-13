import React, { Component } from 'react';
import { connect } from "react-redux";

import * as productActions from '../../actions/productActions';
import ProductList from '../../components/products/ProductListComponent';
import AddProductButton from '../../components/products/AddProductButon';

class ProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Products Component</h1>
                <AddProductButton />
                <ProductList products={this.props.products}
                    onDelete={this.deleteProduct} />
            </div>
        );
    }

    deleteProduct(product, e) {
        e.preventDefault();
        this.props.deleteProduct(product);
    }

    componentDidMount() {
        this.props.loadProducts();
    }
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.productReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: () => dispatch(productActions.loadProducts()),
        deleteProduct: (product) => dispatch(productActions.deleteProduct(product))
    };
}

export default (connect(mapStateToProps, mapDispatchToProps))(ProductsComponent);