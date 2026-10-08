// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'tD' to 'getBlockTypeLabel'
// - Renamed export '$U' to 'blockTypeIconMap'
// - Renamed export 'KP' to 'getTemplateIconAndLabel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 773648
         */
module.exports = function (module, exports, require) {
  var orderListOutlinedIcon = require("order-list-outlined-icon") /*id: 468223*/;
  var disorderListOutlinedIcon = require("disorder-list-outlined-icon") /*id: 68411*/;
  var todoOutlinedIcon = require("todo-outlined-icon") /*id: 422051*/;
  var referenceOutlinedIcon = require("reference-outlined-icon") /*id: 523394*/;
  var calloutOutlinedIconComponent = require("callout-outlined-icon-component") /*id: 248514*/;
  var docColumnsOutlinedIcon = require("doc-columns-outlined-icon") /*id: 438042*/;
  var voteOutlinedIconComponent = require("vote-outlined-icon-component") /*id: 583698*/;
  var fileLinkNotesIcon = require("file-link-notes-icon") /*id: 831757*/;
  var linkRecordOutlinedIcon = require("link-record-outlined-icon") /*id: 282354*/;
  var tabTodoOutlinedIcon = require("tab-todo-outlined-icon") /*id: 578791*/;
  var dataSheetOutlinedIcon = require("data-sheet-outlined-icon") /*id: 123278*/;
  var sheetTableOutlinedIconComponent = require("sheet-table-outlined-icon-component") /*id: 870127*/;
  var fileBitableColorfulIcon = require("file-bitable-colorful-icon") /*id: 795650*/;
  var mindmapOutlinedIcon = require("mindmap-outlined-icon") /*id: 507144*/;
  var imageOutlinedIcon = require("image-outlined-icon") /*id: 633772*/;
  var attachmentOutlinedIconComponent = require("attachment-outlined-icon-component") /*id: 999925*/;
  var meegoOutlinedIconComponent = require("meego-outlined-icon-component") /*id: 265198*/;
  var groupCardOutlinedIcon = require("group-card-outlined-icon") /*id: 370852*/;
  var templateOutlinedIcon = require("template-outlined-icon") /*id: 94487*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var iconAiMenuTrigger = require("icon-ai-menu-trigger") /*id: 476418*/;
  var linkRecordIcon = require("link-record-icon") /*id: 572043*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var S = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "okr-outlined_svg__\\u56FE\\u5C42_1",
    "data-name": "\\u56FE\\u5C42 1",
    viewBox: "0 0 1134.553 1080",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsx("style", {
        children: ".okr-outlined_svg__cls-1{fill:currentColor}"
      })
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M564.348 33.649C287.9 33.649 62.994 258.552 62.994 535c0 276.429 224.9 501.331 501.354 501.331S1065.7 811.433 1065.7 535c0-276.448-224.9-501.351-501.352-501.351M758.2 535c0 106.883-86.972 193.831-193.855 193.831S370.493 641.887 370.493 535s86.973-193.855 193.855-193.855S758.2 428.122 758.2 535M563.952 130.51C375.368 242.215 305.881 399.883 299.42 415.341a290.56 290.56 0 0 0-3.275 231.788C252.2 619.71 205.993 583.157 160.37 534.365l-.518.485c.083-222.831 181.298-404.124 404.1-404.34M191.93 692.85c165.461 124.584 320.163 132.865 358.206 132.865 3.093 0 5.4-.061 6.9-.116q3.645.09 7.31.092c106.932 0 200.548-58.04 251.041-144.256 3.992 53.343.81 113.947-14.243 181.281a402.3 402.3 0 0 1-236.8 76.763c-167.058 0-310.79-101.803-372.414-246.629m721.95 45.519c5.567-246.933-124.68-388.326-131.368-395.423l-.069.065a290.09 290.09 0 0 0-215.871-98.69c42.481-30.612 93.909-59.313 155.578-81.755 144.859 61.612 246.7 205.358 246.7 372.438a401.97 401.97 0 0 1-54.97 203.365",
      className: "okr-outlined_svg__cls-1"
    }), reactJsxRuntimeCoreReexport.jsx("circle", {
      cx: 564.355,
      cy: 534.993,
      r: 86.498,
      className: "okr-outlined_svg__cls-1"
    })]
  });
  var downloadDoneIcon = require("download-done-icon") /*id: 388662*/;
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTaskListDefault = require("docx-task-list-default") /*id: 528264*/;
  var docTaskBlockFlags = require("doc-task-block-flags") /*id: 46259*/;
  var docxToolboxConstants_1 = require("docx-toolbox-constants_1") /*id: 992469*/;
  let Z = {
    [docBlockTypeConstants.blockTypeConstants.ORDERED]: reactJsxRuntimeCoreReexport.jsx(orderListOutlinedIcon.OrderListOutlined, {
      className: `${themeColorManagerFacade.menuIconClassName} color-i-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.BULLET]: reactJsxRuntimeCoreReexport.jsx(disorderListOutlinedIcon.DisorderListIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-i-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.TODO]: reactJsxRuntimeCoreReexport.jsx(todoOutlinedIcon.TodoOutlinedIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-i-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER]: reactJsxRuntimeCoreReexport.jsx(referenceOutlinedIcon.ReferenceOutlined, {
      className: `${themeColorManagerFacade.menuIconClassName} color-b-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.CALLOUT]: reactJsxRuntimeCoreReexport.jsx(calloutOutlinedIconComponent.CalloutOutlinedIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-o-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.GRID]: reactJsxRuntimeCoreReexport.jsx(docColumnsOutlinedIcon.DocColumnsIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-i-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.OKR]: reactJsxRuntimeCoreReexport.jsx("span", {
      className: `${themeColorManagerFacade.menuIconClassName} universe-icon`,
      children: reactJsxRuntimeCoreReexport.jsx(S, {
        width: "1em",
        height: "1em"
      })
    }),
    [docBlockTypeConstants.blockTypeConstants.OKRX]: reactJsxRuntimeCoreReexport.jsx("span", {
      className: `${themeColorManagerFacade.menuIconClassName} universe-icon`,
      children: reactJsxRuntimeCoreReexport.jsx(S, {
        width: "1em",
        height: "1em"
      })
    }),
    [docBlockTypeConstants.blockTypeConstants.POLL]: reactJsxRuntimeCoreReexport.jsx(voteOutlinedIconComponent.VoteOutlinedIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-b-600`
    }),
    [docBlockTypeConstants.blockTypeConstants.AGENDA]: reactJsxRuntimeCoreReexport.jsx(fileLinkNotesIcon.FileLinkNotesIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-i-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE]: reactJsxRuntimeCoreReexport.jsx(linkRecordOutlinedIcon.LinkRecordOutlinedIcon, {
      className: `${themeColorManagerFacade.menuIconClassName}`
    }),
    [docBlockTypeConstants.blockTypeConstants.TASK_LIST]: reactJsxRuntimeCoreReexport.jsx(tabTodoOutlinedIcon.TabTodoOutlined, {
      className: `${themeColorManagerFacade.menuIconClassName} colorful-indigo`
    }),
    [docBlockTypeConstants.blockTypeConstants.TABLE]: reactJsxRuntimeCoreReexport.jsx(dataSheetOutlinedIcon.DataSheetOutlined, {
      className: `${themeColorManagerFacade.menuIconClassName} color-t-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.SHEET]: reactJsxRuntimeCoreReexport.jsx(sheetTableOutlinedIconComponent.SheetTableOutlinedIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-g-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: reactJsxRuntimeCoreReexport.jsx(fileBitableColorfulIcon.FileBitableIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-bitable-brand`
    }),
    [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: reactJsxRuntimeCoreReexport.jsx(downloadDoneIcon.DownloadDoneIcon, {
      className: `${themeColorManagerFacade.menuIconClassName}`
    }),
    [docBlockTypeConstants.blockTypeConstants.MINDMAP]: reactJsxRuntimeCoreReexport.jsx(mindmapOutlinedIcon.MindmapOutlinedIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-w-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.IMAGE]: reactJsxRuntimeCoreReexport.jsx(imageOutlinedIcon.ImageOutlinedIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-y-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.FILE]: reactJsxRuntimeCoreReexport.jsx(attachmentOutlinedIconComponent.AttachmentOutlinedIcon, {
      className: `${themeColorManagerFacade.menuIconClassName} color-w-500`
    }),
    [docBlockTypeConstants.blockTypeConstants.MEEGO]: reactJsxRuntimeCoreReexport.jsx(meegoOutlinedIconComponent.MeegoOutlinedIcon, {
      className: `${themeColorManagerFacade.menuIconClassName}`
    }),
    [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE]: reactJsxRuntimeCoreReexport.jsx(linkRecordIcon.LinkRecordIcon, {
      className: `${themeColorManagerFacade.menuIconClassName}`
    }),
    [docBlockTypeConstants.blockTypeConstants.AI]: reactJsxRuntimeCoreReexport.jsx(iconAiMenuTrigger.AiMenuTriggerIcon, {
      className: `${themeColorManagerFacade.menuIconClassName}`
    }),
    [docBlockTypeConstants.blockTypeConstants.CHAT_CARD]: reactJsxRuntimeCoreReexport.jsx(groupCardOutlinedIcon.GroupCardOutlined, {
      className: `${themeColorManagerFacade.menuIconClassName} color-o-500`
    })
  };
  let L = {
    [docBlockTypeConstants.blockTypeConstants.ORDERED]: t("LarkCCM_Docs_Menu_NumberedList"),
    [docBlockTypeConstants.blockTypeConstants.BULLET]: t("LarkCCM_Docs_Menu_BulletedList"),
    [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER]: t("common.reference"),
    [docBlockTypeConstants.blockTypeConstants.CALLOUT]: t("CreationDoc_Docs_CalloutBlock_Tab"),
    [docBlockTypeConstants.blockTypeConstants.GRID]: t("CreationDoc_DocX_Column_Title"),
    [docBlockTypeConstants.blockTypeConstants.POLL]: t("block.poll"),
    [docBlockTypeConstants.blockTypeConstants.AGENDA]: t("LarkCCM_Docs_MeetingAgenda_Button"),
    [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE]: t("LarkCCM_Docs_SyncBlock_Button"),
    [docBlockTypeConstants.blockTypeConstants.TASK_LIST]: t("LarkCCM_Docs_TaskList_Menu"),
    [docBlockTypeConstants.blockTypeConstants.TABLE]: t("common.table"),
    [docBlockTypeConstants.blockTypeConstants.SHEET]: t("common.sheet"),
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: t("common.bitable_web_renametest"),
    [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: t("LarkCCM_Docx_Board"),
    [docBlockTypeConstants.blockTypeConstants.MINDMAP]: t("LarkCCM_Docs_Menu_MindNotes"),
    [docBlockTypeConstants.blockTypeConstants.IMAGE]: t("LarkCCM_Docs_Menu_Image"),
    [docBlockTypeConstants.blockTypeConstants.FILE]: t("LarkCCM_Docs_Menu_VideoFile"),
    [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE]: t("LarkCCM_Docs_SyncBlock_Button"),
    [docBlockTypeConstants.blockTypeConstants.AI]: t("LarkCCM_Docs_MyAi_Title"),
    [docBlockTypeConstants.blockTypeConstants.CHAT_CARD]: t("LarkCCM_Docs_Menu_GroupCard")
  };
  function x(e) {
    if (e === docBlockTypeConstants.blockTypeConstants.TODO) {
      if (docxTaskListDefault.getTaskListDefault()) {
        return t("LarkCCM_Docs_TaskList_Todo_Menu");
      } else if (docTaskBlockFlags.isFeishuTodoEnabled()) {
        return t("LarkCCM_Docs_Menu_ToDoList");
      } else {
        return t("common.checkbox");
      }
    } else {
      return L[e];
    }
  }
  function N() {
    return [reactJsxRuntimeCoreReexport.jsx(templateOutlinedIcon.TemplateOutlinedIcon, {}, docxToolboxConstants_1.bottomTemplate), t("LarkCCM_Docs_MyAi_ChooseTemplate_Button")];
  }
  require.d(exports, {
    getBlockTypeLabel: function () {
      return x;
    },
    blockTypeIconMap: function () {
      return Z;
    },
    getTemplateIconAndLabel: function () {
      return N;
    }
  });
}