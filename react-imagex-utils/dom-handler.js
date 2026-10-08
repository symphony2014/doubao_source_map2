// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'htmlElementTypes'
// - Resolved require(423696) to 'html-element-types'
// - Renamed variable 'a' to 'htmlDomNodeDefinitions'
// - Resolved require(909047) to 'html-dom-node-definitions'
// - Resolved require(909047) to 'html-dom-node-definitions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 219329
         */
module.exports = function (module, exports, require) {
  var r = this && this.__createBinding || (Object.create ? function (e, t, n, r = n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    if (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) {
      i = {
        enumerable: true,
        get: function () {
          return t[n];
        }
      };
    }
    Object.defineProperty(e, r, i);
  } : function (e, t, n, r = n) {
    e[r] = t[n];
  });
  var i = this && this.__exportStar || function (e, t) {
    for (var n in e) {
      if (n !== "default" && !Object.prototype.hasOwnProperty.call(t, n)) {
        r(t, e, n);
      }
    }
  };
  exports.DomHandler = undefined;
  var htmlElementTypes = require("html-element-types") /*id: 423696*/;
  var htmlDomNodeDefinitions = require("html-dom-node-definitions") /*id: 909047*/;
  i(require("html-dom-node-definitions") /*id: 909047*/, exports);
  var l = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
  };
  var s = function () {
    function e(e, t, n) {
      this.dom = [];
      this.root = new htmlDomNodeDefinitions.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
      if (typeof t == "function") {
        n = t;
        t = l;
      }
      if (typeof e == "object") {
        t = e;
        e = undefined;
      }
      this.callback = e ?? null;
      this.options = t ?? l;
      this.elementCB = n ?? null;
    }
    e.prototype.onparserinit = function (e) {
      this.parser = e;
    };
    e.prototype.onreset = function () {
      this.dom = [];
      this.root = new htmlDomNodeDefinitions.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    };
    e.prototype.onend = function () {
      if (!this.done) {
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
      }
    };
    e.prototype.onerror = function (e) {
      this.handleCallback(e);
    };
    e.prototype.onclosetag = function () {
      this.lastNode = null;
      var e = this.tagStack.pop();
      if (this.options.withEndIndices) {
        e.endIndex = this.parser.endIndex;
      }
      if (this.elementCB) {
        this.elementCB(e);
      }
    };
    e.prototype.onopentag = function (e, t) {
      var n = this.options.xmlMode ? htmlElementTypes.ElementType.Tag : undefined;
      var r = new htmlDomNodeDefinitions.Element(e, t, undefined, n);
      this.addNode(r);
      this.tagStack.push(r);
    };
    e.prototype.ontext = function (e) {
      var t = this.lastNode;
      if (t && t.type === htmlElementTypes.ElementType.Text) {
        t.data += e;
        if (this.options.withEndIndices) {
          t.endIndex = this.parser.endIndex;
        }
      } else {
        var n = new htmlDomNodeDefinitions.Text(e);
        this.addNode(n);
        this.lastNode = n;
      }
    };
    e.prototype.oncomment = function (e) {
      if (this.lastNode && this.lastNode.type === htmlElementTypes.ElementType.Comment) {
        this.lastNode.data += e;
        return;
      }
      var t = new htmlDomNodeDefinitions.Comment(e);
      this.addNode(t);
      this.lastNode = t;
    };
    e.prototype.oncommentend = function () {
      this.lastNode = null;
    };
    e.prototype.oncdatastart = function () {
      var e = new htmlDomNodeDefinitions.Text("");
      var t = new htmlDomNodeDefinitions.CDATA([e]);
      this.addNode(t);
      e.parent = t;
      this.lastNode = e;
    };
    e.prototype.oncdataend = function () {
      this.lastNode = null;
    };
    e.prototype.onprocessinginstruction = function (e, t) {
      var n = new htmlDomNodeDefinitions.ProcessingInstruction(e, t);
      this.addNode(n);
    };
    e.prototype.handleCallback = function (e) {
      if (typeof this.callback == "function") {
        this.callback(e, this.dom);
      } else if (e) {
        throw e;
      }
    };
    e.prototype.addNode = function (e) {
      var t = this.tagStack[this.tagStack.length - 1];
      var n = t.children[t.children.length - 1];
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
    };
    return e;
  }();
  exports.DomHandler = s;
  exports.default = s;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}