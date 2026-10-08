// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'EditorContextFacade'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 788056
         */
module.exports = function (module, exports, require) {
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  class l {
    get blockManager() {
      return this.editorContext.blockManager;
    }
    get editorAPI() {
      return this.blockManager.editorAPI;
    }
    get selectionAPI() {
      return this.editorContext.selectionAPI;
    }
    get boundary() {
      return this.editorContext.boundary;
    }
    get fold() {
      return this.editorContext.fold;
    }
    get comment() {
      return this.editorContext.commentModule;
    }
    get message() {
      return this.editorContext.messageModule;
    }
    get undoModule() {
      return this.editorContext.undoModule;
    }
    get scroller() {
      return this.editorContext.scroller;
    }
    get profile() {
      return this.editorContext.profile;
    }
    get rect() {
      return this.editorContext.rect;
    }
    get viewPort() {
      return this.editorContext.viewport;
    }
    get vcController() {
      return this.editorContext.vcController;
    }
    get eventEmitter() {
      return this.editorContext.eventEmitter;
    }
    get rectForFixed() {
      return this.editorContext.rectForFixed;
    }
    get events() {
      return this.blockManager.events;
    }
    destroy() {}
    constructor() {
      var e;
      var n;
      var r;
      n = undefined;
      if ((e = typeof (r = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var o = r.call(e, n || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(e = "editorContext", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
      this.editorContext = dependencyInjectionContainer.get(compatibleEditorContext_1.compatibleContext);
    }
  }
  require.d(exports, {
    EditorContextFacade: function () {
      return l;
    }
  });
}