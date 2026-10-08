// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd8' to 'isLyricsToSongLyric'
// - Renamed export 'qF' to 'isOnboardingMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79175.7881c099.js
         * chunkId: 79175
         * moduleId: 749637
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var objectMatchUtil = require("object-match-util") /*id: 941914*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var protocolMessageConstants = require("protocol-message-constants") /*id: 444681*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var f = {
    VideoStatusSuccess: 4
  };
  var y = {
    VideoStatusSucceed: 3
  };
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var m = {
    DeepResearchStageClarification: 1,
    DeepResearchStageRestatement: 2
  };
  var k = {
    SupertaskStageClarification: 1,
    SupertaskStagePPTOutlineAck: 3
  };
  var creationTypeConstants = require("creation-type-constants") /*id: 432580*/;
  var imageStatusEnum = require("image-status-enum") /*id: 923272*/;
  var allowedUrlCheck = require("allowed-url-check") /*id: 671850*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var artifactResourceType = require("artifact-resource-type") /*id: 310450*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var uiComponentTypeConstants = require("ui-component-type-constants") /*id: 169442*/;
  var featureActionTypes = require("feature-action-types") /*id: 365460*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var chatLoadingMessageCheck = require("chat-loading-message-check") /*id: 572705*/;
  var chatMessageUtils_2 = require("chat-message-utils_2") /*id: 149539*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatAsyncTaskCheck = require("chat-async-task-check") /*id: 326723*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var isEducationSkillChecker = require("is-education-skill-checker") /*id: 965929*/;
  let B = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Suggest || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest;
  let M = n => {
    return (n == null ? undefined : n.status) === chatMessageTypes.PushMessageStatus.Broken || (n == null ? undefined : n.async_task?.status) === protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusCanceled;
  };
  let U = n => {
    return !!(n == null ? undefined : n.ext?.source_share);
  };
  let Z = n => {
    return !!(n == null ? undefined : n.error_details?.has_error) || (n == null ? undefined : n.final_status?.message) === "Error" || (n == null ? undefined : n.final_status?.message) === "Timeout";
  };
  let K = n => {
    let {
      stage: t
    } = n;
    return t === chatCoreConstants.MessageStates.RECEIVING_SYNC || t === chatCoreConstants.MessageStates.RECEIVING_ASYNC;
  };
  let N = n => {
    if (!tn(n) && !nA(n)) {
      return false;
    }
    let t = objectPathGetDefault.getObjectPathDefault(n, "content_obj.tags", []);
    let e = collectionIncludesUtil.includes(t, chatCoreConstants.ThinkModes.ThinkReasonR1);
    let u = objectMatchUtil.checkObjectMatch(n.meta_infos, n => n.type === chatMessageTypes.MetaType.Think);
    return e || u;
  };
  let F = n => {
    return ["rich_media_only_video", "rich_media_only_image"].includes((n == null ? undefined : n.ext?.rich_media_type_samantha_web) || "");
  };
  function G(n) {
    return !!(n == null ? undefined : n.content_obj?.entities);
  }
  function $(n) {
    var t;
    var e;
    var o;
    return !!n && !!H(n) && !!((o = n.ext) === null || o === undefined ? undefined : (e = o.source_file) === null || e === undefined ? undefined : (t = e.includes) === null || t === undefined ? undefined : t.call(e, "file_name"));
  }
  let H = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaText;
  let V = n => {
    return (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCustomSkill || (n == null ? undefined : n.ext?.input_content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCustomSkill.toString();
  };
  let q = n => V(n) && tk(n);
  let Q = n => {
    return (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaWritingGenerateInput || (n == null ? undefined : n.ext?.input_content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaWritingGenerateInput.toString() || !(n == null ? undefined : n.reply_id) && !!(n == null ? undefined : n.ext?.doc_action);
  };
  let X = n => {
    return Q(n) && !!(n == null ? undefined : n.references?.length);
  };
  let Y = n => H(n) || n5(n) || nu(n) || ns(n) || nd(n) || J(n) || no(n) || nt(n) || chatLoadingMessageCheck.isLoadingMessage(n) || n0(n) || np(n) || nT(n) || nL(n) || V(n) || ey(n) || eS(n) || n$(n) || eC(n) || eD(n) || eW(n) || eX(n) || eY(n) || ni(n) || nF(n) || nG(n) || Q(n) || n2(n);
  let J = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && n.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillRead || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaReadInput || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaReadOutput;
  };
  let nn = n => {
    return J(n) && !!(n == null ? undefined : n.references?.length);
  };
  let nt = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && n.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillAiPodcast || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaAiPodcastInput;
  };
  let ne = n => {
    return ey(n) && !!(n == null ? undefined : n.references?.length);
  };
  let no = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && n.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillWebpage || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaWebpageInput;
  };
  let nl = n => {
    var e;
    return (n == null ? undefined : (e = n.verbose) === null || e === undefined ? undefined : e.seed_intention?.intention) === "browsing";
  };
  let ni = n => {
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.ReferenceAsk || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtReferenceAsk;
  };
  let nu = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && n.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillTranslate || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaTranslate || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtTranslate || (n == null ? undefined : n.ext?.input_content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtTranslate.toString();
  };
  let nr = n => {
    return (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtTranslate || (n == null ? undefined : n.ext?.input_content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtTranslate.toString();
  };
  let nd = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && (n.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillSearch || n.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillDeepSearch || n.skill?.skill_type === chatAppEnums.SkillType.AcademicSearch || nU(n) || nZ(n) || nN(n) || nQ(n)) || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchInput || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDeepSearchInput || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchText || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchEngineInput;
  };
  let na = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && (n.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillSearch || nU(n) || nZ(n) || nN(n)) || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchInput || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchText;
  };
  let nv = n => (nA(n) || H(n) || np(n) || J(n)) && n.has_think_reason;
  let nc = n => (tn(n) || nA(n)) && n.has_think_reason;
  let ns = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && n.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillImageGen || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaImageInput;
  };
  let n_ = n => {
    var o;
    return ((n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant || (n == null ? undefined : (o = n.verbose) === null || o === undefined ? undefined : o.seed_intention?.detail) === "Agent-Code" || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantInput) && !n0(n);
  };
  let np = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.CodeArtifact || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantOutput;
  let nf = n => {
    return np(n) && (!!n.content_obj?.artifact_meta || !!n.ext?.samantha_artifact_meta_list);
  };
  let ny = n => {
    var t;
    return !!(n == null ? undefined : (t = n.content_blocks) === null || t === undefined ? undefined : t.some(n => {
      if ((n == null ? undefined : n.block_type) !== chatConstantsEnum.messageContentType.BLOCK_ARTIFACT) {
        return false;
      }
      let e = n.content_obj?.resource_type;
      return e !== undefined && [skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Code, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_CodeDevelopMode].includes(e);
    }));
  };
  let nS = n => {
    var t;
    let e = n == null ? undefined : (t = n.content_blocks) === null || t === undefined ? undefined : t.findIndex(n => (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_REQUIREMENT_CLARIFY);
    return e !== undefined && e >= 0;
  };
  let nm = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && (n == null ? undefined : n.ext?.loading_style) === "loading_generate_image";
  };
  let nk = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.PluginSearchResult || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchCard;
  function nh(n) {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Composite || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtMultiWebsites;
  }
  let ng = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.LyricsToSongLyric;
  let nT = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && (n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillMusicGen || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaMusicGenInput;
  };
  let nb = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.LyricsToSongsMusic || (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.LyricsToSongMusic;
  let nC = n => (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaMusicGenOutput;
  let nx = n => nC(n) || nb(n);
  let nA = n => (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchText;
  let nR = n => (n == null ? undefined : n.message_type) === chatMessageTypes.MessageType.Ack || (n == null ? undefined : n.message_type) === protocolMessageConstants.messageTypes.ACK;
  let nz = n => (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaLoading;
  let nP = n => (n == null ? undefined : n.content_type) === chatConstantsEnum.messageContentType.BLOCK_THINKING;
  let nI = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.PagesIntentionCard || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteIntentionCardOutput;
  let nO = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Music || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaMusic;
  let nD = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.BotCard;
  let nE = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Image || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaImageOutput;
  let nW = n => {
    return ((n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillImageGen || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaImageInput) && ((n == null ? undefined : n.attachments?.length) ?? 0) > 0;
  };
  let nL = n => {
    var t;
    return n != null && (t = n.content_obj) !== null && t !== undefined && !!t.text && isEducationSkillChecker.isEducationSkill(n);
  };
  let nw = n => {
    let t = n == null ? undefined : n.attachments;
    return t != null && !!t.length && isEducationSkillChecker.isEducationSkill(n);
  };
  let nj = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.File;
  let nB = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.PluginSearchResult;
  let nM = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.CopilotCard;
  let nU = n => {
    return ((n == null ? undefined : n.ext?.complex_search) || "") === "1";
  };
  let nZ = n => {
    let e = objectPathGetDefault.getObjectPathDefault(n, ["message_action_bar"]);
    let l = objectPathGetDefault.getObjectPathDefault(n, ["ext", "search_action_bar_config"]);
    let i = safeJsonUtils.safeParse(l, {});
    return !(e == null ? undefined : e.invisible) && !!(e == null ? undefined : e.config?.deep_search) || !!(i == null ? undefined : i.deep_search);
  };
  let nK = n => (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.CopilotCard;
  let nN = n => {
    return !!(n == null ? undefined : n.content_obj?.search_references);
  };
  let nF = n => {
    return !!(n == null ? undefined : n.content_obj?.generate_mind_map);
  };
  let nG = n => (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtMindMapGenerate;
  let n$ = n => {
    return !!n && (e$(n) || (n == null ? undefined : n.ext?.input_content_type) === String(aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeInterpreterInput)) && (!!(n == null ? undefined : n.references?.length) || !!(n == null ? undefined : n.ext?.reference_content));
  };
  let nH = n => {
    let e = !!(n == null ? undefined : n.content_obj?.hover_position) || !!objectPathGetDefault.getObjectPathDefault(n, ["ext", "pdf_hover_position"]);
    return nd(n) && e;
  };
  let nV = n => {
    return eS(n) && !!(n == null ? undefined : n.references?.length);
  };
  let nq = n => {
    return H(n) && !!(n == null ? undefined : n.references?.length);
  };
  let nQ = n => {
    let t = objectPathGetDefault.getObjectPathDefault(n, ["ext", "only_alt_card"]);
    let e = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(n, ["ext", "ruyi_card_type"]), []);
    return !!t || e.length > 0;
  };
  let nX = n => {
    return (n == null ? undefined : n.ext?.generate_mind_map) === "1";
  };
  let nY = n => {
    var e;
    var o;
    var i;
    let u = n == null ? undefined : (o = n.content_blocks_v2) === null || o === undefined ? undefined : (e = o.find(n => n.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT)) === null || e === undefined ? undefined : e.content?.artifact_block;
    return u || (n == null ? undefined : (i = n.content_blocks) === null || i === undefined ? undefined : i.find(n => n.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT)?.content_obj);
  };
  let nJ = [skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_WriteDoc, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Pages, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepWritingPage, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_CanvasPage, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepWritingOtterPage, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Docx, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepDocx];
  let n0 = n => {
    return (n == null ? undefined : n.content_type) !== aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantOutput && (!!(n == null ? undefined : n.ext?.samantha_artifact) || !!(n == null ? undefined : n.content_obj?.artifact_meta) || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteArtifactOutput || eK(n) && collectionIncludesUtil.includes(nJ, nY(n)?.resource_type));
  };
  let n1 = n => {
    return n0(n) && (!!n.ext?.artifact_meta || !!n.content_obj?.artifact_meta || !!n.ext?.samantha_artifact);
  };
  let n2 = n => {
    var e;
    var l;
    let s = n == null ? undefined : (l = n.content_blocks_v2) === null || l === undefined ? undefined : (e = l.find(n => n.block_type === chatConstantsEnum.messageContentType.BLOCK_OUTLINE)) === null || e === undefined ? undefined : e.content?.outline_block;
    let p = (n == null ? undefined : n.content_obj?.genre) ?? objectPathGetDefault.getObjectPathDefault(safeJsonUtils.safeParse(n == null ? undefined : n.ext?.input_skill, {}), "variables.genre") ?? (s == null ? undefined : s.outline_meta?.genre);
    return ((n == null ? undefined : n.ext?.samantha_item_type) === "pages_outline" || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteOutlineOutput || !!s) && p !== "ai_ppt";
  };
  let n3 = n => {
    return (n == null ? undefined : n.ext?.loading_style) === "loading_outline" || (n == null ? undefined : n.content_obj?.loading_style) === "loading_outline";
  };
  let n5 = n => (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteInput;
  let n4 = [skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepWritingOtterPage, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepDocx];
  let n7 = n => {
    return !!eK(n) && !!collectionIncludesUtil.includes(n4, nY(n)?.resource_type) || ((n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.PagesCard || collectionIncludesUtil.includes([aiAssistantSkillTypes.AliceTypes.AlicePagesCard, aiAssistantSkillTypes.SamanthaTypes.SamanthaWritePagesCardOutput], n == null ? undefined : n.content_type)) && !n6(n);
  };
  let n6 = n => {
    return !!eK(n) && !!collectionIncludesUtil.includes(n4, nY(n)?.resource_type) || ((n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.PagesCard || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaWritePagesCardOutput) && (n == null ? undefined : n.content_obj?.resource_type) === artifactResourceType.ArtifactResourceType.StepWritingOtterPage;
  };
  let n8 = n => {
    return ((n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchText) && n.content_obj?.only_alt_card === "1";
  };
  let n9 = n => {
    return (n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillVideoGeneration || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaVideoGenerationInput;
  };
  let tn = n => {
    return (n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillWrite || n0(n) || !!(n == null ? undefined : n.content_obj?.artifact_meta) && (n == null ? undefined : n.content_type) !== aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantOutput && (n == null ? undefined : n.content_type) !== aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeInterpreterOutput;
  };
  let tt = n => {
    return ((n == null ? undefined : n.user_type) === chatMessageTypes.UserType.Human && (n == null ? undefined : n.content_type)) === chatMessageTypes.ContentType.Text && (n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillVideoGeneration || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaVideoGenerationOutput || (n == null ? undefined : n.content_type) === 5;
  };
  let te = n => {
    let [t, e] = [n == null ? undefined : n.video_status, n == null ? undefined : n.status].map(n => typeof n == "string" && n.length ? Number(n) : n);
    if (typeof t == "number") {
      return t < f.VideoStatusSuccess;
    } else {
      return typeof e == "number" && e < y.VideoStatusSucceed;
    }
  };
  let to = n => {
    if (!(n == null ? undefined : n.vid)) {
      return false;
    }
    let [t, e] = [n == null ? undefined : n.video_status, n == null ? undefined : n.status].map(n => typeof n == "string" && n.length ? Number(n) : n);
    if (typeof t == "number") {
      return t === f.VideoStatusSuccess;
    } else {
      return typeof e == "number" && e === y.VideoStatusSucceed;
    }
  };
  let tl = n => !te(n) && !to(n);
  let ti = n => tt(n) && te((n == null ? undefined : n.content_obj) || {});
  let tu = n => tt(n) && tl((n == null ? undefined : n.content_obj) || {});
  let tr = n => {
    return (n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillType_AiPPT || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaAiPPTInput;
  };
  let td = n => (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaAiPPTOutput || (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.AiPPT;
  let ta = n => {
    let u = (n == null ? undefined : n.content_obj?.genre) ?? objectPathGetDefault.getObjectPathDefault(safeJsonUtils.safeParse(n == null ? undefined : n.ext?.input_skill, {}), "variables.genre");
    return ((n == null ? undefined : n.ext?.samantha_item_type) === "pages_outline" || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteOutlineOutput) && u === "ai_ppt";
  };
  let tv = n => {
    return ((n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaAiPPTOutput || (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.AiPPT) && !(n == null ? undefined : n.content_obj?.status);
  };
  let tc = n => {
    let e = Number(n == null ? undefined : n.content_type);
    let o = Number(n == null ? undefined : n.ext?.input_content_type);
    let l = H(n) ? o : e;
    return l > 2500 && l < 3000;
  };
  let ts = n => !!nk(n);
  let t_ = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Video && Array.isArray(n == null ? undefined : n.content_obj?.video_list);
  };
  let tp = n => {
    return !!(n == null ? undefined : n.ext) && !!(n == null ? undefined : n.ext?.onboarding) && (n == null ? undefined : n.ext?.onboarding) !== "0";
  };
  let tf = n => {
    var r;
    var d;
    if (n == null ? undefined : n.has_suggest) {
      return !!(n == null ? undefined : n.has_suggest);
    }
    if (n == null ? undefined : n.ext?.sp) {
      let t = safeJsonUtils.safeParse(n.ext.sp, []);
      return !!(t == null ? undefined : t.length);
    }
    if (n.ext?.sp_v2) {
      let t = safeJsonUtils.safeParse(n.ext.sp_v2, []);
      return !!(t == null ? undefined : t.length);
    }
    if (n == null ? undefined : n.ext?.sp_v2) {
      return !!(n == null ? undefined : n.ext?.sp_v2);
    } else if (n == null ? undefined : n.ext?.sp_v2) {
      return !!(n == null ? undefined : n.ext?.sp_v2);
    } else if ("content_blocks" in n) {
      return !!(n == null ? undefined : (r = n.content_blocks) === null || r === undefined ? undefined : r.find(n => n.block_type === chatConstantsEnum.messageContentType.SAMANTHA_SUGGEST));
    } else {
      return "content_blocks_v2" in n && !!(n == null ? undefined : (d = n.content_blocks_v2) === null || d === undefined ? undefined : d.find(n => n.block_type === chatConstantsEnum.messageContentType.SAMANTHA_SUGGEST));
    }
  };
  let ty = n => {
    return (n == null ? undefined : n.ext?.evaluate_interference) === "1";
  };
  let tS = (n, t) => !!n && (!tp(n) || !t) && !ty(n) && (!ep(n) || !!n.sub_message_group) && chatMessageUtils_2.isVisibleStatus(n);
  let tm = n => {
    return (n == null ? undefined : n.ext?.guidance_use_cache_answer) === "1";
  };
  let tk = n => {
    let e = n == null ? undefined : n.ext?.browser_plugin_info;
    return !!e && !!safeJsonUtils.safeParse(e, {}).custom_ref_show_variable;
  };
  let th = n => (n == null ? undefined : n.user_type) === chatMessageTypes.UserType.Human;
  let tg = n => {
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.MusicAssistant && !!n.content_obj?.text && isStringTypeCheck.isString(n.content_obj.text);
  };
  let tT = function (n, t = [Y, nE, tg, nj, nh, checkNestedContentType.isNestedContentType, n5, n9]) {
    if (n) {
      return t.reduce((t, e) => t || e(n), false);
    } else {
      return !!n;
    }
  };
  let tb = n => {
    return (n == null ? undefined : n.content_obj?.card_type) === contentTypeEnums.cardFeature.CARD_BUILDER && (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Card;
  };
  let tC = function (n, t = [Y, nE, ex, t_, nO, tb, nj, ts, nD, nh, ng, nx, nK, n7, nA, tt, ti, eD, eU]) {
    if (n) {
      return t.reduce((t, e) => t || e(n), false);
    } else {
      return !!n;
    }
  };
  let tx = n => {
    let t = th(n);
    let e = t ? tT(n) : tC(n);
    let o = t && nE(n);
    return !Z(n) && !checkLocalReplyMessage.isLocalReplyMessage(n) && chatMessageStatusCheck.isMessageFinished(n) && e && !o;
  };
  let tA = n => tx(n) && !th(n) && !localResourceCheck.isLocal(n);
  let tR = n => {
    let o = !!(n == null ? undefined : n.ext?.inner_log_id) || !!(n == null ? undefined : n.local_info?.log_id);
    return Z(n) && !th(n) && localResourceCheck.isLocal(n) && o;
  };
  let tz = n => {
    return (n == null ? undefined : n.ext?.coco_web_new_search_result_style) === "1";
  };
  let tP = n => {
    return (n == null ? undefined : n.ext?.coco_web_new_search_result_style) === "2";
  };
  let tI = n => {
    return (n == null ? undefined : n.ext?.coco_web_new_search_result_style) === "3";
  };
  let tO = n => {
    return (n == null ? undefined : n.ext?.coco_web_new_search_result_style) === "4";
  };
  let tD = n => {
    return chatLoadingMessageCheck.isLoadingMessage(n) && (n == null ? undefined : n.content_obj?.search_references);
  };
  let tE = n => (tz(n) || tP(n) || tI(n) || tO(n)) && !tD(n);
  let tW = n => (n == null ? undefined : n.status) === chatMessageTypes.PushMessageStatus.NotCompliant;
  let tL = n => {
    return (n == null ? undefined : n.ext?.hit_risk) === "1";
  };
  let tw = n => !!(n == null ? undefined : n.reply_id);
  let tj = n => chatMessageStatusCheck.isMessageFinished(n) && !M(n) && !Z(n);
  let tB = n => {
    if (chatAsyncTaskCheck.hasAsyncTask(n)) {
      return !!(n == null ? undefined : n.local_info?.finish_async_reply);
    }
    return false;
  };
  let tM = n => {
    if (chatAsyncTaskCheck.hasAsyncTask(n)) {
      return !!(n == null ? undefined : n.local_info?.finish_async_reply);
    } else {
      return !!n.local_info?.finish_reply;
    }
  };
  let tU = n => {
    var t;
    return n != null && (t = n.ext) !== null && t !== undefined && !!t.samantha_skill_biz_err_code && (n == null ? undefined : n.ext?.samantha_skill_biz_err_code) !== "";
  };
  let tZ = n => {
    if (n == null) {
      return undefined;
    } else {
      return n.message_action_bar?.invisible;
    }
  };
  let tK = n => {
    let l = (n == null ? undefined : n.ext?.rich_media_type_samantha_web) || "";
    let i = (n == null ? undefined : n.ext?.disable_action_view) && (n == null ? undefined : n.ext?.chat_next) !== "1";
    return Y(n) && (["rich_media_only_video", "rich_media_only_image"].includes(l) || i);
  };
  let tN = n => {
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.DeepSearch;
  };
  let tF = n => {
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.CodeInterpreter || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeInterpreterOutput;
  };
  let tG = n => {
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.AcademicSearch;
  };
  let t$ = n => {
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.WriteAssistant;
  };
  let tH = n => !!objectPathGetDefault.getObjectPathDefault(n, ["ext", "deep_search_error"]);
  let tV = n => {
    return !!(n == null ? undefined : n.ext?.msg_template_id);
  };
  let tq = n => {
    return !!Number(n == null ? undefined : n.ext?.need_plugin_auth);
  };
  function tQ(n) {
    return (n == null ? undefined : n.error_details?.error_code) === chatErrorCodes.chatErrorCodes.CLEAR_LAST_PROMPT;
  }
  let tX = n => {
    return (n == null ? undefined : n.error_details?.error_code) === chatErrorCodes.chatErrorCodes.FILE_SAFETY_ERROR || (n == null ? undefined : n.status) === chatMessageTypes.PushMessageStatus.NotCompliant;
  };
  let tY = n => {
    return (n == null ? undefined : n.error_details?.error_code) === chatErrorCodes.chatErrorCodes.IMAGE_SAFETY_ERROR || (n == null ? undefined : n.status) === chatMessageTypes.PushMessageStatus.NotCompliant;
  };
  let tJ = n => (n == null ? undefined : n.security_archive_state) === "shadow_mailbox";
  let t0 = n => isEmptyUtil.isEmpty(n) || isEmptyUtil.isEmpty(n == null ? undefined : n.content_obj);
  function t1(n) {
    return (n == null ? undefined : n.ext?.is_ultra_long_text) === "1";
  }
  function t2(n) {
    try {
      let l = (n == null ? undefined : n.content_obj?.read_status) || JSON.parse((n == null ? undefined : n.ext?.read_status) ?? "");
      if (l.read_ratio > 0 && l.read_ratio < 100) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
  function t3(n) {
    var e;
    return !!n && Y(n) && Number((e = n.attachments) === null || e === undefined ? undefined : e.filter(n => n.type !== chatCoreConstants.ContentTypes.ResourceContent)?.length) > 0;
  }
  let t5 = n => {
    var t;
    var e;
    let o = n == null ? undefined : (t = n.attachments) === null || t === undefined ? undefined : t.some(n => n.type === chatCoreConstants.ContentTypes.ResourceContent);
    let l = n == null ? undefined : (e = n.content_blocks_v2) === null || e === undefined ? undefined : e.filter(n => n.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT);
    let i = l == null ? undefined : l.some(n => {
      var t;
      var e;
      var o;
      if ((o = n.content) === null || o === undefined) {
        return undefined;
      } else if ((e = o.attachment_block) === null || e === undefined) {
        return undefined;
      } else if ((t = e.attachments) === null || t === undefined) {
        return undefined;
      } else {
        return t.some(n => n.type === attachmentConstants.AttachmentType.AttachmentTypeResourceContent);
      }
    });
    return o || i;
  };
  function t4(n) {
    return allowedUrlCheck.isUrlAllowed(n, {
      allowedProtocols: ["https:"]
    });
  }
  function t7(n) {
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.ImageGeneration;
  }
  function t6(n) {
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.ExerciseAssistant;
  }
  function t8(n) {
    let e = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(n, ["ext", "input_skill"]), {});
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.WriteAssistant && !!e.show_variables;
  }
  function t9(n) {
    return (n == null ? undefined : n.ext?.disable_action_view) === "true" || (n == null ? undefined : n.ext?.disable_action_view) === "1";
  }
  function en(n) {
    return objectPathGetDefault.getObjectPathDefault(n, "ext.is_expose") === "1" && !!objectPathGetDefault.getObjectPathDefault(n, "ext.expose_scene");
  }
  function et(n) {
    return nh(n) && Array.isArray(objectPathGetDefault.getObjectPathDefault(n, ["content_obj", "image_model", "image_list"]));
  }
  function ee(n) {
    return nh(n) && Array.isArray(objectPathGetDefault.getObjectPathDefault(n, ["content_obj", "file_model", "file_list"]));
  }
  function eo(n) {
    return !n_(n) && nh(n) && isStringTypeCheck.isString(objectPathGetDefault.getObjectPathDefault(n, ["content_obj", "link_model", "url"])) || el(n);
  }
  function el(n) {
    var t;
    return ((n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaReadInput || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaAiPodcastInput || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaText) && !!(n == null ? undefined : (t = n.attachments) === null || t === undefined ? undefined : t.find(n => n.type === "link"));
  }
  function ei(n) {
    return nh(n) && Array.isArray(objectPathGetDefault.getObjectPathDefault(n, ["content_obj", "website_model", "pages"]));
  }
  let eu = n => !!nk(n) && objectPathGetDefault.getObjectPathDefault(n, "content_obj.search_result.card_params.rich_media.card_type") === chatCoreConstants.MediaModes.OnlyImage;
  let er = n => !!nk(n) && objectPathGetDefault.getObjectPathDefault(n, "content_obj.search_result.card_params.rich_media.card_type") === chatCoreConstants.MediaModes.OnlyVideo;
  let ed = n => {
    if (!Y(n)) {
      return false;
    }
    let t = n.meta_infos;
    return !!(t == null ? undefined : t.some(n => {
      if (!n.info) {
        return false;
      }
      try {
        let e = safeJsonUtils.safeParse(n.info, {})?.insert_text;
        if (!e) {
          return false;
        }
        let o = decodeURIComponent(e);
        return o.includes("<data-block type=\"image-group\"") || o.includes("<data-inline type=\"image-group\"");
      } catch {
        return false;
      }
    }));
  };
  let ea = n => {
    if (!Y(n)) {
      return false;
    }
    let t = n.meta_infos;
    return !!(t == null ? undefined : t.some(n => {
      if (!n.info) {
        return false;
      }
      try {
        let e = safeJsonUtils.safeParse(n.info, {})?.insert_text;
        if (!e) {
          return false;
        }
        let o = decodeURIComponent(e);
        return o.includes("<data-block type=\"video-group\"") || o.includes("<data-inline type=\"video-group\"");
      } catch {
        return false;
      }
    }));
  };
  let ev = n => {
    if (n && Y(n)) {
      let {
        text: t
      } = n.content_obj || {};
      return isStringTypeCheck.isString(t) && t.includes("coco://sendMessage");
    }
    return false;
  };
  let ec = n => !!(n == null ? undefined : n.stream_id);
  let es = n => ec(n) && chatMessageUtils_2.isVisibleStatus(n);
  let e_ = n => {
    return (n == null ? undefined : n.ext?.is_crowd_testing) === "1" && !!(n == null ? undefined : n.ext?.refer_msg_id);
  };
  let ep = n => {
    return (n == null ? undefined : n.ext?.is_crowd_testing) === "1" && !!(n == null ? undefined : n.ext?.sub_messages_count);
  };
  let ef = n => ec(n) && (n == null ? undefined : n.status) !== chatMessageTypes.PushMessageStatus.Available && (n == null ? undefined : n.status) !== chatMessageTypes.PushMessageStatus.Broken;
  let ey = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && n.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillCodeInterpreter || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeInterpreterInput || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeInterpreterOutput;
  };
  let eS = n => {
    if (!(n == null ? undefined : n.content_type)) {
      return false;
    }
    let o = n.content_type;
    return aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtSupertask === o || n.ext?.input_content_type === `${aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtSupertask}` || n.skill?.skill_id === `${aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask}`;
  };
  let em = n => {
    var t;
    return eS(n) && (n == null ? undefined : (t = n.content_blocks) === null || t === undefined ? undefined : t.some(n => n.block_type === chatConstantsEnum.messageContentType.BLOCK_SUPERTASK));
  };
  let ek = n => {
    var e;
    return eS(n) && Number(n == null ? undefined : (e = n.verbose) === null || e === undefined ? undefined : e.super_task?.supertask_stage) === k.SupertaskStageClarification;
  };
  let eh = n => {
    var e;
    return eS(n) && Number(n == null ? undefined : (e = n.verbose) === null || e === undefined ? undefined : e.super_task?.supertask_stage) === k.SupertaskStagePPTOutlineAck;
  };
  let eg = n => {
    var e;
    if ((n == null ? undefined : n.ext?.suggest_skill) === "1") {
      return true;
    }
    let l = n == null ? undefined : (e = n.content_blocks) === null || e === undefined ? undefined : e.find(n => n.block_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest);
    return (l == null ? undefined : l.content_obj?.suggest_skill) === 1;
  };
  let eT = n => {
    return (n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaMediaUnderstandingByAsrInput;
  };
  let eb = n => {
    return eT(n) && !!(n == null ? undefined : n.references?.length);
  };
  let eC = n => {
    return (n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaMediaUnderstandingByAsrInput;
  };
  let ex = n => {
    var t;
    var e;
    return !!eI(n) && !!(n == null ? undefined : (t = n.content_blocks) === null || t === undefined ? undefined : t.some(n => (n == null ? undefined : n.block_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCreationOutput)) || !!(n == null ? undefined : (e = n.content_blocks_v2) === null || e === undefined ? undefined : e.some(n => n.block_type === chatConstantsEnum.messageContentType.BLOCK_CREATION));
  };
  let eA = n => {
    var e;
    var l;
    if (n == null ? undefined : n.content_blocks_v2?.length) {
      let t = [];
      for (let e of n.content_blocks_v2) {
        if (e.block_type === chatConstantsEnum.messageContentType.BLOCK_CREATION) {
          for (let n of ((l = e.content) === null || l === undefined ? undefined : l.creation_block?.creations) || []) {
            if (n.type === creationTypeConstants.creationTypes.CreationTypeImage && n.image) {
              t.push(n.image);
            }
          }
        }
      }
      return t;
    }
    let i = n == null ? undefined : (e = n.content_blocks) === null || e === undefined ? undefined : e.filter(n => (n == null ? undefined : n.block_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCreationOutput);
    if ((i == null ? undefined : i.length) !== 0) {
      let n = i == null ? undefined : i.map(n => {
        return (n == null ? undefined : n.content_obj?.creations) || [];
      }).flat();
      let t = n == null ? undefined : n.filter(n => (n == null ? undefined : n.type) === creationTypeConstants.creationTypes.CreationTypeImage);
      if ((t == null ? undefined : t.length) !== 0 && t) {
        if (t == null) {
          return undefined;
        } else {
          return t.map(n => n == null ? undefined : n.image);
        }
      }
    }
    return [];
  };
  let eR = n => {
    let t = eA(n);
    if (t == null) {
      return undefined;
    } else {
      return t.some(n => (n == null ? undefined : n.status) === imageStatusEnum.imageStatusEnum.ImageStatusGenerating);
    }
  };
  let ez = n => {
    let t = eA(n);
    if (t == null) {
      return undefined;
    } else {
      return t.every(n => (n == null ? undefined : n.status) !== imageStatusEnum.imageStatusEnum.ImageStatusGenerating);
    }
  };
  let eP = n => {
    var e;
    var l;
    if (n == null ? undefined : n.content_blocks_v2?.length) {
      let t = [];
      for (let e of n.content_blocks_v2) {
        if (e.block_type === chatConstantsEnum.messageContentType.BLOCK_CREATION) {
          for (let n of ((l = e.content) === null || l === undefined ? undefined : l.creation_block?.creations) || []) {
            if (n.type === creationTypeConstants.creationTypes.CreationTypeVideo && n.video) {
              t.push(n.video);
            }
          }
        }
      }
      return t;
    }
    let i = n == null ? undefined : (e = n.content_blocks) === null || e === undefined ? undefined : e.filter(n => (n == null ? undefined : n.block_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCreationOutput);
    if (i == null ? undefined : i.length) {
      return i.map(n => {
        return (n == null ? undefined : n.content_obj?.creations) || [];
      }).flat().filter(n => (n == null ? undefined : n.type) === creationTypeConstants.creationTypes.CreationTypeVideo && n.video).map(n => n.video);
    } else {
      return [];
    }
  };
  let eI = n => {
    return !!(n == null ? undefined : n.content_blocks?.length) || !!(n == null ? undefined : n.content_blocks_v2?.length);
  };
  let eO = n => eI(n) && M(n);
  let eD = n => {
    var t;
    var e;
    return !!eI(n) && (!!(n == null ? undefined : (t = n.content_blocks) === null || t === undefined ? undefined : t.some(n => (n == null ? undefined : n.block_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaBlockText)) || !!(n == null ? undefined : (e = n.content_blocks_v2) === null || e === undefined ? undefined : e.some(n => n.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT)));
  };
  let eE = n => {
    var o;
    return (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.SkillDeepResearch || !!(n == null ? undefined : (o = n.verbose) === null || o === undefined ? undefined : o.deep_research?.deep_research_id);
  };
  let eW = n => {
    return (n == null ? undefined : n.content_type) === chatMessageTypes.ContentType.Text && (n == null ? undefined : n.skill?.skill_type) === chatAppEnums.SkillType.SkillDeepResearch || (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDeepResearchInput;
  };
  let eL = n => {
    var e;
    return eE(n) && Number(n == null ? undefined : (e = n.verbose) === null || e === undefined ? undefined : e.deep_research?.deep_research_stage) === m.DeepResearchStageClarification;
  };
  let ew = n => {
    var i;
    let r = (n == null ? undefined : n.ext?.research_suggest) === "true" || ((n == null ? undefined : n.ext?.suggest_skill) ? (n == null ? undefined : n.ext?.suggest_skill) === "0" : (n == null ? undefined : n.ext?.deep_research_suggest) === "1");
    let d = n == null ? undefined : (i = n.content_blocks) === null || i === undefined ? undefined : i.find(n => n.block_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest);
    let {
      suggest_skill: v,
      deep_research_suggest: c
    } = (d == null ? undefined : d.content_obj) ?? {};
    return r || (v ? v === 0 : !!c);
  };
  let ej = n => {
    var e;
    return eE(n) && Number(n == null ? undefined : (e = n.verbose) === null || e === undefined ? undefined : e.deep_research?.deep_research_stage) === m.DeepResearchStageRestatement;
  };
  let eB = n => moduleReExportWrapper.wrappedModule((n == null ? undefined : n.content_blocks) || (n == null ? undefined : n.content_blocks_v2), n => (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT);
  let eM = n => {
    var t;
    let o = n == null ? undefined : (t = n.content_blocks) === null || t === undefined ? undefined : t.find(n => (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_RESEARCH);
    let l = (o == null ? undefined : o.content_obj?.status) === skillMessageLifecycleTypes.taskStatus.PROCESSING;
    return eU(n) && l;
  };
  let eU = n => {
    var t;
    return !!(n == null ? undefined : (t = n.content_blocks) === null || t === undefined ? undefined : t.some(n => (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_RESEARCH));
  };
  let eZ = n => {
    var t;
    if (n == null) {
      return undefined;
    } else if ((t = n.content_blocks) === null || t === undefined) {
      return undefined;
    } else {
      return t.some(n => (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_RESEARCH_PROCESS_CARD || (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_CODE_ASSIST_PROCESS_BLOCK);
    }
  };
  let eK = n => {
    var t;
    var e;
    var l;
    return (l = (n == null ? undefined : (t = n.content_blocks_v2) === null || t === undefined ? undefined : t.some(n => (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT)) ?? (n == null ? undefined : (e = n.content_blocks) === null || e === undefined ? undefined : e.some(n => (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT))) !== null && l !== undefined && l;
  };
  let eN = n => {
    var o;
    let l = [skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Docx, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepDocx, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_CanvasPage, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepWritingOtterPage, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Pages, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepWritingPage];
    return (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && ("content_obj" in n && l.includes(n == null ? undefined : n.content_obj?.resource_type) || "content" in n && l.includes(n == null ? undefined : (o = n.content) === null || o === undefined ? undefined : o.artifact_block?.resource_type));
  };
  let eF = n => {
    var t;
    var e;
    return (n == null ? undefined : (t = n.content_blocks) === null || t === undefined ? undefined : t.some(eN)) || (n == null ? undefined : (e = n.content_blocks_v2) === null || e === undefined ? undefined : e.some(eN));
  };
  let eG = n => {
    var t;
    if (n == null) {
      return undefined;
    } else if ((t = n.content_blocks) === null || t === undefined) {
      return undefined;
    } else {
      return t.some(n => (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_RESEARCH_WEBPAGE);
    }
  };
  let e$ = n => {
    var r;
    let d = safeJsonUtils.safeParse(n == null ? undefined : n.ext?.input_skill, {});
    return (n == null ? undefined : n.ext?.shared_app_flag) === "1" || (n == null ? undefined : n.ext?.send_from_desktop_launcher_share) === "1" || (n == null ? undefined : n.ext?.message_from) === String(uiComponentTypeConstants.uiInteractionType.SharedApp) || (n == null ? undefined : n.ext?.input_content_type) === String(aiAssistantSkillTypes.SamanthaTypes.SamanthaSharedAppAssistant) || d.skill_type === aiAssistantSkillTypes.SkillTypes.DesExtSkillSharedAppAssistant || !!(n == null ? undefined : (r = n.verbose) === null || r === undefined ? undefined : r.shared_app_state?.is_sharing);
  };
  let eH = n => {
    return !chatAsyncTaskCheck.hasAsyncTask(n) || (n == null ? undefined : n.async_task?.status) !== protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing;
  };
  let eV = n => {
    return !chatAsyncTaskCheck.hasAsyncTask(n) || (n == null ? undefined : n.async_task?.status) === protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing;
  };
  let eq = n => {
    let l = safeJsonUtils.safeParse(n.ext?.reference_content, []);
    let i = (Array.isArray(l) && !isEmptyUtil.isEmpty(l) ? l : []).find(n => {
      if (n == null) {
        return undefined;
      } else {
        return n.option?.local_path;
      }
    });
    return safeJsonUtils.safeParse(i == null ? undefined : i.option?.local_path, "")?.type === "browser_link";
  };
  let eQ = n => (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCanvasInput;
  let eX = n => {
    let l = safeJsonUtils.safeParse(n == null ? undefined : n.ext?.browser_plugin_info, {});
    let i = safeJsonUtils.safeParse(n == null ? undefined : n.ext?.browser_explain, {});
    return safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(n, ["ext", "input_skill"]), {}).template_key === "reference_text_summary" || l.scene_id === featureActionTypes.featureActionTypes.TextSelection && ((n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtAIToolSummary || !!(i == null ? undefined : i.content));
  };
  let eY = n => {
    return (n == null ? undefined : n.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaExplain || (n == null ? undefined : n.ext?.explain) === "1";
  };
  let eJ = n => {
    return (n == null ? undefined : n.ext?.browser_explain) && (Y(n) || n.content_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtAIToolSummary || n.content_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaSummaryHighlight);
  };
  let e0 = n => {
    let e = safeJsonUtils.safeParse(n == null ? undefined : n.ext?.input_skill, {});
    return (e == null ? undefined : e.skill_type) === 14;
  };
  let e1 = n => {
    return (n == null ? undefined : n.ext?.input_content_type) === String(aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantInput);
  };
  let e2 = n => n.content_type === chatMessageTypes.ContentType.Text && !!objectPathGetDefault.getObjectPathDefault(n, "reference_info.display_content");
  let e3 = n => {
    return (n == null ? undefined : n.ext?.use_display_ctn) === "1";
  };
  let e5 = n => {
    var t;
    var e;
    return !!eI(n) && !!(n == null ? undefined : (e = n.content_blocks_tree) === null || e === undefined ? undefined : (t = e.children) === null || t === undefined ? undefined : t.some(n => (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_CODE));
  };
  let e4 = n => {
    var e;
    return (n == null ? undefined : (e = n.verbose) === null || e === undefined ? undefined : e.credit?.disable_share) === "1" || (n == null ? undefined : n.ext?.disable_share) === "1";
  };
  let e7 = n => {
    var t;
    let e = n == null ? undefined : (t = n.content_blocks_v2) === null || t === undefined ? undefined : t.flatMap(n => {
      var e;
      if (n == null) {
        return undefined;
      } else if ((e = n.content) === null || e === undefined) {
        return undefined;
      } else {
        return e.attachment_block?.attachments;
      }
    });
    if (e == null) {
      return undefined;
    } else {
      return e.some(n => (n == null ? undefined : n.review_state) === attachmentConstants.ReviewState.ReviewStateNotCompliant);
    }
  };
  let e6 = n => {
    var e;
    return (n == null ? undefined : n.block_type) === chatConstantsEnum.messageContentType.BLOCK_TEXT && ((e = n.content) === null || e === undefined ? undefined : e.text_block?.text_block_scene) === skillMessageLifecycleTypes.skillMessageMode.LONG_FILE_PARSE_LIMIT_TIPS;
  };
  let e8 = n => {
    var t;
    return !!(n == null ? undefined : (t = n.content_blocks_v2) === null || t === undefined ? undefined : t.some(e6));
  };
  let e9 = n => {
    if (!n) {
      return false;
    }
    if (n.ext?.msg_scene === "ppt_gen") {
      return true;
    }
    let l = safeJsonUtils.safeParse(n.ext?.input_skill, {});
    return (l == null ? undefined : l.skill_type) === `${chatAppEnums.SkillType.AIPPTSlides}` || n.skill?.skill_id === `${chatAppEnums.SkillType.AIPPTSlides}`;
  };
  let on = n => {
    let t = n == null ? undefined : n.content_blocks_v2;
    return !!(t == null ? undefined : t.some(n => n.block_type === chatConstantsEnum.messageContentType.BLOCK_THINKING));
  };
  let ot = n => {
    let t = n == null ? undefined : n.content_blocks_v2;
    return !!(t == null ? undefined : t.some(n => n.block_type === chatConstantsEnum.messageContentType.BLOCK_LOADING));
  };
  require.d(exports, {
    Hfk: function () {
      return eM;
    },
    LxO: function () {
      return tf;
    },
    vU5: function () {
      return nO;
    },
    RvM: function () {
      return nW;
    },
    jSN: function () {
      return na;
    },
    ey$: function () {
      return eL;
    },
    u2S: function () {
      return ek;
    },
    k56: function () {
      return $;
    },
    uml: function () {
      return eD;
    },
    C3X: function () {
      return td;
    },
    G7Q: function () {
      return Y;
    },
    H6e: function () {
      return nd;
    },
    r7T: function () {
      return nb;
    },
    qZZ: function () {
      return tO;
    },
    Z37: function () {
      return tb;
    },
    fdv: function () {
      return n2;
    },
    yKE: function () {
      return eg;
    },
    ATT: function () {
      return t6;
    },
    Q5B: function () {
      return ec;
    },
    O0n: function () {
      return eV;
    },
    Fd2: function () {
      return Q;
    },
    Gg$: function () {
      return ej;
    },
    qOw: function () {
      return tG;
    },
    oSo: function () {
      return nq;
    },
    u_v: function () {
      return nr;
    },
    x4s: function () {
      return n3;
    },
    t2s: function () {
      return ed;
    },
    aLQ: function () {
      return te;
    },
    isLyricsToSongLyric: function () {
      return ng;
    },
    XD1: function () {
      return n0;
    },
    A8i: function () {
      return nj;
    },
    AqD: function () {
      return nt;
    },
    wDF: function () {
      return J;
    },
    DhQ: function () {
      return nf;
    },
    v08: function () {
      return ef;
    },
    hxv: function () {
      return e4;
    },
    ihq: function () {
      return tF;
    },
    xdd: function () {
      return e_;
    },
    iFC: function () {
      return ea;
    },
    brY: function () {
      return F;
    },
    c6h: function () {
      return nz;
    },
    vlk: function () {
      return M;
    },
    $bh: function () {
      return tj;
    },
    rKF: function () {
      return N;
    },
    Ouv: function () {
      return ew;
    },
    cnd: function () {
      return eU;
    },
    hWN: function () {
      return t9;
    },
    RF2: function () {
      return tq;
    },
    xa3: function () {
      return tl;
    },
    Ptc: function () {
      return nc;
    },
    VN0: function () {
      return t0;
    },
    ylu: function () {
      return n8;
    },
    JAS: function () {
      return e6;
    },
    Brd: function () {
      return tc;
    },
    PMd: function () {
      return q;
    },
    wkW: function () {
      return on;
    },
    ugN: function () {
      return e0;
    },
    WK_: function () {
      return ep;
    },
    IEy: function () {
      return tv;
    },
    aEU: function () {
      return tX;
    },
    z_e: function () {
      return tS;
    },
    tK5: function () {
      return tR;
    },
    exC: function () {
      return nH;
    },
    RxW: function () {
      return nU;
    },
    sdK: function () {
      return nV;
    },
    DXD: function () {
      return en;
    },
    b9i: function () {
      return tr;
    },
    U18: function () {
      return tC;
    },
    FFC: function () {
      return Z;
    },
    TSU: function () {
      return eQ;
    },
    pEk: function () {
      return eX;
    },
    yLq: function () {
      return ti;
    },
    D28: function () {
      return G;
    },
    qCG: function () {
      return ot;
    },
    NB8: function () {
      return ns;
    },
    C_i: function () {
      return nx;
    },
    e0X: function () {
      return n6;
    },
    ssP: function () {
      return tw;
    },
    d5I: function () {
      return eP;
    },
    f9R: function () {
      return tP;
    },
    X6X: function () {
      return n5;
    },
    DRY: function () {
      return B;
    },
    Q_x: function () {
      return t7;
    },
    AS7: function () {
      return tM;
    },
    e$o: function () {
      return e2;
    },
    cLH: function () {
      return eY;
    },
    wum: function () {
      return e1;
    },
    lV9: function () {
      return tu;
    },
    RkI: function () {
      return t_;
    },
    icE: function () {
      return ee;
    },
    xsI: function () {
      return tH;
    },
    b5v: function () {
      return nN;
    },
    XM5: function () {
      return nP;
    },
    evp: function () {
      return nl;
    },
    DMj: function () {
      return e7;
    },
    Yi0: function () {
      return em;
    },
    qqf: function () {
      return tn;
    },
    zZW: function () {
      return nM;
    },
    s27: function () {
      return ts;
    },
    ePZ: function () {
      return np;
    },
    dqg: function () {
      return ex;
    },
    B$e: function () {
      return et;
    },
    ZFo: function () {
      return tQ;
    },
    $sc: function () {
      return nK;
    },
    R6A: function () {
      return nQ;
    },
    Lyd: function () {
      return eZ;
    },
    MFz: function () {
      return tz;
    },
    mT2: function () {
      return er;
    },
    T0Z: function () {
      return ne;
    },
    gch: function () {
      return tZ;
    },
    hT$: function () {
      return tm;
    },
    QJs: function () {
      return to;
    },
    D8H: function () {
      return n1;
    },
    Qwe: function () {
      return eq;
    },
    DPh: function () {
      return e9;
    },
    DCy: function () {
      return ny;
    },
    UQt: function () {
      return eB;
    },
    fTy: function () {
      return nn;
    },
    f8g: function () {
      return nv;
    },
    nmA: function () {
      return eE;
    },
    Cw_: function () {
      return eW;
    },
    O72: function () {
      return nw;
    },
    kwD: function () {
      return n_;
    },
    mZM: function () {
      return t2;
    },
    bJZ: function () {
      return tB;
    },
    tiZ: function () {
      return e8;
    },
    pdQ: function () {
      return K;
    },
    t4S: function () {
      return tx;
    },
    q4z: function () {
      return nF;
    },
    C3H: function () {
      return nC;
    },
    EkH: function () {
      return n9;
    },
    lcM: function () {
      return tN;
    },
    awc: function () {
      return tJ;
    },
    mdd: function () {
      return tW;
    },
    UD5: function () {
      return eF;
    },
    uPu: function () {
      return ni;
    },
    iMt: function () {
      return eT;
    },
    FWe: function () {
      return nR;
    },
    Jgn: function () {
      return eO;
    },
    z7f: function () {
      return nI;
    },
    dpK: function () {
      return H;
    },
    RUP: function () {
      return nm;
    },
    VQ4: function () {
      return tL;
    },
    HlN: function () {
      return eG;
    },
    YWn: function () {
      return nX;
    },
    dt2: function () {
      return eR;
    },
    JGL: function () {
      return eb;
    },
    HRz: function () {
      return t1;
    },
    zL_: function () {
      return eI;
    },
    xFg: function () {
      return eH;
    },
    p_0: function () {
      return e5;
    },
    O7X: function () {
      return eo;
    },
    JJ7: function () {
      return e3;
    },
    t89: function () {
      return X;
    },
    Sqr: function () {
      return t3;
    },
    s9j: function () {
      return el;
    },
    bt$: function () {
      return tk;
    },
    Ioq: function () {
      return nk;
    },
    Acz: function () {
      return tg;
    },
    pp8: function () {
      return eu;
    },
    LRw: function () {
      return eh;
    },
    rAP: function () {
      return nS;
    },
    zwb: function () {
      return n7;
    },
    lpb: function () {
      return nA;
    },
    KZS: function () {
      return t4;
    },
    QUR: function () {
      return ez;
    },
    xPj: function () {
      return t8;
    },
    BPl: function () {
      return t$;
    },
    tX2: function () {
      return eN;
    },
    Bmf: function () {
      return n$;
    },
    gzu: function () {
      return e$;
    },
    Kzj: function () {
      return tV;
    },
    Yns: function () {
      return th;
    },
    q8s: function () {
      return tK;
    },
    esE: function () {
      return eJ;
    },
    BUc: function () {
      return eK;
    },
    f47: function () {
      return ev;
    },
    ho6: function () {
      return tU;
    },
    td$: function () {
      return nD;
    },
    Yb1: function () {
      return tE;
    },
    fjb: function () {
      return eS;
    },
    o2g: function () {
      return nY;
    },
    N0s: function () {
      return ta;
    },
    qP0: function () {
      return nE;
    },
    tfX: function () {
      return ei;
    },
    isOnboardingMessage: function () {
      return tp;
    },
    kAo: function () {
      return t5;
    },
    fE5: function () {
      return nu;
    },
    a_6: function () {
      return nB;
    },
    TjU: function () {
      return tI;
    },
    ZRq: function () {
      return tA;
    },
    zTh: function () {
      return tt;
    },
    xop: function () {
      return nh;
    },
    Cki: function () {
      return eA;
    },
    KQr: function () {
      return es;
    },
    Jlm: function () {
      return tY;
    },
    F3w: function () {
      return U;
    }
  });
}