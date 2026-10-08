// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'footnoteParser'
// - Renamed export 'n' to 'footnoteCompiler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 583857
         */
module.exports = function (module, exports, require) {
  var webpackEmptyModuleStub = require("webpack-empty-module-stub") /*id: 927617*/;
  var textNormalizeUpper = require("text-normalize-upper") /*id: 523800*/;
  function o() {
    this.buffer();
  }
  function u(e) {
    this.enter({
      type: "footnoteReference",
      identifier: "",
      label: ""
    }, e);
  }
  function a() {
    this.buffer();
  }
  function c(e) {
    this.enter({
      type: "footnoteDefinition",
      identifier: "",
      label: "",
      children: []
    }, e);
  }
  function l(e) {
    let t = this.resume();
    let r = this.stack[this.stack.length - 1];
    webpackEmptyModuleStub.okStub(r.type === "footnoteReference");
    r.identifier = textNormalizeUpper.normalizeTextUpper(this.sliceSerialize(e)).toLowerCase();
    r.label = t;
  }
  function s(e) {
    this.exit(e);
  }
  function f(e) {
    let t = this.resume();
    let r = this.stack[this.stack.length - 1];
    webpackEmptyModuleStub.okStub(r.type === "footnoteDefinition");
    r.identifier = textNormalizeUpper.normalizeTextUpper(this.sliceSerialize(e)).toLowerCase();
    r.label = t;
  }
  function p(e) {
    this.exit(e);
  }
  function h(e, t, r, n) {
    let i = r.createTracker(n);
    let o = i.move("[^");
    let u = r.enter("footnoteReference");
    let a = r.enter("reference");
    o += i.move(r.safe(r.associationId(e), {
      after: "]",
      before: o
    }));
    a();
    u();
    return o += i.move("]");
  }
  function d() {
    return {
      enter: {
        gfmFootnoteCallString: o,
        gfmFootnoteCall: u,
        gfmFootnoteDefinitionLabelString: a,
        gfmFootnoteDefinition: c
      },
      exit: {
        gfmFootnoteCallString: l,
        gfmFootnoteCall: s,
        gfmFootnoteDefinitionLabelString: f,
        gfmFootnoteDefinition: p
      }
    };
  }
  function g(e) {
    let t = false;
    if (e && e.firstLineBlank) {
      t = true;
    }
    return {
      handlers: {
        footnoteDefinition: function (e, r, n, i) {
          let o = n.createTracker(i);
          let u = o.move("[^");
          let a = n.enter("footnoteDefinition");
          let c = n.enter("label");
          u += o.move(n.safe(n.associationId(e), {
            before: u,
            after: "]"
          }));
          c();
          u += o.move("]:");
          if (e.children && e.children.length > 0) {
            o.shift(4);
            u += o.move((t ? "\n" : " ") + n.indentLines(n.containerFlow(e, o.current()), t ? b : m));
          }
          a();
          return u;
        },
        footnoteReference: h
      },
      unsafe: [{
        character: "[",
        inConstruct: ["label", "phrasing", "reference"]
      }]
    };
  }
  function m(e, t, r) {
    if (t === 0) {
      return e;
    } else {
      return b(e, t, r);
    }
  }
  function b(e, t, r) {
    return (r ? "" : "    ") + e;
  }
  h.peek = function () {
    return "[";
  };
  require.d(exports, {
    footnoteParser: function () {
      return d;
    },
    footnoteCompiler: function () {
      return g;
    }
  });
}