import React from "react";
import { Table } from "react-bootstrap";
export const TicketTable = ({ ticket }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {ticket.length ? (
          ticket.map((row) => (
            <tr>
              <td>{row.id}</td>
              <td>ssl issue</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Ticket To Show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
