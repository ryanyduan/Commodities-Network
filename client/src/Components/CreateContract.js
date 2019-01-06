import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Button, Form, Label } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class CreateContract extends Component {
  render() {
    return (
      <div className="CreateContractContainer">
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            width: "300px"
          }}
        >
          Create a new contract
        </span>
        <hr className="addProductLine" style={{ paddingBottom: "0px" }} />
        <img
          style={{ maxHeight: "64%", maxWidth: "100%" }}
          src="images/contract.png"
        />
        <Popup
          trigger={
            <Button
              primary
              style={{
                position: "absolute",
                bottom: "10px",
                right: "0",
                marginRight: "26%"
              }}
            >
              Create Contract
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
              <Form onSubmit={this.props.func}>
                <div>
                  <span
                    style={{
                      position: "relative",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                  >
                    Create a new contract
                  </span>
                  <hr className="addProductLine" />
                </div>
                <Form.Field>
                  <label style={{ float: "left" }}>Product</label>
                  <input placeholder="Product" name="product" />
                </Form.Field>
                <Form.Field>
                  <label style={{ float: "left" }}>Starting Price</label>
                  <input placeholder="Starting Price" name="startingPrice" />
                </Form.Field>
                <Button type="submit">Create Contract</Button>
              </Form>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}

CreateContract.propTypes = {
  func: PropTypes.func.isRequired
};
