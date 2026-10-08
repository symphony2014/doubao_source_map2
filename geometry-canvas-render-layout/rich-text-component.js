// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'RichTextComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 76761
         */
module.exports = function (module, exports, require) {
  var i;
  var customGroupComponentBase = require("custom-group-component-base") /*id: 691760*/;
  var canvasTextElement = require("canvas-text-element") /*id: 719723*/;
  var richTextLayoutEngine = require("rich-text-layout-engine") /*id: 140760*/;
  i = function (t, e) {
    return (i = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function s(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function h() {
    return (h = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var l = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "richText";
      return e;
    }
    s(e, t);
    e.prototype.getDefaultAttr = function () {
      return h(h({}, t.prototype.getDefaultAttr.call(this)), {
        rich: true
      });
    };
    e.prototype.getObservedAttr = function () {
      return ["text", "textAlign", "textBaseline", "x", "y", "fontSize"];
    };
    e.prototype.onAttrChange = function (e, n, i) {
      t.prototype.onAttrChange.call(this, e, n, i);
      if (e === "text") {
        this._richObj = new richTextLayoutEngine.RichTextDocument(this.attr);
      }
    };
    e.prototype.render = function () {
      if (this._richObj) {
        var t = this._richObj.node;
        if (t.type === "text") {
          return new canvasTextElement.TextElement(h({}, this.attr));
        } else {
          this._richObj.layout();
          return t.render();
        }
      }
    };
    return e;
  }(customGroupComponentBase.CustomGroupComponent);
  exports.RichTextComponent = l;
}