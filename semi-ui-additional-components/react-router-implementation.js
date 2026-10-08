// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AW' to 'Route'
// - Renamed export 'LX' to 'matchPath'
// - Renamed export 'VA' to 'MemoryRouter'
// - Renamed export 'k6' to 'useHistory'
// - Renamed export 'F0' to 'Router'
// - Renamed export 'TH' to 'useLocation'
// - Renamed export 'l_' to 'Redirect'
// - Renamed export 's6' to 'RouterContext'
// - Renamed export 'rs' to 'Switch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 760389
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var classInheritanceHelper_1 = require("class-inheritance-helper_1") /*id: 298550*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var historyRouterManager = require("history-router-manager") /*id: 193688*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var c = propTypesFactoryWrapper;
  var u = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : require.g !== undefined ? require.g : {};
  var d = reactCoreLibraryReexport.createContext || function (e, t) {
    var r;
    var i;
    var n;
    var s = "__create-react-context-" + (u[r = "__global_unique_id__"] = (u[r] || 0) + 1) + "__";
    var l = function (e) {
      function r() {
        var t;
        var r;
        var i;
        t = e.apply(this, arguments) || this;
        r = t.props.value;
        i = [];
        t.emitter = {
          on: function (e) {
            i.push(e);
          },
          off: function (e) {
            i = i.filter(function (t) {
              return t !== e;
            });
          },
          get: function () {
            return r;
          },
          set: function (e, t) {
            r = e;
            i.forEach(function (e) {
              return e(r, t);
            });
          }
        };
        return t;
      }
      classInheritanceHelper_1.setupInheritance(r, e);
      var i = r.prototype;
      i.getChildContext = function () {
        var e;
        (e = {})[s] = this.emitter;
        return e;
      };
      i.componentWillReceiveProps = function (e) {
        if (this.props.value !== e.value) {
          var r;
          var i = this.props.value;
          var n = e.value;
          if (i === n ? i !== 0 || 1 / i == 1 / n : i != i && n != n) {
            r = 0;
          } else if ((r = (typeof t == "function" ? t(i, n) : 1073741823) | 0) != 0) {
            this.emitter.set(e.value, r);
          }
        }
      };
      i.render = function () {
        return this.props.children;
      };
      return r;
    }(reactCoreLibraryReexport.Component);
    (i = {})[s] = c.object.isRequired;
    l.childContextTypes = i;
    var d = function (t) {
      function r() {
        var e;
        e = t.apply(this, arguments) || this;
        e.state = {
          value: e.getValue()
        };
        e.onUpdate = function (t, r) {
          if (((e.observedBits | 0) & r) != 0) {
            e.setState({
              value: e.getValue()
            });
          }
        };
        return e;
      }
      classInheritanceHelper_1.setupInheritance(r, t);
      var i = r.prototype;
      i.componentWillReceiveProps = function (e) {
        var t = e.observedBits;
        this.observedBits = t == null ? 1073741823 : t;
      };
      i.componentDidMount = function () {
        if (this.context[s]) {
          this.context[s].on(this.onUpdate);
        }
        var e = this.props.observedBits;
        this.observedBits = e == null ? 1073741823 : e;
      };
      i.componentWillUnmount = function () {
        if (this.context[s]) {
          this.context[s].off(this.onUpdate);
        }
      };
      i.getValue = function () {
        if (this.context[s]) {
          return this.context[s].get();
        } else {
          return e;
        }
      };
      i.render = function () {
        var e;
        return (Array.isArray(e = this.props.children) ? e[0] : e)(this.state.value);
      };
      return r;
    }(reactCoreLibraryReexport.Component);
    (n = {})[s] = c.object;
    d.contextTypes = n;
    return {
      Provider: l,
      Consumer: d
    };
  };
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var pathToRegexpUtil = require("path-to-regexp-util") /*id: 203393*/;
  var m = pathToRegexpUtil;
  require("react-is-type-checkers-reexport") /*id: 547283*/;
  require("object-omit-util_3") /*id: 435902*/;
  require("hoist-non-react-statics") /*id: 19165*/;
  (i = d()).displayName = "Router-History";
  var g = i;
  (n = d()).displayName = "Router";
  var f = n;
  var y = function (e) {
    function t(t) {
      var r;
      (r = e.call(this, t) || this).state = {
        location: t.history.location
      };
      r._isMounted = false;
      r._pendingLocation = null;
      if (!t.staticContext) {
        r.unlisten = t.history.listen(function (e) {
          if (r._isMounted) {
            r.setState({
              location: e
            });
          } else {
            r._pendingLocation = e;
          }
        });
      }
      return r;
    }
    classInheritanceHelper_1.setupInheritance(t, e);
    t.computeRootMatch = function (e) {
      return {
        path: "/",
        url: "/",
        params: {},
        isExact: e === "/"
      };
    };
    var r = t.prototype;
    r.componentDidMount = function () {
      this._isMounted = true;
      if (this._pendingLocation) {
        this.setState({
          location: this._pendingLocation
        });
      }
    };
    r.componentWillUnmount = function () {
      if (this.unlisten) {
        this.unlisten();
      }
    };
    r.render = function () {
      return reactCoreLibraryReexport.createElement(f.Provider, {
        value: {
          history: this.props.history,
          location: this.state.location,
          match: t.computeRootMatch(this.state.location.pathname),
          staticContext: this.props.staticContext
        }
      }, reactCoreLibraryReexport.createElement(g.Provider, {
        children: this.props.children || null,
        value: this.props.history
      }));
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var E = function (e) {
    function t() {
      var t;
      var r = arguments.length;
      var i = Array(r);
      var n = 0;
      for (; n < r; n++) {
        i[n] = arguments[n];
      }
      (t = e.call.apply(e, [this].concat(i)) || this).history = historyRouterManager.createMemoryHistory(t.props);
      return t;
    }
    classInheritanceHelper_1.setupInheritance(t, e);
    t.prototype.render = function () {
      return reactCoreLibraryReexport.createElement(y, {
        history: this.history,
        children: this.props.children
      });
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var T = function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    classInheritanceHelper_1.setupInheritance(t, e);
    var r = t.prototype;
    r.componentDidMount = function () {
      if (this.props.onMount) {
        this.props.onMount.call(this, this);
      }
    };
    r.componentDidUpdate = function (e) {
      if (this.props.onUpdate) {
        this.props.onUpdate.call(this, this, e);
      }
    };
    r.componentWillUnmount = function () {
      if (this.props.onUnmount) {
        this.props.onUnmount.call(this, this);
      }
    };
    r.render = function () {
      return null;
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var v = {};
  var S = 0;
  function L(e = "/", t = {}) {
    if (e === "/") {
      return e;
    } else {
      return function (e) {
        if (v[e]) {
          return v[e];
        }
        var t = m.compile(e);
        if (S < 10000) {
          v[e] = t;
          S++;
        }
        return t;
      }(e)(t, {
        pretty: true
      });
    }
  }
  function k(e) {
    var t = e.computedMatch;
    var r = e.to;
    var i = e.push;
    var n = i !== undefined && i;
    return reactCoreLibraryReexport.createElement(f.Consumer, null, function (e) {
      if (!e) {
        invariantCheck.invariant(false);
      }
      var i = e.history;
      var a = e.staticContext;
      var l = n ? i.push : i.replace;
      var c = historyRouterManager.createLocation(t ? typeof r == "string" ? L(r, t.params) : objectAssignUtil.objectAssign({}, r, {
        pathname: L(r.pathname, t.params)
      }) : r);
      if (a) {
        l(c);
        return null;
      } else {
        return reactCoreLibraryReexport.createElement(T, {
          onMount: function () {
            l(c);
          },
          onUpdate: function (e, t) {
            var r = historyRouterManager.createLocation(t.to);
            if (!historyRouterManager.locationsAreEqual(r, objectAssignUtil.objectAssign({}, c, {
              key: r.key
            }))) {
              l(c);
            }
          },
          to: r
        });
      }
    });
  }
  var C = {};
  var A = 0;
  function I(e, t = {}) {
    if (typeof t == "string" || Array.isArray(t)) {
      t = {
        path: t
      };
    }
    var r = t;
    var i = r.path;
    var n = r.exact;
    var a = n !== undefined && n;
    var o = r.strict;
    var s = o !== undefined && o;
    var l = r.sensitive;
    var c = l !== undefined && l;
    return [].concat(i).reduce(function (t, r) {
      if (!r && r !== "") {
        return null;
      }
      if (t) {
        return t;
      }
      var i = function (e, t) {
        var r = "" + t.end + t.strict + t.sensitive;
        var i = C[r] ||= {};
        if (i[e]) {
          return i[e];
        }
        var n = [];
        var a = {
          regexp: m(e, n, t),
          keys: n
        };
        if (A < 10000) {
          i[e] = a;
          A++;
        }
        return a;
      }(r, {
        end: a,
        strict: s,
        sensitive: c
      });
      var n = i.regexp;
      var o = i.keys;
      var l = n.exec(e);
      if (!l) {
        return null;
      }
      var u = l[0];
      var d = l.slice(1);
      var p = e === u;
      if (a && !p) {
        return null;
      } else {
        return {
          path: r,
          url: r === "/" && u === "" ? "/" : u,
          isExact: p,
          params: o.reduce(function (e, t, r) {
            e[t.name] = d[r];
            return e;
          }, {})
        };
      }
    }, null);
  }
  var N = function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    classInheritanceHelper_1.setupInheritance(t, e);
    t.prototype.render = function () {
      var e = this;
      return reactCoreLibraryReexport.createElement(f.Consumer, null, function (t) {
        if (!t) {
          invariantCheck.invariant(false);
        }
        var r = e.props.location || t.location;
        var i = e.props.computedMatch ? e.props.computedMatch : e.props.path ? I(r.pathname, e.props) : t.match;
        var n = objectAssignUtil.objectAssign({}, t, {
          location: r,
          match: i
        });
        var a = e.props;
        var s = a.children;
        var l = a.component;
        var c = a.render;
        if (Array.isArray(s) && s.length === 0) {
          s = null;
        }
        return reactCoreLibraryReexport.createElement(f.Provider, {
          value: n
        }, n.match ? s ? typeof s == "function" ? s(n) : s : l ? reactCoreLibraryReexport.createElement(l, n) : c ? c(n) : null : typeof s == "function" ? s(n) : null);
      });
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  reactCoreLibraryReexport.Component;
  var b = function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    classInheritanceHelper_1.setupInheritance(t, e);
    t.prototype.render = function () {
      var e = this;
      return reactCoreLibraryReexport.createElement(f.Consumer, null, function (t) {
        if (!t) {
          invariantCheck.invariant(false);
        }
        var r;
        var i;
        var n = e.props.location || t.location;
        reactCoreLibraryReexport.Children.forEach(e.props.children, function (e) {
          if (i == null && reactCoreLibraryReexport.isValidElement(e)) {
            r = e;
            var a = e.props.path || e.props.from;
            i = a ? I(n.pathname, objectAssignUtil.objectAssign({}, e.props, {
              path: a
            })) : t.match;
          }
        });
        if (i) {
          return reactCoreLibraryReexport.cloneElement(r, {
            location: n,
            computedMatch: i
          });
        } else {
          return null;
        }
      });
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var R = reactCoreLibraryReexport.useContext;
  function M() {
    return R(g);
  }
  function O() {
    return R(f).location;
  }
  require.d(exports, {
    Route: function () {
      return N;
    },
    matchPath: function () {
      return I;
    },
    MemoryRouter: function () {
      return E;
    },
    useHistory: function () {
      return M;
    },
    Router: function () {
      return y;
    },
    useLocation: function () {
      return O;
    },
    Redirect: function () {
      return k;
    },
    RouterContext: function () {
      return f;
    },
    Switch: function () {
      return b;
    }
  });
}