// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'refCounterUtil'
// - Resolved require(548726) to 'ref-counter-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 680465
         */
module.exports = function (module, exports, require) {
  var r = this && this.__assign || function () {
    return (r = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  exports.__esModule = true;
  var refCounterUtil = require("ref-counter-util") /*id: 548726*/;
  exports.getRefCountedManager = function (t, e, n) {
    var o = refCounterUtil.getObjectRefCounter(e, n);
    t.getItems().forEach(function (t) {
      return o.add(t);
    });
    var s = r({}, t);
    s.add = function (e) {
      if (e) {
        var n = e.filter(function (t) {
          return t;
        });
        var r = n.filter(function (t) {
          return o.getCount(t) === 0;
        });
        t.add(r);
        n.forEach(o.add);
      }
    };
    s.remove = function (e) {
      if (e) {
        e.forEach(function (e) {
          if (e) {
            o.remove(e);
            if (o.getCount(e) === 0) {
              t.remove([e]);
            }
          }
        });
      }
    };
    s.dispose = function () {
      t.dispose();
    };
    return s;
  };
}