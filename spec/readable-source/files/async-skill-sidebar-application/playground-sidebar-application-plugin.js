// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'docPlaygroundCheck'
// - Resolved require(993680) to 'doc-playground-check'
// - Renamed variable 's' to 'documentNavigationAndCreationUtils'
// - Resolved require(491592) to 'document-navigation-and-creation-utils'
// - Renamed variable 'l' to 'aiDocCreateTracking'
// - Resolved require(86772) to 'ai-doc-create-tracking'
// - Renamed variable 'c' to 'chatSkillInputConstants'
// - Resolved require(697792) to 'chat-skill-input-constants'
// - Renamed variable 'u' to 'sidebarFeatureFlagsResolver'
// - Resolved require(386007) to 'sidebar-feature-flags-resolver'
// - Renamed variable 'd' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 'p' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'f' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'm' to 'secureLinkOpener'
// - Resolved require(357305) to 'secure-link-opener'
// - Renamed variable 'h' to 'arrowDownLeftRtlIcon'
// - Resolved require(162439) to 'arrow-down-left-rtl-icon'
// - Renamed variable 'g' to 'rtlAddDocumentIcon'
// - Resolved require(458522) to 'rtl-add-document-icon'
// - Renamed variable 'v' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'G' to 'isDocPlayground' (module 993680)
// - Updated imported property 'n' to 'getSidebarFeatureFlags' (module 386007)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 't' to 'openSecureLink' (module 357305)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'of' to 'createDocumentWithToast' (module 491592)
// - Updated imported property 'oB' to 'trackDocCreate' (module 86772)
// - Updated imported property 'DY' to 'createEntryPoints' (module 86772)
// - Updated imported property 'f4' to 'docCreateModes' (module 86772)
// - Updated imported property 'y' to 'SkillDisplayType' (module 697792)
// - Updated imported property 'Z' to 'ArrowDownLeftRtlIcon' (module 162439)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'Z' to 'RtlAddDocumentIcon' (module 458522)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 67449
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var docPlaygroundCheck = require("doc-playground-check") /*id: 993680*/;
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var aiDocCreateTracking = require("ai-doc-create-tracking") /*id: 86772*/;
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var secureLinkOpener = require("secure-link-opener") /*id: 357305*/;
  var arrowDownLeftRtlIcon = require("arrow-down-left-rtl-icon") /*id: 162439*/;
  var rtlAddDocumentIcon = require("rtl-add-document-icon") /*id: 458522*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      className: t,
      titleClassName: r,
      ...i
    } = e;
    let b = reactCoreLibraryReexport.useRef(false);
    let w = docPlaygroundCheck.isDocPlayground();
    let {
      sidebarV2: _
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    let x = useNavigateRuntimeResolver.useNavigateResolver();
    let k = e => {
      if (!w) {
        secureLinkOpener.openSecureLink(`/doc-playground/${e}`);
        return;
      }
      x(`/${e}`, {
        replace: true
      });
    };
    let T = async () => {
      if (b.current) {
        return;
      }
      let {
        messageLinkMap: r
      } = chatMessageStoreFactory.createMessageStore.getState();
      let n = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId ?? "";
      if (!w || r[n]) {
        b.current = true;
        try {
          await documentNavigationAndCreationUtils.createDocumentWithToast({
            parentNodeId: undefined,
            onSuccess: e => {
              aiDocCreateTracking.trackDocCreate({
                clickFrom: aiDocCreateTracking.createEntryPoints.AiDocListCreateButton,
                createWay: aiDocCreateTracking.docCreateModes.BlankFile,
                pageToken: e
              });
            },
            enterFrom: aiDocCreateTracking.createEntryPoints.AiDocListCreateButton,
            isDocPlayground: true,
            navigate: k,
            layoutMode: chatSkillInputConstants.SkillDisplayType.Sidebar
          });
        } catch (e) {} finally {
          b.current = false;
        }
      }
    };
    let S = () => w ? null : reactJsxRuntimeCoreReexport.jsx(arrowDownLeftRtlIcon.ArrowDownLeftRtlIcon, {
      className: "icon-aTT7dr"
    });
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      isOverflowPopover: i.isOverflowPopover,
      renderIcon: e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(rtlAddDocumentIcon.RtlAddDocumentIcon, {
          className: t
        });
      },
      className: o("sidebar-application-bP5bMs", t),
      v2: _,
      text: reactJsxRuntimeCoreReexport.jsx("div", {
        className: r,
        children: "新文档"
      }),
      renderAfterTitle: () => reactJsxRuntimeCoreReexport.jsx("div", {
        className: "icon-wrapper-mcCgx1",
        children: S()
      }),
      renderHint: S,
      onClick: T
    });
  };
  class w {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: b,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = b;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    PlaygroundSidebarApplicationPlugin: function () {
      return w;
    }
  });
}