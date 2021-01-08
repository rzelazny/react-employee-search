import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

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

  function deleteEmployee(id) {
    API.deleteEmployees(id)
      .then(res => loadEmployees())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
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
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.firstName && formObject.lastName)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {employees.length ? (
              <List>
                {employees.map(employee => (
                  <ListItem key={employee._id}>
                    <Link to={"/employees/" + employee._id}>
                      <strong>
                        
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteEmployee(employee._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
