import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import ticket from "../../assets/data/dummy-data.json";
const styles = {
  fontSize: "2rem",
  padding: "10px 30px",
};

export const Dashboard = () => {
  return (
    <Container>
      <Row className="text-center mt-5 mb-2">
        <Col>
          <Button variant="info" style={styles}>
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row className="text-center  mb-2">
        <Col>
          <div>Total Ticket: 50</div>
          <div>Pending Ticket: 10</div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row className="recent-ticket">
        <Col>
          <TicketTable ticket={ticket} />
        </Col>
      </Row>
    </Container>
  );
};
