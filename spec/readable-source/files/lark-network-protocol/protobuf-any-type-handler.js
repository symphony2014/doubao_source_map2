// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufMessageWrapper'
// - Resolved require(280355) to 'protobuf-message-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 545757
         */
module.exports = function (module, exports, require) {
  var protobufMessageWrapper = require("protobuf-message-wrapper") /*id: 280355*/;
  exports[".google.protobuf.Any"] = {
    fromObject: function (e) {
      if (e && e["@type"]) {
        var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1);
        var i = this.lookup(t);
        if (i) {
          var r = e["@type"].charAt(0) === "." ? e["@type"].substr(1) : e["@type"];
          if (r.indexOf("/") === -1) {
            r = "/" + r;
          }
          return this.create({
            type_url: r,
            value: i.encode(i.fromObject(e)).finish()
          });
        }
      }
      return this.fromObject(e);
    },
    toObject: function (e, t) {
      var i = "";
      var n = "";
      if (t && t.json && e.type_url && e.value) {
        n = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
        i = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
        var s = this.lookup(n);
        if (s) {
          e = s.decode(e.value);
        }
      }
      if (!(e instanceof this.ctor) && e instanceof protobufMessageWrapper) {
        var o = e.$type.toObject(e, t);
        if (i === "") {
          i = "type.googleapis.com/";
        }
        n = i + (e.$type.fullName[0] === "." ? e.$type.fullName.substr(1) : e.$type.fullName);
        o["@type"] = n;
        return o;
      }
      return this.toObject(e, t);
    }
  };
}