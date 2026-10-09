// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'videoEditorManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: video-skill-chat-input.c992cca0.js
         * chunkId: 54640
         * moduleId: 533338
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function l(e, t, n) {
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
  class r extends eventEmitterWrapper_1.getEventEmitter {
    constructor(...e) {
      super(...e);
      l(this, "editorRef", null);
      l(this, "bindVideoEditorRef", e => {
        this.editorRef = e;
      });
      l(this, "unbindVideoEditorRef", () => {
        this.editorRef = null;
      });
      l(this, "focusOnVideoEditor", () => {
        if (this.editorRef) {
          this.editorRef.focus();
        }
      });
      l(this, "getEditorValue", () => {
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
      l(this, "setEditorValue", e => {
        var t;
        var n;
        if ((n = this.editorRef) !== null && n !== undefined && (t = n.setValue) !== null && t !== undefined) {
          t.call(n, e);
        }
      });
      l(this, "getVideoEditorValue", () => {
        if (this.editorRef) {
          return this.editorRef.getValue();
        }
      });
      l(this, "getVideoEditorRefIsReady", () => +!!this.editorRef);
    }
  }
  let o = new r();
  require.d(exports, {
    videoEditorManager: function () {
      return o;
    }
  });
}