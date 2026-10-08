// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 932461
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i = reactCoreLibraryReexport && typeof reactCoreLibraryReexport == "object" && "default" in reactCoreLibraryReexport ? reactCoreLibraryReexport.default : reactCoreLibraryReexport;
  function o(e, t, n) {
    if (t in e) {
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
  var a = typeof window != "undefined" && !!window.document && !!window.document.createElement;
  module.exports = function (e, t, n) {
    if (typeof e != "function") {
      throw Error("Expected reducePropsToState to be a function.");
    }
    if (typeof t != "function") {
      throw Error("Expected handleStateChangeOnClient to be a function.");
    }
    if (n !== undefined && typeof n != "function") {
      throw Error("Expected mapStateOnServer to either be undefined or a function.");
    }
    return function (s) {
      if (typeof s != "function") {
        throw Error("Expected WrappedComponent to be a React component.");
      }
      var u;
      var c = [];
      function l() {
        u = e(c.map(function (e) {
          return e.props;
        }));
        if (f.canUseDOM) {
          t(u);
        } else if (n) {
          u = n(u);
        }
      }
      var f = function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        t.prototype = Object.create(e.prototype);
        t.prototype.constructor = t;
        t.__proto__ = e;
        t.peek = function () {
          return u;
        };
        t.rewind = function () {
          if (t.canUseDOM) {
            throw Error("You may only call rewind() on the server. Call peek() to read the current state.");
          }
          var e = u;
          u = undefined;
          c = [];
          return e;
        };
        var n = t.prototype;
        n.UNSAFE_componentWillMount = function () {
          c.push(this);
          l();
        };
        n.componentDidUpdate = function () {
          l();
        };
        n.componentWillUnmount = function () {
          var e = c.indexOf(this);
          c.splice(e, 1);
          l();
        };
        n.render = function () {
          return i.createElement(s, this.props);
        };
        return t;
      }(reactCoreLibraryReexport.PureComponent);
      o(f, "displayName", "SideEffect(" + (s.displayName || s.name || "Component") + ")");
      o(f, "canUseDOM", a);
      return f;
    };
  };
}