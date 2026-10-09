// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxLayoutChangeEventManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 319980
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxCatalogueManager = require("docx-catalogue-manager") /*id: 895177*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var resizeObserverUtil = require("resize-observer-util") /*id: 976180*/;
  var layoutEventTypes = require("layout-event-types") /*id: 580889*/;
  function c(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class d {
    destroy() {
      this.removeListener.forEach(e => {
        if (typeof e == "function") {
          e();
        }
      });
    }
    constructor(e) {
      c(this, "catalogue", undefined);
      c(this, "comment", undefined);
      c(this, "content", undefined);
      c(this, "editor", undefined);
      c(this, "eventEmitter", new docxEditorEventConstantsAndManager.EventEmitter());
      c(this, "removeListener", []);
      c(this, "initEvent", () => {
        var e = this;
        let i = function () {
          var i = arguments.length;
          var r = Array(i);
          var n = 0;
          for (; n < i; n++) {
            r[n] = arguments[n];
          }
          e.catalogue.emitLayoutChange(...r);
        };
        docxEditorEventConstantsAndManager.globalEventBus.on(docxCatalogueManager.catalogueEventTypes.CATALOGUE_RECT_CHANGE, i);
        this.removeListener.push(() => docxEditorEventConstantsAndManager.globalEventBus.removeListener(docxCatalogueManager.catalogueEventTypes.CATALOGUE_RECT_CHANGE, i));
        let r = function () {
          var i = arguments.length;
          var r = Array(i);
          var n = 0;
          for (; n < i; n++) {
            r[n] = arguments[n];
          }
          e.comment.emitLayoutChange(...r);
        };
        docxEditorEventConstantsAndManager.globalEventBus.on(layoutEventTypes.layoutEventTypes.DOC_COMMENT_SHOW_CHANGE_TRANSITION_END, r);
        this.removeListener.push(() => docxEditorEventConstantsAndManager.globalEventBus.removeListener(layoutEventTypes.layoutEventTypes.DOC_COMMENT_SHOW_CHANGE_TRANSITION_END, r));
        let c = () => {
          this.comment.isNeedUpdateCache = true;
          this.catalogue.isNeedUpdateCache = true;
        };
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          window.addEventListener("resize", c);
          this.removeListener.push(() => {
            window.removeEventListener("resize", c);
          });
        } else {
          this.removeListener.push(resizeObserverUtil.getResizeObserver().onResize(c));
        }
        this.initEmitLayoutChange();
      });
      c(this, "initEmitLayoutChange", () => {
        let e = this.catalogue.onLayoutChange(e => {
          this.eventEmitter.emit(layoutEventTypes.layoutEventTypes.LAYOUT_CHANGE, {
            type: "catalogue",
            value: e
          });
        });
        let i = this.comment.onLayoutChange(e => {
          this.eventEmitter.emit(layoutEventTypes.layoutEventTypes.LAYOUT_CHANGE, {
            type: "comment",
            value: e
          });
        });
        this.removeListener.push(e, i);
      });
      let {
        catalogue: i,
        comment: r,
        content: d,
        editor: u
      } = e;
      this.catalogue = i;
      this.comment = r;
      this.content = d;
      this.editor = u;
      this.initEvent();
    }
  }
  require.d(exports, {
    DocxLayoutChangeEventManager: function () {
      return d;
    }
  });
}