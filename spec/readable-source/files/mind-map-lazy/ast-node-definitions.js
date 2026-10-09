// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bl' to 'isCdata'
// - Renamed export 'YR' to 'isElement'
// - Renamed export 'BB' to 'RootNode'
// - Renamed export 'g8' to 'hasChildren'
// - Renamed export 'p7' to 'Parser'
// - Renamed export 'C3' to 'isComment'
// - Renamed export 'sv' to 'CommentNode'
// - Renamed export 'qk' to 'isRoot'
// - Renamed export 'W_' to 'ElementNode'
// - Renamed export 'wX' to 'isDirective'
// - Renamed export 'sm' to 'cloneNode'
// - Renamed export 'Gs' to 'isText'
// - Renamed export 'v8' to 'DirectiveNode'
// - Renamed export 'xv' to 'TextNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 718070
         */
module.exports = function (module, exports, require) {
  var astNodeTypeConstants = require("ast-node-type-constants") /*id: 324565*/;
  class i {
    constructor() {
      this.parent = null;
      this.prev = null;
      this.next = null;
      this.startIndex = null;
      this.endIndex = null;
    }
    get parentNode() {
      return this.parent;
    }
    set parentNode(e) {
      this.parent = e;
    }
    get previousSibling() {
      return this.prev;
    }
    set previousSibling(e) {
      this.prev = e;
    }
    get nextSibling() {
      return this.next;
    }
    set nextSibling(e) {
      this.next = e;
    }
    cloneNode(e = false) {
      return x(this, e);
    }
  }
  class o extends i {
    constructor(e) {
      super();
      this.data = e;
    }
    get nodeValue() {
      return this.data;
    }
    set nodeValue(e) {
      this.data = e;
    }
  }
  class a extends o {
    constructor() {
      super(...arguments);
      this.type = astNodeTypeConstants.nodeTypes.Text;
    }
    get nodeType() {
      return 3;
    }
  }
  class l extends o {
    constructor() {
      super(...arguments);
      this.type = astNodeTypeConstants.nodeTypes.Comment;
    }
    get nodeType() {
      return 8;
    }
  }
  class s extends o {
    constructor(e, t) {
      super(t);
      this.name = e;
      this.type = astNodeTypeConstants.nodeTypes.Directive;
    }
    get nodeType() {
      return 1;
    }
  }
  class c extends i {
    constructor(e) {
      super();
      this.children = e;
    }
    get firstChild() {
      return this.children[0] ?? null;
    }
    get lastChild() {
      if (this.children.length > 0) {
        return this.children[this.children.length - 1];
      } else {
        return null;
      }
    }
    get childNodes() {
      return this.children;
    }
    set childNodes(e) {
      this.children = e;
    }
  }
  class u extends c {
    constructor() {
      super(...arguments);
      this.type = astNodeTypeConstants.nodeTypes.CDATA;
    }
    get nodeType() {
      return 4;
    }
  }
  class p extends c {
    constructor() {
      super(...arguments);
      this.type = astNodeTypeConstants.nodeTypes.Root;
    }
    get nodeType() {
      return 9;
    }
  }
  class h extends c {
    constructor(e, t, n = [], i = e === "script" ? astNodeTypeConstants.nodeTypes.Script : e === "style" ? astNodeTypeConstants.nodeTypes.Style : astNodeTypeConstants.nodeTypes.Tag) {
      super(n);
      this.name = e;
      this.attribs = t;
      this.type = i;
    }
    get nodeType() {
      return 1;
    }
    get tagName() {
      return this.name;
    }
    set tagName(e) {
      this.name = e;
    }
    get attributes() {
      return Object.keys(this.attribs).map(e => {
        return {
          name: e,
          value: this.attribs[e],
          namespace: this["x-attribsNamespace"]?.[e],
          prefix: this["x-attribsPrefix"]?.[e]
        };
      });
    }
  }
  function d(e) {
    return astNodeTypeConstants.isElementNode(e);
  }
  function A(e) {
    return e.type === astNodeTypeConstants.nodeTypes.CDATA;
  }
  function f(e) {
    return e.type === astNodeTypeConstants.nodeTypes.Text;
  }
  function g(e) {
    return e.type === astNodeTypeConstants.nodeTypes.Comment;
  }
  function m(e) {
    return e.type === astNodeTypeConstants.nodeTypes.Directive;
  }
  function y(e) {
    return e.type === astNodeTypeConstants.nodeTypes.Root;
  }
  function b(e) {
    return Object.prototype.hasOwnProperty.call(e, "children");
  }
  function x(e, t = false) {
    let n;
    if (f(e)) {
      n = new a(e.data);
    } else if (g(e)) {
      n = new l(e.data);
    } else if (d(e)) {
      let r = t ? k(e.children) : [];
      let i = new h(e.name, {
        ...e.attribs
      }, r);
      r.forEach(e => e.parent = i);
      if (e.namespace != null) {
        i.namespace = e.namespace;
      }
      if (e["x-attribsNamespace"]) {
        i["x-attribsNamespace"] = {
          ...e["x-attribsNamespace"]
        };
      }
      if (e["x-attribsPrefix"]) {
        i["x-attribsPrefix"] = {
          ...e["x-attribsPrefix"]
        };
      }
      n = i;
    } else if (A(e)) {
      let r = t ? k(e.children) : [];
      let i = new u(r);
      r.forEach(e => e.parent = i);
      n = i;
    } else if (y(e)) {
      let r = t ? k(e.children) : [];
      let i = new p(r);
      r.forEach(e => e.parent = i);
      if (e["x-mode"]) {
        i["x-mode"] = e["x-mode"];
      }
      n = i;
    } else if (m(e)) {
      let t = new s(e.name, e.data);
      if (e["x-name"] != null) {
        t["x-name"] = e["x-name"];
        t["x-publicId"] = e["x-publicId"];
        t["x-systemId"] = e["x-systemId"];
      }
      n = t;
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
  function k(e) {
    let t = e.map(e => x(e, true));
    for (let e = 1; e < t.length; e++) {
      t[e].prev = t[e - 1];
      t[e - 1].next = t[e];
    }
    return t;
  }
  let w = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
  };
  class v {
    constructor(e, t, n) {
      this.dom = [];
      this.root = new p(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
      if (typeof t == "function") {
        n = t;
        t = w;
      }
      if (typeof e == "object") {
        t = e;
        e = undefined;
      }
      this.callback = e ?? null;
      this.options = t ?? w;
      this.elementCB = n ?? null;
    }
    onparserinit(e) {
      this.parser = e;
    }
    onreset() {
      this.dom = [];
      this.root = new p(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    }
    onend() {
      if (!this.done) {
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
      }
    }
    onerror(e) {
      this.handleCallback(e);
    }
    onclosetag() {
      this.lastNode = null;
      let e = this.tagStack.pop();
      if (this.options.withEndIndices) {
        e.endIndex = this.parser.endIndex;
      }
      if (this.elementCB) {
        this.elementCB(e);
      }
    }
    onopentag(e, t) {
      let n = new h(e, t, undefined, this.options.xmlMode ? astNodeTypeConstants.nodeTypes.Tag : undefined);
      this.addNode(n);
      this.tagStack.push(n);
    }
    ontext(e) {
      let {
        lastNode: t
      } = this;
      if (t && t.type === astNodeTypeConstants.nodeTypes.Text) {
        t.data += e;
        if (this.options.withEndIndices) {
          t.endIndex = this.parser.endIndex;
        }
      } else {
        let t = new a(e);
        this.addNode(t);
        this.lastNode = t;
      }
    }
    oncomment(e) {
      if (this.lastNode && this.lastNode.type === astNodeTypeConstants.nodeTypes.Comment) {
        this.lastNode.data += e;
        return;
      }
      let t = new l(e);
      this.addNode(t);
      this.lastNode = t;
    }
    oncommentend() {
      this.lastNode = null;
    }
    oncdatastart() {
      let e = new a("");
      let t = new u([e]);
      this.addNode(t);
      e.parent = t;
      this.lastNode = e;
    }
    oncdataend() {
      this.lastNode = null;
    }
    onprocessinginstruction(e, t) {
      let n = new s(e, t);
      this.addNode(n);
    }
    handleCallback(e) {
      if (typeof this.callback == "function") {
        this.callback(e, this.dom);
      } else if (e) {
        throw e;
      }
    }
    addNode(e) {
      let t = this.tagStack[this.tagStack.length - 1];
      let n = t.children[t.children.length - 1];
      if (this.options.withStartIndices) {
        e.startIndex = this.parser.startIndex;
      }
      if (this.options.withEndIndices) {
        e.endIndex = this.parser.endIndex;
      }
      t.children.push(e);
      if (n) {
        e.prev = n;
        n.next = e;
      }
      e.parent = t;
      this.lastNode = null;
    }
  }
  require.d(exports, {
    isCdata: function () {
      return A;
    },
    isElement: function () {
      return d;
    },
    RootNode: function () {
      return p;
    },
    hasChildren: function () {
      return b;
    },
    Parser: function () {
      return v;
    },
    isComment: function () {
      return g;
    },
    CommentNode: function () {
      return l;
    },
    isRoot: function () {
      return y;
    },
    ElementNode: function () {
      return h;
    },
    isDirective: function () {
      return m;
    },
    cloneNode: function () {
      return x;
    },
    isText: function () {
      return f;
    },
    DirectiveNode: function () {
      return s;
    },
    TextNode: function () {
      return a;
    }
  });
}