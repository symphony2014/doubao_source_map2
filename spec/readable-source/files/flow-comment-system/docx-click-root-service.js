// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initClickRootSvc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 544042
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var l;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var clickRootServiceProvider = require("click-root-service-provider") /*id: 398284*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var docxBlockStyleUtils = require("docx-block-style-utils") /*id: 669427*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  function k(e, i, n, o) {
    if (n) {
      Object.defineProperty(e, i, {
        enumerable: n.enumerable,
        configurable: n.configurable,
        writable: n.writable,
        value: n.initializer ? n.initializer.call(o) : undefined
      });
    }
  }
  function y(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  function C(e, i, n, o, r) {
    var l = {};
    Object.keys(o).forEach(function (e) {
      l[e] = o[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = n.slice().reverse().reduce(function (n, o) {
      return o(e, i, n) || n;
    }, l);
    if (r && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(r) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  let S = [docBlockTypeConstants.blockTypeConstants.TASK_LIST, docBlockTypeConstants.blockTypeConstants.IMAGE, docBlockTypeConstants.blockTypeConstants.FILE, docBlockTypeConstants.blockTypeConstants.DIAGRAM, docBlockTypeConstants.blockTypeConstants.MINDMAP, docBlockTypeConstants.blockTypeConstants.ISV, docBlockTypeConstants.blockTypeConstants.WHITEBOARD, docBlockTypeConstants.blockTypeConstants.DIVIDER, ...docBlockTypeConstants.chartEmbeddedTypes, docBlockTypeConstants.blockTypeConstants.CELL];
  let I = [docBlockTypeConstants.blockTypeConstants.SHEET];
  let w = dependencyInjectionContainer.Provide(clickRootServiceProvider.clickRootService)((r = C((o = class {
    init() {
      this.bindClickEvent();
    }
    bindClickEvent() {
      let e = this.view;
      this.subs.push(e.didMount$.subscribe(() => {
        let n = e.root?.hostElement;
        if (n) {
          n.addEventListener("click", this.handleClick, false);
          this.clickDetector = new docxBlockStyleUtils.SelectionHandler(n);
        }
        if (!docComponentFeatureFlags.isImchatSyncedBlk() && !browserEnvironmentDetectionUtils.browserDetector.isOpendoc) {
          this.autoRestoreFocus();
        }
      }));
    }
    autoRestoreFocus() {
      let e = getSelection();
      let i = (e == null ? undefined : e.type) === "None";
      if (this.selectionAPI.getSelection().length === 0 && i) {
        this.selectionAPI.restoreFocus();
      }
    }
    setTextBlockCaret(e, i, n) {
      let {
        textNode: o,
        offset: r
      } = docxBlockStyleUtils.getCaretPosition(i, n);
      if (!o || !isNumberUtil.isNumber(r)) {
        return;
      }
      let l = e.nodeToRange(o);
      if (!l) {
        return;
      }
      let a = Math.min(e.getText().length, l.toPosition().start + r);
      this.selectionAPI.setSelection([{
        id: e.id,
        type: editorTypeConstants.blockTypes.TEXT,
        selection: {
          start: a,
          end: a
        }
      }]);
    }
    destroy() {
      var i;
      this.subs.forEach(e => e.unsubscribe());
      let n = this.view.root?.hostElement;
      if (n) {
        n.removeEventListener("click", this.handleClick, false);
        if ((i = this.clickDetector) !== null && i !== undefined) {
          i.destroy();
        }
      }
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      k(this, "view", r, this);
      k(this, "selectionAPI", l, this);
      y(this, "subs", []);
      y(this, "clickDetector", undefined);
      y(this, "handleClick", e => {
        if (!this.clickDetector.allowResetSelection || e.shiftKey) {
          return;
        }
        let i = e.target instanceof HTMLElement && docxBlockUtils_2.getBlockIdFromNode(e.target);
        if (!i) {
          return;
        }
        let n = this.view.getBlockViewByBlockId(i);
        if (!!n && !S.includes(n.type) && (!browserEnvironmentDetectionUtils.browserDetector.isIPad || !I.includes(n.type)) && (this.selectionAPI.getSelection().filter(e => e.type === editorTypeConstants.blockTypes.BLOCK).map(e => e.id).includes(i) || n.hostElement.closest(".selected")) && e.detail === 1) {
          this.selectionAPI.removeAllSelection();
          if (editorTextBlockUtilities.isEditorInstance(n)) {
            this.setTextBlockCaret(n, e.clientX, e.clientY);
          }
        }
      });
    }
  }).prototype, "view", [docxEditorCore.VIEW_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l = C(o.prototype, "selectionAPI", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), o)) || o;
  function M() {
    docxEditorCore.registerProviders([w]);
    docxEditorCore.onInitHook(() => {
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        dependencyInjectionContainer.get(clickRootServiceProvider.clickRootService).init();
      }
    });
  }
  require.d(exports, {
    initClickRootSvc: function () {
      return M;
    }
  });
}