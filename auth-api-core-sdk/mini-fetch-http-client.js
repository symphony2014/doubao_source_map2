// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'httpConfigUtils'
// - Resolved require(481200) to 'http-config-utils'
// - Renamed variable 'o' to 'httpDispatchRequest'
// - Resolved require(252109) to 'http-dispatch-request'
// - Renamed variable 'a' to 'typeCheckUtils_3'
// - Resolved require(187217) to 'type-check-utils_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 910287
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
  exports.MiniFetch = undefined;
  var httpConfigUtils = require("http-config-utils") /*id: 481200*/;
  var httpDispatchRequest = require("http-dispatch-request") /*id: 252109*/;
  var typeCheckUtils_3 = require("type-check-utils_3") /*id: 187217*/;
  function s() {
    this.handlers = [];
    this.use = function (e, t) {
      this.handlers.push({
        fulfilled: e,
        rejected: t
      });
      return this.handlers.length - 1;
    };
    this.forEach = function (e) {
      this.handlers.forEach(function (t) {
        if (t) {
          e(t);
        }
      });
    };
  }
  var c = function () {
    function e(e) {
      var t = this;
      this.defaultConfig = {};
      this.interceptors = {
        response: new s(),
        request: new s()
      };
      this.request = function (e) {
        if (typeof e == "string") {
          e = arguments[1] || {};
          e.url = arguments[0];
        } else {
          e = e || {};
        }
        (e = httpConfigUtils.mergeConfig(this.defaultConfig, e)).method = e.method ? e.method.toLowerCase() : "get";
        var t = [httpDispatchRequest.dispatchRequest, undefined];
        var r = Promise.resolve(e);
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        });
        this.interceptors.response.forEach(function (e) {
          t.push(e.fulfilled, e.rejected);
        });
        while (t.length) {
          r = r.then(t.shift(), t.shift());
        }
        return r;
      };
      this.setConfig = function (e) {
        t.defaultConfig = typeCheckUtils_3.merge(httpConfigUtils.defaultConfig, e);
      };
      this.createMethod = function (e) {
        t[e] = function (r, i, o) {
          o = ["get", "delete", "head", "options"].includes(e.toLocaleLowerCase()) ? i : o;
          return t.request(n(n(n({}, o || {}), {
            method: e,
            url: r
          }), ["get", "delete", "head", "options"].includes(e.toLocaleLowerCase()) ? {} : {
            data: i
          }));
        };
      };
      this.setConfig(e);
      ["get", "post", "delete", "patch", "put"].map(function (e) {
        t.createMethod(e);
      });
    }
    e.create = function (t) {
      return new e(t);
    };
    return e;
  }();
  exports.MiniFetch = c;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}