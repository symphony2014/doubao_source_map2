// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: hashjs-256.6917a130.js
         * chunkId: 62121
         * moduleId: 595924
         */
module.exports = function (module, exports, require) {
  if (typeof Object.create == "function") {
    module.exports = function (t, n) {
      if (n) {
        t.super_ = n;
        t.prototype = Object.create(n.prototype, {
          constructor: {
            value: t,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    module.exports = function (t, n) {
      if (n) {
        t.super_ = n;
        function e() {}
        e.prototype = n.prototype;
        t.prototype = new e();
        t.prototype.constructor = t;
      }
    };
  }
}