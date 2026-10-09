// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'immerCoreImplementation'
// - Resolved require(828474) to 'immer-core-implementation'
// - Renamed variable 'r' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'Uy' to 'produce' (module 828474)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 296763
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = (e, t) => {
    let {
      refContents: n,
      channel: o,
      source: s,
      scene: l,
      inputSkill: a,
      reportParams: u
    } = e;
    if (n.length === 0) {
      c(t);
      return;
    }
    if (!n.some(e => e.type === "attachment" && !e.fileKey)) {
      chatStoreManager.getStore("refContentStore").setState(immerCoreImplementation.produce(e => {
        e.refContentMap[t] = {
          refContents: n,
          channel: o,
          source: s,
          ...(l ? {
            scene: l
          } : {}),
          ...(a ? {
            inputSkill: a
          } : {}),
          ...(u ? {
            reportParams: u
          } : {})
        };
      }));
    }
  };
  let s = (e, t) => {
    chatStoreManager.getStore("refContentStore").setState(immerCoreImplementation.produce(n => {
      let r = n.refContentMap[e].refContents?.[t];
      if (r) {
        r.disableRef = false;
      }
    }));
  };
  let l = (e, t) => {
    chatStoreManager.getStore("refContentStore").setState(immerCoreImplementation.produce(n => {
      let r = n.refContentMap[e].refContents?.[t];
      if (r) {
        r.disableRef = true;
      }
    }));
  };
  let a = (e, t) => {
    chatStoreManager.getStore("refContentStore").setState(immerCoreImplementation.produce(n => {
      var r;
      let o = n.refContentMap[e].refContents?.[t];
      if (o) {
        let e = (r = o.disableRef) !== null && r !== undefined && r;
        o.disableRef = !e;
      }
    }));
  };
  let c = function (e, {
    retainDisableRef: t = false
  } = {}) {
    chatStoreManager.getStore("refContentStore").setState(immerCoreImplementation.produce(n => {
      let o = (n.refContentMap[e] ?? {}).refContents ?? [];
      if ((o = t ? o.filter(e => !!e.disableRef) : []).length === 0) {
        delete n.refContentMap[e];
      } else {
        n.refContentMap[e].refContents = o;
      }
    }));
  };
  let u = (e, t) => {
    chatStoreManager.getStore("refContentStore").setState(immerCoreImplementation.produce(n => {
      let o = n.refContentMap[e];
      if (o) {
        n.refContentMap[t] = o;
        setTimeout(() => {
          chatStoreManager.getStore("refContentStore").setState(immerCoreImplementation.produce(t => {
            delete t.refContentMap[e];
          }));
        }, 30000);
      }
    }));
  };
  let d = (e, t) => {
    chatStoreManager.getStore("refContentStore").setState(immerCoreImplementation.produce(n => {
      n.refContentMap[e].refContents.splice(t, 1);
    }));
  };
  function p(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class _ {
    constructor() {
      p(this, "clearRefContents", c);
      p(this, "setRefContents", o);
      p(this, "moveRefContents", u);
      p(this, "deleteRefContent", d);
      p(this, "enableRefContentQuote", s);
      p(this, "disableRefContentQuote", l);
      p(this, "toggleRefContentDisableQuote", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    RefContentStoreService: function () {
      return _;
    }
  });
}