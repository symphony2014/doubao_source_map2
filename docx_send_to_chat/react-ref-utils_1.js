// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C4' to 'getElementRef'
// - Renamed export 'Yr' to 'hasElementRef'
// - Renamed export 'x1' to 'useMergedRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 761909
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
  var reactFragmentCheckUtil = require("react-fragment-check-util") /*id: 996784*/;
  function a(e, t) {
    if (typeof e == "function") {
      e(t);
    } else if (typeofHelper.getType(e) === "object" && e && "current" in e) {
      e.current = t;
    }
  }
  function l() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    var i = t.filter(Boolean);
    if (i.length <= 1) {
      return i[0];
    } else {
      return function (e) {
        t.forEach(function (t) {
          a(t, e);
        });
      };
    }
  }
  function u() {
    var e;
    var t;
    var n;
    var i = arguments.length;
    var o = Array(i);
    var s = 0;
    for (; s < i; s++) {
      o[s] = arguments[s];
    }
    e = function () {
      return l.apply(undefined, o);
    };
    t = function (e, t) {
      return e.length !== t.length || e.every(function (e, n) {
        return e !== t[n];
      });
    };
    if (!("value" in (n = reactCoreLibraryReexport.useRef({})).current) || t(n.current.condition, o)) {
      n.current.value = e();
      n.current.condition = o;
    }
    return n.current.value;
  }
  function h(e) {
    if (!e) {
      return false;
    }
    if (c(e) && e.props.propertyIsEnumerable("ref")) {
      return true;
    }
    var t;
    var n;
    var i = reactIsTypeCheckersReexport.isMemo(e) ? e.type.type : e.type;
    return (typeof i != "function" || (t = i.prototype) !== null && t !== undefined && !!t.render || i.$$typeof === reactIsTypeCheckersReexport.ForwardRef) && (typeof e != "function" || (n = e.prototype) !== null && n !== undefined && !!n.render || e.$$typeof === reactIsTypeCheckersReexport.ForwardRef);
  }
  function c(e) {
    return reactCoreLibraryReexport.isValidElement(e) && !reactFragmentCheckUtil.isReactFragment(e);
  }
  function d(e) {
    if (e && c(e)) {
      if (e.props.propertyIsEnumerable("ref")) {
        return e.props.ref;
      } else {
        return e.ref;
      }
    } else {
      return null;
    }
  }
  require.d(exports, {
    getElementRef: function () {
      return d;
    },
    hasElementRef: function () {
      return h;
    },
    useMergedRef: function () {
      return u;
    }
  });
}