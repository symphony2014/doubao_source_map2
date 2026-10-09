// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'createMathParser'
// - Renamed export 'O' to 'createMathCompiler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 468286
         */
module.exports = function (module, exports, require) {
  var webpackEmptyModuleStub = require("webpack-empty-module-stub") /*id: 927617*/;
  var stringConsecutiveUtil = require("string-consecutive-util") /*id: 879547*/;
  function o() {
    return {
      enter: {
        mathFlow: function (e) {
          this.enter({
            type: "math",
            meta: null,
            value: "",
            data: {
              hName: "pre",
              hChildren: [{
                type: "element",
                tagName: "code",
                properties: {
                  className: ["language-math", "math-display"]
                },
                children: []
              }]
            }
          }, e);
        },
        mathFlowFenceMeta: function () {
          this.buffer();
        },
        mathText: function (e) {
          this.enter({
            type: "inlineMath",
            value: "",
            data: {
              hName: "code",
              hProperties: {
                className: ["language-math", "math-inline"]
              },
              hChildren: []
            }
          }, e);
          this.buffer();
        }
      },
      exit: {
        mathFlow: function (e) {
          let t = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
          let r = this.stack[this.stack.length - 1];
          webpackEmptyModuleStub.okStub(r.type === "math");
          this.exit(e);
          r.value = t;
          let i = r.data.hChildren[0];
          webpackEmptyModuleStub.okStub(i.type === "element");
          webpackEmptyModuleStub.okStub(i.tagName === "code");
          i.children.push({
            type: "text",
            value: t
          });
          this.data.mathFlowInside = undefined;
        },
        mathFlowFence: function () {
          if (!this.data.mathFlowInside) {
            this.buffer();
            this.data.mathFlowInside = true;
          }
        },
        mathFlowFenceMeta: function () {
          let e = this.resume();
          let t = this.stack[this.stack.length - 1];
          webpackEmptyModuleStub.okStub(t.type === "math");
          t.meta = e;
        },
        mathFlowValue: e,
        mathText: function (e) {
          let t = this.resume();
          let r = this.stack[this.stack.length - 1];
          webpackEmptyModuleStub.okStub(r.type === "inlineMath");
          this.exit(e);
          r.value = t;
          r.data.hChildren.push({
            type: "text",
            value: t
          });
        },
        mathTextData: e
      }
    };
    function e(e) {
      this.config.enter.data.call(this, e);
      this.config.exit.data.call(this, e);
    }
  }
  function u(e) {
    let t = (e || {}).singleDollarTextMath;
    if (t == null) {
      t = true;
    }
    r.peek = function () {
      return "$";
    };
    return {
      unsafe: [{
        character: "\r",
        inConstruct: "mathFlowMeta"
      }, {
        character: "\n",
        inConstruct: "mathFlowMeta"
      }, {
        character: "$",
        after: t ? undefined : "\\$",
        inConstruct: "phrasing"
      }, {
        character: "$",
        inConstruct: "mathFlowMeta"
      }, {
        atBreak: true,
        character: "$",
        after: "\\$"
      }],
      handlers: {
        math: function (e, t, r, n) {
          let o = e.value || "";
          let u = r.createTracker(n);
          let a = "$".repeat(Math.max(stringConsecutiveUtil.maxConsecutiveCount(o, "$") + 1, 2));
          let c = r.enter("mathFlow");
          let l = u.move(a);
          if (e.meta) {
            let t = r.enter("mathFlowMeta");
            l += u.move(r.safe(e.meta, {
              after: "\n",
              before: l,
              encode: ["$"],
              ...u.current()
            }));
            t();
          }
          l += u.move("\n");
          if (o) {
            l += u.move(o + "\n");
          }
          l += u.move(a);
          c();
          return l;
        },
        inlineMath: r
      }
    };
    function r(e, r, n) {
      let i = e.value || "";
      let o = 1;
      for (!t && o++; RegExp("(^|[^$])" + "\\$".repeat(o) + "([^$]|$)").test(i);) {
        o++;
      }
      let u = "$".repeat(o);
      if (/[^ \r\n]/.test(i) && (/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i) || /^\$|\$$/.test(i))) {
        i = " " + i + " ";
      }
      let a = -1;
      while (++a < n.unsafe.length) {
        let e;
        let t = n.unsafe[a];
        if (!t.atBreak) {
          continue;
        }
        let r = n.compilePattern(t);
        while (e = r.exec(i)) {
          let t = e.index;
          if (i.codePointAt(t) === 10 && i.codePointAt(t - 1) === 13) {
            t--;
          }
          i = i.slice(0, t) + " " + i.slice(e.index + 1);
        }
      }
      return u + i + u;
    }
  }
  require.d(exports, {
    createMathParser: function () {
      return o;
    },
    createMathCompiler: function () {
      return u;
    }
  });
}