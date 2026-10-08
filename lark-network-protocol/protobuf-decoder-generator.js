// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufEnumClassModule'
// - Resolved require(406982) to 'protobuf-enum-class-module'
// - Renamed variable 'n' to 'protobufFieldTypeMappings'
// - Resolved require(52800) to 'protobuf-field-type-mappings'
// - Renamed variable 's' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 528059
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    var t = protobufDecoratorUtils.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function (e) {
      return e.map;
    }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
    if (e.group) {
      t("if((t&7)===4)")("break");
    }
    t("switch(t>>>3){");
    for (var i = 0; i < e.fieldsArray.length; ++i) {
      var o = e._fieldsArray[i].resolve();
      var a = o.resolvedType instanceof protobufEnumClassModule ? "int32" : o.type;
      var l = "m" + protobufDecoratorUtils.safeProp(o.name);
      t("case %i:", o.id);
      if (o.map) {
        t("if(%s===util.emptyObject)", l)("%s={}", l)("var c2 = r.uint32()+r.pos");
        if (protobufFieldTypeMappings.defaults[o.keyType] !== undefined) {
          t("k=%j", protobufFieldTypeMappings.defaults[o.keyType]);
        } else {
          t("k=null");
        }
        if (protobufFieldTypeMappings.defaults[a] !== undefined) {
          t("value=%j", protobufFieldTypeMappings.defaults[a]);
        } else {
          t("value=null");
        }
        t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", o.keyType)("case 2:");
        if (protobufFieldTypeMappings.basic[a] === undefined) {
          t("value=types[%i].decode(r,r.uint32())", i);
        } else {
          t("value=r.%s()", a);
        }
        t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
        t(protobufFieldTypeMappings.long[o.keyType] !== undefined ? "%s[typeof k===\"object\"?util.longToHash(k):k]=value" : "%s[k]=value", l);
      } else if (o.repeated) {
        t("if(!(%s&&%s.length))", l, l)("%s=[]", l);
        if (protobufFieldTypeMappings.packed[a] !== undefined) {
          t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", l, a)("}else");
        }
        if (protobufFieldTypeMappings.basic[a] === undefined) {
          t(o.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", l, i);
        } else {
          t("%s.push(r.%s())", l, a);
        }
      } else if (protobufFieldTypeMappings.basic[a] === undefined) {
        t(o.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", l, i);
      } else {
        t("%s=r.%s()", l, a);
      }
      t("break");
    }
    t("default:")("r.skipType(t&7)")("break")("}")("}");
    i = 0;
    for (; i < e._fieldsArray.length; ++i) {
      var u = e._fieldsArray[i];
      if (u.required) {
        t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + u.name + "'");
      }
    }
    return t("return m");
  };
  var protobufEnumClassModule = require("protobuf-enum-class-module") /*id: 406982*/;
  var protobufFieldTypeMappings = require("protobuf-field-type-mappings") /*id: 52800*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
}