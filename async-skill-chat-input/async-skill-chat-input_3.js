// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'imageEditorManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 362884
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function r(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class o extends eventEmitterWrapper_1.getEventEmitter {
    constructor(...e) {
      super(...e);
      r(this, "editorRef", null);
      r(this, "bindImageEditorRef", e => {
        this.editorRef = e;
      });
      r(this, "unbindImageEditorRef", () => {
        this.editorRef = null;
      });
      r(this, "focusOnImageEditor", () => {
        if (this.editorRef) {
          this.editorRef.focus();
        }
      });
      r(this, "getEditorValue", () => {
        var e;
        var t;
        if (this.editorRef) {
          if ((t = this.editorRef) === null || t === undefined) {
            return undefined;
          } else if ((e = t.getValue) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(t);
          }
        }
      });
      r(this, "setEditorValue", e => {
        var t;
        var n;
        if ((n = this.editorRef) !== null && n !== undefined && (t = n.setValue) !== null && t !== undefined) {
          t.call(n, e);
        }
      });
      r(this, "getImageEditorValue", () => {
        if (this.editorRef) {
          return this.editorRef.getValue();
        }
      });
      r(this, "getImageEditorRefIsReady", () => +!!this.editorRef);
    }
  }
  let a = new o();
  require.d(exports, {
    imageEditorManager: function () {
      return a;
    }
  });
}