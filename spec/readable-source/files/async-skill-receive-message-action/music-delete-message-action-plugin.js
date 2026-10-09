// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'arrayFirstElement'
// - Resolved require(255519) to 'array-first-element'
// - Renamed variable 'r' to 'messageDeleteActionHandler'
// - Resolved require(183328) to 'message-delete-action-handler'
// - Renamed variable 'o' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'archiveBuildingIcon'
// - Resolved require(804712) to 'archive-building-icon'
// - Renamed variable 'c' to 'musicDeleteActionSymbol'
// - Resolved require(236778) to 'music-delete-action-symbol'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'B' to 'createDeleteHandler' (module 183328)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'C' to 'ArchiveIcon' (module 804712)
// - Updated imported property 'Z' to 'getFirstElement' (module 255519)
// - Updated imported property 'P' to 'musicDeleteAction' (module 236778)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 191727
         */
module.exports = function (module, exports, require) {
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var messageDeleteActionHandler = require("message-delete-action-handler") /*id: 183328*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var archiveBuildingIcon = require("archive-building-icon") /*id: 804712*/;
  let d = () => window.thirdXgPlayerManager;
  var musicDeleteActionSymbol = require("music-delete-action-symbol") /*id: 236778*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e, t, n) {
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
  let p = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      onDeleteClick: c
    } = messageDeleteActionHandler.createDeleteHandler({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsxs(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_delete",
      type: "danger",
      prefix: reactJsxRuntimeCoreReexport.jsx(archiveBuildingIcon.ArchiveIcon, {}),
      onClick: () => {
        c();
        if (messageContentTypeAndStatusChecker.vU5(t)) {
          (function (e) {
            let n = d();
            if (!e || !(n == null ? undefined : n.playerProperties?.isPlaying)) {
              return;
            }
            let {
              vid: i
            } = n.currentMusicInfo || {};
            if (e === i) {
              n.requestPlayerHandler().pause();
            }
          })(arrayFirstElement.getFirstElement(t.content_obj?.music_list || [])?.vid);
        }
      },
      children: [n("long_press_delete_message"), " "]
    });
  };
  class f {
    constructor() {
      v(this, "pluginIdentifier", musicDeleteActionSymbol.musicDeleteAction);
      v(this, "DropdownItemContentGroups", [p]);
    }
  }
  require.r(exports);
  require.d(exports, {
    MusicDeleteReceiveMessageActionButtonPlugin: function () {
      return f;
    }
  });
}