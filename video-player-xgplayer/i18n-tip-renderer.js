// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'renderTip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 438742
         */
module.exports = function (module, exports, require) {
  function r(e, t, n) {
    try {
      return ` <div class="xg-tips ${n ? "hide" : " "}" lang-key="${e.i18nKeys[t]}">
    ${e.i18n[t]}
    </div>`;
    } catch (e) {
      return "<div class=\"xg-tips hide\"></div>";
    }
  }
  require.d(exports, {
    renderTip: function () {
      return r;
    }
  });
}