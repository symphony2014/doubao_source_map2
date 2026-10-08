// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 378631
         */
module.exports = function (module, exports, require) {
  exports.__esModule = true;
  exports.getMap = function (t) {
    var e = [];
    var n = {};
    return {
      keys: e,
      get: function (r) {
        if (r) {
          var i = e.findIndex(function (e) {
            return e && t(e, r);
          });
          if (i !== -1) {
            return n[i];
          }
        }
      },
      add: function (r, i) {
        if (r && e.findIndex(function (e) {
          return e && t(e, r);
        }) === -1) {
          e.push(r);
          n[e.length - 1] = i;
        }
      },
      remove: function (r) {
        if (r) {
          var i = e.findIndex(function (e) {
            return e && t(e, r);
          });
          if (i !== -1) {
            delete e[i];
            var o = n[i];
            delete n[i];
            return o;
          }
        }
      }
    };
  };
}