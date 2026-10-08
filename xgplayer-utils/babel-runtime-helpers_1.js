// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ac' to 'typeOfHelper'
// - Renamed export 'IP' to 'getPrototypeOf'
// - Renamed export 'J2' to 'constructorReturn'
// - Renamed export 'Lc' to 'assertThisInit'
// - Renamed export 'PA' to 'classCallCheck'
// - Renamed export 'U2' to 'getHelper'
// - Renamed export 'WY' to 'constructHelper'
// - Renamed export 'XW' to 'inherits'
// - Renamed export 'Zj' to 'objectSpread'
// - Renamed export '_x' to 'defineProperty'
// - Renamed export 'qH' to 'createClass'
// - Renamed export 'u' to 'toArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 538722
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      n.push.apply(n, r);
    }
    return n;
  }
  function o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        r(Object(n), true).forEach(function (t) {
          l(e, t, n[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        r(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
  function i(e) {
    return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  function a(e, t) {
    if (!(e instanceof t)) {
      throw TypeError("Cannot call a class as a function");
    }
  }
  function u(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      Object.defineProperty(e, x(r.key), r);
    }
  }
  function c(e, t, n) {
    if (t) {
      u(e.prototype, t);
    }
    if (n) {
      u(e, n);
    }
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    return e;
  }
  function l(e, t, n) {
    if ((t = x(t)) in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  function s(e, t) {
    if (typeof t != "function" && t !== null) {
      throw TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    if (t) {
      f(e, t);
    }
  }
  function d(e) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function f(e, t) {
    return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function p(e) {
    if (e === undefined) {
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
  }
  function h(e, t) {
    if (t && (typeof t == "object" || typeof t == "function")) {
      return t;
    }
    if (t !== undefined) {
      throw TypeError("Derived constructors may only return object or undefined");
    }
    return p(e);
  }
  function v(e) {
    var t = function () {
      if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }();
    return function () {
      var n;
      var r = d(e);
      n = t ? Reflect.construct(r, arguments, d(this).constructor) : r.apply(this, arguments);
      return h(this, n);
    };
  }
  function m() {
    return (m = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
      var r = function (e, t) {
        while (!Object.prototype.hasOwnProperty.call(e, t) && (e = d(e)) !== null);
        return e;
      }(e, t);
      if (r) {
        var o = Object.getOwnPropertyDescriptor(r, t);
        if (o.get) {
          return o.get.call(arguments.length < 3 ? e : n);
        } else {
          return o.value;
        }
      }
    }).apply(this, arguments);
  }
  function g(e) {
    return function (e) {
      if (Array.isArray(e)) {
        return y(e);
      }
    }(e) || function (e) {
      if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
        return Array.from(e);
      }
    }(e) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return y(e, undefined);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return y(e, t);
        }
      }
    }(e) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function y(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var n = 0;
    var r = Array(t);
    for (; n < t; n++) {
      r[n] = e[n];
    }
    return r;
  }
  function x(e) {
    var t = function (e, t) {
      if (typeof e != "object" || e === null) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(e, "string");
    if (typeof t == "symbol") {
      return t;
    } else {
      return String(t);
    }
  }
  require.d(exports, {
    typeOfHelper: function () {
      return i;
    },
    getPrototypeOf: function () {
      return d;
    },
    constructorReturn: function () {
      return h;
    },
    assertThisInit: function () {
      return p;
    },
    classCallCheck: function () {
      return a;
    },
    getHelper: function () {
      return m;
    },
    constructHelper: function () {
      return v;
    },
    inherits: function () {
      return s;
    },
    objectSpread: function () {
      return o;
    },
    defineProperty: function () {
      return l;
    },
    createClass: function () {
      return c;
    },
    toArray: function () {
      return g;
    }
  });
}