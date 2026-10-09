// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SE' to 'getCommonParent'
// - Renamed export 'iT' to 'getCommonParents'
// - Renamed export 'vp' to 'validateBlockMove'
// - Renamed export 'wB' to 'getSortedIndices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 797827
         */
module.exports = function (module, exports, require) {
  var domRectBboxHelpers = require("dom-rect-bbox-helpers") /*id: 412452*/;
  var rectIntersectionUtils = require("rect-intersection-utils") /*id: 8673*/;
  function l(e, n) {
    if (e.id === n.id) {
      return e.id;
    }
    let r = e.path.slice(0);
    let o = n.path.slice(0);
    r.push(e.id);
    o.push(n.id);
    let i = 0;
    while (r.length && o.length && r[i] === o[i]) {
      i++;
    }
    return r[i - 1];
  }
  function c(e) {
    let n = e => e.every(n => n.id === e[0].id);
    if (n(e)) {
      return e[0].path.slice(-1)[0];
    }
    let r = e.map(e => ({
      id: e.id,
      path: [...e.path, e.id]
    }));
    let o = 0;
    while (n(r)) {
      o++;
    }
    return r[0].path[o - 1];
  }
  function u(e) {
    let {
      ancestorId: n,
      blockManager: r,
      y: l,
      rect: c
    } = e;
    let u = r.getBlockModelByBlockId(n).children.filter(e => !!e);
    if (u.length < 2) {
      return false;
    }
    let a = domRectBboxHelpers.toDOMRect(c.getOriginBlockRect(u.shift().id));
    let s = (a.x + a.width) / 2;
    let d = l + 0.1;
    return d > a.y + a.height && d < domRectBboxHelpers.toDOMRect(c.getOriginBlockRect(u.pop().id)).y && function (e, n, r) {
      let l = 0;
      let c = n.length - 1;
      while (l <= c) {
        let u = Math.floor(l + (c - l) / 2);
        let a = domRectBboxHelpers.toDOMRect(r(n[u].id));
        if (a.top > e.bottom) {
          c = u - 1;
        } else {
          if (!(a.bottom < e.top)) {
            return !rectIntersectionUtils.checkIntersection(a, e, rectIntersectionUtils.IntersectionMode.TOUCH);
          }
          l = u + 1;
        }
      }
      return true;
    }(new DOMRect(s, d, 0.1, 0.1), u, c.getOriginBlockRect.bind(c));
  }
  function a(e, n, r) {
    let [o, i] = function (e, n) {
      if (e.id === n.id) {
        return [e.id, n.id];
      }
      let r = e.path.slice(0);
      let o = n.path.slice(0);
      r.push(e.id);
      o.push(n.id);
      let i = 0;
      while (r.length && o.length && r[i] === o[i]) {
        i++;
      }
      return [r[i], o[i]];
    }(n, r);
    let l = e.findIndex(e => e && e.id === o);
    let c = e.findIndex(e => e && e.id === i);
    if (l <= c) {
      return [l, c];
    } else {
      return [c, l];
    }
  }
  require.d(exports, {
    getCommonParent: function () {
      return l;
    },
    getCommonParents: function () {
      return c;
    },
    validateBlockMove: function () {
      return u;
    },
    getSortedIndices: function () {
      return a;
    }
  });
}