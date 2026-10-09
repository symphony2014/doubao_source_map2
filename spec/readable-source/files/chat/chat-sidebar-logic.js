// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KW' to 'getSidebarConfig'
// - Renamed export 'xI' to 'checkSidebarFlag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 265614
         */
module.exports = function (module, exports, require) {
  let i = e => e != null && !!e.includes("flow_ssr_sidebar_expand=1") || (e == null || !e.includes("flow_ssr_sidebar_expand=0")) && undefined;
  let r = ["enter_page"];
  let o = e => r.includes(e) ? {
    whether_sidebar_show: i(typeof document != "undefined" ? document.cookie : undefined) ? "1" : "2"
  } : {};
  require.d(exports, {
    getSidebarConfig: function () {
      return o;
    },
    checkSidebarFlag: function () {
      return i;
    }
  });
}