// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'SamanthaButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 307533
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var l = {
    "samantha-button": "samantha-button-BghSMg",
    samanthaButton: "samantha-button-BghSMg",
    primary: "primary-ILSaWX",
    secondary: "secondary-DFAUit",
    tertiary: "tertiary-o1h39p",
    quartary: "quartary-aYEGEv",
    "danger-primary": "danger-primary-F4AGmu",
    dangerPrimary: "danger-primary-F4AGmu",
    "danger-secondary": "danger-secondary-NmhtRe",
    dangerSecondary: "danger-secondary-NmhtRe",
    "danger-tertiary": "danger-tertiary-NjiaGk",
    dangerTertiary: "danger-tertiary-NjiaGk",
    "ai-primary": "ai-primary-y5Hq_o",
    aiPrimary: "ai-primary-y5Hq_o",
    "rotate-anim": "rotate-anim-XYikfA",
    rotateAnim: "rotate-anim-XYikfA",
    large: "large-_ZK9JD",
    "icon-only": "icon-only-BL0gii",
    iconOnly: "icon-only-BL0gii",
    icon: "icon-hKywyK",
    medium: "medium-VC3b8a",
    small: "small-e8_KcA",
    "ai-secondary": "ai-secondary-HZfU02",
    aiSecondary: "ai-secondary-HZfU02",
    "image-primary": "image-primary-wMDMhY",
    imagePrimary: "image-primary-wMDMhY",
    "image-secondary": "image-secondary-ICUN7w",
    imageSecondary: "image-secondary-ICUN7w",
    "image-primary-dark": "image-primary-dark-rSxm7a",
    imagePrimaryDark: "image-primary-dark-rSxm7a",
    "image-secondary-dark": "image-secondary-dark-wxFd7P",
    imageSecondaryDark: "image-secondary-dark-wxFd7P",
    logo: "logo-MhfZK1",
    "icon-right": "icon-right-FlEKpJ",
    iconRight: "icon-right-FlEKpJ"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      type: n = "primary",
      size: i = "medium",
      logo: r = false,
      ...c
    } = e;
    let {
      icon: d,
      iconPosition: u
    } = c;
    let h = d || e.loading;
    let p = d && r;
    return reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
      ref: t,
      ...c,
      theme: "solid",
      type: "primary",
      size: "default",
      className: o(l["samantha-button"], l[n], l[i], {
        [l.icon]: h,
        [l["icon-right"]]: h && u === "right",
        [l["icon-only"]]: h && !e.children,
        [l.logo]: p
      }, c.className),
      children: e.children
    });
  });
  require.d(exports, {
    SamanthaButton: function () {
      return c;
    }
  });
}