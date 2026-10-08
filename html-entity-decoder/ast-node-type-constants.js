// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hd' to 'nodeTypes'
// - Renamed export 'Pq' to 'cdataType'
// - Renamed export 'Vp' to 'tagType'
// - Renamed export 'Xe' to 'directiveType'
// - Renamed export 'Xf' to 'scriptType'
// - Renamed export 'YR' to 'isElementNode'
// - Renamed export 'bg' to 'styleType'
// - Renamed export 'fC' to 'rootType'
// - Renamed export 'hL' to 'doctypeType'
// - Renamed export 'sv' to 'commentType'
// - Renamed export 'xv' to 'textType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 87517.91a890fe.js
         * chunkId: 87517
         * moduleId: 324565
         */
module.exports = function (module, exports, require) {
  var a;
  var i;
  function u(e) {
    return e.type === a.Tag || e.type === a.Script || e.type === a.Style;
  }
  (i = a ||= {}).Root = "root";
  i.Text = "text";
  i.Directive = "directive";
  i.Comment = "comment";
  i.Script = "script";
  i.Style = "style";
  i.Tag = "tag";
  i.CDATA = "cdata";
  i.Doctype = "doctype";
  let d = a.Root;
  let n = a.Text;
  let o = a.Directive;
  let s = a.Comment;
  let c = a.Script;
  let l = a.Style;
  let m = a.Tag;
  let p = a.CDATA;
  let f = a.Doctype;
  require.d(exports, {
    nodeTypes: function () {
      return a;
    },
    cdataType: function () {
      return p;
    },
    tagType: function () {
      return m;
    },
    directiveType: function () {
      return o;
    },
    scriptType: function () {
      return c;
    },
    isElementNode: function () {
      return u;
    },
    styleType: function () {
      return l;
    },
    rootType: function () {
      return d;
    },
    doctypeType: function () {
      return f;
    },
    commentType: function () {
      return s;
    },
    textType: function () {
      return n;
    }
  });
}