import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Button, Form, Label } from "semantic-ui-react";

export default class CreateContract extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Popup
        trigger={<Button primary>Create Contract</Button>}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <Form>
              <Label>Contract</Label>
              <Form.Field>
                <label>Product</label>
                <input placeholder="Product" name="product" />
              </Form.Field>
              <Form.Field>
                <label>Starting Price</label>
                <input placeholder="Starting Price" name="startingPrice" />
              </Form.Field>
              <Button type="submit" onSubmit={this.props.func} onClick={close}>
                Create Contract
              </Button>
            </Form>
          </div>
        )}
      </Popup>
    );
  }
}
