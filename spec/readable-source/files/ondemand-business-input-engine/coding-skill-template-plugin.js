// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'i' to 'codeRouteUtils'
// - Resolved require(983618) to 'code-route-utils'
// - Renamed variable 'a' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'o' to 'codingSkillChatHandler'
// - Resolved require(609755) to 'coding-skill-chat-handler'
// - Renamed variable 'l' to 'chatInputPopoverProps'
// - Resolved require(66913) to 'chat-input-popover-props'
// - Renamed variable 's' to 'skillCodingArtifactsModal'
// - Resolved require(539249) to 'skill-coding-artifacts-modal'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'fH' to 'isCodePage' (module 983618)
// - Updated imported property 'q' to 'useCodingSkillChat' (module 609755)
// - Updated imported property 'D' to 'getChatPopoverProps' (module 66913)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'D' to 'SkillCodingModal' (module 539249)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 403777
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var codingSkillChatHandler = require("coding-skill-chat-handler") /*id: 609755*/;
  var chatInputPopoverProps = require("chat-input-popover-props") /*id: 66913*/;
  var skillCodingArtifactsModal = require("skill-coding-artifacts-modal") /*id: 539249*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      chatType: t,
      trackParams: r,
      reportParams: d
    } = e;
    let [c] = codingSkillStoreModule.codingSkillStore(e => [e.recommendArtifactsCategoryItems]);
    let p = codeRouteUtils.isCodePage();
    let {
      handleSendTemplate: f,
      sendArtifactClickEvent: m,
      sendArtifactShowEvent: h,
      sendClickTagEvent: g
    } = codingSkillChatHandler.useCodingSkillChat({
      trackParams: r,
      reportParams: d,
      isCodingPage: p
    });
    let {
      popoverProps: v
    } = chatInputPopoverProps.getChatPopoverProps({
      chatType: t,
      isGuidanceInput: true
    });
    let y = throttledPathFilterStringify.throttledPathStr(d ?? {}, ["scene", "skill_from"]);
    return reactJsxRuntimeCoreReexport.jsx(skillCodingArtifactsModal.SkillCodingModal, {
      artifactsCategoryList: c,
      onClickTracker: m,
      onClickTagTracker: g,
      onShowTracker: h,
      onSendTemplate: e => {
        if (f != null) {
          f(e);
        }
      },
      reportParams: y,
      enableTemplateNavigate: !p,
      ...v
    });
  };
  class c {
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
          value: d,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = d;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingTemplatePlugin: function () {
      return c;
    }
  });
}