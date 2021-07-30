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
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import InfiniteScroll from "react-infinite-scroll-component";

const PAGE_NUMBER = 1;

function App() {
  const list = useSelector((state) => state.listOfIssues);
  // console.log(list.issues.length);
  const counter = useSelector((state) => state.fetchCounter);
  const [page, setPage] = useState(PAGE_NUMBER);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIssues(page));
  }, [dispatch, page]);

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  function iS() {
    dispatch(incrementStar());
  }
  function iW() {
    dispatch(incrementWatch());
  }
  function iF() {
    dispatch(incrementFork());
  }

  // const fetchMoreData = () => {
  //   dispatch(fetchIssues(page));
  //   setPage(page + 1);
  // };

  return (
    <Container>
      <hr />
      <Row>
        <Col md={6}>
          <h1>Github Issues Page</h1>
        </Col>
        <Col>
          <ButtonGroup>
            <Button outline size="sm" color="primary" onClick={() => iW()}>
              <VisibilityOutlinedIcon /> Watch
            </Button>
            <Button active outline size="sm" color="primary">
              {counter.watch}
            </Button>
          </ButtonGroup>
        </Col>
        <Col>
          <ButtonGroup>
            <Button outline size="sm" color="primary" onClick={() => iS()}>
              <StarRateOutlinedIcon />
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
              <RestaurantOutlinedIcon /> Fork
            </Button>{" "}
            <Button active outline size="sm" color="primary">
              {counter.fork}
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <hr />
      <Row>
        <InfiniteScroll
          dataLength={list.issues.length}
          next={scrollToEnd}
          loader={<h4>Loading...</h4>}
          hasMore={true}
        >
          {list.issues.length > 0 ? (
            list.issues.map((issue) => (
              <div className="container" key={issue.title}>
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
              </div>
            ))
          ) : (
            <p></p>
          )}
        </InfiniteScroll>
      </Row>
    </Container>
  );
}

export default App;
