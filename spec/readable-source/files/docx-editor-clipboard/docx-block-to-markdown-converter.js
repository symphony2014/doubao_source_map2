// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'DocxToMarkdownConverter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 227231
         */
module.exports = function (module, exports, require) {
  var docBlockMarkdownStringifiers = require("doc-block-markdown-stringifiers") /*id: 499497*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  require("docx-error-toast-handler") /*id: 230438*/;
  var taskListSiderClasses = require("task-list-sider-classes") /*id: 604839*/;
  require("docx-block-utils_1") /*id: 138224*/;
  require("document-block-operations") /*id: 139630*/;
  require("user-environment-utils") /*id: 107339*/;
  require("docx-error-debug-utils") /*id: 899478*/;
  require("document-block-insert") /*id: 297162*/;
  require("docx-synced-block-utils") /*id: 791402*/;
  require("editor-revision-handlers") /*id: 977441*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  require("api-endpoint-constants") /*id: 403286*/;
  require("api-client-instance") /*id: 22981*/;
  require("docx-task-list-default") /*id: 528264*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  require("docx-event-collector") /*id: 477626*/;
  var docxIdParser = require("docx-id-parser") /*id: 476973*/;
  onceFunctionFactory.createOnce(() => {
    try {
      let e = /\/((?:task-list_block_module|lark-task-web-sdk-prepare|lark-task-web-sdk)(?:_es6)?)\./;
      let o = window.performance.getEntriesByType("resource").filter(o => o.initiatorType === "script" && e.test(o.name));
      let r = {};
      o.forEach(o => {
        let {
          fetchStart: n,
          responseEnd: i,
          name: a,
          transferSize: l
        } = o;
        let s = e.exec(a);
        if (s) {
          r.navigation_start = performance.timing.navigationStart;
          r[`start_fetch_${s[1]}`] = performance.timing.navigationStart + Math.round(n);
          r[`end_fetch_${s[1]}`] = performance.timing.navigationStart + Math.round(i);
          r[`${s[1]}_cached`] = Number(l === 0);
        }
      });
      return r;
    } catch (e) {
      return {};
    }
  });
  require("docx-utility-helpers") /*id: 859002*/;
  t("LarkCCM_Docs_TaskList_NoEditPerm_Toast");
  t("LarkCCM_Docs_TaskList_UpToLimit_Toast");
  t("LarkCCM_Docs_TaskList_UnknownError_Toast");
  taskListSiderClasses.siderBarSticky;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var syncedBlockUrlUtil = require("synced-block-url-util") /*id: 784437*/;
  class f {
    stringify(e) {
      return this.toMarkdown(e).join("\n");
    }
    transformBlockToMarkdown(e, o, r) {
      return this.stringify({
        selectedBlocks: [{
          id: e,
          type: docxBlockSelectionHandler_1.blockTypes.BLOCK
        }],
        getTextSelectRange: o,
        isInAcrossSelectRange: r
      });
    }
    toMarkdown(e) {
      let {
        selectedBlocks: o,
        getTextSelectRange: r,
        isInAcrossSelectRange: d,
        maxLen: p,
        ignoreBlockIds: f = [],
        ignoreBlockItem: b,
        blockLoaderMap: k,
        textLoaderMap: y = docBlockMarkdownStringifiers.markdownStringifiers,
        notTraverseTextSelectChildren: v = false,
        processDelta: E
      } = e;
      let T = editorSelectionUtilities.isSingleTextSelection(o);
      let I = (e, o) => {
        let n = editorRangeUtilities.getStartLenArray(r(o));
        return editorDeltaTextUtils.getNextDeltaText(e, this.blockManager.editorAPI.modelService, n, {
          ...this.getPlainTextOptions,
          processDelta: E
        });
      };
      let _ = [];
      let R = 0;
      for (let [e, r] of o.entries()) {
        let {
          id: n
        } = r;
        if (p && R > p) {
          break;
        }
        this.blockManager.traverse(n, r => {
          if (f.includes(r)) {
            return false;
          }
          let l = !T;
          if (v && o[e].type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
            l = false;
          }
          if ((b == null ? undefined : b(r)) || !d(r)) {
            return l;
          }
          let s = this.blockManager.getBlockModelByBlockId(r);
          if (o[e].type === docxBlockSelectionHandler_1.blockTypes.BLOCK && (k == null ? undefined : k.has(s.type))) {
            var p;
            let e = (p = k.get(s.type)) === null || p === undefined ? undefined : p(s, this.blockManager.getBlockViewByBlockIdNotCheck(r));
            if (e) {
              if (e.text) {
                _.push(e.text);
              }
              return e.traverseChildren;
            } else {
              return l;
            }
          }
          if (docBlockTypeConstants.agendaCodeTypes.includes(s.type) || docBlockTypeConstants.okrKeyResultTypes.includes(s.type)) {
            let e = I(s, r);
            if (y[s.type] && (T && editorSelectionUtilities.isSelectionFullText(o, this.blockManager) || !T)) {
              e = y[s.type].stringify(e, s, this.blockManager, this.headingModule);
            }
            _.push(e);
            R += e.length;
          } else if (s.children.length === 0) {
            let e = "";
            switch (s.type) {
              case docBlockTypeConstants.blockTypeConstants.BOOKMARK:
                if (s.snapshot.bookmark.url) {
                  e = s.snapshot.bookmark.url;
                } else if (!this.needFilterInvaildBlock) {
                  e = t("CreationDoc_DocX_CrossFilePaste_Display_no_toast");
                }
                break;
              case docBlockTypeConstants.blockTypeConstants.TASK_LIST:
                {
                  let {
                    token: o
                  } = s.snapshot;
                  if (o) {
                    e = function (e) {
                      let o = docxIdParser.parseDocxId(e);
                      let r = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.domain.applink", {});
                      return `https://${r}/client/todo/task_list?guid=${o}`;
                    }(o);
                  } else if (!this.needFilterInvaildBlock) {
                    e = t("CreationDoc_DocX_CrossFilePaste_Display_no_toast");
                  }
                  break;
                }
              case docBlockTypeConstants.blockTypeConstants.IMAGE:
                e = `[${t("common.image")}]`;
                break;
              case docBlockTypeConstants.blockTypeConstants.DIVIDER:
                e = "\n---";
                break;
              case docBlockTypeConstants.blockTypeConstants.MESSAGE:
                e = s.record.snapshot.message_url;
                break;
              case docBlockTypeConstants.blockTypeConstants.URL_PREVIEW:
                e = s.rawUrl;
                break;
              case docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE:
                {
                  let o = s.snapshot.src_block_id;
                  e = syncedBlockUrlUtil.getSyncedBlockUrl(o);
                  break;
                }
              default:
                if (!this.needFilterInvaildBlock) {
                  e = t("CreationDoc_DocX_CrossFilePaste_Display_no_toast");
                }
            }
            _.push(e);
            R += e.length;
          } else if (s.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
            let e = "";
            e = syncUrlBlockUtils.isSyncingActive() ? I(s, n) : syncedBlockUrlUtil.getSyncedBlockUrl(s.recordId);
            R += e.length;
            _.push(e);
            l = false;
          }
          return l;
        });
      }
      return _;
    }
    constructor(e, o, r, n) {
      this.blockManager = e;
      this.headingModule = o;
      this.needFilterInvaildBlock = r;
      this.getPlainTextOptions = n;
    }
  }
  require.d(exports, {
    DocxToMarkdownConverter: function () {
      return f;
    }
  });
}