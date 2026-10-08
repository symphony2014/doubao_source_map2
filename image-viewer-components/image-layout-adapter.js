// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ImageLayoutAdapter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 64313
         */
module.exports = function (module, exports, require) {
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  let r = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
    toJSON: () => ({})
  };
  class o extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      var t;
      super(Object.assign({}, e));
      t = this;
      this.startMouseOffset = {
        x: 0,
        y: 0
      };
      this.originImageWidth = null;
      this.originImageHeight = null;
      this._isImageVertical = () => this.getProp("rotation") % 180 != 0;
      this._getImageBounds = () => {
        let e = this._adapter.getImage();
        if (e) {
          return e.getBoundingClientRect();
        } else {
          return r;
        }
      };
      this._getContainerBounds = () => {
        let e = this._adapter.getContainer();
        if (e) {
          return e.getBoundingClientRect();
        } else {
          return r;
        }
      };
      this._getOffset = e => {
        let {
          left: t,
          top: n
        } = this._getImageBounds();
        return {
          x: e.clientX - t,
          y: e.clientY - n
        };
      };
      this.setLoading = e => {
        this._adapter.setLoading(e);
      };
      this.handleWindowResize = () => {
        if (this.originImageWidth && this.originImageHeight) {
          this.handleResizeImage();
        }
      };
      this.handleLoad = e => {
        if (e.target) {
          let {
            naturalWidth: t,
            naturalHeight: n
          } = e.target;
          this.originImageHeight = n;
          this.originImageWidth = t;
          this.setState({
            loading: false
          });
          this.handleResizeImage(false);
        }
        let {
          src: t,
          onLoad: n
        } = this.getProps();
        if (n) {
          n(t);
        }
      };
      this.handleError = e => {
        let {
          onError: t,
          src: n
        } = this.getProps();
        this.setState({
          loading: false
        });
        if (t) {
          t(n);
        }
      };
      this.handleResizeImage = function () {
        let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        let n = !t._isImageVertical();
        let {
          currZoom: i
        } = t.getStates();
        let r = n ? t.originImageWidth : t.originImageHeight;
        let o = n ? t.originImageHeight : t.originImageWidth;
        let {
          onZoom: a,
          setRatio: s,
          ratio: l
        } = t.getProps();
        if (t._adapter.getContainer()) {
          let {
            width: n,
            height: s
          } = t._getContainerBounds();
          let l = n - 80;
          let c = s - 80;
          let d = 1;
          if (r > l || o > c) {
            d = Number(Math.min(l / r, c / o).toFixed(2));
          }
          if (i === d) {
            t.calculatePreviewImage(d, null);
          } else {
            a(d, e);
          }
        }
      };
      this.handleRatioChange = () => {
        if (this.originImageWidth && this.originImageHeight) {
          let e;
          let {
            currZoom: t
          } = this.getStates();
          let {
            ratio: n,
            onZoom: i
          } = this.getProps();
          if (n === "adaptation") {
            let t = !this._isImageVertical();
            let n = t ? this.originImageWidth : this.originImageHeight;
            let i = t ? this.originImageHeight : this.originImageWidth;
            let {
              width: r,
              height: o
            } = this._getContainerBounds();
            e = Number(Math.min((r - 80) / n, (o - 80) / i).toFixed(2));
          } else {
            e = 1;
          }
          if (t !== e) {
            i(e);
          }
        }
      };
      this.handleRightClickImage = e => {
        let {
          disableDownload: t
        } = this.getProps();
        return !t || (e.preventDefault(), e.stopPropagation(), false);
      };
      this.calcCanDragDirection = () => {
        let {
          width: e,
          height: t
        } = this.getStates();
        let {
          rotation: n
        } = this.getProps();
        let {
          width: i,
          height: r
        } = this._getContainerBounds();
        let o = e > i;
        let a = t > r;
        if (this._isImageVertical()) {
          o = t > i;
          a = e > r;
        }
        return {
          canDragVertical: a,
          canDragHorizontal: o
        };
      };
      this.calculatePreviewImage = (e, t) => {
        let n;
        let i = this._adapter.getImage();
        let {
          canDragVertical: r,
          canDragHorizontal: o
        } = this.calcCanDragDirection();
        let {
          width: a,
          height: s
        } = this._getContainerBounds();
        let l = Math.floor(this.originImageWidth * e);
        let c = Math.floor(this.originImageHeight * e);
        let d = !this._isImageVertical();
        let u = 0;
        let h = 0;
        if (d) {
          h = (n = {
            x: (a - l) * 0.5,
            y: (s - c) * 0.5
          }).x;
          u = n.y;
        } else {
          h = (n = {
            x: (a - c) * 0.5,
            y: (s - l) * 0.5
          }).x - (l - c) / 2;
          u = n.y + (l - c) / 2;
        }
        this.setState({
          width: l,
          height: c,
          offset: n,
          left: h,
          top: u,
          currZoom: e
        });
        if (i) {
          this._adapter.setImageCursor(r || o);
        }
      };
      this.calcExtremeBounds = () => {
        let {
          width: e,
          height: t
        } = this.getStates();
        let {
          width: n,
          height: i
        } = this._getContainerBounds();
        let r = n - e;
        let o = i - t;
        if (this._isImageVertical()) {
          r = n - t;
          o = i - e;
        }
        return {
          left: r,
          top: o
        };
      };
      this.handleMoveImage = e => {
        let {
          offset: t,
          width: n,
          height: i
        } = this.getStates();
        let {
          canDragVertical: r,
          canDragHorizontal: o
        } = this.calcCanDragDirection();
        if (e.buttons === 1 && (r || o)) {
          let {
            clientX: a,
            clientY: s
          } = e;
          let {
            left: l,
            top: c
          } = this._getContainerBounds();
          let {
            left: d,
            top: u
          } = this.calcExtremeBounds();
          let h = o ? a - l - this.startMouseOffset.x : t.x;
          let f = r ? s - c - this.startMouseOffset.y : t.y;
          if (o) {
            h = h > 0 ? 0 : h < d ? d : h;
          }
          if (r) {
            f = f > 0 ? 0 : f < u ? u : f;
          }
          let p = {
            x: h,
            y: f
          };
          this.setState({
            offset: p,
            left: this._isImageVertical() ? p.x - (n - i) / 2 : p.x,
            top: this._isImageVertical() ? p.y + (n - i) / 2 : p.y
          });
        }
      };
      this.handleImageMouseDown = e => {
        this.startMouseOffset = this._getOffset(e);
      };
    }
  }
  require.d(exports, {
    ImageLayoutAdapter: function () {
      return o;
    }
  });
}