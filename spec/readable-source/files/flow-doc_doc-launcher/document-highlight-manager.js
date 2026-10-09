// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HQ' to 'getHighlightSets'
// - Renamed export 'gA' to 'updateBlockBackground'
// - Renamed export 'je' to 'getActiveHighlights'
// - Renamed export 'vb' to 'clearBlockBackground'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 363366
         */
module.exports = function (module, exports, require) {
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var textHighlightColors = require("text-highlight-colors") /*id: 514350*/;
  let l = e => {
    let i = new Set([]);
    e.forEach(e => {
      let {
        zoneState: n
      } = e.model;
      n.getEntities((e, n) => {
        if (e === textHighlightColors.textHighlight && n) {
          i.add(n);
        }
        return false;
      });
    });
    return i;
  };
  let a = e => {
    let i = null;
    for (let n of e) {
      let {
        zoneState: e
      } = n.model;
      let l = e.getZoneId();
      let a = e.getLine(e.length() - 1).length() - 1;
      let s = {
        line: 0,
        offset: 0,
        zoneId: l
      };
      let c = {
        line: e.length() - 1,
        offset: a,
        zoneId: l
      };
      let d = "";
      d = e.isEmpty() ? n.model.getInlineStyleOverride({
        zoneId: l,
        start: 0
      })[textHighlightColors.textHighlight] : contentDeltaUtilityFunctions.b(n.model.zoneState, {
        start: s,
        end: c
      })[textHighlightColors.textHighlight];
      if (i !== null && i !== d) {
        return "";
      }
      i = d;
    }
    return i || "";
  };
  let s = (e, i) => {
    let n = new Set([]);
    i.forEach(i => {
      if (e.hasBlockModelByBlockId(i.id)) {
        let {
          snapshot: r
        } = e.getBlockModelByBlockId(i.id).record;
        let o = r.background_color;
        if (o) {
          n.add(o);
        }
      }
    });
    return n;
  };
  let c = (e, i) => {
    let n = null;
    for (let r of i) {
      if (!e.hasBlockModelByBlockId(r.id)) {
        return "";
      }
      let {
        snapshot: i
      } = e.getBlockModelByBlockId(r.id).record;
      let o = i.background_color;
      if (n !== null && o !== n) {
        return "";
      }
      n = o;
    }
    return n || "";
  };
  let d = (e, i, n) => {
    let r = a(i);
    let l = c(e, n);
    return {
      [textHighlightColors.highlightColors.COLOR]: r,
      [textHighlightColors.highlightColors.BACKGROUND_COLOR]: l
    };
  };
  let u = (e, i, n) => {
    let r = l(i);
    let a = s(e, n);
    return {
      [textHighlightColors.highlightColors.COLOR]: r,
      [textHighlightColors.highlightColors.BACKGROUND_COLOR]: a
    };
  };
  let h = (e, i) => {
    e.applyTransaction("clear_block_background_color", e => {
      i.forEach(i => {
        if (i.record.snapshot.background_color) {
          e.remove(i.record.id, ["background_color"]);
        }
      });
    });
  };
  let g = (e, i, n) => {
    if (n) {
      e.applyTransaction("change_block_background_color", r => {
        if (c(e, i) === n) {
          i.forEach(e => {
            r.remove(e.record.id, ["background_color"]);
          });
        } else {
          i.forEach(e => {
            r.replace(e.record.id, ["background_color"], n);
          });
        }
      });
    } else {
      h(e, i);
    }
  };
  require.d(exports, {
    getHighlightSets: function () {
      return u;
    },
    updateBlockBackground: function () {
      return g;
    },
    getActiveHighlights: function () {
      return d;
    },
    clearBlockBackground: function () {
      return h;
    }
  });
}