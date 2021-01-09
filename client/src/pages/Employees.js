import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Input from "../components/Input";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [sort, setSort] = useState(1);
  const [employeeSearch, setSearch] = useState("");

  //get employees on page load
  useEffect(() => {
    loadEmployees()
  }, [])

  //function pulls the existing employees
  function loadEmployees() {
    API.getEmployees()
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

  //function handles typing in the search form
  const handleInputChange = event => {
    console.log("form changed");
    const { value } = event.target;
    setSearch(value);
  };

  //function handles submission of the search form
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("form submitted");
    API.filterEmployees(employeeSearch)
      .then(res => {
        console.log(res.data)
        setSearch(res.data)
      })
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Jumbotron>
        <h1>TechCo Employee Directory</h1>
      </Jumbotron>
      <Row>
        <Col size="md-3 sm-3"> {/* show either the asc or desc arrow depending on which sort is used */}
          <p onClick={() => sortEmployees()} >Employee Name {sort === -1 ?
            (<i className="fa fa-sort-desc fa-lg" aria-hidden="true"></i>) :
            (<i className="fa fa-sort-asc fa-lg" aria-hidden="true"></i>)}</p>
        </Col>
        <Col size="md-3 sm-3">
          <p >Employee Email Address </p>
        </Col>
        <Col size="md-2 sm-2">
          <p >Employee Phone Number </p>
        </Col>
        <Col size="md-1 sm-1">
          <p >Employee Birthday </p>
        </Col>
        <Col size="md-3 sm-3">
          <Input
            name="employeeSearch"
            value={employeeSearch}
            onChange={handleInputChange}
            onSubmit={handleFormSubmit}
            placeholder="Employee Name" />
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
                <Col size="md-2 sm-2">
                  {employee.phone}
                </Col>
                <Col size="md-3 sm-3">
                  {new Date(employee.dob).toLocaleDateString()}
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
