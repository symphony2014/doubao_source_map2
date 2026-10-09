// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R7' to 'HoverManager'
// - Renamed export 'ZP' to 'HoverManagerClass'
// - Renamed export 'tN' to 'resetHoverEvent'
// - Renamed export 'z7' to 'hoverBlockChangedEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 803365
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var l = debugBrowserConfig;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var copilotClassConstants = require("copilot-class-constants") /*id: 753500*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var docxToolboxBlockHelpers = require("docx-toolbox-block-helpers") /*id: 675608*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockTypeCheckers = require("doc-block-type-checkers") /*id: 391113*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var docxBlockSelectionUtils = require("docx-block-selection-utils") /*id: 886406*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var docxPrintConstants = require("docx-print-constants") /*id: 909586*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  function I(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
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
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let S = l("hover");
  let T = "HOVER_BLOCK_CHANGED";
  let B = "HOVER_DOC_INFO_CHANGED";
  let M = "RESET_HOVER_EVENT";
  let R = "IFRAME_BLOCK_HOVER";
  class O extends editorContextFacade.EditorContextFacade {
    get isEditable() {
      return this.blockManager.editable;
    }
    get scrollContainer() {
      return this.editorContext.boundary;
    }
    get scrollableBoundary() {
      return this.blockManager.editorAPI.config.get("pageMainBoundary") || this.scrollContainer;
    }
    setup(e) {
      this.options = e;
      this.locate = new docxBlockSelectionUtils.BlockSelectionManager(this.blockManager, this.scrollContainer, this.fold);
      this.listeners = this.options.listeners || this.listeners;
      this.blockManager.addListener(M, this.handleRequestReset);
      this.blockManager.addListener(docxDragDropConstants.dragStatusEvent, this.handleDragStatusChange);
      this.blockManager.addListener(docxEditorConstantsConfig.resizeGridEvent, this.handleDragStatusChange);
      this.blockManager.addListener(R, this.handleIframeBlockHover);
      let n = this.scrollContainer;
      n.addEventListener("mousemove", this.handleMouseMove);
      n.addEventListener("mouseleave", this.handleMouseLeave);
      this.scrollableBoundary.addEventListener("scroll", this.handleScroll);
      this.blockManager.eventEmitter.on(docxScrollableConstants.scrollEvents.ON_SCROLL, this.handleScroll);
      this.eventEmitter.on(docxEditorConstantsConfig.openBlockMenu, this.handleOpenBlockMenu);
      this.eventEmitter.on(docxEditorConstantsConfig.hideBlockMenu, this.handleHideBlockMenu);
      this.eventEmitter.on(docxEditorConstantsConfig.resetHoverStatus, this.reset);
    }
    addListener(e) {
      this.listeners.push(e);
    }
    destroy() {
      this.throttleMouseMove.cancel();
      this.listeners.length = 0;
      this.current = null;
      this.blockManager.removeListener(M, this.handleRequestReset);
      this.blockManager.removeListener(docxDragDropConstants.dragStatusEvent, this.handleDragStatusChange);
      this.blockManager.removeListener(docxEditorConstantsConfig.resizeGridEvent, this.handleDragStatusChange);
      this.blockManager.removeListener(R, this.handleIframeBlockHover);
      let e = this.scrollContainer;
      e.removeEventListener("mousemove", this.handleMouseMove);
      e.removeEventListener("mouseleave", this.handleMouseLeave);
      this.scrollableBoundary.removeEventListener("scroll", this.handleScroll);
      this.blockManager.eventEmitter.removeListener(docxScrollableConstants.scrollEvents.ON_SCROLL, this.handleScroll);
      this.eventEmitter.off(docxEditorConstantsConfig.openBlockMenu, this.handleOpenBlockMenu);
      this.eventEmitter.off(docxEditorConstantsConfig.hideBlockMenu, this.handleHideBlockMenu);
      this.eventEmitter.off(docxEditorConstantsConfig.resetHoverStatus, this.reset);
    }
    isContainerBlock(e) {
      let n = [docBlockTypeConstants.blockTypeConstants.PAGE, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM, docBlockTypeConstants.blockTypeConstants.AI];
      return e && n.includes(e.type);
    }
    isViewBlock(e) {
      return e.type === docBlockTypeConstants.blockTypeConstants.VIEW;
    }
    getHotpotRect(e) {
      let n = e.getHostRect();
      let r = e.getContentRect();
      let o = r.width ? r : n;
      let i = [o.left, n.left];
      let l = [o.width, n.width];
      let a = document.querySelector(docxPrintConstants.editorContainerSel);
      if (a) {
        let e = a.getBoundingClientRect();
        i.push(e.left);
        l.push(e.width);
      }
      let c = Math.min.apply(null, i);
      l.push(o.right - c);
      let u = Math.max.apply(null, l);
      return new DOMRect(c - docxEditorConstantsConfig.scrollOffset, o.top, u + docxEditorConstantsConfig.scrollOffset, o.height);
    }
    saveBlockAndNotify(e, n) {
      if (e !== this.current || n !== this.exactCurrent) {
        this.listeners.forEach(n => {
          n(this.current, e);
        });
        let r = this.current;
        this.current = e;
        docxEditorEventConstantsAndManager.globalEditorState.hoverBlockId = e == null ? undefined : e.id;
        this.exactCurrent = n;
        this.blockManager.dispatch(T, [r, this.current, this.exactCurrent]);
      }
    }
    isScrolledBlockInContainer(e) {
      let n = docBlockTreeUtils.findNodeByType(e.model, [docBlockTypeConstants.blockTypeConstants.TABLE]);
      if (n) {
        let r = this.blockManager.getBlockViewByBlockId(n.id);
        let o = e.hostElement.getBoundingClientRect();
        return r.getContentRect().left > o.left;
      }
      return false;
    }
    resetWhenInvalidBlockType(e) {
      return e.type === docBlockTypeConstants.blockTypeConstants.PENDING && (this.reset(), true);
    }
    findParentGridColumnOrTableId(e, n) {
      let r = this.blockManager.getRootBlockId();
      let i = this.blockManager.getBlockStructByBlockId(e) || null;
      let l = docxEditorCore.ZERO_OFFSET;
      while (i) {
        if (i.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
          l = i.id;
          break;
        }
        if (i.type === docBlockTypeConstants.blockTypeConstants.GRID) {
          l = this.locate.findClosestX(i.id, n.pageX, "grid_column");
          break;
        }
        let {
          parent: e
        } = i;
        if (i.type === docBlockTypeConstants.blockTypeConstants.CALLOUT && (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.CELL || i.type === docBlockTypeConstants.blockTypeConstants.TABLE || i.type === docBlockTypeConstants.blockTypeConstants.CELL) {
          l = i.id;
          break;
        }
        if (i.id === r) {
          i = null;
          continue;
        }
        i = i.parent;
      }
      return l;
    }
    getEffect(e) {
      return () => {
        reactCoreLibraryReexport.useEffect(() => {
          this.setup(e);
          return () => this.destroy();
        }, [e]);
      };
    }
    constructor(...e) {
      var n;
      super(...e);
      n = this;
      I(this, "options", undefined);
      I(this, "current", null);
      I(this, "exactCurrent", null);
      I(this, "listeners", []);
      I(this, "locate", undefined);
      I(this, "scrollTimer", undefined);
      I(this, "handleHideBlockMenu", () => {
        docxEditorEventConstantsAndManager.globalEditorState.active = true;
      });
      I(this, "handleOpenBlockMenu", () => {
        docxEditorEventConstantsAndManager.globalEditorState.active = false;
      });
      I(this, "shouldDisable", () => {
        let {
          container: e
        } = this.editorContext;
        return !this.isEditable || this.selectionAPI.isSelecting() || !!e.querySelector(".cover-setting.open");
      });
      I(this, "handleMouseLeave", e => {
        if (this.shouldDisable() || !docxEditorEventConstantsAndManager.globalEditorState.active) {
          return;
        }
        let n = e.relatedTarget;
        if (n) {
          let {
            blockFilters: e,
            ignoreClasses: r
          } = this.options;
          if (r.some(e => docxUtilityHelpers.hasClassInParent(n, e)) || e.some(e => n.closest(e))) {
            return;
          }
        }
        this.reset();
      });
      I(this, "handleDragStatusChange", e => {
        if (e) {
          docxEditorEventConstantsAndManager.globalEditorState.active = false;
          this.reset();
        } else {
          docxEditorEventConstantsAndManager.globalEditorState.active = true;
        }
      });
      I(this, "handleScroll", () => {
        if (!this.options.shouldDisable || !this.options.shouldDisable()) {
          if (!this.scrollTimer) {
            docxEditorEventConstantsAndManager.globalEditorState.active = false;
            this.reset();
            this.blockManager.dispatch(B, null);
          }
          window.clearTimeout(this.scrollTimer);
          this.scrollTimer = window.setTimeout(() => {
            this.scrollTimer = undefined;
            docxEditorEventConstantsAndManager.globalEditorState.active = true;
          }, 200);
        }
      });
      I(this, "handleRequestReset", e => {
        this.reset();
        this.blockManager.dispatch(B, null);
      });
      I(this, "handleIframeBlockHover", e => {
        if (docxEditorEventConstantsAndManager.globalEditorState.active) {
          this.saveBlockAndNotify(e, e);
        }
      });
      I(this, "handleMouseMove", e => {
        if (this.options.shouldDisable && this.options.shouldDisable()) {
          this.reset();
          return;
        }
        this.throttleMouseMove(e);
      });
      I(this, "checkAndNotifyDocInfoHotArea", (e, n) => {
        if (n && n !== this.blockManager.rootBlockId) {
          this.blockManager.dispatch(B, null);
          return;
        }
        this.blockManager.dispatch(B, e);
      });
      I(this, "throttleMouseMove", debounceUtilWrapper.createDebounce(e => {
        var n;
        var r;
        var o;
        var i;
        var l;
        var a;
        let c = e.target;
        if (!e.target || !docxEditorEventConstantsAndManager.globalEditorState.active) {
          return;
        }
        let h = this.selectionAPI.getBoundary();
        if (((n = h.querySelector(".docx-popup-container")) === null || n === undefined ? undefined : n.contains(c)) || !h.contains(c) && !((r = document.querySelector(".presentation-mode-mask")) === null || r === undefined ? undefined : r.contains(c)) || docxToolboxBlockHelpers.isWikiV3Enabled() && (((o = document.querySelector(".menu-trigger")) === null || o === undefined ? undefined : o.contains(c)) || ((i = document.querySelector(".block-toolbar__overlay")) === null || i === undefined ? undefined : i.contains(c))) || this.options.noResponseTarget && this.options.noResponseTarget.some(e => docxUtilityHelpers.hasClassInParent(c, e))) {
          return;
        }
        if (this.options.ignoreClasses.some(e => docxUtilityHelpers.hasClassInParent(c, e)) || ((l = document.querySelector("#docCommentContainer")) === null || l === undefined ? undefined : l.contains(c)) || ((a = document.querySelector(".feed-container")) === null || a === undefined ? undefined : a.contains(c)) || document.querySelector(`.${copilotClassConstants.copilotChat}`) && !document.querySelector(`.${copilotClassConstants.copilotSearch}`)) {
          this.reset();
          return;
        }
        let p = this.scrollContainer.getBoundingClientRect();
        if (!browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp && e.pageX <= docxEditorConstantsConfig.lineHeightLarge && !docComponentFeatureFlags.isContentMarginOn()) {
          return;
        }
        let {
          blockFilters: b
        } = this.options;
        if (b.some(n => !!e.target.closest(n))) {
          return;
        }
        let y = docxBlockUtils_2.getBlockIdFromNode(e.target);
        this.checkAndNotifyDocInfoHotArea(e, y);
        y ||= this.blockManager.rootBlockId;
        if (!y) {
          return;
        }
        let _ = this.blockManager.getBlockStructByBlockId(y);
        if (!_ || this.resetWhenInvalidBlockType(_)) {
          return;
        }
        let k = e.clientX;
        let I = e.clientX - p.left + this.scrollContainer.scrollLeft;
        let T = e.clientY - p.top + this.scrollContainer.scrollTop;
        if (this.blockManager.hasBlockViewByBlockId(y)) {
          let e = this.blockManager.getBlockViewByBlockId(y);
          let n = docBlockTypeCheckers.isAllowedBlockType(e.type) && _.children.length > 0;
          if (e && !this.isContainerBlock(e) && !this.isViewBlock(e) && !n) {
            let n = this.getHotpotRect(e);
            if (this.isScrolledBlockInContainer(e) || k < n.left || k > n.right) {
              this.reset();
              return;
            }
            this.saveBlockAndNotify(e, e);
            docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.HOVER_CATALOGUE, false);
            return;
          }
        }
        if (_.type === docBlockTypeConstants.blockTypeConstants.GRID) {
          return;
        }
        S("-------------------");
        S("id1", y);
        let B = this.findContainer(y, e) || y;
        S("containerId", B);
        let M = false;
        if (_.type === docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM) {
          let n = this.blockManager.getBlockViewByBlockId(y);
          if (n.hostElement) {
            let r = [...n.hostElement.querySelectorAll(`.${docBlockTypeConstants.createBtnContainer}`)];
            if (r && r.some(n => n.contains(e.target))) {
              y = n.parentId;
              M = true;
            }
          }
        }
        if (!M) {
          S("id2", y = this.locate.getClosestBlock(B, I, T));
          if (y && this.blockManager.hasBlockViewByBlockId(y) && this.blockManager.getBlockViewByBlockId(y).type !== "table") {
            y = this.locate.findClosestY(y, T);
          }
        }
        S("id3", y);
        S("-------------------");
        if (y && this.blockManager.hasBlockViewByBlockId(y)) {
          let e = this.blockManager.getBlockViewByBlockId(y);
          let n = this.getHotpotRect(e);
          if (this.isScrolledBlockInContainer(e) || k < n.left || k > n.right) {
            this.reset();
            return;
          }
          if (this.resetWhenInvalidBlockType(e.struct)) {
            return;
          }
          if (e) {
            this.saveBlockAndNotify(e, null);
          }
        }
      }, 50, {
        trailing: false
      }));
      I(this, "findContainer", function (e, r, o = false) {
        let i = n.findParentGridColumnOrTableId(e, r);
        S("parent grid columnId", i);
        if (!i) {
          return i;
        }
        let l = n.blockManager.getBlockViewByBlockId(i);
        S("parent grid column type", l.type);
        let a = l.getHostRect();
        if (r.pageX < a.left + a.width) {
          S("in left half", i);
          return i;
        }
        let c = n.blockManager.getBlockStructByBlockId(i);
        if (c && c.nextSibling && !o) {
          return c.nextSibling.id;
        } else {
          return i;
        }
      });
      I(this, "reset", () => {
        this.throttleMouseMove.cancel();
        this.saveBlockAndNotify(null, null);
      });
    }
  }
  require.d(exports, {
    HoverManager: function () {
      return R;
    },
    HoverManagerClass: function () {
      return O;
    },
    resetHoverEvent: function () {
      return M;
    },
    hoverBlockChangedEvent: function () {
      return T;
    }
  });
}