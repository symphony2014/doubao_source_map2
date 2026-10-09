// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hg' to 'generateDocToken'
// - Renamed export 'LP' to 'resolveDocToken'
// - Renamed export 'bh' to 'getDocStore'
// - Renamed export 'eB' to 'getDocPlatform'
// - Renamed export 'ed' to 'validateDocToken'
// - Renamed export 's2' to 'getRawDocToken'
// - Renamed export 'zD' to 'transformTokenId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 740758
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  var boolDefaultGetter = require("bool-default-getter") /*id: 909267*/;
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  let p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let S = p.length;
  let f = () => {
    return boolDefaultGetter.getDefaultBool("operation_id", {
      operationId: "cn"
    })?.operationId;
  };
  let A = e => {
    let n = 0;
    for (let r = 1; r < e.length; r++) {
      n ^= e[r].charCodeAt(0);
    }
    return String.fromCharCode(65 + n % 26) + e.substring(1);
  };
  let m = function (e, n = "fdc") {
    if (e.length !== 27 || e.startsWith(n)) {
      return e;
    } else {
      return e.substring(4, 5) + e.substring(9, 10) + e.substring(14, 15) + e.substring(19, 20) + e.substring(24, 25) + (e.substring(0, 4) + e.substring(5, 9) + e.substring(10, 14) + e.substring(15, 19) + e.substring(20, 24) + e.substring(25));
    }
  };
  let I = function (e, n, r = "fdc") {
    if (n.startsWith(r) || !e.startsWith(r)) {
      return e;
    }
    let i = e.substring(0, r.length + 2);
    let o = e.substring(5, 9) + i[0] + e.substring(9, 13) + i[1] + e.substring(13, 17) + i[2] + e.substring(17, 21) + i[3] + e.substring(21, 25) + i[4] + e.substring(25);
    return A(o);
  };
  let O = () => {
    let e = "";
    for (let n = parseInt(uuidGeneratorUtil.generateUuid().replace(/-/g, ""), 16); n !== 0; n = Math.floor(n / S)) {
      let r = p[n % S];
      e = e.concat(r);
    }
    return e;
  };
  let R = true;
  let h = () => {
    if (!R) {
      return O();
    }
    try {
      let e = "";
      let n = BigInt(S);
      let r = uuidGeneratorUtil.generateUuid().replace(/-/g, "");
      for (let i = BigInt("0x" + r); i !== BigInt(0); i /= n) {
        let r = p[Number(i % n)];
        e = e.concat(r);
      }
      return e;
    } catch (e) {
      R = false;
      flowDocEventCollector.collectEvent("doc_bug_track_dev", {
        action: "BigInt not supported",
        info: isErrorUtil.isError(e) ? e.message : ""
      });
      return O();
    }
  };
  let N = function (e = "fdc") {
    let n = D();
    let r = e;
    let i = function (e, n) {
      let r;
      if (!(r = (docUrlResolver.isDocDomain === null || docUrlResolver.isDocDomain === undefined ? undefined : docUrlResolver.isDocDomain(e)) ? browserEnvironmentDetectionUtils.isSuperApp() ? f() : objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.operation_id") : m(e, n).slice(3, 5))) {
        if (window._isDev) {
          return "cn";
        }
        throw Error("[TokenHelper]: operationId is undefined");
      }
      return r;
    }(n, e);
    r = (r = r.concat(i)).concat(h());
    for (let e = 0, n = 27 - r.length; e < n; e++) {
      let e = p[Math.floor(Math.random() * S)];
      r = r.concat(e);
    }
    return I(r.slice(0, 27), n, e);
  };
  function C(e, n = "fdc") {
    if (e.length !== 27) {
      return false;
    }
    let r = m(e, n);
    return !!r.startsWith(n) || !!r.startsWith("dsb");
  }
  function D(e) {
    if (typeof window == "undefined") {
      return "";
    }
    if (docxConfigManager.docxConfigManager.isEmbedDocx) {
      let e = docxConfigManager.docxConfigManager.get("docxToken");
      if (e) {
        return e;
      }
    }
    return docTokenManager.getDocToken(e);
  }
  function L(e) {
    return docTokenManager.getDocToken(e);
  }
  function b() {
    if (docxConfigManager.docxConfigManager.isEmbedDocx) {
      return platformDocUtils.Gkz.DOCX;
    } else {
      return platformDocUtils.W4L();
    }
  }
  function g() {
    if (docxConfigManager.docxConfigManager.isEmbedDocx) {
      return docxConfigManager.docxConfigManager.get("store");
    } else {
      return reduxStoreInitializer.reduxStore;
    }
  }
  require.d(exports, {
    generateDocToken: function () {
      return N;
    },
    resolveDocToken: function () {
      return D;
    },
    getDocStore: function () {
      return g;
    },
    getDocPlatform: function () {
      return b;
    },
    validateDocToken: function () {
      return C;
    },
    getRawDocToken: function () {
      return L;
    },
    transformTokenId: function () {
      return m;
    }
  });
}