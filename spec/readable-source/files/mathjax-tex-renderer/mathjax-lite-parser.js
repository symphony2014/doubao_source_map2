// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(22642) to 'mathjax-entities-util'
// - Renamed variable 'l' to 'liteElementClass'
// - Resolved require(771714) to 'lite-element-class'
// - Renamed variable 'c' to 'liteDomNodes'
// - Resolved require(967811) to 'lite-dom-nodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 534479
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var o = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var i = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          n(e, t, Q);
        }
      }
    }
    o(e, t);
    return e;
  };
  var a = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var u = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.LiteParser = exports.PATTERNS = undefined;
  var s = i(require("mathjax-entities-util") /*id: 22642*/);
  var liteElementClass = require("lite-element-class") /*id: 771714*/;
  var liteDomNodes = require("lite-dom-nodes") /*id: 967811*/;
  (r = T = exports.PATTERNS ||= {}).TAGNAME = "[a-z][^\\s\\n>]*";
  r.ATTNAME = "[a-z][^\\s\\n>=]*";
  r.VALUE = "(?:'[^']*'|\"[^\"]*\"|[^\\s\\n]+)";
  r.VALUESPLIT = "(?:'([^']*)'|\"([^\"]*)\"|([^\\s\\n]+))";
  r.SPACE = "(?:\\s|\\n)+";
  r.OPTIONALSPACE = "(?:\\s|\\n)*";
  r.ATTRIBUTE = r.ATTNAME + "(?:" + r.OPTIONALSPACE + "=" + r.OPTIONALSPACE + r.VALUE + ")?";
  r.ATTRIBUTESPLIT = "(" + r.ATTNAME + ")(?:" + r.OPTIONALSPACE + "=" + r.OPTIONALSPACE + r.VALUESPLIT + ")?";
  r.TAG = "(<(?:" + r.TAGNAME + "(?:" + r.SPACE + r.ATTRIBUTE + ")*" + r.OPTIONALSPACE + "/?|/" + r.TAGNAME + "|!--[^]*?--|![^]*?)(?:>|$))";
  r.tag = RegExp(r.TAG, "i");
  r.attr = RegExp(r.ATTRIBUTE, "i");
  r.attrsplit = RegExp(r.ATTRIBUTESPLIT, "i");
  var p = function () {
    function t() {}
    t.prototype.parseFromString = function (t, e = "text/html", Q = null) {
      var r = Q.createDocument();
      var n = Q.body(r);
      var o = t.replace(/<\?.*?\?>/g, "").split(T.tag);
      while (o.length) {
        var i = o.shift();
        var a = o.shift();
        if (i) {
          this.addText(Q, n, i);
        }
        if (a && a.charAt(a.length - 1) === ">") {
          if (a.charAt(1) === "!") {
            this.addComment(Q, n, a);
          } else {
            n = a.charAt(1) === "/" ? this.closeTag(Q, n, a) : this.openTag(Q, n, a, o);
          }
        }
      }
      this.checkDocument(Q, r);
      return r;
    };
    t.prototype.addText = function (t, e, Q) {
      Q = s.translate(Q);
      return t.append(e, t.text(Q));
    };
    t.prototype.addComment = function (t, e, Q) {
      return t.append(e, new liteDomNodes.LiteComment(Q));
    };
    t.prototype.closeTag = function (t, e, Q) {
      for (var r = Q.slice(2, Q.length - 1).toLowerCase(); t.parent(e) && t.kind(e) !== r;) {
        e = t.parent(e);
      }
      return t.parent(e);
    };
    t.prototype.openTag = function (t, e, Q, r) {
      var n = this.constructor.PCDATA;
      var o = this.constructor.SELF_CLOSING;
      var i = Q.match(/<(.*?)[\s\n>\/]/)[1].toLowerCase();
      var a = t.node(i);
      var u = Q.replace(/^<.*?[\s\n>]/, "").split(T.attrsplit);
      if (u.pop().match(/>$/) || u.length < 5) {
        this.addAttributes(t, a, u);
        t.append(e, a);
        if (!o[i] && !Q.match(/\/>$/)) {
          if (n[i]) {
            this.handlePCDATA(t, a, i, r);
          } else {
            e = a;
          }
        }
      }
      return e;
    };
    t.prototype.addAttributes = function (t, e, Q) {
      var r = this.constructor.CDATA_ATTR;
      for (; Q.length;) {
        var T = a(Q.splice(0, 5), 5);
        var n = T[1];
        var o = T[2];
        var i = T[3];
        var u = T[4];
        var l = o || i || u || "";
        if (!r[n]) {
          l = s.translate(l);
        }
        t.setAttribute(e, n, l);
      }
    };
    t.prototype.handlePCDATA = function (t, e, Q, r) {
      var T = [];
      var n = "</" + Q + ">";
      var o = "";
      while (r.length && o !== n) {
        T.push(o);
        T.push(r.shift());
        o = r.shift();
      }
      t.append(e, t.text(T.join("")));
    };
    t.prototype.checkDocument = function (t, e) {
      var Q;
      var r;
      var T;
      var n;
      var o = this.getOnlyChild(t, t.body(e));
      if (o) {
        try {
          var i = u(t.childNodes(t.body(e)));
          var a = i.next();
          for (; !a.done; a = i.next()) {
            var s = a.value;
            if (s === o) {
              break;
            }
            if (s instanceof liteDomNodes.LiteComment && s.value.match(/^<!DOCTYPE/)) {
              e.type = s.value;
            }
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (a && !a.done && (r = i.return)) {
              r.call(i);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
        switch (t.kind(o)) {
          case "html":
            try {
              var l = u(o.children);
              var p = l.next();
              for (; !p.done; p = l.next()) {
                var s = p.value;
                switch (t.kind(s)) {
                  case "head":
                    e.head = s;
                    break;
                  case "body":
                    e.body = s;
                }
              }
            } catch (t) {
              T = {
                error: t
              };
            } finally {
              try {
                if (p && !p.done && (n = l.return)) {
                  n.call(l);
                }
              } finally {
                if (T) {
                  throw T.error;
                }
              }
            }
            e.root = o;
            t.remove(o);
            if (t.parent(e.body) !== o) {
              t.append(o, e.body);
            }
            if (t.parent(e.head) !== o) {
              t.insert(e.head, e.body);
            }
            break;
          case "head":
            e.head = t.replace(o, e.head);
            break;
          case "body":
            e.body = t.replace(o, e.body);
        }
      }
    };
    t.prototype.getOnlyChild = function (t, e) {
      var Q;
      var r;
      var T = null;
      try {
        var n = u(t.childNodes(e));
        var o = n.next();
        for (; !o.done; o = n.next()) {
          var i = o.value;
          if (i instanceof liteElementClass.LiteElement) {
            if (T) {
              return null;
            }
            T = i;
          }
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (r = n.return)) {
            r.call(n);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      return T;
    };
    t.prototype.serialize = function (t, e, Q) {
      var r = this;
      if (Q === undefined) {
        Q = false;
      }
      var T = this.constructor.SELF_CLOSING;
      var n = this.constructor.CDATA_ATTR;
      var o = t.kind(e);
      var i = t.allAttributes(e).map(function (t) {
        return t.name + "=\"" + (n[t.name] ? t.value : r.protectAttribute(t.value)) + "\"";
      }).join(" ");
      var a = this.serializeInner(t, e, Q);
      return "<" + o + (i ? " " + i : "") + (Q && !a || T[o] ? Q ? "/>" : ">" : `>${a}</${o}>`);
    };
    t.prototype.serializeInner = function (t, e, Q) {
      var r = this;
      if (Q === undefined) {
        Q = false;
      }
      if (this.constructor.PCDATA.hasOwnProperty(e.kind)) {
        return t.childNodes(e).map(function (e) {
          return t.value(e);
        }).join("");
      } else {
        return t.childNodes(e).map(function (e) {
          var T = t.kind(e);
          if (T === "#text") {
            return r.protectHTML(t.value(e));
          } else if (T === "#comment") {
            return e.value;
          } else {
            return r.serialize(t, e, Q);
          }
        }).join("");
      }
    };
    t.prototype.protectAttribute = function (t) {
      if (typeof t != "string") {
        t = String(t);
      }
      return t.replace(/"/g, "&quot;");
    };
    t.prototype.protectHTML = function (t) {
      return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    t.SELF_CLOSING = {
      area: true,
      base: true,
      br: true,
      col: true,
      command: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      menuitem: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    t.PCDATA = {
      option: true,
      textarea: true,
      fieldset: true,
      title: true,
      style: true,
      script: true
    };
    t.CDATA_ATTR = {
      style: true,
      datafld: true,
      datasrc: true,
      href: true,
      src: true,
      longdesc: true,
      usemap: true,
      cite: true,
      datetime: true,
      action: true,
      axis: true,
      profile: true,
      content: true,
      scheme: true
    };
    return t;
  }();
  exports.LiteParser = p;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}