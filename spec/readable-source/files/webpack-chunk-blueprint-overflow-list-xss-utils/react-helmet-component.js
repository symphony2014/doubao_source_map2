// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'Helmet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 885880
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var a;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var u = propTypesFactoryWrapper;
  var reactSideEffectHoc = require("react-side-effect-hoc") /*id: 932461*/;
  var l = reactSideEffectHoc;
  var deepEqualUtil_2 = require("deep-equal-util_2") /*id: 256315*/;
  var h = deepEqualUtil_2;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectAssignPolyfill_5 = require("object-assign-polyfill_5") /*id: 65551*/;
  var g = objectAssignPolyfill_5;
  var v = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
  };
  var m = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
  };
  Object.keys(m).map(function (e) {
    return m[e];
  });
  var y = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
  };
  var b = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
  };
  var _ = Object.keys(b).reduce(function (e, t) {
    e[b[t]] = t;
    return e;
  }, {});
  var w = [m.NOSCRIPT, m.SCRIPT, m.STYLE];
  var E = "data-react-helmet";
  var S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  function x(e, t) {
    if (!(e instanceof t)) {
      throw TypeError("Cannot call a class as a function");
    }
  }
  var k = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
          r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
      }
    }
    return function (t, n, r) {
      if (n) {
        e(t.prototype, n);
      }
      if (r) {
        e(t, r);
      }
      return t;
    };
  }();
  var O = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          e[r] = n[r];
        }
      }
    }
    return e;
  };
  function A(e, t) {
    if (typeof t != "function" && t !== null) {
      throw TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t);
      } else {
        e.__proto__ = t;
      }
    }
  }
  function T(e, t) {
    var n = {};
    for (var r in e) {
      if (!(t.indexOf(r) >= 0) && Object.prototype.hasOwnProperty.call(e, r)) {
        n[r] = e[r];
      }
    }
    return n;
  }
  function R(e, t) {
    if (!e) {
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    if (t && (typeof t == "object" || typeof t == "function")) {
      return t;
    } else {
      return e;
    }
  }
  function C(e) {
    var t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    if (t === false) {
      return String(e);
    } else {
      return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    }
  }
  function M(e) {
    var t = j(e, m.TITLE);
    var n = j(e, "titleTemplate");
    if (n && t) {
      return n.replace(/%s/g, function () {
        if (Array.isArray(t)) {
          return t.join("");
        } else {
          return t;
        }
      });
    }
    var r = j(e, "defaultTitle");
    return t || r || undefined;
  }
  function P(e, t) {
    return t.filter(function (t) {
      return t[e] !== undefined;
    }).map(function (t) {
      return t[e];
    }).reduce(function (e, t) {
      return O({}, e, t);
    }, {});
  }
  function D(e, t, n) {
    var r = {};
    return n.filter(function (t) {
      return !!Array.isArray(t[e]) || (t[e] !== undefined && Z("Helmet: " + e + " should be of type \"Array\". Instead found type \"" + S(t[e]) + "\""), false);
    }).map(function (t) {
      return t[e];
    }).reverse().reduce(function (e, n) {
      var i = {};
      n.filter(function (e) {
        var n = undefined;
        var o = Object.keys(e);
        var a = 0;
        for (; a < o.length; a++) {
          var s = o[a];
          var u = s.toLowerCase();
          if (t.indexOf(u) !== -1 && (n !== y.REL || e[n].toLowerCase() !== "canonical") && (u !== y.REL || e[u].toLowerCase() !== "stylesheet")) {
            n = u;
          }
          if (t.indexOf(s) !== -1 && (s === y.INNER_HTML || s === y.CSS_TEXT || s === y.ITEM_PROP)) {
            n = s;
          }
        }
        if (!n || !e[n]) {
          return false;
        }
        var c = e[n].toLowerCase();
        r[n] ||= {};
        i[n] ||= {};
        return !r[n][c] && (i[n][c] = true, true);
      }).reverse().forEach(function (t) {
        return e.push(t);
      });
      var o = Object.keys(i);
      var a = 0;
      for (; a < o.length; a++) {
        var s = o[a];
        var u = g({}, r[s], i[s]);
        r[s] = u;
      }
      return e;
    }, []).reverse();
  }
  function j(e, t) {
    for (var n = e.length - 1; n >= 0; n--) {
      var r = e[n];
      if (r.hasOwnProperty(t)) {
        return r[t];
      }
    }
    return null;
  }
  r = Date.now();
  function I(e) {
    var t = Date.now();
    if (t - r > 16) {
      r = t;
      e(t);
    } else {
      setTimeout(function () {
        I(e);
      }, 0);
    }
  }
  function N(e) {
    return clearTimeout(e);
  }
  var L = typeof window != "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || I : require.g.requestAnimationFrame || I;
  var B = typeof window != "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || N : require.g.cancelAnimationFrame || N;
  function Z(e) {
    return console && typeof console.warn == "function" && undefined;
  }
  var U = null;
  function z(e, t) {
    var n = e.baseTag;
    var r = e.bodyAttributes;
    var i = e.htmlAttributes;
    var o = e.linkTags;
    var a = e.metaTags;
    var s = e.noscriptTags;
    var u = e.onChangeClientState;
    var c = e.scriptTags;
    var l = e.styleTags;
    var f = e.title;
    var h = e.titleAttributes;
    G(m.BODY, r);
    G(m.HTML, i);
    H(f, h);
    var d = {
      baseTag: V(m.BASE, n),
      linkTags: V(m.LINK, o),
      metaTags: V(m.META, a),
      noscriptTags: V(m.NOSCRIPT, s),
      scriptTags: V(m.SCRIPT, c),
      styleTags: V(m.STYLE, l)
    };
    var p = {};
    var g = {};
    Object.keys(d).forEach(function (e) {
      var t = d[e];
      var n = t.newTags;
      var r = t.oldTags;
      if (n.length) {
        p[e] = n;
      }
      if (r.length) {
        g[e] = d[e].oldTags;
      }
    });
    if (t) {
      t();
    }
    u(e, p, g);
  }
  function F(e) {
    if (Array.isArray(e)) {
      return e.join("");
    } else {
      return e;
    }
  }
  function H(e, t) {
    if (e !== undefined && document.title !== e) {
      document.title = F(e);
    }
    G(m.TITLE, t);
  }
  function G(e, t) {
    var n = document.getElementsByTagName(e)[0];
    if (n) {
      var r = n.getAttribute(E);
      var i = r ? r.split(",") : [];
      var o = [].concat(i);
      var a = Object.keys(t);
      var s = 0;
      for (; s < a.length; s++) {
        var u = a[s];
        var c = t[u] || "";
        if (n.getAttribute(u) !== c) {
          n.setAttribute(u, c);
        }
        if (i.indexOf(u) === -1) {
          i.push(u);
        }
        var l = o.indexOf(u);
        if (l !== -1) {
          o.splice(l, 1);
        }
      }
      for (var f = o.length - 1; f >= 0; f--) {
        n.removeAttribute(o[f]);
      }
      if (i.length === o.length) {
        n.removeAttribute(E);
      } else if (n.getAttribute(E) !== a.join(",")) {
        n.setAttribute(E, a.join(","));
      }
    }
  }
  function V(e, t) {
    var n = document.head || document.querySelector(m.HEAD);
    var r = n.querySelectorAll(e + "[" + E + "]");
    var i = Array.prototype.slice.call(r);
    var o = [];
    var a = undefined;
    if (t && t.length) {
      t.forEach(function (t) {
        var n = document.createElement(e);
        for (var r in t) {
          if (t.hasOwnProperty(r)) {
            if (r === y.INNER_HTML) {
              n.innerHTML = t.innerHTML;
            } else if (r === y.CSS_TEXT) {
              if (n.styleSheet) {
                n.styleSheet.cssText = t.cssText;
              } else {
                n.appendChild(document.createTextNode(t.cssText));
              }
            } else {
              var s = t[r] === undefined ? "" : t[r];
              n.setAttribute(r, s);
            }
          }
        }
        n.setAttribute(E, "true");
        if (i.some(function (e, t) {
          a = t;
          return n.isEqualNode(e);
        })) {
          i.splice(a, 1);
        } else {
          o.push(n);
        }
      });
    }
    i.forEach(function (e) {
      return e.parentNode.removeChild(e);
    });
    o.forEach(function (e) {
      return n.appendChild(e);
    });
    return {
      oldTags: i,
      newTags: o
    };
  }
  function $(e) {
    return Object.keys(e).reduce(function (t, n) {
      var r = e[n] !== undefined ? n + "=\"" + e[n] + "\"" : "" + n;
      if (t) {
        return t + " " + r;
      } else {
        return r;
      }
    }, "");
  }
  function W(e, t, n, r) {
    var i = $(n);
    var o = F(t);
    if (i) {
      return "<" + e + " " + E + "=\"true\" " + i + ">" + C(o, r) + "</" + e + ">";
    } else {
      return "<" + e + " " + E + "=\"true\">" + C(o, r) + "</" + e + ">";
    }
  }
  function q(e, t = {}) {
    return Object.keys(e).reduce(function (t, n) {
      t[b[n] || n] = e[n];
      return t;
    }, t);
  }
  function K(e, t = {}) {
    return Object.keys(e).reduce(function (t, n) {
      t[_[n] || n] = e[n];
      return t;
    }, t);
  }
  function J(e, t, n) {
    var r;
    var i = q(n, ((r = {
      key: t
    })[E] = true, r));
    return [reactCoreLibraryReexport.createElement(m.TITLE, i, t)];
  }
  function X(e, t, n) {
    switch (e) {
      case m.TITLE:
        return {
          toComponent: function () {
            return J(e, t.title, t.titleAttributes, n);
          },
          toString: function () {
            return W(e, t.title, t.titleAttributes, n);
          }
        };
      case v.BODY:
      case v.HTML:
        return {
          toComponent: function () {
            return q(t);
          },
          toString: function () {
            return $(t);
          }
        };
      default:
        return {
          toComponent: function () {
            return t.map(function (t, n) {
              var r;
              (r = {
                key: n
              })[E] = true;
              var i = r;
              Object.keys(t).forEach(function (e) {
                var n = b[e] || e;
                if (n === y.INNER_HTML || n === y.CSS_TEXT) {
                  var r = t.innerHTML || t.cssText;
                  i.dangerouslySetInnerHTML = {
                    __html: r
                  };
                } else {
                  i[n] = t[e];
                }
              });
              return reactCoreLibraryReexport.createElement(e, i);
            });
          },
          toString: function () {
            return t.reduce(function (t, r) {
              var i = Object.keys(r).filter(function (e) {
                return e !== y.INNER_HTML && e !== y.CSS_TEXT;
              }).reduce(function (e, t) {
                var i = r[t] === undefined ? t : t + "=\"" + C(r[t], n) + "\"";
                if (e) {
                  return e + " " + i;
                } else {
                  return i;
                }
              }, "");
              var o = r.innerHTML || r.cssText || "";
              var a = w.indexOf(e) === -1;
              return t + "<" + e + " " + E + "=\"true\" " + i + (a ? "/>" : ">" + o + "</" + e + ">");
            }, "");
          }
        };
    }
  }
  function Y(e) {
    var t = e.baseTag;
    var n = e.bodyAttributes;
    var r = e.encode;
    var i = e.htmlAttributes;
    var o = e.linkTags;
    var a = e.metaTags;
    var s = e.noscriptTags;
    var u = e.scriptTags;
    var c = e.styleTags;
    var l = e.title;
    var f = e.titleAttributes;
    return {
      base: X(m.BASE, t, r),
      bodyAttributes: X(v.BODY, n, r),
      htmlAttributes: X(v.HTML, i, r),
      link: X(m.LINK, o, r),
      meta: X(m.META, a, r),
      noscript: X(m.NOSCRIPT, s, r),
      script: X(m.SCRIPT, u, r),
      style: X(m.STYLE, c, r),
      title: X(m.TITLE, {
        title: l === undefined ? "" : l,
        titleAttributes: f
      }, r)
    };
  }
  i = l(function (e) {
    var t;
    return {
      baseTag: (t = [y.HREF, y.TARGET], e.filter(function (e) {
        return e[m.BASE] !== undefined;
      }).map(function (e) {
        return e[m.BASE];
      }).reverse().reduce(function (e, n) {
        if (!e.length) {
          var r = Object.keys(n);
          var i = 0;
          for (; i < r.length; i++) {
            var o = r[i].toLowerCase();
            if (t.indexOf(o) !== -1 && n[o]) {
              return e.concat(n);
            }
          }
        }
        return e;
      }, [])),
      bodyAttributes: P(v.BODY, e),
      defer: j(e, "defer"),
      encode: j(e, "encodeSpecialCharacters"),
      htmlAttributes: P(v.HTML, e),
      linkTags: D(m.LINK, [y.REL, y.HREF], e),
      metaTags: D(m.META, [y.NAME, y.CHARSET, y.HTTPEQUIV, y.PROPERTY, y.ITEM_PROP], e),
      noscriptTags: D(m.NOSCRIPT, [y.INNER_HTML], e),
      onChangeClientState: j(e, "onChangeClientState") || function () {},
      scriptTags: D(m.SCRIPT, [y.SRC, y.INNER_HTML], e),
      styleTags: D(m.STYLE, [y.CSS_TEXT], e),
      title: M(e),
      titleAttributes: P(v.TITLE, e)
    };
  }, function (e) {
    if (U) {
      B(U);
    }
    if (e.defer) {
      U = L(function () {
        z(e, function () {
          U = null;
        });
      });
    } else {
      z(e);
      U = null;
    }
  }, Y)(function () {
    return null;
  });
  a = o = function (e) {
    function t() {
      x(this, t);
      return R(this, e.apply(this, arguments));
    }
    A(t, e);
    t.prototype.shouldComponentUpdate = function (e) {
      return !h(this.props, e);
    };
    t.prototype.mapNestedChildrenToProps = function (e, t) {
      if (!t) {
        return null;
      }
      switch (e.type) {
        case m.SCRIPT:
        case m.NOSCRIPT:
          return {
            innerHTML: t
          };
        case m.STYLE:
          return {
            cssText: t
          };
      }
      throw Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };
    t.prototype.flattenArrayTypeChildren = function (e) {
      var t;
      var n = e.child;
      var r = e.arrayTypeChildren;
      var i = e.newChildProps;
      var o = e.nestedChildren;
      return O({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [O({}, i, this.mapNestedChildrenToProps(n, o))]), t));
    };
    t.prototype.mapObjectTypeChildren = function (e) {
      var t;
      var n;
      var r = e.child;
      var i = e.newProps;
      var o = e.newChildProps;
      var a = e.nestedChildren;
      switch (r.type) {
        case m.TITLE:
          return O({}, i, ((t = {})[r.type] = a, t.titleAttributes = O({}, o), t));
        case m.BODY:
          return O({}, i, {
            bodyAttributes: O({}, o)
          });
        case m.HTML:
          return O({}, i, {
            htmlAttributes: O({}, o)
          });
      }
      return O({}, i, ((n = {})[r.type] = O({}, o), n));
    };
    t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
      var n = O({}, t);
      Object.keys(e).forEach(function (t) {
        var r;
        n = O({}, n, ((r = {})[t] = e[t], r));
      });
      return n;
    };
    t.prototype.warnOnInvalidChildren = function (e, t) {
      return true;
    };
    t.prototype.mapChildrenToProps = function (e, t) {
      var n = this;
      var r = {};
      reactCoreLibraryReexport.Children.forEach(e, function (e) {
        if (e && e.props) {
          var i = e.props;
          var o = i.children;
          var a = K(T(i, ["children"]));
          n.warnOnInvalidChildren(e, o);
          switch (e.type) {
            case m.LINK:
            case m.META:
            case m.NOSCRIPT:
            case m.SCRIPT:
            case m.STYLE:
              r = n.flattenArrayTypeChildren({
                child: e,
                arrayTypeChildren: r,
                newChildProps: a,
                nestedChildren: o
              });
              break;
            default:
              t = n.mapObjectTypeChildren({
                child: e,
                newProps: t,
                newChildProps: a,
                nestedChildren: o
              });
          }
        }
      });
      return t = this.mapArrayTypeChildrenToProps(r, t);
    };
    t.prototype.render = function () {
      var e = this.props;
      var t = e.children;
      var n = O({}, T(e, ["children"]));
      if (t) {
        n = this.mapChildrenToProps(t, n);
      }
      return reactCoreLibraryReexport.createElement(i, n);
    };
    k(t, null, [{
      key: "canUseDOM",
      set: function (e) {
        i.canUseDOM = e;
      }
    }]);
    return t;
  }(reactCoreLibraryReexport.Component);
  o.propTypes = {
    base: u.object,
    bodyAttributes: u.object,
    children: u.oneOfType([u.arrayOf(u.node), u.node]),
    defaultTitle: u.string,
    defer: u.bool,
    encodeSpecialCharacters: u.bool,
    htmlAttributes: u.object,
    link: u.arrayOf(u.object),
    meta: u.arrayOf(u.object),
    noscript: u.arrayOf(u.object),
    onChangeClientState: u.func,
    script: u.arrayOf(u.object),
    style: u.arrayOf(u.object),
    title: u.string,
    titleAttributes: u.object,
    titleTemplate: u.string
  };
  o.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  };
  o.peek = i.peek;
  o.rewind = function () {
    var e = i.rewind();
    e ||= Y({
      baseTag: [],
      bodyAttributes: {},
      encodeSpecialCharacters: true,
      htmlAttributes: {},
      linkTags: [],
      metaTags: [],
      noscriptTags: [],
      scriptTags: [],
      styleTags: [],
      title: "",
      titleAttributes: {}
    });
    return e;
  };
  var Q = a;
  Q.renderStatic = Q.rewind;
  require.d(exports, {
    Helmet: function () {
      return Q;
    }
  });
}