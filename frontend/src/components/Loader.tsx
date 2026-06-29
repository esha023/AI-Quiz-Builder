import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="loader-container">
      <h2>Generating Quiz...</h2>
      <p>Please wait while Gemini creates your quiz.</p>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
