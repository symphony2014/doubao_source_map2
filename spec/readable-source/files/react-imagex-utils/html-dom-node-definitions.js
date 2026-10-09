// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'htmlElementTypes'
// - Resolved require(423696) to 'html-element-types'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 909047
         */
module.exports = function (module, exports, require) {
  var r;
  var i = this && this.__extends || (r = function (e, t) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    })(e, t);
  }, function (e, t) {
    if (typeof t != "function" && t !== null) {
      throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
    }
    function n() {
      this.constructor = e;
    }
    r(e, t);
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  });
  var o = this && this.__assign || function () {
    return (o = Object.assign || function (e) {
      var t;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in t = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  };
  exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = undefined;
  var htmlElementTypes = require("html-element-types") /*id: 423696*/;
  var l = function () {
    function e() {
      this.parent = null;
      this.prev = null;
      this.next = null;
      this.startIndex = null;
      this.endIndex = null;
    }
    Object.defineProperty(e.prototype, "parentNode", {
      get: function () {
        return this.parent;
      },
      set: function (e) {
        this.parent = e;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "previousSibling", {
      get: function () {
        return this.prev;
      },
      set: function (e) {
        this.prev = e;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "nextSibling", {
      get: function () {
        return this.next;
      },
      set: function (e) {
        this.next = e;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.cloneNode = function (e = false) {
      return w(this, e);
    };
    return e;
  }();
  exports.Node = l;
  var s = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.data = t;
      return n;
    }
    i(t, e);
    Object.defineProperty(t.prototype, "nodeValue", {
      get: function () {
        return this.data;
      },
      set: function (e) {
        this.data = e;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }(l);
  exports.DataNode = s;
  var c = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.type = htmlElementTypes.ElementType.Text;
      return t;
    }
    i(t, e);
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 3;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }(s);
  exports.Text = c;
  var u = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.type = htmlElementTypes.ElementType.Comment;
      return t;
    }
    i(t, e);
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 8;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }(s);
  exports.Comment = u;
  var p = function (e) {
    function t(t, n) {
      var r = e.call(this, n) || this;
      r.name = t;
      r.type = htmlElementTypes.ElementType.Directive;
      return r;
    }
    i(t, e);
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }(s);
  exports.ProcessingInstruction = p;
  var h = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.children = t;
      return n;
    }
    i(t, e);
    Object.defineProperty(t.prototype, "firstChild", {
      get: function () {
        return this.children[0] ?? null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "lastChild", {
      get: function () {
        if (this.children.length > 0) {
          return this.children[this.children.length - 1];
        } else {
          return null;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "childNodes", {
      get: function () {
        return this.children;
      },
      set: function (e) {
        this.children = e;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }(l);
  exports.NodeWithChildren = h;
  var d = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.type = htmlElementTypes.ElementType.CDATA;
      return t;
    }
    i(t, e);
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 4;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }(h);
  exports.CDATA = d;
  var A = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.type = htmlElementTypes.ElementType.Root;
      return t;
    }
    i(t, e);
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 9;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }(h);
  exports.Document = A;
  var f = function (e) {
    function t(t, n, r = [], i = t === "script" ? htmlElementTypes.ElementType.Script : t === "style" ? htmlElementTypes.ElementType.Style : htmlElementTypes.ElementType.Tag) {
      var o = e.call(this, r) || this;
      o.name = t;
      o.attribs = n;
      o.type = i;
      return o;
    }
    i(t, e);
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "tagName", {
      get: function () {
        return this.name;
      },
      set: function (e) {
        this.name = e;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "attributes", {
      get: function () {
        var e = this;
        return Object.keys(this.attribs).map(function (t) {
          return {
            name: t,
            value: e.attribs[t],
            namespace: e["x-attribsNamespace"]?.[t],
            prefix: e["x-attribsPrefix"]?.[t]
          };
        });
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }(h);
  function g(e) {
    return htmlElementTypes.isTag(e);
  }
  function m(e) {
    return e.type === htmlElementTypes.ElementType.CDATA;
  }
  function y(e) {
    return e.type === htmlElementTypes.ElementType.Text;
  }
  function b(e) {
    return e.type === htmlElementTypes.ElementType.Comment;
  }
  function x(e) {
    return e.type === htmlElementTypes.ElementType.Directive;
  }
  function k(e) {
    return e.type === htmlElementTypes.ElementType.Root;
  }
  function w(e, t = false) {
    if (y(e)) {
      n = new c(e.data);
    } else if (b(e)) {
      n = new u(e.data);
    } else if (g(e)) {
      var n;
      var r = t ? v(e.children) : [];
      var i = new f(e.name, o({}, e.attribs), r);
      r.forEach(function (e) {
        return e.parent = i;
      });
      if (e.namespace != null) {
        i.namespace = e.namespace;
      }
      if (e["x-attribsNamespace"]) {
        i["x-attribsNamespace"] = o({}, e["x-attribsNamespace"]);
      }
      if (e["x-attribsPrefix"]) {
        i["x-attribsPrefix"] = o({}, e["x-attribsPrefix"]);
      }
      n = i;
    } else if (m(e)) {
      var r = t ? v(e.children) : [];
      var a = new d(r);
      r.forEach(function (e) {
        return e.parent = a;
      });
      n = a;
    } else if (k(e)) {
      var r = t ? v(e.children) : [];
      var l = new A(r);
      r.forEach(function (e) {
        return e.parent = l;
      });
      if (e["x-mode"]) {
        l["x-mode"] = e["x-mode"];
      }
      n = l;
    } else if (x(e)) {
      var s = new p(e.name, e.data);
      if (e["x-name"] != null) {
        s["x-name"] = e["x-name"];
        s["x-publicId"] = e["x-publicId"];
        s["x-systemId"] = e["x-systemId"];
      }
      n = s;
    } else {
      throw Error(`Not implemented yet: ${e.type}`);
    }
    n.startIndex = e.startIndex;
    n.endIndex = e.endIndex;
    if (e.sourceCodeLocation != null) {
      n.sourceCodeLocation = e.sourceCodeLocation;
    }
    return n;
  }
  function v(e) {
    var t = e.map(function (e) {
      return w(e, true);
    });
    var n = 1;
    for (; n < t.length; n++) {
      t[n].prev = t[n - 1];
      t[n - 1].next = t[n];
    }
    return t;
  }
  exports.Element = f;
  exports.isTag = g;
  exports.isCDATA = m;
  exports.isText = y;
  exports.isComment = b;
  exports.isDirective = x;
  exports.isDocument = k;
  exports.hasChildren = function (e) {
    return Object.prototype.hasOwnProperty.call(e, "children");
  };
  exports.cloneNode = w;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}