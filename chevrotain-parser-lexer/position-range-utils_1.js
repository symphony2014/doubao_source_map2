// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LK' to 'findPreviousToken'
// - Renamed export 'OB' to 'isContainerOf'
// - Renamed export 'Z2' to 'comparePositions'
// - Renamed export '_t' to 'createRecursiveSequence'
// - Renamed export 'sp' to 'convertPosition'
// - Renamed export 'uz' to 'wordCharRegex'
// - Renamed export 'yn' to 'extractPositionInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 465350
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var typeGuardValidators = require("type-guard-validators") /*id: 69877*/;
  var lazyCollectionIterator = require("lazy-collection-iterator") /*id: 734269*/;
  function o(e) {
    return new lazyCollectionIterator.RecursiveSequence(e, e => typeGuardValidators.hasContent(e) ? e.content : [], {
      includeRoot: true
    });
  }
  function l(e, t) {
    while (e.container) {
      if ((e = e.container) === t) {
        return true;
      }
    }
    return false;
  }
  function u(e) {
    return {
      start: {
        character: e.startColumn - 1,
        line: e.startLine - 1
      },
      end: {
        character: e.endColumn,
        line: e.endLine - 1
      }
    };
  }
  function c(e) {
    if (!e) {
      return;
    }
    let {
      offset: t,
      end: r,
      range: n
    } = e;
    return {
      range: n,
      offset: t,
      end: r,
      length: r - t
    };
  }
  function d(e, t) {
    return function (e, t) {
      if (e.end.line < t.start.line || e.end.line === t.start.line && e.end.character <= t.start.character) {
        return i.Before;
      }
      if (e.start.line > t.end.line || e.start.line === t.end.line && e.start.character >= t.end.character) {
        return i.After;
      }
      let r = e.start.line > t.start.line || e.start.line === t.start.line && e.start.character >= t.start.character;
      let n = e.end.line < t.end.line || e.end.line === t.end.line && e.end.character <= t.end.character;
      if (r && n) {
        return i.Inside;
      } else if (r) {
        return i.OverlapBack;
      } else if (n) {
        return i.OverlapFront;
      } else {
        return i.Outside;
      }
    }(e, t) > i.After;
  }
  (n = i ||= {})[n.Before = 0] = "Before";
  n[n.After = 1] = "After";
  n[n.OverlapFront = 2] = "OverlapFront";
  n[n.OverlapBack = 3] = "OverlapBack";
  n[n.Inside = 4] = "Inside";
  n[n.Outside = 5] = "Outside";
  let h = /^[\w\p{L}]$/u;
  function f(e, t) {
    if (e) {
      let r = function (e, t = true) {
        while (e.container) {
          let r = e.container;
          let n = r.content.indexOf(e);
          while (n > 0) {
            n--;
            let e = r.content[n];
            if (t || !e.hidden) {
              return e;
            }
          }
          e = r;
        }
      }(e, true);
      if (r && p(r, t)) {
        return r;
      }
      if (typeGuardValidators.isFullText(e)) {
        let r = e.content.findIndex(e => !e.hidden);
        for (let n = r - 1; n >= 0; n--) {
          let r = e.content[n];
          if (p(r, t)) {
            return r;
          }
        }
      }
    }
  }
  function p(e, t) {
    return typeGuardValidators.isTokenType(e) && t.includes(e.tokenType.name);
  }
  require.d(exports, {
    findPreviousToken: function () {
      return f;
    },
    isContainerOf: function () {
      return l;
    },
    comparePositions: function () {
      return d;
    },
    createRecursiveSequence: function () {
      return o;
    },
    convertPosition: function () {
      return u;
    },
    wordCharRegex: function () {
      return h;
    },
    extractPositionInfo: function () {
      return c;
    }
  });
}