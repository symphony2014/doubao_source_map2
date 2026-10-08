// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'c' to 'propTypesFactoryWrapper'
// - Resolved require(928010) to 'prop-types-factory-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 35867
         */
module.exports = function (module, exports, require) {
  var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  function i(e, t) {
    if (!(e instanceof t)) {
      throw TypeError("Cannot call a class as a function");
    }
  }
  function o(e, t) {
    if (!e) {
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    if (t && (typeof t == "object" || typeof t == "function")) {
      return t;
    } else {
      return e;
    }
  }
  function a(e, t) {
    if (typeof t != "function" && t !== null) {
      throw TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t);
      } else {
        e.__proto__ = t;
      }
    }
  }
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var u = [];
  var f = [];
  function l(e) {
    var t = e();
    var r = {
      loading: true,
      loaded: null,
      error: null
    };
    r.promise = t.then(function (e) {
      r.loading = false;
      r.loaded = e;
      return e;
    }).catch(function (e) {
      r.loading = false;
      r.error = e;
      throw e;
    });
    return r;
  }
  function d(e) {
    var t = {
      loading: false,
      loaded: {},
      error: null
    };
    var r = [];
    try {
      Object.keys(e).forEach(function (n) {
        var i = l(e[n]);
        if (i.loading) {
          t.loading = true;
        } else {
          t.loaded[n] = i.loaded;
          t.error = i.error;
        }
        r.push(i.promise);
        i.promise.then(function (e) {
          t.loaded[n] = e;
        }).catch(function (e) {
          t.error = e;
        });
      });
    } catch (e) {
      t.error = e;
    }
    t.promise = Promise.all(r).then(function (e) {
      t.loading = false;
      return e;
    }).catch(function (e) {
      t.loading = false;
      throw e;
    });
    return t;
  }
  function h(e, t) {
    return reactCoreLibraryReexport.createElement(e && e.__esModule ? e.default : e, t);
  }
  function g(e, t) {
    if (!t.loading) {
      throw Error("react-loadable requires a `loading` component");
    }
    var l;
    var d;
    var g = Object.assign({
      loader: null,
      loading: null,
      delay: 200,
      timeout: null,
      render: h,
      webpack: null,
      modules: null
    }, t);
    var x = null;
    function M() {
      x ||= e(g.loader);
      return x.promise;
    }
    u.push(M);
    if (typeof g.webpack == "function") {
      f.push(function () {
        var e;
        e = g.webpack;
        if (n(require.m) === "object" && e().every(function (e) {
          return e !== undefined && require.m[e] !== undefined;
        })) {
          return M();
        }
      });
    }
    d = l = function (t) {
      function r(n) {
        i(this, r);
        var a = o(this, t.call(this, n));
        a.retry = function () {
          a.setState({
            error: null,
            loading: true,
            timedOut: false
          });
          x = e(g.loader);
          a._loadModule();
        };
        M();
        a.state = {
          error: x.error,
          pastDelay: false,
          timedOut: false,
          loading: x.loading,
          loaded: x.loaded
        };
        return a;
      }
      a(r, t);
      r.preload = function () {
        return M();
      };
      r.prototype.componentWillMount = function () {
        this._mounted = true;
        this._loadModule();
      };
      r.prototype._loadModule = function () {
        var e = this;
        if (this.context.loadable && Array.isArray(g.modules)) {
          g.modules.forEach(function (t) {
            e.context.loadable.report(t);
          });
        }
        if (x.loading) {
          if (typeof g.delay == "number") {
            if (g.delay === 0) {
              this.setState({
                pastDelay: true
              });
            } else {
              this._delay = setTimeout(function () {
                e.setState({
                  pastDelay: true
                });
              }, g.delay);
            }
          }
          if (typeof g.timeout == "number") {
            this._timeout = setTimeout(function () {
              e.setState({
                timedOut: true
              });
            }, g.timeout);
          }
          function t() {
            if (e._mounted) {
              e.setState({
                error: x.error,
                loaded: x.loaded,
                loading: x.loading
              });
              e._clearTimeouts();
            }
          }
          x.promise.then(function () {
            t();
          }).catch(function (e) {
            t();
          });
        }
      };
      r.prototype.componentWillUnmount = function () {
        this._mounted = false;
        this._clearTimeouts();
      };
      r.prototype._clearTimeouts = function () {
        clearTimeout(this._delay);
        clearTimeout(this._timeout);
      };
      r.prototype.render = function () {
        if (this.state.loading || this.state.error) {
          return reactCoreLibraryReexport.createElement(g.loading, {
            isLoading: this.state.loading,
            pastDelay: this.state.pastDelay,
            timedOut: this.state.timedOut,
            error: this.state.error,
            retry: this.retry
          });
        } else if (this.state.loaded) {
          return g.render(this.state.loaded, this.props);
        } else {
          return null;
        }
      };
      return r;
    }(reactCoreLibraryReexport.Component);
    l.contextTypes = {
      loadable: propTypesFactoryWrapper.shape({
        report: propTypesFactoryWrapper.func.isRequired
      })
    };
    return d;
  }
  function x(e) {
    return g(l, e);
  }
  x.Map = function (e) {
    if (typeof e.render != "function") {
      throw Error("LoadableMap requires a `render(loaded, props)` function");
    }
    return g(d, e);
  };
  var M = function (e) {
    function t() {
      i(this, t);
      return o(this, e.apply(this, arguments));
    }
    a(t, e);
    t.prototype.getChildContext = function () {
      return {
        loadable: {
          report: this.props.report
        }
      };
    };
    t.prototype.render = function () {
      return reactCoreLibraryReexport.Children.only(this.props.children);
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  function p(e) {
    var t = [];
    for (; e.length;) {
      var r = e.pop();
      t.push(r());
    }
    return Promise.all(t).then(function () {
      if (e.length) {
        return p(e);
      }
    });
  }
  M.propTypes = {
    report: propTypesFactoryWrapper.func.isRequired
  };
  M.childContextTypes = {
    loadable: propTypesFactoryWrapper.shape({
      report: propTypesFactoryWrapper.func.isRequired
    }).isRequired
  };
  x.Capture = M;
  x.preloadAll = function () {
    return new Promise(function (e, t) {
      p(u).then(e, t);
    });
  };
  x.preloadReady = function () {
    return new Promise(function (e, t) {
      p(f).then(e, e);
    });
  };
  module.exports = x;
}