import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gist from "./components/Gist";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { getGistPublicAction } from "./redux/Action";
import "./App.css";
const App = () => {
  const dispatch = useDispatch();

  const gistPublic = useSelector((state) => state.gistPublicData);
  const loadingStore = useSelector((state) => state.loading);

  const [gistList, setGist] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    dispatch(getGistPublicAction());
  }, []);

  useEffect(() => {
    if (gistPublic) {
      setGist(gistPublic);
    }
  }, [gistPublic]);

  useEffect(() => {
    return () => {
      setGist([]);
    };
  }, []);

  useEffect(() => {
    setLoading(loadingStore);
  }, [loadingStore]);

  return (
    <div className="App" data-testid="app">
      <Header setGist={setGist} />
      <GlobalStyles />
      <Gist gist={gistList} loading={loading} />
    </div>
  );
};

export default App;
