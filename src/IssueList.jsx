// IssueList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Button, Glyphicon, Table, Panel } from 'react-bootstrap';
import 'isomorphic-fetch';

import IssueFilter from './IssueFilter.jsx';
import withToast from './withToast.jsx';
import CustomPager from './CustomPager.jsx';

const PAGE_SIZE = 10;

// ------------------------------------------------------------
const IssueRow = (props) => {
  function onDeleteClick() {
    props.deleteIssue(props.issue._id);
  }

  return (
    <tr>
      <td><Link to={`/issues/${props.issue._id}`}>{props.issue._id.substr(-4)}</Link></td>
      <td>{props.issue.status}</td>
      <td>{props.issue.owner}</td>
      <td>{props.issue.created.toDateString()}</td>
      <td>{props.issue.effort}</td>
      <td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
      <td>{props.issue.title}</td>
      {props.deleteIssue ? (
        <td>
          <button bssize="xsmall" onClick={onDeleteClick}><Glyphicon glyph="trash" /></button>
        </td>
      ) : null}
    </tr>
  );
};

IssueRow.propTypes = {
  issue: PropTypes.object.isRequired,
  deleteIssue: PropTypes.func,
};

// ------------------------------------------------------------
function IssueTable(props) {
  const issueRows = props.issues.map(issue => <IssueRow key={issue._id} 
    issue={issue} deleteIssue={props.deleteIssue} />);
  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Completion Date</th>
          <th>Title</th>
          {props.deleteIssue ? (<th></th>) : null}
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </Table>
  );
}

IssueTable.propTypes = {
  issues: PropTypes.array.isRequired,
  deleteIssue: PropTypes.func,
};

// ------------------------------------------------------------
class IssueList extends React.Component {
  static dataFetcher({ urlBase, location }) {
    const query = Object.assign({}, location.query);
    const pageStr = query._page;
    if (pageStr) {
      delete query._page;
      query._offset = (parseInt(pageStr, 10) - 1) * PAGE_SIZE;
    }
    query._limit = PAGE_SIZE;
    const search = Object.keys(query).map(k => `${k}=${query[k]}`).join('&');
    return fetch(`${urlBase || ''}/api/issues?${search}`).then(response => {
      if (!response.ok) return response.json().then(error => Promise.reject(error));
      return response.json().then(data => ({ IssueList: data }));
    });
  }

  constructor(props, context) {
    super(props, context);
    const data = context.initialState.IssueList ?
    context.initialState.IssueList
      : { metadata: { totalCount: 0 }, records: [] };
    const issues = data.records;
    issues.forEach(issue => {
      issue.created = new Date(issue.created);
      if (issue.completionDate) {
        issue.completionDate = new Date(issue.completionDate);
      }
    });
    this.state = {
      issues, totalCount: data.metadata.totalCount,
    };
    this.deleteIssue = this.deleteIssue.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.selectPage = this.selectPage.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const oldQuery = prevProps.location.query;
    const newQuery = this.props.location.query;
    if (oldQuery.status === newQuery.status
      && oldQuery.effort_gte === newQuery.effort_gte
      && oldQuery.effort_lte === newQuery.effort_lte
      && oldQuery._page === newQuery._page) {
      return;
    }
    this.loadData();
  }

  // ------------------------------------------------------------
  loadData() {
    IssueList.dataFetcher({ location: this.props.location })
    .then(data => {
      const issues = data.IssueList.records;
      issues.forEach(issue => {
        issue.created = new Date(issue.created);
        if (issue.completionDate) {
          issue.completionDate = new Date(issue.completionDate);
        }
      });
      this.setState({ issues, totalCount: data.IssueList.metadata.totalCount });
    }).catch(err => {
      this.props.showError(`Error in fetching data from server: ${err}`);
    });
  }

  deleteIssue(id) {
    fetch(`/api/issues/${id}`, { method: 'DELETE' })
    .then(response => {
      if (!response.ok) this.props.showError('Failed to delete issue');
      else this.loadData();
    });
  }

  // ------------------------------------------------------------
  setFilter(query) {
    this.props.router.push({ pathname: this.props.location.pathname, query });
  }

  selectPage(page) {
    const query = Object.assign(this.props.location.query, { _page: page });
    this.props.router.push({ pathname: this.props.location.pathname, query });
  }

  // ------------------------------------------------------------
  render() {
    return (
      <div>
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>Filter</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <IssueFilter setFilter={this.setFilter} initFilter={this.props.location.query} />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <CustomPager pageSize={PAGE_SIZE} totalCount={this.state.totalCount} selectPage={this.selectPage} />
        <IssueTable
          issues={this.state.issues}
          deleteIssue={this.props.user.signedIn ? this.deleteIssue : null}
        />
      </div>
    );
  }
}

IssueList.contextTypes = {
  initialState: PropTypes.object,
};

IssueList.propTypes = {
  location: PropTypes.object.isRequired,
  router: PropTypes.object,
  showError: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const IssueListWithToast = withToast(IssueList);
IssueListWithToast.dataFetcher = IssueList.dataFetcher;

export default IssueListWithToast;

