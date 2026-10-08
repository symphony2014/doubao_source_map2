// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GR' to 'sleep'
// - Renamed export 'OK' to 'splitKeepMatches'
// - Renamed export 'Qb' to 'invoke'
// - Renamed export 'TI' to 'getProperty'
// - Renamed export 'kE' to 'isValidNumber'
// - Renamed export 'z5' to 'findTruthy'
// - Renamed export 'zG' to 'createPipe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 266643
         */
module.exports = function (module, exports, require) {
  let i = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return e => t.reduce((e, t) => t(e), e);
  };
  let r = e => {
    let t = e.replace(/,/g, "");
    return !isNaN(t) && !isNaN(parseFloat(t));
  };
  let o = (e, t) => {
    for (let n of e) {
      let e = t(n);
      if (e) {
        return e;
      }
    }
  };
  let l = e => new Promise(t => setTimeout(t, e));
  let a = (e, t) => e[t];
  let s = (e, t) => {
    let n;
    let i = [];
    let {
      flags: r
    } = t;
    let o = new RegExp(t.source, r.includes("g") ? r : `${r}g`);
    let l = 0;
    while (n = o.exec(e)) {
      let t = n[0];
      if (n.index > l) {
        i.push(e.slice(l, n.index));
      }
      i.push(t);
      l = n.index + t.length;
    }
    if (e.length > l) {
      i.push(e.slice(l, e.length));
    }
    return i;
  };
  let c = e => e();
  require.d(exports, {
    sleep: function () {
      return l;
    },
    splitKeepMatches: function () {
      return s;
    },
    invoke: function () {
      return c;
    },
    getProperty: function () {
      return a;
    },
    isValidNumber: function () {
      return r;
    },
    findTruthy: function () {
      return o;
    },
    createPipe: function () {
      return i;
    }
  });
}