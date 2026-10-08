// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'writingChatInputControllerInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 619607
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  function a(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
      var t;
      super(...e);
      t = this;
      a(this, "editorRef", null);
      a(this, "writingChatInputController", null);
      a(this, "bindWritingChatInputController", e => {
        this.writingChatInputController = e;
      });
      a(this, "unbindWritingChatInputController", () => {
        this.writingChatInputController = null;
      });
      a(this, "bindWritingEditorRef", e => {
        this.editorRef = e;
      });
      a(this, "unbindWritingEditorRef", () => {
        this.editorRef = null;
      });
      a(this, "focusOnWritingEditor", e => {
        if (this.editorRef) {
          this.editorRef.focus(e);
        }
      });
      a(this, "blurOnWritingEditor", () => {
        if (this.editorRef) {
          this.editorRef.blur();
        }
      });
      a(this, "updateWritingRichEditorContent", e => {
        writingSkillStore.writingSkillStore.getState().updateWritingEditorValue(e);
      });
      a(this, "getWritingRichEditorContent", () => {
        if (this.editorRef) {
          return this.editorRef.getValue();
        }
      });
      a(this, "setTemplate", e => {
        if (!this.writingChatInputController) {
          throw Error("not bind WritingChatInput controller when set template");
        }
        this.writingChatInputController.setTemplate(e);
      });
      a(this, "reset", () => {
        this.updateWritingRichEditorContent({
          data: []
        });
      });
      a(this, "updateWritingRichEditorSendDisabledState", e => {
        writingSkillStore.writingSkillStore.getState().updateSendDisabledState(e);
      });
      a(this, "setLongArticleWriting", e => {
        var t;
        if ((t = this.writingChatInputController) !== null && t !== undefined) {
          t.setLongArticleWriting(e);
        }
      });
      a(this, "addNewAttachmentFiles", function () {
        var e;
        var n = arguments.length;
        var r = Array(n);
        var i = 0;
        for (; i < n; i++) {
          r[i] = arguments[i];
        }
        if ((e = t.writingChatInputController) !== null && e !== undefined) {
          e.addNewAttachmentFiles(...r);
        }
      });
      a(this, "setAttachmentConfig", e => {
        var t;
        if ((t = this.writingChatInputController) !== null && t !== undefined) {
          t.setAttachmentConfig(e);
        }
      });
    }
  }
  let s = new o();
  require.d(exports, {
    writingChatInputControllerInstance: function () {
      return s;
    }
  });
}