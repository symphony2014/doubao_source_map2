// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'abstractMathDocumentCore'
// - Resolved require(216525) to 'abstract-math-document-core'
// - Renamed variable 'u' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Renamed variable 's' to 'htmlMathItemImpl'
// - Resolved require(226833) to 'html-math-item-impl'
// - Renamed variable 'l' to 'htmlMathList'
// - Resolved require(950282) to 'html-math-list'
// - Renamed variable 'c' to 'htmlDomStringsUtil'
// - Resolved require(350313) to 'html-dom-strings-util'
// - Renamed variable 'p' to 'abstractMathItemCore'
// - Resolved require(254335) to 'abstract-math-item-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 164562
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
  var o = this && this.__read || function (t, e) {
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
  var i = this && this.__values || function (t) {
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
  exports.HTMLDocument = undefined;
  var abstractMathDocumentCore = require("abstract-math-document-core") /*id: 216525*/;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var htmlMathItemImpl = require("html-math-item-impl") /*id: 226833*/;
  var htmlMathList = require("html-math-list") /*id: 950282*/;
  var htmlDomStringsUtil = require("html-dom-strings-util") /*id: 350313*/;
  var abstractMathItemCore = require("abstract-math-item-core") /*id: 254335*/;
  var h = function (t) {
    function e(e, Q, r) {
      var T = this;
      var n = o(optionsMergeUtils.separateOptions(r, htmlDomStringsUtil.HTMLDomStrings.OPTIONS), 2);
      var i = n[0];
      var a = n[1];
      (T = t.call(this, e, Q, i) || this).domStrings = T.options.DomStrings || new htmlDomStringsUtil.HTMLDomStrings(a);
      T.domStrings.adaptor = Q;
      T.styles = [];
      return T;
    }
    T(e, t);
    e.prototype.findPosition = function (t, e, Q, r) {
      var T;
      var n;
      var a = this.adaptor;
      try {
        var u = i(r[t]);
        var s = u.next();
        for (; !s.done; s = u.next()) {
          var l = s.value;
          var c = o(l, 2);
          var p = c[0];
          var h = c[1];
          if (e <= h && a.kind(p) === "#text") {
            return {
              node: p,
              n: Math.max(e, 0),
              delim: Q
            };
          }
          e -= h;
        }
      } catch (t) {
        T = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (n = u.return)) {
            n.call(u);
          }
        } finally {
          if (T) {
            throw T.error;
          }
        }
      }
      return {
        node: null,
        n: 0,
        delim: Q
      };
    };
    e.prototype.mathItem = function (t, e, Q) {
      var r = t.math;
      var T = this.findPosition(t.n, t.start.n, t.open, Q);
      var n = this.findPosition(t.n, t.end.n, t.close, Q);
      return new this.options.MathItem(r, e, t.display, T, n);
    };
    e.prototype.findMath = function (t) {
      var e;
      var Q;
      var r;
      var T;
      var n;
      var a;
      var s;
      var l;
      var c;
      if (!this.processed.isSet("findMath")) {
        this.adaptor.document = this.document;
        t = optionsMergeUtils.userOptions({
          elements: this.options.elements || [this.adaptor.body(this.document)]
        }, t);
        try {
          var p = i(this.adaptor.getElements(t.elements, this.document));
          var h = p.next();
          for (; !h.done; h = p.next()) {
            var f = h.value;
            var d = o([null, null], 2);
            var D = d[0];
            var L = d[1];
            try {
              r = undefined;
              var m = i(this.inputJax);
              var y = m.next();
              for (; !y.done; y = m.next()) {
                var H = y.value;
                var v = new this.options.MathList();
                if (H.processStrings) {
                  if (D === null) {
                    D = (n = o(this.domStrings.find(f), 2))[0];
                    L = n[1];
                  }
                  try {
                    a = undefined;
                    var g = i(H.findMath(D));
                    var b = g.next();
                    for (; !b.done; b = g.next()) {
                      var E = b.value;
                      v.push(this.mathItem(E, H, L));
                    }
                  } catch (t) {
                    a = {
                      error: t
                    };
                  } finally {
                    try {
                      if (b && !b.done && (s = g.return)) {
                        s.call(g);
                      }
                    } finally {
                      if (a) {
                        throw a.error;
                      }
                    }
                  }
                } else {
                  try {
                    l = undefined;
                    var C = i(H.findMath(f));
                    var V = C.next();
                    for (; !V.done; V = C.next()) {
                      var E = V.value;
                      var M = new this.options.MathItem(E.math, H, E.display, E.start, E.end);
                      v.push(M);
                    }
                  } catch (t) {
                    l = {
                      error: t
                    };
                  } finally {
                    try {
                      if (V && !V.done && (c = C.return)) {
                        c.call(C);
                      }
                    } finally {
                      if (l) {
                        throw l.error;
                      }
                    }
                  }
                }
                this.math.merge(v);
              }
            } catch (t) {
              r = {
                error: t
              };
            } finally {
              try {
                if (y && !y.done && (T = m.return)) {
                  T.call(m);
                }
              } finally {
                if (r) {
                  throw r.error;
                }
              }
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (h && !h.done && (Q = p.return)) {
              Q.call(p);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        this.processed.set("findMath");
      }
      return this;
    };
    e.prototype.updateDocument = function () {
      if (!this.processed.isSet("updateDocument")) {
        this.addPageElements();
        this.addStyleSheet();
        t.prototype.updateDocument.call(this);
        this.processed.set("updateDocument");
      }
      return this;
    };
    e.prototype.addPageElements = function () {
      var t = this.adaptor.body(this.document);
      var e = this.documentPageElements();
      if (e) {
        this.adaptor.append(t, e);
      }
    };
    e.prototype.addStyleSheet = function () {
      var t = this.documentStyleSheet();
      var e = this.adaptor;
      if (t && !e.parent(t)) {
        var Q = e.head(this.document);
        var r = this.findSheet(Q, e.getAttribute(t, "id"));
        if (r) {
          e.replace(t, r);
        } else {
          e.append(Q, t);
        }
      }
    };
    e.prototype.findSheet = function (t, e) {
      var Q;
      var r;
      if (e) {
        try {
          var T = i(this.adaptor.tags(t, "style"));
          var n = T.next();
          for (; !n.done; n = T.next()) {
            var o = n.value;
            if (this.adaptor.getAttribute(o, "id") === e) {
              return o;
            }
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (n && !n.done && (r = T.return)) {
              r.call(T);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
      }
      return null;
    };
    e.prototype.removeFromDocument = function (t) {
      var e;
      var Q;
      if (t === undefined) {
        t = false;
      }
      if (this.processed.isSet("updateDocument")) {
        try {
          var r = i(this.math);
          var T = r.next();
          for (; !T.done; T = r.next()) {
            var n = T.value;
            if (n.state() >= abstractMathItemCore.STATE.INSERTED) {
              n.state(abstractMathItemCore.STATE.TYPESET, t);
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (T && !T.done && (Q = r.return)) {
              Q.call(r);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
      this.processed.clear("updateDocument");
      return this;
    };
    e.prototype.documentStyleSheet = function () {
      return this.outputJax.styleSheet(this);
    };
    e.prototype.documentPageElements = function () {
      return this.outputJax.pageElements(this);
    };
    e.prototype.addStyles = function (t) {
      this.styles.push(t);
    };
    e.prototype.getStyles = function () {
      return this.styles;
    };
    e.KIND = "HTML";
    e.OPTIONS = n(n({}, abstractMathDocumentCore.AbstractMathDocument.OPTIONS), {
      renderActions: optionsMergeUtils.expandable(n(n({}, abstractMathDocumentCore.AbstractMathDocument.OPTIONS.renderActions), {
        styles: [abstractMathItemCore.STATE.INSERTED + 1, "", "updateStyleSheet", false]
      })),
      MathList: htmlMathList.HTMLMathList,
      MathItem: htmlMathItemImpl.HTMLMathItem,
      DomStrings: null
    });
    return e;
  }(abstractMathDocumentCore.AbstractMathDocument);
  exports.HTMLDocument = h;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}