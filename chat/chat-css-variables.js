// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'layoutCssVars'
// - Renamed export 'I' to 'chatCssVars'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 86127
         */
module.exports = function (module, exports, require) {
  var chatInputGuidance = require("chat-input-guidance") /*id: 495426*/;
  let r = {
    "--sidebar-width": "280px",
    "--header-height": "56px",
    "--content-max-width": "800px",
    "--chat-area-max-width": "800px",
    "--transition-duration-slow": "0.3s",
    "--ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    "--s-color-bg-mask": "rgba(0, 0, 0, 0.3)",
    "--scrollbar-color": "#ccc",
    "--scrollbar-hover-color": "#999",
    "--input-guidance-input-caret-color": "var(--s-color-accents-blue)",
    "--input-guidance-input-container-max-height": "300px",
    "--input-guidance-input-container-min-height": "140px",
    "--input-guidance-input-text-area-max-height": `${chatInputGuidance.inputGuidanceTime}px`,
    "--input-guidance-input-container-padding": "6px",
    "--input-guidance-input-container-radius": "20px",
    "--input-guidance-input-container-border-color": "var(--s-color-border-secondary)",
    "--input-guidance-input-container-background": "var(--s-color-bg-float)",
    "--input-guidance-input-container-gap": "6px",
    "--input-guidance-input-editor-min-height": "56px",
    "--input-guidance-input-editor-color": "var(--s-color-text-secondary)",
    "--input-guidance-input-editor-placeholder-color": "var(--s-color-text-quaternary)",
    "--input-guidance-input-bottom-height": "36px",
    "--input-icon-size-full": "32px",
    "--input-icon-size-small": "28px",
    "--chat-input-icon-size": "18px",
    "--chat-input-icon-size-small": "16px",
    "--chat-input-skill-button-padding": "3px 6px",
    "--chat-input-skill-border-radius": "20px",
    "--tool-button-bar-bottom": "6px",
    "--tool-button-bar-padding": "0 6px",
    "--skillbar-min-height": "150px",
    "--greeting-slider-width": "32px",
    "--greeting-height": "45px",
    "--super-agent-switch-height": "36px",
    "--suggest-bubble-gap": "8px"
  };
  let o = {
    "--sidebar-width": "260px",
    "--header-height": "62px"
  };
  require.d(exports, {
    layoutCssVars: function () {
      return o;
    },
    chatCssVars: function () {
      return r;
    }
  });
}