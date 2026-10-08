// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'ExtendedEditorZoneState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 132405
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  var editorDataTextUtils = require("editor-data-text-utils") /*id: 606734*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  var richTextSchemaResolverFactory = require("rich-text-schema-resolver-factory") /*id: 873026*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  let f = e => {
    e.forEach(e => {
      e.toBeReplaced = Array.isArray(e.toBeReplaced) ? e.toBeReplaced : [e.toBeReplaced];
    });
    return e.sort((e, n) => e.range[0] - n.range[0]);
  };
  class h extends editorZoneState.EditorZoneState {
    applyDeltaWithClone(e) {
      let n = this.clone();
      return n.apply(e, n.applyCallback);
    }
    split(e) {
      let n = this.clone();
      let {
        zoneId: r,
        start: i,
        len: l
      } = editorRangeUtilities.toPosition(e);
      let c = new contentStructureDelta.ContentDelta({
        zoneId: r
      }).retain(i).delete(n.totalWidth() - i - 1);
      let u = new contentStructureDelta.ContentDelta({
        zoneId: r
      }).delete(i + l);
      return [n.apply(c, n.applyCallback), n.apply(u, n.applyCallback)];
    }
    remove(e) {
      let n = this.clone();
      let {
        zoneId: r,
        start: i,
        len: l
      } = editorRangeUtilities.toPosition(e);
      let c = n.getModelText().length - 1;
      let u = l;
      if (c < l) {
        u = c;
      }
      let a = new contentStructureDelta.ContentDelta({
        zoneId: r
      }).retain(i).delete(u);
      return n.apply(a, n.applyCallback);
    }
    merge(e) {
      let n = this.clone();
      let r = deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.initialAttributedTexts, e.apool).get("0");
      let i = new contentStructureDelta.ContentDelta({
        zoneId: n.getZoneId()
      }).retain(n.totalWidth() - 1).concat(r);
      return n.apply(i, n.applyCallback);
    }
    replace(e, n, r) {
      let i = this.clone();
      let {
        zoneId: l,
        start: c,
        len: u
      } = editorRangeUtilities.toPosition(e);
      let a = new contentStructureDelta.ContentDelta({
        zoneId: l
      }).retain(c).delete(u).insert(n, r);
      return i.apply(a, i.applyCallback);
    }
    multiReplace(e, n) {
      e = f(e);
      let r = -1;
      let i = 0;
      let l = this.clone();
      for (let c of e) {
        let {
          range: e
        } = c;
        let u = c.toBeReplaced;
        if (e[0] < r) {
          throw Error("range overlap");
        }
        let a = [e[0] + i, e[1] + i];
        let {
          start: s,
          len: f
        } = editorRangeUtilities.toPosition(a);
        let h = new contentStructureDelta.ContentDelta({
          zoneId: this.zoneId
        }).retain(s).delete(f);
        u.forEach(e => {
          h.insert(e.text, e.mark);
        });
        l = l.apply(h, l.applyCallback);
        if (n) {
          n(h);
        }
        i += u.reduce((e, n) => n.text.length + e, 0) - (e[1] - e[0]);
        r = e[1];
      }
      return l;
    }
    replaceTextsWithRevision(e, n, r) {
      e = f(e);
      let i = -1;
      let l = 0;
      let c = this.clone();
      let u = editorRevisionOperations.createReplaceDeleteOp({
        revisionId: n
      });
      let s = editorRevisionOperations.createReplaceAddOp({
        revisionId: n
      });
      for (let n of e) {
        let {
          range: e
        } = n;
        let a = n.toBeReplaced;
        if (e[0] < i) {
          throw Error("range overlap");
        }
        let f = [e[0] + l, e[1] + l];
        let {
          start: h,
          len: _
        } = editorRangeUtilities.toPosition(f);
        let p = new contentStructureDelta.ContentDelta({
          zoneId: this.zoneId
        }).retain(h);
        a.forEach(e => p.insert(e.text, Object.assign({}, e.mark, s)));
        p.retain(_, u);
        c = c.apply(p, c.applyCallback);
        if (r) {
          r(p);
        }
        l += a.reduce((e, n) => n.text.length + e, 0);
        i = e[1];
      }
      return c;
    }
    toAttributeText() {
      let r = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      let {
        ops: l
      } = this.getContent();
      let c = l.length;
      let a = c - 1;
      if (l[a]?.insert === "\n" && l[a].attributes?.fixEnter) {
        c -= 1;
      }
      let s = new contentStructureDelta.ContentDelta({
        zoneId: "0",
        ops: l.slice(0, c)
      });
      let d = new deltaSetCore.DeltaSet({
        0: s
      });
      return editorDataTextUtils.getAttributedTexts(d, {
        filterLocalAttributes: !r,
        filterInitialAttributedText: true
      });
    }
    cloneEmptyState() {
      let e = new h(this.getZoneId(), super.cloneEmptyState().getContent(), richTextSchemaResolverFactory.richTextSchemaResolver);
      e._node = this._node;
      e.placeholder = this.placeholder;
      return e;
    }
    applyCallback() {}
  }
  require.d(exports, {
    ExtendedEditorZoneState: function () {
      return h;
    }
  });
}