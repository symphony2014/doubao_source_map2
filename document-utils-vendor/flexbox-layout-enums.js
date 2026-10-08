// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 388917
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var o;
  var a;
  var s;
  var l;
  var u;
  var c;
  var h;
  var d;
  var f;
  var A;
  var g;
  var p;
  var m;
  var y;
  var v;
  var b;
  (n = {})[n.Auto = 0] = "Auto";
  n[n.FlexStart = 1] = "FlexStart";
  n[n.Center = 2] = "Center";
  n[n.FlexEnd = 3] = "FlexEnd";
  n[n.Stretch = 4] = "Stretch";
  n[n.Baseline = 5] = "Baseline";
  n[n.SpaceBetween = 6] = "SpaceBetween";
  n[n.SpaceAround = 7] = "SpaceAround";
  let w = n;
  (i = {})[i.Width = 0] = "Width";
  i[i.Height = 1] = "Height";
  let C = i;
  (o = {})[o.Inherit = 0] = "Inherit";
  o[o.LTR = 1] = "LTR";
  o[o.RTL = 2] = "RTL";
  let E = o;
  (a = {})[a.Flex = 0] = "Flex";
  a[a.None = 1] = "None";
  let I = a;
  (s = {})[s.Left = 0] = "Left";
  s[s.Top = 1] = "Top";
  s[s.Right = 2] = "Right";
  s[s.Bottom = 3] = "Bottom";
  s[s.Start = 4] = "Start";
  s[s.End = 5] = "End";
  s[s.Horizontal = 6] = "Horizontal";
  s[s.Vertical = 7] = "Vertical";
  s[s.All = 8] = "All";
  let B = s;
  (l = {})[l.None = 0] = "None";
  l[l.StretchFlexBasis = 1] = "StretchFlexBasis";
  l[l.All = 2147483647] = "All";
  l[l.Classic = 2147483646] = "Classic";
  let x = l;
  (u = {})[u.WebFlexBasis = 0] = "WebFlexBasis";
  u[u.AbsolutePercentageAgainstPaddingEdge = 1] = "AbsolutePercentageAgainstPaddingEdge";
  u[u.FixJNILocalRefOverflows = 2] = "FixJNILocalRefOverflows";
  let D = u;
  (c = {})[c.Column = 0] = "Column";
  c[c.ColumnReverse = 1] = "ColumnReverse";
  c[c.Row = 2] = "Row";
  c[c.RowReverse = 3] = "RowReverse";
  let S = c;
  (h = {})[h.Column = 0] = "Column";
  h[h.Row = 1] = "Row";
  h[h.All = 2] = "All";
  let k = h;
  (d = {})[d.FlexStart = 0] = "FlexStart";
  d[d.Center = 1] = "Center";
  d[d.FlexEnd = 2] = "FlexEnd";
  d[d.SpaceBetween = 3] = "SpaceBetween";
  d[d.SpaceAround = 4] = "SpaceAround";
  d[d.SpaceEvenly = 5] = "SpaceEvenly";
  let _ = d;
  (f = {})[f.Error = 0] = "Error";
  f[f.Warn = 1] = "Warn";
  f[f.Info = 2] = "Info";
  f[f.Debug = 3] = "Debug";
  f[f.Verbose = 4] = "Verbose";
  f[f.Fatal = 5] = "Fatal";
  let T = f;
  (A = {})[A.Undefined = 0] = "Undefined";
  A[A.Exactly = 1] = "Exactly";
  A[A.AtMost = 2] = "AtMost";
  let Q = A;
  (g = {})[g.Default = 0] = "Default";
  g[g.Text = 1] = "Text";
  let R = g;
  (p = {})[p.Visible = 0] = "Visible";
  p[p.Hidden = 1] = "Hidden";
  p[p.Scroll = 2] = "Scroll";
  let F = p;
  (m = {})[m.Static = 0] = "Static";
  m[m.Relative = 1] = "Relative";
  m[m.Absolute = 2] = "Absolute";
  let L = m;
  (y = {})[y.Layout = 1] = "Layout";
  y[y.Style = 2] = "Style";
  y[y.Children = 4] = "Children";
  let O = y;
  (v = {})[v.Undefined = 0] = "Undefined";
  v[v.Point = 1] = "Point";
  v[v.Percent = 2] = "Percent";
  v[v.Auto = 3] = "Auto";
  let N = v;
  (b = {})[b.NoWrap = 0] = "NoWrap";
  b[b.Wrap = 1] = "Wrap";
  b[b.WrapReverse = 2] = "WrapReverse";
  let M = b;
  let P = {
    ALIGN_AUTO: w.Auto,
    ALIGN_FLEX_START: w.FlexStart,
    ALIGN_CENTER: w.Center,
    ALIGN_FLEX_END: w.FlexEnd,
    ALIGN_STRETCH: w.Stretch,
    ALIGN_BASELINE: w.Baseline,
    ALIGN_SPACE_BETWEEN: w.SpaceBetween,
    ALIGN_SPACE_AROUND: w.SpaceAround,
    DIMENSION_WIDTH: C.Width,
    DIMENSION_HEIGHT: C.Height,
    DIRECTION_INHERIT: E.Inherit,
    DIRECTION_LTR: E.LTR,
    DIRECTION_RTL: E.RTL,
    DISPLAY_FLEX: I.Flex,
    DISPLAY_NONE: I.None,
    EDGE_LEFT: B.Left,
    EDGE_TOP: B.Top,
    EDGE_RIGHT: B.Right,
    EDGE_BOTTOM: B.Bottom,
    EDGE_START: B.Start,
    EDGE_END: B.End,
    EDGE_HORIZONTAL: B.Horizontal,
    EDGE_VERTICAL: B.Vertical,
    EDGE_ALL: B.All,
    ERRATA_NONE: x.None,
    ERRATA_STRETCH_FLEX_BASIS: x.StretchFlexBasis,
    ERRATA_ALL: x.All,
    ERRATA_CLASSIC: x.Classic,
    EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: D.WebFlexBasis,
    EXPERIMENTAL_FEATURE_ABSOLUTE_PERCENTAGE_AGAINST_PADDING_EDGE: D.AbsolutePercentageAgainstPaddingEdge,
    EXPERIMENTAL_FEATURE_FIX_JNILOCAL_REF_OVERFLOWS: D.FixJNILocalRefOverflows,
    FLEX_DIRECTION_COLUMN: S.Column,
    FLEX_DIRECTION_COLUMN_REVERSE: S.ColumnReverse,
    FLEX_DIRECTION_ROW: S.Row,
    FLEX_DIRECTION_ROW_REVERSE: S.RowReverse,
    GUTTER_COLUMN: k.Column,
    GUTTER_ROW: k.Row,
    GUTTER_ALL: k.All,
    JUSTIFY_FLEX_START: _.FlexStart,
    JUSTIFY_CENTER: _.Center,
    JUSTIFY_FLEX_END: _.FlexEnd,
    JUSTIFY_SPACE_BETWEEN: _.SpaceBetween,
    JUSTIFY_SPACE_AROUND: _.SpaceAround,
    JUSTIFY_SPACE_EVENLY: _.SpaceEvenly,
    LOG_LEVEL_ERROR: T.Error,
    LOG_LEVEL_WARN: T.Warn,
    LOG_LEVEL_INFO: T.Info,
    LOG_LEVEL_DEBUG: T.Debug,
    LOG_LEVEL_VERBOSE: T.Verbose,
    LOG_LEVEL_FATAL: T.Fatal,
    MEASURE_MODE_UNDEFINED: Q.Undefined,
    MEASURE_MODE_EXACTLY: Q.Exactly,
    MEASURE_MODE_AT_MOST: Q.AtMost,
    NODE_TYPE_DEFAULT: R.Default,
    NODE_TYPE_TEXT: R.Text,
    OVERFLOW_VISIBLE: F.Visible,
    OVERFLOW_HIDDEN: F.Hidden,
    OVERFLOW_SCROLL: F.Scroll,
    POSITION_TYPE_STATIC: L.Static,
    POSITION_TYPE_RELATIVE: L.Relative,
    POSITION_TYPE_ABSOLUTE: L.Absolute,
    PRINT_OPTIONS_LAYOUT: O.Layout,
    PRINT_OPTIONS_STYLE: O.Style,
    PRINT_OPTIONS_CHILDREN: O.Children,
    UNIT_UNDEFINED: N.Undefined,
    UNIT_POINT: N.Point,
    UNIT_PERCENT: N.Percent,
    UNIT_AUTO: N.Auto,
    WRAP_NO_WRAP: M.NoWrap,
    WRAP_WRAP: M.Wrap,
    WRAP_WRAP_REVERSE: M.WrapReverse
  };
  exports.default = P;
  require.r(exports);
  require.d(exports, {
    Align: function () {
      return w;
    },
    Dimension: function () {
      return C;
    },
    Direction: function () {
      return E;
    },
    Display: function () {
      return I;
    },
    Edge: function () {
      return B;
    },
    Errata: function () {
      return x;
    },
    ExperimentalFeature: function () {
      return D;
    },
    FlexDirection: function () {
      return S;
    },
    Gutter: function () {
      return k;
    },
    Justify: function () {
      return _;
    },
    LogLevel: function () {
      return T;
    },
    MeasureMode: function () {
      return Q;
    },
    NodeType: function () {
      return R;
    },
    Overflow: function () {
      return F;
    },
    PositionType: function () {
      return L;
    },
    PrintOptions: function () {
      return O;
    },
    Unit: function () {
      return N;
    },
    Wrap: function () {
      return M;
    }
  });
}