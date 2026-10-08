// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'r' to 'imageActionUtils'
// - Resolved require(323276) to 'image-action-utils'
// - Renamed variable 'o' to 'imageStatusEnum'
// - Resolved require(923272) to 'image-status-enum'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'l' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 's' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'd' to 'batchImageStoreLogic'
// - Resolved require(73795) to 'batch-image-store-logic'
// - Renamed variable 'c' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'v' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'useDebouncedCallbackHook_1'
// - Resolved require(366474) to 'use-debounced-callback-hook_1'
// - Renamed variable 'm' to 'reactDownloadIcon'
// - Resolved require(391488) to 'react-download-icon'
// - Renamed variable 'g' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'h' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'b' to 'chatMessageActionSymbol_1'
// - Resolved require(662833) to 'chat-message-action-symbol_1'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'S0' to 'imageStore' (module 73795)
// - Updated imported property 'Z' to 'isEqual' (module 550444)
// - Updated imported property 'Z' to 'useDebouncedCallback' (module 366474)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'zu' to 'imageStatusEnum' (module 923272)
// - Updated imported property 'uV' to 'processImageData' (module 323276)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'd' to 'DownloadIcon' (module 391488)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'w' to 'receiveMessageAction' (module 662833)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 87017
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var imageStatusEnum = require("image-status-enum") /*id: 923272*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var batchImageStoreLogic = require("batch-image-store-logic") /*id: 73795*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var reactDownloadIcon = require("react-download-icon") /*id: 391488*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let _ = () => ({
    creationBatchDownloadSupported: chatFgStoreHooks.getSourceValue("creation_batch_download_supported", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "1"
  });
  var chatMessageActionSymbol_1 = require("chat-message-action-symbol_1") /*id: 662833*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function w(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let k = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      creationBatchDownloadSupported: l
    } = _();
    let [g, h] = batchImageStoreLogic.imageStore(e => [e.onUpdateBatchDownloadSelected, e.toggleImageUrl], deepEqualityUtil_1.isEqual);
    let {
      run: b
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
      var e;
      var i;
      var l;
      var s;
      var d;
      g(true);
      if ((e = chatStoreManager.getStoreState("chatMessageBoxLayoutStore")) !== null && e !== undefined) {
        e.getLayoutSetter().setLayoutAreaVisible("bottom");
      }
      let m = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      if (m != null) {
        m.closeCanvasPanel();
      }
      let _ = ((i = window) === null || i === undefined ? undefined : i.document?.querySelector) ? (s = window) === null || s === undefined ? undefined : (l = s.document) === null || l === undefined ? undefined : l.querySelector(`[data-message-id="${t == null ? undefined : t.message_id}"]`) : null;
      if (_) {
        _.scrollIntoView({
          behavior: "smooth"
        });
      }
      let b = messageContentTypeAndStatusChecker.Cki(t);
      let y = b == null ? undefined : b.filter(e => (e == null ? undefined : e.status) === imageStatusEnum.imageStatusEnum.ImageStatusSucceed);
      if (y != null) {
        y.forEach(e => {
          h(imageActionUtils.processImageData(e).downloadImage?.url || "", t);
        });
      }
      teaAnalyticsEventTracker.trackEvent("multi_download_entrance_click", {
        pic_id: y == null ? undefined : (d = y.map(e => {
          return imageActionUtils.processImageData(e).downloadImage?.url || "";
        })) === null || d === undefined ? undefined : d.join(","),
        skillId: (t == null ? undefined : t.skill?.skill_type) ? "3" : null,
        skillName: (t == null ? undefined : t.skill?.skill_type) ? "images_generation" : null,
        content_type: "pic",
        message_id: t == null ? undefined : t.message_id
      });
    }, {
      leading: true,
      trailing: false
    });
    if (l) {
      return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
        "data-testid": "message_action_download",
        prefix: reactJsxRuntimeCoreReexport.jsx(reactDownloadIcon.DownloadIcon, {}),
        tooltipContent: n("image_btn_download"),
        onClick: b
      });
    } else {
      return null;
    }
  };
  let x = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      creationBatchDownloadSupported: s
    } = _();
    let [g, h] = batchImageStoreLogic.imageStore(e => [e.onUpdateBatchDownloadSelected, e.toggleImageUrl], deepEqualityUtil_1.isEqual);
    let {
      run: b
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
      var e;
      var i;
      var l;
      var s;
      var d;
      g(true);
      if ((e = chatStoreManager.getStoreState("chatMessageBoxLayoutStore")) !== null && e !== undefined) {
        e.getLayoutSetter().setLayoutAreaVisible("bottom");
      }
      let m = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      if (m != null) {
        m.closeCanvasPanel();
      }
      let _ = ((i = window) === null || i === undefined ? undefined : i.document?.querySelector) ? (s = window) === null || s === undefined ? undefined : (l = s.document) === null || l === undefined ? undefined : l.querySelector(`[data-message-id="${t == null ? undefined : t.message_id}"]`) : null;
      if (_) {
        _.scrollIntoView({
          behavior: "smooth"
        });
      }
      let b = messageContentTypeAndStatusChecker.Cki(t);
      let y = b == null ? undefined : b.filter(e => (e == null ? undefined : e.status) === imageStatusEnum.imageStatusEnum.ImageStatusSucceed);
      if (y != null) {
        y.forEach(e => {
          h(imageActionUtils.processImageData(e).downloadImage?.url || "", t);
        });
      }
      teaAnalyticsEventTracker.trackEvent("multi_download_entrance_click", {
        pic_id: y == null ? undefined : (d = y.map(e => {
          return imageActionUtils.processImageData(e).downloadImage?.url || "";
        })) === null || d === undefined ? undefined : d.join(","),
        skillId: (t == null ? undefined : t.skill?.skill_type) ? "3" : null,
        skillName: (t == null ? undefined : t.skill?.skill_type) ? "images_generation" : null,
        content_type: "pic",
        message_id: t == null ? undefined : t.message_id
      });
    }, {
      leading: true,
      trailing: false
    });
    if (s) {
      return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
        "data-testid": "message_action_download_dropdown",
        prefix: reactJsxRuntimeCoreReexport.jsx(reactDownloadIcon.DownloadIcon, {}),
        onClick: b,
        children: n("image_btn_download")
      });
    } else {
      return null;
    }
  };
  class E {
    constructor() {
      w(this, "pluginIdentifier", chatMessageActionSymbol_1.receiveMessageAction);
      w(this, "ButtonContentGroups", [k]);
      w(this, "DropdownItemContentGroups", [x]);
    }
  }
  require.r(exports);
  require.d(exports, {
    CreationDownloadReceiveMessageActionButtonPlugin: function () {
      return E;
    }
  });
}