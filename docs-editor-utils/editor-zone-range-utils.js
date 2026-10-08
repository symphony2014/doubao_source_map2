// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cp' to 'useEditorRange'
// - Renamed export 'ES' to 'getDeltaRange'
// - Renamed export 'IH' to 'getBlockMarkRange'
// - Renamed export 'P2' to 'createEditorRange'
// - Renamed export 'tg' to 'getConvertedRange'
// - Renamed export 'v3' to 'getEntityRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 53719
         */
module.exports = function (module, exports, require) {
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var objectMatchUtil_1 = require("object-match-util_1") /*id: 679382*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  function h(e, n) {
    let {
      zoneState: r
    } = e.model;
    let o = r.getEntities([]).filter(e => n({
      text: e.text,
      mark: e.attributes
    }));
    if (o.length === 0) {
      return editorRangeUtilities.convertRangeWithZone(e, [0, r.totalWidth() - 1]);
    }
    let i = r.pointToOffset(o[0].start) || 0;
    let l = r.pointToOffset(o[o.length - 1].end) || 0;
    return editorRangeUtilities.convertRangeWithZone(e, [i, l]);
  }
  function _(e, n) {
    let r = {
      start: {
        line: 0,
        offset: 0
      },
      end: {
        line: e.length(),
        offset: e.getLine(e.length() - 1).length()
      }
    };
    return e.getEntities(r).filter(e => {
      let r = e.attributes;
      return !!r && objectMatchUtil_1.isObjectMatch(r, n);
    });
  }
  function p(e, n) {
    let {
      zoneState: r
    } = e.model;
    let o = _(r, n);
    if (o.length === 0) {
      return null;
    } else {
      return [r.pointToOffset(o[0].start) || 0, r.pointToOffset(o[o.length - 1].end) || 0];
    }
  }
  function g(e, n) {
    let {
      zoneState: r
    } = e;
    let o = r.getContent().ops.filter(e => {
      let {
        attributes: r
      } = e;
      return !!r && n(r);
    });
    if (o.length === 0) {
      return null;
    } else {
      return [Math.min(...o.map(e => contentDeltaUtilityFunctions.B(r, e)[0])), Math.max(...o.map(e => contentDeltaUtilityFunctions.B(r, e)[1]))];
    }
  }
  function E(e, n) {
    let r;
    let {
      zoneState: o
    } = e.model;
    let l = _(o, n);
    let c = (r = new activeEditorRange.ActiveEditorRange(l.length === 0 ? {
      editor: e.editor,
      start: {
        zoneId: o.getZoneId(),
        line: 0,
        offset: 0
      },
      end: {
        zoneId: o.getZoneId(),
        line: o.length() - 1,
        offset: o.getLine(o.length() - 1).length() - 1
      },
      state: o
    } : {
      editor: e.editor,
      start: l[0].start,
      end: l[l.length - 1].end,
      state: o
    })).toPosition.bind(r);
    r.toPosition = function (e = o) {
      return c(e);
    };
    return r;
  }
  function m(e, n) {
    let [r, i] = reactCoreLibraryReexport.useState([0, 0]);
    let l = reactCoreLibraryReexport.useCallback(() => {
      let o = editorRangeUtilities.getStartLenArray(E(e, n));
      if (!deepEqualUtil_1.deepEqual(o, r)) {
        i(o);
      }
    }, [e, n, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (e && e.editor && e.struct.active) {
        let {
          zoneId: n
        } = e.model;
        e.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, l, {
          zoneId: n
        });
        l();
        return () => {
          e.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, l);
        };
      }
    }, [e, l]);
    return r;
  }
  let b = e => {
    let {
      blocks: n,
      block: r,
      mark: o,
      isAppend: i
    } = e;
    if (!n && !r || !o || Object.keys(o).length < 1) {
      return [0, 0];
    }
    let l = r || docBlockViewUtils.getBlockEdge(n || [], i);
    if (!editorTextBlockUtilities.isTextEditable(l)) {
      return [0, 0];
    }
    let c = E(l, o).toPosition();
    return [c.start, c.start + c.len];
  };
  require.d(exports, {
    useEditorRange: function () {
      return m;
    },
    getDeltaRange: function () {
      return g;
    },
    getBlockMarkRange: function () {
      return b;
    },
    createEditorRange: function () {
      return E;
    },
    getConvertedRange: function () {
      return h;
    },
    getEntityRange: function () {
      return p;
    }
  });
}