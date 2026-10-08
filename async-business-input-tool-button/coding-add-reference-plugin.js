// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'codeReferenceImageUpload'
// - Resolved require(532322) to 'code-reference-image-upload'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'r' to 'CodeRefImageUpload' (module 532322)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 718170
         */
module.exports = function (module, exports, require) {
  var codeReferenceImageUpload = require("code-reference-image-upload") /*id: 532322*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      isToolButtonSmall: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(codeReferenceImageUpload.CodeRefImageUpload, {
      isNarrow: t,
      ...n
    });
  };
  class o {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = a;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AddReferenceTool: function () {
      return a;
    },
    CodingAddReferencePlugin: function () {
      return o;
    }
  });
}