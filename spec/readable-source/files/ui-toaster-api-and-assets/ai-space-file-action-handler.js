// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GO' to 'getCodingFileSizeWarning'
// - Renamed export 'kU' to 'getMediaFileTooltip'
// - Renamed export 'w$' to 'getFileReviewWarning'
// - Renamed export 'gV' to 'showFileReviewToast'
// - Renamed export 'rK' to 'isMediaFileActionable'
// - Renamed export 'wz' to 'handleFileAction'
// - Renamed export 'Lf' to 'isFileSizeValid'
// - Renamed export 'jd' to 'openFileInAiSpace'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 90817
         */
module.exports = function (module, exports, require) {
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var pageUpgradeStatusCheck = require("page-upgrade-status-check") /*id: 259114*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var codeArtifactUrlResolver = require("code-artifact-url-resolver") /*id: 198594*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  var fileEntityTypeMapper = require("file-entity-type-mapper") /*id: 300358*/;
  var aiSpaceEventReporter = require("ai-space-event-reporter") /*id: 946482*/;
  var fileReviewStatusUtils = require("file-review-status-utils") /*id: 282595*/;
  var fileEntityTypeConstants = require("file-entity-type-constants") /*id: 567257*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var secureLinkOpener = require("secure-link-opener") /*id: 357305*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var codingSkillFeatureGate = require("coding-skill-feature-gate") /*id: 749495*/;
  var fileEntityConstants = require("file-entity-constants") /*id: 745880*/;
  var chatSidebarLayoutLogic = require("chat-sidebar-layout-logic") /*id: 947890*/;
  var getFileTypeLabel = require("get-file-type-label") /*id: 20561*/;
  var conversationIdBroadcast = require("conversation-id-broadcast") /*id: 522337*/;
  var aiSpacePdfReadConversationCreator = require("ai-space-pdf-read-conversation-creator") /*id: 364938*/;
  var createAiSpaceAttachmentMessage = require("create-ai-space-attachment-message") /*id: 450433*/;
  var aiSpaceMediaParsePlugin = require("ai-space-media-parse-plugin") /*id: 509039*/;
  var aiSpaceMessageFactory = require("ai-space-message-factory") /*id: 823688*/;
  var aiSpaceOnboardingHandler = require("ai-space-onboarding-handler") /*id: 348011*/;
  var linkPayloadMessageBuilder = require("link-payload-message-builder") /*id: 656099*/;
  var aiSpaceLinkProcessor = require("ai-space-link-processor") /*id: 265447*/;
  var aiSpaceMessageCreator = require("ai-space-message-creator") /*id: 248330*/;
  var aiSpaceImageGenerationRequestBuilder = require("ai-space-image-generation-request-builder") /*id: 419450*/;
  var aiSpaceImageMessageBuilder = require("ai-space-image-message-builder") /*id: 764148*/;
  var aiSpaceFileToConversationItem = require("ai-space-file-to-conversation-item") /*id: 618729*/;
  var createAttachmentMessage = require("create-attachment-message") /*id: 596462*/;
  var aiSpaceFileReadProcessor = require("ai-space-file-read-processor") /*id: 530651*/;
  var aiChatAttachmentProcessor = require("ai-chat-attachment-processor") /*id: 317986*/;
  var aiSpaceExcelCodeInterpreterUrlParser = require("ai-space-excel-code-interpreter-url-parser") /*id: 806208*/;
  var createAiSpaceAttachmentMessage_1 = require("create-ai-space-attachment-message_1") /*id: 495310*/;
  var aiSpaceFileReadPdfHandler = require("ai-space-file-read-pdf-handler") /*id: 937395*/;
  var aiSpaceMessageCreator_1 = require("ai-space-message-creator_1") /*id: 317268*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  let z = async e => {
    let i;
    let {
      url: t,
      shareId: n,
      needBindConversation: a = true
    } = e;
    let r = new URLSearchParams(t.substring(t.indexOf("?")));
    let s = r.get("action");
    let l = r.get("preSendId");
    if (!s || !l) {
      return;
    }
    let {
      pluginId: c,
      payload: d
    } = JSON.parse(s);
    let u = false;
    switch (c) {
      case aiActionConstants.aiActionConstants.AISpace_ExcelAIRead:
        i = (u = await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillRead)) ? aiSpaceMessageCreator_1.createAiSpaceMessage : aiSpaceFileReadPdfHandler.handleAiSpaceFileRead;
        break;
      case aiActionConstants.aiActionConstants.AISpace_ExcelCodeInterpreter:
        i = (u = await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillCodeInterpreter)) ? createAiSpaceAttachmentMessage_1.createAiSpaceAttachmentMessage : aiSpaceExcelCodeInterpreterUrlParser.parseExcelCodeInterpreterUrl;
        break;
      case aiActionConstants.aiActionConstants.AISpace_FileAIRead:
        i = (u = await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillRead)) ? aiChatAttachmentProcessor.processAttachment : aiSpaceFileReadProcessor.processAiSpaceFile;
        break;
      case aiActionConstants.aiActionConstants.AISpace_FileAskDoubao:
        i = (u = await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillFreeChat)) ? createAttachmentMessage.createAttachmentMsg : aiSpaceFileToConversationItem.convertAiSpaceFileToConversationItem;
        break;
      case aiActionConstants.aiActionConstants.AISpace_ImageCreate:
        i = (u = await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillImageGen)) ? aiSpaceImageMessageBuilder.createAiSpaceMessage : aiSpaceImageGenerationRequestBuilder.buildImageGenerationRequest;
        break;
      case aiActionConstants.aiActionConstants.AISpace_LinkAIRead:
        i = (u = await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillRead)) ? aiSpaceMessageCreator.createSpaceMessage : aiSpaceLinkProcessor.handleLinkPayload;
        break;
      case aiActionConstants.aiActionConstants.AISpace_LinkAskDoubao:
        i = (u = await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillFreeChat)) ? linkPayloadMessageBuilder.createLinkMessage : aiSpaceOnboardingHandler.getSpaceOnboardingMsg;
        break;
      case aiActionConstants.aiActionConstants.AISpace_AudioMindMap:
      case aiActionConstants.aiActionConstants.AISpace_AudioRead:
      case aiActionConstants.aiActionConstants.AISpace_VideoMindMap:
      case aiActionConstants.aiActionConstants.AISpace_VideoSummary:
      case aiActionConstants.aiActionConstants.AISpace_VideoRead:
      case aiActionConstants.aiActionConstants.AISpace_AudioSummary:
        i = (u = await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr)) ? aiSpaceMessageFactory.createAiSpaceMessage : aiSpaceMediaParsePlugin.processMediaPayload;
        break;
      case aiActionConstants.aiActionConstants.AISpace_WordFileAIRead:
        i = (u = await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillRead)) ? createAiSpaceAttachmentMessage.createAiSpaceAttachmentMessage : aiSpacePdfReadConversationCreator.createPdfReadConversation;
    }
    if (i) {
      let e = await i({
        payload: d,
        needBindConversation: a,
        shareId: n
      });
      if (e) {
        conversationIdBroadcast.createConversation(l, u ? [] : e, {}, u ? e : undefined, u);
      }
    }
  };
  let U = {
    [aiActionConstants.aiActionConstants.AISpace_FileAIRead]: (e, i) => Y(e, "pdf", i),
    [aiActionConstants.aiActionConstants.AISpace_WordFileAIRead]: (e, i) => Y(e, "word", i),
    [aiActionConstants.aiActionConstants.AISpace_LinkAIRead]: (e, i) => ee(e, "pdf", i),
    [aiActionConstants.aiActionConstants.AISpace_FileAskDoubao]: (e, i) => Y(e, "common", i),
    [aiActionConstants.aiActionConstants.AISpace_LinkAskDoubao]: (e, i) => ee(e, "common", i),
    [aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao]: (e, i) => ei(e, "askDoubao", i),
    [aiActionConstants.aiActionConstants.AISpace_ImageCreate]: (e, i) => ei(e, "create", i),
    [aiActionConstants.aiActionConstants.AISpace_ImageEdit]: (e, i) => ei(e, "edit", i),
    [aiActionConstants.aiActionConstants.AISpace_ExcelCodeInterpreter]: (e, i) => Y(e, "excelCI", i),
    [aiActionConstants.aiActionConstants.AISpace_ExcelAIRead]: (e, i) => Y(e, "excel", i),
    [aiActionConstants.aiActionConstants.AISpace_DocCanvasOpen]: e => function (e) {
      let {
        key: i,
        conversationId: t
      } = e;
      if (!i || !t) {
        return;
      }
      let n = encodeURIComponent(JSON.stringify({
        pluginId: aiActionConstants.aiActionConstants.AISpace_DocCanvasOpen,
        payload: {
          pages_id: i
        },
        pfTrackParams: {
          startJumpTime: Date.now(),
          phase1EventName: "aispace_doccanvas_phase1_duration",
          phase2EventName: "aispace_doccanvas_phase2_duration",
          phase3EventName: "aispace_doccanvas_phase3_duration",
          phaseNavEventName: "aispace_doccanvas_phasenav_duration",
          phaseChatRenderEventName: "aispace_doccanvas_chatrender_duration",
          phaseCanvasRenderEventName: "aispace_doccanvas_canvasrender_duration"
        }
      }));
      return `https://${window.location.host}/chat/${t}?action=${n}&prev_page=ai_space`;
    }(e),
    [aiActionConstants.aiActionConstants.AISpace_MinuteMettingOpen]: e => function (e) {
      let {
        key: i,
        conversationId: t,
        content: n,
        id: a
      } = e;
      if (!i || !t) {
        return;
      }
      let r = {
        nodeId: a,
        artifactId: i,
        conversationId: t,
        isOtherShare: (n == null ? undefined : n.createFrom) === businessLayoutConstants.FileSource.from_share
      };
      let s = encodeURIComponent(JSON.stringify({
        pluginId: aiActionConstants.aiActionConstants.AISpace_MinuteMettingOpen,
        payload: r,
        pfTrackParams: {
          startJumpTime: Date.now(),
          phase1EventName: "aispace_minutemetting_phase1_duration",
          phase2EventName: "aispace_minutemetting_phase2_duration",
          phase3EventName: "aispace_minutemetting_phase3_duration",
          phaseNavEventName: "aispace_minutemetting_phasenav_duration",
          phaseChatRenderEventName: "aispace_minutemetting_chatrender_duration"
        }
      }));
      return `https://${window.location.host}/chat/url-action?action=${s}&skeleton_type=${chatSidebarLayoutLogic.getChatLayoutState({
        isRightSideExpand: true
      }) || ""}&prev_page=ai_space`;
    }(e),
    [aiActionConstants.aiActionConstants.AISpace_VideoRead]: (e, i) => Y(e, "video_ask_doubao", i),
    [aiActionConstants.aiActionConstants.AISpace_AudioRead]: (e, i) => Y(e, "audio_ask_doubao", i),
    [aiActionConstants.aiActionConstants.AISpace_VideoSummary]: (e, i) => Y(e, "video_summary", i),
    [aiActionConstants.aiActionConstants.AISpace_AudioSummary]: (e, i) => Y(e, "audio_summary", i),
    [aiActionConstants.aiActionConstants.AISpace_VideoMindMap]: (e, i) => Y(e, "video_mind_map", i),
    [aiActionConstants.aiActionConstants.AISpace_AudioMindMap]: (e, i) => Y(e, "audio_mind_map", i),
    [aiActionConstants.aiActionConstants.AISpace_Coding_File]: (e, i) => Y(e, "coding_file", i),
    [aiActionConstants.aiActionConstants.AISpace_Coding_Dir]: (e, i) => Y(e, "coding_dir", i),
    [aiActionConstants.aiActionConstants.AISpace_Coding_Artifact]: (e, i) => Y(e, "coding_artifact", i)
  };
  let B = {
    [fileEntityConstants.fileTypeLabels.File]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_FileAskDoubao, e, i);
    },
    [fileEntityConstants.fileTypeLabels.WordFile]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_WordFileAIRead, e, i);
    },
    [fileEntityConstants.fileTypeLabels.PdfFile]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_FileAIRead, e, i);
    },
    [fileEntityConstants.fileTypeLabels.Link]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_LinkAskDoubao, e, i);
    },
    [fileEntityConstants.fileTypeLabels.PdfLink]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_LinkAIRead, e, i);
    },
    [fileEntityConstants.fileTypeLabels.Image]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao, e, i);
    },
    [fileEntityConstants.fileTypeLabels.ExcelFile]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_ExcelAIRead, e, i);
    },
    [fileEntityConstants.fileTypeLabels.WritingDoc]: e => {
      en(e);
    },
    [fileEntityConstants.fileTypeLabels.MeetingMinutes]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_MinuteMettingOpen, e, i);
    },
    [fileEntityConstants.fileTypeLabels.Audio]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_AudioRead, e, i);
    },
    [fileEntityConstants.fileTypeLabels.Video]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_VideoRead, e, i);
    },
    [fileEntityConstants.fileTypeLabels.CodeFile]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_Coding_File, e, i);
    },
    [fileEntityConstants.fileTypeLabels.CodeDir]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_Coding_Dir, e, i);
    },
    [fileEntityConstants.fileTypeLabels.CodeArtifact]: (e, i) => {
      et(aiActionConstants.aiActionConstants.AISpace_Coding_Artifact, e, i);
    },
    [fileEntityConstants.fileTypeLabels.Unknown]: () => {}
  };
  let O = e => {
    let {
      file: i,
      node: t
    } = e;
    let n = i || fileEntityTypeMapper.getReviewStatusStyle(t);
    if (!fileReviewStatusUtils.isReviewSuccess(n)) {
      if (fileReviewStatusUtils.hasFailedStatus(n)) {
        if ((n == null ? undefined : n.type) === fileEntityTypeConstants.fileEntityTypes.Image) {
          return i18nTranslationUtils.i18nextTranslate("aispace_image_tooltip_violate");
        } else {
          return i18nTranslationUtils.i18nextTranslate("aispace_file_not_compliant");
        }
      }
      if ((n == null ? undefined : n.nameReviewStatus) !== "success") {
        return i18nTranslationUtils.i18nextTranslate("aispace_under_review");
      }
    }
  };
  let V = e => {
    let {
      file: i,
      node: t
    } = e;
    let n = i || fileEntityTypeMapper.getReviewStatusStyle(t);
    if (Number(n == null ? undefined : n.mediaDuration) > 18000) {
      return i18nTranslationUtils.i18nextTranslate("aispace_tooltip_videoLength");
    } else if ((n == null ? undefined : n.aiSkillStatus) === "processing") {
      return i18nTranslationUtils.i18nextTranslate(n.type === fileEntityTypeConstants.fileEntityTypes.Audio ? "aispace_mainPage_status_loadAudio" : "aispace_mainPage_status_loadVideo");
    } else if ((n == null ? undefined : n.aiSkillStatus) === "enable") {
      return "";
    } else if ((n == null ? undefined : n.aiSkillStatus) === "disable") {
      return i18nTranslationUtils.i18nextTranslate("aispace_askAI_toast_videoNoAnswer");
    } else {
      return undefined;
    }
  };
  let H = e => {
    let {
      file: i,
      node: t
    } = e;
    let n = i || fileEntityTypeMapper.getReviewStatusStyle(t);
    return !(Number(n == null ? undefined : n.mediaDuration) > 18000) && (n == null ? undefined : n.aiSkillStatus) !== "processing" && (n == null ? undefined : n.aiSkillStatus) !== "disable" && ((n == null ? undefined : n.aiSkillStatus) === "enable" || (n == null ? undefined : n.aiSkillStatus) === "init" || undefined);
  };
  let X = e => {
    let {
      file: i,
      node: t
    } = e;
    let n = i || fileEntityTypeMapper.getReviewStatusStyle(t);
    if ((n == null ? undefined : n.size) && n.size > 204800 || (n == null ? undefined : n.size) === 0) {
      return false;
    }
  };
  let K = e => {
    let {
      file: i,
      node: t
    } = e;
    let n = i || fileEntityTypeMapper.getReviewStatusStyle(t);
    if ((n == null ? undefined : n.size) && n.size > 204800) {
      return i18nTranslationUtils.i18nextTranslate("aispace_system_coding_file_size_tip");
    } else if ((n == null ? undefined : n.size) === 0) {
      return i18nTranslationUtils.i18nextTranslate("aispace_system_coding_file_null_tip");
    } else {
      return "";
    }
  };
  let Q = e => {
    let {
      file: i,
      node: t
    } = e;
    let n = O({
      file: i,
      node: t
    });
    return !!n && (samanthaToastFactory.toastInstance.warning(n), true);
  };
  async function Y(e, i = "common", t = {}) {
    let {
      name: n,
      key: a,
      size: r,
      id: c,
      conversationId: d,
      content: u,
      jumpTarget: p
    } = e;
    let {
      shareId: _
    } = t;
    if (!n) {
      return;
    }
    let h = true;
    if (["coding_file", "coding_dir", "coding_artifact"].includes(i)) {
      h = (await codingSkillFeatureGate.fetchCodingSkillStatus())?.enableCodingSkill;
    }
    let g = await checkConversationValid.isConversationValid(d);
    let w = "";
    switch (i) {
      case "pdf":
      case "word":
      case "excel":
        w = i18nTranslationUtils.i18nextTranslate("airead_uploadFile_prompt_summarizeDoc");
        break;
      case "excelCI":
        w = i18nTranslationUtils.i18nextTranslate("airead_uploadFile_prompt_dataAnalysis");
        break;
      case "video_ask_doubao":
      case "video_summary":
      case "video_mind_map":
        w = i18nTranslationUtils.i18nextTranslate("aispace_video_chat_prompt");
        break;
      case "audio_ask_doubao":
      case "audio_summary":
      case "audio_mind_map":
        w = i18nTranslationUtils.i18nextTranslate("aispace_audio_chat_prompt");
        break;
      case "coding_file":
      case "coding_dir":
      case "coding_artifact":
        w = i18nTranslationUtils.i18nextTranslate("cici_web_ai_coding_default_query_intro_file");
    }
    let b = {
      files: [{
        name: n,
        uri: a,
        size: Number(r),
        nodeId: c,
        conversationId: d,
        mediaType: i,
        codeType: i,
        isOtherShare: (u == null ? undefined : u.createFrom) === businessLayoutConstants.FileSource.from_share,
        codingSkillEnable: h
      }],
      shareId: _,
      prompt: w
    };
    let y = {
      pluginId: {
        pdf: aiActionConstants.aiActionConstants.AISpace_FileAIRead,
        excel: aiActionConstants.aiActionConstants.AISpace_ExcelAIRead,
        excelCI: aiActionConstants.aiActionConstants.AISpace_ExcelCodeInterpreter,
        word: aiActionConstants.aiActionConstants.AISpace_WordFileAIRead,
        common: aiActionConstants.aiActionConstants.AISpace_FileAskDoubao,
        video_ask_doubao: aiActionConstants.aiActionConstants.AISpace_VideoRead,
        audio_ask_doubao: aiActionConstants.aiActionConstants.AISpace_AudioRead,
        audio_summary: aiActionConstants.aiActionConstants.AISpace_AudioSummary,
        video_summary: aiActionConstants.aiActionConstants.AISpace_VideoSummary,
        video_mind_map: aiActionConstants.aiActionConstants.AISpace_VideoMindMap,
        audio_mind_map: aiActionConstants.aiActionConstants.AISpace_AudioMindMap,
        coding_file: aiActionConstants.aiActionConstants.AISpace_Coding_File,
        coding_dir: aiActionConstants.aiActionConstants.AISpace_Coding_Dir,
        coding_artifact: aiActionConstants.aiActionConstants.AISpace_Coding_Artifact
      }[i],
      payload: b,
      pfTrackParams: {
        startJumpTime: Date.now(),
        phase1EventName: "aispace_jump_phase1_duration",
        phase2EventName: "aispace_jump_phase2_duration",
        phase3EventName: "aispace_jump_phase3_duration",
        phaseNavEventName: "aispace_jump_phasenav_duration",
        phaseChatRenderEventName: "aispace_jump_chatrender_duration",
        phaseCanvasRenderEventName: "aispace_jump_canvasrender_duration"
      }
    };
    let S = new URLSearchParams();
    if (["pdf", "word", "video_ask_doubao", "audio_ask_doubao", "video_summary", "video_mind_map", "audio_summary", "audio_mind_map", "coding_file", "coding_dir"].includes(i)) {
      S.set("skeleton_type", chatSidebarLayoutLogic.getChatLayoutState({
        isRightSideExpand: true
      }) || "");
    }
    if (["coding_file", "coding_dir"].includes(i) && !h) {
      S.delete("skeleton_type");
    }
    S.set("action", JSON.stringify(y));
    S.set("prev_page", "ai_space");
    if ((!d || d === "0" || !g) && !(t == null ? undefined : t.shareId) && !["coding_file", "coding_dir", "coding_artifact"].includes(i)) {
      S.set("preSendId", Date.now().toString());
    }
    if (i === "coding_artifact" && p === businessLayoutConstants.SiteType.CodeIndependentSite && d) {
      let e = await codeArtifactUrlResolver.resolveCodeArtifactUrl(d, a, "drive");
      return `${window.location.origin}${e}`;
    }
    return `https://${window.location.host}/chat/url-action?${S.toString()}`;
  }
  async function ee(e, i = "common", t = {}) {
    let {
      key: n,
      id: a,
      conversationId: r
    } = e;
    let {
      shareId: s
    } = t;
    if (!n) {
      return;
    }
    let c = await checkConversationValid.isConversationValid(r);
    let d = "";
    if (i === "pdf") {
      d = i18nTranslationUtils.i18nextTranslate("airead_uploadFile_prompt_summarizeDoc");
    }
    let u = {
      links: [{
        url: n,
        nodeId: a,
        conversationId: r
      }],
      prompt: d,
      shareId: s
    };
    let p = {
      pluginId: i === "pdf" ? aiActionConstants.aiActionConstants.AISpace_LinkAIRead : aiActionConstants.aiActionConstants.AISpace_LinkAskDoubao,
      payload: u,
      pfTrackParams: {
        startJumpTime: Date.now(),
        phase1EventName: "aispace_jump_phase1_duration",
        phase2EventName: "aispace_jump_phase2_duration",
        phase3EventName: "aispace_jump_phase3_duration",
        phaseNavEventName: "aispace_jump_phasenav_duration",
        phaseChatRenderEventName: "aispace_jump_chatrender_duration",
        phaseCanvasRenderEventName: "aispace_jump_canvasrender_duration"
      }
    };
    let _ = new URLSearchParams();
    if (["pdf"].includes(i)) {
      _.set("skeleton_type", chatSidebarLayoutLogic.getChatLayoutState({
        isRightSideExpand: true
      }) || "");
    }
    _.set("action", JSON.stringify(p));
    _.set("prev_page", "ai_space");
    if ((!r || r === "0" || !c) && !(t == null ? undefined : t.shareId)) {
      _.set("preSendId", Date.now().toString());
    }
    return `https://${window.location.host}/chat/url-action?${_.toString()}`;
  }
  async function ei(e, i = "askDoubao", t = {}) {
    let {
      name: n,
      key: a,
      size: r,
      id: s,
      content: c,
      conversationId: d
    } = e;
    let {
      shareId: u
    } = t;
    if (!n || !a) {
      return;
    }
    let {
      imageHeight: p,
      imageWidth: m
    } = c || {};
    let _ = await checkConversationValid.isConversationValid(d);
    let h = i === "edit";
    let f = {
      images: [{
        name: n,
        uri: a,
        size: Number(r),
        width: m,
        height: p,
        nodeId: s,
        conversationId: d,
        initialEditTool: t.initialEditTool,
        shareId: u
      }]
    };
    let v = encodeURIComponent(JSON.stringify({
      pluginId: {
        askDoubao: aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao,
        create: aiActionConstants.aiActionConstants.AISpace_ImageCreate,
        edit: aiActionConstants.aiActionConstants.AISpace_ImageEdit
      }[i],
      payload: f,
      pfTrackParams: {
        startJumpTime: Date.now(),
        phase1EventName: h ? "aispace_editimage_phase1_duration" : "aispace_jump_phase1_duration",
        phase2EventName: h ? "aispace_editimage_phase2_duration" : "aispace_jump_phase2_duration",
        phase3EventName: h ? "aispace_editimage_phase3_duration" : "aispace_jump_phase3_duration",
        phaseNavEventName: h ? "aispace_editimage_phasenav_duration" : "aispace_jump_phasenav_duration",
        phaseChatRenderEventName: h ? "aispace_editimage_chatrender_duration" : "aispace_jump_chatrender_duration",
        phaseCanvasRenderEventName: h ? "aispace_editimage_canvasrender_duration" : "aispace_jump_canvasrender_duration"
      }
    }));
    if (h) {
      return `https://${window.location.host}/chat/create-image?action=${v}&prev_page=ai_space`;
    } else {
      return `https://${window.location.host}/chat/url-action?action=${v}&prev_page=ai_space${_ || i === "askDoubao" || (t == null ? undefined : t.shareId) ? "" : `&preSendId=${Date.now().toString()}`}`;
    }
  }
  async function et(e, i, t) {
    if (!i || Q({
      node: i
    })) {
      return;
    }
    aiSpaceEventReporter.reportFileOpen({
      nodeId: i.id
    });
    let n = await U[e];
    let a = await n(i, t);
    if (a) {
      if (!(await chatFgStoreHooks.fetchSourceKey("ai_space_file_askdoubao_new_path", {
        source: chatStorageKeys.chatStorageKeys.tea
      }))) {
        let e = new URL(a);
        e.searchParams.delete("preSendId");
        a = e.toString();
      }
      if (!(t == null ? undefined : t.shareId)) {
        z({
          url: a,
          shareId: t == null ? undefined : t.shareId,
          needBindConversation: t == null ? undefined : t.needBindConversation
        });
      }
      secureLinkOpener.openSecureLink(a);
    }
  }
  let en = async e => {
    if (!e) {
      return;
    }
    let {
      conversationId: i,
      nodeType: t,
      key: o
    } = e;
    if (!i || t !== businessLayoutConstants.ItemType.Pages || !o) {
      return;
    }
    let s = documentNavigationAndCreationUtils.isFusionDocResource({
      key: o
    }) ? (await pageUpgradeStatusCheck.isNonLarkPage(o)) ? artifactResourceLayout.ArtifactResource.CanvasPages : artifactResourceLayout.ArtifactResource.DocxPage : artifactResourceLayout.ArtifactResource.Pages;
    documentNavigationAndCreationUtils.openDocumentByResourceType({
      type: s,
      docId: o,
      conversationId: i,
      source: "ai_space_doc_list"
    });
  };
  function ea(e, i) {
    if (e) {
      aiSpaceEventReporter.reportFileOpen({
        nodeId: e.id
      });
      B[getFileTypeLabel.getFileTypeLabel(e)](e, i);
    }
  }
  require.d(exports, {
    getCodingFileSizeWarning: function () {
      return K;
    },
    getMediaFileTooltip: function () {
      return V;
    },
    getFileReviewWarning: function () {
      return O;
    },
    showFileReviewToast: function () {
      return Q;
    },
    isMediaFileActionable: function () {
      return H;
    },
    handleFileAction: function () {
      return et;
    },
    isFileSizeValid: function () {
      return X;
    },
    openFileInAiSpace: function () {
      return ea;
    }
  });
}