// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'breakpointConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 488875
         */
module.exports = function (module, exports, require) {
  let i = {
    "dbx-breakpoint-lg": {
      figmaName: "dbx-breakpoint/lg",
      tailwind: "dbx-lg",
      css: "var(--dbx-breakpoint-lg)",
      valueInPx: 1440,
      valueStringInPx: "1440px"
    },
    "dbx-breakpoint-md": {
      figmaName: "dbx-breakpoint/md",
      tailwind: "dbx-md",
      css: "var(--dbx-breakpoint-md)",
      valueInPx: 868,
      valueStringInPx: "868px"
    },
    "dbx-breakpoint-sm": {
      figmaName: "dbx-breakpoint/sm",
      tailwind: "dbx-sm",
      css: "var(--dbx-breakpoint-sm)",
      valueInPx: 640,
      valueStringInPx: "640px"
    },
    "dbx-breakpoint-xs": {
      figmaName: "dbx-breakpoint/xs",
      tailwind: "dbx-xs",
      css: "var(--dbx-breakpoint-xs)",
      valueInPx: 462,
      valueStringInPx: "462px"
    }
  };
  require.d(exports, {
    breakpointConstants: function () {
      return i;
    }
  });
}