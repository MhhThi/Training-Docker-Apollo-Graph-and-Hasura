import React, {useEffect} from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetDetailJobsLazyQuery } from "../graphql";
import "../styles/StyleJobsDetail.scss";

export const JobsDetail = () => {
  const { id } = useParams();
  const [getDetail, { loading, data, error }] = useGetDetailJobsLazyQuery();

  useEffect(() => {
    if(id)
      getDetail({
        variables: {
          id: Number(id)
        }
      })
  }, [id])

  if(error) return <h2>Something went wrong</h2>
 
  return (
    <Card className="card-detail">
      <Card.Header>
        <h2>{data?.jobcareer_by_pk?.jobName}</h2>
      </Card.Header>
      <Card.Body>
        <Card.Text>{data?.jobcareer_by_pk?.jobDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
};
