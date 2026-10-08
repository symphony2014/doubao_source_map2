// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 832769
         */
module.exports = function (module, exports, require) {
  var n = Object.prototype.hasOwnProperty;
  var r = function () {
    var t = [];
    var e = 0;
    for (; e < 256; ++e) {
      t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
    }
    return t;
  }();
  function i(t) {
    var e;
    for (; t.length;) {
      var n = t.pop();
      if (Array.isArray(e = n.obj[n.prop])) {
        var r = [];
        var i = 0;
        for (; i < e.length; ++i) {
          if (e[i] !== undefined) {
            r.push(e[i]);
          }
        }
        n.obj[n.prop] = r;
      }
    }
    return e;
  }
  exports.arrayToObject = function (t, e) {
    var n = e && e.plainObjects ? Object.create(null) : {};
    var r = 0;
    for (; r < t.length; ++r) {
      if (t[r] !== undefined) {
        n[r] = t[r];
      }
    }
    return n;
  };
  exports.merge = function (t, r, i) {
    if (!r) {
      return t;
    }
    if (typeof r != "object") {
      if (Array.isArray(t)) {
        t.push(r);
      } else {
        if (typeof t != "object") {
          return [t, r];
        }
        if (i.plainObjects || i.allowPrototypes || !n.call(Object.prototype, r)) {
          t[r] = true;
        }
      }
      return t;
    }
    if (typeof t != "object") {
      return [t].concat(r);
    }
    var o = t;
    if (Array.isArray(t) && !Array.isArray(r)) {
      o = exports.arrayToObject(t, i);
    }
    if (Array.isArray(t) && Array.isArray(r)) {
      r.forEach(function (r, o) {
        if (n.call(t, o)) {
          if (t[o] && typeof t[o] == "object") {
            t[o] = exports.merge(t[o], r, i);
          } else {
            t.push(r);
          }
        } else {
          t[o] = r;
        }
      });
      return t;
    } else {
      return Object.keys(r).reduce(function (t, o) {
        var s = r[o];
        if (n.call(t, o)) {
          t[o] = exports.merge(t[o], s, i);
        } else {
          t[o] = s;
        }
        return t;
      }, o);
    }
  };
  exports.assign = function (t, e) {
    return Object.keys(e).reduce(function (t, n) {
      t[n] = e[n];
      return t;
    }, t);
  };
  exports.decode = function (t) {
    try {
      return decodeURIComponent(t.replace(/\+/g, " "));
    } catch (e) {
      return t;
    }
  };
  exports.encode = function (t) {
    if (t.length === 0) {
      return t;
    }
    var e = typeof t == "string" ? t : String(t);
    var n = "";
    var i = 0;
    for (; i < e.length; ++i) {
      var o = e.charCodeAt(i);
      if (o === 45 || o === 46 || o === 95 || o === 126 || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122) {
        n += e.charAt(i);
        continue;
      }
      if (o < 128) {
        n += r[o];
        continue;
      }
      if (o < 2048) {
        n += r[o >> 6 | 192] + r[o & 63 | 128];
        continue;
      }
      if (o < 55296 || o >= 57344) {
        n += r[o >> 12 | 224] + r[o >> 6 & 63 | 128] + r[o & 63 | 128];
        continue;
      }
      i += 1;
      n += r[(o = 65536 + ((o & 1023) << 10 | e.charCodeAt(i) & 1023)) >> 18 | 240] + r[o >> 12 & 63 | 128] + r[o >> 6 & 63 | 128] + r[o & 63 | 128];
    }
    return n;
  };
  exports.compact = function (t) {
    var e = [{
      obj: {
        o: t
      },
      prop: "o"
    }];
    var n = [];
    var r = 0;
    for (; r < e.length; ++r) {
      var o = e[r];
      var s = o.obj[o.prop];
      var a = Object.keys(s);
      var u = 0;
      for (; u < a.length; ++u) {
        var c = a[u];
        var l = s[c];
        if (typeof l == "object" && l !== null && n.indexOf(l) === -1) {
          e.push({
            obj: s,
            prop: c
          });
          n.push(l);
        }
      }
    }
    return i(e);
  };
  exports.isRegExp = function (t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  };
  exports.isBuffer = function (t) {
    return t != null && !!t.constructor && !!t.constructor.isBuffer && !!t.constructor.isBuffer(t);
  };
}