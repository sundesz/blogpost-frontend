import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Author } from '../../types';

interface AuthorListProps {
  authors: Author[];
}

const AuthorList = ({ authors }: AuthorListProps) => {
  return (
    <Container className="author-container py-5">
      {authors && authors.length ? (
        authors.map((author) => (
          <Card key={author.userId}>
            <Card.Body>
              <Card.Title>
                <Link to={`/authors/${author.userId}`}>{author.name}</Link>
              </Card.Title>
              <Card.Body>{author.email}</Card.Body>
              <Card.Footer>
                <Link to={`/authors/${author.userId}`}>
                  {author.blogs ? author.blogs.length : 0} blog(s)
                </Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div className="no-data">No author yet.</div>
      )}
    </Container>
  );
};

export default AuthorList;
