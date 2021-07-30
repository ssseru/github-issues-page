import "./App.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from "reactstrap";
import { fetchIssues } from "./actions/issueAction";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const list = useSelector((state) => state.listOfIssues);
  const watch = useSelector((state) => state.watch);
  console.log(watch);
  console.log("List", list.issues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIssues());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Github Issues Page</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        {list.issues.length > 0 ? (
          list.issues.map((issue) => (
            <Container>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{issue.title}</CardTitle>
                  {issue.labels[0] ? (
                    <Badge color="info">{issue.labels[0].name}</Badge>
                  ) : (
                    ""
                  )}
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    #{issue.number} created at {issue.created_at} by{" "}
                    {issue.user.login}
                  </CardSubtitle>
                  <CardText>{issue.title}</CardText>
                </CardBody>
              </Card>
            </Container>
          ))
        ) : (
          <p></p>
        )}
      </Row>
    </Container>
  );
}

export default App;
