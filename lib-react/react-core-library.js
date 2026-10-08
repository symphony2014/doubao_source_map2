// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-react.0f1f9659.js
         * chunkId: 43361
         * moduleId: 428810
         */
module.exports = function (module, exports, require) {
  var t = Symbol.for("react.element");
  var r = Symbol.for("react.portal");
  var l = Symbol.for("react.fragment");
  var a = Symbol.for("react.strict_mode");
  var u = Symbol.for("react.profiler");
  var o = Symbol.for("react.provider");
  var i = Symbol.for("react.context");
  var s = Symbol.for("react.forward_ref");
  var c = Symbol.for("react.suspense");
  var f = Symbol.for("react.memo");
  var d = Symbol.for("react.lazy");
  var p = Symbol.iterator;
  var m = {
    isMounted: function () {
      return false;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  };
  var h = Object.assign;
  var g = {};
  function v(e, n, t) {
    this.props = e;
    this.context = n;
    this.refs = g;
    this.updater = t || m;
  }
  function y() {}
  function b(e, n, t) {
    this.props = e;
    this.context = n;
    this.refs = g;
    this.updater = t || m;
  }
  v.prototype.isReactComponent = {};
  v.prototype.setState = function (e, n) {
    if (typeof e != "object" && typeof e != "function" && e != null) {
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    }
    this.updater.enqueueSetState(this, e, n, "setState");
  };
  v.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  y.prototype = v.prototype;
  var k = b.prototype = new y();
  k.constructor = b;
  h(k, v.prototype);
  k.isPureReactComponent = true;
  var w = Array.isArray;
  var S = Object.prototype.hasOwnProperty;
  var x = {
    current: null
  };
  var E = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function _(e, n, r) {
    var l;
    var a = {};
    var u = null;
    var o = null;
    if (n != null) {
      if (n.ref !== undefined) {
        o = n.ref;
      }
      if (n.key !== undefined) {
        u = "" + n.key;
      }
      for (l in n) {
        if (S.call(n, l) && !E.hasOwnProperty(l)) {
          a[l] = n[l];
        }
      }
    }
    var i = arguments.length - 2;
    if (i === 1) {
      a.children = r;
    } else if (i > 1) {
      var s = Array(i);
      var c = 0;
      for (; c < i; c++) {
        s[c] = arguments[c + 2];
      }
      a.children = s;
    }
    if (e && e.defaultProps) {
      for (l in i = e.defaultProps) {
        if (a[l] === undefined) {
          a[l] = i[l];
        }
      }
    }
    return {
      $$typeof: t,
      type: e,
      key: u,
      ref: o,
      props: a,
      _owner: x.current
    };
  }
  function C(e) {
    return typeof e == "object" && e !== null && e.$$typeof === t;
  }
  var N = /\/+/g;
  function z(e, n) {
    var t;
    var r;
    if (typeof e == "object" && e !== null && e.key != null) {
      t = "" + e.key;
      r = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + t.replace(/[=:]/g, function (e) {
        return r[e];
      });
    } else {
      return n.toString(36);
    }
  }
  function P(e, n, l) {
    if (e == null) {
      return e;
    }
    var a = [];
    var u = 0;
    (function e(n, l, a, u, o) {
      var i;
      var s;
      var c;
      var f = typeof n;
      if (f === "undefined" || f === "boolean") {
        n = null;
      }
      var d = false;
      if (n === null) {
        d = true;
      } else {
        switch (f) {
          case "string":
          case "number":
            d = true;
            break;
          case "object":
            switch (n.$$typeof) {
              case t:
              case r:
                d = true;
            }
        }
      }
      if (d) {
        o = o(d = n);
        n = u === "" ? "." + z(d, 0) : u;
        if (w(o)) {
          a = "";
          if (n != null) {
            a = n.replace(N, "$&/") + "/";
          }
          e(o, l, a, "", function (e) {
            return e;
          });
        } else if (o != null) {
          if (C(o)) {
            i = o;
            s = a + (!o.key || d && d.key === o.key ? "" : ("" + o.key).replace(N, "$&/") + "/") + n;
            o = {
              $$typeof: t,
              type: i.type,
              key: s,
              ref: i.ref,
              props: i.props,
              _owner: i._owner
            };
          }
          l.push(o);
        }
        return 1;
      }
      d = 0;
      u = u === "" ? "." : u + ":";
      if (w(n)) {
        for (var m = 0; m < n.length; m++) {
          var h = u + z(f = n[m], m);
          d += e(f, l, a, h, o);
        }
      } else if (typeof (h = (c = n) === null || typeof c != "object" ? null : typeof (c = p && c[p] || c["@@iterator"]) == "function" ? c : null) == "function") {
        n = h.call(n);
        m = 0;
        while (!(f = n.next()).done) {
          h = u + z(f = f.value, m++);
          d += e(f, l, a, h, o);
        }
      } else if (f === "object") {
        throw Error("Objects are not valid as a React child (found: " + ((l = String(n)) === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
      }
      return d;
    })(e, a, "", "", function (e) {
      return n.call(l, e, u++);
    });
    return a;
  }
  function L(e) {
    if (e._status === -1) {
      var n = e._result;
      (n = n()).then(function (n) {
        if (e._status === 0 || e._status === -1) {
          e._status = 1;
          e._result = n;
        }
      }, function (n) {
        if (e._status === 0 || e._status === -1) {
          e._status = 2;
          e._result = n;
        }
      });
      if (e._status === -1) {
        e._status = 0;
        e._result = n;
      }
    }
    if (e._status === 1) {
      return e._result.default;
    }
    throw e._result;
  }
  var T = {
    current: null
  };
  var R = {
    transition: null
  };
  exports.Children = {
    map: P,
    forEach: function (e, n, t) {
      P(e, function () {
        n.apply(this, arguments);
      }, t);
    },
    count: function (e) {
      var n = 0;
      P(e, function () {
        n++;
      });
      return n;
    },
    toArray: function (e) {
      return P(e, function (e) {
        return e;
      }) || [];
    },
    only: function (e) {
      if (!C(e)) {
        throw Error("React.Children.only expected to receive a single React element child.");
      }
      return e;
    }
  };
  exports.Component = v;
  exports.Fragment = l;
  exports.Profiler = u;
  exports.PureComponent = b;
  exports.StrictMode = a;
  exports.Suspense = c;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
    ReactCurrentDispatcher: T,
    ReactCurrentBatchConfig: R,
    ReactCurrentOwner: x
  };
  exports.cloneElement = function (e, n, r) {
    if (e == null) {
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    }
    var l = h({}, e.props);
    var a = e.key;
    var u = e.ref;
    var o = e._owner;
    if (n != null) {
      if (n.ref !== undefined) {
        u = n.ref;
        o = x.current;
      }
      if (n.key !== undefined) {
        a = "" + n.key;
      }
      if (e.type && e.type.defaultProps) {
        var i = e.type.defaultProps;
      }
      for (s in n) {
        if (S.call(n, s) && !E.hasOwnProperty(s)) {
          l[s] = n[s] === undefined && i !== undefined ? i[s] : n[s];
        }
      }
    }
    var s = arguments.length - 2;
    if (s === 1) {
      l.children = r;
    } else if (s > 1) {
      i = Array(s);
      for (var c = 0; c < s; c++) {
        i[c] = arguments[c + 2];
      }
      l.children = i;
    }
    return {
      $$typeof: t,
      type: e.type,
      key: a,
      ref: u,
      props: l,
      _owner: o
    };
  };
  exports.createContext = function (e) {
    (e = {
      $$typeof: i,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }).Provider = {
      $$typeof: o,
      _context: e
    };
    return e.Consumer = e;
  };
  exports.createElement = _;
  exports.createFactory = function (e) {
    var n = _.bind(null, e);
    n.type = e;
    return n;
  };
  exports.createRef = function () {
    return {
      current: null
    };
  };
  exports.forwardRef = function (e) {
    return {
      $$typeof: s,
      render: e
    };
  };
  exports.isValidElement = C;
  exports.lazy = function (e) {
    return {
      $$typeof: d,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: L
    };
  };
  exports.memo = function (e, n) {
    return {
      $$typeof: f,
      type: e,
      compare: n === undefined ? null : n
    };
  };
  exports.startTransition = function (e) {
    var n = R.transition;
    R.transition = {};
    try {
      e();
    } finally {
      R.transition = n;
    }
  };
  exports.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  exports.useCallback = function (e, n) {
    return T.current.useCallback(e, n);
  };
  exports.useContext = function (e) {
    return T.current.useContext(e);
  };
  exports.useDebugValue = function () {};
  exports.useDeferredValue = function (e) {
    return T.current.useDeferredValue(e);
  };
  exports.useEffect = function (e, n) {
    return T.current.useEffect(e, n);
  };
  exports.useId = function () {
    return T.current.useId();
  };
  exports.useImperativeHandle = function (e, n, t) {
    return T.current.useImperativeHandle(e, n, t);
  };
  exports.useInsertionEffect = function (e, n) {
    return T.current.useInsertionEffect(e, n);
  };
  exports.useLayoutEffect = function (e, n) {
    return T.current.useLayoutEffect(e, n);
  };
  exports.useMemo = function (e, n) {
    return T.current.useMemo(e, n);
  };
  exports.useReducer = function (e, n, t) {
    return T.current.useReducer(e, n, t);
  };
  exports.useRef = function (e) {
    return T.current.useRef(e);
  };
  exports.useState = function (e) {
    return T.current.useState(e);
  };
  exports.useSyncExternalStore = function (e, n, t) {
    return T.current.useSyncExternalStore(e, n, t);
  };
  exports.useTransition = function () {
    return T.current.useTransition();
  };
  exports.version = "18.2.0";
}