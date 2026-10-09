// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'protobufNamespace'
// - Resolved require(773111) to 'protobuf-namespace'
// - Renamed variable 'a' to 'protobufReflectionField'
// - Resolved require(153827) to 'protobuf-reflection-field'
// - Renamed variable 'l' to 'protobufEnumClassModule'
// - Resolved require(406982) to 'protobuf-enum-class-module'
// - Renamed variable 'u' to 'protobufOneofFieldGroup'
// - Resolved require(657433) to 'protobuf-oneof-field-group'
// - Renamed variable 'd' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 186226
         */
module.exports = function (module, exports, require) {
  module.exports = c;
  var r;
  var n;
  var s;
  var protobufNamespace = require("protobuf-namespace") /*id: 773111*/;
  ((c.prototype = Object.create(protobufNamespace.prototype)).constructor = c).className = "Root";
  var protobufReflectionField = require("protobuf-reflection-field") /*id: 153827*/;
  var protobufEnumClassModule = require("protobuf-enum-class-module") /*id: 406982*/;
  var protobufOneofFieldGroup = require("protobuf-oneof-field-group") /*id: 657433*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function c(e) {
    protobufNamespace.call(this, "", e);
    this.deferred = [];
    this.files = [];
  }
  function p() {}
  c.fromJSON = function (e, t) {
    t ||= new c();
    if (e.options) {
      t.setOptions(e.options);
    }
    return t.addJSON(e.nested);
  };
  c.prototype.resolvePath = protobufDecoratorUtils.path.resolve;
  c.prototype.fetch = protobufDecoratorUtils.fetch;
  c.prototype.load = function e(t, i, r) {
    if (typeof i == "function") {
      r = i;
      i = undefined;
    }
    var o = this;
    if (!r) {
      return protobufDecoratorUtils.asPromise(e, o, t, i);
    }
    var a = r === p;
    function l(e, t) {
      if (r) {
        var i = r;
        r = null;
        if (a) {
          throw e;
        }
        i(e, t);
      }
    }
    function u(e) {
      var t = e.lastIndexOf("google/protobuf/");
      if (t > -1) {
        var i = e.substring(t);
        if (i in s) {
          return i;
        }
      }
      return null;
    }
    function c(e, t) {
      try {
        if (protobufDecoratorUtils.isString(t) && t.charAt(0) === "{") {
          t = JSON.parse(t);
        }
        if (protobufDecoratorUtils.isString(t)) {
          n.filename = e;
          var r;
          var s = n(t, o, i);
          var c = 0;
          if (s.imports) {
            for (; c < s.imports.length; ++c) {
              if (r = u(s.imports[c]) || o.resolvePath(e, s.imports[c])) {
                h(r);
              }
            }
          }
          if (s.weakImports) {
            for (c = 0; c < s.weakImports.length; ++c) {
              if (r = u(s.weakImports[c]) || o.resolvePath(e, s.weakImports[c])) {
                h(r, true);
              }
            }
          }
        } else {
          o.setOptions(t.options).addJSON(t.nested);
        }
      } catch (e) {
        l(e);
      }
      if (!a && !f) {
        l(null, o);
      }
    }
    function h(e, t) {
      if (!(o.files.indexOf(e) > -1)) {
        o.files.push(e);
        if (e in s) {
          if (a) {
            c(e, s[e]);
          } else {
            ++f;
            setTimeout(function () {
              --f;
              c(e, s[e]);
            });
          }
          return;
        }
        if (a) {
          var i;
          try {
            i = protobufDecoratorUtils.fs.readFileSync(e).toString("utf8");
          } catch (e) {
            if (!t) {
              l(e);
            }
            return;
          }
          c(e, i);
        } else {
          ++f;
          o.fetch(e, function (i, n) {
            --f;
            if (r) {
              if (i) {
                if (t) {
                  if (!f) {
                    l(null, o);
                  }
                } else {
                  l(i);
                }
                return;
              }
              c(e, n);
            }
          });
        }
      }
    }
    var f = 0;
    if (protobufDecoratorUtils.isString(t)) {
      t = [t];
    }
    var y;
    var g = 0;
    for (; g < t.length; ++g) {
      if (y = o.resolvePath("", t[g])) {
        h(y);
      }
    }
    if (a) {
      return o;
    }
    if (!f) {
      l(null, o);
    }
  };
  c.prototype.loadSync = function (e, t) {
    if (!protobufDecoratorUtils.isNode) {
      throw Error("not supported");
    }
    return this.load(e, t, p);
  };
  c.prototype.resolveAll = function () {
    if (this.deferred.length) {
      throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
        return "'extend " + e.extend + "' in " + e.parent.fullName;
      }).join(", "));
    }
    return protobufNamespace.prototype.resolveAll.call(this);
  };
  var h = /^[A-Z]/;
  function f(e, t) {
    var i = t.parent.lookup(t.extend);
    if (i) {
      var r = new protobufReflectionField(t.fullName, t.id, t.type, t.rule, undefined, t.options);
      r.declaringField = t;
      t.extensionField = r;
      i.add(r);
      return true;
    }
    return false;
  }
  c.prototype._handleAdd = function (e) {
    if (e instanceof protobufReflectionField) {
      if (e.extend !== undefined && !e.extensionField && !f(this, e)) {
        this.deferred.push(e);
      }
    } else if (e instanceof protobufEnumClassModule) {
      if (h.test(e.name)) {
        e.parent[e.name] = e.values;
      }
    } else if (!(e instanceof protobufOneofFieldGroup)) {
      if (e instanceof r) {
        for (var t = 0; t < this.deferred.length;) {
          if (f(this, this.deferred[t])) {
            this.deferred.splice(t, 1);
          } else {
            ++t;
          }
        }
      }
      for (var i = 0; i < e.nestedArray.length; ++i) {
        this._handleAdd(e._nestedArray[i]);
      }
      if (h.test(e.name)) {
        e.parent[e.name] = e;
      }
    }
  };
  c.prototype._handleRemove = function (e) {
    if (e instanceof protobufReflectionField) {
      if (e.extend !== undefined) {
        if (e.extensionField) {
          e.extensionField.parent.remove(e.extensionField);
          e.extensionField = null;
        } else {
          var t = this.deferred.indexOf(e);
          if (t > -1) {
            this.deferred.splice(t, 1);
          }
        }
      }
    } else if (e instanceof protobufEnumClassModule) {
      if (h.test(e.name)) {
        delete e.parent[e.name];
      }
    } else if (e instanceof protobufNamespace) {
      for (var i = 0; i < e.nestedArray.length; ++i) {
        this._handleRemove(e._nestedArray[i]);
      }
      if (h.test(e.name)) {
        delete e.parent[e.name];
      }
    }
  };
  c._configure = function (e, t, i) {
    r = e;
    n = t;
    s = i;
  };
}