import React, { Component } from "react";
import Product from "./product";
import { Jumbotron, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { storeProducts } from "../data";
import styled from "styled-components";
import img from './fotter.png'
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
                      return name.productOfshop.map(products => {
                        return <Product products={products} key={products.id} />
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
