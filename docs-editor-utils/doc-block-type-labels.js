// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'blockTypeLabels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 159823
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let i = {
    [docBlockTypeConstants.blockTypeConstants.HEADING1]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.HEADING2]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.HEADING3]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.HEADING4]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.HEADING5]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.HEADING6]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.HEADING7]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.HEADING8]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.HEADING9]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.HEADINGN]: t("common.title"),
    [docBlockTypeConstants.blockTypeConstants.QUOTE]: t("common.reference"),
    [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER]: t("common.reference"),
    [docBlockTypeConstants.blockTypeConstants.IMAGE]: t("editorbar.image"),
    [docBlockTypeConstants.blockTypeConstants.BULLET]: t("common.unordered_list"),
    [docBlockTypeConstants.blockTypeConstants.ORDERED]: t("common.ordered_list"),
    [docBlockTypeConstants.blockTypeConstants.DIVIDER]: t("common.divider"),
    [docBlockTypeConstants.blockTypeConstants.CODE]: t("help.siderbar.code_block"),
    [docBlockTypeConstants.blockTypeConstants.MERMAID]: t("CreationDoc_Docs_Mermaid_Title"),
    [docBlockTypeConstants.blockTypeConstants.GRID]: t("CreationDoc_DocX_Menu_Insert_column_option"),
    [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN]: t("CreationDoc_DocX_Menu_Insert_column_option"),
    [docBlockTypeConstants.blockTypeConstants.CALLOUT]: t("CreationDoc_Docs_CalloutBlock_Tab"),
    [docBlockTypeConstants.blockTypeConstants.TODO]: t("common.task_list"),
    [docBlockTypeConstants.blockTypeConstants.CHAT_CARD]: t("etherpad.chatcard"),
    [docBlockTypeConstants.blockTypeConstants.DIAGRAM]: t("CreationDoc_Docs_FlowDiagram_Title"),
    [docBlockTypeConstants.blockTypeConstants.TABLE]: t("common.table"),
    [docBlockTypeConstants.blockTypeConstants.CELL]: t("mobile.sheet.fab_cell"),
    [docBlockTypeConstants.blockTypeConstants.IFRAME]: t("CreationDoc_DocX_Embed_Title"),
    [docBlockTypeConstants.blockTypeConstants.SHEET]: t("common.sheet"),
    [docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED]: t("CreationDoc_Sheets_Graph_GraphTittle"),
    [docBlockTypeConstants.blockTypeConstants.CHART_REFER]: t("CreationDoc_Sheets_Graph_GraphTittle"),
    [docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM]: t("CreationDoc_Sheets_Graph_GraphTittle"),
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: t("common.bitable_web_renametest"),
    [docBlockTypeConstants.blockTypeConstants.BASE_REFER]: t("common.bitable_web_renametest"),
    [docBlockTypeConstants.blockTypeConstants.FILE]: t("common.file"),
    [docBlockTypeConstants.blockTypeConstants.UML]: t("CreationDoc_Docs_UMLDiagram_Title"),
    [docBlockTypeConstants.blockTypeConstants.FLOWCHART]: t("CreationDoc_Docs_FlowDiagram_Title"),
    [docBlockTypeConstants.blockTypeConstants.VIEW]: t("common.file"),
    [docBlockTypeConstants.blockTypeConstants.FALLBACK]: "fallback",
    [docBlockTypeConstants.blockTypeConstants.ISV]: "isv",
    [docBlockTypeConstants.blockTypeConstants.MINDMAP]: t("filetype_mindnote"),
    [docBlockTypeConstants.blockTypeConstants.POLL]: t("block.poll"),
    [docBlockTypeConstants.blockTypeConstants.TASK]: t("CreationDoc_Tasks_Tasks_MenuOption"),
    [docBlockTypeConstants.blockTypeConstants.TASK_LIST]: t("LarkCCM_Docs_TaskList_Menu"),
    [docBlockTypeConstants.blockTypeConstants.BOOKMARK]: t("CreationDoc_Docs_WebBookmark_Button"),
    [docBlockTypeConstants.blockTypeConstants.OKR]: "OKR",
    [docBlockTypeConstants.blockTypeConstants.OKRX]: "OKR",
    [docBlockTypeConstants.blockTypeConstants.WIKI_CATALOG]: t("CreationDoc_Wiki_SubpageTOC_BlockTitle"),
    [docBlockTypeConstants.blockTypeConstants.FOLDER_MANAGER]: "文件夹视图",
    [docBlockTypeConstants.blockTypeConstants.WIKI_RECENT]: t("CreationDoc_Wiki_UpdatesBlock_InsertBlock"),
    [docBlockTypeConstants.blockTypeConstants.JIRA_FILTER]: t("doc.jira.jira_filter"),
    [docBlockTypeConstants.blockTypeConstants.JIRA_ISSUE]: t("doc.jira.jira_issue"),
    [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: t("LarkCCM_Docx_Whiteboard"),
    [docBlockTypeConstants.blockTypeConstants.MEEGO]: t("LarkCCM_FeishuProject_Common"),
    [docBlockTypeConstants.blockTypeConstants.AGENDA]: t("LarkCCM_Docs_MeetingAgenda_Button"),
    [docBlockTypeConstants.blockTypeConstants.URL_PREVIEW]: t("LarkCCM_Docx_IM_MessageLink_Message_Text"),
    [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE]: t("LarkCCM_Docs_SyncBlock_Button"),
    [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE]: t("LarkCCM_Docs_SyncBlock_Button"),
    [docBlockTypeConstants.blockTypeConstants.BUTTON]: t("LarkCCM_Docx_Button_Add_Menu"),
    [docBlockTypeConstants.blockTypeConstants.REMINDER]: t("LarkCCM_Docs_Menu_DateReminder"),
    [docBlockTypeConstants.blockTypeConstants.EQUATION]: t("CreationDoc_Docs_Equation.title"),
    [docBlockTypeConstants.blockTypeConstants.AI]: t("LarkCCM_Docs_MyAIBlock_AITemplate_Title"),
    [docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT]: t("LarkCCM_Docs_CalendarEvent_Title")
  };
  require.d(exports, {
    blockTypeLabels: function () {
      return i;
    }
  });
}