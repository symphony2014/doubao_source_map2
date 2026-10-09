// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UG' to 'reactMarkdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 620402
         */
module.exports = function (module, exports, require) {
  var r = {};
  var webpackEmptyModuleStub = require("webpack-empty-module-stub") /*id: 927617*/;
  var csvStringUtils = require("csv-string-utils") /*id: 373920*/;
  let i = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
  let s = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
  let l = {};
  function c(e, a) {
    return ((a || l).jsx ? s : i).test(e);
  }
  let u = /[ \t\n\f\r]/g;
  function d(e) {
    return e.replace(u, "") === "";
  }
  class p {
    constructor(e, a, t) {
      this.normal = a;
      this.property = e;
      if (t) {
        this.space = t;
      }
    }
  }
  function f(e, a) {
    let t = {};
    let r = {};
    for (let a of e) {
      Object.assign(t, a.property);
      Object.assign(r, a.normal);
    }
    return new p(t, r, a);
  }
  function g(e) {
    return e.toLowerCase();
  }
  p.prototype.normal = {};
  p.prototype.property = {};
  p.prototype.space = undefined;
  class y {
    constructor(e, a) {
      this.attribute = a;
      this.property = e;
    }
  }
  y.prototype.attribute = "";
  y.prototype.booleanish = false;
  y.prototype.boolean = false;
  y.prototype.commaOrSpaceSeparated = false;
  y.prototype.commaSeparated = false;
  y.prototype.defined = false;
  y.prototype.mustUseProperty = false;
  y.prototype.number = false;
  y.prototype.overloadedBoolean = false;
  y.prototype.property = "";
  y.prototype.spaceSeparated = false;
  y.prototype.space = undefined;
  let h = 0;
  let m = E();
  let _ = E();
  let k = E();
  let b = E();
  let w = E();
  let v = E();
  let z = E();
  function E() {
    return 2 ** ++h;
  }
  let D = Object.keys(r);
  class x extends y {
    constructor(e, a, t, n) {
      var o;
      var i;
      var s;
      var l;
      var c;
      let u = -1;
      super(e, a);
      o = this;
      if (i = n) {
        o.space = i;
      }
      if (typeof t == "number") {
        while (++u < D.length) {
          let e = D[u];
          s = this;
          l = D[u];
          if (c = (t & r[e]) === r[e]) {
            s[l] = c;
          }
        }
      }
    }
  }
  function A(e) {
    let a = {};
    let t = {};
    for (let [r, n] of Object.entries(e.properties)) {
      let o = new x(r, e.transform(e.attributes || {}, r), n, e.space);
      if (e.mustUseProperty && e.mustUseProperty.includes(r)) {
        o.mustUseProperty = true;
      }
      a[r] = o;
      t[g(r)] = r;
      t[g(o.attribute)] = r;
    }
    return new p(a, t, e.space);
  }
  x.prototype.defined = true;
  let C = A({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: _,
      ariaAutoComplete: null,
      ariaBusy: _,
      ariaChecked: _,
      ariaColCount: b,
      ariaColIndex: b,
      ariaColSpan: b,
      ariaControls: w,
      ariaCurrent: null,
      ariaDescribedBy: w,
      ariaDetails: null,
      ariaDisabled: _,
      ariaDropEffect: w,
      ariaErrorMessage: null,
      ariaExpanded: _,
      ariaFlowTo: w,
      ariaGrabbed: _,
      ariaHasPopup: null,
      ariaHidden: _,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: w,
      ariaLevel: b,
      ariaLive: null,
      ariaModal: _,
      ariaMultiLine: _,
      ariaMultiSelectable: _,
      ariaOrientation: null,
      ariaOwns: w,
      ariaPlaceholder: null,
      ariaPosInSet: b,
      ariaPressed: _,
      ariaReadOnly: _,
      ariaRelevant: null,
      ariaRequired: _,
      ariaRoleDescription: w,
      ariaRowCount: b,
      ariaRowIndex: b,
      ariaRowSpan: b,
      ariaSelected: _,
      ariaSetSize: b,
      ariaSort: null,
      ariaValueMax: b,
      ariaValueMin: b,
      ariaValueNow: b,
      ariaValueText: null,
      role: null
    },
    transform: (e, a) => a === "role" ? a : "aria-" + a.slice(4).toLowerCase()
  });
  function N(e, a) {
    if (a in e) {
      return e[a];
    } else {
      return a;
    }
  }
  function F(e, a) {
    return N(e, a.toLowerCase());
  }
  let S = A({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: v,
      acceptCharset: w,
      accessKey: w,
      action: null,
      allow: null,
      allowFullScreen: m,
      allowPaymentRequest: m,
      allowUserMedia: m,
      alt: null,
      as: null,
      async: m,
      autoCapitalize: null,
      autoComplete: w,
      autoFocus: m,
      autoPlay: m,
      blocking: w,
      capture: null,
      charSet: null,
      checked: m,
      cite: null,
      className: w,
      cols: b,
      colSpan: null,
      content: null,
      contentEditable: _,
      controls: m,
      controlsList: w,
      coords: b | v,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: m,
      defer: m,
      dir: null,
      dirName: null,
      disabled: m,
      download: k,
      draggable: _,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: m,
      formTarget: null,
      headers: w,
      height: b,
      hidden: k,
      high: b,
      href: null,
      hrefLang: null,
      htmlFor: w,
      httpEquiv: w,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: m,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: m,
      itemId: null,
      itemProp: w,
      itemRef: w,
      itemScope: m,
      itemType: w,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: m,
      low: b,
      manifest: null,
      max: null,
      maxLength: b,
      media: null,
      method: null,
      min: null,
      minLength: b,
      multiple: m,
      muted: m,
      name: null,
      nonce: null,
      noModule: m,
      noValidate: m,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: m,
      optimum: b,
      pattern: null,
      ping: w,
      placeholder: null,
      playsInline: m,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: m,
      referrerPolicy: null,
      rel: w,
      required: m,
      reversed: m,
      rows: b,
      rowSpan: b,
      sandbox: w,
      scope: null,
      scoped: m,
      seamless: m,
      selected: m,
      shadowRootClonable: m,
      shadowRootDelegatesFocus: m,
      shadowRootMode: null,
      shape: null,
      size: b,
      sizes: null,
      slot: null,
      span: b,
      spellCheck: _,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: b,
      step: null,
      style: null,
      tabIndex: b,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: m,
      useMap: null,
      value: _,
      width: b,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: w,
      axis: null,
      background: null,
      bgColor: null,
      border: b,
      borderColor: null,
      bottomMargin: b,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: m,
      declare: m,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: b,
      leftMargin: b,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: b,
      marginWidth: b,
      noResize: m,
      noHref: m,
      noShade: m,
      noWrap: m,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: b,
      rules: null,
      scheme: null,
      scrolling: _,
      standby: null,
      summary: null,
      text: null,
      topMargin: b,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: b,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: m,
      disableRemotePlayback: m,
      prefix: null,
      property: null,
      results: b,
      security: null,
      unselectable: null
    },
    space: "html",
    transform: F
  });
  let O = A({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin"
    },
    properties: {
      about: z,
      accentHeight: b,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: b,
      amplitude: b,
      arabicForm: null,
      ascent: b,
      attributeName: null,
      attributeType: null,
      azimuth: b,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: b,
      by: null,
      calcMode: null,
      capHeight: b,
      className: w,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: b,
      diffuseConstant: b,
      direction: null,
      display: null,
      dur: null,
      divisor: b,
      dominantBaseline: null,
      download: m,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: b,
      enableBackground: null,
      end: null,
      event: null,
      exponent: b,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: b,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: v,
      g2: v,
      glyphName: v,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: b,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: b,
      horizOriginX: b,
      horizOriginY: b,
      id: null,
      ideographic: b,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: b,
      k: b,
      k1: b,
      k2: b,
      k3: b,
      k4: b,
      kernelMatrix: z,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: b,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: b,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: b,
      overlineThickness: b,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: b,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: w,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: b,
      pointsAtY: b,
      pointsAtZ: b,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: z,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: z,
      rev: z,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: z,
      requiredFeatures: z,
      requiredFonts: z,
      requiredFormats: z,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: b,
      specularExponent: b,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: b,
      strikethroughThickness: b,
      string: null,
      stroke: null,
      strokeDashArray: z,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: b,
      strokeOpacity: b,
      strokeWidth: null,
      style: null,
      surfaceScale: b,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: z,
      tabIndex: b,
      tableValues: null,
      target: null,
      targetX: b,
      targetY: b,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: z,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: b,
      underlineThickness: b,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: b,
      values: null,
      vAlphabetic: b,
      vMathematical: b,
      vectorEffect: null,
      vHanging: b,
      vIdeographic: b,
      version: null,
      vertAdvY: b,
      vertOriginX: b,
      vertOriginY: b,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: b,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: "svg",
    transform: N
  });
  let M = A({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    },
    space: "xlink",
    transform: (e, a) => "xlink:" + a.slice(5).toLowerCase()
  });
  let j = A({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: F
  });
  let T = A({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform: (e, a) => "xml:" + a.slice(3).toLowerCase()
  });
  let B = f([C, S, M, j, T], "html");
  let I = f([C, O, M, j, T], "svg");
  let R = /[A-Z]/g;
  let L = /-[a-z]/g;
  let P = /^data[-\w.:]+$/i;
  function q(e) {
    return "-" + e.toLowerCase();
  }
  function U(e) {
    return e.charAt(1).toUpperCase();
  }
  let $ = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink"
  };
  var stringWhitespaceUtils = require("string-whitespace-utils") /*id: 594657*/;
  var parseCssDeclarationsToObject = require("parse-css-declarations-to-object") /*id: 649506*/;
  var positionUtils = require("position-utils") /*id: 142421*/;
  var sourceLocationError = require("source-location-error") /*id: 643059*/;
  let W = {}.hasOwnProperty;
  let V = new Map();
  let X = /[A-Z]/g;
  let Q = new Set(["table", "tbody", "thead", "tfoot", "tr"]);
  let J = new Set(["td", "th"]);
  let Y = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function ee(e, a, t) {
    var r;
    if (a.type === "element") {
      return function (e, a, t) {
        let r = e.schema;
        let n = r;
        if (a.tagName.toLowerCase() === "svg" && r.space === "html") {
          n = I;
          e.schema = n;
        }
        e.ancestors.push(a);
        let i = en(e, a.tagName, false);
        let s = function (e, a) {
          let t;
          let r;
          let n = {};
          for (r in a.properties) {
            if (r !== "children" && W.call(a.properties, r)) {
              let i = function (e, a, t) {
                let r = function (e, a) {
                  let t = g(a);
                  let r = a;
                  let n = y;
                  if (t in e.normal) {
                    return e.property[e.normal[t]];
                  }
                  if (t.length > 4 && t.slice(0, 4) === "data" && P.test(a)) {
                    if (a.charAt(4) === "-") {
                      let e = a.slice(5).replace(L, U);
                      r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
                    } else {
                      let e = a.slice(4);
                      if (!L.test(e)) {
                        let t = e.replace(R, q);
                        if (t.charAt(0) !== "-") {
                          t = "-" + t;
                        }
                        a = "data" + t;
                      }
                    }
                    n = x;
                  }
                  return new n(r, a);
                }(e.schema, a);
                if (t != null && (typeof t != "number" || !Number.isNaN(t))) {
                  if (Array.isArray(t)) {
                    t = r.commaSeparated ? csvStringUtils.joinCsvString(t) : stringWhitespaceUtils.joinString(t);
                  }
                  if (r.property === "style") {
                    let a = typeof t == "object" ? t : function (e, a) {
                      try {
                        return parseCssDeclarationsToObject(a, {
                          reactCompat: true
                        });
                      } catch (t) {
                        if (e.ignoreInvalidStyle) {
                          return {};
                        }
                        let a = new sourceLocationError.SourceLocationError("Cannot parse `style` attribute", {
                          ancestors: e.ancestors,
                          cause: t,
                          ruleId: "style",
                          source: "hast-util-to-jsx-runtime"
                        });
                        a.file = e.filePath || undefined;
                        a.url = Y + "#cannot-parse-style-attribute";
                        throw a;
                      }
                    }(e, String(t));
                    if (e.stylePropertyNameCase === "css") {
                      a = function (e) {
                        let a;
                        let t = {};
                        for (a in e) {
                          if (W.call(e, a)) {
                            t[function (e) {
                              let a = e.replace(X, ei);
                              if (a.slice(0, 3) === "ms-") {
                                a = "-" + a;
                              }
                              return a;
                            }(a)] = e[a];
                          }
                        }
                        return t;
                      }(a);
                    }
                    return ["style", a];
                  }
                  return [e.elementAttributeNameCase === "react" && r.space ? $[r.property] || r.property : r.attribute, t];
                }
              }(e, r, a.properties[r]);
              if (i) {
                let [r, o] = i;
                if (e.tableCellAlignToStyle && r === "align" && typeof o == "string" && J.has(a.tagName)) {
                  t = o;
                } else {
                  n[r] = o;
                }
              }
            }
          }
          if (t) {
            (n.style ||= {})[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = t;
          }
          return n;
        }(e, a);
        let l = er(e, a);
        if (Q.has(a.tagName)) {
          l = l.filter(function (e) {
            return typeof e != "string" || !(typeof e == "object" ? e.type === "text" && d(e.value) : d(e));
          });
        }
        ea(e, s, i, a);
        et(s, l);
        e.ancestors.pop();
        e.schema = r;
        return e.create(a, i, s, t);
      }(e, a, t);
    } else if (a.type === "mdxFlowExpression" || a.type === "mdxTextExpression") {
      return function (e, a) {
        if (a.data && a.data.estree && e.evaluater) {
          let t = a.data.estree.body[0];
          webpackEmptyModuleStub.okStub(t.type === "ExpressionStatement");
          return e.evaluater.evaluateExpression(t.expression);
        }
        eo(e, a.position);
      }(e, a);
    } else if (a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement") {
      return function (e, a, t) {
        let r = e.schema;
        let o = r;
        if (a.name === "svg" && r.space === "html") {
          o = I;
          e.schema = o;
        }
        e.ancestors.push(a);
        let i = a.name === null ? e.Fragment : en(e, a.name, true);
        let s = function (e, a) {
          let t = {};
          for (let r of a.attributes) {
            if (r.type === "mdxJsxExpressionAttribute") {
              if (r.data && r.data.estree && e.evaluater) {
                let a = r.data.estree.body[0];
                webpackEmptyModuleStub.okStub(a.type === "ExpressionStatement");
                let o = a.expression;
                webpackEmptyModuleStub.okStub(o.type === "ObjectExpression");
                let i = o.properties[0];
                webpackEmptyModuleStub.okStub(i.type === "SpreadElement");
                Object.assign(t, e.evaluater.evaluateExpression(i.argument));
              } else {
                eo(e, a.position);
              }
            } else {
              let o;
              let i = r.name;
              if (r.value && typeof r.value == "object") {
                if (r.value.data && r.value.data.estree && e.evaluater) {
                  let a = r.value.data.estree.body[0];
                  webpackEmptyModuleStub.okStub(a.type === "ExpressionStatement");
                  o = e.evaluater.evaluateExpression(a.expression);
                } else {
                  eo(e, a.position);
                }
              } else {
                o = r.value === null || r.value;
              }
              t[i] = o;
            }
          }
          return t;
        }(e, a);
        let l = er(e, a);
        ea(e, s, i, a);
        et(s, l);
        e.ancestors.pop();
        e.schema = r;
        return e.create(a, i, s, t);
      }(e, a, t);
    } else if (a.type === "mdxjsEsm") {
      return function (e, a) {
        if (a.data && a.data.estree && e.evaluater) {
          return e.evaluater.evaluateProgram(a.data.estree);
        }
        eo(e, a.position);
      }(e, a);
    } else if (a.type === "root") {
      return function (e, a, t) {
        let r = {};
        et(r, er(e, a));
        return e.create(a, e.Fragment, r, t);
      }(e, a, t);
    } else if (a.type === "text") {
      r = 0;
      return a.value;
    } else {
      return undefined;
    }
  }
  function ea(e, a, t, r) {
    if (typeof t != "string" && t !== e.Fragment && e.passNode) {
      a.node = r;
    }
  }
  function et(e, a) {
    if (a.length > 0) {
      let t = a.length > 1 ? a : a[0];
      if (t) {
        e.children = t;
      }
    }
  }
  function er(e, a) {
    let t = [];
    let r = -1;
    let n = e.passKeys ? new Map() : V;
    while (++r < a.children.length) {
      let o;
      let i = a.children[r];
      if (e.passKeys) {
        let e = i.type === "element" ? i.tagName : i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement" ? i.name : undefined;
        if (e) {
          let a = n.get(e) || 0;
          o = e + "-" + a;
          n.set(e, a + 1);
        }
      }
      let s = ee(e, i, o);
      if (s !== undefined) {
        t.push(s);
      }
    }
    return t;
  }
  function en(e, a, t) {
    let r;
    if (t) {
      if (a.includes(".")) {
        let e;
        let t = a.split(".");
        let o = -1;
        while (++o < t.length) {
          let a = c(t[o]) ? {
            type: "Identifier",
            name: t[o]
          } : {
            type: "Literal",
            value: t[o]
          };
          e = e ? {
            type: "MemberExpression",
            object: e,
            property: a,
            computed: !!o && a.type === "Literal",
            optional: false
          } : a;
        }
        webpackEmptyModuleStub.okStub(e, "always a result");
        r = e;
      } else {
        r = c(a) && !/^[a-z]/.test(a) ? {
          type: "Identifier",
          name: a
        } : {
          type: "Literal",
          value: a
        };
      }
    } else {
      r = {
        type: "Literal",
        value: a
      };
    }
    if (r.type === "Literal") {
      let a = r.value;
      if (W.call(e.components, a)) {
        return e.components[a];
      } else {
        return a;
      }
    }
    if (e.evaluater) {
      return e.evaluater.evaluateExpression(r);
    }
    eo(e);
  }
  function eo(e, a) {
    let t = new sourceLocationError.SourceLocationError("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: e.ancestors,
      place: a,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    t.file = e.filePath || undefined;
    t.url = Y + "#cannot-handle-mdx-estrees-without-createevaluater";
    throw t;
  }
  function ei(e) {
    return "-" + e.toLowerCase();
  }
  let es = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var markdownParserSetup = require("markdown-parser-setup") /*id: 159982*/;
  var utilsDeepClone = require("utils-deep-clone") /*id: 693734*/;
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  function ep(e) {
    let a = [];
    let t = -1;
    let r = 0;
    let n = 0;
    while (++t < e.length) {
      let o = e.charCodeAt(t);
      let i = "";
      if (o === 37 && charClassificationUtils.isAlphaNumeric(e.charCodeAt(t + 1)) && charClassificationUtils.isAlphaNumeric(e.charCodeAt(t + 2))) {
        n = 2;
      } else if (o < 128) {
        if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))) {
          i = String.fromCharCode(o);
        }
      } else if (o > 55295 && o < 57344) {
        let a = e.charCodeAt(t + 1);
        if (o < 56320 && a > 56319 && a < 57344) {
          i = String.fromCharCode(o, a);
          n = 1;
        } else {
          i = "�";
        }
      } else {
        i = String.fromCharCode(o);
      }
      if (i) {
        a.push(e.slice(r, t), encodeURIComponent(i));
        r = t + n + 1;
        i = "";
      }
      if (n) {
        t += n;
        n = 0;
      }
    }
    return a.join("") + e.slice(r);
  }
  function ef(e, a) {
    let t = [{
      type: "text",
      value: "↩"
    }];
    if (a > 1) {
      t.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{
          type: "text",
          value: String(a)
        }]
      });
    }
    return t;
  }
  function eg(e, a) {
    return "Back to reference " + (e + 1) + (a > 1 ? "-" + a : "");
  }
  var eventTestTraversal = require("event-test-traversal") /*id: 494410*/;
  function eh(e, a) {
    let t = a.referenceType;
    let r = "]";
    if (t === "collapsed") {
      r += "[]";
    } else if (t === "full") {
      r += "[" + (a.label || a.identifier) + "]";
    }
    if (a.type === "imageReference") {
      return [{
        type: "text",
        value: "![" + a.alt + r
      }];
    }
    let n = e.all(a);
    let o = n[0];
    if (o && o.type === "text") {
      o.value = "[" + o.value;
    } else {
      n.unshift({
        type: "text",
        value: "["
      });
    }
    let i = n[n.length - 1];
    if (i && i.type === "text") {
      i.value += r;
    } else {
      n.push({
        type: "text",
        value: r
      });
    }
    return n;
  }
  function em(e) {
    let a = e.spread;
    if (a == null) {
      return e.children.length > 1;
    } else {
      return a;
    }
  }
  function e_(e, a, t) {
    let r = 0;
    let n = e.length;
    if (a) {
      let a = e.codePointAt(r);
      while (a === 9 || a === 32) {
        r++;
        a = e.codePointAt(r);
      }
    }
    if (t) {
      let a = e.codePointAt(n - 1);
      while (a === 9 || a === 32) {
        n--;
        a = e.codePointAt(n - 1);
      }
    }
    if (n > r) {
      return e.slice(r, n);
    } else {
      return "";
    }
  }
  let ek = {
    blockquote: function (e, a) {
      let t = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: e.wrap(e.all(a), true)
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    break: function (e, a) {
      let t = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
      };
      e.patch(a, t);
      return [e.applyData(a, t), {
        type: "text",
        value: "\n"
      }];
    },
    code: function (e, a) {
      let t = a.value ? a.value + "\n" : "";
      let r = {};
      if (a.lang) {
        r.className = ["language-" + a.lang];
      }
      let n = {
        type: "element",
        tagName: "code",
        properties: r,
        children: [{
          type: "text",
          value: t
        }]
      };
      if (a.meta) {
        n.data = {
          meta: a.meta
        };
      }
      e.patch(a, n);
      n = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [n = e.applyData(a, n)]
      };
      e.patch(a, n);
      return n;
    },
    delete: function (e, a) {
      let t = {
        type: "element",
        tagName: "del",
        properties: {},
        children: e.all(a)
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    emphasis: function (e, a) {
      let t = {
        type: "element",
        tagName: "em",
        properties: {},
        children: e.all(a)
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    footnoteReference: function (e, a) {
      let t;
      let r = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-";
      let n = String(a.identifier).toUpperCase();
      let o = ep(n.toLowerCase());
      let i = e.footnoteOrder.indexOf(n);
      let s = e.footnoteCounts.get(n);
      if (s === undefined) {
        s = 0;
        e.footnoteOrder.push(n);
        t = e.footnoteOrder.length;
      } else {
        t = i + 1;
      }
      s += 1;
      e.footnoteCounts.set(n, s);
      let l = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + r + "fn-" + o,
          id: r + "fnref-" + o + (s > 1 ? "-" + s : ""),
          dataFootnoteRef: true,
          ariaDescribedBy: ["footnote-label"]
        },
        children: [{
          type: "text",
          value: String(t)
        }]
      };
      e.patch(a, l);
      let c = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [l]
      };
      e.patch(a, c);
      return e.applyData(a, c);
    },
    heading: function (e, a) {
      let t = {
        type: "element",
        tagName: "h" + a.depth,
        properties: {},
        children: e.all(a)
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    html: function (e, a) {
      if (e.options.allowDangerousHtml) {
        let t = {
          type: "raw",
          value: a.value
        };
        e.patch(a, t);
        return e.applyData(a, t);
      }
    },
    imageReference: function (e, a) {
      let t = String(a.identifier).toUpperCase();
      let r = e.definitionById.get(t);
      if (!r) {
        return eh(e, a);
      }
      let n = {
        src: ep(r.url || ""),
        alt: a.alt
      };
      if (r.title !== null && r.title !== undefined) {
        n.title = r.title;
      }
      let o = {
        type: "element",
        tagName: "img",
        properties: n,
        children: []
      };
      e.patch(a, o);
      return e.applyData(a, o);
    },
    image: function (e, a) {
      let t = {
        src: ep(a.url)
      };
      if (a.alt !== null && a.alt !== undefined) {
        t.alt = a.alt;
      }
      if (a.title !== null && a.title !== undefined) {
        t.title = a.title;
      }
      let r = {
        type: "element",
        tagName: "img",
        properties: t,
        children: []
      };
      e.patch(a, r);
      return e.applyData(a, r);
    },
    inlineCode: function (e, a) {
      let t = {
        type: "text",
        value: a.value.replace(/\r?\n|\r/g, " ")
      };
      e.patch(a, t);
      let r = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [t]
      };
      e.patch(a, r);
      return e.applyData(a, r);
    },
    linkReference: function (e, a) {
      let t = String(a.identifier).toUpperCase();
      let r = e.definitionById.get(t);
      if (!r) {
        return eh(e, a);
      }
      let n = {
        href: ep(r.url || "")
      };
      if (r.title !== null && r.title !== undefined) {
        n.title = r.title;
      }
      let o = {
        type: "element",
        tagName: "a",
        properties: n,
        children: e.all(a)
      };
      e.patch(a, o);
      return e.applyData(a, o);
    },
    link: function (e, a) {
      let t = {
        href: ep(a.url)
      };
      if (a.title !== null && a.title !== undefined) {
        t.title = a.title;
      }
      let r = {
        type: "element",
        tagName: "a",
        properties: t,
        children: e.all(a)
      };
      e.patch(a, r);
      return e.applyData(a, r);
    },
    listItem: function (e, a, t) {
      let r = e.all(a);
      let n = t ? function (e) {
        let a = false;
        if (e.type === "list") {
          a = e.spread || false;
          let t = e.children;
          let r = -1;
          while (!a && ++r < t.length) {
            a = em(t[r]);
          }
        }
        return a;
      }(t) : em(a);
      let o = {};
      let i = [];
      if (typeof a.checked == "boolean") {
        let e;
        let t = r[0];
        if (t && t.type === "element" && t.tagName === "p") {
          e = t;
        } else {
          e = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
          };
          r.unshift(e);
        }
        if (e.children.length > 0) {
          e.children.unshift({
            type: "text",
            value: " "
          });
        }
        e.children.unshift({
          type: "element",
          tagName: "input",
          properties: {
            type: "checkbox",
            checked: a.checked,
            disabled: true
          },
          children: []
        });
        o.className = ["task-list-item"];
      }
      let s = -1;
      while (++s < r.length) {
        let e = r[s];
        if (n || s !== 0 || e.type !== "element" || e.tagName !== "p") {
          i.push({
            type: "text",
            value: "\n"
          });
        }
        if (e.type !== "element" || e.tagName !== "p" || n) {
          i.push(e);
        } else {
          i.push(...e.children);
        }
      }
      let l = r[r.length - 1];
      if (l && (n || l.type !== "element" || l.tagName !== "p")) {
        i.push({
          type: "text",
          value: "\n"
        });
      }
      let c = {
        type: "element",
        tagName: "li",
        properties: o,
        children: i
      };
      e.patch(a, c);
      return e.applyData(a, c);
    },
    list: function (e, a) {
      let t = {};
      let r = e.all(a);
      let n = -1;
      for (typeof a.start == "number" && a.start !== 1 && (t.start = a.start); ++n < r.length;) {
        let e = r[n];
        if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
          t.className = ["contains-task-list"];
          break;
        }
      }
      let o = {
        type: "element",
        tagName: a.ordered ? "ol" : "ul",
        properties: t,
        children: e.wrap(r, true)
      };
      e.patch(a, o);
      return e.applyData(a, o);
    },
    paragraph: function (e, a) {
      let t = {
        type: "element",
        tagName: "p",
        properties: {},
        children: e.all(a)
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    root: function (e, a) {
      let t = {
        type: "root",
        children: e.wrap(e.all(a))
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    strong: function (e, a) {
      let t = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: e.all(a)
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    table: function (e, a) {
      let t = e.all(a);
      let r = t.shift();
      let n = [];
      if (r) {
        let t = {
          type: "element",
          tagName: "thead",
          properties: {},
          children: e.wrap([r], true)
        };
        e.patch(a.children[0], t);
        n.push(t);
      }
      if (t.length > 0) {
        let r = {
          type: "element",
          tagName: "tbody",
          properties: {},
          children: e.wrap(t, true)
        };
        let o = positionUtils.getStartPosition(a.children[1]);
        let i = positionUtils.getEndPosition(a.children[a.children.length - 1]);
        if (o && i) {
          r.position = {
            start: o,
            end: i
          };
        }
        n.push(r);
      }
      let o = {
        type: "element",
        tagName: "table",
        properties: {},
        children: e.wrap(n, true)
      };
      e.patch(a, o);
      return e.applyData(a, o);
    },
    tableCell: function (e, a) {
      let t = {
        type: "element",
        tagName: "td",
        properties: {},
        children: e.all(a)
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    tableRow: function (e, a, t) {
      let r = t ? t.children : undefined;
      let n = (r ? r.indexOf(a) : 1) === 0 ? "th" : "td";
      let o = t && t.type === "table" ? t.align : undefined;
      let i = o ? o.length : a.children.length;
      let s = -1;
      let l = [];
      while (++s < i) {
        let t = a.children[s];
        let r = {};
        let i = o ? o[s] : undefined;
        if (i) {
          r.align = i;
        }
        let c = {
          type: "element",
          tagName: n,
          properties: r,
          children: []
        };
        if (t) {
          c.children = e.all(t);
          e.patch(t, c);
          c = e.applyData(t, c);
        }
        l.push(c);
      }
      let c = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: e.wrap(l, true)
      };
      e.patch(a, c);
      return e.applyData(a, c);
    },
    text: function (e, a) {
      let t = {
        type: "text",
        value: function (e) {
          let a = String(e);
          let t = /\r?\n|\r/g;
          let r = t.exec(a);
          let n = 0;
          let o = [];
          while (r) {
            o.push(e_(a.slice(n, r.index), n > 0, true), r[0]);
            n = r.index + r[0].length;
            r = t.exec(a);
          }
          o.push(e_(a.slice(n), n > 0, false));
          return o.join("");
        }(String(a.value))
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    thematicBreak: function (e, a) {
      let t = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
      };
      e.patch(a, t);
      return e.applyData(a, t);
    },
    toml: eb,
    yaml: eb,
    definition: eb,
    footnoteDefinition: eb
  };
  function eb() {}
  let ew = {}.hasOwnProperty;
  let ev = {};
  function ez(e, a) {
    if (e.position) {
      a.position = positionUtils.getPositionRange(e);
    }
  }
  function eE(e, a) {
    let t = a;
    if (e && e.data) {
      let a = e.data.hName;
      let r = e.data.hChildren;
      let n = e.data.hProperties;
      if (typeof a == "string") {
        if (t.type === "element") {
          t.tagName = a;
        } else {
          t = {
            type: "element",
            tagName: a,
            properties: {},
            children: "children" in t ? t.children : [t]
          };
        }
      }
      if (t.type === "element" && n) {
        Object.assign(t.properties, utilsDeepClone.deepClone(n));
      }
      if ("children" in t && t.children && r != null) {
        t.children = r;
      }
    }
    return t;
  }
  function eD(e, a) {
    let t = [];
    let r = -1;
    for (a && t.push({
      type: "text",
      value: "\n"
    }); ++r < e.length;) {
      if (r) {
        t.push({
          type: "text",
          value: "\n"
        });
      }
      t.push(e[r]);
    }
    if (a && e.length > 0) {
      t.push({
        type: "text",
        value: "\n"
      });
    }
    return t;
  }
  function ex(e) {
    let a = 0;
    let t = e.charCodeAt(a);
    while (t === 9 || t === 32) {
      a++;
      t = e.charCodeAt(a);
    }
    return e.slice(a);
  }
  function eA(e, a) {
    let t = function (e, a) {
      let t = a || ev;
      let r = new Map();
      let n = new Map();
      let o = {
        all: function (e) {
          let a = [];
          if ("children" in e) {
            let t = e.children;
            let r = -1;
            while (++r < t.length) {
              let n = o.one(t[r], e);
              if (n) {
                if (r && t[r - 1].type === "break" && (Array.isArray(n) || n.type !== "text" || (n.value = ex(n.value)), !Array.isArray(n) && n.type === "element")) {
                  let e = n.children[0];
                  if (e && e.type === "text") {
                    e.value = ex(e.value);
                  }
                }
                if (Array.isArray(n)) {
                  a.push(...n);
                } else {
                  a.push(n);
                }
              }
            }
          }
          return a;
        },
        applyData: eE,
        definitionById: r,
        footnoteById: n,
        footnoteCounts: new Map(),
        footnoteOrder: [],
        handlers: {
          ...ek,
          ...t.handlers
        },
        one: function (e, a) {
          let t = e.type;
          let r = o.handlers[t];
          if (ew.call(o.handlers, t) && r) {
            return r(o, e, a);
          }
          if (o.options.passThrough && o.options.passThrough.includes(t)) {
            if ("children" in e) {
              let {
                children: a,
                ...t
              } = e;
              let r = utilsDeepClone.deepClone(t);
              r.children = o.all(e);
              return r;
            }
            return utilsDeepClone.deepClone(e);
          }
          return (o.options.unknownHandler || function (e, a) {
            let t = a.data || {};
            let r = "value" in a && !ew.call(t, "hProperties") && !ew.call(t, "hChildren") ? {
              type: "text",
              value: a.value
            } : {
              type: "element",
              tagName: "div",
              properties: {},
              children: e.all(a)
            };
            e.patch(a, r);
            return e.applyData(a, r);
          })(o, e, a);
        },
        options: t,
        patch: ez,
        wrap: eD
      };
      eventTestTraversal.traverseEventTests(e, function (e) {
        if (e.type === "definition" || e.type === "footnoteDefinition") {
          let a = e.type === "definition" ? r : n;
          let t = String(e.identifier).toUpperCase();
          if (!a.has(t)) {
            a.set(t, e);
          }
        }
      });
      return o;
    }(e, a);
    let r = t.one(e, undefined);
    let o = function (e) {
      let a = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-";
      let t = e.options.footnoteBackContent || ef;
      let r = e.options.footnoteBackLabel || eg;
      let n = e.options.footnoteLabel || "Footnotes";
      let o = e.options.footnoteLabelTagName || "h2";
      let i = e.options.footnoteLabelProperties || {
        className: ["sr-only"]
      };
      let s = [];
      let l = -1;
      while (++l < e.footnoteOrder.length) {
        let n = e.footnoteById.get(e.footnoteOrder[l]);
        if (!n) {
          continue;
        }
        let o = e.all(n);
        let i = String(n.identifier).toUpperCase();
        let c = ep(i.toLowerCase());
        let u = 0;
        let d = [];
        let p = e.footnoteCounts.get(i);
        while (p !== undefined && ++u <= p) {
          if (d.length > 0) {
            d.push({
              type: "text",
              value: " "
            });
          }
          let e = typeof t == "string" ? t : t(l, u);
          if (typeof e == "string") {
            e = {
              type: "text",
              value: e
            };
          }
          d.push({
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + a + "fnref-" + c + (u > 1 ? "-" + u : ""),
              dataFootnoteBackref: "",
              ariaLabel: typeof r == "string" ? r : r(l, u),
              className: ["data-footnote-backref"]
            },
            children: Array.isArray(e) ? e : [e]
          });
        }
        let f = o[o.length - 1];
        if (f && f.type === "element" && f.tagName === "p") {
          let e = f.children[f.children.length - 1];
          if (e && e.type === "text") {
            e.value += " ";
          } else {
            f.children.push({
              type: "text",
              value: " "
            });
          }
          f.children.push(...d);
        } else {
          o.push(...d);
        }
        let g = {
          type: "element",
          tagName: "li",
          properties: {
            id: a + "fn-" + c
          },
          children: e.wrap(o, true)
        };
        e.patch(n, g);
        s.push(g);
      }
      if (s.length !== 0) {
        return {
          type: "element",
          tagName: "section",
          properties: {
            dataFootnotes: true,
            className: ["footnotes"]
          },
          children: [{
            type: "element",
            tagName: o,
            properties: {
              ...utilsDeepClone.deepClone(i),
              id: "footnote-label"
            },
            children: [{
              type: "text",
              value: n
            }]
          }, {
            type: "text",
            value: "\n"
          }, {
            type: "element",
            tagName: "ol",
            properties: {},
            children: e.wrap(s, true)
          }, {
            type: "text",
            value: "\n"
          }]
        };
      }
    }(t);
    let i = Array.isArray(r) ? {
      type: "root",
      children: r
    } : r || {
      type: "root",
      children: []
    };
    if (o) {
      webpackEmptyModuleStub.okStub("children" in i);
      i.children.push({
        type: "text",
        value: "\n"
      }, o);
    }
    return i;
  }
  function eC(e, a) {
    if (e && "run" in e) {
      return async function (t, r) {
        let n = eA(t, {
          file: r,
          ...a
        });
        await e.run(n, r);
      };
    } else {
      return function (t, r) {
        return eA(t, {
          file: r,
          ...(e || a)
        });
      };
    }
  }
  var unifiedProcessorCore = require("unified-processor-core") /*id: 302429*/;
  var virtualFile = require("virtual-file") /*id: 579776*/;
  let eS = [];
  let eO = {
    allowDangerousHtml: true
  };
  let eM = /^(https?|ircs?|mailto|xmpp)$/i;
  let ej = [{
    from: "astPlugins",
    id: "remove-buggy-html-in-markdown-parser"
  }, {
    from: "allowDangerousHtml",
    id: "remove-buggy-html-in-markdown-parser"
  }, {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  }, {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  }, {
    from: "className",
    id: "remove-classname"
  }, {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  }, {
    from: "escapeHtml",
    id: "remove-buggy-html-in-markdown-parser"
  }, {
    from: "includeElementIndex",
    id: "#remove-includeelementindex"
  }, {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }, {
    from: "linkTarget",
    id: "remove-linktarget"
  }, {
    from: "plugins",
    id: "change-plugins-to-remarkplugins",
    to: "remarkPlugins"
  }, {
    from: "rawSourcePos",
    id: "#remove-rawsourcepos"
  }, {
    from: "renderers",
    id: "change-renderers-to-components",
    to: "components"
  }, {
    from: "source",
    id: "change-source-to-children",
    to: "children"
  }, {
    from: "sourcePos",
    id: "#remove-sourcepos"
  }, {
    from: "transformImageUri",
    id: "#add-urltransform",
    to: "urlTransform"
  }, {
    from: "transformLinkUri",
    id: "#add-urltransform",
    to: "urlTransform"
  }];
  function eT(e) {
    let a = function (e) {
      let a = e.rehypePlugins || eS;
      let t = e.remarkPlugins || eS;
      let r = e.remarkRehypeOptions ? {
        ...e.remarkRehypeOptions,
        ...eO
      } : eO;
      return unifiedProcessorCore.baseProcessor().use(markdownParserSetup.setupMarkdownParser).use(t).use(eC, r).use(a);
    }(e);
    let t = function (e) {
      let a = e.children || "";
      let t = new virtualFile.VFile();
      if (typeof a == "string") {
        t.value = a;
      } else {
        webpackEmptyModuleStub.t1Stub("Unexpected value `" + a + "` for `children` prop, expected `string`");
      }
      return t;
    }(e);
    return function (e, a) {
      let t = a.allowedElements;
      let r = a.allowElement;
      let o = a.components;
      let i = a.disallowedElements;
      let s = a.skipHtml;
      let l = a.unwrapDisallowed;
      let c = a.urlTransform || eB;
      for (let e of ej) {
        if (Object.hasOwn(a, e.from)) {
          webpackEmptyModuleStub.t1Stub("Unexpected `" + e.from + "` prop, " + (e.to ? "use `" + e.to + "` instead" : "remove it") + " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" + e.id + "> for more info)");
        }
      }
      if (t && i) {
        webpackEmptyModuleStub.t1Stub("Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other");
      }
      eventTestTraversal.traverseEventTests(e, function (e, a, n) {
        if (e.type === "raw" && n && typeof a == "number") {
          if (s) {
            n.children.splice(a, 1);
          } else {
            n.children[a] = {
              type: "text",
              value: e.value
            };
          }
          return a;
        }
        if (e.type === "element") {
          let a;
          for (a in es) {
            if (Object.hasOwn(es, a) && Object.hasOwn(e.properties, a)) {
              let t = e.properties[a];
              let r = es[a];
              if (r === null || r.includes(e.tagName)) {
                e.properties[a] = c(String(t || ""), a, e);
              }
            }
          }
        }
        if (e.type === "element") {
          let o = t ? !t.includes(e.tagName) : !!i && i.includes(e.tagName);
          if (!o && r && typeof a == "number") {
            o = !r(e, a, n);
          }
          if (o && n && typeof a == "number") {
            if (l && e.children) {
              n.children.splice(a, 1, ...e.children);
            } else {
              n.children.splice(a, 1);
            }
            return a;
          }
        }
      });
      return function (e, a) {
        var t;
        var r;
        var n;
        var o;
        var i;
        let s;
        if (!a || a.Fragment === undefined) {
          throw TypeError("Expected `Fragment` in options");
        }
        let l = a.filePath || undefined;
        if (a.development) {
          if (typeof a.jsxDEV != "function") {
            throw TypeError("Expected `jsxDEV` in options when `development: true`");
          }
          t = l;
          r = a.jsxDEV;
          s = function (e, a, n, o) {
            let i = Array.isArray(n.children);
            let s = positionUtils.getStartPosition(e);
            return r(a, n, o, i, {
              columnNumber: s ? s.column - 1 : undefined,
              fileName: t,
              lineNumber: s ? s.line : undefined
            }, undefined);
          };
        } else {
          if (typeof a.jsx != "function") {
            throw TypeError("Expected `jsx` in production options");
          }
          if (typeof a.jsxs != "function") {
            throw TypeError("Expected `jsxs` in production options");
          }
          n = 0;
          o = a.jsx;
          i = a.jsxs;
          s = function (e, a, t, r) {
            let n = Array.isArray(t.children) ? i : o;
            if (r) {
              return n(a, t, r);
            } else {
              return n(a, t);
            }
          };
        }
        let c = {
          Fragment: a.Fragment,
          ancestors: [],
          components: a.components || {},
          create: s,
          elementAttributeNameCase: a.elementAttributeNameCase || "react",
          evaluater: a.createEvaluater ? a.createEvaluater() : undefined,
          filePath: l,
          ignoreInvalidStyle: a.ignoreInvalidStyle || false,
          passKeys: a.passKeys !== false,
          passNode: a.passNode || false,
          schema: a.space === "svg" ? I : B,
          stylePropertyNameCase: a.stylePropertyNameCase || "dom",
          tableCellAlignToStyle: a.tableCellAlignToStyle !== false
        };
        let u = ee(c, e, undefined);
        if (u && typeof u != "string") {
          return u;
        } else {
          return c.create(e, c.Fragment, {
            children: u || undefined
          }, undefined);
        }
      }(e, {
        Fragment: reactJsxRuntimeCoreReexport.Fragment,
        components: o,
        ignoreInvalidStyle: true,
        jsx: reactJsxRuntimeCoreReexport.jsx,
        jsxs: reactJsxRuntimeCoreReexport.jsxs,
        passKeys: true,
        passNode: true
      });
    }(a.runSync(a.parse(t), t), e);
  }
  function eB(e) {
    let a = e.indexOf(":");
    let t = e.indexOf("?");
    let r = e.indexOf("#");
    let n = e.indexOf("/");
    if (a === -1 || n !== -1 && a > n || t !== -1 && a > t || r !== -1 && a > r || eM.test(e.slice(0, a))) {
      return e;
    } else {
      return "";
    }
  }
  require.d(exports, {
    reactMarkdown: function () {
      return eT;
    }
  });
  require.r(r);
  require.d(r, {
    boolean: function () {
      return m;
    },
    booleanish: function () {
      return _;
    },
    commaOrSpaceSeparated: function () {
      return z;
    },
    commaSeparated: function () {
      return v;
    },
    number: function () {
      return b;
    },
    overloadedBoolean: function () {
      return k;
    },
    spaceSeparated: function () {
      return w;
    }
  });
}