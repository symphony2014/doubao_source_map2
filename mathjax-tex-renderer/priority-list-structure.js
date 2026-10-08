// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 591133
         */
module.exports = function (module, exports, require) {
  exports.PrioritizedList = undefined;
  var Q = function () {
    function t() {
      this.items = [];
      this.items = [];
    }
    t.prototype[Symbol.iterator] = function () {
      var t = 0;
      var e = this.items;
      return {
        next: function () {
          return {
            value: e[t++],
            done: t > e.length
          };
        }
      };
    };
    t.prototype.add = function (e, Q = t.DEFAULTPRIORITY) {
      var r = this.items.length;
      do {
        r--;
      } while (r >= 0 && Q < this.items[r].priority);
      this.items.splice(r + 1, 0, {
        item: e,
        priority: Q
      });
      return e;
    };
    t.prototype.remove = function (t) {
      var e = this.items.length;
      do {
        e--;
      } while (e >= 0 && this.items[e].item !== t);
      if (e >= 0) {
        this.items.splice(e, 1);
      }
    };
    t.DEFAULTPRIORITY = 5;
    return t;
  }();
  exports.PrioritizedList = Q;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}