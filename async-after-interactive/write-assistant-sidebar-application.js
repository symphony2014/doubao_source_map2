// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'WriteAssistantSidebarLink'
// - Renamed export 'i' to 'writeAssistantRoute'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 387738
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var chatViewConstants = require("chat-view-constants") /*id: 528191*/;
  var sidebarSkillTrackingHook = require("sidebar-skill-tracking-hook") /*id: 923275*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var svgDocumentIcon = require("svg-document-icon") /*id: 807030*/;
  var m = {
    "sidebar-application": "sidebar-application-s612ls",
    tag: "tag-ngUJsW",
    text: "text-XuK0dj"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = "/chat/write";
  let v = e => {
    let {
      NavLink: t,
      className: r,
      onClick: n,
      ...v
    } = e;
    let y = i18nTranslationUtils.useTranslationWithFallback();
    let b = sidebarSkillTrackingHook.useSkillShowTracker(chatAppEnums.SkillType.WriteAssistant, v);
    let w = writeConfigManager.WriteConfigManager.useIsNewDoc();
    let _ = writeConfigManager.WriteConfigManager.useIsNewTag();
    let x = writeConfigManager.WriteConfigManager.useIsNewHome();
    let k = w && x;
    let {
      sidebarV2: T
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    let S = reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: k && _ && reactJsxRuntimeCoreReexport.jsx("div", {
        className: m.tag,
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: m.text,
          children: y("input_skillbar_promote_tag_new")
        })
      })
    });
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      ...v,
      NavLink: t,
      "data-testid": `skill-page-item-${chatAppEnums.SkillType.WriteAssistant}`,
      className: i(m["sidebar-application"], r),
      renderIcon: e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(svgDocumentIcon.DocumentIcon, {
          className: t
        });
      },
      v2: T,
      text: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [y("skill_writing_title"), S]
      }),
      popoverTitle: k ? y("doc_mainPage_sidebar_btn_openDocs") : undefined,
      url: `${g}?from=${chatViewConstants.chatViewConstants.SIDEBAR}`,
      onClick: () => {
        if (k) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "enter_doc_homepage",
            meta: {
              from: "sidebar"
            }
          });
        }
        if (n != null) {
          n();
        }
      },
      onShow: b
    });
  };
  require.d(exports, {
    WriteAssistantSidebarLink: function () {
      return v;
    },
    writeAssistantRoute: function () {
      return g;
    }
  });
}