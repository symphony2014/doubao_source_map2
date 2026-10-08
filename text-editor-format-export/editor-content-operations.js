// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C$' to 'hasValidSelection'
// - Renamed export 'Js' to 'deleteCharacterAtPoint'
// - Renamed export 'PZ' to 'removeFirstLineIfEmpty'
// - Renamed export 'V' to 'moveToPreviousZone'
// - Renamed export 'jz' to 'insertSpaceAtPoint'
// - Renamed export 'nv' to 'getLeafParagraphRanges'
// - Renamed export 'tO' to 'serializeRect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 444792
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var stringSuffixTrimUtil = require("string-suffix-trim-util") /*id: 478725*/;
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var diffOperationValidators = require("diff-operation-validators") /*id: 735530*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var editorZoneDeltaOps = require("editor-zone-delta-ops") /*id: 824737*/;
  let y = e => {
    let {
      editor: t,
      point: r,
      ...n
    } = e;
    let {
      zoneId: i
    } = r;
    let l = t.getContentState();
    let o = l.getZoneState(i);
    if (!o) {
      return;
    }
    let a = o.pointToOffset(r);
    if (!a) {
      return;
    }
    let s = new contentStructureDelta.ContentDelta({
      zoneId: i
    }).retain(a).insert(" ", {
      "clientside-generating_skeleton": "true"
    });
    l.apply(s, n);
  };
  let x = e => {
    let {
      editor: t,
      point: r,
      rebaseFrom: i,
      zoneId: l = zeroConstantModule_1.versionValue,
      ...o
    } = e;
    let a = isNumberUtil.isNumber(r) ? l : r.zoneId;
    let u = t.getContentState();
    let c = isNumberUtil.isNumber(r) ? r : u.rangePointToOffset(r);
    if (!c) {
      return;
    }
    let m = u.getZoneState(a);
    if (!m || c === m.getModelText().length) {
      return;
    }
    let h = new contentStructureDelta.ContentDelta({
      zoneId: a
    }).retain(c).delete(1);
    let f = i == null ? undefined : i.get(a);
    if (f) {
      h = f.transform(h);
    }
    u.apply(h, o);
  };
  let v = e => {
    let {
      editor: t,
      zoneId: r = zeroConstantModule_1.versionValue
    } = e;
    let n = [];
    let i = t.getContentState().getZoneState(r);
    if (!i) {
      throw Error("Target zone not found when get leaf paragraphs");
    }
    let l = null;
    let o = null;
    let d = () => {
      if (l && o) {
        n.push(new editorRangeZoneClass.EditorRangeZone({
          editor: t,
          start: l,
          end: o
        }));
        m();
      }
    };
    let c = e => {
      let {
        start: n,
        end: i
      } = e.getOffset();
      let a = new editorPositionClass.EditorPosition({
        editor: t,
        zoneId: r,
        start: n,
        len: i - n
      }).toRange();
      l ||= a.start;
      o = a.end;
    };
    let m = () => {
      l = null;
      o = null;
    };
    for (let e of i.lines) {
      let t = e.getLineAttributes().toMap();
      let r = infraUtilFunctions.getProperty(i.lines, i.lines.indexOf(e) + 1);
      let n = r == null ? undefined : r.getLineAttributes().toMap();
      let l = e.getOps();
      let o = e.getModelText().trim();
      let s = i.lines.slice(-1).includes(e);
      let m = !!t.list;
      let h = !!(n == null ? undefined : n.list);
      let f = !!t.heading;
      let x = l.filter(e => !diffOperationValidators.isWildcardInsert(e) && e.insert !== "\n");
      let v = x.length === 1 && !!x[0].attributes?.aceTable;
      let g = x.length === 1 && x[0].attributes?.type === "codeblock";
      let $ = o !== "*" && !!o || v || g;
      if (f || !$) {
        d();
        continue;
      }
      c(e);
      if (!m || !h || s) {
        d();
      }
    }
    return n;
  };
  let g = e => {
    let {
      editor: t,
      zoneId: r = zeroConstantModule_1.versionValue
    } = e;
    let n = t.selection.getSelection().toPosition();
    let l = t.getContentState().getZoneState(r);
    if (n.zoneId !== r || !l) {
      return null;
    }
    let o = l.getLine(0);
    if (!o) {
      return null;
    }
    let a = stringSuffixTrimUtil.trimStringSuffix(o.getText(), "\n");
    if (n.start !== +!!o.hasLineMarker() || !n.isCollapsed()) {
      return null;
    }
    let u = new contentStructureDelta.ContentDelta({
      zoneId: r
    }).delete(o.getModelText().length);
    if (l.length() === 1) {
      u = u.insertLineMarker().insertEnter();
    }
    editorZoneDeltaOps.applyEditorDelta({
      editor: t,
      delta: new deltaSetCore.DeltaSet({
        [zeroConstantModule_1.versionValue]: u
      })
    });
    return a;
  };
  let $ = async e => {
    let {
      editor: t
    } = e;
    let r = t.selection.getSelection();
    let n = t.getContentState();
    let {
      zoneId: i
    } = r.start;
    let a = n.getZoneState(i);
    if (i === zeroConstantModule_1.versionValue || !a) {
      return;
    }
    let d = a.getLine(0);
    let u = r.toPosition();
    if (!d || u.start !== +!!d.hasLineMarker() || !u.isCollapsed()) {
      return null;
    }
    let c = t.getContent().get(zeroConstantModule_1.versionValue);
    let h = c.ops.findIndex(e => {
      let {
        attributes: t = {}
      } = e;
      return e[documentOperationConstants.operationTypes.INSERT] && t.type === "codeblock" && t.zoneId === i;
    });
    if (h === -1) {
      return;
    }
    let f = arraySumByMatcher.sumByMatcher(c.ops.slice(0, h), e => {
      return e[documentOperationConstants.operationTypes.INSERT]?.length ?? 0;
    });
    await promiseAsyncUtilities.createDelayedPromise(0);
    t.selection.setSelection({
      start: f,
      len: 1,
      zoneId: zeroConstantModule_1.versionValue
    });
    t.selection.updateBrowserSelection();
  };
  let b = e => {
    let {
      editor: t,
      selection: r
    } = e;
    return !!t.getContentState().rangeToPosition(r);
  };
  let w = e => {
    let {
      left: t,
      top: r,
      width: n,
      height: i
    } = e;
    return JSON.stringify([t, r, n, i]);
  };
  require.d(exports, {
    hasValidSelection: function () {
      return b;
    },
    deleteCharacterAtPoint: function () {
      return x;
    },
    removeFirstLineIfEmpty: function () {
      return g;
    },
    moveToPreviousZone: function () {
      return $;
    },
    insertSpaceAtPoint: function () {
      return y;
    },
    getLeafParagraphRanges: function () {
      return v;
    },
    serializeRect: function () {
      return w;
    }
  });
}