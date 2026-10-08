// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Js' to 'setPasteSource'
// - Renamed export 'Qh' to 'refreshPasteFlag'
// - Renamed export 'Sk' to 'getPasteFlag'
// - Renamed export 'WK' to 'getPasteState'
// - Renamed export 'Wn' to 'pasteStateMap'
// - Renamed export 'Xb' to 'incrementPasteTimes'
// - Renamed export '_T' to 'resetPasteTimes'
// - Renamed export 'oT' to 'clearPasteState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 764327
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  require("doc-block-type-constants") /*id: 433991*/;
  let i = new Map();
  let l = uuidGeneratorUtil.generateUuid();
  let a = {
    pasteTimes: 0,
    from: null,
    pasteFlag: l
  };
  let c = () => a;
  let u = e => {
    a.from = e;
  };
  let s = () => {
    a.pasteTimes = 0;
  };
  let d = () => {
    a.pasteTimes++;
  };
  let h = () => l;
  let f = () => {
    l = uuidGeneratorUtil.generateUuid();
    a.pasteFlag = l;
  };
  let p = () => {
    u(null);
    s();
  };
  require.d(exports, {
    setPasteSource: function () {
      return u;
    },
    refreshPasteFlag: function () {
      return f;
    },
    getPasteFlag: function () {
      return h;
    },
    getPasteState: function () {
      return c;
    },
    pasteStateMap: function () {
      return i;
    },
    incrementPasteTimes: function () {
      return d;
    },
    resetPasteTimes: function () {
      return s;
    },
    clearPasteState: function () {
      return p;
    }
  });
}