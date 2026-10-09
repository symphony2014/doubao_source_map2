// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'domClassLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 418505
         */
module.exports = function (module, exports, require) {
  function o(e, n) {
    if (e.classList) {
      return e.classList.contains(n);
    } else {
      return !!e.getAttribute && (e.getAttribute("class") || "").split(" ").some(e => e === n);
    }
  }
  let i = {
    parents: function (e, n) {
      while (e) {
        if (o(e, n)) {
          return true;
        }
        e = e.parentNode;
      }
      return false;
    },
    hasClass: o,
    getScrollBarWidth: require("memoize-function") /*id: 565197*/.memoize(() => {
      let e = document.createElement("p");
      e.style.width = "100%";
      e.style.height = "200px";
      let n = document.createElement("div");
      n.style.position = "absolute";
      n.style.top = "0px";
      n.style.left = "0px";
      n.style.visibility = "hidden";
      n.style.width = "200px";
      n.style.height = "150px";
      n.style.overflow = "hidden";
      n.appendChild(e);
      document.body.appendChild(n);
      let r = e.offsetWidth;
      n.style.overflow = "scroll";
      let o = e.offsetWidth;
      if (r === o) {
        o = n.clientWidth;
      }
      document.body.removeChild(n);
      return r - o;
    }),
    getOffsetTop: function (e, n) {
      if (!e) {
        return null;
      }
      let r = e;
      let o = 0;
      while (r !== n && r !== null) {
        var i;
        o += r.offsetTop;
        let e = r.offsetParent || ((i = r) && i.classList.contains("ace-line-collapsed") ? i.parentNode : null);
        if (!(e instanceof HTMLElement)) {
          return null;
        }
        r = e;
      }
      return o;
    },
    queryParents: function (e, n) {
      while (e) {
        if (o(e, n)) {
          return e;
        }
        e = e.parentNode;
      }
      return null;
    }
  };
  require.d(exports, {
    domClassLayout: function () {
      return i;
    }
  });
}