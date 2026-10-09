// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'AuthorRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 937435
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var renderAttributeWrapper = require("render-attribute-wrapper") /*id: 31592*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var c = function (e) {
    function n(n) {
      var r = n.editor;
      var o = n.authorId;
      var i = e.call(this) || this;
      i.name = "Author";
      i._editor = r;
      i._authorId = o;
      return i;
    }
    typescriptHelpers.extendClass(n, e);
    var r = n.prototype;
    r.editorWillApplyChange = function (e) {
      var r = this;
      var i = e.deltaSet;
      var a = e.options;
      if (!a.isRemote && a.extra?.shouldCollab !== false) {
        i.forEach(function (e) {
          if (e.zoneType === documentOperationConstants.structureTypes.Content) {
            e.forEach(function (e) {
              if (!!e.insert && !e.attributes?.author) {
                e.attributes = typescriptHelpers.assignObject(typescriptHelpers.assignObject({}, e.attributes), {
                  author: r._authorId
                });
              }
            });
          }
        });
      }
      return i;
    };
    r.editorWillPaste = function (e) {
      var n = this;
      var r = e.deltaSet;
      if (e.isInternalPaste) {
        var i = this._editor.clipboard.getPasteInfo();
        var a = i.pasteFrom;
        var c = i.pasteTimes;
        if (a === "cut" && c < 2) {
          return;
        }
      }
      r.forEach(function (e) {
        if (e.zoneType === documentOperationConstants.structureTypes.Content) {
          e.forEach(function (e) {
            if (e.attributes?.author) {
              e.attributes = typescriptHelpers.assignObject(typescriptHelpers.assignObject({}, e.attributes), {
                author: n._authorId
              });
            }
          });
        }
      });
    };
    r.match = function (e) {
      return e === n.KEY;
    };
    r.render = function (e) {
      var n = e.attributes;
      var r = e.children;
      e.class += " author-" + n.author;
      return r;
    };
    n.KEY = "author";
    typescriptHelpers.applyDecorators([renderAttributeWrapper.wrapRenderFunction], n.prototype, "render", null);
    return n;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    AuthorRenderer: function () {
      return c;
    }
  });
}