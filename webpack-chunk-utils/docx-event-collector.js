// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xp' to 'BlockSourceTypes'
// - Renamed export 'X1' to 'SelectSourceTypes'
// - Renamed export 'ZP' to 'docEventCollector'
// - Renamed export 'rT' to 'InsertSourceTypes'
// - Renamed export 'r3' to 'wrappedCollector'
// - Renamed export 'iZ' to 'baseEventLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 477626
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var a;
  var c;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  function s(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  class E {
    get(e) {
      if (this[`_${e}`]) {
        return this[`_${e}`];
      } else if (this[e]) {
        this[`_${e}`] = this[e]();
        return this[`_${e}`];
      } else {
        return undefined;
      }
    }
    pack() {
      return {
        custom: {
          platform: this.get("platform"),
          sub_platform: this.get("subPlatform"),
          app_id: this.options.appId,
          user_login_type: this.options.userLogin ? "login" : "logout",
          tenant_id: this.options.tenantId,
          tenant_tag: this.options.tenantTag,
          one_id: this.options.oneId,
          gray_scale: this.options.branch,
          docx_pkg_version: this.options.docxVersion,
          web_version_date: this.options.publishDate,
          web_version_timestamp: this.options.publishTimestamp,
          web_version: this.options.publishVersion,
          browser: this.browser.name,
          browser_version: this.browser.version,
          browser_kernel: this.browser.kernel
        }
      };
    }
    constructor(e, n) {
      this.options = e;
      this.browser = n;
      s(this, "platform", () => this.browser.isMobile ? "h5" : "web");
      s(this, "subPlatform", () => this.get("platform") === "web" ? "pc_web" : this.browser.isWechat ? "weixin_web" : this.browser.isQQ ? "qq_web" : this.browser.isMobile ? "mobile_web" : "others");
    }
  }
  var requestIdleCallbackPolyfill_1 = require("request-idle-callback-polyfill_1") /*id: 806024*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  let S = null;
  let f = null;
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  let h = null;
  let N = null;
  if (platformEventDefinitions.eventConstants === null || platformEventDefinitions.eventConstants === undefined ? undefined : (c = platformEventDefinitions.eventConstants.PC) === null || c === undefined ? undefined : c.DOCS?.UPDATE_DOC_CONFIG) {
    platformDocUtils.vpe.on(platformEventDefinitions.eventConstants.PC.DOCS.UPDATE_DOC_CONFIG, e => {
      if (e[docxWidthModeConstants.attrNames.WIDTH_MODE]) {
        N = e[docxWidthModeConstants.attrNames.WIDTH_MODE];
      }
    });
  }
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var urlLocationUtils = require("url-location-utils") /*id: 979504*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var fullscreenModeDetector = require("fullscreen-mode-detector") /*id: 71569*/;
  let g = [e => {
    if (fullscreenModeDetector.isFullscreenMode()) {
      let n = e.get("blockType");
      if (n) {
        return n;
      }
    }
    return false;
  }, e => e.get("openbrd") === "1" && docBlockTypeConstants.blockTypeConstants.WHITEBOARD];
  let P = memoizeFunction.memoize(() => {
    let e = new URLSearchParams(urlLocationUtils.getSearch());
    for (let n = 0, r = g.length; n < r; n++) {
      let r = g[n](e);
      if (r !== false) {
        return r;
      }
    }
    return "";
  });
  var docxViewTypeUtil = require("docx-view-type-util") /*id: 883917*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  (i = {}).CONTENT = "select_content";
  i.BLOCK = "select_block";
  i.OTHER = "other";
  let U = i;
  (o = {}).BLOCK = "select_block";
  o.OTHER = "other";
  let k = o;
  (a = {}).SLASH = "slash";
  a.BUTTON = "add_button";
  a.OTHER = "other";
  let B = a;
  function H(e, n, r) {
    flowDocEventCollector.collectEvent(e, n, r);
  }
  docxEditorEventConstantsAndManager.globalEventBus.once(docxEditorConstantsConfig.fetchUserEndEvent, e => {
    let {
      type: n,
      branch: r,
      version: i,
      date: o,
      timestamp: a,
      docxVersion: u
    } = window.scm;
    let c = new E({
      userLogin: !!e.id,
      appId: APP_ID,
      tenantId: "test",
      tenantTag: "test",
      oneId,
      branch: r,
      publishDate: o,
      publishTimestamp: a,
      publishVersion: i,
      scmType: n,
      docxVersion: u || ""
    }, browserEnvironmentDetectionUtils.browserDetector);
    H("config", {
      user_unique_id: platformDocUtils.p5T(e.id),
      ...c.pack()
    });
    H("start");
  });
  let F = function () {
    let e = [];
    let n = false;
    let r = () => {
      n = true;
      requestIdleCallbackPolyfill_1.requestIdleCallback(i => {
        while (e.length && i.timeRemaining() > 0) {
          let n = e.shift();
          H(n.eventName, n.options);
        }
        if (e.length > 0) {
          r();
        } else {
          n = false;
        }
      });
    };
    return (i, o, a) => {
      var u;
      var c;
      if (a) {
        H(i, o, a);
        return;
      }
      e.push({
        eventName: i,
        options: o
      });
      if (((c = window) === null || c === undefined || (u = c.globalScrollingStatus) === null || u === undefined || !u.getIsScrolling()) && !n) {
        r();
      }
    };
  }();
  let G = [docxViewTypeUtil.injectDocViewType, function (e) {
    return function (n, r = {}, i = false) {
      if (isNullCheck.isNull(h)) {
        h = docxFeatureFlags.isNotMobile();
      }
      if (h) {
        N ||= objectPathGetDefault.getObjectPathDefault(reduxStoreInitializer.reduxStore.getState(), ["docx", "documentConfig", docxWidthModeConstants.attrNames.WIDTH_MODE]);
        if (N) {
          r.doc_screen_width_type = docxWidthModeConstants.widthDescriptions[N];
        }
      }
      return e.call(window, n, r, i);
    };
  }, function (e) {
    return function (n, r = {}, i = false) {
      if (isNullCheck.isNull(S)) {
        S = docxConfigManager.docxConfigManager.isEmbedDocx;
      }
      if (S) {
        f ||= platformDocUtils.p5T(docxConfigManager.docxConfigManager.get("docxToken"));
        r.doc_file_id = f;
        r.doc_file_type = "docx";
      }
      return e.call(window, n, r, i);
    };
  }, function (e) {
    return function (n, r = {}, i = false) {
      r.doc_url_block_type = P();
      return e.call(window, n, r, i);
    };
  }, function (e) {
    return function (n, r = {}, i = false) {
      let o = r.origin_root_file_type;
      if (typeof o == "string" && o.toLowerCase() !== "docx" && o !== docBlockTypeConstants.blockTypeConstants.PAGE) {
        r.synced_source_block_file_id = r.origin_root_file_id;
        r.synced_source_block_file_type = o;
      }
      delete r.origin_root_file_id;
      delete r.origin_root_file_type;
      return e.call(window, n, r, i);
    };
  }].reduce((e, n) => n(e), F);
  var W = G;
  require.d(exports, {
    BlockSourceTypes: function () {
      return k;
    },
    SelectSourceTypes: function () {
      return U;
    },
    docEventCollector: function () {
      return W;
    },
    InsertSourceTypes: function () {
      return B;
    },
    wrappedCollector: function () {
      return G;
    },
    baseEventLogger: function () {
      return H;
    }
  });
}