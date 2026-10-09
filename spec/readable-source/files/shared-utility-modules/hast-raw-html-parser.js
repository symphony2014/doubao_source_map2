// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'parseRawHtml'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 979965
         */
module.exports = function (module, exports, require) {
  var r = {};
  var utilsDeepClone = require("utils-deep-clone") /*id: 693734*/;
  var webpackEmptyModuleStub = require("webpack-empty-module-stub") /*id: 927617*/;
  class i {
    constructor(e, a, t) {
      this.property = e;
      this.normal = a;
      if (t) {
        this.space = t;
      }
    }
  }
  function s(e, a) {
    let t = {};
    let r = {};
    let n = -1;
    while (++n < e.length) {
      Object.assign(t, e[n].property);
      Object.assign(r, e[n].normal);
    }
    return new i(t, r, a);
  }
  function l(e) {
    return e.toLowerCase();
  }
  i.prototype.property = {};
  i.prototype.normal = {};
  i.prototype.space = null;
  class c {
    constructor(e, a) {
      this.property = e;
      this.attribute = a;
    }
  }
  c.prototype.space = null;
  c.prototype.boolean = false;
  c.prototype.booleanish = false;
  c.prototype.overloadedBoolean = false;
  c.prototype.number = false;
  c.prototype.commaSeparated = false;
  c.prototype.spaceSeparated = false;
  c.prototype.commaOrSpaceSeparated = false;
  c.prototype.mustUseProperty = false;
  c.prototype.defined = false;
  let u = 0;
  let d = _();
  let p = _();
  let f = _();
  let g = _();
  let y = _();
  let h = _();
  let m = _();
  function _() {
    return 2 ** ++u;
  }
  let k = Object.keys(r);
  class b extends c {
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
        while (++u < k.length) {
          let e = k[u];
          s = this;
          l = k[u];
          if (c = (t & r[e]) === r[e]) {
            s[l] = c;
          }
        }
      }
    }
  }
  b.prototype.defined = true;
  let w = {}.hasOwnProperty;
  function v(e) {
    let a;
    let t = {};
    let r = {};
    for (a in e.properties) {
      if (w.call(e.properties, a)) {
        let n = e.properties[a];
        let o = new b(a, e.transform(e.attributes || {}, a), n, e.space);
        if (e.mustUseProperty && e.mustUseProperty.includes(a)) {
          o.mustUseProperty = true;
        }
        t[a] = o;
        r[l(a)] = a;
        r[l(o.attribute)] = a;
      }
    }
    return new i(t, r, e.space);
  }
  let z = v({
    space: "xlink",
    transform: (e, a) => "xlink:" + a.slice(5).toLowerCase(),
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });
  let E = v({
    space: "xml",
    transform: (e, a) => "xml:" + a.slice(3).toLowerCase(),
    properties: {
      xmlLang: null,
      xmlBase: null,
      xmlSpace: null
    }
  });
  function D(e, a) {
    if (a in e) {
      return e[a];
    } else {
      return a;
    }
  }
  function x(e, a) {
    return D(e, a.toLowerCase());
  }
  let A = v({
    space: "xmlns",
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    transform: x,
    properties: {
      xmlns: null,
      xmlnsXLink: null
    }
  });
  let C = v({
    transform: (e, a) => a === "role" ? a : "aria-" + a.slice(4).toLowerCase(),
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: p,
      ariaAutoComplete: null,
      ariaBusy: p,
      ariaChecked: p,
      ariaColCount: g,
      ariaColIndex: g,
      ariaColSpan: g,
      ariaControls: y,
      ariaCurrent: null,
      ariaDescribedBy: y,
      ariaDetails: null,
      ariaDisabled: p,
      ariaDropEffect: y,
      ariaErrorMessage: null,
      ariaExpanded: p,
      ariaFlowTo: y,
      ariaGrabbed: p,
      ariaHasPopup: null,
      ariaHidden: p,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: y,
      ariaLevel: g,
      ariaLive: null,
      ariaModal: p,
      ariaMultiLine: p,
      ariaMultiSelectable: p,
      ariaOrientation: null,
      ariaOwns: y,
      ariaPlaceholder: null,
      ariaPosInSet: g,
      ariaPressed: p,
      ariaReadOnly: p,
      ariaRelevant: null,
      ariaRequired: p,
      ariaRoleDescription: y,
      ariaRowCount: g,
      ariaRowIndex: g,
      ariaRowSpan: g,
      ariaSelected: p,
      ariaSetSize: g,
      ariaSort: null,
      ariaValueMax: g,
      ariaValueMin: g,
      ariaValueNow: g,
      ariaValueText: null,
      role: null
    }
  });
  let N = v({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: x,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: h,
      acceptCharset: y,
      accessKey: y,
      action: null,
      allow: null,
      allowFullScreen: d,
      allowPaymentRequest: d,
      allowUserMedia: d,
      alt: null,
      as: null,
      async: d,
      autoCapitalize: null,
      autoComplete: y,
      autoFocus: d,
      autoPlay: d,
      blocking: y,
      capture: null,
      charSet: null,
      checked: d,
      cite: null,
      className: y,
      cols: g,
      colSpan: null,
      content: null,
      contentEditable: p,
      controls: d,
      controlsList: y,
      coords: g | h,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: d,
      defer: d,
      dir: null,
      dirName: null,
      disabled: d,
      download: f,
      draggable: p,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: d,
      formTarget: null,
      headers: y,
      height: g,
      hidden: d,
      high: g,
      href: null,
      hrefLang: null,
      htmlFor: y,
      httpEquiv: y,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: d,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: d,
      itemId: null,
      itemProp: y,
      itemRef: y,
      itemScope: d,
      itemType: y,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: d,
      low: g,
      manifest: null,
      max: null,
      maxLength: g,
      media: null,
      method: null,
      min: null,
      minLength: g,
      multiple: d,
      muted: d,
      name: null,
      nonce: null,
      noModule: d,
      noValidate: d,
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
      open: d,
      optimum: g,
      pattern: null,
      ping: y,
      placeholder: null,
      playsInline: d,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: d,
      referrerPolicy: null,
      rel: y,
      required: d,
      reversed: d,
      rows: g,
      rowSpan: g,
      sandbox: y,
      scope: null,
      scoped: d,
      seamless: d,
      selected: d,
      shadowRootClonable: d,
      shadowRootDelegatesFocus: d,
      shadowRootMode: null,
      shape: null,
      size: g,
      sizes: null,
      slot: null,
      span: g,
      spellCheck: p,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: g,
      step: null,
      style: null,
      tabIndex: g,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: d,
      useMap: null,
      value: p,
      width: g,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: y,
      axis: null,
      background: null,
      bgColor: null,
      border: g,
      borderColor: null,
      bottomMargin: g,
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
      compact: d,
      declare: d,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: g,
      leftMargin: g,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: g,
      marginWidth: g,
      noResize: d,
      noHref: d,
      noShade: d,
      noWrap: d,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: g,
      rules: null,
      scheme: null,
      scrolling: p,
      standby: null,
      summary: null,
      text: null,
      topMargin: g,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: g,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: d,
      disableRemotePlayback: d,
      prefix: null,
      property: null,
      results: g,
      security: null,
      unselectable: null
    }
  });
  let F = v({
    space: "svg",
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
    transform: D,
    properties: {
      about: m,
      accentHeight: g,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: g,
      amplitude: g,
      arabicForm: null,
      ascent: g,
      attributeName: null,
      attributeType: null,
      azimuth: g,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: g,
      by: null,
      calcMode: null,
      capHeight: g,
      className: y,
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
      descent: g,
      diffuseConstant: g,
      direction: null,
      display: null,
      dur: null,
      divisor: g,
      dominantBaseline: null,
      download: d,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: g,
      enableBackground: null,
      end: null,
      event: null,
      exponent: g,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: g,
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
      g1: h,
      g2: h,
      glyphName: h,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: g,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: g,
      horizOriginX: g,
      horizOriginY: g,
      id: null,
      ideographic: g,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: g,
      k: g,
      k1: g,
      k2: g,
      k3: g,
      k4: g,
      kernelMatrix: m,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: g,
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
      mediaSize: g,
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
      overlinePosition: g,
      overlineThickness: g,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: g,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: y,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: g,
      pointsAtY: g,
      pointsAtZ: g,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: m,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: m,
      rev: m,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: m,
      requiredFeatures: m,
      requiredFonts: m,
      requiredFormats: m,
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
      specularConstant: g,
      specularExponent: g,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: g,
      strikethroughThickness: g,
      string: null,
      stroke: null,
      strokeDashArray: m,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: g,
      strokeOpacity: g,
      strokeWidth: null,
      style: null,
      surfaceScale: g,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: m,
      tabIndex: g,
      tableValues: null,
      target: null,
      targetX: g,
      targetY: g,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: m,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: g,
      underlineThickness: g,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: g,
      values: null,
      vAlphabetic: g,
      vMathematical: g,
      vectorEffect: null,
      vHanging: g,
      vIdeographic: g,
      version: null,
      vertAdvY: g,
      vertOriginX: g,
      vertOriginY: g,
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
      xHeight: g,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    }
  });
  let S = s([E, z, A, C, N], "html");
  let O = s([E, z, A, C, F], "svg");
  var csvStringUtils = require("csv-string-utils") /*id: 373920*/;
  let j = /[#.]/g;
  let T = /^data[-\w.:]+$/i;
  let B = /-[a-z]/g;
  let I = /[A-Z]/g;
  function R(e, a) {
    let t = l(a);
    let r = a;
    let n = c;
    if (t in e.normal) {
      return e.property[e.normal[t]];
    }
    if (t.length > 4 && t.slice(0, 4) === "data" && T.test(a)) {
      if (a.charAt(4) === "-") {
        let e = a.slice(5).replace(B, P);
        r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
      } else {
        let e = a.slice(4);
        if (!B.test(e)) {
          let t = e.replace(I, L);
          if (t.charAt(0) !== "-") {
            t = "-" + t;
          }
          a = "data" + t;
        }
      }
      n = b;
    }
    return new n(r, a);
  }
  function L(e) {
    return "-" + e.toLowerCase();
  }
  function P(e) {
    return e.charAt(1).toUpperCase();
  }
  var stringWhitespaceUtils = require("string-whitespace-utils") /*id: 594657*/;
  let U = {}.hasOwnProperty;
  function $(e, a, t) {
    let r = t && function (e) {
      let a = {};
      let t = -1;
      while (++t < e.length) {
        a[e[t].toLowerCase()] = e[t];
      }
      return a;
    }(t);
    return function (t, n, ...o) {
      let i;
      let s = -1;
      if (t == null) {
        i = {
          type: "root",
          children: []
        };
        o.unshift(n);
      } else {
        (i = function (e, a) {
          let t;
          let r;
          let n = e || "";
          let o = {};
          let i = 0;
          while (i < n.length) {
            j.lastIndex = i;
            let e = j.exec(n);
            let a = n.slice(i, e ? e.index : n.length);
            if (a) {
              if (t) {
                if (t === "#") {
                  o.id = a;
                } else if (Array.isArray(o.className)) {
                  o.className.push(a);
                } else {
                  o.className = [a];
                }
              } else {
                r = a;
              }
              i += a.length;
            }
            if (e) {
              t = e[0];
              i++;
            }
          }
          return {
            type: "element",
            tagName: r || a || "div",
            properties: o,
            children: []
          };
        }(t, a)).tagName = i.tagName.toLowerCase();
        if (r && U.call(r, i.tagName)) {
          i.tagName = r[i.tagName];
        }
        if (function (e) {
          if (e === null || typeof e != "object" || Array.isArray(e)) {
            return true;
          }
          if (typeof e.type != "string") {
            return false;
          }
          for (let a of Object.keys(e)) {
            let t = e[a];
            if (t && typeof t == "object") {
              if (!Array.isArray(t)) {
                return true;
              }
              for (let e of t) {
                if (typeof e != "number" && typeof e != "string") {
                  return true;
                }
              }
            }
          }
          return !!("children" in e) && !!Array.isArray(e.children);
        }(n)) {
          o.unshift(n);
        } else {
          let a;
          for (a in n) {
            if (U.call(n, a)) {
              (function (e, a, t, r) {
                let n;
                let o = R(e, t);
                let i = -1;
                if (r != null) {
                  if (typeof r == "number") {
                    if (Number.isNaN(r)) {
                      return;
                    }
                    n = r;
                  } else {
                    n = typeof r == "boolean" ? r : typeof r == "string" ? o.spaceSeparated ? stringWhitespaceUtils.splitString(r) : o.commaSeparated ? csvStringUtils.parseCsvString(r) : o.commaOrSpaceSeparated ? stringWhitespaceUtils.splitString(csvStringUtils.parseCsvString(r).join(" ")) : H(o, o.property, r) : Array.isArray(r) ? r.concat() : o.property === "style" ? function (e) {
                      let a;
                      let t = [];
                      for (a in e) {
                        if (U.call(e, a)) {
                          t.push([a, e[a]].join(": "));
                        }
                      }
                      return t.join("; ");
                    }(r) : String(r);
                  }
                  if (Array.isArray(n)) {
                    let e = [];
                    while (++i < n.length) {
                      let a = H(o, o.property, n[i]);
                      e[i] = a;
                    }
                    n = e;
                  }
                  if (o.property === "className" && Array.isArray(a.className)) {
                    let e = n;
                    n = a.className.concat(e);
                  }
                  a[o.property] = n;
                }
              })(e, i.properties, a, n[a]);
            }
          }
        }
      }
      while (++s < o.length) {
        (function e(a, t) {
          let r = -1;
          if (t == null) ;else if (typeof t == "string" || typeof t == "number") {
            a.push({
              type: "text",
              value: String(t)
            });
          } else if (Array.isArray(t)) {
            while (++r < t.length) {
              e(a, t[r]);
            }
          } else if (typeof t == "object" && "type" in t) {
            if (t.type === "root") {
              e(a, t.children);
            } else {
              a.push(t);
            }
          } else {
            throw Error("Expected node, nodes, or string, got `" + t + "`");
          }
        })(i.children, o[s]);
      }
      if (i.type === "element" && i.tagName === "template") {
        i.content = {
          type: "root",
          children: i.children
        };
        i.children = [];
      }
      return i;
    };
  }
  function H(e, a, t) {
    if (typeof t == "string") {
      if (e.number && t && !Number.isNaN(Number(t))) {
        return Number(t);
      }
      if ((e.boolean || e.overloadedBoolean) && (t === "" || l(t) === l(a))) {
        return true;
      }
    }
    return t;
  }
  let K = $(S, "div");
  let G = $(O, "g", ["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "solidColor", "textArea", "textPath"]);
  function Z(e, a) {
    let t = e.indexOf("\r", a);
    let r = e.indexOf("\n", a);
    if (r === -1) {
      return t;
    } else if (t === -1 || t + 1 === r) {
      return r;
    } else if (t < r) {
      return t;
    } else {
      return r;
    }
  }
  let W = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  let V = {}.hasOwnProperty;
  let X = Object.prototype;
  function Q(e, a) {
    let t;
    switch (a.nodeName) {
      case "#comment":
        t = {
          type: "comment",
          value: a.data
        };
        Y(e, a, t);
        return t;
      case "#document":
      case "#document-fragment":
        {
          let r = "mode" in a && (a.mode === "quirks" || a.mode === "limited-quirks");
          t = {
            type: "root",
            children: J(e, a.childNodes),
            data: {
              quirksMode: r
            }
          };
          if (e.file && e.location) {
            let a = String(e.file);
            let r = function (e) {
              let a = String(e);
              let t = [];
              return {
                toOffset: function (e) {
                  if (e && typeof e.line == "number" && typeof e.column == "number" && !Number.isNaN(e.line) && !Number.isNaN(e.column)) {
                    while (t.length < e.line) {
                      let e = t[t.length - 1];
                      let r = Z(a, e);
                      let n = r === -1 ? a.length + 1 : r + 1;
                      if (e === n) {
                        break;
                      }
                      t.push(n);
                    }
                    let r = (e.line > 1 ? t[e.line - 2] : 0) + e.column - 1;
                    if (r < t[e.line - 1]) {
                      return r;
                    }
                  }
                },
                toPoint: function (e) {
                  if (typeof e == "number" && e > -1 && e <= a.length) {
                    let r = 0;
                    while (true) {
                      let n = t[r];
                      if (n === undefined) {
                        let e = Z(a, t[r - 1]);
                        n = e === -1 ? a.length + 1 : e + 1;
                        t[r] = n;
                      }
                      if (n > e) {
                        return {
                          line: r + 1,
                          column: e - (r > 0 ? t[r - 1] : 0) + 1,
                          offset: e
                        };
                      }
                      r++;
                    }
                  }
                }
              };
            }(a);
            let n = r.toPoint(0);
            let i = r.toPoint(a.length);
            webpackEmptyModuleStub.okStub(n, "expected `start`");
            webpackEmptyModuleStub.okStub(i, "expected `end`");
            t.position = {
              start: n,
              end: i
            };
          }
          return t;
        }
      case "#documentType":
        Y(e, a, t = {
          type: "doctype"
        });
        return t;
      case "#text":
        t = {
          type: "text",
          value: a.value
        };
        Y(e, a, t);
        return t;
      default:
        return function (e, a) {
          let t = e.schema;
          e.schema = a.namespaceURI === W.svg ? O : S;
          let r = -1;
          let n = {};
          while (++r < a.attrs.length) {
            let e = a.attrs[r];
            let t = (e.prefix ? e.prefix + ":" : "") + e.name;
            if (!V.call(X, t)) {
              n[t] = e.value;
            }
          }
          let o = (e.schema.space === "svg" ? G : K)(a.tagName, n, J(e, a.childNodes));
          Y(e, a, o);
          if (o.tagName === "template") {
            let t = a.sourceCodeLocation;
            let r = t && t.startTag && ee(t.startTag);
            let n = t && t.endTag && ee(t.endTag);
            let i = Q(e, a.content);
            if (r && n && e.file) {
              i.position = {
                start: r.end,
                end: n.start
              };
            }
            o.content = i;
          }
          e.schema = t;
          return o;
        }(e, a);
    }
  }
  function J(e, a) {
    let t = -1;
    let r = [];
    while (++t < a.length) {
      let n = Q(e, a[t]);
      r.push(n);
    }
    return r;
  }
  function Y(e, a, t) {
    if ("sourceCodeLocation" in a && a.sourceCodeLocation && e.file) {
      let r = function (e, a, t) {
        let r = ee(t);
        if (a.type === "element") {
          let n = a.children[a.children.length - 1];
          if (r && !t.endTag && n && n.position && n.position.end) {
            r.end = Object.assign({}, n.position.end);
          }
          if (e.verbose) {
            let r;
            let n = {};
            if (t.attrs) {
              for (r in t.attrs) {
                if (V.call(t.attrs, r)) {
                  n[R(e.schema, r).property] = ee(t.attrs[r]);
                }
              }
            }
            webpackEmptyModuleStub.okStub(t.startTag, "a start tag should exist");
            let i = ee(t.startTag);
            let s = t.endTag ? ee(t.endTag) : undefined;
            let l = {
              opening: i
            };
            if (s) {
              l.closing = s;
            }
            l.properties = n;
            a.data = {
              position: l
            };
          }
        }
        return r;
      }(e, t, a.sourceCodeLocation);
      if (r) {
        e.location = true;
        t.position = r;
      }
    }
  }
  function ee(e) {
    let a = ea({
      line: e.startLine,
      column: e.startCol,
      offset: e.startOffset
    });
    let t = ea({
      line: e.endLine,
      column: e.endCol,
      offset: e.endOffset
    });
    if (a || t) {
      return {
        start: a,
        end: t
      };
    } else {
      return undefined;
    }
  }
  function ea(e) {
    if (e.line && e.column) {
      return e;
    } else {
      return undefined;
    }
  }
  var propertyHandlerDispatcher = require("property-handler-dispatcher") /*id: 719028*/;
  let er = {}.hasOwnProperty;
  let en = propertyHandlerDispatcher.createPropertyHandler("type", {
    handlers: {
      root: function (e, a) {
        let t = {
          nodeName: "#document",
          mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
          childNodes: []
        };
        t.childNodes = eo(e.children, t, a);
        ei(e, t);
        return t;
      },
      element: function (e, a) {
        let t;
        let r = a;
        if (e.type === "element" && e.tagName.toLowerCase() === "svg" && a.space === "html") {
          r = O;
        }
        let n = [];
        if (e.properties) {
          for (t in e.properties) {
            if (t !== "children" && er.call(e.properties, t)) {
              let a = function (e, a, t) {
                let r = R(e, a);
                if (t === false || t == null || typeof t == "number" && Number.isNaN(t) || !t && r.boolean) {
                  return;
                }
                if (Array.isArray(t)) {
                  t = r.commaSeparated ? csvStringUtils.joinCsvString(t) : stringWhitespaceUtils.joinString(t);
                }
                let n = {
                  name: r.attribute,
                  value: t === true ? "" : String(t)
                };
                if (r.space && r.space !== "html" && r.space !== "svg") {
                  let e = n.name.indexOf(":");
                  if (e < 0) {
                    n.prefix = "";
                  } else {
                    n.name = n.name.slice(e + 1);
                    n.prefix = r.attribute.slice(0, e);
                  }
                  n.namespace = W[r.space];
                }
                return n;
              }(r, t, e.properties[t]);
              if (a) {
                n.push(a);
              }
            }
          }
        }
        let i = r.space;
        webpackEmptyModuleStub.okStub(i);
        let s = {
          nodeName: e.tagName,
          tagName: e.tagName,
          attrs: n,
          namespaceURI: W[i],
          childNodes: [],
          parentNode: null
        };
        s.childNodes = eo(e.children, s, r);
        ei(e, s);
        if (e.tagName === "template" && e.content) {
          s.content = function (e, a) {
            let t = {
              nodeName: "#document-fragment",
              childNodes: []
            };
            t.childNodes = eo(e.children, t, a);
            ei(e, t);
            return t;
          }(e.content, r);
        }
        return s;
      },
      text: function (e) {
        let a = {
          nodeName: "#text",
          value: e.value,
          parentNode: null
        };
        ei(e, a);
        return a;
      },
      comment: function (e) {
        let a = {
          nodeName: "#comment",
          data: e.value,
          parentNode: null
        };
        ei(e, a);
        return a;
      },
      doctype: function (e) {
        let a = {
          nodeName: "#documentType",
          name: "html",
          publicId: "",
          systemId: "",
          parentNode: null
        };
        ei(e, a);
        return a;
      }
    }
  });
  function eo(e, a, t) {
    let r = -1;
    let n = [];
    if (e) {
      while (++r < e.length) {
        let o = en(e[r], t);
        o.parentNode = a;
        n.push(o);
      }
    }
    return n;
  }
  function ei(e, a) {
    let t = e.position;
    if (t && t.start && t.end) {
      webpackEmptyModuleStub.okStub(typeof t.start.offset == "number");
      webpackEmptyModuleStub.okStub(typeof t.end.offset == "number");
      a.sourceCodeLocation = {
        startLine: t.start.line,
        startCol: t.start.column,
        startOffset: t.start.offset,
        endLine: t.end.line,
        endCol: t.end.column,
        endOffset: t.end.offset
      };
    }
  }
  let es = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
  var htmlParserCore = require("html-parser-core") /*id: 948150*/;
  var positionUtils = require("position-utils") /*id: 142421*/;
  var eventTestTraversal = require("event-test-traversal") /*id: 494410*/;
  let ed = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi;
  let ep = new Set(["mdxFlowExpression", "mdxJsxFlowElement", "mdxJsxTextElement", "mdxTextExpression", "mdxjsEsm"]);
  let ef = {
    sourceCodeLocationInfo: true,
    scriptingEnabled: false
  };
  function eg(e, a) {
    let t = function (e) {
      let a = e.type === "root" ? e.children[0] : e;
      return !!a && (a.type === "doctype" || a.type === "element" && a.tagName.toLowerCase() === "html");
    }(e);
    let r = propertyHandlerDispatcher.createPropertyHandler("type", {
      handlers: {
        root: eh,
        element: em,
        text: e_,
        comment: eb,
        doctype: ek,
        raw: ew
      },
      unknown: ev
    });
    let n = {
      parser: t ? new htmlParserCore.Parser(ef) : htmlParserCore.Parser.getFragmentParser(undefined, ef),
      handle(e) {
        r(e, n);
      },
      stitches: false,
      options: a || {}
    };
    r(e, n);
    ez(n, positionUtils.getStartPosition());
    let o = function (e, a) {
      let t = a || {};
      return Q({
        file: t.file || undefined,
        location: false,
        schema: t.space === "svg" ? O : S,
        verbose: t.verbose || false
      }, e);
    }(t ? n.parser.document : n.parser.getFragment(), {
      file: n.options.file
    });
    if (n.stitches) {
      eventTestTraversal.traverseEventTests(o, "comment", function (e, a, t) {
        if (e.value.stitch && t && a !== undefined) {
          t.children[a] = e.value.stitch;
          return a;
        }
      });
    }
    if (o.type === "root" && o.children.length === 1 && o.children[0].type === e.type) {
      return o.children[0];
    } else {
      return o;
    }
  }
  function ey(e, a) {
    let t = -1;
    if (e) {
      while (++t < e.length) {
        a.handle(e[t]);
      }
    }
  }
  function eh(e, a) {
    ey(e.children, a);
  }
  function em(e, a) {
    (function (e, a) {
      let t = e.tagName.toLowerCase();
      if (a.parser.tokenizer.state === htmlParserCore.tokenizerStates.PLAINTEXT) {
        return;
      }
      ez(a, positionUtils.getStartPosition(e));
      let r = a.parser.openElements.current;
      let n = "namespaceURI" in r ? r.namespaceURI : W.html;
      if (n === W.html && t === "svg") {
        n = W.svg;
      }
      let o = en({
        ...e,
        children: []
      }, {
        space: n === W.svg ? "svg" : "html"
      }.space === "svg" ? O : S);
      let i = {
        type: htmlParserCore.tokenTypes.i.START_TAG,
        tagName: t,
        tagID: htmlParserCore.htmlConstants.getTagID(t),
        selfClosing: false,
        ackSelfClosing: false,
        attrs: "attrs" in o ? o.attrs : [],
        location: eD(e)
      };
      a.parser.currentToken = i;
      a.parser._processToken(a.parser.currentToken);
      a.parser.tokenizer.lastStartTagName = t;
    })(e, a);
    ey(e.children, a);
    (function (e, a) {
      let t = e.tagName.toLowerCase();
      if (!a.parser.tokenizer.inForeignNode && es.includes(t) || a.parser.tokenizer.state === htmlParserCore.tokenizerStates.PLAINTEXT) {
        return;
      }
      ez(a, positionUtils.getEndPosition(e));
      let r = {
        type: htmlParserCore.tokenTypes.i.END_TAG,
        tagName: t,
        tagID: htmlParserCore.htmlConstants.getTagID(t),
        selfClosing: false,
        ackSelfClosing: false,
        attrs: [],
        location: eD(e)
      };
      a.parser.currentToken = r;
      a.parser._processToken(a.parser.currentToken);
      if (t === a.parser.tokenizer.lastStartTagName && (a.parser.tokenizer.state === htmlParserCore.tokenizerStates.RCDATA || a.parser.tokenizer.state === htmlParserCore.tokenizerStates.RAWTEXT || a.parser.tokenizer.state === htmlParserCore.tokenizerStates.SCRIPT_DATA)) {
        a.parser.tokenizer.state = htmlParserCore.tokenizerStates.DATA;
      }
    })(e, a);
  }
  function e_(e, a) {
    if (a.parser.tokenizer.state > 4) {
      a.parser.tokenizer.state = 0;
    }
    let t = {
      type: htmlParserCore.tokenTypes.i.CHARACTER,
      chars: e.value,
      location: eD(e)
    };
    ez(a, positionUtils.getStartPosition(e));
    a.parser.currentToken = t;
    a.parser._processToken(a.parser.currentToken);
  }
  function ek(e, a) {
    let t = {
      type: htmlParserCore.tokenTypes.i.DOCTYPE,
      name: "html",
      forceQuirks: false,
      publicId: "",
      systemId: "",
      location: eD(e)
    };
    ez(a, positionUtils.getStartPosition(e));
    a.parser.currentToken = t;
    a.parser._processToken(a.parser.currentToken);
  }
  function eb(e, a) {
    let t = e.value;
    let r = {
      type: htmlParserCore.tokenTypes.i.COMMENT,
      data: t,
      location: eD(e)
    };
    ez(a, positionUtils.getStartPosition(e));
    a.parser.currentToken = r;
    a.parser._processToken(a.parser.currentToken);
  }
  function ew(e, a) {
    a.parser.tokenizer.preprocessor.html = "";
    a.parser.tokenizer.preprocessor.pos = -1;
    a.parser.tokenizer.preprocessor.lastGapPos = -2;
    a.parser.tokenizer.preprocessor.gapStack = [];
    a.parser.tokenizer.preprocessor.skipNextNewLine = false;
    a.parser.tokenizer.preprocessor.lastChunkWritten = false;
    a.parser.tokenizer.preprocessor.endOfChunkHit = false;
    a.parser.tokenizer.preprocessor.isEol = false;
    eE(a, positionUtils.getStartPosition(e));
    a.parser.tokenizer.write(a.options.tagfilter ? e.value.replace(ed, "&lt;$1$2") : e.value, false);
    a.parser.tokenizer._runParsingLoop();
    if (a.parser.tokenizer.state === 72 || a.parser.tokenizer.state === 78) {
      a.parser.tokenizer.preprocessor.lastChunkWritten = true;
      let e = a.parser.tokenizer._consume();
      a.parser.tokenizer._callState(e);
    }
  }
  function ev(e, a) {
    if (a.options.passThrough && a.options.passThrough.includes(e.type)) {
      (function (e, a) {
        var t;
        a.stitches = true;
        let r = "children" in (t = e) ? utilsDeepClone.deepClone({
          ...t,
          children: []
        }) : utilsDeepClone.deepClone(t);
        if ("children" in e && "children" in r) {
          let t = eg({
            type: "root",
            children: e.children
          }, a.options);
          r.children = t.children;
        }
        eb({
          type: "comment",
          value: {
            stitch: r
          }
        }, a);
      })(e, a);
    } else {
      let a = "";
      if (ep.has(e.type)) {
        a = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax";
      }
      throw Error("Cannot compile `" + e.type + "` node" + a);
    }
  }
  function ez(e, a) {
    eE(e, a);
    let t = e.parser.tokenizer.currentCharacterToken;
    if (t && t.location) {
      t.location.endLine = e.parser.tokenizer.preprocessor.line;
      t.location.endCol = e.parser.tokenizer.preprocessor.col + 1;
      t.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1;
      e.parser.currentToken = t;
      e.parser._processToken(e.parser.currentToken);
    }
    e.parser.tokenizer.paused = false;
    e.parser.tokenizer.inLoop = false;
    e.parser.tokenizer.active = false;
    e.parser.tokenizer.returnState = htmlParserCore.tokenizerStates.DATA;
    e.parser.tokenizer.charRefCode = -1;
    e.parser.tokenizer.consumedAfterSnapshot = -1;
    e.parser.tokenizer.currentLocation = null;
    e.parser.tokenizer.currentCharacterToken = null;
    e.parser.tokenizer.currentToken = null;
    e.parser.tokenizer.currentAttr = {
      name: "",
      value: ""
    };
  }
  function eE(e, a) {
    if (a && a.offset !== undefined) {
      let t = {
        startLine: a.line,
        startCol: a.column,
        startOffset: a.offset,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      };
      e.parser.tokenizer.preprocessor.lineStartPos = -a.column + 1;
      e.parser.tokenizer.preprocessor.droppedBufferSize = a.offset;
      e.parser.tokenizer.preprocessor.line = a.line;
      e.parser.tokenizer.currentLocation = t;
    }
  }
  function eD(e) {
    let a = positionUtils.getStartPosition(e) || {
      line: undefined,
      column: undefined,
      offset: undefined
    };
    let t = positionUtils.getEndPosition(e) || {
      line: undefined,
      column: undefined,
      offset: undefined
    };
    return {
      startLine: a.line,
      startCol: a.column,
      startOffset: a.offset,
      endLine: t.line,
      endCol: t.column,
      endOffset: t.offset
    };
  }
  function ex(e) {
    return function (a, t) {
      return eg(a, {
        ...e,
        file: t
      });
    };
  }
  require.d(exports, {
    parseRawHtml: function () {
      return ex;
    }
  });
  require.r(r);
  require.d(r, {
    boolean: function () {
      return d;
    },
    booleanish: function () {
      return p;
    },
    commaOrSpaceSeparated: function () {
      return m;
    },
    commaSeparated: function () {
      return h;
    },
    number: function () {
      return g;
    },
    overloadedBoolean: function () {
      return f;
    },
    spaceSeparated: function () {
      return y;
    }
  });
}