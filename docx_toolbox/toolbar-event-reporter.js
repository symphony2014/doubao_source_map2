// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L1' to 'getMoreMenuStatus'
// - Renamed export 'Nb' to 'trackPermission'
// - Renamed export 'c7' to 'trackToolbarStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 635395
         */
module.exports = function (module, exports, require) {
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  let a = debounceUtilWrapper.createDebounce((e, n) => {
    idleCallbackPolyfill_1.requestIdleCallback(() => {
      n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "toolbar_status_report",
        info: e
      });
    });
  }, 100);
  let c = debounceUtilWrapper.createDebounce((e, n) => {
    idleCallbackPolyfill_1.requestIdleCallback(() => {
      n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "toolbar_display_permission_report",
        info: e
      });
    });
  }, 100);
  function u(e, n, r = {}) {
    a(JSON.stringify({
      ...r,
      type: e
    }), n);
  }
  function s(e, n, r = {}) {
    c(JSON.stringify({
      ...r,
      type: e
    }), n);
  }
  function d(e) {
    let n = {
      is_more_menu: e.extra.extraFromMoreItem ? "false" : "true"
    };
    return n;
  }
  require.d(exports, {
    getMoreMenuStatus: function () {
      return d;
    },
    trackPermission: function () {
      return s;
    },
    trackToolbarStatus: function () {
      return u;
    }
  });
}