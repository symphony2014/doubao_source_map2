// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'abstractDomAdaptor'
// - Resolved require(704595) to 'abstract-dom-adaptor'
// - Renamed variable 's' to 'nodeMixinFactory'
// - Resolved require(26083) to 'node-mixin-factory'
// - Renamed variable 'l' to 'liteDocumentClass'
// - Resolved require(873034) to 'lite-document-class'
// - Renamed variable 'c' to 'liteElementClass'
// - Resolved require(771714) to 'lite-element-class'
// - Renamed variable 'p' to 'liteDomNodes'
// - Resolved require(967811) to 'lite-dom-nodes'
// - Renamed variable 'h' to 'mathjaxLiteWindow'
// - Resolved require(655226) to 'mathjax-lite-window'
// - Renamed variable 'f' to 'mathjaxLiteParser'
// - Resolved require(534479) to 'mathjax-lite-parser'
// - Renamed variable 'd' to 'cssStyleParser'
// - Resolved require(389570) to 'css-style-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 638280
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  var o = this && this.__values || function (t) {
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
  var i = this && this.__read || function (t, e) {
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
  var a = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.liteAdaptor = exports.LiteAdaptor = exports.LiteBase = undefined;
  var abstractDomAdaptor = require("abstract-dom-adaptor") /*id: 704595*/;
  var nodeMixinFactory = require("node-mixin-factory") /*id: 26083*/;
  var liteDocumentClass = require("lite-document-class") /*id: 873034*/;
  var liteElementClass = require("lite-element-class") /*id: 771714*/;
  var liteDomNodes = require("lite-dom-nodes") /*id: 967811*/;
  var mathjaxLiteWindow = require("mathjax-lite-window") /*id: 655226*/;
  var mathjaxLiteParser = require("mathjax-lite-parser") /*id: 534479*/;
  var cssStyleParser = require("css-style-parser") /*id: 389570*/;
  var D = function (t) {
    function e() {
      var e = t.call(this) || this;
      e.parser = new mathjaxLiteParser.LiteParser();
      e.window = new mathjaxLiteWindow.LiteWindow();
      return e;
    }
    T(e, t);
    e.prototype.parse = function (t, e) {
      return this.parser.parseFromString(t, e, this);
    };
    e.prototype.create = function (t, e = null) {
      return new liteElementClass.LiteElement(t);
    };
    e.prototype.text = function (t) {
      return new liteDomNodes.LiteText(t);
    };
    e.prototype.comment = function (t) {
      return new liteDomNodes.LiteComment(t);
    };
    e.prototype.createDocument = function () {
      return new liteDocumentClass.LiteDocument();
    };
    e.prototype.head = function (t) {
      return t.head;
    };
    e.prototype.body = function (t) {
      return t.body;
    };
    e.prototype.root = function (t) {
      return t.root;
    };
    e.prototype.doctype = function (t) {
      return t.type;
    };
    e.prototype.tags = function (t, e, Q = null) {
      var r = [];
      var T = [];
      if (Q) {
        return T;
      }
      for (var n = t; n;) {
        var o = n.kind;
        if (o !== "#text" && o !== "#comment") {
          if (o === e) {
            T.push(n);
          }
          if (n.children.length) {
            r = n.children.concat(r);
          }
        }
        n = r.shift();
      }
      return T;
    };
    e.prototype.elementById = function (t, e) {
      var Q = [];
      var r = t;
      while (r) {
        if (r.kind !== "#text" && r.kind !== "#comment") {
          if (r.attributes.id === e) {
            return r;
          }
          if (r.children.length) {
            Q = r.children.concat(Q);
          }
        }
        r = Q.shift();
      }
      return null;
    };
    e.prototype.elementsByClass = function (t, e) {
      var Q = [];
      var r = [];
      var T = t;
      while (T) {
        if (T.kind !== "#text" && T.kind !== "#comment") {
          if ((T.attributes.class || "").trim().split(/ +/).includes(e)) {
            r.push(T);
          }
          if (T.children.length) {
            Q = T.children.concat(Q);
          }
        }
        T = Q.shift();
      }
      return r;
    };
    e.prototype.getElements = function (t, e) {
      var Q;
      var r;
      var T = [];
      var n = this.body(e);
      try {
        var i = o(t);
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var u = a.value;
          if (typeof u == "string") {
            if (u.charAt(0) === "#") {
              var s = this.elementById(n, u.slice(1));
              if (s) {
                T.push(s);
              }
            } else if (u.charAt(0) === ".") {
              T = T.concat(this.elementsByClass(n, u.slice(1)));
            } else if (u.match(/^[-a-z][-a-z0-9]*$/i)) {
              T = T.concat(this.tags(n, u));
            }
          } else if (Array.isArray(u)) {
            T = T.concat(u);
          } else if (u instanceof this.window.NodeList || u instanceof this.window.HTMLCollection) {
            T = T.concat(u.nodes);
          } else {
            T.push(u);
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
      return T;
    };
    e.prototype.contains = function (t, e) {
      while (e && e !== t) {
        e = this.parent(e);
      }
      return !!e;
    };
    e.prototype.parent = function (t) {
      return t.parent;
    };
    e.prototype.childIndex = function (t) {
      if (t.parent) {
        return t.parent.children.findIndex(function (e) {
          return e === t;
        });
      } else {
        return -1;
      }
    };
    e.prototype.append = function (t, e) {
      if (e.parent) {
        this.remove(e);
      }
      t.children.push(e);
      e.parent = t;
      return e;
    };
    e.prototype.insert = function (t, e) {
      if (t.parent) {
        this.remove(t);
      }
      if (e && e.parent) {
        var Q = this.childIndex(e);
        e.parent.children.splice(Q, 0, t);
        t.parent = e.parent;
      }
    };
    e.prototype.remove = function (t) {
      var e = this.childIndex(t);
      if (e >= 0) {
        t.parent.children.splice(e, 1);
      }
      t.parent = null;
      return t;
    };
    e.prototype.replace = function (t, e) {
      var Q = this.childIndex(e);
      if (Q >= 0) {
        e.parent.children[Q] = t;
        t.parent = e.parent;
        e.parent = null;
      }
      return e;
    };
    e.prototype.clone = function (t) {
      var e = this;
      var Q = new liteElementClass.LiteElement(t.kind);
      Q.attributes = n({}, t.attributes);
      Q.children = t.children.map(function (t) {
        if (t.kind === "#text") {
          return new liteDomNodes.LiteText(t.value);
        }
        if (t.kind === "#comment") {
          return new liteDomNodes.LiteComment(t.value);
        }
        var r = e.clone(t);
        r.parent = Q;
        return r;
      });
      return Q;
    };
    e.prototype.split = function (t, e) {
      var Q = new liteDomNodes.LiteText(t.value.slice(e));
      t.value = t.value.slice(0, e);
      t.parent.children.splice(this.childIndex(t) + 1, 0, Q);
      Q.parent = t.parent;
      return Q;
    };
    e.prototype.next = function (t) {
      var e = t.parent;
      if (!e) {
        return null;
      }
      var Q = this.childIndex(t) + 1;
      if (Q >= 0 && Q < e.children.length) {
        return e.children[Q];
      } else {
        return null;
      }
    };
    e.prototype.previous = function (t) {
      var e = t.parent;
      if (!e) {
        return null;
      }
      var Q = this.childIndex(t) - 1;
      if (Q >= 0) {
        return e.children[Q];
      } else {
        return null;
      }
    };
    e.prototype.firstChild = function (t) {
      return t.children[0];
    };
    e.prototype.lastChild = function (t) {
      return t.children[t.children.length - 1];
    };
    e.prototype.childNodes = function (t) {
      return a([], i(t.children), false);
    };
    e.prototype.childNode = function (t, e) {
      return t.children[e];
    };
    e.prototype.kind = function (t) {
      return t.kind;
    };
    e.prototype.value = function (t) {
      if (t.kind === "#text") {
        return t.value;
      } else if (t.kind === "#comment") {
        return t.value.replace(/^<!(--)?((?:.|\n)*)\1>$/, "$2");
      } else {
        return "";
      }
    };
    e.prototype.textContent = function (t) {
      var e = this;
      return t.children.reduce(function (t, Q) {
        return t + (Q.kind === "#text" ? Q.value : Q.kind === "#comment" ? "" : e.textContent(Q));
      }, "");
    };
    e.prototype.innerHTML = function (t) {
      return this.parser.serializeInner(this, t);
    };
    e.prototype.outerHTML = function (t) {
      return this.parser.serialize(this, t);
    };
    e.prototype.serializeXML = function (t) {
      return this.parser.serialize(this, t, true);
    };
    e.prototype.setAttribute = function (t, e, Q, r = null) {
      if (typeof Q != "string") {
        Q = String(Q);
      }
      if (r) {
        e = r.replace(/.*\//, "") + ":" + e.replace(/^.*:/, "");
      }
      t.attributes[e] = Q;
      if (e === "style") {
        t.styles = null;
      }
    };
    e.prototype.getAttribute = function (t, e) {
      return t.attributes[e];
    };
    e.prototype.removeAttribute = function (t, e) {
      delete t.attributes[e];
    };
    e.prototype.hasAttribute = function (t, e) {
      return t.attributes.hasOwnProperty(e);
    };
    e.prototype.allAttributes = function (t) {
      var e;
      var Q;
      var r = t.attributes;
      var T = [];
      try {
        var n = o(Object.keys(r));
        var i = n.next();
        for (; !i.done; i = n.next()) {
          var a = i.value;
          T.push({
            name: a,
            value: r[a]
          });
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (Q = n.return)) {
            Q.call(n);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return T;
    };
    e.prototype.addClass = function (t, e) {
      var Q = (t.attributes.class || "").split(/ /);
      if (!Q.find(function (t) {
        return t === e;
      })) {
        Q.push(e);
        t.attributes.class = Q.join(" ");
      }
    };
    e.prototype.removeClass = function (t, e) {
      var Q = (t.attributes.class || "").split(/ /);
      var r = Q.findIndex(function (t) {
        return t === e;
      });
      if (r >= 0) {
        Q.splice(r, 1);
        t.attributes.class = Q.join(" ");
      }
    };
    e.prototype.hasClass = function (t, e) {
      return !!(t.attributes.class || "").split(/ /).find(function (t) {
        return t === e;
      });
    };
    e.prototype.setStyle = function (t, e, Q) {
      t.styles ||= new cssStyleParser.Styles(this.getAttribute(t, "style"));
      t.styles.set(e, Q);
      t.attributes.style = t.styles.cssText;
    };
    e.prototype.getStyle = function (t, e) {
      if (!t.styles) {
        var Q = this.getAttribute(t, "style");
        if (!Q) {
          return "";
        }
        t.styles = new cssStyleParser.Styles(Q);
      }
      return t.styles.get(e);
    };
    e.prototype.allStyles = function (t) {
      return this.getAttribute(t, "style");
    };
    e.prototype.insertRules = function (t, e) {
      t.children = [this.text(e.join("\n\n") + "\n\n" + this.textContent(t))];
    };
    e.prototype.fontSize = function (t) {
      return 0;
    };
    e.prototype.fontFamily = function (t) {
      return "";
    };
    e.prototype.nodeSize = function (t, e = 1, Q = null) {
      return [0, 0];
    };
    e.prototype.nodeBBox = function (t) {
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
    };
    return e;
  }(abstractDomAdaptor.AbstractDOMAdaptor);
  exports.LiteBase = D;
  var L = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    return e;
  }(nodeMixinFactory.NodeMixin(D));
  exports.LiteAdaptor = L;
  exports.liteAdaptor = function (t = null) {
    return new L(null, t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}