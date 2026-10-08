// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 335295
         */
module.exports = function (module, exports, require) {
  exports.__esModule = true;
  exports.cloneElement = function (e, t) {
    if (t.style && e.props.style) {
      t.style = o(o({}, e.props.style), t.style);
    }
    if (t.className && e.props.className) {
      t.className = e.props.className + " " + t.className;
    }
    return i.default.cloneElement(e, t);
  };
  var r;
  var i = (r = require("react-core-library-reexport") /*id: 634663*/) && r.__esModule ? r : {
    default: r
  };
  function a(e, t) {
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
        a(Object(n), true).forEach(function (t) {
          var r;
          var i;
          var a;
          r = e;
          i = t;
          a = n[t];
          if ((i = function (e) {
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
          }(i)) in r) {
            Object.defineProperty(r, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            r[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        a(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
}