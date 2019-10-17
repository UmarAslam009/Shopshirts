import React, { Component } from "react";
import Product from "./product";
import { Jumbotron, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { storeProducts } from "../data";
import styled from "styled-components";
import img from './fotter.png'
import { ButtonContainer } from './Button'
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  card() {
    const element = (
      <Card style={{ height: '30em' }}>
        <Card.Body>
          <Card.Header><h3>Filter Items</h3></Card.Header>
          <Card.Text>
            <p>Category: <b>Regional</b></p>
            <p>Department: <b>French</b></p>
          </Card.Text>

        </Card.Body>
      </Card>)
    return element;

  }
  del(id) {
    console.log(id);
  }
  render() {
    return (
      <React.Fragment>

        <div className="py-5">
          <div className="container">
            <Row className="text-center">
              <Col className="my-3" xs={3} md={3} >
                {this.card()}
              </Col>
              <Col xs={9} md={9}>
                <Row>

                  <ProductConsumer>
                    {(name) => {
                      return name.cart.map(products => {

                        return <div className="my-3 col-12">

                          <a href="#" class="list-group-item list-group-item-action active">{<b>Name:</b>}{products.title}<button onClick={() => name.deleteFromCart(products.id)} className="btn btn-warning  float-right">Delete</button></a>
                          <a href="#" class="list-group-item list-group-item-action">{<b>ID:</b>}{products.id}</a>
                          <a href="#" class="list-group-item list-group-item-action">{<b>Price:</b>}{products.price}{<b>$</b>}</a>
                          <a href="#" class="list-group-item list-group-item-action ">{<b>company:</b>}{products.company}</a>
                        </div>
                      })
                      console.log({ name })
                    }}
                  </ProductConsumer>
                </Row>

              </Col>
            </Row>
          </div>
        </div>
        <fotter className="my-3" xs={3} md={3}><img src={img} style={{ width: 1285, height: 250 }} /></fotter>

      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;

