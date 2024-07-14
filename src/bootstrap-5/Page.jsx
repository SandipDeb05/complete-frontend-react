import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Form,
} from "react-bootstrap";

const Page = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">
                We will never share your email
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary" size="sm" type="submit">
          Login
        </Button>
      </Form>

      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Feed</BreadcrumbItem>
        <BreadcrumbItem active>Profile</BreadcrumbItem>
      </Breadcrumb>

      <Card className="mb-3">
        <Card.Img src="https://picsum.photos/200/50" />
        <Card.Body>
          <Card.Title>Payment Details</Card.Title>
          <Card.Text>Your payment goes to the destination branch</Card.Text>
          <Button variant="primary">Send feedback</Button>
        </Card.Body>
      </Card>

      <Alert variant="success">You request has been sent successfully</Alert>
      <Button variant="success">Click Me</Button>
    </Container>
  );
};

export default Page;
