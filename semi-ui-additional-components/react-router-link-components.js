// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VK' to 'BrowserRouter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 204399
         */
module.exports = function (module, exports, require) {
  var reactRouterImplementation = require("react-router-implementation") /*id: 760389*/;
  var classInheritanceHelper_1 = require("class-inheritance-helper_1") /*id: 298550*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var historyRouterManager = require("history-router-manager") /*id: 193688*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  var c = function (e) {
    function t() {
      var t;
      var n = arguments.length;
      var r = Array(n);
      var o = 0;
      for (; o < n; o++) {
        r[o] = arguments[o];
      }
      (t = e.call.apply(e, [this].concat(r)) || this).history = historyRouterManager.createBrowserHistory(t.props);
      return t;
    }
    classInheritanceHelper_1.setupInheritance(t, e);
    t.prototype.render = function () {
      return reactCoreLibraryReexport.createElement(reactRouterImplementation.Router, {
        history: this.history,
        children: this.props.children
      });
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  reactCoreLibraryReexport.Component;
  function d(e, t) {
    if (typeof e == "function") {
      return e(t);
    } else {
      return e;
    }
  }
  function p(e, t) {
    if (typeof e == "string") {
      return historyRouterManager.createLocation(e, null, null, t);
    } else {
      return e;
    }
  }
  function h(e) {
    return e;
  }
  var f = reactCoreLibraryReexport.forwardRef;
  if (f === undefined) {
    f = h;
  }
  var m = f(function (e, t) {
    var n = e.innerRef;
    var r = e.navigate;
    var o = e.onClick;
    var a = objectOmitUtil_3.omitKeys(e, ["innerRef", "navigate", "onClick"]);
    var l = a.target;
    var c = objectAssignUtil.objectAssign({}, a, {
      onClick: function (e) {
        try {
          if (o) {
            o(e);
          }
        } catch (t) {
          e.preventDefault();
          throw t;
        }
        if (!e.defaultPrevented && e.button === 0 && (!l || l === "_self") && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          r();
        }
      }
    });
    if (h !== f) {
      c.ref = t || n;
    } else {
      c.ref = n;
    }
    return reactCoreLibraryReexport.createElement("a", c);
  });
  var v = f(function (e, t) {
    var n = e.component;
    var o = n === undefined ? m : n;
    var a = e.replace;
    var c = e.to;
    var v = e.innerRef;
    var g = objectOmitUtil_3.omitKeys(e, ["component", "replace", "to", "innerRef"]);
    return reactCoreLibraryReexport.createElement(reactRouterImplementation.RouterContext.Consumer, null, function (e) {
      if (!e) {
        invariantCheck.invariant(false);
      }
      var n = e.history;
      var r = p(d(c, e.location), e.location);
      var u = r ? n.createHref(r) : "";
      var m = objectAssignUtil.objectAssign({}, g, {
        href: u,
        navigate: function () {
          var t = d(c, e.location);
          (a ? n.replace : n.push)(t);
        }
      });
      if (h !== f) {
        m.ref = t || v;
      } else {
        m.innerRef = v;
      }
      return reactCoreLibraryReexport.createElement(o, m);
    });
  });
  function g(e) {
    return e;
  }
  var D = reactCoreLibraryReexport.forwardRef;
  if (D === undefined) {
    D = g;
  }
  D(function (e, t) {
    var n = e["aria-current"];
    var o = n === undefined ? "page" : n;
    var a = e.activeClassName;
    var c = a === undefined ? "active" : a;
    var h = e.activeStyle;
    var f = e.className;
    var m = e.exact;
    var y = e.isActive;
    var b = e.location;
    var E = e.sensitive;
    var C = e.strict;
    var w = e.style;
    var x = e.to;
    var F = e.innerRef;
    var Z = objectOmitUtil_3.omitKeys(e, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
    return reactCoreLibraryReexport.createElement(reactRouterImplementation.RouterContext.Consumer, null, function (e) {
      if (!e) {
        invariantCheck.invariant(false);
      }
      var n = b || e.location;
      var a = p(d(x, n), n);
      var u = a.pathname;
      var O = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      var T = O ? reactRouterImplementation.matchPath(n.pathname, {
        path: O,
        exact: m,
        sensitive: E,
        strict: C
      }) : null;
      var _ = !!(y ? y(T, n) : T);
      var I = _ ? function () {
        var e = arguments.length;
        var t = Array(e);
        var n = 0;
        for (; n < e; n++) {
          t[n] = arguments[n];
        }
        return t.filter(function (e) {
          return e;
        }).join(" ");
      }(f, c) : f;
      var P = _ ? objectAssignUtil.objectAssign({}, w, {}, h) : w;
      var A = objectAssignUtil.objectAssign({
        "aria-current": _ && o || null,
        className: I,
        style: P,
        to: a
      }, Z);
      if (g !== D) {
        A.ref = t || F;
      } else {
        A.innerRef = F;
      }
      return reactCoreLibraryReexport.createElement(v, A);
    });
  });
  require.d(exports, {
    BrowserRouter: function () {
      return c;
    }
  });
}