// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$n' to 'pageIndexPropType'
// - Renamed export 'DV' to 'rendererTypePropType'
// - Renamed export 'F$' to 'pageNumberPropType'
// - Renamed export 'Gg' to 'eventHandlerPropTypes'
// - Renamed export 'Ze' to 'customRendererPropType'
// - Renamed export 'dq' to 'refPropType'
// - Renamed export 'lA' to 'rotationPropType'
// - Renamed export 'qd' to 'validatePageIndex'
// - Renamed export 'zE' to 'pdfSourcePropType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 669120
         */
module.exports = function (module, exports, require) {
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var reactEventHandlerUtils = require("react-event-handler-utils") /*id: 894068*/;
  var pdfJsCoreWrapper = require("pdf-js-core-wrapper") /*id: 60502*/;
  var pdfRendererUtils = require("pdf-renderer-utils") /*id: 665248*/;
  var pdfViewerController = require("pdf-viewer-controller") /*id: 153449*/;
  let {
    PDFDataRangeTransport: l
  } = pdfJsCoreWrapper.pdfJsCore;
  let h = (() => {
    let t = {};
    reactEventHandlerUtils.eventHandlerNames.forEach(e => {
      t[e] = propTypesFactoryWrapper.func;
    });
    return t;
  })();
  let c = propTypesFactoryWrapper.oneOfType([propTypesFactoryWrapper.instanceOf(Int8Array), propTypesFactoryWrapper.instanceOf(Uint8Array), propTypesFactoryWrapper.instanceOf(Uint8ClampedArray), propTypesFactoryWrapper.instanceOf(Int16Array), propTypesFactoryWrapper.instanceOf(Uint16Array), propTypesFactoryWrapper.instanceOf(Int32Array), propTypesFactoryWrapper.instanceOf(Uint32Array), propTypesFactoryWrapper.instanceOf(Float32Array), propTypesFactoryWrapper.instanceOf(Float64Array)]);
  let u = [propTypesFactoryWrapper.string, propTypesFactoryWrapper.instanceOf(ArrayBuffer), propTypesFactoryWrapper.shape({
    data: propTypesFactoryWrapper.oneOfType([propTypesFactoryWrapper.string, propTypesFactoryWrapper.instanceOf(ArrayBuffer), propTypesFactoryWrapper.arrayOf(propTypesFactoryWrapper.number.isRequired), c]).isRequired
  }), propTypesFactoryWrapper.shape({
    range: propTypesFactoryWrapper.instanceOf(l).isRequired
  }), propTypesFactoryWrapper.shape({
    url: propTypesFactoryWrapper.string.isRequired
  })];
  if (typeof Blob != "undefined") {
    u.push(propTypesFactoryWrapper.instanceOf(Blob));
  }
  let d = propTypesFactoryWrapper.oneOfType([propTypesFactoryWrapper.string, propTypesFactoryWrapper.arrayOf(propTypesFactoryWrapper.string)]);
  let f = propTypesFactoryWrapper.oneOfType(u);
  propTypesFactoryWrapper.instanceOf(pdfViewerController.PdfViewerController);
  propTypesFactoryWrapper.oneOf(["_self", "_blank", "_parent", "_top"]);
  propTypesFactoryWrapper.shape({
    commonObjs: propTypesFactoryWrapper.shape({}).isRequired,
    getAnnotations: propTypesFactoryWrapper.func.isRequired,
    getTextContent: propTypesFactoryWrapper.func.isRequired,
    getViewport: propTypesFactoryWrapper.func.isRequired,
    render: propTypesFactoryWrapper.func.isRequired
  });
  let p = function (t, e, r) {
    let {
      [e]: i,
      pageNumber: n,
      pdf: o
    } = t;
    if (!pdfRendererUtils.isDefined(o)) {
      return null;
    }
    if (pdfRendererUtils.isDefined(i)) {
      if (typeof i != "number") {
        return Error(`\`${e}\` of type \`${typeof i}\` supplied to \`${r}\`, expected \`number\`.`);
      }
      if (i < 0) {
        return Error(`Expected \`${e}\` to be greater or equal to 0.`);
      }
      let {
        numPages: t
      } = o;
      if (i + 1 > t) {
        return Error(`Expected \`${e}\` to be less or equal to ${t - 1}.`);
      }
    } else if (!pdfRendererUtils.isDefined(n)) {
      return Error(`\`${e}\` not supplied. Either pageIndex or pageNumber must be supplied to \`${r}\`.`);
    }
    return null;
  };
  let g = function (t, e, r) {
    let {
      [e]: i,
      pageIndex: n,
      pdf: o
    } = t;
    if (!pdfRendererUtils.isDefined(o)) {
      return null;
    }
    if (pdfRendererUtils.isDefined(i)) {
      if (typeof i != "number") {
        return Error(`\`${e}\` of type \`${typeof i}\` supplied to \`${r}\`, expected \`number\`.`);
      }
      if (i < 1) {
        return Error(`Expected \`${e}\` to be greater or equal to 1.`);
      }
      let {
        numPages: t
      } = o;
      if (i > t) {
        return Error(`Expected \`${e}\` to be less or equal to ${t}.`);
      }
    } else if (!pdfRendererUtils.isDefined(n)) {
      return Error(`\`${e}\` not supplied. Either pageIndex or pageNumber must be supplied to \`${r}\`.`);
    }
    return null;
  };
  let m = propTypesFactoryWrapper.oneOfType([propTypesFactoryWrapper.any, propTypesFactoryWrapper.oneOf([false])]);
  let v = propTypesFactoryWrapper.oneOfType([propTypesFactoryWrapper.func, propTypesFactoryWrapper.exact({
    current: propTypesFactoryWrapper.any
  })]);
  let y = propTypesFactoryWrapper.oneOf(["canvas", "custom", "none", "svg"]);
  let b = propTypesFactoryWrapper.oneOf([0, 90, 180, 270]);
  require.d(exports, {
    pageIndexPropType: function () {
      return d;
    },
    rendererTypePropType: function () {
      return y;
    },
    pageNumberPropType: function () {
      return g;
    },
    eventHandlerPropTypes: function () {
      return h;
    },
    customRendererPropType: function () {
      return m;
    },
    refPropType: function () {
      return v;
    },
    rotationPropType: function () {
      return b;
    },
    validatePageIndex: function () {
      return p;
    },
    pdfSourcePropType: function () {
      return f;
    }
  });
}