// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'transformRecord'
// - Renamed export 't1' to 'deepCloneRecord'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 634523
         */
module.exports = function (module, exports, require) {
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var tableNodeFactory = require("table-node-factory") /*id: 612896*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docxUrlPreviewUtils_1 = require("docx-url-preview-utils_1") /*id: 293956*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  function E(e, n, r) {
    let g = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let {
      op: m,
      recordMap: _,
      tempIdToRecordIdMap: k,
      beforeOnlyMoveRecordPosition: w,
      beforeCreateNewRecord: I,
      afterCreateNewRecord: S
    } = e;
    let T = _[n];
    let {
      recursive: B = true,
      getIsOnlyRemovePosition: M
    } = g;
    let R = k.get(n);
    if (R) {
      return R;
    }
    if (M == null ? undefined : M(n)) {
      let e = w == null ? undefined : w(n);
      if (e) {
        m.replace(n, [], e);
      }
      m.replace(n, ["parent_id"], r);
      S(n, n);
      return n;
    }
    let O = g.assignRecordIdMap?.[n];
    if (isUndefinedCheck.isUndefined(T)) {
      let n = e => e ? Object.keys(e).map(n => {
        let {
          snapshot: r
        } = e[n];
        return {
          recordId: docxUtilityHelpers.maskSensitiveData(n),
          type: r == null ? undefined : r.type,
          children: r == null ? undefined : r.children
        };
      }) : {};
      let r = {
        format: e.format,
        recordIds: (e.recordIds || []).map(e => docxUtilityHelpers.maskSensitiveData(e)),
        recordMap: n(e.recordMap),
        originalRecordMap: n(e.originalRecordMap),
        stack: docxErrorDebugUtils.getErrorStack()
      };
      docxEventCollector.wrappedCollector("doc_bug_track_dev", {
        action: "clone_record_is_undefined",
        info: JSON.stringify(r)
      });
    }
    let A = m.create(o => {
      var i;
      var s;
      var m;
      let k = ((s = T.snapshot.children) === null || s === undefined ? undefined : (i = s.slice) === null || i === undefined ? undefined : i.call(s)) || [];
      let w = function (e, n, r, o) {
        let i;
        let l = e.recordMap[n].snapshot;
        if (docxTableLayoutUtils.isTableBlock(l)) {
          i = function (e, n, r, o) {
            let i = e.recordMap[n].snapshot;
            let {
              rows_id: l,
              columns_id: a,
              column_set: c,
              cell_set: u,
              revisions: s
            } = i;
            let d = tableNodeFactory.createTableNode({
              column: a.length,
              row: l.length,
              [tableLayoutConstants.blockPropertyKeys.HEADER_ROW]: i[tableLayoutConstants.blockPropertyKeys.HEADER_ROW],
              [tableLayoutConstants.blockPropertyKeys.HEADER_COL]: i[tableLayoutConstants.blockPropertyKeys.HEADER_COL]
            });
            if (s) {
              d.revisions = s;
            }
            for (let n = 0; n < a.length; ++n) {
              let i = d.columns_id[n];
              let s = a[n];
              d.column_set[i] = c[s];
              for (let n = 0; n < l.length; ++n) {
                let a = d.rows_id[n];
                let c = l[n];
                let h = u[`${c}${s}`];
                if (!h) {
                  continue;
                }
                let {
                  block_id: f,
                  merge_info: p
                } = h;
                d.cell_set[`${a}${i}`] = {
                  block_id: E(e, f, r, o),
                  merge_info: p
                };
              }
            }
            return d;
          }(e, n, r, o);
        } else if (editorTextBlockUtilities.hasTextWithApool(l)) {
          i = C(e, n, r, o);
        } else if (docxUrlPreviewUtils_1.isUrlPreviewBlock(l)) {
          i = {
            ...l,
            token: ""
          };
        } else if (l.type === docBlockTypeConstants.blockTypeConstants.WHITEBOARD) {
          i = {
            ...l,
            token: ""
          };
        } else {
          i = deepCloneWrapper_1.deepClone(l);
        }
        if (o == null ? undefined : o.shouldReplaceAuthor) {
          i.author = (o == null ? undefined : o.userId) || userEnvironmentUtils.getUserInfo().userId;
        }
        return i;
      }(e, n, o, g);
      w.children &&= [];
      try {
        w = I(w);
      } catch (e) {
        docxEventCollector.wrappedCollector("doc_bug_track_dev", {
          action: "call_beforeCreateNewRecord_error",
          info: JSON.stringify({
            type: w.type,
            parentType: (m = _[r]) === null || m === undefined ? undefined : m.snapshot?.type,
            msg: e == null ? undefined : e.message
          })
        });
        throw e;
      }
      w.parent_id = r;
      if (B && !isEmptyUtil.isEmpty(k)) {
        let n = k.map(n => E(e, n, o, g));
        w.children = n;
      }
      return w;
    }, {
      recordId: O
    });
    S(n, A);
    return A;
  }
  function C(e, n, r, i) {
    let {
      recordMap: l
    } = e;
    let a = l[n].snapshot;
    editorTextBlockUtilities.replaceInlineDisplayMarks(a.text, (n, o) => E(e, o, r, i));
    editorDataManagerClass.EditorDataManager.replaceMarkKV(a.text, inlineComponentConstants.componentType, (n, o) => {
      let l = JSON.parse(o);
      let {
        data: a
      } = l;
      if (l.type !== inlineComponentConstants.mentionTypes.FILE || !a.source_block_id) {
        return [n, o];
      }
      let c = E(e, a.source_block_id, r, i);
      return [displayTypeConstants.displayInlineBlock, c];
    });
    editorDataManagerClass.EditorDataManager.replaceMark(a.text, "objectID", (e, n) => {
      let {
        length: r
      } = n;
      return randomStringGenerator.createRandomString(r);
    });
    return a;
  }
  require.d(exports, {
    transformRecord: function () {
      return E;
    },
    deepCloneRecord: function () {
      return C;
    }
  });
}