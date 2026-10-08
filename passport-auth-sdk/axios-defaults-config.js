// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// - Renamed variable 'i' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// - Renamed variable 'a' to 'utilsKeyCaseNormalizer'
// - Resolved require(621680) to 'utils-key-case-normalizer'
// - Renamed variable 's' to 'axiosErrorClass'
// - Resolved require(24058) to 'axios-error-class'
// - Renamed variable 'u' to 'jsonParsingConfig'
// - Resolved require(872553) to 'json-parsing-config'
// - Renamed variable 'c' to 'objectToFormDataUtil'
// - Resolved require(406663) to 'object-to-form-data-util'
// - Renamed variable 'f' to 'objectToFormDataNode'
// - Resolved require(678038) to 'object-to-form-data-node'
// - Renamed variable 'd' to 'webPolyfillConfigWrapper'
// - Resolved require(341545) to 'web-polyfill-config-wrapper'
// - Renamed variable 'l' to 'formDataToObjectParser'
// - Resolved require(535640) to 'form-data-to-object-parser'
// - Resolved require(223933) to 'axios-xhr-adapter'
// - Resolved require(223933) to 'axios-xhr-adapter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 962818
         */
module.exports = function (module, exports, require) {
  var n;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var utilsKeyCaseNormalizer = require("utils-key-case-normalizer") /*id: 621680*/;
  var axiosErrorClass = require("axios-error-class") /*id: 24058*/;
  var jsonParsingConfig = require("json-parsing-config") /*id: 872553*/;
  var objectToFormDataUtil = require("object-to-form-data-util") /*id: 406663*/;
  var objectToFormDataNode = require("object-to-form-data-node") /*id: 678038*/;
  var webPolyfillConfigWrapper = require("web-polyfill-config-wrapper") /*id: 341545*/;
  var formDataToObjectParser = require("form-data-to-object-parser") /*id: 535640*/;
  var p = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function v(e, t) {
    if (!utilsTypeCheckHelpers.isUndefined(e) && utilsTypeCheckHelpers.isUndefined(e["Content-Type"])) {
      e["Content-Type"] = t;
    }
  }
  var h = {
    transitional: jsonParsingConfig,
    adapter: (typeof XMLHttpRequest != "undefined" ? n = require("axios-xhr-adapter") /*id: 223933*/ : processBrowserShim !== undefined && Object.prototype.toString.call(processBrowserShim) === "[object process]" && (n = require("axios-xhr-adapter") /*id: 223933*/), n),
    transformRequest: [function (e, t) {
      utilsKeyCaseNormalizer(t, "Accept");
      utilsKeyCaseNormalizer(t, "Content-Type");
      var r;
      var n = t && t["Content-Type"] || "";
      var o = n.indexOf("application/json") > -1;
      var s = utilsTypeCheckHelpers.isObject(e);
      if (s && utilsTypeCheckHelpers.isHTMLForm(e)) {
        e = new FormData(e);
      }
      if (utilsTypeCheckHelpers.isFormData(e)) {
        if (o) {
          return JSON.stringify(formDataToObjectParser(e));
        } else {
          return e;
        }
      }
      if (utilsTypeCheckHelpers.isArrayBuffer(e) || utilsTypeCheckHelpers.isBuffer(e) || utilsTypeCheckHelpers.isStream(e) || utilsTypeCheckHelpers.isFile(e) || utilsTypeCheckHelpers.isBlob(e)) {
        return e;
      }
      if (utilsTypeCheckHelpers.isArrayBufferView(e)) {
        return e.buffer;
      }
      if (utilsTypeCheckHelpers.isURLSearchParams(e)) {
        v(t, "application/x-www-form-urlencoded;charset=utf-8");
        return e.toString();
      }
      if (s) {
        if (n.indexOf("application/x-www-form-urlencoded") !== -1) {
          return objectToFormDataNode(e, this.formSerializer).toString();
        }
        if ((r = utilsTypeCheckHelpers.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
          var u = this.env && this.env.FormData;
          return objectToFormDataUtil(r ? {
            "files[]": e
          } : e, u && new u(), this.formSerializer);
        }
      }
      if (s || o) {
        v(t, "application/json");
        return function (e, t, r) {
          if (utilsTypeCheckHelpers.isString(e)) {
            try {
              JSON.parse(e);
              return utilsTypeCheckHelpers.trim(e);
            } catch (e) {
              if (e.name !== "SyntaxError") {
                throw e;
              }
            }
          }
          return JSON.stringify(e);
        }(e);
      } else {
        return e;
      }
    }],
    transformResponse: [function (e) {
      var t = this.transitional || h.transitional;
      var r = t && t.forcedJSONParsing;
      var n = this.responseType === "json";
      if (e && utilsTypeCheckHelpers.isString(e) && (r && !this.responseType || n)) {
        var o = t && t.silentJSONParsing;
        try {
          return JSON.parse(e);
        } catch (e) {
          if (!o && n) {
            if (e.name === "SyntaxError") {
              throw axiosErrorClass.from(e, axiosErrorClass.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return e;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: webPolyfillConfigWrapper.classes.FormData,
      Blob: webPolyfillConfigWrapper.classes.Blob
    },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    }
  };
  utilsTypeCheckHelpers.forEach(["delete", "get", "head"], function (e) {
    h.headers[e] = {};
  });
  utilsTypeCheckHelpers.forEach(["post", "put", "patch"], function (e) {
    h.headers[e] = utilsTypeCheckHelpers.merge(p);
  });
  module.exports = h;
}