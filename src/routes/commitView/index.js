import React from "react";
import {Button, Card, Table} from "antd";
import { getCommits } from '../../appRedux/actions/Commit'
import {connect} from "react-redux";


class CommitView extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  constructor(props) {
    super(props);
    this.props.getCommits();
  }

  render() {
    let {sortedInfo, filteredInfo} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const { commits } = this.props;
    const columns = [
      {
        title: 'Author',
        dataIndex: 'authorName',
        key: 'authorName'
      },
      {
      title: 'Message',
      dataIndex: 'message',
      key: 'message '
    }, {
      title: 'Date',
      dataIndex: 'commitDate',
      key: 'commitDate'
    }, {
      title: 'Url',
      dataIndex: 'commitUrl',
      key: 'commitUrl',
      render: text => <a href={text}>Commit View</a>
    }];
    return (
      <Card title="Commits">

        <Table className="gx-table-responsive" columns={columns} dataSource={commits} />
      </Card>
    );
  }
}




const mapStateToProps = ({commit}) => {
 const { commits } = commit;
  return { commits }
};

export default connect(mapStateToProps, {getCommits})(CommitView);
