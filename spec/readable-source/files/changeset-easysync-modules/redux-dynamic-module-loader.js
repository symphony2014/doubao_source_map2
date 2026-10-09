// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'reactReduxCore'
// - Resolved require(509563) to 'react-redux-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 55868
         */
module.exports = function (module, exports, require) {
  var r;
  var i = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  }, function (t, e) {
    function n() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  });
  var o = this && this.__assign || function () {
    return (o = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  exports.__esModule = true;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    i(e, t);
    e.prototype.render = function () {
      var t = this;
      return reactCoreLibraryReexport.createElement(reactReduxCore.ReactReduxContext.Consumer, null, function (e) {
        return reactCoreLibraryReexport.createElement(c, o({}, t.props, {
          reactReduxContext: e
        }));
      });
    };
    return e;
  }(reactCoreLibraryReexport.Component);
  exports.DynamicModuleLoader = u;
  var c = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n._providerInitializationNeeded = false;
      n._cleanup = function () {
        if (n._addedModules) {
          n._addedModules.remove();
          n._addedModules = undefined;
        }
      };
      if (e.reactReduxContext == null) {
        throw Error("Tried to render DynamicModuleLoader, but no ReactReduxContext was provided");
      }
      n._store = e.reactReduxContext ? e.reactReduxContext.store : undefined;
      if (n.props.strictMode) {
        n.state = {
          readyToRender: false
        };
      } else {
        n._addModules();
        n.state = {
          readyToRender: true
        };
      }
      return n;
    }
    i(e, t);
    e.prototype.render = function () {
      if (this.state.readyToRender) {
        if (this._providerInitializationNeeded) {
          return reactCoreLibraryReexport.createElement(reactReduxCore.Provider, {
            store: this._store
          }, reactCoreLibraryReexport.createElement(u, o({}, this.props)));
        } else {
          return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, this._renderLoader(), reactCoreLibraryReexport.createElement(l, {
            cleanup: this._cleanup
          }));
        }
      } else {
        return null;
      }
    };
    e.prototype._renderLoader = function () {
      if (this.props.children) {
        if (typeof this.props.children == "function") {
          return this.props.children();
        } else {
          return this.props.children;
        }
      } else {
        return null;
      }
    };
    e.prototype._addModules = function () {
      var t = this.props;
      var e = t.createStore;
      var n = t.modules;
      if (this._store) {
        this._addedModules = this._store.addModules(n);
      } else if (e) {
        this._store = e();
        this._providerInitializationNeeded = true;
      } else {
        throw Error("Store could not be resolved from React context");
      }
    };
    e.prototype.componentDidMount = function () {
      if (this.props.strictMode) {
        this._addModules();
        this.setState({
          readyToRender: true
        });
      }
    };
    return e;
  }(reactCoreLibraryReexport.Component);
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    i(e, t);
    e.prototype.render = function () {
      return null;
    };
    e.prototype.componentWillUnmount = function () {
      this.props.cleanup();
    };
    return e;
  }(reactCoreLibraryReexport.Component);
}