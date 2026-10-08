// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'getCommentCollector'
// - Renamed export 'U' to 'commentDevName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 554914
         */
module.exports = function (module, exports, require) {
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var o = debugBrowserConfig;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  let p = o("docx_comment_event_collector");
  let f = "docx_comment_dev";
  let g = new Set([docxCommentConstants.commentActionEvents.exception, docxCommentConstants.commentActionEvents.locateCommentFailed, docxCommentConstants.commentActionEvents.linkCommentToContentFail]);
  let m = e => {
    let {
      blockManager: i,
      isSyncedReferenceBlock: r
    } = e;
    let n = e => {
      try {
        if (arrayIsArrayUtil.isArray(e)) {
          return e.map(e => docxEditorBlockMetadataUtils.getBlockInfoByRecordId(e, i));
        }
        return docxEditorBlockMetadataUtils.getBlockInfoByRecordId(e, i);
      } catch (i) {
        return e;
      }
    };
    let o = () => {
      var r;
      return (i == null ? undefined : (r = i.editorAPI) === null || r === undefined ? undefined : r.getService(diProviderCollectEvent.collectEventName, {
        optional: true
      })?.collectEvent) || docxEventCollector.wrappedCollector;
    };
    return {
      getBlockViewByRecordId: n,
      getBlockViewByBlockId: e => {
        try {
          if (arrayIsArrayUtil.isArray(e)) {
            return e.map(e => docxEditorBlockMetadataUtils.getBlockPathInfo(e, i));
          }
          return docxEditorBlockMetadataUtils.getBlockPathInfo(e, i);
        } catch (i) {
          return e;
        }
      },
      collectEvent: (e, i, n) => {
        let l = {
          ...i,
          isSyncedReferenceBlock: r
        };
        p("collect-event action = %s, callSource = %s, data = %o", e, n, l);
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp;
        }
        if (g.has(e)) {
          docxUtilityHelpers.captureException(`${e}:${l.msg}`, {
            extra: {
              subModule: "comment",
              info: docxUtilityHelpers.stringifyJsonSafe(l)
            },
            useSlardarWeb: true
          });
        }
        o()(f, {
          action: e,
          data: l,
          call_source: n
        });
      },
      collectMonitorEvent: (e, i, n) => {
        let l = {
          ...i,
          isSyncedReferenceBlock: r
        };
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp;
        }
        o()(docxCommentConstants.commentMonitorDevName, {
          action: e,
          ...l,
          call_source: n
        });
      },
      formatError: e => ({
        message: e == null ? undefined : e.message,
        err: e,
        stack: e == null ? undefined : e.stack
      }),
      formatRecordOps: e => e.map(e => ({
        blockInfo: n(e.id),
        ops: e.ops.map(e => {
          let i;
          return {
            opAction: e.subType ? "easysync" : Object.keys(e.action),
            p: e.p
          };
        })
      })),
      formatRelationChangeInfo: function (e, i, r, o = false) {
        return {
          commentId: e,
          blockInfo: o ? n(i) : i,
          reason: r
        };
      },
      collectCommentDeleted: e => {
        o()("ccm_comment_original_test_deleted_view", {
          toast_type: e ? "reaction" : "comment"
        });
      },
      collectReactionPanelViewEvent: e => {
        o()("public_reaction_panel_select_view", {
          scene: docxCommentConstants.commentMenuSourceMap[e]
        });
      },
      collectReactionPanelSelectEvent: (e, i) => {
        o()("public_reaction_panel_select_click", {
          scene: docxCommentConstants.commentMenuSourceMap[e],
          emoji_type: i,
          target: "none",
          click: "emoji"
        });
      }
    };
  };
  require.d(exports, {
    getCommentCollector: function () {
      return m;
    },
    commentDevName: function () {
      return f;
    }
  });
}