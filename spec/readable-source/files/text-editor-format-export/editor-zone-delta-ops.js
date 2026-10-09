// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fo' to 'setEditorContent'
// - Renamed export 'KH' to 'applyEditorDelta'
// - Renamed export 'VV' to 'modeSkipRestore'
// - Renamed export 'Vx' to 'isAutoApplyMode'
// - Renamed export 'fR' to 'setEditorMarkdown'
// - Renamed export 'fk' to 'modeAutoApply'
// - Renamed export 'oe' to 'resetEditorZone'
// - Renamed export 'pp' to 'replaceZoneRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 824737
         */
module.exports = function (module, exports, require) {
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var editorZoneDeltaDiff = require("editor-zone-delta-diff") /*id: 212178*/;
  var markdownToEditorDeltaProcessor = require("markdown-to-editor-delta-processor") /*id: 689610*/;
  let d = e => {
    let {
      editor: t,
      delta: r,
      ...n
    } = e;
    let i = t.getContent();
    let l = t.getContentState();
    let o = editorZoneDeltaDiff.diffEditorZones(i, i.compose(r));
    l.apply(o, n);
  };
  let u = e => {
    var t;
    let {
      editor: r,
      ...o
    } = e;
    let a = (t = r.getContentState().getZoneState(zeroConstantModule_1.versionValue)) === null || t === undefined ? undefined : t.getModelText();
    if (a) {
      d({
        ...o,
        editor: r,
        delta: new deltaSetCore.DeltaSet({
          [zeroConstantModule_1.versionValue]: new contentStructureDelta.ContentDelta({
            zoneId: zeroConstantModule_1.versionValue
          }).delete(a.length).insertLineMarker().insertEnter()
        })
      });
    }
  };
  let c = e => {
    let {
      editor: t,
      value: r,
      referenceQuoteList: n,
      ...i
    } = e;
    m({
      editor: t,
      value: markdownToEditorDeltaProcessor.markdownDeltaConvert(r, {
        referenceData: n
      }),
      ...i
    });
  };
  let m = e => {
    let {
      editor: t,
      value: r,
      ...i
    } = e;
    if (!editorZoneDeltaDiff.getZoneContentDiff(t.getContent(), r)) {
      t.getContentState().setContent(r, i);
      t.selection.setSelection(new editorPositionClass.EditorPosition({
        zoneId: zeroConstantModule_1.versionValue,
        start: 0,
        len: 0,
        editor: t
      }));
    }
  };
  let h = "auto_apply";
  let f = "skip_restore_apply";
  let p = e => {
    let {
      type: t
    } = e.options;
    return t === h;
  };
  let y = e => {
    let {
      editor: t,
      range: r,
      replaceBy: n,
      ...o
    } = e;
    let {
      zoneId: a,
      start: s,
      len: d
    } = r.toPosition();
    let u = t.getContentState();
    let c = u.getZoneState(a);
    if (!c) {
      return;
    }
    let m = c.getModelText();
    let h = m.endsWith("\n") && s + d === m.length;
    let f = new contentStructureDelta.ContentDelta({
      zoneId: a
    }).retain(s).delete(h ? d - 1 : d);
    let p = n && deltaSetCore.isDeltaSet(n) ? n.get(a) : n;
    if (p) {
      f = f.concat(p).delete(+!!h);
    }
    u.apply(f, o);
  };
  require.d(exports, {
    setEditorContent: function () {
      return m;
    },
    applyEditorDelta: function () {
      return d;
    },
    modeSkipRestore: function () {
      return f;
    },
    isAutoApplyMode: function () {
      return p;
    },
    setEditorMarkdown: function () {
      return c;
    },
    modeAutoApply: function () {
      return h;
    },
    resetEditorZone: function () {
      return u;
    },
    replaceZoneRange: function () {
      return y;
    }
  });
}