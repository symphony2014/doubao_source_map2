// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'commandTypes'
// - Renamed export 'R' to 'blockTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 719873
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {}).BLOCK = "block";
  o.TEXT = "text";
  let l = o;
  (i = {}).TextSelection = "TextSelection";
  i.Undo = "Undo";
  i.Redo = "Redo";
  i.TurnInto = "TurnInto";
  i.RectArea = "RectArea";
  i.ExternalInvoke = "ExternalInvoke";
  i.Destroy = "Destroy";
  i.TableHeader = "TableHeader";
  i.MultiTextSelectionDrag = "MultiTextSelectionDrag";
  i.MultiTextSelectionNonDrag = "MultiTextSelectionNonDrag";
  i.ARROW_PRESS = "arrowPress";
  i.HOTKEY = "hotkey";
  i.Backspace = "Backspace";
  i.CUSTOM_MENU_CONTROL = "CUSTOM_MENU_CONTROL";
  i.KeyboardSelectAll = "KeyboardSelectAll";
  i.OKRKeyboardSelectAll = "OKRKeyboardSelectAll";
  i.EditControl = "EditControl";
  i.Follow = "Follow";
  i.ClickOnBottom = "ClickOnBottom";
  i.FixContextMenuSelection = "FixContextMenuSelection";
  i.ModifySequence = "ModifySequence";
  i.RevisionControl = "RevisionControl";
  i.IPadAppRemoveAllSelection = "IPadAppRemoveAllSelection";
  i.ClickViewComment = "ClickViewComment";
  i.ClickViewRevision = "ClickViewRevision";
  i.AISummary = "AISummary";
  i.SwitchDocsMode = "SwitchDocsMode";
  i.CopyAllDoc = "CopyAllDoc";
  i.AIPartialWritingRestoreSelection = "AIPartialWritingRestoreSelection";
  let c = i;
  require.d(exports, {
    commandTypes: function () {
      return c;
    },
    blockTypes: function () {
      return l;
    }
  });
}