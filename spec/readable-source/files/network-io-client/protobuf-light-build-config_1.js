// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(918147) to 'protobuf-minimal-runtime-config'
// - Resolved require(650878) to 'protobuf-encoder-generator'
// - Resolved require(402317) to 'protobuf-message-decode-generator'
// - Resolved require(877666) to 'protobuf-message-verifier-generator'
// - Resolved require(484405) to 'protobuf-object-converter'
// - Resolved require(917994) to 'reflection-object'
// - Resolved require(32548) to 'protobuf-namespace-reflection-object'
// - Resolved require(259225) to 'protobuf-namespace-root'
// - Resolved require(767548) to 'protobuf-enum-class'
// - Resolved require(480559) to 'protobuf-type-class'
// - Resolved require(62763) to 'protobuf-field-definition'
// - Resolved require(299216) to 'protobuf-oneof-definition'
// - Resolved require(11234) to 'map-field-class'
// - Resolved require(658249) to 'protobuf-service-class'
// - Resolved require(627278) to 'rpc-method-class'
// - Resolved require(720905) to 'protobuf-message-wrapper_1'
// - Resolved require(871608) to 'protobuf-any-wrapper'
// - Resolved require(673143) to 'protobuf-type-defaults'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 592289
         */
module.exports = function (module, exports, require) {
  var n = module.exports = require("protobuf-minimal-runtime-config") /*id: 918147*/;
  function i(e, t, r) {
    if (typeof t == "function") {
      r = t;
      t = new n.Root();
    } else {
      t ||= new n.Root();
    }
    return t.load(e, r);
  }
  function s(e, t) {
    t ||= new n.Root();
    return t.loadSync(e);
  }
  n.build = "light";
  n.load = i;
  n.loadSync = s;
  n.encoder = require("protobuf-encoder-generator") /*id: 650878*/;
  n.decoder = require("protobuf-message-decode-generator") /*id: 402317*/;
  n.verifier = require("protobuf-message-verifier-generator") /*id: 877666*/;
  n.converter = require("protobuf-object-converter") /*id: 484405*/;
  n.ReflectionObject = require("reflection-object") /*id: 917994*/;
  n.Namespace = require("protobuf-namespace-reflection-object") /*id: 32548*/;
  n.Root = require("protobuf-namespace-root") /*id: 259225*/;
  n.Enum = require("protobuf-enum-class") /*id: 767548*/;
  n.Type = require("protobuf-type-class") /*id: 480559*/;
  n.Field = require("protobuf-field-definition") /*id: 62763*/;
  n.OneOf = require("protobuf-oneof-definition") /*id: 299216*/;
  n.MapField = require("map-field-class") /*id: 11234*/;
  n.Service = require("protobuf-service-class") /*id: 658249*/;
  n.Method = require("rpc-method-class") /*id: 627278*/;
  n.Message = require("protobuf-message-wrapper_1") /*id: 720905*/;
  n.wrappers = require("protobuf-any-wrapper") /*id: 871608*/;
  n.types = require("protobuf-type-defaults") /*id: 673143*/;
  n.util = require("protobuf-utility-module_1") /*id: 285145*/;
  n.ReflectionObject._configure(n.Root);
  n.Namespace._configure(n.Type, n.Service, n.Enum);
  n.Root._configure(n.Type);
  n.Field._configure(n.Type);
}