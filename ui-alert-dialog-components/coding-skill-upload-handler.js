// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'CodingSkillUploadHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 612038
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var useCodingSkillAttachmentHandlerHook = require("use-coding-skill-attachment-handler-hook") /*id: 573323*/;
  let c = () => {
    let e = chatAppEnums.SkillType.Default;
    let t = "default";
    let n = reactFunctionMemoHook.useMemoizedCallback(n => {
      var i;
      var a;
      teaAnalyticsEventTracker.trackEvent("pin_button_click", {
        button_name: n,
        skill_id: t,
        skill_name: skillTypeMappings.getSkillName(e) || "",
        current_page: ((a = location) === null || a === undefined ? undefined : (i = a.href) === null || i === undefined ? undefined : i.includes("coding")) ? "code_assistant_detail_page" : "chat"
      });
    });
    let {
      attachmentStates: i,
      handleAddFiles: c,
      handleAddDir: d,
      clearAttachments: u
    } = useCodingSkillAttachmentHandlerHook.useCodingSkillAttachmentHandler({
      skillId: t,
      skillType: e
    });
    return {
      uploadTeaReport: n,
      handleAddFiles: c,
      handleAddDir: d,
      clearAttachments: u,
      attachmentStates: i
    };
  };
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var skillMessageTypes = require("skill-message-types") /*id: 824454*/;
  var marscodeGuestAccessHandler = require("marscode-guest-access-handler") /*id: 870433*/;
  var _ = "input-sJeqhp";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      uploadTeaReport: n,
      handleAddFiles: l,
      handleAddDir: o,
      toggleGithubModalVisible: a,
      attachmentStates: r,
      clearAttachments: s,
      afterClick: c
    } = e;
    let m = reactCoreLibraryReexport.useRef(null);
    let g = reactCoreLibraryReexport.useRef(null);
    let {
      supportedCodeFileTypes: b
    } = codeAssistantFileValidator.validateFileName();
    let v = () => {
      var e;
      if ((e = m.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.click();
      }
    };
    let x = () => {
      var e;
      if ((e = g.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.click();
      }
    };
    let {
      onClickGuestDisabled: w
    } = marscodeGuestAccessHandler.useMarsCodeGuestAccess();
    let y = r == null ? undefined : r.some(e => e.type === "link");
    let k = r == null ? undefined : r.some(e => e.type === "directory");
    let C = ((r == null ? undefined : r.length) ?? 0) > 0;
    return {
      handleUpload: async e => {
        if (await w()) {
          if (e === skillMessageTypes.resourceTypes.FILE) {
            n("upload_file");
            v();
          } else if (e === skillMessageTypes.resourceTypes.DIR) {
            n("upload_folder");
            x();
          } else if (e === skillMessageTypes.resourceTypes.REPO) {
            n(skillConstantsEnum.UploadSource.UPLOAD_FROM_PULL_CODE);
            a(true);
          }
          if (c != null) {
            c();
          }
        }
      },
      peerNodes: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("input", {
          type: "file",
          multiple: true,
          className: _,
          onChange: e => {
            if (y || k) {
              s({});
            }
            l(e);
            if (m.current) {
              m.current.value = "";
            }
          },
          ref: m,
          accept: b == null ? undefined : b.join(",")
        }), reactJsxRuntimeCoreReexport.jsx("input", {
          type: "file",
          directory: "true",
          mozdirectory: "true",
          webkitdirectory: "true",
          className: _,
          onChange: e => {
            if (C) {
              s({});
            }
            o(e);
            if (g.current) {
              g.current.value = "";
            }
          },
          ref: g
        })]
      })
    };
  };
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      afterClick: n,
      toggleGithubModalVisible: l
    } = e;
    let {
      uploadTeaReport: o,
      handleAddFiles: a,
      handleAddDir: r,
      clearAttachments: s,
      attachmentStates: d
    } = c();
    let {
      handleUpload: u,
      peerNodes: p
    } = m({
      afterClick: n,
      toggleGithubModalVisible: l,
      uploadTeaReport: o,
      handleAddFiles: a,
      handleAddDir: r,
      clearAttachments: s,
      attachmentStates: d
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      handleUpload: u
    }), [u]);
    return p;
  });
  require.d(exports, {
    CodingSkillUploadHandler: function () {
      return g;
    }
  });
}