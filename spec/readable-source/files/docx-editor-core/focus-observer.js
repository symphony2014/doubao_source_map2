// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FocusObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 937828
         */
module.exports = function (module, exports, require) {
  var throttledArrayIntersection = require("throttled-array-intersection") /*id: 832949*/;
  var throttledArrayDiffUtil = require("throttled-array-diff-util") /*id: 222302*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  function c(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  class u extends editorContextFacade.EditorContextFacade {
    static register(e, n) {
      let i = u.observers.get(e);
      if (i) {
        i.add(n);
      } else {
        u.observers.set(e, new Set([n]));
      }
    }
    static unregister(e, n) {
      let i = u.observers.get(e);
      if (i) {
        i.delete(n);
      }
    }
    focus(e) {
      e.forEach(e => {
        this.blockManager.getBlockPath(e).forEach(e => {
          let n = u.observers.get(e);
          if (n != null) {
            n.forEach(e => e(true));
          }
        });
      });
    }
    blur(e) {
      e.forEach(e => {
        this.blockManager.getBlockPath(e).forEach(e => {
          let n = u.observers.get(e);
          if (n != null) {
            n.forEach(e => e(false));
          }
        });
      });
    }
    getEffect() {
      return e => {
        let {
          editPermission: n
        } = e.recursionProps;
        let i = reactCoreLibraryReexport.useCallback((e, n) => {
          let i = e.map(e => {
            let {
              id: n
            } = e;
            return n;
          }).filter(e => this.heldBlockId !== e);
          let l = n.map(e => {
            let {
              id: n
            } = e;
            return n;
          }).filter(e => this.heldBlockId !== e);
          let a = throttledArrayIntersection.throttledIntersect(i, l);
          let s = throttledArrayDiffUtil.throttledArrayDiff(i, a);
          let c = throttledArrayDiffUtil.throttledArrayDiff(l, a);
          this.blur(s);
          this.focus(c);
        }, []);
        let a = reactCoreLibraryReexport.useCallback(e => {
          let n = (e == null ? undefined : e.targetId) || null;
          this.hold(n);
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          if (n) {
            this.selectionAPI.onSelectionChange(i);
          }
          return () => {
            if (n) {
              this.selectionAPI.offSelectionChange(i);
            }
          };
        }, [n, i]);
        reactCoreLibraryReexport.useEffect(() => {
          this.blockManager.addListener(u.HOLD_EVENT, this.hold);
          return () => {
            this.blockManager.removeListener(u.HOLD_EVENT, this.hold);
          };
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          this.blockManager.addListener(docxDragDropConstants.dropChangeEvent, a);
          return () => {
            this.blockManager.removeListener(docxDragDropConstants.dropChangeEvent, a);
          };
        }, [a]);
        return null;
      };
    }
    constructor(...e) {
      super(...e);
      c(this, "heldBlockId", null);
      c(this, "hold", e => {
        if (this.heldBlockId) {
          this.blur([this.heldBlockId]);
        }
        if (e) {
          this.focus([e]);
        }
        this.heldBlockId = e;
      });
    }
  }
  c(u, "observers", new Map());
  c(u, "HOLD_EVENT", "FocusObserver:Hold");
  require.d(exports, {
    FocusObserver: function () {
      return u;
    }
  });
}