// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'IndentRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 905956
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var indentDirectionConstants = require("indent-direction-constants") /*id: 277000*/;
  var editorListIndentUtil = require("editor-list-indent-util") /*id: 505604*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  require("jquery-core-library") /*id: 775150*/;
  var richTextEditorListPlugin = require("rich-text-editor-list-plugin") /*id: 656274*/;
  var h = function (e) {
    function t(t) {
      var n = t.editor;
      var i = e.call(this) || this;
      i.name = "Indent";
      i.textIndentClass = "text-indent";
      i.editor = n;
      n.registerCommand(indentDirectionConstants.indentConstants.INDENT_LEFT, function () {
        editorListIndentUtil.adjustListIndent(n, "indent", false);
      });
      n.registerCommand(indentDirectionConstants.indentConstants.INDENT_RIGHT, function () {
        editorListIndentUtil.adjustListIndent(n, "indent", true);
      });
      return i;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.match = function (e) {
      return e === t.KEY || e === "list";
    };
    n.renderLine = function (e) {
      var n = e.lineState;
      var i = e.children;
      if (n.getLineAttributes().toMap()[t.KEY]) {
        var o = e.lineClass ? " " : "";
        e.lineClass += "" + (o + this.textIndentClass);
      }
      return i;
    };
    n.editorWillDoDeleteKey = function (e) {
      var t = e.deltaSet;
      var n = e.editor;
      var i = n.getContentState().getActiveZone();
      var o = i.getZoneId();
      var r = n.selection.getSelection();
      var a = i.getLine(r.start.line);
      if (a) {
        var l = a.getLineAttributes().toMap();
        var u = r.start.offset === 1;
        var d = r.toPosition();
        var c = d.start;
        var h = d.len;
        if (!t.get(o).ops.length && l["text-indent"] && u && !h) {
          l["text-indent"] = "";
          var f = new contentStructureDelta.ContentDelta({
            zoneId: o
          }).retain(c - 1).retain(1, l);
          e.deltaSet = t.compose(f);
        }
      }
    };
    n.serialize = function (e) {
      var n = e.type;
      var i = e.lineAttributes;
      var o = e.node;
      if (n === treeNodeTypes.nodeTypes.LINE && i && i[t.KEY]) {
        if (i.list) {
          if (o.classList && o.style) {
            o.classList.add(this.textIndentClass);
            o.style["text-indent"] = "2em";
          } else {
            this.editor.error({
              message: "call hook failed: serialize. plugin: Indent",
              level: editorConstantsKeycodes.LogLevel.ERROR
            });
          }
        } else {
          var l = document.createElement("div");
          l.setAttribute("style", "text-indent: 2em");
          l.appendChild(o);
          l.classList.add(this.textIndentClass);
          e.node = l;
        }
      }
      return e;
    };
    n.deserialize = function (e) {
      var t = this;
      var n = e.node;
      var i = e.deltaSet;
      var o = e.zoneId;
      if (!(n instanceof HTMLElement)) {
        return i;
      }
      var r = Array.from(n.classList);
      var a = r.find(function (e) {
        return e.startsWith("indent");
      });
      if (r.find(function (e) {
        return e === t.textIndentClass;
      })) {
        richTextEditorListPlugin.updateDeltaSetAttributes(i, o, {
          "text-indent": "true"
        });
      }
      if (a) {
        var l = Number(a.split("indent")[1]);
        if (Number(l) >= 1) {
          richTextEditorListPlugin.updateDeltaSetAttributes(i, o, {
            list: "indent" + l
          });
        }
      }
      return i;
    };
    t.KEY = "text-indent";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1002)], t.prototype, "serialize", null);
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1001)], t.prototype, "deserialize", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    IndentRenderer: function () {
      return h;
    }
  });
}