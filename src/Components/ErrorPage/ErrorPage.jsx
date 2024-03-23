import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops !</h1>
      <p>Sorry, an unexpected error has occourred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <p>Go back where you from</p>

          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
