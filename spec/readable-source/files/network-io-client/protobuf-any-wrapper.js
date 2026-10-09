// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'protobufMessageWrapper_1'
// - Resolved require(720905) to 'protobuf-message-wrapper_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 871608
         */
module.exports = function (module, exports, require) {
  var n = exports;
  var protobufMessageWrapper_1 = require("protobuf-message-wrapper_1") /*id: 720905*/;
  n[".google.protobuf.Any"] = {
    fromObject: function (e) {
      if (e && e["@type"]) {
        var t = this.lookup(e["@type"]);
        if (t) {
          var r = e["@type"].charAt(0) === "." ? e["@type"].substr(1) : e["@type"];
          return this.create({
            type_url: "/" + r,
            value: t.encode(t.fromObject(e)).finish()
          });
        }
      }
      return this.fromObject(e);
    },
    toObject: function (e, t) {
      if (t && t.json && e.type_url && e.value) {
        var r = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
        var n = this.lookup(r);
        if (n) {
          e = n.decode(e.value);
        }
      }
      if (!(e instanceof this.ctor) && e instanceof protobufMessageWrapper_1) {
        var s = e.$type.toObject(e, t);
        s["@type"] = e.$type.fullName;
        return s;
      }
      return this.toObject(e, t);
    }
  };
}