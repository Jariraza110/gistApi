import GistList from "./GistList";

const Gist = ({ gist, loading }) => {
    //Returning Gist List component with "gist" and "loading" properties
  return <GistList gist={gist} loading={loading} />;
};

export default Gist;
