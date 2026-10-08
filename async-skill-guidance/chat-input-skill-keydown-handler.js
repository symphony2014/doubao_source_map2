// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'useChatInputSkillKeyHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: exercise-skill-chat-input.85b36601.js
         * chunkId: 49651
         * moduleId: 299053
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var inputKeyCheckers = require("input-key-checkers") /*id: 415984*/;
  var useCleanupOnUnmount = require("use-cleanup-on-unmount") /*id: 942235*/;
  var chatSkillExitHook = require("chat-skill-exit-hook") /*id: 123849*/;
  let d = e => {
    let {
      editorValue: t,
      closeSkillOnEsc: i = true,
      closeSkillOnBackspace: d = true,
      onResetEditorValue: u,
      onSubmit: p,
      onCloseSkillEvent: h,
      allowEmptySubmit: f = false,
      attachmentCanNotSend: m = false
    } = e;
    let g = chatViewCoreSelectors.useChatId();
    let {
      onKeyDownExitSkill: _
    } = chatSkillExitHook.useSkillExitHook({
      onCloseSkillEvent: h
    });
    let v = !t || inputToolConverter.extractText(t.data) === "";
    let y = !t || inputToolConverter.extractText(t.data).trim() === "";
    let b = chatSkillExitHook.useCompositionRef();
    useCleanupOnUnmount.useCleanupOnUnmount({
      resetFn: () => u == null ? undefined : u()
    });
    return {
      handleKeyDown: e => {
        if (inputKeyCheckers.isEnterKey(e)) {
          if (!userAgentDeviceDetector.isMobileOrIOS()) {
            e.preventDefault();
          }
          if (m) {
            return;
          }
          if (!y || f) {
            if (p != null) {
              p();
            }
          }
        }
        if (v && inputKeyCheckers.isBackspaceKey(e) && d && !b.current) {
          e.preventDefault();
          chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(g || "");
          if (h != null) {
            h();
          }
        }
        if (i) {
          _(e);
        }
      }
    };
  };
  require.d(exports, {
    useChatInputSkillKeyHandler: function () {
      return d;
    }
  });
}