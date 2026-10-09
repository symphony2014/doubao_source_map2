// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'AutoSpaceRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 359610
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var a;
  var s;
  var d;
  var u;
  var c;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var priorityConstants = require("priority-constants") /*id: 219839*/;
  var cjkLatinSpacingDetector = require("cjk-latin-spacing-detector") /*id: 279300*/;
  function b(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  u = editorPluginManager.createPriority(priorityConstants.priorityConstants.LATEST);
  c = class e extends baseRendererClass.BaseRenderer {
    _editorLineStateWillRender(n) {
      let {
        lineState: i
      } = n;
      let r = new contentStructureDelta.ContentDelta({
        zoneId: i.getZoneId()
      });
      let o = i.getModelText();
      let l = cjkLatinSpacingDetector.getSpacingIndices(o);
      let a = 0;
      for (let n of l) {
        r.retain(n - a);
        r.retain(1, {
          [e.KEY]: `${n}`
        });
        a = n + 1;
      }
      if (r.ops.length) {
        n.lineState = i.compose(r);
      }
      return i;
    }
    match(n) {
      return n === e.KEY;
    }
    render(n) {
      let {
        children: i
      } = n;
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, {
        className: `${e.KEY}`
      }, i);
    }
    constructor({
      editor: e
    }) {
      super();
      b(this, "name", "auto-space");
      b(this, "editor", undefined);
      this.editor = e;
    }
  };
  b(c, "KEY", "auto-space");
  r = c.prototype;
  o = "render";
  l = [u];
  a = Object.getOwnPropertyDescriptor(c.prototype, "render");
  s = c.prototype;
  d = {};
  Object.keys(a).forEach(function (e) {
    d[e] = a[e];
  });
  d.enumerable = !!d.enumerable;
  d.configurable = !!d.configurable;
  if ("value" in d || d.initializer) {
    d.writable = true;
  }
  d = l.slice().reverse().reduce(function (e, n) {
    return n(r, o, e) || e;
  }, d);
  if (s && d.initializer !== undefined) {
    d.value = d.initializer ? d.initializer.call(s) : undefined;
    d.initializer = undefined;
  }
  if (d.initializer === undefined) {
    Object.defineProperty(r, o, d);
  }
  let E = c;
  require.d(exports, {
    AutoSpaceRenderer: function () {
      return E;
    }
  });
}