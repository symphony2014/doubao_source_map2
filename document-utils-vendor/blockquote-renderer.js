// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'BlockquoteRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 954935
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var selectionAttributeToggle = require("selection-attribute-toggle") /*id: 663983*/;
  var colorThemeConstants = require("color-theme-constants") /*id: 561108*/;
  function d() {
    return {
      paddingLeft: "12px",
      color: "var(--text-caption, " + colorThemeConstants.secondaryTextColor + ")",
      borderLeft: "2px solid var(--udtoken-quote-bar-bg, " + colorThemeConstants.borderColor + ")"
    };
  }
  var f = reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.DivSymbol, {
    style: d(),
    className: "blockquote"
  });
  var A = function (e) {
    function t(r) {
      var n = r.editor;
      var i = e.call(this) || this;
      i.name = "Blockquote";
      n.registerCommand(t.KEY, function (e) {
        var r = e.value;
        selectionAttributeToggle.toggleAttribute(n, t.KEY, r, true);
      });
      return i;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.renderWrapper = function () {
      return f;
    };
    r.match = function (e) {
      return e === t.KEY;
    };
    r.editorWillDoReturnKey = function (e) {
      var r = e.delta;
      var n = e.editor;
      var i = n.getContentState().getActiveZone();
      var o = i.getZoneId();
      var a = n.selection.getSelection();
      var s = a.toPosition();
      var l = s.start;
      var c = s.len;
      var h = i.getLine(a.start.line);
      if (h) {
        var d = h.getLineAttributes().toMap();
        var f = h.isTextEmpty();
        if (!r.ops.length && d[t.KEY] && !c) {
          var A = new contentStructureDelta.ContentDelta({
            zoneId: o
          });
          if (f) {
            d.blockquote = "";
            A.retain(l - 1).retain(1, d);
          } else {
            A.retain(l).insertEnter().insertLineMarker(d);
          }
          e.delta = r.compose(A);
        }
      }
    };
    r.editorWillDoDeleteKey = function (e) {
      var r = e.deltaSet;
      var n = e.editor;
      var i = n.getContentState().getActiveZone();
      var o = i.getZoneId();
      var a = n.selection.getSelection();
      var s = i.getLine(a.start.line);
      if (s) {
        var l = s.getLineAttributes().toMap();
        var c = a.toPosition();
        var h = c.start;
        var d = c.len;
        var f = a.start.offset === 1;
        if (!r.get(o).ops.length && l[t.KEY] && f && !d) {
          l[t.KEY] = "";
          var A = new contentStructureDelta.ContentDelta({
            zoneId: o
          }).retain(h - 1).retain(1, l);
          e.deltaSet = r.compose(A);
        }
      }
    };
    r.serialize = function (e) {
      return editorClipboardManager.wrapLineAttributes(e, {
        tagAttribute: t.KEY,
        wrapNodesInfo: [{
          tag: t.KEY,
          style: typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, d()), {
            margin: "0px",
            paddingLeft: "0px",
            color: colorThemeConstants.secondaryTextColor,
            borderLeft: "2px solid " + colorThemeConstants.borderColor
          })
        }]
      });
    };
    r.deserialize = function (e) {
      var r = e.node;
      var n = e.deltaSet;
      var i = e.zoneId;
      if (r instanceof HTMLElement) {
        var a = r.className;
        var s = r.tagName;
        if (a.indexOf(t.KEY) > -1 || s === "BLOCKQUOTE") {
          return editorClipboardManager.transformDeltaAttrs(n, i, {
            blockquote: "true"
          });
        }
      }
      return n;
    };
    t.KEY = "blockquote";
    t.isFormatter = true;
    t.isLineAttribute = true;
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1003)], t.prototype, "serialize", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    BlockquoteRenderer: function () {
      return A;
    }
  });
}