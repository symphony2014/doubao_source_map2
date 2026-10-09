// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 254335
         */
module.exports = function (module, exports, require) {
  exports.newState = exports.STATE = exports.AbstractMathItem = exports.protoItem = undefined;
  exports.protoItem = function (t, e, Q, r, T, n, o = null) {
    return {
      open: t,
      math: e,
      close: Q,
      n: r,
      start: {
        n: T
      },
      end: {
        n: n
      },
      display: o
    };
  };
  var Q = function () {
    function t(t, Q, r = true, T = {
      i: 0,
      n: 0,
      delim: ""
    }, n = {
      i: 0,
      n: 0,
      delim: ""
    }) {
      this.root = null;
      this.typesetRoot = null;
      this.metrics = {};
      this.inputData = {};
      this.outputData = {};
      this._state = exports.STATE.UNPROCESSED;
      this.math = t;
      this.inputJax = Q;
      this.display = r;
      this.start = T;
      this.end = n;
      this.root = null;
      this.typesetRoot = null;
      this.metrics = {};
      this.inputData = {};
      this.outputData = {};
    }
    Object.defineProperty(t.prototype, "isEscaped", {
      get: function () {
        return this.display === null;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.render = function (t) {
      t.renderActions.renderMath(this, t);
    };
    t.prototype.rerender = function (t, Q = exports.STATE.RERENDER) {
      if (this.state() >= Q) {
        this.state(Q - 1);
      }
      t.renderActions.renderMath(this, t, Q);
    };
    t.prototype.convert = function (t, Q = exports.STATE.LAST) {
      t.renderActions.renderConvert(this, t, Q);
    };
    t.prototype.compile = function (t) {
      if (this.state() < exports.STATE.COMPILED) {
        this.root = this.inputJax.compile(this, t);
        this.state(exports.STATE.COMPILED);
      }
    };
    t.prototype.typeset = function (t) {
      if (this.state() < exports.STATE.TYPESET) {
        this.typesetRoot = t.outputJax[this.isEscaped ? "escaped" : "typeset"](this, t);
        this.state(exports.STATE.TYPESET);
      }
    };
    t.prototype.updateDocument = function (t) {};
    t.prototype.removeFromDocument = function (t = false) {};
    t.prototype.setMetrics = function (t, e, Q, r, T) {
      this.metrics = {
        em: t,
        ex: e,
        containerWidth: Q,
        lineWidth: r,
        scale: T
      };
    };
    t.prototype.state = function (t = null, Q = false) {
      if (t != null) {
        if (t < exports.STATE.INSERTED && this._state >= exports.STATE.INSERTED) {
          this.removeFromDocument(Q);
        }
        if (t < exports.STATE.TYPESET && this._state >= exports.STATE.TYPESET) {
          this.outputData = {};
        }
        if (t < exports.STATE.COMPILED && this._state >= exports.STATE.COMPILED) {
          this.inputData = {};
        }
        this._state = t;
      }
      return this._state;
    };
    t.prototype.reset = function (t = false) {
      this.state(exports.STATE.UNPROCESSED, t);
    };
    return t;
  }();
  exports.AbstractMathItem = Q;
  exports.STATE = {
    UNPROCESSED: 0,
    FINDMATH: 10,
    COMPILED: 20,
    CONVERT: 100,
    METRICS: 110,
    RERENDER: 125,
    TYPESET: 150,
    INSERTED: 200,
    LAST: 10000
  };
  exports.newState = function (t, Q) {
    if (t in exports.STATE) {
      throw Error("State " + t + " already exists");
    }
    exports.STATE[t] = Q;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}