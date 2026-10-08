// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'FlowDocKeyboardShortcutHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 682530
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var keyboardEventUtils_1 = require("keyboard-event-utils_1") /*id: 331886*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentBlockInsertUtil = require("document-block-insert-util") /*id: 907868*/;
  function u(e, i, r) {
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
  class h extends baseRendererClass.BaseRenderer {
    handleMetaA(e) {
      if (this.editor.selection.isSelectingAll()) {
        this.editor.blur();
        this.selectCurrentBlock();
      } else {
        this.editor.selection.selectAll();
        this.editor.selection.updateBrowserSelection(true);
      }
      this.preventKeyDownEvent(e);
    }
    handleMetaBackSpace(e) {
      this.editor.setText("");
      this.preventKeyDownEvent(e);
    }
    handleBackSpace(e) {
      let i = this.editor.selection.getSelection();
      if (this.editor.isEmpty() && this.isFirstLine(i.start) && this.isAtLineStart(i.start)) {
        this.selectCurrentBlock(docxBlockSelectionHandler_1.commandTypes.Backspace);
        this.preventKeyDownEvent(e);
      }
    }
    handleArrowUp(e) {
      let i = this.editor.selection.getSelection();
      if (i.isCollapsed() && this.isFirstLine(i.start)) {
        this.selectCurrentBlock();
        this.preventKeyDownEvent(e);
      }
    }
    handleShiftArrowUp(e) {
      let i = this.editor.selection.getSelection();
      if (this.isFirstLine(i.start) && this.isAtLineStart(i.start)) {
        this.selectCurrentBlock();
        this.preventKeyDownEvent(e);
      }
    }
    selectCurrentBlock(e) {
      let i = [{
        id: this.blockId,
        type: docxBlockSelectionHandler_1.blockTypes.BLOCK
      }];
      if (e) {
        this.selectionAPI.setSelection(i, {
          source: e
        });
      } else {
        this.selectionAPI.setSelection(i);
      }
    }
    handleArrowDown(e) {
      let i = this.editor.selection.getSelection();
      if (i.isCollapsed() && this.isLastLine(i.start)) {
        this.selectCurrentBlock();
        this.preventKeyDownEvent(e);
      }
    }
    handleShiftArrowDown(e) {
      let i = this.editor.selection.getSelection();
      if (this.isLastLine(i.end) && this.isAtLineEnd(i.end)) {
        this.selectCurrentBlock();
        this.preventKeyDownEvent(e);
      }
    }
    handleArrowLeft(e) {
      let i = this.editor.selection.getSelection();
      if (i.isCollapsed() && this.isFirstLine(i.start) && this.isAtLineStart(i.start)) {
        this.selectCurrentBlock();
        this.preventKeyDownEvent(e);
      }
    }
    handleArrowRight(e) {
      let i = this.editor.selection.getSelection();
      if (i.isCollapsed() && this.isLastLine(i.end) && this.isAtLineEnd(i.end)) {
        this.selectCurrentBlock();
        this.preventKeyDownEvent(e);
      }
    }
    isLastLine(e) {
      let {
        line: i
      } = e;
      return i === this.editor.getContentState().getActiveZone().length() - 1;
    }
    isAtLineEnd(e) {
      let {
        line: i,
        offset: r
      } = e;
      let n = this.editor.getContentState().getActiveZone().getLine(i);
      return n && r === n.length() - 1;
    }
    isFirstLine(e) {
      return e.line === 0;
    }
    isAtLineStart(e) {
      return e.offset === 0;
    }
    preventKeyDownEvent(e) {
      e.preventDefault();
      e.preventEvent();
      e.stopPropagation();
      e.stopEvent();
    }
    destroy() {
      this.editor.off(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDown);
    }
    constructor(e) {
      super();
      this.props = e;
      u(this, "editor", undefined);
      u(this, "blockManager", undefined);
      u(this, "selectionAPI", undefined);
      u(this, "blockId", undefined);
      u(this, "handleKeyDown", e => {
        switch (true) {
          case keyboardEventUtils_1.isShiftEnter(e):
            return this.handleShiftEnter(e);
          case keyboardEventUtils_1.isEnter(e):
            return this.handleEnter(e);
          case keyboardEventUtils_1.isEscape(e):
            return this.handleEsc(e);
          case keyboardEventUtils_1.isModBackspace(e):
            return this.handleMetaBackSpace(e);
          case keyboardEventUtils_1.isBackspace(e):
            return this.handleBackSpace(e);
          case keyboardEventUtils_1.isSelectAll(e):
            return this.handleMetaA(e);
          case keyboardEventUtils_1.isArrowRight(e):
            return this.handleArrowRight(e);
          case keyboardEventUtils_1.isArrowLeft(e):
            return this.handleArrowLeft(e);
          case keyboardEventUtils_1.isShiftArrowDown(e):
            return this.handleShiftArrowDown(e);
          case keyboardEventUtils_1.isArrowDown(e):
            return this.handleArrowDown(e);
          case keyboardEventUtils_1.isShiftArrowUp(e):
            return this.handleShiftArrowUp(e);
          case keyboardEventUtils_1.isArrowUp(e):
            return this.handleArrowUp(e);
          case keyboardEventUtils_1.isTab(e):
            return this.handleTab(e);
        }
      });
      u(this, "handleEsc", e => {
        this.selectCurrentBlock();
        this.preventKeyDownEvent(e);
      });
      u(this, "handleEnter", e => {
        let i = this.blockManager.getBlockViewByBlockIdNotCheck(this.blockId);
        if (i) {
          this.preventKeyDownEvent(e);
          return documentBlockInsertUtil.insertBlocks({
            blockManager: this.blockManager,
            blocks: [i],
            newBlockType: docBlockTypeConstants.blockTypeConstants.TEXT
          });
        }
      });
      u(this, "handleTab", e => {
        this.preventKeyDownEvent(e);
      });
      u(this, "handleShiftEnter", e => {
        this.preventKeyDownEvent(e);
        let {
          editor: i
        } = this;
        let r = i.selection.getSelection();
        let {
          line: o,
          zoneId: l
        } = r.start;
        let s = i.getContentState();
        if (!i.getContentState().getActiveZone().getLine(o)) {
          return;
        }
        let a = s.getZoneState(l);
        if (!a) {
          return;
        }
        let c = new contentStructureDelta.ContentDelta({
          zoneId: l
        });
        let d = a.pointToOffset(r.start);
        let u = a.pointToOffset(r.end);
        let h = u === d;
        if (d !== null && u !== null) {
          c.retain(d);
          if (!h) {
            c.delete(u - d);
          }
          c.insertEnter();
          s.apply(c);
          this.editor.selection.setSelection({
            zoneId: l,
            start: d + 1,
            len: 0
          });
        }
      });
      let {
        editor: i,
        blockManager: r,
        selectionAPI: o,
        blockId: a
      } = e;
      this.editor = i;
      this.blockManager = r;
      this.selectionAPI = o;
      this.blockId = a;
      this.editor.on(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDown, 999);
    }
  }
  require.d(exports, {
    FlowDocKeyboardShortcutHandler: function () {
      return h;
    }
  });
}