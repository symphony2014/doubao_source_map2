// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BookmarkBlockModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 171625
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  function l(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class s extends docBlockModelClass.DocBlockModel {
    getText() {
      return t("CreationDoc_Docs_WebCard_CommentTitle");
    }
    constructor(...e) {
      super(...e);
      l(this, "blockManager", undefined);
      l(this, "matches", null);
      l(this, "findKeyword", undefined);
    }
  }
  l(s, "type", docBlockTypeConstants.blockTypeConstants.BOOKMARK);
  exports.BookmarkBlockModel = s;
}