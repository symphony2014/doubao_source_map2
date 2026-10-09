// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$C' to 'extractLoginSuccessBackUrl'
// - Renamed export 'C0' to 'appendLoginSuccessBackUrl'
// - Renamed export 'Mn' to 'appendGhhParam'
// - Renamed export 'W8' to 'getOrStoreLoginSource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 804250
         */
module.exports = function (module, exports, require) {
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let o = function (e) {
    let l = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.pathname;
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : location?.search;
    if (e.includes("loginSuccessBackUrl")) {
      return e;
    } else {
      return urlParamUtils.mergeUrlParams(e, {
        loginSuccessBackUrl: l + n
      });
    }
  };
  let a = e => urlParamUtils.mergeUrlParams(e, {
    ghh: "1"
  });
  let r = e => {
    try {
      let l = urlParamUtils.parseQueryString(e ?? (location.search || ""))?.loginSuccessBackUrl || "";
      let n = decodeURIComponent(l);
      let o = n == null ? undefined : n.startsWith(location.origin);
      let a = (n == null ? undefined : n.startsWith("/")) && !(n == null ? undefined : n.startsWith("//"));
      if (o || a) {
        return l;
      }
      return "";
    } catch (e) {
      return "";
    }
  };
  let s = "login_source";
  let c = e => {
    let t = storageWrapperWithFallback.SessionStorageWrapper.getItem(s);
    if (t && t !== "undefined") {
      return t;
    }
    try {
      let o = urlParamUtils.parseQueryString((e || location)?.search).login_source;
      if (!t && o) {
        storageWrapperWithFallback.SessionStorageWrapper.setItem(s, o);
      }
      return o;
    } catch (e) {
      return "";
    }
  };
  require.d(exports, {
    extractLoginSuccessBackUrl: function () {
      return r;
    },
    appendLoginSuccessBackUrl: function () {
      return o;
    },
    appendGhhParam: function () {
      return a;
    },
    getOrStoreLoginSource: function () {
      return c;
    }
  });
}