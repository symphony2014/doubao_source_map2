// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'base64VlqCodec'
// - Resolved require(558354) to 'base64-vlq-codec'
// - Renamed variable 'i' to 'sourceMapPathUtil'
// - Resolved require(919725) to 'source-map-path-util'
// - Resolved require(3276) to 'source-map-array-set'
// - Resolved require(531074) to 'source-map-mapping-list'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53224.ebaf78df.js
         * chunkId: 53224
         * moduleId: 622928
         */
module.exports = function (module, exports, require) {
  var base64VlqCodec = require("base64-vlq-codec") /*id: 558354*/;
  var sourceMapPathUtil = require("source-map-path-util") /*id: 919725*/;
  var o = require("source-map-array-set") /*id: 3276*/.ArraySet;
  var a = require("source-map-mapping-list") /*id: 531074*/.MappingList;
  function s(e) {
    e ||= {};
    this._file = sourceMapPathUtil.getArg(e, "file", null);
    this._sourceRoot = sourceMapPathUtil.getArg(e, "sourceRoot", null);
    this._skipValidation = sourceMapPathUtil.getArg(e, "skipValidation", false);
    this._ignoreInvalidMapping = sourceMapPathUtil.getArg(e, "ignoreInvalidMapping", false);
    this._sources = new o();
    this._names = new o();
    this._mappings = new a();
    this._sourcesContents = null;
  }
  s.prototype._version = 3;
  s.fromSourceMap = function (e, t) {
    var n = e.sourceRoot;
    var r = new s(Object.assign(t || {}, {
      file: e.file,
      sourceRoot: n
    }));
    e.eachMapping(function (e) {
      var t = {
        generated: {
          line: e.generatedLine,
          column: e.generatedColumn
        }
      };
      if (e.source != null) {
        t.source = e.source;
        if (n != null) {
          t.source = sourceMapPathUtil.relative(n, t.source);
        }
        t.original = {
          line: e.originalLine,
          column: e.originalColumn
        };
        if (e.name != null) {
          t.name = e.name;
        }
      }
      r.addMapping(t);
    });
    e.sources.forEach(function (t) {
      var o = t;
      if (n !== null) {
        o = sourceMapPathUtil.relative(n, t);
      }
      if (!r._sources.has(o)) {
        r._sources.add(o);
      }
      var a = e.sourceContentFor(t);
      if (a != null) {
        r.setSourceContent(t, a);
      }
    });
    return r;
  };
  s.prototype.addMapping = function (e) {
    var t = sourceMapPathUtil.getArg(e, "generated");
    var n = sourceMapPathUtil.getArg(e, "original", null);
    var r = sourceMapPathUtil.getArg(e, "source", null);
    var o = sourceMapPathUtil.getArg(e, "name", null);
    if (this._skipValidation || this._validateMapping(t, n, r, o) !== false) {
      if (r != null) {
        r = String(r);
        if (!this._sources.has(r)) {
          this._sources.add(r);
        }
      }
      if (o != null) {
        o = String(o);
        if (!this._names.has(o)) {
          this._names.add(o);
        }
      }
      this._mappings.add({
        generatedLine: t.line,
        generatedColumn: t.column,
        originalLine: n != null && n.line,
        originalColumn: n != null && n.column,
        source: r,
        name: o
      });
    }
  };
  s.prototype.setSourceContent = function (e, t) {
    var n = e;
    if (this._sourceRoot != null) {
      n = sourceMapPathUtil.relative(this._sourceRoot, n);
    }
    if (t != null) {
      this._sourcesContents ||= Object.create(null);
      this._sourcesContents[sourceMapPathUtil.toSetString(n)] = t;
    } else if (this._sourcesContents) {
      delete this._sourcesContents[sourceMapPathUtil.toSetString(n)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };
  s.prototype.applySourceMap = function (e, t, n) {
    var r = t;
    if (t == null) {
      if (e.file == null) {
        throw Error("SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's \"file\" property. Both were omitted.");
      }
      r = e.file;
    }
    var a = this._sourceRoot;
    if (a != null) {
      r = sourceMapPathUtil.relative(a, r);
    }
    var s = new o();
    var l = new o();
    this._mappings.unsortedForEach(function (t) {
      if (t.source === r && t.originalLine != null) {
        var o = e.originalPositionFor({
          line: t.originalLine,
          column: t.originalColumn
        });
        if (o.source != null) {
          t.source = o.source;
          if (n != null) {
            t.source = sourceMapPathUtil.join(n, t.source);
          }
          if (a != null) {
            t.source = sourceMapPathUtil.relative(a, t.source);
          }
          t.originalLine = o.line;
          t.originalColumn = o.column;
          if (o.name != null) {
            t.name = o.name;
          }
        }
      }
      var c = t.source;
      if (c != null && !s.has(c)) {
        s.add(c);
      }
      var u = t.name;
      if (u != null && !l.has(u)) {
        l.add(u);
      }
    }, this);
    this._sources = s;
    this._names = l;
    e.sources.forEach(function (t) {
      var r = e.sourceContentFor(t);
      if (r != null) {
        if (n != null) {
          t = sourceMapPathUtil.join(n, t);
        }
        if (a != null) {
          t = sourceMapPathUtil.relative(a, t);
        }
        this.setSourceContent(t, r);
      }
    }, this);
  };
  s.prototype._validateMapping = function (e, t, n, r) {
    if (t && typeof t.line != "number" && typeof t.column != "number") {
      var i = "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.";
      if (this._ignoreInvalidMapping) {
        return false;
      }
      throw Error(i);
    }
    if (!e || !("line" in e) || !("column" in e) || !(e.line > 0) || !(e.column >= 0) || t || n || r) {
      if (!e || !("line" in e) || !("column" in e) || !t || !("line" in t) || !("column" in t) || !(e.line > 0) || !(e.column >= 0) || !(t.line > 0) || !(t.column >= 0) || !n) {
        var i = "Invalid mapping: " + JSON.stringify({
          generated: e,
          source: n,
          original: t,
          name: r
        });
        if (this._ignoreInvalidMapping) {
          return false;
        }
        throw Error(i);
      }
    }
  };
  s.prototype._serializeMappings = function () {
    var e;
    var t;
    var n;
    var o;
    var a = 0;
    var s = 1;
    var l = 0;
    var c = 0;
    var u = 0;
    var h = 0;
    var p = "";
    var d = this._mappings.toArray();
    var m = 0;
    var f = d.length;
    for (; m < f; m++) {
      t = d[m];
      e = "";
      if (t.generatedLine !== s) {
        for (a = 0; t.generatedLine !== s;) {
          e += ";";
          s++;
        }
      } else if (m > 0) {
        if (!sourceMapPathUtil.compareByGeneratedPositionsInflated(t, d[m - 1])) {
          continue;
        }
        e += ",";
      }
      e += base64VlqCodec.encode(t.generatedColumn - a);
      a = t.generatedColumn;
      if (t.source != null) {
        o = this._sources.indexOf(t.source);
        e += base64VlqCodec.encode(o - h);
        h = o;
        e += base64VlqCodec.encode(t.originalLine - 1 - c);
        c = t.originalLine - 1;
        e += base64VlqCodec.encode(t.originalColumn - l);
        l = t.originalColumn;
        if (t.name != null) {
          n = this._names.indexOf(t.name);
          e += base64VlqCodec.encode(n - u);
          u = n;
        }
      }
      p += e;
    }
    return p;
  };
  s.prototype._generateSourcesContent = function (e, t) {
    return e.map(function (e) {
      if (!this._sourcesContents) {
        return null;
      }
      if (t != null) {
        e = sourceMapPathUtil.relative(t, e);
      }
      var n = sourceMapPathUtil.toSetString(e);
      if (Object.prototype.hasOwnProperty.call(this._sourcesContents, n)) {
        return this._sourcesContents[n];
      } else {
        return null;
      }
    }, this);
  };
  s.prototype.toJSON = function () {
    var e = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      e.file = this._file;
    }
    if (this._sourceRoot != null) {
      e.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot);
    }
    return e;
  };
  s.prototype.toString = function () {
    return JSON.stringify(this.toJSON());
  };
  exports.SourceMapGenerator = s;
}