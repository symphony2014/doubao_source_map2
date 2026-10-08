// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufNamespace'
// - Resolved require(773111) to 'protobuf-namespace'
// - Renamed variable 'n' to 'protobufEnumClassModule'
// - Resolved require(406982) to 'protobuf-enum-class-module'
// - Renamed variable 's' to 'protobufOneofFieldGroup'
// - Resolved require(657433) to 'protobuf-oneof-field-group'
// - Renamed variable 'o' to 'protobufReflectionField'
// - Resolved require(153827) to 'protobuf-reflection-field'
// - Renamed variable 'a' to 'protobufMapFieldClass'
// - Resolved require(801227) to 'protobuf-map-field-class'
// - Renamed variable 'l' to 'rpcServiceClass'
// - Resolved require(359414) to 'rpc-service-class'
// - Renamed variable 'u' to 'protobufMessageWrapper'
// - Resolved require(280355) to 'protobuf-message-wrapper'
// - Renamed variable 'd' to 'protobufBinaryReader'
// - Resolved require(413114) to 'protobuf-binary-reader'
// - Renamed variable 'c' to 'protobufWriterBuffer'
// - Resolved require(57830) to 'protobuf-writer-buffer'
// - Renamed variable 'p' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// - Renamed variable 'h' to 'protobufMessageEncoderGen'
// - Resolved require(200988) to 'protobuf-message-encoder-gen'
// - Renamed variable 'f' to 'protobufDecoderGenerator'
// - Resolved require(528059) to 'protobuf-decoder-generator'
// - Renamed variable 'y' to 'protobufMessageVerifyGenerator'
// - Resolved require(714025) to 'protobuf-message-verify-generator'
// - Renamed variable 'g' to 'protobufConverter'
// - Resolved require(156437) to 'protobuf-converter'
// - Renamed variable 'v' to 'protobufAnyTypeHandler'
// - Resolved require(545757) to 'protobuf-any-type-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 103652
         */
module.exports = function (module, exports, require) {
  module.exports = m;
  var protobufNamespace = require("protobuf-namespace") /*id: 773111*/;
  ((m.prototype = Object.create(protobufNamespace.prototype)).constructor = m).className = "Type";
  var protobufEnumClassModule = require("protobuf-enum-class-module") /*id: 406982*/;
  var protobufOneofFieldGroup = require("protobuf-oneof-field-group") /*id: 657433*/;
  var protobufReflectionField = require("protobuf-reflection-field") /*id: 153827*/;
  var protobufMapFieldClass = require("protobuf-map-field-class") /*id: 801227*/;
  var rpcServiceClass = require("rpc-service-class") /*id: 359414*/;
  var protobufMessageWrapper = require("protobuf-message-wrapper") /*id: 280355*/;
  var protobufBinaryReader = require("protobuf-binary-reader") /*id: 413114*/;
  var protobufWriterBuffer = require("protobuf-writer-buffer") /*id: 57830*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  var protobufMessageEncoderGen = require("protobuf-message-encoder-gen") /*id: 200988*/;
  var protobufDecoderGenerator = require("protobuf-decoder-generator") /*id: 528059*/;
  var protobufMessageVerifyGenerator = require("protobuf-message-verify-generator") /*id: 714025*/;
  var protobufConverter = require("protobuf-converter") /*id: 156437*/;
  var protobufAnyTypeHandler = require("protobuf-any-type-handler") /*id: 545757*/;
  function m(e, t) {
    protobufNamespace.call(this, e, t);
    this.fields = {};
    this.oneofs = undefined;
    this.extensions = undefined;
    this.reserved = undefined;
    this.group = undefined;
    this._fieldsById = null;
    this._fieldsArray = null;
    this._oneofsArray = null;
    this._ctor = null;
  }
  function b(e) {
    e._fieldsById = e._fieldsArray = e._oneofsArray = null;
    delete e.encode;
    delete e.decode;
    delete e.verify;
    return e;
  }
  Object.defineProperties(m.prototype, {
    fieldsById: {
      get: function () {
        if (this._fieldsById) {
          return this._fieldsById;
        }
        this._fieldsById = {};
        var e = Object.keys(this.fields);
        var t = 0;
        for (; t < e.length; ++t) {
          var i = this.fields[e[t]];
          var r = i.id;
          if (this._fieldsById[r]) {
            throw Error("duplicate id " + r + " in " + this);
          }
          this._fieldsById[r] = i;
        }
        return this._fieldsById;
      }
    },
    fieldsArray: {
      get: function () {
        return this._fieldsArray ||= protobufDecoratorUtils.toArray(this.fields);
      }
    },
    oneofsArray: {
      get: function () {
        return this._oneofsArray ||= protobufDecoratorUtils.toArray(this.oneofs);
      }
    },
    ctor: {
      get: function () {
        return this._ctor || (this.ctor = m.generateConstructor(this)());
      },
      set: function (e) {
        var t = e.prototype;
        if (!(t instanceof protobufMessageWrapper)) {
          (e.prototype = new protobufMessageWrapper()).constructor = e;
          protobufDecoratorUtils.merge(e.prototype, t);
        }
        e.$type = e.prototype.$type = this;
        protobufDecoratorUtils.merge(e, protobufMessageWrapper, true);
        this._ctor = e;
        for (var i = 0; i < this.fieldsArray.length; ++i) {
          this._fieldsArray[i].resolve();
        }
        var r = {};
        for (i = 0; i < this.oneofsArray.length; ++i) {
          r[this._oneofsArray[i].resolve().name] = {
            get: protobufDecoratorUtils.oneOfGetter(this._oneofsArray[i].oneof),
            set: protobufDecoratorUtils.oneOfSetter(this._oneofsArray[i].oneof)
          };
        }
        if (i) {
          Object.defineProperties(e.prototype, r);
        }
      }
    }
  });
  m.generateConstructor = function (e) {
    var t;
    var i = protobufDecoratorUtils.codegen(["p"], e.name);
    var r = 0;
    for (; r < e.fieldsArray.length; ++r) {
      if ((t = e._fieldsArray[r]).map) {
        i("this%s={}", protobufDecoratorUtils.safeProp(t.name));
      } else if (t.repeated) {
        i("this%s=[]", protobufDecoratorUtils.safeProp(t.name));
      }
    }
    return i("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
  };
  m.fromJSON = function (e, t) {
    var i = new m(e, t.options);
    i.extensions = t.extensions;
    i.reserved = t.reserved;
    var u = Object.keys(t.fields);
    var d = 0;
    for (; d < u.length; ++d) {
      i.add((t.fields[u[d]].keyType !== undefined ? protobufMapFieldClass.fromJSON : protobufReflectionField.fromJSON)(u[d], t.fields[u[d]]));
    }
    if (t.oneofs) {
      u = Object.keys(t.oneofs);
      d = 0;
      for (; d < u.length; ++d) {
        i.add(protobufOneofFieldGroup.fromJSON(u[d], t.oneofs[u[d]]));
      }
    }
    if (t.nested) {
      u = Object.keys(t.nested);
      d = 0;
      for (; d < u.length; ++d) {
        var c = t.nested[u[d]];
        i.add((c.id !== undefined ? protobufReflectionField.fromJSON : c.fields !== undefined ? m.fromJSON : c.values !== undefined ? protobufEnumClassModule.fromJSON : c.methods !== undefined ? rpcServiceClass.fromJSON : protobufNamespace.fromJSON)(u[d], c));
      }
    }
    if (t.extensions && t.extensions.length) {
      i.extensions = t.extensions;
    }
    if (t.reserved && t.reserved.length) {
      i.reserved = t.reserved;
    }
    if (t.group) {
      i.group = true;
    }
    if (t.comment) {
      i.comment = t.comment;
    }
    return i;
  };
  m.prototype.toJSON = function (e) {
    var t = protobufNamespace.prototype.toJSON.call(this, e);
    var i = !!e && !!e.keepComments;
    return protobufDecoratorUtils.toObject(["options", t && t.options || undefined, "oneofs", protobufNamespace.arrayToJSON(this.oneofsArray, e), "fields", protobufNamespace.arrayToJSON(this.fieldsArray.filter(function (e) {
      return !e.declaringField;
    }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined]);
  };
  m.prototype.resolveAll = function () {
    var e = this.fieldsArray;
    var t = 0;
    while (t < e.length) {
      e[t++].resolve();
    }
    var i = this.oneofsArray;
    for (t = 0; t < i.length;) {
      i[t++].resolve();
    }
    return protobufNamespace.prototype.resolveAll.call(this);
  };
  m.prototype.get = function (e) {
    return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
  };
  m.prototype.add = function (e) {
    if (this.get(e.name)) {
      throw Error("duplicate name '" + e.name + "' in " + this);
    }
    if (e instanceof protobufReflectionField && e.extend === undefined) {
      if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) {
        throw Error("duplicate id " + e.id + " in " + this);
      }
      if (this.isReservedId(e.id)) {
        throw Error("id " + e.id + " is reserved in " + this);
      }
      if (this.isReservedName(e.name)) {
        throw Error("name '" + e.name + "' is reserved in " + this);
      }
      if (e.parent) {
        e.parent.remove(e);
      }
      this.fields[e.name] = e;
      e.message = this;
      e.onAdd(this);
      return b(this);
    }
    if (e instanceof protobufOneofFieldGroup) {
      this.oneofs ||= {};
      this.oneofs[e.name] = e;
      e.onAdd(this);
      return b(this);
    } else {
      return protobufNamespace.prototype.add.call(this, e);
    }
  };
  m.prototype.remove = function (e) {
    if (e instanceof protobufReflectionField && e.extend === undefined) {
      if (!this.fields || this.fields[e.name] !== e) {
        throw Error(e + " is not a member of " + this);
      }
      delete this.fields[e.name];
      e.parent = null;
      e.onRemove(this);
      return b(this);
    }
    if (e instanceof protobufOneofFieldGroup) {
      if (!this.oneofs || this.oneofs[e.name] !== e) {
        throw Error(e + " is not a member of " + this);
      }
      delete this.oneofs[e.name];
      e.parent = null;
      e.onRemove(this);
      return b(this);
    }
    return protobufNamespace.prototype.remove.call(this, e);
  };
  m.prototype.isReservedId = function (e) {
    return protobufNamespace.isReservedId(this.reserved, e);
  };
  m.prototype.isReservedName = function (e) {
    return protobufNamespace.isReservedName(this.reserved, e);
  };
  m.prototype.create = function (e) {
    return new this.ctor(e);
  };
  m.prototype.setup = function () {
    var e = this.fullName;
    var t = [];
    var i = 0;
    for (; i < this.fieldsArray.length; ++i) {
      t.push(this._fieldsArray[i].resolve().resolvedType);
    }
    this.encode = protobufMessageEncoderGen(this)({
      Writer: protobufWriterBuffer,
      types: t,
      util: protobufDecoratorUtils
    });
    this.decode = protobufDecoderGenerator(this)({
      Reader: protobufBinaryReader,
      types: t,
      util: protobufDecoratorUtils
    });
    this.verify = protobufMessageVerifyGenerator(this)({
      types: t,
      util: protobufDecoratorUtils
    });
    this.fromObject = protobufConverter.fromObject(this)({
      types: t,
      util: protobufDecoratorUtils
    });
    this.toObject = protobufConverter.toObject(this)({
      types: t,
      util: protobufDecoratorUtils
    });
    var r = protobufAnyTypeHandler[e];
    if (r) {
      var n = Object.create(this);
      n.fromObject = this.fromObject;
      this.fromObject = r.fromObject.bind(n);
      n.toObject = this.toObject;
      this.toObject = r.toObject.bind(n);
    }
    return this;
  };
  m.prototype.encode = function (e, t) {
    return this.setup().encode(e, t);
  };
  m.prototype.encodeDelimited = function (e, t) {
    return this.encode(e, t && t.len ? t.fork() : t).ldelim();
  };
  m.prototype.decode = function (e, t) {
    return this.setup().decode(e, t);
  };
  m.prototype.decodeDelimited = function (e) {
    if (!(e instanceof protobufBinaryReader)) {
      e = protobufBinaryReader.create(e);
    }
    return this.decode(e, e.uint32());
  };
  m.prototype.verify = function (e) {
    return this.setup().verify(e);
  };
  m.prototype.fromObject = function (e) {
    return this.setup().fromObject(e);
  };
  m.prototype.toObject = function (e, t) {
    return this.setup().toObject(e, t);
  };
  m.d = function (e) {
    return function (t) {
      protobufDecoratorUtils.decorateType(t, e);
    };
  };
}