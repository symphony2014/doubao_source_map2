// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'taskListExtension'
// - Renamed export 'Y' to 'taskListExits'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 112265
         */
module.exports = function (module, exports, require) {
  var webpackEmptyModuleStub = require("webpack-empty-module-stub") /*id: 927617*/;
  var markdownSerializerHandlers = require("markdown-serializer-handlers") /*id: 109669*/;
  function o() {
    return {
      exit: {
        taskListCheckValueChecked: a,
        taskListCheckValueUnchecked: a,
        paragraph: c
      }
    };
  }
  function u() {
    return {
      unsafe: [{
        atBreak: true,
        character: "-",
        after: "[:|-]"
      }],
      handlers: {
        listItem: l
      }
    };
  }
  function a(e) {
    let t = this.stack[this.stack.length - 2];
    webpackEmptyModuleStub.okStub(t.type === "listItem");
    t.checked = e.type === "taskListCheckValueChecked";
  }
  function c(e) {
    let t = this.stack[this.stack.length - 2];
    if (t && t.type === "listItem" && typeof t.checked == "boolean") {
      let e = this.stack[this.stack.length - 1];
      webpackEmptyModuleStub.okStub(e.type === "paragraph");
      let r = e.children[0];
      if (r && r.type === "text") {
        let n;
        let i = t.children;
        let o = -1;
        while (++o < i.length) {
          let e = i[o];
          if (e.type === "paragraph") {
            n = e;
            break;
          }
        }
        if (n === e) {
          r.value = r.value.slice(1);
          if (r.value.length === 0) {
            e.children.shift();
          } else if (e.position && r.position && typeof r.position.start.offset == "number") {
            r.position.start.column++;
            r.position.start.offset++;
            e.position.start = Object.assign({}, r.position.start);
          }
        }
      }
    }
    this.exit(e);
  }
  function l(e, t, r, n) {
    let o = e.children[0];
    let u = typeof e.checked == "boolean" && o && o.type === "paragraph";
    let a = "[" + (e.checked ? "x" : " ") + "] ";
    let c = r.createTracker(n);
    if (u) {
      c.move(a);
    }
    let l = markdownSerializerHandlers.markdownHandlers.listItem(e, t, r, {
      ...n,
      ...c.current()
    });
    if (u) {
      l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
        return e + a;
      });
    }
    return l;
  }
  require.d(exports, {
    taskListExtension: function () {
      return u;
    },
    taskListExits: function () {
      return o;
    }
  });
}