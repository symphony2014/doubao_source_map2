// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DY' to 'createEntryPoints'
// - Renamed export 'f4' to 'docCreateModes'
// - Renamed export 'n0' to 'clickChannels'
// - Renamed export 'oB' to 'trackDocCreate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 86772
         */
module.exports = function (module, exports, require) {
  var i;
  var l;
  var r;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var artifactEnumConstants = require("artifact-enum-constants") /*id: 912769*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  (i = {}).AiDocImportDocument = "ai_doc_import_document";
  i.AiDocTemplateBlank = "ai_doc_template_blank";
  i.AiDocListCreateButton = "ai_doc_list_create_button";
  i.SendMessageCreate = "send_message_create";
  i.AiDocTemplateBesideChatBox = "ai_doc_template_beside_chat_box";
  i.AiDocTemplateLibrary = "ai_doc_template_library";
  i.CopyDoc = "copy_doc";
  i.AiDocDetailCreateButton = "ai_doc_detail_create_button";
  i.AiSpaceBlank = "ai_space_blank";
  i.AiSpaceCreateBlankDoc = "ai_space_create_blank_doc";
  i.DeepResearchEditWithDoubaoDoc = "deep_research_edit_with_doubao_doc";
  i.AiDocOnboardingCard = "ai_doc_onboarding_card";
  let d = i;
  (l = {}).ImportDocument = "import_document";
  l.Template = "template";
  l.BlankFile = "blank_file";
  l.SendMessage = "send_message";
  l.CopyDoc = "copy_doc";
  l.EditWithDoubaoDoc = "edit_with_doubao_doc";
  let u = l;
  let p = e => {
    let {
      clickFrom: t,
      createWay: n,
      templateId: i,
      templateName: l,
      fromPageToken: r,
      fromArtifactMetaId: d,
      pageToken: u,
      artifactMetaId: p,
      artifactType: m = artifactEnumConstants.ArtifactType.Page,
      deepResearchId: v,
      superTaskId: f,
      superTaskMode: h,
      forceAddArtifactType: g
    } = e;
    if (!u) {
      return;
    }
    let _ = documentNavigationAndCreationUtils.isFusionDocResource({
      key: u
    });
    teaAnalyticsEventTracker.trackEvent("create_ai_doc", {
      click_from: t,
      create_way: n,
      author_id: chatUserInfoActions.getUserIdStr(),
      ai_doc_template_id: i,
      ai_doc_template_name: l,
      from_page_token: r,
      from_artifact_meta_id: d,
      page_token: _ ? u : undefined,
      legacy_page_token: _ ? undefined : u,
      deep_research_id: v,
      ...(p ? {
        artifact_meta_id: p,
        artifact_type: m
      } : {}),
      ...(g ? {
        artifact_type: m
      } : {}),
      super_task_id: f,
      super_task_mode: h
    });
  };
  (r = {}).DIRECT_ENTER = "direct_enter";
  r.SIDEBAR_SKILL = "sidebar_skill";
  r.SKILL = "skill";
  r.AI_DOC_IMPORT_DOCUMENT = "ai_doc_import_document";
  r.AI_DOC_TEMPLATE_BLANK = "ai_doc_template_blank";
  r.SEND_MESSAGE_CREATE = "send_message_create";
  r.AI_DOC_TEMPLATE_BESIDE_CHAT_BOX = "ai_doc_template_beside_chat_box";
  r.AI_DOC_TEMPLATE_LIBRARY = "ai_doc_template_library";
  r.AI_DOC_LIST = "ai_doc_list";
  r.AI_SPACE_DOC_LIST = "ai_space_doc_list";
  r.SHARE_LINK = "share_link";
  r.COPY_DOC = "copy_doc";
  r.AI_SPACE_BLANK = "ai_space_blank";
  r.PUBLIC_LINK = "public_link";
  r.AI_DOC_ONBOARDING_CARD = "ai_doc_onboarding_card";
  r.MEETING_RECORD_CREATE_BUTTON = "meeting_record_create_button";
  let m = r;
  require.d(exports, {
    createEntryPoints: function () {
      return d;
    },
    docCreateModes: function () {
      return u;
    },
    clickChannels: function () {
      return m;
    },
    trackDocCreate: function () {
      return p;
    }
  });
}