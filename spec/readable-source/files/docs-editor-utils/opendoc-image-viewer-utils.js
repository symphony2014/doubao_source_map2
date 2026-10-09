// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G4' to 'isOpendoc'
// - Renamed export 'Z4' to 'hasNoNeedJsSDKSession'
// - Renamed export 'ZP' to 'OpendocImageViewerUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 356868
         */
module.exports = function (module, exports, require) {
  var colorAlphaUtility = require("color-alpha-utility") /*id: 265732*/;
  var themeDesignTokensProvider = require("theme-design-tokens-provider") /*id: 408160*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docComponentConfigUtils = require("doc-component-config-utils") /*id: 123085*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  function d(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
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
  let f = browserEnvironmentDetectionUtils.browserDetector.isOpendoc;
  let h = /noNeedJsSDKSession=true/.test(location.search);
  exports.OpendocImageViewerUtils = new class {
    get isOpendoc() {
      return browserEnvironmentDetectionUtils.browserDetector.isOpendoc;
    }
    get opendocImageConfig() {
      let {
        getFeatureConfigSelector: e
      } = flowPermissionSettingSelectors.flowSelectorsHub.openDoc;
      return e(platformDocUtils.D97.IMAGE)(reduxStoreInitializer.reduxStore.getState());
    }
    get opendocContentConfig() {
      let {
        getFeatureConfigSelector: e
      } = flowPermissionSettingSelectors.flowSelectorsHub.openDoc;
      return e(platformDocUtils.D97.CONTENT)(reduxStoreInitializer.reduxStore.getState());
    }
    get opendocCommentConfig() {
      let {
        getFeatureConfigSelector: e
      } = flowPermissionSettingSelectors.flowSelectorsHub.openDoc;
      return e(platformDocUtils.D97.COMMENT)(reduxStoreInitializer.reduxStore.getState());
    }
    constructor() {
      d(this, "showOpendocMask", e => {
        if (browserEnvironmentDetectionUtils.isOpendocOrDocComponent()) {
          platformDocUtils.GZf(platformDocUtils.aWg.CLOSE_IMAGE_VIEWER, colorAlphaUtility.getColorWithAlpha(themeDesignTokensProvider.getTokenValue("N1000-FG"), 0.85), () => e && e.hide());
        }
      });
      d(this, "isOuterViewer", () => docComponentConfigUtils.getDocComponentConfig("extensions.image.viewer") === "outer");
      d(this, "isNeedBlob", () => docComponentConfigUtils.getDocComponentConfig("extensions.image.needBlob"));
      d(this, "checkShouldRegisComment", () => {
        let e = true;
        if (browserEnvironmentDetectionUtils.isOpendocOrDocComponent()) {
          e = docComponentConfigUtils.getDocComponentConfig("extensions.comment.partial.disable") !== true;
        }
        return e;
      });
      d(this, "previewInOpendoc", e => {
        platformDocUtils.tI2(platformDocUtils.aWg.IMAGE_VIEW, e);
      });
      d(this, "hideOpendocMask", () => {
        if (browserEnvironmentDetectionUtils.isOpendocOrDocComponent()) {
          platformDocUtils.R1E(platformDocUtils.aWg.CLOSE_IMAGE_VIEWER);
        }
      });
    }
  }();
  require.d(exports, {
    isOpendoc: function () {
      return f;
    },
    hasNoNeedJsSDKSession: function () {
      return h;
    }
  });
}