// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Co' to 'isCommentRelationEnabled'
// - Renamed export 'DM' to 'isMobileCommentEnabled'
// - Renamed export 'IR' to 'isMobileCommentRelationEnabled'
// - Renamed export 'Kd' to 'isCommentScrollerOptimized'
// - Renamed export 'Ly' to 'isSyncedBlockCommentable'
// - Renamed export 'MM' to 'isCommentFeatureEnabled'
// - Renamed export 'Oz' to 'isCommentSyncedEnabled'
// - Renamed export 'SP' to 'shouldInsertStyleOptimized'
// - Renamed export 'ZG' to 'isCommentAsyncEnabled'
// - Renamed export 'bs' to 'isCommentPerfEnabled'
// - Renamed export 'gu' to 'isCommentConfigAvailable'
// - Renamed export 'ry' to 'getCommentConfig'
// - Renamed export 'ut' to 'shouldIgnoreCaretRect'
// - Renamed export 'z_' to 'shouldPreloadSyncedReferences'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 662786
         */
module.exports = function (module, exports, require) {
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  let c = (processBrowserShim == null ? undefined : processBrowserShim.env?.NODE_ENV) === "development";
  async function d() {
    return false;
  }
  function f() {
    return false;
  }
  let h = {
    docx_comment_limit_blocks_num: 1500,
    docx_comment_limit_comments_num: 70
  };
  function p(e) {
    let n = browserEnvironmentDetectionUtils.browserDetector.isMobile ? objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.docx_comment_config", h) : boolDefaultUtil.getDefaultBool("docx_comment_config", h);
    if (e) {
      return n[e];
    } else {
      return n;
    }
  }
  function v() {
    return true;
  }
  function g() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.comment.perf_insert_style", true) || c;
  }
  function m() {
    return true;
  }
  function _() {
    return true;
  }
  function y() {
    return true;
  }
  function E() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.comment_synced_reference_preload", false);
  }
  function b() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.comment_synced_block_commentable", false);
  }
  function I() {
    return true;
  }
  function T() {
    return !browserEnvironmentDetectionUtils.browserDetector.isMobile || boolDefaultGetterUtil.getDefaultBool("ccm.docx.mobile.comment_relation", false);
  }
  function k() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.comment_scroller_optimize", false);
  }
  function S() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.comment_text_no_caretrect", false);
  }
  require.d(exports, {
    isCommentRelationEnabled: function () {
      return I;
    },
    isMobileCommentEnabled: function () {
      return _;
    },
    isMobileCommentRelationEnabled: function () {
      return T;
    },
    isCommentScrollerOptimized: function () {
      return k;
    },
    isSyncedBlockCommentable: function () {
      return b;
    },
    isCommentFeatureEnabled: function () {
      return f;
    },
    isCommentSyncedEnabled: function () {
      return y;
    },
    shouldInsertStyleOptimized: function () {
      return g;
    },
    isCommentAsyncEnabled: function () {
      return d;
    },
    isCommentPerfEnabled: function () {
      return m;
    },
    isCommentConfigAvailable: function () {
      return v;
    },
    getCommentConfig: function () {
      return p;
    },
    shouldIgnoreCaretRect: function () {
      return S;
    },
    shouldPreloadSyncedReferences: function () {
      return E;
    }
  });
}