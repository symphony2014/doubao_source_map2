// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 548726
         */
module.exports = function (module, exports, require) {
  exports.__esModule = true;
  exports.getObjectRefCounter = function (t, e) {
    t ||= function (t, e) {
      return t === e;
    };
    e ||= function () {
      return false;
    };
    var n = [];
    var r = [];
    return {
      getCount: function (e) {
        if (e == null) {
          return 0;
        }
        var i = n.findIndex(function (n) {
          return n && t(n, e);
        });
        if (i === -1) {
          return 0;
        } else {
          return r[i];
        }
      },
      add: function (i) {
        if (i != null) {
          var o = n.findIndex(function (e) {
            return e && t(e, i);
          });
          var s = 1;
          if (o === -1) {
            o = n.length;
            n.push(i);
          } else {
            s = r[o] + 1;
          }
          if (e(i)) {
            s = Infinity;
          }
          r[o] = s;
        }
      },
      remove: function (i) {
        if (e(i)) {
          return false;
        }
        var o = n.findIndex(function (e) {
          return e && t(e, i);
        });
        return o !== -1 && (r[o] === 1 ? (delete n[o], delete r[o], true) : (r[o] = r[o] - 1, false));
      }
    };
  };
  exports.getStringRefCounter = function () {
    var t = {};
    return {
      getCount: function (e) {
        if (e == null) {
          return 0;
        } else {
          return t[e] || 0;
        }
      },
      add: function (e) {
        if (e != null) {
          if (t[e]) {
            t[e]++;
          } else {
            t[e] = 1;
          }
        }
      },
      remove: function (e) {
        return e != null && !!t[e] && (t[e] === 1 ? (delete t[e], true) : (t[e]--, false));
      }
    };
  };
}