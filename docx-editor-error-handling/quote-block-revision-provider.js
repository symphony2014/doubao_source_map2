// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'QuoteBlockRevisionProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 741147
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTextBlockModelManager = require("docx-text-block-model-manager") /*id: 568038*/;
  class c extends docxTextBlockModelManager.TextBlockModel {}
  o = "type";
  l = docBlockTypeConstants.blockTypeConstants.QUOTE;
  if ((o = typeof (n = function (e, i) {
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
  }(o, "string")) == "symbol" ? n : n + "") in c) {
    Object.defineProperty(c, o, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    c[o] = l;
  }
  require.d(exports, {
    QuoteBlockRevisionProvider: function () {
      return c;
    }
  });
}