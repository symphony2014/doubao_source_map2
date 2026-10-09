// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'cardWrapperComponent'
// - Resolved require(201819) to 'card-wrapper-component'
// - Renamed variable 'c' to 'reactLottiePlayer'
// - Resolved require(829736) to 'react-lottie-player'
// - Renamed variable 'd' to 'svgIconComponent_4'
// - Resolved require(877049) to 'svg-icon-component_4'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'X' to 'SvgIconComponent' (module 877049)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'l' to 'CardWrapper' (module 201819)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 44862.2873ae70.js
         * chunkId: 44862
         * moduleId: 408308
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var cardWrapperComponent = require("card-wrapper-component") /*id: 201819*/;
  function u(e) {
    if (!e) {
      return;
    }
    let {
      wubi: t,
      wuxing: n,
      stroke_num: a,
      structure: r,
      fanti: i,
      radical: o,
      png_url: s,
      dark_png_url: l,
      stroke_order_gif: u,
      stroke_order_dark_gif: c,
      list: y = [],
      url: d
    } = e || {};
    let m = y.map(e => ({
      spell: e.spell,
      record: e.record
    })).slice(0, 4);
    let f = (Array.isArray(i) ? i.join(",") : i) || "";
    return {
      lightKeywordImage: u || s || "",
      darkKeywordImage: c || l || "",
      spellList: m,
      hanZiLabelInfoList: [{
        label: "部首",
        value: o || ""
      }, {
        label: "结构",
        value: r || ""
      }, {
        label: "笔画",
        value: a || ""
      }, ...(f ? [{
        label: "繁体",
        value: f
      }] : []), ...(t ? [{
        label: "五笔",
        value: t
      }] : []), ...(n ? [{
        label: "五行",
        value: n
      }] : [])],
      detailUrl: d || ""
    };
  }
  var reactLottiePlayer = require("react-lottie-player") /*id: 829736*/;
  var y = reactLottiePlayer;
  var svgIconComponent_4 = require("svg-icon-component_4") /*id: 877049*/;
  var m = {
    nm: "Flow 1",
    h: 24,
    w: 24,
    meta: {
      g: "LottieFiles Figma v96"
    },
    layers: [{
      ty: 4,
      nm: "dbx_ic_speaker",
      sr: 1,
      st: 0,
      op: 55,
      ip: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 0,
          k: [8, 8]
        },
        s: {
          a: 0,
          k: [100, 100]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 0,
          k: [12, 12]
        },
        r: {
          a: 0,
          k: 0
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 0,
          k: 100
        }
      },
      shapes: [],
      ind: 1
    }, {
      ty: 4,
      nm: "Union1",
      sr: 1,
      st: 0,
      op: 55,
      ip: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 0,
          k: [4.41, 6.66]
        },
        s: {
          a: 0,
          k: [100, 100]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 0,
          k: [5.26, 8]
        },
        r: {
          a: 0,
          k: 0
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 0,
          k: 100
        }
      },
      shapes: [{
        ty: "sh",
        nm: "",
        d: 1,
        ks: {
          a: 0,
          k: {
            c: true,
            i: [[0, 0], [0, -1.43], [0, 0], [1.08, 0.81], [0, 0], [0, 0], [0.14, 0.01], [0, 0], [0, 0], [0, 0], [0.17, 1.22], [0, 0], [0.01, 0.42], [0, 0], [-0.03, 0.44], [0, 0], [-1.27, 0.06], [0, 0], [0, 0], [0, 0], [-0.1, 0.07], [0, 0], [0, 0]],
            o: [[1.08, -0.94], [0, 0], [0, 1.39], [0, 0], [0, 0], [-0.11, -0.09], [0, 0], [0, 0], [0, 0], [-1.23, -0.06], [0, 0], [-0.04, -0.44], [0, 0], [0, -0.39], [0, 0], [0.11, -1.28], [0, 0], [0, 0], [0, 0], [0.12, -0.01], [0, 0], [0, 0], [0, 0]],
            v: [[6.05, 0.42], [8.81, 1.67], [8.81, 11.66], [6.15, 12.99], [6.05, 12.91], [3.67, 10.83], [3.29, 10.67], [3.23, 10.66], [2.66, 10.66], [2.54, 10.66], [0.1, 8.5], [0.09, 8.37], [0.01, 7.07], [0, 6.66], [0.05, 5.4], [0.09, 4.95], [2.54, 2.67], [2.66, 2.66], [3.23, 2.66], [3.29, 2.66], [3.62, 2.54], [3.67, 2.5], [6.05, 0.42]]
          }
        }
      }, {
        ty: "sh",
        nm: "",
        d: 1,
        ks: {
          a: 0,
          k: {
            c: true,
            i: [[0, 0], [0.39, -0.34], [0, 0], [0.42, 0], [0, 0], [0.06, -0.73], [0, -0.47], [-0.05, -0.57], [-0.81, 0], [0, 0], [-0.32, -0.28], [0, 0], [0, 0.52], [0, 0]],
            o: [[0, -0.52], [0, 0], [-0.32, 0.28], [0, 0], [-0.81, 0], [-0.05, 0.57], [0, 0.47], [0.06, 0.73], [0, 0], [0.42, 0], [0, 0], [0.39, 0.34], [0, 0], [0, 0]],
            v: [[7.75, 1.67], [6.75, 1.22], [4.37, 3.3], [3.23, 3.73], [2.66, 3.73], [1.15, 5.05], [1.07, 6.66], [1.15, 8.28], [2.66, 9.6], [3.23, 9.6], [4.37, 10.03], [6.75, 12.11], [7.75, 11.66], [7.75, 1.67]]
          }
        }
      }, {
        ty: "fl",
        nm: "",
        c: {
          a: 0,
          k: [0, 0.396, 0.992]
        },
        r: 1,
        o: {
          a: 0,
          k: 100
        }
      }],
      ind: 2,
      parent: 1
    }, {
      ty: 4,
      nm: "Union2",
      sr: 1,
      st: 0,
      op: 55,
      ip: 18,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.85, 2.87],
            t: 18
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.85, 2.87],
            t: 30
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.85, 2.87],
            t: 36
          }, {
            s: [0.85, 2.87],
            t: 48
          }]
        },
        s: {
          a: 0,
          k: [100, 100]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [11.69, 8],
            t: 18
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [11.69, 8],
            t: 30
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [11.69, 8],
            t: 36
          }, {
            s: [11.69, 8],
            t: 48
          }]
        },
        r: {
          a: 0,
          k: 0
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 18
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 30
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 36
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 48
          }, {
            s: [0],
            t: 66
          }]
        }
      },
      shapes: [{
        ty: "sh",
        nm: "",
        d: 1,
        ks: {
          a: 0,
          k: {
            c: true,
            i: [[0, 0], [-0.15, -0.25], [-0.07, -0.15], [0, -0.77], [0.3, -0.66], [0.08, -0.14], [0.25, 0.15], [-0.15, 0.25], [-0.05, 0.12], [0, 0.62], [0.24, 0.52], [0.06, 0.11], [-0.25, 0.15]],
            o: [[0.25, -0.15], [0.08, 0.14], [0.3, 0.66], [0, 0.77], [-0.07, 0.15], [-0.15, 0.25], [-0.25, -0.15], [0.06, -0.11], [0.24, -0.52], [0, -0.61], [-0.05, -0.12], [-0.15, -0.25], [0, 0]],
            v: [[0.27, 0.07], [0.99, 0.27], [1.22, 0.7], [1.69, 2.87], [1.22, 5.03], [0.99, 5.47], [0.27, 5.66], [0.07, 4.93], [0.25, 4.59], [0.62, 2.87], [0.25, 1.15], [0.07, 0.8], [0.27, 0.07]]
          }
        }
      }, {
        ty: "fl",
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0, 0.396, 0.992],
            t: 18
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0, 0.396, 0.992],
            t: 30
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0, 0.396, 0.992],
            t: 36
          }, {
            s: [0, 0.396, 0.992],
            t: 48
          }]
        },
        r: 1,
        o: {
          a: 0,
          k: 100
        }
      }],
      ind: 3,
      parent: 1
    }, {
      ty: 4,
      nm: "Union3",
      sr: 1,
      st: 0,
      op: 55,
      ip: 36,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [1.03, 4.22],
            t: 36
          }, {
            s: [1.03, 4.22],
            t: 48
          }]
        },
        s: {
          a: 0,
          k: [100, 100]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [14.17, 7.99],
            t: 36
          }, {
            s: [14.17, 7.99],
            t: 48
          }]
        },
        r: {
          a: 0,
          k: 0
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 36
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 48
          }, {
            s: [0],
            t: 66
          }]
        }
      },
      shapes: [{
        ty: "sh",
        nm: "",
        d: 1,
        ks: {
          a: 0,
          k: {
            c: true,
            i: [[0, 0], [-0.15, -0.25], [-0.11, -0.24], [0, -1.17], [0.67, -1.16], [0.25, 0.15], [-0.15, 0.25], [0, 1.24], [0.4, 0.86], [0.05, 0.1], [0, 0], [0, 0], [-0.24, 0.14]],
            o: [[0.25, -0.15], [0.13, 0.22], [0.46, 1], [0, 1.43], [-0.15, 0.25], [-0.25, -0.15], [0.58, -1], [0, -1.01], [-0.05, -0.1], [0, 0], [0, 0], [-0.11, -0.25], [0, 0]],
            v: [[0.26, 0.07], [0.99, 0.26], [1.35, 0.95], [2.07, 4.23], [1.01, 8.17], [0.29, 8.36], [0.09, 7.63], [1, 4.23], [0.38, 1.4], [0.23, 1.1], [0.07, 0.8], [0.05, 0.75], [0.26, 0.07]]
          }
        }
      }, {
        ty: "fl",
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0, 0.396, 0.992],
            t: 36
          }, {
            s: [0, 0.396, 0.992],
            t: 48
          }]
        },
        r: 1,
        o: {
          a: 0,
          k: 100
        }
      }],
      ind: 4,
      parent: 1
    }],
    v: "5.7.0",
    fr: 60,
    op: 54,
    ip: 0,
    assets: []
  };
  var f = {
    nm: "Flow 3",
    h: 24,
    w: 24,
    meta: {
      g: "LottieFiles Figma v96"
    },
    layers: [{
      ty: 4,
      nm: "dbx_ic_speaker",
      sr: 1,
      st: 0,
      op: 55,
      ip: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 0,
          k: [8, 8]
        },
        s: {
          a: 0,
          k: [100, 100]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 0,
          k: [12, 12]
        },
        r: {
          a: 0,
          k: 0
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 0,
          k: 100
        }
      },
      shapes: [],
      ind: 1
    }, {
      ty: 4,
      nm: "Union1",
      sr: 1,
      st: 0,
      op: 55,
      ip: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 0,
          k: [4.41, 6.66]
        },
        s: {
          a: 0,
          k: [100, 100]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 0,
          k: [5.26, 8]
        },
        r: {
          a: 0,
          k: 0
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 0,
          k: 100
        }
      },
      shapes: [{
        ty: "sh",
        nm: "",
        d: 1,
        ks: {
          a: 0,
          k: {
            c: true,
            i: [[0, 0], [0, -1.43], [0, 0], [1.08, 0.81], [0, 0], [0, 0], [0.14, 0.01], [0, 0], [0, 0], [0, 0], [0.17, 1.22], [0, 0], [0.01, 0.42], [0, 0], [-0.03, 0.44], [0, 0], [-1.27, 0.06], [0, 0], [0, 0], [0, 0], [-0.1, 0.07], [0, 0], [0, 0]],
            o: [[1.08, -0.94], [0, 0], [0, 1.39], [0, 0], [0, 0], [-0.11, -0.09], [0, 0], [0, 0], [0, 0], [-1.23, -0.06], [0, 0], [-0.04, -0.44], [0, 0], [0, -0.39], [0, 0], [0.11, -1.28], [0, 0], [0, 0], [0, 0], [0.12, -0.01], [0, 0], [0, 0], [0, 0]],
            v: [[6.05, 0.42], [8.81, 1.67], [8.81, 11.66], [6.15, 12.99], [6.05, 12.91], [3.67, 10.83], [3.29, 10.67], [3.23, 10.66], [2.66, 10.66], [2.54, 10.66], [0.1, 8.5], [0.09, 8.37], [0.01, 7.07], [0, 6.66], [0.05, 5.4], [0.09, 4.95], [2.54, 2.67], [2.66, 2.66], [3.23, 2.66], [3.29, 2.66], [3.62, 2.54], [3.67, 2.5], [6.05, 0.42]]
          }
        }
      }, {
        ty: "sh",
        nm: "",
        d: 1,
        ks: {
          a: 0,
          k: {
            c: true,
            i: [[0, 0], [0.39, -0.34], [0, 0], [0.42, 0], [0, 0], [0.06, -0.73], [0, -0.47], [-0.05, -0.57], [-0.81, 0], [0, 0], [-0.32, -0.28], [0, 0], [0, 0.52], [0, 0]],
            o: [[0, -0.52], [0, 0], [-0.32, 0.28], [0, 0], [-0.81, 0], [-0.05, 0.57], [0, 0.47], [0.06, 0.73], [0, 0], [0.42, 0], [0, 0], [0.39, 0.34], [0, 0], [0, 0]],
            v: [[7.75, 1.67], [6.75, 1.22], [4.37, 3.3], [3.23, 3.73], [2.66, 3.73], [1.15, 5.05], [1.07, 6.66], [1.15, 8.28], [2.66, 9.6], [3.23, 9.6], [4.37, 10.03], [6.75, 12.11], [7.75, 11.66], [7.75, 1.67]]
          }
        }
      }, {
        ty: "fl",
        nm: "",
        c: {
          a: 0,
          k: [0.467, 0.69, 1]
        },
        r: 1,
        o: {
          a: 0,
          k: 100
        }
      }],
      ind: 2,
      parent: 1
    }, {
      ty: 4,
      nm: "Union2",
      sr: 1,
      st: 0,
      op: 55,
      ip: 18,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.85, 2.87],
            t: 18
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.85, 2.87],
            t: 30
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.85, 2.87],
            t: 36
          }, {
            s: [0.85, 2.87],
            t: 48
          }]
        },
        s: {
          a: 0,
          k: [100, 100]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [11.69, 8],
            t: 18
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [11.69, 8],
            t: 30
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [11.69, 8],
            t: 36
          }, {
            s: [11.69, 8],
            t: 48
          }]
        },
        r: {
          a: 0,
          k: 0
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 18
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 30
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 36
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 48
          }, {
            s: [0],
            t: 66
          }]
        }
      },
      shapes: [{
        ty: "sh",
        nm: "",
        d: 1,
        ks: {
          a: 0,
          k: {
            c: true,
            i: [[0, 0], [-0.15, -0.25], [-0.07, -0.15], [0, -0.77], [0.3, -0.66], [0.08, -0.14], [0.25, 0.15], [-0.15, 0.25], [-0.05, 0.12], [0, 0.62], [0.24, 0.52], [0.06, 0.11], [-0.25, 0.15]],
            o: [[0.25, -0.15], [0.08, 0.14], [0.3, 0.66], [0, 0.77], [-0.07, 0.15], [-0.15, 0.25], [-0.25, -0.15], [0.06, -0.11], [0.24, -0.52], [0, -0.61], [-0.05, -0.12], [-0.15, -0.25], [0, 0]],
            v: [[0.27, 0.07], [0.99, 0.27], [1.22, 0.7], [1.69, 2.87], [1.22, 5.03], [0.99, 5.47], [0.27, 5.66], [0.07, 4.93], [0.25, 4.59], [0.62, 2.87], [0.25, 1.15], [0.07, 0.8], [0.27, 0.07]]
          }
        }
      }, {
        ty: "fl",
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.467, 0.69, 1],
            t: 18
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.467, 0.69, 1],
            t: 30
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.467, 0.69, 1],
            t: 36
          }, {
            s: [0.467, 0.69, 1],
            t: 48
          }]
        },
        r: 1,
        o: {
          a: 0,
          k: 100
        }
      }],
      ind: 3,
      parent: 1
    }, {
      ty: 4,
      nm: "Union3",
      sr: 1,
      st: 0,
      op: 55,
      ip: 36,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [1.03, 4.22],
            t: 36
          }, {
            s: [1.03, 4.22],
            t: 48
          }]
        },
        s: {
          a: 0,
          k: [100, 100]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [14.17, 7.99],
            t: 36
          }, {
            s: [14.17, 7.99],
            t: 48
          }]
        },
        r: {
          a: 0,
          k: 0
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 36
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [100],
            t: 48
          }, {
            s: [0],
            t: 66
          }]
        }
      },
      shapes: [{
        ty: "sh",
        nm: "",
        d: 1,
        ks: {
          a: 0,
          k: {
            c: true,
            i: [[0, 0], [-0.15, -0.25], [-0.11, -0.24], [0, -1.17], [0.67, -1.16], [0.25, 0.15], [-0.15, 0.25], [0, 1.24], [0.4, 0.86], [0.05, 0.1], [0, 0], [0, 0], [-0.24, 0.14]],
            o: [[0.25, -0.15], [0.13, 0.22], [0.46, 1], [0, 1.43], [-0.15, 0.25], [-0.25, -0.15], [0.58, -1], [0, -1.01], [-0.05, -0.1], [0, 0], [0, 0], [-0.11, -0.25], [0, 0]],
            v: [[0.26, 0.07], [0.99, 0.26], [1.35, 0.95], [2.07, 4.23], [1.01, 8.17], [0.29, 8.36], [0.09, 7.63], [1, 4.23], [0.38, 1.4], [0.23, 1.1], [0.07, 0.8], [0.05, 0.75], [0.26, 0.07]]
          }
        }
      }, {
        ty: "fl",
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.167,
              y: 0.167
            },
            i: {
              x: 0.833,
              y: 0.833
            },
            s: [0, 0, 0],
            t: 0
          }, {
            o: {
              x: 0.65,
              y: 0
            },
            i: {
              x: 0.35,
              y: 0
            },
            s: [0.467, 0.69, 1],
            t: 36
          }, {
            s: [0.467, 0.69, 1],
            t: 48
          }]
        },
        r: 1,
        o: {
          a: 0,
          k: 100
        }
      }],
      ind: 4,
      parent: 1
    }],
    v: "5.7.0",
    fr: 60,
    op: 54,
    ip: 0,
    assets: []
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let {
      spell: t,
      record: n,
      onPlay: a,
      themeMode: r = "light"
    } = e;
    let o = reactCoreLibraryReexport.useRef(null);
    let [l, u] = reactCoreLibraryReexport.useState(false);
    let c = reactCoreLibraryReexport.useCallback(async () => {
      if (a != null) {
        a();
      }
      try {
        if (o.current) {
          o.current.pause();
          o.current.src = "";
          o.current = null;
        }
        let e = new Audio(n);
        o.current = e;
        e.onplay = () => {
          u(true);
        };
        e.onended = () => {
          u(false);
        };
        await e.play();
      } catch {
        u(false);
      }
    }, [n, t, a]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s("flex items-center h-[30px] gap-6", "cursor-pointer"),
      onClick: e => {
        e.stopPropagation();
        e.preventDefault();
        c();
      },
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          fontFamily: "SF Pro"
        },
        className: s("text-[28px] font-[590] leading-[40px] align-middle", "text-dbx-text-primary"),
        children: t
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        children: l ? reactJsxRuntimeCoreReexport.jsx(y, {
          animationData: r === "dark" ? f : m,
          className: s("size-24 text-dbx-text-secondary"),
          loop: true,
          autoplay: true
        }) : reactJsxRuntimeCoreReexport.jsx(svgIconComponent_4.SvgIconComponent, {
          className: s("size-16 m-4 text-dbx-text-secondary")
        })
      })]
    });
  };
  var v = {
    "light-tianzige": "light-tianzige-igShYh",
    "dark-tianzige": "dark-tianzige-fdLaEN"
  };
  let k = e => {
    var t;
    var n;
    let {
      data: o,
      onTrackEvent: c
    } = e;
    let y = reactCoreLibraryReexport.useMemo(() => function (e) {
      if (!e) {
        return [];
      }
      let {
        display: t
      } = e || {};
      if (Array.isArray(t)) {
        return t.map(e => u(e.display)).filter(Boolean);
      } else {
        return [u(t)].filter(Boolean);
      }
    }(o), [o]);
    let d = ((n = document.documentElement) === null || n === undefined ? undefined : (t = n.getAttribute) === null || t === undefined ? undefined : t.call(n, "data-theme")) || "light";
    let [m, f] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 0.8
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (f) {
        if (c != null) {
          c("venue_card_show", {});
        }
      }
    }, [f]);
    return reactJsxRuntimeCoreReexport.jsx(cardWrapperComponent.CardWrapper, {
      classname: "!max-w-380 min-w-334",
      cardStyle: {
        background: "var(--dbx-bg-body-overlay-web) !important",
        padding: "16px"
      },
      ref: m,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("flex flex-col gap-12"),
        children: y.map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s("flex gap-24 w-full"),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: s("size-120", d === "dark" ? v["dark-tianzige"] : v["light-tianzige"]),
            children: reactJsxRuntimeCoreReexport.jsx("img", {
              style: {
                backgroundColor: "transparent"
              },
              src: xssContentSanitizer.sanitizeUrl(d === "dark" ? e.darkKeywordImage : e.lightKeywordImage, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1Od*JHc*hRek-w$2xk%2N*bFRP$3BpTWp*M1lqSTFiR0p1$$haWl-za*9Xa2RT-0dKcE1XbFpXRT$z$ERKb2FHSn$jSEJNTW14M$drZFdORXh1$W5wbFIwWj$Xak5XZWc9PQ"
              }),
              alt: ""
            })
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: s("flex-1 flex flex-col gap-12"),
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: s("flex flex-col gap-6"),
              children: e.spellList.map(e => reactJsxRuntimeCoreReexport.jsx(x, {
                spell: e.spell || "",
                record: e.record || "",
                onPlay: () => {
                  if (c != null) {
                    c("venue_card_click", {
                      click_option: "voice_playback"
                    });
                  }
                },
                themeMode: d
              }))
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: s("flex flex-wrap w-full"),
              children: e.hanZiLabelInfoList.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
                className: s("min-w-1/2 flex items-center gap-8 h-22", "text-14 leading-22", t > 1 ? "mt-4" : ""),
                children: [reactJsxRuntimeCoreReexport.jsx("span", {
                  className: s("text-dbx-text-secondary"),
                  children: e.label || ""
                }), reactJsxRuntimeCoreReexport.jsx("span", {
                  className: s("text-dbx-text-primary"),
                  children: e.value || ""
                })]
              }))
            })]
          })]
        }))
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    HanziCard: function () {
      return k;
    }
  });
}