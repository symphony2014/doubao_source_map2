// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'renderCacheManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 318882
         */
module.exports = function (module, exports, require) {
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var limitedCacheManager = require("limited-cache-manager") /*id: 861263*/;
  function l(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  var s = new class {
    getOrCreateDOMCache(e) {
      let {
        renderDOMCacheStrategy: i
      } = this;
      let n = i.get(e);
      if (n) {
        return n;
      }
      let r = new limitedCacheManager.LimitedCache(this.capacity);
      i.set(e, r);
      return r;
    }
    clearCache() {
      for (let e of this.renderDOMCacheStrategy.values()) {
        e.clear();
      }
    }
    getCacheId() {
      return this.nextCacheId++;
    }
    deleteDOMCache(e) {
      this.clearCache();
      this.renderDOMCacheStrategy.delete(e);
    }
    bindEvent(e) {
      let {
        editorAPI: i
      } = e;
      let {
        structService: n
      } = i;
      let r = () => {
        let e = this.subs.get(i);
        if (e) {
          e.forEach(e => e.unsubscribe());
          this.subs.delete(i);
        }
      };
      r();
      let [o, l] = this.createMutationCallbacks(e);
      this.subs.set(i, [n.beforeMutation$.subscribe(o), n.mutation$.post$.subscribe(l), i.lifecycle.editorDidDestroy$.subscribe(r)]);
    }
    deleteCacheWithEffect(e) {
      for (let i of this.renderDOMCacheStrategy.values()) {
        i.deleteWithEffect(e);
      }
    }
    createMutationCallbacks(e) {
      let i = true;
      let n = false;
      let o = null;
      let l = () => {
        if (o) {
          o.unsubscribe();
          o = null;
        }
      };
      let s = e => {
        l();
        i = e.needRepaint;
      };
      return [() => {
        i = true;
        l();
        o = e.layoutManager.postDidChangeNodes$.subscribe(s);
      }, o => {
        l();
        if (!n) {
          if (!o.recordOps?.length || !i) {
            this.clearCache();
            return;
          }
          n = true;
          e.addListenerOnce(renderEventConstants.paint, () => {
            n = false;
            this.clearCache();
          });
        }
      }];
    }
    constructor() {
      l(this, "capacity", 1000);
      l(this, "renderDOMCacheStrategy", new Map());
      l(this, "nextCacheId", 0);
      l(this, "subs", new Map());
    }
  }();
  require.d(exports, {
    renderCacheManager: function () {
      return s;
    }
  });
}