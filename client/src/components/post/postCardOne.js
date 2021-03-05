import React from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMouse } from '@fortawesome/free-solid-svg-icons'

const PostCardOne = ({posts}) => {
  return (
    <div>
      {
        Array.isArray(posts) ? posts.map(({_id, title, fileUrl, comment, views}) => {
          return (
            <div key={_id} className="col-md-4">
              <Link to={`/post/{$_id}`} className="text-dark text-decoration-none">
                <Card>
                  <CardImg top alt="Card Image" src={fileUrl} />
                  <CardBody>
                    <CardTitle className="d-flex justify-content-between">
                      <span className="text-truncate"> {title} </span>
                      <span>
                        <FontAwesomeIcon icon={faMouse} />
                        &nbsp;
                        <span>{views}</span>
                      </span>
                    </CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </div>
          )
        }) : ""
      }
    </div>
  )
}

export default PostCardOne