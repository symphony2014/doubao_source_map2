// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aM' to 'isFileCacheExist'
// - Renamed export '$Q' to 'isImageExist'
// - Renamed export 'Uf' to 'updateFileToken'
// - Renamed export 'cT' to 'uploadFile'
// - Renamed export 'Ox' to 'deleteResourceCache'
// - Renamed export 'W2' to 'copyFilePath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 966944
         */
module.exports = function (module, exports, require) {
  var o;
  var ccmDocumentConstants = require("ccm-document-constants") /*id: 598776*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxLoggerFactory = require("docx-logger-factory") /*id: 417672*/;
  (o = {})[o.PENDING = 0] = "PENDING";
  o[o.FULFILLED = 1] = "FULFILLED";
  o[o.REJECTED = 2] = "REJECTED";
  let s = o;
  let d = docxLoggerFactory.createLogger("call-rust");
  async function h(e, n) {
    let r = s.PENDING;
    let o = Date.now();
    d.info(`callRust start: ${e}, status ${r}`);
    try {
      let {
        LarkAPI: o
      } = window;
      if (o && o.transport && o.transport.callRustApi) {
        let i = await o.transport.callRustApi(e, n, {
          useFast: true
        });
        r = s.FULFILLED;
        return i.data;
      }
    } catch (n) {
      d.error(`callRust error: ${e}`, n);
      r = s.REJECTED;
      return Promise.reject(n);
    } finally {
      let n = Date.now() - o;
      d.info(`callRust end: ${e}, status ${r}, timestamp ${n}`);
    }
  }
  async function f(e) {
    let {
      uuid: n,
      success: r
    } = await h(ccmDocumentConstants.HCY, e);
    if (!r) {
      d.error("copyFilePath error");
    }
    return n;
  }
  async function p(e) {
    let {
      code: n,
      fileToken: r,
      msg: o
    } = await h(ccmDocumentConstants.QBM, e);
    if (n !== 0) {
      d.error("uploadFile error", o);
      return Promise.reject(o);
    } else {
      return r;
    }
  }
  async function g(e) {
    try {
      let {
        exist: n
      } = await h(ccmDocumentConstants.lB_, {
        token: e
      });
      return n;
    } catch (n) {
      d.error("isImageExist error", docxUtilityHelpers.maskSensitiveData(e));
      return false;
    }
  }
  async function m(e, n, r = docTokenHelperUtils.resolveDocToken()) {
    try {
      let a = {
        token: e
      };
      if (n === 1) {
        a = Object.assign(a, {
          resource_type: n,
          api_type: 2
        });
      }
      let {
        exist: u
      } = await h(ccmDocumentConstants.lB_, a);
      let s = await platformDocUtils.hMy({
        pageToken: r,
        fileToken: e
      });
      let f = s == null ? undefined : s.data?.fileInfo;
      d.info(`isFileCacheExist, token ${docxUtilityHelpers.maskSensitiveData(e)}, fileInfo ${!!f}, fileCache ${u}`);
      return f && u;
    } catch (n) {
      d.error("isFileCacheExist error", docxUtilityHelpers.maskSensitiveData(e));
      return false;
    }
  }
  async function v(e, n, r) {
    let {
      success: o
    } = await h(ccmDocumentConstants.Q7M, {
      fake_file_token: e,
      real_file_token: n,
      api_type: r
    });
    if (!o) {
      d.error("updateFileToken error", docxUtilityHelpers.maskSensitiveData(n));
    }
    return o;
  }
  async function b(e) {
    let {
      success: n
    } = await h(ccmDocumentConstants.kHT, {
      token: e,
      type: 1
    });
    if (!n) {
      d.error("deleteResourceCache error", docxUtilityHelpers.maskSensitiveData(e));
    }
    return n;
  }
  require.d(exports, {
    isFileCacheExist: function () {
      return m;
    },
    isImageExist: function () {
      return g;
    },
    updateFileToken: function () {
      return v;
    },
    uploadFile: function () {
      return p;
    },
    deleteResourceCache: function () {
      return b;
    },
    copyFilePath: function () {
      return f;
    }
  });
}