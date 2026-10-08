// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// - Renamed variable 'o' to 'urlQueryStringBuilder'
// - Resolved require(811848) to 'url-query-string-builder'
// - Renamed variable 'i' to 'interceptorManager'
// - Resolved require(245306) to 'interceptor-manager'
// - Renamed variable 'a' to 'axiosDispatchCore'
// - Resolved require(120624) to 'axios-dispatch-core'
// - Renamed variable 's' to 'axiosConfigMerge'
// - Resolved require(661494) to 'axios-config-merge'
// - Renamed variable 'u' to 'urlPathResolver'
// - Resolved require(848567) to 'url-path-resolver'
// - Renamed variable 'c' to 'axiosOptionsValidator'
// - Resolved require(150241) to 'axios-options-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 107218
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var urlQueryStringBuilder = require("url-query-string-builder") /*id: 811848*/;
  var interceptorManager = require("interceptor-manager") /*id: 245306*/;
  var axiosDispatchCore = require("axios-dispatch-core") /*id: 120624*/;
  var axiosConfigMerge = require("axios-config-merge") /*id: 661494*/;
  var urlPathResolver = require("url-path-resolver") /*id: 848567*/;
  var axiosOptionsValidator = require("axios-options-validator") /*id: 150241*/;
  var f = axiosOptionsValidator.validators;
  function d(e) {
    this.defaults = e;
    this.interceptors = {
      request: new interceptorManager(),
      response: new interceptorManager()
    };
  }
  d.prototype.request = function (e, t) {
    if (typeof e == "string") {
      (t = t || {}).url = e;
    } else {
      t = e || {};
    }
    if ((t = axiosConfigMerge(this.defaults, t)).method) {
      t.method = t.method.toLowerCase();
    } else if (this.defaults.method) {
      t.method = this.defaults.method.toLowerCase();
    } else {
      t.method = "get";
    }
    var r;
    var o = t.transitional;
    if (o !== undefined) {
      axiosOptionsValidator.assertOptions(o, {
        silentJSONParsing: f.transitional(f.boolean),
        forcedJSONParsing: f.transitional(f.boolean),
        clarifyTimeoutError: f.transitional(f.boolean)
      }, false);
    }
    var i = t.paramsSerializer;
    if (utilsTypeCheckHelpers.isFunction(i)) {
      t.paramsSerializer = {
        serialize: i
      };
    }
    var u = [];
    var d = true;
    this.interceptors.request.forEach(function (e) {
      if (typeof e.runWhen != "function" || e.runWhen(t) !== false) {
        d = d && e.synchronous;
        u.unshift(e.fulfilled, e.rejected);
      }
    });
    var l = [];
    this.interceptors.response.forEach(function (e) {
      l.push(e.fulfilled, e.rejected);
    });
    if (!d) {
      var p = [axiosDispatchCore, undefined];
      Array.prototype.unshift.apply(p, u);
      p = p.concat(l);
      r = Promise.resolve(t);
      while (p.length) {
        r = r.then(p.shift(), p.shift());
      }
      return r;
    }
    var v = t;
    for (; u.length;) {
      var h = u.shift();
      var m = u.shift();
      try {
        v = h(v);
      } catch (e) {
        m(e);
        break;
      }
    }
    try {
      r = axiosDispatchCore(v);
    } catch (e) {
      return Promise.reject(e);
    }
    while (l.length) {
      r = r.then(l.shift(), l.shift());
    }
    return r;
  };
  d.prototype.getUri = function (e) {
    return urlQueryStringBuilder(urlPathResolver((e = axiosConfigMerge(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
  };
  utilsTypeCheckHelpers.forEach(["delete", "get", "head", "options"], function (e) {
    d.prototype[e] = function (t, r) {
      return this.request(axiosConfigMerge(r || {}, {
        method: e,
        url: t,
        data: (r || {}).data
      }));
    };
  });
  utilsTypeCheckHelpers.forEach(["post", "put", "patch"], function (e) {
    function t(t) {
      return function (r, n, o) {
        return this.request(axiosConfigMerge(o || {}, {
          method: e,
          headers: t ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: r,
          data: n
        }));
      };
    }
    d.prototype[e] = t();
    d.prototype[e + "Form"] = t(true);
  });
  module.exports = d;
}