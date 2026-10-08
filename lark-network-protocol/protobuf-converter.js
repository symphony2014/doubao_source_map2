// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufEnumClassModule'
// - Resolved require(406982) to 'protobuf-enum-class-module'
// - Renamed variable 'n' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 156437
         */
module.exports = function (module, exports, require) {
  var protobufEnumClassModule = require("protobuf-enum-class-module") /*id: 406982*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function s(e, t, i, n) {
    if (t.resolvedType) {
      if (t.resolvedType instanceof protobufEnumClassModule) {
        e("switch(d%s){", n);
        var s = t.resolvedType.values;
        var o = Object.keys(s);
        var a = 0;
        for (; a < o.length; ++a) {
          if (t.repeated && s[o[a]] === t.typeDefault) {
            e("default:");
          }
          e("case%j:", o[a])("case %i:", s[o[a]])("m%s=%j", n, s[o[a]])("break");
        }
        e("}");
      } else {
        e("if(typeof d%s!==\"object\")", n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, i, n);
      }
    } else {
      var l = false;
      switch (t.type) {
        case "double":
        case "float":
          e("m%s=Number(d%s)", n, n);
          break;
        case "uint32":
        case "fixed32":
          e("m%s=d%s>>>0", n, n);
          break;
        case "int32":
        case "sint32":
        case "sfixed32":
          e("m%s=d%s|0", n, n);
          break;
        case "uint64":
          l = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, l)("else if(typeof d%s===\"string\")", n)("m%s=parseInt(d%s,10)", n, n)("else if(typeof d%s===\"number\")", n)("m%s=d%s", n, n)("else if(typeof d%s===\"object\")", n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, l ? "true" : "");
          break;
        case "bytes":
          e("if(typeof d%s===\"string\")", n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length)", n)("m%s=d%s", n, n);
          break;
        case "string":
          e("m%s=String(d%s)", n, n);
          break;
        case "bool":
          e("m%s=Boolean(d%s)", n, n);
      }
    }
    return e;
  }
  function o(e, t, i, n) {
    if (t.resolvedType) {
      if (t.resolvedType instanceof protobufEnumClassModule) {
        e("d%s=o.enums===String?types[%i].values[m%s]:m%s", n, i, n, n);
      } else {
        e("d%s=types[%i].toObject(m%s,o)", n, i, n);
      }
    } else {
      var s = false;
      switch (t.type) {
        case "double":
        case "float":
          e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
          break;
        case "uint64":
          s = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          e("if(typeof m%s===\"number\")", n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, s ? "true" : "", n);
          break;
        case "bytes":
          e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
          break;
        default:
          e("d%s=m%s", n, n);
      }
    }
    return e;
  }
  exports.fromObject = function (e) {
    var t = e.fieldsArray;
    var i = protobufDecoratorUtils.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
    if (!t.length) {
      return i("return new this.ctor");
    }
    i("var m=new this.ctor");
    for (var o = 0; o < t.length; ++o) {
      var a = t[o].resolve();
      var l = protobufDecoratorUtils.safeProp(a.name);
      if (a.map) {
        i("if(d%s){", l)("if(typeof d%s!==\"object\")", l)("throw TypeError(%j)", a.fullName + ": object expected")("m%s={}", l)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", l);
        s(i, a, o, l + "[ks[i]]")("}")("}");
      } else if (a.repeated) {
        i("if(d%s){", l)("if(!Array.isArray(d%s))", l)("throw TypeError(%j)", a.fullName + ": array expected")("m%s=[]", l)("for(var i=0;i<d%s.length;++i){", l);
        s(i, a, o, l + "[i]")("}")("}");
      } else {
        if (!(a.resolvedType instanceof protobufEnumClassModule)) {
          i("if(d%s!=null){", l);
        }
        s(i, a, o, l);
        if (!(a.resolvedType instanceof protobufEnumClassModule)) {
          i("}");
        }
      }
    }
    return i("return m");
  };
  exports.toObject = function (e) {
    var t = e.fieldsArray.slice().sort(protobufDecoratorUtils.compareFieldsById);
    if (!t.length) {
      return protobufDecoratorUtils.codegen()("return {}");
    }
    var i = protobufDecoratorUtils.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}");
    var s = [];
    var a = [];
    var l = [];
    var u = 0;
    for (; u < t.length; ++u) {
      if (!t[u].partOf) {
        (t[u].resolve().repeated ? s : t[u].map ? a : l).push(t[u]);
      }
    }
    if (s.length) {
      i("if(o.arrays||o.defaults){");
      u = 0;
      for (; u < s.length; ++u) {
        i("d%s=[]", protobufDecoratorUtils.safeProp(s[u].name));
      }
      i("}");
    }
    if (a.length) {
      i("if(o.objects||o.defaults){");
      u = 0;
      for (; u < a.length; ++u) {
        i("d%s={}", protobufDecoratorUtils.safeProp(a[u].name));
      }
      i("}");
    }
    if (l.length) {
      i("if(o.defaults){");
      u = 0;
      for (; u < l.length; ++u) {
        var d = l[u];
        var c = protobufDecoratorUtils.safeProp(d.name);
        if (d.resolvedType instanceof protobufEnumClassModule) {
          i("d%s=o.enums===String?%j:%j", c, d.resolvedType.valuesById[d.typeDefault], d.typeDefault);
        } else if (d.long) {
          i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", d.typeDefault.low, d.typeDefault.high, d.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", c)("}else")("d%s=o.longs===String?%j:%i", c, d.typeDefault.toString(), d.typeDefault.toNumber());
        } else if (d.bytes) {
          var p = "[" + Array.prototype.slice.call(d.typeDefault).join(",") + "]";
          i("if(o.bytes===String)d%s=%j", c, String.fromCharCode.apply(String, d.typeDefault))("else{")("d%s=%s", c, p)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", c, c)("}");
        } else {
          i("d%s=%j", c, d.typeDefault);
        }
      }
      i("}");
    }
    var h = false;
    for (u = 0; u < t.length; ++u) {
      var d = t[u];
      var f = e._fieldsArray.indexOf(d);
      var c = protobufDecoratorUtils.safeProp(d.name);
      if (d.map) {
        if (!h) {
          h = true;
          i("var ks2");
        }
        i("if(m%s&&(ks2=Object.keys(m%s)).length){", c, c)("d%s={}", c)("for(var j=0;j<ks2.length;++j){");
        o(i, d, f, c + "[ks2[j]]")("}");
      } else if (d.repeated) {
        i("if(m%s&&m%s.length){", c, c)("d%s=[]", c)("for(var j=0;j<m%s.length;++j){", c);
        o(i, d, f, c + "[j]")("}");
      } else {
        i("if(m%s!=null&&m.hasOwnProperty(%j)){", c, d.name);
        o(i, d, f, c);
        if (d.partOf) {
          i("if(o.oneofs)")("d%s=%j", protobufDecoratorUtils.safeProp(d.partOf.name), d.name);
        }
      }
      i("}");
    }
    return i("return d");
  };
}