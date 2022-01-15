import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAPI } from '../utils/api';
import { API } from '../utils/const';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

function PostDetailScreen() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(async () => {
    if (id) {
      const url = API + `/${id}`;
      const response = await getAPI(url);
      if (response) {
        setPost(response);
      }
    }
  }, [id]);

  if (!post) {
    return <h1>Loading</h1>;
  }
  const { name, description, picture, createdAt } = post;
  return (
    <Grid>
      <SPost>
        <img alt="" src={picture} />
        <SWrapperContent>
          <h3>{name}</h3>
          <span style={{ fontSize: '10px', color: 'gray' }}>{createdAt}</span>
          <p>{description}</p>
          <SReadMore href="#">read more</SReadMore>
        </SWrapperContent>
        <div></div>
      </SPost>
    </Grid>
  );
}

const SPost = styled.div`
  display: flex;
  width: 49%;
  margin-bottom: 5px;
  margin-left: 5px;
  img {
    width: 300px;
    object-fit: contain;
  }
`;
const SWrapperContent = styled.div`
  text-align: left;
  padding-left: 20px;
  h3 {
    margin: 0;
  }
`;
const SReadMore = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: red;
  }
`;

export default PostDetailScreen;
