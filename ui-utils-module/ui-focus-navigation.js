// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Br' to 'focusFirst'
// - Renamed export 'Ir' to 'findNextCharIndex'
// - Renamed export 'Jt' to 'suppressEvent'
// - Renamed export 'OA' to 'manageListFocus'
// - Renamed export 'XS' to 'focusNext'
// - Renamed export 'Yt' to 'getParentByRole'
// - Renamed export 'kx' to 'focusPrev'
// - Renamed export 'kz' to 'isSingleChar'
// - Renamed export 'pG' to 'focusLast'
// - Renamed export 'zT' to 'findPopupById'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 152428
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  function r(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  function o(e) {
    return e.length === 1 && e.match(/\S/);
  }
  function s(e, t) {
    for (let n = 0; n < e.length; n++) {
      if (e[n] === t) {
        e[n].tabIndex = 0;
        e[n].focus();
      } else {
        e[n].tabIndex = -1;
      }
    }
  }
  function l(e) {
    if (e.length > 0) {
      s(e, e[0]);
    }
  }
  function a(e) {
    if (e.length > 0) {
      s(e, e[e.length - 1]);
    }
  }
  function c(e, t) {
    let n;
    let i;
    if (e.length > 0) {
      if (t === e[0]) {
        n = e[e.length - 1];
      } else {
        i = e.indexOf(t);
        n = e[i - 1];
      }
      s(e, n);
    }
  }
  function d(e, t) {
    let n;
    let i;
    if (e.length > 0) {
      if (t === e[e.length - 1]) {
        n = e[0];
      } else {
        i = e.indexOf(t);
        n = e[i + 1];
      }
      s(e, n);
    }
  }
  function u(e, t, n, i) {
    let r;
    let o;
    if (e && n && i && !(i.length > 1)) {
      i = i.toLowerCase();
      if ((r = e.indexOf(t) + 1) >= e.length) {
        r = 0;
      }
      if ((o = n.indexOf(i, r)) === -1) {
        o = n.indexOf(i, 0);
      }
      if (o >= 0) {
        return o;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }
  function h(e, t) {
    if (!e) {
      return null;
    }
    while (e.parentElement && objectPathGetDefault.getObjectPathDefault(e.parentElement, "attributes.role.value", "") !== t) {
      e = e.parentElement;
    }
    return e.parentElement;
  }
  function p(e, t) {
    for (let n = 0; n < e.length; n++) {
      let i = e[n].attributes["data-popupid"];
      if (i && i.value === t) {
        return e[n];
      }
    }
    return null;
  }
  require.d(exports, {
    focusFirst: function () {
      return l;
    },
    findNextCharIndex: function () {
      return u;
    },
    suppressEvent: function () {
      return r;
    },
    manageListFocus: function () {
      return s;
    },
    focusNext: function () {
      return d;
    },
    getParentByRole: function () {
      return h;
    },
    focusPrev: function () {
      return c;
    },
    isSingleChar: function () {
      return o;
    },
    focusLast: function () {
      return a;
    },
    findPopupById: function () {
      return p;
    }
  });
}