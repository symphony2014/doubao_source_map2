// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'shuffle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 341643
         */
module.exports = function (module, exports, require) {
  var arrayCopyUtil = require("array-copy-util") /*id: 996367*/;
  var utilsRandomInt = require("utils-random-int") /*id: 717626*/;
  function o(t, e) {
    var n = -1;
    var i = t.length;
    var o = i - 1;
    for (e = e === undefined ? i : e; ++n < e;) {
      var a = utilsRandomInt.randomInt(n, o);
      var s = t[a];
      t[a] = t[n];
      t[n] = s;
    }
    t.length = e;
    return t;
  }
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  function h(t) {
    return (arrayIsArrayUtil.isArray(t) ? function (t) {
      return o(arrayCopyUtil.copyArray(t));
    } : function (t) {
      return o(objectValuesHelper.getObjectValues(t));
    })(t);
  }
  require.d(exports, {
    shuffle: function () {
      return h;
    }
  });
}