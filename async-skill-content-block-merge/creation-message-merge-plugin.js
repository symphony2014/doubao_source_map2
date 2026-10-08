// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'arrayIsArrayUtil'
// - Resolved require(447761) to 'array-is-array-util'
// - Renamed variable 'i' to 'chatReceiveBlockMerge'
// - Resolved require(110442) to 'chat-receive-block-merge'
// - Updated imported property 'M' to 'receiveBlockMerge' (module 110442)
// - Updated imported property 'Z' to 'isArray' (module 447761)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 956564
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var chatReceiveBlockMerge = require("chat-receive-block-merge") /*id: 110442*/;
  function o(t, e, n) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var n = t[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = n;
    }
    return t;
  }
  class u {
    constructor() {
      o(this, "pluginIdentifier", chatReceiveBlockMerge.receiveBlockMerge);
      o(this, "mergeContentBlock", (t, e) => {
        var u;
        if (!(e == null ? undefined : e.is_delta)) {
          return e;
        }
        if (!(t == null ? undefined : t.content_obj?.creations) || !arrayIsArrayUtil.isArray(t == null ? undefined : t.content_obj?.creations)) {
          return t;
        }
        let l = t == null ? undefined : (u = t.content_obj) === null || u === undefined ? undefined : u.creations.concat(e == null ? undefined : e.content_obj?.creations);
        return Object.assign(t, {
          content_obj: {
            creations: l
          }
        });
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    receiveCreationMessageContentBlockMergePlugin: function () {
      return u;
    }
  });
}