// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'asyncSkillManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55681.af5b0033.js
         * chunkId: 55681
         * moduleId: 222126
         */
module.exports = function (module, exports, require) {
  let r = (e, t, n) => new Promise((r, i) => {
    let a = setTimeout(() => {
      i(n());
    }, t);
    e.then(e => {
      clearTimeout(a);
      r(e);
    }, e => {
      clearTimeout(a);
      i(e);
    });
  });
  let i = new class {
    setPresetNodes(e) {
      this.presetNodes = e;
    }
    async run(e, t) {
      let n = t;
      for (let t of [...this.presetNodes.preSubmitNodes, ...(e.preSubmitNodes || [])]) {
        t.execute(n);
      }
      for (let t of [...this.presetNodes.prependSubmitNodes, ...(e.submitNodes || []), ...this.presetNodes.appendSubmitNodes]) {
        n = await r(t.execute(n), 1000, () => {
          let e = Error(`submitNode timeout: ${t.id}`);
          Object.assign(e, {
            nodeId: t.id,
            type: "timeout"
          });
          return e;
        });
      }
      for (let t of [...this.presetNodes.afterSubmitNodes, ...(e.afterSubmitNodes || [])]) {
        t.execute(n);
      }
      return n;
    }
    constructor() {
      var e;
      var t;
      var n;
      t = undefined;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "presetNodes", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
      this.presetNodes = {
        preSubmitNodes: [],
        prependSubmitNodes: [],
        appendSubmitNodes: [],
        afterSubmitNodes: []
      };
    }
  }();
  require.d(exports, {
    asyncSkillManager: function () {
      return i;
    }
  });
}