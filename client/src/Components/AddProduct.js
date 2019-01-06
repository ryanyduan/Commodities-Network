import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";

export default class AddProduct extends Component {
  render() {
    return (
      <div className="addProductContainer">
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            width: "300px"
          }}
        >
          Add a new product
        </span>
        <hr className="addProductLine" style={{ paddingBottom: "0px" }} />
        <img
          style={{ maxHeight: "64%", maxWidth: "100%", borderRadius: "50%" }}
          src="images/product.jpg"
        />
        <Popup
          trigger={
            <Button
              primary
              style={{
                position: "absolute",
                bottom: "10px",
                right: "0",
                marginRight: "30%"
              }}
            >
              Add Product
            </Button>
          }
          modal
          closeOnDocumentClick
        >
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <Form onSubmit={this.props.func} style={{ display: "block" }}>
                <div>
                  <span
                    style={{
                      position: "relative",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                  >
                    Add a new product
                  </span>
                  <hr className="addProductLine" />
                </div>
                <div>
                  <Form.Field>
                    <label style={{ float: "left" }}>Product Type</label>
                    <input placeholder="Product Type" name="product_type" />
                  </Form.Field>
                  <Form.Field>
                    <label style={{ float: "left" }}>Quantity</label>
                    <input name="quantity" placeholder="Quantity" />
                  </Form.Field>
                  <Form.Field />
                  <Button type="submit" color="blue">
                    Add Product
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}

AddProduct.propTypes = {
  func: PropTypes.func.isRequired
};
