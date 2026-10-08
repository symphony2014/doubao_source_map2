// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'useToastFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 219785
         */
module.exports = function (module, exports, require) {
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  let a = () => {
    let {
      toastConfig: e,
      getPopupContainer: t
    } = chatContextUtil.useChatContext({
      optionalProvider: true
    });
    return e || {
      success: (e, n) => samanthaToastFactory.defaultToast.success({
        ...n,
        content: e,
        showClose: false,
        getPopupContainer: t
      }),
      error: (e, n) => samanthaToastFactory.defaultToast.error({
        ...n,
        content: e,
        showClose: false,
        getPopupContainer: t
      }),
      info: (e, n) => samanthaToastFactory.defaultToast.info({
        ...n,
        content: e,
        showClose: false,
        getPopupContainer: t
      }),
      warning: (e, n) => samanthaToastFactory.defaultToast.warning({
        ...n,
        content: e,
        showClose: false,
        getPopupContainer: t
      })
    };
  };
  require.d(exports, {
    useToastFactory: function () {
      return a;
    }
  });
}