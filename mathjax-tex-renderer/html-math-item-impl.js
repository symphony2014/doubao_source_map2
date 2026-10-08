// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'abstractMathItemCore'
// - Resolved require(254335) to 'abstract-math-item-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 226833
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
  exports.HTMLMathItem = undefined;
  var abstractMathItemCore = require("abstract-math-item-core") /*id: 254335*/;
  var o = function (t) {
    function e(e, Q, r = true, T = {
      node: null,
      n: 0,
      delim: ""
    }, n = {
      node: null,
      n: 0,
      delim: ""
    }) {
      return t.call(this, e, Q, r, T, n) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "adaptor", {
      get: function () {
        return this.inputJax.adaptor;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.updateDocument = function (t) {
      if (this.state() < abstractMathItemCore.STATE.INSERTED) {
        if (this.inputJax.processStrings) {
          var e = this.start.node;
          if (e === this.end.node) {
            if (this.end.n && this.end.n < this.adaptor.value(this.end.node).length) {
              this.adaptor.split(this.end.node, this.end.n);
            }
            if (this.start.n) {
              e = this.adaptor.split(this.start.node, this.start.n);
            }
            this.adaptor.replace(this.typesetRoot, e);
          } else {
            for (this.start.n && (e = this.adaptor.split(e, this.start.n)); e !== this.end.node;) {
              var Q = this.adaptor.next(e);
              this.adaptor.remove(e);
              e = Q;
            }
            this.adaptor.insert(this.typesetRoot, e);
            if (this.end.n < this.adaptor.value(e).length) {
              this.adaptor.split(e, this.end.n);
            }
            this.adaptor.remove(e);
          }
        } else {
          this.adaptor.replace(this.typesetRoot, this.start.node);
        }
        this.start.node = this.end.node = this.typesetRoot;
        this.start.n = this.end.n = 0;
        this.state(abstractMathItemCore.STATE.INSERTED);
      }
    };
    e.prototype.updateStyleSheet = function (t) {
      t.addStyleSheet();
    };
    e.prototype.removeFromDocument = function (t = false) {
      if (this.state() >= abstractMathItemCore.STATE.TYPESET) {
        var e = this.adaptor;
        var Q = this.start.node;
        var r = e.text("");
        if (t) {
          var T = this.start.delim + this.math + this.end.delim;
          if (this.inputJax.processStrings) {
            r = e.text(T);
          } else {
            var o = e.parse(T, "text/html");
            r = e.firstChild(e.body(o));
          }
        }
        if (e.parent(Q)) {
          e.replace(r, Q);
        }
        this.start.node = this.end.node = r;
        this.start.n = this.end.n = 0;
      }
    };
    return e;
  }(abstractMathItemCore.AbstractMathItem);
  exports.HTMLMathItem = o;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}