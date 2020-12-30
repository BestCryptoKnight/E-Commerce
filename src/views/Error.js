import { Link } from 'react-router-dom';

const Error = () => (
  <section>
    <h3>Sorry, no matching page!</h3>
    <Link to="/" style={{ textDecoration: 'inherit' }}>
      Back Home!
    </Link>
  </section>
);

export default Error;
