// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'commonMactionMixin'
// - Resolved require(861629) to 'common-maction-mixin'
// - Renamed variable 'i' to 'commonMactionMixin_1'
// - Resolved require(861629) to 'common-maction-mixin'
// - Renamed variable 'a' to 'mathmlMactionNode'
// - Resolved require(655628) to 'mathml-maction-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 784593
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
  exports.SVGmaction = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMactionMixin = require("common-maction-mixin") /*id: 861629*/;
  var commonMactionMixin_1 = require("common-maction-mixin") /*id: 861629*/;
  var mathmlMactionNode = require("mathml-maction-node") /*id: 655628*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      var Q = this.selected;
      var r = Q.getOuterBBox();
      var T = r.h;
      var n = r.d;
      var o = r.w;
      this.adaptor.append(this.element, this.svg("rect", {
        width: this.fixed(o),
        height: this.fixed(T + n),
        y: this.fixed(-n),
        fill: "none",
        "pointer-events": "all"
      }));
      Q.toSVG(e);
      var i = Q.getOuterBBox();
      if (Q.element) {
        Q.place(i.L * i.rscale, 0);
      }
      this.action(this, this.data);
    };
    e.prototype.setEventHandler = function (t, e) {
      this.element.addEventListener(t, e);
    };
    e.kind = mathmlMactionNode.MmlMaction.prototype.kind;
    e.styles = {
      "[jax=\"SVG\"] mjx-tool": {
        display: "inline-block",
        position: "relative",
        width: 0,
        height: 0
      },
      "[jax=\"SVG\"] mjx-tool > mjx-tip": {
        position: "absolute",
        top: 0,
        left: 0
      },
      "mjx-tool > mjx-tip": {
        display: "inline-block",
        padding: ".2em",
        border: "1px solid #888",
        "font-size": "70%",
        "background-color": "#F8F8F8",
        color: "black",
        "box-shadow": "2px 2px 5px #AAAAAA"
      },
      "g[data-mml-node=\"maction\"][data-toggle]": {
        cursor: "pointer"
      },
      "mjx-status": {
        display: "block",
        position: "fixed",
        left: "1em",
        bottom: "1em",
        "min-width": "25%",
        padding: ".2em .4em",
        border: "1px solid #888",
        "font-size": "90%",
        "background-color": "#F8F8F8",
        color: "black"
      }
    };
    e.actions = new Map([["toggle", [function (t, e) {
      t.adaptor.setAttribute(t.element, "data-toggle", t.node.attributes.get("selection"));
      var Q = t.factory.jax.math;
      var r = t.factory.jax.document;
      var T = t.node;
      t.setEventHandler("click", function (t) {
        if (!Q.end.node) {
          Q.start.node = Q.end.node = Q.typesetRoot;
          Q.start.n = Q.end.n = 0;
        }
        T.nextToggleSelection();
        Q.rerender(r);
        t.stopPropagation();
      });
    }, {}]], ["tooltip", [function (t, e) {
      var Q = t.childNodes[1];
      if (Q) {
        var r = t.firstChild();
        if (Q.node.isKind("mtext")) {
          var T = Q.node.getText();
          t.adaptor.insert(t.svg("title", {}, [t.text(T)]), r);
        } else {
          var n = t.adaptor;
          var o = t.jax.container;
          var i = t.node.factory.create("math", {}, [t.childNodes[1].node]);
          var a = t.html("mjx-tool", {}, [t.html("mjx-tip")]);
          var u = n.append(r, t.svg("foreignObject", {
            style: {
              display: "none"
            }
          }, [a]));
          t.jax.processMath(i, n.firstChild(a));
          t.childNodes[1].node.parent = t.node;
          t.setEventHandler("mouseover", function (Q) {
            e.stopTimers(t, e);
            e.hoverTimer.set(t, setTimeout(function () {
              n.setStyle(a, "left", "0");
              n.setStyle(a, "top", "0");
              n.append(o, a);
              var e = n.nodeBBox(a);
              var Q = n.nodeBBox(t.element);
              var r = (Q.right - e.left) / t.metrics.em + t.dx;
              var T = (Q.bottom - e.bottom) / t.metrics.em + t.dy;
              n.setStyle(a, "left", t.px(r));
              n.setStyle(a, "top", t.px(T));
            }, e.postDelay));
            Q.stopPropagation();
          });
          t.setEventHandler("mouseout", function (Q) {
            e.stopTimers(t, e);
            var r = setTimeout(function () {
              return n.append(u, a);
            }, e.clearDelay);
            e.clearTimer.set(t, r);
            Q.stopPropagation();
          });
        }
      }
    }, commonMactionMixin_1.TooltipData]], ["statusline", [function (t, e) {
      var Q = t.childNodes[1];
      if (Q && Q.node.isKind("mtext")) {
        var r = t.adaptor;
        var T = Q.node.getText();
        r.setAttribute(t.element, "data-statusline", T);
        t.setEventHandler("mouseover", function (Q) {
          if (e.status === null) {
            var n = r.body(r.document);
            e.status = r.append(n, t.html("mjx-status", {}, [t.text(T)]));
          }
          Q.stopPropagation();
        });
        t.setEventHandler("mouseout", function (t) {
          if (e.status) {
            r.remove(e.status);
            e.status = null;
          }
          t.stopPropagation();
        });
      }
    }, {
      status: null
    }]]]);
    return e;
  }(commonMactionMixin.CommonMactionMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmaction = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}