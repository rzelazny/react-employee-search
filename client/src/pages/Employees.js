import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Employees() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    loadEmployees()
  }, [])

  function loadEmployees() {
    API.getEmployees()
      .then(res =>
        setEmployees(res.data)
      )
      .catch(err => console.log(err));
  };

  function sortEmployees() {
    console.log("I've been clicked");
    // API.getEmployees()
    //   .then(res =>
    //     setEmployees(res.data)
    //   )
    //   .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Jumbotron>
        <h1>TechCo Employee Directory</h1>
      </Jumbotron>
      <Row>
        <Col size="md-3 sm-3">
          <p onClick={()=>sortEmployees()} >Employee Name <i className="fa fa-sort-desc fa-lg" aria-hidden="true"></i></p>
        </Col>
        <Col size="md-3 sm-3">
          Employee Email Address <i className="fa fa-sort-desc fa-lg" aria-hidden="true"></i>
        </Col>
        <Col size="md-3 sm-3">
          Employee Phone Number <i className="fa fa-sort-desc fa-lg" aria-hidden="true"></i>
        </Col>
        <Col size="md-3 sm-3">
          Employee Birthday <i className="fa fa-sort-desc fa-lg" aria-hidden="true"></i>
        </Col>
      </Row>
      {employees.length ? (
        <List>
          {employees.map(employee => (
            <ListItem key={employee._id}>
              <Row>
                <Col size="md-3 sm-3">
                  <Link to={"/employees/" + employee._id}>
                    <strong>
                      {employee.firstName} {employee.lastName}
                    </strong>
                  </Link>
                </Col>
                <Col size="md-3 sm-3">
                  {employee.email}
                </Col>
                <Col size="md-3 sm-3">
                  {employee.phone}
                </Col>
                <Col size="md-3 sm-3">
                  {employee.dob}
                </Col>
              </Row>
            </ListItem>
          ))}
        </List>
      ) : (
          <h3>No Results to Display</h3>
        )}
    </Container>
  );
}


export default Employees;
