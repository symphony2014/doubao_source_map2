// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 81083
         */
module.exports = function (module, exports, require) {
  module.exports = class {
    constructor(e) {
      this.stateTable = e.stateTable;
      this.accepting = e.accepting;
      this.tags = e.tags;
    }
    match(e) {
      var t = this;
      return {
        *[Symbol.iterator]() {
          var r = 1;
          var n = null;
          var i = null;
          var o = null;
          var a = 0;
          for (; a < e.length; a++) {
            var s = e[a];
            o = r;
            if ((r = t.stateTable[r][s]) === 0) {
              if (n != null && i != null && i >= n) {
                yield [n, i, t.tags[o]];
              }
              r = t.stateTable[1][s];
              n = null;
            }
            if (r !== 0 && n == null) {
              n = a;
            }
            if (t.accepting[r]) {
              i = a;
            }
            if (r === 0) {
              r = 1;
            }
          }
          if (n != null && i != null && i >= n) {
            yield [n, i, t.tags[r]];
          }
        }
      };
    }
    apply(e, t) {
      for (var [r, n, i] of this.match(e)) {
        for (var o of i) {
          if (typeof t[o] == "function") {
            t[o](r, n, e.slice(r, n + 1));
          }
        }
      }
    }
  };
}