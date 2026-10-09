// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FK' to 'getContentWidth'
// - Renamed export 'HD' to 'isTextCardOpt'
// - Renamed export 'Hr' to 'isTextCardAnchor'
// - Renamed export 'L6' to 'hasMaxBlockCount'
// - Renamed export 'LV' to 'isPDFMode'
// - Renamed export 'Q2' to 'isShortcutOnly'
// - Renamed export 'UI' to 'isSyncedBlockHighlightShare'
// - Renamed export 'X3' to 'isUserNameI18nFg'
// - Renamed export 'cM' to 'debugLogger'
// - Renamed export 'cc' to 'isNeedComment'
// - Renamed export 'ck' to 'isSyncedBlockToken'
// - Renamed export 'dv' to 'getContainerDimensions'
// - Renamed export 'dy' to 'shortcutDebug'
// - Renamed export 'gY' to 'isAdminEventSource'
// - Renamed export 'hu' to 'isOkrContentHighlightShare'
// - Renamed export 'ir' to 'isAdminWithComment'
// - Renamed export 'pP' to 'isShortcutEnabled'
// - Renamed export 'rT' to 'notFindAnchor'
// - Renamed export 't3' to 'createCustomEvent'
// - Renamed export 'vN' to 'fetchSyncedBlockData'
// - Renamed export 'ww' to 'isWholeBlockHighlightShare'
// - Renamed export 'yG' to 'isNeedWatermark'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 407607
         */
module.exports = function (module, exports, require) {
  var urlParseUtils_1 = require("url-parse-utils_1") /*id: 152840*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var l = debugBrowserConfig;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var docxBlockTypeConstants_1 = require("docx-block-type-constants_1") /*id: 928355*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var anchorConstantsConfig = require("anchor-constants-config") /*id: 302634*/;
  let p = "not_find_anchor";
  let g = "[shortcut fe]";
  let E = l(g);
  function m() {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return false;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    return /shortcut=true/.test(e);
  }
  function b() {
    return m() && /eventSource=EventSource_ADMIN|need_comment=true/.test(window.location.href);
  }
  function v() {
    return m() && /eventSource=EventSource_ADMIN/.test(window.location.href);
  }
  function T() {
    return m() && /need_comment=true/.test(window.location.href);
  }
  function C() {
    return m() && !B() && !S();
  }
  function k() {
    if (!m()) {
      return false;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    let n = urlParseUtils_1.getUrlQuery(e);
    return Number(n == null ? undefined : n.scene) === anchorConstantsConfig.anchorScene.SCENE_HIGHLIGHT || (n == null ? undefined : n.anchor_sub_type) === "textCardAnchor";
  }
  function I() {
    if (!k()) {
      return false;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    let n = urlParseUtils_1.getUrlQuery(e);
    return (n == null ? undefined : n.text_card_opt) === "true";
  }
  function R() {
    if (!m()) {
      return false;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    let n = urlParseUtils_1.getUrlQuery(e);
    return (n == null ? undefined : n.synced_block_highlight_share) === "true";
  }
  function y() {
    if (!m()) {
      return false;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    let n = urlParseUtils_1.getUrlQuery(e);
    return (n == null ? undefined : n.okr_content_highlight_share) === "true";
  }
  function O() {
    if (!m()) {
      return false;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    let n = urlParseUtils_1.getUrlQuery(e);
    return (n == null ? undefined : n.whole_block_highlight_share) === "true";
  }
  function S() {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return false;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    return urlParseUtils_1.getUrlQuery(e).synced_block_token;
  }
  function A() {
    if (!S()) {
      return false;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    let {
      max_block_count: n
    } = urlParseUtils_1.getUrlQuery(e);
    return n > 0;
  }
  function L() {
    if (!S()) {
      return;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    let {
      content_width: n
    } = urlParseUtils_1.getUrlQuery(e);
    let r = Number(n);
    if (!isNaN(r)) {
      return `${r}px`;
    }
  }
  async function N(e) {
    let n = platformDocUtils.d6y?.search || location.search;
    let r = urlParseUtils_1.getUrlQuery(n).synced_block_token;
    let i = await apiClientInstance.apiClient.get("/api/docx/pages/client_vars", {
      baseURL: "/space",
      params: {
        mode: 4,
        id: e,
        block_id: r,
        limit: 239
      }
    });
    let l = [i.data];
    let u = i.data.next_cursors;
    while (u.length > 0) {
      let n = u.shift();
      let r = await apiClientInstance.apiClient.get("/api/docx/pages/client_vars", {
        baseURL: "/space",
        params: {
          mode: 4,
          id: e,
          cursor: n,
          limit: 239
        }
      });
      l.push(r.data);
    }
    return function (e, n) {
      let r = n.id;
      n.block_sequence[0] = r;
      n.block_map[r] = n.block_map[e];
      delete n.block_map[e];
      n.block_map[r].data.parent_id = "";
      n.block_map[r].id = r;
      n.block_map[r].data.type = "page";
      n.block_map[r].data.text = {
        apool: {
          nextNum: 0,
          numToAttrib: {}
        },
        initialAttributedTexts: {
          attribs: {
            0: ""
          },
          text: {
            0: ""
          }
        }
      };
      for (let o of Object.keys(n.block_map)) {
        if (n.block_map[o].data.parent_id === e) {
          n.block_map[o].data.parent_id = r;
        }
      }
      return n;
    }(r, docxBlockValidatorUtils.mergeBlockMaps(l));
  }
  function B() {
    return m() && objectPathGetDefault.getObjectPathDefault(window, "User.isPDF");
  }
  function D(e, n = {}) {
    if (isFunctionUtil_1.isFunction(CustomEvent)) {
      return new CustomEvent(e, n);
    }
    let r = document.createEvent("CustomEvent");
    r.initCustomEvent(e, !!n.bubbles, !!n.cancelable, n.detail);
    return r;
  }
  E.enabled = true;
  let w = () => m() && !B() ? window.innerHeight : 640;
  let M = () => {
    let e = window.document.querySelector(".shortcut-page-container");
    let n = (e == null ? undefined : e.offsetWidth) || document.documentElement.clientWidth || window.innerWidth;
    let r = w();
    if (B()) {
      n = Math.max(n, docxBlockTypeConstants_1.a4WidthInches * docxBlockTypeConstants_1.getInchWidth);
      r = docxBlockTypeConstants_1.a4HeightInches / docxBlockTypeConstants_1.a4WidthInches * n;
      if (T()) {
        n = Math.max(n, docxBlockTypeConstants_1.a5WidthInches * docxBlockTypeConstants_1.getInchWidth);
        r = docxBlockTypeConstants_1.letterWidthInches / docxBlockTypeConstants_1.a5WidthInches * n;
      }
    }
    return {
      container: e,
      width: n,
      height: r
    };
  };
  function P() {
    if (!B()) {
      return false;
    }
    let e = platformDocUtils.d6y?.search || location.search;
    return /need_watermark=true/.test(e);
  }
  function F() {
    if (B() || m()) {
      let e = platformDocUtils.d6y?.search || location.search;
      return /user_name_i18n_fg=true/.test(e);
    }
    return false;
  }
  require.d(exports, {
    getContentWidth: function () {
      return L;
    },
    isTextCardOpt: function () {
      return I;
    },
    isTextCardAnchor: function () {
      return k;
    },
    hasMaxBlockCount: function () {
      return A;
    },
    isPDFMode: function () {
      return B;
    },
    isShortcutOnly: function () {
      return C;
    },
    isSyncedBlockHighlightShare: function () {
      return R;
    },
    isUserNameI18nFg: function () {
      return F;
    },
    debugLogger: function () {
      return E;
    },
    isNeedComment: function () {
      return T;
    },
    isSyncedBlockToken: function () {
      return S;
    },
    getContainerDimensions: function () {
      return M;
    },
    shortcutDebug: function () {
      return g;
    },
    isAdminEventSource: function () {
      return v;
    },
    isOkrContentHighlightShare: function () {
      return y;
    },
    isAdminWithComment: function () {
      return b;
    },
    isShortcutEnabled: function () {
      return m;
    },
    notFindAnchor: function () {
      return p;
    },
    createCustomEvent: function () {
      return D;
    },
    fetchSyncedBlockData: function () {
      return N;
    },
    isWholeBlockHighlightShare: function () {
      return O;
    },
    isNeedWatermark: function () {
      return P;
    }
  });
}