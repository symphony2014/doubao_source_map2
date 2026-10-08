// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z4' to 'linkDisplayOptions'
// - Renamed export 'ou' to 'linkDisplayMenuItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-paste-panel.dec4e4b1.js
         * chunkId: 42590
         * moduleId: 334029
         */
module.exports = function (module, exports, require) {
  var n;
  var globalLinkOutlinedIcon = require("global-link-outlined-icon") /*id: 70621*/;
  var titleViewOutlinedIcon = require("title-view-outlined-icon") /*id: 213555*/;
  var viewVideoOutlinedIcon = require("view-video-outlined-icon") /*id: 934101*/;
  var previewViewOutlinedIcon = require("preview-view-outlined-icon") /*id: 943695*/;
  var visibleLockOutlinedIcon = require("visible-lock-outlined-icon") /*id: 700898*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var f = ["prefixId"];
  function k(e) {
    e.prefixId;
    var r = objectOmitHelper_1.omitWithSymbols(e, f);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, r), reactCoreLibraryReexport.createElement("path", {
      d: "M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm8 0v6h4V5h-4Zm-2 6V5H4v6h4Zm-4 2v6h4v-6H4Zm6 0v6h4v-6h-4Zm6 0v6h4v-6h-4Zm4-2V5h-4v6h4Z",
      fill: "currentColor"
    }));
  }
  var linkRecordOutlinedIcon = require("link-record-outlined-icon") /*id: 282354*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (n = {}).TaskList = "taskList";
  n.JiraFilter = "jiraFilter";
  n.Synced = "synced";
  n.Ignore = "pass";
  n.Title = "title";
  n.Card = "card";
  n.Preview = "preview";
  n.Link = "link";
  let b = n;
  let w = docxFeatureFlags.isMfEnabled() ? [{
    name: "slash block",
    type: editorConstantsEnums.MenuItemTypes.Title,
    text: t("CreationDoc_Docs_WebBookmark_DisplayAs_Title"),
    canSelected: false
  }, {
    icon: reactJsxRuntimeCoreReexport.jsx(globalLinkOutlinedIcon.GlobalLinkOutlined, {}),
    name: b.Link,
    type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
    extra: {
      behavior: editorConstantsEnums.EditorActions.CreateNoOps
    },
    text: t("LarkCCM_Docs_InsertLink_DisplayAs_Link_Menu"),
    action: () => undefined
  }, {
    icon: reactJsxRuntimeCoreReexport.jsx(titleViewOutlinedIcon.TitleViewOutlined, {}),
    name: b.Title,
    type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
    extra: {
      behavior: editorConstantsEnums.EditorActions.InsertBlock
    },
    text: t("LarkCCM_Docs_InsertLink_DisplayAs_Title_Menu"),
    action: () => undefined
  }, {
    icon: reactJsxRuntimeCoreReexport.jsx(viewVideoOutlinedIcon.ViewVideoOutlinedIcon, {}),
    name: b.Card,
    type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
    extra: {
      behavior: editorConstantsEnums.EditorActions.InsertBlock
    },
    text: t("LarkCCM_Docs_InsertLink_DisplayAs_Card_Menu"),
    action: () => undefined
  }, {
    icon: reactJsxRuntimeCoreReexport.jsx(previewViewOutlinedIcon.PreviewViewOutlined, {}),
    name: b.Preview,
    type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
    extra: {
      behavior: editorConstantsEnums.EditorActions.CreateNoOps
    },
    disabled: docComponentFeatureFlags.isImchatSyncedBlk(),
    tip: docComponentFeatureFlags.isImchatSyncedBlk() && t("LarkCCM_Docs_SyncBlock_LinkPreviewNA_Tooltip"),
    forceShowTip: docComponentFeatureFlags.isImchatSyncedBlk(),
    text: t("LarkCCM_Docs_InsertLink_DisplayAs_Preview_Menu"),
    action: () => undefined
  }] : [{
    name: "slash block",
    type: editorConstantsEnums.MenuItemTypes.Title,
    text: t("CreationDoc_Docs_WebBookmark_DisplayAs_Title"),
    canSelected: false
  }, {
    icon: reactJsxRuntimeCoreReexport.jsx(titleViewOutlinedIcon.TitleViewOutlined, {}),
    name: b.Title,
    type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
    extra: {
      behavior: editorConstantsEnums.EditorActions.InsertBlock
    },
    text: t("CreationDoc_Docs_WebBookmark_DisplayAs_Title_Button"),
    action: () => undefined
  }, {
    icon: reactJsxRuntimeCoreReexport.jsx(viewVideoOutlinedIcon.ViewVideoOutlinedIcon, {}),
    name: b.Card,
    type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
    extra: {
      behavior: editorConstantsEnums.EditorActions.InsertBlock
    },
    text: t("CreationDoc_Docs_PasteLink_DisplayAs_Card_Button"),
    action: () => undefined
  }, {
    icon: reactJsxRuntimeCoreReexport.jsx(previewViewOutlinedIcon.PreviewViewOutlined, {}),
    name: b.Preview,
    type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
    extra: {
      behavior: editorConstantsEnums.EditorActions.CreateNoOps
    },
    text: t("CreationDoc_Docs_PasteLink_DisplayAs_Embedded_Button"),
    action: () => undefined
  }, {
    name: "divider",
    type: editorConstantsEnums.MenuItemTypes.Divider,
    canSelected: false
  }, {
    icon: reactJsxRuntimeCoreReexport.jsx(visibleLockOutlinedIcon.VisibleLockOutlined, {}),
    name: b.Link,
    type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
    extra: {
      behavior: editorConstantsEnums.EditorActions.CreateNoOps
    },
    text: t("docs.text_correction.ignore"),
    action: () => undefined
  }];
  editorConstantsEnums.MenuItemTypes.Title;
  t("CreationDoc_Docs_WebBookmark_DisplayAs_Title");
  globalLinkOutlinedIcon.GlobalLinkOutlined;
  b.Link;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  editorConstantsEnums.EditorActions.CreateNoOps;
  t("CreationDoc_Docs_WebBookmark_DisplayAs_Link_Button");
  viewVideoOutlinedIcon.ViewVideoOutlinedIcon;
  b.Card;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  editorConstantsEnums.EditorActions.InsertBlock;
  t("CreationDoc_Docs_WebBookmark_DisplayAs_Bookmark_Button");
  editorConstantsEnums.MenuItemTypes.Title;
  t("CreationDoc_Docs_WebBookmark_DisplayAs_Title");
  b.JiraFilter;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  t("CreationDoc_Common_GridView");
  editorConstantsEnums.EditorActions.InsertBlock;
  editorConstantsEnums.MenuItemTypes.Divider;
  visibleLockOutlinedIcon.VisibleLockOutlined;
  b.Link;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  t("docs.text_correction.ignore");
  editorConstantsEnums.EditorActions.CreateNoOps;
  editorConstantsEnums.MenuItemTypes.Title;
  t("LarkCCM_Docs_MeegoBlock_DisplayAs_URLTitleInSelect");
  viewVideoOutlinedIcon.ViewVideoOutlinedIcon;
  b.Card;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  editorConstantsEnums.EditorActions.InsertBlock;
  t("LarkCCM_Docs_MeegoBlock_Card_URLTitleInSelect");
  editorConstantsEnums.MenuItemTypes.Divider;
  visibleLockOutlinedIcon.VisibleLockOutlined;
  b.Ignore;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  editorConstantsEnums.EditorActions.CreateNoOps;
  t("LarkCCM_Docs_MeegoBlock_Ignore_URLTitleInSelect");
  linkRecordOutlinedIcon.LinkRecordOutlinedIcon;
  b.Synced;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  t("LarkCCM_Docs_SyncBlock_PasteAs_Option");
  t("LarkCCM_Docs_SyncBlock_PasteAs_Description");
  editorConstantsEnums.EditorActions.InsertBlock;
  editorConstantsEnums.MenuItemTypes.Divider;
  visibleLockOutlinedIcon.VisibleLockOutlined;
  b.Ignore;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  editorConstantsEnums.EditorActions.CreateNoOps;
  t("LarkCCM_Docs_MeegoBlock_Ignore_URLTitleInSelect");
  editorConstantsEnums.MenuItemTypes.Title;
  t("CreationDoc_Docs_WebBookmark_DisplayAs_Title");
  previewViewOutlinedIcon.PreviewViewOutlined;
  b.Card;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  editorConstantsEnums.EditorActions.InsertBlock;
  t("Bitable_Integration_LinkBaseInDocs_DisplayBase_DisplayButton");
  editorConstantsEnums.MenuItemTypes.Divider;
  visibleLockOutlinedIcon.VisibleLockOutlined;
  b.Ignore;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  editorConstantsEnums.EditorActions.CreateNoOps;
  t("docs.text_correction.ignore");
  editorConstantsEnums.MenuItemTypes.Title;
  t("CreationDoc_Docs_WebBookmark_DisplayAs_Title");
  editorConstantsEnums.MenuItemTypes.Divider;
  visibleLockOutlinedIcon.VisibleLockOutlined;
  b.Link;
  editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  editorConstantsEnums.EditorActions.CreateNoOps;
  t("docs.text_correction.ignore");
  () => undefined;
  require.d(exports, {
    linkDisplayOptions: function () {
      return b;
    },
    linkDisplayMenuItems: function () {
      return w;
    }
  });
}