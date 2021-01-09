import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Books() {
  const [employees, setEmployees] = useState([])
  const [formObject, setFormObject] = useState({})

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

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    //   event.preventDefault();
    //   if (formObject.firstName && formObject.lastName) {
    //     API.saveBook({
    //       // title: formObject.title,
    //       // author: formObject.author,
    //       // synopsis: formObject.synopsis
    //     })
    //       .then(res => loadEmployees())
    //       .catch(err => console.log(err));
    //   }
  };

  return (
    <Container fluid>
      <Jumbotron>
        <h1>TechCo Employee Directory</h1>
      </Jumbotron>
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
                <Col size="md-3 sm-3">{employee.email}</Col>
                <Col size="md-3 sm-3">{employee.phone}</Col>
                <Col size="md-3 sm-3">{employee.dob}</Col>
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


export default Books;
