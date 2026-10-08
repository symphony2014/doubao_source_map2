// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'StyleSheetManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 399882
         */
module.exports = function (module, exports, require) {
  var r = function () {
    function e(e) {
      var t = this;
      this._insertTag = function (e) {
        var n;
        n = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
        t.container.insertBefore(e, n);
        t.tags.push(e);
      };
      this.isSpeedy = e.speedy === undefined || e.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = e.nonce;
      this.key = e.key;
      this.container = e.container;
      this.prepend = e.prepend;
      this.insertionPoint = e.insertionPoint;
      this.before = null;
    }
    var t = e.prototype;
    t.hydrate = function (e) {
      e.forEach(this._insertTag);
    };
    t.insert = function (e) {
      if (this.ctr % (this.isSpeedy ? 65000 : 1) == 0) {
        var t;
        this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), this.nonce !== undefined && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t));
      }
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var r = function (e) {
          if (e.sheet) {
            return e.sheet;
          }
          for (var t = 0; t < document.styleSheets.length; t++) {
            if (document.styleSheets[t].ownerNode === e) {
              return document.styleSheets[t];
            }
          }
        }(n);
        try {
          r.insertRule(e, r.cssRules.length);
        } catch (e) {}
      } else {
        n.appendChild(document.createTextNode(e));
      }
      this.ctr++;
    };
    t.flush = function () {
      this.tags.forEach(function (e) {
        var t;
        if ((t = e.parentNode) == null) {
          return undefined;
        } else {
          return t.removeChild(e);
        }
      });
      this.tags = [];
      this.ctr = 0;
    };
    return e;
  }();
  require.d(exports, {
    StyleSheetManager: function () {
      return r;
    }
  });
}