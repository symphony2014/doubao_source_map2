// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jW' to 'extractRawUrl'
// - Renamed export 'nw' to 'normalizeLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-markdown-common-meta-render-plugin.cced7776.js
         * chunkId: 26875
         * moduleId: 365828
         */
module.exports = function (module, exports, require) {
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let a = "fpa_replacement";
  let l = e => {
    if (userAgentDeviceDetector.isMobile()) {
      if (e.startsWith("coco://")) {
        e = `doubao://${e.slice(7)}`;
      }
      return `coco://${a}?raw=${encodeURIComponent(e)}`;
    }
    {
      let t = urlParamUtils.parseUrlSafe(e);
      let n = t == null ? undefined : t.searchParams.get("pc_link");
      if (n) {
        if (n.startsWith("/")) {
          return `${location.origin}${n}`;
        } else {
          return n;
        }
      }
    }
  };
  let o = e => {
    let t = new URL(e);
    if (t.host !== a) {
      return null;
    } else {
      return t.searchParams.get("raw");
    }
  };
  require.d(exports, {
    extractRawUrl: function () {
      return o;
    },
    normalizeLink: function () {
      return l;
    }
  });
}