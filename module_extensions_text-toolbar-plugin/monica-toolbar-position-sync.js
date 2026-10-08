// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'textToolbarPluginProvider'
// - Resolved require(492379) to 'text-toolbar-plugin-provider'
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'c' to 'syncedReferenceBlockUtils'
// - Resolved require(262712) to 'synced-reference-block-utils'
// - Renamed variable 'l' to 'editorContextFacade'
// - Resolved require(788056) to 'editor-context-facade'
// - Renamed variable 'h' to 'numberRangeCheckUtil'
// - Resolved require(341356) to 'number-range-check-util'
// - Renamed variable 'r' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'a' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'u' to 'flowDocLauncherSignals'
// - Resolved require(777849) to 'flow-doc-launcher-signals'
// - Updated imported property 'Z' to 'isInRange' (module 341356)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property 'MY' to 'textToolbarSignal' (module 777849)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'e' to 'EditorContextFacade' (module 788056)
// - Updated imported property 'rj' to 'isSyncedReferenceBlock' (module 262712)
// - Updated imported property 'ix' to 'registerViewExt' (module 135760)
// - Updated imported property 'p' to 'textToolbarProvider' (module 492379)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_extensions_text-toolbar-plugin.2d7cbec2.js
         * chunkId: 24452
         * moduleId: 95208
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var textToolbarPluginProvider = require("text-toolbar-plugin-provider") /*id: 492379*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var numberRangeCheckUtil = require("number-range-check-util") /*id: 341356*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var flowDocLauncherSignals = require("flow-doc-launcher-signals") /*id: 777849*/;
  function d(t, i, e) {
    var n;
    if ((i = typeof (n = function (t, i) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var e = t[Symbol.toPrimitive];
      if (e !== undefined) {
        var n = e.call(t, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(t);
    }(i, "string")) == "symbol" ? n : n + "") in t) {
      Object.defineProperty(t, i, {
        value: e,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[i] = e;
    }
    return t;
  }
  let v = new class {
    hasDiff(t) {
      return this.visible !== t.visible || this.contentRect?.left !== t.contentRect?.left || this.contentRect?.top !== t.contentRect?.top || this.contentRect?.width !== t.contentRect?.width;
    }
    constructor() {
      d(this, "monicaDom", undefined);
      d(this, "monicaRoot", undefined);
      d(this, "contentRect", undefined);
      d(this, "visible", undefined);
      d(this, "subs", []);
      d(this, "handleChange", t => {
        var i;
        if (!t.visible) {
          this.visible = false;
          return;
        }
        if (this.hasDiff(t)) {
          this.contentRect = t.contentRect || this.contentRect;
          this.visible = t.visible;
          if ((i = this.monicaDom) === null || i === undefined ? undefined : i.children.length) {
            this.handleMove(this.monicaDom.children[0]);
          }
        }
      });
      d(this, "checkOverlapping", t => this.contentRect && numberRangeCheckUtil.isInRange(t.top, this.contentRect.top - t.height, this.contentRect.top + this.contentRect.height + t.height) && numberRangeCheckUtil.isInRange(t.left, this.contentRect.left - t.width - t.width / 2 - 10, this.contentRect.left + this.contentRect.width - t.width / 2 + 10));
      d(this, "handleMove", debounceUtil_1_1.debounce(t => {
        let i = t.getBoundingClientRect();
        if (this.visible && this.contentRect && t && !t.style.top && this.checkOverlapping(i)) {
          t.style.top = `${this.contentRect.top - i.top + this.contentRect.height + 15}px`;
        }
        t.style.visibility = "visible";
      }, 400));
      d(this, "bindSiganl", t => {
        let i = t.editorAPI.getService(flowDocLauncherSignals.textToolbarSignal);
        if (i) {
          this.subs.push(i.subscribe(this.handleChange));
        }
      });
      d(this, "init", t => {
        var i;
        var e;
        let {
          blockManager: n
        } = t;
        this.monicaRoot = document.getElementById("monica-content-root");
        this.monicaDom = (e = this.monicaRoot) === null || e === undefined ? undefined : (i = e.shadowRoot) === null || i === undefined ? undefined : i.querySelector("[class^=contextual-toolbar-]");
        if (this.monicaRoot && this.monicaDom) {
          this.monicaRoot.style.zIndex = "80";
          this.bindSiganl(n);
          let t = new MutationObserver(t => {
            let [{
              addedNodes: i
            }] = t;
            if (i.length) {
              let t = i[0];
              t.style.visibility = "hidden";
              this.handleMove(t);
            }
          });
          t.observe(this.monicaDom, {
            childList: true
          });
          return () => {
            this.subs.forEach(t => t && t.unsubscribe());
            t.disconnect();
            this.monicaRoot = null;
            this.monicaDom = null;
          };
        }
        return emptyExportFunction.emptyFunction;
      });
    }
  }();
  class f extends editorContextFacade.EditorContextFacade {
    getEffect() {
      return () => {
        reactCoreLibraryReexport.useEffect(() => {
          if (syncedReferenceBlockUtils.isSyncedReferenceBlock(this.blockManager.editorAPI)) {
            v.bindSiganl(this.blockManager);
            return;
          }
          return v.init({
            blockManager: this.blockManager
          });
        }, []);
      };
    }
  }
  function b() {
    docxEditorCore.registerViewExt(textToolbarPluginProvider.textToolbarProvider, f);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return b;
    }
  });
}