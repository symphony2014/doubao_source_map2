// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AS' to 'handleThirdPartyPasteError'
// - Renamed export 'BW' to 'hasParentBlockType'
// - Renamed export 'E$' to 'getBlockTypeDisplayName'
// - Renamed export 'H$' to 'isDescendantBlock'
// - Renamed export 'HR' to 'isCloneFailed'
// - Renamed export 'Lr' to 'findBlockElement'
// - Renamed export 'Pd' to 'isTextBlock'
// - Renamed export 'Xg' to 'hasParentOfBlockType'
// - Renamed export 'Yt' to 'insertNewLine'
// - Renamed export '_X' to 'getIframeTypeDisplayName'
// - Renamed export 'b5' to 'getBlockInsertionContext'
// - Renamed export 'bm' to 'createBlockFromSnapshot'
// - Renamed export 'g3' to 'getRootGridBlockId'
// - Renamed export 'r1' to 'findNodeByBlockType'
// - Renamed export 'y5' to 'findParentBlockByType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 138224
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var larkCcmOwnerExpiredConstants = require("lark-ccm-owner-expired-constants") /*id: 442235*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var scrollAnimationManager_1 = require("scroll-animation-manager_1") /*id: 895081*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var iframeLayoutConstants = require("iframe-layout-constants") /*id: 147199*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  require("ordered-block-utils") /*id: 5008*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  async function C(e) {
    var n;
    let r;
    let {
      blockManager: o,
      selectionAPI: i,
      viewport: l,
      blockId: c,
      isNextBlock: u = true,
      needFocus: a = true,
      skipUndoCompose: d,
      parentBlockId: _,
      editable: g
    } = e;
    if (!o.config.editable && !g) {
      return;
    }
    let E = o.getBlockModelByBlockId(c);
    if (syncUrlBlockUtils.isSyncingActive() && E.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
      if (!E.children.length) {
        return;
      }
      E = E.children[E.children.length - 1];
    }
    let m = _ || ((n = E.parent) === null || n === undefined ? undefined : n.record.id);
    if (E.type === docBlockTypeConstants.blockTypeConstants.CELL) {
      docxEventCollector.wrappedCollector("doc_bug_track_mobile", {
        action: "insert_text_to_table",
        info: JSON.stringify({
          stack: Error().stack
        })
      });
      return;
    }
    if (!m) {
      return;
    }
    let T = u ? E.position + 1 : E.position;
    await o.applyTransaction("insertNewLine", e => {
      [r] = documentBlockOperations.insertNewChildren(e, m, T, [o.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT)]);
      o.layoutManager.getReconciler().debouncePaint();
    }, {
      undoable: !d
    });
    let C = (E.parent || E).children[T].id;
    if (o.config.get("translated") && r) {
      let e = o.getBlockModelsByRecordId(r)[0];
      if (e) {
        C = e.id;
      }
    }
    if (a && C) {
      await o.layoutManager.renderNodeById(C);
      await l.scrollToBlock(C, async e => {
        let n = o.getBlockViewByBlockIdNotCheck(C);
        let r = l.scrollBlockIntoView(n);
        let c = o.config.get("scroller");
        if (r === false && !scrollAnimationManager_1.isElementInViewport({
          scroller: c,
          scrollTop: e
        })) {
          scrollAnimationManager_1.setScrollPosition({
            scroller: c,
            scrollTop: e
          });
        }
        return Promise.resolve().then(() => i.setSelection([{
          type: editorTypeConstants.blockTypes.TEXT,
          id: C,
          selection: {
            start: 0,
            end: 0
          }
        }]));
      });
    }
    return C;
  }
  function k(e, n) {
    let r = e.getBlockModelByBlockId(n);
    while (r) {
      let {
        parent: e
      } = r;
      if (!e || !docBlockTypeConstants.gridTableOkTypes.includes(e.type) || e.type === docBlockTypeConstants.blockTypeConstants.PAGE) {
        break;
      }
      r = r.parent;
    }
    return r.id;
  }
  let I = ["reference"];
  function R(e, n, r) {
    let o = Array.isArray(r) ? r : [r];
    let i = n.getBlockStructByBlockId(e) || null;
    return docBlockTreeUtils.hasParentOfType(i, o);
  }
  function y(e, n, r) {
    let o = n.getBlockModelByBlockId(e);
    return docBlockTreeUtils.findNodeByType(o, r);
  }
  function O(e) {
    return {
      [docBlockTypeConstants.blockTypeConstants.HEADING1]: t("LarkCCM_Docs_block_Heading1", undefined, "heading1"),
      [docBlockTypeConstants.blockTypeConstants.HEADING2]: t("LarkCCM_Docs_block_Heading2", undefined, "heading2"),
      [docBlockTypeConstants.blockTypeConstants.HEADING3]: t("LarkCCM_Docs_block_Heading3", undefined, "heading3"),
      [docBlockTypeConstants.blockTypeConstants.HEADING4]: t("LarkCCM_Docs_block_Heading4", undefined, "heading4"),
      [docBlockTypeConstants.blockTypeConstants.HEADING5]: t("LarkCCM_Docs_block_Heading5", undefined, "heading5"),
      [docBlockTypeConstants.blockTypeConstants.HEADING6]: t("LarkCCM_Docs_block_Heading6", undefined, "heading6"),
      [docBlockTypeConstants.blockTypeConstants.HEADING7]: t("LarkCCM_Docs_block_Heading7", undefined, "heading7"),
      [docBlockTypeConstants.blockTypeConstants.HEADING8]: t("LarkCCM_Docs_block_Heading8", undefined, "heading8"),
      [docBlockTypeConstants.blockTypeConstants.HEADING9]: t("LarkCCM_Docs_block_Heading9", undefined, "heading9"),
      [docBlockTypeConstants.blockTypeConstants.HEADINGN]: "headingn",
      [docBlockTypeConstants.blockTypeConstants.QUOTE]: t("LarkCCM_Docs_block_Quote", undefined, "quote"),
      [docBlockTypeConstants.blockTypeConstants.LINK]: "link",
      [docBlockTypeConstants.blockTypeConstants.IMAGE]: t("sheet.smartable_attachment_field_default_name"),
      [docBlockTypeConstants.blockTypeConstants.BULLET]: t("LarkCCM_Docs_block_BulletedList", undefined, "bullet"),
      [docBlockTypeConstants.blockTypeConstants.ORDERED]: t("LarkCCM_Docs_block_NumberedList", undefined, "ordered"),
      [docBlockTypeConstants.blockTypeConstants.DIVIDER]: t("LarkCCM_Docs_block_Divider", undefined, "divider"),
      [docBlockTypeConstants.blockTypeConstants.CODE]: t("LarkCCM_Docs_block_Code", undefined, "code"),
      [docBlockTypeConstants.blockTypeConstants.PAGE]: "page",
      [docBlockTypeConstants.blockTypeConstants.PLAYGROUND]: "playground",
      [docBlockTypeConstants.blockTypeConstants.REFERENCE]: "reference",
      [docBlockTypeConstants.blockTypeConstants.SELECTION]: "selection",
      [docBlockTypeConstants.blockTypeConstants.SNAPSHOT]: "snapshot",
      [docBlockTypeConstants.blockTypeConstants.TOPIC]: "topic",
      [docBlockTypeConstants.blockTypeConstants.TEXT]: t("LarkCCM_Docs_block_text", undefined, "text"),
      [docBlockTypeConstants.blockTypeConstants.GRID]: t("LarkCCM_Docs_block_Column", undefined, "grid"),
      [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN]: "grid_column",
      [docBlockTypeConstants.blockTypeConstants.CALLOUT]: t("LarkCCM_Docs_block_Callout", undefined, "callout"),
      [docBlockTypeConstants.blockTypeConstants.TODO]: t("LarkCCM_Docs_block_ToDoList", undefined, "todo"),
      [docBlockTypeConstants.blockTypeConstants.USER]: "user",
      [docBlockTypeConstants.blockTypeConstants.MENTION_DOC]: "mention_doc",
      [docBlockTypeConstants.blockTypeConstants.CHAT_CARD]: t("common.chat"),
      [docBlockTypeConstants.blockTypeConstants.ASSOC_ROOT]: "assoc_root",
      [docBlockTypeConstants.blockTypeConstants.ASSOC_NODE]: "assoc_node",
      [docBlockTypeConstants.blockTypeConstants.DIAGRAM]: t("LarkCCM_Docs_block_Flowchart", undefined, "diagram"),
      [docBlockTypeConstants.blockTypeConstants.TABLE]: t("LarkCCM_Docs_block_Table", undefined, "table"),
      [docBlockTypeConstants.blockTypeConstants.CELL]: "table_cell",
      [docBlockTypeConstants.blockTypeConstants.IFRAME]: t("LarkCCM_Docs_block_Embeds", undefined, "iframe"),
      [docBlockTypeConstants.blockTypeConstants.SHEET]: t("common.sheet"),
      [docBlockTypeConstants.blockTypeConstants.BITABLE]: t("common.bitable_web_renametest"),
      [docBlockTypeConstants.blockTypeConstants.BASE_REFER]: t("common.bitable_web_renametest"),
      [docBlockTypeConstants.blockTypeConstants.FILE]: t("CreationDoc_DocX_Menu_Insert_video_option"),
      [docBlockTypeConstants.blockTypeConstants.UML]: t("LarkCCM_Docs_block_UMLDiagram", undefined, "uml"),
      [docBlockTypeConstants.blockTypeConstants.FLOWCHART]: t("LarkCCM_Docs_block_Flowchart", undefined, "flowchart"),
      [docBlockTypeConstants.blockTypeConstants.VIEW]: "view",
      [docBlockTypeConstants.blockTypeConstants.REMINDER]: "reminder",
      [docBlockTypeConstants.blockTypeConstants.MINDMAP]: t("mindnote.block_menu_item_name"),
      [docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED]: t("CreationDoc_Sheets_Graph_GraphTittle"),
      [docBlockTypeConstants.blockTypeConstants.CHART_REFER]: t("CreationDoc_Sheets_Graph_GraphTittle"),
      [docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM]: t("CreationDoc_Sheets_Graph_GraphTittle"),
      [docBlockTypeConstants.blockTypeConstants.JIRA_FILTER]: t("doc.jira.jira_filter"),
      [docBlockTypeConstants.blockTypeConstants.OKR]: t("LarkCCM_Docs_block_OKR", undefined, "OKR"),
      [docBlockTypeConstants.blockTypeConstants.OKRX]: "New OKR",
      [docBlockTypeConstants.blockTypeConstants.POLL]: t("LarkCCM_Docs_block_Poll", undefined, "Poll"),
      [docBlockTypeConstants.blockTypeConstants.BOOKMARK]: t("LarkCCM_Docs_block_WebCard", undefined, "bookmark"),
      [docBlockTypeConstants.blockTypeConstants.AI]: t("LarkCCM_Docs_MyAIBlock_AITemplate_Title", undefined, "AI"),
      [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: t("LarkCCM_Docx_Whiteboard"),
      [docBlockTypeConstants.blockTypeConstants.ISV]: t("LarkCCM_DocVerse_Menu"),
      [docBlockTypeConstants.blockTypeConstants.TASK]: t("LarkCCM_Docs_TaskList_Todo_Menu"),
      [docBlockTypeConstants.blockTypeConstants.TASK_LIST]: t("LarkCCM_Docs_TaskList_Menu"),
      [docBlockTypeConstants.blockTypeConstants.AGENDA]: t("LarkCCM_Docs_MeetingAgenda_Button"),
      [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM]: t("LarkCCM_Docs_MeetingAgenda_Button"),
      [docBlockTypeConstants.blockTypeConstants.FOLDER_MANAGER]: t("LarkCCM_NewCM_Folder_Menu"),
      [docBlockTypeConstants.blockTypeConstants.WIKI_CATALOG]: t("CreationDoc_Wiki_SubpageTOC_BlockTitle"),
      [docBlockTypeConstants.blockTypeConstants.WIKI_RECENT]: t("LarkCCM_Wiki_WorkspaceUpdates_Menu"),
      [docBlockTypeConstants.blockTypeConstants.MEEGO]: t("LarkCCM_FeishuProject_Common"),
      [docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT]: t("LarkCCM_Docs_CalendarEvent_Title"),
      [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE]: t("LarkCCM_Docs_SyncBlock_Button"),
      [docBlockTypeConstants.blockTypeConstants.URL_PREVIEW]: t("LarkCCM_Docx_IM_MessageLink_Message_Text")
    }[e];
  }
  function S(e) {
    return {
      [iframeLayoutConstants.IframeTypes.airtable]: t("common.Airtable"),
      [iframeLayoutConstants.IframeTypes.bilibili]: t("common.bilibili"),
      [iframeLayoutConstants.IframeTypes.bilibiliBv]: t("common.bilibili"),
      [iframeLayoutConstants.IframeTypes.bilibiliBp]: t("common.bilibili"),
      [iframeLayoutConstants.IframeTypes.bilibilip]: t("common.bilibili"),
      [iframeLayoutConstants.IframeTypes.youku]: t("common.youku"),
      [iframeLayoutConstants.IframeTypes.youtube]: t("common.YouTube"),
      [iframeLayoutConstants.IframeTypes.autonavi]: t("block.iframe_map_autonavi"),
      [iframeLayoutConstants.IframeTypes.baidumap]: t("block.iframe_map_baidu"),
      [iframeLayoutConstants.IframeTypes.gmaps]: t("block.iframe_map_gmaps"),
      [iframeLayoutConstants.IframeTypes.xigua]: t("block.iframe_xigua"),
      [iframeLayoutConstants.IframeTypes.tiktok]: "TikTok",
      [iframeLayoutConstants.IframeTypes.douyin]: t("LarkCCM_Docs_Menu_Embeds_Douyin"),
      [iframeLayoutConstants.IframeTypes.iqiyi]: t("LarkCCM_Docs_Embeds_iQiyi_Menu"),
      [iframeLayoutConstants.IframeTypes.ByteJimeng]: t("LarkCCM_Docs_Embeds_Jimeng_Menu"),
      [iframeLayoutConstants.IframeTypes.figma]: t("common.figma"),
      [iframeLayoutConstants.IframeTypes.modao]: t("common.modao"),
      [iframeLayoutConstants.IframeTypes.jcode]: t("LarkCCM_Docx_BlockName_Jcode"),
      [iframeLayoutConstants.IframeTypes.canva]: t("common.canva"),
      [iframeLayoutConstants.IframeTypes.codepen]: t("common.codepen"),
      [iframeLayoutConstants.IframeTypes.jinshuju]: t("common.jinshuju"),
      [iframeLayoutConstants.IframeTypes.feishu_survey]: t("common.feishu_survey"),
      [iframeLayoutConstants.IframeTypes.lark_survey]: t("common.lark_survey")
    }[e];
  }
  function A(e) {
    let n = function (e) {
      switch (e.type) {
        case docBlockTypeConstants.blockTypeConstants.FILE:
          return e.file;
        case docBlockTypeConstants.blockTypeConstants.IMAGE:
          return e.image;
        case docBlockTypeConstants.blockTypeConstants.CHAT_CARD:
          return {
            token: e.chat_token,
            status: e.status
          };
        default:
          return e;
      }
    }(e);
    return (n == null ? undefined : n.status) === docBlockTypeConstants.cloneStatusConstants.CLONE_FAILED;
  }
  function L(e, n, r) {
    let o = e.structService.getBlockStructByBlockId(n) || null;
    while (o && o.type !== r) {
      let {
        parent: e
      } = o;
      o = e || null;
    }
    return o;
  }
  function N(e, n, r, s) {
    let {
      structService: f,
      dataService: h
    } = e;
    if (f.hasBlockStructByBlockId(n)) {
      h.applyTransaction("thirdPartyPasteError", e => {
        var r;
        var u;
        var a;
        if (!n) {
          return;
        }
        let s = f.getBlockStructByBlockId(n);
        if ((r = s.parent) === null || r === undefined ? undefined : r.children.find(e => e.id === n)) {
          e.removeChildren(s.parent.recordId, [s.recordId]);
        } else if (s.parent) {
          let {
            snapshot: n
          } = s.parent;
          let r = n.text;
          if (Object.values(r.apool.numToAttrib).some(e => e[0] === displayTypeConstants.displayInlineBlock)) {
            let n = (a = docxEditorCore.getBlockModel(s.parent)) === null || a === undefined ? undefined : (u = a.zoneState) === null || u === undefined ? undefined : u.getEntities([[displayTypeConstants.displayInlineBlock, s.recordId]]);
            if (n == null ? undefined : n[0]) {
              let {
                start: {
                  offset: o
                }
              } = n[0];
              let u = deltaSetChangesetConverter_1.attributedTextToDeltaSet(r.initialAttributedTexts, r.apool).get(editorModuleConstantsConfig.defaultVersion).compose(new contentStructureDelta.ContentDelta().retain(o).delete(1));
              let a = deltaSetChangesetConverter_1.extractAttributedTexts(new deltaSetCore.DeltaSet().add(editorModuleConstantsConfig.defaultVersion, u));
              e.replace(s.parent.record.id, ["text"], a);
            }
          }
        }
      });
    }
    let _ = (s == null ? undefined : s.code) === larkCcmOwnerExpiredConstants.ownerExpiredId ? larkCcmOwnerExpiredConstants.ownerExpiredTooltip : r;
    let p = Error(_);
    let m = s ? docxErrorDebugUtils.createErrorObject(s, p) : docxErrorDebugUtils.createErrorObject(p);
    docxErrorToastHandler.showErrorWithDebug({
      content: _,
      errorContext: m
    });
  }
  function B(e, n) {
    let r = n.getBlockModelByBlockId(e);
    let {
      parent: o
    } = r;
    let {
      position: i
    } = r;
    let l = r;
    while (o && n.getBlockViewByBlockId(o.id).type === docBlockTypeConstants.blockTypeConstants.VIEW) {
      l = o;
      i = o.position;
      o = o.parent;
    }
    return {
      parent: o,
      position: i,
      target: l
    };
  }
  function D(e, n) {
    let r = false;
    let o = n;
    while (o) {
      if (o.type === e) {
        r = true;
        break;
      }
      o = o.parent;
    }
    return r;
  }
  function w(e, n, r) {
    return e !== n && r.getBlockPath(n).includes(e);
  }
  function M(e) {
    return !!e && !!e.isTextBlock;
  }
  let P = function (e, n = {}) {
    let {
      type: r,
      ignoreQuery: o
    } = n;
    if (o && e.closest(o)) {
      return null;
    }
    let i = r ? `.docx-${r}-block` : "";
    let l = `${i}.block`;
    return e.closest(l);
  };
  require.d(exports, {
    handleThirdPartyPasteError: function () {
      return N;
    },
    hasParentBlockType: function () {
      return D;
    },
    getBlockTypeDisplayName: function () {
      return O;
    },
    isDescendantBlock: function () {
      return w;
    },
    isCloneFailed: function () {
      return A;
    },
    findBlockElement: function () {
      return P;
    },
    isTextBlock: function () {
      return M;
    },
    hasParentOfBlockType: function () {
      return R;
    },
    insertNewLine: function () {
      return C;
    },
    getIframeTypeDisplayName: function () {
      return S;
    },
    getBlockInsertionContext: function () {
      return B;
    },
    createBlockFromSnapshot: function () {
      return function e(n) {
        let {
          op: r,
          blockId: o,
          blockManager: i,
          recursive: l,
          parentRecordId: c
        } = n;
        let u = i.getBlockModelByBlockId(o);
        let a = i.getRecordByBlockId(o);
        if (l) {
          for (let n = 0, o = u.children.length; n < o; n++) {
            let o = u.children[n];
            let l = e({
              op: r,
              blockId: o.id,
              blockManager: i,
              recursive: !I.includes(o.record.snapshot.type),
              parentRecordId: c
            });
            a.snapshot.children[n] = l;
          }
        }
        if (editorTextBlockUtilities.hasTextWithApoolSimple(a.snapshot)) {
          editorTextBlockUtilities.replaceInlineDisplayMarks(a.snapshot.text, (e, n) => {
            let {
              snapshot: o
            } = i.getRecord(n);
            return documentBlockOperations.createSingleBlock(r, c, o);
          });
        }
        let s = i.createSnapshot(a.snapshot.type, a.snapshot);
        return documentBlockOperations.createSingleBlock(r, c, s);
      };
    },
    getRootGridBlockId: function () {
      return k;
    },
    findNodeByBlockType: function () {
      return y;
    },
    findParentBlockByType: function () {
      return L;
    }
  });
}