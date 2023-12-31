import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import { User } from '../../types';
import { capitalize } from '../../utils';

const SingleUser = () => {
  let { state } = useLocation() as { state: { user: User } };

  return (
    <Container className="py-5">
      <PageTitle title={`Name: ${capitalize(state.user.name)}`} />
      <div>Email: {state.user.email}</div>
    </Container>
  );
};

export default SingleUser;
