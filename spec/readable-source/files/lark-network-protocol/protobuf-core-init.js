// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(872871) to 'protobuf-minimal-bundle'
// - Resolved require(200988) to 'protobuf-message-encoder-gen'
// - Resolved require(528059) to 'protobuf-decoder-generator'
// - Resolved require(714025) to 'protobuf-message-verify-generator'
// - Resolved require(156437) to 'protobuf-converter'
// - Resolved require(812045) to 'reflection-object-base-class'
// - Resolved require(773111) to 'protobuf-namespace'
// - Resolved require(186226) to 'protobuf-root-definition'
// - Resolved require(406982) to 'protobuf-enum-class-module'
// - Resolved require(103652) to 'protobuf-message-type'
// - Resolved require(153827) to 'protobuf-reflection-field'
// - Resolved require(657433) to 'protobuf-oneof-field-group'
// - Resolved require(801227) to 'protobuf-map-field-class'
// - Resolved require(359414) to 'rpc-service-class'
// - Resolved require(302733) to 'rpc-method-definition-class'
// - Resolved require(280355) to 'protobuf-message-wrapper'
// - Resolved require(545757) to 'protobuf-any-type-handler'
// - Resolved require(52800) to 'protobuf-field-type-mappings'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 423256
         */
module.exports = function (module, exports, require) {
  var r = module.exports = require("protobuf-minimal-bundle") /*id: 872871*/;
  r.build = "light";
  r.load = function (e, t, i) {
    if (typeof t == "function") {
      i = t;
      t = new r.Root();
    } else {
      t ||= new r.Root();
    }
    return t.load(e, i);
  };
  r.loadSync = function (e, t) {
    t ||= new r.Root();
    return t.loadSync(e);
  };
  r.encoder = require("protobuf-message-encoder-gen") /*id: 200988*/;
  r.decoder = require("protobuf-decoder-generator") /*id: 528059*/;
  r.verifier = require("protobuf-message-verify-generator") /*id: 714025*/;
  r.converter = require("protobuf-converter") /*id: 156437*/;
  r.ReflectionObject = require("reflection-object-base-class") /*id: 812045*/;
  r.Namespace = require("protobuf-namespace") /*id: 773111*/;
  r.Root = require("protobuf-root-definition") /*id: 186226*/;
  r.Enum = require("protobuf-enum-class-module") /*id: 406982*/;
  r.Type = require("protobuf-message-type") /*id: 103652*/;
  r.Field = require("protobuf-reflection-field") /*id: 153827*/;
  r.OneOf = require("protobuf-oneof-field-group") /*id: 657433*/;
  r.MapField = require("protobuf-map-field-class") /*id: 801227*/;
  r.Service = require("rpc-service-class") /*id: 359414*/;
  r.Method = require("rpc-method-definition-class") /*id: 302733*/;
  r.Message = require("protobuf-message-wrapper") /*id: 280355*/;
  r.wrappers = require("protobuf-any-type-handler") /*id: 545757*/;
  r.types = require("protobuf-field-type-mappings") /*id: 52800*/;
  r.util = require("protobuf-decorator-utils") /*id: 848320*/;
  r.ReflectionObject._configure(r.Root);
  r.Namespace._configure(r.Type, r.Service, r.Enum);
  r.Root._configure(r.Type);
  r.Field._configure(r.Type);
}