// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'AlignRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 385107
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var selectionAttributeToggle = require("selection-attribute-toggle") /*id: 663983*/;
  var u = function (e) {
    function t(r) {
      var n = r.editor;
      var i = e.call(this) || this;
      i.name = "Align";
      n.registerCommand(t.KEY, function (e) {
        var r = e.value;
        selectionAttributeToggle.toggleAttribute(n, t.KEY, r, true);
      });
      return i;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.renderLine = function (e) {
      var r = e.lineState;
      var n = e.children;
      var i = r.getLineAttributes().toMap()[t.KEY];
      if (i) {
        e.lineClass += " align-" + i;
      }
      return n;
    };
    r.deserialize = function (e) {
      var t = e.node;
      var r = e.deltaSet;
      var n = e.zoneId;
      if (t instanceof HTMLElement) {
        var i = /(?:^| )align-(\S+)/.exec(t.className);
        var a = undefined;
        if (i) {
          a = i[1];
        }
        if (!i && ["left", "center", "right"].includes(t.style.textAlign)) {
          a = t.style.textAlign;
        }
        if (a) {
          return editorClipboardManager.transformDeltaAttrs(r, n, {
            align: a
          }, false);
        }
      }
      return r;
    };
    r.serialize = function (e) {
      var t = e.type;
      var r = e.node;
      var n = e.lineAttributes;
      var i = n && n.align;
      if (t === treeNodeTypes.nodeTypes.LINE && i) {
        if (r instanceof HTMLElement) {
          r.style["text-align"] = i;
        } else {
          var o = document.createElement("div");
          o.appendChild(r);
          o.style["text-align"] = i;
          e.node = o;
        }
      }
      return e;
    };
    t.KEY = "align";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1002)], t.prototype, "serialize", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    AlignRenderer: function () {
      return u;
    }
  });
}