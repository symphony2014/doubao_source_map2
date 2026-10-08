// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'createProtobufCodec'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 98114
         */
module.exports = function (module, exports, require) {
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  function n(e, t, i, s = false) {
    if (!e.includes(".") && i) {
      protobufDescriptorRootExport.descriptorRoot.define(e).addJSON({
        [t]: i
      });
    }
    let o = protobufDescriptorRootExport.descriptorRoot.lookupType(`${e}.${t}`);
    return {
      encode: e => o.encode(e).finish(),
      decode: e => s ? o.toObject(o.decode(e), {
        enums: Number,
        longs: String
      }) : o.decode(e),
      create: e => o.create(e)
    };
  }
  require.d(exports, {
    createProtobufCodec: function () {
      return n;
    }
  });
}