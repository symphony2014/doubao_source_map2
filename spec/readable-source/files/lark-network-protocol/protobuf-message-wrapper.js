// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufUtilityModule'
// - Resolved require(127374) to 'protobuf-utility-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 280355
         */
module.exports = function (module, exports, require) {
  module.exports = n;
  var protobufUtilityModule = require("protobuf-utility-module") /*id: 127374*/;
  function n(e) {
    if (e) {
      var t = Object.keys(e);
      var i = 0;
      for (; i < t.length; ++i) {
        this[t[i]] = e[t[i]];
      }
    }
  }
  n.create = function (e) {
    return this.$type.create(e);
  };
  n.encode = function (e, t) {
    return this.$type.encode(e, t);
  };
  n.encodeDelimited = function (e, t) {
    return this.$type.encodeDelimited(e, t);
  };
  n.decode = function (e) {
    return this.$type.decode(e);
  };
  n.decodeDelimited = function (e) {
    return this.$type.decodeDelimited(e);
  };
  n.verify = function (e) {
    return this.$type.verify(e);
  };
  n.fromObject = function (e) {
    return this.$type.fromObject(e);
  };
  n.toObject = function (e, t) {
    return this.$type.toObject(e, t);
  };
  n.prototype.toJSON = function () {
    return this.$type.toObject(this, protobufUtilityModule.toJSONOptions);
  };
}