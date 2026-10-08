// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TypographyWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 954330
         */
module.exports = function (module, exports, require) {
  var typographyWrapperComponent = require("typography-wrapper-component") /*id: 156355*/;
  var typographyComponent_1 = require("typography-component_1") /*id: 73234*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var a = propTypesFactoryWrapper;
  var typographyConstants = require("typography-constants") /*id: 518279*/;
  var typographyComponent = require("typography-component") /*id: 543669*/;
  function d(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  class u extends reactCoreLibraryReexport.PureComponent {
    render() {
      let e = this.props;
      let {
        heading: t
      } = e;
      let n = d(e, ["heading"]);
      let i = typographyConstants.typographyConstants.HEADING.indexOf(t) !== -1 ? `h${t}` : "h1";
      return reactCoreLibraryReexport.createElement(typographyComponent.Typography, Object.assign({
        component: i,
        heading: i
      }, n));
    }
  }
  u.propTypes = {
    copyable: a.oneOfType([a.object, a.bool]),
    delete: a.bool,
    disabled: a.bool,
    ellipsis: a.oneOfType([a.object, a.bool]),
    mark: a.bool,
    link: a.oneOfType([a.object, a.bool]),
    underline: a.bool,
    strong: a.bool,
    type: a.oneOf(typographyConstants.typographyConstants.TYPE),
    heading: a.oneOf(typographyConstants.typographyConstants.HEADING),
    style: a.object,
    className: a.string,
    component: a.string,
    weight: a.oneOfType([a.oneOf(typographyConstants.typographyConstants.WEIGHT), a.number])
  };
  u.defaultProps = {
    copyable: false,
    delete: false,
    disabled: false,
    ellipsis: false,
    mark: false,
    underline: false,
    strong: false,
    link: false,
    type: "primary",
    heading: 1,
    style: {},
    className: ""
  };
  var typographyParagraphComponent = require("typography-paragraph-component") /*id: 576118*/;
  class h {
    constructor(e, t, n, i, r) {
      this.ruleMethods = {
        "bytes-decimal": e => {
          let t = 0;
          while (e >= 1000) {
            e /= 1000;
            t++;
          }
          return `${this.truncatePrecision(e)} ${["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t]}`;
        },
        "bytes-binary": e => {
          let t = 0;
          while (e >= 1024) {
            e /= 1024;
            t++;
          }
          return `${this.truncatePrecision(e)} ${["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"][t]}`;
        },
        percentages: e => `${this.truncatePrecision(e * 100)}%`,
        exponential: e => {
          let t = e.toExponential(this.precision + 2).split("e");
          return `${this.truncatePrecision(Number(t[0]))}e${t[1]}`;
        }
      };
      this.truncateMethods = {
        ceil: Math.ceil,
        floor: Math.floor,
        round: Math.round
      };
      this.isDiyParser = r !== undefined;
      this.content = e;
      this.rule = t;
      this.precision = n;
      this.truncate = i;
      this.parser = r;
    }
    format() {
      if (this.isDiyParser) {
        return this.parser(this.content);
      } else if (this.rule === "text") {
        return m(this.content).map(e => f(e) ? this.truncatePrecision(e) : e).join("");
      } else if (this.rule === "numbers") {
        return m(this.content).filter(e => f(e)).map(e => this.truncatePrecision(e)).join(",");
      } else {
        return m(this.content).map(e => f(e) ? this.ruleMethods[this.rule](Number(e)) : e).join("");
      }
    }
    truncatePrecision(e) {
      let t = this.truncateMethods[this.truncate](Number(e) * Math.pow(10, this.precision)) / Math.pow(10, this.precision);
      let n = t.toString().split(".");
      if (n.length === 1) {
        return t.toFixed(this.precision);
      }
      let i = n[1].length;
      if (i < this.precision) {
        return `${n[0]}.${n[1]}${"0".repeat(this.precision - i)}`;
      } else {
        return t.toString();
      }
    }
  }
  function m(e) {
    return e.match(/(-?[0-9]*\.?[0-9]+([eE]-?[0-9]+)?)|([^-\d\.]+)/g) || [];
  }
  function f(e) {
    return !isNaN(Number(e)) && e.replace(/\s+/g, "") !== "";
  }
  class g extends reactCoreLibraryReexport.PureComponent {
    formatNodeDFS(e) {
      if (!Array.isArray(e)) {
        e = [e];
      }
      if ((e = e.map(e => typeof e == "string" || typeof e == "number" ? new h(String(e), this.props.rule, this.props.precision, this.props.truncate, this.props.parser).format() : typeof e == "function" ? this.formatNodeDFS(e()) : typeof e == "object" && "children" in e.props ? Object.assign(Object.assign({}, e), {
        props: Object.assign(Object.assign({}, e.props), {
          children: this.formatNodeDFS(e.props.children)
        })
      }) : e)).length === 1) {
        return e[0];
      } else {
        return e;
      }
    }
    render() {
      let e = Object.assign({}, this.props);
      delete e.rule;
      delete e.parser;
      e.children = this.formatNodeDFS(this.props.children);
      return reactCoreLibraryReexport.createElement(typographyComponent.Typography, Object.assign({
        component: "span"
      }, e));
    }
  }
  g.propTypes = {
    rule: a.oneOf(typographyConstants.typographyConstants.RULE),
    precision: a.number,
    truncate: a.oneOf(typographyConstants.typographyConstants.TRUNCATE),
    parser: a.func,
    copyable: a.oneOfType([a.object, a.bool]),
    delete: a.bool,
    disabled: a.bool,
    icon: a.oneOfType([a.node, a.string]),
    mark: a.bool,
    underline: a.bool,
    link: a.oneOfType([a.object, a.bool]),
    strong: a.bool,
    type: a.oneOf(typographyConstants.typographyConstants.TYPE),
    size: a.oneOf(typographyConstants.typographyConstants.SIZE),
    style: a.object,
    className: a.string,
    code: a.bool,
    component: a.string
  };
  g.defaultProps = {
    rule: "text",
    precision: 0,
    truncate: "round",
    parser: undefined,
    copyable: false,
    delete: false,
    icon: "",
    mark: false,
    underline: false,
    strong: false,
    link: false,
    type: "primary",
    style: {},
    size: "normal",
    className: ""
  };
  let v = typographyWrapperComponent.TypographyWrapper;
  v.Text = typographyComponent_1.Typography;
  v.Title = u;
  v.Paragraph = typographyParagraphComponent.TypographyParagraph;
  v.Numeral = g;
  var b = v;
  require.d(exports, {
    TypographyWrapper: function () {
      return b;
    }
  });
}