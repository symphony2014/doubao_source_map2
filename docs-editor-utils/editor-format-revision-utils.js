// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AW' to 'toggleAttribute'
// - Renamed export 'FO' to 'applyFormatRevisionToSelection'
// - Renamed export 'MY' to 'applyFormatRevisionToBlocks'
// - Renamed export 'Wy' to 'applyFormatRevisions'
// - Renamed export 'd8' to 'checkAttributeInSelection'
// - Renamed export 'oJ' to 'toggleAttributeForBlocks'
// - Renamed export 'rx' to 'getTextEditorSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 63043
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var editorFormatRevisionUtils_1 = require("editor-format-revision-utils_1") /*id: 638641*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  let f = e => e.getTextEditorSelection();
  let h = e => e.getTextEditorAllSelection();
  function _(e, n, r) {
    let o = function (e) {
      let n = e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelectedBlockIfInSelection(e.id);
      let {
        zoneState: r
      } = e;
      let o = r.offsetToPoint(0);
      let i = r.offsetToPoint(r.getModelText().length - 1);
      if (n && n.type === editorTypeConstants.blockTypes.TEXT) {
        o = r.offsetToPoint(n.selection.start);
        i = r.offsetToPoint(n.selection.end);
      }
      return {
        start: o,
        end: i
      };
    }(e);
    return e.zoneState.getEntities(o).every(e => {
      if (r) {
        return e.attributes?.[n] === r;
      } else {
        return e.attributes?.[n] === "true";
      }
    });
  }
  let p = function (e, n, r, o = false) {
    let i = o ? h(e) : f(e);
    if (i.isCollapsed()) {
      return true;
    }
    let {
      schema: l
    } = e.model;
    return !e.model.zoneState.getEntities(i).filter(e => e.text !== "\n").some(e => function (e, n, r, o) {
      let l = true;
      let c = function (e, n) {
        if (n) {
          return Object.keys(n).filter(e => n[e]).find(n => {
            return e.get(n)?.attributes || e.get(n)?.lineAttributes;
          });
        }
      }(e, o.attributes);
      let u = c && e.get(c)?.attributes;
      return (!c || !u || !!(u instanceof RegExp ? u.test(n) : u(n, r || "", c))) && (!Object.keys(o.attributes).find(e => e === n) || (r ? o.attributes[n] !== r : !o.attributes[n]));
    }(l, n, r, e));
  };
  let g = (e, n, r) => Object.entries(r).every(r => {
    let [o, i] = r;
    return i === "" && n.every(n => {
      let {
        id: r,
        selection: i
      } = n;
      let l = e.getBlockViewByBlockIdNotCheck(r);
      if (!l) {
        return false;
      }
      let c = editorRangeUtilities.convertRangeWithZone(l, i);
      return l.model.zoneState.getEntities(c).filter(e => e.text !== "\n").every(e => !e.attributes[o]);
    });
  });
  let E = (e, n, r, l, c) => {
    if (n.isCollapsed()) {
      return;
    }
    let {
      model: u
    } = e;
    let {
      zoneState: a
    } = u;
    let d = new contentStructureDelta.ContentDelta({
      zoneId: u.zoneId
    });
    d.retain(editorRangeUtilities.getStartLenArray(n)[0]);
    editorFormatRevisionUtils_1.applyFormatRevision(d, a.getEntities(n), l, r);
    u.apply(d, c);
  };
  let m = (e, n, r) => {
    n.forEach(n => {
      let {
        id: o,
        selection: i
      } = n;
      let l = e.getBlockViewByBlockIdNotCheck(o);
      if (l != null) {
        l.model.setAttributes(editorRangeUtilities.convertRangeWithZone(l, i), r);
      }
    });
  };
  let b = (e, n, r) => {
    if (!e.config.get("revising")) {
      m(e, n, r);
      return;
    }
    if (g(e, n, r)) {
      return;
    }
    let o = editorFormatRevisionUtils_1.getFormatRevision(e, n, r);
    if (!Array.isArray(o)) {
      m(e, n, r);
      return;
    }
    let [u] = o;
    let a = {
      extra: {
        revisionContext: {
          revisionId: editorRevisionUtilities.stripRevIdString(u),
          type: editorRevisionConstants.diffOperationMap.FORMAT
        }
      }
    };
    n.forEach(n => {
      let {
        id: i,
        selection: l
      } = n;
      let c = e.getBlockViewByBlockIdNotCheck(i);
      if (c) {
        E(c, editorRangeUtilities.convertRangeWithZone(c, l), o, r, a);
      }
    });
  };
  let v = function (e, n, r = false) {
    let o = new Map();
    e.forEach(e => {
      let {
        blockManager: n
      } = e;
      if (!o.has(n)) {
        o.set(n, []);
      }
      o.get(n).push(e);
    });
    let i = r ? h : f;
    o.forEach((e, r) => {
      b(r, e.map(e => editorRangeUtilities.toSelectionObject(i(e))), n);
    });
  };
  let T = e => {
    let {
      blockManager: n,
      selectedBlocks: r,
      attributes: o,
      blockViews: i,
      isSelectAll: l = false
    } = e;
    if (docxFeatureFlags.isNotMobileNr()) {
      v(i, o, l);
      return;
    }
    b(n, r, o);
  };
  let C = (e, n, r) => {
    let {
      model: o,
      blockManager: i
    } = e;
    let [l, c] = n;
    r = r || o.getSelection();
    let {
      key: u,
      originValue: a,
      value: d,
      isCollapsed: f
    } = e.editor.calcToggleAttribute(l, c, r);
    if (!u || d === null || a === null) {
      if (f) {
        e.editor.setInlineStyleOverride(l, c, r);
      }
      return;
    }
    b(i, [editorRangeUtilities.toSelectionObject(r)], {
      [u]: d
    });
  };
  let k = function (e, n, r, o = false) {
    let i = [...new Set(e.slice())].filter(e => !e.model.isEmpty);
    if (!i.length || !i[0]) {
      return;
    }
    let {
      blockManager: l
    } = i[0];
    let c = i.every(e => p(e, n, r, o));
    let u = o ? h : f;
    T({
      blockManager: l,
      selectedBlocks: i.map(e => editorRangeUtilities.toSelectionObject(u(e))),
      attributes: {
        [n]: c ? "" : r
      },
      blockViews: i,
      isSelectAll: o
    });
  };
  let I = (e, n, r) => {
    let o = [...new Set(e.slice())].filter(e => !e.model.isEmpty);
    if (!o.length || !o[0]) {
      return;
    }
    let {
      blockManager: i
    } = o[0];
    let l = r || {};
    if (!r) {
      Object.entries(n).forEach(e => {
        let [n, r] = e;
        l[n] = o.every(e => p(e, n, r));
      });
    }
    let c = {};
    Object.entries(n).forEach(e => {
      let [n, r] = e;
      c[n] = l[n] ? "" : r;
    });
    T({
      blockManager: i,
      selectedBlocks: o.map(e => editorRangeUtilities.toSelectionObject(f(e))),
      attributes: c,
      blockViews: o,
      isSelectAll: false
    });
  };
  require.d(exports, {
    toggleAttribute: function () {
      return C;
    },
    applyFormatRevisionToSelection: function () {
      return b;
    },
    applyFormatRevisionToBlocks: function () {
      return v;
    },
    applyFormatRevisions: function () {
      return I;
    },
    checkAttributeInSelection: function () {
      return _;
    },
    toggleAttributeForBlocks: function () {
      return k;
    },
    getTextEditorSelection: function () {
      return f;
    }
  });
}