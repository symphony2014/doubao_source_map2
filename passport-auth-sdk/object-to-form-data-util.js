// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(989572) to 'buffer-polyfill-impl'
// - Renamed variable 'o' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// - Renamed variable 'i' to 'axiosErrorClass'
// - Resolved require(24058) to 'axios-error-class'
// - Renamed variable 'a' to 'formDataGetterProxy'
// - Resolved require(239225) to 'form-data-getter-proxy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 406663
         */
module.exports = function (module, exports, require) {
  var n = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var axiosErrorClass = require("axios-error-class") /*id: 24058*/;
  var formDataGetterProxy = require("form-data-getter-proxy") /*id: 239225*/;
  function s(e) {
    return utilsTypeCheckHelpers.isPlainObject(e) || utilsTypeCheckHelpers.isArray(e);
  }
  function u(e) {
    if (utilsTypeCheckHelpers.endsWith(e, "[]")) {
      return e.slice(0, -2);
    } else {
      return e;
    }
  }
  function c(e, t, r) {
    if (e) {
      return e.concat(t).map(function (e, t) {
        e = u(e);
        if (!r && t) {
          return "[" + e + "]";
        } else {
          return e;
        }
      }).join(r ? "." : "");
    } else {
      return t;
    }
  }
  var f = utilsTypeCheckHelpers.toFlatObject(utilsTypeCheckHelpers, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  module.exports = function (e, t, r) {
    if (!utilsTypeCheckHelpers.isObject(e)) {
      throw TypeError("target must be an object");
    }
    t = t || new (formDataGetterProxy || FormData)();
    var d;
    var l = (r = utilsTypeCheckHelpers.toFlatObject(r, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function (e, t) {
      return !utilsTypeCheckHelpers.isUndefined(t[e]);
    })).metaTokens;
    var p = r.visitor || y;
    var v = r.dots;
    var h = r.indexes;
    var m = (r.Blob || typeof Blob != "undefined" && Blob) && (d = t) && utilsTypeCheckHelpers.isFunction(d.append) && d[Symbol.toStringTag] === "FormData" && d[Symbol.iterator];
    if (!utilsTypeCheckHelpers.isFunction(p)) {
      throw TypeError("visitor must be a function");
    }
    function _(e) {
      if (e === null) {
        return "";
      }
      if (utilsTypeCheckHelpers.isDate(e)) {
        return e.toISOString();
      }
      if (!m && utilsTypeCheckHelpers.isBlob(e)) {
        throw new axiosErrorClass("Blob is not supported. Use a Buffer instead.");
      }
      if (utilsTypeCheckHelpers.isArrayBuffer(e) || utilsTypeCheckHelpers.isTypedArray(e)) {
        if (m && typeof Blob == "function") {
          return new Blob([e]);
        } else {
          return n.from(e);
        }
      } else {
        return e;
      }
    }
    function y(e, r, n) {
      var i;
      var a = e;
      if (e && !n && typeof e == "object") {
        if (utilsTypeCheckHelpers.endsWith(r, "{}")) {
          r = l ? r : r.slice(0, -2);
          e = JSON.stringify(e);
        } else if (utilsTypeCheckHelpers.isArray(e) && (i = e, utilsTypeCheckHelpers.isArray(i) && !i.some(s)) || utilsTypeCheckHelpers.isFileList(e) || utilsTypeCheckHelpers.endsWith(r, "[]") && (a = utilsTypeCheckHelpers.toArray(e))) {
          r = u(r);
          a.forEach(function (e, n) {
            if (!utilsTypeCheckHelpers.isUndefined(e)) {
              t.append(h === true ? c([r], n, v) : h === null ? r : r + "[]", _(e));
            }
          });
          return false;
        }
      }
      return !!s(e) || (t.append(c(n, r, v), _(e)), false);
    }
    var g = [];
    var b = Object.assign(f, {
      defaultVisitor: y,
      convertValue: _,
      isVisitable: s
    });
    if (!utilsTypeCheckHelpers.isObject(e)) {
      throw TypeError("data must be an object");
    }
    (function e(r, n) {
      if (!utilsTypeCheckHelpers.isUndefined(r)) {
        if (g.indexOf(r) !== -1) {
          throw Error("Circular reference detected in " + n.join("."));
        }
        g.push(r);
        utilsTypeCheckHelpers.forEach(r, function (r, i) {
          if ((!utilsTypeCheckHelpers.isUndefined(r) && p.call(t, r, utilsTypeCheckHelpers.isString(i) ? i.trim() : i, n, b)) === true) {
            e(r, n ? n.concat(i) : [i]);
          }
        });
        g.pop();
      }
    })(e);
    return t;
  };
}