// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GT' to 'closeCreditPanel'
// - Renamed export 'JA' to 'isCreditPanelOpen'
// - Renamed export 'kJ' to 'openCreditPanel'
// - Renamed export 'wn' to 'triggerIfPanelOpen'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 714047
         */
module.exports = function (module, exports, require) {
  var uiPanelConstants = require("ui-panel-constants") /*id: 263908*/;
  let r = "openCreditPanel";
  let o = () => {
    let {
      hash: e
    } = window.location;
    return new URLSearchParams(e.substring(1)).get(r) === "1";
  };
  let l = e => {
    try {
      if (o()) {
        e({
          scene: uiPanelConstants.panelConstants.MainPanel,
          from: "menu"
        });
      }
    } catch (e) {
      return;
    }
  };
  let a = () => {
    let e = new URLSearchParams(location.hash.slice(1));
    e.delete(r);
    if (e.size === 0) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    } else {
      location.hash = e.toString();
    }
  };
  let s = () => {
    let e = new URLSearchParams(location.hash.slice(1));
    if (e.get(r) !== "1") {
      e.set(r, "1");
      location.hash = e.toString();
    }
  };
  require.d(exports, {
    closeCreditPanel: function () {
      return a;
    },
    isCreditPanelOpen: function () {
      return o;
    },
    openCreditPanel: function () {
      return s;
    },
    triggerIfPanelOpen: function () {
      return l;
    }
  });
}