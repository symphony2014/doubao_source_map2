// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'AutoSpacePlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 365421
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var stringMatchAllPolyfillWrapper = require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var h = stringMatchAllPolyfillWrapper;
  try {
    i = /\p{sc=Han}/gu;
    o = /\p{sc=Latin}|\p{sc=Greek}|[0-9]/gu;
  } catch (e) {
    i = /[\u4e00-\u9fa5]/g;
    o = /[a-zA-Z0-9]/g;
  }
  var f = RegExp("(" + i.source + ")(?=(" + o.source + "))|(" + o.source + ")(?=(" + i.source + "))", "gu");
  var p = function (e) {
    function t(t) {
      var n = t.editor;
      var i = e.call(this) || this;
      i.name = "AutoSpace";
      i.editor = n;
      return i;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n._editorLineStateWillRender = function (e) {
      var n;
      var i;
      var o;
      var a = e.lineState;
      var l = e.callHookFrom;
      if (l && l === "serialize") {
        return a;
      }
      var s = new contentStructureDelta.ContentDelta({
        zoneId: a.getZoneId()
      });
      var u = function (e) {
        var t;
        var n;
        var i = [];
        try {
          var o = typescriptHelpers_1.getValues(h(e, f));
          var a = o.next();
          for (; !a.done; a = o.next()) {
            var l = a.value.index;
            if (typeof l == "number") {
              i.push(l);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (a && !a.done && (n = o.return)) {
              n.call(o);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return i;
      }(a.getModelText());
      var c = 0;
      try {
        var p = typescriptHelpers_1.getValues(u);
        var v = p.next();
        for (; !v.done; v = p.next()) {
          var g = v.value;
          s.retain(g - c);
          s.retain(1, ((o = {})[t.KEY] = "" + g, o));
          c = g + 1;
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (v && !v.done && (i = p.return)) {
            i.call(p);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      if (s.ops.length) {
        e.lineState = a.compose(s);
      }
      return a;
    };
    n.match = function (e) {
      return e === t.KEY;
    };
    n.render = function (e) {
      var t = e.children;
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, {
        className: "auto-space"
      }, t);
    };
    t.KEY = "autospace";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(99999)], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    AutoSpacePlugin: function () {
      return p;
    }
  });
}