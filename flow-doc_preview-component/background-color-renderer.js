// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'BackgroundColor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 43995
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var d = function (e) {
    function n(i) {
      var r = i.editor;
      var o = i.customizedAttributeKey;
      var a = e.call(this) || this;
      a.name = "BackgroundColor";
      a.attributeKey = o || n.KEY;
      r.registerCommand(a.attributeKey, function (e) {
        var n = e.value;
        r.toggleAttribute(a.attributeKey, n);
      });
      return a;
    }
    typescriptHelpers.extendClass(n, e);
    var i = n.prototype;
    i.match = function (e) {
      return e === this.attributeKey;
    };
    i.render = function (e) {
      var n = e.attributes;
      var i = e.children;
      var r = {};
      if (n[this.attributeKey]) {
        r.backgroundColor = n[this.attributeKey];
      }
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, {
        style: r
      }, i);
    };
    i.deserialize = function (e) {
      var n;
      var i = e.node;
      var r = e.deltaSet;
      var o = e.zoneId;
      if (i instanceof HTMLElement && i.style.backgroundColor) {
        return editorClipboardManager.addAttrsToDelta(r, o, ((n = {})[this.attributeKey] = i.style.backgroundColor, n), false);
      } else {
        return r;
      }
    };
    i.serialize = function (e) {
      var n = e.type;
      var i = e.node;
      var r = e.op;
      if (r && r.attributes) {
        var o = r.attributes[this.attributeKey];
        if (n === treeNodeTypes.nodeTypes.LEAF && o) {
          var a = document.createElement("span");
          a.appendChild(i);
          a.style["background-color"] = o;
          return Object.assign(e, {
            node: a
          });
        }
      }
      return e;
    };
    n.KEY = "backgroundcolor";
    typescriptHelpers.applyDecorators([editorPluginManager.createPriority(9998)], n.prototype, "render", null);
    return n;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    BackgroundColor: function () {
      return d;
    }
  });
}