import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [sort, setSort] = useState(1);

  useEffect(() => {
    loadEmployees()
  }, [])

  function loadEmployees() {
    API.createEmployees()
      .then(res =>
        setEmployees(res.data)
      )
      .catch(err => console.log(err));
  };

  //function sorts employees by lastName. Each click inverts the sort order
  function sortEmployees() {
    setSort(sort * -1);
    API.sortEmployees(sort)
      .then(res =>
        setEmployees(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Jumbotron>
        <h1>TechCo Employee Directory</h1>
      </Jumbotron>
      <Row>
        <Col size="md-3 sm-3">
          <p onClick={()=>sortEmployees()} >Employee Name {sort === -1 ? 
          (<i className="fa fa-sort-desc fa-lg" aria-hidden="true"></i>) : 
          (<i className="fa fa-sort-asc fa-lg" aria-hidden="true"></i>)}</p>
        </Col>
        <Col size="md-3 sm-3">
        <p >Employee Email Address </p>
        </Col>
        <Col size="md-3 sm-3">
        <p >Employee Phone Number </p>
        </Col>
        <Col size="md-3 sm-3">
        <p >Employee Birthday <i className="fa fa-sort-desc fa-lg" aria-hidden="true"></i></p>
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
