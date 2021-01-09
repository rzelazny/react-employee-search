import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail() {
  const [employee, setEmployee] = useState({})
  
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using the useParams hook
  // from react-router-dom.
  const {id} = useParams();

  useEffect(() => {
    API.getEmployee(id)
      .then(res => setEmployee(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {employee.firstName} {employee.lastName}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>
              Personal quote: {employee.quote} 
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <h3>
              Department: {employee.department} 
            </h3>
          </Col>
          <Col size="md-3">
            <h3>
              Email: {employee.email} 
            </h3>
          </Col>
          <Col size="md-3">
            <h3>
              Phone Number: {employee.phone} 
            </h3>
          </Col>
          <Col size="md-3">
            <h3>
              Birthday: {new Date(employee.dob).toLocaleDateString()} 
            </h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Directory</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
