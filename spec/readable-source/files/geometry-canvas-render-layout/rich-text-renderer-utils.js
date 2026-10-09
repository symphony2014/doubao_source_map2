// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WV' to 'createXulJson'
// - Renamed export 'dy' to 'createRichHtml'
// - Renamed export 'lJ' to 'createRichXul'
// - Renamed export 'pJ' to 'createRichNode'
// - Renamed export 'sR' to 'isRichType'
// - Renamed export 'tZ' to 'createRichJsx'
// - Renamed export 'ul' to 'registerJsxRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 809271
         */
module.exports = function (module, exports, require) {
  var componentRendererUtils = require("component-renderer-utils") /*id: 646116*/;
  var canvasTextElement = require("canvas-text-element") /*id: 719723*/;
  var domTextRenderNode = require("dom-text-render-node") /*id: 171909*/;
  var richTextComponent = require("rich-text-component") /*id: 76761*/;
  var s = false;
  function h(t) {
    s = true;
    componentRendererUtils.registerRenderer("jsx", componentRendererUtils.createRenderer(t));
  }
  function l(t) {
    return !!(t == null ? undefined : t.RICH_TYPE);
  }
  function u(t) {
    var e = [];
    var n = 1;
    for (; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
    return {
      RICH_TYPE: "html",
      content: t.reduce(function (t, n, i) {
        return t + n + (i >= e.length ? "" : e[i]);
      }, "")
    };
  }
  function c(t) {
    var e = [];
    var n = 1;
    for (; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
    return {
      RICH_TYPE: "xul",
      content: t.reduce(function (t, n, i) {
        return t + n + (i >= e.length ? "" : e[i]);
      }, "")
    };
  }
  function p(t) {
    return {
      RICH_TYPE: "xul",
      content: t,
      json: true
    };
  }
  function d(t, e) {
    return {
      RICH_TYPE: "jsx",
      content: t,
      ReactDOM: e
    };
  }
  function f(t) {
    var n = t.text?.RICH_TYPE;
    if (!t.rich && !n) {
      return new canvasTextElement.TextElement(t);
    }
    var i = n || t.rich;
    t.renderer = i;
    if (l(t.text)) {
      if (t.text.RICH_TYPE === "jsx" && t.text.ReactDOM && !s) {
        h(t.text.ReactDOM);
      }
      t.text = t.text.content;
    }
    if (i === "html" || i === "jsx") {
      return new domTextRenderNode.DomTextRenderNode(t);
    } else {
      return new richTextComponent.RichTextComponent(t);
    }
  }
  require.d(exports, {
    createXulJson: function () {
      return p;
    },
    createRichHtml: function () {
      return u;
    },
    createRichXul: function () {
      return c;
    },
    createRichNode: function () {
      return f;
    },
    isRichType: function () {
      return l;
    },
    createRichJsx: function () {
      return d;
    },
    registerJsxRenderer: function () {
      return h;
    }
  });
}