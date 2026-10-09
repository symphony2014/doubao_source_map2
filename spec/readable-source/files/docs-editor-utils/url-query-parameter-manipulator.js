// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FH' to 'setQueryParameter'
// - Renamed export 'qD' to 'isAiShownInQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 551064
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  function i(e, n, r) {
    if (!r) {
      return e;
    }
    let o = RegExp(`([?&])${n}=.*?(&|$)`, "i");
    let i = e.indexOf("?") !== -1 ? "&" : "?";
    if (e.match(o)) {
      return e.replace(o, `$1${n}=${r}$2`);
    } else {
      return `${e + i + n}=${r}`;
    }
  }
  function l() {
    let {
      showAI: e
    } = platformDocUtils.o0s.parseQuery(window.location.href);
    return e === "true" || e === "1";
  }
  require("browser-environment-detection-utils") /*id: 744607*/;
  require.d(exports, {
    setQueryParameter: function () {
      return i;
    },
    isAiShownInQuery: function () {
      return l;
    }
  });
}