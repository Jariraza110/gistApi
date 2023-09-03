import React, { useState, useEffect } from "react";
import { useDebounce } from "../services/gistService";
import { getGistForUserAction, getGistPublicAction } from "../redux/Action";
import { useDispatch, useSelector } from "react-redux";
import "./Search.css";

const Search = ({ setGist }) => {
  const dispatch = useDispatch();
  const gistForUserData = useSelector((state) => state.gistForUserData);
  const [value, setValue] = useState("");

  //Using debounce for searching and delaying the output after 300 milliseconds
  const debouncedValue = useDebounce(value, 300); //300 milliseconds

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    //When search input clear again call gist public list
    if (value == "") {
      dispatch(getGistPublicAction());
      // Dispatching Public API action
    }

    setValue(value);
  };
  useEffect(() => {
    if (value !== "" && debouncedValue) {
      dispatch(getGistForUserAction(value));
      // Dispatching Gist for user API action
    }
  }, [debouncedValue]);

  useEffect(() => {
    setGist(gistForUserData);
    // setting the gist value with storeData 
  }, [gistForUserData]);

  useEffect(() => {
    return () => {
      setValue("");
      // Unmounting the value states
    };
  }, []);

  return (
    <div className="main-wrapper">
      <div className="input-Box">
        <input
          type="search"
          placeholder="Search Gists for the username"
          value={value}
          onChange={handleSearchInputChange}
          className="input-field"
        />
      </div>
    </div>
  );
};

export default Search;
