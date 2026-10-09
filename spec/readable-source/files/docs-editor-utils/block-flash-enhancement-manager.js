// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$b' to 'getBlockWrapper'
// - Renamed export 'fS' to 'getFlashBlockStyle'
// - Renamed export 'Ke' to 'flashBlocks'
// - Renamed export 'i$' to 'flashBlockClassName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 710621
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var viewBlockSnapshotResolver = require("view-block-snapshot-resolver") /*id: 895892*/;
  var c = class {
    addBlockEnhanceHandler(e) {
      this.configs.push(e);
    }
    removeBlockEnhanceHandler(e) {
      this.configs = this.configs.filter(n => n !== e);
    }
    onMount(e) {
      this.configs.filter(n => n.blockType === e.type).forEach(n => {
        n.onMountCallback(e, n.state);
      });
    }
    onUnmount(e) {
      this.configs.filter(n => n.blockType === e.type).forEach(n => {
        n.onUnmountCallback(e, n.state);
      });
    }
    constructor(e = []) {
      var n;
      var r;
      var o;
      r = undefined;
      if ((n = typeof (o = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var o = r.call(e, n || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(n = "configs", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
      this.configs = e;
    }
  };
  function u(e) {
    let n = _(e);
    if (n && n.querySelector(".kanbanView")) {
      return n.querySelector(".bitable-toolbar-faster2");
    } else {
      return null;
    }
  }
  let a = {
    blockType: docBlockTypeConstants.blockTypeConstants.BITABLE,
    state: [],
    onMountCallback: function (e, n) {
      let r = u(e);
      if (r && r instanceof HTMLElement) {
        n.push(r.style.backgroundColor);
        r.style.backgroundColor = "transparent";
      }
    },
    onUnmountCallback: function (e, n) {
      let r = u(e);
      if (r && r instanceof HTMLElement) {
        r.style.backgroundColor = n.shift() || "";
      }
    }
  };
  let s = new c();
  s.addBlockEnhanceHandler(a);
  let d = "flash-block-content";
  let f = (e, n) => {
    if (!n) {
      return {};
    }
    let r = {};
    switch (e) {
      case docBlockTypeConstants.blockTypeConstants.TABLE:
        {
          r.borderRadius = "0";
          let e = parseInt(window.getComputedStyle(n).paddingRight);
          if (e > 0) {
            r.right = `${e}px`;
          }
          break;
        }
      case docBlockTypeConstants.blockTypeConstants.VIEW:
        r.borderRadius = "2px";
    }
    return r;
  };
  let h = e => {
    if (!e.querySelector(`.${d}:not(.block)`)) {
      return e;
    }
    let n = [];
    let r = e;
    while (r) {
      if (r.classList.contains(d)) {
        return r;
      }
      r = (n = n.concat(Array.prototype.slice.call(r.children).filter(e => !e.classList.contains("block")))).shift();
    }
    return e;
  };
  function _(e) {
    let n;
    return (e.getBlockWrapper && e.getBlockWrapper() ? e.getBlockWrapper() : e.type === docBlockTypeConstants.blockTypeConstants.VIEW ? viewBlockSnapshotResolver.viewBlockGetViewSnapshot({
      blockView: e
    }) : h(e.hostElement)) || e.hostElement;
  }
  async function p(e, n) {
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let l = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    return new Promise(c => {
      e.forEach(e => {
        let r = e.record.id;
        let c = e.type;
        let u = n == null ? undefined : n.get(r);
        let a = _(e);
        s.onMount(e);
        let d = f(c, a);
        let {
          blockMaskManager: h
        } = e;
        if (e.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE && syncedBlockFeatureFlags.isSyncedBlockScrollable()) {
          let n = e.getInnerPageBlock()?.blockMaskManager;
          if (n) {
            h = n;
          }
        }
        h.toggleMask("block-flash", true, d, a, c, u, l);
      });
      if (r) {
        setTimeout(() => {
          (function (e) {
            e.forEach(e => {
              let {
                blockMaskManager: n
              } = e;
              if (e.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE && syncedBlockFeatureFlags.isSyncedBlockScrollable()) {
                let o = e.getInnerPageBlock()?.blockMaskManager;
                if (o) {
                  n = o;
                }
              }
              let l = _(e);
              n.toggleMask("block-flash", false, undefined, l);
              s.onUnmount(e);
            });
          })(e);
          c();
        }, 2000);
      } else {
        c();
      }
    });
  }
  require.d(exports, {
    getBlockWrapper: function () {
      return _;
    },
    getFlashBlockStyle: function () {
      return f;
    },
    flashBlocks: function () {
      return p;
    },
    flashBlockClassName: function () {
      return d;
    }
  });
}