// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'brandAvatarComponent'
// - Resolved require(951505) to 'brand-avatar-component'
// - Renamed variable 'i' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'arrowRightIcon_1'
// - Resolved require(851073) to 'arrow-right-icon_1'
// - Renamed variable 'o' to 'downloadActionTracker'
// - Resolved require(671471) to 'download-action-tracker'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'u' to 'chatPlatformConstants'
// - Resolved require(166229) to 'chat-platform-constants'
// - Renamed variable 'c' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'd' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'p' to 'chatDownloadBannerId'
// - Resolved require(235508) to 'chat-download-banner-id'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'DownloadAction' (module 671471)
// - Updated imported property 'O' to 'BrandAvatar' (module 951505)
// - Updated imported property 'Z' to 'ArrowRightIcon' (module 851073)
// - Updated imported property 'NO' to 'useSourceKey' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'Vv' to 'sourceConstants' (module 166229)
// - Updated imported property 'z' to 'downloadBannerId' (module 235508)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 934414
         */
module.exports = function (module, exports, require) {
  var brandAvatarComponent = require("brand-avatar-component") /*id: 951505*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var arrowRightIcon_1 = require("arrow-right-icon_1") /*id: 851073*/;
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      utmSource: t,
      showFrom: n
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadAction, {
      className: "container-nwZZTr",
      utmSource: t,
      trackMeta: {
        showFrom: n
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "banner-fLcH_s",
        "data-testid": "after_message_download_desktop_button",
        children: [reactJsxRuntimeCoreReexport.jsx(brandAvatarComponent.BrandAvatar, {
          size: 18,
          theme: "white-bg"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "s-font-small text-s-color-text-secondary mr-4 ml-6",
          children: s("cici_desktop_web_ug_download_desktop_title_unlogin", {
            brandName: s("brandName_doubao")
          })
        }), reactJsxRuntimeCoreReexport.jsx(arrowRightIcon_1.ArrowRightIcon, {
          className: "text-12 p-2"
        })]
      })
    });
  };
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatDownloadBannerId = require("chat-download-banner-id") /*id: 235508*/;
  function m(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  let f = e => {
    let {
      suggestList: t,
      actionBarComponentNode: n
    } = e;
    let {
      suggestLoading: r,
      suggestListComponentNode: i,
      suggestsLength: a
    } = t || {};
    let {
      loading: o
    } = chatFgStoreHooks.useSourceKey("new_guest_guidance_type", {
      source: chatStorageKeys.chatStorageKeys.serverAB,
      defaultValue: false
    });
    let p = a && i && !r && !o;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [n, i, p ? reactJsxRuntimeCoreReexport.jsx(s, {
        utmSource: chatPlatformConstants.sourceConstants.unloginChat,
        showFrom: "first_prompts"
      }) : null]
    });
  };
  class _ {
    constructor() {
      m(this, "pluginIdentifier", chatDownloadBannerId.downloadBannerId);
      m(this, "Content", f);
    }
  }
  require.r(exports);
  require.d(exports, {
    DownloadBannerInChatReceiveMessageBottomPlugin: function () {
      return _;
    }
  });
}