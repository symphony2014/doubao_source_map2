// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'loadWritingSkillChatInput'
// - Renamed export 'Q' to 'lazyWritingSkillChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 190562
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function o() {
    return Promise.all([require.e("writing-skills-carousel-ui") /*id: 42241*/, require.e("writing-skill-chat-input") /*id: 73971*/]).then(require.bind(require, "writing-skill-chat-input") /*id: 859879*/);
  }
  let a = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => o()
  }));
  require.d(exports, {
    loadWritingSkillChatInput: function () {
      return o;
    },
    lazyWritingSkillChatInput: function () {
      return a;
    }
  });
}