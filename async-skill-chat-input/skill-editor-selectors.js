// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bw' to 'selectDocFocus'
// - Renamed export 'h2' to 'selectUrlFocus'
// - Renamed export 'hk' to 'selectUrlValue'
// - Renamed export 'Zd' to 'selectLatestRead'
// - Renamed export 'gT' to 'selectReadInitiated'
// - Renamed export 'Ft' to 'selectGuidanceValue'
// - Renamed export 'zO' to 'selectPromptValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 505497
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var skillEditorStateStores = require("skill-editor-state-stores") /*id: 168235*/;
  let o = function (e, t = deepEqualityUtil_1.isDeepEqual) {
    let n = function () {
      var n = arguments.length;
      var i = Array(n);
      var o = 0;
      for (; o < n; o++) {
        i[o] = arguments[o];
      }
      return skillEditorStateStores.skillEditorStore(t => e(t, ...i), t);
    };
    n.raw = e;
    return n;
  };
  let a = o(e => e.urlEditorValue);
  o(e => e.linkEditorValue);
  let s = o(e => e.promptEditorValue);
  let l = o(e => e.guidanceEditorValue);
  let u = o(e => e.readDocEditorFocused);
  let c = o(e => e.readUrlEditorFocused);
  let d = o(e => e.latestRead);
  let p = o(e => e.latestReadInitiated);
  require.d(exports, {
    selectDocFocus: function () {
      return u;
    },
    selectUrlFocus: function () {
      return c;
    },
    selectUrlValue: function () {
      return a;
    },
    selectLatestRead: function () {
      return d;
    },
    selectReadInitiated: function () {
      return p;
    },
    selectGuidanceValue: function () {
      return l;
    },
    selectPromptValue: function () {
      return s;
    }
  });
}