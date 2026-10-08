// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatRouteSkillMapper'
// - Resolved require(467072) to 'chat-route-skill-mapper'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 's' to 'iconFolderOutline'
// - Resolved require(393888) to 'icon-folder-outline'
// - Renamed variable 'l' to 'myCreationStoreManager'
// - Resolved require(736603) to 'my-creation-store-manager'
// - Renamed variable 'c' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'd' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'SV' to 'getMyCreationStore' (module 736603)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'o4' to 'routePathMap' (module 467072)
// - Updated imported property 'rF' to 'skillTypeKeys' (module 467072)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'Z' to 'FolderIcon' (module 393888)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 217157
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatRouteSkillMapper = require("chat-route-skill-mapper") /*id: 467072*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var iconFolderOutline = require("icon-folder-outline") /*id: 393888*/;
  var myCreationStoreManager = require("my-creation-store-manager") /*id: 736603*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  let u = e => `/chat/create-image?tab=${e}`;
  let h = () => {
    let e = useNavigateRuntimeResolver.useNavigateResolver();
    return useLatestCallbackHook_1.useLatestCallback(() => e(u("myCreation")));
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      isNarrowScreen: t
    } = e;
    let n = myCreationStoreManager.getMyCreationStore();
    let {
      nodeId: c
    } = n.useShallowStore(e => ({
      nodeId: e.nodeId
    }));
    let d = h();
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let p = typeof window != "undefined" && window.location.pathname === chatRouteSkillMapper.routePathMap[chatRouteSkillMapper.skillTypeKeys.Image] && !t;
    reactCoreLibraryReexport.useEffect(() => {
      if (p) {
        n.fetchNodeId();
      }
    }, [p]);
    if (p && c) {
      return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        icon: reactJsxRuntimeCoreReexport.jsx(iconFolderOutline.FolderIcon, {
          className: "icon-hheYiN"
        }),
        type: "tertiary",
        className: "button-KMORy3",
        onClick: () => {
          n.showMyCreation(c);
          d();
        },
        children: u("image_mainPage_btn_myCreations")
      });
    } else {
      return null;
    }
  };
  class m {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: p,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = p;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AISpaceMyCreationChatHeaderToolButtonPlugin: function () {
      return m;
    }
  });
}