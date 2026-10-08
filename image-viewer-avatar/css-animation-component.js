// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'AnimationComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 593626
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  class s extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.handleAnimationStart = () => {
        var e;
        var t;
        if ((t = (e = this.props).onAnimationStart) !== null && t !== undefined) {
          t.call(e);
        }
      };
      this.handleAnimationEnd = () => {
        this.setState({
          currentClassName: this.props.endClassName,
          extraStyle: {
            animationFillMode: this.props.fillMode
          },
          isAnimating: false
        }, () => {
          var e;
          var t;
          if ((t = (e = this.props).onAnimationEnd) !== null && t !== undefined) {
            t.call(e, false);
          }
        });
      };
      this.state = {
        currentClassName: this.props.startClassName,
        extraStyle: {
          animationFillMode: this.props.fillMode
        },
        isAnimating: true
      };
    }
    componentDidMount() {
      var e;
      var t;
      var n;
      var i;
      if ((t = (e = this.props).onAnimationStart) !== null && t !== undefined) {
        t.call(e);
      }
      if (!this.props.motion) {
        if ((i = (n = this.props).onAnimationEnd) !== null && i !== undefined) {
          i.call(n, false);
        }
        this.setState({
          isAnimating: false
        });
      }
    }
    componentDidUpdate(e, t, n) {
      let r = Object.keys(this.props).filter(t => !deepEqualUtil_1.deepEqual(this.props[t], e[t]));
      r.includes("animationState");
      if (r.includes("startClassName") || r.includes("replayKey") || r.includes("motion")) {
        this.setState({
          currentClassName: this.props.startClassName,
          extraStyle: {
            animationFillMode: this.props.fillMode
          },
          isAnimating: true
        }, () => {
          var e;
          var t;
          var n;
          var i;
          if ((t = (e = this.props).onAnimationStart) !== null && t !== undefined) {
            t.call(e);
          }
          if (!this.props.motion) {
            if ((i = (n = this.props).onAnimationEnd) !== null && i !== undefined) {
              i.call(n, this.state.isAnimating);
            }
            this.setState({
              isAnimating: false
            });
          }
        });
      }
    }
    render() {
      if (this.props.motion) {
        return this.props.children({
          animationClassName: this.state.currentClassName ?? "",
          animationStyle: this.state.extraStyle,
          animationEventsNeedBind: {
            onAnimationStart: this.handleAnimationStart,
            onAnimationEnd: this.handleAnimationEnd
          },
          isAnimating: this.state.isAnimating
        });
      } else {
        return this.props.children({
          animationClassName: "",
          animationStyle: {},
          animationEventsNeedBind: {},
          isAnimating: this.state.isAnimating
        });
      }
    }
  }
  s.defaultProps = {
    motion: true,
    replayKey: ""
  };
  exports.AnimationComponent = s;
}