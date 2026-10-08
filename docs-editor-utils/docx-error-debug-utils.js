// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u_' to 'isDebugTraceEnabled'
// - Renamed export '$U' to 'extractBlockType'
// - Renamed export 'Jw' to 'getTraceConfig'
// - Renamed export 'jv' to 'copyErrorToClipboard'
// - Renamed export 'eX' to 'mergeErrorDetail'
// - Renamed export '$O' to 'createErrorObject'
// - Renamed export 'Wo' to 'formatErrorInfo'
// - Renamed export '_d' to 'getErrorStack'
// - Renamed export 'Q7' to 'handleErrorDetail'
// - Renamed export 'RY' to 'addHttpInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 899478
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var errorStatusCodes = require("error-status-codes") /*id: 187285*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var clipboardUtils = require("clipboard-utils") /*id: 411076*/;
  if (require("runtime-env-flags") /*id: 573139*/.isSpecialEnv) {
    Error.stackTraceLimit = 30;
  }
  let s = window.t;
  let d = () => boolDefaultGetterUtil.getDefaultBool("docx_trace_enable", false);
  let f = () => false;
  function h(e) {
    e.detail;
  }
  function _(e, n) {
    let r = {
      error: e
    };
    if (n) {
      r.fallbackError = n;
    }
    return r;
  }
  function p(e, n) {
    if (!n) {
      return e;
    }
    let r = e.detail;
    if (r != null) {
      n = Object.assign({}, n, {
        originDetail: r
      });
    }
    return Object.assign(e, {
      detail: n
    });
  }
  function g(e, n) {
    if (n) {
      return Object.assign(e, {
        httpInfo: n
      });
    } else {
      return e;
    }
  }
  async function E() {
    let n = await platformDocUtils.vi7();
    let {
      scmDocx: r
    } = {
      scmDocx: window.scmDocx?.scmInfo || {}
    };
    let {
      en: i,
      ...c
    } = JSON.parse(n);
    return {
      token: docTokenHelperUtils.resolveDocToken(),
      url: (location.href || "").replace(/(\/)/g, "\\/"),
      lang: i,
      scmDocx: r,
      ...c
    };
  }
  function m(e) {
    let n = typeof e == "string" ? e : e == null ? undefined : e.detail;
    let r = typeof n == "string" ? n : n == null ? undefined : n.msg;
    if (!r) {
      return;
    }
    let o = /blockType: (\w+),/.exec(r);
    if (o && o[1]) {
      return o[1];
    }
  }
  function b(e) {
    var n;
    var r;
    let {
      error: o,
      fallbackError: i
    } = e;
    let l = {
      name: (n = o instanceof Error || o.stack ? o : i || o).name,
      stack: n.stack,
      message: n.message,
      detail: n.detail
    };
    let u = function (e) {
      if (e.httpInfo) {
        return e.httpInfo;
      }
      if (e.config) {
        let {
          headers: n = {},
          url: r = ""
        } = e.config;
        let {
          code: o
        } = e;
        let i = errorStatusCodes.getErrorMessage(o);
        if (!o && e.response) {
          o = e.response.status;
          i = e.response.statusText;
        }
        let l = n["Request-Id"];
        let u = n["X-TT-LOGID"];
        return {
          code: o,
          url: r,
          queryParams: e.config.data || e.config.params || {},
          ttLogId: u,
          requestId: l,
          msg: i
        };
      }
      let {
        code: n,
        url: r,
        queryParams: o,
        ttLogId: i,
        requestId: l,
        msg: u
      } = e;
      if (n || r || i) {
        return {
          code: n,
          url: r,
          queryParams: o,
          ttLogId: i,
          requestId: l,
          msg: u
        };
      } else {
        return null;
      }
    }(o);
    if (u) {
      l.httpInfo = u;
    }
    l.stack &&= (r = l.stack) === null || r === undefined ? undefined : r.split("\n");
    return l;
  }
  async function v(e) {
    let n = false;
    try {
      let r = b(e);
      let o = await E();
      let i = JSON.stringify({
        baseInfo: o,
        error: r
      }, null, 2);
      clipboardUtils.copyToClipboard(i);
      n = true;
    } catch (e) {
      n = false;
    }
    toastNotificationManager_1.toastManager.show({
      type: n ? "success" : "error",
      content: n ? s("CreationDoc_DocX_Copied_Toast") : s("CreationDoc_DocX_CopiedFailed_Toast")
    });
  }
  function T() {
    return Error("").stack;
  }
  require.d(exports, {
    isDebugTraceEnabled: function () {
      return f;
    },
    extractBlockType: function () {
      return m;
    },
    getTraceConfig: function () {
      return d;
    },
    copyErrorToClipboard: function () {
      return v;
    },
    mergeErrorDetail: function () {
      return p;
    },
    createErrorObject: function () {
      return _;
    },
    formatErrorInfo: function () {
      return b;
    },
    getErrorStack: function () {
      return T;
    },
    handleErrorDetail: function () {
      return h;
    },
    addHttpInfo: function () {
      return g;
    }
  });
}