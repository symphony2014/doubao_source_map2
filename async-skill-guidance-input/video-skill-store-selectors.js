// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'xg' to 'useVideoSkillFocusedSelector'
// - Renamed export 'oQ' to 'useVideoSkillEditorValueSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 921960
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var videoSkillStore = require("video-skill-store") /*id: 297271*/;
  let l = function (e, t = deepEqualityUtil_1.isDeepEqual) {
    let n = function () {
      var n = arguments.length;
      var i = Array(n);
      var l = 0;
      for (; l < n; l++) {
        i[l] = arguments[l];
      }
      return videoSkillStore.useVideoSkillStore(t => e(t, ...i), t);
    };
    n.raw = e;
    return n;
  };
  let a = l(e => e.editorValue);
  let o = l(e => e.focused);
  require.d(exports, {
    useVideoSkillFocusedSelector: function () {
      return o;
    },
    useVideoSkillEditorValueSelector: function () {
      return a;
    }
  });
}