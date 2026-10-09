// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'getRevisionInfo'
// - Renamed export 't' to 'getInheritRevision'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 856858
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionSelectionUtils = require("editor-revision-selection-utils") /*id: 421120*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  let y = debugLoggerFactory.createLogger("revision-add");
  function E(e, n) {
    if (!e.config.get("revising") || n.length !== 1 || !editorSelectionUtilities.isCollapsedTextSelection(n)) {
      return null;
    }
    let c = function (e, n) {
      if (!(e == null ? undefined : e.length)) {
        return null;
      }
      let r = arrayFirstElement.getFirstElement(e);
      if (!editorSelectionUtilities.isTextSelectionType(r.type)) {
        return null;
      }
      {
        let {
          selection: e = {
            start: 0,
            end: 0
          },
          id: o
        } = r;
        if (e.start > 0) {
          return {
            ...r,
            selection: {
              start: e.start - 1,
              end: e.start
            }
          };
        }
        {
          let e = n.getBlockModelByBlockIdNotCheck(o);
          if (!e) {
            return null;
          }
          let r = e.previous || (e.parent?.isRoot ? e.parent : null);
          if (!r || !docBlockEditActions.isTextBlock(r)) {
            return null;
          }
          let s = r.zoneState.getModelText().length;
          return {
            id: r.id,
            type: editorTypeConstants.blockTypes.TEXT,
            selection: {
              start: s - 1,
              end: s
            }
          };
        }
      }
    }(n, e);
    if (c) {
      let n = editorRevisionSelectionUtils.findRevisionInBlock(e, [c], e => {
        return e.userId === userEnvironmentUtils.getUserInfo().userId && (editorRevisionUtilities.isAddOp(e.type) || editorRevisionUtilities.isReplaceAddOp(e.type, e.details?.subType));
      });
      if (n) {
        y("inherit add revision before the selection", n);
        let [e, o] = n;
        let s = editorRevisionUtilities.parseJsonSafe(o);
        let l = throttledPathFilterStringify.throttledPathStr(s, ["type", "userId", "createTime", "details"]);
        if (l == null ? undefined : l.details?.isParagraph) {
          delete l.details.isParagraph;
        }
        if ((l == null ? undefined : l.details) && !Object.keys(l.details).length) {
          delete l.details;
        }
        return [e, JSON.stringify(l)];
      }
    }
    let d = function (e) {
      if (!(e == null ? undefined : e.length)) {
        return null;
      }
      let n = lastElementHelper.getLastElement(e);
      if (editorSelectionUtilities.isTextSelectionType(n.type)) {
        let {
          selection: e = {
            start: 0,
            end: 0
          }
        } = n;
        return {
          ...n,
          selection: {
            start: e.end,
            end: e.end + 1
          }
        };
      }
      return null;
    }(n);
    if (d) {
      let n = editorRevisionSelectionUtils.findRevisionInBlock(e, [d], e => e.userId === userEnvironmentUtils.getUserInfo().userId && (editorRevisionUtilities.isAddOp(e.type) || editorRevisionUtilities.isReplaceOp(e.type)));
      if (n) {
        y("inherit add revision before the selection", n);
        let [e, r] = n;
        let i = editorRevisionUtilities.parseJsonSafe(r);
        if (i && editorRevisionUtilities.isReplaceDeleteOp(i.type, i.details?.subType)) {
          i.details.subType = editorRevisionConstants.replaceOpTypes.REPLACE_ADD;
          return [e, JSON.stringify(i)];
        } else {
          return n;
        }
      }
    }
    let [E, b] = Object.entries(editorRevisionOperations.createAddOperation({
      revisionId: e.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId()
    }))[0];
    return [E, b];
  }
  let b = (e, n) => {
    let r;
    let {
      blockManager: i
    } = e;
    let o = editorRangeUtilities.toSelectionObject(n);
    let {
      selection: s
    } = o;
    let u = e => {
      return e.userId === userEnvironmentUtils.getUserInfo().userId && (editorRevisionUtilities.isAddOp(e.type) || editorRevisionUtilities.isReplaceAddOp(e.type, e.details?.subType));
    };
    if (s.start < s.end) {
      let e = {
        start: s.start,
        end: s.start + 1
      };
      let n = editorRevisionSelectionUtils.findRevisionInBlock(i, [{
        ...o,
        selection: e
      }], u);
      if (n) {
        return n;
      }
    }
    if (s.start > 0) {
      r = {
        start: s.start - 1,
        end: s.start
      };
    } else if (s.start === 0 && s.end < editorTextBlockUtilities.getModelTextWithoutTrailing(e.model.zoneState).length) {
      r = {
        start: s.end,
        end: s.end + 1
      };
    }
    if (r) {
      let e = editorRevisionSelectionUtils.findRevisionInBlock(i, [{
        ...o,
        selection: r
      }], u);
      if (e) {
        return e;
      }
    }
    return Object.entries(editorRevisionOperations.createAddOperation({
      revisionId: i.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId()
    }))[0];
  };
  let I = (e, n) => {
    if (!e.revising) {
      return [];
    }
    let i = b(e, n);
    let o = {
      revisionId: editorRevisionUtilities.stripRevIdString(i[0]),
      type: editorRevisionUtilities.parseJsonSafe(i[1])?.type || editorRevisionConstants.diffOperationMap.ADD
    };
    return [i, o];
  };
  require.d(exports, {
    getRevisionInfo: function () {
      return I;
    },
    getInheritRevision: function () {
      return E;
    }
  });
}