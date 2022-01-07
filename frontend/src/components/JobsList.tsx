import React, { useState, useEffect } from "react";
import { FetchAllJobsQuery, useFetchAllJobsQuery } from "../graphql";
import { ListGroup, Card, Button } from "react-bootstrap";
import "../styles/StyleJobsList.scss";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export const JobsList = ({ group }: { group?: FetchAllJobsQuery }) => {
  let navigate = useNavigate();
  const { loading, data, error } = useFetchAllJobsQuery();
  const handleClick = (id: number) => {
    navigate(`${id}`);
    console.log(typeof id, "bbbbbmbm");
  };
  if(loading) return <Spinner animation="border" />;
  if(error) return <h2>Something went wrong</h2>
  return (
      <div className="container">
        {data?.jobcareer?.map((item: { id: number; jobName: string }) => (
        <Card
          className="text-center card-container"
          key={item?.id}
          onClick={() => handleClick(item.id)}
        >
            <Card.Title>{item.jobName}</Card.Title>
          <Button className="card-btn" variant="primary">
            Apply
          </Button>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      ))}
      </div>
      
  );
};
