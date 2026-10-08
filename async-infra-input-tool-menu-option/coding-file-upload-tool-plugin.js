// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'aiCodeUploadDropdownMenu'
// - Resolved require(951786) to 'ai-code-upload-dropdown-menu'
// - Renamed variable 'i' to 'aiCodingUploadOptions'
// - Resolved require(241057) to 'ai-coding-upload-options'
// - Renamed variable 's' to 'codingSkillUploadHandler'
// - Resolved require(612038) to 'coding-skill-upload-handler'
// - Renamed variable 'a' to 'checkCodeAssistantEnabled'
// - Resolved require(973747) to 'check-code-assistant-enabled'
// - Renamed variable 'l' to 'chatGithubRepoUploadModal'
// - Resolved require(789650) to 'chat-github-repo-upload-modal'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'u' to 'reactUseRefValue'
// - Resolved require(45405) to 'react-use-ref-value'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'N' to 'isCodeAssistantEnabled' (module 973747)
// - Updated imported property 'T' to 'useRefValue' (module 45405)
// - Updated imported property 'Q' to 'getAiCodingOptions' (module 241057)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'y' to 'ChatGithubRepoModal' (module 789650)
// - Updated imported property 'm' to 'CodingSkillUploadHandler' (module 612038)
// - Updated imported property 'K' to 'CodeUploadDropdown' (module 951786)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-menu-option.99a4fe5c.js
         * chunkId: 24352
         * moduleId: 648692
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var aiCodeUploadDropdownMenu = require("ai-code-upload-dropdown-menu") /*id: 951786*/;
  var aiCodingUploadOptions = require("ai-coding-upload-options") /*id: 241057*/;
  var codingSkillUploadHandler = require("coding-skill-upload-handler") /*id: 612038*/;
  var checkCodeAssistantEnabled = require("check-code-assistant-enabled") /*id: 973747*/;
  var chatGithubRepoUploadModal = require("chat-github-repo-upload-modal") /*id: 789650*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var reactUseRefValue = require("react-use-ref-value") /*id: 45405*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      portalMenuOption: n,
      menuVisible: p,
      closeMenu: f,
      skill: h
    } = e;
    let m = checkCodeAssistantEnabled.isCodeAssistantEnabled() || true;
    let [g, v] = reactCoreLibraryReexport.useState(false);
    let b = reactUseRefValue.useRefValue(p != null && p);
    let y = aiCodingUploadOptions.getAiCodingOptions();
    let C = reactCoreLibraryReexport.useRef(null);
    let O = {
      skill_id: h == null ? undefined : h.skill_type,
      skill_name: skillTypeMappings.getSkillName(h == null ? undefined : h.skill_type)
    };
    if (m) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [g && reactJsxRuntimeCoreReexport.jsx(chatGithubRepoUploadModal.ChatGithubRepoModal, {
          visible: g,
          toggleGithubModalVisible: v,
          useV3: true
        }), b && reactJsxRuntimeCoreReexport.jsx(codingSkillUploadHandler.CodingSkillUploadHandler, {
          ref: C,
          afterClick: () => f == null ? undefined : f(),
          toggleGithubModalVisible: v
        }), n == null ? undefined : n(reactJsxRuntimeCoreReexport.jsx(aiCodeUploadDropdownMenu.CodeUploadDropdown, {
          options: y,
          onChange: C.current?.handleUpload,
          trackParams: O
        }))]
      });
    } else {
      return null;
    }
  };
  function f(e, t, n) {
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
  class h {
    constructor() {
      f(this, "type", "attachment");
      f(this, "Content", p);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingGenericFileUploadToolMenuOptionPlugin: function () {
      return h;
    }
  });
}