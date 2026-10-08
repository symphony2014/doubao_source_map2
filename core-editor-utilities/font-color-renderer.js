// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'FontColorRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 797745
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var renderAttributeWrapper = require("render-attribute-wrapper") /*id: 31592*/;
  var u = {
    black: {
      HEX: "#000000",
      RGB: "rgb(0,0,0)"
    },
    silver: {
      HEX: "#C0C0C0",
      RGB: "rgb(192,192,192)"
    },
    gray: {
      HEX: "#808080",
      RGB: "rgb(128,128,128)"
    },
    white: {
      HEX: "#FFFFFF",
      RGB: "rgb(255,255,255)"
    },
    maroon: {
      HEX: "#800000",
      RGB: "rgb(128,0,0)"
    },
    red: {
      HEX: "#FF0000",
      RGB: "rgb(255,0,0)"
    },
    purple: {
      HEX: "#800080",
      RGB: "rgb(128,0,128)"
    },
    fuchsia: {
      HEX: "#FF00FF",
      RGB: "rgb(255,0,255)"
    },
    green: {
      HEX: "#008000",
      RGB: "rgb(0,128,0)"
    },
    lime: {
      HEX: "#00FF00",
      RGB: "rgb(0,255,0)"
    },
    olive: {
      HEX: "#808000",
      RGB: "rgb(128,128,0)"
    },
    yellow: {
      HEX: "#FFFF00",
      RGB: "rgb(255,255,0)"
    },
    navy: {
      HEX: "#000080",
      RGB: "rgb(0,0,128)"
    },
    blue: {
      HEX: "#0000FF",
      RGB: "rgb(0,0,255)"
    },
    teal: {
      HEX: "#008080",
      RGB: "rgb(0,128,128)"
    },
    aqua: {
      HEX: "#00FFFF",
      RGB: "rgb(0,255,255)"
    },
    aliceblue: {
      HEX: "#F0F8FF",
      RGB: "rgb(240,248,255)"
    },
    antiquewhite: {
      HEX: "#FAEBD7",
      RGB: "rgb(250,235,215)"
    },
    aquamarine: {
      HEX: "#7FFFD4",
      RGB: "rgb(127,255,212)"
    },
    azure: {
      HEX: "#F0FFFF",
      RGB: "rgb(240,255,255)"
    },
    beige: {
      HEX: "#F5F5DC",
      RGB: "rgb(245,245,220)"
    },
    bisque: {
      HEX: "#FFE4C4",
      RGB: "rgb(255,228,196)"
    },
    blanchedalmond: {
      HEX: "#FFEBCD",
      RGB: "rgb(255,235,205)"
    },
    blueviolet: {
      HEX: "#8A2BE2",
      RGB: "rgb(138,43,226)"
    },
    brown: {
      HEX: "#A52A2A",
      RGB: "rgb(165,42,42)"
    },
    burlywood: {
      HEX: "#DEB887",
      RGB: "rgb(222,184,135)"
    },
    cadetblue: {
      HEX: "#5F9EA0",
      RGB: "rgb(95,158,160)"
    },
    chartreuse: {
      HEX: "#7FFF00",
      RGB: "rgb(127,255,0)"
    },
    chocolate: {
      HEX: "#D2691E",
      RGB: "rgb(210,105,30)"
    },
    coral: {
      HEX: "#FF7F50",
      RGB: "rgb(255,127,80)"
    },
    cornflowerblue: {
      HEX: "#6495ED",
      RGB: "rgb(100,149,237)"
    },
    cornsilk: {
      HEX: "#FFF8DC",
      RGB: "rgb(255,248,220)"
    },
    crimson: {
      HEX: "#DC143C",
      RGB: "rgb(220,20,60)"
    },
    cyan: {
      HEX: "#00FFFF",
      RGB: "rgb(0,255,255)"
    },
    darkblue: {
      HEX: "#00008B",
      RGB: "rgb(0,0,139)"
    },
    darkcyan: {
      HEX: "#008B8B",
      RGB: "rgb(0,139,139)"
    },
    darkgoldenrod: {
      HEX: "#B8860B",
      RGB: "rgb(184,134,11)"
    },
    darkgray: {
      HEX: "#A9A9A9",
      RGB: "rgb(169,169,169)"
    },
    darkgreen: {
      HEX: "#006400",
      RGB: "rgb(0,100,0)"
    },
    darkgrey: {
      HEX: "#A9A9A9",
      RGB: "rgb(169,169,169)"
    },
    darkkhaki: {
      HEX: "#BDB76B",
      RGB: "rgb(189,183,107)"
    },
    darkmagenta: {
      HEX: "#8B008B",
      RGB: "rgb(139,0,139)"
    },
    darkolivegreen: {
      HEX: "#556B2F",
      RGB: "rgb(85,107,47)"
    },
    darkorange: {
      HEX: "#FF8C00",
      RGB: "rgb(255,140,0)"
    },
    darkorchid: {
      HEX: "#9932CC",
      RGB: "rgb(153,50,204)"
    },
    darkred: {
      HEX: "#8B0000",
      RGB: "rgb(139,0,0)"
    },
    darksalmon: {
      HEX: "#E9967A",
      RGB: "rgb(233,150,122)"
    },
    darkseagreen: {
      HEX: "#8FBC8F",
      RGB: "rgb(143,188,143)"
    },
    darkslateblue: {
      HEX: "#483D8B",
      RGB: "rgb(72,61,139)"
    },
    darkslategray: {
      HEX: "#2F4F4F",
      RGB: "rgb(47,79,79)"
    },
    darkslategrey: {
      HEX: "#2F4F4F",
      RGB: "rgb(47,79,79)"
    },
    darkturquoise: {
      HEX: "#00CED1",
      RGB: "rgb(0,206,209)"
    },
    darkviolet: {
      HEX: "#9400D3",
      RGB: "rgb(148,0,211)"
    },
    deeppink: {
      HEX: "#FF1493",
      RGB: "rgb(255,20,147)"
    },
    deepskyblue: {
      HEX: "#00BFFF",
      RGB: "rgb(0,191,255)"
    },
    dimgray: {
      HEX: "#696969",
      RGB: "rgb(105,105,105)"
    },
    dimgrey: {
      HEX: "#696969",
      RGB: "rgb(105,105,105)"
    },
    dodgerblue: {
      HEX: "#1E90FF",
      RGB: "rgb(30,144,255)"
    },
    firebrick: {
      HEX: "#B22222",
      RGB: "rgb(178,34,34)"
    },
    floralwhite: {
      HEX: "#FFFAF0",
      RGB: "rgb(255,250,240)"
    },
    forestgreen: {
      HEX: "#228B22",
      RGB: "rgb(34,139,34)"
    },
    gainsboro: {
      HEX: "#DCDCDC",
      RGB: "rgb(220,220,220)"
    },
    ghostwhite: {
      HEX: "#F8F8FF",
      RGB: "rgb(248,248,255)"
    },
    gold: {
      HEX: "#FFD700",
      RGB: "rgb(255,215,0)"
    },
    goldenrod: {
      HEX: "#DAA520",
      RGB: "rgb(218,165,32)"
    },
    greenyellow: {
      HEX: "#ADFF2F",
      RGB: "rgb(173,255,47)"
    },
    grey: {
      HEX: "#808080",
      RGB: "rgb(128,128,128)"
    },
    honeydew: {
      HEX: "#F0FFF0",
      RGB: "rgb(240,255,240)"
    },
    hotpink: {
      HEX: "#FF69B4",
      RGB: "rgb(255,105,180)"
    },
    indianred: {
      HEX: "#CD5C5C",
      RGB: "rgb(205,92,92)"
    },
    indigo: {
      HEX: "#4B0082",
      RGB: "rgb(75,0,130)"
    },
    ivory: {
      HEX: "#FFFFF0",
      RGB: "rgb(255,255,240)"
    },
    khaki: {
      HEX: "#F0E68C",
      RGB: "rgb(240,230,140)"
    },
    lavender: {
      HEX: "#E6E6FA",
      RGB: "rgb(230,230,250)"
    },
    lavenderblush: {
      HEX: "#FFF0F5",
      RGB: "rgb(255,240,245)"
    },
    lawngreen: {
      HEX: "#7CFC00",
      RGB: "rgb(124,252,0)"
    },
    lemonchiffon: {
      HEX: "#FFFACD",
      RGB: "rgb(255,250,205)"
    },
    lightblue: {
      HEX: "#ADD8E6",
      RGB: "rgb(173,216,230)"
    },
    lightcoral: {
      HEX: "#F08080",
      RGB: "rgb(240,128,128)"
    },
    lightcyan: {
      HEX: "#E0FFFF",
      RGB: "rgb(224,255,255)"
    },
    lightgoldenrodyellow: {
      HEX: "#FAFAD2",
      RGB: "rgb(250,250,210)"
    },
    lightgray: {
      HEX: "#D3D3D3",
      RGB: "rgb(211,211,211)"
    },
    lightgreen: {
      HEX: "#90EE90",
      RGB: "rgb(144,238,144)"
    },
    lightgrey: {
      HEX: "#D3D3D3",
      RGB: "rgb(211,211,211)"
    },
    lightpink: {
      HEX: "#FFB6C1",
      RGB: "rgb(255,182,193)"
    },
    lightsalmon: {
      HEX: "#FFA07A",
      RGB: "rgb(255,160,122)"
    },
    lightseagreen: {
      HEX: "#20B2AA",
      RGB: "rgb(32,178,170)"
    },
    lightskyblue: {
      HEX: "#87CEFA",
      RGB: "rgb(135,206,250)"
    },
    lightslategray: {
      HEX: "#778899",
      RGB: "rgb(119,136,153)"
    },
    lightslategrey: {
      HEX: "#778899",
      RGB: "rgb(119,136,153)"
    },
    lightsteelblue: {
      HEX: "#B0C4DE",
      RGB: "rgb(176,196,222)"
    },
    lightyellow: {
      HEX: "#FFFFE0",
      RGB: "rgb(255,255,224)"
    },
    limegreen: {
      HEX: "#32CD32",
      RGB: "rgb(50,205,50)"
    },
    linen: {
      HEX: "#FAF0E6",
      RGB: "rgb(250,240,230)"
    },
    magenta: {
      HEX: "#FF00FF",
      RGB: "rgb(255,0,255)"
    },
    mediumaquamarine: {
      HEX: "#66CDAA",
      RGB: "rgb(102,205,170)"
    },
    mediumblue: {
      HEX: "#0000CD",
      RGB: "rgb(0,0,205)"
    },
    mediumorchid: {
      HEX: "#BA55D3",
      RGB: "rgb(186,85,211)"
    },
    mediumpurple: {
      HEX: "#9370DB",
      RGB: "rgb(147,112,219)"
    },
    mediumseagreen: {
      HEX: "#3CB371",
      RGB: "rgb(60,179,113)"
    },
    mediumslateblue: {
      HEX: "#7B68EE",
      RGB: "rgb(123,104,238)"
    },
    mediumspringgreen: {
      HEX: "#00FA9A",
      RGB: "rgb(0,250,154)"
    },
    mediumturquoise: {
      HEX: "#48D1CC",
      RGB: "rgb(72,209,204)"
    },
    mediumvioletred: {
      HEX: "#C71585",
      RGB: "rgb(199,21,133)"
    },
    midnightblue: {
      HEX: "#191970",
      RGB: "rgb(25,25,112)"
    },
    mintcream: {
      HEX: "#F5FFFA",
      RGB: "rgb(245,255,250)"
    },
    mistyrose: {
      HEX: "#FFE4E1",
      RGB: "rgb(255,228,225)"
    },
    moccasin: {
      HEX: "#FFE4B5",
      RGB: "rgb(255,228,181)"
    },
    navajowhite: {
      HEX: "#FFDEAD",
      RGB: "rgb(255,222,173)"
    },
    oldlace: {
      HEX: "#FDF5E6",
      RGB: "rgb(253,245,230)"
    },
    olivedrab: {
      HEX: "#6B8E23",
      RGB: "rgb(107,142,35)"
    },
    orange: {
      HEX: "#FFA500",
      RGB: "rgb(255,165,0)"
    },
    orangered: {
      HEX: "#FF4500",
      RGB: "rgb(255,69,0)"
    },
    orchid: {
      HEX: "#DA70D6",
      RGB: "rgb(218,112,214)"
    },
    palegoldenrod: {
      HEX: "#EEE8AA",
      RGB: "rgb(238,232,170)"
    },
    palegreen: {
      HEX: "#98FB98",
      RGB: "rgb(152,251,152)"
    },
    paleturquoise: {
      HEX: "#AFEEEE",
      RGB: "rgb(175,238,238)"
    },
    palevioletred: {
      HEX: "#DB7093",
      RGB: "rgb(219,112,147)"
    },
    papayawhip: {
      HEX: "#FFEFD5",
      RGB: "rgb(255,239,213)"
    },
    peachpuff: {
      HEX: "#FFDAB9",
      RGB: "rgb(255,218,185)"
    },
    peru: {
      HEX: "#CD853F",
      RGB: "rgb(205,133,63)"
    },
    pink: {
      HEX: "#FFC0CB",
      RGB: "rgb(255,192,203)"
    },
    plum: {
      HEX: "#DDA0DD",
      RGB: "rgb(221,160,221)"
    },
    powderblue: {
      HEX: "#B0E0E6",
      RGB: "rgb(176,224,230)"
    },
    rosybrown: {
      HEX: "#BC8F8F",
      RGB: "rgb(188,143,143)"
    },
    royalblue: {
      HEX: "#4169E1",
      RGB: "rgb(65,105,225)"
    },
    saddlebrown: {
      HEX: "#8B4513",
      RGB: "rgb(139,69,19)"
    },
    salmon: {
      HEX: "#FA8072",
      RGB: "rgb(250,128,114)"
    },
    sandybrown: {
      HEX: "#F4A460",
      RGB: "rgb(244,164,96)"
    },
    seagreen: {
      HEX: "#2E8B57",
      RGB: "rgb(46,139,87)"
    },
    seashell: {
      HEX: "#FFF5EE",
      RGB: "rgb(255,245,238)"
    },
    sienna: {
      HEX: "#A0522D",
      RGB: "rgb(160,82,45)"
    },
    skyblue: {
      HEX: "#87CEEB",
      RGB: "rgb(135,206,235)"
    },
    slateblue: {
      HEX: "#6A5ACD",
      RGB: "rgb(106,90,205)"
    },
    slategray: {
      HEX: "#708090",
      RGB: "rgb(112,128,144)"
    },
    slategrey: {
      HEX: "#708090",
      RGB: "rgb(112,128,144)"
    },
    snow: {
      HEX: "#FFFAFA",
      RGB: "rgb(255,250,250)"
    },
    springgreen: {
      HEX: "#00FF7F",
      RGB: "rgb(0,255,127)"
    },
    steelblue: {
      HEX: "#4682B4",
      RGB: "rgb(70,130,180)"
    },
    tan: {
      HEX: "#D2B48C",
      RGB: "rgb(210,180,140)"
    },
    thistle: {
      HEX: "#D8BFD8",
      RGB: "rgb(216,191,216)"
    },
    tomato: {
      HEX: "#FF6347",
      RGB: "rgb(255,99,71)"
    },
    turquoise: {
      HEX: "#40E0D0",
      RGB: "rgb(64,224,208)"
    },
    violet: {
      HEX: "#EE82EE",
      RGB: "rgb(238,130,238)"
    },
    wheat: {
      HEX: "#F5DEB3",
      RGB: "rgb(245,222,179)"
    },
    whitesmoke: {
      HEX: "#F5F5F5",
      RGB: "rgb(245,245,245)"
    },
    yellowgreen: {
      HEX: "#9ACD32",
      RGB: "rgb(154,205,50)"
    }
  };
  var d = "\\s*(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\\s*";
  var f = RegExp("^rgb\\(" + d + "," + d + "," + d + "\\)$", "i");
  var g = RegExp("^rgba\\(" + d + "," + d + "," + d + ",\\s*(0?(?:\\.\\d+)?|(1))\\s*\\)$", "i");
  function b(e) {
    return u[e.toLocaleLowerCase().replace(/\s/g, "")];
  }
  function p(e, t) {
    var r = function (e) {
      if (/^#[0-9a-f]{6}$/i.test(e)) {
        return o.HEX;
      }
      if (/^#[0-9a-f]{8}$/i.test(e)) {
        return o.HEXRGBA;
      }
      if (f.test(e)) {
        return o.RGB;
      }
      if (g.test(e)) {
        return o.RGBA;
      }
      if (b(e)) {
        return o.W3C_COLOR;
      }
      return "";
    }(e);
    if (!r) {
      return "";
    }
    if (r === t) {
      if (r === o.RGB || r === o.RGBA) {
        return e.toLowerCase();
      } else {
        return e.toUpperCase();
      }
    }
    switch (t) {
      case o.HEX:
        return function (e, t) {
          switch (t) {
            case o.HEXRGBA:
              return v(e);
            case o.RGB:
              return m(e);
            case o.RGBA:
              return m(E(e));
            case o.W3C_COLOR:
              return b(e)[o.HEX];
            default:
              return "";
          }
        }(e, r);
      case o.HEXRGBA:
        return function (e, t) {
          switch (t) {
            case o.HEX:
              return k(e);
            case o.RGB:
              return k(m(e));
            case o.RGBA:
              var r;
              return "#" + (r = g.exec(e)).slice(1, 4).map(function (e) {
                var t = Number(e).toString(16).toUpperCase();
                if (t.length !== 2) {
                  return "0" + t;
                } else {
                  return t;
                }
              }).join("") + (Number(r[4]) * 255 | 256).toString(16).slice(1);
            case o.W3C_COLOR:
              return k(b(e)[o.HEX]);
            default:
              return "";
          }
        }(e, r);
      case o.RGB:
        return function (e, t) {
          switch (t) {
            case o.HEX:
              return h(e);
            case o.HEXRGBA:
              return h(v(e));
            case o.RGBA:
              return E(e);
            case o.W3C_COLOR:
              return b(e)[o.RGB];
            default:
              return "";
          }
        }(e, r);
      case o.RGBA:
        return function (e, t) {
          switch (t) {
            case o.HEX:
              return w(h(e));
            case o.HEXRGBA:
              var r;
              var n;
              return "rgba(" + ((n = parseInt(e.substr(1), 16)) >> 24 & 255) + "," + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) / 255 + ")";
            case o.RGB:
              return w(e);
            case o.W3C_COLOR:
              return w(b(e)[o.RGB]);
            default:
              return "";
          }
        }(e, r);
      default:
        return "";
    }
  }
  function h(e) {
    var t = parseInt(e = e.substr(1), 16);
    return "rgb(" + (t >> 16 & 255) + "," + (t >> 8 & 255) + "," + (t & 255) + ")";
  }
  function m(e) {
    var t = f.exec(e);
    if (t) {
      return "#" + t.slice(1, 4).map(function (e) {
        var t = Number(e).toString(16).toUpperCase();
        if (t.length !== 2) {
          return "0" + t;
        } else {
          return t;
        }
      }).join("");
    } else {
      return e;
    }
  }
  function w(e) {
    return ("rgba(" + f.exec(e).slice(1, 4).join(",") + ",1)").toLocaleLowerCase();
  }
  function E(e) {
    return ("rgb(" + g.exec(e).slice(1, 4).join(",") + ")").toLocaleLowerCase();
  }
  function k(e) {
    return (e + "FF").toUpperCase();
  }
  function v(e) {
    return e.slice(0, -2).toUpperCase();
  }
  (n = o ||= {}).RGB = "RGB";
  n.HEX = "HEX";
  n.RGBA = "RGBA";
  n.HEXRGBA = "HEXRGBA";
  n.W3C_COLOR = "W3C_COLOR";
  function x(e) {
    var t = e.tagName;
    var r = e.style.color;
    if (!r && t === "FONT") {
      r = e.getAttribute("color") || "";
    }
    return r;
  }
  var y = function (e) {
    function t(r) {
      var n = r.editor;
      var o = r.colorFormat;
      var a = r.customizedAttributeKey;
      var i = e.call(this) || this;
      i.name = "FontColor";
      i.attributeKey = a || t.KEY;
      t.colorFormat = o || t.colorFormat;
      n.registerCommand(i.attributeKey, function (e) {
        var t = e.value;
        n.toggleAttribute(i.attributeKey, t);
      });
      return i;
    }
    typescriptHelpers.extendClass(t, e);
    var r = t.prototype;
    r.match = function (e) {
      return e === this.attributeKey;
    };
    r.render = function (e) {
      var r = e.attributes;
      var n = e.children;
      var o = {};
      if (r[this.attributeKey]) {
        o.color = p(r[this.attributeKey], t.colorFormat);
        e.style = typescriptHelpers.assignObject(typescriptHelpers.assignObject({}, e.style), o);
      }
      return n;
    };
    r.deserialize = function (e) {
      var r;
      var n = e.node;
      var o = e.deltaSet;
      var a = e.zoneId;
      if (n instanceof HTMLElement) {
        var c = x(n);
        if (c) {
          return editorClipboardManager.addAttrsToDelta(o, a, ((r = {})[this.attributeKey] = p(c, t.colorFormat), r), false);
        }
      }
      return o;
    };
    r.serialize = function (e) {
      var t = e.type;
      var r = e.node;
      var n = e.op;
      if (n == null ? undefined : n.attributes) {
        var o = n.attributes[this.attributeKey];
        if (t === treeNodeTypes.nodeTypes.LEAF && o) {
          var a = document.createElement("span");
          a.appendChild(r);
          a.style.color = o;
          return Object.assign(e, {
            node: a
          });
        }
      }
      return e;
    };
    t.colorFormat = o.HEX;
    t.KEY = "fontcolor";
    typescriptHelpers.applyDecorators([renderAttributeWrapper.wrapRenderFunction], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    FontColorRenderer: function () {
      return y;
    }
  });
}