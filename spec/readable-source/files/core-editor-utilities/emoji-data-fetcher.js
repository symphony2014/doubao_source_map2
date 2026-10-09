// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'fetchEmojiData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 192361
         */
module.exports = function (module, exports, require) {
  let n = async e => {
    try {
      let {
        getPickData: t
      } = await Promise.all([require.e("emoji-picker-component") /*id: 24087*/, require.e("88435") /*id: emoji-picker*/]).then(require.bind(require, "emoji-data-config") /*id: 184968*/);
      let n = t(e);
      return Object.fromEntries(Object.entries(n.emojis).map(([e, t]) => [e, t == null ? undefined : t.skins[0].unified]));
    } catch (e) {
      return {};
    }
  };
  require.d(exports, {
    fetchEmojiData: function () {
      return n;
    }
  });
}