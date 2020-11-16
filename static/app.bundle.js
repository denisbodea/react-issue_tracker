/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/Client.jsx":
/*!***************************!*\
  !*** ./client/Client.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _Routes = __webpack_require__(/*! ../src/Routes.jsx */ "./src/Routes.jsx");

var _Routes2 = _interopRequireDefault(_Routes);

var _ContextWrapper = __webpack_require__(/*! ../src/ContextWrapper.jsx */ "./src/ContextWrapper.jsx");

var _ContextWrapper2 = _interopRequireDefault(_ContextWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Client.jsx
var WrappedApp = function WrappedApp(props) {
  return _react2.default.createElement(
    _ContextWrapper2.default,
    props,
    _react2.default.createElement(
      _reactRouter.Router,
      { history: _reactRouter.browserHistory },
      _Routes2.default
    )
  );
};

var contentNode = document.getElementById('contents');
/* eslint no-underscore-dangle: 0 */
_reactDom2.default.render(_react2.default.createElement(WrappedApp, { initialState: window.__INITIAL_STATE__ }), contentNode);

if (false) {}

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(/*! ./Header.jsx */ "./src/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // App.jsx


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  _createClass(App, null, [{
    key: 'dataFetcher',
    value: function dataFetcher(_ref) {
      var urlBase = _ref.urlBase,
          cookie = _ref.cookie;

      var headers = cookie ? { headers: { Cookie: cookie } } : null;
      return fetch((urlBase || '') + '/api/users/me', headers).then(function (response) {
        if (!response.ok) return response.json().then(function (error) {
          return Promise.reject(error);
        });
        return response.json().then(function (data) {
          return { App: data };
        });
      });
    }
  }]);

  function App(props, context) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

    var user = context.initialState.App ? context.initialState.App : {};
    _this.state = {
      user: user
    };
    _this.onSignin = _this.onSignin.bind(_this);
    _this.onSignout = _this.onSignout.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      App.dataFetcher({}).then(function (data) {
        var user = data.App;
        _this2.setState({ user: user });
      });
    }

    // ------------------------------------------------------------

  }, {
    key: 'onSignin',
    value: function onSignin(name) {
      this.setState({ user: { signedIn: true, name: name } });
    }
  }, {
    key: 'onSignout',
    value: function onSignout() {
      this.setState({ user: { signedIn: false, name: '' } });
    }

    // ------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var childrenWithUser = _react2.default.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, { user: _this3.state.user });
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { user: this.state.user, onSignin: this.onSignin, onSignout: this.onSignout }),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          childrenWithUser,
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'h5',
            null,
            _react2.default.createElement(
              'small',
              null,
              'Full source code available at this ',
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/vasansr/pro-mern-stack' },
                'GitHub repository'
              ),
              '.'
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.contextTypes = {
  initialState: _propTypes2.default.object
};

App.propTypes = {
  children: _propTypes2.default.object.isRequired
};

exports.default = App;

/***/ }),

/***/ "./src/ContextWrapper.jsx":
/*!********************************!*\
  !*** ./src/ContextWrapper.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ContextWrapper.jsx


var ContextWrapper = function (_React$Component) {
  _inherits(ContextWrapper, _React$Component);

  function ContextWrapper() {
    _classCallCheck(this, ContextWrapper);

    return _possibleConstructorReturn(this, (ContextWrapper.__proto__ || Object.getPrototypeOf(ContextWrapper)).apply(this, arguments));
  }

  _createClass(ContextWrapper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { initialState: this.props.initialState };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ContextWrapper;
}(_react2.default.Component);

ContextWrapper.childContextTypes = {
  initialState: _propTypes2.default.object
};

ContextWrapper.propTypes = {
  children: _propTypes2.default.object.isRequired,
  initialState: _propTypes2.default.object
};

exports.default = ContextWrapper;

/***/ }),

/***/ "./src/CustomPager.jsx":
/*!*****************************!*\
  !*** ./src/CustomPager.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // CustomPager.jsx


var CustomPager = function (_React$Component) {
  _inherits(CustomPager, _React$Component);

  function CustomPager(props) {
    _classCallCheck(this, CustomPager);

    var _this = _possibleConstructorReturn(this, (CustomPager.__proto__ || Object.getPrototypeOf(CustomPager)).call(this, props));

    _this.state = {
      currentPage: 1,
      prevDisabled: _this.checkToDisablePrev(1),
      nextDisabled: _this.checkToDisableNext(1)
    };
    _this.onPrev = _this.onPrev.bind(_this);
    _this.onNext = _this.onNext.bind(_this);
    return _this;
  }

  _createClass(CustomPager, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.totalCount != this.props.totalCount) {
        this.setState({
          currentPage: 1,
          prevDisabled: this.checkToDisablePrev(1),
          nextDisabled: this.checkToDisableNext(1)
        });
      }
    }

    // ------------------------------------------------------------

  }, {
    key: 'totalPages',
    value: function totalPages() {
      return Math.ceil(this.props.totalCount / this.props.pageSize);
    }
  }, {
    key: 'checkToDisablePrev',
    value: function checkToDisablePrev(page) {
      return this.totalPages() == 0 || page < 2;
    }
  }, {
    key: 'checkToDisableNext',
    value: function checkToDisableNext(page) {
      return page > this.totalPages() - 1;
    }

    // ------------------------------------------------------------

  }, {
    key: 'onPrev',
    value: function onPrev() {
      var page = this.state.currentPage - 1;
      this.changeNewPage(page);
    }
  }, {
    key: 'onNext',
    value: function onNext() {
      var page = this.state.currentPage + 1;
      this.changeNewPage(page);
    }
  }, {
    key: 'changeNewPage',
    value: function changeNewPage(newPage) {
      var prevDisabled = this.checkToDisablePrev(newPage);
      var nextDisabled = this.checkToDisableNext(newPage);
      if (prevDisabled) newPage = 1;
      if (nextDisabled) newPage = this.totalPages();

      if (newPage != this.state.currentPage) {
        this.setState({
          currentPage: newPage,
          prevDisabled: prevDisabled,
          nextDisabled: nextDisabled
        });
        this.props.selectPage(newPage);
      }
    }

    // ------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Pager,
        null,
        _react2.default.createElement(
          _reactBootstrap.Pager.Item,
          { previous: true, disabled: this.state.prevDisabled, href: '#', onClick: this.onPrev },
          'Prev'
        ),
        _react2.default.createElement(
          _reactBootstrap.Pager.Item,
          { next: true, disabled: this.state.nextDisabled, href: '#', onClick: this.onNext },
          'Next'
        )
      );
    }
  }]);

  return CustomPager;
}(_react2.default.Component);

CustomPager.propTypes = {
  pageSize: _propTypes2.default.number.isRequired,
  totalCount: _propTypes2.default.number.isRequired,
  selectPage: _propTypes2.default.func.isRequired
};

exports.default = CustomPager;

/***/ }),

/***/ "./src/DateInput.jsx":
/*!***************************!*\
  !*** ./src/DateInput.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // DateInput.jsx


var DateInput = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

    _this.state = { value: _this.editFormat(props.value), focused: false, valid: true };
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(DateInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.value !== this.props.value) {
        this.setState({ value: this.editFormat(newProps.value) });
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      this.setState({ focused: true });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var value = this.unformat(this.state.value);
      var valid = this.state.value === '' || value != null;
      if (valid !== this.state.valid && this.props.onValidityChange) {
        this.props.onValidityChange(e, valid);
      }
      this.setState({ focused: false, valid: valid });
      if (valid) this.props.onChange(e, value);
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      if (e.target.value.match(/^[\d-]*$/)) {
        this.setState({ value: e.target.value });
      }
    }
  }, {
    key: 'displayFormat',
    value: function displayFormat(date) {
      return date != null ? date.toDateString() : '';
    }
  }, {
    key: 'editFormat',
    value: function editFormat(date) {
      return date != null ? date.toISOString().substr(0, 10) : '';
    }
  }, {
    key: 'unformat',
    value: function unformat(str) {
      var val = new Date(str);
      return isNaN(val.getTime()) ? null : val;
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.focused || !this.state.valid ? this.state.value : this.displayFormat(this.props.value);
      var childProps = Object.assign({}, this.props);
      delete childProps.onValidityChange;
      return _react2.default.createElement('input', _extends({
        type: 'text' }, childProps, { value: value,
        placeholder: this.state.focused ? 'yyyy-mm-dd' : null,
        onFocus: this.onFocus, onBlur: this.onBlur, onChange: this.onChange
      }));
    }
  }]);

  return DateInput;
}(_react2.default.Component);

DateInput.propTypes = {
  value: _propTypes2.default.object,
  onChange: _propTypes2.default.func.isRequired,
  onValidityChange: _propTypes2.default.func,
  name: _propTypes2.default.string.isRequired
};

exports.default = DateInput;

/***/ }),

/***/ "./src/Header.jsx":
/*!************************!*\
  !*** ./src/Header.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _reactSelect = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Async = __webpack_require__(/*! react-select/lib/Async */ "./node_modules/react-select/lib/Async.js");

var _Async2 = _interopRequireDefault(_Async);

__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _IssueAddNavItem = __webpack_require__(/*! ./IssueAddNavItem.jsx */ "./src/IssueAddNavItem.jsx");

var _IssueAddNavItem2 = _interopRequireDefault(_IssueAddNavItem);

var _SignInNavItem = __webpack_require__(/*! ./SignInNavItem.jsx */ "./src/SignInNavItem.jsx");

var _SignInNavItem2 = _interopRequireDefault(_SignInNavItem);

var _withToast = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");

var _withToast2 = _interopRequireDefault(_withToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  function searchIssues(input) {
    var _this = this;

    if (input.length < 2) return Promise.resolve([]);

    return fetch('/api/issues?search=' + input).then(function (response) {
      if (!response.ok) response.json().then(function (error) {
        return Promise.reject(error);
      });
      return response.json().then(function (data) {
        var options = data.records.map(function (issue) {
          return {
            value: issue._id,
            label: issue._id.substr(-4) + ': ' + issue.title
          };
        });
        return options;
      });
    }).catch(function (error) {
      _this.props.showError('Error in fetching data from server: ' + error);
    });
  }

  function filterOptions(options) {
    return options;
  }

  function selectIssue(item) {
    if (item) props.router.push('/issues/' + item.value);
  }

  function handleInputChange(input) {
    if (input.length < 2) {
      return " ";
    }
    return input;
  }

  return _react2.default.createElement(
    _reactBootstrap.Navbar,
    { fluid: true },
    _react2.default.createElement(
      _reactBootstrap.Col,
      { sm: 5 },
      _react2.default.createElement(
        _reactBootstrap.Navbar.Header,
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar.Brand,
          null,
          'Isssue Tracker'
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Nav,
        null,
        _react2.default.createElement(
          _reactRouterBootstrap.LinkContainer,
          { to: '/issues' },
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            null,
            'Issues'
          )
        ),
        _react2.default.createElement(
          _reactRouterBootstrap.LinkContainer,
          { to: '/reports' },
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            null,
            'Reports'
          )
        )
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Col,
      { sm: 4 },
      _react2.default.createElement(
        'div',
        { style: { paddingTop: 8 } },
        _react2.default.createElement(_Async2.default, {
          instanceId: 'search',
          placeholder: 'Search...',
          loadOptions: searchIssues,
          filterOptions: filterOptions,
          onChange: selectIssue,
          onInputChange: handleInputChange
        })
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Col,
      { sm: 3 },
      _react2.default.createElement(
        _reactBootstrap.Nav,
        { pullRight: true },
        props.user.signedIn ? _react2.default.createElement(_IssueAddNavItem2.default, { showError: props.showError }) : null,
        _react2.default.createElement(_SignInNavItem2.default, {
          user: props.user,
          onSignin: props.onSignin, onSignout: props.onSignout,
          showError: props.showError, showSucess: props.showSucess
        })
      )
    )
  );
}; // Header.jsx


Header.propTypes = {
  showError: _propTypes2.default.func.isRequired,
  showSucess: _propTypes2.default.func.isRequired,
  onSignin: _propTypes2.default.func.isRequired,
  onSignout: _propTypes2.default.func.isRequired,
  user: _propTypes2.default.object,
  router: _propTypes2.default.object
};

exports.default = (0, _reactRouter.withRouter)((0, _withToast2.default)(Header));

/***/ }),

/***/ "./src/IssueAddNavItem.jsx":
/*!*********************************!*\
  !*** ./src/IssueAddNavItem.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // IssueAddNavItem.jsx


var IssueAddNavItem = function (_React$Component) {
  _inherits(IssueAddNavItem, _React$Component);

  function IssueAddNavItem(props) {
    _classCallCheck(this, IssueAddNavItem);

    var _this = _possibleConstructorReturn(this, (IssueAddNavItem.__proto__ || Object.getPrototypeOf(IssueAddNavItem)).call(this, props));

    _this.state = {
      showing: false
    };
    _this.showModal = _this.showModal.bind(_this);
    _this.hideModal = _this.hideModal.bind(_this);
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  // ------------------------------------------------------------


  _createClass(IssueAddNavItem, [{
    key: 'showModal',
    value: function showModal() {
      this.setState({ showing: true });
    }
  }, {
    key: 'hideModal',
    value: function hideModal() {
      this.setState({ showing: false });
    }

    // ------------------------------------------------------------

  }, {
    key: 'submit',
    value: function submit(e) {
      var _this2 = this;

      e.preventDefault();
      this.hideModal();
      var form = document.forms.issueAdd;
      var newIssue = {
        owner: form.owner.value, title: form.title.value,
        status: 'New', created: new Date()
      };

      fetch('/api/issues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIssue)
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (updatedIssue) {
            _this2.props.router.push('/issues/' + updatedIssue._id);
          });
        } else {
          response.json().then(function (error) {
            _this2.props.showError('Failed to add issue: ' + error.message);
          });
        }
      }).catch(function (err) {
        _this2.props.showError('Error in sending data to server: ' + err.message);
      });
    }

    // ------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.NavItem,
        null,
        _react2.default.createElement(
          'span',
          { onClick: this.showModal },
          _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'plus' }),
          'Create Issue'
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { keyboard: true, show: this.state.showing, onHide: this.hideModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Create Issue'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              _reactBootstrap.Form,
              { name: 'issueAdd' },
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Title'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, { name: 'title', autoFocus: true })
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Owner'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, { name: 'owner' })
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.ButtonToolbar,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                { type: 'button', bsStyle: 'primary', onClick: this.submit },
                'Submit'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'link', onClick: this.hideModal },
                'Cancel'
              )
            )
          )
        )
      );
    }
  }]);

  return IssueAddNavItem;
}(_react2.default.Component);

IssueAddNavItem.propTypes = {
  router: _propTypes2.default.object,
  showError: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRouter.withRouter)(IssueAddNavItem);

/***/ }),

/***/ "./src/IssueEdit.jsx":
/*!***************************!*\
  !*** ./src/IssueEdit.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _NumInput = __webpack_require__(/*! ./NumInput.jsx */ "./src/NumInput.jsx");

var _NumInput2 = _interopRequireDefault(_NumInput);

var _DateInput = __webpack_require__(/*! ./DateInput.jsx */ "./src/DateInput.jsx");

var _DateInput2 = _interopRequireDefault(_DateInput);

var _withToast = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");

var _withToast2 = _interopRequireDefault(_withToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // IssueEdit.jsx


var IssueEdit = function (_React$Component) {
  _inherits(IssueEdit, _React$Component);

  _createClass(IssueEdit, null, [{
    key: 'dataFetcher',
    value: function dataFetcher(_ref) {
      var params = _ref.params,
          urlBase = _ref.urlBase;

      return fetch((urlBase || '') + '/api/issues/' + params.id).then(function (response) {
        if (!response.ok) return response.json().then(function (error) {
          return Promise.reject(error);
        });
        return response.json().then(function (data) {
          return { IssueEdit: data };
        });
      });
    }
  }]);

  function IssueEdit(props, context) {
    _classCallCheck(this, IssueEdit);

    var _this = _possibleConstructorReturn(this, (IssueEdit.__proto__ || Object.getPrototypeOf(IssueEdit)).call(this, props, context));

    var issue = void 0;
    if (context.initialState.IssueEdit) {
      issue = context.initialState.IssueEdit;
      issue.created = new Date(issue.created);
      issue.completionDate = issue.completionDate != null ? new Date(issue.completionDate) : null;
    } else {
      issue = {
        _id: '', title: '', status: '', owner: '', effort: null,
        completionDate: null, created: null
      };
    }
    _this.state = {
      issue: issue,
      invalidFields: {}, showingValidation: false
    };
    _this.dismissValidation = _this.dismissValidation.bind(_this);
    _this.showValidation = _this.showValidation.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onValidityChange = _this.onValidityChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(IssueEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.params.id !== this.props.params.id) {
        this.loadData();
      }
    }

    // ----------------------------------------------------------------

  }, {
    key: 'onChange',
    value: function onChange(event, convertedValue) {
      var issue = Object.assign({}, this.state.issue);
      var value = convertedValue !== undefined ? convertedValue : event.target.value;
      issue[event.target.name] = value;
      this.setState({ issue: issue });
    }
  }, {
    key: 'onValidityChange',
    value: function onValidityChange(event, valid) {
      var invalidFields = Object.assign({}, this.state.invalidFields);
      if (!valid) {
        invalidFields[event.target.name] = true;
      } else {
        delete invalidFields[event.target.name];
      }
      this.setState({ invalidFields: invalidFields });
    }
  }, {
    key: 'showValidation',
    value: function showValidation() {
      this.setState({ showingValidation: true });
    }
  }, {
    key: 'dismissValidation',
    value: function dismissValidation() {
      this.setState({ showingValidation: false });
    }

    // ----------------------------------------------------------------

  }, {
    key: 'onSubmit',
    value: function onSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      this.showValidation();
      if (Object.keys(this.state.invalidFields).length !== 0) {
        return;
      }

      fetch('/api/issues/' + this.props.params.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.issue)
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (updatedIssue) {
            updatedIssue.created = new Date(updatedIssue.created);
            if (updatedIssue.completionDate) {
              updatedIssue.completionDate = new Date(updatedIssue.completionDate);
            }
            _this2.setState({ issue: updatedIssue });
            _this2.props.showSucess('Updated issue successfully.');
          });
        } else {
          response.json().then(function (error) {
            _this2.props.showError('Failed to update issue: ' + error.message);
          });
        }
      }).catch(function (err) {
        _this2.props.showError('Error in sending data to server: ' + err.message);
      });
    }

    // ----------------------------------------------------------------

  }, {
    key: 'loadData',
    value: function loadData() {
      var _this3 = this;

      IssueEdit.dataFetcher({ params: this.props.params }).then(function (data) {
        var issue = data.IssueEdit;
        issue.created = new Date(issue.created);
        issue.completionDate = issue.completionDate != null ? new Date(issue.completionDate) : null;
        _this3.setState({ issue: issue });
      }).catch(function (err) {
        _this3.props.showError('Error in fetching data from server: ' + err.message);
      });
    }

    // ----------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      var issue = this.state.issue;
      var validationMessage = null;
      if (Object.keys(this.state.invalidFields).length !== 0 && this.state.showingValidation) {
        validationMessage = _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'danger', onDismiss: this.dismissValidation },
          'Please correct invalid fields before submitting.'
        );
      }
      return _react2.default.createElement(
        _reactBootstrap.Panel,
        null,
        _react2.default.createElement(
          _reactBootstrap.Panel.Heading,
          null,
          _react2.default.createElement(
            _reactBootstrap.Panel.Title,
            null,
            'Edit Issue'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Panel.Body,
          null,
          _react2.default.createElement(
            _reactBootstrap.Form,
            { horizontal: true, onSubmit: this.onSubmit },
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
                'ID'
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 9 },
                _react2.default.createElement(
                  _reactBootstrap.FormControl.Static,
                  null,
                  issue._id
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
                'Created'
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 9 },
                _react2.default.createElement(
                  _reactBootstrap.FormControl.Static,
                  null,
                  issue.created ? issue.created.toDateString() : ''
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
                'Status'
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 9 },
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  { componentClass: 'select', name: 'status', value: issue.status, onChange: this.onChange },
                  _react2.default.createElement(
                    'option',
                    { value: 'New' },
                    'New'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'Open' },
                    'Open'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'Assigned' },
                    'Assigned'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'Fixed' },
                    'Fixed'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'Verified' },
                    'Verified'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'Closed' },
                    'Closed'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
                'Owner'
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 9 },
                _react2.default.createElement(_reactBootstrap.FormControl, { name: 'owner', value: issue.owner, onChange: this.onChange })
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
                'Effort'
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 9 },
                _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: _NumInput2.default, size: 5, name: 'effort', value: issue.effort, onChange: this.onChange })
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              { validationState: this.state.invalidFields.completionDate ? 'error' : null },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
                'Completion Date'
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 9 },
                _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: _DateInput2.default, name: 'completionDate',
                  value: issue.completionDate, onChange: this.onChange,
                  onValidityChange: this.onValidityChange
                }),
                _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
                'Title'
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 9 },
                _react2.default.createElement(_reactBootstrap.FormControl, { name: 'title', value: issue.title, onChange: this.onChange })
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { smOffset: 3, sm: 6 },
                _react2.default.createElement(
                  _reactBootstrap.ButtonToolbar,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', type: 'submit', disabled: !this.props.user.signedIn },
                    'Submit'
                  ),
                  _react2.default.createElement(
                    _reactRouterBootstrap.LinkContainer,
                    { to: '/issues' },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      { bsStyle: 'link' },
                      'Back'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { smOffset: 3, sm: 9 },
                validationMessage
              )
            )
          )
        )
      );
    }
  }]);

  return IssueEdit;
}(_react2.default.Component);

IssueEdit.contextTypes = {
  initialState: _propTypes2.default.object
};

IssueEdit.propTypes = {
  params: _propTypes2.default.object.isRequired,
  showSucess: _propTypes2.default.func.isRequired,
  showError: _propTypes2.default.func.isRequired,
  user: _propTypes2.default.object.isRequired
};

var IssueEditWithToast = (0, _withToast2.default)(IssueEdit);
IssueEditWithToast.dataFetcher = IssueEdit.dataFetcher;

exports.default = IssueEditWithToast;

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // IssueFilter.jsx


var IssueFilter = function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter(props) {
    _classCallCheck(this, IssueFilter);

    var _this = _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).call(this));

    _this.state = {
      status: props.initFilter.status || '',
      effort_gte: props.initFilter.gte || '',
      effort_lte: props.initFilter.lte || '',
      changed: false
    };
    _this.onChangeStatus = _this.onChangeStatus.bind(_this);
    _this.onChangeEffortGte = _this.onChangeEffortGte.bind(_this);
    _this.onChangeEffortLte = _this.onChangeEffortLte.bind(_this);
    _this.applyFilter = _this.applyFilter.bind(_this);
    _this.resetFilter = _this.resetFilter.bind(_this);
    _this.clearFilter = _this.clearFilter.bind(_this);
    return _this;
  }

  _createClass(IssueFilter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        status: newProps.initFilter.status || '',
        effort_gte: newProps.initFilter.effort_gte || '',
        effort_lte: newProps.initFilter.effort_lte || '',
        changed: false
      });
    }

    // ----------------------------------------------------------------

  }, {
    key: 'onChangeStatus',
    value: function onChangeStatus(e) {
      this.setState({ status: e.target.value, changed: true });
    }
  }, {
    key: 'onChangeEffortGte',
    value: function onChangeEffortGte(e) {
      var effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effort_gte: e.target.value, changed: true });
      }
    }
  }, {
    key: 'onChangeEffortLte',
    value: function onChangeEffortLte(e) {
      var effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effort_lte: e.target.value, changed: true });
      }
    }

    // ----------------------------------------------------------------

  }, {
    key: 'applyFilter',
    value: function applyFilter() {
      var newFilter = {};
      if (this.state.status) newFilter.status = this.state.status;
      if (this.state.effort_gte) newFilter.effort_gte = this.state.effort_gte;
      if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
      this.props.setFilter(newFilter);
    }
  }, {
    key: 'resetFilter',
    value: function resetFilter() {
      this.setState({
        status: this.props.initFilter.status || '',
        effort_gte: this.props.initFilter.effort_gte || '',
        effort_lte: this.props.initFilter.effort_lte || '',
        changed: false
      });
    }
  }, {
    key: 'clearFilter',
    value: function clearFilter() {
      this.props.setFilter({});
    }

    // ----------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, sm: 6, md: 4, lg: 3 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              'Status'
            ),
            _react2.default.createElement(
              _reactBootstrap.FormControl,
              {
                componentClass: 'select', value: this.state.status,
                onChange: this.onChangeStatus },
              _react2.default.createElement(
                'option',
                { value: '' },
                '(Any)'
              ),
              _react2.default.createElement(
                'option',
                { value: 'New' },
                'New'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Open' },
                'Open'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Assigned' },
                'Assigned'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Fixed' },
                'Fixed'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Verified' },
                'Verified'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Closed' },
                'Closed'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, sm: 6, md: 4, lg: 3 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              'Effort'
            ),
            _react2.default.createElement(
              _reactBootstrap.InputGroup,
              null,
              _react2.default.createElement(_reactBootstrap.FormControl, { value: this.state.effort_gte, onChange: this.onChangeEffortGte }),
              _react2.default.createElement(
                _reactBootstrap.InputGroup.Addon,
                null,
                '-'
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { value: this.state.effort_lte, onChange: this.onChangeEffortLte })
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, sm: 6, md: 4, lg: 3 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\xA0'
            ),
            _react2.default.createElement(
              _reactBootstrap.ButtonToolbar,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'primary', onClick: this.applyFilter },
                'Apply'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.resetFilter, disabled: !this.state.changed },
                'Reset'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.clearFilter },
                'Clear'
              )
            )
          )
        )
      );
    }
  }]);

  return IssueFilter;
}(_react2.default.Component);

IssueFilter.propTypes = {
  setFilter: _propTypes2.default.func.isRequired,
  initFilter: _propTypes2.default.object.isRequired
};

exports.default = IssueFilter;

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _IssueFilter = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");

var _IssueFilter2 = _interopRequireDefault(_IssueFilter);

var _withToast = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");

var _withToast2 = _interopRequireDefault(_withToast);

var _CustomPager = __webpack_require__(/*! ./CustomPager.jsx */ "./src/CustomPager.jsx");

var _CustomPager2 = _interopRequireDefault(_CustomPager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // IssueList.jsx


var PAGE_SIZE = 10;

// ------------------------------------------------------------
var IssueRow = function IssueRow(props) {
  function onDeleteClick() {
    props.deleteIssue(props.issue._id);
  }

  var btnDel = _react2.default.createElement(
    'button',
    { bssize: 'xsmall', onClick: onDeleteClick },
    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'trash' })
  );

  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/issues/' + props.issue._id },
        props.issue._id.substr(-4)
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.status
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.owner
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.created.toDateString()
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.effort
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.completionDate ? props.issue.completionDate.toDateString() : ''
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.title
    ),
    _react2.default.createElement(
      'td',
      null,
      props.deleteIssue ? btnDel : null
    )
  );
};

IssueRow.propTypes = {
  issue: _propTypes2.default.object.isRequired,
  deleteIssue: _propTypes2.default.func
};

// ------------------------------------------------------------
function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return _react2.default.createElement(IssueRow, { key: issue._id,
      issue: issue, deleteIssue: props.deleteIssue });
  });
  return _react2.default.createElement(
    _reactBootstrap.Table,
    { bordered: true, condensed: true, hover: true, responsive: true },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Id'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Status'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Owner'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Created'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Effort'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Completion Date'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Title'
        ),
        props.deleteIssue ? _react2.default.createElement('th', null) : null
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      issueRows
    )
  );
}

IssueTable.propTypes = {
  issues: _propTypes2.default.array.isRequired,
  deleteIssue: _propTypes2.default.func
};

// ------------------------------------------------------------

var IssueList = function (_React$Component) {
  _inherits(IssueList, _React$Component);

  _createClass(IssueList, null, [{
    key: 'dataFetcher',
    value: function dataFetcher(_ref) {
      var urlBase = _ref.urlBase,
          location = _ref.location;

      var query = Object.assign({}, location.query);
      var pageStr = query._page;
      if (pageStr) {
        delete query._page;
        query._offset = (parseInt(pageStr, 10) - 1) * PAGE_SIZE;
      }
      query._limit = PAGE_SIZE;
      var search = Object.keys(query).map(function (k) {
        return k + '=' + query[k];
      }).join('&');
      return fetch((urlBase || '') + '/api/issues?' + search).then(function (response) {
        if (!response.ok) return response.json().then(function (error) {
          return Promise.reject(error);
        });
        return response.json().then(function (data) {
          return { IssueList: data };
        });
      });
    }
  }]);

  function IssueList(props, context) {
    _classCallCheck(this, IssueList);

    var _this = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this, props, context));

    var data = context.initialState.IssueList ? context.initialState.IssueList : { metadata: { totalCount: 0 }, records: [] };
    var issues = data.records;
    issues.forEach(function (issue) {
      issue.created = new Date(issue.created);
      if (issue.completionDate) {
        issue.completionDate = new Date(issue.completionDate);
      }
    });
    _this.state = {
      issues: issues, totalCount: data.metadata.totalCount
    };
    _this.deleteIssue = _this.deleteIssue.bind(_this);
    _this.setFilter = _this.setFilter.bind(_this);
    _this.selectPage = _this.selectPage.bind(_this);
    return _this;
  }

  _createClass(IssueList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var oldQuery = prevProps.location.query;
      var newQuery = this.props.location.query;
      if (oldQuery.status === newQuery.status && oldQuery.effort_gte === newQuery.effort_gte && oldQuery.effort_lte === newQuery.effort_lte && oldQuery._page === newQuery._page) {
        return;
      }
      this.loadData();
    }

    // ------------------------------------------------------------

  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      IssueList.dataFetcher({ location: this.props.location }).then(function (data) {
        var issues = data.IssueList.records;
        issues.forEach(function (issue) {
          issue.created = new Date(issue.created);
          if (issue.completionDate) {
            issue.completionDate = new Date(issue.completionDate);
          }
        });
        _this2.setState({ issues: issues, totalCount: data.IssueList.metadata.totalCount });
      }).catch(function (err) {
        _this2.props.showError('Error in fetching data from server: ' + err);
      });
    }
  }, {
    key: 'deleteIssue',
    value: function deleteIssue(id) {
      var _this3 = this;

      fetch('/api/issues/' + id, { method: 'DELETE' }).then(function (response) {
        if (!response.ok) _this3.props.showError('Failed to delete issue');else _this3.loadData();
      });
    }

    // ------------------------------------------------------------

  }, {
    key: 'setFilter',
    value: function setFilter(query) {
      this.props.router.push({ pathname: this.props.location.pathname, query: query });
    }
  }, {
    key: 'selectPage',
    value: function selectPage(page) {
      var query = Object.assign(this.props.location.query, { _page: page });
      this.props.router.push({ pathname: this.props.location.pathname, query: query });
    }

    // ------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Panel,
          { defaultExpanded: true },
          _react2.default.createElement(
            _reactBootstrap.Panel.Heading,
            null,
            _react2.default.createElement(
              _reactBootstrap.Panel.Title,
              { toggle: true },
              'Filter'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel.Collapse,
            null,
            _react2.default.createElement(
              _reactBootstrap.Panel.Body,
              null,
              _react2.default.createElement(_IssueFilter2.default, { setFilter: this.setFilter, initFilter: this.props.location.query })
            )
          )
        ),
        _react2.default.createElement(_CustomPager2.default, { pageSize: PAGE_SIZE, totalCount: this.state.totalCount, selectPage: this.selectPage }),
        _react2.default.createElement(IssueTable, {
          issues: this.state.issues,
          deleteIssue: this.props.user.signedIn ? this.deleteIssue : null
        })
      );
    }
  }]);

  return IssueList;
}(_react2.default.Component);

IssueList.contextTypes = {
  initialState: _propTypes2.default.object
};

IssueList.propTypes = {
  location: _propTypes2.default.object.isRequired,
  router: _propTypes2.default.object,
  showError: _propTypes2.default.func.isRequired,
  user: _propTypes2.default.object.isRequired
};

var IssueListWithToast = (0, _withToast2.default)(IssueList);
IssueListWithToast.dataFetcher = IssueList.dataFetcher;

exports.default = IssueListWithToast;

/***/ }),

/***/ "./src/IssueReport.jsx":
/*!*****************************!*\
  !*** ./src/IssueReport.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _IssueFilter = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");

var _IssueFilter2 = _interopRequireDefault(_IssueFilter);

var _withToast = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");

var _withToast2 = _interopRequireDefault(_withToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // IssueReport.jsx


var statuses = ['New', 'Open', 'Assigned', 'Fixed', 'Verified', 'Closed'];

// ------------------------------------------------------------
var StatRow = function StatRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      props.owner
    ),
    statuses.map(function (status, index) {
      return _react2.default.createElement(
        'td',
        { key: index },
        props.counts[status]
      );
    })
  );
};

StatRow.propTypes = {
  owner: _propTypes2.default.string.isRequired,
  counts: _propTypes2.default.object.isRequired
};

// ------------------------------------------------------------

var IssueReport = function (_React$Component) {
  _inherits(IssueReport, _React$Component);

  _createClass(IssueReport, null, [{
    key: 'dataFetcher',
    value: function dataFetcher(_ref) {
      var urlBase = _ref.urlBase,
          location = _ref.location;

      var search = location.search ? location.search + '&_summary' : '?_summary';
      return fetch((urlBase || '') + '/api/issues' + search).then(function (response) {
        if (!response.ok) return response.json().then(function (error) {
          return Promise.reject(error);
        });
        return response.json().then(function (data) {
          return { IssueReport: data };
        });
      });
    }
  }]);

  function IssueReport(props, context) {
    _classCallCheck(this, IssueReport);

    var _this = _possibleConstructorReturn(this, (IssueReport.__proto__ || Object.getPrototypeOf(IssueReport)).call(this, props, context));

    var stats = context.initialState.IssueReport ? context.initialState.IssueReport : {};
    _this.state = {
      stats: stats
    };
    _this.setFilter = _this.setFilter.bind(_this);
    return _this;
  }

  _createClass(IssueReport, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var oldQuery = prevProps.location.query;
      var newQuery = this.props.location.query;
      if (oldQuery.status === newQuery.status && oldQuery.effort_gte === newQuery.effort_gte && oldQuery.effort_lte === newQuery.effort_lte) {
        return;
      }
      this.loadData();
    }

    // ------------------------------------------------------------

  }, {
    key: 'setFilter',
    value: function setFilter(query) {
      this.props.router.push({ pathname: this.props.location.pathname, query: query });
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      IssueReport.dataFetcher({ location: this.props.location }).then(function (data) {
        _this2.setState({ stats: data.IssueReport });
      }).catch(function (err) {
        _this2.props.showError('Error in fetching data from server: ' + err);
      });
    }

    // ------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Panel,
          { defaultExpanded: true },
          _react2.default.createElement(
            _reactBootstrap.Panel.Heading,
            null,
            _react2.default.createElement(
              _reactBootstrap.Panel.Title,
              { toggle: true },
              'Filter'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel.Collapse,
            null,
            _react2.default.createElement(
              _reactBootstrap.Panel.Body,
              null,
              _react2.default.createElement(_IssueFilter2.default, { setFilter: this.setFilter, initFilter: this.props.location.query })
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Table,
          { bordered: true, condensed: true, hover: true, responsive: true },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement('th', null),
              statuses.map(function (status, index) {
                return _react2.default.createElement(
                  'th',
                  { key: index },
                  status
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            Object.keys(this.state.stats).map(function (owner, index) {
              return _react2.default.createElement(StatRow, { key: index, owner: owner, counts: _this3.state.stats[owner] });
            })
          )
        )
      );
    }
  }]);

  return IssueReport;
}(_react2.default.Component);

IssueReport.propTypes = {
  location: _propTypes2.default.object.isRequired,
  router: _propTypes2.default.object,
  showError: _propTypes2.default.func.isRequired
};

IssueReport.contextTypes = {
  initialState: _propTypes2.default.object
};

var IssueReportWithToast = (0, _withToast2.default)(IssueReport);
IssueReportWithToast.dataFetcher = IssueReport.dataFetcher;

exports.default = IssueReportWithToast;

/***/ }),

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NumInput.jsx


var NumInput = function (_React$Component) {
  _inherits(NumInput, _React$Component);

  function NumInput(props) {
    _classCallCheck(this, NumInput);

    var _this = _possibleConstructorReturn(this, (NumInput.__proto__ || Object.getPrototypeOf(NumInput)).call(this, props));

    _this.state = { value: _this.format(props.value) };
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(NumInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({ value: this.format(newProps.value) });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      this.props.onChange(e, this.unformat(this.state.value));
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      if (e.target.value.match(/^\d*$/)) {
        this.setState({ value: e.target.value });
      }
    }
  }, {
    key: 'format',
    value: function format(num) {
      return num != null ? num.toString() : '';
    }
  }, {
    key: 'unformat',
    value: function unformat(str) {
      var val = parseInt(str, 10);
      return isNaN(val) ? null : val;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({
        tyep: 'text' }, this.props, { value: this.state.value,
        onBlur: this.onBlur, onChange: this.onChange
      }));
    }
  }]);

  return NumInput;
}(_react2.default.Component);

NumInput.propTypes = {
  value: _propTypes2.default.number,
  onChange: _propTypes2.default.func.isRequired
};

exports.default = NumInput;

/***/ }),

/***/ "./src/Routes.jsx":
/*!************************!*\
  !*** ./src/Routes.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _App = __webpack_require__(/*! ./App.jsx */ "./src/App.jsx");

var _App2 = _interopRequireDefault(_App);

var _IssueList = __webpack_require__(/*! ./IssueList.jsx */ "./src/IssueList.jsx");

var _IssueList2 = _interopRequireDefault(_IssueList);

var _IssueEdit = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/IssueEdit.jsx");

var _IssueEdit2 = _interopRequireDefault(_IssueEdit);

var _IssueReport = __webpack_require__(/*! ./IssueReport.jsx */ "./src/IssueReport.jsx");

var _IssueReport2 = _interopRequireDefault(_IssueReport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes.jsx
var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _App2.default },
  _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/issues' }),
  _react2.default.createElement(_reactRouter.Route, { path: 'issues', component: (0, _reactRouter.withRouter)(_IssueList2.default) }),
  _react2.default.createElement(_reactRouter.Route, { path: 'issues/:id', component: _IssueEdit2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'reports', component: (0, _reactRouter.withRouter)(_IssueReport2.default) }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
);

/***/ }),

/***/ "./src/SignInNavItem.jsx":
/*!*******************************!*\
  !*** ./src/SignInNavItem.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // SignInNavItem.jsx


var SignInNavItem = function (_React$Component) {
  _inherits(SignInNavItem, _React$Component);

  function SignInNavItem(props) {
    _classCallCheck(this, SignInNavItem);

    var _this = _possibleConstructorReturn(this, (SignInNavItem.__proto__ || Object.getPrototypeOf(SignInNavItem)).call(this, props));

    _this.state = {
      showing: false, disabled: true
    };
    _this.showModal = _this.showModal.bind(_this);
    _this.hideModal = _this.hideModal.bind(_this);
    _this.signout = _this.signout.bind(_this);
    _this.signin = _this.signin.bind(_this);
    return _this;
  }

  _createClass(SignInNavItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.gapi.load('auth2', function () {
        if (!window.gapi.auth2.getAuthInstance()) {
          if (!window.config || !window.config.googleClientId) {
            _this2.props.showError('Missing Google Client ID or config file /static/config.js');
          } else {
            window.gapi.auth2.init({ client_id: window.config.googleClientId }).then(function () {
              _this2.setState({ disabled: false });
            });
          }
        }
      });
    }

    // ------------------------------------------------------------

  }, {
    key: 'signin',
    value: function signin() {
      var _this3 = this;

      this.hideModal();
      var auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signIn().then(function (googleUser) {
        fetch('/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id_token: googleUser.getAuthResponse().id_token })
        }).then(function (response) {
          if (response.ok) {
            response.json().then(function (user) {
              _this3.props.onSignin(user.name);
            });
          } else {
            response.json().then(function (error) {
              _this3.props.showError('App login failed: ' + error);
            });
          }
        }).catch(function (err) {
          _this3.props.showError('Error posting login to app: ' + err);
        });
      }, function (error) {
        _this3.props.showError('Error authenticating with Google: ' + error);
      });
    }
  }, {
    key: 'signout',
    value: function signout() {
      var _this4 = this;

      var auth2 = window.gapi.auth2.getAuthInstance();
      fetch('/signout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          auth2.signOut().then(function () {
            _this4.props.showSucess('Successfully signed out.');
            _this4.props.onSignout();
          });
        }
      });
    }

    // ------------------------------------------------------------

  }, {
    key: 'showModal',
    value: function showModal() {
      if (this.state.disabled) {
        this.props.showError('Missing Google Client ID or config file /static/config.js');
      } else {
        this.setState({ showing: true });
      }
    }
  }, {
    key: 'hideModal',
    value: function hideModal() {
      this.setState({ showing: false });
    }

    // ------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      if (this.props.user.signedIn) {
        return _react2.default.createElement(
          _reactBootstrap.NavDropdown,
          { title: this.props.user.name, id: 'user-dropdown' },
          _react2.default.createElement(
            _reactBootstrap.MenuItem,
            { onClick: this.signout },
            'Sign out'
          )
        );
      }
      return _react2.default.createElement(
        _reactBootstrap.NavItem,
        null,
        _react2.default.createElement(
          'span',
          { onClick: this.showModal, style: { width: "100%", height: "100%" } },
          'Sign in'
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { keyboard: true, show: this.state.showing, onHide: this.hideModal, bsSize: 'sm' },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Sign in'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { block: true, disabled: this.state.disabled, onClick: this.signin },
              _react2.default.createElement('img', { src: '/btn_google_signin_dark_normal_web.png', alt: 'Signin' })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'link', onClick: this.hideModal },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return SignInNavItem;
}(_react2.default.Component);

SignInNavItem.propTypes = {
  user: _propTypes2.default.object,
  onSignin: _propTypes2.default.func.isRequired,
  onSignout: _propTypes2.default.func.isRequired,
  showError: _propTypes2.default.func.isRequired,
  showSucess: _propTypes2.default.func.isRequired
};

exports.default = SignInNavItem;

/***/ }),

/***/ "./src/Toast.jsx":
/*!***********************!*\
  !*** ./src/Toast.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Toast.jsx


var Toast = function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.showing) {
        clearTimeout(this.dimissTimer);
        this.dimissTimer = setTimeout(this.props.onDismiss, 5000);
      }
    }
  }, {
    key: 'componentWillUnamount',
    value: function componentWillUnamount() {
      clearTimeout(this.dimissTimer);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Collapse,
        { 'in': this.props.showing },
        _react2.default.createElement(
          'div',
          { style: { position: 'fixed', top: 30, left: 0, right: 0, textAlign: 'center' } },
          _react2.default.createElement(
            _reactBootstrap.Alert,
            {
              style: { display: 'inline-block', width: 500 },
              bsStyle: this.props.bsStyle,
              onDismiss: this.props.onDismiss
            },
            this.props.message
          )
        )
      );
    }
  }]);

  return Toast;
}(_react2.default.Component);

Toast.propTypes = {
  showing: _propTypes2.default.bool.isRequired,
  onDismiss: _propTypes2.default.func.isRequired,
  bsStyle: _propTypes2.default.string,
  message: _propTypes2.default.string.isRequired
};

Toast.defaultProps = {
  bsStyle: 'success'
};

exports.default = Toast;

/***/ }),

/***/ "./src/withToast.jsx":
/*!***************************!*\
  !*** ./src/withToast.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Toast = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // withToast.jsx


function withToast(OriginalComponent) {
  return function (_React$Component) {
    _inherits(WithToast, _React$Component);

    function WithToast(props) {
      _classCallCheck(this, WithToast);

      var _this = _possibleConstructorReturn(this, (WithToast.__proto__ || Object.getPrototypeOf(WithToast)).call(this, props));

      _this.state = {
        toastVisible: false, toastMessage: '', toastType: 'success'
      };
      _this.showSucess = _this.showSucess.bind(_this);
      _this.showError = _this.showError.bind(_this);
      _this.dismissToast = _this.dismissToast.bind(_this);
      return _this;
    }

    _createClass(WithToast, [{
      key: 'showSucess',
      value: function showSucess(message) {
        this.setState({ toastVisible: true, toastMessage: message, toastType: 'success' });
      }
    }, {
      key: 'showError',
      value: function showError(message) {
        this.setState({ toastVisible: true, toastMessage: message, toastType: 'danger' });
      }
    }, {
      key: 'dismissToast',
      value: function dismissToast() {
        this.setState({ toastVisible: false });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(OriginalComponent, _extends({
            showError: this.showError, showSucess: this.showSucess
          }, this.props)),
          _react2.default.createElement(_Toast2.default, {
            showing: this.state.toastVisible, message: this.state.toastMessage,
            onDismiss: this.dismissToast, bsStyle: this.state.toastType
          })
        );
      }
    }]);

    return WithToast;
  }(_react2.default.Component);
}

exports.default = withToast;

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./client/Client.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./client/Client.jsx */"./client/Client.jsx");


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map