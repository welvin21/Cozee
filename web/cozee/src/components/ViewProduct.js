import React from "react";
import Product from "./Product";
import { getProducts } from "../store/actions/products";
import { connect } from "react-redux";

class ViewProduct extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props.products;
    let filterProducts = products.filter(p=> p.company === 'Idea');
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filterProducts.map(product => {
          return <Product product={product} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state,
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(ViewProduct);
