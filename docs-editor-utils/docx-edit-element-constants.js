// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'hr' to 'editElementType'
// - Renamed export '_x' to 'pollElementKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 702540
         */
module.exports = function (module, exports, require) {
  var o;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let l = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.mobile.new_action_menu_order", true);
  var docxFeatureTooltipHandler = require("docx-feature-tooltip-handler") /*id: 920454*/;
  var stringTitleCase = require("string-title-case") /*id: 444710*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  (o = {}).LOOK_UP = "LOOK_UP";
  o.SELECT = "SELECT";
  o.SELECT_ALL = "SELECT_ALL";
  o.SHARE = "SHARE";
  o.CUT = "CUT";
  o.COPY = "COPY";
  o.PASTE = "PASTE";
  o.COMMENT = "COMMENT";
  o.DELETE = "DELETE";
  o.EDIT = "EDIT";
  o.OPEN_LINK = "OPEN_LINK";
  o.EDIT_LINK = "EDIT_LINK";
  o.DELETE_LINK = "DELETE_LINK";
  o.ADD_LINK = "ADD_LINK";
  o.COPY_LINK = "COPY_LINK";
  o.COPY_ANCHOR_LINK = "COPY_ANCHOR_LINK";
  o.CUT_LINK = "CUT_LINK";
  o.COMMENT_LINK = "COMMENT_LINK";
  o.REACTION_LINK = "REACTION_LINK";
  o.COMMENT_VIEW = "COMMENT_VIEW";
  o.REVISION_VIEW = "REVISION_VIEW";
  o.OPEN_ORIGIN_LINK = "OPEN_ORIGIN_LINK";
  o.VIEW_ABBREVIATION = "VIEW_ABBREVIATION";
  o.IGNORE_ABBREVIATION = "IGNORE_ABBREVIATION";
  o.CONTENT_REACTION = "CONTENT_REACTION";
  o.COPY_MULTI_BLOCK_ANCHOR = "COPY_MULTI_BLOCK_ANCHOR";
  o.SHARE_TEXT_LINK = "SHARE_TEXT_LINK";
  o.SYNCED_SOURCE = "SYNCED_SOURCE";
  o.SEND_TO_CHAT = "SEND_TO_CHAT";
  o.TRANSLATE = "TRANSLATE";
  o.SEARCH_WEB = "SEARCH_WEB";
  o.LARK_SEARCH = "LARK_SEARCH";
  o.AI_EXPLAIN = "AI_EXPLAIN";
  o.AI_IMPROVE_WRITING = "AI_IMPROVE_WRITING";
  o.AI_MAKE_LONGER = "AI_MAKE_LONGER";
  o.MORE_AI_FUNCTIONS = "MORE_AI_FUNCTIONS";
  o.DOUBAO = "ASK_DOUBAO";
  let s = o;
  s.LOOK_UP;
  stringTitleCase.toTitleCase(t("mobile.menu.look_up"));
  s.SELECT;
  stringTitleCase.toTitleCase(t("mobile.menu.select"));
  s.SELECT_ALL;
  if (l()) {
    stringTitleCase.toTitleCase(t("LarkCCM_Docs_Toolbar_SelectAll_Tab_Mob"));
  } else {
    stringTitleCase.toTitleCase(t("mobile.menu.select_all"));
  }
  s.SHARE;
  stringTitleCase.toTitleCase(docxFeatureFlags.isWEnabled() ? t("LarkCCM_Docs_Toolbar_ShareToOtherApps_Tooltip") : t("LarkCCM_Docs_Toolbar_Share_Tab_Mob"));
  s.CUT;
  stringTitleCase.toTitleCase(t("mobile.menu.cut"));
  s.COPY;
  stringTitleCase.toTitleCase(t("mobile.menu.copy"));
  s.PASTE;
  stringTitleCase.toTitleCase(t("mobile.menu.paste"));
  s.DOUBAO;
  t("doc_editor_btn_AIRewrite");
  s.COMMENT;
  stringTitleCase.toTitleCase(t("mobile.menu.comment"));
  s.EDIT;
  stringTitleCase.toTitleCase(t("mobile.menu.edit"));
  s.OPEN_LINK;
  stringTitleCase.toTitleCase(t("mobile.menu.open_link"));
  s.ADD_LINK;
  if (l()) {
    t("LarkCCM_Docs_Toolbar_AddLinkToSelection_Tab_Mob");
  } else {
    stringTitleCase.toTitleCase(t("LarkCCM_Docx_AddLink_Button_Mob"));
  }
  s.EDIT_LINK;
  stringTitleCase.toTitleCase(t("LarkCCM_Docx_EditLink_Button_Mob"));
  s.DELETE_LINK;
  stringTitleCase.toTitleCase(t("LarkCCM_Docx_RemoveLink_Button_Mob"));
  s.COPY_LINK;
  stringTitleCase.toTitleCase(t("mobile.menu.copy_link"));
  s.COPY_MULTI_BLOCK_ANCHOR;
  if (l()) {
    t("LarkCCM_Docs_Toolbar_CopyLinkToSelection_Tab_Mob");
  } else {
    stringTitleCase.toTitleCase(t("LarkCCM_DocxIM_SharePart_CopyLink_Button"));
  }
  s.SHARE_TEXT_LINK;
  stringTitleCase.toTitleCase(docxFeatureTooltipHandler.getFeatureTooltip);
  s.SYNCED_SOURCE;
  stringTitleCase.toTitleCase(t("LarkCCM_Docs_SyncBlock_Sync_Button"));
  s.AI_EXPLAIN;
  if (l()) {
    t("LarkCCM_Docs_Toolbar_ExplainThis_Tab_Mob");
  } else {
    t("LarkCCM_Docs_Toolbar_AIExplain_Button_Mob");
  }
  s.AI_IMPROVE_WRITING;
  t("LarkCCM_Docs_Toolbar_AIImproveWrite_Button_Mob");
  s.AI_MAKE_LONGER;
  t("LarkCCM_Docs_Toolbar_AIMakeLonger_Button_Mob");
  s.MORE_AI_FUNCTIONS;
  t("LarkCCM_Docs_Toolbar_MoreAIFunctions_Button_Mob");
  s.CUT_LINK;
  stringTitleCase.toTitleCase(t("mobile.menu.cut_link"));
  s.COMMENT_LINK;
  stringTitleCase.toTitleCase(t("mobile.menu.comment_link"));
  s.CUT_LINK;
  stringTitleCase.toTitleCase(t("mobile.menu.cut"));
  s.COPY_LINK;
  stringTitleCase.toTitleCase(t("mobile.menu.copy"));
  s.COMMENT_LINK;
  stringTitleCase.toTitleCase(t("mobile.menu.comment"));
  s.REACTION_LINK;
  stringTitleCase.toTitleCase(t("LarkCCM_Docx_emojiReaction_Button_Mob"));
  s.COMMENT_VIEW;
  stringTitleCase.toTitleCase(t("CreationDoc_ViewComments"));
  s.REVISION_VIEW;
  stringTitleCase.toTitleCase(t("LarkCCM_Docs_Mobile_VeiwSuggest_Button"));
  s.OPEN_ORIGIN_LINK;
  stringTitleCase.toTitleCase(t("CreationDoc_Docs_WebBookmark_Open_Tooltip"));
  s.VIEW_ABBREVIATION;
  stringTitleCase.toTitleCase(t("CreationDoc_Docs_Teampedia_Tap"));
  s.IGNORE_ABBREVIATION;
  stringTitleCase.toTitleCase(t("CreationDoc_Docs_Teampedia_Off"));
  s.VIEW_ABBREVIATION;
  stringTitleCase.toTitleCase(t("LarkCCM_Lingo_MeaningUnclearHover_DefineButton"));
  s.IGNORE_ABBREVIATION;
  stringTitleCase.toTitleCase(t("LarkCCM_Lingo_MultipleMeaningsSelectOne_IgnoreButton"));
  s.CONTENT_REACTION;
  stringTitleCase.toTitleCase(t("LarkCCM_Docx_emojiReaction_Button_Mob"));
  s.SEND_TO_CHAT;
  if (l()) {
    t("LarkCCM_Docs_Toolbar_ShareLinkToSelection_Tab_Mob");
  } else {
    stringTitleCase.toTitleCase(t("LarkCCM_Docs_FwdSection_SendToChat_Menu"));
  }
  s.TRANSLATE;
  stringTitleCase.toTitleCase(t("LarkCCM_Docs_ASL_Translate_Menu"));
  s.SEARCH_WEB;
  stringTitleCase.toTitleCase(t("LarkCCM_Docs_Toolbar_SearchWeb_Tab_Mob"));
  s.LARK_SEARCH;
  t("LarkCCM_Docs_Toolbar_SearchInFeishu_Tab_Mob");
  s.CONTENT_REACTION;
  s.TRANSLATE;
  s.COMMENT;
  s.COMMENT_LINK;
  s.REACTION_LINK;
  s.CONTENT_REACTION;
  let d = "extra_edit_element";
  let f = `poll-${d}`;
  require.d(exports, {
    editElementType: function () {
      return d;
    },
    pollElementKey: function () {
      return f;
    }
  });
}