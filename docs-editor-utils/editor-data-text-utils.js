// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'getAttributedTexts'
// - Renamed export 'Y' to 'sliceEditorData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 606734
         */
module.exports = function (module, exports, require) {
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  function l(e, n = [0, Infinity], r) {
    let o = editorDataManagerClass.EditorDataManager.serialize(e);
    let [l, c] = n;
    let u = 0;
    let a = 0;
    let s = "";
    let d = o.nodes.reduce((e, n) => {
      let o = n.text.length;
      let i = u + o;
      let d = u;
      if (l > i || c < d) {
        u += o;
        return e;
      }
      let f = n.text.substring(Math.max(l - u, d - u), Math.min(c - u, i - u));
      let {
        mark: h
      } = n;
      if (h && r) {
        h = r(h);
      }
      let _ = {
        text: f,
        mark: h
      };
      a += f.length;
      s += f;
      u += o;
      e.push(_);
      return e;
    }, []);
    return editorDataManagerClass.EditorDataManager.deserialize({
      alltext: s,
      size: a,
      nodes: d
    });
  }
  function c(e, n = {
    filterLocalAttributes: true,
    filterInitialAttributedText: true
  }) {
    return deltaSetChangesetConverter_1.extractAttributedTexts(e, n);
  }
  require.d(exports, {
    getAttributedTexts: function () {
      return c;
    },
    sliceEditorData: function () {
      return l;
    }
  });
}