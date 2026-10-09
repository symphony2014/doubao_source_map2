// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v8' to 'CanvasEventProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59341.c357291c.js
         * chunkId: 59341
         * moduleId: 41235
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var tempValueStore = require("temp-value-store") /*id: 31491*/;
  var chatSkillPluginRegistry = require("chat-skill-plugin-registry") /*id: 500651*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var docExportPopover = require("doc-export-popover") /*id: 381123*/;
  var initConversationMessageList = require("init-conversation-message-list") /*id: 767528*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var asyncBusinessLayout_2 = require("async-business-layout_2") /*id: 878823*/;
  function S(e, t, i) {
    var a;
    if ((t = typeof (a = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var a = i.call(e, t || "default");
        if (typeof a != "object") {
          return a;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? a : a + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let b = async e => {
    let {
      fetchDocArtifactMeta: t
    } = writingSkillStore.writingSkillStore.getState();
    let {
      current_version_info: i = {}
    } = await t({
      docId: e
    });
    return {
      docId: e,
      artifact: i
    };
  };
  class y {
    get extraParams() {
      if (isFunctionUtil_1.isFunction(this._extraParams)) {
        return this._extraParams();
      } else {
        return this._extraParams;
      }
    }
    get openedArtifactKey() {
      let {
        openedArtifact: t
      } = writingSkillStore.writingSkillStore.getState();
      return (t == null ? undefined : t.artifactKey) ?? null;
    }
    async getContext() {
      var t;
      if (this.context?.docId === this._docId && ((t = this.context) === null || t === undefined ? undefined : t.artifact.id) === this.openedArtifactKey) {
        return this.context;
      }
      let i = `${this._docId}__${this.openedArtifactKey}`;
      if (this.fetchPromise && this.fetchId === i) {
        return this.fetchPromise;
      }
      this.fetchId = i;
      this.fetchPromise = b(this._docId);
      try {
        let e = await this.fetchPromise;
        this.context = e;
        return e;
      } finally {
        this.fetchId = null;
        this.fetchPromise = null;
      }
    }
    get docId() {
      return this._docId;
    }
    get docPath() {
      return this._docPath;
    }
    updateDocId(e) {
      this._docId = e;
    }
    async getMessage() {
      let {
        artifact: s
      } = await this.getContext();
      let l = s.source_meta?.question_message_id ?? "";
      let d = s.source_meta?.conversation_id ?? "";
      let _ = s.resource_id ?? "";
      let h = s.id ?? "";
      let v = () => {
        return chatSkillPluginRegistry.skillBarPlugin({
          conversationId: d,
          docId: _,
          artifactKey: this.openedArtifactKey ?? undefined
        }) ?? conversationMessageUtils_1.findReplyMessage(chatMessageStoreFactory.createMessageStore.getState(), d, l);
      };
      let k = v();
      let g = y.cachedMessageMap.get(h);
      if (k || !isUndefinedCheck.isUndefined(g)) {
        return g ?? k;
      }
      try {
        if (this.messageFetchId !== h) {
          this.messageFetchId = h;
          this.messageFetchPromise = infraUtilFunctions.invokeFunction(async () => {
            await initConversationMessageList.initMessageList({
              conversationId: d,
              messageIndex: Number.MAX_SAFE_INTEGER
            });
            y.cachedMessageMap.set(h, e ?? null);
            this.messageFetchId = null;
          });
        }
        await this.messageFetchPromise;
        let e = v();
        return e;
      } catch {
        return v();
      }
    }
    async getSuperTaskParams() {
      var i;
      let a = await this.getMessage();
      let n = a == null ? undefined : a.async_task?.id;
      let o = a == null ? undefined : (i = a.verbose) === null || i === undefined ? undefined : i.super_task?.supertask_task_type;
      if (n) {
        return {
          super_task_id: n,
          super_task_mode: o === "0" ? "search_task" : "complex_task",
          skill_id: "138",
          skill_name: "super_task"
        };
      }
    }
    async getSkillParams() {
      let i = await this.getMessage();
      let {
        variables: a
      } = safeJsonUtils.safeParse(i == null ? undefined : i.ext?.input_skill, {});
      let n = !!objectPathGetDefault.getObjectPathDefault(a, "action") || (i == null ? undefined : i.skill?.skill_type) === chatAppEnums.SkillType.WriteAssistant;
      return {
        skill_id: n || !i ? String(chatAppEnums.SkillType.WriteAssistant) : null,
        skill_name: n || !i ? skillTypeMappings.getSkillName(chatAppEnums.SkillType.WriteAssistant) : null
      };
    }
    async getCommonParams() {
      let a = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      let n = {
        artifact_type: "1",
        page_token: this._docId,
        canvas_type: "writing",
        show_status: "show",
        ...(a == null ? undefined : a.getCanvasTeaParams())
      };
      let {
        artifact: {
          resource_type: o,
          id: r = "",
          source_id: s = ""
        }
      } = await this.getContext();
      let l = await this.getMessage();
      let {
        resourceType: d
      } = chatSkillPluginRegistry.chatGuidancePlugin({
        conversationId: s,
        artifactKey: r
      }) ?? {};
      let _ = d ?? o;
      let {
        message_id: u,
        conversation_id: m,
        section_id: p
      } = l ?? {};
      let {
        conversation: g
      } = chatSkillPinTypeDeterminer.getConversationBotInfo(s);
      return {
        ...n,
        ...(await this.getSkillParams()),
        conversation_id: m,
        bot_id: chatConversationBotId.getConversationBotId(m, true),
        message_id: u,
        section_id: p,
        is_by_step_writing: _ === asyncBusinessLayout_2.ArtifactResType.StepWritingOtterPage || _ === asyncBusinessLayout_2.ArtifactResType.StepDocxPage ? "1" : "0",
        tenant_id: (g == null ? undefined : g.tenant_id) || "0",
        llm_intention: (l == null ? undefined : l.ext?.llm_intention) || "",
        llm_intention_detail: (l == null ? undefined : l.ext?.llm_intention_detail) || "",
        ...(await this.getSuperTaskParams())
      };
    }
    async trackEvent(e, t) {
      let i = await this.getCommonParams();
      teaAnalyticsEventTracker.trackEvent(e, {
        ...i,
        ...t,
        ...this.extraParams
      });
    }
    outputPreviewShow() {
      this.prevCanvasEnterTime = Date.now();
      let e = tempValueStore.consumeValue() ? "auto" : "manual";
      this.trackEvent("output_preview_show", {
        open_method: e
      });
    }
    outputPreviewClick(e) {
      let {
        buttonName: t
      } = e;
      this.trackEvent("output_preview_click", {
        button_name: t
      });
    }
    startWritingShow(e) {
      let {
        layoutType: t
      } = e;
      this.trackEvent("start_writing_show", {
        layout_type: t
      });
    }
    startWritingClick(e) {
      let {
        levelOne: i,
        levelTwo: a,
        layoutType: n
      } = e;
      this.prevStartWritingContext = {
        button_name_level_one: i,
        button_name_level_two: a,
        layout_type: n
      };
      this.trackEvent("start_writing_click", this.prevStartWritingContext ?? {});
    }
    pauseWriting() {
      this.trackEvent("pause_writing", this.prevStartWritingContext ?? {});
    }
    textSelectionBarShow() {
      this.trackEvent("text_selection_bar_show");
    }
    textSelectionBarClick(e) {
      let {
        buttonName: t
      } = e;
      this.trackEvent("text_selection_bar_click", {
        button_name: t
      });
    }
    selectionBarAction(e) {
      let {
        buttonName: t,
        rewriteKey: i,
        rewriteCommand: a,
        canvasBarType: n
      } = e;
      this.trackEvent("selection_bar_action", {
        button_name: t,
        rewrite_key: i,
        rewrite_command: a,
        canvas_bar_type: n
      });
    }
    outputPreviewSlide(e) {
      let {
        direction: t
      } = e;
      this.trackEvent("output_preview_slide", {
        slide_direction: t
      });
    }
    canvasFreeEditSave(e) {
      let {
        editMethod: t
      } = e;
      this.trackEvent("canvas_free_edit_save", {
        edit_method: t,
        save_time: Math.ceil(Date.now() / 1000)
      });
    }
    outputPreviewExit() {
      this.trackEvent("output_preview_exit", {
        stay_duration: this.prevCanvasEnterTime ? Date.now() - this.prevCanvasEnterTime : undefined
      });
    }
    outputPreviewActClick() {
      this.trackEvent("output_preview_act_click");
    }
    sendMessage(e) {
      let {
        scene: t
      } = e;
      this.trackEvent("send_message", {
        scene: t
      });
    }
    sendMessageStatus(e) {
      let {
        scene: t,
        isWriteSkill: i
      } = e;
      this.trackEvent("send_message_status", {
        scene: t,
        ...(i ? {
          skill_id: String(chatAppEnums.SkillType.WriteAssistant),
          skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.WriteAssistant)
        } : {})
      });
    }
    browsingSwitchShow() {
      this.trackEvent("browsing_switch_show", {
        is_popover: "1"
      });
    }
    browsingSwitchClick(e) {
      let {
        value: t
      } = e;
      this.trackEvent("browsing_switch_click", {
        is_popover: "1",
        click_status: t ? "open" : "close"
      });
    }
    deepThinkingSwitchShow() {
      this.trackEvent("deep_thinking_switch_show", {
        is_popover: "1"
      });
    }
    copy(e) {
      let {
        clickFrom: t,
        selectedContentIndex: i,
        copyType: a,
        originalDocumentVersion: n
      } = e;
      this.trackEvent("copy", {
        click_from: t,
        copy_type: a,
        selected_content_index: i,
        copy_content_type: "artifact",
        original_document_version: n,
        user_type: "bot"
      });
    }
    rightClickCopy(e = {}) {
      let {
        startIndex: t,
        endIndex: i,
        isImage: a,
        selectedContentIndex: n,
        copyType: o,
        originalDocumentVersion: s
      } = e;
      let l = {
        start_index: t,
        end_index: i,
        content_type: "doc",
        click_from: "canvas",
        copy_type: o,
        selected_content_index: n,
        copy_content_type: "artifact",
        original_document_version: s,
        user_type: "bot"
      };
      if (!isUndefinedCheck.isUndefined(a)) {
        l.is_image = a ? "1" : "0";
      }
      this.trackEvent("right_click_copy", l);
    }
    download(e = {}) {
      let {
        originalDocumentVersion: t,
        type: i,
        clickFrom: a
      } = e;
      let n = {
        [docExportPopover.FileType.PDF]: "pdf",
        [docExportPopover.FileType.MarkDown]: "markdown",
        [docExportPopover.FileType.Word]: "docx",
        [docExportPopover.FileType.WordDoc]: "docx"
      };
      this.trackEvent("download", {
        click_from: a ?? "canvas_function",
        original_document_version: t,
        content_type: "ai_doc",
        content_sec_type: isUndefinedCheck.isUndefined(i) ? undefined : n[i]
      });
    }
    clickRegenerate() {
      this.trackEvent("click_regenerate", {
        click_from: "canvas_selection_bar"
      });
    }
    breakMessage(e) {
      let {
        scene: t
      } = e;
      this.trackEvent("break_message", {
        scene: t
      });
    }
    aiGenerateContentShow(e) {
      let {
        triggerScene: t
      } = e;
      this.trackEvent("ai_generate_content_show", {
        trigger_scene: t
      });
    }
    aiGenerateButtonShow(e) {
      let {
        triggerScene: t
      } = e;
      this.trackEvent("ai_generate_button_show", {
        trigger_scene: t
      });
    }
    aiGenerateButtonClick(e) {
      let {
        triggerScene: t,
        method: i,
        buttonName: a
      } = e;
      this.trackEvent("ai_generate_button_click", {
        trigger_scene: t,
        method: i,
        button_name: a
      });
    }
    paragraphToolListShow() {
      this.trackEvent("paragraph_tool_list_show");
    }
    paragraphToolListClick(e) {
      let {
        buttonName: t
      } = e;
      this.trackEvent("paragraph_tool_list_click", {
        button_name: t
      });
    }
    pictureLoadingStart(e = {}) {
      let {
        pictureType: t,
        clickFrom: i
      } = e;
      this.trackEvent("picture_loading_start", {
        picture_type: t,
        click_from: i
      });
    }
    pictureLoadingFinish(e) {
      let {
        status: t
      } = e;
      this.trackEvent("picture_loading_finish", {
        status: t
      });
    }
    pictureButtonClick(e) {
      let {
        buttonName: t,
        pictureId: i
      } = e;
      this.trackEvent("picture_button_click", {
        button_name: t,
        picture_id: i
      });
    }
    pictureChangeEnterBarShow(e = {}) {
      let {
        pictureType: t
      } = e;
      this.trackEvent("picture_change_enter_bar_show", {
        picture_type: t
      });
    }
    pictureChangeEnterBarClick(e = {}) {
      let {
        pictureType: t
      } = e;
      this.trackEvent("picture_change_enter_bar_click", {
        picture_type: t
      });
    }
    pictureSearchResultShow(e) {
      let {
        pictureType: t,
        pictureId: i
      } = e;
      this.trackEvent("picture_search_result_show", {
        picture_type: t,
        picture_id: i
      });
    }
    pictureSearchResultClick(e) {
      let {
        pictureType: t,
        pictureId: i
      } = e;
      this.trackEvent("picture_search_result_click", {
        picture_type: t,
        picture_id: i
      });
    }
    sharePanelClick(e) {
      let {
        buttonName: t,
        clickStatus: i,
        originalDocumentVersion: a
      } = e;
      this.trackEvent("share_panel_click", {
        entrance_type: "canvas_top",
        current_page: "ai_doc_detail",
        tab_name: "",
        button_name: t,
        click_status: i,
        original_document_version: a
      });
    }
    closeDocCanvasPopupShow() {
      this.trackEvent("close_doc_canvas_popup_show");
    }
    closeDocCanvasPopupClick(e) {
      let {
        buttonName: t
      } = e;
      this.trackEvent("close_doc_canvas_popup_click", {
        button_name: t
      });
    }
    closeAiModifyGuidancePopupShow() {
      this.trackEvent("close_ai_modify_guidance_popup_show");
    }
    closeAiModifyGuidancePopupClick(e) {
      let {
        buttonName: t
      } = e;
      this.trackEvent("close_ai_modify_guidance_popup_click", {
        button_name: t
      });
    }
    editDocButtonShow() {
      this.trackEvent("edit_doc_button_show", {
        show_from: "canvas_outside_doc_card"
      });
    }
    constructor({
      docId: e,
      docPath: t,
      extraParams: i
    }) {
      S(this, "_docId", undefined);
      S(this, "_docPath", undefined);
      S(this, "fetchPromise", null);
      S(this, "fetchId", null);
      S(this, "messageFetchPromise", null);
      S(this, "messageFetchId", null);
      S(this, "context", null);
      S(this, "prevCanvasEnterTime", null);
      S(this, "prevStartWritingContext", null);
      S(this, "_extraParams", undefined);
      this._docId = e;
      this._docPath = t;
      this._extraParams = i;
    }
  }
  S(y, "cachedMessageMap", new Map());
  var reactCanvasEventsContext = require("react-canvas-events-context") /*id: 578669*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let {
      docId: t,
      docPath: i = "flow-doc",
      extraParams: o,
      children: r
    } = e;
    let s = reactCoreLibraryReexport.useMemo(() => new y({
      docId: t,
      docPath: i,
      extraParams: o
    }), []);
    reactUseUpdateEffect.useUpdateEffect(() => {
      s.updateDocId(t);
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(reactCanvasEventsContext.CanvasEventsContext.Provider, {
      value: s,
      children: r
    });
  };
  require.d(exports, {
    CanvasEventProvider: function () {
      return x;
    }
  });
}