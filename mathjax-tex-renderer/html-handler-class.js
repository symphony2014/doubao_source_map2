// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'abstractHandlerBase'
// - Resolved require(593441) to 'abstract-handler-base'
// - Renamed variable 'o' to 'htmlMathDocument'
// - Resolved require(164562) to 'html-math-document'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 12558
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
  exports.HTMLHandler = undefined;
  var abstractHandlerBase = require("abstract-handler-base") /*id: 593441*/;
  var htmlMathDocument = require("html-math-document") /*id: 164562*/;
  var i = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.documentClass = htmlMathDocument.HTMLDocument;
      return e;
    }
    T(e, t);
    e.prototype.handlesDocument = function (t) {
      var e = this.adaptor;
      if (typeof t == "string") {
        try {
          t = e.parse(t, "text/html");
        } catch (t) {}
      }
      return t instanceof e.window.Document || t instanceof e.window.HTMLElement || t instanceof e.window.DocumentFragment;
    };
    e.prototype.create = function (e, Q) {
      var r = this.adaptor;
      if (typeof e == "string") {
        e = r.parse(e, "text/html");
      } else if (e instanceof r.window.HTMLElement || e instanceof r.window.DocumentFragment) {
        var T = e;
        e = r.parse("", "text/html");
        r.append(r.body(e), T);
      }
      return t.prototype.create.call(this, e, Q);
    };
    return e;
  }(abstractHandlerBase.AbstractHandler);
  exports.HTMLHandler = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}