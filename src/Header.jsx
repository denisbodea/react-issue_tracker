// Header.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import 'isomorphic-fetch';

import IssueAddNavItem from './IssueAddNavItem.jsx';
import SignInNavItem from './SignInNavItem.jsx';
import withToast from './withToast.jsx';

const Header = (props) => {
  function searchIssues(input) {
    if (input.length < 2) return Promise.resolve([]);

    return fetch(`/api/issues?search=${input}`).then(response => {
      if (!response.ok) response.json().then(error => Promise.reject(error));
      return response.json().then(data => {
        const options = data.records.map(issue => ({
          value: issue._id,
          label: `${issue._id.substr(-4)}: ${issue.title}`,
        }));
        return options;
      });
    })
    .catch(error => {
      this.props.showError(`Error in fetching data from server: ${error}`);
    });
  }

  function filterOptions(options) {
    return options;
  }

  function selectIssue(item) {
    if (item) props.router.push(`/issues/${item.value}`);
  }

  function handleInputChange(input) {
    if (input.length < 2){
      return " ";
    }
    return input;
  }

  return (
    <Navbar fluid>
      <Col sm={5}>
        <Navbar.Header>
          <Navbar.Brand>Isssue Tracker</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/issues">
            <NavItem>Issues</NavItem>
          </LinkContainer>
          <LinkContainer to="/reports">
            <NavItem>Reports</NavItem>
          </LinkContainer>
        </Nav>
      </Col>
      <Col sm={4}>
        <div style={{ paddingTop: 8 }}>
          <AsyncSelect
            instanceId="search"
            placeholder="Search..."
            loadOptions={searchIssues}
            filterOptions={filterOptions}
            onChange={selectIssue}
            onInputChange={handleInputChange}
          />
        </div>
      </Col>
      <Col sm={3}>
        <Nav pullRight>
          {props.user.signedIn ? <IssueAddNavItem showError={props.showError} /> : null}
          <SignInNavItem
            user={props.user}
            onSignin={props.onSignin} onSignout={props.onSignout}
            showError={props.showError} showSucess={props.showSucess}
          />
        </Nav>
      </Col>
    </Navbar>
  );
};

Header.propTypes = {
  showError: PropTypes.func.isRequired,
  showSucess: PropTypes.func.isRequired,
  onSignin: PropTypes.func.isRequired,
  onSignout: PropTypes.func.isRequired,
  user: PropTypes.object,
  router: PropTypes.object,
};

export default withRouter(withToast(Header));
