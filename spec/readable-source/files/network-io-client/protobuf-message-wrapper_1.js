// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufUtilityModule_2'
// - Resolved require(959925) to 'protobuf-utility-module_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 720905
         */
module.exports = function (module, exports, require) {
  module.exports = i;
  var protobufUtilityModule_2 = require("protobuf-utility-module_2") /*id: 959925*/;
  function i(e) {
    if (e) {
      var t = Object.keys(e);
      var r = 0;
      for (; r < t.length; ++r) {
        this[t[r]] = e[t[r]];
      }
    }
  }
  i.create = function (e) {
    return this.$type.create(e);
  };
  i.encode = function (e, t) {
    return this.$type.encode(e, t);
  };
  i.encodeDelimited = function (e, t) {
    return this.$type.encodeDelimited(e, t);
  };
  i.decode = function (e) {
    return this.$type.decode(e);
  };
  i.decodeDelimited = function (e) {
    return this.$type.decodeDelimited(e);
  };
  i.verify = function (e) {
    return this.$type.verify(e);
  };
  i.fromObject = function (e) {
    return this.$type.fromObject(e);
  };
  i.toObject = function (e, t) {
    return this.$type.toObject(e, t);
  };
  i.prototype.toJSON = function () {
    return this.$type.toObject(this, protobufUtilityModule_2.toJSONOptions);
  };
}