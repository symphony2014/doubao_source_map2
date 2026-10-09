// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 423696
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = undefined;
  (r = n = exports.ElementType ||= {}).Root = "root";
  r.Text = "text";
  r.Directive = "directive";
  r.Comment = "comment";
  r.Script = "script";
  r.Style = "style";
  r.Tag = "tag";
  r.CDATA = "cdata";
  r.Doctype = "doctype";
  exports.isTag = function (e) {
    return e.type === n.Tag || e.type === n.Script || e.type === n.Style;
  };
  exports.Root = n.Root;
  exports.Text = n.Text;
  exports.Directive = n.Directive;
  exports.Comment = n.Comment;
  exports.Script = n.Script;
  exports.Style = n.Style;
  exports.Tag = n.Tag;
  exports.CDATA = n.CDATA;
  exports.Doctype = n.Doctype;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}