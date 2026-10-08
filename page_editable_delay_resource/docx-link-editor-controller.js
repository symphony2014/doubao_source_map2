// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'DocxLinkEditorController'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 881473
         */
module.exports = function (module, exports, require) {
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  let d = require("retryable-module-loader-factory") /*id: 99395*/.getRetryableModuleLoader({
    loader: () => Promise.all([require.e("moment-locales-bundle") /*id: 85547*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("app-constants-and-enums") /*id: 86326*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-management") /*id: 83252*/, require.e("editor-bookmark-link-menu") /*id: 89647*/, require.e("link-editor-wrapper-entry") /*id: 63128*/]).then(require.bind(require, "link-editor-wrapper") /*id: 853845*/),
    loading: () => null
  }, {
    moduleName: "link_editor_wrapper_entry"
  });
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function c(e, n, i) {
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
  let h = "link-editor-container";
  class f {
    destroy() {
      this.clearTimers();
    }
    constructor() {
      c(this, "showTimer", null);
      c(this, "hideTimer", null);
      c(this, "container", null);
      c(this, "attached", false);
      c(this, "handleMouseEnter", e => {
        if (this.hideTimer) {
          window.clearTimeout(this.hideTimer);
          this.hideTimer = null;
        }
        if (!this.showTimer) {
          this.showTimer = window.setTimeout(() => {
            let n = {
              ...e,
              hideEditPanel: this.hide,
              onMouseEnter: () => this.handleMouseEnter(e),
              onMouseLeave: () => this.handleMouseLeave()
            };
            this.show(n);
          }, 300);
        }
      });
      c(this, "handleMouseLeave", () => {
        this.clearTimers();
        if (this.container) {
          this.hideTimer = window.setTimeout(() => {
            this.hide();
          }, 300);
        }
      });
      c(this, "show", e => {
        let n = d.getModuleInstance();
        this.clearTimers();
        reactDomEntryWrapper.render(reactJsxRuntimeCoreReexport.jsx(n, {
          ...e
        }), this.container);
        this.attached = true;
      });
      c(this, "hide", () => {
        this.clearTimers();
        if (this.container && this.attached) {
          reactDomEntryWrapper.unmountComponentAtNode(this.container);
          this.attached = false;
        }
      });
      c(this, "clearTimers", () => {
        if (this.hideTimer) {
          window.clearTimeout(this.hideTimer);
          this.hideTimer = null;
        }
        if (this.showTimer) {
          window.clearTimeout(this.showTimer);
          this.showTimer = null;
        }
      });
      this.container = document.getElementById(h);
      if (!this.container) {
        this.container = document.createElement("div");
        this.container.setAttribute("id", h);
        document.body.appendChild(this.container);
      }
    }
  }
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  var docxLinkRenderer = require("docx-link-renderer") /*id: 829614*/;
  var documentLinkUtilities = require("document-link-utilities") /*id: 61891*/;
  function y(e, n, i) {
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
  class m extends docxLinkRenderer.DocxLinkRenderer {
    _bindEvents() {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      let n = e ? "on" : "off";
      let i = e ? "addEventListener" : "removeEventListener";
      this.editor[n](editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChange);
      this.editor[n]("click", this.handleEditorClick);
      document[i]("mousedown", this._handleMouseDown);
      document[i]("click", this.resetMouseDownStatus);
      if (browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
        document[i]("pointerdown", this._handleMouseDown);
        document[i]("pointerup", this.resetMouseDownStatus);
      }
    }
    get linkEditController() {
      this._linkEditController ||= new f();
      return this._linkEditController;
    }
    genWrapperClasses(e, n) {
      let i = "outer-u-container docx-outer-link-container";
      if (docxFeatureFlags.isZqEnabled()) {
        let {
          index: l,
          attributes: a,
          lineState: s
        } = e;
        let d = s.getOps();
        let u = a[n];
        if (a[clientsideLinkConstants_1.linkUnderline]) {
          i += " link-underline";
        } else {
          for (let e of d.slice(l + 1)) {
            if (e.attributes?.[n] !== u) {
              break;
            }
            if (e.attributes?.[clientsideLinkConstants_1.linkUnderline]) {
              i += " link-underline";
              break;
            }
          }
        }
      }
      return i;
    }
    renderInlineWrapper(e) {
      return super.renderInlineWrapper(e);
    }
    handlePendingPerformUnderlineQueue() {
      while (this.pendingPerformUnderlineQueue.length) {
        let [e, n] = this.pendingPerformUnderlineQueue.shift();
        this.performUnderline(e, n);
      }
    }
    performUnderline(e) {
      let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      Promise.resolve().then(() => {
        this.editor.getContentState().setAttributes(e, {
          [clientsideLinkConstants_1.linkUnderline]: n ? "true" : ""
        }, {
          nonundoable: true,
          extra: {
            shouldCollab: false
          }
        });
      });
    }
    clickLinkImpl(e) {
      super.clickLinkImpl(e);
      this.handlePendingPerformUnderlineQueue();
    }
    destroy() {
      super.destroy();
      this.unsubscribeDocsModeChange();
      this._bindEvents(false);
    }
    constructor(e) {
      super(e);
      y(this, "scroller", undefined);
      y(this, "_linkEditController", null);
      y(this, "handleEditableChange", null);
      y(this, "pendingPerformUnderlineQueue", []);
      y(this, "isMouseDown", false);
      y(this, "_handleMouseDown", () => {
        this.isMouseDown = true;
      });
      y(this, "resetMouseDownStatus", () => {
        this.isMouseDown = false;
      });
      y(this, "handleEditorClick", () => {
        this.handlePendingPerformUnderlineQueue();
      });
      y(this, "handleMouseEnter", e => {
        let n = e.target;
        if (!(n instanceof Node) || !(n instanceof Element)) {
          return;
        }
        let i = documentLinkUtilities.extractLinkInfo(n, this.editor);
        if (i && this._getBlockView(i.blockId).editable) {
          this.showEditEntrance(i);
        }
      });
      y(this, "handleSelectionChange", e => {
        var n;
        var i;
        this.hideEditEntrance();
        let r = this._getBlockViewByCurSelection();
        let {
          isH5: s,
          isIPad: d,
          isBytedanceApp: u
        } = browserEnvironmentDetectionUtils.browserDetector;
        if (!docxFeatureFlags.isZqEnabled() || !(r == null ? undefined : r.editable) || s || d && !u) {
          return;
        }
        let {
          previous: c,
          current: h,
          attributes: f
        } = e;
        let v = this.editor.getContentState();
        let g = h.isCollapsed();
        let y = c.isCollapsed();
        let m = new Map(f);
        if (y && g && activeEditorRange.ActiveEditorRange.isRangeEqual(c, h) && (!m.get("link") || !!m.get(clientsideLinkConstants_1.linkUnderline))) {
          return;
        }
        let b = false;
        if (g && this.selectionAPI.getSelection().length === 1) {
          let {
            zoneId: e,
            line: i,
            offset: r
          } = h.start;
          let o = c.start.zoneId === e && c.start.line === i;
          let a = (n = v.getZoneState(e)) === null || n === undefined ? undefined : n.getLine(i);
          for (let e of (a == null ? undefined : a.getEntities([["link"]])) || []) {
            let {
              start: n,
              end: i,
              attributes: a,
              text: s
            } = e;
            if (s === "\n") {
              continue;
            }
            let d = a[clientsideLinkConstants_1.linkUnderline];
            if (r >= n.offset && r <= i.offset) {
              if (!d) {
                if (this.isMouseDown || !y) {
                  this.pendingPerformUnderlineQueue.push([e, true]);
                } else {
                  this.performUnderline(e);
                }
                b = true;
              }
            } else if (o && y && d) {
              if (browserEnvironmentDetectionUtils.browserDetector.isAndroid && this.isMouseDown) {
                this.pendingPerformUnderlineQueue.push([e, true]);
              } else {
                this.performUnderline(e, false);
                if (!b) {
                  this.pendingPerformUnderlineQueue = [];
                }
              }
            }
          }
        }
        if (y) {
          let {
            zoneId: e,
            line: n
          } = c.start;
          let r = h.start.zoneId === e && h.start.line === n;
          if (g && r) {
            return;
          }
          let o = (i = v.getZoneState(e)) === null || i === undefined ? undefined : i.getLine(n);
          for (let e of (o == null ? undefined : o.getEntities([[clientsideLinkConstants_1.linkUnderline]])) || []) {
            this.performUnderline(e, false);
          }
          if (!b) {
            this.pendingPerformUnderlineQueue = [];
          }
        }
      });
      y(this, "unsubscribeDocsModeChange", () => {
        var e;
        if ((e = this.handleEditableChange) !== null && e !== undefined) {
          e.unsubscribe();
        }
        this.handleEditableChange = null;
      });
      y(this, "handleMouseLeave", () => {
        this.linkEditController.handleMouseLeave();
      });
      y(this, "showEditEntrance", e => {
        this.linkEditController.handleMouseEnter({
          visible: true,
          block: this._getBlockView(e.blockId),
          blockManager: this.blockManager,
          selectionAPI: this.selectionAPI,
          scroller: this.scroller,
          target: e.id,
          link: e.value,
          linkAttr: e
        });
      });
      y(this, "hideEditEntrance", () => {
        this.linkEditController.hide();
      });
      let {
        scroller: n
      } = e;
      this.scroller = n;
      this.handleEditableChange = this.blockManager.config.editableChange$.subscribe(e => {
        if (!e) {
          this.linkEditController.hide();
        }
      });
      this._bindEvents();
    }
  }
  require.d(exports, {
    DocxLinkEditorController: function () {
      return m;
    }
  });
}