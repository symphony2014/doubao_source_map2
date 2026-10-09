// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'ExternalLinkTransformer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 844886
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var secureLinkWindowOpenOverride = require("secure-link-window-open-override") /*id: 913157*/;
  function l(e, t, n) {
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
  let a = [["d", "o", "u", "b", "a", "o", ".", "c", "o", "m"], ["c", "i", "c", "i", "a", "i", ".", "c", "o", "m"], ["c", "i", "c", "i", ".", "c", "o", "m"], ["d", "o", "l", "a", ".", "c", "o", "m"], ["t", "i", "k", "t", "o", "k", ".", "c", "o", "m"], ["d", "o", "u", "y", "i", "n", ".", "c", "o", "m"], ["b", "y", "t", "e", "d", "a", "n", "c", "e", ".", "c", "o", "m"]].map(e => e.join(""));
  class s {
    static isExternalLink(e) {
      let {
        hostname: t
      } = window.location;
      if (!secureLinkWindowOpenOverride.isValidUrl(e)) {
        return false;
      }
      let n = false;
      try {
        let i = new URL(e).hostname.toLocaleLowerCase();
        n = i !== t && !s.whitelist.some(e => i.endsWith(`.${e}`) || i === e);
      } catch (e) {}
      return n;
    }
    static transform(e) {
      if (s.getEnableTransform() && e && s.isExternalLink(e)) {
        return `https://www.doubao.com/to?target=${encodeURIComponent(e)}`;
      } else {
        return e;
      }
    }
    getWhitelist() {
      return s.whitelist;
    }
    constructor() {}
  }
  l(s, "whitelist", [...a]);
  l(s, "getEnableTransform", () => chatFgStoreHooks.getSourceKeySync("is_eu", {
    source: chatStorageKeys.chatStorageKeys.setting,
    defaultValue: false
  }));
  require.d(exports, {
    ExternalLinkTransformer: function () {
      return s;
    }
  });
}