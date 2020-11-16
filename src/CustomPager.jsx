// CustomPager.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Pager } from 'react-bootstrap';

class CustomPager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 1,
      prevDisabled: this.checkToDisablePrev(1),
      nextDisabled: this.checkToDisableNext(1),
    };
    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.totalCount != this.props.totalCount) {
      this.setState({ 
        currentPage: 1,
        prevDisabled: this.checkToDisablePrev(1),
        nextDisabled: this.checkToDisableNext(1),
      });
    }
  }

  // ------------------------------------------------------------
  totalPages() {
    return Math.ceil(this.props.totalCount / this.props.pageSize);
  }

  checkToDisablePrev(page) {
    return this.totalPages() == 0 || page < 2;
  }

  checkToDisableNext(page) {
    return page > this.totalPages() - 1;
  }

  // ------------------------------------------------------------
  onPrev() {
    const page = this.state.currentPage - 1;
    this.changeNewPage(page);
  }

  onNext() {
    const page = this.state.currentPage + 1;
    this.changeNewPage(page);
  }

  changeNewPage(newPage) {
    const prevDisabled = this.checkToDisablePrev(newPage);
    const nextDisabled = this.checkToDisableNext(newPage);
    if (prevDisabled) newPage = 1;
    if (nextDisabled) newPage = this.totalPages();

    if (newPage != this.state.currentPage) {
      this.setState({
        currentPage: newPage,
        prevDisabled: prevDisabled,
        nextDisabled: nextDisabled,
      });
      this.props.selectPage(newPage);
    }
  }

  // ------------------------------------------------------------
  render() {
    return (
      <Pager>
        <Pager.Item previous disabled={this.state.prevDisabled} href="#" onClick={this.onPrev}>Prev</Pager.Item>
        <Pager.Item next disabled={this.state.nextDisabled} href="#" onClick={this.onNext}>Next</Pager.Item>
      </Pager>
    );
  }
}

CustomPager.propTypes = {
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export default CustomPager;