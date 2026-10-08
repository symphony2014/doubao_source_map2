// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatBlockManagerAndToolDataCache'
// - Resolved require(247150) to 'chat-block-manager-and-tool-data-cache'
// - Renamed variable 'r' to 'mergeSuperTaskToolBlockSymbol'
// - Resolved require(111365) to 'merge-super-task-tool-block-symbol'
// - Updated imported property 'O' to 'mergeSuperTaskBlock' (module 111365)
// - Updated imported property 'ul' to 'toolDataCacheManager' (module 247150)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 773326
         */
module.exports = function (module, exports, require) {
  var chatBlockManagerAndToolDataCache = require("chat-block-manager-and-tool-data-cache") /*id: 247150*/;
  var mergeSuperTaskToolBlockSymbol = require("merge-super-task-tool-block-symbol") /*id: 111365*/;
  function a(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class o {
    constructor() {
      a(this, "pluginIdentifier", mergeSuperTaskToolBlockSymbol.mergeSuperTaskBlock);
      a(this, "mergeContentBlock", (e, t) => {
        if (t == null || !t.is_delta) {
          return {
            ...t
          };
        }
        {
          var a;
          let o = {
            ...e,
            ...t,
            content_obj: {
              ...(e == null ? undefined : e.content_obj),
              ...(t == null ? undefined : t.content_obj)
            }
          };
          let l = o.id;
          let s = t.content_obj?.stream;
          if (s) {
            let t = (((a = e.content_obj) === null || a === undefined ? undefined : a.stream?.data) || "") + s.data;
            o.content_obj.stream = {
              type: s.type,
              data: t,
              lang: s.lang
            };
          }
          let c = chatBlockManagerAndToolDataCache.toolDataCacheManager.get(l, o.content_obj);
          if (o.content_obj.name) {
            c.toolData.name = o.content_obj.name;
          }
          c.toolData.stream = o.content_obj.stream;
          chatBlockManagerAndToolDataCache.toolDataCacheManager.emitBlockUpdate(l);
          return o;
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    MergePlugin: function () {
      return o;
    }
  });
}