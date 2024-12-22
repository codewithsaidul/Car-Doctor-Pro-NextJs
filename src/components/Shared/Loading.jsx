import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
  return (
    <div>
      <PuffLoader
        color="#FF3811"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
