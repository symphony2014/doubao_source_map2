// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MB' to 'extractPlainText'
// - Renamed export 'b7' to 'getUnixTimestamp'
// - Renamed export 'gM' to 'serializeTextDelta'
// - Renamed export 'sp' to 'compareItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 192362
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  let a = () => Math.round(Date.now() / 1000);
  let s = e => {
    let n = new contentStructureDelta.ContentDelta().slice(0, 0);
    n.insert(e);
    return throttledPathFilterStringify.throttledPathStr(deltaSetChangesetConverter_1.extractAttributedTexts(new deltaSetCore.DeltaSet({
      [zeroConstantModule_1.versionValue]: n
    })), "initialAttributedTexts", "apool");
  };
  let d = e => deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.initialAttributedTexts, e.apool).get(zeroConstantModule_1.versionValue).ops.map(e => e.insert || "").join("");
  let f = (e, n) => {
    if (e.order && n.order) {
      if (e.order.index !== n.order.index) {
        return e.order.index - n.order.index;
      }
      if (e.order.subIndex !== n.order.subIndex) {
        return e.order.subIndex - n.order.subIndex;
      }
    }
    if (e.time && n.time) {
      return n.time - e.time;
    } else {
      return 0;
    }
  };
  let h = (e, n) => {
    let [r, o] = e;
    let [i, l] = n;
    if (r !== "" && i !== "" && (o || l)) {
      if (o) {
        if (l) {
          if (Math.abs(o.top - l.top) <= 1) {
            return f(o, l);
          } else {
            return o.top - l.top;
          }
        } else {
          return 1;
        }
      } else {
        return -1;
      }
    } else {
      return 0;
    }
  };
  require.d(exports, {
    extractPlainText: function () {
      return d;
    },
    getUnixTimestamp: function () {
      return a;
    },
    serializeTextDelta: function () {
      return s;
    },
    compareItems: function () {
      return h;
    }
  });
}