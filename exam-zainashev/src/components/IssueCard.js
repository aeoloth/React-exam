import React, { PureComponent } from "react";
import Issue from "./Issue";

class IssueCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedIssue: null,
    };
  }

  handleClick = (openedIssue) =>
    this.setState({
      openedIssue: this.state.openedIssue === openedIssue ? null : openedIssue,
    });

  render() {
    const issues = this.props.issueItems.map((issueItem, index) => (
      <>
        <Issue
          issueItem={issueItem}
          isOpen={this.state.openedIssue === issueItem.id}
          onButtonClick={this.handleClick.bind(this, issueItem.id)}
        />
      </>
    ));
    return <>{issues}</>;
  }
}
export default IssueCard;
