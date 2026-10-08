// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 869981
         */
module.exports = function (module, exports, require) {
  var n;
  var r = Symbol.for("react.element");
  var i = Symbol.for("react.portal");
  var o = Symbol.for("react.fragment");
  var a = Symbol.for("react.strict_mode");
  var s = Symbol.for("react.profiler");
  var u = Symbol.for("react.provider");
  var c = Symbol.for("react.context");
  var l = Symbol.for("react.server_context");
  var f = Symbol.for("react.forward_ref");
  var h = Symbol.for("react.suspense");
  var d = Symbol.for("react.suspense_list");
  var p = Symbol.for("react.memo");
  var g = Symbol.for("react.lazy");
  var v = Symbol.for("react.offscreen");
  function m(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case r:
          switch (e = e.type) {
            case o:
            case s:
            case a:
            case h:
            case d:
              return e;
            default:
              switch (e = e && e.$$typeof) {
                case l:
                case c:
                case f:
                case g:
                case p:
                case u:
                  return e;
                default:
                  return t;
              }
          }
        case i:
          return t;
      }
    }
  }
  n = Symbol.for("react.module.reference");
  exports.ContextConsumer = c;
  exports.ContextProvider = u;
  exports.Element = r;
  exports.ForwardRef = f;
  exports.Fragment = o;
  exports.Lazy = g;
  exports.Memo = p;
  exports.Portal = i;
  exports.Profiler = s;
  exports.StrictMode = a;
  exports.Suspense = h;
  exports.SuspenseList = d;
  exports.isAsyncMode = function () {
    return false;
  };
  exports.isConcurrentMode = function () {
    return false;
  };
  exports.isContextConsumer = function (e) {
    return m(e) === c;
  };
  exports.isContextProvider = function (e) {
    return m(e) === u;
  };
  exports.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === r;
  };
  exports.isForwardRef = function (e) {
    return m(e) === f;
  };
  exports.isFragment = function (e) {
    return m(e) === o;
  };
  exports.isLazy = function (e) {
    return m(e) === g;
  };
  exports.isMemo = function (e) {
    return m(e) === p;
  };
  exports.isPortal = function (e) {
    return m(e) === i;
  };
  exports.isProfiler = function (e) {
    return m(e) === s;
  };
  exports.isStrictMode = function (e) {
    return m(e) === a;
  };
  exports.isSuspense = function (e) {
    return m(e) === h;
  };
  exports.isSuspenseList = function (e) {
    return m(e) === d;
  };
  exports.isValidElementType = function (e) {
    return typeof e == "string" || typeof e == "function" || e === o || e === s || e === a || e === h || e === d || e === v || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === p || e.$$typeof === u || e.$$typeof === c || e.$$typeof === f || e.$$typeof === n || e.getModuleId !== undefined) || false;
  };
  exports.typeOf = m;
}