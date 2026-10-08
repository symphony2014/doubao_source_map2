// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'editorPanelStateManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 301349
         */
module.exports = function (module, exports, require) {
  let o;
  let i;
  let l;
  let a;
  let c;
  let u;
  let s;
  let d;
  var h;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  function m(e, n, r) {
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
  (h = v || {}).HAS_BLOCK_MENU = "hasBlockMenu";
  h.HAS_TEXT_TOOLBAR = "hasTextToolbar";
  h.HAS_TEXT_BLOCK_TOOLBAR = "hasTextBlockToolbar";
  h.HAS_TABLE_CELL_TOOLBAR = "hasTableCellToolbar";
  h.HAS_TABLE_COLUMN_TOOLBAR = "hasTableColumnToolbar";
  h.HAS_BLOCK_TOOLBAR = "hasBlockToolbar";
  h.HAS_PASTE_CONTEXT_SUBMENU = "hasPasteContextSubmenu";
  h.HAS_LOCK_TOOBAR_VISIBLE = "hasLockToolbarVisible";
  var v = h;
  o = v.HAS_BLOCK_MENU;
  i = v.HAS_TEXT_TOOLBAR;
  l = v.HAS_TEXT_BLOCK_TOOLBAR;
  a = v.HAS_TABLE_CELL_TOOLBAR;
  c = v.HAS_TABLE_COLUMN_TOOLBAR;
  u = v.HAS_BLOCK_TOOLBAR;
  s = v.HAS_PASTE_CONTEXT_SUBMENU;
  d = v.HAS_LOCK_TOOBAR_VISIBLE;
  exports.editorPanelStateManager = new class {
    canShowBlockToolbar() {
      return !this[v.HAS_BLOCK_MENU] && !this[v.HAS_TEXT_TOOLBAR] && !this[v.HAS_TEXT_BLOCK_TOOLBAR] && !this[v.HAS_TABLE_CELL_TOOLBAR] && !this[v.HAS_TABLE_COLUMN_TOOLBAR];
    }
    canShowTextualBlockToolbar() {
      if (syncedBlockFeatureFlags.isMultiSelectPasteSyncEnabled()) {
        return !this[v.HAS_BLOCK_MENU] && !this[v.HAS_PASTE_CONTEXT_SUBMENU];
      } else {
        return !this[v.HAS_BLOCK_MENU];
      }
    }
    setStatusOfKey(e, n, r) {
      if (this[e] !== n) {
        this[e] = n;
        if (r) {
          r();
        }
      }
    }
    canShowBlockMenu() {
      return !this[v.HAS_TEXT_TOOLBAR] && !this[v.HAS_TABLE_COLUMN_TOOLBAR] && !this[v.HAS_TABLE_CELL_TOOLBAR];
    }
    onPanelStatusChange(e, n) {
      if (n) {
        n.forEach(n => {
          this.callbacks[n] ||= [];
          if (!this.callbacks[n].includes(e)) {
            this.callbacks[n].push(e);
          }
        });
      } else if (!this.callbacks.all.includes(e)) {
        this.callbacks.all.push(e);
      }
    }
    offPanelStatusChange(e, n) {
      if (n) {
        n.forEach(n => {
          this.callbacks[n] &&= this.callbacks[n].filter(n => e !== n);
        });
      } else {
        this.callbacks.all = this.callbacks.all.filter(n => e !== n);
      }
    }
    isShowBlockToolbar() {
      return this[v.HAS_BLOCK_TOOLBAR];
    }
    setPanelStatus(e, n, r) {
      var o;
      let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      switch (e) {
        case editorUiComponentConstants.uiComponentTypes.Add:
        case editorUiComponentConstants.uiComponentTypes.BlockMenu:
          this.setStatusOfKey(v.HAS_BLOCK_MENU, n, () => {
            if (n) {
              docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.BLOCK_MENU_PANEL_SHOW);
            }
          });
          break;
        case editorUiComponentConstants.uiComponentTypes.BlockToolbar:
          this.setStatusOfKey(v.HAS_BLOCK_TOOLBAR, n);
          break;
        case editorUiComponentConstants.uiComponentTypes.PopoverMenu:
          this.setStatusOfKey(v.HAS_TABLE_COLUMN_TOOLBAR, n);
          break;
        case editorUiComponentConstants.uiComponentTypes.TableCell:
          this.setStatusOfKey(v.HAS_TABLE_CELL_TOOLBAR, n);
          break;
        case editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar:
          this.setStatusOfKey(v.HAS_TEXT_BLOCK_TOOLBAR, n, () => {
            if (n) {
              docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.HIDE_BLOCK_TOOLBAR);
            }
          });
          break;
        case editorUiComponentConstants.uiComponentTypes.TextualToolbar:
          this.setStatusOfKey(v.HAS_TEXT_TOOLBAR, n, () => {
            docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.TEXT_TOOLBAR_STATUS_CHANGE, n);
            docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.FORCE_UPDATE_BLOCK_MENU_TOOLBAR_STATUS);
          });
          break;
        case editorUiComponentConstants.uiComponentTypes.PasteContextSubmenu:
          this.setStatusOfKey(v.HAS_PASTE_CONTEXT_SUBMENU, n);
      }
      this.callbacks.all.map(o => o(e, n, r, i));
      if ((o = this.callbacks[e]) !== null && o !== undefined) {
        o.map(o => o(e, n, r, i));
      }
    }
    canShowPanel(e) {
      switch (e) {
        case editorUiComponentConstants.uiComponentTypes.BlockMenu:
          return this.canShowBlockMenu();
        case editorUiComponentConstants.uiComponentTypes.BlockToolbar:
          return this.canShowBlockToolbar();
        case editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar:
          return this.canShowTextualBlockToolbar();
        default:
          return false;
      }
    }
    getPanelStatus(e) {
      switch (e) {
        case editorUiComponentConstants.uiComponentTypes.Add:
        case editorUiComponentConstants.uiComponentTypes.BlockMenu:
          return this[v.HAS_BLOCK_MENU];
        case editorUiComponentConstants.uiComponentTypes.BlockToolbar:
          return this[v.HAS_BLOCK_TOOLBAR];
        case editorUiComponentConstants.uiComponentTypes.PopoverMenu:
          return this[v.HAS_TABLE_COLUMN_TOOLBAR];
        case editorUiComponentConstants.uiComponentTypes.TableCell:
          return this[v.HAS_TABLE_CELL_TOOLBAR];
        case editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar:
          return this[v.HAS_TEXT_BLOCK_TOOLBAR];
        case editorUiComponentConstants.uiComponentTypes.TextualToolbar:
          return this[v.HAS_TEXT_TOOLBAR];
      }
    }
    isLockToolbarVisible() {
      return this[v.HAS_LOCK_TOOBAR_VISIBLE];
    }
    changeLockToolbarVisible(e) {
      this[v.HAS_LOCK_TOOBAR_VISIBLE] = e;
    }
    constructor() {
      m(this, o, false);
      m(this, i, false);
      m(this, l, false);
      m(this, a, false);
      m(this, c, false);
      m(this, u, false);
      m(this, s, false);
      m(this, d, false);
      m(this, "callbacks", {
        all: []
      });
    }
  }();
}