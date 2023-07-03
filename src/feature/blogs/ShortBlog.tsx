import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Blog } from '../../types';

interface BlogProps {
  blog: Blog;
}

const ShortBlog: React.FC<BlogProps> = ({ blog }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.content}</Card.Text>
        <Link to={`/blogs/${blog.slug}`}>Read more ...</Link>
      </Card.Body>
    </Card>
  );
};

export default ShortBlog;