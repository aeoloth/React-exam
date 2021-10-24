import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";
import Table from "react-bootstrap/Table";
import IssueCard from "./IssueCard";

class Issues extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      issues: [],
    };
  }

componentDidMount() {
    fetch("https://api.github.com/repos/aeoloth/react-exam/issues")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          issues: result,
        });
        console.log(this.state.issues);
      });
  }

  render() {
    const issueItems = this.state.issues.slice();
    return (
      <>
        <h2 className="display-12">Обращения</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Статус</th>
              <th>Дата и время создания</th>
              <th>Номер обращения</th>
              <th>Название</th>
              <th colSpan="2">Автор</th>
              <th>Редактировать</th>
              <th>Комментарии</th>
              <th>Смотреть на github</th>
            </tr>
          </thead>
          <IssueCard issueItems={issueItems}/>
        </Table>
      </>
    );
  }
}

export default Issues;