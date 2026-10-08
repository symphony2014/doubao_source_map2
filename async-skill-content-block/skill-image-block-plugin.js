// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageSummaryCard'
// - Resolved require(522867) to 'skill-message-summary-card'
// - Renamed variable 'r' to 'receiveImageBlockSymbol'
// - Resolved require(59518) to 'receive-image-block-symbol'
// - Updated imported property 'x' to 'imageBlockContentKey' (module 59518)
// - Updated imported property 'F' to 'SkillMessageCard' (module 522867)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 843588
         */
module.exports = function (module, exports, require) {
  var skillMessageSummaryCard = require("skill-message-summary-card") /*id: 522867*/;
  var receiveImageBlockSymbol = require("receive-image-block-symbol") /*id: 59518*/;
  function o(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class l {
    constructor() {
      o(this, "pluginIdentifier", receiveImageBlockSymbol.imageBlockContentKey);
      o(this, "type", "Content");
      o(this, "Content", skillMessageSummaryCard.SkillMessageCard);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveImageBlockContentPlugin: function () {
      return l;
    }
  });
}