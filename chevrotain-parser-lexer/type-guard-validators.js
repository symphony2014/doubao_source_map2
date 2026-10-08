// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$v' to 'TypeRegistry'
// - Renamed export 'SI' to 'isNodeInfo'
// - Renamed export 'U8' to 'isFullText'
// - Renamed export 'Yk' to 'isRefText'
// - Renamed export 'al' to 'hasContent'
// - Renamed export 'dm' to 'isTokenType'
// - Renamed export 'et' to 'isRefMessage'
// - Renamed export 'xA' to 'isTypeObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 69877
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return typeof e == "object" && e !== null && typeof e.$type == "string";
  }
  function i(e) {
    return typeof e == "object" && e !== null && typeof e.$refText == "string";
  }
  function a(e) {
    return typeof e == "object" && e !== null && typeof e.name == "string" && typeof e.type == "string" && typeof e.path == "string";
  }
  function s(e) {
    return typeof e == "object" && e !== null && n(e.container) && i(e.reference) && typeof e.message == "string";
  }
  class o {
    constructor() {
      this.subtypes = {};
      this.allSubtypes = {};
    }
    isInstance(e, t) {
      return n(e) && this.isSubtype(e.$type, t);
    }
    isSubtype(e, t) {
      if (e === t) {
        return true;
      }
      let r = this.subtypes[e];
      r ||= this.subtypes[e] = {};
      let n = r[t];
      if (n !== undefined) {
        return n;
      }
      {
        let n = this.computeIsSubtype(e, t);
        r[t] = n;
        return n;
      }
    }
    getAllSubTypes(e) {
      let t = this.allSubtypes[e];
      if (t) {
        return t;
      }
      {
        let t = this.getAllTypes();
        let r = [];
        for (let n of t) {
          if (this.isSubtype(n, e)) {
            r.push(n);
          }
        }
        this.allSubtypes[e] = r;
        return r;
      }
    }
  }
  function l(e) {
    return typeof e == "object" && e !== null && Array.isArray(e.content);
  }
  function u(e) {
    return typeof e == "object" && e !== null && typeof e.tokenType == "object";
  }
  function c(e) {
    return l(e) && typeof e.fullText == "string";
  }
  require.d(exports, {
    TypeRegistry: function () {
      return o;
    },
    isNodeInfo: function () {
      return a;
    },
    isFullText: function () {
      return c;
    },
    isRefText: function () {
      return i;
    },
    hasContent: function () {
      return l;
    },
    isTokenType: function () {
      return u;
    },
    isRefMessage: function () {
      return s;
    },
    isTypeObject: function () {
      return n;
    }
  });
}