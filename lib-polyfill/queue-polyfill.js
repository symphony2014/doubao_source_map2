// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 227116
         */
module.exports = function (module, exports, require) {
  function r() {
    this.head = null;
    this.tail = null;
  }
  r.prototype = {
    add: function (t) {
      var r = {
        item: t,
        next: null
      };
      var e = this.tail;
      if (e) {
        e.next = r;
      } else {
        this.head = r;
      }
      this.tail = r;
    },
    get: function () {
      var t = this.head;
      if (t) {
        if ((this.head = t.next) === null) {
          this.tail = null;
        }
        return t.item;
      }
    }
  };
  module.exports = r;
}