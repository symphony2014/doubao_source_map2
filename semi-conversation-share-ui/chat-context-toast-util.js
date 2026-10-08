// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'useChatToastUtil'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 559763
         */
module.exports = function (module, exports, require) {
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  let i = () => {
    let {
      toastConfig: e
    } = chatContextUtil.useChatContext();
    if (e) {
      return {
        success: t => e.success(t.content),
        error: t => e.error(t.content),
        info: t => e.info(t.content),
        warning: t => e.warning(t.content)
      };
    } else {
      return {
        success: e => samanthaToastFactory.defaultToast.success({
          ...e
        }),
        error: e => samanthaToastFactory.defaultToast.error({
          ...e
        }),
        info: e => samanthaToastFactory.defaultToast.info({
          ...e
        }),
        warning: e => samanthaToastFactory.defaultToast.warning({
          ...e
        })
      };
    }
  };
  require.d(exports, {
    useChatToastUtil: function () {
      return i;
    }
  });
}