// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75752.dd8b8ac3.js
         * chunkId: 75752
         * moduleId: 828123
         */
module.exports = function (module, exports, require) {
  var t;
  var r;
  self;
  r = () => {
    var e;
    Object.defineProperty(e = {}, "__esModule", {
      value: true
    });
    e.FitAddon = undefined;
    e.FitAddon = class {
      activate(e) {
        this._terminal = e;
      }
      dispose() {}
      fit() {
        let e = this.proposeDimensions();
        if (!e || !this._terminal || isNaN(e.cols) || isNaN(e.rows)) {
          return;
        }
        let t = this._terminal._core;
        if (this._terminal.rows !== e.rows || this._terminal.cols !== e.cols) {
          t._renderService.clear();
          this._terminal.resize(e.cols, e.rows);
        }
      }
      proposeDimensions() {
        if (!this._terminal || !this._terminal.element || !this._terminal.element.parentElement) {
          return;
        }
        let e = this._terminal._core;
        let t = e._renderService.dimensions;
        if (t.css.cell.width === 0 || t.css.cell.height === 0) {
          return;
        }
        let r = this._terminal.options.scrollback === 0 ? 0 : e.viewport.scrollBarWidth;
        let i = window.getComputedStyle(this._terminal.element.parentElement);
        let s = parseInt(i.getPropertyValue("height"));
        let l = Math.max(0, parseInt(i.getPropertyValue("width")));
        let n = window.getComputedStyle(this._terminal.element);
        let a = s - (parseInt(n.getPropertyValue("padding-top")) + parseInt(n.getPropertyValue("padding-bottom")));
        return {
          cols: Math.max(2, Math.floor((l - (parseInt(n.getPropertyValue("padding-right")) + parseInt(n.getPropertyValue("padding-left"))) - r) / t.css.cell.width)),
          rows: Math.max(1, Math.floor(a / t.css.cell.height))
        };
      }
    };
    return e;
  };
  module.exports = r();
}