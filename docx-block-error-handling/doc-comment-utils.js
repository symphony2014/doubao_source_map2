// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AA' to 'findBlockByCoords'
// - Renamed export 'Jh' to 'getCommentStyles'
// - Renamed export 'LG' to 'getFullZoneRange'
// - Renamed export 'PY' to 'getCommentBtnState'
// - Renamed export 'ZR' to 'getCommentEntities'
// - Renamed export 'bS' to 'checkBlockHierarchy'
// - Renamed export 'lY' to 'generateUniqueId'
// - Renamed export 'tU' to 'getCommentId'
// - Renamed export 'yB' to 'isInsideComment'
// - Renamed export 'zm' to 'isCodeBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 315488
         */
module.exports = function (module, exports, require) {
  var throttledArrayIntersection = require("throttled-array-intersection") /*id: 832949*/;
  var throttledArrayDiffUtil = require("throttled-array-diff-util") /*id: 222302*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  let b = [docBlockTypeConstants.blockTypeConstants.DIVIDER, docBlockTypeConstants.blockTypeConstants.TASK];
  function C(e) {
    return `flow-comment-id-${e}`;
  }
  function E(e, n) {
    let {
      isPresentationMode: o,
      isIncludeSyncedSourceBlock: r,
      isIncludeSyncedReferenceBlock: i,
      syncedRefenceRecordId: c,
      isReviewMode: l = false
    } = n;
    let a = [[`.${e}:not(.canvas-comment):not(.block-comment):not(.comment-inline-code-wrapper):not(.equation-leaf):not(.inline-component-button)`, `padding-bottom: 2px;
        padding-top: 2px;
        --abbreviation-border-image-source: var(--abbreviation-border-comment);
        --abbreviation-hover-border-image-source: var(--abbreviation-border-comment-hover);`], [`.comment-inline-code-wrapper.${e} .inline-code`, "padding-bottom: 1px;"], [`.${e}.equation-leaf:not(.comment-hl):not(.local-comment) .editor-kit-equation-view::after`], [`.${e}.inline-component-button:not(.comment-hl):not(.local-comment) .docx-button-component::after`, `
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;`]];
    let u = [[".block-comment:not(.comment-hl):not(.local-comment) .isv-block-container::after"], [".block-comment:not(.comment-hl):not(.local-comment) .calendar-event-wrapper::after"], [".block-comment:not(.comment-hl):not(.local-comment) .poll-block__container::after"], [".block-comment:not(.comment-hl):not(.local-comment) > .task-block__container::after", "bottom: -1px;"], [".block-comment:not(.comment-hl):not(.local-comment) .docx-bookmark-wrapper::after"], [".block-comment.jira_filter-block-comment:not(.comment-hl):not(.local-comment)::after", "bottom: -2px;"], ...[".block-comment:not(.image-block-comment):not(.chart_refer-block-comment):not(.chart_refer_host_perm-block-comment):not(.chart_embedded-block-comment):not(.view-block-comment):not(.file-block-comment):not(.isv-block-comment):not(.calendar_event-block-comment):not(.sheet-block-comment):not(.bitable-block-comment):not(.base_refer-block-comment):not(.iframe-block-comment):not(.whiteboard-block-comment):not(.poll-block-comment):not(.task-block-comment):not(.bookmark-block-comment):not(.jira_filter-block-comment):not(.url_preview-block-comment):not(.chat_card-block-comment)::after", ".block-comment .docx-file-block-container.docx-view-type-Card::after", ".block-comment .docx-file-block-container.docx-view-type-Preview .file-block::after", ".block-comment .spreadsheet::after", ".block-comment .chat-card-inner:after", ".block-comment .iframe-container::after", ".block-comment .whiteboard-block_container::after", ".block-comment .image-block-container::after", ".block-comment .sheet-block-select-container::after", ".block-comment .docx-url-preview-container:not(.viewType-inline) .url-web-sdk-wrapper::after"].map(e => [e, "bottom: -3px;", "padding-bottom: 1px;"])];
    if (r) {
      (u = u.map(e => {
        e[0] = `:not(.synced_source-block-comment)${e[0]}`;
        return e;
      })).push([".block-comment:not(.comment-hl):not(.local-comment) .synced-source-block-container::after", "bottom: -3px;", "padding-bottom: 1px;"]);
    }
    let s = [...a.map(e => {
      let [n, o] = e;
      return `${n} {
        border-bottom: 2px solid var(--s-color-accents-yellow);
        ${o}
      }`;
    }), ...u.map(n => {
      let [o, r] = n;
      return `.${e}${o} {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;
        height: 2px;
        background: var(--s-color-accents-yellow);
        ${r}
      }`;
    }), ` .${e}.block-comment .bitable-block-container {
      border-bottom: solid 2px var(--s-color-accents-yellow);
    }`, `.${e}.block-comment .file-card::after,
    .${e}.block-comment .iframe-container::after {
      bottom: -4px;
    }`, `.${e}.block-comment .iframe-container::after {
      left: -1px;
      right: -1px;
    }`, `.${e}.block-comment.divider-block-comment::after {
      bottom: 50% !important;
      transform: translateY(3px);
      pointer-events: none;
    }`, `.grid-column-block .${e}:not(.canvas-comment):not(.block-comment) {
      padding-bottom: 1px;
    }`, `.table .table-cell-block .text-editor:not(.translated) span.abbreviation.${e} {
      border-image-slice: 2 3;
      border-bottom-width: 2px !important;
      border-image-source: var(--abbreviation-comment-table) !important;
    }`, `.table .table-cell-block .text-editor:not(.translated) span.abbreviation.${e}:hover {
      border-image-source: var(--abbreviation-comment-table-hover) !important;
    }`, `.table .table-cell-block .text-editor:not(.translated) span.abbreviation.comment-hl.${e} {
      border-image-source: var(--abbreviation-comment-table-highlight) !important;
    }`, `.table .table-cell-block .text-editor:not(.translated) span.abbreviation.comment-hl.${e}:hover {
      border-image-source: var(--abbreviation-comment-table-highlight-hover) !important;
    }`, `.grid-column-block .docx-todo-block span.${e} {
      padding-bottom: 1px !important;
    }`];
    let d = "";
    if (!n.isInSyncedReferenceBlock || i) {
      a.forEach(e => {
        let [n] = e;
        s.push(`.${docxCommentConstants.commentSyncedContainerClass} ${n} {
        border-bottom: none;
      }`);
      });
      u.forEach(n => {
        let [o] = n;
        let r = `.${docxCommentConstants.commentSyncedContainer} .${e}${o}`;
        if (i) {
          r = `.${e} .${docxCommentConstants.commentSyncedContainer} ${o}`;
        }
        s.push(`${r} {
        background: transparent;
      }`);
      });
    } else {
      d = ` .${docxCommentConstants.commentSyncedBlockSuffix}.${docxCommentFeatureFlags.isMobileCommentRelationEnabled() && c ? c : e}`;
    }
    return [`body:not(.docx-screenshoting) .page-main .page-block${d}`, ...(o ? [`body:not(.docx-screenshoting) .presentation-mode.document .page-block${d}`] : []), ...(l ? [`body:not(.docx-screenshoting) .page-preview-container .page-block${d}`] : [])].reduce((e, n) => e.concat(s.map(e => `${n} ${e}`)), []);
  }
  function S(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.CODE;
  }
  let h = function (e, n) {
    let o = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    if (e.type === docBlockTypeConstants.blockTypeConstants.PAGE || !e.props.parentId) {
      return false;
    }
    let {
      props: {
        parentId: r
      }
    } = e;
    let i = n.getBlockViewByBlockIdNotCheck(r);
    return !!i && (i.type === docBlockTypeConstants.blockTypeConstants.CELL || (o ? h(i, n) : !![docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.VIEW, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER].includes(i.type) && h(i, n, false)));
  };
  let A = [docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT];
  let D = (e, n, o) => {
    if (e.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE || e.type === docBlockTypeConstants.blockTypeConstants.PAGE && syncedReferenceBlockUtils.getSyncedReferenceBlockModel(n.editorAPI)) {
      return {
        shouldShowBtn: false,
        tempCommentId: null
      };
    }
    if (editorTextBlockUtilities.isEditorInstance(e)) {
      let {
        isEmpty: o
      } = e.model;
      let r = null;
      let i = e.model.zoneState.getContent().ops.every(e => {
        if (e.attributes) {
          let n = Object.keys(e.attributes).find(e => e.startsWith(`${editorModuleConstantsConfig.clientsidePrefix}comment-id-`));
          if (n) {
            r = n.slice(`${editorModuleConstantsConfig.clientsidePrefix}comment-id-`.length);
            return true;
          }
        }
        return false;
      });
      let c = h(e, n);
      return {
        shouldShowBtn: !o && !i && !A.includes(e.type) && !c,
        tempCommentId: r
      };
    }
    if (b.some(n => e.type === n) && !h(e, n)) {
      let n = o.findTempCommentsByRecordId(e.record.id);
      if (n.length > 0) {
        return {
          shouldShowBtn: false,
          tempCommentId: n[0]
        };
      } else {
        return {
          shouldShowBtn: true,
          tempCommentId: null
        };
      }
    }
    return {
      shouldShowBtn: false,
      tempCommentId: null
    };
  };
  let I = e => {
    let n = e;
    let o = browserEnvironmentDetectionUtils.browserDetector.isLarkFeed ? "comment-textarea" : docxCommentConstants.commentContainerClass;
    while (n && !(n instanceof Element)) {
      n = n.parentElement;
    }
    return !!n && !!n.closest(`.${o}`);
  };
  let T = 0;
  function g() {
    let e = new Date().getTime();
    let n = Math.floor(Math.random() * 1000);
    T++;
    return `${T}-${e}-${n}`;
  }
  function M(e, n, o) {
    let r = {};
    let {
      start: i,
      end: c
    } = n;
    if (i.line === c.line && i.offset === c.offset) {
      let l = [];
      let a = [];
      let u = [];
      let {
        line: s,
        offset: d
      } = i;
      let f = d === 0;
      let m = s === 0;
      if (!m || !f) {
        let o;
        if (!m && f) {
          let n = e.getLine(s - 1).getModelText().length;
          o = {
            start: {
              ...i,
              line: s - 1,
              offset: n - 1
            },
            end: {
              ...i,
              line: s - 1,
              offset: n
            }
          };
        } else {
          o = {
            ...n,
            start: {
              ...i,
              offset: d - 1
            }
          };
        }
        let r = e.getEntities(o);
        if (r && r.length) {
          let {
            revisionKeys: e
          } = O(r[0].attributes);
          l = e;
        }
      }
      let _ = e.length() - 1;
      if (c.line !== _ || c.offset !== e.getLine(_).length() - 1) {
        let r = {
          ...n,
          end: {
            ...c,
            offset: c.offset + 1
          }
        };
        let i = e.getEntities(r);
        if (i && i.length) {
          let {
            commentKeys: e,
            revisionKeys: n
          } = O(i[0].attributes, o);
          u = e;
          a = n;
        }
      }
      r = v(P(e, i, [...l, ...u, ...a]));
    } else {
      let {
        commentKeys: c,
        revisionKeys: l
      } = O(contentDeltaUtilityFunctions.v(e, n), o);
      r = v(P(e, i, [...c, ...l]));
    }
    return r;
  }
  function P(e, n, o) {
    if ((o = Array.from(new Set(o))).length <= 1) {
      return o;
    }
    let c = e.getEntities({
      start: {
        line: 0,
        offset: 0
      },
      end: n
    });
    let l = o;
    for (let e of c.slice().reverse()) {
      let n = Object.keys(e.attributes);
      let o = throttledArrayIntersection.throttledIntersect(n, l);
      if (l.length - o.length > 0) {
        l = throttledArrayDiffUtil.throttledArrayDiff(l, o);
        break;
      }
    }
    return l;
  }
  function v(e) {
    return e.reduce((e, n) => {
      e[n] = true;
      return e;
    }, {});
  }
  function O(e, n = e => true) {
    let o = [];
    let r = [];
    for (let i of Object.keys(e)) {
      if (editorRevisionUtilities.isRevisionIdString(i)) {
        o.push(i);
      }
      if (docxCommentUtils.isValidCommentId(i) && !n(docxCommentUtils.extractPureCommentId(i))) {
        r.push(i);
      }
    }
    return {
      revisionKeys: o,
      commentKeys: r
    };
  }
  function L(e) {
    let {
      zoneState: n,
      zoneId: o
    } = e;
    let r = {
      ...n.offsetToPoint(n.totalWidth()),
      zoneId: o
    };
    return {
      zoneState: n,
      start: {
        line: 0,
        offset: 0,
        zoneId: o
      },
      end: r
    };
  }
  require.d(exports, {
    findBlockByCoords: function () {
      return function e(n, o, r, i) {
        let c = function e(n, o, r, i) {
          if (i < r) {
            return;
          }
          let c = o(n[i]);
          if ((c == null ? undefined : c.index) === 0) {
            c.index = i;
            return c;
          }
          let l = o(n[r]);
          if ((l == null ? undefined : l.index) === 0) {
            l.index = r;
            return l;
          }
          while (i - r > 1) {
            let c = Math.floor((r + i) / 2);
            let l = o(n[c]);
            if (l === undefined) {
              break;
            }
            let {
              index: a
            } = l;
            if (a === 0) {
              l.index = c;
              return l;
            }
            if (a < 0) {
              i = c;
            } else if (a > 0) {
              r = c;
            } else {
              let l = e(n, o, r, c - 1);
              l ||= e(n, o, c + 1, i);
              return l;
            }
          }
        }(n, e => {
          let n = r.getBlockClientRect(e);
          if (!n) {
            return {
              index: NaN
            };
          }
          let {
            top: o,
            height: c
          } = n;
          if (i < o) {
            return {
              index: -1
            };
          } else if (i > o + c) {
            return {
              index: 1
            };
          } else {
            return {
              index: 0
            };
          }
        }, 0, n.length - 1);
        if (!c) {
          return;
        }
        let a = n[c.index];
        let u = o.getBlockStructByBlockId(a);
        if (!u || u.type === docBlockTypeConstants.blockTypeConstants.GRID) {
          return;
        }
        let s = u.children.map(e => e.id);
        let d = s.length ? e(s, o, r, i) : undefined;
        if (d !== undefined) {
          return d;
        } else {
          return a;
        }
      };
    },
    getCommentStyles: function () {
      return E;
    },
    getFullZoneRange: function () {
      return L;
    },
    getCommentBtnState: function () {
      return D;
    },
    getCommentEntities: function () {
      return M;
    },
    checkBlockHierarchy: function () {
      return h;
    },
    generateUniqueId: function () {
      return g;
    },
    getCommentId: function () {
      return C;
    },
    isInsideComment: function () {
      return I;
    },
    isCodeBlock: function () {
      return S;
    }
  });
}