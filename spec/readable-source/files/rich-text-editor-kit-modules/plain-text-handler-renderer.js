// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'PlainTextHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 685325
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var docMetadataFieldKeys = require("doc-metadata-field-keys") /*id: 999638*/;
  var a = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.name = "PlainTextHandler";
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    t.prototype.editorWillPaste = function (e) {
      var t;
      var n = e.deltaSet;
      var i = e.zoneId;
      var o = n.get(i);
      var a = o.ops[0];
      if (a && a.attributes && a.attributes.lmkr) {
        if ((t = a.attributes) === undefined) {
          t = {};
        }
        if (Object.keys(t).every(function (e) {
          return docMetadataFieldKeys.metadataFieldKeys.includes(e);
        })) {
          o.ops.shift();
        }
        return n;
      } else {
        return n;
      }
    };
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    PlainTextHandler: function () {
      return a;
    }
  });
}