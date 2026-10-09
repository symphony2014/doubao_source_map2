// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'useCanvasEventTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 588262
         */
module.exports = function (module, exports, require) {
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var codingCanvasEventTracker = require("coding-canvas-event-tracker") /*id: 943129*/;
  var chatSkillInputBuilder = require("chat-skill-input-builder") /*id: 700419*/;
  var codeCanvasStore = require("code-canvas-store") /*id: 355082*/;
  var codeCanvasContext = require("code-canvas-context") /*id: 16996*/;
  function c() {
    let e = codeCanvasContext.useCodeCanvasContext();
    let {
      conversation_id: t,
      message_id: a
    } = e;
    let c = chatSkillInputBuilder.buildChatSkillInput(t, a);
    let d = e.canvas_sub_type;
    let p = e.is_dev_mode_artifacts;
    t ||= codeCanvasStore.useCanvasSelector(e => e.artifacts.conversationId);
    a ||= codeCanvasStore.useCanvasSelector(e => e.artifacts.messageId);
    let u = codeCanvasStore.useCanvasSelector(e => e.artifacts.canvasSubTypeParams);
    let m = codeCanvasStore.useCanvasSelector(e => e.artifacts.artifactId);
    let g = codeCanvasStore.useCanvasSelector(e => e.artifacts.activeFilePath);
    let {
      trackCodingCanvasEvent: k
    } = codingCanvasEventTracker.codingCanvasPipeline({
      conversationId: t,
      messageId: a,
      canvasSubType: p ? "build_artifacts" : d,
      chatId: t
    });
    let h = () => {
      let e = {};
      switch (d) {
        case "modelgen":
          e.code_language = u.codeLanguage;
          e.file_num_type = u.fileNum;
          break;
        case "artifacts":
        case "build_artifacts":
          e.code_language = u.codeLanguage;
          e.artifact_type = u.artifactType;
          e.artifact_id = m;
          e.version = u.artifactVersion;
          e.file_num_type = u.fileNum;
      }
      return e;
    };
    let y = (e, t) => {
      let o = {
        canvas_type: "coding",
        skill_id: c == null ? undefined : c.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(c == null ? undefined : c.skill?.skill_type_no_default)
      };
      if (c == null ? undefined : c.bot_id) {
        o.bot_id = c.bot_id;
      }
      k(e, {
        ...o,
        ...t
      });
    };
    let f = skillPinModalCallback.useSkillPinCallback(e => {
      if (!u.codeLanguage) {
        return;
      }
      let {
        isRunSuccess: t,
        runType: a,
        errorInfo: i
      } = e;
      y("code_run_status", {
        ...h(),
        status: t ? "1" : "0",
        run_type: a,
        preview_error_info: a === "preview" ? t ? "" : i : "",
        error_info: a === "run" ? t ? "" : i : ""
      });
    });
    let x = skillPinModalCallback.useSkillPinCallback(e => {
      if (u.codeLanguage) {
        y("preview_error_info", {
          ...h(),
          status: "0",
          error_info: JSON.stringify(e.errors)
        });
      }
    });
    let v = skillPinModalCallback.useSkillPinCallback(e => {
      k("marscode_download_show", {
        ...h(),
        ...e
      });
    });
    let _ = skillPinModalCallback.useSkillPinCallback(() => {
      k("marscode_download_click", {
        ...h()
      });
    });
    let b = skillPinModalCallback.useSkillPinCallback(e => {
      y("output_preview_element_show", {
        ...h(),
        ...e,
        show_status: "show"
      });
    });
    let w = skillPinModalCallback.useSkillPinCallback(() => {
      y("trae_download_button_show", {
        ...h(),
        app_name: "cn"
      });
    });
    let S = skillPinModalCallback.useSkillPinCallback(e => {
      y("download", {
        ...h(),
        download_type: e,
        content_type: "code",
        click_from: "canvas_function",
        content_sec_type: g == null ? undefined : g.substring((g == null ? undefined : g.lastIndexOf(".")) + 1)
      });
    });
    let j = skillPinModalCallback.useSkillPinCallback(e => {
      y("trae_download_status", {
        ...h(),
        status: e,
        app_type: "cn",
        app_name: "cn"
      });
    });
    let M = skillPinModalCallback.useSkillPinCallback((e, t) => {
      y("output_preview_click", {
        ...h(),
        button_name: e,
        ...t
      });
    });
    return {
      trackCodeBaseEvent: y,
      trackCodeRunStatus: f,
      trackPreviewErrorInfo: x,
      trackMarscodeShowEvent: v,
      trackMarscodeClickEvent: _,
      trackOutputPreviewElementShow: b,
      trackDownloadMenuClick: S,
      trackTraeDownloadShow: w,
      trackTraeDownloadStatus: j,
      trackOutputPreviewClick: M
    };
  }
  require.d(exports, {
    useCanvasEventTracker: function () {
      return c;
    }
  });
}