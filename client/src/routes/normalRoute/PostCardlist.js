import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { POST_LOADING_REQUEST } from '../../redux/types';
import { Helmet } from 'react-helmet'
import { Row } from 'reactstrap';
import { GrowingSpinner } from '../../components/spinner/Spinner';

const PostCardlist = () => {
  const { posts } = useSelector((state) = state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: POST_LOADING_REQUEST, payload: 0})
  },[dispatch])

  return (
    <div>
      <Helmet title="Home" />
      <Row>{posts ? <h1>HI</h1> : GrowingSpinner }</Row>
    </div>
  )
}

export default PostCardlist