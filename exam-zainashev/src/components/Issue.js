import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";

const myToken = atob(
  "Z2hwXzFadTBObEgxZFZoSjYxU3B0Q3hFeHU4azNxSWZRQjFpelVYag=="
);

class Issue extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
     };
  }

  render() {
    const { issueItem, isOpen, onButtonClick } = this.props;
    let profile = "https://github.com/";
    const issueDescription = isOpen && (
      <tr>
        <td colSpan="9">{issueItem.body}</td>
      </tr>
    );

    return (
      <tbody>
        <tr key={issueItem.id}>
          <td>
            {issueItem.state === "open" ? (
              <span>Открыто</span>
            ) : (
              <span>Закрыто</span>
            )}
          </td>
          <td>{new Date(issueItem.created_at).toLocaleString()}</td>
          <td>{issueItem.number}</td>
          <td>{issueItem.title}</td>
          <td>{issueItem.user.login}</td>
          <td>
            <a href={issueItem.user.html_url}>{issueItem.user.html_url}</a>
          </td>
          <td>
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1159/1159875.png"
                width="25px"
                height="25px"
              />
            </button>
            <button onClick={onButtonClick}>
              {isOpen ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5071/5071959.png"
                  width="25px"
                  height="25px"
                />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/54/54638.png"
                  width="25px"
                  height="25px"
                />
              )}
            </button>
            {issueItem.state === "open" && (
              <button
                onClick={() => {
                  this.handleCloseIssue(issueItem.number);
                }}
              >
                              <img
                  src="https://cdn-icons-png.flaticon.com/512/0/659.png"
                  width="25px"
                  height="25px"
                />  
              </button>)}
          </td>
          <td>
            <button>rjvtyns</button>
          </td>
          <td>
            <a href={issueItem.html_url}>
              <img
                src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=s180-rw"
                width="30px"
                height="30px"
              />{" "}
            </a>
          </td>
        </tr>
        {issueDescription}
      </tbody>
    );
  }
}

export default Issue;
