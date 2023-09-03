import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeFork,
  faFileLines,
  faMessage,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Gist.css";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

const GistList = ({ gist, loading }) => {
  
  return (
    <div className="main-container">
      {/* Using loading till the API response */}
      {loading ? (
        <div className="loader">
          {" "}
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        // Wrapping response under <ul> and mapping it to <li>
        <ul className="gist-list">
          {gist.map((list) => {
            const {
              id,
              description,
              owner,
              files,
              created_at,
              updated_at,
              comments_url,
              forks_url,
            } = list;

            const { login, avatar_url, html_url } = owner;
            return (
              <li style={{ marginBottom: "30px" }} key={id}>
                <div className="content-header">
                  <div className="content-left">
                    <Link to={html_url}>
                      {" "}
                      <img
                        src={avatar_url}
                        alt={login}
                        width="40"
                        height="40"
                      />
                    </Link>
                    <h3>{login}</h3>
                  </div>
                  <div className="content-right">
                    <Link to="/html/">
                      <FontAwesomeIcon icon={faCode} />{" "}
                      {Object.keys(files).length} Files
                    </Link>
                    <Link to={forks_url}>
                      <FontAwesomeIcon icon={faCodeFork} /> Forks
                    </Link>
                    <Link to={comments_url}>
                      <FontAwesomeIcon icon={faMessage} /> Comments
                    </Link>
                    <Link to="/python/">
                      <FontAwesomeIcon icon={faStar} /> Stars
                    </Link>
                  </div>
                </div>
                <div className="date-setter">
                  <span className="created">
                    Created at:{new Date(created_at).toLocaleDateString()}
                  </span>
                  <span className="updated">
                    Last updated:{new Date(updated_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="description">{description}</div>
                <div className="url-row">
                  {Object.keys(files).map((fileName) => {
                    const { raw_url, filename } = files[fileName];
                    return (
                      <Link to={raw_url}>
                        <FontAwesomeIcon icon={faFileLines} /> {filename}
                      </Link>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GistList;
