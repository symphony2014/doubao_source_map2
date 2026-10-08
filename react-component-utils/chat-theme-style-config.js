// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'chatThemeConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 400045
         */
module.exports = function (module, exports, require) {
  let r = {
    coco: {
      cssVar: {
        "--send-text-content-link-color": "var(--s-color-text-invert-secondary, rgba(255, 255, 255, 0.85))",
        "--send-text-content-link-decoration-color": "var(--s-color-text-invert-intact-quaternary,rgba(255, 255, 255, 0.35))"
      },
      sendClassNames: ["text-white", "!bg-[#06f]", "rounded-2xl", "py-16", "px-12"],
      receiveClassNames: ["py-16", "px-12", "rounded-2xl", "bg-[#f5f5f5]", "!w-fit", "max-w-full", "min-w-0"]
    },
    "coco-immerse": {
      cssVar: {
        "--send-text-content-link-color": "var(--Text-color_text_invert_secondary, rgba(255, 255, 255, 0.85))",
        "--send-text-content-active-link-color": "--s-color-text-invert-primary, rgb(255, 255, 255))",
        "--send-text-content-link-decoration-color": "var(--s-color-text-invert-intact-quaternary,rgba(255, 255, 255, 0.35))"
      },
      sendClassNames: ["text-white", "!bg-black", "rounded-2xl", "py-16", "px-12"],
      receiveClassNames: ["py-16", "px-12", "rounded-2xl", "bg-[#f5f5f5]", "!w-fit", "max-w-full", "min-w-0"]
    },
    samantha: {
      cssVar: {},
      sendClassNames: ["!text-[length:var(--message-send-text-content-font-size,16px)]"],
      receiveClassNames: [],
      receivePluginContainerClassNames: []
    }
  };
  require.d(exports, {
    chatThemeConfig: function () {
      return r;
    }
  });
}