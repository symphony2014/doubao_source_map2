// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactIsTypeCheckersReexport'
// - Resolved require(547283) to 'react-is-type-checkers-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 19165
         */
module.exports = function (module, exports, require) {
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
  var i = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var o = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var a = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var s = {};
  function u(e) {
    if (reactIsTypeCheckersReexport.isMemo(e)) {
      return a;
    } else {
      return s[e.$$typeof] || i;
    }
  }
  s[reactIsTypeCheckersReexport.ForwardRef] = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  s[reactIsTypeCheckersReexport.Memo] = a;
  var c = Object.defineProperty;
  var l = Object.getOwnPropertyNames;
  var f = Object.getOwnPropertySymbols;
  var h = Object.getOwnPropertyDescriptor;
  var d = Object.getPrototypeOf;
  var p = Object.prototype;
  module.exports = function e(t, n, r) {
    if (typeof n != "string") {
      if (p) {
        var i = d(n);
        if (i && i !== p) {
          e(t, i, r);
        }
      }
      var a = l(n);
      if (f) {
        a = a.concat(f(n));
      }
      var s = u(t);
      var g = u(n);
      var v = 0;
      for (; v < a.length; ++v) {
        var m = a[v];
        if (!o[m] && (!r || !r[m]) && (!g || !g[m]) && (!s || !s[m])) {
          var y = h(n, m);
          try {
            c(t, m, y);
          } catch (e) {}
        }
      }
    }
    return t;
  };
}