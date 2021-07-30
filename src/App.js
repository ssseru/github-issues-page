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
  Button,
  ButtonGroup,
} from "reactstrap";
import { fetchIssues } from "./actions/issueAction";
import {
  incrementFork,
  incrementStar,
  incrementWatch,
} from "./actions/counterAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const list = useSelector((state) => state.listOfIssues);
  const counter = useSelector((state) => state.fetchCounter);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIssues(page));
    setPage(page + 1);
  }, []);

  function iS() {
    dispatch(incrementStar());
  }
  function iW() {
    dispatch(incrementWatch());
  }
  function iF() {
    dispatch(incrementFork());
  }

  return (
    <Container>
      <hr />
      <Row>
        <Col md={8}>
          <h1>Github Issues Page</h1>
        </Col>
        <Col>
          <ButtonGroup>
            <Button outline size="sm" color="primary" onClick={() => iW()}>
              Watch
            </Button>
            <Button active outline size="sm" color="primary">
              {counter.watch}
            </Button>
          </ButtonGroup>
        </Col>
        <Col>
          <ButtonGroup>
            <Button outline size="sm" color="primary" onClick={() => iS()}>
              Star
            </Button>
            <Button active outline size="sm" color="primary">
              {counter.star}
            </Button>
          </ButtonGroup>
        </Col>

        <Col>
          <ButtonGroup>
            <Button outline size="sm" color="primary" onClick={() => iF()}>
              Fork
            </Button>{" "}
            <Button active outline size="sm" color="primary">
              {counter.fork}
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <hr />
      <Row>
        {list.issues.length > 0 ? (
          list.issues.map((issue) => (
            <Container key={issue.id}>
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
