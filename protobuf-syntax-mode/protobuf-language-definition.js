// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24857.dd42d69c.js
         * chunkId: 24857
         * moduleId: 620885
         */
module.exports = function (module, exports, require) {
  var a = ["package", "message", "import", "syntax", "required", "optional", "repeated", "reserved", "default", "extensions", "packed", "bool", "bytes", "double", "enum", "float", "string", "int32", "int64", "uint32", "uint64", "sint32", "sint64", "fixed32", "fixed64", "sfixed32", "sfixed64", "option", "service", "rpc", "returns"];
  var i = RegExp("^((" + a.join(")|(") + "))\\b", "i");
  var o = RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");
  let r = {
    name: "protobuf",
    token: function (e) {
      if (e.eatSpace()) {
        return null;
      } else if (e.match("//")) {
        e.skipToEnd();
        return "comment";
      } else if (e.match(/^[0-9\.+-]/, false) && (e.match(/^[+-]?0x[0-9a-fA-F]+/) || e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/) || e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))) {
        return "number";
      } else if (e.match(/^"([^"]|(""))*"/) || e.match(/^'([^']|(''))*'/)) {
        return "string";
      } else if (e.match(i)) {
        return "keyword";
      } else if (e.match(o)) {
        return "variable";
      } else {
        e.next();
        return null;
      }
    },
    languageData: {
      autocomplete: a
    }
  };
  require.r(exports);
  require.d(exports, {
    protobuf: function () {
      return r;
    }
  });
}