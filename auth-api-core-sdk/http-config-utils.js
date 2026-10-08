// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'typeCheckUtils_3'
// - Resolved require(187217) to 'type-check-utils_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 481200
         */
module.exports = function (module, exports, require) {
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (e) {
      var t;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var i in t = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  };
  exports.defaultConfig = exports.transformData = exports.mergeConfig = undefined;
  var typeCheckUtils_3 = require("type-check-utils_3") /*id: 187217*/;
  exports.mergeConfig = function (e = {}, t = {}) {
    var r = n(n({}, e), t);
    function o(e, t) {
      if (typeCheckUtils_3.isPlainObject(e) && typeCheckUtils_3.isPlainObject(t)) {
        return typeCheckUtils_3.merge(e, t);
      } else if (typeCheckUtils_3.isPlainObject(t)) {
        return typeCheckUtils_3.merge({}, t);
      } else if (typeCheckUtils_3.isArray(t)) {
        return t.slice();
      } else {
        return t;
      }
    }
    typeCheckUtils_3.forEach(["headers"], function (n) {
      var a;
      a = n;
      if (typeCheckUtils_3.isUndefined(t[a])) {
        if (!typeCheckUtils_3.isUndefined(e[a])) {
          r[a] = o(undefined, e[a]);
        }
      } else {
        r[a] = o(e[a], t[a]);
      }
    });
    return r;
  };
  exports.transformData = function (e, t, r) {
    var n = e;
    typeCheckUtils_3.forEach(r, function (r) {
      n = r(e, t);
    });
    return n;
  };
  exports.defaultConfig = {
    headers: {
      Accept: "application/json, text/plain, */*"
    },
    transformRequest: [function (e) {
      if (!typeCheckUtils_3.isObject(e) || e instanceof FormData) {
        return e;
      } else {
        return JSON.stringify(e);
      }
    }],
    transformResponse: [function (e) {
      var t = e;
      if (typeof e == "string") {
        try {
          t = JSON.parse(e);
        } catch (e) {}
      }
      return t;
    }],
    timeout: 10000,
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}