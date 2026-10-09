// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(656379) to 'linkify-regex-patterns'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 529692
         */
module.exports = function (module, exports, require) {
  function n(t) {
    var e = Array.prototype.slice.call(arguments, 1);
    e.forEach(function (e) {
      if (e) {
        Object.keys(e).forEach(function (r) {
          t[r] = e[r];
        });
      }
    });
    return t;
  }
  function i(t) {
    return Object.prototype.toString.call(t);
  }
  function o(t) {
    return i(t) === "[object Function]";
  }
  function s(t) {
    return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var a = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
  };
  var c = {
    "http:": {
      validate: function (t, e, r) {
        var n = t.slice(e);
        r.re.http ||= RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i");
        if (r.re.http.test(n)) {
          return n.match(r.re.http)[0].length;
        } else {
          return 0;
        }
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function (t, e, r) {
        var n = t.slice(e);
        r.re.no_http ||= RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i");
        if (r.re.no_http.test(n)) {
          if (e >= 3 && t[e - 3] === ":" || e >= 3 && t[e - 3] === "/") {
            return 0;
          } else {
            return n.match(r.re.no_http)[0].length;
          }
        } else {
          return 0;
        }
      }
    },
    "mailto:": {
      validate: function (t, e, r) {
        var n = t.slice(e);
        r.re.mailto ||= RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i");
        if (r.re.mailto.test(n)) {
          return n.match(r.re.mailto)[0].length;
        } else {
          return 0;
        }
      }
    }
  };
  var l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function u() {
    return function (t, e) {
      e.normalize(t);
    };
  }
  function h(t) {
    var e = t.re = require("linkify-regex-patterns") /*id: 656379*/(t.__opts__);
    var n = t.__tlds__.slice();
    function a(t) {
      return t.replace("%TLDS%", e.src_tlds);
    }
    t.onCompile();
    if (!t.__tlds_replaced__) {
      n.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]");
    }
    n.push(e.src_xn);
    e.src_tlds = n.join("|");
    e.email_fuzzy = RegExp(a(e.tpl_email_fuzzy), "i");
    e.link_fuzzy = RegExp(a(e.tpl_link_fuzzy), "i");
    e.link_no_ip_fuzzy = RegExp(a(e.tpl_link_no_ip_fuzzy), "i");
    e.host_fuzzy_test = RegExp(a(e.tpl_host_fuzzy_test), "i");
    var c = [];
    function l(t, e) {
      throw Error("(LinkifyIt) Invalid schema \"" + t + "\": " + e);
    }
    t.__compiled__ = {};
    Object.keys(t.__schemas__).forEach(function (e) {
      var r;
      var n = t.__schemas__[e];
      if (n !== null) {
        var s = {
          validate: null,
          link: null
        };
        t.__compiled__[e] = s;
        if (i(n) === "[object Object]") {
          if (i(n.validate) === "[object RegExp]") {
            r = n.validate;
            s.validate = function (t, e) {
              var n = t.slice(e);
              if (r.test(n)) {
                return n.match(r)[0].length;
              } else {
                return 0;
              }
            };
          } else if (o(n.validate)) {
            s.validate = n.validate;
          } else {
            l(e, n);
          }
          if (o(n.normalize)) {
            s.normalize = n.normalize;
          } else if (n.normalize) {
            l(e, n);
          } else {
            s.normalize = u();
          }
          return;
        }
        if (i(n) === "[object String]") {
          c.push(e);
          return;
        }
        l(e, n);
      }
    });
    c.forEach(function (e) {
      if (t.__compiled__[t.__schemas__[e]]) {
        t.__compiled__[e].validate = t.__compiled__[t.__schemas__[e]].validate;
        t.__compiled__[e].normalize = t.__compiled__[t.__schemas__[e]].normalize;
      }
    });
    t.__compiled__[""] = {
      validate: null,
      normalize: u()
    };
    var h = Object.keys(t.__compiled__).filter(function (e) {
      return e.length > 0 && t.__compiled__[e];
    }).map(s).join("|");
    t.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + h + ")", "i");
    t.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + h + ")", "ig");
    t.re.pretest = RegExp("(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@", "i");
    t.__index__ = -1;
    t.__text_cache__ = "";
  }
  function p(t, e) {
    var r = t.__index__;
    var n = t.__last_index__;
    var i = t.__text_cache__.slice(r, n);
    this.schema = t.__schema__.toLowerCase();
    this.index = r + e;
    this.lastIndex = n + e;
    this.raw = i;
    this.text = i;
    this.url = i;
  }
  function f(t, e) {
    var r = new p(t, e);
    t.__compiled__[r.schema].normalize(r, t);
    return r;
  }
  function d(t, e) {
    if (!(this instanceof d)) {
      return new d(t, e);
    }
    if (!e && Object.keys(t || {}).reduce(function (t, e) {
      return t || a.hasOwnProperty(e);
    }, false)) {
      e = t;
      t = {};
    }
    this.__opts__ = n({}, a, e);
    this.__index__ = -1;
    this.__last_index__ = -1;
    this.__schema__ = "";
    this.__text_cache__ = "";
    this.__schemas__ = n({}, c, t);
    this.__compiled__ = {};
    this.__tlds__ = l;
    this.__tlds_replaced__ = false;
    this.re = {};
    h(this);
  }
  d.prototype.add = function (t, e) {
    this.__schemas__[t] = e;
    h(this);
    return this;
  };
  d.prototype.set = function (t) {
    this.__opts__ = n(this.__opts__, t);
    return this;
  };
  d.prototype.test = function (t) {
    var e;
    var r;
    var n;
    var i;
    var o;
    var s;
    var a;
    var c;
    this.__text_cache__ = t;
    this.__index__ = -1;
    if (!t.length) {
      return false;
    }
    if (this.re.schema_test.test(t)) {
      for ((a = this.re.schema_search).lastIndex = 0; (e = a.exec(t)) !== null;) {
        if (i = this.testSchemaAt(t, e[2], a.lastIndex)) {
          this.__schema__ = e[2];
          this.__index__ = e.index + e[1].length;
          this.__last_index__ = e.index + e[0].length + i;
          break;
        }
      }
    }
    if (this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && (r = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
      o = r.index + r[1].length;
      if (this.__index__ < 0 || o < this.__index__) {
        this.__schema__ = "";
        this.__index__ = o;
        this.__last_index__ = r.index + r[0].length;
      }
    }
    if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && t.indexOf("@") >= 0 && (n = t.match(this.re.email_fuzzy)) !== null) {
      o = n.index + n[1].length;
      s = n.index + n[0].length;
      if (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && s > this.__last_index__) {
        this.__schema__ = "mailto:";
        this.__index__ = o;
        this.__last_index__ = s;
      }
    }
    return this.__index__ >= 0;
  };
  d.prototype.pretest = function (t) {
    return this.re.pretest.test(t);
  };
  d.prototype.testSchemaAt = function (t, e, r) {
    if (this.__compiled__[e.toLowerCase()]) {
      return this.__compiled__[e.toLowerCase()].validate(t, r, this);
    } else {
      return 0;
    }
  };
  d.prototype.match = function (t) {
    var e = 0;
    var r = [];
    if (this.__index__ >= 0 && this.__text_cache__ === t) {
      r.push(f(this, e));
      e = this.__last_index__;
    }
    for (var n = e ? t.slice(e) : t; this.test(n);) {
      r.push(f(this, e));
      n = n.slice(this.__last_index__);
      e += this.__last_index__;
    }
    if (r.length) {
      return r;
    } else {
      return null;
    }
  };
  d.prototype.tlds = function (t, e) {
    t = Array.isArray(t) ? t : [t];
    if (e) {
      this.__tlds__ = this.__tlds__.concat(t).sort().filter(function (t, e, r) {
        return t !== r[e - 1];
      }).reverse();
    } else {
      this.__tlds__ = t.slice();
      this.__tlds_replaced__ = true;
    }
    h(this);
    return this;
  };
  d.prototype.normalize = function (t) {
    if (!t.schema) {
      t.url = "http://" + t.url;
    }
    if (t.schema === "mailto:" && !/^mailto:/i.test(t.url)) {
      t.url = "mailto:" + t.url;
    }
  };
  d.prototype.onCompile = function () {};
  module.exports = d;
}