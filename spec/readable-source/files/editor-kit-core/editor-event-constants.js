// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'editorEventTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 520265
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  (o = n = n || {}).DID_PASTE = "didPaste";
  o.RESIZE = "resize";
  o.RECT_CHANGE = "rectchange";
  o.SELECTION_CHANGE = "selectionchange";
  o.SELECTION_CHANGE_AND_DOM_UPDATE = "editorUpdateDomSelection";
  o.CONTENT_WILL_CHANGE = "contentWillChange";
  o.CONTENT_CHANGE = "contentchange";
  o.EDITABLE_CHANGE = "editablechange";
  o.PAINT = "paint";
  o.COPY = "copy";
  o.CUT = "cut";
  o.PASTE = "paste";
  o.WILL_DELETE_FROM_CUT = "willDeleteFromCut";
  o.INPUT = "input";
  o.BEFORE_INPUT = "beforeinput";
  o.KEYDOWN = "keydown";
  o.KEYPRESS = "keypress";
  o.KEYUP = "keyup";
  o.EXEC_COMMAND = "execCommand";
  o.ERROR = "error";
  o.DELETE_KEY = "keyDelete";
  o.FOCUS = "focus";
  o.BLUR = "blur";
  o.SCROLL_END = "scrollend";
  o.SCROLL = "scroll";
  o.KEYBAORDCHANGE = "keyboardchange";
  o.COMPOSITION_END = "compositionend";
  o.COMPOSITION_START = "compositionstart";
  o.COMPOSITION_UPDATE = "compositionupdate";
  o.REACT_CONTEXT_UPDATE = "reactContextUpdate";
  o.BEFORE_DOM_RENDERER_RECONCILE = "beforeDomRendererReconcile";
  o.AFTER_DOM_RENDERER_RECONCILE = "afterDomRendererReconcile";
  o.UNDO_DID_INIT = "undoDidInit";
  require.d(exports, {
    editorEventTypes: function () {
      return n;
    }
  });
}