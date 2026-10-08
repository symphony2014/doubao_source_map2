// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'process' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// - Resolved require(989572) to 'buffer-polyfill-impl'
// - Resolved require(862547) to 'new-pdf-scroll-view_3'
// - Resolved require(716047) to 'new-pdf-scroll-view_1'
// - Renamed variable 'e' to 'emptyModulePlaceholder'
// - Resolved require(545827) to 'empty-module-placeholder'
// - Renamed variable 'r' to 'newPdfScrollView'
// - Resolved require(425421) to 'new-pdf-scroll-view'
// - Renamed variable 'r' to 'newPdfScrollView_2'
// - Resolved require(731178) to 'new-pdf-scroll-view_2'
// - Renamed variable 't' to 'newPdfScrollView'
// - Resolved require(425421) to 'new-pdf-scroll-view'
// - Renamed variable 't' to 'newPdfScrollView_2'
// - Resolved require(731178) to 'new-pdf-scroll-view_2'
// - Renamed variable 'r' to 'newPdfScrollView_3'
// - Resolved require(862547) to 'new-pdf-scroll-view_3'
// - Renamed variable 'n' to 'newPdfScrollView_3'
// - Resolved require(862547) to 'new-pdf-scroll-view_3'
// - Resolved require(999076) to 'new-pdf-scroll-view_5'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 74172
         */
module.exports = function (module, exports, require) {
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  var Buffer = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  (function (t, e) {
    module.exports = t.pdfjsLib = e();
  })(globalThis, () => (() => {
    "use strict";

    var __webpack_modules__ = [, (t, e) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.VerbosityLevel = e.Util = e.UnknownErrorException = e.UnexpectedResponseException = e.TextRenderingMode = e.RenderingIntentFlag = e.PromiseCapability = e.PermissionFlag = e.PasswordResponses = e.PasswordException = e.PageActionEventType = e.OPS = e.MissingPDFException = e.MAX_IMAGE_SIZE_TO_CACHE = e.LINE_FACTOR = e.LINE_DESCENT_FACTOR = e.InvalidPDFException = e.ImageKind = e.IDENTITY_MATRIX = e.FormatError = e.FeatureTest = e.FONT_IDENTITY_MATRIX = e.DocumentActionEventType = e.CMapCompressionType = e.BaseException = e.BASELINE_FACTOR = e.AnnotationType = e.AnnotationReplyType = e.AnnotationPrefix = e.AnnotationMode = e.AnnotationFlag = e.AnnotationFieldFlag = e.AnnotationEditorType = e.AnnotationEditorPrefix = e.AnnotationEditorParamsType = e.AnnotationBorderStyleType = e.AnnotationActionEventType = e.AbortException = undefined;
      e.assert = L;
      e.bytesToString = K;
      e.createValidAbsoluteUrl = B;
      e.getModificationDate = th;
      e.getUuid = tp;
      e.getVerbosityLevel = M;
      e.info = O;
      e.isArrayBuffer = ta;
      e.isArrayEqual = tl;
      e.isNodeJS = undefined;
      e.normalizeUnicode = tf;
      e.objectFromMap = J;
      e.objectSize = Y;
      e.setVerbosityLevel = R;
      e.shadow = j;
      e.string32 = Z;
      e.stringToBytes = X;
      e.stringToPDFString = tn;
      e.stringToUTF8String = to;
      e.unreachable = I;
      e.utf8StringToString = ts;
      e.warn = D;
      let r = typeof processBrowserShim == "object" && processBrowserShim + "" == "[object process]" && !processBrowserShim.versions.nw && (!processBrowserShim.versions.electron || !processBrowserShim.type || processBrowserShim.type === "browser");
      e.isNodeJS = r;
      let i = [1, 0, 0, 1, 0, 0];
      e.IDENTITY_MATRIX = i;
      let n = [0.001, 0, 0, 0.001, 0, 0];
      e.FONT_IDENTITY_MATRIX = n;
      let o = 10000000;
      e.MAX_IMAGE_SIZE_TO_CACHE = o;
      let s = 1.35;
      e.LINE_FACTOR = s;
      let a = 0.35;
      e.LINE_DESCENT_FACTOR = a;
      let l = a / s;
      e.BASELINE_FACTOR = l;
      let h = {
        ANY: 1,
        DISPLAY: 2,
        PRINT: 4,
        SAVE: 8,
        ANNOTATIONS_FORMS: 16,
        ANNOTATIONS_STORAGE: 32,
        ANNOTATIONS_DISABLE: 64,
        OPLIST: 256
      };
      e.RenderingIntentFlag = h;
      let c = {
        DISABLE: 0,
        ENABLE: 1,
        ENABLE_FORMS: 2,
        ENABLE_STORAGE: 3
      };
      e.AnnotationMode = c;
      let u = "pdfjs_internal_editor_";
      e.AnnotationEditorPrefix = u;
      let d = {
        DISABLE: -1,
        NONE: 0,
        FREETEXT: 3,
        STAMP: 13,
        INK: 15
      };
      e.AnnotationEditorType = d;
      let f = {
        RESIZE: 1,
        CREATE: 2,
        FREETEXT_SIZE: 11,
        FREETEXT_COLOR: 12,
        FREETEXT_OPACITY: 13,
        INK_COLOR: 21,
        INK_THICKNESS: 22,
        INK_OPACITY: 23
      };
      e.AnnotationEditorParamsType = f;
      let p = {
        PRINT: 4,
        MODIFY_CONTENTS: 8,
        COPY: 16,
        MODIFY_ANNOTATIONS: 32,
        FILL_INTERACTIVE_FORMS: 256,
        COPY_FOR_ACCESSIBILITY: 512,
        ASSEMBLE: 1024,
        PRINT_HIGH_QUALITY: 2048
      };
      e.PermissionFlag = p;
      let g = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_ADD_TO_PATH: 4,
        STROKE_ADD_TO_PATH: 5,
        FILL_STROKE_ADD_TO_PATH: 6,
        ADD_TO_PATH: 7,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4
      };
      e.TextRenderingMode = g;
      let m = {
        GRAYSCALE_1BPP: 1,
        RGB_24BPP: 2,
        RGBA_32BPP: 3
      };
      e.ImageKind = m;
      let v = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26
      };
      e.AnnotationType = v;
      let y = {
        GROUP: "Group",
        REPLY: "R"
      };
      e.AnnotationReplyType = y;
      let b = {
        INVISIBLE: 1,
        HIDDEN: 2,
        PRINT: 4,
        NOZOOM: 8,
        NOROTATE: 16,
        NOVIEW: 32,
        READONLY: 64,
        LOCKED: 128,
        TOGGLENOVIEW: 256,
        LOCKEDCONTENTS: 512
      };
      e.AnnotationFlag = b;
      let A = {
        READONLY: 1,
        REQUIRED: 2,
        NOEXPORT: 4,
        MULTILINE: 4096,
        PASSWORD: 8192,
        NOTOGGLETOOFF: 16384,
        RADIO: 32768,
        PUSHBUTTON: 65536,
        COMBO: 131072,
        EDIT: 262144,
        SORT: 524288,
        FILESELECT: 1048576,
        MULTISELECT: 2097152,
        DONOTSPELLCHECK: 4194304,
        DONOTSCROLL: 8388608,
        COMB: 16777216,
        RICHTEXT: 33554432,
        RADIOSINUNISON: 33554432,
        COMMITONSELCHANGE: 67108864
      };
      e.AnnotationFieldFlag = A;
      let S = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5
      };
      e.AnnotationBorderStyleType = S;
      let x = {
        E: "Mouse Enter",
        X: "Mouse Exit",
        D: "Mouse Down",
        U: "Mouse Up",
        Fo: "Focus",
        Bl: "Blur",
        PO: "PageOpen",
        PC: "PageClose",
        PV: "PageVisible",
        PI: "PageInvisible",
        K: "Keystroke",
        F: "Format",
        V: "Validate",
        C: "Calculate"
      };
      e.AnnotationActionEventType = x;
      let w = {
        WC: "WillClose",
        WS: "WillSave",
        DS: "DidSave",
        WP: "WillPrint",
        DP: "DidPrint"
      };
      e.DocumentActionEventType = w;
      let C = {
        O: "PageOpen",
        C: "PageClose"
      };
      e.PageActionEventType = C;
      let T = {
        ERRORS: 0,
        WARNINGS: 1,
        INFOS: 5
      };
      e.VerbosityLevel = T;
      let E = {
        NONE: 0,
        BINARY: 1
      };
      e.CMapCompressionType = E;
      let F = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91
      };
      e.OPS = F;
      let k = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2
      };
      e.PasswordResponses = k;
      let P = T.WARNINGS;
      function R(t) {
        if (Number.isInteger(t)) {
          P = t;
        }
      }
      function M() {
        return P;
      }
      function O(t) {
        T.INFOS;
      }
      function D(t) {
        T.WARNINGS;
      }
      function I(t) {
        throw Error(t);
      }
      function L(t, e) {
        if (!t) {
          I(e);
        }
      }
      function N(t) {
        switch (t?.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "mailto:":
          case "tel:":
            return true;
          default:
            return false;
        }
      }
      function B(t, e = null, r = null) {
        if (!t) {
          return null;
        }
        try {
          if (r && typeof t == "string") {
            if (r.addDefaultProtocol && t.startsWith("www.")) {
              let e = t.match(/\./g);
              if (e?.length >= 2) {
                t = `http://${t}`;
              }
            }
            if (r.tryConvertEncoding) {
              try {
                t = to(t);
              } catch {}
            }
          }
          let i = e ? new URL(t, e) : new URL(t);
          if (N(i)) {
            return i;
          }
        } catch {}
        return null;
      }
      function j(t, e, r, i = false) {
        Object.defineProperty(t, e, {
          value: r,
          enumerable: !i,
          configurable: true,
          writable: false
        });
        return r;
      }
      let _ = function () {
        function t(e, r) {
          if (this.constructor === t) {
            I("Cannot initialize BaseException.");
          }
          this.message = e;
          this.name = r;
        }
        t.prototype = Error();
        t.constructor = t;
        return t;
      }();
      e.BaseException = _;
      class U extends _ {
        constructor(t, e) {
          super(t, "PasswordException");
          this.code = e;
        }
      }
      e.PasswordException = U;
      class z extends _ {
        constructor(t, e) {
          super(t, "UnknownErrorException");
          this.details = e;
        }
      }
      e.UnknownErrorException = z;
      class V extends _ {
        constructor(t) {
          super(t, "InvalidPDFException");
        }
      }
      e.InvalidPDFException = V;
      class W extends _ {
        constructor(t) {
          super(t, "MissingPDFException");
        }
      }
      e.MissingPDFException = W;
      class G extends _ {
        constructor(t, e) {
          super(t, "UnexpectedResponseException");
          this.status = e;
        }
      }
      e.UnexpectedResponseException = G;
      class q extends _ {
        constructor(t) {
          super(t, "FormatError");
        }
      }
      e.FormatError = q;
      class H extends _ {
        constructor(t) {
          super(t, "AbortException");
        }
      }
      function K(t) {
        if (typeof t != "object" || t?.length === undefined) {
          I("Invalid argument for bytesToString");
        }
        let e = t.length;
        let r = 8192;
        if (e < 8192) {
          return String.fromCharCode.apply(null, t);
        }
        let i = [];
        for (let n = 0; n < e; n += r) {
          let o = Math.min(n + r, e);
          let s = t.subarray(n, o);
          i.push(String.fromCharCode.apply(null, s));
        }
        return i.join("");
      }
      function X(t) {
        if (typeof t != "string") {
          I("Invalid argument for stringToBytes");
        }
        let e = t.length;
        let r = new Uint8Array(e);
        for (let i = 0; i < e; ++i) {
          r[i] = t.charCodeAt(i) & 255;
        }
        return r;
      }
      function Z(t) {
        return String.fromCharCode(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255);
      }
      function Y(t) {
        return Object.keys(t).length;
      }
      function J(t) {
        let e = Object.create(null);
        for (let [r, i] of t) {
          e[r] = i;
        }
        return e;
      }
      function Q() {
        let t = new Uint8Array(4);
        t[0] = 1;
        return new Uint32Array(t.buffer, 0, 1)[0] === 1;
      }
      function $() {
        try {
          Function("");
          return true;
        } catch {
          return false;
        }
      }
      e.AbortException = H;
      class tt {
        static get isLittleEndian() {
          return j(this, "isLittleEndian", Q());
        }
        static get isEvalSupported() {
          return j(this, "isEvalSupported", $());
        }
        static get isOffscreenCanvasSupported() {
          return j(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas != "undefined");
        }
        static get platform() {
          if (typeof navigator == "undefined") {
            return j(this, "platform", {
              isWin: false,
              isMac: false
            });
          } else {
            return j(this, "platform", {
              isWin: navigator.platform.includes("Win"),
              isMac: navigator.platform.includes("Mac")
            });
          }
        }
        static get isCSSRoundSupported() {
          return j(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
        }
      }
      e.FeatureTest = tt;
      let te = [...Array(256).keys()].map(t => t.toString(16).padStart(2, "0"));
      class tr {
        static makeHexColor(t, e, r) {
          return `#${te[t]}${te[e]}${te[r]}`;
        }
        static scaleMinMax(t, e) {
          let r;
          if (t[0]) {
            if (t[0] < 0) {
              r = e[0];
              e[0] = e[1];
              e[1] = r;
            }
            e[0] *= t[0];
            e[1] *= t[0];
            if (t[3] < 0) {
              r = e[2];
              e[2] = e[3];
              e[3] = r;
            }
            e[2] *= t[3];
            e[3] *= t[3];
          } else {
            r = e[0];
            e[0] = e[2];
            e[2] = r;
            r = e[1];
            e[1] = e[3];
            e[3] = r;
            if (t[1] < 0) {
              r = e[2];
              e[2] = e[3];
              e[3] = r;
            }
            e[2] *= t[1];
            e[3] *= t[1];
            if (t[2] < 0) {
              r = e[0];
              e[0] = e[1];
              e[1] = r;
            }
            e[0] *= t[2];
            e[1] *= t[2];
          }
          e[0] += t[4];
          e[1] += t[4];
          e[2] += t[5];
          e[3] += t[5];
        }
        static transform(t, e) {
          return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
        }
        static applyTransform(t, e) {
          return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]];
        }
        static applyInverseTransform(t, e) {
          let r = e[0] * e[3] - e[1] * e[2];
          return [(t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / r, (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / r];
        }
        static getAxialAlignedBoundingBox(t, e) {
          let r = this.applyTransform(t, e);
          let i = this.applyTransform(t.slice(2, 4), e);
          let n = this.applyTransform([t[0], t[3]], e);
          let o = this.applyTransform([t[2], t[1]], e);
          return [Math.min(r[0], i[0], n[0], o[0]), Math.min(r[1], i[1], n[1], o[1]), Math.max(r[0], i[0], n[0], o[0]), Math.max(r[1], i[1], n[1], o[1])];
        }
        static inverseTransform(t) {
          let e = t[0] * t[3] - t[1] * t[2];
          return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
        }
        static singularValueDecompose2dScale(t) {
          let e = [t[0], t[2], t[1], t[3]];
          let r = t[0] * e[0] + t[1] * e[2];
          let i = t[0] * e[1] + t[1] * e[3];
          let n = t[2] * e[0] + t[3] * e[2];
          let o = t[2] * e[1] + t[3] * e[3];
          let s = (r + o) / 2;
          let a = Math.sqrt((r + o) ** 2 - (r * o - n * i) * 4) / 2;
          return [Math.sqrt(s + a || 1), Math.sqrt(s - a || 1)];
        }
        static normalizeRect(t) {
          let e = t.slice(0);
          if (t[0] > t[2]) {
            e[0] = t[2];
            e[2] = t[0];
          }
          if (t[1] > t[3]) {
            e[1] = t[3];
            e[3] = t[1];
          }
          return e;
        }
        static intersect(t, e) {
          let r = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2]));
          let i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
          if (r > i) {
            return null;
          }
          let n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3]));
          let o = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
          if (n > o) {
            return null;
          } else {
            return [r, n, i, o];
          }
        }
        static bezierBoundingBox(t, e, r, i, n, o, s, a) {
          let l;
          let h;
          let c;
          let u;
          let d;
          let f;
          let p;
          let g;
          let m = [];
          let v = [[], []];
          for (let v = 0; v < 2; ++v) {
            if (v === 0) {
              h = t * 6 - r * 12 + n * 6;
              l = t * -3 + r * 9 - n * 9 + s * 3;
              c = r * 3 - t * 3;
            } else {
              h = e * 6 - i * 12 + o * 6;
              l = e * -3 + i * 9 - o * 9 + a * 3;
              c = i * 3 - e * 3;
            }
            if (Math.abs(l) < 1e-12) {
              if (Math.abs(h) < 1e-12) {
                continue;
              }
              if ((u = -c / h) > 0 && u < 1) {
                m.push(u);
              }
              continue;
            }
            g = Math.sqrt(p = h * h - c * 4 * l);
            if (!(p < 0)) {
              if ((d = (-h + g) / (l * 2)) > 0 && d < 1) {
                m.push(d);
              }
              if ((f = (-h - g) / (l * 2)) > 0 && f < 1) {
                m.push(f);
              }
            }
          }
          let y = m.length;
          let b;
          let A = y;
          while (y--) {
            b = 1 - (u = m[y]);
            v[0][y] = b * b * b * t + b * 3 * b * u * r + b * 3 * u * u * n + u * u * u * s;
            v[1][y] = b * b * b * e + b * 3 * b * u * i + b * 3 * u * u * o + u * u * u * a;
          }
          v[0][A] = t;
          v[1][A] = e;
          v[0][A + 1] = s;
          v[1][A + 1] = a;
          v[0].length = v[1].length = A + 2;
          return [Math.min(...v[0]), Math.min(...v[1]), Math.max(...v[0]), Math.max(...v[1])];
        }
      }
      e.Util = tr;
      let ti = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
      function tn(t) {
        if (t[0] >= "ï") {
          let e;
          if (t[0] === "þ" && t[1] === "ÿ") {
            e = "utf-16be";
          } else if (t[0] === "ÿ" && t[1] === "þ") {
            e = "utf-16le";
          } else if (t[0] === "ï" && t[1] === "»" && t[2] === "¿") {
            e = "utf-8";
          }
          if (e) {
            try {
              let r = new TextDecoder(e, {
                fatal: true
              });
              let i = X(t);
              return r.decode(i);
            } catch (t) {
              D(`stringToPDFString: "${t}".`);
            }
          }
        }
        let e = [];
        for (let r = 0, i = t.length; r < i; r++) {
          let i = ti[t.charCodeAt(r)];
          e.push(i ? String.fromCharCode(i) : t.charAt(r));
        }
        return e.join("");
      }
      function to(t) {
        return decodeURIComponent(escape(t));
      }
      function ts(t) {
        return unescape(encodeURIComponent(t));
      }
      function ta(t) {
        return typeof t == "object" && t?.byteLength !== undefined;
      }
      function tl(t, e) {
        if (t.length !== e.length) {
          return false;
        }
        for (let r = 0, i = t.length; r < i; r++) {
          if (t[r] !== e[r]) {
            return false;
          }
        }
        return true;
      }
      function th(t = new Date()) {
        return [t.getUTCFullYear().toString(), (t.getUTCMonth() + 1).toString().padStart(2, "0"), t.getUTCDate().toString().padStart(2, "0"), t.getUTCHours().toString().padStart(2, "0"), t.getUTCMinutes().toString().padStart(2, "0"), t.getUTCSeconds().toString().padStart(2, "0")].join("");
      }
      class tc {
        #t = false;
        constructor() {
          this.promise = new Promise((t, e) => {
            this.resolve = e => {
              this.#t = true;
              t(e);
            };
            this.reject = t => {
              this.#t = true;
              e(t);
            };
          });
        }
        get settled() {
          return this.#t;
        }
      }
      e.PromiseCapability = tc;
      let tu = null;
      let td = null;
      function tf(t) {
        if (!tu) {
          tu = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
          td = new Map([["ﬅ", "ſt"]]);
        }
        return t.replaceAll(tu, (t, e, r) => e ? e.normalize("NFKC") : td.get(r));
      }
      function tp() {
        if (typeof crypto != "undefined" && typeof crypto?.randomUUID == "function") {
          return crypto.randomUUID();
        }
        let t = new Uint8Array(32);
        if (typeof crypto != "undefined" && typeof crypto?.getRandomValues == "function") {
          crypto.getRandomValues(t);
        } else {
          for (let e = 0; e < 32; e++) {
            t[e] = Math.floor(Math.random() * 255);
          }
        }
        return K(t);
      }
      let tg = "pdfjs_internal_id_";
      e.AnnotationPrefix = tg;
    }, (__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = undefined;
      Object.defineProperty(exports, "SVGGraphics", {
        enumerable: true,
        get: function () {
          return _displaySvg.SVGGraphics;
        }
      });
      exports.build = undefined;
      exports.getDocument = getDocument;
      exports.version = undefined;
      var _util = __w_pdfjs_require__(1);
      var _annotation_storage = __w_pdfjs_require__(3);
      var _display_utils = __w_pdfjs_require__(6);
      var _font_loader = __w_pdfjs_require__(9);
      var _displayNode_utils = __w_pdfjs_require__(10);
      var _canvas = __w_pdfjs_require__(11);
      var _worker_options = __w_pdfjs_require__(14);
      var _message_handler = __w_pdfjs_require__(15);
      var _metadata = __w_pdfjs_require__(16);
      var _optional_content_config = __w_pdfjs_require__(17);
      var _transport_stream = __w_pdfjs_require__(18);
      var _displayFetch_stream = __w_pdfjs_require__(19);
      var _displayNetwork = __w_pdfjs_require__(22);
      var _displayNode_stream = __w_pdfjs_require__(23);
      var _displaySvg = __w_pdfjs_require__(24);
      var _xfa_text = __w_pdfjs_require__(25);
      let DEFAULT_RANGE_CHUNK_SIZE = 65536;
      let RENDERING_CANCELLED_TIMEOUT = 100;
      let DELAYED_CLEANUP_TIMEOUT = 5000;
      let DefaultCanvasFactory = _util.isNodeJS ? _displayNode_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
      exports.DefaultCanvasFactory = DefaultCanvasFactory;
      let DefaultCMapReaderFactory = _util.isNodeJS ? _displayNode_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
      exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
      let DefaultFilterFactory = _util.isNodeJS ? _displayNode_utils.NodeFilterFactory : _display_utils.DOMFilterFactory;
      exports.DefaultFilterFactory = DefaultFilterFactory;
      let DefaultStandardFontDataFactory = _util.isNodeJS ? _displayNode_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
      function getDocument(t) {
        if (typeof t == "string" || t instanceof URL) {
          t = {
            url: t
          };
        } else if (_util.isArrayBuffer(t)) {
          t = {
            data: t
          };
        }
        if (typeof t != "object") {
          throw Error("Invalid parameter in getDocument, need parameter object.");
        }
        if (!t.url && !t.data && !t.range) {
          throw Error("Invalid parameter object: need either .data, .range or .url");
        }
        let e = new PDFDocumentLoadingTask();
        let {
          docId: r
        } = e;
        let i = t.url ? getUrlProp(t.url) : null;
        let n = t.data ? getDataProp(t.data) : null;
        let o = t.httpHeaders || null;
        let s = t.withCredentials === true;
        let a = t.password ?? null;
        let l = t.range instanceof PDFDataRangeTransport ? t.range : null;
        let h = Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0 ? t.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
        let c = t.worker instanceof PDFWorker ? t.worker : null;
        let u = t.verbosity;
        let d = typeof t.docBaseUrl != "string" || _display_utils.isDataScheme(t.docBaseUrl) ? null : t.docBaseUrl;
        let f = typeof t.cMapUrl == "string" ? t.cMapUrl : null;
        let p = t.cMapPacked !== false;
        let g = t.CMapReaderFactory || DefaultCMapReaderFactory;
        let m = typeof t.standardFontDataUrl == "string" ? t.standardFontDataUrl : null;
        let v = t.StandardFontDataFactory || DefaultStandardFontDataFactory;
        let y = t.stopAtErrors !== true;
        let b = Number.isInteger(t.maxImageSize) && t.maxImageSize > -1 ? t.maxImageSize : -1;
        let A = t.isEvalSupported !== false;
        let S = typeof t.isOffscreenCanvasSupported == "boolean" ? t.isOffscreenCanvasSupported : !_util.isNodeJS;
        let x = Number.isInteger(t.canvasMaxAreaInBytes) ? t.canvasMaxAreaInBytes : -1;
        let w = typeof t.disableFontFace == "boolean" ? t.disableFontFace : _util.isNodeJS;
        let C = t.fontExtraProperties === true;
        let T = t.enableXfa === true;
        let E = t.ownerDocument || globalThis.document;
        let F = t.disableRange === true;
        let k = t.disableStream === true;
        let P = t.disableAutoFetch === true;
        let R = t.pdfBug === true;
        let M = l ? l.length : t.length ?? NaN;
        let O = typeof t.useSystemFonts == "boolean" ? t.useSystemFonts : !_util.isNodeJS && !w;
        let D = typeof t.useWorkerFetch == "boolean" ? t.useWorkerFetch : g === _display_utils.DOMCMapReaderFactory && v === _display_utils.DOMStandardFontDataFactory && f && m && _display_utils.isValidFetchUrl(f, document.baseURI) && _display_utils.isValidFetchUrl(m, document.baseURI);
        let I = t.canvasFactory || new DefaultCanvasFactory({
          ownerDocument: E
        });
        let L = t.filterFactory || new DefaultFilterFactory({
          docId: r,
          ownerDocument: E
        });
        let N = null;
        _util.setVerbosityLevel(u);
        let B = {
          canvasFactory: I,
          filterFactory: L
        };
        if (!D) {
          B.cMapReaderFactory = new g({
            baseUrl: f,
            isCompressed: p
          });
          B.standardFontDataFactory = new v({
            baseUrl: m
          });
        }
        if (!c) {
          let t = {
            verbosity: u,
            port: _worker_options.GlobalWorkerOptions.workerPort
          };
          c = t.port ? PDFWorker.fromPort(t) : new PDFWorker(t);
          e._worker = c;
        }
        let j = {
          docId: r,
          apiVersion: "3.11.174",
          data: n,
          password: a,
          disableAutoFetch: P,
          rangeChunkSize: h,
          length: M,
          docBaseUrl: d,
          enableXfa: T,
          evaluatorOptions: {
            maxImageSize: b,
            disableFontFace: w,
            ignoreErrors: y,
            isEvalSupported: A,
            isOffscreenCanvasSupported: S,
            canvasMaxAreaInBytes: x,
            fontExtraProperties: C,
            useSystemFonts: O,
            cMapUrl: D ? f : null,
            standardFontDataUrl: D ? m : null
          }
        };
        let _ = {
          ignoreErrors: y,
          isEvalSupported: A,
          disableFontFace: w,
          fontExtraProperties: C,
          enableXfa: T,
          ownerDocument: E,
          disableAutoFetch: P,
          pdfBug: R,
          styleElement: N
        };
        c.promise.then(function () {
          if (e.destroyed) {
            throw Error("Loading aborted");
          }
          return Promise.all([_fetchDocument(c, j), new Promise(function (t) {
            let e;
            let r;
            if (l) {
              e = new _transport_stream.PDFDataTransportStream({
                length: M,
                initialData: l.initialData,
                progressiveDone: l.progressiveDone,
                contentDispositionFilename: l.contentDispositionFilename,
                disableRange: F,
                disableStream: k
              }, l);
            } else if (!n) {
              r = {
                url: i,
                length: M,
                httpHeaders: o,
                withCredentials: s,
                rangeChunkSize: h,
                disableRange: F,
                disableStream: k
              };
              e = _util.isNodeJS ? new _displayNode_stream.PDFNodeStream(r) : _display_utils.isValidFetchUrl(r.url) ? new _displayFetch_stream.PDFFetchStream(r) : new _displayNetwork.PDFNetworkStream(r);
            }
            t(e);
          })]).then(function ([t, i]) {
            if (e.destroyed) {
              throw Error("Loading aborted");
            }
            let n = new _message_handler.MessageHandler(r, t, c.port);
            let o = new WorkerTransport(n, e, i, _, B);
            e._transport = o;
            n.send("Ready", null);
          });
        }).catch(e._capability.reject);
        return e;
      }
      async function _fetchDocument(t, e) {
        if (t.destroyed) {
          throw Error("Worker was destroyed");
        }
        let r = await t.messageHandler.sendWithPromise("GetDocRequest", e, e.data ? [e.data.buffer] : null);
        if (t.destroyed) {
          throw Error("Worker was destroyed");
        }
        return r;
      }
      function getUrlProp(t) {
        if (t instanceof URL) {
          return t.href;
        }
        try {
          return new URL(t, window.location).href;
        } catch {
          if (_util.isNodeJS && typeof t == "string") {
            return t;
          }
        }
        throw Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
      }
      function getDataProp(t) {
        if (_util.isNodeJS && Buffer !== undefined && t instanceof Buffer) {
          throw Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
        }
        if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength) {
          return t;
        }
        if (typeof t == "string") {
          return _util.stringToBytes(t);
        }
        if (typeof t == "object" && !isNaN(t?.length) || _util.isArrayBuffer(t)) {
          return new Uint8Array(t);
        }
        throw Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
      }
      exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
      class PDFDocumentLoadingTask {
        static #e = 0;
        constructor() {
          this._capability = new _util.PromiseCapability();
          this._transport = null;
          this._worker = null;
          this.docId = `d${PDFDocumentLoadingTask.#e++}`;
          this.destroyed = false;
          this.onPassword = null;
          this.onProgress = null;
        }
        get promise() {
          return this._capability.promise;
        }
        async destroy() {
          this.destroyed = true;
          try {
            if (this._worker?.port) {
              this._worker._pendingDestroy = true;
            }
            await this._transport?.destroy();
          } catch (t) {
            if (this._worker?.port) {
              delete this._worker._pendingDestroy;
            }
            throw t;
          }
          this._transport = null;
          if (this._worker) {
            this._worker.destroy();
            this._worker = null;
          }
        }
      }
      exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
      class PDFDataRangeTransport {
        constructor(t, e, r = false, i = null) {
          this.length = t;
          this.initialData = e;
          this.progressiveDone = r;
          this.contentDispositionFilename = i;
          this._rangeListeners = [];
          this._progressListeners = [];
          this._progressiveReadListeners = [];
          this._progressiveDoneListeners = [];
          this._readyCapability = new _util.PromiseCapability();
        }
        addRangeListener(t) {
          this._rangeListeners.push(t);
        }
        addProgressListener(t) {
          this._progressListeners.push(t);
        }
        addProgressiveReadListener(t) {
          this._progressiveReadListeners.push(t);
        }
        addProgressiveDoneListener(t) {
          this._progressiveDoneListeners.push(t);
        }
        onDataRange(t, e) {
          for (let r of this._rangeListeners) {
            r(t, e);
          }
        }
        onDataProgress(t, e) {
          this._readyCapability.promise.then(() => {
            for (let r of this._progressListeners) {
              r(t, e);
            }
          });
        }
        onDataProgressiveRead(t) {
          this._readyCapability.promise.then(() => {
            for (let e of this._progressiveReadListeners) {
              e(t);
            }
          });
        }
        onDataProgressiveDone() {
          this._readyCapability.promise.then(() => {
            for (let t of this._progressiveDoneListeners) {
              t();
            }
          });
        }
        transportReady() {
          this._readyCapability.resolve();
        }
        requestDataRange(t, e) {
          _util.unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
        }
        abort() {}
      }
      exports.PDFDataRangeTransport = PDFDataRangeTransport;
      class PDFDocumentProxy {
        constructor(t, e) {
          this._pdfInfo = t;
          this._transport = e;
          Object.defineProperty(this, "getJavaScript", {
            value: () => {
              _display_utils.deprecated("`PDFDocumentProxy.getJavaScript`, please use `PDFDocumentProxy.getJSActions` instead.");
              return this.getJSActions().then(t => {
                if (!t) {
                  return t;
                }
                let e = [];
                for (let r in t) {
                  e.push(...t[r]);
                }
                return e;
              });
            }
          });
        }
        get annotationStorage() {
          return this._transport.annotationStorage;
        }
        get filterFactory() {
          return this._transport.filterFactory;
        }
        get numPages() {
          return this._pdfInfo.numPages;
        }
        get fingerprints() {
          return this._pdfInfo.fingerprints;
        }
        get isPureXfa() {
          return _util.shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        get allXfaHtml() {
          return this._transport._htmlForXfa;
        }
        getPage(t) {
          return this._transport.getPage(t);
        }
        getPageIndex(t) {
          return this._transport.getPageIndex(t);
        }
        getDestinations() {
          return this._transport.getDestinations();
        }
        getDestination(t) {
          return this._transport.getDestination(t);
        }
        getPageLabels() {
          return this._transport.getPageLabels();
        }
        getPageLayout() {
          return this._transport.getPageLayout();
        }
        getPageMode() {
          return this._transport.getPageMode();
        }
        getViewerPreferences() {
          return this._transport.getViewerPreferences();
        }
        getOpenAction() {
          return this._transport.getOpenAction();
        }
        getAttachments() {
          return this._transport.getAttachments();
        }
        getJSActions() {
          return this._transport.getDocJSActions();
        }
        getOutline() {
          return this._transport.getOutline();
        }
        getOptionalContentConfig() {
          return this._transport.getOptionalContentConfig();
        }
        getPermissions() {
          return this._transport.getPermissions();
        }
        getMetadata() {
          return this._transport.getMetadata();
        }
        getMarkInfo() {
          return this._transport.getMarkInfo();
        }
        getData() {
          return this._transport.getData();
        }
        saveDocument() {
          return this._transport.saveDocument();
        }
        getDownloadInfo() {
          return this._transport.downloadInfoCapability.promise;
        }
        cleanup(t = false) {
          return this._transport.startCleanup(t || this.isPureXfa);
        }
        destroy() {
          return this.loadingTask.destroy();
        }
        get loadingParams() {
          return this._transport.loadingParams;
        }
        get loadingTask() {
          return this._transport.loadingTask;
        }
        getFieldObjects() {
          return this._transport.getFieldObjects();
        }
        hasJSActions() {
          return this._transport.hasJSActions();
        }
        getCalculationOrderIds() {
          return this._transport.getCalculationOrderIds();
        }
      }
      exports.PDFDocumentProxy = PDFDocumentProxy;
      class PDFPageProxy {
        #r = null;
        #i = false;
        constructor(t, e, r, i = false) {
          this._pageIndex = t;
          this._pageInfo = e;
          this._transport = r;
          this._stats = i ? new _display_utils.StatTimer() : null;
          this._pdfBug = i;
          this.commonObjs = r.commonObjs;
          this.objs = new PDFObjects();
          this._maybeCleanupAfterRender = false;
          this._intentStates = new Map();
          this.destroyed = false;
        }
        get pageNumber() {
          return this._pageIndex + 1;
        }
        get rotate() {
          return this._pageInfo.rotate;
        }
        get ref() {
          return this._pageInfo.ref;
        }
        get userUnit() {
          return this._pageInfo.userUnit;
        }
        get view() {
          return this._pageInfo.view;
        }
        getViewport({
          scale: t,
          rotation: e = this.rotate,
          offsetX: r = 0,
          offsetY: i = 0,
          dontFlip: n = false
        } = {}) {
          return new _display_utils.PageViewport({
            viewBox: this.view,
            scale: t,
            rotation: e,
            offsetX: r,
            offsetY: i,
            dontFlip: n
          });
        }
        getAnnotations({
          intent: t = "display"
        } = {}) {
          let e = this._transport.getRenderingIntent(t);
          return this._transport.getAnnotations(this._pageIndex, e.renderingIntent);
        }
        getJSActions() {
          return this._transport.getPageJSActions(this._pageIndex);
        }
        get filterFactory() {
          return this._transport.filterFactory;
        }
        get isPureXfa() {
          return _util.shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        async getXfa() {
          return this._transport._htmlForXfa?.children[this._pageIndex] || null;
        }
        render({
          canvasContext: t,
          viewport: e,
          intent: r = "display",
          annotationMode: i = _util.AnnotationMode.ENABLE,
          transform: n = null,
          background: o = null,
          optionalContentConfigPromise: s = null,
          annotationCanvasMap: a = null,
          pageColors: l = null,
          printAnnotationStorage: h = null
        }) {
          this._stats?.time("Overall");
          let c = this._transport.getRenderingIntent(r, i, h);
          this.#i = false;
          this.#n();
          s ||= this._transport.getOptionalContentConfig();
          let u = this._intentStates.get(c.cacheKey);
          if (!u) {
            u = Object.create(null);
            this._intentStates.set(c.cacheKey, u);
          }
          if (u.streamReaderCancelTimeout) {
            clearTimeout(u.streamReaderCancelTimeout);
            u.streamReaderCancelTimeout = null;
          }
          let d = !!(c.renderingIntent & _util.RenderingIntentFlag.PRINT);
          if (!u.displayReadyCapability) {
            u.displayReadyCapability = new _util.PromiseCapability();
            u.operatorList = {
              fnArray: [],
              argsArray: [],
              lastChunk: false,
              separateAnnots: null
            };
            this._stats?.time("Page Request");
            this._pumpOperatorList(c);
          }
          let f = t => {
            u.renderTasks.delete(p);
            if (this._maybeCleanupAfterRender || d) {
              this.#i = true;
            }
            this.#o(!d);
            if (t) {
              p.capability.reject(t);
              this._abortOperatorList({
                intentState: u,
                reason: t instanceof Error ? t : Error(t)
              });
            } else {
              p.capability.resolve();
            }
            this._stats?.timeEnd("Rendering");
            this._stats?.timeEnd("Overall");
          };
          let p = new InternalRenderTask({
            callback: f,
            params: {
              canvasContext: t,
              viewport: e,
              transform: n,
              background: o
            },
            objs: this.objs,
            commonObjs: this.commonObjs,
            annotationCanvasMap: a,
            operatorList: u.operatorList,
            pageIndex: this._pageIndex,
            canvasFactory: this._transport.canvasFactory,
            filterFactory: this._transport.filterFactory,
            useRequestAnimationFrame: !d,
            pdfBug: this._pdfBug,
            pageColors: l
          });
          (u.renderTasks ||= new Set()).add(p);
          let g = p.task;
          Promise.all([u.displayReadyCapability.promise, s]).then(([t, e]) => {
            if (this.destroyed) {
              f();
              return;
            }
            this._stats?.time("Rendering");
            p.initializeGraphics({
              transparency: t,
              optionalContentConfig: e
            });
            p.operatorListChanged();
          }).catch(f);
          return g;
        }
        getOperatorList({
          intent: t = "display",
          annotationMode: e = _util.AnnotationMode.ENABLE,
          printAnnotationStorage: r = null
        } = {}) {
          let i;
          function n() {
            if (s.operatorList.lastChunk) {
              s.opListReadCapability.resolve(s.operatorList);
              s.renderTasks.delete(i);
            }
          }
          let o = this._transport.getRenderingIntent(t, e, r, true);
          let s = this._intentStates.get(o.cacheKey);
          if (!s) {
            s = Object.create(null);
            this._intentStates.set(o.cacheKey, s);
          }
          if (!s.opListReadCapability) {
            (i = Object.create(null)).operatorListChanged = n;
            s.opListReadCapability = new _util.PromiseCapability();
            (s.renderTasks ||= new Set()).add(i);
            s.operatorList = {
              fnArray: [],
              argsArray: [],
              lastChunk: false,
              separateAnnots: null
            };
            this._stats?.time("Page Request");
            this._pumpOperatorList(o);
          }
          return s.opListReadCapability.promise;
        }
        streamTextContent({
          includeMarkedContent: t = false,
          disableNormalization: e = false
        } = {}) {
          let r = 100;
          return this._transport.messageHandler.sendWithStream("GetTextContent", {
            pageIndex: this._pageIndex,
            includeMarkedContent: t === true,
            disableNormalization: e === true
          }, {
            highWaterMark: r,
            size: t => t.items.length
          });
        }
        getTextContent(t = {}) {
          if (this._transport._htmlForXfa) {
            return this.getXfa().then(t => _xfa_text.XfaText.textContent(t));
          }
          let e = this.streamTextContent(t);
          return new Promise(function (t, r) {
            function i() {
              n.read().then(function ({
                value: e,
                done: r
              }) {
                if (r) {
                  t(o);
                  return;
                }
                Object.assign(o.styles, e.styles);
                o.items.push(...e.items);
                i();
              }, r);
            }
            let n = e.getReader();
            let o = {
              items: [],
              styles: Object.create(null)
            };
            i();
          });
        }
        getStructTree() {
          return this._transport.getStructTree(this._pageIndex);
        }
        _destroy() {
          this.destroyed = true;
          let t = [];
          for (let e of this._intentStates.values()) {
            this._abortOperatorList({
              intentState: e,
              reason: Error("Page was destroyed."),
              force: true
            });
            if (!e.opListReadCapability) {
              for (let r of e.renderTasks) {
                t.push(r.completed);
                r.cancel();
              }
            }
          }
          this.objs.clear();
          this.#i = false;
          this.#n();
          return Promise.all(t);
        }
        cleanup(t = false) {
          this.#i = true;
          let e = this.#o(false);
          if (t && e) {
            this._stats &&= new _display_utils.StatTimer();
          }
          return e;
        }
        #o(t = false) {
          this.#n();
          if (!this.#i || this.destroyed) {
            return false;
          }
          if (t) {
            this.#r = setTimeout(() => {
              this.#r = null;
              this.#o(false);
            }, DELAYED_CLEANUP_TIMEOUT);
            return false;
          }
          for (let {
            renderTasks: t,
            operatorList: e
          } of this._intentStates.values()) {
            if (t.size > 0 || !e.lastChunk) {
              return false;
            }
          }
          this._intentStates.clear();
          this.objs.clear();
          this.#i = false;
          return true;
        }
        #n() {
          if (this.#r) {
            clearTimeout(this.#r);
            this.#r = null;
          }
        }
        _startRenderPage(t, e) {
          let r = this._intentStates.get(e);
          if (r) {
            this._stats?.timeEnd("Page Request");
            r.displayReadyCapability?.resolve(t);
          }
        }
        _renderPageChunk(t, e) {
          for (let r = 0, i = t.length; r < i; r++) {
            e.operatorList.fnArray.push(t.fnArray[r]);
            e.operatorList.argsArray.push(t.argsArray[r]);
          }
          e.operatorList.lastChunk = t.lastChunk;
          e.operatorList.separateAnnots = t.separateAnnots;
          for (let r of e.renderTasks) {
            r.operatorListChanged();
          }
          if (t.lastChunk) {
            this.#o(true);
          }
        }
        _pumpOperatorList({
          renderingIntent: t,
          cacheKey: e,
          annotationStorageSerializable: r
        }) {
          let {
            map: i,
            transfers: n
          } = r;
          let o = this._transport.messageHandler.sendWithStream("GetOperatorList", {
            pageIndex: this._pageIndex,
            intent: t,
            cacheKey: e,
            annotationStorage: i
          }, n).getReader();
          let s = this._intentStates.get(e);
          s.streamReader = o;
          let a = () => {
            o.read().then(({
              value: t,
              done: e
            }) => {
              if (e) {
                s.streamReader = null;
                return;
              }
              if (!this._transport.destroyed) {
                this._renderPageChunk(t, s);
                a();
              }
            }, t => {
              s.streamReader = null;
              if (!this._transport.destroyed) {
                if (s.operatorList) {
                  s.operatorList.lastChunk = true;
                  for (let t of s.renderTasks) {
                    t.operatorListChanged();
                  }
                  this.#o(true);
                }
                if (s.displayReadyCapability) {
                  s.displayReadyCapability.reject(t);
                } else if (s.opListReadCapability) {
                  s.opListReadCapability.reject(t);
                } else {
                  throw t;
                }
              }
            });
          };
          a();
        }
        _abortOperatorList({
          intentState: t,
          reason: e,
          force: r = false
        }) {
          if (t.streamReader) {
            if (t.streamReaderCancelTimeout) {
              clearTimeout(t.streamReaderCancelTimeout);
              t.streamReaderCancelTimeout = null;
            }
            if (!r) {
              if (t.renderTasks.size > 0) {
                return;
              }
              if (e instanceof _display_utils.RenderingCancelledException) {
                let r = RENDERING_CANCELLED_TIMEOUT;
                if (e.extraDelay > 0 && e.extraDelay < 1000) {
                  r += e.extraDelay;
                }
                t.streamReaderCancelTimeout = setTimeout(() => {
                  t.streamReaderCancelTimeout = null;
                  this._abortOperatorList({
                    intentState: t,
                    reason: e,
                    force: true
                  });
                }, r);
                return;
              }
            }
            t.streamReader.cancel(new _util.AbortException(e.message)).catch(() => {});
            t.streamReader = null;
            if (!this._transport.destroyed) {
              for (let [e, r] of this._intentStates) {
                if (r === t) {
                  this._intentStates.delete(e);
                  break;
                }
              }
              this.cleanup();
            }
          }
        }
        get stats() {
          return this._stats;
        }
      }
      exports.PDFPageProxy = PDFPageProxy;
      class LoopbackPort {
        #s = new Set();
        #a = Promise.resolve();
        postMessage(t, e) {
          let r = {
            data: structuredClone(t, e ? {
              transfer: e
            } : null)
          };
          this.#a.then(() => {
            for (let t of this.#s) {
              t.call(this, r);
            }
          });
        }
        addEventListener(t, e) {
          this.#s.add(e);
        }
        removeEventListener(t, e) {
          this.#s.delete(e);
        }
        terminate() {
          this.#s.clear();
        }
      }
      exports.LoopbackPort = LoopbackPort;
      let PDFWorkerUtil = {
        isWorkerDisabled: false,
        fallbackWorkerSrc: null,
        fakeWorkerId: 0
      };
      exports.PDFWorkerUtil = PDFWorkerUtil;
      if (_util.isNodeJS) {
        PDFWorkerUtil.isWorkerDisabled = true;
        PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
      } else if (typeof document == "object") {
        let pdfjsFilePath = document?.currentScript?.src;
        if (pdfjsFilePath) {
          PDFWorkerUtil.fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
        }
      }
      PDFWorkerUtil.isSameOrigin = function (t, e) {
        let r;
        try {
          if (!(r = new URL(t)).origin || r.origin === "null") {
            return false;
          }
        } catch {
          return false;
        }
        let i = new URL(e, r);
        return r.origin === i.origin;
      };
      PDFWorkerUtil.createCDNWrapper = function (t) {
        let e = `importScripts("${t}");`;
        return URL.createObjectURL(new Blob([e]));
      };
      class PDFWorker {
        static #l;
        constructor({
          name: t = null,
          port: e = null,
          verbosity: r = _util.getVerbosityLevel()
        } = {}) {
          this.name = t;
          this.destroyed = false;
          this.verbosity = r;
          this._readyCapability = new _util.PromiseCapability();
          this._port = null;
          this._webWorker = null;
          this._messageHandler = null;
          if (e) {
            if (PDFWorker.#l?.has(e)) {
              throw Error("Cannot use more than one PDFWorker per port.");
            }
            (PDFWorker.#l ||= new WeakMap()).set(e, this);
            this._initializeFromPort(e);
            return;
          }
          this._initialize();
        }
        get promise() {
          return this._readyCapability.promise;
        }
        get port() {
          return this._port;
        }
        get messageHandler() {
          return this._messageHandler;
        }
        _initializeFromPort(t) {
          this._port = t;
          this._messageHandler = new _message_handler.MessageHandler("main", "worker", t);
          this._messageHandler.on("ready", function () {});
          this._readyCapability.resolve();
          this._messageHandler.send("configure", {
            verbosity: this.verbosity
          });
        }
        _initialize() {
          if (!PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
            let {
              workerSrc: t
            } = PDFWorker;
            try {
              if (!PDFWorkerUtil.isSameOrigin(window.location.href, t)) {
                t = PDFWorkerUtil.createCDNWrapper(new URL(t, window.location).href);
              }
              let e = new Worker(t);
              let r = new _message_handler.MessageHandler("main", "worker", e);
              let i = () => {
                e.removeEventListener("error", n);
                r.destroy();
                e.terminate();
                if (this.destroyed) {
                  this._readyCapability.reject(Error("Worker was destroyed"));
                } else {
                  this._setupFakeWorker();
                }
              };
              let n = () => {
                if (!this._webWorker) {
                  i();
                }
              };
              e.addEventListener("error", n);
              r.on("test", t => {
                e.removeEventListener("error", n);
                if (this.destroyed) {
                  i();
                  return;
                }
                if (t) {
                  this._messageHandler = r;
                  this._port = e;
                  this._webWorker = e;
                  this._readyCapability.resolve();
                  r.send("configure", {
                    verbosity: this.verbosity
                  });
                } else {
                  this._setupFakeWorker();
                  r.destroy();
                  e.terminate();
                }
              });
              r.on("ready", t => {
                e.removeEventListener("error", n);
                if (this.destroyed) {
                  i();
                  return;
                }
                try {
                  o();
                } catch {
                  this._setupFakeWorker();
                }
              });
              let o = () => {
                let t = new Uint8Array();
                r.send("test", t, [t.buffer]);
              };
              o();
              return;
            } catch {
              _util.info("The worker has been disabled.");
            }
          }
          this._setupFakeWorker();
        }
        _setupFakeWorker() {
          if (!PDFWorkerUtil.isWorkerDisabled) {
            _util.warn("Setting up fake worker.");
            PDFWorkerUtil.isWorkerDisabled = true;
          }
          PDFWorker._setupFakeWorkerGlobal.then(t => {
            if (this.destroyed) {
              this._readyCapability.reject(Error("Worker was destroyed"));
              return;
            }
            let e = new LoopbackPort();
            this._port = e;
            let r = `fake${PDFWorkerUtil.fakeWorkerId++}`;
            let i = new _message_handler.MessageHandler(r + "_worker", r, e);
            t.setup(i, e);
            let n = new _message_handler.MessageHandler(r, r + "_worker", e);
            this._messageHandler = n;
            this._readyCapability.resolve();
            n.send("configure", {
              verbosity: this.verbosity
            });
          }).catch(t => {
            this._readyCapability.reject(Error(`Setting up fake worker failed: "${t.message}".`));
          });
        }
        destroy() {
          this.destroyed = true;
          if (this._webWorker) {
            this._webWorker.terminate();
            this._webWorker = null;
          }
          PDFWorker.#l?.delete(this._port);
          this._port = null;
          if (this._messageHandler) {
            this._messageHandler.destroy();
            this._messageHandler = null;
          }
        }
        static fromPort(t) {
          if (!t?.port) {
            throw Error("PDFWorker.fromPort - invalid method signature.");
          }
          let e = this.#l?.get(t.port);
          if (e) {
            if (e._pendingDestroy) {
              throw Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
            }
            return e;
          }
          return new PDFWorker(t);
        }
        static get workerSrc() {
          if (_worker_options.GlobalWorkerOptions.workerSrc) {
            return _worker_options.GlobalWorkerOptions.workerSrc;
          }
          if (PDFWorkerUtil.fallbackWorkerSrc !== null) {
            if (!_util.isNodeJS) {
              _display_utils.deprecated("No \"GlobalWorkerOptions.workerSrc\" specified.");
            }
            return PDFWorkerUtil.fallbackWorkerSrc;
          }
          throw Error("No \"GlobalWorkerOptions.workerSrc\" specified.");
        }
        static get _mainThreadWorkerMessageHandler() {
          try {
            return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
          } catch {
            return null;
          }
        }
        static get _setupFakeWorkerGlobal() {
          let loader = async () => {
            let mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
            if (mainWorkerMessageHandler) {
              return mainWorkerMessageHandler;
            }
            if (_util.isNodeJS) {
              let worker = eval("require")(this.workerSrc);
              return worker.WorkerMessageHandler;
            }
            await _display_utils.loadScript(this.workerSrc);
            return window.pdfjsWorker.WorkerMessageHandler;
          };
          return _util.shadow(this, "_setupFakeWorkerGlobal", loader());
        }
      }
      exports.PDFWorker = PDFWorker;
      class WorkerTransport {
        #h = new Map();
        #c = new Map();
        #u = new Map();
        #d = null;
        constructor(t, e, r, i, n) {
          this.messageHandler = t;
          this.loadingTask = e;
          this.commonObjs = new PDFObjects();
          this.fontLoader = new _font_loader.FontLoader({
            ownerDocument: i.ownerDocument,
            styleElement: i.styleElement
          });
          this._params = i;
          this.canvasFactory = n.canvasFactory;
          this.filterFactory = n.filterFactory;
          this.cMapReaderFactory = n.cMapReaderFactory;
          this.standardFontDataFactory = n.standardFontDataFactory;
          this.destroyed = false;
          this.destroyCapability = null;
          this._networkStream = r;
          this._fullReader = null;
          this._lastProgress = null;
          this.downloadInfoCapability = new _util.PromiseCapability();
          this.setupMessageHandler();
        }
        #f(t, e = null) {
          let r = this.#h.get(t);
          if (r) {
            return r;
          }
          let i = this.messageHandler.sendWithPromise(t, e);
          this.#h.set(t, i);
          return i;
        }
        get annotationStorage() {
          return _util.shadow(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
        }
        getRenderingIntent(t, e = _util.AnnotationMode.ENABLE, r = null, i = false) {
          let n = _util.RenderingIntentFlag.DISPLAY;
          let o = _annotation_storage.SerializableEmpty;
          switch (t) {
            case "any":
              n = _util.RenderingIntentFlag.ANY;
              break;
            case "display":
              break;
            case "print":
              n = _util.RenderingIntentFlag.PRINT;
              break;
            default:
              _util.warn(`getRenderingIntent - invalid intent: ${t}`);
          }
          switch (e) {
            case _util.AnnotationMode.DISABLE:
              n += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
              break;
            case _util.AnnotationMode.ENABLE:
              break;
            case _util.AnnotationMode.ENABLE_FORMS:
              n += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
              break;
            case _util.AnnotationMode.ENABLE_STORAGE:
              o = ((n += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE) & _util.RenderingIntentFlag.PRINT && r instanceof _annotation_storage.PrintAnnotationStorage ? r : this.annotationStorage).serializable;
              break;
            default:
              _util.warn(`getRenderingIntent - invalid annotationMode: ${e}`);
          }
          if (i) {
            n += _util.RenderingIntentFlag.OPLIST;
          }
          return {
            renderingIntent: n,
            cacheKey: `${n}_${o.hash}`,
            annotationStorageSerializable: o
          };
        }
        destroy() {
          if (this.destroyCapability) {
            return this.destroyCapability.promise;
          }
          this.destroyed = true;
          this.destroyCapability = new _util.PromiseCapability();
          this.#d?.reject(Error("Worker was destroyed during onPassword callback"));
          let t = [];
          for (let e of this.#c.values()) {
            t.push(e._destroy());
          }
          this.#c.clear();
          this.#u.clear();
          if (this.hasOwnProperty("annotationStorage")) {
            this.annotationStorage.resetModified();
          }
          let e = this.messageHandler.sendWithPromise("Terminate", null);
          t.push(e);
          Promise.all(t).then(() => {
            this.commonObjs.clear();
            this.fontLoader.clear();
            this.#h.clear();
            this.filterFactory.destroy();
            this._networkStream?.cancelAllRequests(new _util.AbortException("Worker was terminated."));
            if (this.messageHandler) {
              this.messageHandler.destroy();
              this.messageHandler = null;
            }
            this.destroyCapability.resolve();
          }, this.destroyCapability.reject);
          return this.destroyCapability.promise;
        }
        setupMessageHandler() {
          let {
            messageHandler: t,
            loadingTask: e
          } = this;
          t.on("GetReader", (t, e) => {
            _util.assert(this._networkStream, "GetReader - no `IPDFStream` instance available.");
            this._fullReader = this._networkStream.getFullReader();
            this._fullReader.onProgress = t => {
              this._lastProgress = {
                loaded: t.loaded,
                total: t.total
              };
            };
            e.onPull = () => {
              this._fullReader.read().then(function ({
                value: t,
                done: r
              }) {
                if (r) {
                  e.close();
                  return;
                }
                _util.assert(t instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
                e.enqueue(new Uint8Array(t), 1, [t]);
              }).catch(t => {
                e.error(t);
              });
            };
            e.onCancel = t => {
              this._fullReader.cancel(t);
              e.ready.catch(t => {
                if (!this.destroyed) {
                  throw t;
                }
              });
            };
          });
          t.on("ReaderHeadersReady", t => {
            let r = new _util.PromiseCapability();
            let i = this._fullReader;
            i.headersReady.then(() => {
              if (!i.isStreamingSupported || !i.isRangeSupported) {
                if (this._lastProgress) {
                  e.onProgress?.(this._lastProgress);
                }
                i.onProgress = t => {
                  e.onProgress?.({
                    loaded: t.loaded,
                    total: t.total
                  });
                };
              }
              r.resolve({
                isStreamingSupported: i.isStreamingSupported,
                isRangeSupported: i.isRangeSupported,
                contentLength: i.contentLength
              });
            }, r.reject);
            return r.promise;
          });
          t.on("GetRangeReader", (t, e) => {
            _util.assert(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
            let r = this._networkStream.getRangeReader(t.begin, t.end);
            if (!r) {
              e.close();
              return;
            }
            e.onPull = () => {
              r.read().then(function ({
                value: t,
                done: r
              }) {
                if (r) {
                  e.close();
                  return;
                }
                _util.assert(t instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
                e.enqueue(new Uint8Array(t), 1, [t]);
              }).catch(t => {
                e.error(t);
              });
            };
            e.onCancel = t => {
              r.cancel(t);
              e.ready.catch(t => {
                if (!this.destroyed) {
                  throw t;
                }
              });
            };
          });
          t.on("GetDoc", ({
            pdfInfo: t
          }) => {
            this._numPages = t.numPages;
            this._htmlForXfa = t.htmlForXfa;
            delete t.htmlForXfa;
            e._capability.resolve(new PDFDocumentProxy(t, this));
          });
          t.on("DocException", function (t) {
            let r;
            switch (t.name) {
              case "PasswordException":
                r = new _util.PasswordException(t.message, t.code);
                break;
              case "InvalidPDFException":
                r = new _util.InvalidPDFException(t.message);
                break;
              case "MissingPDFException":
                r = new _util.MissingPDFException(t.message);
                break;
              case "UnexpectedResponseException":
                r = new _util.UnexpectedResponseException(t.message, t.status);
                break;
              case "UnknownErrorException":
                r = new _util.UnknownErrorException(t.message, t.details);
                break;
              default:
                _util.unreachable("DocException - expected a valid Error.");
            }
            e._capability.reject(r);
          });
          t.on("PasswordRequest", t => {
            this.#d = new _util.PromiseCapability();
            if (e.onPassword) {
              let r = t => {
                if (t instanceof Error) {
                  this.#d.reject(t);
                } else {
                  this.#d.resolve({
                    password: t
                  });
                }
              };
              try {
                e.onPassword(r, t.code);
              } catch (t) {
                this.#d.reject(t);
              }
            } else {
              this.#d.reject(new _util.PasswordException(t.message, t.code));
            }
            return this.#d.promise;
          });
          t.on("DataLoaded", t => {
            e.onProgress?.({
              loaded: t.length,
              total: t.length
            });
            this.downloadInfoCapability.resolve(t);
          });
          t.on("StartRenderPage", t => {
            if (!this.destroyed) {
              this.#c.get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey);
            }
          });
          t.on("commonobj", ([e, r, i]) => {
            if (!this.destroyed && !this.commonObjs.has(e)) {
              switch (r) {
                case "Font":
                  let n = this._params;
                  if ("error" in i) {
                    let t = i.error;
                    _util.warn(`Error during font loading: ${t}`);
                    this.commonObjs.resolve(e, t);
                    break;
                  }
                  let o = n.pdfBug && globalThis.FontInspector?.enabled ? (t, e) => globalThis.FontInspector.fontAdded(t, e) : null;
                  let s = new _font_loader.FontFaceObject(i, {
                    isEvalSupported: n.isEvalSupported,
                    disableFontFace: n.disableFontFace,
                    ignoreErrors: n.ignoreErrors,
                    inspectFont: o
                  });
                  this.fontLoader.bind(s).catch(r => t.sendWithPromise("FontFallback", {
                    id: e
                  })).finally(() => {
                    if (!n.fontExtraProperties && s.data) {
                      s.data = null;
                    }
                    this.commonObjs.resolve(e, s);
                  });
                  break;
                case "FontPath":
                case "Image":
                case "Pattern":
                  this.commonObjs.resolve(e, i);
                  break;
                default:
                  throw Error(`Got unknown common object type ${r}`);
              }
            }
          });
          t.on("obj", ([t, e, r, i]) => {
            if (this.destroyed) {
              return;
            }
            let n = this.#c.get(e);
            if (!n.objs.has(t)) {
              switch (r) {
                case "Image":
                  n.objs.resolve(t, i);
                  if (i) {
                    let t;
                    if (i.bitmap) {
                      let {
                        width: e,
                        height: r
                      } = i;
                      t = e * r * 4;
                    } else {
                      t = i.data?.length || 0;
                    }
                    if (t > _util.MAX_IMAGE_SIZE_TO_CACHE) {
                      n._maybeCleanupAfterRender = true;
                    }
                  }
                  break;
                case "Pattern":
                  n.objs.resolve(t, i);
                  break;
                default:
                  throw Error(`Got unknown object type ${r}`);
              }
            }
          });
          t.on("DocProgress", t => {
            if (!this.destroyed) {
              e.onProgress?.({
                loaded: t.loaded,
                total: t.total
              });
            }
          });
          t.on("FetchBuiltInCMap", t => this.destroyed ? Promise.reject(Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(t) : Promise.reject(Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.")));
          t.on("FetchStandardFontData", t => this.destroyed ? Promise.reject(Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(t) : Promise.reject(Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
        }
        getData() {
          return this.messageHandler.sendWithPromise("GetData", null);
        }
        saveDocument() {
          if (this.annotationStorage.size <= 0) {
            _util.warn("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
          }
          let {
            map: t,
            transfers: e
          } = this.annotationStorage.serializable;
          return this.messageHandler.sendWithPromise("SaveDocument", {
            isPureXfa: !!this._htmlForXfa,
            numPages: this._numPages,
            annotationStorage: t,
            filename: this._fullReader?.filename ?? null
          }, e).finally(() => {
            this.annotationStorage.resetModified();
          });
        }
        getPage(t) {
          if (!Number.isInteger(t) || t <= 0 || t > this._numPages) {
            return Promise.reject(Error("Invalid page request."));
          }
          let e = t - 1;
          let r = this.#u.get(e);
          if (r) {
            return r;
          }
          let i = this.messageHandler.sendWithPromise("GetPage", {
            pageIndex: e
          }).then(t => {
            if (this.destroyed) {
              throw Error("Transport destroyed");
            }
            let r = new PDFPageProxy(e, t, this, this._params.pdfBug);
            this.#c.set(e, r);
            return r;
          });
          this.#u.set(e, i);
          return i;
        }
        getPageIndex(t) {
          if (typeof t != "object" || t === null || !Number.isInteger(t.num) || t.num < 0 || !Number.isInteger(t.gen) || t.gen < 0) {
            return Promise.reject(Error("Invalid pageIndex request."));
          } else {
            return this.messageHandler.sendWithPromise("GetPageIndex", {
              num: t.num,
              gen: t.gen
            });
          }
        }
        getAnnotations(t, e) {
          return this.messageHandler.sendWithPromise("GetAnnotations", {
            pageIndex: t,
            intent: e
          });
        }
        getFieldObjects() {
          return this.#f("GetFieldObjects");
        }
        hasJSActions() {
          return this.#f("HasJSActions");
        }
        getCalculationOrderIds() {
          return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
        }
        getDestinations() {
          return this.messageHandler.sendWithPromise("GetDestinations", null);
        }
        getDestination(t) {
          if (typeof t != "string") {
            return Promise.reject(Error("Invalid destination request."));
          } else {
            return this.messageHandler.sendWithPromise("GetDestination", {
              id: t
            });
          }
        }
        getPageLabels() {
          return this.messageHandler.sendWithPromise("GetPageLabels", null);
        }
        getPageLayout() {
          return this.messageHandler.sendWithPromise("GetPageLayout", null);
        }
        getPageMode() {
          return this.messageHandler.sendWithPromise("GetPageMode", null);
        }
        getViewerPreferences() {
          return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
        }
        getOpenAction() {
          return this.messageHandler.sendWithPromise("GetOpenAction", null);
        }
        getAttachments() {
          return this.messageHandler.sendWithPromise("GetAttachments", null);
        }
        getDocJSActions() {
          return this.#f("GetDocJSActions");
        }
        getPageJSActions(t) {
          return this.messageHandler.sendWithPromise("GetPageJSActions", {
            pageIndex: t
          });
        }
        getStructTree(t) {
          return this.messageHandler.sendWithPromise("GetStructTree", {
            pageIndex: t
          });
        }
        getOutline() {
          return this.messageHandler.sendWithPromise("GetOutline", null);
        }
        getOptionalContentConfig() {
          return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then(t => new _optional_content_config.OptionalContentConfig(t));
        }
        getPermissions() {
          return this.messageHandler.sendWithPromise("GetPermissions", null);
        }
        getMetadata() {
          let t = "GetMetadata";
          let e = this.#h.get(t);
          if (e) {
            return e;
          }
          let r = this.messageHandler.sendWithPromise(t, null).then(t => ({
            info: t[0],
            metadata: t[1] ? new _metadata.Metadata(t[1]) : null,
            contentDispositionFilename: this._fullReader?.filename ?? null,
            contentLength: this._fullReader?.contentLength ?? null
          }));
          this.#h.set(t, r);
          return r;
        }
        getMarkInfo() {
          return this.messageHandler.sendWithPromise("GetMarkInfo", null);
        }
        async startCleanup(t = false) {
          if (!this.destroyed) {
            await this.messageHandler.sendWithPromise("Cleanup", null);
            for (let t of this.#c.values()) {
              if (!t.cleanup()) {
                throw Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);
              }
            }
            this.commonObjs.clear();
            if (!t) {
              this.fontLoader.clear();
            }
            this.#h.clear();
            this.filterFactory.destroy(true);
          }
        }
        get loadingParams() {
          let {
            disableAutoFetch: t,
            enableXfa: e
          } = this._params;
          return _util.shadow(this, "loadingParams", {
            disableAutoFetch: t,
            enableXfa: e
          });
        }
      }
      class PDFObjects {
        #p = Object.create(null);
        #g(t) {
          return this.#p[t] ||= {
            capability: new _util.PromiseCapability(),
            data: null
          };
        }
        get(t, e = null) {
          if (e) {
            let r = this.#g(t);
            r.capability.promise.then(() => e(r.data));
            return null;
          }
          let r = this.#p[t];
          if (!r?.capability.settled) {
            throw Error(`Requesting object that isn't resolved yet ${t}.`);
          }
          return r.data;
        }
        has(t) {
          let e = this.#p[t];
          return e?.capability.settled || false;
        }
        resolve(t, e = null) {
          let r = this.#g(t);
          r.data = e;
          r.capability.resolve();
        }
        clear() {
          for (let t in this.#p) {
            let {
              data: e
            } = this.#p[t];
            e?.bitmap?.close();
          }
          this.#p = Object.create(null);
        }
      }
      class RenderTask {
        #m = null;
        constructor(t) {
          this.#m = t;
          this.onContinue = null;
        }
        get promise() {
          return this.#m.capability.promise;
        }
        cancel(t = 0) {
          this.#m.cancel(null, t);
        }
        get separateAnnots() {
          let {
            separateAnnots: t
          } = this.#m.operatorList;
          if (!t) {
            return false;
          }
          let {
            annotationCanvasMap: e
          } = this.#m;
          return t.form || t.canvas && e?.size > 0;
        }
      }
      exports.RenderTask = RenderTask;
      class InternalRenderTask {
        static #v = new WeakSet();
        constructor({
          callback: t,
          params: e,
          objs: r,
          commonObjs: i,
          annotationCanvasMap: n,
          operatorList: o,
          pageIndex: s,
          canvasFactory: a,
          filterFactory: l,
          useRequestAnimationFrame: h = false,
          pdfBug: c = false,
          pageColors: u = null
        }) {
          this.callback = t;
          this.params = e;
          this.objs = r;
          this.commonObjs = i;
          this.annotationCanvasMap = n;
          this.operatorListIdx = null;
          this.operatorList = o;
          this._pageIndex = s;
          this.canvasFactory = a;
          this.filterFactory = l;
          this._pdfBug = c;
          this.pageColors = u;
          this.running = false;
          this.graphicsReadyCallback = null;
          this.graphicsReady = false;
          this._useRequestAnimationFrame = h === true && typeof window != "undefined";
          this.cancelled = false;
          this.capability = new _util.PromiseCapability();
          this.task = new RenderTask(this);
          this._cancelBound = this.cancel.bind(this);
          this._continueBound = this._continue.bind(this);
          this._scheduleNextBound = this._scheduleNext.bind(this);
          this._nextBound = this._next.bind(this);
          this._canvas = e.canvasContext.canvas;
        }
        get completed() {
          return this.capability.promise.catch(function () {});
        }
        initializeGraphics({
          transparency: t = false,
          optionalContentConfig: e
        }) {
          if (this.cancelled) {
            return;
          }
          if (this._canvas) {
            if (InternalRenderTask.#v.has(this._canvas)) {
              throw Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
            }
            InternalRenderTask.#v.add(this._canvas);
          }
          if (this._pdfBug && globalThis.StepperManager?.enabled) {
            this.stepper = globalThis.StepperManager.create(this._pageIndex);
            this.stepper.init(this.operatorList);
            this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
          }
          let {
            canvasContext: r,
            viewport: i,
            transform: n,
            background: o
          } = this.params;
          this.gfx = new _canvas.CanvasGraphics(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: e
          }, this.annotationCanvasMap, this.pageColors);
          this.gfx.beginDrawing({
            transform: n,
            viewport: i,
            transparency: t,
            background: o
          });
          this.operatorListIdx = 0;
          this.graphicsReady = true;
          this.graphicsReadyCallback?.();
        }
        cancel(t = null, e = 0) {
          this.running = false;
          this.cancelled = true;
          this.gfx?.endDrawing();
          InternalRenderTask.#v.delete(this._canvas);
          this.callback(t || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
        }
        operatorListChanged() {
          if (!this.graphicsReady) {
            this.graphicsReadyCallback ||= this._continueBound;
            return;
          }
          this.stepper?.updateOperatorList(this.operatorList);
          if (!this.running) {
            this._continue();
          }
        }
        _continue() {
          this.running = true;
          if (!this.cancelled) {
            if (this.task.onContinue) {
              this.task.onContinue(this._scheduleNextBound);
            } else {
              this._scheduleNext();
            }
          }
        }
        _scheduleNext() {
          if (this._useRequestAnimationFrame) {
            window.requestAnimationFrame(() => {
              this._nextBound().catch(this._cancelBound);
            });
          } else {
            Promise.resolve().then(this._nextBound).catch(this._cancelBound);
          }
        }
        async _next() {
          if (!this.cancelled) {
            this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
            if (this.operatorListIdx === this.operatorList.argsArray.length) {
              this.running = false;
              if (this.operatorList.lastChunk) {
                this.gfx.endDrawing();
                InternalRenderTask.#v.delete(this._canvas);
                this.callback();
              }
            }
          }
        }
      }
      let version = "3.11.174";
      exports.version = version;
      let build = "ce8716743";
      exports.build = build;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.SerializableEmpty = e.PrintAnnotationStorage = e.AnnotationStorage = undefined;
      var i = r(1);
      var n = r(4);
      var o = r(8);
      let s = Object.freeze({
        map: null,
        hash: "",
        transfers: undefined
      });
      e.SerializableEmpty = s;
      class a {
        #y = false;
        #b = new Map();
        constructor() {
          this.onSetModified = null;
          this.onResetModified = null;
          this.onAnnotationEditor = null;
        }
        getValue(t, e) {
          let r = this.#b.get(t);
          if (r === undefined) {
            return e;
          } else {
            return Object.assign(e, r);
          }
        }
        getRawValue(t) {
          return this.#b.get(t);
        }
        remove(t) {
          this.#b.delete(t);
          if (this.#b.size === 0) {
            this.resetModified();
          }
          if (typeof this.onAnnotationEditor == "function") {
            for (let t of this.#b.values()) {
              if (t instanceof n.AnnotationEditor) {
                return;
              }
            }
            this.onAnnotationEditor(null);
          }
        }
        setValue(t, e) {
          let r = this.#b.get(t);
          let i = false;
          if (r !== undefined) {
            for (let [t, n] of Object.entries(e)) {
              if (r[t] !== n) {
                i = true;
                r[t] = n;
              }
            }
          } else {
            i = true;
            this.#b.set(t, e);
          }
          if (i) {
            this.#A();
          }
          if (e instanceof n.AnnotationEditor && typeof this.onAnnotationEditor == "function") {
            this.onAnnotationEditor(e.constructor._type);
          }
        }
        has(t) {
          return this.#b.has(t);
        }
        getAll() {
          if (this.#b.size > 0) {
            return i.objectFromMap(this.#b);
          } else {
            return null;
          }
        }
        setAll(t) {
          for (let [e, r] of Object.entries(t)) {
            this.setValue(e, r);
          }
        }
        get size() {
          return this.#b.size;
        }
        #A() {
          if (!this.#y) {
            this.#y = true;
            if (typeof this.onSetModified == "function") {
              this.onSetModified();
            }
          }
        }
        resetModified() {
          if (this.#y) {
            this.#y = false;
            if (typeof this.onResetModified == "function") {
              this.onResetModified();
            }
          }
        }
        get print() {
          return new l(this);
        }
        get serializable() {
          if (this.#b.size === 0) {
            return s;
          }
          let t = new Map();
          let e = new o.MurmurHash3_64();
          let r = [];
          let i = Object.create(null);
          let a = false;
          for (let [r, o] of this.#b) {
            let s = o instanceof n.AnnotationEditor ? o.serialize(false, i) : o;
            if (s) {
              t.set(r, s);
              e.update(`${r}:${JSON.stringify(s)}`);
              a ||= !!s.bitmap;
            }
          }
          if (a) {
            for (let e of t.values()) {
              if (e.bitmap) {
                r.push(e.bitmap);
              }
            }
          }
          if (t.size > 0) {
            return {
              map: t,
              hash: e.hexdigest(),
              transfers: r
            };
          } else {
            return s;
          }
        }
      }
      e.AnnotationStorage = a;
      class l extends a {
        #S;
        constructor(t) {
          super();
          let {
            map: e,
            hash: r,
            transfers: i
          } = t.serializable;
          let n = structuredClone(e, i ? {
            transfer: i
          } : null);
          this.#S = {
            map: n,
            hash: r,
            transfers: i
          };
        }
        get print() {
          i.unreachable("Should not call PrintAnnotationStorage.print");
        }
        get serializable() {
          return this.#S;
        }
      }
      e.PrintAnnotationStorage = l;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.AnnotationEditor = undefined;
      var i = r(5);
      var n = r(1);
      var o = r(6);
      class s {
        #x = "";
        #w = false;
        #C = null;
        #T = null;
        #E = null;
        #F = false;
        #k = null;
        #P = this.focusin.bind(this);
        #R = this.focusout.bind(this);
        #M = false;
        #O = false;
        #D = false;
        _initialOptions = Object.create(null);
        _uiManager = null;
        _focusEventsAllowed = true;
        _l10nPromise = null;
        #I = false;
        #L = s._zIndex++;
        static _borderLineWidth = -1;
        static _colorManager = new i.ColorManager();
        static _zIndex = 1;
        static SMALL_EDITOR_SIZE = 0;
        constructor(t) {
          if (this.constructor === s) {
            n.unreachable("Cannot initialize AnnotationEditor.");
          }
          this.parent = t.parent;
          this.id = t.id;
          this.width = this.height = null;
          this.pageIndex = t.parent.pageIndex;
          this.name = t.name;
          this.div = null;
          this._uiManager = t.uiManager;
          this.annotationElementId = null;
          this._willKeepAspectRatio = false;
          this._initialOptions.isCentered = t.isCentered;
          this._structTreeParentId = null;
          let {
            rotation: e,
            rawDims: {
              pageWidth: r,
              pageHeight: i,
              pageX: o,
              pageY: a
            }
          } = this.parent.viewport;
          this.rotation = e;
          this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360;
          this.pageDimensions = [r, i];
          this.pageTranslation = [o, a];
          let [l, h] = this.parentDimensions;
          this.x = t.x / l;
          this.y = t.y / h;
          this.isAttachedToDOM = false;
          this.deleted = false;
        }
        get editorType() {
          return Object.getPrototypeOf(this).constructor._type;
        }
        static get _defaultLineColor() {
          return n.shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
        }
        static deleteAnnotationElement(t) {
          let e = new a({
            id: t.parent.getNextId(),
            parent: t.parent,
            uiManager: t._uiManager
          });
          e.annotationElementId = t.annotationElementId;
          e.deleted = true;
          e._uiManager.addToAnnotationStorage(e);
        }
        static initialize(t, e = null) {
          s._l10nPromise ||= new Map(["editor_alt_text_button_label", "editor_alt_text_edit_button_label", "editor_alt_text_decorative_tooltip"].map(e => [e, t.get(e)]));
          if (e?.strings) {
            for (let r of e.strings) {
              s._l10nPromise.set(r, t.get(r));
            }
          }
          if (s._borderLineWidth !== -1) {
            return;
          }
          let r = getComputedStyle(document.documentElement);
          s._borderLineWidth = parseFloat(r.getPropertyValue("--outline-width")) || 0;
        }
        static updateDefaultParams(t, e) {}
        static get defaultPropertiesToUpdate() {
          return [];
        }
        static isHandlingMimeForPasting(t) {
          return false;
        }
        static paste(t, e) {
          n.unreachable("Not implemented");
        }
        get propertiesToUpdate() {
          return [];
        }
        get _isDraggable() {
          return this.#I;
        }
        set _isDraggable(t) {
          this.#I = t;
          this.div?.classList.toggle("draggable", t);
        }
        center() {
          let [t, e] = this.pageDimensions;
          switch (this.parentRotation) {
            case 90:
              this.x -= this.height * e / (t * 2);
              this.y += this.width * t / (e * 2);
              break;
            case 180:
              this.x += this.width / 2;
              this.y += this.height / 2;
              break;
            case 270:
              this.x += this.height * e / (t * 2);
              this.y -= this.width * t / (e * 2);
              break;
            default:
              this.x -= this.width / 2;
              this.y -= this.height / 2;
          }
          this.fixAndSetPosition();
        }
        addCommands(t) {
          this._uiManager.addCommands(t);
        }
        get currentLayer() {
          return this._uiManager.currentLayer;
        }
        setInBackground() {
          this.div.style.zIndex = 0;
        }
        setInForeground() {
          this.div.style.zIndex = this.#L;
        }
        setParent(t) {
          if (t !== null) {
            this.pageIndex = t.pageIndex;
            this.pageDimensions = t.pageDimensions;
          }
          this.parent = t;
        }
        focusin(t) {
          if (this._focusEventsAllowed) {
            if (this.#M) {
              this.#M = false;
            } else {
              this.parent.setSelected(this);
            }
          }
        }
        focusout(t) {
          if (!this._focusEventsAllowed || !this.isAttachedToDOM) {
            return;
          }
          let e = t.relatedTarget;
          if (!e?.closest(`#${this.id}`)) {
            t.preventDefault();
            if (!this.parent?.isMultipleSelection) {
              this.commitOrRemove();
            }
          }
        }
        commitOrRemove() {
          if (this.isEmpty()) {
            this.remove();
          } else {
            this.commit();
          }
        }
        commit() {
          this.addToAnnotationStorage();
        }
        addToAnnotationStorage() {
          this._uiManager.addToAnnotationStorage(this);
        }
        setAt(t, e, r, i) {
          let [n, o] = this.parentDimensions;
          [r, i] = this.screenToPageTranslation(r, i);
          this.x = (t + r) / n;
          this.y = (e + i) / o;
          this.fixAndSetPosition();
        }
        #N([t, e], r, i) {
          [r, i] = this.screenToPageTranslation(r, i);
          this.x += r / t;
          this.y += i / e;
          this.fixAndSetPosition();
        }
        translate(t, e) {
          this.#N(this.parentDimensions, t, e);
        }
        translateInPage(t, e) {
          this.#N(this.pageDimensions, t, e);
          this.div.scrollIntoView({
            block: "nearest"
          });
        }
        drag(t, e) {
          let [r, i] = this.parentDimensions;
          this.x += t / r;
          this.y += e / i;
          if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
            let {
              x: t,
              y: e
            } = this.div.getBoundingClientRect();
            if (this.parent.findNewParent(this, t, e)) {
              this.x -= Math.floor(this.x);
              this.y -= Math.floor(this.y);
            }
          }
          let {
            x: n,
            y: o
          } = this;
          let [s, a] = this.#B();
          n += s;
          o += a;
          this.div.style.left = `${(n * 100).toFixed(2)}%`;
          this.div.style.top = `${(o * 100).toFixed(2)}%`;
          this.div.scrollIntoView({
            block: "nearest"
          });
        }
        #B() {
          let [t, e] = this.parentDimensions;
          let {
            _borderLineWidth: r
          } = s;
          let i = r / t;
          let n = r / e;
          switch (this.rotation) {
            case 90:
              return [-i, n];
            case 180:
              return [i, n];
            case 270:
              return [i, -n];
            default:
              return [-i, -n];
          }
        }
        fixAndSetPosition() {
          let [t, e] = this.pageDimensions;
          let {
            x: r,
            y: i,
            width: n,
            height: o
          } = this;
          n *= t;
          o *= e;
          r *= t;
          i *= e;
          switch (this.rotation) {
            case 0:
              r = Math.max(0, Math.min(t - n, r));
              i = Math.max(0, Math.min(e - o, i));
              break;
            case 90:
              r = Math.max(0, Math.min(t - o, r));
              i = Math.min(e, Math.max(n, i));
              break;
            case 180:
              r = Math.min(t, Math.max(n, r));
              i = Math.min(e, Math.max(o, i));
              break;
            case 270:
              r = Math.min(t, Math.max(o, r));
              i = Math.max(0, Math.min(e - n, i));
          }
          this.x = r /= t;
          this.y = i /= e;
          let [s, a] = this.#B();
          r += s;
          i += a;
          let {
            style: l
          } = this.div;
          l.left = `${(r * 100).toFixed(2)}%`;
          l.top = `${(i * 100).toFixed(2)}%`;
          this.moveInDOM();
        }
        static #j(t, e, r) {
          switch (r) {
            case 90:
              return [e, -t];
            case 180:
              return [-t, -e];
            case 270:
              return [-e, t];
            default:
              return [t, e];
          }
        }
        screenToPageTranslation(t, e) {
          return s.#j(t, e, this.parentRotation);
        }
        pageTranslationToScreen(t, e) {
          return s.#j(t, e, 360 - this.parentRotation);
        }
        #_(t) {
          switch (t) {
            case 90:
              {
                let [t, e] = this.pageDimensions;
                return [0, -t / e, e / t, 0];
              }
            case 180:
              return [-1, 0, 0, -1];
            case 270:
              {
                let [t, e] = this.pageDimensions;
                return [0, t / e, -e / t, 0];
              }
            default:
              return [1, 0, 0, 1];
          }
        }
        get parentScale() {
          return this._uiManager.viewParameters.realScale;
        }
        get parentRotation() {
          return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
        }
        get parentDimensions() {
          let {
            parentScale: t,
            pageDimensions: [e, r]
          } = this;
          let i = e * t;
          let o = r * t;
          if (n.FeatureTest.isCSSRoundSupported) {
            return [Math.round(i), Math.round(o)];
          } else {
            return [i, o];
          }
        }
        setDims(t, e) {
          let [r, i] = this.parentDimensions;
          this.div.style.width = `${(t * 100 / r).toFixed(2)}%`;
          if (!this.#F) {
            this.div.style.height = `${(e * 100 / i).toFixed(2)}%`;
          }
          this.#C?.classList.toggle("small", t < s.SMALL_EDITOR_SIZE || e < s.SMALL_EDITOR_SIZE);
        }
        fixDims() {
          let {
            style: t
          } = this.div;
          let {
            height: e,
            width: r
          } = t;
          let i = r.endsWith("%");
          let n = !this.#F && e.endsWith("%");
          if (i && n) {
            return;
          }
          let [o, s] = this.parentDimensions;
          if (!i) {
            t.width = `${(parseFloat(r) * 100 / o).toFixed(2)}%`;
          }
          if (!this.#F && !n) {
            t.height = `${(parseFloat(e) * 100 / s).toFixed(2)}%`;
          }
        }
        getInitialTranslation() {
          return [0, 0];
        }
        #U() {
          if (this.#k) {
            return;
          }
          this.#k = document.createElement("div");
          this.#k.classList.add("resizers");
          let t = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
          if (!this._willKeepAspectRatio) {
            t.push("topMiddle", "middleRight", "bottomMiddle", "middleLeft");
          }
          for (let e of t) {
            let t = document.createElement("div");
            this.#k.append(t);
            t.classList.add("resizer", e);
            t.addEventListener("pointerdown", this.#z.bind(this, e));
            t.addEventListener("contextmenu", o.noContextMenu);
          }
          this.div.prepend(this.#k);
        }
        #z(t, e) {
          e.preventDefault();
          let {
            isMac: r
          } = n.FeatureTest.platform;
          if (e.button !== 0 || e.ctrlKey && r) {
            return;
          }
          let i = this.#V.bind(this, t);
          let o = this._isDraggable;
          this._isDraggable = false;
          let s = {
            passive: true,
            capture: true
          };
          window.addEventListener("pointermove", i, s);
          let a = this.x;
          let l = this.y;
          let h = this.width;
          let c = this.height;
          let u = this.parent.div.style.cursor;
          let d = this.div.style.cursor;
          this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
          let f = () => {
            this._isDraggable = o;
            window.removeEventListener("pointerup", f);
            window.removeEventListener("blur", f);
            window.removeEventListener("pointermove", i, s);
            this.parent.div.style.cursor = u;
            this.div.style.cursor = d;
            let t = this.x;
            let e = this.y;
            let r = this.width;
            let n = this.height;
            if (t !== a || e !== l || r !== h || n !== c) {
              this.addCommands({
                cmd: () => {
                  this.width = r;
                  this.height = n;
                  this.x = t;
                  this.y = e;
                  let [i, o] = this.parentDimensions;
                  this.setDims(i * r, o * n);
                  this.fixAndSetPosition();
                },
                undo: () => {
                  this.width = h;
                  this.height = c;
                  this.x = a;
                  this.y = l;
                  let [t, e] = this.parentDimensions;
                  this.setDims(t * h, e * c);
                  this.fixAndSetPosition();
                },
                mustExec: true
              });
            }
          };
          window.addEventListener("pointerup", f);
          window.addEventListener("blur", f);
        }
        #V(t, e) {
          let r;
          let i;
          let [n, o] = this.parentDimensions;
          let a = this.x;
          let l = this.y;
          let h = this.width;
          let c = this.height;
          let u = s.MIN_SIZE / n;
          let d = s.MIN_SIZE / o;
          let f = t => Math.round(t * 10000) / 10000;
          let p = this.#_(this.rotation);
          let g = (t, e) => [p[0] * t + p[2] * e, p[1] * t + p[3] * e];
          let m = this.#_(360 - this.rotation);
          let v = (t, e) => [m[0] * t + m[2] * e, m[1] * t + m[3] * e];
          let y = false;
          let b = false;
          switch (t) {
            case "topLeft":
              y = true;
              r = (t, e) => [0, 0];
              i = (t, e) => [t, e];
              break;
            case "topMiddle":
              r = (t, e) => [t / 2, 0];
              i = (t, e) => [t / 2, e];
              break;
            case "topRight":
              y = true;
              r = (t, e) => [t, 0];
              i = (t, e) => [0, e];
              break;
            case "middleRight":
              b = true;
              r = (t, e) => [t, e / 2];
              i = (t, e) => [0, e / 2];
              break;
            case "bottomRight":
              y = true;
              r = (t, e) => [t, e];
              i = (t, e) => [0, 0];
              break;
            case "bottomMiddle":
              r = (t, e) => [t / 2, e];
              i = (t, e) => [t / 2, 0];
              break;
            case "bottomLeft":
              y = true;
              r = (t, e) => [0, e];
              i = (t, e) => [t, 0];
              break;
            case "middleLeft":
              b = true;
              r = (t, e) => [0, e / 2];
              i = (t, e) => [t, e / 2];
          }
          let A = r(h, c);
          let S = i(h, c);
          let x = g(...S);
          let w = f(a + x[0]);
          let C = f(l + x[1]);
          let T = 1;
          let E = 1;
          let [F, k] = this.screenToPageTranslation(e.movementX, e.movementY);
          [F, k] = v(F / n, k / o);
          if (y) {
            let t = Math.hypot(h, c);
            T = E = Math.max(Math.min(Math.hypot(S[0] - A[0] - F, S[1] - A[1] - k) / t, 1 / h, 1 / c), u / h, d / c);
          } else if (b) {
            T = Math.max(u, Math.min(1, Math.abs(S[0] - A[0] - F))) / h;
          } else {
            E = Math.max(d, Math.min(1, Math.abs(S[1] - A[1] - k))) / c;
          }
          let P = f(h * T);
          let R = f(c * E);
          let M = w - (x = g(...i(P, R)))[0];
          let O = C - x[1];
          this.width = P;
          this.height = R;
          this.x = M;
          this.y = O;
          this.setDims(n * P, o * R);
          this.fixAndSetPosition();
        }
        async addAltTextButton() {
          if (this.#C) {
            return;
          }
          let t = this.#C = document.createElement("button");
          t.className = "altText";
          let e = await s._l10nPromise.get("editor_alt_text_button_label");
          t.textContent = e;
          t.setAttribute("aria-label", e);
          t.tabIndex = "0";
          t.addEventListener("contextmenu", o.noContextMenu);
          t.addEventListener("pointerdown", t => t.stopPropagation());
          t.addEventListener("click", t => {
            t.preventDefault();
            this._uiManager.editAltText(this);
          }, {
            capture: true
          });
          t.addEventListener("keydown", e => {
            if (e.target === t && e.key === "Enter") {
              e.preventDefault();
              this._uiManager.editAltText(this);
            }
          });
          this.#W();
          this.div.append(t);
          if (!s.SMALL_EDITOR_SIZE) {
            let e = 40;
            s.SMALL_EDITOR_SIZE = Math.min(128, Math.round(t.getBoundingClientRect().width * (1 + e / 100)));
          }
        }
        async #W() {
          let t = this.#C;
          if (!t) {
            return;
          }
          if (!this.#x && !this.#w) {
            t.classList.remove("done");
            this.#T?.remove();
            return;
          }
          s._l10nPromise.get("editor_alt_text_edit_button_label").then(e => {
            t.setAttribute("aria-label", e);
          });
          let e = this.#T;
          if (!e) {
            this.#T = e = document.createElement("span");
            e.className = "tooltip";
            e.setAttribute("role", "tooltip");
            let r = e.id = `alt-text-tooltip-${this.id}`;
            t.setAttribute("aria-describedby", r);
            let i = 100;
            t.addEventListener("mouseenter", () => {
              this.#E = setTimeout(() => {
                this.#E = null;
                this.#T.classList.add("show");
                this._uiManager._eventBus.dispatch("reporttelemetry", {
                  source: this,
                  details: {
                    type: "editing",
                    subtype: this.editorType,
                    data: {
                      action: "alt_text_tooltip"
                    }
                  }
                });
              }, i);
            });
            t.addEventListener("mouseleave", () => {
              clearTimeout(this.#E);
              this.#E = null;
              this.#T?.classList.remove("show");
            });
          }
          t.classList.add("done");
          e.innerText = this.#w ? await s._l10nPromise.get("editor_alt_text_decorative_tooltip") : this.#x;
          if (!e.parentNode) {
            t.append(e);
          }
        }
        getClientDimensions() {
          return this.div.getBoundingClientRect();
        }
        get altTextData() {
          return {
            altText: this.#x,
            decorative: this.#w
          };
        }
        set altTextData({
          altText: t,
          decorative: e
        }) {
          if (this.#x !== t || this.#w !== e) {
            this.#x = t;
            this.#w = e;
            this.#W();
          }
        }
        render() {
          this.div = document.createElement("div");
          this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
          this.div.className = this.name;
          this.div.setAttribute("id", this.id);
          this.div.setAttribute("tabIndex", 0);
          this.setInForeground();
          this.div.addEventListener("focusin", this.#P);
          this.div.addEventListener("focusout", this.#R);
          let [t, e] = this.parentDimensions;
          if (this.parentRotation % 180 != 0) {
            this.div.style.maxWidth = `${(e * 100 / t).toFixed(2)}%`;
            this.div.style.maxHeight = `${(t * 100 / e).toFixed(2)}%`;
          }
          let [r, n] = this.getInitialTranslation();
          this.translate(r, n);
          i.bindEvents(this, this.div, ["pointerdown"]);
          return this.div;
        }
        pointerdown(t) {
          let {
            isMac: e
          } = n.FeatureTest.platform;
          if (t.button !== 0 || t.ctrlKey && e) {
            t.preventDefault();
            return;
          }
          this.#M = true;
          this.#G(t);
        }
        #G(t) {
          let e;
          let r;
          if (!this._isDraggable) {
            return;
          }
          let i = this._uiManager.isSelected(this);
          this._uiManager.setUpDragSession();
          if (i) {
            e = {
              passive: true,
              capture: true
            };
            r = t => {
              let [e, r] = this.screenToPageTranslation(t.movementX, t.movementY);
              this._uiManager.dragSelectedEditors(e, r);
            };
            window.addEventListener("pointermove", r, e);
          }
          let o = () => {
            window.removeEventListener("pointerup", o);
            window.removeEventListener("blur", o);
            if (i) {
              window.removeEventListener("pointermove", r, e);
            }
            this.#M = false;
            if (!this._uiManager.endDragSession()) {
              let {
                isMac: e
              } = n.FeatureTest.platform;
              if (t.ctrlKey && !e || t.shiftKey || t.metaKey && e) {
                this.parent.toggleSelected(this);
              } else {
                this.parent.setSelected(this);
              }
            }
          };
          window.addEventListener("pointerup", o);
          window.addEventListener("blur", o);
        }
        moveInDOM() {
          this.parent?.moveEditorInDOM(this);
        }
        _setParentAndPosition(t, e, r) {
          t.changeParent(this);
          this.x = e;
          this.y = r;
          this.fixAndSetPosition();
        }
        getRect(t, e) {
          let r = this.parentScale;
          let [i, n] = this.pageDimensions;
          let [o, s] = this.pageTranslation;
          let a = t / r;
          let l = e / r;
          let h = this.x * i;
          let c = this.y * n;
          let u = this.width * i;
          let d = this.height * n;
          switch (this.rotation) {
            case 0:
              return [h + a + o, n - c - l - d + s, h + a + u + o, n - c - l + s];
            case 90:
              return [h + l + o, n - c + a + s, h + l + d + o, n - c + a + u + s];
            case 180:
              return [h - a - u + o, n - c + l + s, h - a + o, n - c + l + d + s];
            case 270:
              return [h - l - d + o, n - c - a - u + s, h - l + o, n - c - a + s];
            default:
              throw Error("Invalid rotation");
          }
        }
        getRectInCurrentCoords(t, e) {
          let [r, i, n, o] = t;
          let s = n - r;
          let a = o - i;
          switch (this.rotation) {
            case 0:
              return [r, e - o, s, a];
            case 90:
              return [r, e - i, a, s];
            case 180:
              return [n, e - i, s, a];
            case 270:
              return [n, e - o, a, s];
            default:
              throw Error("Invalid rotation");
          }
        }
        onceAdded() {}
        isEmpty() {
          return false;
        }
        enableEditMode() {
          this.#D = true;
        }
        disableEditMode() {
          this.#D = false;
        }
        isInEditMode() {
          return this.#D;
        }
        shouldGetKeyboardEvents() {
          return false;
        }
        needsToBeRebuilt() {
          return this.div && !this.isAttachedToDOM;
        }
        rebuild() {
          this.div?.addEventListener("focusin", this.#P);
          this.div?.addEventListener("focusout", this.#R);
        }
        serialize(t = false, e = null) {
          n.unreachable("An editor must be serializable");
        }
        static deserialize(t, e, r) {
          let i = new this.prototype.constructor({
            parent: e,
            id: e.getNextId(),
            uiManager: r
          });
          i.rotation = t.rotation;
          let [n, o] = i.pageDimensions;
          let [s, a, l, h] = i.getRectInCurrentCoords(t.rect, o);
          i.x = s / n;
          i.y = a / o;
          i.width = l / n;
          i.height = h / o;
          return i;
        }
        remove() {
          this.div.removeEventListener("focusin", this.#P);
          this.div.removeEventListener("focusout", this.#R);
          if (!this.isEmpty()) {
            this.commit();
          }
          if (this.parent) {
            this.parent.remove(this);
          } else {
            this._uiManager.removeEditor(this);
          }
          this.#C?.remove();
          this.#C = null;
          this.#T = null;
        }
        get isResizable() {
          return false;
        }
        makeResizable() {
          if (this.isResizable) {
            this.#U();
            this.#k.classList.remove("hidden");
          }
        }
        select() {
          this.makeResizable();
          this.div?.classList.add("selectedEditor");
        }
        unselect() {
          this.#k?.classList.add("hidden");
          this.div?.classList.remove("selectedEditor");
          if (this.div?.contains(document.activeElement)) {
            this._uiManager.currentLayer.div.focus();
          }
        }
        updateParams(t, e) {}
        disableEditing() {
          if (this.#C) {
            this.#C.hidden = true;
          }
        }
        enableEditing() {
          if (this.#C) {
            this.#C.hidden = false;
          }
        }
        enterInEditMode() {}
        get contentDiv() {
          return this.div;
        }
        get isEditing() {
          return this.#O;
        }
        set isEditing(t) {
          this.#O = t;
          if (this.parent) {
            if (t) {
              this.parent.setSelected(this);
              this.parent.setActiveEditor(this);
            } else {
              this.parent.setActiveEditor(null);
            }
          }
        }
        setAspectRatio(t, e) {
          this.#F = true;
          let r = t / e;
          let {
            style: i
          } = this.div;
          i.aspectRatio = r;
          i.height = "auto";
        }
        static get MIN_SIZE() {
          return 16;
        }
      }
      e.AnnotationEditor = s;
      class a extends s {
        constructor(t) {
          super(t);
          this.annotationElementId = t.annotationElementId;
          this.deleted = true;
        }
        serialize() {
          return {
            id: this.annotationElementId,
            deleted: true,
            pageIndex: this.pageIndex
          };
        }
      }
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.KeyboardManager = e.CommandManager = e.ColorManager = e.AnnotationEditorUIManager = undefined;
      e.bindEvents = o;
      e.opacityToHex = s;
      var i = r(1);
      var n = r(6);
      function o(t, e, r) {
        for (let i of r) {
          e.addEventListener(i, t[i].bind(t));
        }
      }
      function s(t) {
        return Math.round(Math.min(255, Math.max(1, t * 255))).toString(16).padStart(2, "0");
      }
      class a {
        #q = 0;
        getId() {
          return `${i.AnnotationEditorPrefix}${this.#q++}`;
        }
      }
      class l {
        #H = i.getUuid();
        #q = 0;
        #K = null;
        static get _isSVGFittingCanvas() {
          let t = "data:image/svg+xml;charset=UTF-8,<svg viewBox=\"0 0 1 1\" width=\"1\" height=\"1\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"1\" style=\"fill:red;\"/></svg>";
          let e = new OffscreenCanvas(1, 3).getContext("2d");
          let r = new Image();
          r.src = t;
          let n = r.decode().then(() => {
            e.drawImage(r, 0, 0, 1, 1, 0, 0, 1, 3);
            return new Uint32Array(e.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
          });
          return i.shadow(this, "_isSVGFittingCanvas", n);
        }
        async #X(t, e) {
          this.#K ||= new Map();
          let r = this.#K.get(t);
          if (r === null) {
            return null;
          }
          if (r?.bitmap) {
            r.refCounter += 1;
            return r;
          }
          try {
            let t;
            r ||= {
              bitmap: null,
              id: `image_${this.#H}_${this.#q++}`,
              refCounter: 0,
              isSvg: false
            };
            if (typeof e == "string") {
              r.url = e;
              let i = await fetch(e);
              if (!i.ok) {
                throw Error(i.statusText);
              }
              t = await i.blob();
            } else {
              t = r.file = e;
            }
            if (t.type === "image/svg+xml") {
              let e = l._isSVGFittingCanvas;
              let i = new FileReader();
              let n = new Image();
              let o = new Promise((t, o) => {
                n.onload = () => {
                  r.bitmap = n;
                  r.isSvg = true;
                  t();
                };
                i.onload = async () => {
                  let t = r.svgUrl = i.result;
                  n.src = (await e) ? `${t}#svgView(preserveAspectRatio(none))` : t;
                };
                n.onerror = i.onerror = o;
              });
              i.readAsDataURL(t);
              await o;
            } else {
              r.bitmap = await createImageBitmap(t);
            }
            r.refCounter = 1;
          } catch (t) {
            r = null;
          }
          this.#K.set(t, r);
          if (r) {
            this.#K.set(r.id, r);
          }
          return r;
        }
        async getFromFile(t) {
          let {
            lastModified: e,
            name: r,
            size: i,
            type: n
          } = t;
          return this.#X(`${e}_${r}_${i}_${n}`, t);
        }
        async getFromUrl(t) {
          return this.#X(t, t);
        }
        async getFromId(t) {
          this.#K ||= new Map();
          let e = this.#K.get(t);
          if (e) {
            if (e.bitmap) {
              e.refCounter += 1;
              return e;
            } else if (e.file) {
              return this.getFromFile(e.file);
            } else {
              return this.getFromUrl(e.url);
            }
          } else {
            return null;
          }
        }
        getSvgUrl(t) {
          let e = this.#K.get(t);
          if (e?.isSvg) {
            return e.svgUrl;
          } else {
            return null;
          }
        }
        deleteId(t) {
          this.#K ||= new Map();
          let e = this.#K.get(t);
          if (e) {
            e.refCounter -= 1;
            if (e.refCounter === 0) {
              e.bitmap = null;
            }
          }
        }
        isValidId(t) {
          return t.startsWith(`image_${this.#H}_`);
        }
      }
      class h {
        #Z = [];
        #Y = false;
        #J;
        #Q = -1;
        constructor(t = 128) {
          this.#J = t;
        }
        add({
          cmd: t,
          undo: e,
          mustExec: r,
          type: i = NaN,
          overwriteIfSameType: n = false,
          keepUndo: o = false
        }) {
          if (r) {
            t();
          }
          if (this.#Y) {
            return;
          }
          let s = {
            cmd: t,
            undo: e,
            type: i
          };
          if (this.#Q === -1) {
            if (this.#Z.length > 0) {
              this.#Z.length = 0;
            }
            this.#Q = 0;
            this.#Z.push(s);
            return;
          }
          if (n && this.#Z[this.#Q].type === i) {
            if (o) {
              s.undo = this.#Z[this.#Q].undo;
            }
            this.#Z[this.#Q] = s;
            return;
          }
          let a = this.#Q + 1;
          if (a === this.#J) {
            this.#Z.splice(0, 1);
          } else {
            this.#Q = a;
            if (a < this.#Z.length) {
              this.#Z.splice(a);
            }
          }
          this.#Z.push(s);
        }
        undo() {
          if (this.#Q !== -1) {
            this.#Y = true;
            this.#Z[this.#Q].undo();
            this.#Y = false;
            this.#Q -= 1;
          }
        }
        redo() {
          if (this.#Q < this.#Z.length - 1) {
            this.#Q += 1;
            this.#Y = true;
            this.#Z[this.#Q].cmd();
            this.#Y = false;
          }
        }
        hasSomethingToUndo() {
          return this.#Q !== -1;
        }
        hasSomethingToRedo() {
          return this.#Q < this.#Z.length - 1;
        }
        destroy() {
          this.#Z = null;
        }
      }
      e.CommandManager = h;
      class c {
        constructor(t) {
          this.buffer = [];
          this.callbacks = new Map();
          this.allKeys = new Set();
          let {
            isMac: e
          } = i.FeatureTest.platform;
          for (let [r, i, n = {}] of t) {
            for (let t of r) {
              let r = t.startsWith("mac+");
              if (e && r) {
                this.callbacks.set(t.slice(4), {
                  callback: i,
                  options: n
                });
                this.allKeys.add(t.split("+").at(-1));
              } else if (!e && !r) {
                this.callbacks.set(t, {
                  callback: i,
                  options: n
                });
                this.allKeys.add(t.split("+").at(-1));
              }
            }
          }
        }
        #$(t) {
          if (t.altKey) {
            this.buffer.push("alt");
          }
          if (t.ctrlKey) {
            this.buffer.push("ctrl");
          }
          if (t.metaKey) {
            this.buffer.push("meta");
          }
          if (t.shiftKey) {
            this.buffer.push("shift");
          }
          this.buffer.push(t.key);
          let e = this.buffer.join("+");
          this.buffer.length = 0;
          return e;
        }
        exec(t, e) {
          if (!this.allKeys.has(e.key)) {
            return;
          }
          let r = this.callbacks.get(this.#$(e));
          if (!r) {
            return;
          }
          let {
            callback: i,
            options: {
              bubbles: n = false,
              args: o = [],
              checker: s = null
            }
          } = r;
          if (!s || s(t, e)) {
            i.bind(t, ...o)();
            if (!n) {
              e.stopPropagation();
              e.preventDefault();
            }
          }
        }
      }
      e.KeyboardManager = c;
      class u {
        static _colorsMapping = new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
        get _colors() {
          let t = new Map([["CanvasText", null], ["Canvas", null]]);
          n.getColorValues(t);
          return i.shadow(this, "_colors", t);
        }
        convert(t) {
          let e = n.getRGB(t);
          if (!window.matchMedia("(forced-colors: active)").matches) {
            return e;
          }
          for (let [t, r] of this._colors) {
            if (r.every((t, r) => t === e[r])) {
              return u._colorsMapping.get(t);
            }
          }
          return e;
        }
        getHexCode(t) {
          let e = this._colors.get(t);
          if (e) {
            return i.Util.makeHexColor(...e);
          } else {
            return t;
          }
        }
      }
      e.ColorManager = u;
      class d {
        #tt = null;
        #te = new Map();
        #tr = new Map();
        #ti = null;
        #tn = null;
        #to = new h();
        #ts = 0;
        #ta = new Set();
        #tl = null;
        #th = null;
        #tc = new Set();
        #tu = null;
        #td = new a();
        #tf = false;
        #tp = false;
        #tg = null;
        #tm = i.AnnotationEditorType.NONE;
        #tv = new Set();
        #ty = null;
        #tb = this.blur.bind(this);
        #tA = this.focus.bind(this);
        #tS = this.copy.bind(this);
        #tx = this.cut.bind(this);
        #tw = this.paste.bind(this);
        #tC = this.keydown.bind(this);
        #tT = this.onEditingAction.bind(this);
        #tE = this.onPageChanging.bind(this);
        #tF = this.onScaleChanging.bind(this);
        #tk = this.onRotationChanging.bind(this);
        #tP = {
          isEditing: false,
          isEmpty: true,
          hasSomethingToUndo: false,
          hasSomethingToRedo: false,
          hasSelectedEditor: false
        };
        #tR = [0, 0];
        #tM = null;
        #tO = null;
        #tD = null;
        static TRANSLATE_SMALL = 1;
        static TRANSLATE_BIG = 10;
        static get _keyboardManager() {
          let t = d.prototype;
          let e = t => {
            let {
              activeElement: e
            } = document;
            return e && t.#tO.contains(e) && t.hasSomethingToControl();
          };
          let r = this.TRANSLATE_SMALL;
          let n = this.TRANSLATE_BIG;
          return i.shadow(this, "_keyboardManager", new c([[["ctrl+a", "mac+meta+a"], t.selectAll], [["ctrl+z", "mac+meta+z"], t.undo], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
            args: [-r, 0],
            checker: e
          }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
            args: [-n, 0],
            checker: e
          }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
            args: [r, 0],
            checker: e
          }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
            args: [n, 0],
            checker: e
          }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
            args: [0, -r],
            checker: e
          }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
            args: [0, -n],
            checker: e
          }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
            args: [0, r],
            checker: e
          }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
            args: [0, n],
            checker: e
          }]]));
        }
        constructor(t, e, r, i, o, s) {
          this.#tO = t;
          this.#tD = e;
          this.#ti = r;
          this._eventBus = i;
          this._eventBus._on("editingaction", this.#tT);
          this._eventBus._on("pagechanging", this.#tE);
          this._eventBus._on("scalechanging", this.#tF);
          this._eventBus._on("rotationchanging", this.#tk);
          this.#tn = o.annotationStorage;
          this.#tu = o.filterFactory;
          this.#ty = s;
          this.viewParameters = {
            realScale: n.PixelsPerInch.PDF_TO_CSS_UNITS,
            rotation: 0
          };
        }
        destroy() {
          this.#tI();
          this.#tL();
          this._eventBus._off("editingaction", this.#tT);
          this._eventBus._off("pagechanging", this.#tE);
          this._eventBus._off("scalechanging", this.#tF);
          this._eventBus._off("rotationchanging", this.#tk);
          for (let t of this.#tr.values()) {
            t.destroy();
          }
          this.#tr.clear();
          this.#te.clear();
          this.#tc.clear();
          this.#tt = null;
          this.#tv.clear();
          this.#to.destroy();
          this.#ti.destroy();
        }
        get hcmFilter() {
          return i.shadow(this, "hcmFilter", this.#ty ? this.#tu.addHCMFilter(this.#ty.foreground, this.#ty.background) : "none");
        }
        get direction() {
          return i.shadow(this, "direction", getComputedStyle(this.#tO).direction);
        }
        editAltText(t) {
          this.#ti?.editAltText(this, t);
        }
        onPageChanging({
          pageNumber: t
        }) {
          this.#ts = t - 1;
        }
        focusMainContainer() {
          this.#tO.focus();
        }
        findParent(t, e) {
          for (let r of this.#tr.values()) {
            let {
              x: i,
              y: n,
              width: o,
              height: s
            } = r.div.getBoundingClientRect();
            if (t >= i && t <= i + o && e >= n && e <= n + s) {
              return r;
            }
          }
          return null;
        }
        disableUserSelect(t = false) {
          this.#tD.classList.toggle("noUserSelect", t);
        }
        addShouldRescale(t) {
          this.#tc.add(t);
        }
        removeShouldRescale(t) {
          this.#tc.delete(t);
        }
        onScaleChanging({
          scale: t
        }) {
          this.commitOrRemove();
          this.viewParameters.realScale = t * n.PixelsPerInch.PDF_TO_CSS_UNITS;
          for (let e of this.#tc) {
            e.onScaleChanging();
          }
        }
        onRotationChanging({
          pagesRotation: t
        }) {
          this.commitOrRemove();
          this.viewParameters.rotation = t;
        }
        addToAnnotationStorage(t) {
          if (!t.isEmpty() && !!this.#tn && !this.#tn.has(t.id)) {
            this.#tn.setValue(t.id, t);
          }
        }
        #tN() {
          window.addEventListener("focus", this.#tA);
          window.addEventListener("blur", this.#tb);
        }
        #tL() {
          window.removeEventListener("focus", this.#tA);
          window.removeEventListener("blur", this.#tb);
        }
        blur() {
          if (!this.hasSelection) {
            return;
          }
          let {
            activeElement: t
          } = document;
          for (let e of this.#tv) {
            if (e.div.contains(t)) {
              this.#tg = [e, t];
              e._focusEventsAllowed = false;
              break;
            }
          }
        }
        focus() {
          if (!this.#tg) {
            return;
          }
          let [t, e] = this.#tg;
          this.#tg = null;
          e.addEventListener("focusin", () => {
            t._focusEventsAllowed = true;
          }, {
            once: true
          });
          e.focus();
        }
        #tB() {
          window.addEventListener("keydown", this.#tC, {
            capture: true
          });
        }
        #tI() {
          window.removeEventListener("keydown", this.#tC, {
            capture: true
          });
        }
        #tj() {
          document.addEventListener("copy", this.#tS);
          document.addEventListener("cut", this.#tx);
          document.addEventListener("paste", this.#tw);
        }
        #t_() {
          document.removeEventListener("copy", this.#tS);
          document.removeEventListener("cut", this.#tx);
          document.removeEventListener("paste", this.#tw);
        }
        addEditListeners() {
          this.#tB();
          this.#tj();
        }
        removeEditListeners() {
          this.#tI();
          this.#t_();
        }
        copy(t) {
          t.preventDefault();
          this.#tt?.commitOrRemove();
          if (!this.hasSelection) {
            return;
          }
          let e = [];
          for (let t of this.#tv) {
            let r = t.serialize(true);
            if (r) {
              e.push(r);
            }
          }
          if (e.length !== 0) {
            t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
          }
        }
        cut(t) {
          this.copy(t);
          this.delete();
        }
        paste(t) {
          t.preventDefault();
          let {
            clipboardData: e
          } = t;
          for (let t of e.items) {
            for (let e of this.#th) {
              if (e.isHandlingMimeForPasting(t.type)) {
                e.paste(t, this.currentLayer);
                return;
              }
            }
          }
          let r = e.getData("application/pdfjs");
          if (!r) {
            return;
          }
          try {
            r = JSON.parse(r);
          } catch (t) {
            i.warn(`paste: "${t.message}".`);
            return;
          }
          if (!Array.isArray(r)) {
            return;
          }
          this.unselectAll();
          let n = this.currentLayer;
          try {
            let t = [];
            for (let e of r) {
              let r = n.deserialize(e);
              if (!r) {
                return;
              }
              t.push(r);
            }
            let e = () => {
              for (let e of t) {
                this.#tU(e);
              }
              this.#tz(t);
            };
            let i = () => {
              for (let e of t) {
                e.remove();
              }
            };
            this.addCommands({
              cmd: e,
              undo: i,
              mustExec: true
            });
          } catch (t) {
            i.warn(`paste: "${t.message}".`);
          }
        }
        keydown(t) {
          if (!this.getActive()?.shouldGetKeyboardEvents()) {
            d._keyboardManager.exec(this, t);
          }
        }
        onEditingAction(t) {
          if (["undo", "redo", "delete", "selectAll"].includes(t.name)) {
            this[t.name]();
          }
        }
        #tV(t) {
          if (Object.entries(t).some(([t, e]) => this.#tP[t] !== e)) {
            this._eventBus.dispatch("annotationeditorstateschanged", {
              source: this,
              details: Object.assign(this.#tP, t)
            });
          }
        }
        #tW(t) {
          this._eventBus.dispatch("annotationeditorparamschanged", {
            source: this,
            details: t
          });
        }
        setEditingState(t) {
          if (t) {
            this.#tN();
            this.#tB();
            this.#tj();
            this.#tV({
              isEditing: this.#tm !== i.AnnotationEditorType.NONE,
              isEmpty: this.#tG(),
              hasSomethingToUndo: this.#to.hasSomethingToUndo(),
              hasSomethingToRedo: this.#to.hasSomethingToRedo(),
              hasSelectedEditor: false
            });
          } else {
            this.#tL();
            this.#tI();
            this.#t_();
            this.#tV({
              isEditing: false
            });
            this.disableUserSelect(false);
          }
        }
        registerEditorTypes(t) {
          if (!this.#th) {
            this.#th = t;
            for (let e of this.#th) {
              this.#tW(e.defaultPropertiesToUpdate);
            }
          }
        }
        getId() {
          return this.#td.getId();
        }
        get currentLayer() {
          return this.#tr.get(this.#ts);
        }
        getLayer(t) {
          return this.#tr.get(t);
        }
        get currentPageIndex() {
          return this.#ts;
        }
        addLayer(t) {
          this.#tr.set(t.pageIndex, t);
          if (this.#tf) {
            t.enable();
          } else {
            t.disable();
          }
        }
        removeLayer(t) {
          this.#tr.delete(t.pageIndex);
        }
        updateMode(t, e = null) {
          if (this.#tm !== t) {
            this.#tm = t;
            if (t === i.AnnotationEditorType.NONE) {
              this.setEditingState(false);
              this.#tq();
              return;
            }
            this.setEditingState(true);
            this.#tH();
            this.unselectAll();
            for (let e of this.#tr.values()) {
              e.updateMode(t);
            }
            if (e) {
              for (let t of this.#te.values()) {
                if (t.annotationElementId === e) {
                  this.setSelected(t);
                  t.enterInEditMode();
                  break;
                }
              }
            }
          }
        }
        updateToolbar(t) {
          if (t !== this.#tm) {
            this._eventBus.dispatch("switchannotationeditormode", {
              source: this,
              mode: t
            });
          }
        }
        updateParams(t, e) {
          if (this.#th) {
            if (t === i.AnnotationEditorParamsType.CREATE) {
              this.currentLayer.addNewEditor(t);
              return;
            }
            for (let r of this.#tv) {
              r.updateParams(t, e);
            }
            for (let r of this.#th) {
              r.updateDefaultParams(t, e);
            }
          }
        }
        enableWaiting(t = false) {
          if (this.#tp !== t) {
            this.#tp = t;
            for (let e of this.#tr.values()) {
              if (t) {
                e.disableClick();
              } else {
                e.enableClick();
              }
              e.div.classList.toggle("waiting", t);
            }
          }
        }
        #tH() {
          if (!this.#tf) {
            this.#tf = true;
            for (let t of this.#tr.values()) {
              t.enable();
            }
          }
        }
        #tq() {
          this.unselectAll();
          if (this.#tf) {
            this.#tf = false;
            for (let t of this.#tr.values()) {
              t.disable();
            }
          }
        }
        getEditors(t) {
          let e = [];
          for (let r of this.#te.values()) {
            if (r.pageIndex === t) {
              e.push(r);
            }
          }
          return e;
        }
        getEditor(t) {
          return this.#te.get(t);
        }
        addEditor(t) {
          this.#te.set(t.id, t);
        }
        removeEditor(t) {
          this.#te.delete(t.id);
          this.unselect(t);
          if (!t.annotationElementId || !this.#ta.has(t.annotationElementId)) {
            this.#tn?.remove(t.id);
          }
        }
        addDeletedAnnotationElement(t) {
          this.#ta.add(t.annotationElementId);
          t.deleted = true;
        }
        isDeletedAnnotationElement(t) {
          return this.#ta.has(t);
        }
        removeDeletedAnnotationElement(t) {
          this.#ta.delete(t.annotationElementId);
          t.deleted = false;
        }
        #tU(t) {
          let e = this.#tr.get(t.pageIndex);
          if (e) {
            e.addOrRebuild(t);
          } else {
            this.addEditor(t);
          }
        }
        setActiveEditor(t) {
          if (this.#tt !== t) {
            this.#tt = t;
            if (t) {
              this.#tW(t.propertiesToUpdate);
            }
          }
        }
        toggleSelected(t) {
          if (this.#tv.has(t)) {
            this.#tv.delete(t);
            t.unselect();
            this.#tV({
              hasSelectedEditor: this.hasSelection
            });
            return;
          }
          this.#tv.add(t);
          t.select();
          this.#tW(t.propertiesToUpdate);
          this.#tV({
            hasSelectedEditor: true
          });
        }
        setSelected(t) {
          for (let e of this.#tv) {
            if (e !== t) {
              e.unselect();
            }
          }
          this.#tv.clear();
          this.#tv.add(t);
          t.select();
          this.#tW(t.propertiesToUpdate);
          this.#tV({
            hasSelectedEditor: true
          });
        }
        isSelected(t) {
          return this.#tv.has(t);
        }
        unselect(t) {
          t.unselect();
          this.#tv.delete(t);
          this.#tV({
            hasSelectedEditor: this.hasSelection
          });
        }
        get hasSelection() {
          return this.#tv.size !== 0;
        }
        undo() {
          this.#to.undo();
          this.#tV({
            hasSomethingToUndo: this.#to.hasSomethingToUndo(),
            hasSomethingToRedo: true,
            isEmpty: this.#tG()
          });
        }
        redo() {
          this.#to.redo();
          this.#tV({
            hasSomethingToUndo: true,
            hasSomethingToRedo: this.#to.hasSomethingToRedo(),
            isEmpty: this.#tG()
          });
        }
        addCommands(t) {
          this.#to.add(t);
          this.#tV({
            hasSomethingToUndo: true,
            hasSomethingToRedo: false,
            isEmpty: this.#tG()
          });
        }
        #tG() {
          if (this.#te.size === 0) {
            return true;
          }
          if (this.#te.size === 1) {
            for (let t of this.#te.values()) {
              return t.isEmpty();
            }
          }
          return false;
        }
        delete() {
          this.commitOrRemove();
          if (!this.hasSelection) {
            return;
          }
          let t = [...this.#tv];
          let e = () => {
            for (let e of t) {
              e.remove();
            }
          };
          let r = () => {
            for (let e of t) {
              this.#tU(e);
            }
          };
          this.addCommands({
            cmd: e,
            undo: r,
            mustExec: true
          });
        }
        commitOrRemove() {
          this.#tt?.commitOrRemove();
        }
        hasSomethingToControl() {
          return this.#tt || this.hasSelection;
        }
        #tz(t) {
          this.#tv.clear();
          for (let e of t) {
            if (!e.isEmpty()) {
              this.#tv.add(e);
              e.select();
            }
          }
          this.#tV({
            hasSelectedEditor: true
          });
        }
        selectAll() {
          for (let t of this.#tv) {
            t.commit();
          }
          this.#tz(this.#te.values());
        }
        unselectAll() {
          if (this.#tt) {
            this.#tt.commitOrRemove();
            return;
          }
          if (this.hasSelection) {
            for (let t of this.#tv) {
              t.unselect();
            }
            this.#tv.clear();
            this.#tV({
              hasSelectedEditor: false
            });
          }
        }
        translateSelectedEditors(t, e, r = false) {
          if (!r) {
            this.commitOrRemove();
          }
          if (!this.hasSelection) {
            return;
          }
          this.#tR[0] += t;
          this.#tR[1] += e;
          let [i, n] = this.#tR;
          let o = [...this.#tv];
          let s = 1000;
          if (this.#tM) {
            clearTimeout(this.#tM);
          }
          this.#tM = setTimeout(() => {
            this.#tM = null;
            this.#tR[0] = this.#tR[1] = 0;
            this.addCommands({
              cmd: () => {
                for (let t of o) {
                  if (this.#te.has(t.id)) {
                    t.translateInPage(i, n);
                  }
                }
              },
              undo: () => {
                for (let t of o) {
                  if (this.#te.has(t.id)) {
                    t.translateInPage(-i, -n);
                  }
                }
              },
              mustExec: false
            });
          }, s);
          for (let r of o) {
            r.translateInPage(t, e);
          }
        }
        setUpDragSession() {
          if (this.hasSelection) {
            this.disableUserSelect(true);
            this.#tl = new Map();
            for (let t of this.#tv) {
              this.#tl.set(t, {
                savedX: t.x,
                savedY: t.y,
                savedPageIndex: t.pageIndex,
                newX: 0,
                newY: 0,
                newPageIndex: -1
              });
            }
          }
        }
        endDragSession() {
          if (!this.#tl) {
            return false;
          }
          this.disableUserSelect(false);
          let t = this.#tl;
          this.#tl = null;
          let e = false;
          for (let [{
            x: r,
            y: i,
            pageIndex: n
          }, o] of t) {
            o.newX = r;
            o.newY = i;
            o.newPageIndex = n;
            e ||= r !== o.savedX || i !== o.savedY || n !== o.savedPageIndex;
          }
          if (!e) {
            return false;
          }
          let r = (t, e, r, i) => {
            if (this.#te.has(t.id)) {
              let n = this.#tr.get(i);
              if (n) {
                t._setParentAndPosition(n, e, r);
              } else {
                t.pageIndex = i;
                t.x = e;
                t.y = r;
              }
            }
          };
          this.addCommands({
            cmd: () => {
              for (let [e, {
                newX: i,
                newY: n,
                newPageIndex: o
              }] of t) {
                r(e, i, n, o);
              }
            },
            undo: () => {
              for (let [e, {
                savedX: i,
                savedY: n,
                savedPageIndex: o
              }] of t) {
                r(e, i, n, o);
              }
            },
            mustExec: true
          });
          return true;
        }
        dragSelectedEditors(t, e) {
          if (this.#tl) {
            for (let r of this.#tl.keys()) {
              r.drag(t, e);
            }
          }
        }
        rebuild(t) {
          if (t.parent === null) {
            let e = this.getLayer(t.pageIndex);
            if (e) {
              e.changeParent(t);
              e.addOrRebuild(t);
            } else {
              this.addEditor(t);
              this.addToAnnotationStorage(t);
              t.rebuild();
            }
          } else {
            t.parent.addOrRebuild(t);
          }
        }
        isActive(t) {
          return this.#tt === t;
        }
        getActive() {
          return this.#tt;
        }
        getMode() {
          return this.#tm;
        }
        get imageManager() {
          return i.shadow(this, "imageManager", new l());
        }
      }
      e.AnnotationEditorUIManager = d;
    }, (t, e, r) => {
      let i;
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.StatTimer = e.RenderingCancelledException = e.PixelsPerInch = e.PageViewport = e.PDFDateString = e.DOMStandardFontDataFactory = e.DOMSVGFactory = e.DOMFilterFactory = e.DOMCanvasFactory = e.DOMCMapReaderFactory = undefined;
      e.deprecated = C;
      e.getColorValues = k;
      e.getCurrentTransform = P;
      e.getCurrentTransformInverse = R;
      e.getFilenameFromUrl = y;
      e.getPdfFilenameFromUrl = b;
      e.getRGB = F;
      e.getXfaPageViewport = E;
      e.isDataScheme = m;
      e.isPdfFile = v;
      e.isValidFetchUrl = S;
      e.loadScript = w;
      e.noContextMenu = x;
      e.setLayerDimensions = M;
      var n = r(7);
      var o = r(1);
      let s = "http://www.w3.org/2000/svg";
      class a {
        static CSS = 96;
        static PDF = 72;
        static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
      }
      e.PixelsPerInch = a;
      class l extends n.BaseFilterFactory {
        #tK;
        #tX;
        #e;
        #tZ;
        #tY;
        #tJ;
        #tQ;
        #t$;
        #t0;
        #t1;
        #q = 0;
        constructor({
          docId: t,
          ownerDocument: e = globalThis.document
        } = {}) {
          super();
          this.#e = t;
          this.#tZ = e;
        }
        get #K() {
          return this.#tK ||= new Map();
        }
        get #t2() {
          if (!this.#tX) {
            let t = this.#tZ.createElement("div");
            let {
              style: e
            } = t;
            e.visibility = "hidden";
            e.contain = "strict";
            e.width = e.height = 0;
            e.position = "absolute";
            e.top = e.left = 0;
            e.zIndex = -1;
            let r = this.#tZ.createElementNS(s, "svg");
            r.setAttribute("width", 0);
            r.setAttribute("height", 0);
            this.#tX = this.#tZ.createElementNS(s, "defs");
            t.append(r);
            r.append(this.#tX);
            this.#tZ.body.append(t);
          }
          return this.#tX;
        }
        addFilter(t) {
          let e;
          let r;
          let i;
          let n;
          if (!t) {
            return "none";
          }
          let o = this.#K.get(t);
          if (o) {
            return o;
          }
          if (t.length === 1) {
            let o = t[0];
            let s = Array(256);
            for (let t = 0; t < 256; t++) {
              s[t] = o[t] / 255;
            }
            n = e = r = i = s.join(",");
          } else {
            let [o, s, a] = t;
            let l = Array(256);
            let h = Array(256);
            let c = Array(256);
            for (let t = 0; t < 256; t++) {
              l[t] = o[t] / 255;
              h[t] = s[t] / 255;
              c[t] = a[t] / 255;
            }
            e = l.join(",");
            r = h.join(",");
            i = c.join(",");
            n = `${e}${r}${i}`;
          }
          if (o = this.#K.get(n)) {
            this.#K.set(t, o);
            return o;
          }
          let s = `g_${this.#e}_transfer_map_${this.#q++}`;
          let a = `url(#${s})`;
          this.#K.set(t, a);
          this.#K.set(n, a);
          let l = this.#t5(s);
          this.#t3(e, r, i, l);
          return a;
        }
        addHCMFilter(t, e) {
          let r = `${t}-${e}`;
          if (this.#tJ === r || (this.#tJ = r, this.#tQ = "none", this.#tY?.remove(), !t || !e)) {
            return this.#tQ;
          }
          let i = this.#t4(t);
          t = o.Util.makeHexColor(...i);
          let n = this.#t4(e);
          e = o.Util.makeHexColor(...n);
          this.#t2.style.color = "";
          if (t === "#000000" && e === "#ffffff" || t === e) {
            return this.#tQ;
          }
          let s = Array(256);
          for (let t = 0; t <= 255; t++) {
            let e = t / 255;
            s[t] = e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
          }
          let a = s.join(",");
          let l = `g_${this.#e}_hcm_filter`;
          let h = this.#t$ = this.#t5(l);
          this.#t3(a, a, a, h);
          this.#t6(h);
          let c = (t, e) => {
            let r = i[t] / 255;
            let o = n[t] / 255;
            let s = Array(e + 1);
            for (let t = 0; t <= e; t++) {
              s[t] = r + t / e * (o - r);
            }
            return s.join(",");
          };
          this.#t3(c(0, 5), c(1, 5), c(2, 5), h);
          this.#tQ = `url(#${l})`;
          return this.#tQ;
        }
        addHighlightHCMFilter(t, e, r, i) {
          let n = `${t}-${e}-${r}-${i}`;
          if (this.#t0 === n || (this.#t0 = n, this.#t1 = "none", this.#t$?.remove(), !t || !e)) {
            return this.#t1;
          }
          let [o, s] = [t, e].map(this.#t4.bind(this));
          let a = Math.round(o[0] * 0.2126 + o[1] * 0.7152 + o[2] * 0.0722);
          let l = Math.round(s[0] * 0.2126 + s[1] * 0.7152 + s[2] * 0.0722);
          let [h, c] = [r, i].map(this.#t4.bind(this));
          if (l < a) {
            [a, l, h, c] = [l, a, c, h];
          }
          this.#t2.style.color = "";
          let u = (t, e, r) => {
            let i = Array(256);
            let n = (l - a) / r;
            let o = t / 255;
            let s = (e - t) / (r * 255);
            let h = 0;
            for (let t = 0; t <= r; t++) {
              let e = Math.round(a + t * n);
              let r = o + t * s;
              for (let t = h; t <= e; t++) {
                i[t] = r;
              }
              h = e + 1;
            }
            for (let t = h; t < 256; t++) {
              i[t] = i[h - 1];
            }
            return i.join(",");
          };
          let d = `g_${this.#e}_hcm_highlight_filter`;
          let f = this.#t$ = this.#t5(d);
          this.#t6(f);
          this.#t3(u(h[0], c[0], 5), u(h[1], c[1], 5), u(h[2], c[2], 5), f);
          this.#t1 = `url(#${d})`;
          return this.#t1;
        }
        destroy(t = false) {
          if (!t || !this.#tQ && !this.#t1) {
            if (this.#tX) {
              this.#tX.parentNode.parentNode.remove();
              this.#tX = null;
            }
            if (this.#tK) {
              this.#tK.clear();
              this.#tK = null;
            }
            this.#q = 0;
          }
        }
        #t6(t) {
          let e = this.#tZ.createElementNS(s, "feColorMatrix");
          e.setAttribute("type", "matrix");
          e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
          t.append(e);
        }
        #t5(t) {
          let e = this.#tZ.createElementNS(s, "filter");
          e.setAttribute("color-interpolation-filters", "sRGB");
          e.setAttribute("id", t);
          this.#t2.append(e);
          return e;
        }
        #t8(t, e, r) {
          let i = this.#tZ.createElementNS(s, e);
          i.setAttribute("type", "discrete");
          i.setAttribute("tableValues", r);
          t.append(i);
        }
        #t3(t, e, r, i) {
          let n = this.#tZ.createElementNS(s, "feComponentTransfer");
          i.append(n);
          this.#t8(n, "feFuncR", t);
          this.#t8(n, "feFuncG", e);
          this.#t8(n, "feFuncB", r);
        }
        #t4(t) {
          this.#t2.style.color = t;
          return F(getComputedStyle(this.#t2).getPropertyValue("color"));
        }
      }
      e.DOMFilterFactory = l;
      class h extends n.BaseCanvasFactory {
        constructor({
          ownerDocument: t = globalThis.document
        } = {}) {
          super();
          this._document = t;
        }
        _createCanvas(t, e) {
          let r = this._document.createElement("canvas");
          r.width = t;
          r.height = e;
          return r;
        }
      }
      async function c(t, e = false) {
        if (S(t, document.baseURI)) {
          let r = await fetch(t);
          if (!r.ok) {
            throw Error(r.statusText);
          }
          if (e) {
            return new Uint8Array(await r.arrayBuffer());
          } else {
            return o.stringToBytes(await r.text());
          }
        }
        return new Promise((r, i) => {
          let n = new XMLHttpRequest();
          n.open("GET", t, true);
          if (e) {
            n.responseType = "arraybuffer";
          }
          n.onreadystatechange = () => {
            if (n.readyState === XMLHttpRequest.DONE) {
              if (n.status === 200 || n.status === 0) {
                let t;
                if (e && n.response) {
                  t = new Uint8Array(n.response);
                } else if (!e && n.responseText) {
                  t = o.stringToBytes(n.responseText);
                }
                if (t) {
                  r(t);
                  return;
                }
              }
              i(Error(n.statusText));
            }
          };
          n.send(null);
        });
      }
      e.DOMCanvasFactory = h;
      class u extends n.BaseCMapReaderFactory {
        _fetchData(t, e) {
          return c(t, this.isCompressed).then(t => ({
            cMapData: t,
            compressionType: e
          }));
        }
      }
      e.DOMCMapReaderFactory = u;
      class d extends n.BaseStandardFontDataFactory {
        _fetchData(t) {
          return c(t, true);
        }
      }
      e.DOMStandardFontDataFactory = d;
      class f extends n.BaseSVGFactory {
        _createSVG(t) {
          return document.createElementNS(s, t);
        }
      }
      e.DOMSVGFactory = f;
      class p {
        constructor({
          viewBox: t,
          scale: e,
          rotation: r,
          offsetX: i = 0,
          offsetY: n = 0,
          dontFlip: o = false
        }) {
          let s;
          let a;
          let l;
          let h;
          let c;
          let u;
          let d;
          let f;
          this.viewBox = t;
          this.scale = e;
          this.rotation = r;
          this.offsetX = i;
          this.offsetY = n;
          let p = (t[2] + t[0]) / 2;
          let g = (t[3] + t[1]) / 2;
          if ((r %= 360) < 0) {
            r += 360;
          }
          switch (r) {
            case 180:
              s = -1;
              a = 0;
              l = 0;
              h = 1;
              break;
            case 90:
              s = 0;
              a = 1;
              l = 1;
              h = 0;
              break;
            case 270:
              s = 0;
              a = -1;
              l = -1;
              h = 0;
              break;
            case 0:
              s = 1;
              a = 0;
              l = 0;
              h = -1;
              break;
            default:
              throw Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
          }
          if (o) {
            l = -l;
            h = -h;
          }
          if (s === 0) {
            c = Math.abs(g - t[1]) * e + i;
            u = Math.abs(p - t[0]) * e + n;
            d = (t[3] - t[1]) * e;
            f = (t[2] - t[0]) * e;
          } else {
            c = Math.abs(p - t[0]) * e + i;
            u = Math.abs(g - t[1]) * e + n;
            d = (t[2] - t[0]) * e;
            f = (t[3] - t[1]) * e;
          }
          this.transform = [s * e, a * e, l * e, h * e, c - s * e * p - l * e * g, u - a * e * p - h * e * g];
          this.width = d;
          this.height = f;
        }
        get rawDims() {
          let {
            viewBox: t
          } = this;
          return o.shadow(this, "rawDims", {
            pageWidth: t[2] - t[0],
            pageHeight: t[3] - t[1],
            pageX: t[0],
            pageY: t[1]
          });
        }
        clone({
          scale: t = this.scale,
          rotation: e = this.rotation,
          offsetX: r = this.offsetX,
          offsetY: i = this.offsetY,
          dontFlip: n = false
        } = {}) {
          return new p({
            viewBox: this.viewBox.slice(),
            scale: t,
            rotation: e,
            offsetX: r,
            offsetY: i,
            dontFlip: n
          });
        }
        convertToViewportPoint(t, e) {
          return o.Util.applyTransform([t, e], this.transform);
        }
        convertToViewportRectangle(t) {
          let e = o.Util.applyTransform([t[0], t[1]], this.transform);
          let r = o.Util.applyTransform([t[2], t[3]], this.transform);
          return [e[0], e[1], r[0], r[1]];
        }
        convertToPdfPoint(t, e) {
          return o.Util.applyInverseTransform([t, e], this.transform);
        }
      }
      e.PageViewport = p;
      class g extends o.BaseException {
        constructor(t, e = 0) {
          super(t, "RenderingCancelledException");
          this.extraDelay = e;
        }
      }
      function m(t) {
        let e = t.length;
        let r = 0;
        while (r < e && t[r].trim() === "") {
          r++;
        }
        return t.substring(r, r + 5).toLowerCase() === "data:";
      }
      function v(t) {
        return typeof t == "string" && /\.pdf$/i.test(t);
      }
      function y(t, e = false) {
        if (!e) {
          [t] = t.split(/[#?]/, 1);
        }
        return t.substring(t.lastIndexOf("/") + 1);
      }
      function b(t, e = "document.pdf") {
        if (typeof t != "string") {
          return e;
        }
        if (m(t)) {
          o.warn("getPdfFilenameFromUrl: ignore \"data:\"-URL for performance reasons.");
          return e;
        }
        let r = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
        let i = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t);
        let n = r.exec(i[1]) || r.exec(i[2]) || r.exec(i[3]);
        if (n && (n = n[0]).includes("%")) {
          try {
            n = r.exec(decodeURIComponent(n))[0];
          } catch {}
        }
        return n || e;
      }
      e.RenderingCancelledException = g;
      class A {
        started = Object.create(null);
        times = [];
        time(t) {
          if (t in this.started) {
            o.warn(`Timer is already running for ${t}`);
          }
          this.started[t] = Date.now();
        }
        timeEnd(t) {
          if (!(t in this.started)) {
            o.warn(`Timer has not been started for ${t}`);
          }
          this.times.push({
            name: t,
            start: this.started[t],
            end: Date.now()
          });
          delete this.started[t];
        }
        toString() {
          let t = [];
          let e = 0;
          for (let {
            name: t
          } of this.times) {
            e = Math.max(t.length, e);
          }
          for (let {
            name: r,
            start: i,
            end: n
          } of this.times) {
            t.push(`${r.padEnd(e)} ${n - i}ms
`);
          }
          return t.join("");
        }
      }
      function S(t, e) {
        try {
          let {
            protocol: r
          } = e ? new URL(t, e) : new URL(t);
          return r === "http:" || r === "https:";
        } catch {
          return false;
        }
      }
      function x(t) {
        t.preventDefault();
      }
      function w(t, e = false) {
        return new Promise((r, i) => {
          let n = document.createElement("script");
          n.src = t;
          n.onload = function (t) {
            if (e) {
              n.remove();
            }
            r(t);
          };
          n.onerror = function () {
            i(Error(`Cannot load script at: ${n.src}`));
          };
          (document.head || document.documentElement).append(n);
        });
      }
      function C(t) {}
      e.StatTimer = A;
      class T {
        static toDateObject(t) {
          if (!t || typeof t != "string") {
            return null;
          }
          let e = (i ||= RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?")).exec(t);
          if (!e) {
            return null;
          }
          let r = parseInt(e[1], 10);
          let n = parseInt(e[2], 10);
          n = n >= 1 && n <= 12 ? n - 1 : 0;
          let o = parseInt(e[3], 10);
          o = o >= 1 && o <= 31 ? o : 1;
          let s = parseInt(e[4], 10);
          s = s >= 0 && s <= 23 ? s : 0;
          let a = parseInt(e[5], 10);
          a = a >= 0 && a <= 59 ? a : 0;
          let l = parseInt(e[6], 10);
          l = l >= 0 && l <= 59 ? l : 0;
          let h = e[7] || "Z";
          let c = parseInt(e[8], 10);
          c = c >= 0 && c <= 23 ? c : 0;
          let u = parseInt(e[9], 10) || 0;
          u = u >= 0 && u <= 59 ? u : 0;
          if (h === "-") {
            s += c;
            a += u;
          } else if (h === "+") {
            s -= c;
            a -= u;
          }
          return new Date(Date.UTC(r, n, o, s, a, l));
        }
      }
      function E(t, {
        scale: e = 1,
        rotation: r = 0
      }) {
        let {
          width: i,
          height: n
        } = t.attributes.style;
        return new p({
          viewBox: [0, 0, parseInt(i), parseInt(n)],
          scale: e,
          rotation: r
        });
      }
      function F(t) {
        if (t.startsWith("#")) {
          let e = parseInt(t.slice(1), 16);
          return [(e & 16711680) >> 16, (e & 65280) >> 8, e & 255];
        }
        if (t.startsWith("rgb(")) {
          return t.slice(4, -1).split(",").map(t => parseInt(t));
        } else if (t.startsWith("rgba(")) {
          return t.slice(5, -1).split(",").map(t => parseInt(t)).slice(0, 3);
        } else {
          o.warn(`Not a valid color format: "${t}"`);
          return [0, 0, 0];
        }
      }
      function k(t) {
        let e = document.createElement("span");
        e.style.visibility = "hidden";
        document.body.append(e);
        for (let r of t.keys()) {
          e.style.color = r;
          let i = window.getComputedStyle(e).color;
          t.set(r, F(i));
        }
        e.remove();
      }
      function P(t) {
        let {
          a: e,
          b: r,
          c: i,
          d: n,
          e: o,
          f: s
        } = t.getTransform();
        return [e, r, i, n, o, s];
      }
      function R(t) {
        let {
          a: e,
          b: r,
          c: i,
          d: n,
          e: o,
          f: s
        } = t.getTransform().invertSelf();
        return [e, r, i, n, o, s];
      }
      function M(t, e, r = false, i = true) {
        if (e instanceof p) {
          let {
            pageWidth: i,
            pageHeight: n
          } = e.rawDims;
          let {
            style: s
          } = t;
          let a = o.FeatureTest.isCSSRoundSupported;
          let l = `var(--scale-factor) * ${i}px`;
          let h = `var(--scale-factor) * ${n}px`;
          let c = a ? `round(${l}, 1px)` : `calc(${l})`;
          let u = a ? `round(${h}, 1px)` : `calc(${h})`;
          if (r && e.rotation % 180 != 0) {
            s.width = u;
            s.height = c;
          } else {
            s.width = c;
            s.height = u;
          }
        }
        if (i) {
          t.setAttribute("data-main-rotation", e.rotation);
        }
      }
      e.PDFDateString = T;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.BaseStandardFontDataFactory = e.BaseSVGFactory = e.BaseFilterFactory = e.BaseCanvasFactory = e.BaseCMapReaderFactory = undefined;
      var i = r(1);
      class n {
        constructor() {
          if (this.constructor === n) {
            i.unreachable("Cannot initialize BaseFilterFactory.");
          }
        }
        addFilter(t) {
          return "none";
        }
        addHCMFilter(t, e) {
          return "none";
        }
        addHighlightHCMFilter(t, e, r, i) {
          return "none";
        }
        destroy(t = false) {}
      }
      e.BaseFilterFactory = n;
      class o {
        constructor() {
          if (this.constructor === o) {
            i.unreachable("Cannot initialize BaseCanvasFactory.");
          }
        }
        create(t, e) {
          if (t <= 0 || e <= 0) {
            throw Error("Invalid canvas size");
          }
          let r = this._createCanvas(t, e);
          return {
            canvas: r,
            context: r.getContext("2d")
          };
        }
        reset(t, e, r) {
          if (!t.canvas) {
            throw Error("Canvas is not specified");
          }
          if (e <= 0 || r <= 0) {
            throw Error("Invalid canvas size");
          }
          t.canvas.width = e;
          t.canvas.height = r;
        }
        destroy(t) {
          if (!t.canvas) {
            throw Error("Canvas is not specified");
          }
          t.canvas.width = 0;
          t.canvas.height = 0;
          t.canvas = null;
          t.context = null;
        }
        _createCanvas(t, e) {
          i.unreachable("Abstract method `_createCanvas` called.");
        }
      }
      e.BaseCanvasFactory = o;
      class s {
        constructor({
          baseUrl: t = null,
          isCompressed: e = true
        }) {
          if (this.constructor === s) {
            i.unreachable("Cannot initialize BaseCMapReaderFactory.");
          }
          this.baseUrl = t;
          this.isCompressed = e;
        }
        async fetch({
          name: t
        }) {
          if (!this.baseUrl) {
            throw Error("The CMap \"baseUrl\" parameter must be specified, ensure that the \"cMapUrl\" and \"cMapPacked\" API parameters are provided.");
          }
          if (!t) {
            throw Error("CMap name must be specified.");
          }
          let e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
          let r = this.isCompressed ? i.CMapCompressionType.BINARY : i.CMapCompressionType.NONE;
          return this._fetchData(e, r).catch(t => {
            throw Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
          });
        }
        _fetchData(t, e) {
          i.unreachable("Abstract method `_fetchData` called.");
        }
      }
      e.BaseCMapReaderFactory = s;
      class a {
        constructor({
          baseUrl: t = null
        }) {
          if (this.constructor === a) {
            i.unreachable("Cannot initialize BaseStandardFontDataFactory.");
          }
          this.baseUrl = t;
        }
        async fetch({
          filename: t
        }) {
          if (!this.baseUrl) {
            throw Error("The standard font \"baseUrl\" parameter must be specified, ensure that the \"standardFontDataUrl\" API parameter is provided.");
          }
          if (!t) {
            throw Error("Font filename must be specified.");
          }
          let e = `${this.baseUrl}${t}`;
          return this._fetchData(e).catch(t => {
            throw Error(`Unable to load font data at: ${e}`);
          });
        }
        _fetchData(t) {
          i.unreachable("Abstract method `_fetchData` called.");
        }
      }
      e.BaseStandardFontDataFactory = a;
      class l {
        constructor() {
          if (this.constructor === l) {
            i.unreachable("Cannot initialize BaseSVGFactory.");
          }
        }
        create(t, e, r = false) {
          if (t <= 0 || e <= 0) {
            throw Error("Invalid SVG dimensions");
          }
          let i = this._createSVG("svg:svg");
          i.setAttribute("version", "1.1");
          if (!r) {
            i.setAttribute("width", `${t}px`);
            i.setAttribute("height", `${e}px`);
          }
          i.setAttribute("preserveAspectRatio", "none");
          i.setAttribute("viewBox", `0 0 ${t} ${e}`);
          return i;
        }
        createElement(t) {
          if (typeof t != "string") {
            throw Error("Invalid SVG element type");
          }
          return this._createSVG(t);
        }
        _createSVG(t) {
          i.unreachable("Abstract method `_createSVG` called.");
        }
      }
      e.BaseSVGFactory = l;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.MurmurHash3_64 = undefined;
      var i = r(1);
      let n = 3285377520;
      let o = 4294901760;
      let s = 65535;
      class a {
        constructor(t) {
          this.h1 = t ? t & -1 : n;
          this.h2 = t ? t & -1 : n;
        }
        update(t) {
          let e;
          let r;
          if (typeof t == "string") {
            e = new Uint8Array(t.length * 2);
            r = 0;
            for (let i = 0, n = t.length; i < n; i++) {
              let n = t.charCodeAt(i);
              if (n <= 255) {
                e[r++] = n;
              } else {
                e[r++] = n >>> 8;
                e[r++] = n & 255;
              }
            }
          } else if (i.isArrayBuffer(t)) {
            r = (e = t.slice()).byteLength;
          } else {
            throw Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
          }
          let n = r >> 2;
          let a = r - n * 4;
          let l = new Uint32Array(e.buffer, 0, n);
          let h = 0;
          let c = 0;
          let u = this.h1;
          let d = this.h2;
          let f = 3432918353;
          let p = 461845907;
          let g = s & -862048943;
          let m = s & 461845907;
          for (let t = 0; t < n; t++) {
            if (t & 1) {
              u ^= h = (h = (h = (h = l[t]) * f & o | h * g & s) << 15 | h >>> 17) * p & o | h * m & s;
              u = (u = u << 13 | u >>> 19) * 5 + 3864292196;
            } else {
              d ^= c = (c = (c = (c = l[t]) * f & o | c * g & s) << 15 | c >>> 17) * p & o | c * m & s;
              d = (d = d << 13 | d >>> 19) * 5 + 3864292196;
            }
          }
          h = 0;
          switch (a) {
            case 3:
              h ^= e[n * 4 + 2] << 16;
            case 2:
              h ^= e[n * 4 + 1] << 8;
            case 1:
              h ^= e[n * 4];
              h = (h = (h = h * f & o | h * g & s) << 15 | h >>> 17) * p & o | h * m & s;
              if (n & 1) {
                u ^= h;
              } else {
                d ^= h;
              }
          }
          this.h1 = u;
          this.h2 = d;
        }
        hexdigest() {
          let t = this.h1;
          let e = this.h2;
          t ^= e >>> 1;
          t = t * 3981806797 & o | t * 36045 & s;
          e = e * 4283543511 & o | ((e << 16 | t >>> 16) * 2950163797 & o) >>> 16;
          t ^= e >>> 1;
          t = t * 444984403 & o | t * 60499 & s;
          e = e * 3301882366 & o | ((e << 16 | t >>> 16) * 3120437893 & o) >>> 16;
          return ((t ^= e >>> 1) >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
        }
      }
      e.MurmurHash3_64 = a;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.FontLoader = e.FontFaceObject = undefined;
      var i = r(1);
      class n {
        #t9 = new Set();
        constructor({
          ownerDocument: t = globalThis.document,
          styleElement: e = null
        }) {
          this._document = t;
          this.nativeFontFaces = new Set();
          this.styleElement = null;
          this.loadingRequests = [];
          this.loadTestFontId = 0;
        }
        addNativeFontFace(t) {
          this.nativeFontFaces.add(t);
          this._document.fonts.add(t);
        }
        removeNativeFontFace(t) {
          this.nativeFontFaces.delete(t);
          this._document.fonts.delete(t);
        }
        insertRule(t) {
          if (!this.styleElement) {
            this.styleElement = this._document.createElement("style");
            this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
          }
          let e = this.styleElement.sheet;
          e.insertRule(t, e.cssRules.length);
        }
        clear() {
          for (let t of this.nativeFontFaces) {
            this._document.fonts.delete(t);
          }
          this.nativeFontFaces.clear();
          this.#t9.clear();
          if (this.styleElement) {
            this.styleElement.remove();
            this.styleElement = null;
          }
        }
        async loadSystemFont(t) {
          if (!!t && !this.#t9.has(t.loadedName)) {
            i.assert(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
            if (this.isFontLoadingAPISupported) {
              let {
                loadedName: e,
                src: r,
                style: n
              } = t;
              let o = new FontFace(e, r, n);
              this.addNativeFontFace(o);
              try {
                await o.load();
                this.#t9.add(e);
              } catch {
                i.warn(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`);
                this.removeNativeFontFace(o);
              }
              return;
            }
            i.unreachable("Not implemented: loadSystemFont without the Font Loading API.");
          }
        }
        async bind(t) {
          if (t.attached || t.missingFile && !t.systemFontInfo) {
            return;
          }
          t.attached = true;
          if (t.systemFontInfo) {
            await this.loadSystemFont(t.systemFontInfo);
            return;
          }
          if (this.isFontLoadingAPISupported) {
            let e = t.createNativeFontFace();
            if (e) {
              this.addNativeFontFace(e);
              try {
                await e.loaded;
              } catch (r) {
                i.warn(`Failed to load font '${e.family}': '${r}'.`);
                t.disableFontFace = true;
                throw r;
              }
            }
            return;
          }
          let e = t.createFontFaceRule();
          if (e) {
            this.insertRule(e);
            if (this.isSyncFontLoadingSupported) {
              return;
            }
            await new Promise(e => {
              let r = this._queueLoadingCallback(e);
              this._prepareFontLoadEvent(t, r);
            });
          }
        }
        get isFontLoadingAPISupported() {
          let t = !!this._document?.fonts;
          return i.shadow(this, "isFontLoadingAPISupported", t);
        }
        get isSyncFontLoadingSupported() {
          let t = false;
          if (i.isNodeJS) {
            t = true;
          } else if (typeof navigator != "undefined" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) {
            t = true;
          }
          return i.shadow(this, "isSyncFontLoadingSupported", t);
        }
        _queueLoadingCallback(t) {
          let {
            loadingRequests: e
          } = this;
          let r = {
            done: false,
            complete: function () {
              i.assert(!r.done, "completeRequest() cannot be called twice.");
              r.done = true;
              while (e.length > 0 && e[0].done) {
                setTimeout(e.shift().callback, 0);
              }
            },
            callback: t
          };
          e.push(r);
          return r;
        }
        get _loadTestFont() {
          let t = "OTTO\0\0\0 0CFF 1íf\0\0\0\0\0FFTMe6p\0\0\0\0\0GDEF\0\0\0\08\0\0\0OS/2V\rc\t\0\0 \0\0\0`cmap\rÔ\0\04\0\0BheadÿE\r\0\0\0¼\0\0 6hheadê\0\0\0ô\0\0\0$hmtxè\0\0\0\0X\0\0\0maxp\0P\0\0\0\0\0\0nameXæt~\0\0\0\0\0±postÿ 3\0\0x\0\0\0 \0\0\0\0\0\0¶QÄ_<õ\0è\0\0\0\0ÎäË\0\0\0\0Î\n<\0\0\0\0è!\0\0\0\b\0\0\0\0\0\0\0\0\0\0!\0\0\0Zè\0\0\0\0è\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0P\0\0\0\0\0èô\0\0\0¼\0\0\0¼\0\0à 1\0\0\0\t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0PfEd\0À\0.\0. ÿ8\0Z!\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0 \0\0\0\0\0®\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\t\0\0\0\0\0\0\t\0\0\0\0\0\t\0\0\0\0\0\t\0\0\0\0\0\t\0\0\0\0\0\t\0\0\0\0\0\t\0\0\0X\0X\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0\0\0\0\0\0\0 \0\0\0\0\0\0\0\0.ÿÿ\0\0\0.ÿÿÿÓ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿ 2\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0X\0!ø\0øÄøø\fú|ùµä÷\bç\0!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\0\0\0\0\0ûwú|ú|þ|ú|ú|\f\nùµ\nùµ\f\fú|\0\0\0\0\0\0\0\0\0\0Éo1\0\0\0\0Îã\0\0\0\0Îä)\0\0\0\0\0\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0è\0\0\0\0\0\0";
          return i.shadow(this, "_loadTestFont", t);
        }
        _prepareFontLoadEvent(t, e) {
          let r;
          let n;
          function o(t, e) {
            return t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3) & 255;
          }
          function s(t, e, r, i) {
            return t.substring(0, e) + i + t.substring(e + r);
          }
          let a = this._document.createElement("canvas");
          a.width = 1;
          a.height = 1;
          let l = a.getContext("2d");
          let h = 0;
          function c(t, e) {
            if (++h > 30) {
              i.warn("Load test font never loaded.");
              e();
              return;
            }
            l.font = "30px " + t;
            l.fillText(".", 0, 20);
            if (l.getImageData(0, 0, 1, 1).data[3] > 0) {
              e();
              return;
            }
            setTimeout(c.bind(null, t, e));
          }
          let u = `lt${Date.now()}${this.loadTestFontId++}`;
          let d = this._loadTestFont;
          d = s(d, 976, u.length, u);
          let f = 16;
          let p = 1482184792;
          let g = o(d, 16);
          r = 0;
          n = u.length - 3;
          for (; r < n; r += 4) {
            g = g - p + o(u, r) | 0;
          }
          if (r < u.length) {
            g = g - p + o(u + "XXX", r) | 0;
          }
          d = s(d, f, 4, i.string32(g));
          let m = `url(data:font/opentype;base64,${btoa(d)});`;
          let v = `@font-face {font-family:"${u}";src:${m}}`;
          this.insertRule(v);
          let y = this._document.createElement("div");
          y.style.visibility = "hidden";
          y.style.width = y.style.height = "10px";
          y.style.position = "absolute";
          y.style.top = y.style.left = "0px";
          for (let e of [t.loadedName, u]) {
            let t = this._document.createElement("span");
            t.textContent = "Hi";
            t.style.fontFamily = e;
            y.append(t);
          }
          this._document.body.append(y);
          c(u, () => {
            y.remove();
            e.complete();
          });
        }
      }
      e.FontLoader = n;
      class o {
        constructor(t, {
          isEvalSupported: e = true,
          disableFontFace: r = false,
          ignoreErrors: i = false,
          inspectFont: n = null
        }) {
          this.compiledGlyphs = Object.create(null);
          for (let e in t) {
            this[e] = t[e];
          }
          this.isEvalSupported = e !== false;
          this.disableFontFace = r === true;
          this.ignoreErrors = i === true;
          this._inspectFont = n;
        }
        createNativeFontFace() {
          let t;
          if (!this.data || this.disableFontFace) {
            return null;
          }
          if (this.cssFontInfo) {
            let e = {
              weight: this.cssFontInfo.fontWeight
            };
            if (this.cssFontInfo.italicAngle) {
              e.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
            }
            t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
          } else {
            t = new FontFace(this.loadedName, this.data, {});
          }
          this._inspectFont?.(this);
          return t;
        }
        createFontFaceRule() {
          let t;
          if (!this.data || this.disableFontFace) {
            return null;
          }
          let e = i.bytesToString(this.data);
          let r = `url(data:${this.mimetype};base64,${btoa(e)});`;
          if (this.cssFontInfo) {
            let e = `font-weight: ${this.cssFontInfo.fontWeight};`;
            if (this.cssFontInfo.italicAngle) {
              e += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
            }
            t = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${e}src:${r}}`;
          } else {
            t = `@font-face {font-family:"${this.loadedName}";src:${r}}`;
          }
          this._inspectFont?.(this, r);
          return t;
        }
        getPathGenerator(t, e) {
          let r;
          if (this.compiledGlyphs[e] !== undefined) {
            return this.compiledGlyphs[e];
          }
          try {
            r = t.get(this.loadedName + "_path_" + e);
          } catch (t) {
            if (!this.ignoreErrors) {
              throw t;
            }
            i.warn(`getPathGenerator - ignoring character: "${t}".`);
            return this.compiledGlyphs[e] = function (t, e) {};
          }
          if (this.isEvalSupported && i.FeatureTest.isEvalSupported) {
            let t = [];
            for (let e of r) {
              let r = e.args !== undefined ? e.args.join(",") : "";
              t.push("c.", e.cmd, "(", r, ");\n");
            }
            return this.compiledGlyphs[e] = Function("c", "size", t.join(""));
          }
          return this.compiledGlyphs[e] = function (t, e) {
            for (let i of r) {
              if (i.cmd === "scale") {
                i.args = [e, -e];
              }
              t[i.cmd].apply(t, i.args);
            }
          };
        }
      }
      e.FontFaceObject = o;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.NodeStandardFontDataFactory = e.NodeFilterFactory = e.NodeCanvasFactory = e.NodeCMapReaderFactory = undefined;
      var i = r(7);
      r(1);
      let n = function (t) {
        return new Promise((e, r) => {
          require("new-pdf-scroll-view_3") /*id: 862547*/.readFile(t, (t, i) => {
            if (t || !i) {
              r(Error(t));
              return;
            }
            e(new Uint8Array(i));
          });
        });
      };
      class o extends i.BaseFilterFactory {}
      e.NodeFilterFactory = o;
      class s extends i.BaseCanvasFactory {
        _createCanvas(t, e) {
          return require("new-pdf-scroll-view_1") /*id: 716047*/.createCanvas(t, e);
        }
      }
      e.NodeCanvasFactory = s;
      class a extends i.BaseCMapReaderFactory {
        _fetchData(t, e) {
          return n(t).then(t => ({
            cMapData: t,
            compressionType: e
          }));
        }
      }
      e.NodeCMapReaderFactory = a;
      class l extends i.BaseStandardFontDataFactory {
        _fetchData(t) {
          return n(t);
        }
      }
      e.NodeStandardFontDataFactory = l;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.CanvasGraphics = undefined;
      var i = r(1);
      var n = r(6);
      var o = r(12);
      var s = r(13);
      let a = 16;
      let l = 100;
      let h = 4096;
      let c = 15;
      let u = 10;
      let d = 1000;
      let f = 16;
      function p(t, e) {
        if (t._removeMirroring) {
          throw Error("Context is already forwarding operations.");
        }
        t.__originalSave = t.save;
        t.__originalRestore = t.restore;
        t.__originalRotate = t.rotate;
        t.__originalScale = t.scale;
        t.__originalTranslate = t.translate;
        t.__originalTransform = t.transform;
        t.__originalSetTransform = t.setTransform;
        t.__originalResetTransform = t.resetTransform;
        t.__originalClip = t.clip;
        t.__originalMoveTo = t.moveTo;
        t.__originalLineTo = t.lineTo;
        t.__originalBezierCurveTo = t.bezierCurveTo;
        t.__originalRect = t.rect;
        t.__originalClosePath = t.closePath;
        t.__originalBeginPath = t.beginPath;
        t._removeMirroring = () => {
          t.save = t.__originalSave;
          t.restore = t.__originalRestore;
          t.rotate = t.__originalRotate;
          t.scale = t.__originalScale;
          t.translate = t.__originalTranslate;
          t.transform = t.__originalTransform;
          t.setTransform = t.__originalSetTransform;
          t.resetTransform = t.__originalResetTransform;
          t.clip = t.__originalClip;
          t.moveTo = t.__originalMoveTo;
          t.lineTo = t.__originalLineTo;
          t.bezierCurveTo = t.__originalBezierCurveTo;
          t.rect = t.__originalRect;
          t.closePath = t.__originalClosePath;
          t.beginPath = t.__originalBeginPath;
          delete t._removeMirroring;
        };
        t.save = function () {
          e.save();
          this.__originalSave();
        };
        t.restore = function () {
          e.restore();
          this.__originalRestore();
        };
        t.translate = function (t, r) {
          e.translate(t, r);
          this.__originalTranslate(t, r);
        };
        t.scale = function (t, r) {
          e.scale(t, r);
          this.__originalScale(t, r);
        };
        t.transform = function (t, r, i, n, o, s) {
          e.transform(t, r, i, n, o, s);
          this.__originalTransform(t, r, i, n, o, s);
        };
        t.setTransform = function (t, r, i, n, o, s) {
          e.setTransform(t, r, i, n, o, s);
          this.__originalSetTransform(t, r, i, n, o, s);
        };
        t.resetTransform = function () {
          e.resetTransform();
          this.__originalResetTransform();
        };
        t.rotate = function (t) {
          e.rotate(t);
          this.__originalRotate(t);
        };
        t.clip = function (t) {
          e.clip(t);
          this.__originalClip(t);
        };
        t.moveTo = function (t, r) {
          e.moveTo(t, r);
          this.__originalMoveTo(t, r);
        };
        t.lineTo = function (t, r) {
          e.lineTo(t, r);
          this.__originalLineTo(t, r);
        };
        t.bezierCurveTo = function (t, r, i, n, o, s) {
          e.bezierCurveTo(t, r, i, n, o, s);
          this.__originalBezierCurveTo(t, r, i, n, o, s);
        };
        t.rect = function (t, r, i, n) {
          e.rect(t, r, i, n);
          this.__originalRect(t, r, i, n);
        };
        t.closePath = function () {
          e.closePath();
          this.__originalClosePath();
        };
        t.beginPath = function () {
          e.beginPath();
          this.__originalBeginPath();
        };
      }
      class g {
        constructor(t) {
          this.canvasFactory = t;
          this.cache = Object.create(null);
        }
        getCanvas(t, e, r) {
          let i;
          if (this.cache[t] !== undefined) {
            i = this.cache[t];
            this.canvasFactory.reset(i, e, r);
          } else {
            i = this.canvasFactory.create(e, r);
            this.cache[t] = i;
          }
          return i;
        }
        delete(t) {
          delete this.cache[t];
        }
        clear() {
          for (let t in this.cache) {
            let e = this.cache[t];
            this.canvasFactory.destroy(e);
            delete this.cache[t];
          }
        }
      }
      function m(t, e, r, i, o, s, a, l, h, c) {
        let [u, d, f, p, g, m] = n.getCurrentTransform(t);
        if (d === 0 && f === 0) {
          let n = Math.round(a * u + g);
          let v = Math.round(l * p + m);
          let y = Math.abs(Math.round((a + h) * u + g) - n) || 1;
          let b = Math.abs(Math.round((l + c) * p + m) - v) || 1;
          t.setTransform(Math.sign(u), 0, 0, Math.sign(p), n, v);
          t.drawImage(e, r, i, o, s, 0, 0, y, b);
          t.setTransform(u, d, f, p, g, m);
          return [y, b];
        }
        if (u === 0 && p === 0) {
          let n = Math.round(l * f + g);
          let v = Math.round(a * d + m);
          let y = Math.abs(Math.round((l + c) * f + g) - n) || 1;
          let b = Math.abs(Math.round((a + h) * d + m) - v) || 1;
          t.setTransform(0, Math.sign(d), Math.sign(f), 0, n, v);
          t.drawImage(e, r, i, o, s, 0, 0, b, y);
          t.setTransform(u, d, f, p, g, m);
          return [b, y];
        }
        t.drawImage(e, r, i, o, s, a, l, h, c);
        return [Math.hypot(u, d) * h, Math.hypot(f, p) * c];
      }
      function v(t) {
        let e;
        let r;
        let i;
        let {
          width: n,
          height: o
        } = t;
        if (n > d || o > d) {
          return null;
        }
        let s = 1000;
        let a = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
        let l = n + 1;
        let h = new Uint8Array(l * (o + 1));
        let c = n + 7 & -8;
        let u = new Uint8Array(c * o);
        let f = 0;
        for (let e of t.data) {
          let t = 128;
          while (t > 0) {
            u[f++] = e & t ? 0 : 255;
            t >>= 1;
          }
        }
        let p = 0;
        if (u[f = 0] !== 0) {
          h[0] = 1;
          ++p;
        }
        r = 1;
        for (; r < n; r++) {
          if (u[f] !== u[f + 1]) {
            h[r] = u[f] ? 2 : 1;
            ++p;
          }
          f++;
        }
        if (u[f] !== 0) {
          h[r] = 2;
          ++p;
        }
        e = 1;
        for (; e < o; e++) {
          f = e * c;
          i = e * l;
          if (u[f - c] !== u[f]) {
            h[i] = u[f] ? 1 : 8;
            ++p;
          }
          let t = !!u[f] * 4 + !!u[f - c] * 8;
          for (r = 1; r < n; r++) {
            if (a[t = (t >> 2) + !!u[f + 1] * 4 + !!u[f - c + 1] * 8]) {
              h[i + r] = a[t];
              ++p;
            }
            f++;
          }
          if (u[f - c] !== u[f]) {
            h[i + r] = u[f] ? 2 : 4;
            ++p;
          }
          if (p > s) {
            return null;
          }
        }
        f = c * (o - 1);
        i = e * l;
        if (u[f] !== 0) {
          h[i] = 8;
          ++p;
        }
        r = 1;
        for (; r < n; r++) {
          if (u[f] !== u[f + 1]) {
            h[i + r] = u[f] ? 4 : 8;
            ++p;
          }
          f++;
        }
        if (u[f] !== 0) {
          h[i + r] = 4;
          ++p;
        }
        if (p > s) {
          return null;
        }
        let g = new Int32Array([0, l, -1, 0, -l, 0, 0, 0, 1]);
        let m = new Path2D();
        for (e = 0; p && e <= o; e++) {
          let t = e * l;
          let r = t + n;
          while (t < r && !h[t]) {
            t++;
          }
          if (t === r) {
            continue;
          }
          m.moveTo(t % l, e);
          let i = t;
          let o = h[t];
          do {
            let e = g[o];
            do {
              t += e;
            } while (!h[t]);
            let r = h[t];
            if (r !== 5 && r !== 10) {
              o = r;
              h[t] = 0;
            } else {
              o = r & o * 51 >> 4;
              h[t] &= o >> 2 | o << 2;
            }
            m.lineTo(t % l, t / l | 0);
            if (!h[t]) {
              --p;
            }
          } while (i !== t);
          --e;
        }
        u = null;
        h = null;
        return function (t) {
          t.save();
          t.scale(1 / n, -1 / o);
          t.translate(0, -o);
          t.fill(m);
          t.beginPath();
          t.restore();
        };
      }
      class y {
        constructor(t, e) {
          this.alphaIsShape = false;
          this.fontSize = 0;
          this.fontSizeScale = 1;
          this.textMatrix = i.IDENTITY_MATRIX;
          this.textMatrixScale = 1;
          this.fontMatrix = i.FONT_IDENTITY_MATRIX;
          this.leading = 0;
          this.x = 0;
          this.y = 0;
          this.lineX = 0;
          this.lineY = 0;
          this.charSpacing = 0;
          this.wordSpacing = 0;
          this.textHScale = 1;
          this.textRenderingMode = i.TextRenderingMode.FILL;
          this.textRise = 0;
          this.fillColor = "#000000";
          this.strokeColor = "#000000";
          this.patternFill = false;
          this.fillAlpha = 1;
          this.strokeAlpha = 1;
          this.lineWidth = 1;
          this.activeSMask = null;
          this.transferMaps = "none";
          this.startNewPathAndClipBox([0, 0, t, e]);
        }
        clone() {
          let t = Object.create(this);
          t.clipBox = this.clipBox.slice();
          return t;
        }
        setCurrentPoint(t, e) {
          this.x = t;
          this.y = e;
        }
        updatePathMinMax(t, e, r) {
          [e, r] = i.Util.applyTransform([e, r], t);
          this.minX = Math.min(this.minX, e);
          this.minY = Math.min(this.minY, r);
          this.maxX = Math.max(this.maxX, e);
          this.maxY = Math.max(this.maxY, r);
        }
        updateRectMinMax(t, e) {
          let r = i.Util.applyTransform(e, t);
          let n = i.Util.applyTransform(e.slice(2), t);
          this.minX = Math.min(this.minX, r[0], n[0]);
          this.minY = Math.min(this.minY, r[1], n[1]);
          this.maxX = Math.max(this.maxX, r[0], n[0]);
          this.maxY = Math.max(this.maxY, r[1], n[1]);
        }
        updateScalingPathMinMax(t, e) {
          i.Util.scaleMinMax(t, e);
          this.minX = Math.min(this.minX, e[0]);
          this.maxX = Math.max(this.maxX, e[1]);
          this.minY = Math.min(this.minY, e[2]);
          this.maxY = Math.max(this.maxY, e[3]);
        }
        updateCurvePathMinMax(t, e, r, n, o, s, a, l, h, c) {
          let u = i.Util.bezierBoundingBox(e, r, n, o, s, a, l, h);
          if (c) {
            c[0] = Math.min(c[0], u[0], u[2]);
            c[1] = Math.max(c[1], u[0], u[2]);
            c[2] = Math.min(c[2], u[1], u[3]);
            c[3] = Math.max(c[3], u[1], u[3]);
            return;
          }
          this.updateRectMinMax(t, u);
        }
        getPathBoundingBox(t = o.PathType.FILL, e = null) {
          let r = [this.minX, this.minY, this.maxX, this.maxY];
          if (t === o.PathType.STROKE) {
            if (!e) {
              i.unreachable("Stroke bounding box must include transform.");
            }
            let t = i.Util.singularValueDecompose2dScale(e);
            let n = t[0] * this.lineWidth / 2;
            let o = t[1] * this.lineWidth / 2;
            r[0] -= n;
            r[1] -= o;
            r[2] += n;
            r[3] += o;
          }
          return r;
        }
        updateClipFromPath() {
          let t = i.Util.intersect(this.clipBox, this.getPathBoundingBox());
          this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
        }
        isEmptyClip() {
          return this.minX === Infinity;
        }
        startNewPathAndClipBox(t) {
          this.clipBox = t;
          this.minX = Infinity;
          this.minY = Infinity;
          this.maxX = 0;
          this.maxY = 0;
        }
        getClippedPathBoundingBox(t = o.PathType.FILL, e = null) {
          return i.Util.intersect(this.clipBox, this.getPathBoundingBox(t, e));
        }
      }
      function b(t, e) {
        let r;
        let n;
        let o;
        let s;
        if (typeof ImageData != "undefined" && e instanceof ImageData) {
          t.putImageData(e, 0, 0);
          return;
        }
        let a = e.height;
        let l = e.width;
        let h = a % f;
        let c = (a - h) / f;
        let u = h === 0 ? c : c + 1;
        let d = t.createImageData(l, f);
        let p = 0;
        let g;
        let m = e.data;
        let v = d.data;
        if (e.kind === i.ImageKind.GRAYSCALE_1BPP) {
          let e = m.byteLength;
          let s = new Uint32Array(v.buffer, 0, v.byteLength >> 2);
          let a = s.length;
          let y = l + 7 >> 3;
          let b = 4294967295;
          let A = i.FeatureTest.isLittleEndian ? 4278190080 : 255;
          for (r = 0; r < u; r++) {
            n = 0;
            o = r < c ? f : h;
            g = 0;
            for (; n < o; n++) {
              let t = e - p;
              let r = 0;
              let i = t > y ? l : t * 8 - 7;
              let n = i & -8;
              let o = 0;
              let a = 0;
              for (; r < n; r += 8) {
                a = m[p++];
                s[g++] = a & 128 ? b : A;
                s[g++] = a & 64 ? b : A;
                s[g++] = a & 32 ? b : A;
                s[g++] = a & 16 ? b : A;
                s[g++] = a & 8 ? b : A;
                s[g++] = a & 4 ? b : A;
                s[g++] = a & 2 ? b : A;
                s[g++] = a & 1 ? b : A;
              }
              for (; r < i; r++) {
                if (o === 0) {
                  a = m[p++];
                  o = 128;
                }
                s[g++] = a & o ? b : A;
                o >>= 1;
              }
            }
            while (g < a) {
              s[g++] = 0;
            }
            t.putImageData(d, 0, r * f);
          }
        } else if (e.kind === i.ImageKind.RGBA_32BPP) {
          r = 0;
          n = 0;
          s = l * f * 4;
          for (; r < c; r++) {
            v.set(m.subarray(p, p + s));
            p += s;
            t.putImageData(d, 0, n);
            n += f;
          }
          if (r < u) {
            s = l * h * 4;
            v.set(m.subarray(p, p + s));
            t.putImageData(d, 0, n);
          }
        } else if (e.kind === i.ImageKind.RGB_24BPP) {
          r = 0;
          s = l * (o = f);
          for (; r < u; r++) {
            if (r >= c) {
              s = l * (o = h);
            }
            g = 0;
            n = s;
            while (n--) {
              v[g++] = m[p++];
              v[g++] = m[p++];
              v[g++] = m[p++];
              v[g++] = 255;
            }
            t.putImageData(d, 0, r * f);
          }
        } else {
          throw Error(`bad image kind: ${e.kind}`);
        }
      }
      function A(t, e) {
        if (e.bitmap) {
          t.drawImage(e.bitmap, 0, 0);
          return;
        }
        let r = e.height;
        let i = e.width;
        let n = r % f;
        let o = (r - n) / f;
        let a = n === 0 ? o : o + 1;
        let l = t.createImageData(i, f);
        let h = 0;
        let c = e.data;
        let u = l.data;
        for (let e = 0; e < a; e++) {
          let r = e < o ? f : n;
          ({
            srcPos: h
          } = s.convertBlackAndWhiteToRGBA({
            src: c,
            srcPos: h,
            dest: u,
            width: i,
            height: r,
            nonBlackColor: 0
          }));
          t.putImageData(l, 0, e * f);
        }
      }
      function S(t, e) {
        for (let r of ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"]) {
          if (t[r] !== undefined) {
            e[r] = t[r];
          }
        }
        if (t.setLineDash !== undefined) {
          e.setLineDash(t.getLineDash());
          e.lineDashOffset = t.lineDashOffset;
        }
      }
      function x(t) {
        t.strokeStyle = t.fillStyle = "#000000";
        t.fillRule = "nonzero";
        t.globalAlpha = 1;
        t.lineWidth = 1;
        t.lineCap = "butt";
        t.lineJoin = "miter";
        t.miterLimit = 10;
        t.globalCompositeOperation = "source-over";
        t.font = "10px sans-serif";
        if (t.setLineDash !== undefined) {
          t.setLineDash([]);
          t.lineDashOffset = 0;
        }
        if (!i.isNodeJS) {
          let {
            filter: e
          } = t;
          if (e !== "none" && e !== "") {
            t.filter = "none";
          }
        }
      }
      function w(t, e, r, i) {
        let n = t.length;
        for (let o = 3; o < n; o += 4) {
          let n = t[o];
          if (n === 0) {
            t[o - 3] = e;
            t[o - 2] = r;
            t[o - 1] = i;
          } else if (n < 255) {
            let s = 255 - n;
            t[o - 3] = t[o - 3] * n + e * s >> 8;
            t[o - 2] = t[o - 2] * n + r * s >> 8;
            t[o - 1] = t[o - 1] * n + i * s >> 8;
          }
        }
      }
      function C(t, e, r) {
        let i = t.length;
        let n = 1 / 255;
        for (let o = 3; o < i; o += 4) {
          let i = r ? r[t[o]] : t[o];
          e[o] = e[o] * i * n | 0;
        }
      }
      function T(t, e, r) {
        let i = t.length;
        for (let n = 3; n < i; n += 4) {
          let i = t[n - 3] * 77 + t[n - 2] * 152 + t[n - 1] * 28;
          e[n] = r ? e[n] * r[i >> 8] >> 8 : e[n] * i >> 16;
        }
      }
      function E(t, e, r, i, n, o, s, a, l, h, c) {
        let u = !!o;
        let d = u ? o[0] : 0;
        let f = u ? o[1] : 0;
        let p = u ? o[2] : 0;
        let g = n === "Luminosity" ? T : C;
        let m = Math.min(i, Math.ceil(1048576 / r));
        for (let n = 0; n < i; n += m) {
          let o = Math.min(m, i - n);
          let v = t.getImageData(a - h, n + (l - c), r, o);
          let y = e.getImageData(a, n + l, r, o);
          if (u) {
            w(v.data, d, f, p);
          }
          g(v.data, y.data, s);
          e.putImageData(y, a, n + l);
        }
      }
      function F(t, e, r, i) {
        let n = i[0];
        let o = i[1];
        let s = i[2] - n;
        let a = i[3] - o;
        if (s !== 0 && a !== 0) {
          E(e.context, r, s, a, e.subtype, e.backdrop, e.transferMap, n, o, e.offsetX, e.offsetY);
          t.save();
          t.globalAlpha = 1;
          t.globalCompositeOperation = "source-over";
          t.setTransform(1, 0, 0, 1, 0, 0);
          t.drawImage(r.canvas, 0, 0);
          t.restore();
        }
      }
      function k(t, e) {
        let r = i.Util.singularValueDecompose2dScale(t);
        r[0] = Math.fround(r[0]);
        r[1] = Math.fround(r[1]);
        let o = Math.fround((globalThis.devicePixelRatio || 1) * n.PixelsPerInch.PDF_TO_CSS_UNITS);
        if (e !== undefined) {
          return e;
        } else {
          return !!(r[0] <= o) || !!(r[1] <= o);
        }
      }
      let P = ["butt", "round", "square"];
      let R = ["miter", "round", "bevel"];
      let M = {};
      let O = {};
      class D {
        constructor(t, e, r, i, n, {
          optionalContentConfig: o,
          markedContentStack: s = null
        }, a, l) {
          this.ctx = t;
          this.current = new y(this.ctx.canvas.width, this.ctx.canvas.height);
          this.stateStack = [];
          this.pendingClip = null;
          this.pendingEOFill = false;
          this.res = null;
          this.xobjs = null;
          this.commonObjs = e;
          this.objs = r;
          this.canvasFactory = i;
          this.filterFactory = n;
          this.groupStack = [];
          this.processingType3 = null;
          this.baseTransform = null;
          this.baseTransformStack = [];
          this.groupLevel = 0;
          this.smaskStack = [];
          this.smaskCounter = 0;
          this.tempSMask = null;
          this.suspendedCtx = null;
          this.contentVisible = true;
          this.markedContentStack = s || [];
          this.optionalContentConfig = o;
          this.cachedCanvases = new g(this.canvasFactory);
          this.cachedPatterns = new Map();
          this.annotationCanvasMap = a;
          this.viewportScale = 1;
          this.outputScaleX = 1;
          this.outputScaleY = 1;
          this.pageColors = l;
          this._cachedScaleForStroking = [-1, 0];
          this._cachedGetSinglePixelWidth = null;
          this._cachedBitmapsMap = new Map();
        }
        getObject(t, e = null) {
          if (typeof t == "string") {
            if (t.startsWith("g_")) {
              return this.commonObjs.get(t);
            } else {
              return this.objs.get(t);
            }
          } else {
            return e;
          }
        }
        beginDrawing({
          transform: t,
          viewport: e,
          transparency: r = false,
          background: i = null
        }) {
          let o = this.ctx.canvas.width;
          let s = this.ctx.canvas.height;
          let a = this.ctx.fillStyle;
          this.ctx.fillStyle = i || "#ffffff";
          this.ctx.fillRect(0, 0, o, s);
          this.ctx.fillStyle = a;
          if (r) {
            let t = this.cachedCanvases.getCanvas("transparent", o, s);
            this.compositeCtx = this.ctx;
            this.transparentCanvas = t.canvas;
            this.ctx = t.context;
            this.ctx.save();
            this.ctx.transform(...n.getCurrentTransform(this.compositeCtx));
          }
          this.ctx.save();
          x(this.ctx);
          if (t) {
            this.ctx.transform(...t);
            this.outputScaleX = t[0];
            this.outputScaleY = t[0];
          }
          this.ctx.transform(...e.transform);
          this.viewportScale = e.scale;
          this.baseTransform = n.getCurrentTransform(this.ctx);
        }
        executeOperatorList(t, e, r, n) {
          let o;
          let s = t.argsArray;
          let a = t.fnArray;
          let l = e || 0;
          let h = s.length;
          if (h === l) {
            return l;
          }
          let d = h - l > u && typeof r == "function";
          let f = d ? Date.now() + c : 0;
          let p = 0;
          let g = this.commonObjs;
          let m = this.objs;
          while (true) {
            if (n !== undefined && l === n.nextBreakPoint) {
              n.breakIt(l, r);
              return l;
            }
            if ((o = a[l]) !== i.OPS.dependency) {
              this[o].apply(this, s[l]);
            } else {
              for (let t of s[l]) {
                let e = t.startsWith("g_") ? g : m;
                if (!e.has(t)) {
                  e.get(t, r);
                  return l;
                }
              }
            }
            if (++l === h) {
              return l;
            }
            if (d && ++p > u) {
              if (Date.now() > f) {
                r();
                return l;
              }
              p = 0;
            }
          }
        }
        #t7() {
          while (this.stateStack.length || this.inSMaskMode) {
            this.restore();
          }
          this.ctx.restore();
          if (this.transparentCanvas) {
            this.ctx = this.compositeCtx;
            this.ctx.save();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.drawImage(this.transparentCanvas, 0, 0);
            this.ctx.restore();
            this.transparentCanvas = null;
          }
        }
        endDrawing() {
          this.#t7();
          this.cachedCanvases.clear();
          this.cachedPatterns.clear();
          for (let t of this._cachedBitmapsMap.values()) {
            for (let e of t.values()) {
              if (typeof HTMLCanvasElement != "undefined" && e instanceof HTMLCanvasElement) {
                e.width = e.height = 0;
              }
            }
            t.clear();
          }
          this._cachedBitmapsMap.clear();
          this.#et();
        }
        #et() {
          if (this.pageColors) {
            let t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
            if (t !== "none") {
              let e = this.ctx.filter;
              this.ctx.filter = t;
              this.ctx.drawImage(this.ctx.canvas, 0, 0);
              this.ctx.filter = e;
            }
          }
        }
        _scaleImage(t, e) {
          let r;
          let i;
          let n = t.width;
          let o = t.height;
          let s = Math.max(Math.hypot(e[0], e[1]), 1);
          let a = Math.max(Math.hypot(e[2], e[3]), 1);
          let l = n;
          let h = o;
          let c = "prescale1";
          while (s > 2 && l > 1 || a > 2 && h > 1) {
            let e = l;
            let n = h;
            if (s > 2 && l > 1) {
              e = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2);
              s /= l / e;
            }
            if (a > 2 && h > 1) {
              n = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2;
              a /= h / n;
            }
            (i = (r = this.cachedCanvases.getCanvas(c, e, n)).context).clearRect(0, 0, e, n);
            i.drawImage(t, 0, 0, l, h, 0, 0, e, n);
            t = r.canvas;
            l = e;
            h = n;
            c = c === "prescale1" ? "prescale2" : "prescale1";
          }
          return {
            img: t,
            paintWidth: l,
            paintHeight: h
          };
        }
        _createMaskCanvas(t) {
          let e;
          let r;
          let s;
          let a;
          let l = this.ctx;
          let {
            width: h,
            height: c
          } = t;
          let u = this.current.fillColor;
          let d = this.current.patternFill;
          let f = n.getCurrentTransform(l);
          if ((t.bitmap || t.data) && t.count > 1) {
            let i = t.bitmap || t.data.buffer;
            r = JSON.stringify(d ? f : [f.slice(0, 4), u]);
            if (!(e = this._cachedBitmapsMap.get(i))) {
              e = new Map();
              this._cachedBitmapsMap.set(i, e);
            }
            let n = e.get(r);
            if (n && !d) {
              return {
                canvas: n,
                offsetX: Math.round(Math.min(f[0], f[2]) + f[4]),
                offsetY: Math.round(Math.min(f[1], f[3]) + f[5])
              };
            }
            s = n;
          }
          if (!s) {
            A((a = this.cachedCanvases.getCanvas("maskCanvas", h, c)).context, t);
          }
          let p = i.Util.transform(f, [1 / h, 0, 0, -1 / c, 0, 0]);
          p = i.Util.transform(p, [1, 0, 0, 1, 0, -c]);
          let g = i.Util.applyTransform([0, 0], p);
          let v = i.Util.applyTransform([h, c], p);
          let y = i.Util.normalizeRect([g[0], g[1], v[0], v[1]]);
          let b = Math.round(y[2] - y[0]) || 1;
          let S = Math.round(y[3] - y[1]) || 1;
          let x = this.cachedCanvases.getCanvas("fillCanvas", b, S);
          let w = x.context;
          let C = Math.min(g[0], v[0]);
          let T = Math.min(g[1], v[1]);
          w.translate(-C, -T);
          w.transform(...p);
          if (!s) {
            s = (s = this._scaleImage(a.canvas, n.getCurrentTransformInverse(w))).img;
            if (e && d) {
              e.set(r, s);
            }
          }
          w.imageSmoothingEnabled = k(n.getCurrentTransform(w), t.interpolate);
          m(w, s, 0, 0, s.width, s.height, 0, 0, h, c);
          w.globalCompositeOperation = "source-in";
          let E = i.Util.transform(n.getCurrentTransformInverse(w), [1, 0, 0, 1, -C, -T]);
          w.fillStyle = d ? u.getPattern(l, this, E, o.PathType.FILL) : u;
          w.fillRect(0, 0, h, c);
          if (e && !d) {
            this.cachedCanvases.delete("fillCanvas");
            e.set(r, x.canvas);
          }
          return {
            canvas: x.canvas,
            offsetX: Math.round(C),
            offsetY: Math.round(T)
          };
        }
        setLineWidth(t) {
          if (t !== this.current.lineWidth) {
            this._cachedScaleForStroking[0] = -1;
          }
          this.current.lineWidth = t;
          this.ctx.lineWidth = t;
        }
        setLineCap(t) {
          this.ctx.lineCap = P[t];
        }
        setLineJoin(t) {
          this.ctx.lineJoin = R[t];
        }
        setMiterLimit(t) {
          this.ctx.miterLimit = t;
        }
        setDash(t, e) {
          let r = this.ctx;
          if (r.setLineDash !== undefined) {
            r.setLineDash(t);
            r.lineDashOffset = e;
          }
        }
        setRenderingIntent(t) {}
        setFlatness(t) {}
        setGState(t) {
          for (let [e, r] of t) {
            switch (e) {
              case "LW":
                this.setLineWidth(r);
                break;
              case "LC":
                this.setLineCap(r);
                break;
              case "LJ":
                this.setLineJoin(r);
                break;
              case "ML":
                this.setMiterLimit(r);
                break;
              case "D":
                this.setDash(r[0], r[1]);
                break;
              case "RI":
                this.setRenderingIntent(r);
                break;
              case "FL":
                this.setFlatness(r);
                break;
              case "Font":
                this.setFont(r[0], r[1]);
                break;
              case "CA":
                this.current.strokeAlpha = r;
                break;
              case "ca":
                this.current.fillAlpha = r;
                this.ctx.globalAlpha = r;
                break;
              case "BM":
                this.ctx.globalCompositeOperation = r;
                break;
              case "SMask":
                this.current.activeSMask = r ? this.tempSMask : null;
                this.tempSMask = null;
                this.checkSMaskState();
                break;
              case "TR":
                this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(r);
            }
          }
        }
        get inSMaskMode() {
          return !!this.suspendedCtx;
        }
        checkSMaskState() {
          let t = this.inSMaskMode;
          if (this.current.activeSMask && !t) {
            this.beginSMaskMode();
          } else if (!this.current.activeSMask && t) {
            this.endSMaskMode();
          }
        }
        beginSMaskMode() {
          if (this.inSMaskMode) {
            throw Error("beginSMaskMode called while already in smask mode");
          }
          let t = this.ctx.canvas.width;
          let e = this.ctx.canvas.height;
          let r = "smaskGroupAt" + this.groupLevel;
          let i = this.cachedCanvases.getCanvas(r, t, e);
          this.suspendedCtx = this.ctx;
          this.ctx = i.context;
          let o = this.ctx;
          o.setTransform(...n.getCurrentTransform(this.suspendedCtx));
          S(this.suspendedCtx, o);
          p(o, this.suspendedCtx);
          this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
        }
        endSMaskMode() {
          if (!this.inSMaskMode) {
            throw Error("endSMaskMode called while not in smask mode");
          }
          this.ctx._removeMirroring();
          S(this.ctx, this.suspendedCtx);
          this.ctx = this.suspendedCtx;
          this.suspendedCtx = null;
        }
        compose(t) {
          if (!this.current.activeSMask) {
            return;
          }
          if (t) {
            t[0] = Math.floor(t[0]);
            t[1] = Math.floor(t[1]);
            t[2] = Math.ceil(t[2]);
            t[3] = Math.ceil(t[3]);
          } else {
            t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
          }
          let e = this.current.activeSMask;
          F(this.suspendedCtx, e, this.ctx, t);
          this.ctx.save();
          this.ctx.setTransform(1, 0, 0, 1, 0, 0);
          this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
          this.ctx.restore();
        }
        save() {
          if (this.inSMaskMode) {
            S(this.ctx, this.suspendedCtx);
            this.suspendedCtx.save();
          } else {
            this.ctx.save();
          }
          let t = this.current;
          this.stateStack.push(t);
          this.current = t.clone();
        }
        restore() {
          if (this.stateStack.length === 0 && this.inSMaskMode) {
            this.endSMaskMode();
          }
          if (this.stateStack.length !== 0) {
            this.current = this.stateStack.pop();
            if (this.inSMaskMode) {
              this.suspendedCtx.restore();
              S(this.suspendedCtx, this.ctx);
            } else {
              this.ctx.restore();
            }
            this.checkSMaskState();
            this.pendingClip = null;
            this._cachedScaleForStroking[0] = -1;
            this._cachedGetSinglePixelWidth = null;
          }
        }
        transform(t, e, r, i, n, o) {
          this.ctx.transform(t, e, r, i, n, o);
          this._cachedScaleForStroking[0] = -1;
          this._cachedGetSinglePixelWidth = null;
        }
        constructPath(t, e, r) {
          let o;
          let s;
          let a = this.ctx;
          let l = this.current;
          let h = l.x;
          let c = l.y;
          let u = n.getCurrentTransform(a);
          let d = u[0] === 0 && u[3] === 0 || u[1] === 0 && u[2] === 0;
          let f = d ? r.slice(0) : null;
          for (let r = 0, n = 0, p = t.length; r < p; r++) {
            switch (t[r] | 0) {
              case i.OPS.rectangle:
                h = e[n++];
                c = e[n++];
                let p = e[n++];
                let g = e[n++];
                let m = h + p;
                let v = c + g;
                a.moveTo(h, c);
                if (p === 0 || g === 0) {
                  a.lineTo(m, v);
                } else {
                  a.lineTo(m, c);
                  a.lineTo(m, v);
                  a.lineTo(h, v);
                }
                if (!d) {
                  l.updateRectMinMax(u, [h, c, m, v]);
                }
                a.closePath();
                break;
              case i.OPS.moveTo:
                h = e[n++];
                c = e[n++];
                a.moveTo(h, c);
                if (!d) {
                  l.updatePathMinMax(u, h, c);
                }
                break;
              case i.OPS.lineTo:
                h = e[n++];
                c = e[n++];
                a.lineTo(h, c);
                if (!d) {
                  l.updatePathMinMax(u, h, c);
                }
                break;
              case i.OPS.curveTo:
                o = h;
                s = c;
                h = e[n + 4];
                c = e[n + 5];
                a.bezierCurveTo(e[n], e[n + 1], e[n + 2], e[n + 3], h, c);
                l.updateCurvePathMinMax(u, o, s, e[n], e[n + 1], e[n + 2], e[n + 3], h, c, f);
                n += 6;
                break;
              case i.OPS.curveTo2:
                o = h;
                s = c;
                a.bezierCurveTo(h, c, e[n], e[n + 1], e[n + 2], e[n + 3]);
                l.updateCurvePathMinMax(u, o, s, h, c, e[n], e[n + 1], e[n + 2], e[n + 3], f);
                h = e[n + 2];
                c = e[n + 3];
                n += 4;
                break;
              case i.OPS.curveTo3:
                o = h;
                s = c;
                h = e[n + 2];
                c = e[n + 3];
                a.bezierCurveTo(e[n], e[n + 1], h, c, h, c);
                l.updateCurvePathMinMax(u, o, s, e[n], e[n + 1], h, c, h, c, f);
                n += 4;
                break;
              case i.OPS.closePath:
                a.closePath();
            }
          }
          if (d) {
            l.updateScalingPathMinMax(u, f);
          }
          l.setCurrentPoint(h, c);
        }
        closePath() {
          this.ctx.closePath();
        }
        stroke(t = true) {
          let e = this.ctx;
          let r = this.current.strokeColor;
          e.globalAlpha = this.current.strokeAlpha;
          if (this.contentVisible) {
            if (typeof r == "object" && r?.getPattern) {
              e.save();
              e.strokeStyle = r.getPattern(e, this, n.getCurrentTransformInverse(e), o.PathType.STROKE);
              this.rescaleAndStroke(false);
              e.restore();
            } else {
              this.rescaleAndStroke(true);
            }
          }
          if (t) {
            this.consumePath(this.current.getClippedPathBoundingBox());
          }
          e.globalAlpha = this.current.fillAlpha;
        }
        closeStroke() {
          this.closePath();
          this.stroke();
        }
        fill(t = true) {
          let e = this.ctx;
          let r = this.current.fillColor;
          let i = this.current.patternFill;
          let s = false;
          if (i) {
            e.save();
            e.fillStyle = r.getPattern(e, this, n.getCurrentTransformInverse(e), o.PathType.FILL);
            s = true;
          }
          let a = this.current.getClippedPathBoundingBox();
          if (this.contentVisible && a !== null) {
            if (this.pendingEOFill) {
              e.fill("evenodd");
              this.pendingEOFill = false;
            } else {
              e.fill();
            }
          }
          if (s) {
            e.restore();
          }
          if (t) {
            this.consumePath(a);
          }
        }
        eoFill() {
          this.pendingEOFill = true;
          this.fill();
        }
        fillStroke() {
          this.fill(false);
          this.stroke(false);
          this.consumePath();
        }
        eoFillStroke() {
          this.pendingEOFill = true;
          this.fillStroke();
        }
        closeFillStroke() {
          this.closePath();
          this.fillStroke();
        }
        closeEOFillStroke() {
          this.pendingEOFill = true;
          this.closePath();
          this.fillStroke();
        }
        endPath() {
          this.consumePath();
        }
        clip() {
          this.pendingClip = M;
        }
        eoClip() {
          this.pendingClip = O;
        }
        beginText() {
          this.current.textMatrix = i.IDENTITY_MATRIX;
          this.current.textMatrixScale = 1;
          this.current.x = this.current.lineX = 0;
          this.current.y = this.current.lineY = 0;
        }
        endText() {
          let t = this.pendingTextPaths;
          let e = this.ctx;
          if (t === undefined) {
            e.beginPath();
            return;
          }
          e.save();
          e.beginPath();
          for (let r of t) {
            e.setTransform(...r.transform);
            e.translate(r.x, r.y);
            r.addToPath(e, r.fontSize);
          }
          e.restore();
          e.clip();
          e.beginPath();
          delete this.pendingTextPaths;
        }
        setCharSpacing(t) {
          this.current.charSpacing = t;
        }
        setWordSpacing(t) {
          this.current.wordSpacing = t;
        }
        setHScale(t) {
          this.current.textHScale = t / 100;
        }
        setLeading(t) {
          this.current.leading = -t;
        }
        setFont(t, e) {
          let r = this.commonObjs.get(t);
          let n = this.current;
          if (!r) {
            throw Error(`Can't find font for ${t}`);
          }
          n.fontMatrix = r.fontMatrix || i.FONT_IDENTITY_MATRIX;
          if (n.fontMatrix[0] === 0 || n.fontMatrix[3] === 0) {
            i.warn("Invalid font matrix for font " + t);
          }
          if (e < 0) {
            e = -e;
            n.fontDirection = -1;
          } else {
            n.fontDirection = 1;
          }
          this.current.font = r;
          this.current.fontSize = e;
          if (r.isType3Font) {
            return;
          }
          let o = r.loadedName || "sans-serif";
          let s = r.systemFontInfo?.css || `"${o}", ${r.fallbackName}`;
          let h = "normal";
          if (r.black) {
            h = "900";
          } else if (r.bold) {
            h = "bold";
          }
          let c = r.italic ? "italic" : "normal";
          let u = e;
          if (e < a) {
            u = a;
          } else if (e > l) {
            u = l;
          }
          this.current.fontSizeScale = e / u;
          this.ctx.font = `${c} ${h} ${u}px ${s}`;
        }
        setTextRenderingMode(t) {
          this.current.textRenderingMode = t;
        }
        setTextRise(t) {
          this.current.textRise = t;
        }
        moveText(t, e) {
          this.current.x = this.current.lineX += t;
          this.current.y = this.current.lineY += e;
        }
        setLeadingMoveText(t, e) {
          this.setLeading(-e);
          this.moveText(t, e);
        }
        setTextMatrix(t, e, r, i, n, o) {
          this.current.textMatrix = [t, e, r, i, n, o];
          this.current.textMatrixScale = Math.hypot(t, e);
          this.current.x = this.current.lineX = 0;
          this.current.y = this.current.lineY = 0;
        }
        nextLine() {
          this.moveText(0, this.current.leading);
        }
        paintChar(t, e, r, o) {
          let s;
          let a = this.ctx;
          let l = this.current;
          let h = l.font;
          let c = l.textRenderingMode;
          let u = l.fontSize / l.fontSizeScale;
          let d = c & i.TextRenderingMode.FILL_STROKE_MASK;
          let f = !!(c & i.TextRenderingMode.ADD_TO_PATH_FLAG);
          let p = l.patternFill && !h.missingFile;
          if (h.disableFontFace || f || p) {
            s = h.getPathGenerator(this.commonObjs, t);
          }
          if (h.disableFontFace || p) {
            a.save();
            a.translate(e, r);
            a.beginPath();
            s(a, u);
            if (o) {
              a.setTransform(...o);
            }
            if (d === i.TextRenderingMode.FILL || d === i.TextRenderingMode.FILL_STROKE) {
              a.fill();
            }
            if (d === i.TextRenderingMode.STROKE || d === i.TextRenderingMode.FILL_STROKE) {
              a.stroke();
            }
            a.restore();
          } else {
            if (d === i.TextRenderingMode.FILL || d === i.TextRenderingMode.FILL_STROKE) {
              a.fillText(t, e, r);
            }
            if (d === i.TextRenderingMode.STROKE || d === i.TextRenderingMode.FILL_STROKE) {
              a.strokeText(t, e, r);
            }
          }
          if (f) {
            (this.pendingTextPaths ||= []).push({
              transform: n.getCurrentTransform(a),
              x: e,
              y: r,
              fontSize: u,
              addToPath: s
            });
          }
        }
        get isFontSubpixelAAEnabled() {
          let {
            context: t
          } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
          t.scale(1.5, 1);
          t.fillText("I", 0, 10);
          let e = t.getImageData(0, 0, 10, 10).data;
          let r = false;
          for (let t = 3; t < e.length; t += 4) {
            if (e[t] > 0 && e[t] < 255) {
              r = true;
              break;
            }
          }
          return i.shadow(this, "isFontSubpixelAAEnabled", r);
        }
        showText(t) {
          let e;
          let r = this.current;
          let s = r.font;
          if (s.isType3Font) {
            return this.showType3Text(t);
          }
          let a = r.fontSize;
          if (a === 0) {
            return;
          }
          let l = this.ctx;
          let h = r.fontSizeScale;
          let c = r.charSpacing;
          let u = r.wordSpacing;
          let d = r.fontDirection;
          let f = r.textHScale * d;
          let p = t.length;
          let g = s.vertical;
          let m = g ? 1 : -1;
          let v = s.defaultVMetrics;
          let y = a * r.fontMatrix[0];
          let b = r.textRenderingMode === i.TextRenderingMode.FILL && !s.disableFontFace && !r.patternFill;
          l.save();
          l.transform(...r.textMatrix);
          l.translate(r.x, r.y + r.textRise);
          if (d > 0) {
            l.scale(f, -1);
          } else {
            l.scale(f, 1);
          }
          if (r.patternFill) {
            l.save();
            let t = r.fillColor.getPattern(l, this, n.getCurrentTransformInverse(l), o.PathType.FILL);
            e = n.getCurrentTransform(l);
            l.restore();
            l.fillStyle = t;
          }
          let A = r.lineWidth;
          let S = r.textMatrixScale;
          if (S === 0 || A === 0) {
            let t = r.textRenderingMode & i.TextRenderingMode.FILL_STROKE_MASK;
            if (t === i.TextRenderingMode.STROKE || t === i.TextRenderingMode.FILL_STROKE) {
              A = this.getSinglePixelWidth();
            }
          } else {
            A /= S;
          }
          if (h !== 1) {
            l.scale(h, h);
            A /= h;
          }
          l.lineWidth = A;
          if (s.isInvalidPDFjsFont) {
            let e = [];
            let i = 0;
            for (let r of t) {
              e.push(r.unicode);
              i += r.width;
            }
            l.fillText(e.join(""), 0, 0);
            r.x += i * y * f;
            l.restore();
            this.compose();
            return;
          }
          let x = 0;
          let w;
          for (w = 0; w < p; ++w) {
            let r;
            let i;
            let n = t[w];
            if (typeof n == "number") {
              x += m * n * a / 1000;
              continue;
            }
            let o = false;
            let f = (n.isSpace ? u : 0) + c;
            let p = n.fontChar;
            let A = n.accent;
            let S = n.width;
            if (g) {
              let t = n.vmetric || v;
              let e = -(n.vmetric ? t[1] : S * 0.5) * y;
              let o = t[2] * y;
              S = t ? -t[0] : S;
              r = e / h;
              i = (x + o) / h;
            } else {
              r = x / h;
              i = 0;
            }
            if (s.remeasure && S > 0) {
              let t = l.measureText(p).width * 1000 / a * h;
              if (S < t && this.isFontSubpixelAAEnabled) {
                let e = S / t;
                o = true;
                l.save();
                l.scale(e, 1);
                r /= e;
              } else if (S !== t) {
                r += (S - t) / 2000 * a / h;
              }
            }
            if (this.contentVisible && (n.isInFont || s.missingFile)) {
              if (b && !A) {
                l.fillText(p, r, i);
              } else {
                this.paintChar(p, r, i, e);
                if (A) {
                  let t = r + a * A.offset.x / h;
                  let n = i - a * A.offset.y / h;
                  this.paintChar(A.fontChar, t, n, e);
                }
              }
            }
            x += g ? S * y - f * d : S * y + f * d;
            if (o) {
              l.restore();
            }
          }
          if (g) {
            r.y -= x;
          } else {
            r.x += x * f;
          }
          l.restore();
          this.compose();
        }
        showType3Text(t) {
          let e;
          let r;
          let n;
          let o;
          let s = this.ctx;
          let a = this.current;
          let l = a.font;
          let h = a.fontSize;
          let c = a.fontDirection;
          let u = l.vertical ? 1 : -1;
          let d = a.charSpacing;
          let f = a.wordSpacing;
          let p = a.textHScale * c;
          let g = a.fontMatrix || i.FONT_IDENTITY_MATRIX;
          let m = t.length;
          if (a.textRenderingMode !== i.TextRenderingMode.INVISIBLE && h !== 0) {
            this._cachedScaleForStroking[0] = -1;
            this._cachedGetSinglePixelWidth = null;
            s.save();
            s.transform(...a.textMatrix);
            s.translate(a.x, a.y);
            s.scale(p, c);
            e = 0;
            for (; e < m; ++e) {
              if (typeof (r = t[e]) == "number") {
                o = u * r * h / 1000;
                this.ctx.translate(o, 0);
                a.x += o * p;
                continue;
              }
              let c = (r.isSpace ? f : 0) + d;
              let m = l.charProcOperatorList[r.operatorListId];
              if (!m) {
                i.warn(`Type3 character "${r.operatorListId}" is not available.`);
                continue;
              }
              if (this.contentVisible) {
                this.processingType3 = r;
                this.save();
                s.scale(h, h);
                s.transform(...g);
                this.executeOperatorList(m);
                this.restore();
              }
              n = i.Util.applyTransform([r.width, 0], g)[0] * h + c;
              s.translate(n, 0);
              a.x += n * p;
            }
            s.restore();
            this.processingType3 = null;
          }
        }
        setCharWidth(t, e) {}
        setCharWidthAndBounds(t, e, r, i, n, o) {
          this.ctx.rect(r, i, n - r, o - i);
          this.ctx.clip();
          this.endPath();
        }
        getColorN_Pattern(t) {
          let e;
          if (t[0] === "TilingPattern") {
            let r = t[1];
            let i = this.baseTransform || n.getCurrentTransform(this.ctx);
            let s = {
              createCanvasGraphics: t => new D(t, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: this.optionalContentConfig,
                markedContentStack: this.markedContentStack
              })
            };
            e = new o.TilingPattern(t, r, this.ctx, s, i);
          } else {
            e = this._getPattern(t[1], t[2]);
          }
          return e;
        }
        setStrokeColorN() {
          this.current.strokeColor = this.getColorN_Pattern(arguments);
        }
        setFillColorN() {
          this.current.fillColor = this.getColorN_Pattern(arguments);
          this.current.patternFill = true;
        }
        setStrokeRGBColor(t, e, r) {
          let n = i.Util.makeHexColor(t, e, r);
          this.ctx.strokeStyle = n;
          this.current.strokeColor = n;
        }
        setFillRGBColor(t, e, r) {
          let n = i.Util.makeHexColor(t, e, r);
          this.ctx.fillStyle = n;
          this.current.fillColor = n;
          this.current.patternFill = false;
        }
        _getPattern(t, e = null) {
          let r;
          if (this.cachedPatterns.has(t)) {
            r = this.cachedPatterns.get(t);
          } else {
            r = o.getShadingPattern(this.getObject(t));
            this.cachedPatterns.set(t, r);
          }
          if (e) {
            r.matrix = e;
          }
          return r;
        }
        shadingFill(t) {
          if (!this.contentVisible) {
            return;
          }
          let e = this.ctx;
          this.save();
          let r = this._getPattern(t);
          e.fillStyle = r.getPattern(e, this, n.getCurrentTransformInverse(e), o.PathType.SHADING);
          let s = n.getCurrentTransformInverse(e);
          if (s) {
            let {
              width: t,
              height: r
            } = e.canvas;
            let [n, o, a, l] = i.Util.getAxialAlignedBoundingBox([0, 0, t, r], s);
            this.ctx.fillRect(n, o, a - n, l - o);
          } else {
            this.ctx.fillRect(-10000000000, -10000000000, 20000000000, 20000000000);
          }
          this.compose(this.current.getClippedPathBoundingBox());
          this.restore();
        }
        beginInlineImage() {
          i.unreachable("Should not call beginInlineImage");
        }
        beginImageData() {
          i.unreachable("Should not call beginImageData");
        }
        paintFormXObjectBegin(t, e) {
          if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(t) && t.length === 6 && this.transform(...t), this.baseTransform = n.getCurrentTransform(this.ctx), e)) {
            let t = e[2] - e[0];
            let r = e[3] - e[1];
            this.ctx.rect(e[0], e[1], t, r);
            this.current.updateRectMinMax(n.getCurrentTransform(this.ctx), e);
            this.clip();
            this.endPath();
          }
        }
        paintFormXObjectEnd() {
          if (this.contentVisible) {
            this.restore();
            this.baseTransform = this.baseTransformStack.pop();
          }
        }
        beginGroup(t) {
          if (!this.contentVisible) {
            return;
          }
          this.save();
          if (this.inSMaskMode) {
            this.endSMaskMode();
            this.current.activeSMask = null;
          }
          let e = this.ctx;
          if (!t.isolated) {
            i.info("TODO: Support non-isolated groups.");
          }
          if (t.knockout) {
            i.warn("Knockout groups not supported.");
          }
          let r = n.getCurrentTransform(e);
          if (t.matrix) {
            e.transform(...t.matrix);
          }
          if (!t.bbox) {
            throw Error("Bounding box is required.");
          }
          let o = i.Util.getAxialAlignedBoundingBox(t.bbox, n.getCurrentTransform(e));
          let s = [0, 0, e.canvas.width, e.canvas.height];
          let a = Math.floor((o = i.Util.intersect(o, s) || [0, 0, 0, 0])[0]);
          let l = Math.floor(o[1]);
          let c = Math.max(Math.ceil(o[2]) - a, 1);
          let u = Math.max(Math.ceil(o[3]) - l, 1);
          let d = 1;
          let f = 1;
          if (c > h) {
            d = c / h;
            c = h;
          }
          if (u > h) {
            f = u / h;
            u = h;
          }
          this.current.startNewPathAndClipBox([0, 0, c, u]);
          let p = "groupAt" + this.groupLevel;
          if (t.smask) {
            p += "_smask_" + this.smaskCounter++ % 2;
          }
          let g = this.cachedCanvases.getCanvas(p, c, u);
          let m = g.context;
          m.scale(1 / d, 1 / f);
          m.translate(-a, -l);
          m.transform(...r);
          if (t.smask) {
            this.smaskStack.push({
              canvas: g.canvas,
              context: m,
              offsetX: a,
              offsetY: l,
              scaleX: d,
              scaleY: f,
              subtype: t.smask.subtype,
              backdrop: t.smask.backdrop,
              transferMap: t.smask.transferMap || null,
              startTransformInverse: null
            });
          } else {
            e.setTransform(1, 0, 0, 1, 0, 0);
            e.translate(a, l);
            e.scale(d, f);
            e.save();
          }
          S(e, m);
          this.ctx = m;
          this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
          this.groupStack.push(e);
          this.groupLevel++;
        }
        endGroup(t) {
          if (!this.contentVisible) {
            return;
          }
          this.groupLevel--;
          let e = this.ctx;
          let r = this.groupStack.pop();
          this.ctx = r;
          this.ctx.imageSmoothingEnabled = false;
          if (t.smask) {
            this.tempSMask = this.smaskStack.pop();
            this.restore();
          } else {
            this.ctx.restore();
            let t = n.getCurrentTransform(this.ctx);
            this.restore();
            this.ctx.save();
            this.ctx.setTransform(...t);
            let r = i.Util.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], t);
            this.ctx.drawImage(e.canvas, 0, 0);
            this.ctx.restore();
            this.compose(r);
          }
        }
        beginAnnotation(t, e, r, o, s) {
          this.#t7();
          x(this.ctx);
          this.ctx.save();
          this.save();
          if (this.baseTransform) {
            this.ctx.setTransform(...this.baseTransform);
          }
          if (Array.isArray(e) && e.length === 4) {
            let o = e[2] - e[0];
            let a = e[3] - e[1];
            if (s && this.annotationCanvasMap) {
              r = r.slice();
              r[4] -= e[0];
              r[5] -= e[1];
              (e = e.slice())[0] = e[1] = 0;
              e[2] = o;
              e[3] = a;
              let [s, l] = i.Util.singularValueDecompose2dScale(n.getCurrentTransform(this.ctx));
              let {
                viewportScale: h
              } = this;
              let c = Math.ceil(o * this.outputScaleX * h);
              let u = Math.ceil(a * this.outputScaleY * h);
              this.annotationCanvas = this.canvasFactory.create(c, u);
              let {
                canvas: d,
                context: f
              } = this.annotationCanvas;
              this.annotationCanvasMap.set(t, d);
              this.annotationCanvas.savedCtx = this.ctx;
              this.ctx = f;
              this.ctx.save();
              this.ctx.setTransform(s, 0, 0, -l, 0, a * l);
              x(this.ctx);
            } else {
              x(this.ctx);
              this.ctx.rect(e[0], e[1], o, a);
              this.ctx.clip();
              this.endPath();
            }
          }
          this.current = new y(this.ctx.canvas.width, this.ctx.canvas.height);
          this.transform(...r);
          this.transform(...o);
        }
        endAnnotation() {
          if (this.annotationCanvas) {
            this.ctx.restore();
            this.#et();
            this.ctx = this.annotationCanvas.savedCtx;
            delete this.annotationCanvas.savedCtx;
            delete this.annotationCanvas;
          }
        }
        paintImageMaskXObject(t) {
          if (!this.contentVisible) {
            return;
          }
          let e = t.count;
          (t = this.getObject(t.data, t)).count = e;
          let r = this.ctx;
          let i = this.processingType3;
          if (i && (i.compiled === undefined && (i.compiled = v(t)), i.compiled)) {
            i.compiled(r);
            return;
          }
          let n = this._createMaskCanvas(t);
          let o = n.canvas;
          r.save();
          r.setTransform(1, 0, 0, 1, 0, 0);
          r.drawImage(o, n.offsetX, n.offsetY);
          r.restore();
          this.compose();
        }
        paintImageMaskXObjectRepeat(t, e, r = 0, o = 0, s, a) {
          if (!this.contentVisible) {
            return;
          }
          t = this.getObject(t.data, t);
          let l = this.ctx;
          l.save();
          let h = n.getCurrentTransform(l);
          l.transform(e, r, o, s, 0, 0);
          let c = this._createMaskCanvas(t);
          l.setTransform(1, 0, 0, 1, c.offsetX - h[4], c.offsetY - h[5]);
          for (let t = 0, n = a.length; t < n; t += 2) {
            let n = i.Util.transform(h, [e, r, o, s, a[t], a[t + 1]]);
            let [u, d] = i.Util.applyTransform([0, 0], n);
            l.drawImage(c.canvas, u, d);
          }
          l.restore();
          this.compose();
        }
        paintImageMaskXObjectGroup(t) {
          if (!this.contentVisible) {
            return;
          }
          let e = this.ctx;
          let r = this.current.fillColor;
          let i = this.current.patternFill;
          for (let s of t) {
            let {
              data: t,
              width: a,
              height: l,
              transform: h
            } = s;
            let c = this.cachedCanvases.getCanvas("maskCanvas", a, l);
            let u = c.context;
            u.save();
            A(u, this.getObject(t, s));
            u.globalCompositeOperation = "source-in";
            u.fillStyle = i ? r.getPattern(u, this, n.getCurrentTransformInverse(e), o.PathType.FILL) : r;
            u.fillRect(0, 0, a, l);
            u.restore();
            e.save();
            e.transform(...h);
            e.scale(1, -1);
            m(e, c.canvas, 0, 0, a, l, 0, -1, 1, 1);
            e.restore();
          }
          this.compose();
        }
        paintImageXObject(t) {
          if (!this.contentVisible) {
            return;
          }
          let e = this.getObject(t);
          if (!e) {
            i.warn("Dependent image isn't ready yet");
            return;
          }
          this.paintInlineImageXObject(e);
        }
        paintImageXObjectRepeat(t, e, r, n) {
          if (!this.contentVisible) {
            return;
          }
          let o = this.getObject(t);
          if (!o) {
            i.warn("Dependent image isn't ready yet");
            return;
          }
          let s = o.width;
          let a = o.height;
          let l = [];
          for (let t = 0, i = n.length; t < i; t += 2) {
            l.push({
              transform: [e, 0, 0, r, n[t], n[t + 1]],
              x: 0,
              y: 0,
              w: s,
              h: a
            });
          }
          this.paintInlineImageXObjectGroup(o, l);
        }
        applyTransferMapsToCanvas(t) {
          if (this.current.transferMaps !== "none") {
            t.filter = this.current.transferMaps;
            t.drawImage(t.canvas, 0, 0);
            t.filter = "none";
          }
          return t.canvas;
        }
        applyTransferMapsToBitmap(t) {
          if (this.current.transferMaps === "none") {
            return t.bitmap;
          }
          let {
            bitmap: e,
            width: r,
            height: i
          } = t;
          let n = this.cachedCanvases.getCanvas("inlineImage", r, i);
          let o = n.context;
          o.filter = this.current.transferMaps;
          o.drawImage(e, 0, 0);
          o.filter = "none";
          return n.canvas;
        }
        paintInlineImageXObject(t) {
          let e;
          if (!this.contentVisible) {
            return;
          }
          let r = t.width;
          let o = t.height;
          let s = this.ctx;
          this.save();
          if (!i.isNodeJS) {
            let {
              filter: t
            } = s;
            if (t !== "none" && t !== "") {
              s.filter = "none";
            }
          }
          s.scale(1 / r, -1 / o);
          if (t.bitmap) {
            e = this.applyTransferMapsToBitmap(t);
          } else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data) {
            e = t;
          } else {
            let i = this.cachedCanvases.getCanvas("inlineImage", r, o).context;
            b(i, t);
            e = this.applyTransferMapsToCanvas(i);
          }
          let a = this._scaleImage(e, n.getCurrentTransformInverse(s));
          s.imageSmoothingEnabled = k(n.getCurrentTransform(s), t.interpolate);
          m(s, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -o, r, o);
          this.compose();
          this.restore();
        }
        paintInlineImageXObjectGroup(t, e) {
          let r;
          if (!this.contentVisible) {
            return;
          }
          let i = this.ctx;
          if (t.bitmap) {
            r = t.bitmap;
          } else {
            let e = t.width;
            let i = t.height;
            let n = this.cachedCanvases.getCanvas("inlineImage", e, i).context;
            b(n, t);
            r = this.applyTransferMapsToCanvas(n);
          }
          for (let t of e) {
            i.save();
            i.transform(...t.transform);
            i.scale(1, -1);
            m(i, r, t.x, t.y, t.w, t.h, 0, -1, 1, 1);
            i.restore();
          }
          this.compose();
        }
        paintSolidColorImageMask() {
          if (this.contentVisible) {
            this.ctx.fillRect(0, 0, 1, 1);
            this.compose();
          }
        }
        markPoint(t) {}
        markPointProps(t, e) {}
        beginMarkedContent(t) {
          this.markedContentStack.push({
            visible: true
          });
        }
        beginMarkedContentProps(t, e) {
          if (t === "OC") {
            this.markedContentStack.push({
              visible: this.optionalContentConfig.isVisible(e)
            });
          } else {
            this.markedContentStack.push({
              visible: true
            });
          }
          this.contentVisible = this.isContentVisible();
        }
        endMarkedContent() {
          this.markedContentStack.pop();
          this.contentVisible = this.isContentVisible();
        }
        beginCompat() {}
        endCompat() {}
        consumePath(t) {
          let e = this.current.isEmptyClip();
          if (this.pendingClip) {
            this.current.updateClipFromPath();
          }
          if (!this.pendingClip) {
            this.compose(t);
          }
          let r = this.ctx;
          if (this.pendingClip) {
            if (!e) {
              if (this.pendingClip === O) {
                r.clip("evenodd");
              } else {
                r.clip();
              }
            }
            this.pendingClip = null;
          }
          this.current.startNewPathAndClipBox(this.current.clipBox);
          r.beginPath();
        }
        getSinglePixelWidth() {
          if (!this._cachedGetSinglePixelWidth) {
            let t = n.getCurrentTransform(this.ctx);
            if (t[1] === 0 && t[2] === 0) {
              this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
            } else {
              let e = Math.abs(t[0] * t[3] - t[2] * t[1]);
              let r = Math.hypot(t[0], t[2]);
              let i = Math.hypot(t[1], t[3]);
              this._cachedGetSinglePixelWidth = Math.max(r, i) / e;
            }
          }
          return this._cachedGetSinglePixelWidth;
        }
        getScaleForStroking() {
          if (this._cachedScaleForStroking[0] === -1) {
            let t;
            let e;
            let {
              lineWidth: r
            } = this.current;
            let {
              a: i,
              b: n,
              c: o,
              d: s
            } = this.ctx.getTransform();
            if (n === 0 && o === 0) {
              let n = Math.abs(i);
              let o = Math.abs(s);
              if (n === o) {
                if (r === 0) {
                  t = e = 1 / n;
                } else {
                  let i = n * r;
                  t = e = i < 1 ? 1 / i : 1;
                }
              } else if (r === 0) {
                t = 1 / n;
                e = 1 / o;
              } else {
                let i = n * r;
                let s = o * r;
                t = i < 1 ? 1 / i : 1;
                e = s < 1 ? 1 / s : 1;
              }
            } else {
              let a = Math.abs(i * s - n * o);
              let l = Math.hypot(i, n);
              let h = Math.hypot(o, s);
              if (r === 0) {
                t = h / a;
                e = l / a;
              } else {
                let i = r * a;
                t = h > i ? h / i : 1;
                e = l > i ? l / i : 1;
              }
            }
            this._cachedScaleForStroking[0] = t;
            this._cachedScaleForStroking[1] = e;
          }
          return this._cachedScaleForStroking;
        }
        rescaleAndStroke(t) {
          let {
            ctx: e
          } = this;
          let {
            lineWidth: r
          } = this.current;
          let [i, n] = this.getScaleForStroking();
          e.lineWidth = r || 1;
          if (i === 1 && n === 1) {
            e.stroke();
            return;
          }
          let o = e.getLineDash();
          if (t) {
            e.save();
          }
          e.scale(i, n);
          if (o.length > 0) {
            let t = Math.max(i, n);
            e.setLineDash(o.map(e => e / t));
            e.lineDashOffset /= t;
          }
          e.stroke();
          if (t) {
            e.restore();
          }
        }
        isContentVisible() {
          for (let t = this.markedContentStack.length - 1; t >= 0; t--) {
            if (!this.markedContentStack[t].visible) {
              return false;
            }
          }
          return true;
        }
      }
      e.CanvasGraphics = D;
      for (let t in i.OPS) {
        if (D.prototype[t] !== undefined) {
          D.prototype[i.OPS[t]] = D.prototype[t];
        }
      }
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.TilingPattern = e.PathType = undefined;
      e.getShadingPattern = f;
      var i = r(1);
      var n = r(6);
      let o = {
        FILL: "Fill",
        STROKE: "Stroke",
        SHADING: "Shading"
      };
      function s(t, e) {
        if (!e) {
          return;
        }
        let r = e[2] - e[0];
        let i = e[3] - e[1];
        let n = new Path2D();
        n.rect(e[0], e[1], r, i);
        t.clip(n);
      }
      e.PathType = o;
      class a {
        constructor() {
          if (this.constructor === a) {
            i.unreachable("Cannot initialize BaseShadingPattern.");
          }
        }
        getPattern() {
          i.unreachable("Abstract method `getPattern` called.");
        }
      }
      class l extends a {
        constructor(t) {
          super();
          this._type = t[1];
          this._bbox = t[2];
          this._colorStops = t[3];
          this._p0 = t[4];
          this._p1 = t[5];
          this._r0 = t[6];
          this._r1 = t[7];
          this.matrix = null;
        }
        _createGradient(t) {
          let e;
          if (this._type === "axial") {
            e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
          } else if (this._type === "radial") {
            e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
          }
          for (let r of this._colorStops) {
            e.addColorStop(r[0], r[1]);
          }
          return e;
        }
        getPattern(t, e, r, a) {
          let l;
          if (a === o.STROKE || a === o.FILL) {
            let o = e.current.getClippedPathBoundingBox(a, n.getCurrentTransform(t)) || [0, 0, 0, 0];
            let h = Math.ceil(o[2] - o[0]) || 1;
            let c = Math.ceil(o[3] - o[1]) || 1;
            let u = e.cachedCanvases.getCanvas("pattern", h, c, true);
            let d = u.context;
            d.clearRect(0, 0, d.canvas.width, d.canvas.height);
            d.beginPath();
            d.rect(0, 0, d.canvas.width, d.canvas.height);
            d.translate(-o[0], -o[1]);
            r = i.Util.transform(r, [1, 0, 0, 1, o[0], o[1]]);
            d.transform(...e.baseTransform);
            if (this.matrix) {
              d.transform(...this.matrix);
            }
            s(d, this._bbox);
            d.fillStyle = this._createGradient(d);
            d.fill();
            l = t.createPattern(u.canvas, "no-repeat");
            let f = new DOMMatrix(r);
            l.setTransform(f);
          } else {
            s(t, this._bbox);
            l = this._createGradient(t);
          }
          return l;
        }
      }
      function h(t, e, r, i, n, o, s, a) {
        let l;
        let h;
        let c;
        let u;
        let d;
        let f;
        let p;
        let g;
        let m;
        let v = e.coords;
        let y = e.colors;
        let b = t.data;
        let A = t.width * 4;
        if (v[r + 1] > v[i + 1]) {
          l = r;
          r = i;
          i = l;
          l = o;
          o = s;
          s = l;
        }
        if (v[i + 1] > v[n + 1]) {
          l = i;
          i = n;
          n = l;
          l = s;
          s = a;
          a = l;
        }
        if (v[r + 1] > v[i + 1]) {
          l = r;
          r = i;
          i = l;
          l = o;
          o = s;
          s = l;
        }
        let S = (v[r] + e.offsetX) * e.scaleX;
        let x = (v[r + 1] + e.offsetY) * e.scaleY;
        let w = (v[i] + e.offsetX) * e.scaleX;
        let C = (v[i + 1] + e.offsetY) * e.scaleY;
        let T = (v[n] + e.offsetX) * e.scaleX;
        let E = (v[n + 1] + e.offsetY) * e.scaleY;
        if (x >= E) {
          return;
        }
        let F = y[o];
        let k = y[o + 1];
        let P = y[o + 2];
        let R = y[s];
        let M = y[s + 1];
        let O = y[s + 2];
        let D = y[a];
        let I = y[a + 1];
        let L = y[a + 2];
        let N = Math.round(x);
        let B = Math.round(E);
        for (let t = N; t <= B; t++) {
          let e;
          if (t < C) {
            let e = t < x ? 0 : (x - t) / (x - C);
            h = S - (S - w) * e;
            c = F - (F - R) * e;
            u = k - (k - M) * e;
            d = P - (P - O) * e;
          } else {
            let e;
            h = w - (w - T) * (e = t > E ? 1 : C === E ? 0 : (C - t) / (C - E));
            c = R - (R - D) * e;
            u = M - (M - I) * e;
            d = O - (O - L) * e;
          }
          f = S - (S - T) * (e = t < x ? 0 : t > E ? 1 : (x - t) / (x - E));
          p = F - (F - D) * e;
          g = k - (k - I) * e;
          m = P - (P - L) * e;
          let r = Math.round(Math.min(h, f));
          let i = Math.round(Math.max(h, f));
          let n = A * t + r * 4;
          for (let t = r; t <= i; t++) {
            if ((e = (h - t) / (h - f)) < 0) {
              e = 0;
            } else if (e > 1) {
              e = 1;
            }
            b[n++] = c - (c - p) * e | 0;
            b[n++] = u - (u - g) * e | 0;
            b[n++] = d - (d - m) * e | 0;
            b[n++] = 255;
          }
        }
      }
      function c(t, e, r) {
        let i;
        let n;
        let o = e.coords;
        let s = e.colors;
        switch (e.type) {
          case "lattice":
            let a = e.verticesPerRow;
            let l = Math.floor(o.length / a) - 1;
            let c = a - 1;
            for (i = 0; i < l; i++) {
              let e = i * a;
              for (let i = 0; i < c; i++, e++) {
                h(t, r, o[e], o[e + 1], o[e + a], s[e], s[e + 1], s[e + a]);
                h(t, r, o[e + a + 1], o[e + 1], o[e + a], s[e + a + 1], s[e + 1], s[e + a]);
              }
            }
            break;
          case "triangles":
            i = 0;
            n = o.length;
            for (; i < n; i += 3) {
              h(t, r, o[i], o[i + 1], o[i + 2], s[i], s[i + 1], s[i + 2]);
            }
            break;
          default:
            throw Error("illegal figure");
        }
      }
      class u extends a {
        constructor(t) {
          super();
          this._coords = t[2];
          this._colors = t[3];
          this._figures = t[4];
          this._bounds = t[5];
          this._bbox = t[7];
          this._background = t[8];
          this.matrix = null;
        }
        _createMeshCanvas(t, e, r) {
          let i = 1.1;
          let n = 3000;
          let o = 2;
          let s = Math.floor(this._bounds[0]);
          let a = Math.floor(this._bounds[1]);
          let l = Math.ceil(this._bounds[2]) - s;
          let h = Math.ceil(this._bounds[3]) - a;
          let u = Math.min(Math.ceil(Math.abs(l * t[0] * i)), n);
          let d = Math.min(Math.ceil(Math.abs(h * t[1] * i)), n);
          let f = l / u;
          let p = h / d;
          let g = {
            coords: this._coords,
            colors: this._colors,
            offsetX: -s,
            offsetY: -a,
            scaleX: 1 / f,
            scaleY: 1 / p
          };
          let m = u + o * 2;
          let v = d + o * 2;
          let y = r.getCanvas("mesh", m, v, false);
          let b = y.context;
          let A = b.createImageData(u, d);
          if (e) {
            let t = A.data;
            for (let r = 0, i = t.length; r < i; r += 4) {
              t[r] = e[0];
              t[r + 1] = e[1];
              t[r + 2] = e[2];
              t[r + 3] = 255;
            }
          }
          for (let t of this._figures) {
            c(A, t, g);
          }
          b.putImageData(A, o, o);
          return {
            canvas: y.canvas,
            offsetX: s - o * f,
            offsetY: a - o * p,
            scaleX: f,
            scaleY: p
          };
        }
        getPattern(t, e, r, a) {
          let l;
          s(t, this._bbox);
          if (a === o.SHADING) {
            l = i.Util.singularValueDecompose2dScale(n.getCurrentTransform(t));
          } else {
            l = i.Util.singularValueDecompose2dScale(e.baseTransform);
            if (this.matrix) {
              let t = i.Util.singularValueDecompose2dScale(this.matrix);
              l = [l[0] * t[0], l[1] * t[1]];
            }
          }
          let h = this._createMeshCanvas(l, a === o.SHADING ? null : this._background, e.cachedCanvases);
          if (a !== o.SHADING) {
            t.setTransform(...e.baseTransform);
            if (this.matrix) {
              t.transform(...this.matrix);
            }
          }
          t.translate(h.offsetX, h.offsetY);
          t.scale(h.scaleX, h.scaleY);
          return t.createPattern(h.canvas, "no-repeat");
        }
      }
      class d extends a {
        getPattern() {
          return "hotpink";
        }
      }
      function f(t) {
        switch (t[0]) {
          case "RadialAxial":
            return new l(t);
          case "Mesh":
            return new u(t);
          case "Dummy":
            return new d();
        }
        throw Error(`Unknown IR type: ${t[0]}`);
      }
      let p = {
        COLORED: 1,
        UNCOLORED: 2
      };
      class g {
        static MAX_PATTERN_SIZE = 3000;
        constructor(t, e, r, i, n) {
          this.operatorList = t[2];
          this.matrix = t[3] || [1, 0, 0, 1, 0, 0];
          this.bbox = t[4];
          this.xstep = t[5];
          this.ystep = t[6];
          this.paintType = t[7];
          this.tilingType = t[8];
          this.color = e;
          this.ctx = r;
          this.canvasGraphicsFactory = i;
          this.baseTransform = n;
        }
        createPatternCanvas(t) {
          let e = this.operatorList;
          let r = this.bbox;
          let o = this.xstep;
          let s = this.ystep;
          let a = this.paintType;
          let l = this.tilingType;
          let h = this.color;
          let c = this.canvasGraphicsFactory;
          i.info("TilingType: " + l);
          let u = r[0];
          let d = r[1];
          let f = r[2];
          let p = r[3];
          let g = i.Util.singularValueDecompose2dScale(this.matrix);
          let m = i.Util.singularValueDecompose2dScale(this.baseTransform);
          let v = [g[0] * m[0], g[1] * m[1]];
          let y = this.getSizeAndScale(o, this.ctx.canvas.width, v[0]);
          let b = this.getSizeAndScale(s, this.ctx.canvas.height, v[1]);
          let A = t.cachedCanvases.getCanvas("pattern", y.size, b.size, true);
          let S = A.context;
          let x = c.createCanvasGraphics(S);
          x.groupLevel = t.groupLevel;
          this.setFillAndStrokeStyleToContext(x, a, h);
          let w = u;
          let C = d;
          let T = f;
          let E = p;
          if (u < 0) {
            w = 0;
            T += Math.abs(u);
          }
          if (d < 0) {
            C = 0;
            E += Math.abs(d);
          }
          S.translate(-(y.scale * w), -(b.scale * C));
          x.transform(y.scale, 0, 0, b.scale, 0, 0);
          S.save();
          this.clipBbox(x, w, C, T, E);
          x.baseTransform = n.getCurrentTransform(x.ctx);
          x.executeOperatorList(e);
          x.endDrawing();
          return {
            canvas: A.canvas,
            scaleX: y.scale,
            scaleY: b.scale,
            offsetX: w,
            offsetY: C
          };
        }
        getSizeAndScale(t, e, r) {
          t = Math.abs(t);
          let i = Math.max(g.MAX_PATTERN_SIZE, e);
          let n = Math.ceil(t * r);
          if (n >= i) {
            n = i;
          } else {
            r = n / t;
          }
          return {
            scale: r,
            size: n
          };
        }
        clipBbox(t, e, r, i, o) {
          let s = i - e;
          let a = o - r;
          t.ctx.rect(e, r, s, a);
          t.current.updateRectMinMax(n.getCurrentTransform(t.ctx), [e, r, i, o]);
          t.clip();
          t.endPath();
        }
        setFillAndStrokeStyleToContext(t, e, r) {
          let n = t.ctx;
          let o = t.current;
          switch (e) {
            case p.COLORED:
              let s = this.ctx;
              n.fillStyle = s.fillStyle;
              n.strokeStyle = s.strokeStyle;
              o.fillColor = s.fillStyle;
              o.strokeColor = s.strokeStyle;
              break;
            case p.UNCOLORED:
              let a = i.Util.makeHexColor(r[0], r[1], r[2]);
              n.fillStyle = a;
              n.strokeStyle = a;
              o.fillColor = a;
              o.strokeColor = a;
              break;
            default:
              throw new i.FormatError(`Unsupported paint type: ${e}`);
          }
        }
        getPattern(t, e, r, n) {
          let s = r;
          if (n !== o.SHADING) {
            s = i.Util.transform(s, e.baseTransform);
            if (this.matrix) {
              s = i.Util.transform(s, this.matrix);
            }
          }
          let a = this.createPatternCanvas(e);
          let l = new DOMMatrix(s);
          l = (l = l.translate(a.offsetX, a.offsetY)).scale(1 / a.scaleX, 1 / a.scaleY);
          let h = t.createPattern(a.canvas, "repeat");
          h.setTransform(l);
          return h;
        }
      }
      e.TilingPattern = g;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.convertBlackAndWhiteToRGBA = o;
      e.convertToRGBA = n;
      e.grayToRGBA = a;
      var i = r(1);
      function n(t) {
        switch (t.kind) {
          case i.ImageKind.GRAYSCALE_1BPP:
            return o(t);
          case i.ImageKind.RGB_24BPP:
            return s(t);
        }
        return null;
      }
      function o({
        src: t,
        srcPos: e = 0,
        dest: r,
        width: n,
        height: o,
        nonBlackColor: s = 4294967295,
        inverseDecode: a = false
      }) {
        let l = i.FeatureTest.isLittleEndian ? 4278190080 : 255;
        let [h, c] = a ? [s, l] : [l, s];
        let u = n >> 3;
        let d = n & 7;
        let f = t.length;
        r = new Uint32Array(r.buffer);
        let p = 0;
        for (let i = 0; i < o; i++) {
          for (let i = e + u; e < i; e++) {
            let i = e < f ? t[e] : 255;
            r[p++] = i & 128 ? c : h;
            r[p++] = i & 64 ? c : h;
            r[p++] = i & 32 ? c : h;
            r[p++] = i & 16 ? c : h;
            r[p++] = i & 8 ? c : h;
            r[p++] = i & 4 ? c : h;
            r[p++] = i & 2 ? c : h;
            r[p++] = i & 1 ? c : h;
          }
          if (d === 0) {
            continue;
          }
          let i = e < f ? t[e++] : 255;
          for (let t = 0; t < d; t++) {
            r[p++] = i & 1 << 7 - t ? c : h;
          }
        }
        return {
          srcPos: e,
          destPos: p
        };
      }
      function s({
        src: t,
        srcPos: e = 0,
        dest: r,
        destPos: n = 0,
        width: o,
        height: s
      }) {
        let a = 0;
        let l = t.length >> 2;
        let h = new Uint32Array(t.buffer, e, l);
        if (i.FeatureTest.isLittleEndian) {
          for (; a < l - 2; a += 3, n += 4) {
            let t = h[a];
            let e = h[a + 1];
            let i = h[a + 2];
            r[n] = t | -16777216;
            r[n + 1] = t >>> 24 | e << 8 | -16777216;
            r[n + 2] = e >>> 16 | i << 16 | -16777216;
            r[n + 3] = i >>> 8 | -16777216;
          }
          for (let e = a * 4, i = t.length; e < i; e += 3) {
            r[n++] = t[e] | t[e + 1] << 8 | t[e + 2] << 16 | -16777216;
          }
        } else {
          for (; a < l - 2; a += 3, n += 4) {
            let t = h[a];
            let e = h[a + 1];
            let i = h[a + 2];
            r[n] = t | 255;
            r[n + 1] = t << 24 | e >>> 8 | 255;
            r[n + 2] = e << 16 | i >>> 16 | 255;
            r[n + 3] = i << 8 | 255;
          }
          for (let e = a * 4, i = t.length; e < i; e += 3) {
            r[n++] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | 255;
          }
        }
        return {
          srcPos: e,
          destPos: n
        };
      }
      function a(t, e) {
        if (i.FeatureTest.isLittleEndian) {
          for (let r = 0, i = t.length; r < i; r++) {
            e[r] = t[r] * 65793 | -16777216;
          }
        } else {
          for (let r = 0, i = t.length; r < i; r++) {
            e[r] = t[r] * 16843008 | 255;
          }
        }
      }
    }, (t, e) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.GlobalWorkerOptions = undefined;
      let r = Object.create(null);
      e.GlobalWorkerOptions = r;
      r.workerPort = null;
      r.workerSrc = "";
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.MessageHandler = undefined;
      var i = r(1);
      let n = {
        DATA: 1,
        ERROR: 2
      };
      let o = {
        CANCEL: 1,
        CANCEL_COMPLETE: 2,
        CLOSE: 3,
        ENQUEUE: 4,
        ERROR: 5,
        PULL: 6,
        PULL_COMPLETE: 7,
        START_COMPLETE: 8
      };
      function s(t) {
        if (!(t instanceof Error) && (typeof t != "object" || t === null)) {
          i.unreachable("wrapReason: Expected \"reason\" to be a (possibly cloned) Error.");
        }
        switch (t.name) {
          case "AbortException":
            return new i.AbortException(t.message);
          case "MissingPDFException":
            return new i.MissingPDFException(t.message);
          case "PasswordException":
            return new i.PasswordException(t.message, t.code);
          case "UnexpectedResponseException":
            return new i.UnexpectedResponseException(t.message, t.status);
          case "UnknownErrorException":
            return new i.UnknownErrorException(t.message, t.details);
          default:
            return new i.UnknownErrorException(t.message, t.toString());
        }
      }
      class a {
        constructor(t, e, r) {
          this.sourceName = t;
          this.targetName = e;
          this.comObj = r;
          this.callbackId = 1;
          this.streamId = 1;
          this.streamSinks = Object.create(null);
          this.streamControllers = Object.create(null);
          this.callbackCapabilities = Object.create(null);
          this.actionHandler = Object.create(null);
          this._onComObjOnMessage = t => {
            let e = t.data;
            if (e.targetName !== this.sourceName) {
              return;
            }
            if (e.stream) {
              this.#ee(e);
              return;
            }
            if (e.callback) {
              let t = e.callbackId;
              let r = this.callbackCapabilities[t];
              if (!r) {
                throw Error(`Cannot resolve callback ${t}`);
              }
              delete this.callbackCapabilities[t];
              if (e.callback === n.DATA) {
                r.resolve(e.data);
              } else if (e.callback === n.ERROR) {
                r.reject(s(e.reason));
              } else {
                throw Error("Unexpected callback case");
              }
              return;
            }
            let i = this.actionHandler[e.action];
            if (!i) {
              throw Error(`Unknown action from worker: ${e.action}`);
            }
            if (e.callbackId) {
              let t = this.sourceName;
              let o = e.sourceName;
              new Promise(function (t) {
                t(i(e.data));
              }).then(function (i) {
                r.postMessage({
                  sourceName: t,
                  targetName: o,
                  callback: n.DATA,
                  callbackId: e.callbackId,
                  data: i
                });
              }, function (i) {
                r.postMessage({
                  sourceName: t,
                  targetName: o,
                  callback: n.ERROR,
                  callbackId: e.callbackId,
                  reason: s(i)
                });
              });
              return;
            }
            if (e.streamId) {
              this.#er(e);
              return;
            }
            i(e.data);
          };
          r.addEventListener("message", this._onComObjOnMessage);
        }
        on(t, e) {
          let r = this.actionHandler;
          if (r[t]) {
            throw Error(`There is already an actionName called "${t}"`);
          }
          r[t] = e;
        }
        send(t, e, r) {
          this.comObj.postMessage({
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: t,
            data: e
          }, r);
        }
        sendWithPromise(t, e, r) {
          let n = this.callbackId++;
          let o = new i.PromiseCapability();
          this.callbackCapabilities[n] = o;
          try {
            this.comObj.postMessage({
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: t,
              callbackId: n,
              data: e
            }, r);
          } catch (t) {
            o.reject(t);
          }
          return o.promise;
        }
        sendWithStream(t, e, r, n) {
          let a = this.streamId++;
          let l = this.sourceName;
          let h = this.targetName;
          let c = this.comObj;
          return new ReadableStream({
            start: r => {
              let o = new i.PromiseCapability();
              this.streamControllers[a] = {
                controller: r,
                startCall: o,
                pullCall: null,
                cancelCall: null,
                isClosed: false
              };
              c.postMessage({
                sourceName: l,
                targetName: h,
                action: t,
                streamId: a,
                data: e,
                desiredSize: r.desiredSize
              }, n);
              return o.promise;
            },
            pull: t => {
              let e = new i.PromiseCapability();
              this.streamControllers[a].pullCall = e;
              c.postMessage({
                sourceName: l,
                targetName: h,
                stream: o.PULL,
                streamId: a,
                desiredSize: t.desiredSize
              });
              return e.promise;
            },
            cancel: t => {
              i.assert(t instanceof Error, "cancel must have a valid reason");
              let e = new i.PromiseCapability();
              this.streamControllers[a].cancelCall = e;
              this.streamControllers[a].isClosed = true;
              c.postMessage({
                sourceName: l,
                targetName: h,
                stream: o.CANCEL,
                streamId: a,
                reason: s(t)
              });
              return e.promise;
            }
          }, r);
        }
        #er(t) {
          let e = t.streamId;
          let r = this.sourceName;
          let n = t.sourceName;
          let a = this.comObj;
          let l = this;
          let h = this.actionHandler[t.action];
          let c = {
            enqueue(t, s = 1, l) {
              if (this.isCancelled) {
                return;
              }
              let h = this.desiredSize;
              this.desiredSize -= s;
              if (h > 0 && this.desiredSize <= 0) {
                this.sinkCapability = new i.PromiseCapability();
                this.ready = this.sinkCapability.promise;
              }
              a.postMessage({
                sourceName: r,
                targetName: n,
                stream: o.ENQUEUE,
                streamId: e,
                chunk: t
              }, l);
            },
            close() {
              if (!this.isCancelled) {
                this.isCancelled = true;
                a.postMessage({
                  sourceName: r,
                  targetName: n,
                  stream: o.CLOSE,
                  streamId: e
                });
                delete l.streamSinks[e];
              }
            },
            error(t) {
              i.assert(t instanceof Error, "error must have a valid reason");
              if (!this.isCancelled) {
                this.isCancelled = true;
                a.postMessage({
                  sourceName: r,
                  targetName: n,
                  stream: o.ERROR,
                  streamId: e,
                  reason: s(t)
                });
              }
            },
            sinkCapability: new i.PromiseCapability(),
            onPull: null,
            onCancel: null,
            isCancelled: false,
            desiredSize: t.desiredSize,
            ready: null
          };
          c.sinkCapability.resolve();
          c.ready = c.sinkCapability.promise;
          this.streamSinks[e] = c;
          new Promise(function (e) {
            e(h(t.data, c));
          }).then(function () {
            a.postMessage({
              sourceName: r,
              targetName: n,
              stream: o.START_COMPLETE,
              streamId: e,
              success: true
            });
          }, function (t) {
            a.postMessage({
              sourceName: r,
              targetName: n,
              stream: o.START_COMPLETE,
              streamId: e,
              reason: s(t)
            });
          });
        }
        #ee(t) {
          let e = t.streamId;
          let r = this.sourceName;
          let n = t.sourceName;
          let a = this.comObj;
          let l = this.streamControllers[e];
          let h = this.streamSinks[e];
          switch (t.stream) {
            case o.START_COMPLETE:
              if (t.success) {
                l.startCall.resolve();
              } else {
                l.startCall.reject(s(t.reason));
              }
              break;
            case o.PULL_COMPLETE:
              if (t.success) {
                l.pullCall.resolve();
              } else {
                l.pullCall.reject(s(t.reason));
              }
              break;
            case o.PULL:
              if (!h) {
                a.postMessage({
                  sourceName: r,
                  targetName: n,
                  stream: o.PULL_COMPLETE,
                  streamId: e,
                  success: true
                });
                break;
              }
              if (h.desiredSize <= 0 && t.desiredSize > 0) {
                h.sinkCapability.resolve();
              }
              h.desiredSize = t.desiredSize;
              new Promise(function (t) {
                t(h.onPull?.());
              }).then(function () {
                a.postMessage({
                  sourceName: r,
                  targetName: n,
                  stream: o.PULL_COMPLETE,
                  streamId: e,
                  success: true
                });
              }, function (t) {
                a.postMessage({
                  sourceName: r,
                  targetName: n,
                  stream: o.PULL_COMPLETE,
                  streamId: e,
                  reason: s(t)
                });
              });
              break;
            case o.ENQUEUE:
              i.assert(l, "enqueue should have stream controller");
              if (l.isClosed) {
                break;
              }
              l.controller.enqueue(t.chunk);
              break;
            case o.CLOSE:
              i.assert(l, "close should have stream controller");
              if (l.isClosed) {
                break;
              }
              l.isClosed = true;
              l.controller.close();
              this.#ei(l, e);
              break;
            case o.ERROR:
              i.assert(l, "error should have stream controller");
              l.controller.error(s(t.reason));
              this.#ei(l, e);
              break;
            case o.CANCEL_COMPLETE:
              if (t.success) {
                l.cancelCall.resolve();
              } else {
                l.cancelCall.reject(s(t.reason));
              }
              this.#ei(l, e);
              break;
            case o.CANCEL:
              if (!h) {
                break;
              }
              new Promise(function (e) {
                e(h.onCancel?.(s(t.reason)));
              }).then(function () {
                a.postMessage({
                  sourceName: r,
                  targetName: n,
                  stream: o.CANCEL_COMPLETE,
                  streamId: e,
                  success: true
                });
              }, function (t) {
                a.postMessage({
                  sourceName: r,
                  targetName: n,
                  stream: o.CANCEL_COMPLETE,
                  streamId: e,
                  reason: s(t)
                });
              });
              h.sinkCapability.reject(s(t.reason));
              h.isCancelled = true;
              delete this.streamSinks[e];
              break;
            default:
              throw Error("Unexpected stream case");
          }
        }
        async #ei(t, e) {
          await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]);
          delete this.streamControllers[e];
        }
        destroy() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        }
      }
      e.MessageHandler = a;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.Metadata = undefined;
      var i = r(1);
      class n {
        #en;
        #eo;
        constructor({
          parsedData: t,
          rawData: e
        }) {
          this.#en = t;
          this.#eo = e;
        }
        getRaw() {
          return this.#eo;
        }
        get(t) {
          return this.#en.get(t) ?? null;
        }
        getAll() {
          return i.objectFromMap(this.#en);
        }
        has(t) {
          return this.#en.has(t);
        }
      }
      e.Metadata = n;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.OptionalContentConfig = undefined;
      var i = r(1);
      var n = r(8);
      let o = Symbol("INTERNAL");
      class s {
        #es = true;
        constructor(t, e) {
          this.name = t;
          this.intent = e;
        }
        get visible() {
          return this.#es;
        }
        _setVisible(t, e) {
          if (t !== o) {
            i.unreachable("Internal method `_setVisible` called.");
          }
          this.#es = e;
        }
      }
      class a {
        #ea = null;
        #el = new Map();
        #eh = null;
        #ec = null;
        constructor(t) {
          this.name = null;
          this.creator = null;
          if (t === null) {
            return;
          }
          this.name = t.name;
          this.creator = t.creator;
          this.#ec = t.order;
          for (let e of t.groups) {
            this.#el.set(e.id, new s(e.name, e.intent));
          }
          if (t.baseState === "OFF") {
            for (let t of this.#el.values()) {
              t._setVisible(o, false);
            }
          }
          for (let e of t.on) {
            this.#el.get(e)._setVisible(o, true);
          }
          for (let e of t.off) {
            this.#el.get(e)._setVisible(o, false);
          }
          this.#eh = this.getHash();
        }
        #eu(t) {
          let e = t.length;
          if (e < 2) {
            return true;
          }
          let r = t[0];
          for (let n = 1; n < e; n++) {
            let e;
            let o = t[n];
            if (Array.isArray(o)) {
              e = this.#eu(o);
            } else {
              if (!this.#el.has(o)) {
                i.warn(`Optional content group not found: ${o}`);
                return true;
              }
              e = this.#el.get(o).visible;
            }
            switch (r) {
              case "And":
                if (!e) {
                  return false;
                }
                break;
              case "Or":
                if (e) {
                  return true;
                }
                break;
              case "Not":
                return !e;
              default:
                return true;
            }
          }
          return r === "And";
        }
        isVisible(t) {
          if (this.#el.size === 0) {
            return true;
          }
          if (!t) {
            i.warn("Optional content group not defined.");
            return true;
          }
          if (t.type === "OCG") {
            if (this.#el.has(t.id)) {
              return this.#el.get(t.id).visible;
            } else {
              i.warn(`Optional content group not found: ${t.id}`);
              return true;
            }
          }
          if (t.type === "OCMD") {
            if (t.expression) {
              return this.#eu(t.expression);
            }
            if (t.policy && t.policy !== "AnyOn") {
              if (t.policy === "AllOn") {
                for (let e of t.ids) {
                  if (!this.#el.has(e)) {
                    i.warn(`Optional content group not found: ${e}`);
                    break;
                  }
                  if (!this.#el.get(e).visible) {
                    return false;
                  }
                }
                return true;
              }
              if (t.policy === "AnyOff") {
                for (let e of t.ids) {
                  if (!this.#el.has(e)) {
                    i.warn(`Optional content group not found: ${e}`);
                    return true;
                  }
                  if (!this.#el.get(e).visible) {
                    return true;
                  }
                }
                return false;
              } else if (t.policy === "AllOff") {
                for (let e of t.ids) {
                  if (!this.#el.has(e)) {
                    i.warn(`Optional content group not found: ${e}`);
                    break;
                  }
                  if (this.#el.get(e).visible) {
                    return false;
                  }
                }
                return true;
              }
            } else {
              for (let e of t.ids) {
                if (!this.#el.has(e)) {
                  i.warn(`Optional content group not found: ${e}`);
                  return true;
                }
                if (this.#el.get(e).visible) {
                  return true;
                }
              }
              return false;
            }
            i.warn(`Unknown optional content policy ${t.policy}.`);
            return true;
          }
          i.warn(`Unknown group type ${t.type}.`);
          return true;
        }
        setVisibility(t, e = true) {
          if (!this.#el.has(t)) {
            i.warn(`Optional content group not found: ${t}`);
            return;
          }
          this.#el.get(t)._setVisible(o, !!e);
          this.#ea = null;
        }
        get hasInitialVisibility() {
          return this.#eh === null || this.getHash() === this.#eh;
        }
        getOrder() {
          if (this.#el.size) {
            if (this.#ec) {
              return this.#ec.slice();
            } else {
              return [...this.#el.keys()];
            }
          } else {
            return null;
          }
        }
        getGroups() {
          if (this.#el.size > 0) {
            return i.objectFromMap(this.#el);
          } else {
            return null;
          }
        }
        getGroup(t) {
          return this.#el.get(t) || null;
        }
        getHash() {
          if (this.#ea !== null) {
            return this.#ea;
          }
          let t = new n.MurmurHash3_64();
          for (let [e, r] of this.#el) {
            t.update(`${e}:${r.visible}`);
          }
          return this.#ea = t.hexdigest();
        }
      }
      e.OptionalContentConfig = a;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.PDFDataTransportStream = undefined;
      var i = r(1);
      var n = r(6);
      class o {
        constructor({
          length: t,
          initialData: e,
          progressiveDone: r = false,
          contentDispositionFilename: n = null,
          disableRange: o = false,
          disableStream: s = false
        }, a) {
          i.assert(a, "PDFDataTransportStream - missing required \"pdfDataRangeTransport\" argument.");
          this._queuedChunks = [];
          this._progressiveDone = r;
          this._contentDispositionFilename = n;
          if (e?.length > 0) {
            let t = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
            this._queuedChunks.push(t);
          }
          this._pdfDataRangeTransport = a;
          this._isStreamingSupported = !s;
          this._isRangeSupported = !o;
          this._contentLength = t;
          this._fullRequestReader = null;
          this._rangeReaders = [];
          this._pdfDataRangeTransport.addRangeListener((t, e) => {
            this._onReceiveData({
              begin: t,
              chunk: e
            });
          });
          this._pdfDataRangeTransport.addProgressListener((t, e) => {
            this._onProgress({
              loaded: t,
              total: e
            });
          });
          this._pdfDataRangeTransport.addProgressiveReadListener(t => {
            this._onReceiveData({
              chunk: t
            });
          });
          this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
            this._onProgressiveDone();
          });
          this._pdfDataRangeTransport.transportReady();
        }
        _onReceiveData({
          begin: t,
          chunk: e
        }) {
          let r = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
          if (t === undefined) {
            if (this._fullRequestReader) {
              this._fullRequestReader._enqueue(r);
            } else {
              this._queuedChunks.push(r);
            }
          } else {
            let e = this._rangeReaders.some(function (e) {
              return e._begin === t && (e._enqueue(r), true);
            });
            i.assert(e, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
          }
        }
        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }
        _onProgress(t) {
          if (t.total === undefined) {
            this._rangeReaders[0]?.onProgress?.({
              loaded: t.loaded
            });
          } else {
            this._fullRequestReader?.onProgress?.({
              loaded: t.loaded,
              total: t.total
            });
          }
        }
        _onProgressiveDone() {
          this._fullRequestReader?.progressiveDone();
          this._progressiveDone = true;
        }
        _removeRangeReader(t) {
          let e = this._rangeReaders.indexOf(t);
          if (e >= 0) {
            this._rangeReaders.splice(e, 1);
          }
        }
        getFullReader() {
          i.assert(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
          let t = this._queuedChunks;
          this._queuedChunks = null;
          return new s(this, t, this._progressiveDone, this._contentDispositionFilename);
        }
        getRangeReader(t, e) {
          if (e <= this._progressiveDataLength) {
            return null;
          }
          let r = new a(this, t, e);
          this._pdfDataRangeTransport.requestDataRange(t, e);
          this._rangeReaders.push(r);
          return r;
        }
        cancelAllRequests(t) {
          this._fullRequestReader?.cancel(t);
          for (let e of this._rangeReaders.slice(0)) {
            e.cancel(t);
          }
          this._pdfDataRangeTransport.abort();
        }
      }
      e.PDFDataTransportStream = o;
      class s {
        constructor(t, e, r = false, i = null) {
          this._stream = t;
          this._done = r || false;
          this._filename = n.isPdfFile(i) ? i : null;
          this._queuedChunks = e || [];
          this._loaded = 0;
          for (let o of this._queuedChunks) {
            this._loaded += o.byteLength;
          }
          this._requests = [];
          this._headersReady = Promise.resolve();
          t._fullRequestReader = this;
          this.onProgress = null;
        }
        _enqueue(t) {
          if (!this._done) {
            if (this._requests.length > 0) {
              this._requests.shift().resolve({
                value: t,
                done: false
              });
            } else {
              this._queuedChunks.push(t);
            }
            this._loaded += t.byteLength;
          }
        }
        get headersReady() {
          return this._headersReady;
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._stream._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._stream._isStreamingSupported;
        }
        get contentLength() {
          return this._stream._contentLength;
        }
        async read() {
          if (this._queuedChunks.length > 0) {
            return {
              value: this._queuedChunks.shift(),
              done: false
            };
          }
          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }
          let t = new i.PromiseCapability();
          this._requests.push(t);
          return t.promise;
        }
        cancel(t) {
          this._done = true;
          for (let t of this._requests) {
            t.resolve({
              value: undefined,
              done: true
            });
          }
          this._requests.length = 0;
        }
        progressiveDone() {
          if (!this._done) {
            this._done = true;
          }
        }
      }
      class a {
        constructor(t, e, r) {
          this._stream = t;
          this._begin = e;
          this._end = r;
          this._queuedChunk = null;
          this._requests = [];
          this._done = false;
          this.onProgress = null;
        }
        _enqueue(t) {
          if (!this._done) {
            if (this._requests.length === 0) {
              this._queuedChunk = t;
            } else {
              this._requests.shift().resolve({
                value: t,
                done: false
              });
              for (let e of this._requests) {
                e.resolve({
                  value: undefined,
                  done: true
                });
              }
              this._requests.length = 0;
            }
            this._done = true;
            this._stream._removeRangeReader(this);
          }
        }
        get isStreamingSupported() {
          return false;
        }
        async read() {
          if (this._queuedChunk) {
            let t = this._queuedChunk;
            this._queuedChunk = null;
            return {
              value: t,
              done: false
            };
          }
          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }
          let t = new i.PromiseCapability();
          this._requests.push(t);
          return t.promise;
        }
        cancel(t) {
          this._done = true;
          for (let t of this._requests) {
            t.resolve({
              value: undefined,
              done: true
            });
          }
          this._requests.length = 0;
          this._stream._removeRangeReader(this);
        }
      }
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.PDFFetchStream = undefined;
      var i = r(1);
      var n = r(20);
      function o(t, e, r) {
        return {
          method: "GET",
          headers: t,
          signal: r.signal,
          mode: "cors",
          credentials: e ? "include" : "same-origin",
          redirect: "follow"
        };
      }
      function s(t) {
        let e = new Headers();
        for (let r in t) {
          let i = t[r];
          if (i !== undefined) {
            e.append(r, i);
          }
        }
        return e;
      }
      function a(t) {
        if (t instanceof Uint8Array) {
          return t.buffer;
        } else if (t instanceof ArrayBuffer) {
          return t;
        } else {
          i.warn(`getArrayBuffer - unexpected data format: ${t}`);
          return new Uint8Array(t).buffer;
        }
      }
      class l {
        constructor(t) {
          this.source = t;
          this.isHttp = /^https?:/i.test(t.url);
          this.httpHeaders = this.isHttp && t.httpHeaders || {};
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }
        getFullReader() {
          i.assert(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
          this._fullRequestReader = new h(this);
          return this._fullRequestReader;
        }
        getRangeReader(t, e) {
          if (e <= this._progressiveDataLength) {
            return null;
          }
          let r = new c(this, t, e);
          this._rangeRequestReaders.push(r);
          return r;
        }
        cancelAllRequests(t) {
          this._fullRequestReader?.cancel(t);
          for (let e of this._rangeRequestReaders.slice(0)) {
            e.cancel(t);
          }
        }
      }
      e.PDFFetchStream = l;
      class h {
        constructor(t) {
          this._stream = t;
          this._reader = null;
          this._loaded = 0;
          this._filename = null;
          let e = t.source;
          this._withCredentials = e.withCredentials || false;
          this._contentLength = e.length;
          this._headersCapability = new i.PromiseCapability();
          this._disableRange = e.disableRange || false;
          this._rangeChunkSize = e.rangeChunkSize;
          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }
          this._abortController = new AbortController();
          this._isStreamingSupported = !e.disableStream;
          this._isRangeSupported = !e.disableRange;
          this._headers = s(this._stream.httpHeaders);
          let r = e.url;
          fetch(r, o(this._headers, this._withCredentials, this._abortController)).then(t => {
            if (!n.validateResponseStatus(t.status)) {
              throw n.createResponseStatusError(t.status, r);
            }
            this._reader = t.body.getReader();
            this._headersCapability.resolve();
            let e = e => t.headers.get(e);
            let {
              allowRangeRequests: o,
              suggestedLength: s
            } = n.validateRangeRequestCapabilities({
              getResponseHeader: e,
              isHttp: this._stream.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            this._isRangeSupported = o;
            this._contentLength = s || this._contentLength;
            this._filename = n.extractFilenameFromHeader(e);
            if (!this._isStreamingSupported && this._isRangeSupported) {
              this.cancel(new i.AbortException("Streaming is disabled."));
            }
          }).catch(this._headersCapability.reject);
          this.onProgress = null;
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._headersCapability.promise;
          let {
            value: t,
            done: e
          } = await this._reader.read();
          if (e) {
            return {
              value: t,
              done: e
            };
          } else {
            this._loaded += t.byteLength;
            this.onProgress?.({
              loaded: this._loaded,
              total: this._contentLength
            });
            return {
              value: a(t),
              done: false
            };
          }
        }
        cancel(t) {
          this._reader?.cancel(t);
          this._abortController.abort();
        }
      }
      class c {
        constructor(t, e, r) {
          this._stream = t;
          this._reader = null;
          this._loaded = 0;
          let a = t.source;
          this._withCredentials = a.withCredentials || false;
          this._readCapability = new i.PromiseCapability();
          this._isStreamingSupported = !a.disableStream;
          this._abortController = new AbortController();
          this._headers = s(this._stream.httpHeaders);
          this._headers.append("Range", `bytes=${e}-${r - 1}`);
          let l = a.url;
          fetch(l, o(this._headers, this._withCredentials, this._abortController)).then(t => {
            if (!n.validateResponseStatus(t.status)) {
              throw n.createResponseStatusError(t.status, l);
            }
            this._readCapability.resolve();
            this._reader = t.body.getReader();
          }).catch(this._readCapability.reject);
          this.onProgress = null;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._readCapability.promise;
          let {
            value: t,
            done: e
          } = await this._reader.read();
          if (e) {
            return {
              value: t,
              done: e
            };
          } else {
            this._loaded += t.byteLength;
            this.onProgress?.({
              loaded: this._loaded
            });
            return {
              value: a(t),
              done: false
            };
          }
        }
        cancel(t) {
          this._reader?.cancel(t);
          this._abortController.abort();
        }
      }
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.createResponseStatusError = l;
      e.extractFilenameFromHeader = a;
      e.validateRangeRequestCapabilities = s;
      e.validateResponseStatus = h;
      var i = r(1);
      var n = r(21);
      var o = r(6);
      function s({
        getResponseHeader: t,
        isHttp: e,
        rangeChunkSize: r,
        disableRange: i
      }) {
        let n = {
          allowRangeRequests: false,
          suggestedLength: undefined
        };
        let o = parseInt(t("Content-Length"), 10);
        if (Number.isInteger(o)) {
          n.suggestedLength = o;
          if (!(o <= r * 2) && !i && !!e && t("Accept-Ranges") === "bytes" && (t("Content-Encoding") || "identity") === "identity") {
            n.allowRangeRequests = true;
          }
        }
        return n;
      }
      function a(t) {
        let e = t("Content-Disposition");
        if (e) {
          let t = n.getFilenameFromContentDispositionHeader(e);
          if (t.includes("%")) {
            try {
              t = decodeURIComponent(t);
            } catch {}
          }
          if (o.isPdfFile(t)) {
            return t;
          }
        }
        return null;
      }
      function l(t, e) {
        if (t === 404 || t === 0 && e.startsWith("file:")) {
          return new i.MissingPDFException("Missing PDF \"" + e + "\".");
        } else {
          return new i.UnexpectedResponseException(`Unexpected server response (${t}) while retrieving PDF "${e}".`, t);
        }
      }
      function h(t) {
        return t === 200 || t === 206;
      }
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.getFilenameFromContentDispositionHeader = n;
      var i = r(1);
      function n(t) {
        let e = true;
        let r = n("filename\\*", "i").exec(t);
        if (r) {
          let t = l(r = r[1]);
          return s(t = c(t = h(t = unescape(t))));
        }
        if (r = a(t)) {
          return s(c(r));
        }
        if (r = n("filename", "i").exec(t)) {
          let t = l(r = r[1]);
          return s(t = c(t));
        }
        function n(t, e) {
          return RegExp("(?:^|;)\\s*" + t + "\\s*=\\s*([^\";\\s][^;\\s]*|\"(?:[^\"\\\\]|\\\\\"?)+\"?)", e);
        }
        function o(t, r) {
          if (t) {
            if (!/^[\x00-\xFF]+$/.test(r)) {
              return r;
            }
            try {
              let n = new TextDecoder(t, {
                fatal: true
              });
              let o = i.stringToBytes(r);
              r = n.decode(o);
              e = false;
            } catch {}
          }
          return r;
        }
        function s(t) {
          if (e && /[\x80-\xff]/.test(t)) {
            t = o("utf-8", t);
            if (e) {
              t = o("iso-8859-1", t);
            }
          }
          return t;
        }
        function a(t) {
          let e;
          let r = [];
          let i = n("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          while ((e = i.exec(t)) !== null) {
            let [, t, i, n] = e;
            if ((t = parseInt(t, 10)) in r) {
              if (t === 0) {
                break;
              }
              continue;
            }
            r[t] = [i, n];
          }
          let o = [];
          for (let t = 0; t < r.length && t in r; ++t) {
            let [e, i] = r[t];
            i = l(i);
            if (e) {
              i = unescape(i);
              if (t === 0) {
                i = h(i);
              }
            }
            o.push(i);
          }
          return o.join("");
        }
        function l(t) {
          if (t.startsWith("\"")) {
            let e = t.slice(1).split("\\\"");
            for (let t = 0; t < e.length; ++t) {
              let r = e[t].indexOf("\"");
              if (r !== -1) {
                e[t] = e[t].slice(0, r);
                e.length = t + 1;
              }
              e[t] = e[t].replaceAll(/\\(.)/g, "$1");
            }
            t = e.join("\"");
          }
          return t;
        }
        function h(t) {
          let e = t.indexOf("'");
          if (e === -1) {
            return t;
          } else {
            return o(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""));
          }
        }
        function c(t) {
          if (!t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t)) {
            return t;
          } else {
            return t.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (t, e, r, i) {
              if (r === "q" || r === "Q") {
                return o(e, i = (i = i.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function (t, e) {
                  return String.fromCharCode(parseInt(e, 16));
                }));
              }
              try {
                i = atob(i);
              } catch {}
              return o(e, i);
            });
          }
        }
        return "";
      }
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.PDFNetworkStream = undefined;
      var i = r(1);
      var n = r(20);
      let o = 200;
      let s = 206;
      function a(t) {
        let e = t.response;
        if (typeof e != "string") {
          return e;
        } else {
          return i.stringToBytes(e).buffer;
        }
      }
      class l {
        constructor(t, e = {}) {
          this.url = t;
          this.isHttp = /^https?:/i.test(t);
          this.httpHeaders = this.isHttp && e.httpHeaders || Object.create(null);
          this.withCredentials = e.withCredentials || false;
          this.currXhrId = 0;
          this.pendingRequests = Object.create(null);
        }
        requestRange(t, e, r) {
          let i = {
            begin: t,
            end: e
          };
          for (let t in r) {
            i[t] = r[t];
          }
          return this.request(i);
        }
        requestFull(t) {
          return this.request(t);
        }
        request(t) {
          let e = new XMLHttpRequest();
          let r = this.currXhrId++;
          let i = this.pendingRequests[r] = {
            xhr: e
          };
          e.open("GET", this.url);
          e.withCredentials = this.withCredentials;
          for (let t in this.httpHeaders) {
            let r = this.httpHeaders[t];
            if (r !== undefined) {
              e.setRequestHeader(t, r);
            }
          }
          if (this.isHttp && "begin" in t && "end" in t) {
            e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`);
            i.expectedStatus = s;
          } else {
            i.expectedStatus = o;
          }
          e.responseType = "arraybuffer";
          if (t.onError) {
            e.onerror = function (r) {
              t.onError(e.status);
            };
          }
          e.onreadystatechange = this.onStateChange.bind(this, r);
          e.onprogress = this.onProgress.bind(this, r);
          i.onHeadersReceived = t.onHeadersReceived;
          i.onDone = t.onDone;
          i.onError = t.onError;
          i.onProgress = t.onProgress;
          e.send(null);
          return r;
        }
        onProgress(t, e) {
          let r = this.pendingRequests[t];
          if (r) {
            r.onProgress?.(e);
          }
        }
        onStateChange(t, e) {
          let r = this.pendingRequests[t];
          if (!r) {
            return;
          }
          let i = r.xhr;
          if (i.readyState >= 2 && r.onHeadersReceived) {
            r.onHeadersReceived();
            delete r.onHeadersReceived;
          }
          if (i.readyState !== 4 || !(t in this.pendingRequests)) {
            return;
          }
          delete this.pendingRequests[t];
          if (i.status === 0 && this.isHttp) {
            r.onError?.(i.status);
            return;
          }
          let n = i.status || o;
          if ((n !== o || r.expectedStatus !== s) && n !== r.expectedStatus) {
            r.onError?.(i.status);
            return;
          }
          let l = a(i);
          if (n === s) {
            let t = i.getResponseHeader("Content-Range");
            let e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t);
            r.onDone({
              begin: parseInt(e[1], 10),
              chunk: l
            });
          } else if (l) {
            r.onDone({
              begin: 0,
              chunk: l
            });
          } else {
            r.onError?.(i.status);
          }
        }
        getRequestXhr(t) {
          return this.pendingRequests[t].xhr;
        }
        isPendingRequest(t) {
          return t in this.pendingRequests;
        }
        abortRequest(t) {
          let e = this.pendingRequests[t].xhr;
          delete this.pendingRequests[t];
          e.abort();
        }
      }
      class h {
        constructor(t) {
          this._source = t;
          this._manager = new l(t.url, {
            httpHeaders: t.httpHeaders,
            withCredentials: t.withCredentials
          });
          this._rangeChunkSize = t.rangeChunkSize;
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }
        _onRangeRequestReaderClosed(t) {
          let e = this._rangeRequestReaders.indexOf(t);
          if (e >= 0) {
            this._rangeRequestReaders.splice(e, 1);
          }
        }
        getFullReader() {
          i.assert(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
          this._fullRequestReader = new c(this._manager, this._source);
          return this._fullRequestReader;
        }
        getRangeReader(t, e) {
          let r = new u(this._manager, t, e);
          r.onClosed = this._onRangeRequestReaderClosed.bind(this);
          this._rangeRequestReaders.push(r);
          return r;
        }
        cancelAllRequests(t) {
          this._fullRequestReader?.cancel(t);
          for (let e of this._rangeRequestReaders.slice(0)) {
            e.cancel(t);
          }
        }
      }
      e.PDFNetworkStream = h;
      class c {
        constructor(t, e) {
          this._manager = t;
          let r = {
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = e.url;
          this._fullRequestId = t.requestFull(r);
          this._headersReceivedCapability = new i.PromiseCapability();
          this._disableRange = e.disableRange || false;
          this._contentLength = e.length;
          this._rangeChunkSize = e.rangeChunkSize;
          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }
          this._isStreamingSupported = false;
          this._isRangeSupported = false;
          this._cachedChunks = [];
          this._requests = [];
          this._done = false;
          this._storedError = undefined;
          this._filename = null;
          this.onProgress = null;
        }
        _onHeadersReceived() {
          let t = this._fullRequestId;
          let e = this._manager.getRequestXhr(t);
          let r = t => e.getResponseHeader(t);
          let {
            allowRangeRequests: i,
            suggestedLength: o
          } = n.validateRangeRequestCapabilities({
            getResponseHeader: r,
            isHttp: this._manager.isHttp,
            rangeChunkSize: this._rangeChunkSize,
            disableRange: this._disableRange
          });
          if (i) {
            this._isRangeSupported = true;
          }
          this._contentLength = o || this._contentLength;
          this._filename = n.extractFilenameFromHeader(r);
          if (this._isRangeSupported) {
            this._manager.abortRequest(t);
          }
          this._headersReceivedCapability.resolve();
        }
        _onDone(t) {
          if (t) {
            if (this._requests.length > 0) {
              this._requests.shift().resolve({
                value: t.chunk,
                done: false
              });
            } else {
              this._cachedChunks.push(t.chunk);
            }
          }
          this._done = true;
          if (!(this._cachedChunks.length > 0)) {
            for (let t of this._requests) {
              t.resolve({
                value: undefined,
                done: true
              });
            }
            this._requests.length = 0;
          }
        }
        _onError(t) {
          this._storedError = n.createResponseStatusError(t, this._url);
          this._headersReceivedCapability.reject(this._storedError);
          for (let e of this._requests) {
            e.reject(this._storedError);
          }
          this._requests.length = 0;
          this._cachedChunks.length = 0;
        }
        _onProgress(t) {
          this.onProgress?.({
            loaded: t.loaded,
            total: t.lengthComputable ? t.total : this._contentLength
          });
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        get contentLength() {
          return this._contentLength;
        }
        get headersReady() {
          return this._headersReceivedCapability.promise;
        }
        async read() {
          if (this._storedError) {
            throw this._storedError;
          }
          if (this._cachedChunks.length > 0) {
            return {
              value: this._cachedChunks.shift(),
              done: false
            };
          }
          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }
          let t = new i.PromiseCapability();
          this._requests.push(t);
          return t.promise;
        }
        cancel(t) {
          this._done = true;
          this._headersReceivedCapability.reject(t);
          for (let e of this._requests) {
            e.resolve({
              value: undefined,
              done: true
            });
          }
          this._requests.length = 0;
          if (this._manager.isPendingRequest(this._fullRequestId)) {
            this._manager.abortRequest(this._fullRequestId);
          }
          this._fullRequestReader = null;
        }
      }
      class u {
        constructor(t, e, r) {
          this._manager = t;
          let i = {
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = t.url;
          this._requestId = t.requestRange(e, r, i);
          this._requests = [];
          this._queuedChunk = null;
          this._done = false;
          this._storedError = undefined;
          this.onProgress = null;
          this.onClosed = null;
        }
        _close() {
          this.onClosed?.(this);
        }
        _onDone(t) {
          let e = t.chunk;
          if (this._requests.length > 0) {
            this._requests.shift().resolve({
              value: e,
              done: false
            });
          } else {
            this._queuedChunk = e;
          }
          this._done = true;
          for (let t of this._requests) {
            t.resolve({
              value: undefined,
              done: true
            });
          }
          this._requests.length = 0;
          this._close();
        }
        _onError(t) {
          this._storedError = n.createResponseStatusError(t, this._url);
          for (let e of this._requests) {
            e.reject(this._storedError);
          }
          this._requests.length = 0;
          this._queuedChunk = null;
        }
        _onProgress(t) {
          if (!this.isStreamingSupported) {
            this.onProgress?.({
              loaded: t.loaded
            });
          }
        }
        get isStreamingSupported() {
          return false;
        }
        async read() {
          if (this._storedError) {
            throw this._storedError;
          }
          if (this._queuedChunk !== null) {
            let t = this._queuedChunk;
            this._queuedChunk = null;
            return {
              value: t,
              done: false
            };
          }
          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }
          let t = new i.PromiseCapability();
          this._requests.push(t);
          return t.promise;
        }
        cancel(t) {
          this._done = true;
          for (let t of this._requests) {
            t.resolve({
              value: undefined,
              done: true
            });
          }
          this._requests.length = 0;
          if (this._manager.isPendingRequest(this._requestId)) {
            this._manager.abortRequest(this._requestId);
          }
          this._close();
        }
      }
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.PDFNodeStream = undefined;
      var i = r(1);
      var n = r(20);
      let o = /^file:\/\/\/[a-zA-Z]:\//;
      function s(t) {
        let emptyModulePlaceholder = require("empty-module-placeholder") /*id: 545827*/;
        let r = emptyModulePlaceholder.parse(t);
        if (r.protocol === "file:" || r.host) {
          return r;
        } else if (/^[a-z]:[/\\]/i.test(t)) {
          return emptyModulePlaceholder.parse(`file:///${t}`);
        } else {
          if (!r.host) {
            r.protocol = "file:";
          }
          return r;
        }
      }
      class a {
        constructor(t) {
          this.source = t;
          this.url = s(t.url);
          this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
          this.isFsUrl = this.url.protocol === "file:";
          this.httpHeaders = this.isHttp && t.httpHeaders || {};
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }
        getFullReader() {
          i.assert(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
          this._fullRequestReader = this.isFsUrl ? new f(this) : new u(this);
          return this._fullRequestReader;
        }
        getRangeReader(t, e) {
          if (e <= this._progressiveDataLength) {
            return null;
          }
          let r = this.isFsUrl ? new p(this, t, e) : new d(this, t, e);
          this._rangeRequestReaders.push(r);
          return r;
        }
        cancelAllRequests(t) {
          this._fullRequestReader?.cancel(t);
          for (let e of this._rangeRequestReaders.slice(0)) {
            e.cancel(t);
          }
        }
      }
      e.PDFNodeStream = a;
      class l {
        constructor(t) {
          this._url = t.url;
          this._done = false;
          this._storedError = null;
          this.onProgress = null;
          let e = t.source;
          this._contentLength = e.length;
          this._loaded = 0;
          this._filename = null;
          this._disableRange = e.disableRange || false;
          this._rangeChunkSize = e.rangeChunkSize;
          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }
          this._isStreamingSupported = !e.disableStream;
          this._isRangeSupported = !e.disableRange;
          this._readableStream = null;
          this._readCapability = new i.PromiseCapability();
          this._headersCapability = new i.PromiseCapability();
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._readCapability.promise;
          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }
          if (this._storedError) {
            throw this._storedError;
          }
          let t = this._readableStream.read();
          if (t === null) {
            this._readCapability = new i.PromiseCapability();
            return this.read();
          } else {
            this._loaded += t.length;
            this.onProgress?.({
              loaded: this._loaded,
              total: this._contentLength
            });
            return {
              value: new Uint8Array(t).buffer,
              done: false
            };
          }
        }
        cancel(t) {
          if (!this._readableStream) {
            this._error(t);
            return;
          }
          this._readableStream.destroy(t);
        }
        _error(t) {
          this._storedError = t;
          this._readCapability.resolve();
        }
        _setReadableStream(t) {
          this._readableStream = t;
          t.on("readable", () => {
            this._readCapability.resolve();
          });
          t.on("end", () => {
            t.destroy();
            this._done = true;
            this._readCapability.resolve();
          });
          t.on("error", t => {
            this._error(t);
          });
          if (!this._isStreamingSupported && this._isRangeSupported) {
            this._error(new i.AbortException("streaming is disabled"));
          }
          if (this._storedError) {
            this._readableStream.destroy(this._storedError);
          }
        }
      }
      class h {
        constructor(t) {
          this._url = t.url;
          this._done = false;
          this._storedError = null;
          this.onProgress = null;
          this._loaded = 0;
          this._readableStream = null;
          this._readCapability = new i.PromiseCapability();
          let e = t.source;
          this._isStreamingSupported = !e.disableStream;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._readCapability.promise;
          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }
          if (this._storedError) {
            throw this._storedError;
          }
          let t = this._readableStream.read();
          if (t === null) {
            this._readCapability = new i.PromiseCapability();
            return this.read();
          } else {
            this._loaded += t.length;
            this.onProgress?.({
              loaded: this._loaded
            });
            return {
              value: new Uint8Array(t).buffer,
              done: false
            };
          }
        }
        cancel(t) {
          if (!this._readableStream) {
            this._error(t);
            return;
          }
          this._readableStream.destroy(t);
        }
        _error(t) {
          this._storedError = t;
          this._readCapability.resolve();
        }
        _setReadableStream(t) {
          this._readableStream = t;
          t.on("readable", () => {
            this._readCapability.resolve();
          });
          t.on("end", () => {
            t.destroy();
            this._done = true;
            this._readCapability.resolve();
          });
          t.on("error", t => {
            this._error(t);
          });
          if (this._storedError) {
            this._readableStream.destroy(this._storedError);
          }
        }
      }
      function c(t, e) {
        return {
          protocol: t.protocol,
          auth: t.auth,
          host: t.hostname,
          port: t.port,
          path: t.path,
          method: "GET",
          headers: e
        };
      }
      class u extends l {
        constructor(t) {
          super(t);
          let e = e => {
            if (e.statusCode === 404) {
              let t = new i.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = t;
              this._headersCapability.reject(t);
              return;
            }
            this._headersCapability.resolve();
            this._setReadableStream(e);
            let r = t => this._readableStream.headers[t.toLowerCase()];
            let {
              allowRangeRequests: o,
              suggestedLength: s
            } = n.validateRangeRequestCapabilities({
              getResponseHeader: r,
              isHttp: t.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            this._isRangeSupported = o;
            this._contentLength = s || this._contentLength;
            this._filename = n.extractFilenameFromHeader(r);
          };
          this._request = null;
          if (this._url.protocol === "http:") {
            let newPdfScrollView = require("new-pdf-scroll-view") /*id: 425421*/;
            this._request = newPdfScrollView.request(c(this._url, t.httpHeaders), e);
          } else {
            let newPdfScrollView_2 = require("new-pdf-scroll-view_2") /*id: 731178*/;
            this._request = newPdfScrollView_2.request(c(this._url, t.httpHeaders), e);
          }
          this._request.on("error", t => {
            this._storedError = t;
            this._headersCapability.reject(t);
          });
          this._request.end();
        }
      }
      class d extends h {
        constructor(t, e, r) {
          super(t);
          this._httpHeaders = {};
          for (let e in t.httpHeaders) {
            let r = t.httpHeaders[e];
            if (r !== undefined) {
              this._httpHeaders[e] = r;
            }
          }
          this._httpHeaders.Range = `bytes=${e}-${r - 1}`;
          let n = t => {
            if (t.statusCode === 404) {
              let t = new i.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = t;
              return;
            }
            this._setReadableStream(t);
          };
          this._request = null;
          if (this._url.protocol === "http:") {
            let newPdfScrollView = require("new-pdf-scroll-view") /*id: 425421*/;
            this._request = newPdfScrollView.request(c(this._url, this._httpHeaders), n);
          } else {
            let newPdfScrollView_2 = require("new-pdf-scroll-view_2") /*id: 731178*/;
            this._request = newPdfScrollView_2.request(c(this._url, this._httpHeaders), n);
          }
          this._request.on("error", t => {
            this._storedError = t;
          });
          this._request.end();
        }
      }
      class f extends l {
        constructor(t) {
          super(t);
          let e = decodeURIComponent(this._url.path);
          if (o.test(this._url.href)) {
            e = e.replace(/^\//, "");
          }
          let newPdfScrollView_3 = require("new-pdf-scroll-view_3") /*id: 862547*/;
          newPdfScrollView_3.lstat(e, (t, n) => {
            if (t) {
              if (t.code === "ENOENT") {
                t = new i.MissingPDFException(`Missing PDF "${e}".`);
              }
              this._storedError = t;
              this._headersCapability.reject(t);
              return;
            }
            this._contentLength = n.size;
            this._setReadableStream(newPdfScrollView_3.createReadStream(e));
            this._headersCapability.resolve();
          });
        }
      }
      class p extends h {
        constructor(t, e, r) {
          super(t);
          let i = decodeURIComponent(this._url.path);
          if (o.test(this._url.href)) {
            i = i.replace(/^\//, "");
          }
          let newPdfScrollView_3 = require("new-pdf-scroll-view_3") /*id: 862547*/;
          this._setReadableStream(newPdfScrollView_3.createReadStream(i, {
            start: e,
            end: r - 1
          }));
        }
      }
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.SVGGraphics = undefined;
      var i = r(6);
      var n = r(1);
      let o = {
        fontStyle: "normal",
        fontWeight: "normal",
        fillColor: "#000000"
      };
      let s = "http://www.w3.org/XML/1998/namespace";
      let a = "http://www.w3.org/1999/xlink";
      let l = ["butt", "round", "square"];
      let h = ["miter", "round", "bevel"];
      let c = function (t, e = "", r = false) {
        if (URL.createObjectURL && typeof Blob != "undefined" && !r) {
          return URL.createObjectURL(new Blob([t], {
            type: e
          }));
        }
        let i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let n = `data:${e};base64,`;
        for (let e = 0, r = t.length; e < r; e += 3) {
          let o = t[e] & 255;
          let s = t[e + 1] & 255;
          let a = t[e + 2] & 255;
          let l = o >> 2;
          let h = (o & 3) << 4 | s >> 4;
          let c = e + 1 < r ? (s & 15) << 2 | a >> 6 : 64;
          let u = e + 2 < r ? a & 63 : 64;
          n += i[l] + i[h] + i[c] + i[u];
        }
        return n;
      };
      let u = function () {
        let t = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
        let e = 12;
        let r = new Int32Array(256);
        for (let t = 0; t < 256; t++) {
          let e = t;
          for (let t = 0; t < 8; t++) {
            e = e & 1 ? e >> 1 & 2147483647 ^ -306674912 : e >> 1 & 2147483647;
          }
          r[t] = e;
        }
        function i(t, e, i) {
          let n = -1;
          for (let o = e; o < i; o++) {
            let e = r[(n ^ t[o]) & 255];
            n = n >>> 8 ^ e;
          }
          return n ^ -1;
        }
        function o(t, e, r, n) {
          let o = n;
          let s = e.length;
          r[o] = s >> 24 & 255;
          r[o + 1] = s >> 16 & 255;
          r[o + 2] = s >> 8 & 255;
          r[o + 3] = s & 255;
          r[o += 4] = t.charCodeAt(0) & 255;
          r[o + 1] = t.charCodeAt(1) & 255;
          r[o + 2] = t.charCodeAt(2) & 255;
          r[o + 3] = t.charCodeAt(3) & 255;
          o += 4;
          r.set(e, o);
          let a = i(r, n + 4, o += e.length);
          r[o] = a >> 24 & 255;
          r[o + 1] = a >> 16 & 255;
          r[o + 2] = a >> 8 & 255;
          r[o + 3] = a & 255;
        }
        function s(t, e, r) {
          let i = 1;
          let n = 0;
          for (let o = e; o < r; ++o) {
            n = (n + (i = (i + (t[o] & 255)) % 65521)) % 65521;
          }
          return n << 16 | i;
        }
        function a(t) {
          if (!n.isNodeJS) {
            return l(t);
          }
          try {
            let e = parseInt(processBrowserShim.versions.node) >= 8 ? t : Buffer.from(t);
            let r = require("new-pdf-scroll-view_5") /*id: 999076*/.deflateSync(e, {
              level: 9
            });
            if (r instanceof Uint8Array) {
              return r;
            } else {
              return new Uint8Array(r);
            }
          } catch (t) {
            n.warn("Not compressing PNG because zlib.deflateSync is unavailable: " + t);
          }
          return l(t);
        }
        function l(t) {
          let e = t.length;
          let r = 65535;
          let i = Math.ceil(e / 65535);
          let n = new Uint8Array(2 + e + i * 5 + 4);
          let o = 0;
          n[o++] = 120;
          n[o++] = 156;
          let a = 0;
          while (e > r) {
            n[o++] = 0;
            n[o++] = 255;
            n[o++] = 255;
            n[o++] = 0;
            n[o++] = 0;
            n.set(t.subarray(a, a + r), o);
            o += r;
            a += r;
            e -= r;
          }
          n[o++] = 1;
          n[o++] = e & 255;
          n[o++] = e >> 8 & 255;
          n[o++] = ~e & 255;
          n[o++] = (~e & 65535) >> 8 & 255;
          n.set(t.subarray(a), o);
          o += t.length - a;
          let l = s(t, 0, t.length);
          n[o++] = l >> 24 & 255;
          n[o++] = l >> 16 & 255;
          n[o++] = l >> 8 & 255;
          n[o++] = l & 255;
          return n;
        }
        function h(r, i, s, l) {
          let h;
          let u;
          let d;
          let f = r.width;
          let p = r.height;
          let g = r.data;
          switch (i) {
            case n.ImageKind.GRAYSCALE_1BPP:
              u = 0;
              h = 1;
              d = f + 7 >> 3;
              break;
            case n.ImageKind.RGB_24BPP:
              u = 2;
              h = 8;
              d = f * 3;
              break;
            case n.ImageKind.RGBA_32BPP:
              u = 6;
              h = 8;
              d = f * 4;
              break;
            default:
              throw Error("invalid format");
          }
          let m = new Uint8Array((1 + d) * p);
          let v = 0;
          let y = 0;
          for (let t = 0; t < p; ++t) {
            m[v++] = 0;
            m.set(g.subarray(y, y + d), v);
            y += d;
            v += d;
          }
          if (i === n.ImageKind.GRAYSCALE_1BPP && l) {
            v = 0;
            for (let t = 0; t < p; t++) {
              v++;
              for (let t = 0; t < d; t++) {
                m[v++] ^= 255;
              }
            }
          }
          let b = new Uint8Array([f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255, p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, p & 255, h, u, 0, 0, 0]);
          let A = a(m);
          let S = new Uint8Array(t.length + e * 3 + b.length + A.length);
          let x = 0;
          S.set(t, x);
          o("IHDR", b, S, x += t.length);
          o("IDATA", A, S, x += e + b.length);
          x += e + A.length;
          o("IEND", new Uint8Array(0), S, x);
          return c(S, "image/png", s);
        }
        return function (t, e, r) {
          let i = t.kind === undefined ? n.ImageKind.GRAYSCALE_1BPP : t.kind;
          return h(t, i, e, r);
        };
      }();
      class d {
        constructor() {
          this.fontSizeScale = 1;
          this.fontWeight = o.fontWeight;
          this.fontSize = 0;
          this.textMatrix = n.IDENTITY_MATRIX;
          this.fontMatrix = n.FONT_IDENTITY_MATRIX;
          this.leading = 0;
          this.textRenderingMode = n.TextRenderingMode.FILL;
          this.textMatrixScale = 1;
          this.x = 0;
          this.y = 0;
          this.lineX = 0;
          this.lineY = 0;
          this.charSpacing = 0;
          this.wordSpacing = 0;
          this.textHScale = 1;
          this.textRise = 0;
          this.fillColor = o.fillColor;
          this.strokeColor = "#000000";
          this.fillAlpha = 1;
          this.strokeAlpha = 1;
          this.lineWidth = 1;
          this.lineJoin = "";
          this.lineCap = "";
          this.miterLimit = 0;
          this.dashArray = [];
          this.dashPhase = 0;
          this.dependencies = [];
          this.activeClipUrl = null;
          this.clipGroup = null;
          this.maskId = "";
        }
        clone() {
          return Object.create(this);
        }
        setCurrentPoint(t, e) {
          this.x = t;
          this.y = e;
        }
      }
      function f(t) {
        let e = [];
        let r = [];
        for (let i of t) {
          if (i.fn === "save") {
            e.push({
              fnId: 92,
              fn: "group",
              items: []
            });
            r.push(e);
            e = e.at(-1).items;
            continue;
          }
          if (i.fn === "restore") {
            e = r.pop();
          } else {
            e.push(i);
          }
        }
        return e;
      }
      function p(t) {
        if (Number.isInteger(t)) {
          return t.toString();
        }
        let e = t.toFixed(10);
        let r = e.length - 1;
        if (e[r] !== "0") {
          return e;
        }
        do {
          r--;
        } while (e[r] === "0");
        return e.substring(0, e[r] === "." ? r : r + 1);
      }
      function g(t) {
        if (t[4] === 0 && t[5] === 0) {
          if (t[1] === 0 && t[2] === 0) {
            if (t[0] === 1 && t[3] === 1) {
              return "";
            } else {
              return `scale(${p(t[0])} ${p(t[3])})`;
            }
          }
          if (t[0] === t[3] && t[1] === -t[2]) {
            let e = Math.acos(t[0]) * 180 / Math.PI;
            return `rotate(${p(e)})`;
          }
        } else if (t[0] === 1 && t[1] === 0 && t[2] === 0 && t[3] === 1) {
          return `translate(${p(t[4])} ${p(t[5])})`;
        }
        return `matrix(${p(t[0])} ${p(t[1])} ${p(t[2])} ${p(t[3])} ${p(t[4])} ${p(t[5])})`;
      }
      let m = 0;
      let v = 0;
      let y = 0;
      class b {
        constructor(t, e, r = false) {
          i.deprecated("The SVG back-end is no longer maintained and *may* be removed in the future.");
          this.svgFactory = new i.DOMSVGFactory();
          this.current = new d();
          this.transformMatrix = n.IDENTITY_MATRIX;
          this.transformStack = [];
          this.extraStack = [];
          this.commonObjs = t;
          this.objs = e;
          this.pendingClip = null;
          this.pendingEOFill = false;
          this.embedFonts = false;
          this.embeddedFonts = Object.create(null);
          this.cssStyle = null;
          this.forceDataSchema = !!r;
          this._operatorIdMapping = [];
          for (let o in n.OPS) {
            this._operatorIdMapping[n.OPS[o]] = o;
          }
        }
        getObject(t, e = null) {
          if (typeof t == "string") {
            if (t.startsWith("g_")) {
              return this.commonObjs.get(t);
            } else {
              return this.objs.get(t);
            }
          } else {
            return e;
          }
        }
        save() {
          this.transformStack.push(this.transformMatrix);
          let t = this.current;
          this.extraStack.push(t);
          this.current = t.clone();
        }
        restore() {
          this.transformMatrix = this.transformStack.pop();
          this.current = this.extraStack.pop();
          this.pendingClip = null;
          this.tgrp = null;
        }
        group(t) {
          this.save();
          this.executeOpTree(t);
          this.restore();
        }
        loadDependencies(t) {
          let e = t.fnArray;
          let r = t.argsArray;
          for (let t = 0, i = e.length; t < i; t++) {
            if (e[t] === n.OPS.dependency) {
              for (let e of r[t]) {
                let t = e.startsWith("g_") ? this.commonObjs : this.objs;
                let r = new Promise(r => {
                  t.get(e, r);
                });
                this.current.dependencies.push(r);
              }
            }
          }
          return Promise.all(this.current.dependencies);
        }
        transform(t, e, r, i, o, s) {
          let a = [t, e, r, i, o, s];
          this.transformMatrix = n.Util.transform(this.transformMatrix, a);
          this.tgrp = null;
        }
        getSVG(t, e) {
          this.viewport = e;
          let r = this._initialize(e);
          return this.loadDependencies(t).then(() => {
            this.transformMatrix = n.IDENTITY_MATRIX;
            this.executeOpTree(this.convertOpList(t));
            return r;
          });
        }
        convertOpList(t) {
          let e = this._operatorIdMapping;
          let r = t.argsArray;
          let i = t.fnArray;
          let n = [];
          for (let t = 0, o = i.length; t < o; t++) {
            let o = i[t];
            n.push({
              fnId: o,
              fn: e[o],
              args: r[t]
            });
          }
          return f(n);
        }
        executeOpTree(t) {
          for (let e of t) {
            let t = e.fn;
            let r = e.fnId;
            let i = e.args;
            switch (r | 0) {
              case n.OPS.beginText:
                this.beginText();
                break;
              case n.OPS.dependency:
                break;
              case n.OPS.setLeading:
                this.setLeading(i);
                break;
              case n.OPS.setLeadingMoveText:
                this.setLeadingMoveText(i[0], i[1]);
                break;
              case n.OPS.setFont:
                this.setFont(i);
                break;
              case n.OPS.showText:
              case n.OPS.showSpacedText:
                this.showText(i[0]);
                break;
              case n.OPS.endText:
                this.endText();
                break;
              case n.OPS.moveText:
                this.moveText(i[0], i[1]);
                break;
              case n.OPS.setCharSpacing:
                this.setCharSpacing(i[0]);
                break;
              case n.OPS.setWordSpacing:
                this.setWordSpacing(i[0]);
                break;
              case n.OPS.setHScale:
                this.setHScale(i[0]);
                break;
              case n.OPS.setTextMatrix:
                this.setTextMatrix(i[0], i[1], i[2], i[3], i[4], i[5]);
                break;
              case n.OPS.setTextRise:
                this.setTextRise(i[0]);
                break;
              case n.OPS.setTextRenderingMode:
                this.setTextRenderingMode(i[0]);
                break;
              case n.OPS.setLineWidth:
                this.setLineWidth(i[0]);
                break;
              case n.OPS.setLineJoin:
                this.setLineJoin(i[0]);
                break;
              case n.OPS.setLineCap:
                this.setLineCap(i[0]);
                break;
              case n.OPS.setMiterLimit:
                this.setMiterLimit(i[0]);
                break;
              case n.OPS.setFillRGBColor:
                this.setFillRGBColor(i[0], i[1], i[2]);
                break;
              case n.OPS.setStrokeRGBColor:
                this.setStrokeRGBColor(i[0], i[1], i[2]);
                break;
              case n.OPS.setStrokeColorN:
                this.setStrokeColorN(i);
                break;
              case n.OPS.setFillColorN:
                this.setFillColorN(i);
                break;
              case n.OPS.shadingFill:
                this.shadingFill(i[0]);
                break;
              case n.OPS.setDash:
                this.setDash(i[0], i[1]);
                break;
              case n.OPS.setRenderingIntent:
                this.setRenderingIntent(i[0]);
                break;
              case n.OPS.setFlatness:
                this.setFlatness(i[0]);
                break;
              case n.OPS.setGState:
                this.setGState(i[0]);
                break;
              case n.OPS.fill:
                this.fill();
                break;
              case n.OPS.eoFill:
                this.eoFill();
                break;
              case n.OPS.stroke:
                this.stroke();
                break;
              case n.OPS.fillStroke:
                this.fillStroke();
                break;
              case n.OPS.eoFillStroke:
                this.eoFillStroke();
                break;
              case n.OPS.clip:
                this.clip("nonzero");
                break;
              case n.OPS.eoClip:
                this.clip("evenodd");
                break;
              case n.OPS.paintSolidColorImageMask:
                this.paintSolidColorImageMask();
                break;
              case n.OPS.paintImageXObject:
                this.paintImageXObject(i[0]);
                break;
              case n.OPS.paintInlineImageXObject:
                this.paintInlineImageXObject(i[0]);
                break;
              case n.OPS.paintImageMaskXObject:
                this.paintImageMaskXObject(i[0]);
                break;
              case n.OPS.paintFormXObjectBegin:
                this.paintFormXObjectBegin(i[0], i[1]);
                break;
              case n.OPS.paintFormXObjectEnd:
                this.paintFormXObjectEnd();
                break;
              case n.OPS.closePath:
                this.closePath();
                break;
              case n.OPS.closeStroke:
                this.closeStroke();
                break;
              case n.OPS.closeFillStroke:
                this.closeFillStroke();
                break;
              case n.OPS.closeEOFillStroke:
                this.closeEOFillStroke();
                break;
              case n.OPS.nextLine:
                this.nextLine();
                break;
              case n.OPS.transform:
                this.transform(i[0], i[1], i[2], i[3], i[4], i[5]);
                break;
              case n.OPS.constructPath:
                this.constructPath(i[0], i[1]);
                break;
              case n.OPS.endPath:
                this.endPath();
                break;
              case 92:
                this.group(e.items);
                break;
              default:
                n.warn(`Unimplemented operator ${t}`);
            }
          }
        }
        setWordSpacing(t) {
          this.current.wordSpacing = t;
        }
        setCharSpacing(t) {
          this.current.charSpacing = t;
        }
        nextLine() {
          this.moveText(0, this.current.leading);
        }
        setTextMatrix(t, e, r, i, n, o) {
          let s = this.current;
          s.textMatrix = s.lineMatrix = [t, e, r, i, n, o];
          s.textMatrixScale = Math.hypot(t, e);
          s.x = s.lineX = 0;
          s.y = s.lineY = 0;
          s.xcoords = [];
          s.ycoords = [];
          s.tspan = this.svgFactory.createElement("svg:tspan");
          s.tspan.setAttributeNS(null, "font-family", s.fontFamily);
          s.tspan.setAttributeNS(null, "font-size", `${p(s.fontSize)}px`);
          s.tspan.setAttributeNS(null, "y", p(-s.y));
          s.txtElement = this.svgFactory.createElement("svg:text");
          s.txtElement.append(s.tspan);
        }
        beginText() {
          let t = this.current;
          t.x = t.lineX = 0;
          t.y = t.lineY = 0;
          t.textMatrix = n.IDENTITY_MATRIX;
          t.lineMatrix = n.IDENTITY_MATRIX;
          t.textMatrixScale = 1;
          t.tspan = this.svgFactory.createElement("svg:tspan");
          t.txtElement = this.svgFactory.createElement("svg:text");
          t.txtgrp = this.svgFactory.createElement("svg:g");
          t.xcoords = [];
          t.ycoords = [];
        }
        moveText(t, e) {
          let r = this.current;
          r.x = r.lineX += t;
          r.y = r.lineY += e;
          r.xcoords = [];
          r.ycoords = [];
          r.tspan = this.svgFactory.createElement("svg:tspan");
          r.tspan.setAttributeNS(null, "font-family", r.fontFamily);
          r.tspan.setAttributeNS(null, "font-size", `${p(r.fontSize)}px`);
          r.tspan.setAttributeNS(null, "y", p(-r.y));
        }
        showText(t) {
          let e = this.current;
          let r = e.font;
          let i = e.fontSize;
          if (i === 0) {
            return;
          }
          let a = e.fontSizeScale;
          let l = e.charSpacing;
          let h = e.wordSpacing;
          let c = e.fontDirection;
          let u = e.textHScale * c;
          let d = r.vertical;
          let f = d ? 1 : -1;
          let m = r.defaultVMetrics;
          let v = i * e.fontMatrix[0];
          let y = 0;
          for (let n of t) {
            let t;
            let o;
            if (n === null) {
              y += c * h;
              continue;
            }
            if (typeof n == "number") {
              y += f * n * i / 1000;
              continue;
            }
            let s = (n.isSpace ? h : 0) + l;
            let u = n.fontChar;
            let p = n.width;
            if (d) {
              let e;
              let r = n.vmetric || m;
              e = -(e = n.vmetric ? r[1] : p * 0.5) * v;
              let i = r[2] * v;
              p = r ? -r[0] : p;
              t = e / a;
              o = (y + i) / a;
            } else {
              t = y / a;
              o = 0;
            }
            if (n.isInFont || r.missingFile) {
              e.xcoords.push(e.x + t);
              if (d) {
                e.ycoords.push(-e.y + o);
              }
              e.tspan.textContent += u;
            }
            y += d ? p * v - s * c : p * v + s * c;
          }
          e.tspan.setAttributeNS(null, "x", e.xcoords.map(p).join(" "));
          if (d) {
            e.tspan.setAttributeNS(null, "y", e.ycoords.map(p).join(" "));
          } else {
            e.tspan.setAttributeNS(null, "y", p(-e.y));
          }
          if (d) {
            e.y -= y;
          } else {
            e.x += y * u;
          }
          e.tspan.setAttributeNS(null, "font-family", e.fontFamily);
          e.tspan.setAttributeNS(null, "font-size", `${p(e.fontSize)}px`);
          if (e.fontStyle !== o.fontStyle) {
            e.tspan.setAttributeNS(null, "font-style", e.fontStyle);
          }
          if (e.fontWeight !== o.fontWeight) {
            e.tspan.setAttributeNS(null, "font-weight", e.fontWeight);
          }
          let b = e.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
          if (b === n.TextRenderingMode.FILL || b === n.TextRenderingMode.FILL_STROKE) {
            if (e.fillColor !== o.fillColor) {
              e.tspan.setAttributeNS(null, "fill", e.fillColor);
            }
            if (e.fillAlpha < 1) {
              e.tspan.setAttributeNS(null, "fill-opacity", e.fillAlpha);
            }
          } else if (e.textRenderingMode === n.TextRenderingMode.ADD_TO_PATH) {
            e.tspan.setAttributeNS(null, "fill", "transparent");
          } else {
            e.tspan.setAttributeNS(null, "fill", "none");
          }
          if (b === n.TextRenderingMode.STROKE || b === n.TextRenderingMode.FILL_STROKE) {
            let t = 1 / (e.textMatrixScale || 1);
            this._setStrokeAttributes(e.tspan, t);
          }
          let A = e.textMatrix;
          if (e.textRise !== 0) {
            A = A.slice();
            A[5] += e.textRise;
          }
          e.txtElement.setAttributeNS(null, "transform", `${g(A)} scale(${p(u)}, -1)`);
          e.txtElement.setAttributeNS(s, "xml:space", "preserve");
          e.txtElement.append(e.tspan);
          e.txtgrp.append(e.txtElement);
          this._ensureTransformGroup().append(e.txtElement);
        }
        setLeadingMoveText(t, e) {
          this.setLeading(-e);
          this.moveText(t, e);
        }
        addFontStyle(t) {
          if (!t.data) {
            throw Error("addFontStyle: No font data available, ensure that the \"fontExtraProperties\" API parameter is set.");
          }
          if (!this.cssStyle) {
            this.cssStyle = this.svgFactory.createElement("svg:style");
            this.cssStyle.setAttributeNS(null, "type", "text/css");
            this.defs.append(this.cssStyle);
          }
          let e = c(t.data, t.mimetype, this.forceDataSchema);
          this.cssStyle.textContent += `@font-face { font-family: "${t.loadedName}"; src: url(${e}); }
`;
        }
        setFont(t) {
          let e = this.current;
          let r = this.commonObjs.get(t[0]);
          let i = t[1];
          e.font = r;
          if (!!this.embedFonts && !r.missingFile && !this.embeddedFonts[r.loadedName]) {
            this.addFontStyle(r);
            this.embeddedFonts[r.loadedName] = r;
          }
          e.fontMatrix = r.fontMatrix || n.FONT_IDENTITY_MATRIX;
          let o = "normal";
          if (r.black) {
            o = "900";
          } else if (r.bold) {
            o = "bold";
          }
          let s = r.italic ? "italic" : "normal";
          if (i < 0) {
            i = -i;
            e.fontDirection = -1;
          } else {
            e.fontDirection = 1;
          }
          e.fontSize = i;
          e.fontFamily = r.loadedName;
          e.fontWeight = o;
          e.fontStyle = s;
          e.tspan = this.svgFactory.createElement("svg:tspan");
          e.tspan.setAttributeNS(null, "y", p(-e.y));
          e.xcoords = [];
          e.ycoords = [];
        }
        endText() {
          let t = this.current;
          if (t.textRenderingMode & n.TextRenderingMode.ADD_TO_PATH_FLAG && t.txtElement?.hasChildNodes()) {
            t.element = t.txtElement;
            this.clip("nonzero");
            this.endPath();
          }
        }
        setLineWidth(t) {
          if (t > 0) {
            this.current.lineWidth = t;
          }
        }
        setLineCap(t) {
          this.current.lineCap = l[t];
        }
        setLineJoin(t) {
          this.current.lineJoin = h[t];
        }
        setMiterLimit(t) {
          this.current.miterLimit = t;
        }
        setStrokeAlpha(t) {
          this.current.strokeAlpha = t;
        }
        setStrokeRGBColor(t, e, r) {
          this.current.strokeColor = n.Util.makeHexColor(t, e, r);
        }
        setFillAlpha(t) {
          this.current.fillAlpha = t;
        }
        setFillRGBColor(t, e, r) {
          this.current.fillColor = n.Util.makeHexColor(t, e, r);
          this.current.tspan = this.svgFactory.createElement("svg:tspan");
          this.current.xcoords = [];
          this.current.ycoords = [];
        }
        setStrokeColorN(t) {
          this.current.strokeColor = this._makeColorN_Pattern(t);
        }
        setFillColorN(t) {
          this.current.fillColor = this._makeColorN_Pattern(t);
        }
        shadingFill(t) {
          let {
            width: e,
            height: r
          } = this.viewport;
          let i = n.Util.inverseTransform(this.transformMatrix);
          let [o, s, a, l] = n.Util.getAxialAlignedBoundingBox([0, 0, e, r], i);
          let h = this.svgFactory.createElement("svg:rect");
          h.setAttributeNS(null, "x", o);
          h.setAttributeNS(null, "y", s);
          h.setAttributeNS(null, "width", a - o);
          h.setAttributeNS(null, "height", l - s);
          h.setAttributeNS(null, "fill", this._makeShadingPattern(t));
          if (this.current.fillAlpha < 1) {
            h.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
          }
          this._ensureTransformGroup().append(h);
        }
        _makeColorN_Pattern(t) {
          if (t[0] === "TilingPattern") {
            return this._makeTilingPattern(t);
          } else {
            return this._makeShadingPattern(t);
          }
        }
        _makeTilingPattern(t) {
          let e = t[1];
          let r = t[2];
          let i = t[3] || n.IDENTITY_MATRIX;
          let [o, s, a, l] = t[4];
          let h = t[5];
          let c = t[6];
          let u = t[7];
          let d = `shading${y++}`;
          let [f, p, g, m] = n.Util.normalizeRect([...n.Util.applyTransform([o, s], i), ...n.Util.applyTransform([a, l], i)]);
          let [v, b] = n.Util.singularValueDecompose2dScale(i);
          let A = h * v;
          let S = c * b;
          let x = this.svgFactory.createElement("svg:pattern");
          x.setAttributeNS(null, "id", d);
          x.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
          x.setAttributeNS(null, "width", A);
          x.setAttributeNS(null, "height", S);
          x.setAttributeNS(null, "x", `${f}`);
          x.setAttributeNS(null, "y", `${p}`);
          let w = this.svg;
          let C = this.transformMatrix;
          let T = this.current.fillColor;
          let E = this.current.strokeColor;
          let F = this.svgFactory.create(g - f, m - p);
          this.svg = F;
          this.transformMatrix = i;
          if (u === 2) {
            let t = n.Util.makeHexColor(...e);
            this.current.fillColor = t;
            this.current.strokeColor = t;
          }
          this.executeOpTree(this.convertOpList(r));
          this.svg = w;
          this.transformMatrix = C;
          this.current.fillColor = T;
          this.current.strokeColor = E;
          x.append(F.childNodes[0]);
          this.defs.append(x);
          return `url(#${d})`;
        }
        _makeShadingPattern(t) {
          if (typeof t == "string") {
            t = this.objs.get(t);
          }
          switch (t[0]) {
            case "RadialAxial":
              let e;
              let r = `shading${y++}`;
              let i = t[3];
              switch (t[1]) {
                case "axial":
                  let o = t[4];
                  let s = t[5];
                  (e = this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null, "id", r);
                  e.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                  e.setAttributeNS(null, "x1", o[0]);
                  e.setAttributeNS(null, "y1", o[1]);
                  e.setAttributeNS(null, "x2", s[0]);
                  e.setAttributeNS(null, "y2", s[1]);
                  break;
                case "radial":
                  let a = t[4];
                  let l = t[5];
                  let h = t[6];
                  let c = t[7];
                  (e = this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null, "id", r);
                  e.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                  e.setAttributeNS(null, "cx", l[0]);
                  e.setAttributeNS(null, "cy", l[1]);
                  e.setAttributeNS(null, "r", c);
                  e.setAttributeNS(null, "fx", a[0]);
                  e.setAttributeNS(null, "fy", a[1]);
                  e.setAttributeNS(null, "fr", h);
                  break;
                default:
                  throw Error(`Unknown RadialAxial type: ${t[1]}`);
              }
              for (let t of i) {
                let r = this.svgFactory.createElement("svg:stop");
                r.setAttributeNS(null, "offset", t[0]);
                r.setAttributeNS(null, "stop-color", t[1]);
                e.append(r);
              }
              this.defs.append(e);
              return `url(#${r})`;
            case "Mesh":
              n.warn("Unimplemented pattern Mesh");
              return null;
            case "Dummy":
              return "hotpink";
            default:
              throw Error(`Unknown IR type: ${t[0]}`);
          }
        }
        setDash(t, e) {
          this.current.dashArray = t;
          this.current.dashPhase = e;
        }
        constructPath(t, e) {
          let r = this.current;
          let i = r.x;
          let o = r.y;
          let s = [];
          let a = 0;
          for (let r of t) {
            switch (r | 0) {
              case n.OPS.rectangle:
                i = e[a++];
                o = e[a++];
                let t = e[a++];
                let l = e[a++];
                let h = i + t;
                let c = o + l;
                s.push("M", p(i), p(o), "L", p(h), p(o), "L", p(h), p(c), "L", p(i), p(c), "Z");
                break;
              case n.OPS.moveTo:
                i = e[a++];
                o = e[a++];
                s.push("M", p(i), p(o));
                break;
              case n.OPS.lineTo:
                i = e[a++];
                o = e[a++];
                s.push("L", p(i), p(o));
                break;
              case n.OPS.curveTo:
                i = e[a + 4];
                o = e[a + 5];
                s.push("C", p(e[a]), p(e[a + 1]), p(e[a + 2]), p(e[a + 3]), p(i), p(o));
                a += 6;
                break;
              case n.OPS.curveTo2:
                s.push("C", p(i), p(o), p(e[a]), p(e[a + 1]), p(e[a + 2]), p(e[a + 3]));
                i = e[a + 2];
                o = e[a + 3];
                a += 4;
                break;
              case n.OPS.curveTo3:
                i = e[a + 2];
                o = e[a + 3];
                s.push("C", p(e[a]), p(e[a + 1]), p(i), p(o), p(i), p(o));
                a += 4;
                break;
              case n.OPS.closePath:
                s.push("Z");
            }
          }
          s = s.join(" ");
          if (r.path && t.length > 0 && t[0] !== n.OPS.rectangle && t[0] !== n.OPS.moveTo) {
            s = r.path.getAttributeNS(null, "d") + s;
          } else {
            r.path = this.svgFactory.createElement("svg:path");
            this._ensureTransformGroup().append(r.path);
          }
          r.path.setAttributeNS(null, "d", s);
          r.path.setAttributeNS(null, "fill", "none");
          r.element = r.path;
          r.setCurrentPoint(i, o);
        }
        endPath() {
          let t = this.current;
          t.path = null;
          if (!this.pendingClip) {
            return;
          }
          if (!t.element) {
            this.pendingClip = null;
            return;
          }
          let e = `clippath${m++}`;
          let r = this.svgFactory.createElement("svg:clipPath");
          r.setAttributeNS(null, "id", e);
          r.setAttributeNS(null, "transform", g(this.transformMatrix));
          let i = t.element.cloneNode(true);
          if (this.pendingClip === "evenodd") {
            i.setAttributeNS(null, "clip-rule", "evenodd");
          } else {
            i.setAttributeNS(null, "clip-rule", "nonzero");
          }
          this.pendingClip = null;
          r.append(i);
          this.defs.append(r);
          if (t.activeClipUrl) {
            t.clipGroup = null;
            for (let e of this.extraStack) {
              e.clipGroup = null;
            }
            r.setAttributeNS(null, "clip-path", t.activeClipUrl);
          }
          t.activeClipUrl = `url(#${e})`;
          this.tgrp = null;
        }
        clip(t) {
          this.pendingClip = t;
        }
        closePath() {
          let t = this.current;
          if (t.path) {
            let e = `${t.path.getAttributeNS(null, "d")}Z`;
            t.path.setAttributeNS(null, "d", e);
          }
        }
        setLeading(t) {
          this.current.leading = -t;
        }
        setTextRise(t) {
          this.current.textRise = t;
        }
        setTextRenderingMode(t) {
          this.current.textRenderingMode = t;
        }
        setHScale(t) {
          this.current.textHScale = t / 100;
        }
        setRenderingIntent(t) {}
        setFlatness(t) {}
        setGState(t) {
          for (let [e, r] of t) {
            switch (e) {
              case "LW":
                this.setLineWidth(r);
                break;
              case "LC":
                this.setLineCap(r);
                break;
              case "LJ":
                this.setLineJoin(r);
                break;
              case "ML":
                this.setMiterLimit(r);
                break;
              case "D":
                this.setDash(r[0], r[1]);
                break;
              case "RI":
                this.setRenderingIntent(r);
                break;
              case "FL":
                this.setFlatness(r);
                break;
              case "Font":
                this.setFont(r);
                break;
              case "CA":
                this.setStrokeAlpha(r);
                break;
              case "ca":
                this.setFillAlpha(r);
                break;
              default:
                n.warn(`Unimplemented graphic state operator ${e}`);
            }
          }
        }
        fill() {
          let t = this.current;
          if (t.element) {
            t.element.setAttributeNS(null, "fill", t.fillColor);
            t.element.setAttributeNS(null, "fill-opacity", t.fillAlpha);
            this.endPath();
          }
        }
        stroke() {
          let t = this.current;
          if (t.element) {
            this._setStrokeAttributes(t.element);
            t.element.setAttributeNS(null, "fill", "none");
            this.endPath();
          }
        }
        _setStrokeAttributes(t, e = 1) {
          let r = this.current;
          let i = r.dashArray;
          if (e !== 1 && i.length > 0) {
            i = i.map(function (t) {
              return e * t;
            });
          }
          t.setAttributeNS(null, "stroke", r.strokeColor);
          t.setAttributeNS(null, "stroke-opacity", r.strokeAlpha);
          t.setAttributeNS(null, "stroke-miterlimit", p(r.miterLimit));
          t.setAttributeNS(null, "stroke-linecap", r.lineCap);
          t.setAttributeNS(null, "stroke-linejoin", r.lineJoin);
          t.setAttributeNS(null, "stroke-width", p(e * r.lineWidth) + "px");
          t.setAttributeNS(null, "stroke-dasharray", i.map(p).join(" "));
          t.setAttributeNS(null, "stroke-dashoffset", p(e * r.dashPhase) + "px");
        }
        eoFill() {
          this.current.element?.setAttributeNS(null, "fill-rule", "evenodd");
          this.fill();
        }
        fillStroke() {
          this.stroke();
          this.fill();
        }
        eoFillStroke() {
          this.current.element?.setAttributeNS(null, "fill-rule", "evenodd");
          this.fillStroke();
        }
        closeStroke() {
          this.closePath();
          this.stroke();
        }
        closeFillStroke() {
          this.closePath();
          this.fillStroke();
        }
        closeEOFillStroke() {
          this.closePath();
          this.eoFillStroke();
        }
        paintSolidColorImageMask() {
          let t = this.svgFactory.createElement("svg:rect");
          t.setAttributeNS(null, "x", "0");
          t.setAttributeNS(null, "y", "0");
          t.setAttributeNS(null, "width", "1px");
          t.setAttributeNS(null, "height", "1px");
          t.setAttributeNS(null, "fill", this.current.fillColor);
          this._ensureTransformGroup().append(t);
        }
        paintImageXObject(t) {
          let e = this.getObject(t);
          if (!e) {
            n.warn(`Dependent image with object ID ${t} is not ready yet`);
            return;
          }
          this.paintInlineImageXObject(e);
        }
        paintInlineImageXObject(t, e) {
          let r = t.width;
          let i = t.height;
          let n = u(t, this.forceDataSchema, !!e);
          let o = this.svgFactory.createElement("svg:rect");
          o.setAttributeNS(null, "x", "0");
          o.setAttributeNS(null, "y", "0");
          o.setAttributeNS(null, "width", p(r));
          o.setAttributeNS(null, "height", p(i));
          this.current.element = o;
          this.clip("nonzero");
          let s = this.svgFactory.createElement("svg:image");
          s.setAttributeNS(a, "xlink:href", n);
          s.setAttributeNS(null, "x", "0");
          s.setAttributeNS(null, "y", p(-i));
          s.setAttributeNS(null, "width", p(r) + "px");
          s.setAttributeNS(null, "height", p(i) + "px");
          s.setAttributeNS(null, "transform", `scale(${p(1 / r)} ${p(-1 / i)})`);
          if (e) {
            e.append(s);
          } else {
            this._ensureTransformGroup().append(s);
          }
        }
        paintImageMaskXObject(t) {
          let e = this.getObject(t.data, t);
          if (e.bitmap) {
            n.warn("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
            return;
          }
          let r = this.current;
          let i = e.width;
          let o = e.height;
          let s = r.fillColor;
          r.maskId = `mask${v++}`;
          let a = this.svgFactory.createElement("svg:mask");
          a.setAttributeNS(null, "id", r.maskId);
          let l = this.svgFactory.createElement("svg:rect");
          l.setAttributeNS(null, "x", "0");
          l.setAttributeNS(null, "y", "0");
          l.setAttributeNS(null, "width", p(i));
          l.setAttributeNS(null, "height", p(o));
          l.setAttributeNS(null, "fill", s);
          l.setAttributeNS(null, "mask", `url(#${r.maskId})`);
          this.defs.append(a);
          this._ensureTransformGroup().append(l);
          this.paintInlineImageXObject(e, a);
        }
        paintFormXObjectBegin(t, e) {
          if (Array.isArray(t) && t.length === 6) {
            this.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
          }
          if (e) {
            let t = e[2] - e[0];
            let r = e[3] - e[1];
            let i = this.svgFactory.createElement("svg:rect");
            i.setAttributeNS(null, "x", e[0]);
            i.setAttributeNS(null, "y", e[1]);
            i.setAttributeNS(null, "width", p(t));
            i.setAttributeNS(null, "height", p(r));
            this.current.element = i;
            this.clip("nonzero");
            this.endPath();
          }
        }
        paintFormXObjectEnd() {}
        _initialize(t) {
          let e = this.svgFactory.create(t.width, t.height);
          let r = this.svgFactory.createElement("svg:defs");
          e.append(r);
          this.defs = r;
          let i = this.svgFactory.createElement("svg:g");
          i.setAttributeNS(null, "transform", g(t.transform));
          e.append(i);
          this.svg = i;
          return e;
        }
        _ensureClipGroup() {
          if (!this.current.clipGroup) {
            let t = this.svgFactory.createElement("svg:g");
            t.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
            this.svg.append(t);
            this.current.clipGroup = t;
          }
          return this.current.clipGroup;
        }
        _ensureTransformGroup() {
          if (!this.tgrp) {
            this.tgrp = this.svgFactory.createElement("svg:g");
            this.tgrp.setAttributeNS(null, "transform", g(this.transformMatrix));
            if (this.current.activeClipUrl) {
              this._ensureClipGroup().append(this.tgrp);
            } else {
              this.svg.append(this.tgrp);
            }
          }
          return this.tgrp;
        }
      }
      e.SVGGraphics = b;
    }, (t, e) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.XfaText = undefined;
      class r {
        static textContent(t) {
          let e = [];
          let i = {
            items: e,
            styles: Object.create(null)
          };
          function n(t) {
            if (!t) {
              return;
            }
            let i = null;
            let o = t.name;
            if (o === "#text") {
              i = t.value;
            } else {
              if (!r.shouldBuildText(o)) {
                return;
              }
              if (t?.attributes?.textContent) {
                i = t.attributes.textContent;
              } else if (t.value) {
                i = t.value;
              }
            }
            if (i !== null) {
              e.push({
                str: i
              });
            }
            if (t.children) {
              for (let e of t.children) {
                n(e);
              }
            }
          }
          n(t);
          return i;
        }
        static shouldBuildText(t) {
          return t !== "textarea" && t !== "input" && t !== "option" && t !== "select";
        }
      }
      e.XfaText = r;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.TextLayerRenderTask = undefined;
      e.renderTextLayer = g;
      e.updateTextLayer = m;
      var i = r(1);
      var n = r(6);
      let o = 100000;
      let s = 30;
      let a = 0.8;
      let l = new Map();
      function h(t, e) {
        let r;
        if (e && i.FeatureTest.isOffscreenCanvasSupported) {
          r = new OffscreenCanvas(t, t).getContext("2d", {
            alpha: false
          });
        } else {
          let e = document.createElement("canvas");
          e.width = e.height = t;
          r = e.getContext("2d", {
            alpha: false
          });
        }
        return r;
      }
      function c(t, e) {
        let r = l.get(t);
        if (r) {
          return r;
        }
        let i = h(s, e);
        i.font = `${s}px ${t}`;
        let n = i.measureText("");
        let o = n.fontBoundingBoxAscent;
        let c = Math.abs(n.fontBoundingBoxDescent);
        if (o) {
          let e = o / (o + c);
          l.set(t, e);
          i.canvas.width = i.canvas.height = 0;
          return e;
        }
        i.strokeStyle = "red";
        i.clearRect(0, 0, s, s);
        i.strokeText("g", 0, 0);
        let u = i.getImageData(0, 0, s, s).data;
        c = 0;
        for (let t = u.length - 1 - 3; t >= 0; t -= 4) {
          if (u[t] > 0) {
            c = Math.ceil(t / 4 / s);
            break;
          }
        }
        i.clearRect(0, 0, s, s);
        i.strokeText("A", 0, s);
        u = i.getImageData(0, 0, s, s).data;
        o = 0;
        for (let t = 0, e = u.length; t < e; t += 4) {
          if (u[t] > 0) {
            o = s - Math.floor(t / 4 / s);
            break;
          }
        }
        i.canvas.width = i.canvas.height = 0;
        if (o) {
          let e = o / (o + c);
          l.set(t, e);
          return e;
        }
        l.set(t, a);
        return a;
      }
      function u(t, e, r) {
        let n;
        let o;
        let s = document.createElement("span");
        let a = {
          angle: 0,
          canvasWidth: 0,
          hasText: e.str !== "",
          hasEOL: e.hasEOL,
          fontSize: 0
        };
        t._textDivs.push(s);
        let l = i.Util.transform(t._transform, e.transform);
        let h = Math.atan2(l[1], l[0]);
        let u = r[e.fontName];
        if (u.vertical) {
          h += Math.PI / 2;
        }
        let d = Math.hypot(l[2], l[3]);
        let f = d * c(u.fontFamily, t._isOffscreenCanvasSupported);
        if (h === 0) {
          n = l[4];
          o = l[5] - f;
        } else {
          n = l[4] + f * Math.sin(h);
          o = l[5] - f * Math.cos(h);
        }
        let p = "calc(var(--scale-factor)*";
        let g = s.style;
        if (t._container === t._rootContainer) {
          g.left = `${(n * 100 / t._pageWidth).toFixed(2)}%`;
          g.top = `${(o * 100 / t._pageHeight).toFixed(2)}%`;
        } else {
          g.left = `${p}${n.toFixed(2)}px)`;
          g.top = `${p}${o.toFixed(2)}px)`;
        }
        g.fontSize = `${p}${d.toFixed(2)}px)`;
        g.fontFamily = u.fontFamily;
        a.fontSize = d;
        s.setAttribute("role", "presentation");
        s.textContent = e.str;
        s.dir = e.dir;
        if (t._fontInspectorEnabled) {
          s.dataset.fontName = e.fontName;
        }
        if (h !== 0) {
          a.angle = 180 / Math.PI * h;
        }
        let m = false;
        if (e.str.length > 1) {
          m = true;
        } else if (e.str !== " " && e.transform[0] !== e.transform[3]) {
          let t = Math.abs(e.transform[0]);
          let r = Math.abs(e.transform[3]);
          if (t !== r && Math.max(t, r) / Math.min(t, r) > 1.5) {
            m = true;
          }
        }
        if (m) {
          a.canvasWidth = u.vertical ? e.height : e.width;
        }
        t._textDivProperties.set(s, a);
        if (t._isReadableStream) {
          t._layoutText(s);
        }
      }
      function d(t) {
        let {
          div: e,
          scale: r,
          properties: i,
          ctx: n,
          prevFontSize: o,
          prevFontFamily: s
        } = t;
        let {
          style: a
        } = e;
        let l = "";
        if (i.canvasWidth !== 0 && i.hasText) {
          let {
            fontFamily: h
          } = a;
          let {
            canvasWidth: c,
            fontSize: u
          } = i;
          if (o !== u || s !== h) {
            n.font = `${u * r}px ${h}`;
            t.prevFontSize = u;
            t.prevFontFamily = h;
          }
          let {
            width: d
          } = n.measureText(e.textContent);
          if (d > 0) {
            l = `scaleX(${c * r / d})`;
          }
        }
        if (i.angle !== 0) {
          l = `rotate(${i.angle}deg) ${l}`;
        }
        if (l.length > 0) {
          a.transform = l;
        }
      }
      function f(t) {
        if (t._canceled) {
          return;
        }
        let e = t._textDivs;
        let r = t._capability;
        if (e.length > o) {
          r.resolve();
          return;
        }
        if (!t._isReadableStream) {
          for (let r of e) {
            t._layoutText(r);
          }
        }
        r.resolve();
      }
      class p {
        constructor({
          textContentSource: t,
          container: e,
          viewport: r,
          textDivs: o,
          textDivProperties: s,
          textContentItemsStr: a,
          isOffscreenCanvasSupported: l
        }) {
          this._textContentSource = t;
          this._isReadableStream = t instanceof ReadableStream;
          this._container = this._rootContainer = e;
          this._textDivs = o || [];
          this._textContentItemsStr = a || [];
          this._isOffscreenCanvasSupported = l;
          this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
          this._reader = null;
          this._textDivProperties = s || new WeakMap();
          this._canceled = false;
          this._capability = new i.PromiseCapability();
          this._layoutTextParams = {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            scale: r.scale * (globalThis.devicePixelRatio || 1),
            properties: null,
            ctx: h(0, l)
          };
          let {
            pageWidth: c,
            pageHeight: u,
            pageX: d,
            pageY: f
          } = r.rawDims;
          this._transform = [1, 0, 0, -1, -d, f + u];
          this._pageWidth = c;
          this._pageHeight = u;
          n.setLayerDimensions(e, r);
          this._capability.promise.finally(() => {
            this._layoutTextParams = null;
          }).catch(() => {});
        }
        get promise() {
          return this._capability.promise;
        }
        cancel() {
          this._canceled = true;
          if (this._reader) {
            this._reader.cancel(new i.AbortException("TextLayer task cancelled.")).catch(() => {});
            this._reader = null;
          }
          this._capability.reject(new i.AbortException("TextLayer task cancelled."));
        }
        _processItems(t, e) {
          for (let r of t) {
            if (r.str === undefined) {
              if (r.type === "beginMarkedContentProps" || r.type === "beginMarkedContent") {
                let t = this._container;
                this._container = document.createElement("span");
                this._container.classList.add("markedContent");
                if (r.id !== null) {
                  this._container.setAttribute("id", `${r.id}`);
                }
                t.append(this._container);
              } else if (r.type === "endMarkedContent") {
                this._container = this._container.parentNode;
              }
              continue;
            }
            this._textContentItemsStr.push(r.str);
            u(this, r, e);
          }
        }
        _layoutText(t) {
          let e = this._layoutTextParams.properties = this._textDivProperties.get(t);
          this._layoutTextParams.div = t;
          d(this._layoutTextParams);
          if (e.hasText) {
            this._container.append(t);
          }
          if (e.hasEOL) {
            let t = document.createElement("br");
            t.setAttribute("role", "presentation");
            this._container.append(t);
          }
        }
        _render() {
          let t = new i.PromiseCapability();
          let e = Object.create(null);
          if (this._isReadableStream) {
            let r = () => {
              this._reader.read().then(({
                value: i,
                done: n
              }) => {
                if (n) {
                  t.resolve();
                  return;
                }
                Object.assign(e, i.styles);
                this._processItems(i.items, e);
                r();
              }, t.reject);
            };
            this._reader = this._textContentSource.getReader();
            r();
          } else if (this._textContentSource) {
            let {
              items: e,
              styles: r
            } = this._textContentSource;
            this._processItems(e, r);
            t.resolve();
          } else {
            throw Error("No \"textContentSource\" parameter specified.");
          }
          t.promise.then(() => {
            e = null;
            f(this);
          }, this._capability.reject);
        }
      }
      function g(t) {
        if (!t.textContentSource && (t.textContent || t.textContentStream)) {
          n.deprecated("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead.");
          t.textContentSource = t.textContent || t.textContentStream;
        }
        let {
          container: e,
          viewport: r
        } = t;
        let i = getComputedStyle(e);
        let o = i.getPropertyValue("visibility");
        let s = parseFloat(i.getPropertyValue("--scale-factor"));
        if (o === "visible") {
          if (s) {
            r.scale;
          }
        }
        let a = new p(t);
        a._render();
        return a;
      }
      function m({
        container: t,
        viewport: e,
        textDivs: r,
        textDivProperties: i,
        isOffscreenCanvasSupported: o,
        mustRotate: s = true,
        mustRescale: a = true
      }) {
        if (s) {
          n.setLayerDimensions(t, {
            rotation: e.rotation
          });
        }
        if (a) {
          let t = h(0, o);
          let n = {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            scale: e.scale * (globalThis.devicePixelRatio || 1),
            properties: null,
            ctx: t
          };
          for (let t of r) {
            n.properties = i.get(t);
            n.div = t;
            d(n);
          }
        }
      }
      e.TextLayerRenderTask = p;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.AnnotationEditorLayer = undefined;
      var i = r(1);
      var n = r(4);
      var o = r(28);
      var s = r(33);
      var a = r(6);
      var l = r(34);
      class h {
        #ed;
        #ef = false;
        #ep = null;
        #eg = this.pointerup.bind(this);
        #em = this.pointerdown.bind(this);
        #ev = new Map();
        #ey = false;
        #eb = false;
        #eA = false;
        #eS;
        static _initialized = false;
        constructor({
          uiManager: t,
          pageIndex: e,
          div: r,
          accessibilityManager: i,
          annotationLayer: n,
          viewport: a,
          l10n: c
        }) {
          let u = [o.FreeTextEditor, s.InkEditor, l.StampEditor];
          if (!h._initialized) {
            h._initialized = true;
            for (let t of u) {
              t.initialize(c);
            }
          }
          t.registerEditorTypes(u);
          this.#eS = t;
          this.pageIndex = e;
          this.div = r;
          this.#ed = i;
          this.#ep = n;
          this.viewport = a;
          this.#eS.addLayer(this);
        }
        get isEmpty() {
          return this.#ev.size === 0;
        }
        updateToolbar(t) {
          this.#eS.updateToolbar(t);
        }
        updateMode(t = this.#eS.getMode()) {
          this.#ex();
          if (t === i.AnnotationEditorType.INK) {
            this.addInkEditorIfNeeded(false);
            this.disableClick();
          } else {
            this.enableClick();
          }
          if (t !== i.AnnotationEditorType.NONE) {
            this.div.classList.toggle("freeTextEditing", t === i.AnnotationEditorType.FREETEXT);
            this.div.classList.toggle("inkEditing", t === i.AnnotationEditorType.INK);
            this.div.classList.toggle("stampEditing", t === i.AnnotationEditorType.STAMP);
            this.div.hidden = false;
          }
        }
        addInkEditorIfNeeded(t) {
          if (t || this.#eS.getMode() === i.AnnotationEditorType.INK) {
            if (!t) {
              for (let t of this.#ev.values()) {
                if (t.isEmpty()) {
                  t.setInBackground();
                  return;
                }
              }
            }
            this.#ew({
              offsetX: 0,
              offsetY: 0
            }, false).setInBackground();
          }
        }
        setEditingState(t) {
          this.#eS.setEditingState(t);
        }
        addCommands(t) {
          this.#eS.addCommands(t);
        }
        enable() {
          this.div.style.pointerEvents = "auto";
          let t = new Set();
          for (let e of this.#ev.values()) {
            e.enableEditing();
            if (e.annotationElementId) {
              t.add(e.annotationElementId);
            }
          }
          if (this.#ep) {
            for (let e of this.#ep.getEditableAnnotations()) {
              e.hide();
              if (this.#eS.isDeletedAnnotationElement(e.data.id) || t.has(e.data.id)) {
                continue;
              }
              let r = this.deserialize(e);
              if (r) {
                this.addOrRebuild(r);
                r.enableEditing();
              }
            }
          }
        }
        disable() {
          this.#eA = true;
          this.div.style.pointerEvents = "none";
          let t = new Set();
          for (let e of this.#ev.values()) {
            e.disableEditing();
            if (!e.annotationElementId || e.serialize() !== null) {
              t.add(e.annotationElementId);
              continue;
            }
            this.getEditableAnnotation(e.annotationElementId)?.show();
            e.remove();
          }
          if (this.#ep) {
            for (let e of this.#ep.getEditableAnnotations()) {
              let {
                id: r
              } = e.data;
              if (!t.has(r) && !this.#eS.isDeletedAnnotationElement(r)) {
                e.show();
              }
            }
          }
          this.#ex();
          if (this.isEmpty) {
            this.div.hidden = true;
          }
          this.#eA = false;
        }
        getEditableAnnotation(t) {
          return this.#ep?.getEditableAnnotation(t) || null;
        }
        setActiveEditor(t) {
          if (this.#eS.getActive() !== t) {
            this.#eS.setActiveEditor(t);
          }
        }
        enableClick() {
          this.div.addEventListener("pointerdown", this.#em);
          this.div.addEventListener("pointerup", this.#eg);
        }
        disableClick() {
          this.div.removeEventListener("pointerdown", this.#em);
          this.div.removeEventListener("pointerup", this.#eg);
        }
        attach(t) {
          this.#ev.set(t.id, t);
          let {
            annotationElementId: e
          } = t;
          if (e && this.#eS.isDeletedAnnotationElement(e)) {
            this.#eS.removeDeletedAnnotationElement(t);
          }
        }
        detach(t) {
          this.#ev.delete(t.id);
          this.#ed?.removePointerInTextLayer(t.contentDiv);
          if (!this.#eA && t.annotationElementId) {
            this.#eS.addDeletedAnnotationElement(t);
          }
        }
        remove(t) {
          this.detach(t);
          this.#eS.removeEditor(t);
          if (t.div.contains(document.activeElement)) {
            setTimeout(() => {
              this.#eS.focusMainContainer();
            }, 0);
          }
          t.div.remove();
          t.isAttachedToDOM = false;
          if (!this.#eb) {
            this.addInkEditorIfNeeded(false);
          }
        }
        changeParent(t) {
          if (t.parent !== this) {
            if (t.annotationElementId) {
              this.#eS.addDeletedAnnotationElement(t.annotationElementId);
              n.AnnotationEditor.deleteAnnotationElement(t);
              t.annotationElementId = null;
            }
            this.attach(t);
            t.parent?.detach(t);
            t.setParent(this);
            if (t.div && t.isAttachedToDOM) {
              t.div.remove();
              this.div.append(t.div);
            }
          }
        }
        add(t) {
          this.changeParent(t);
          this.#eS.addEditor(t);
          this.attach(t);
          if (!t.isAttachedToDOM) {
            let e = t.render();
            this.div.append(e);
            t.isAttachedToDOM = true;
          }
          t.fixAndSetPosition();
          t.onceAdded();
          this.#eS.addToAnnotationStorage(t);
        }
        moveEditorInDOM(t) {
          if (!t.isAttachedToDOM) {
            return;
          }
          let {
            activeElement: e
          } = document;
          if (t.div.contains(e)) {
            t._focusEventsAllowed = false;
            setTimeout(() => {
              if (t.div.contains(document.activeElement)) {
                t._focusEventsAllowed = true;
              } else {
                t.div.addEventListener("focusin", () => {
                  t._focusEventsAllowed = true;
                }, {
                  once: true
                });
                e.focus();
              }
            }, 0);
          }
          t._structTreeParentId = this.#ed?.moveElementInDOM(this.div, t.div, t.contentDiv, true);
        }
        addOrRebuild(t) {
          if (t.needsToBeRebuilt()) {
            t.rebuild();
          } else {
            this.add(t);
          }
        }
        addUndoableEditor(t) {
          let e = () => t._uiManager.rebuild(t);
          let r = () => {
            t.remove();
          };
          this.addCommands({
            cmd: e,
            undo: r,
            mustExec: false
          });
        }
        getNextId() {
          return this.#eS.getId();
        }
        #eC(t) {
          switch (this.#eS.getMode()) {
            case i.AnnotationEditorType.FREETEXT:
              return new o.FreeTextEditor(t);
            case i.AnnotationEditorType.INK:
              return new s.InkEditor(t);
            case i.AnnotationEditorType.STAMP:
              return new l.StampEditor(t);
          }
          return null;
        }
        pasteEditor(t, e) {
          this.#eS.updateToolbar(t);
          this.#eS.updateMode(t);
          let {
            offsetX: r,
            offsetY: i
          } = this.#eT();
          let n = this.getNextId();
          let o = this.#eC({
            parent: this,
            id: n,
            x: r,
            y: i,
            uiManager: this.#eS,
            isCentered: true,
            ...e
          });
          if (o) {
            this.add(o);
          }
        }
        deserialize(t) {
          switch (t.annotationType ?? t.annotationEditorType) {
            case i.AnnotationEditorType.FREETEXT:
              return o.FreeTextEditor.deserialize(t, this, this.#eS);
            case i.AnnotationEditorType.INK:
              return s.InkEditor.deserialize(t, this, this.#eS);
            case i.AnnotationEditorType.STAMP:
              return l.StampEditor.deserialize(t, this, this.#eS);
          }
          return null;
        }
        #ew(t, e) {
          let r = this.getNextId();
          let i = this.#eC({
            parent: this,
            id: r,
            x: t.offsetX,
            y: t.offsetY,
            uiManager: this.#eS,
            isCentered: e
          });
          if (i) {
            this.add(i);
          }
          return i;
        }
        #eT() {
          let {
            x: t,
            y: e,
            width: r,
            height: i
          } = this.div.getBoundingClientRect();
          let n = Math.max(0, t);
          let o = Math.max(0, e);
          let s = Math.min(window.innerWidth, t + r);
          let a = Math.min(window.innerHeight, e + i);
          let l = (n + s) / 2 - t;
          let h = (o + a) / 2 - e;
          let [c, u] = this.viewport.rotation % 180 == 0 ? [l, h] : [h, l];
          return {
            offsetX: c,
            offsetY: u
          };
        }
        addNewEditor() {
          this.#ew(this.#eT(), true);
        }
        setSelected(t) {
          this.#eS.setSelected(t);
        }
        toggleSelected(t) {
          this.#eS.toggleSelected(t);
        }
        isSelected(t) {
          return this.#eS.isSelected(t);
        }
        unselect(t) {
          this.#eS.unselect(t);
        }
        pointerup(t) {
          let {
            isMac: e
          } = i.FeatureTest.platform;
          if (t.button === 0 && (!t.ctrlKey || !e) && t.target === this.div && this.#ey) {
            this.#ey = false;
            if (!this.#ef) {
              this.#ef = true;
              return;
            }
            if (this.#eS.getMode() === i.AnnotationEditorType.STAMP) {
              this.#eS.unselectAll();
              return;
            }
            this.#ew(t, false);
          }
        }
        pointerdown(t) {
          if (this.#ey) {
            this.#ey = false;
            return;
          }
          let {
            isMac: e
          } = i.FeatureTest.platform;
          if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div) {
            return;
          }
          this.#ey = true;
          let r = this.#eS.getActive();
          this.#ef = !r || r.isEmpty();
        }
        findNewParent(t, e, r) {
          let i = this.#eS.findParent(e, r);
          return i !== null && i !== this && (i.changeParent(t), true);
        }
        destroy() {
          if (this.#eS.getActive()?.parent === this) {
            this.#eS.commitOrRemove();
            this.#eS.setActiveEditor(null);
          }
          for (let t of this.#ev.values()) {
            this.#ed?.removePointerInTextLayer(t.contentDiv);
            t.setParent(null);
            t.isAttachedToDOM = false;
            t.div.remove();
          }
          this.div = null;
          this.#ev.clear();
          this.#eS.removeLayer(this);
        }
        #ex() {
          this.#eb = true;
          for (let t of this.#ev.values()) {
            if (t.isEmpty()) {
              t.remove();
            }
          }
          this.#eb = false;
        }
        render({
          viewport: t
        }) {
          this.viewport = t;
          a.setLayerDimensions(this.div, t);
          for (let e of this.#eS.getEditors(this.pageIndex)) {
            this.add(e);
          }
          this.updateMode();
        }
        update({
          viewport: t
        }) {
          this.#eS.commitOrRemove();
          this.viewport = t;
          a.setLayerDimensions(this.div, {
            rotation: t.rotation
          });
          this.updateMode();
        }
        get pageDimensions() {
          let {
            pageWidth: t,
            pageHeight: e
          } = this.viewport.rawDims;
          return [t, e];
        }
      }
      e.AnnotationEditorLayer = h;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.FreeTextEditor = undefined;
      var i = r(1);
      var n = r(5);
      var o = r(4);
      var s = r(29);
      class a extends o.AnnotationEditor {
        #eE = this.editorDivBlur.bind(this);
        #eF = this.editorDivFocus.bind(this);
        #ek = this.editorDivInput.bind(this);
        #eP = this.editorDivKeydown.bind(this);
        #eR;
        #eM = "";
        #eO = `${this.id}-editor`;
        #eD;
        #eI = null;
        static _freeTextDefaultContent = "";
        static _internalPadding = 0;
        static _defaultColor = null;
        static _defaultFontSize = 10;
        static get _keyboardManager() {
          let t = a.prototype;
          let e = t => t.isEmpty();
          let r = n.AnnotationEditorUIManager.TRANSLATE_SMALL;
          let o = n.AnnotationEditorUIManager.TRANSLATE_BIG;
          return i.shadow(this, "_keyboardManager", new n.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t.commitOrRemove, {
            bubbles: true
          }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t._translateEmpty, {
            args: [-r, 0],
            checker: e
          }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t._translateEmpty, {
            args: [-o, 0],
            checker: e
          }], [["ArrowRight", "mac+ArrowRight"], t._translateEmpty, {
            args: [r, 0],
            checker: e
          }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t._translateEmpty, {
            args: [o, 0],
            checker: e
          }], [["ArrowUp", "mac+ArrowUp"], t._translateEmpty, {
            args: [0, -r],
            checker: e
          }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t._translateEmpty, {
            args: [0, -o],
            checker: e
          }], [["ArrowDown", "mac+ArrowDown"], t._translateEmpty, {
            args: [0, r],
            checker: e
          }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t._translateEmpty, {
            args: [0, o],
            checker: e
          }]]));
        }
        static _type = "freetext";
        constructor(t) {
          super({
            ...t,
            name: "freeTextEditor"
          });
          this.#eR = t.color || a._defaultColor || o.AnnotationEditor._defaultLineColor;
          this.#eD = t.fontSize || a._defaultFontSize;
        }
        static initialize(t) {
          o.AnnotationEditor.initialize(t, {
            strings: ["free_text2_default_content", "editor_free_text2_aria_label"]
          });
          let e = getComputedStyle(document.documentElement);
          this._internalPadding = parseFloat(e.getPropertyValue("--freetext-padding"));
        }
        static updateDefaultParams(t, e) {
          switch (t) {
            case i.AnnotationEditorParamsType.FREETEXT_SIZE:
              a._defaultFontSize = e;
              break;
            case i.AnnotationEditorParamsType.FREETEXT_COLOR:
              a._defaultColor = e;
          }
        }
        updateParams(t, e) {
          switch (t) {
            case i.AnnotationEditorParamsType.FREETEXT_SIZE:
              this.#eL(e);
              break;
            case i.AnnotationEditorParamsType.FREETEXT_COLOR:
              this.#eN(e);
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[i.AnnotationEditorParamsType.FREETEXT_SIZE, a._defaultFontSize], [i.AnnotationEditorParamsType.FREETEXT_COLOR, a._defaultColor || o.AnnotationEditor._defaultLineColor]];
        }
        get propertiesToUpdate() {
          return [[i.AnnotationEditorParamsType.FREETEXT_SIZE, this.#eD], [i.AnnotationEditorParamsType.FREETEXT_COLOR, this.#eR]];
        }
        #eL(t) {
          let e = t => {
            this.editorDiv.style.fontSize = `calc(${t}px * var(--scale-factor))`;
            this.translate(0, -(t - this.#eD) * this.parentScale);
            this.#eD = t;
            this.#eB();
          };
          let r = this.#eD;
          this.addCommands({
            cmd: () => {
              e(t);
            },
            undo: () => {
              e(r);
            },
            mustExec: true,
            type: i.AnnotationEditorParamsType.FREETEXT_SIZE,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        #eN(t) {
          let e = this.#eR;
          this.addCommands({
            cmd: () => {
              this.#eR = this.editorDiv.style.color = t;
            },
            undo: () => {
              this.#eR = this.editorDiv.style.color = e;
            },
            mustExec: true,
            type: i.AnnotationEditorParamsType.FREETEXT_COLOR,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        _translateEmpty(t, e) {
          this._uiManager.translateSelectedEditors(t, e, true);
        }
        getInitialTranslation() {
          let t = this.parentScale;
          return [-a._internalPadding * t, -(a._internalPadding + this.#eD) * t];
        }
        rebuild() {
          if (this.parent) {
            super.rebuild();
            if (this.div !== null) {
              if (!this.isAttachedToDOM) {
                this.parent.add(this);
              }
            }
          }
        }
        enableEditMode() {
          if (!this.isInEditMode()) {
            this.parent.setEditingState(false);
            this.parent.updateToolbar(i.AnnotationEditorType.FREETEXT);
            super.enableEditMode();
            this.overlayDiv.classList.remove("enabled");
            this.editorDiv.contentEditable = true;
            this._isDraggable = false;
            this.div.removeAttribute("aria-activedescendant");
            this.editorDiv.addEventListener("keydown", this.#eP);
            this.editorDiv.addEventListener("focus", this.#eF);
            this.editorDiv.addEventListener("blur", this.#eE);
            this.editorDiv.addEventListener("input", this.#ek);
          }
        }
        disableEditMode() {
          if (this.isInEditMode()) {
            this.parent.setEditingState(true);
            super.disableEditMode();
            this.overlayDiv.classList.add("enabled");
            this.editorDiv.contentEditable = false;
            this.div.setAttribute("aria-activedescendant", this.#eO);
            this._isDraggable = true;
            this.editorDiv.removeEventListener("keydown", this.#eP);
            this.editorDiv.removeEventListener("focus", this.#eF);
            this.editorDiv.removeEventListener("blur", this.#eE);
            this.editorDiv.removeEventListener("input", this.#ek);
            this.div.focus({
              preventScroll: true
            });
            this.isEditing = false;
            this.parent.div.classList.add("freeTextEditing");
          }
        }
        focusin(t) {
          if (this._focusEventsAllowed) {
            super.focusin(t);
            if (t.target !== this.editorDiv) {
              this.editorDiv.focus();
            }
          }
        }
        onceAdded() {
          if (this.width) {
            this.#ej();
            return;
          }
          this.enableEditMode();
          this.editorDiv.focus();
          if (this._initialOptions?.isCentered) {
            this.center();
          }
          this._initialOptions = null;
        }
        isEmpty() {
          return !this.editorDiv || this.editorDiv.innerText.trim() === "";
        }
        remove() {
          this.isEditing = false;
          if (this.parent) {
            this.parent.setEditingState(true);
            this.parent.div.classList.add("freeTextEditing");
          }
          super.remove();
        }
        #e_() {
          let t = this.editorDiv.getElementsByTagName("div");
          if (t.length === 0) {
            return this.editorDiv.innerText;
          }
          let e = [];
          for (let r of t) {
            e.push(r.innerText.replace(/\r\n?|\n/, ""));
          }
          return e.join("\n");
        }
        #eB() {
          let t;
          let [e, r] = this.parentDimensions;
          if (this.isAttachedToDOM) {
            t = this.div.getBoundingClientRect();
          } else {
            let {
              currentLayer: e,
              div: r
            } = this;
            let i = r.style.display;
            r.style.display = "hidden";
            e.div.append(this.div);
            t = r.getBoundingClientRect();
            r.remove();
            r.style.display = i;
          }
          if (this.rotation % 180 == this.parentRotation % 180) {
            this.width = t.width / e;
            this.height = t.height / r;
          } else {
            this.width = t.height / e;
            this.height = t.width / r;
          }
          this.fixAndSetPosition();
        }
        commit() {
          if (!this.isInEditMode()) {
            return;
          }
          super.commit();
          this.disableEditMode();
          let t = this.#eM;
          let e = this.#eM = this.#e_().trimEnd();
          if (t === e) {
            return;
          }
          let r = t => {
            this.#eM = t;
            if (!t) {
              this.remove();
              return;
            }
            this.#eU();
            this._uiManager.rebuild(this);
            this.#eB();
          };
          this.addCommands({
            cmd: () => {
              r(e);
            },
            undo: () => {
              r(t);
            },
            mustExec: false
          });
          this.#eB();
        }
        shouldGetKeyboardEvents() {
          return this.isInEditMode();
        }
        enterInEditMode() {
          this.enableEditMode();
          this.editorDiv.focus();
        }
        dblclick(t) {
          this.enterInEditMode();
        }
        keydown(t) {
          if (t.target === this.div && t.key === "Enter") {
            this.enterInEditMode();
            t.preventDefault();
          }
        }
        editorDivKeydown(t) {
          a._keyboardManager.exec(this, t);
        }
        editorDivFocus(t) {
          this.isEditing = true;
        }
        editorDivBlur(t) {
          this.isEditing = false;
        }
        editorDivInput(t) {
          this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
        }
        disableEditing() {
          this.editorDiv.setAttribute("role", "comment");
          this.editorDiv.removeAttribute("aria-multiline");
        }
        enableEditing() {
          this.editorDiv.setAttribute("role", "textbox");
          this.editorDiv.setAttribute("aria-multiline", true);
        }
        render() {
          let t;
          let e;
          if (this.div) {
            return this.div;
          }
          if (this.width) {
            t = this.x;
            e = this.y;
          }
          super.render();
          this.editorDiv = document.createElement("div");
          this.editorDiv.className = "internal";
          this.editorDiv.setAttribute("id", this.#eO);
          this.enableEditing();
          o.AnnotationEditor._l10nPromise.get("editor_free_text2_aria_label").then(t => this.editorDiv?.setAttribute("aria-label", t));
          o.AnnotationEditor._l10nPromise.get("free_text2_default_content").then(t => this.editorDiv?.setAttribute("default-content", t));
          this.editorDiv.contentEditable = true;
          let {
            style: r
          } = this.editorDiv;
          r.fontSize = `calc(${this.#eD}px * var(--scale-factor))`;
          r.color = this.#eR;
          this.div.append(this.editorDiv);
          this.overlayDiv = document.createElement("div");
          this.overlayDiv.classList.add("overlay", "enabled");
          this.div.append(this.overlayDiv);
          n.bindEvents(this, this.div, ["dblclick", "keydown"]);
          if (this.width) {
            let [r, i] = this.parentDimensions;
            if (this.annotationElementId) {
              let n;
              let o;
              let {
                position: s
              } = this.#eI;
              let [a, l] = this.getInitialTranslation();
              [a, l] = this.pageTranslationToScreen(a, l);
              let [h, c] = this.pageDimensions;
              let [u, d] = this.pageTranslation;
              switch (this.rotation) {
                case 0:
                  n = t + (s[0] - u) / h;
                  o = e + this.height - (s[1] - d) / c;
                  break;
                case 90:
                  n = t + (s[0] - u) / h;
                  o = e - (s[1] - d) / c;
                  [a, l] = [l, -a];
                  break;
                case 180:
                  n = t - this.width + (s[0] - u) / h;
                  o = e - (s[1] - d) / c;
                  [a, l] = [-a, -l];
                  break;
                case 270:
                  n = t + (s[0] - u - this.height * c) / h;
                  o = e + (s[1] - d - this.width * h) / c;
                  [a, l] = [-l, a];
              }
              this.setAt(n * r, o * i, a, l);
            } else {
              this.setAt(t * r, e * i, this.width * r, this.height * i);
            }
            this.#eU();
            this._isDraggable = true;
            this.editorDiv.contentEditable = false;
          } else {
            this._isDraggable = false;
            this.editorDiv.contentEditable = true;
          }
          return this.div;
        }
        #eU() {
          this.editorDiv.replaceChildren();
          if (this.#eM) {
            for (let t of this.#eM.split("\n")) {
              let e = document.createElement("div");
              e.append(t ? document.createTextNode(t) : document.createElement("br"));
              this.editorDiv.append(e);
            }
          }
        }
        get contentDiv() {
          return this.editorDiv;
        }
        static deserialize(t, e, r) {
          let n = null;
          if (t instanceof s.FreeTextAnnotationElement) {
            let {
              data: {
                defaultAppearanceData: {
                  fontSize: e,
                  fontColor: r
                },
                rect: o,
                rotation: s,
                id: a
              },
              textContent: l,
              textPosition: h,
              parent: {
                page: {
                  pageNumber: c
                }
              }
            } = t;
            if (!l || l.length === 0) {
              return null;
            }
            n = t = {
              annotationType: i.AnnotationEditorType.FREETEXT,
              color: Array.from(r),
              fontSize: e,
              value: l.join("\n"),
              position: h,
              pageIndex: c - 1,
              rect: o,
              rotation: s,
              id: a,
              deleted: false
            };
          }
          let o = super.deserialize(t, e, r);
          o.#eD = t.fontSize;
          o.#eR = i.Util.makeHexColor(...t.color);
          o.#eM = t.value;
          o.annotationElementId = t.id || null;
          o.#eI = n;
          return o;
        }
        serialize(t = false) {
          if (this.isEmpty()) {
            return null;
          }
          if (this.deleted) {
            return {
              pageIndex: this.pageIndex,
              id: this.annotationElementId,
              deleted: true
            };
          }
          let e = a._internalPadding * this.parentScale;
          let r = this.getRect(e, e);
          let n = o.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#eR);
          let s = {
            annotationType: i.AnnotationEditorType.FREETEXT,
            color: n,
            fontSize: this.#eD,
            value: this.#eM,
            pageIndex: this.pageIndex,
            rect: r,
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId
          };
          if (t) {
            return s;
          } else if (this.annotationElementId && !this.#ez(s)) {
            return null;
          } else {
            s.id = this.annotationElementId;
            return s;
          }
        }
        #ez(t) {
          let {
            value: e,
            fontSize: r,
            color: i,
            rect: n,
            pageIndex: o
          } = this.#eI;
          return t.value !== e || t.fontSize !== r || t.rect.some((t, e) => Math.abs(t - n[e]) >= 1) || t.color.some((t, e) => t !== i[e]) || t.pageIndex !== o;
        }
        #ej(t = false) {
          if (!this.annotationElementId) {
            return;
          }
          this.#eB();
          if (!t && (this.width === 0 || this.height === 0)) {
            setTimeout(() => this.#ej(true), 0);
            return;
          }
          let e = a._internalPadding * this.parentScale;
          this.#eI.rect = this.getRect(e, e);
        }
      }
      e.FreeTextEditor = a;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.StampAnnotationElement = e.InkAnnotationElement = e.FreeTextAnnotationElement = e.AnnotationLayer = undefined;
      var i = r(1);
      var n = r(6);
      var o = r(3);
      var s = r(30);
      var a = r(31);
      var l = r(32);
      let h = 1000;
      let c = 9;
      let u = new WeakSet();
      function d(t) {
        return {
          width: t[2] - t[0],
          height: t[3] - t[1]
        };
      }
      class f {
        static create(t) {
          switch (t.data.annotationType) {
            case i.AnnotationType.LINK:
              return new g(t);
            case i.AnnotationType.TEXT:
              return new m(t);
            case i.AnnotationType.WIDGET:
              switch (t.data.fieldType) {
                case "Tx":
                  return new y(t);
                case "Btn":
                  if (t.data.radioButton) {
                    return new S(t);
                  }
                  if (t.data.checkBox) {
                    return new A(t);
                  }
                  return new x(t);
                case "Ch":
                  return new w(t);
                case "Sig":
                  return new b(t);
              }
              return new v(t);
            case i.AnnotationType.POPUP:
              return new C(t);
            case i.AnnotationType.FREETEXT:
              return new E(t);
            case i.AnnotationType.LINE:
              return new F(t);
            case i.AnnotationType.SQUARE:
              return new k(t);
            case i.AnnotationType.CIRCLE:
              return new P(t);
            case i.AnnotationType.POLYLINE:
              return new R(t);
            case i.AnnotationType.CARET:
              return new O(t);
            case i.AnnotationType.INK:
              return new D(t);
            case i.AnnotationType.POLYGON:
              return new M(t);
            case i.AnnotationType.HIGHLIGHT:
              return new I(t);
            case i.AnnotationType.UNDERLINE:
              return new L(t);
            case i.AnnotationType.SQUIGGLY:
              return new N(t);
            case i.AnnotationType.STRIKEOUT:
              return new B(t);
            case i.AnnotationType.STAMP:
              return new j(t);
            case i.AnnotationType.FILEATTACHMENT:
              return new _(t);
            default:
              return new p(t);
          }
        }
      }
      class p {
        #eV = false;
        constructor(t, {
          isRenderable: e = false,
          ignoreBorder: r = false,
          createQuadrilaterals: i = false
        } = {}) {
          this.isRenderable = e;
          this.data = t.data;
          this.layer = t.layer;
          this.linkService = t.linkService;
          this.downloadManager = t.downloadManager;
          this.imageResourcesPath = t.imageResourcesPath;
          this.renderForms = t.renderForms;
          this.svgFactory = t.svgFactory;
          this.annotationStorage = t.annotationStorage;
          this.enableScripting = t.enableScripting;
          this.hasJSActions = t.hasJSActions;
          this._fieldObjects = t.fieldObjects;
          this.parent = t.parent;
          if (e) {
            this.container = this._createContainer(r);
          }
          if (i) {
            this._createQuadrilaterals();
          }
        }
        static _hasPopupData({
          titleObj: t,
          contentsObj: e,
          richText: r
        }) {
          return !!t?.str || !!e?.str || !!r?.str;
        }
        get hasPopupData() {
          return p._hasPopupData(this.data);
        }
        _createContainer(t) {
          let {
            data: e,
            parent: {
              page: r,
              viewport: n
            }
          } = this;
          let o = document.createElement("section");
          o.setAttribute("data-annotation-id", e.id);
          if (!(this instanceof v)) {
            o.tabIndex = h;
          }
          o.style.zIndex = this.parent.zIndex++;
          if (this.data.popupRef) {
            o.setAttribute("aria-haspopup", "dialog");
          }
          if (e.noRotate) {
            o.classList.add("norotate");
          }
          let {
            pageWidth: s,
            pageHeight: a,
            pageX: l,
            pageY: c
          } = n.rawDims;
          if (!e.rect || this instanceof C) {
            let {
              rotation: t
            } = e;
            if (!e.hasOwnCanvas && t !== 0) {
              this.setRotation(t, o);
            }
            return o;
          }
          let {
            width: u,
            height: f
          } = d(e.rect);
          let p = i.Util.normalizeRect([e.rect[0], r.view[3] - e.rect[1] + r.view[1], e.rect[2], r.view[3] - e.rect[3] + r.view[1]]);
          if (!t && e.borderStyle.width > 0) {
            o.style.borderWidth = `${e.borderStyle.width}px`;
            let t = e.borderStyle.horizontalCornerRadius;
            let r = e.borderStyle.verticalCornerRadius;
            if (t > 0 || r > 0) {
              let e = `calc(${t}px * var(--scale-factor)) / calc(${r}px * var(--scale-factor))`;
              o.style.borderRadius = e;
            } else if (this instanceof S) {
              let t = `calc(${u}px * var(--scale-factor)) / calc(${f}px * var(--scale-factor))`;
              o.style.borderRadius = t;
            }
            switch (e.borderStyle.style) {
              case i.AnnotationBorderStyleType.SOLID:
                o.style.borderStyle = "solid";
                break;
              case i.AnnotationBorderStyleType.DASHED:
                o.style.borderStyle = "dashed";
                break;
              case i.AnnotationBorderStyleType.BEVELED:
                i.warn("Unimplemented border style: beveled");
                break;
              case i.AnnotationBorderStyleType.INSET:
                i.warn("Unimplemented border style: inset");
                break;
              case i.AnnotationBorderStyleType.UNDERLINE:
                o.style.borderBottomStyle = "solid";
            }
            let n = e.borderColor || null;
            if (n) {
              this.#eV = true;
              o.style.borderColor = i.Util.makeHexColor(n[0] | 0, n[1] | 0, n[2] | 0);
            } else {
              o.style.borderWidth = 0;
            }
          }
          o.style.left = `${(p[0] - l) * 100 / s}%`;
          o.style.top = `${(p[1] - c) * 100 / a}%`;
          let {
            rotation: g
          } = e;
          if (e.hasOwnCanvas || g === 0) {
            o.style.width = `${u * 100 / s}%`;
            o.style.height = `${f * 100 / a}%`;
          } else {
            this.setRotation(g, o);
          }
          return o;
        }
        setRotation(t, e = this.container) {
          let r;
          let i;
          if (!this.data.rect) {
            return;
          }
          let {
            pageWidth: n,
            pageHeight: o
          } = this.parent.viewport.rawDims;
          let {
            width: s,
            height: a
          } = d(this.data.rect);
          if (t % 180 == 0) {
            r = s * 100 / n;
            i = a * 100 / o;
          } else {
            r = a * 100 / n;
            i = s * 100 / o;
          }
          e.style.width = `${r}%`;
          e.style.height = `${i}%`;
          e.setAttribute("data-main-rotation", (360 - t) % 360);
        }
        get _commonActions() {
          let t = (t, e, r) => {
            let i = r.detail[t];
            let n = i[0];
            let o = i.slice(1);
            r.target.style[e] = s.ColorConverters[`${n}_HTML`](o);
            this.annotationStorage.setValue(this.data.id, {
              [e]: s.ColorConverters[`${n}_rgb`](o)
            });
          };
          return i.shadow(this, "_commonActions", {
            display: t => {
              let {
                display: e
              } = t.detail;
              let r = e % 2 == 1;
              this.container.style.visibility = r ? "hidden" : "visible";
              this.annotationStorage.setValue(this.data.id, {
                noView: r,
                noPrint: e === 1 || e === 2
              });
            },
            print: t => {
              this.annotationStorage.setValue(this.data.id, {
                noPrint: !t.detail.print
              });
            },
            hidden: t => {
              let {
                hidden: e
              } = t.detail;
              this.container.style.visibility = e ? "hidden" : "visible";
              this.annotationStorage.setValue(this.data.id, {
                noPrint: e,
                noView: e
              });
            },
            focus: t => {
              setTimeout(() => t.target.focus({
                preventScroll: false
              }), 0);
            },
            userName: t => {
              t.target.title = t.detail.userName;
            },
            readonly: t => {
              t.target.disabled = t.detail.readonly;
            },
            required: t => {
              this._setRequired(t.target, t.detail.required);
            },
            bgColor: e => {
              t("bgColor", "backgroundColor", e);
            },
            fillColor: e => {
              t("fillColor", "backgroundColor", e);
            },
            fgColor: e => {
              t("fgColor", "color", e);
            },
            textColor: e => {
              t("textColor", "color", e);
            },
            borderColor: e => {
              t("borderColor", "borderColor", e);
            },
            strokeColor: e => {
              t("strokeColor", "borderColor", e);
            },
            rotation: t => {
              let e = t.detail.rotation;
              this.setRotation(e);
              this.annotationStorage.setValue(this.data.id, {
                rotation: e
              });
            }
          });
        }
        _dispatchEventFromSandbox(t, e) {
          let r = this._commonActions;
          for (let i of Object.keys(e.detail)) {
            let n = t[i] || r[i];
            n?.(e);
          }
        }
        _setDefaultPropertiesFromJS(t) {
          if (!this.enableScripting) {
            return;
          }
          let e = this.annotationStorage.getRawValue(this.data.id);
          if (!e) {
            return;
          }
          let r = this._commonActions;
          for (let [i, n] of Object.entries(e)) {
            let o = r[i];
            if (o) {
              o({
                detail: {
                  [i]: n
                },
                target: t
              });
              delete e[i];
            }
          }
        }
        _createQuadrilaterals() {
          let t;
          if (!this.container) {
            return;
          }
          let {
            quadPoints: e
          } = this.data;
          if (!e) {
            return;
          }
          let [r, i, n, o] = this.data.rect;
          if (e.length === 1) {
            let [, {
              x: t,
              y: s
            }, {
              x: a,
              y: l
            }] = e[0];
            if (n === t && o === s && r === a && i === l) {
              return;
            }
          }
          let {
            style: s
          } = this.container;
          if (this.#eV) {
            let {
              borderColor: e,
              borderWidth: r
            } = s;
            s.borderWidth = 0;
            t = ["url('data:image/svg+xml;utf8,", "<svg xmlns=\"http://www.w3.org/2000/svg\"", " preserveAspectRatio=\"none\" viewBox=\"0 0 1 1\">", `<g fill="transparent" stroke="${e}" stroke-width="${r}">`];
            this.container.classList.add("hasBorder");
          }
          let a = n - r;
          let l = o - i;
          let {
            svgFactory: h
          } = this;
          let c = h.createElement("svg");
          c.classList.add("quadrilateralsContainer");
          c.setAttribute("width", 0);
          c.setAttribute("height", 0);
          let u = h.createElement("defs");
          c.append(u);
          let d = h.createElement("clipPath");
          let f = `clippath_${this.data.id}`;
          d.setAttribute("id", f);
          d.setAttribute("clipPathUnits", "objectBoundingBox");
          u.append(d);
          for (let [, {
            x: i,
            y: n
          }, {
            x: s,
            y: c
          }] of e) {
            let e = h.createElement("rect");
            let u = (s - r) / a;
            let f = (o - n) / l;
            let p = (i - s) / a;
            let g = (n - c) / l;
            e.setAttribute("x", u);
            e.setAttribute("y", f);
            e.setAttribute("width", p);
            e.setAttribute("height", g);
            d.append(e);
            t?.push(`<rect vector-effect="non-scaling-stroke" x="${u}" y="${f}" width="${p}" height="${g}"/>`);
          }
          if (this.#eV) {
            t.push("</g></svg>')");
            s.backgroundImage = t.join("");
          }
          this.container.append(c);
          this.container.style.clipPath = `url(#${f})`;
        }
        _createPopup() {
          let {
            container: t,
            data: e
          } = this;
          t.setAttribute("aria-haspopup", "dialog");
          let r = new C({
            data: {
              color: e.color,
              titleObj: e.titleObj,
              modificationDate: e.modificationDate,
              contentsObj: e.contentsObj,
              richText: e.richText,
              parentRect: e.rect,
              borderStyle: 0,
              id: `popup_${e.id}`,
              rotation: e.rotation
            },
            parent: this.parent,
            elements: [this]
          });
          this.parent.div.append(r.render());
        }
        render() {
          i.unreachable("Abstract method `AnnotationElement.render` called");
        }
        _getElementsByName(t, e = null) {
          let r = [];
          if (this._fieldObjects) {
            let n = this._fieldObjects[t];
            if (n) {
              for (let {
                page: t,
                id: o,
                exportValues: s
              } of n) {
                if (t === -1 || o === e) {
                  continue;
                }
                let n = typeof s == "string" ? s : null;
                let a = document.querySelector(`[data-element-id="${o}"]`);
                if (a && !u.has(a)) {
                  i.warn(`_getElementsByName - element not allowed: ${o}`);
                  continue;
                }
                r.push({
                  id: o,
                  exportValue: n,
                  domElement: a
                });
              }
            }
            return r;
          }
          for (let i of document.getElementsByName(t)) {
            let {
              exportValue: t
            } = i;
            let n = i.getAttribute("data-element-id");
            if (n !== e && u.has(i)) {
              r.push({
                id: n,
                exportValue: t,
                domElement: i
              });
            }
          }
          return r;
        }
        show() {
          if (this.container) {
            this.container.hidden = false;
          }
          this.popup?.maybeShow();
        }
        hide() {
          if (this.container) {
            this.container.hidden = true;
          }
          this.popup?.forceHide();
        }
        getElementsToTriggerPopup() {
          return this.container;
        }
        addHighlightArea() {
          let t = this.getElementsToTriggerPopup();
          if (Array.isArray(t)) {
            for (let e of t) {
              e.classList.add("highlightArea");
            }
          } else {
            t.classList.add("highlightArea");
          }
        }
        _editOnDoubleClick() {
          let {
            annotationEditorType: t,
            data: {
              id: e
            }
          } = this;
          this.container.addEventListener("dblclick", () => {
            this.linkService.eventBus?.dispatch("switchannotationeditormode", {
              source: this,
              mode: t,
              editId: e
            });
          });
        }
      }
      class g extends p {
        constructor(t, e = null) {
          super(t, {
            isRenderable: true,
            ignoreBorder: !!e?.ignoreBorder,
            createQuadrilaterals: true
          });
          this.isTooltipOnly = t.data.isTooltipOnly;
        }
        render() {
          let {
            data: t,
            linkService: e
          } = this;
          let r = document.createElement("a");
          r.setAttribute("data-element-id", t.id);
          let i = false;
          if (t.url) {
            e.addLinkAttributes(r, t.url, t.newWindow);
            i = true;
          } else if (t.action) {
            this._bindNamedAction(r, t.action);
            i = true;
          } else if (t.attachment) {
            this._bindAttachment(r, t.attachment);
            i = true;
          } else if (t.setOCGState) {
            this.#eW(r, t.setOCGState);
            i = true;
          } else if (t.dest) {
            this._bindLink(r, t.dest);
            i = true;
          } else {
            if (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
              this._bindJSAction(r, t);
              i = true;
            }
            if (t.resetForm) {
              this._bindResetFormAction(r, t.resetForm);
              i = true;
            } else if (this.isTooltipOnly && !i) {
              this._bindLink(r, "");
              i = true;
            }
          }
          this.container.classList.add("linkAnnotation");
          if (i) {
            this.container.append(r);
          }
          return this.container;
        }
        #eG() {
          this.container.setAttribute("data-internal-link", "");
        }
        _bindLink(t, e) {
          t.href = this.linkService.getDestinationHash(e);
          t.onclick = () => {
            if (e) {
              this.linkService.goToDestination(e);
            }
            return false;
          };
          if (e || e === "") {
            this.#eG();
          }
        }
        _bindNamedAction(t, e) {
          t.href = this.linkService.getAnchorUrl("");
          t.onclick = () => {
            this.linkService.executeNamedAction(e);
            return false;
          };
          this.#eG();
        }
        _bindAttachment(t, e) {
          t.href = this.linkService.getAnchorUrl("");
          t.onclick = () => {
            this.downloadManager?.openOrDownloadData(this.container, e.content, e.filename);
            return false;
          };
          this.#eG();
        }
        #eW(t, e) {
          t.href = this.linkService.getAnchorUrl("");
          t.onclick = () => {
            this.linkService.executeSetOCGState(e);
            return false;
          };
          this.#eG();
        }
        _bindJSAction(t, e) {
          t.href = this.linkService.getAnchorUrl("");
          let r = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
          for (let i of Object.keys(e.actions)) {
            let n = r.get(i);
            if (n) {
              t[n] = () => {
                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: e.id,
                    name: i
                  }
                });
                return false;
              };
            }
          }
          t.onclick ||= () => false;
          this.#eG();
        }
        _bindResetFormAction(t, e) {
          let r = t.onclick;
          if (!r) {
            t.href = this.linkService.getAnchorUrl("");
          }
          this.#eG();
          if (!this._fieldObjects) {
            i.warn("_bindResetFormAction - \"resetForm\" action not supported, ensure that the `fieldObjects` parameter is provided.");
            if (!r) {
              t.onclick = () => false;
            }
            return;
          }
          t.onclick = () => {
            r?.();
            let {
              fields: t,
              refs: n,
              include: o
            } = e;
            let s = [];
            if (t.length !== 0 || n.length !== 0) {
              let e = new Set(n);
              for (let r of t) {
                for (let {
                  id: t
                } of this._fieldObjects[r] || []) {
                  e.add(t);
                }
              }
              for (let t of Object.values(this._fieldObjects)) {
                for (let r of t) {
                  if (e.has(r.id) === o) {
                    s.push(r);
                  }
                }
              }
            } else {
              for (let t of Object.values(this._fieldObjects)) {
                s.push(...t);
              }
            }
            let a = this.annotationStorage;
            let l = [];
            for (let t of s) {
              let {
                id: e
              } = t;
              l.push(e);
              switch (t.type) {
                case "text":
                  {
                    let r = t.defaultValue || "";
                    a.setValue(e, {
                      value: r
                    });
                    break;
                  }
                case "checkbox":
                case "radiobutton":
                  {
                    let r = t.defaultValue === t.exportValues;
                    a.setValue(e, {
                      value: r
                    });
                    break;
                  }
                case "combobox":
                case "listbox":
                  {
                    let r = t.defaultValue || "";
                    a.setValue(e, {
                      value: r
                    });
                    break;
                  }
                default:
                  continue;
              }
              let r = document.querySelector(`[data-element-id="${e}"]`);
              if (r) {
                if (!u.has(r)) {
                  i.warn(`_bindResetFormAction - element not allowed: ${e}`);
                  continue;
                }
                r.dispatchEvent(new Event("resetform"));
              }
            }
            if (this.enableScripting) {
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: "app",
                  ids: l,
                  name: "ResetForm"
                }
              });
            }
            return false;
          };
        }
      }
      class m extends p {
        constructor(t) {
          super(t, {
            isRenderable: true
          });
        }
        render() {
          this.container.classList.add("textAnnotation");
          let t = document.createElement("img");
          t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
          t.alt = "[{{type}} Annotation]";
          t.dataset.l10nId = "text_annotation_type";
          t.dataset.l10nArgs = JSON.stringify({
            type: this.data.name
          });
          if (!this.data.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          this.container.append(t);
          return this.container;
        }
      }
      class v extends p {
        render() {
          if (this.data.alternativeText) {
            this.container.title = this.data.alternativeText;
          }
          return this.container;
        }
        showElementAndHideCanvas(t) {
          if (this.data.hasOwnCanvas) {
            if (t.previousSibling?.nodeName === "CANVAS") {
              t.previousSibling.hidden = true;
            }
            t.hidden = false;
          }
        }
        _getKeyModifier(t) {
          let {
            isWin: e,
            isMac: r
          } = i.FeatureTest.platform;
          return e && t.ctrlKey || r && t.metaKey;
        }
        _setEventListener(t, e, r, i, n) {
          if (r.includes("mouse")) {
            t.addEventListener(r, t => {
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: this.data.id,
                  name: i,
                  value: n(t),
                  shift: t.shiftKey,
                  modifier: this._getKeyModifier(t)
                }
              });
            });
          } else {
            t.addEventListener(r, t => {
              if (r === "blur") {
                if (!e.focused || !t.relatedTarget) {
                  return;
                }
                e.focused = false;
              } else if (r === "focus") {
                if (e.focused) {
                  return;
                }
                e.focused = true;
              }
              if (n) {
                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: this.data.id,
                    name: i,
                    value: n(t)
                  }
                });
              }
            });
          }
        }
        _setEventListeners(t, e, r, i) {
          for (let [n, o] of r) {
            if (o === "Action" || this.data.actions?.[o]) {
              if (o === "Focus" || o === "Blur") {
                e ||= {
                  focused: false
                };
              }
              this._setEventListener(t, e, n, o, i);
              if (o !== "Focus" || this.data.actions?.Blur) {
                if (o === "Blur" && !this.data.actions?.Focus) {
                  this._setEventListener(t, e, "focus", "Focus", null);
                }
              } else {
                this._setEventListener(t, e, "blur", "Blur", null);
              }
            }
          }
        }
        _setBackgroundColor(t) {
          let e = this.data.backgroundColor || null;
          t.style.backgroundColor = e === null ? "transparent" : i.Util.makeHexColor(e[0], e[1], e[2]);
        }
        _setTextStyle(t) {
          let e;
          let r = ["left", "center", "right"];
          let {
            fontColor: n
          } = this.data.defaultAppearanceData;
          let o = this.data.defaultAppearanceData.fontSize || c;
          let s = t.style;
          let a = 2;
          let l = t => Math.round(t * 10) / 10;
          if (this.data.multiLine) {
            let t = Math.abs(this.data.rect[3] - this.data.rect[1] - a);
            let r = Math.round(t / (i.LINE_FACTOR * o)) || 1;
            e = Math.min(o, l(t / r / i.LINE_FACTOR));
          } else {
            e = Math.min(o, l(Math.abs(this.data.rect[3] - this.data.rect[1] - a) / i.LINE_FACTOR));
          }
          s.fontSize = `calc(${e}px * var(--scale-factor))`;
          s.color = i.Util.makeHexColor(n[0], n[1], n[2]);
          if (this.data.textAlignment !== null) {
            s.textAlign = r[this.data.textAlignment];
          }
        }
        _setRequired(t, e) {
          if (e) {
            t.setAttribute("required", true);
          } else {
            t.removeAttribute("required");
          }
          t.setAttribute("aria-required", e);
        }
      }
      class y extends v {
        constructor(t) {
          super(t, {
            isRenderable: t.renderForms || !t.data.hasAppearance && !!t.data.fieldValue
          });
        }
        setPropertyOnSiblings(t, e, r, i) {
          let n = this.annotationStorage;
          for (let o of this._getElementsByName(t.name, t.id)) {
            if (o.domElement) {
              o.domElement[e] = r;
            }
            n.setValue(o.id, {
              [i]: r
            });
          }
        }
        render() {
          let t = this.annotationStorage;
          let e = this.data.id;
          this.container.classList.add("textWidgetAnnotation");
          let r = null;
          if (this.renderForms) {
            let i = t.getValue(e, {
              value: this.data.fieldValue
            });
            let n = i.value || "";
            let o = t.getValue(e, {
              charLimit: this.data.maxLen
            }).charLimit;
            if (o && n.length > o) {
              n = n.slice(0, o);
            }
            let s = i.formattedValue || this.data.textContent?.join("\n") || null;
            if (s && this.data.comb) {
              s = s.replaceAll(/\s+/g, "");
            }
            let a = {
              userValue: n,
              formattedValue: s,
              lastCommittedValue: null,
              commitKey: 1,
              focused: false
            };
            if (this.data.multiLine) {
              (r = document.createElement("textarea")).textContent = s ?? n;
              if (this.data.doNotScroll) {
                r.style.overflowY = "hidden";
              }
            } else {
              (r = document.createElement("input")).type = "text";
              r.setAttribute("value", s ?? n);
              if (this.data.doNotScroll) {
                r.style.overflowX = "hidden";
              }
            }
            if (this.data.hasOwnCanvas) {
              r.hidden = true;
            }
            u.add(r);
            r.setAttribute("data-element-id", e);
            r.disabled = this.data.readOnly;
            r.name = this.data.fieldName;
            r.tabIndex = h;
            this._setRequired(r, this.data.required);
            if (o) {
              r.maxLength = o;
            }
            r.addEventListener("input", i => {
              t.setValue(e, {
                value: i.target.value
              });
              this.setPropertyOnSiblings(r, "value", i.target.value, "value");
              a.formattedValue = null;
            });
            r.addEventListener("resetform", t => {
              let e = this.data.defaultFieldValue ?? "";
              r.value = a.userValue = e;
              a.formattedValue = null;
            });
            let l = t => {
              let {
                formattedValue: e
              } = a;
              if (e != null) {
                t.target.value = e;
              }
              t.target.scrollLeft = 0;
            };
            if (this.enableScripting && this.hasJSActions) {
              r.addEventListener("focus", t => {
                if (a.focused) {
                  return;
                }
                let {
                  target: e
                } = t;
                if (a.userValue) {
                  e.value = a.userValue;
                }
                a.lastCommittedValue = e.value;
                a.commitKey = 1;
                a.focused = true;
              });
              r.addEventListener("updatefromsandbox", r => {
                this.showElementAndHideCanvas(r.target);
                let i = {
                  value(r) {
                    a.userValue = r.detail.value ?? "";
                    t.setValue(e, {
                      value: a.userValue.toString()
                    });
                    r.target.value = a.userValue;
                  },
                  formattedValue(r) {
                    let {
                      formattedValue: i
                    } = r.detail;
                    a.formattedValue = i;
                    if (i != null && r.target !== document.activeElement) {
                      r.target.value = i;
                    }
                    t.setValue(e, {
                      formattedValue: i
                    });
                  },
                  selRange(t) {
                    t.target.setSelectionRange(...t.detail.selRange);
                  },
                  charLimit: r => {
                    let {
                      charLimit: i
                    } = r.detail;
                    let {
                      target: n
                    } = r;
                    if (i === 0) {
                      n.removeAttribute("maxLength");
                      return;
                    }
                    n.setAttribute("maxLength", i);
                    let o = a.userValue;
                    if (o && !(o.length <= i)) {
                      o = o.slice(0, i);
                      n.value = a.userValue = o;
                      t.setValue(e, {
                        value: o
                      });
                      this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: e,
                          name: "Keystroke",
                          value: o,
                          willCommit: true,
                          commitKey: 1,
                          selStart: n.selectionStart,
                          selEnd: n.selectionEnd
                        }
                      });
                    }
                  }
                };
                this._dispatchEventFromSandbox(i, r);
              });
              r.addEventListener("keydown", t => {
                a.commitKey = 1;
                let r = -1;
                if (t.key === "Escape") {
                  r = 0;
                } else if (t.key !== "Enter" || this.data.multiLine) {
                  if (t.key === "Tab") {
                    a.commitKey = 3;
                  }
                } else {
                  r = 2;
                }
                if (r === -1) {
                  return;
                }
                let {
                  value: i
                } = t.target;
                if (a.lastCommittedValue !== i) {
                  a.lastCommittedValue = i;
                  a.userValue = i;
                  this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: e,
                      name: "Keystroke",
                      value: i,
                      willCommit: true,
                      commitKey: r,
                      selStart: t.target.selectionStart,
                      selEnd: t.target.selectionEnd
                    }
                  });
                }
              });
              let i = l;
              l = null;
              r.addEventListener("blur", t => {
                if (!a.focused || !t.relatedTarget) {
                  return;
                }
                a.focused = false;
                let {
                  value: r
                } = t.target;
                a.userValue = r;
                if (a.lastCommittedValue !== r) {
                  this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: e,
                      name: "Keystroke",
                      value: r,
                      willCommit: true,
                      commitKey: a.commitKey,
                      selStart: t.target.selectionStart,
                      selEnd: t.target.selectionEnd
                    }
                  });
                }
                i(t);
              });
              if (this.data.actions?.Keystroke) {
                r.addEventListener("beforeinput", t => {
                  a.lastCommittedValue = null;
                  let {
                    data: r,
                    target: i
                  } = t;
                  let {
                    value: n,
                    selectionStart: o,
                    selectionEnd: s
                  } = i;
                  let l = o;
                  let h = s;
                  switch (t.inputType) {
                    case "deleteWordBackward":
                      {
                        let t = n.substring(0, o).match(/\w*[^\w]*$/);
                        if (t) {
                          l -= t[0].length;
                        }
                        break;
                      }
                    case "deleteWordForward":
                      {
                        let t = n.substring(o).match(/^[^\w]*\w*/);
                        if (t) {
                          h += t[0].length;
                        }
                        break;
                      }
                    case "deleteContentBackward":
                      if (o === s) {
                        l -= 1;
                      }
                      break;
                    case "deleteContentForward":
                      if (o === s) {
                        h += 1;
                      }
                  }
                  t.preventDefault();
                  this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: e,
                      name: "Keystroke",
                      value: n,
                      change: r || "",
                      willCommit: false,
                      selStart: l,
                      selEnd: h
                    }
                  });
                });
              }
              this._setEventListeners(r, a, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], t => t.target.value);
            }
            if (l) {
              r.addEventListener("blur", l);
            }
            if (this.data.comb) {
              let t = (this.data.rect[2] - this.data.rect[0]) / o;
              r.classList.add("comb");
              r.style.letterSpacing = `calc(${t}px * var(--scale-factor) - 1ch)`;
            }
          } else {
            (r = document.createElement("div")).textContent = this.data.fieldValue;
            r.style.verticalAlign = "middle";
            r.style.display = "table-cell";
          }
          this._setTextStyle(r);
          this._setBackgroundColor(r);
          this._setDefaultPropertiesFromJS(r);
          this.container.append(r);
          return this.container;
        }
      }
      class b extends v {
        constructor(t) {
          super(t, {
            isRenderable: !!t.data.hasOwnCanvas
          });
        }
      }
      class A extends v {
        constructor(t) {
          super(t, {
            isRenderable: t.renderForms
          });
        }
        render() {
          let t = this.annotationStorage;
          let e = this.data;
          let r = e.id;
          let i = t.getValue(r, {
            value: e.exportValue === e.fieldValue
          }).value;
          if (typeof i == "string") {
            i = i !== "Off";
            t.setValue(r, {
              value: i
            });
          }
          this.container.classList.add("buttonWidgetAnnotation", "checkBox");
          let n = document.createElement("input");
          u.add(n);
          n.setAttribute("data-element-id", r);
          n.disabled = e.readOnly;
          this._setRequired(n, this.data.required);
          n.type = "checkbox";
          n.name = e.fieldName;
          if (i) {
            n.setAttribute("checked", true);
          }
          n.setAttribute("exportValue", e.exportValue);
          n.tabIndex = h;
          n.addEventListener("change", i => {
            let {
              name: n,
              checked: o
            } = i.target;
            for (let i of this._getElementsByName(n, r)) {
              let r = o && i.exportValue === e.exportValue;
              if (i.domElement) {
                i.domElement.checked = r;
              }
              t.setValue(i.id, {
                value: r
              });
            }
            t.setValue(r, {
              value: o
            });
          });
          n.addEventListener("resetform", t => {
            let r = e.defaultFieldValue || "Off";
            t.target.checked = r === e.exportValue;
          });
          if (this.enableScripting && this.hasJSActions) {
            n.addEventListener("updatefromsandbox", e => {
              let i = {
                value(e) {
                  e.target.checked = e.detail.value !== "Off";
                  t.setValue(r, {
                    value: e.target.checked
                  });
                }
              };
              this._dispatchEventFromSandbox(i, e);
            });
            this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], t => t.target.checked);
          }
          this._setBackgroundColor(n);
          this._setDefaultPropertiesFromJS(n);
          this.container.append(n);
          return this.container;
        }
      }
      class S extends v {
        constructor(t) {
          super(t, {
            isRenderable: t.renderForms
          });
        }
        render() {
          this.container.classList.add("buttonWidgetAnnotation", "radioButton");
          let t = this.annotationStorage;
          let e = this.data;
          let r = e.id;
          let i = t.getValue(r, {
            value: e.fieldValue === e.buttonValue
          }).value;
          if (typeof i == "string") {
            i = i !== e.buttonValue;
            t.setValue(r, {
              value: i
            });
          }
          let n = document.createElement("input");
          u.add(n);
          n.setAttribute("data-element-id", r);
          n.disabled = e.readOnly;
          this._setRequired(n, this.data.required);
          n.type = "radio";
          n.name = e.fieldName;
          if (i) {
            n.setAttribute("checked", true);
          }
          n.tabIndex = h;
          n.addEventListener("change", e => {
            let {
              name: i,
              checked: n
            } = e.target;
            for (let e of this._getElementsByName(i, r)) {
              t.setValue(e.id, {
                value: false
              });
            }
            t.setValue(r, {
              value: n
            });
          });
          n.addEventListener("resetform", t => {
            let r = e.defaultFieldValue;
            t.target.checked = r != null && r === e.buttonValue;
          });
          if (this.enableScripting && this.hasJSActions) {
            let i = e.buttonValue;
            n.addEventListener("updatefromsandbox", e => {
              let n = {
                value: e => {
                  let n = i === e.detail.value;
                  for (let i of this._getElementsByName(e.target.name)) {
                    let e = n && i.id === r;
                    if (i.domElement) {
                      i.domElement.checked = e;
                    }
                    t.setValue(i.id, {
                      value: e
                    });
                  }
                }
              };
              this._dispatchEventFromSandbox(n, e);
            });
            this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], t => t.target.checked);
          }
          this._setBackgroundColor(n);
          this._setDefaultPropertiesFromJS(n);
          this.container.append(n);
          return this.container;
        }
      }
      class x extends g {
        constructor(t) {
          super(t, {
            ignoreBorder: t.data.hasAppearance
          });
        }
        render() {
          let t = super.render();
          t.classList.add("buttonWidgetAnnotation", "pushButton");
          if (this.data.alternativeText) {
            t.title = this.data.alternativeText;
          }
          let e = t.lastChild;
          if (this.enableScripting && this.hasJSActions && e) {
            this._setDefaultPropertiesFromJS(e);
            e.addEventListener("updatefromsandbox", t => {
              this._dispatchEventFromSandbox({}, t);
            });
          }
          return t;
        }
      }
      class w extends v {
        constructor(t) {
          super(t, {
            isRenderable: t.renderForms
          });
        }
        render() {
          this.container.classList.add("choiceWidgetAnnotation");
          let t = this.annotationStorage;
          let e = this.data.id;
          let r = t.getValue(e, {
            value: this.data.fieldValue
          });
          let i = document.createElement("select");
          u.add(i);
          i.setAttribute("data-element-id", e);
          i.disabled = this.data.readOnly;
          this._setRequired(i, this.data.required);
          i.name = this.data.fieldName;
          i.tabIndex = h;
          let n = this.data.combo && this.data.options.length > 0;
          if (!this.data.combo) {
            i.size = this.data.options.length;
            if (this.data.multiSelect) {
              i.multiple = true;
            }
          }
          i.addEventListener("resetform", t => {
            let e = this.data.defaultFieldValue;
            for (let t of i.options) {
              t.selected = t.value === e;
            }
          });
          for (let t of this.data.options) {
            let e = document.createElement("option");
            e.textContent = t.displayValue;
            e.value = t.exportValue;
            if (r.value.includes(t.exportValue)) {
              e.setAttribute("selected", true);
              n = false;
            }
            i.append(e);
          }
          let o = null;
          if (n) {
            let t = document.createElement("option");
            t.value = " ";
            t.setAttribute("hidden", true);
            t.setAttribute("selected", true);
            i.prepend(t);
            o = () => {
              t.remove();
              i.removeEventListener("input", o);
              o = null;
            };
            i.addEventListener("input", o);
          }
          let s = t => {
            let e = t ? "value" : "textContent";
            let {
              options: r,
              multiple: n
            } = i;
            if (n) {
              return Array.prototype.filter.call(r, t => t.selected).map(t => t[e]);
            } else if (r.selectedIndex === -1) {
              return null;
            } else {
              return r[r.selectedIndex][e];
            }
          };
          let a = s(false);
          let l = t => {
            let e = t.target.options;
            return Array.prototype.map.call(e, t => ({
              displayValue: t.textContent,
              exportValue: t.value
            }));
          };
          if (this.enableScripting && this.hasJSActions) {
            i.addEventListener("updatefromsandbox", r => {
              let n = {
                value(r) {
                  o?.();
                  let n = r.detail.value;
                  let l = new Set(Array.isArray(n) ? n : [n]);
                  for (let t of i.options) {
                    t.selected = l.has(t.value);
                  }
                  t.setValue(e, {
                    value: s(true)
                  });
                  a = s(false);
                },
                multipleSelection(t) {
                  i.multiple = true;
                },
                remove(r) {
                  let n = i.options;
                  let o = r.detail.remove;
                  n[o].selected = false;
                  i.remove(o);
                  if (n.length > 0 && Array.prototype.findIndex.call(n, t => t.selected) === -1) {
                    n[0].selected = true;
                  }
                  t.setValue(e, {
                    value: s(true),
                    items: l(r)
                  });
                  a = s(false);
                },
                clear(r) {
                  while (i.length !== 0) {
                    i.remove(0);
                  }
                  t.setValue(e, {
                    value: null,
                    items: []
                  });
                  a = s(false);
                },
                insert(r) {
                  let {
                    index: n,
                    displayValue: o,
                    exportValue: h
                  } = r.detail.insert;
                  let c = i.children[n];
                  let u = document.createElement("option");
                  u.textContent = o;
                  u.value = h;
                  if (c) {
                    c.before(u);
                  } else {
                    i.append(u);
                  }
                  t.setValue(e, {
                    value: s(true),
                    items: l(r)
                  });
                  a = s(false);
                },
                items(r) {
                  let {
                    items: n
                  } = r.detail;
                  while (i.length !== 0) {
                    i.remove(0);
                  }
                  for (let t of n) {
                    let {
                      displayValue: e,
                      exportValue: r
                    } = t;
                    let n = document.createElement("option");
                    n.textContent = e;
                    n.value = r;
                    i.append(n);
                  }
                  if (i.options.length > 0) {
                    i.options[0].selected = true;
                  }
                  t.setValue(e, {
                    value: s(true),
                    items: l(r)
                  });
                  a = s(false);
                },
                indices(r) {
                  let i = new Set(r.detail.indices);
                  for (let t of r.target.options) {
                    t.selected = i.has(t.index);
                  }
                  t.setValue(e, {
                    value: s(true)
                  });
                  a = s(false);
                },
                editable(t) {
                  t.target.disabled = !t.detail.editable;
                }
              };
              this._dispatchEventFromSandbox(n, r);
            });
            i.addEventListener("input", r => {
              let i = s(true);
              t.setValue(e, {
                value: i
              });
              r.preventDefault();
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: a,
                  changeEx: i,
                  willCommit: false,
                  commitKey: 1,
                  keyDown: false
                }
              });
            });
            this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], t => t.target.value);
          } else {
            i.addEventListener("input", function (r) {
              t.setValue(e, {
                value: s(true)
              });
            });
          }
          if (this.data.combo) {
            this._setTextStyle(i);
          }
          this._setBackgroundColor(i);
          this._setDefaultPropertiesFromJS(i);
          this.container.append(i);
          return this.container;
        }
      }
      class C extends p {
        constructor(t) {
          let {
            data: e,
            elements: r
          } = t;
          super(t, {
            isRenderable: p._hasPopupData(e)
          });
          this.elements = r;
        }
        render() {
          this.container.classList.add("popupAnnotation");
          let t = new T({
            container: this.container,
            color: this.data.color,
            titleObj: this.data.titleObj,
            modificationDate: this.data.modificationDate,
            contentsObj: this.data.contentsObj,
            richText: this.data.richText,
            rect: this.data.rect,
            parentRect: this.data.parentRect || null,
            parent: this.parent,
            elements: this.elements,
            open: this.data.open
          });
          let e = [];
          for (let r of this.elements) {
            r.popup = t;
            e.push(r.data.id);
            r.addHighlightArea();
          }
          this.container.setAttribute("aria-controls", e.map(t => `${i.AnnotationPrefix}${t}`).join(","));
          return this.container;
        }
      }
      class T {
        #eq = null;
        #eH = this.#eK.bind(this);
        #eX = this.#eZ.bind(this);
        #eY = this.#eJ.bind(this);
        #eQ = this.#e$.bind(this);
        #eR = null;
        #tO = null;
        #e0 = null;
        #e1 = null;
        #e2 = null;
        #e5 = null;
        #e3 = false;
        #e4 = null;
        #e6 = null;
        #e8 = null;
        #e9 = null;
        #e7 = false;
        constructor({
          container: t,
          color: e,
          elements: r,
          titleObj: i,
          modificationDate: o,
          contentsObj: s,
          richText: a,
          parent: l,
          rect: h,
          parentRect: c,
          open: u
        }) {
          this.#tO = t;
          this.#e9 = i;
          this.#e0 = s;
          this.#e8 = a;
          this.#e2 = l;
          this.#eR = e;
          this.#e6 = h;
          this.#e5 = c;
          this.#e1 = r;
          let d = n.PDFDateString.toDateObject(o);
          if (d) {
            this.#eq = l.l10n.get("annotation_date_string", {
              date: d.toLocaleDateString(),
              time: d.toLocaleTimeString()
            });
          }
          this.trigger = r.flatMap(t => t.getElementsToTriggerPopup());
          for (let t of this.trigger) {
            t.addEventListener("click", this.#eQ);
            t.addEventListener("mouseenter", this.#eY);
            t.addEventListener("mouseleave", this.#eX);
            t.classList.add("popupTriggerArea");
          }
          for (let t of r) {
            t.container?.addEventListener("keydown", this.#eH);
          }
          this.#tO.hidden = true;
          if (u) {
            this.#e$();
          }
        }
        render() {
          if (this.#e4) {
            return;
          }
          let {
            page: {
              view: t
            },
            viewport: {
              rawDims: {
                pageWidth: e,
                pageHeight: r,
                pageX: n,
                pageY: o
              }
            }
          } = this.#e2;
          let s = this.#e4 = document.createElement("div");
          s.className = "popup";
          if (this.#eR) {
            let t = s.style.outlineColor = i.Util.makeHexColor(...this.#eR);
            if (CSS.supports("background-color", "color-mix(in srgb, red 30%, white)")) {
              s.style.backgroundColor = `color-mix(in srgb, ${t} 30%, white)`;
            } else {
              let t = 0.7;
              s.style.backgroundColor = i.Util.makeHexColor(...this.#eR.map(e => Math.floor(t * (255 - e) + e)));
            }
          }
          let a = document.createElement("span");
          a.className = "header";
          let h = document.createElement("h1");
          a.append(h);
          ({
            dir: h.dir,
            str: h.textContent
          } = this.#e9);
          s.append(a);
          if (this.#eq) {
            let t = document.createElement("span");
            t.classList.add("popupDate");
            this.#eq.then(e => {
              t.textContent = e;
            });
            a.append(t);
          }
          let c = this.#e0;
          let u = this.#e8;
          if (u?.str && (!c?.str || c.str === u.str)) {
            l.XfaLayer.render({
              xfaHtml: u.html,
              intent: "richText",
              div: s
            });
            s.lastChild.classList.add("richText", "popupContent");
          } else {
            let t = this._formatContents(c);
            s.append(t);
          }
          let d = !!this.#e5;
          let f = d ? this.#e5 : this.#e6;
          for (let t of this.#e1) {
            if (!f || i.Util.intersect(t.data.rect, f) !== null) {
              f = t.data.rect;
              d = true;
              break;
            }
          }
          let p = i.Util.normalizeRect([f[0], t[3] - f[1] + t[1], f[2], t[3] - f[3] + t[1]]);
          let g = 5;
          let m = d ? f[2] - f[0] + g : 0;
          let v = p[0] + m;
          let y = p[1];
          let {
            style: b
          } = this.#tO;
          b.left = `${(v - n) * 100 / e}%`;
          b.top = `${(y - o) * 100 / r}%`;
          this.#tO.append(s);
        }
        _formatContents({
          str: t,
          dir: e
        }) {
          let r = document.createElement("p");
          r.classList.add("popupContent");
          r.dir = e;
          let i = t.split(/(?:\r\n?|\n)/);
          for (let t = 0, e = i.length; t < e; ++t) {
            let n = i[t];
            r.append(document.createTextNode(n));
            if (t < e - 1) {
              r.append(document.createElement("br"));
            }
          }
          return r;
        }
        #eK(t) {
          if (!t.altKey && !t.shiftKey && !t.ctrlKey && !t.metaKey && (t.key === "Enter" || t.key === "Escape" && this.#e3)) {
            this.#e$();
          }
        }
        #e$() {
          this.#e3 = !this.#e3;
          if (this.#e3) {
            this.#eJ();
            this.#tO.addEventListener("click", this.#eQ);
            this.#tO.addEventListener("keydown", this.#eH);
          } else {
            this.#eZ();
            this.#tO.removeEventListener("click", this.#eQ);
            this.#tO.removeEventListener("keydown", this.#eH);
          }
        }
        #eJ() {
          if (!this.#e4) {
            this.render();
          }
          if (this.isVisible) {
            if (this.#e3) {
              this.#tO.classList.add("focused");
            }
          } else {
            this.#tO.hidden = false;
            this.#tO.style.zIndex = parseInt(this.#tO.style.zIndex) + 1000;
          }
        }
        #eZ() {
          this.#tO.classList.remove("focused");
          if (!this.#e3 && this.isVisible) {
            this.#tO.hidden = true;
            this.#tO.style.zIndex = parseInt(this.#tO.style.zIndex) - 1000;
          }
        }
        forceHide() {
          this.#e7 = this.isVisible;
          if (this.#e7) {
            this.#tO.hidden = true;
          }
        }
        maybeShow() {
          if (this.#e7) {
            this.#e7 = false;
            this.#tO.hidden = false;
          }
        }
        get isVisible() {
          return this.#tO.hidden === false;
        }
      }
      class E extends p {
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true
          });
          this.textContent = t.data.textContent;
          this.textPosition = t.data.textPosition;
          this.annotationEditorType = i.AnnotationEditorType.FREETEXT;
        }
        render() {
          this.container.classList.add("freeTextAnnotation");
          if (this.textContent) {
            let t = document.createElement("div");
            t.classList.add("annotationTextContent");
            t.setAttribute("role", "comment");
            for (let e of this.textContent) {
              let r = document.createElement("span");
              r.textContent = e;
              t.append(r);
            }
            this.container.append(t);
          }
          if (!this.data.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          this._editOnDoubleClick();
          return this.container;
        }
      }
      e.FreeTextAnnotationElement = E;
      class F extends p {
        #rt = null;
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          this.container.classList.add("lineAnnotation");
          let t = this.data;
          let {
            width: e,
            height: r
          } = d(t.rect);
          let i = this.svgFactory.create(e, r, true);
          let n = this.#rt = this.svgFactory.createElement("svg:line");
          n.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]);
          n.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]);
          n.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]);
          n.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]);
          n.setAttribute("stroke-width", t.borderStyle.width || 1);
          n.setAttribute("stroke", "transparent");
          n.setAttribute("fill", "transparent");
          i.append(n);
          this.container.append(i);
          if (!t.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          return this.container;
        }
        getElementsToTriggerPopup() {
          return this.#rt;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      class k extends p {
        #re = null;
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          this.container.classList.add("squareAnnotation");
          let t = this.data;
          let {
            width: e,
            height: r
          } = d(t.rect);
          let i = this.svgFactory.create(e, r, true);
          let n = t.borderStyle.width;
          let o = this.#re = this.svgFactory.createElement("svg:rect");
          o.setAttribute("x", n / 2);
          o.setAttribute("y", n / 2);
          o.setAttribute("width", e - n);
          o.setAttribute("height", r - n);
          o.setAttribute("stroke-width", n || 1);
          o.setAttribute("stroke", "transparent");
          o.setAttribute("fill", "transparent");
          i.append(o);
          this.container.append(i);
          if (!t.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          return this.container;
        }
        getElementsToTriggerPopup() {
          return this.#re;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      class P extends p {
        #rr = null;
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          this.container.classList.add("circleAnnotation");
          let t = this.data;
          let {
            width: e,
            height: r
          } = d(t.rect);
          let i = this.svgFactory.create(e, r, true);
          let n = t.borderStyle.width;
          let o = this.#rr = this.svgFactory.createElement("svg:ellipse");
          o.setAttribute("cx", e / 2);
          o.setAttribute("cy", r / 2);
          o.setAttribute("rx", e / 2 - n / 2);
          o.setAttribute("ry", r / 2 - n / 2);
          o.setAttribute("stroke-width", n || 1);
          o.setAttribute("stroke", "transparent");
          o.setAttribute("fill", "transparent");
          i.append(o);
          this.container.append(i);
          if (!t.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          return this.container;
        }
        getElementsToTriggerPopup() {
          return this.#rr;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      class R extends p {
        #ri = null;
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true
          });
          this.containerClassName = "polylineAnnotation";
          this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.classList.add(this.containerClassName);
          let t = this.data;
          let {
            width: e,
            height: r
          } = d(t.rect);
          let i = this.svgFactory.create(e, r, true);
          let n = [];
          for (let e of t.vertices) {
            let r = e.x - t.rect[0];
            let i = t.rect[3] - e.y;
            n.push(r + "," + i);
          }
          n = n.join(" ");
          let o = this.#ri = this.svgFactory.createElement(this.svgElementName);
          o.setAttribute("points", n);
          o.setAttribute("stroke-width", t.borderStyle.width || 1);
          o.setAttribute("stroke", "transparent");
          o.setAttribute("fill", "transparent");
          i.append(o);
          this.container.append(i);
          if (!t.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          return this.container;
        }
        getElementsToTriggerPopup() {
          return this.#ri;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      class M extends R {
        constructor(t) {
          super(t);
          this.containerClassName = "polygonAnnotation";
          this.svgElementName = "svg:polygon";
        }
      }
      class O extends p {
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          this.container.classList.add("caretAnnotation");
          if (!this.data.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          return this.container;
        }
      }
      class D extends p {
        #rn = [];
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true
          });
          this.containerClassName = "inkAnnotation";
          this.svgElementName = "svg:polyline";
          this.annotationEditorType = i.AnnotationEditorType.INK;
        }
        render() {
          this.container.classList.add(this.containerClassName);
          let t = this.data;
          let {
            width: e,
            height: r
          } = d(t.rect);
          let i = this.svgFactory.create(e, r, true);
          for (let e of t.inkLists) {
            let r = [];
            for (let i of e) {
              let e = i.x - t.rect[0];
              let n = t.rect[3] - i.y;
              r.push(`${e},${n}`);
            }
            r = r.join(" ");
            let n = this.svgFactory.createElement(this.svgElementName);
            this.#rn.push(n);
            n.setAttribute("points", r);
            n.setAttribute("stroke-width", t.borderStyle.width || 1);
            n.setAttribute("stroke", "transparent");
            n.setAttribute("fill", "transparent");
            if (!t.popupRef && this.hasPopupData) {
              this._createPopup();
            }
            i.append(n);
          }
          this.container.append(i);
          return this.container;
        }
        getElementsToTriggerPopup() {
          return this.#rn;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      e.InkAnnotationElement = D;
      class I extends p {
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          if (!this.data.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          this.container.classList.add("highlightAnnotation");
          return this.container;
        }
      }
      class L extends p {
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          if (!this.data.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          this.container.classList.add("underlineAnnotation");
          return this.container;
        }
      }
      class N extends p {
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          if (!this.data.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          this.container.classList.add("squigglyAnnotation");
          return this.container;
        }
      }
      class B extends p {
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          if (!this.data.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          this.container.classList.add("strikeoutAnnotation");
          return this.container;
        }
      }
      class j extends p {
        constructor(t) {
          super(t, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          this.container.classList.add("stampAnnotation");
          if (!this.data.popupRef && this.hasPopupData) {
            this._createPopup();
          }
          return this.container;
        }
      }
      e.StampAnnotationElement = j;
      class _ extends p {
        #ro = null;
        constructor(t) {
          super(t, {
            isRenderable: true
          });
          let {
            filename: e,
            content: r
          } = this.data.file;
          this.filename = n.getFilenameFromUrl(e, true);
          this.content = r;
          this.linkService.eventBus?.dispatch("fileattachmentannotation", {
            source: this,
            filename: e,
            content: r
          });
        }
        render() {
          let t;
          this.container.classList.add("fileAttachmentAnnotation");
          let {
            container: e,
            data: r
          } = this;
          if (r.hasAppearance || r.fillAlpha === 0) {
            t = document.createElement("div");
          } else {
            (t = document.createElement("img")).src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(r.name) ? "paperclip" : "pushpin"}.svg`;
            if (r.fillAlpha && r.fillAlpha < 1) {
              t.style = `filter: opacity(${Math.round(r.fillAlpha * 100)}%);`;
            }
          }
          t.addEventListener("dblclick", this.#rs.bind(this));
          this.#ro = t;
          let {
            isMac: n
          } = i.FeatureTest.platform;
          e.addEventListener("keydown", t => {
            if (t.key === "Enter" && (n ? t.metaKey : t.ctrlKey)) {
              this.#rs();
            }
          });
          if (!r.popupRef && this.hasPopupData) {
            this._createPopup();
          } else {
            t.classList.add("popupTriggerArea");
          }
          e.append(t);
          return e;
        }
        getElementsToTriggerPopup() {
          return this.#ro;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
        #rs() {
          this.downloadManager?.openOrDownloadData(this.container, this.content, this.filename);
        }
      }
      class U {
        #ed = null;
        #ra = null;
        #rl = new Map();
        constructor({
          div: t,
          accessibilityManager: e,
          annotationCanvasMap: r,
          l10n: i,
          page: n,
          viewport: o
        }) {
          this.div = t;
          this.#ed = e;
          this.#ra = r;
          this.l10n = i;
          this.page = n;
          this.viewport = o;
          this.zIndex = 0;
          this.l10n ||= a.NullL10n;
        }
        #rh(t, e) {
          let r = t.firstChild || t;
          r.id = `${i.AnnotationPrefix}${e}`;
          this.div.append(t);
          this.#ed?.moveElementInDOM(this.div, t, r, false);
        }
        async render(t) {
          let {
            annotations: e
          } = t;
          let r = this.div;
          n.setLayerDimensions(r, this.viewport);
          let s = new Map();
          let a = {
            data: null,
            layer: r,
            linkService: t.linkService,
            downloadManager: t.downloadManager,
            imageResourcesPath: t.imageResourcesPath || "",
            renderForms: t.renderForms !== false,
            svgFactory: new n.DOMSVGFactory(),
            annotationStorage: t.annotationStorage || new o.AnnotationStorage(),
            enableScripting: t.enableScripting === true,
            hasJSActions: t.hasJSActions,
            fieldObjects: t.fieldObjects,
            parent: this,
            elements: null
          };
          for (let t of e) {
            if (t.noHTML) {
              continue;
            }
            let e = t.annotationType === i.AnnotationType.POPUP;
            if (e) {
              let e = s.get(t.id);
              if (!e) {
                continue;
              }
              a.elements = e;
            } else {
              let {
                width: e,
                height: r
              } = d(t.rect);
              if (e <= 0 || r <= 0) {
                continue;
              }
            }
            a.data = t;
            let r = f.create(a);
            if (!r.isRenderable) {
              continue;
            }
            if (!e && t.popupRef) {
              let e = s.get(t.popupRef);
              if (e) {
                e.push(r);
              } else {
                s.set(t.popupRef, [r]);
              }
            }
            if (r.annotationEditorType > 0) {
              this.#rl.set(r.data.id, r);
            }
            let n = r.render();
            if (t.hidden) {
              n.style.visibility = "hidden";
            }
            this.#rh(n, t.id);
          }
          this.#rc();
          await this.l10n.translate(r);
        }
        update({
          viewport: t
        }) {
          let e = this.div;
          this.viewport = t;
          n.setLayerDimensions(e, {
            rotation: t.rotation
          });
          this.#rc();
          e.hidden = false;
        }
        #rc() {
          if (!this.#ra) {
            return;
          }
          let t = this.div;
          for (let [e, r] of this.#ra) {
            let i = t.querySelector(`[data-annotation-id="${e}"]`);
            if (!i) {
              continue;
            }
            let {
              firstChild: n
            } = i;
            if (n) {
              if (n.nodeName === "CANVAS") {
                n.replaceWith(r);
              } else {
                n.before(r);
              }
            } else {
              i.append(r);
            }
          }
          this.#ra.clear();
        }
        getEditableAnnotations() {
          return Array.from(this.#rl.values());
        }
        getEditableAnnotation(t) {
          return this.#rl.get(t);
        }
      }
      e.AnnotationLayer = U;
    }, (t, e) => {
      function r(t) {
        return Math.floor(Math.max(0, Math.min(1, t)) * 255).toString(16).padStart(2, "0");
      }
      function i(t) {
        return Math.max(0, Math.min(255, t * 255));
      }
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.ColorConverters = undefined;
      class n {
        static CMYK_G([t, e, r, i]) {
          return ["G", 1 - Math.min(1, t * 0.3 + r * 0.59 + e * 0.11 + i)];
        }
        static G_CMYK([t]) {
          return ["CMYK", 0, 0, 0, 1 - t];
        }
        static G_RGB([t]) {
          return ["RGB", t, t, t];
        }
        static G_rgb([t]) {
          return [t = i(t), t, t];
        }
        static G_HTML([t]) {
          let e = r(t);
          return `#${e}${e}${e}`;
        }
        static RGB_G([t, e, r]) {
          return ["G", t * 0.3 + e * 0.59 + r * 0.11];
        }
        static RGB_rgb(t) {
          return t.map(i);
        }
        static RGB_HTML(t) {
          return `#${t.map(r).join("")}`;
        }
        static T_HTML() {
          return "#00000000";
        }
        static T_rgb() {
          return [null];
        }
        static CMYK_RGB([t, e, r, i]) {
          return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, r + i), 1 - Math.min(1, e + i)];
        }
        static CMYK_rgb([t, e, r, n]) {
          return [i(1 - Math.min(1, t + n)), i(1 - Math.min(1, r + n)), i(1 - Math.min(1, e + n))];
        }
        static CMYK_HTML(t) {
          let e = this.CMYK_RGB(t).slice(1);
          return this.RGB_HTML(e);
        }
        static RGB_CMYK([t, e, r]) {
          let i = 1 - t;
          let n = 1 - e;
          let o = 1 - r;
          let s = Math.min(i, n, o);
          return ["CMYK", i, n, o, s];
        }
      }
      e.ColorConverters = n;
    }, (t, e) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.NullL10n = undefined;
      e.getL10nFallback = i;
      let r = {
        of_pages: "of {{pagesCount}}",
        page_of_pages: "({{pageNumber}} of {{pagesCount}})",
        document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)",
        document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)",
        document_properties_date_string: "{{date}}, {{time}}",
        document_properties_page_size_unit_inches: "in",
        document_properties_page_size_unit_millimeters: "mm",
        document_properties_page_size_orientation_portrait: "portrait",
        document_properties_page_size_orientation_landscape: "landscape",
        document_properties_page_size_name_a3: "A3",
        document_properties_page_size_name_a4: "A4",
        document_properties_page_size_name_letter: "Letter",
        document_properties_page_size_name_legal: "Legal",
        document_properties_page_size_dimension_string: "{{width}} × {{height}} {{unit}} ({{orientation}})",
        document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})",
        document_properties_linearized_yes: "Yes",
        document_properties_linearized_no: "No",
        additional_layers: "Additional Layers",
        page_landmark: "Page {{page}}",
        thumb_page_title: "Page {{page}}",
        thumb_page_canvas: "Thumbnail of Page {{page}}",
        find_reached_top: "Reached top of document, continued from bottom",
        find_reached_bottom: "Reached end of document, continued from top",
        "find_match_count[one]": "{{current}} of {{total}} match",
        "find_match_count[other]": "{{current}} of {{total}} matches",
        "find_match_count_limit[one]": "More than {{limit}} match",
        "find_match_count_limit[other]": "More than {{limit}} matches",
        find_not_found: "Phrase not found",
        page_scale_width: "Page Width",
        page_scale_fit: "Page Fit",
        page_scale_auto: "Automatic Zoom",
        page_scale_actual: "Actual Size",
        page_scale_percent: "{{scale}}%",
        loading_error: "An error occurred while loading the PDF.",
        invalid_file_error: "Invalid or corrupted PDF file.",
        missing_file_error: "Missing PDF file.",
        unexpected_response_error: "Unexpected server response.",
        rendering_error: "An error occurred while rendering the page.",
        annotation_date_string: "{{date}}, {{time}}",
        printing_not_supported: "Warning: Printing is not fully supported by this browser.",
        printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
        web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts.",
        free_text2_default_content: "Start typing…",
        editor_free_text2_aria_label: "Text Editor",
        editor_ink2_aria_label: "Draw Editor",
        editor_ink_canvas_aria_label: "User-created image",
        editor_alt_text_button_label: "Alt text",
        editor_alt_text_edit_button_label: "Edit alt text",
        editor_alt_text_decorative_tooltip: "Marked as decorative"
      };
      function i(t, e) {
        switch (t) {
          case "find_match_count":
            t = `find_match_count[${e.total === 1 ? "one" : "other"}]`;
            break;
          case "find_match_count_limit":
            t = `find_match_count_limit[${e.limit === 1 ? "one" : "other"}]`;
        }
        return r[t] || "";
      }
      function n(t, e) {
        if (e) {
          return t.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (t, r) => r in e ? e[r] : "{{" + r + "}}");
        } else {
          return t;
        }
      }
      r.print_progress_percent = "{{progress}}%";
      let o = {
        getLanguage: async () => "en-us",
        getDirection: async () => "ltr",
        get: async (t, e = null, r = i(t, e)) => n(r, e),
        async translate(t) {}
      };
      e.NullL10n = o;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.XfaLayer = undefined;
      var i = r(25);
      class n {
        static setupStorage(t, e, r, i, n) {
          let o = i.getValue(e, {
            value: null
          });
          switch (r.name) {
            case "textarea":
              if (o.value !== null) {
                t.textContent = o.value;
              }
              if (n === "print") {
                break;
              }
              t.addEventListener("input", t => {
                i.setValue(e, {
                  value: t.target.value
                });
              });
              break;
            case "input":
              if (r.attributes.type === "radio" || r.attributes.type === "checkbox") {
                if (o.value === r.attributes.xfaOn) {
                  t.setAttribute("checked", true);
                } else if (o.value === r.attributes.xfaOff) {
                  t.removeAttribute("checked");
                }
                if (n === "print") {
                  break;
                }
                t.addEventListener("change", t => {
                  i.setValue(e, {
                    value: t.target.checked ? t.target.getAttribute("xfaOn") : t.target.getAttribute("xfaOff")
                  });
                });
              } else {
                if (o.value !== null) {
                  t.setAttribute("value", o.value);
                }
                if (n === "print") {
                  break;
                }
                t.addEventListener("input", t => {
                  i.setValue(e, {
                    value: t.target.value
                  });
                });
              }
              break;
            case "select":
              if (o.value !== null) {
                t.setAttribute("value", o.value);
                for (let e of r.children) {
                  if (e.attributes.value === o.value) {
                    e.attributes.selected = true;
                  } else if (e.attributes.hasOwnProperty("selected")) {
                    delete e.attributes.selected;
                  }
                }
              }
              t.addEventListener("input", t => {
                let r = t.target.options;
                let n = r.selectedIndex === -1 ? "" : r[r.selectedIndex].value;
                i.setValue(e, {
                  value: n
                });
              });
          }
        }
        static setAttributes({
          html: t,
          element: e,
          storage: r = null,
          intent: i,
          linkService: n
        }) {
          let {
            attributes: o
          } = e;
          let s = t instanceof HTMLAnchorElement;
          if (o.type === "radio") {
            o.name = `${o.name}-${i}`;
          }
          for (let [e, r] of Object.entries(o)) {
            if (r != null) {
              switch (e) {
                case "class":
                  if (r.length) {
                    t.setAttribute(e, r.join(" "));
                  }
                  break;
                case "dataId":
                  break;
                case "id":
                  t.setAttribute("data-element-id", r);
                  break;
                case "style":
                  Object.assign(t.style, r);
                  break;
                case "textContent":
                  t.textContent = r;
                  break;
                default:
                  if (!s || e !== "href" && e !== "newWindow") {
                    t.setAttribute(e, r);
                  }
              }
            }
          }
          if (s) {
            n.addLinkAttributes(t, o.href, o.newWindow);
          }
          if (r && o.dataId) {
            this.setupStorage(t, o.dataId, e, r);
          }
        }
        static render(t) {
          let e = t.annotationStorage;
          let r = t.linkService;
          let n = t.xfaHtml;
          let o = t.intent || "display";
          let s = document.createElement(n.name);
          if (n.attributes) {
            this.setAttributes({
              html: s,
              element: n,
              intent: o,
              linkService: r
            });
          }
          let a = [[n, -1, s]];
          let l = t.div;
          l.append(s);
          if (t.viewport) {
            let e = `matrix(${t.viewport.transform.join(",")})`;
            l.style.transform = e;
          }
          if (o !== "richText") {
            l.setAttribute("class", "xfaLayer xfaFont");
          }
          let h = [];
          while (a.length > 0) {
            let [t, n, s] = a.at(-1);
            if (n + 1 === t.children.length) {
              a.pop();
              continue;
            }
            let l = t.children[++a.at(-1)[1]];
            if (l === null) {
              continue;
            }
            let {
              name: c
            } = l;
            if (c === "#text") {
              let t = document.createTextNode(l.value);
              h.push(t);
              s.append(t);
              continue;
            }
            let u = l?.attributes?.xmlns ? document.createElementNS(l.attributes.xmlns, c) : document.createElement(c);
            s.append(u);
            if (l.attributes) {
              this.setAttributes({
                html: u,
                element: l,
                storage: e,
                intent: o,
                linkService: r
              });
            }
            if (l.children && l.children.length > 0) {
              a.push([l, -1, u]);
            } else if (l.value) {
              let t = document.createTextNode(l.value);
              if (i.XfaText.shouldBuildText(c)) {
                h.push(t);
              }
              u.append(t);
            }
          }
          for (let t of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
            t.setAttribute("readOnly", true);
          }
          return {
            textDivs: h
          };
        }
        static update(t) {
          let e = `matrix(${t.viewport.transform.join(",")})`;
          t.div.style.transform = e;
          t.div.hidden = false;
        }
      }
      e.XfaLayer = n;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.InkEditor = undefined;
      var i = r(1);
      var n = r(4);
      var o = r(29);
      var s = r(6);
      var a = r(5);
      class l extends n.AnnotationEditor {
        #ru = 0;
        #rd = 0;
        #rf = this.canvasPointermove.bind(this);
        #rp = this.canvasPointerleave.bind(this);
        #rg = this.canvasPointerup.bind(this);
        #rm = this.canvasPointerdown.bind(this);
        #rv = new Path2D();
        #ry = false;
        #rb = false;
        #rA = false;
        #rS = null;
        #rx = 0;
        #rw = 0;
        #rC = null;
        static _defaultColor = null;
        static _defaultOpacity = 1;
        static _defaultThickness = 1;
        static _type = "ink";
        constructor(t) {
          super({
            ...t,
            name: "inkEditor"
          });
          this.color = t.color || null;
          this.thickness = t.thickness || null;
          this.opacity = t.opacity || null;
          this.paths = [];
          this.bezierPath2D = [];
          this.allRawPaths = [];
          this.currentPath = [];
          this.scaleFactor = 1;
          this.translationX = this.translationY = 0;
          this.x = 0;
          this.y = 0;
          this._willKeepAspectRatio = true;
        }
        static initialize(t) {
          n.AnnotationEditor.initialize(t, {
            strings: ["editor_ink_canvas_aria_label", "editor_ink2_aria_label"]
          });
        }
        static updateDefaultParams(t, e) {
          switch (t) {
            case i.AnnotationEditorParamsType.INK_THICKNESS:
              l._defaultThickness = e;
              break;
            case i.AnnotationEditorParamsType.INK_COLOR:
              l._defaultColor = e;
              break;
            case i.AnnotationEditorParamsType.INK_OPACITY:
              l._defaultOpacity = e / 100;
          }
        }
        updateParams(t, e) {
          switch (t) {
            case i.AnnotationEditorParamsType.INK_THICKNESS:
              this.#rT(e);
              break;
            case i.AnnotationEditorParamsType.INK_COLOR:
              this.#eN(e);
              break;
            case i.AnnotationEditorParamsType.INK_OPACITY:
              this.#rE(e);
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[i.AnnotationEditorParamsType.INK_THICKNESS, l._defaultThickness], [i.AnnotationEditorParamsType.INK_COLOR, l._defaultColor || n.AnnotationEditor._defaultLineColor], [i.AnnotationEditorParamsType.INK_OPACITY, Math.round(l._defaultOpacity * 100)]];
        }
        get propertiesToUpdate() {
          return [[i.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || l._defaultThickness], [i.AnnotationEditorParamsType.INK_COLOR, this.color || l._defaultColor || n.AnnotationEditor._defaultLineColor], [i.AnnotationEditorParamsType.INK_OPACITY, Math.round((this.opacity ?? l._defaultOpacity) * 100)]];
        }
        #rT(t) {
          let e = this.thickness;
          this.addCommands({
            cmd: () => {
              this.thickness = t;
              this.#rF();
            },
            undo: () => {
              this.thickness = e;
              this.#rF();
            },
            mustExec: true,
            type: i.AnnotationEditorParamsType.INK_THICKNESS,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        #eN(t) {
          let e = this.color;
          this.addCommands({
            cmd: () => {
              this.color = t;
              this.#rk();
            },
            undo: () => {
              this.color = e;
              this.#rk();
            },
            mustExec: true,
            type: i.AnnotationEditorParamsType.INK_COLOR,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        #rE(t) {
          t /= 100;
          let e = this.opacity;
          this.addCommands({
            cmd: () => {
              this.opacity = t;
              this.#rk();
            },
            undo: () => {
              this.opacity = e;
              this.#rk();
            },
            mustExec: true,
            type: i.AnnotationEditorParamsType.INK_OPACITY,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        rebuild() {
          if (this.parent) {
            super.rebuild();
            if (this.div !== null) {
              if (!this.canvas) {
                this.#rP();
                this.#rR();
              }
              if (!this.isAttachedToDOM) {
                this.parent.add(this);
                this.#rM();
              }
              this.#rF();
            }
          }
        }
        remove() {
          if (this.canvas !== null) {
            if (!this.isEmpty()) {
              this.commit();
            }
            this.canvas.width = this.canvas.height = 0;
            this.canvas.remove();
            this.canvas = null;
            this.#rS.disconnect();
            this.#rS = null;
            super.remove();
          }
        }
        setParent(t) {
          if (!this.parent && t) {
            this._uiManager.removeShouldRescale(this);
          } else if (this.parent && t === null) {
            this._uiManager.addShouldRescale(this);
          }
          super.setParent(t);
        }
        onScaleChanging() {
          let [t, e] = this.parentDimensions;
          let r = this.width * t;
          let i = this.height * e;
          this.setDimensions(r, i);
        }
        enableEditMode() {
          if (!this.#ry && this.canvas !== null) {
            super.enableEditMode();
            this._isDraggable = false;
            this.canvas.addEventListener("pointerdown", this.#rm);
          }
        }
        disableEditMode() {
          if (this.isInEditMode() && this.canvas !== null) {
            super.disableEditMode();
            this._isDraggable = !this.isEmpty();
            this.div.classList.remove("editing");
            this.canvas.removeEventListener("pointerdown", this.#rm);
          }
        }
        onceAdded() {
          this._isDraggable = !this.isEmpty();
        }
        isEmpty() {
          return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
        }
        #rO() {
          let {
            parentRotation: t,
            parentDimensions: [e, r]
          } = this;
          switch (t) {
            case 90:
              return [0, r, r, e];
            case 180:
              return [e, r, e, r];
            case 270:
              return [e, 0, r, e];
            default:
              return [0, 0, e, r];
          }
        }
        #rD() {
          let {
            ctx: t,
            color: e,
            opacity: r,
            thickness: i,
            parentScale: n,
            scaleFactor: o
          } = this;
          t.lineWidth = i * n / o;
          t.lineCap = "round";
          t.lineJoin = "round";
          t.miterLimit = 10;
          t.strokeStyle = `${e}${a.opacityToHex(r)}`;
        }
        #rI(t, e) {
          this.canvas.addEventListener("contextmenu", s.noContextMenu);
          this.canvas.addEventListener("pointerleave", this.#rp);
          this.canvas.addEventListener("pointermove", this.#rf);
          this.canvas.addEventListener("pointerup", this.#rg);
          this.canvas.removeEventListener("pointerdown", this.#rm);
          this.isEditing = true;
          if (!this.#rA) {
            this.#rA = true;
            this.#rM();
            this.thickness ||= l._defaultThickness;
            this.color ||= l._defaultColor || n.AnnotationEditor._defaultLineColor;
            this.opacity ??= l._defaultOpacity;
          }
          this.currentPath.push([t, e]);
          this.#rb = false;
          this.#rD();
          this.#rC = () => {
            this.#rL();
            if (this.#rC) {
              window.requestAnimationFrame(this.#rC);
            }
          };
          window.requestAnimationFrame(this.#rC);
        }
        #rN(t, e) {
          let [r, i] = this.currentPath.at(-1);
          if (this.currentPath.length > 1 && t === r && e === i) {
            return;
          }
          let n = this.currentPath;
          let o = this.#rv;
          n.push([t, e]);
          this.#rb = true;
          if (n.length <= 2) {
            o.moveTo(...n[0]);
            o.lineTo(t, e);
            return;
          }
          if (n.length === 3) {
            this.#rv = o = new Path2D();
            o.moveTo(...n[0]);
          }
          this.#rB(o, ...n.at(-3), ...n.at(-2), t, e);
        }
        #rj() {
          if (this.currentPath.length === 0) {
            return;
          }
          let t = this.currentPath.at(-1);
          this.#rv.lineTo(...t);
        }
        #r_(t, e) {
          let r;
          this.#rC = null;
          t = Math.min(Math.max(t, 0), this.canvas.width);
          e = Math.min(Math.max(e, 0), this.canvas.height);
          this.#rN(t, e);
          this.#rj();
          if (this.currentPath.length !== 1) {
            r = this.#rU();
          } else {
            let i = [t, e];
            r = [[i, i.slice(), i.slice(), i]];
          }
          let i = this.#rv;
          let n = this.currentPath;
          this.currentPath = [];
          this.#rv = new Path2D();
          let o = () => {
            this.allRawPaths.push(n);
            this.paths.push(r);
            this.bezierPath2D.push(i);
            this.rebuild();
          };
          let s = () => {
            this.allRawPaths.pop();
            this.paths.pop();
            this.bezierPath2D.pop();
            if (this.paths.length === 0) {
              this.remove();
            } else {
              if (!this.canvas) {
                this.#rP();
                this.#rR();
              }
              this.#rF();
            }
          };
          this.addCommands({
            cmd: o,
            undo: s,
            mustExec: true
          });
        }
        #rL() {
          if (!this.#rb) {
            return;
          }
          this.#rb = false;
          this.thickness;
          this.parentScale;
          let t = this.currentPath.slice(-3);
          t.map(t => t[0]);
          t.map(t => t[1]);
          let {
            ctx: e
          } = this;
          e.save();
          e.clearRect(0, 0, this.canvas.width, this.canvas.height);
          for (let t of this.bezierPath2D) {
            e.stroke(t);
          }
          e.stroke(this.#rv);
          e.restore();
        }
        #rB(t, e, r, i, n, o, s) {
          let a = (e + i) / 2;
          let l = (r + n) / 2;
          let h = (i + o) / 2;
          let c = (n + s) / 2;
          t.bezierCurveTo(a + (i - a) * 2 / 3, l + (n - l) * 2 / 3, h + (i - h) * 2 / 3, c + (n - c) * 2 / 3, h, c);
        }
        #rU() {
          let t;
          let e = this.currentPath;
          if (e.length <= 2) {
            return [[e[0], e[0], e.at(-1), e.at(-1)]];
          }
          let r = [];
          let [i, n] = e[0];
          for (t = 1; t < e.length - 2; t++) {
            let [o, s] = e[t];
            let [a, l] = e[t + 1];
            let h = (o + a) / 2;
            let c = (s + l) / 2;
            let u = [i + (o - i) * 2 / 3, n + (s - n) * 2 / 3];
            let d = [h + (o - h) * 2 / 3, c + (s - c) * 2 / 3];
            r.push([[i, n], u, d, [h, c]]);
            [i, n] = [h, c];
          }
          let [o, s] = e[t];
          let [a, l] = e[t + 1];
          let h = [i + (o - i) * 2 / 3, n + (s - n) * 2 / 3];
          let c = [a + (o - a) * 2 / 3, l + (s - l) * 2 / 3];
          r.push([[i, n], h, c, [a, l]]);
          return r;
        }
        #rk() {
          if (this.isEmpty()) {
            this.#rz();
            return;
          }
          this.#rD();
          let {
            canvas: t,
            ctx: e
          } = this;
          e.setTransform(1, 0, 0, 1, 0, 0);
          e.clearRect(0, 0, t.width, t.height);
          this.#rz();
          for (let r of this.bezierPath2D) {
            e.stroke(r);
          }
        }
        commit() {
          if (!this.#ry) {
            super.commit();
            this.isEditing = false;
            this.disableEditMode();
            this.setInForeground();
            this.#ry = true;
            this.div.classList.add("disabled");
            this.#rF(true);
            this.makeResizable();
            this.parent.addInkEditorIfNeeded(true);
            this.moveInDOM();
            this.div.focus({
              preventScroll: true
            });
          }
        }
        focusin(t) {
          if (this._focusEventsAllowed) {
            super.focusin(t);
            this.enableEditMode();
          }
        }
        canvasPointerdown(t) {
          if (t.button === 0 && this.isInEditMode() && !this.#ry) {
            this.setInForeground();
            t.preventDefault();
            if (t.type !== "mouse") {
              this.div.focus();
            }
            this.#rI(t.offsetX, t.offsetY);
          }
        }
        canvasPointermove(t) {
          t.preventDefault();
          this.#rN(t.offsetX, t.offsetY);
        }
        canvasPointerup(t) {
          t.preventDefault();
          this.#rV(t);
        }
        canvasPointerleave(t) {
          this.#rV(t);
        }
        #rV(t) {
          this.canvas.removeEventListener("pointerleave", this.#rp);
          this.canvas.removeEventListener("pointermove", this.#rf);
          this.canvas.removeEventListener("pointerup", this.#rg);
          this.canvas.addEventListener("pointerdown", this.#rm);
          setTimeout(() => {
            this.canvas.removeEventListener("contextmenu", s.noContextMenu);
          }, 10);
          this.#r_(t.offsetX, t.offsetY);
          this.addToAnnotationStorage();
          this.setInBackground();
        }
        #rP() {
          this.canvas = document.createElement("canvas");
          this.canvas.width = this.canvas.height = 0;
          this.canvas.className = "inkEditorCanvas";
          n.AnnotationEditor._l10nPromise.get("editor_ink_canvas_aria_label").then(t => this.canvas?.setAttribute("aria-label", t));
          this.div.append(this.canvas);
          this.ctx = this.canvas.getContext("2d");
        }
        #rR() {
          this.#rS = new ResizeObserver(t => {
            let e = t[0].contentRect;
            if (e.width && e.height) {
              this.setDimensions(e.width, e.height);
            }
          });
          this.#rS.observe(this.div);
        }
        get isResizable() {
          return !this.isEmpty() && this.#ry;
        }
        render() {
          let t;
          let e;
          if (this.div) {
            return this.div;
          }
          if (this.width) {
            t = this.x;
            e = this.y;
          }
          super.render();
          n.AnnotationEditor._l10nPromise.get("editor_ink2_aria_label").then(t => this.div?.setAttribute("aria-label", t));
          let [r, i, o, s] = this.#rO();
          this.setAt(r, i, 0, 0);
          this.setDims(o, s);
          this.#rP();
          if (this.width) {
            let [r, i] = this.parentDimensions;
            this.setAspectRatio(this.width * r, this.height * i);
            this.setAt(t * r, e * i, this.width * r, this.height * i);
            this.#rA = true;
            this.#rM();
            this.setDims(this.width * r, this.height * i);
            this.#rk();
            this.div.classList.add("disabled");
          } else {
            this.div.classList.add("editing");
            this.enableEditMode();
          }
          this.#rR();
          return this.div;
        }
        #rM() {
          if (!this.#rA) {
            return;
          }
          let [t, e] = this.parentDimensions;
          this.canvas.width = Math.ceil(this.width * t);
          this.canvas.height = Math.ceil(this.height * e);
          this.#rz();
        }
        setDimensions(t, e) {
          let r = Math.round(t);
          let i = Math.round(e);
          if (this.#rx === r && this.#rw === i) {
            return;
          }
          this.#rx = r;
          this.#rw = i;
          this.canvas.style.visibility = "hidden";
          let [n, o] = this.parentDimensions;
          this.width = t / n;
          this.height = e / o;
          this.fixAndSetPosition();
          if (this.#ry) {
            this.#rW(t, e);
          }
          this.#rM();
          this.#rk();
          this.canvas.style.visibility = "visible";
          this.fixDims();
        }
        #rW(t, e) {
          let r = this.#rG();
          let i = (t - r) / this.#rd;
          let n = (e - r) / this.#ru;
          this.scaleFactor = Math.min(i, n);
        }
        #rz() {
          let t = this.#rG() / 2;
          this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + t, this.translationY * this.scaleFactor + t);
        }
        static #rq(t) {
          let e = new Path2D();
          for (let r = 0, i = t.length; r < i; r++) {
            let [i, n, o, s] = t[r];
            if (r === 0) {
              e.moveTo(...i);
            }
            e.bezierCurveTo(n[0], n[1], o[0], o[1], s[0], s[1]);
          }
          return e;
        }
        static #rH(t, e, r) {
          let [i, n, o, s] = e;
          switch (r) {
            case 0:
              for (let e = 0, r = t.length; e < r; e += 2) {
                t[e] += i;
                t[e + 1] = s - t[e + 1];
              }
              break;
            case 90:
              for (let e = 0, r = t.length; e < r; e += 2) {
                let r = t[e];
                t[e] = t[e + 1] + i;
                t[e + 1] = r + n;
              }
              break;
            case 180:
              for (let e = 0, r = t.length; e < r; e += 2) {
                t[e] = o - t[e];
                t[e + 1] += n;
              }
              break;
            case 270:
              for (let e = 0, r = t.length; e < r; e += 2) {
                let r = t[e];
                t[e] = o - t[e + 1];
                t[e + 1] = s - r;
              }
              break;
            default:
              throw Error("Invalid rotation");
          }
          return t;
        }
        static #rK(t, e, r) {
          let [i, n, o, s] = e;
          switch (r) {
            case 0:
              for (let e = 0, r = t.length; e < r; e += 2) {
                t[e] -= i;
                t[e + 1] = s - t[e + 1];
              }
              break;
            case 90:
              for (let e = 0, r = t.length; e < r; e += 2) {
                let r = t[e];
                t[e] = t[e + 1] - n;
                t[e + 1] = r - i;
              }
              break;
            case 180:
              for (let e = 0, r = t.length; e < r; e += 2) {
                t[e] = o - t[e];
                t[e + 1] -= n;
              }
              break;
            case 270:
              for (let e = 0, r = t.length; e < r; e += 2) {
                let r = t[e];
                t[e] = s - t[e + 1];
                t[e + 1] = o - r;
              }
              break;
            default:
              throw Error("Invalid rotation");
          }
          return t;
        }
        #rX(t, e, r, i) {
          let n = [];
          let o = this.thickness / 2;
          let s = t * e + o;
          let a = t * r + o;
          for (let e of this.paths) {
            let r = [];
            let o = [];
            for (let i = 0, n = e.length; i < n; i++) {
              let [l, h, c, u] = e[i];
              let d = t * l[0] + s;
              let f = t * l[1] + a;
              let p = t * h[0] + s;
              let g = t * h[1] + a;
              let m = t * c[0] + s;
              let v = t * c[1] + a;
              let y = t * u[0] + s;
              let b = t * u[1] + a;
              if (i === 0) {
                r.push(d, f);
                o.push(d, f);
              }
              r.push(p, g, m, v, y, b);
              o.push(p, g);
              if (i === n - 1) {
                o.push(y, b);
              }
            }
            n.push({
              bezier: l.#rH(r, i, this.rotation),
              points: l.#rH(o, i, this.rotation)
            });
          }
          return n;
        }
        #rZ() {
          let t = Infinity;
          let e = -Infinity;
          let r = Infinity;
          let n = -Infinity;
          for (let o of this.paths) {
            for (let [s, a, l, h] of o) {
              let o = i.Util.bezierBoundingBox(...s, ...a, ...l, ...h);
              t = Math.min(t, o[0]);
              r = Math.min(r, o[1]);
              e = Math.max(e, o[2]);
              n = Math.max(n, o[3]);
            }
          }
          return [t, r, e, n];
        }
        #rG() {
          if (this.#ry) {
            return Math.ceil(this.thickness * this.parentScale);
          } else {
            return 0;
          }
        }
        #rF(t = false) {
          if (this.isEmpty()) {
            return;
          }
          if (!this.#ry) {
            this.#rk();
            return;
          }
          let e = this.#rZ();
          let r = this.#rG();
          this.#rd = Math.max(n.AnnotationEditor.MIN_SIZE, e[2] - e[0]);
          this.#ru = Math.max(n.AnnotationEditor.MIN_SIZE, e[3] - e[1]);
          let i = Math.ceil(r + this.#rd * this.scaleFactor);
          let o = Math.ceil(r + this.#ru * this.scaleFactor);
          let [s, a] = this.parentDimensions;
          this.width = i / s;
          this.height = o / a;
          this.setAspectRatio(i, o);
          let l = this.translationX;
          let h = this.translationY;
          this.translationX = -e[0];
          this.translationY = -e[1];
          this.#rM();
          this.#rk();
          this.#rx = i;
          this.#rw = o;
          this.setDims(i, o);
          let c = t ? r / this.scaleFactor / 2 : 0;
          this.translate(l - this.translationX - c, h - this.translationY - c);
        }
        static deserialize(t, e, r) {
          if (t instanceof o.InkAnnotationElement) {
            return null;
          }
          let s = super.deserialize(t, e, r);
          s.thickness = t.thickness;
          s.color = i.Util.makeHexColor(...t.color);
          s.opacity = t.opacity;
          let [a, h] = s.pageDimensions;
          let c = s.width * a;
          let u = s.height * h;
          let d = s.parentScale;
          let f = t.thickness / 2;
          s.#ry = true;
          s.#rx = Math.round(c);
          s.#rw = Math.round(u);
          let {
            paths: p,
            rect: g,
            rotation: m
          } = t;
          for (let {
            bezier: t
          } of p) {
            t = l.#rK(t, g, m);
            let e = [];
            s.paths.push(e);
            let r = d * (t[0] - f);
            let i = d * (t[1] - f);
            for (let n = 2, o = t.length; n < o; n += 6) {
              let o = d * (t[n] - f);
              let s = d * (t[n + 1] - f);
              let a = d * (t[n + 2] - f);
              let l = d * (t[n + 3] - f);
              let h = d * (t[n + 4] - f);
              let c = d * (t[n + 5] - f);
              e.push([[r, i], [o, s], [a, l], [h, c]]);
              r = h;
              i = c;
            }
            let n = this.#rq(e);
            s.bezierPath2D.push(n);
          }
          let v = s.#rZ();
          s.#rd = Math.max(n.AnnotationEditor.MIN_SIZE, v[2] - v[0]);
          s.#ru = Math.max(n.AnnotationEditor.MIN_SIZE, v[3] - v[1]);
          s.#rW(c, u);
          return s;
        }
        serialize() {
          if (this.isEmpty()) {
            return null;
          }
          let t = this.getRect(0, 0);
          let e = n.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
          return {
            annotationType: i.AnnotationEditorType.INK,
            color: e,
            thickness: this.thickness,
            opacity: this.opacity,
            paths: this.#rX(this.scaleFactor / this.parentScale, this.translationX, this.translationY, t),
            pageIndex: this.pageIndex,
            rect: t,
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId
          };
        }
      }
      e.InkEditor = l;
    }, (t, e, r) => {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.StampEditor = undefined;
      var i = r(1);
      var n = r(4);
      var o = r(6);
      var s = r(29);
      class a extends n.AnnotationEditor {
        #rY = null;
        #rJ = null;
        #rQ = null;
        #r$ = null;
        #r0 = null;
        #r1 = null;
        #rS = null;
        #r2 = null;
        #r5 = false;
        #r3 = false;
        static _type = "stamp";
        constructor(t) {
          super({
            ...t,
            name: "stampEditor"
          });
          this.#r$ = t.bitmapUrl;
          this.#r0 = t.bitmapFile;
        }
        static initialize(t) {
          n.AnnotationEditor.initialize(t);
        }
        static get supportedTypes() {
          let t = ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"];
          return i.shadow(this, "supportedTypes", t.map(t => `image/${t}`));
        }
        static get supportedTypesStr() {
          return i.shadow(this, "supportedTypesStr", this.supportedTypes.join(","));
        }
        static isHandlingMimeForPasting(t) {
          return this.supportedTypes.includes(t);
        }
        static paste(t, e) {
          e.pasteEditor(i.AnnotationEditorType.STAMP, {
            bitmapFile: t.getAsFile()
          });
        }
        #r4(t, e = false) {
          if (!t) {
            this.remove();
            return;
          }
          this.#rY = t.bitmap;
          if (!e) {
            this.#rJ = t.id;
            this.#r5 = t.isSvg;
          }
          this.#rP();
        }
        #r6() {
          this.#rQ = null;
          this._uiManager.enableWaiting(false);
          if (this.#r1) {
            this.div.focus();
          }
        }
        #r8() {
          if (this.#rJ) {
            this._uiManager.enableWaiting(true);
            this._uiManager.imageManager.getFromId(this.#rJ).then(t => this.#r4(t, true)).finally(() => this.#r6());
            return;
          }
          if (this.#r$) {
            let t = this.#r$;
            this.#r$ = null;
            this._uiManager.enableWaiting(true);
            this.#rQ = this._uiManager.imageManager.getFromUrl(t).then(t => this.#r4(t)).finally(() => this.#r6());
            return;
          }
          if (this.#r0) {
            let t = this.#r0;
            this.#r0 = null;
            this._uiManager.enableWaiting(true);
            this.#rQ = this._uiManager.imageManager.getFromFile(t).then(t => this.#r4(t)).finally(() => this.#r6());
            return;
          }
          let t = document.createElement("input");
          t.type = "file";
          t.accept = a.supportedTypesStr;
          this.#rQ = new Promise(e => {
            t.addEventListener("change", async () => {
              if (t.files && t.files.length !== 0) {
                this._uiManager.enableWaiting(true);
                let e = await this._uiManager.imageManager.getFromFile(t.files[0]);
                this.#r4(e);
              } else {
                this.remove();
              }
              e();
            });
            t.addEventListener("cancel", () => {
              this.remove();
              e();
            });
          }).finally(() => this.#r6());
          t.click();
        }
        remove() {
          if (this.#rJ) {
            this.#rY = null;
            this._uiManager.imageManager.deleteId(this.#rJ);
            this.#r1?.remove();
            this.#r1 = null;
            this.#rS?.disconnect();
            this.#rS = null;
          }
          super.remove();
        }
        rebuild() {
          if (!this.parent) {
            if (this.#rJ) {
              this.#r8();
            }
            return;
          }
          super.rebuild();
          if (this.div !== null) {
            if (this.#rJ) {
              this.#r8();
            }
            if (!this.isAttachedToDOM) {
              this.parent.add(this);
            }
          }
        }
        onceAdded() {
          this._isDraggable = true;
          this.div.focus();
        }
        isEmpty() {
          return !this.#rQ && !this.#rY && !this.#r$ && !this.#r0;
        }
        get isResizable() {
          return true;
        }
        render() {
          let t;
          let e;
          if (this.div) {
            return this.div;
          }
          if (this.width) {
            t = this.x;
            e = this.y;
          }
          super.render();
          this.div.hidden = true;
          if (this.#rY) {
            this.#rP();
          } else {
            this.#r8();
          }
          if (this.width) {
            let [r, i] = this.parentDimensions;
            this.setAt(t * r, e * i, this.width * r, this.height * i);
          }
          return this.div;
        }
        #rP() {
          let {
            div: t
          } = this;
          let {
            width: e,
            height: r
          } = this.#rY;
          let [i, n] = this.pageDimensions;
          let o = 0.75;
          if (this.width) {
            e = this.width * i;
            r = this.height * n;
          } else if (e > o * i || r > o * n) {
            let t = Math.min(o * i / e, o * n / r);
            e *= t;
            r *= t;
          }
          let [s, a] = this.parentDimensions;
          this.setDims(e * s / i, r * a / n);
          this._uiManager.enableWaiting(false);
          let l = this.#r1 = document.createElement("canvas");
          t.append(l);
          t.hidden = false;
          this.#r9(e, r);
          this.#rR();
          if (!this.#r3) {
            this.parent.addUndoableEditor(this);
            this.#r3 = true;
          }
          this._uiManager._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              subtype: this.editorType,
              data: {
                action: "inserted_image"
              }
            }
          });
          this.addAltTextButton();
        }
        #r7(t, e) {
          let [r, i] = this.parentDimensions;
          this.width = t / r;
          this.height = e / i;
          this.setDims(t, e);
          if (this._initialOptions?.isCentered) {
            this.center();
          } else {
            this.fixAndSetPosition();
          }
          this._initialOptions = null;
          if (this.#r2 !== null) {
            clearTimeout(this.#r2);
          }
          let n = 200;
          this.#r2 = setTimeout(() => {
            this.#r2 = null;
            this.#r9(t, e);
          }, n);
        }
        #it(t, e) {
          let {
            width: r,
            height: i
          } = this.#rY;
          let n = r;
          let o = i;
          let s = this.#rY;
          while (n > t * 2 || o > e * 2) {
            let r = n;
            let i = o;
            if (n > t * 2) {
              n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2);
            }
            if (o > e * 2) {
              o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2);
            }
            let a = new OffscreenCanvas(n, o);
            a.getContext("2d").drawImage(s, 0, 0, r, i, 0, 0, n, o);
            s = a.transferToImageBitmap();
          }
          return s;
        }
        #r9(t, e) {
          t = Math.ceil(t);
          e = Math.ceil(e);
          let r = this.#r1;
          if (!r || r.width === t && r.height === e) {
            return;
          }
          r.width = t;
          r.height = e;
          let i = this.#r5 ? this.#rY : this.#it(t, e);
          let n = r.getContext("2d");
          n.filter = this._uiManager.hcmFilter;
          n.drawImage(i, 0, 0, i.width, i.height, 0, 0, t, e);
        }
        #ie(t) {
          if (t) {
            if (this.#r5) {
              let t = this._uiManager.imageManager.getSvgUrl(this.#rJ);
              if (t) {
                return t;
              }
            }
            let t = document.createElement("canvas");
            ({
              width: t.width,
              height: t.height
            } = this.#rY);
            t.getContext("2d").drawImage(this.#rY, 0, 0);
            return t.toDataURL();
          }
          if (this.#r5) {
            let [t, e] = this.pageDimensions;
            let r = Math.round(this.width * t * o.PixelsPerInch.PDF_TO_CSS_UNITS);
            let i = Math.round(this.height * e * o.PixelsPerInch.PDF_TO_CSS_UNITS);
            let n = new OffscreenCanvas(r, i);
            n.getContext("2d").drawImage(this.#rY, 0, 0, this.#rY.width, this.#rY.height, 0, 0, r, i);
            return n.transferToImageBitmap();
          }
          return structuredClone(this.#rY);
        }
        #rR() {
          this.#rS = new ResizeObserver(t => {
            let e = t[0].contentRect;
            if (e.width && e.height) {
              this.#r7(e.width, e.height);
            }
          });
          this.#rS.observe(this.div);
        }
        static deserialize(t, e, r) {
          if (t instanceof s.StampAnnotationElement) {
            return null;
          }
          let i = super.deserialize(t, e, r);
          let {
            rect: n,
            bitmapUrl: o,
            bitmapId: a,
            isSvg: l,
            accessibilityData: h
          } = t;
          if (a && r.imageManager.isValidId(a)) {
            i.#rJ = a;
          } else {
            i.#r$ = o;
          }
          i.#r5 = l;
          let [c, u] = i.pageDimensions;
          i.width = (n[2] - n[0]) / c;
          i.height = (n[3] - n[1]) / u;
          if (h) {
            i.altTextData = h;
          }
          return i;
        }
        serialize(t = false, e = null) {
          if (this.isEmpty()) {
            return null;
          }
          let r = {
            annotationType: i.AnnotationEditorType.STAMP,
            bitmapId: this.#rJ,
            pageIndex: this.pageIndex,
            rect: this.getRect(0, 0),
            rotation: this.rotation,
            isSvg: this.#r5,
            structTreeParentId: this._structTreeParentId
          };
          if (t) {
            r.bitmapUrl = this.#ie(true);
            r.accessibilityData = this.altTextData;
            return r;
          }
          let {
            decorative: n,
            altText: o
          } = this.altTextData;
          if (!n && o) {
            r.accessibilityData = {
              type: "Figure",
              alt: o
            };
          }
          if (e === null) {
            return r;
          }
          e.stamps ||= new Map();
          let s = this.#r5 ? (r.rect[2] - r.rect[0]) * (r.rect[3] - r.rect[1]) : null;
          if (e.stamps.has(this.#rJ)) {
            if (this.#r5) {
              let t = e.stamps.get(this.#rJ);
              if (s > t.area) {
                t.area = s;
                t.serialized.bitmap.close();
                t.serialized.bitmap = this.#ie(false);
              }
            }
          } else {
            e.stamps.set(this.#rJ, {
              area: s,
              serialized: r
            });
            r.bitmap = this.#ie(false);
          }
          return r;
        }
      }
      e.StampEditor = a;
    }];
    var __webpack_module_cache__ = {};
    function __w_pdfjs_require__(t) {
      var e = __webpack_module_cache__[t];
      if (e !== undefined) {
        return e.exports;
      }
      var r = __webpack_module_cache__[t] = {
        exports: {}
      };
      __webpack_modules__[t](r, r.exports, __w_pdfjs_require__);
      return r.exports;
    }
    var __nested_webpack_exports__ = {};
    (() => {
      var t = __nested_webpack_exports__;
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      Object.defineProperty(t, "AbortException", {
        enumerable: true,
        get: function () {
          return e.AbortException;
        }
      });
      Object.defineProperty(t, "AnnotationEditorLayer", {
        enumerable: true,
        get: function () {
          return o.AnnotationEditorLayer;
        }
      });
      Object.defineProperty(t, "AnnotationEditorParamsType", {
        enumerable: true,
        get: function () {
          return e.AnnotationEditorParamsType;
        }
      });
      Object.defineProperty(t, "AnnotationEditorType", {
        enumerable: true,
        get: function () {
          return e.AnnotationEditorType;
        }
      });
      Object.defineProperty(t, "AnnotationEditorUIManager", {
        enumerable: true,
        get: function () {
          return s.AnnotationEditorUIManager;
        }
      });
      Object.defineProperty(t, "AnnotationLayer", {
        enumerable: true,
        get: function () {
          return a.AnnotationLayer;
        }
      });
      Object.defineProperty(t, "AnnotationMode", {
        enumerable: true,
        get: function () {
          return e.AnnotationMode;
        }
      });
      Object.defineProperty(t, "CMapCompressionType", {
        enumerable: true,
        get: function () {
          return e.CMapCompressionType;
        }
      });
      Object.defineProperty(t, "DOMSVGFactory", {
        enumerable: true,
        get: function () {
          return i.DOMSVGFactory;
        }
      });
      Object.defineProperty(t, "FeatureTest", {
        enumerable: true,
        get: function () {
          return e.FeatureTest;
        }
      });
      Object.defineProperty(t, "GlobalWorkerOptions", {
        enumerable: true,
        get: function () {
          return l.GlobalWorkerOptions;
        }
      });
      Object.defineProperty(t, "ImageKind", {
        enumerable: true,
        get: function () {
          return e.ImageKind;
        }
      });
      Object.defineProperty(t, "InvalidPDFException", {
        enumerable: true,
        get: function () {
          return e.InvalidPDFException;
        }
      });
      Object.defineProperty(t, "MissingPDFException", {
        enumerable: true,
        get: function () {
          return e.MissingPDFException;
        }
      });
      Object.defineProperty(t, "OPS", {
        enumerable: true,
        get: function () {
          return e.OPS;
        }
      });
      Object.defineProperty(t, "PDFDataRangeTransport", {
        enumerable: true,
        get: function () {
          return r.PDFDataRangeTransport;
        }
      });
      Object.defineProperty(t, "PDFDateString", {
        enumerable: true,
        get: function () {
          return i.PDFDateString;
        }
      });
      Object.defineProperty(t, "PDFWorker", {
        enumerable: true,
        get: function () {
          return r.PDFWorker;
        }
      });
      Object.defineProperty(t, "PasswordResponses", {
        enumerable: true,
        get: function () {
          return e.PasswordResponses;
        }
      });
      Object.defineProperty(t, "PermissionFlag", {
        enumerable: true,
        get: function () {
          return e.PermissionFlag;
        }
      });
      Object.defineProperty(t, "PixelsPerInch", {
        enumerable: true,
        get: function () {
          return i.PixelsPerInch;
        }
      });
      Object.defineProperty(t, "PromiseCapability", {
        enumerable: true,
        get: function () {
          return e.PromiseCapability;
        }
      });
      Object.defineProperty(t, "RenderingCancelledException", {
        enumerable: true,
        get: function () {
          return i.RenderingCancelledException;
        }
      });
      Object.defineProperty(t, "SVGGraphics", {
        enumerable: true,
        get: function () {
          return r.SVGGraphics;
        }
      });
      Object.defineProperty(t, "UnexpectedResponseException", {
        enumerable: true,
        get: function () {
          return e.UnexpectedResponseException;
        }
      });
      Object.defineProperty(t, "Util", {
        enumerable: true,
        get: function () {
          return e.Util;
        }
      });
      Object.defineProperty(t, "VerbosityLevel", {
        enumerable: true,
        get: function () {
          return e.VerbosityLevel;
        }
      });
      Object.defineProperty(t, "XfaLayer", {
        enumerable: true,
        get: function () {
          return h.XfaLayer;
        }
      });
      Object.defineProperty(t, "build", {
        enumerable: true,
        get: function () {
          return r.build;
        }
      });
      Object.defineProperty(t, "createValidAbsoluteUrl", {
        enumerable: true,
        get: function () {
          return e.createValidAbsoluteUrl;
        }
      });
      Object.defineProperty(t, "getDocument", {
        enumerable: true,
        get: function () {
          return r.getDocument;
        }
      });
      Object.defineProperty(t, "getFilenameFromUrl", {
        enumerable: true,
        get: function () {
          return i.getFilenameFromUrl;
        }
      });
      Object.defineProperty(t, "getPdfFilenameFromUrl", {
        enumerable: true,
        get: function () {
          return i.getPdfFilenameFromUrl;
        }
      });
      Object.defineProperty(t, "getXfaPageViewport", {
        enumerable: true,
        get: function () {
          return i.getXfaPageViewport;
        }
      });
      Object.defineProperty(t, "isDataScheme", {
        enumerable: true,
        get: function () {
          return i.isDataScheme;
        }
      });
      Object.defineProperty(t, "isPdfFile", {
        enumerable: true,
        get: function () {
          return i.isPdfFile;
        }
      });
      Object.defineProperty(t, "loadScript", {
        enumerable: true,
        get: function () {
          return i.loadScript;
        }
      });
      Object.defineProperty(t, "noContextMenu", {
        enumerable: true,
        get: function () {
          return i.noContextMenu;
        }
      });
      Object.defineProperty(t, "normalizeUnicode", {
        enumerable: true,
        get: function () {
          return e.normalizeUnicode;
        }
      });
      Object.defineProperty(t, "renderTextLayer", {
        enumerable: true,
        get: function () {
          return n.renderTextLayer;
        }
      });
      Object.defineProperty(t, "setLayerDimensions", {
        enumerable: true,
        get: function () {
          return i.setLayerDimensions;
        }
      });
      Object.defineProperty(t, "shadow", {
        enumerable: true,
        get: function () {
          return e.shadow;
        }
      });
      Object.defineProperty(t, "updateTextLayer", {
        enumerable: true,
        get: function () {
          return n.updateTextLayer;
        }
      });
      Object.defineProperty(t, "version", {
        enumerable: true,
        get: function () {
          return r.version;
        }
      });
      var e = __w_pdfjs_require__(1);
      var r = __w_pdfjs_require__(2);
      var i = __w_pdfjs_require__(6);
      var n = __w_pdfjs_require__(26);
      var o = __w_pdfjs_require__(27);
      var s = __w_pdfjs_require__(5);
      var a = __w_pdfjs_require__(29);
      var l = __w_pdfjs_require__(14);
      var h = __w_pdfjs_require__(32);
    })();
    return __nested_webpack_exports__;
  })());
}