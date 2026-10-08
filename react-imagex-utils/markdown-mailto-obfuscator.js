// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'createMailtoPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 268250
         */
module.exports = function (module, exports, require) {
  function r() {
    return {
      mangle: false,
      walkTokens(e) {
        if (e.type !== "link" || !e.href.startsWith("mailto:")) {
          return;
        }
        let t = e.href.substring(7);
        let n = function (e) {
          let t = "";
          let n;
          let r;
          let i = e.length;
          for (n = 0; n < i; n++) {
            r = e.charCodeAt(n);
            if (Math.random() > 0.5) {
              r = "x" + r.toString(16);
            }
            t += "&#" + r + ";";
          }
          return t;
        }(t);
        e.href = `mailto:${n}`;
        if (e.tokens.length === 1 && e.tokens[0].type === "text" && e.tokens[0].text === t) {
          e.text = n;
          e.tokens[0].text = n;
        }
      }
    };
  }
  require.d(exports, {
    createMailtoPlugin: function () {
      return r;
    }
  });
}