var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// <define:process.env>
var define_process_env_default = { NVM_RC_VERSION: "", NVM_INC: "/Users/patrickstainier/.nvm/versions/node/v20.17.0/include/node", npm_package_dependencies_emoji_mart: "^5.2.2", COREPACK_ROOT: "/Users/patrickstainier/.nvm/versions/node/v20.17.0/lib/node_modules/corepack", npm_package_dependencies_react_swipeable: "^7.0.1", npm_package_dependencies__100mslive_types_prebuilt: "0.12.12", npm_package_dependencies__radix_ui_react_tabs: "1.0.0", npm_package_devDependencies_tsc: "^2.0.4", TERM_PROGRAM: "vscode", NODE: "/Users/patrickstainier/.nvm/versions/node/v20.17.0/bin/node", npm_package_dependencies_worker_timers: "^7.0.40", npm_package_scripts_types_build: "tsc -p tsconfig.json", INIT_CWD: "/Users/patrickstainier/Projects/roomkit-react", NVM_CD_FLAGS: "-q", npm_package_devDependencies_typescript: "^5.6.2", npm_config_version_git_tag: "true", SHELL: "/bin/zsh", TERM: "xterm-256color", npm_package_dependencies__radix_ui_react_dialog: "1.0.4", npm_package_dependencies_eventemitter2: "^6.4.9", npm_package_dependencies__radix_ui_react_toast: "1.0.0", TMPDIR: "/var/folders/rf/1yp8_k550vxfpcv_k8b5hk440000gn/T/", npm_package_dependencies_react_virtualized_auto_sizer: "^1.0.7", npm_package_dependencies__100mslive_react_icons: "0.10.20", npm_package_devDependencies_esbuild: "^0.24.0", npm_package_devDependencies__babel_preset_typescript: "^7.22.5", npm_package_scripts_lint: "eslint -c .eslintrc --no-error-on-unmatched-pattern src --ext .js --ext .jsx --ext .ts --ext .tsx", npm_config_init_license: "MIT", TERM_PROGRAM_VERSION: "1.90.2", npm_package_dependencies_screenfull: "^5.1.0", npm_package_dependencies_react_intersection_observer: "^9.4.3", npm_package_scripts_dev: "node ../../scripts/dev", npm_package_scripts_prestart: "rm -rf dist && pnpm types:build", MallocNanoZone: "0", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", ZDOTDIR: "/Users/patrickstainier", npm_package_dependencies_uuid: "^10.0.0", npm_package_dependencies__100mslive_hms_video_store: "^0.12.20", npm_package_dependencies__radix_ui_react_select: "1.0.0", npm_package_sideEffects: "false", npm_config_registry: "https://registry.yarnpkg.com", PNPM_HOME: "/Users/patrickstainier/Library/pnpm", npm_package_dependencies_react_dom: "^18.2.0", npm_package_repository_url: "https://github.com/localpat/roomkit-react.git", npm_package_readmeFilename: "README.md", USER: "patrickstainier", NVM_DIR: "/Users/patrickstainier/.nvm", npm_package_description: "100ms Room Kit provides simple & easy to use UI components to build Live Streaming & Video Conferencing experiences in your apps.", npm_package_devDependencies_react: "^18.1.0", npm_package_devDependencies__types_react: "^18.1.0", npm_package_license: "MIT", COMMAND_MODE: "unix2003", npm_package_dependencies__radix_ui_react_tooltip: "1.0.6", npm_package_scripts_build_storybook: "sb build", npm_package_exports___import: "./dist/index.js", npm_package_devDependencies__babel_core: "^7.18.2", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.MmBEignOdg/Listeners", npm_package_dependencies_lodash: "^4.17.21", npm_package_devDependencies_esbuild_plugin_postcss2: "^0.1.2", npm_package_devDependencies_esbuild_loader: "^4.0.2", npm_package_devDependencies_babel_loader: "^8.2.5", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_package_devDependencies_postcss: "^8.4.47", npm_execpath: "/Users/patrickstainier/.cache/node/corepack/v1/yarn/1.22.22/bin/yarn.js", npm_package_dependencies__100mslive_hms_noise_cancellation: "0.0.1", npm_package_module: "dist/index.js", npm_package_dependencies_react_use: "^17.4.0", npm_package_devDependencies__types_mdx: "2.0.2", npm_package_author_name: "100ms", npm_package_dependencies__stitches_react: "^1.2.8", npm_package_dependencies_prop_types: "^15.8.1", PATH: "/var/folders/rf/1yp8_k550vxfpcv_k8b5hk440000gn/T/yarn--1727552734231-0.1008116892815416:/Users/patrickstainier/Projects/roomkit-react/node_modules/.bin:/Users/patrickstainier/.config/yarn/link/node_modules/.bin:/Users/patrickstainier/.nvm/versions/node/v20.17.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/patrickstainier/.nvm/versions/node/v20.17.0/lib/node_modules/npm/bin/node-gyp-bin:/Users/patrickstainier/.nvm/versions/node/v20.17.0/bin/node_modules/npm/bin/node-gyp-bin:/var/folders/rf/1yp8_k550vxfpcv_k8b5hk440000gn/T/yarn--1727552733192-0.520772034820369:/Users/patrickstainier/Projects/roomkit-react/node_modules/.bin:/Users/patrickstainier/.config/yarn/link/node_modules/.bin:/Users/patrickstainier/.nvm/versions/node/v20.17.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/patrickstainier/.nvm/versions/node/v20.17.0/lib/node_modules/npm/bin/node-gyp-bin:/Users/patrickstainier/.nvm/versions/node/v20.17.0/bin/node_modules/npm/bin/node-gyp-bin:/Users/patrickstainier/.nvm/versions/node/v20.17.0/bin:/Users/patrickstainier/.bun/bin:/Users/patrickstainier/.deno/bin:/usr/local/sbin:/usr/local/bin:/usr/local/opt/icu4c/sbin:/usr/local/opt/icu4c/bin:/Users/patrickstainier/.bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/go/bin:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/Users/patrickstainier/Library/pnpm:/Users/patrickstainier/.bun/bin:/Users/patrickstainier/.deno/bin:/usr/local/sbin:/usr/local/opt/icu4c/sbin:/usr/local/opt/icu4c/bin:/Users/patrickstainier/.bin:/Users/patrickstainier/.yarn/bin:/Users/patrickstainier/flutter/bin:/Users/patrickstainier/.yarn/bin:/Users/patrickstainier/flutter/bin", npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build"]}', npm_package_dependencies__emoji_mart_react: "^1.0.1", npm_package_scripts_lint_fix: "pnpm lint --fix", npm_package_dependencies__radix_ui_react_switch: "1.0.0", _: "/var/folders/rf/1yp8_k550vxfpcv_k8b5hk440000gn/T/yarn--1727552734231-0.1008116892815416/node", npm_package_dependencies__radix_ui_react_progress: "1.0.0", __CFBundleIdentifier: "com.microsoft.VSCode", USER_ZDOTDIR: "/Users/patrickstainier", COREPACK_ENABLE_DOWNLOAD_PROMPT: "1", PWD: "/Users/patrickstainier/Projects/roomkit-react", npm_package_devDependencies__types_react_window: "^1.8.5", npm_package_exports___index_css: "./dist/index.css", npm_package_dependencies__100mslive_react_sdk: "0.10.20", npm_lifecycle_event: "build:only", npm_package_scripts_build_only: "rm -rf dist && node ./scripts/build-webapp.js", LANG: "en_US.UTF-8", npm_package_packageManager: "yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e", npm_package_dependencies__100mslive_hms_whiteboard: "0.0.10", npm_package_repository_type: "git", npm_package_keywords_0: "100mslive", npm_package_name: "@100mslive/roomkit-react", npm_package_dependencies__100mslive_hms_virtual_background: "1.13.20", npm_package_devDependencies__babel_preset_react: "^7.22.5", npm_package_devDependencies__babel_preset_env: "^7.22.5", npm_package_keywords_1: "react", npm_package_devDependencies_babel_plugin_react_require: "3.1.3", npm_package_scripts_build: "yarn build:only && yarn types:build", npm_package_scripts_start: 'concurrently "yarn dev" "yarn types"', npm_package_keywords_2: "prebuilt", npm_config_version_commit_hooks: "true", XPC_FLAGS: "0x0", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", npm_package_keywords_3: "roomkit", npm_config_bin_links: "true", npm_config_wrap_output: "", npm_package_dependencies__radix_ui_react_collapsible: "1.0.0", npm_package_main: "dist/index.cjs.js", XPC_SERVICE_NAME: "0", npm_package_dependencies_recordrtc: "^5.6.2", npm_package_version: "0.3.20", VSCODE_INJECTION: "1", npm_package_devDependencies_autoprefixer: "^10.4.20", HOME: "/Users/patrickstainier", SHLVL: "3", npm_package_dependencies_react_window: "^1.8.7", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", npm_package_scripts_storybook: "sb dev -p 6006", npm_package_source: "src/index.ts", npm_package_dependencies_lodash_merge: "^4.6.2", npm_package_dependencies_dotenv: "^16.4.5", npm_package_dependencies__100mslive_hls_player: "0.3.20", npm_config_save_prefix: "^", npm_config_strict_ssl: "true", npm_package_dependencies__radix_ui_react_accordion: "1.0.0", npm_package_dependencies__emoji_mart_data: "^1.0.6", npm_config_version_git_message: "v%s", npm_package_dependencies_ts_pattern: "4.3.0", npm_package_dependencies__radix_ui_react_popover: "1.0.6", npm_package_exports___default: "./dist/index.js", LOGNAME: "patrickstainier", YARN_WRAP_OUTPUT: "false", npm_package_dependencies_qrcode_react: "^3.1.0", npm_package_devDependencies__types_lodash_merge: "^4.6.6", npm_package_scripts_format: "prettier -w src/**", npm_package_typings: "dist/index.d.ts", npm_lifecycle_script: "rm -rf dist && node ./scripts/build-webapp.js", npm_package_exports___require: "./dist/index.cjs.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/rf/1yp8_k550vxfpcv_k8b5hk440000gn/T/vscode-git-ac13509cc4.sock", npm_package_dependencies__radix_ui_react_slider: "1.0.0", npm_package_dependencies__radix_ui_react_checkbox: "1.0.0", npm_package_peerDependencies_react: ">=17.0.2 <19.0.0", npm_package_scripts_babel: "npx storybook@latest babelrc", BUN_INSTALL: "/Users/patrickstainier/.bun", NVM_BIN: "/Users/patrickstainier/.nvm/versions/node/v20.17.0/bin", npm_package_dependencies__radix_ui_react_label: "1.0.0", npm_package_devDependencies_knip: "^5.11.0", npm_config_version_git_sign: "", npm_config_ignore_scripts: "", npm_config_user_agent: "yarn/1.22.22 npm/? node/v20.17.0 darwin x64", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", npm_package_dependencies__radix_ui_react_dropdown_menu: "2.0.5", npm_package_scripts_types: "tsc -w", npm_package_files_1: "src", npm_package_files_0: "dist", npm_config_init_version: "1.0.0", npm_config_ignore_optional: "", npm_package_dependencies_react_draggable: "^4.4.5", COLORTERM: "truecolor", npm_node_execpath: "/Users/patrickstainier/.nvm/versions/node/v20.17.0/bin/node", npm_package_dependencies__radix_ui_react_radio_group: "1.0.0", npm_config_version_tag_prefix: "v" };

// src/Button/Button.tsx
import React3 from "react";

// src/Theme/stitches.config.ts
import { createStitches } from "@stitches/react";
import merge from "lodash.merge";

// src/Theme/base.config.ts
import { defaultThemeMap as defaultStitchesThemeMap } from "@stitches/react";
var baseConfig = {
  theme: {
    colors: {
      primary_default: "#2572ED",
      primary_bright: "#538DFF",
      primary_dim: "#002D6D",
      primary_disabled: "#004299",
      on_primary_high: "rgba(245, 249, 255, 0.95)",
      on_primary_medium: "rgba(224, 236, 255, 0.8)",
      on_primary_low: "rgba(194, 208, 229, 0.5)",
      secondary_default: "#444954",
      secondary_bright: "#70778B",
      secondary_dim: "#293042",
      secondary_disabled: "#404759",
      on_secondary_high: "#FFFFFF",
      on_secondary_medium: "#D3D9F0",
      on_secondary_low: "#A4ABC0",
      background_default: "#0B0E15",
      background_dim: "#000000",
      surface_default: "#191B23",
      surface_bright: "#272A31",
      surface_brighter: "#2E3038",
      surface_dim: "#11131A",
      on_surface_high: "#EFF0FA",
      on_surface_medium: "#C5C6D0",
      on_surface_low: "#8F9099",
      border_default: "#1D1F27",
      border_bright: "#272A31",
      alert_success: "#36B37E",
      alert_warning: "#FFAB00",
      alert_error_default: "#C74E5B",
      alert_error_bright: "#FFB2B6",
      alert_error_brighter: "#FFEDEC",
      alert_error_dim: "#270005"
    },
    shadows: {
      sm: "0 0 4px 0 #0000004D",
      md: "0 0 8px 0 #0000004D"
    },
    fonts: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
    },
    fontSizes: {
      h1: "6rem",
      h2: "3.75rem",
      h3: "3rem",
      h4: "2.125rem",
      h5: "1.5rem",
      h6: "1.25rem",
      tiny: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem"
    },
    fontWeights: {
      semiBold: 600,
      medium: 500,
      regular: 400
    },
    lineHeights: {
      h1: "5.75rem",
      h2: "3.5rem",
      h3: "3.25rem",
      h4: "2.5rem",
      h5: "2rem",
      h6: "1.5rem",
      tiny: "1rem",
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem"
    },
    radii: {
      "0": "0.25rem",
      "1": "0.5rem",
      "2": "0.75rem",
      "3": "1rem",
      "4": "1.5rem",
      round: "100rem"
    },
    space: {
      0: "0rem",
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "2.25rem",
      px: "1px",
      1: "0.125rem",
      2: "0.25rem",
      3: "0.375rem",
      4: "0.5rem",
      5: "0.625rem",
      6: "0.75rem",
      7: "0.875rem",
      8: "1rem",
      9: "1.25rem",
      10: "1.5rem",
      11: "1.75rem",
      12: "2rem",
      13: "2.25rem",
      14: "2.5rem",
      15: "2.75rem",
      16: "3rem",
      17: "3.5rem",
      18: "4rem",
      19: "4.25rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
      100: "25rem"
    },
    borderWidths: {
      light: "1px",
      normal: "2px",
      bold: "3px",
      extrabold: "4px",
      black: "5px"
    }
  }
};
var defaultUtils = {
  bg: (value) => ({
    backgroundColor: value
  }),
  c: (value) => ({
    color: value
  }),
  r: (value) => ({
    borderRadius: value
  }),
  fs: (value) => ({
    fontSize: value
  }),
  size: (value) => ({
    height: value,
    width: value
  }),
  w: (value) => ({
    width: value
  }),
  h: (value) => ({
    height: value
  }),
  p: (value) => ({
    padding: value
  }),
  pt: (value) => ({
    paddingTop: value
  }),
  pr: (value) => ({
    paddingRight: value
  }),
  pb: (value) => ({
    paddingBottom: value
  }),
  pl: (value) => ({
    paddingLeft: value
  }),
  px: (value) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  m: (value) => ({
    margin: value
  }),
  mt: (value) => ({
    marginTop: value
  }),
  mr: (value) => ({
    marginRight: value
  }),
  mb: (value) => ({
    marginBottom: value
  }),
  ml: (value) => ({
    marginLeft: value
  }),
  mx: (value) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value) => ({
    marginTop: value,
    marginBottom: value
  })
};
var defaultMedia = {
  allowMotion: "(prefers-reduced-motion: no-preference)",
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  lg: "(max-width: 1024px)",
  xl: "(max-width: 1280px)",
  "2xl": "(max-width: 1536px)",
  ls: "(max-width: 1024px) and (orientation: landscape)"
};
var defaultThemeMap = __spreadProps(__spreadValues({}, defaultStitchesThemeMap), {
  width: "space",
  height: "space",
  minWidth: "space",
  maxWidth: "space",
  minHeight: "space",
  maxHeight: "space",
  flexBasis: "space",
  gridTemplateColumns: "space",
  gridTemplateRows: "space",
  blockSize: "space",
  minBlockSize: "space",
  maxBlockSize: "space",
  inlineSize: "space",
  minInlineSize: "space",
  maxInlineSize: "space"
});

// src/Prebuilt/common/constants.ts
import { parsedUserAgent } from "@100mslive/react-sdk";
var QUERY_PARAM_PREVIEW_AS_ROLE = "preview_as_role";
var UI_MODE_GRID = "grid";
var MAX_TOASTS = 5;
var RTMP_RECORD_RESOLUTION_MIN = 480;
var RTMP_RECORD_RESOLUTION_MAX = 1280;
var RTMP_RECORD_DEFAULT_RESOLUTION = {
  width: 1280,
  height: 720
};
var EMOJI_REACTION_TYPE = "EMOJI_REACTION";
var CHAT_SELECTOR = {
  PEER: "peer",
  ROLE: "role",
  EVERYONE: "Everyone"
};
var APP_DATA = {
  uiSettings: "uiSettings",
  chatOpen: "chatOpen",
  chatSelector: "chatSelector",
  chatDraft: "chatDraft",
  appConfig: "appConfig",
  sidePane: "sidePane",
  hlsStats: "hlsStats",
  subscribedNotifications: "subscribedNotifications",
  logo: "logo",
  hlsStarted: "hlsStarted",
  rtmpStarted: "rtmpStarted",
  recordingStarted: "recordingStarted",
  embedConfig: "embedConfig",
  pinnedTrackId: "pinnedTrackId",
  dropdownList: "dropdownList",
  authToken: "authToken",
  pdfConfig: "pdfConfig",
  minimiseInset: "minimiseInset",
  activeScreensharePeerId: "activeScreensharePeerId",
  disableNotifications: "disableNotifications",
  pollState: "pollState",
  background: "background",
  sheet: "sheet",
  caption: "caption",
  loadingEffects: "loadingEffects",
  noiseCancellation: "noiseCancellation"
};
var UI_SETTINGS = {
  isAudioOnly: "isAudioOnly",
  maxTileCount: "maxTileCount",
  uiViewMode: "uiViewMode",
  layoutMode: "layoutMode",
  showStatsOnTiles: "showStatsOnTiles",
  enableAmbientMusic: "enableAmbientMusic",
  mirrorLocalVideo: "mirrorLocalVideo"
};
var SIDE_PANE_OPTIONS = {
  PARTICIPANTS: "Participants",
  CHAT: "Chat",
  STREAMING: "STREAMING",
  POLLS: "POLLS",
  VB: "VB",
  ROOM_DETAILS: "ROOM_DETAILS"
};
var SHEET_OPTIONS = {
  ROOM_DETAILS: "ROOM_DETAILS"
};
var POLL_STATE = {
  pollInView: "pollInView",
  view: "view"
};
var POLL_VIEWS = {
  CREATE_POLL_QUIZ: "CREATE_POLL_QUIZ",
  CREATE_QUESTIONS: "CREATE_QUESTIONS",
  VOTE: "VOTE",
  RESULTS: "RESULTS"
};
var CAPTION_TOAST = {
  captionToast: "captionToast"
};
var SUBSCRIBED_NOTIFICATIONS = {
  PEER_JOINED: "PEER_JOINED",
  PEER_LEFT: "PEER_LEFT",
  METADATA_UPDATED: "METADATA_UPDATED",
  NEW_MESSAGE: "NEW_MESSAGE",
  ERROR: "ERROR"
};
var REMOTE_STOP_SCREENSHARE_TYPE = "REMOTE_STOP_SCREENSHARE";
var _a, _b;
var isChrome = ((_b = (_a = parsedUserAgent.getBrowser()) == null ? void 0 : _a.name) == null ? void 0 : _b.toLowerCase()) === "chrome";
var _a2, _b2;
var isFirefox = ((_b2 = (_a2 = parsedUserAgent.getBrowser()) == null ? void 0 : _a2.name) == null ? void 0 : _b2.toLowerCase()) === "firefox";
var _a3, _b3;
var isSafari = ((_b3 = (_a3 = parsedUserAgent.getBrowser()) == null ? void 0 : _a3.name) == null ? void 0 : _b3.toLowerCase()) === "safari";
var _a4, _b4;
var isIOS = ((_b4 = (_a4 = parsedUserAgent.getOS()) == null ? void 0 : _a4.name) == null ? void 0 : _b4.toLowerCase()) === "ios";
var _a5, _b5;
var isMacOS = ((_b5 = (_a5 = parsedUserAgent.getOS()) == null ? void 0 : _a5.name) == null ? void 0 : _b5.toLowerCase()) === "mac os";
var _a6, _b6;
var isAndroid = ((_b6 = (_a6 = parsedUserAgent.getOS()) == null ? void 0 : _a6.name) == null ? void 0 : _b6.toLowerCase()) === "android";
var isIPadOS = false;
var QUESTION_TYPE_TITLE = /* @__PURE__ */ ((QUESTION_TYPE_TITLE2) => {
  QUESTION_TYPE_TITLE2["single-choice"] = "Single Choice";
  QUESTION_TYPE_TITLE2["multiple-choice"] = "Multiple Choice";
  return QUESTION_TYPE_TITLE2;
})(QUESTION_TYPE_TITLE || {});
var ROLE_CHANGE_DECLINED = "role_change_declined";
var DEFAULT_PORTAL_CONTAINER = ".prebuilt-container";
var TEST_AUDIO_URL = "https://100ms.live/test-audio.wav";

// src/Theme/stitches.config.ts
var HmsStitches = createStitches({
  prefix: "hms-ui",
  theme: __spreadProps(__spreadValues({}, baseConfig.theme), {
    colors: __spreadValues({}, baseConfig.theme.colors)
  }),
  media: defaultMedia,
  utils: defaultUtils,
  themeMap: defaultThemeMap
});
var {
  theme,
  createTheme: createThemeBase,
  styled,
  globalCss,
  keyframes,
  css,
  getCssText,
  config
} = HmsStitches;
var globalStyles = globalCss({
  [`${DEFAULT_PORTAL_CONTAINER} *`]: {
    fontFamily: "$sans",
    boxSizing: "border-box"
  },
  "::-webkit-scrollbar-track": {
    WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    backgroundColor: "transparent"
  },
  "::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
    backgroundColor: "transparent"
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#657080",
    borderRadius: "5px"
  },
  /**
   * needed for safari. Safari
   * adds background color on its own
   * on hls-viewer on fullscreen
   */
  "#hls-viewer-dark:fullscreen": {
    backgroundColor: "black !important"
  },
  "#hls-viewer-light:fullscreen": {
    backgroundColor: "white !important"
  }
});
var createTheme = ({
  themeType,
  theme: theme2,
  className
}) => {
  if (!themeType) {
    throw new Error("Theme type is required");
  }
  const mergedTheme = merge(baseConfig.theme, theme2 || {});
  return createThemeBase(className || `${themeType}-theme`, mergedTheme);
};

// src/Theme/ThemeProvider.tsx
import React, {
  useCallback,
  useEffect as useEffect2,
  useMemo,
  useRef,
  useState as useState2
} from "react";

// src/Theme/useSSR.tsx
import { useEffect, useState } from "react";
var isBrowser = () => {
  return Boolean(
    typeof window !== "undefined" && window.document && window.document.createElement
  );
};
var useSSR = () => {
  const [browser, setBrowser] = useState(false);
  useEffect(() => {
    setBrowser(isBrowser());
  }, []);
  return {
    isBrowser: browser,
    isServer: !browser
  };
};
var useSSR_default = useSSR;

// src/Theme/ThemeProvider.tsx
var defaultAspectRatio = {
  width: 1,
  height: 1
};
var ThemeTypes = /* @__PURE__ */ ((ThemeTypes2) => {
  ThemeTypes2["default"] = "default";
  return ThemeTypes2;
})(ThemeTypes || {});
var defaultContext = {
  themeType: "default" /* default */,
  theme,
  aspectRatio: { width: 1, height: 1 },
  toggleTheme: (_themeToUpdateTo) => {
    return;
  }
};
var ThemeContext = React.createContext(defaultContext);
var HMSThemeProvider = ({
  themeType,
  theme: userTheme,
  aspectRatio = defaultAspectRatio,
  children
}) => {
  const systemTheme = "default" /* default */;
  const [currentTheme, setCurrentTheme] = useState2(themeType || systemTheme);
  const previousClassName = useRef("");
  const { isBrowser: isBrowser2 } = useSSR_default();
  const updatedTheme = useMemo(() => {
    const updatedTheme2 = createTheme({
      themeType: currentTheme,
      theme: userTheme || {}
    });
    if (!isBrowser2) {
      return updatedTheme2;
    }
    if (previousClassName.current) {
      document.documentElement.classList.remove(previousClassName.current);
    }
    previousClassName.current = updatedTheme2.className;
    document.documentElement.classList.add(updatedTheme2);
    return updatedTheme2;
  }, [userTheme, currentTheme, isBrowser2]);
  const toggleTheme = useCallback((themeToUpdateTo) => {
    if (themeToUpdateTo) {
      setCurrentTheme(themeToUpdateTo);
      return;
    }
    setCurrentTheme("default" /* default */);
  }, []);
  useEffect2(() => {
    if (themeType) {
      setCurrentTheme(themeType);
    }
  }, [themeType]);
  return /* @__PURE__ */ React.createElement(
    ThemeContext.Provider,
    {
      value: {
        themeType: currentTheme,
        theme: updatedTheme,
        aspectRatio,
        toggleTheme
      }
    },
    children
  );
};
var useTheme = () => React.useContext(ThemeContext);

// src/Layout/Flex.tsx
var gapStyles = (value) => {
  return {
    "& > * + *": {
      marginRight: "0",
      marginLeft: `${0.25 * value}rem`
    }
  };
};
var Flex = styled("div", {
  display: "flex",
  variants: {
    justify: {
      start: {
        justifyContent: "flex-start"
      },
      end: {
        justifyContent: "flex-end"
      },
      center: {
        justifyContent: "center"
      },
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      },
      evenly: {
        justifyContent: "space-evenly"
      }
    },
    align: {
      start: {
        alignItems: "flex-start"
      },
      end: {
        alignItems: "flex-end"
      },
      center: {
        alignItems: "center"
      },
      baseline: {
        alignItems: "baseline"
      },
      strech: {
        alignItems: "stretch"
      }
    },
    direction: {
      row: {
        flexDirection: "row"
      },
      column: {
        flexDirection: "column"
      },
      rowReverse: {
        flexDirection: "row-reverse"
      },
      columnReverse: {
        flexDirection: "column-reverse"
      }
    },
    gap: {
      1: gapStyles(1),
      2: gapStyles(2),
      3: gapStyles(3),
      4: gapStyles(4)
    }
  }
});

// src/Layout/Box.tsx
var Box = styled("div", {});

// src/Loading/Loading.tsx
import React2 from "react";
var Loading = (_a7) => {
  var _b7 = _a7, {
    size = 24,
    color = "white"
  } = _b7, props = __objRest(_b7, [
    "size",
    "color"
  ]);
  return /* @__PURE__ */ React2.createElement(
    "svg",
    __spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 50 50",
      fill: color,
      xmlns: "http://www.w3.org/2000/svg"
    }, props),
    /* @__PURE__ */ React2.createElement(
      "circle",
      {
        cx: "25",
        cy: "25",
        r: "20",
        stroke: color,
        strokeWidth: "4",
        strokeDasharray: "70 30",
        fill: "none"
      },
      /* @__PURE__ */ React2.createElement(
        "animateTransform",
        {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          from: "0 25 25",
          to: "360 25 25",
          dur: "1s",
          repeatCount: "indefinite"
        }
      )
    )
  );
};

// src/utils/styles.ts
var flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var textEllipsis = (width) => ({
  maxWidth: width,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  minWidth: 0
});

// src/Button/Button.tsx
var getOutlinedVariants = (base, hover, active, disabled, text, textDisabled) => {
  return {
    bg: "transparent",
    border: `solid $space$px $colors${base}`,
    c: text,
    "&[disabled]": {
      c: textDisabled,
      bg: "transparent",
      border: `solid $space$px $colors${disabled}`,
      cursor: "not-allowed"
    },
    "&:not([disabled]):hover": {
      border: `solid $space$px $colors${hover}`,
      bg: "transparent"
    },
    "&:not([disabled]):active": {
      border: `solid $space$px $colors${active}`,
      bg: "transparent"
    },
    "&:not([disabled]):focus-visible": {
      boxShadow: `0 0 0 3px $colors${base}`
    }
  };
};
var getButtonVariants = (base, hover, active, disabled, text, textDisabled) => {
  return {
    bg: base,
    border: `1px solid ${base}`,
    c: text,
    "&[disabled]": {
      c: textDisabled,
      cursor: "not-allowed",
      bg: disabled,
      border: `1px solid ${disabled}`
    },
    "&:not([disabled]):hover": {
      bg: hover,
      border: `1px solid ${hover}`
    },
    "&:not([disabled]):active": {
      bg: active,
      border: `1px solid ${active}`
    },
    "&:not([disabled]):focus-visible": {
      boxShadow: `0 0 0 3px ${base}`
    }
  };
};
var StyledButton = styled("button", __spreadProps(__spreadValues({}, flexCenter), {
  cursor: "pointer",
  fontFamily: "$sans",
  lineHeight: "inherit",
  textTransform: "none",
  position: "relative",
  outline: "none",
  border: "none",
  fs: "$md",
  r: "$1",
  backgroundColor: "$primary_default",
  fontWeight: "500",
  whiteSpace: "nowrap",
  p: "$4 $8",
  "-webkit-appearance": "button",
  "&:focus": {
    outline: "none"
  },
  "&:not([disabled]):focus-visible": {
    boxShadow: "0 0 0 3px $colors$primary_default"
  },
  transition: "all 0.2s  ease",
  compoundVariants: [
    {
      variant: "standard",
      outlined: true,
      css: getOutlinedVariants(
        "$secondary_default",
        "$secondary_bright",
        "$secondary_dim",
        "$secondary_disabled",
        "$on_surface_high",
        "$on_surface_low"
      )
    },
    {
      variant: "danger",
      outlined: true,
      css: getOutlinedVariants(
        "$alert_error_default",
        "$alert_error_bright",
        "$alert_error_dim",
        "$alert_error_brighter",
        "$on_surface_high",
        "$on_surface_low"
      )
    },
    {
      variant: "primary",
      outlined: true,
      css: getOutlinedVariants(
        "$primary_default",
        "$primary_bright",
        "$primary_dim",
        "$primary_disabled",
        "$on_surface_high",
        "$on_surface_low"
      )
    }
  ],
  variants: {
    variant: {
      standard: getButtonVariants(
        "$secondary_default",
        "$secondary_bright",
        "$secondary_dim",
        "$secondary_disabled",
        "$on_secondary_high",
        "$on_secondary_low"
      ),
      danger: getButtonVariants(
        "$alert_error_default",
        "$alert_error_bright",
        "$alert_error_dim",
        "$alert_error_dim",
        "$alert_error_brighter",
        "$on_primary_low"
      ),
      primary: getButtonVariants(
        "$primary_default",
        "$primary_bright",
        "$primary_dim",
        "$primary_disabled",
        "$on_primary_high",
        "$on_primary_low"
      )
    },
    outlined: {
      true: {}
    },
    icon: {
      true: {}
    }
  },
  defaultVariants: {
    variant: "primary"
  }
}));
var Button = React3.forwardRef((_a7, ref) => {
  var _b7 = _a7, { children, loading = false, icon } = _b7, buttonProps = __objRest(_b7, ["children", "loading", "icon"]);
  return /* @__PURE__ */ React3.createElement(StyledButton, __spreadProps(__spreadValues({}, buttonProps), { ref }), /* @__PURE__ */ React3.createElement(React3.Fragment, null, loading && /* @__PURE__ */ React3.createElement(
    Flex,
    {
      align: "center",
      justify: "center",
      css: {
        w: "100%",
        position: "absolute",
        left: "0",
        color: "$on_primary_low"
      }
    },
    /* @__PURE__ */ React3.createElement(Loading, { color: "currentColor" })
  ), /* @__PURE__ */ React3.createElement(
    Flex,
    {
      align: "center",
      justify: "center",
      css: {
        visibility: loading ? "hidden" : "visible",
        gap: icon ? "$4" : "0"
      }
    },
    children
  )));
});

// src/Text/Text.tsx
var textVariants = {
  h1: {
    fontWeight: "$semiBold",
    letterSpacing: "-1.5px",
    fontSize: "$h1",
    lineHeight: "$h1",
    "@md": {
      fontSize: "4.5rem",
      lineHeight: "4.75rem"
    }
  },
  h2: {
    fontSize: "$h2",
    lineHeight: "$h2",
    fontWeight: "$semiBold",
    letterSpacing: "-0.5px",
    "@md": {
      fontSize: "3rem",
      lineHeight: "3.25rem"
    }
  },
  h3: {
    fontSize: "$h3",
    lineHeight: "$h3",
    fontWeight: "$semiBold",
    "@md": {
      fontSize: "2.5rem",
      lineHeight: "2.75rem"
    }
  },
  h4: {
    fontSize: "$h4",
    lineHeight: "$h4",
    fontWeight: "$semiBold",
    letterSpacing: "0.25px",
    "@md": {
      fontSize: "1.75rem",
      lineHeight: "2rem"
    }
  },
  h5: {
    fontSize: "$h5",
    lineHeight: "$h5",
    fontWeight: "$semiBold",
    "@md": {
      fontSize: "1.5rem",
      lineHeight: "1.75rem"
    }
  },
  h6: {
    fontSize: "$h6",
    lineHeight: "$h6",
    fontWeight: "$semiBold",
    letterSpacing: "0.15px",
    "@md": {
      fontSize: "1.25rem",
      lineHeight: "1.5rem"
    }
  },
  sub1: {
    fontSize: "$md",
    lineHeight: "$h5",
    fontWeight: "$medium",
    letterSpacing: "0.15px"
  },
  sub2: {
    fontSize: "$sm",
    lineHeight: "$sm",
    fontWeight: "$medium",
    letterSpacing: "0.1px"
  },
  body1: {
    fontSize: "$md",
    lineHeight: "$h6",
    fontWeight: "$medium",
    letterSpacing: "0.1px"
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: "$medium",
    letterSpacing: "0.25px"
  },
  button: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: "$semiBold",
    letterSpacing: "0.5px"
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: "1rem",
    letterSpacing: "0.4px",
    fontWeight: "$regular"
  },
  overline: {
    fontSize: "0.625rem",
    lineHeight: "1rem",
    letterSpacing: "1.5px",
    fontWeight: "$medium"
  },
  tiny: {
    fontSize: "$tiny",
    lineHeight: "$tiny"
  },
  xs: {
    fontSize: "$xs",
    lineHeight: "$xs"
  },
  sm: {
    fontSize: "$sm",
    lineHeight: "$sm"
  },
  md: {
    fontSize: "$md",
    lineHeight: "$md"
  },
  lg: {
    fontSize: "$lg",
    lineHeight: "$md",
    fontWeight: "$semiBold",
    letterSpacing: "0.15px"
  }
};
var Text = styled("p", {
  fontFamily: "$sans",
  fontWeight: "$regular",
  margin: 0,
  color: "$on_surface_high",
  variants: {
    variant: textVariants,
    color: {
      white: {
        color: "$on_surface_high"
      }
    },
    inline: {
      true: {
        display: "inline"
      }
    }
  },
  defaultVariants: {
    variant: "md"
  }
});

// src/IconButton/IconButton.tsx
var IconButton = styled("button", __spreadProps(__spreadValues({}, flexCenter), {
  alignItems: "center",
  outline: "none",
  border: "none",
  padding: "$2",
  r: "$0",
  cursor: "pointer",
  backgroundColor: "transparent",
  color: "$on_surface_high",
  "&:not([disabled]):focus-visible": {
    boxShadow: "0 0 0 3px $colors$primary_default"
  },
  "&:not([disabled]):focus": {
    outline: "none"
  },
  "@media (hover: hover)": {
    "&:not([disabled]):hover": {
      backgroundColor: "$on_surface_low"
    }
  },
  "&[disabled]": {
    opacity: 0.5,
    cursor: "not-allowed",
    backgroundColor: "$secondary_dim",
    color: "$on_primary_high"
  },
  "&:focus": {
    outline: "none"
  },
  variants: {
    active: {
      true: {
        "&:not([disabled]):hover": {
          backgroundColor: "$on_surface_low"
        }
      }
    }
  }
}));

// src/Avatar/Avatar.tsx
import React4 from "react";
import { PersonIcon } from "@100mslive/react-icons";

// src/Avatar/getAvatarBg.ts
var getInitials = (name) => {
  var _a7, _b7, _c;
  if (!name) {
    return void 0;
  } else {
    return (_c = (_b7 = (_a7 = name.trim().replace(/[^a-zA-Z0-9]/g, "").match(/(^\S\S?|\b\S)?/g)) == null ? void 0 : _a7.join("")) == null ? void 0 : _b7.match(/(^\S|\S$)?/g)) == null ? void 0 : _c.join("").toUpperCase();
  }
};
var getAvatarBg = (name) => {
  const initials = getInitials(name);
  const indexFactor = 20;
  const colorIndex = ((initials == null ? void 0 : initials.codePointAt(0)) || 0) % indexFactor + 1;
  return { initials: initials || "", color: colorsList[colorIndex - 1] };
};
var colorsList = [
  "#616161",
  "#F44336",
  "#3F51B5",
  "#4CAF50",
  "#FFA000",
  "#795548",
  "#E91E63",
  "#2F80FF",
  "#8BC34A",
  "#F57C00",
  "#4E342E",
  "#9C27B0",
  "#00BCD4",
  "#C0CA33",
  "#F4511E",
  "#673AB7",
  "#009688",
  "#FBC02D",
  "#BF360C",
  "#455A64"
];

// src/Avatar/Avatar.tsx
var getAvatarShape = (radii) => ({
  borderRadius: radii
});
var StyledAvatar = styled("div", __spreadProps(__spreadValues({}, flexCenter), {
  color: "$colors$on_primary_high",
  fontFamily: "$sans",
  aspectRatio: 1,
  fontWeight: 600,
  fontSize: "$space$9",
  variants: {
    shape: {
      circle: getAvatarShape("$round"),
      square: getAvatarShape("$1")
    },
    size: {
      small: {
        height: "$16 !important",
        fontSize: "$space$6"
      },
      medium: {
        height: "$18 !important",
        fontSize: "$space$10"
      },
      large: {
        height: "$20 !important",
        fontSize: "$space$12"
      }
    }
  },
  defaultVariants: {
    shape: "circle"
  }
}));
var Avatar = (_a7) => {
  var _b7 = _a7, { name, css: css2 } = _b7, props = __objRest(_b7, ["name", "css"]);
  const info = getAvatarBg(name);
  let { color } = info;
  if (!name) {
    color = "#7E47EB";
  }
  return /* @__PURE__ */ React4.createElement(StyledAvatar, __spreadValues({ css: __spreadValues({ bg: color }, css2) }, props), info.initials || /* @__PURE__ */ React4.createElement(PersonIcon, { height: 40, width: 40 }));
};

// src/Divider/Divider.tsx
var getVerticalSpace = (space) => ({
  marginLeft: space,
  marginRight: space
});
var getHorizontalSpace = (space) => ({
  marginTop: space,
  marginBottom: space
});
var VerticalDivider = styled("span", {
  height: "25px",
  width: "1px",
  backgroundColor: "$border_bright",
  variants: {
    space: {
      1: getVerticalSpace("$1"),
      2: getVerticalSpace("$2"),
      3: getVerticalSpace("$3"),
      4: getVerticalSpace("$4")
    }
  },
  defaultVariants: {
    space: 1
  }
});
var HorizontalDivider = styled("span", {
  height: "1px",
  width: "100%",
  display: "block",
  backgroundColor: "$border_bright",
  variants: {
    space: {
      1: getHorizontalSpace("$1"),
      2: getHorizontalSpace("$2"),
      3: getHorizontalSpace("$3"),
      4: getHorizontalSpace("$4")
    }
  },
  defaultVariants: {
    space: 1
  }
});

// src/Switch/Switch.tsx
import React5 from "react";
import * as BaseSwitch from "@radix-ui/react-switch";
var SwitchRoot = styled(BaseSwitch.Root, {
  all: "unset",
  width: "30px",
  height: "14px",
  border: "solid $space$px $secondary_default",
  borderRadius: "$3",
  p: "$2",
  position: "relative",
  cursor: "pointer",
  '&[data-state="checked"]': {
    backgroundColor: "$primary_default",
    border: "solid $space$px $primary_default"
  },
  "&:focus": {
    outline: "none"
  },
  "&[disabled]": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var SwitchThumb = styled(BaseSwitch.Thumb, {
  display: "block",
  top: "3px",
  position: "absolute",
  width: "$md",
  height: "$md",
  backgroundColor: "$secondary_default",
  borderRadius: "$round",
  transition: "right 500ms ease-in",
  left: "$2",
  '&[data-state="checked"]': {
    left: "unset",
    right: "$2",
    backgroundColor: "$on_primary_high"
  }
});
var Switch = (props) => /* @__PURE__ */ React5.createElement(SwitchRoot, __spreadValues({}, props), /* @__PURE__ */ React5.createElement(SwitchThumb, null));
Switch.displayName = "Switch";

// src/Tooltip/Tooltip.tsx
import React6, { useState as useState3 } from "react";
import * as BaseTooltip from "@radix-ui/react-tooltip";

// src/utils/animations.ts
var slideDown = (controller) => keyframes({
  from: { height: 0 },
  to: { height: `var(${controller})` }
});
var slideUp = (controller) => keyframes({
  from: { height: `var(${controller})` },
  to: { height: 0 }
});
var translateAcross = ({
  xFrom = "0",
  yFrom = "0",
  zFrom = "0",
  xTo = "0",
  yTo = "0",
  zTo = "0"
}) => keyframes({
  from: { transform: `translate3d(${xFrom}, ${yFrom}, ${zFrom})` },
  to: { transform: `translate3d(${xTo}, ${yTo}, ${zTo}` }
});
var dialogOpen = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.90)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
});
var dialogClose = keyframes({
  "0%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
  "100%": { opacity: 0, transform: "translate(-50%, -48%) scale(.90)" }
});
var slideUpAndFade = (start = "2px") => keyframes({
  "0%": { opacity: 0, transform: `translateY(${start})` },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideRightAndFade = (start = "-2px") => keyframes({
  "0%": { opacity: 0, transform: `translateX(${start})` },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var sheetSlideIn = keyframes({
  from: { transform: "$$transformValue" },
  to: { transform: "translate3d(0,0,0)" }
});
var sheetSlideOut = keyframes({
  from: { transform: "translate3d(0,0,0)" },
  to: { transform: "$$transformValue" }
});
var sheetFadeIn = keyframes({
  from: { opacity: "0" },
  to: { opacity: "1" }
});
var sheetFadeOut = keyframes({
  from: { opacity: "1" },
  to: { opacity: "0" }
});
var slideDownAndFade = (start = "-2px") => keyframes({
  "0%": { opacity: 0, transform: `translateY(${start})` },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideLeftAndFade = (start = "2px") => keyframes({
  "0%": { opacity: 0, transform: `translateX(${start})` },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var slideLeftAndFadeOut = (end = "-100%") => keyframes({
  "0%": { opacity: 1, transform: `translateX(0)` },
  "100%": { opacity: 0, transform: `translateX(${end})` }
});
var popoverAnimation = {
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade() },
      '&[data-side="right"]': { animationName: slideLeftAndFade() },
      '&[data-side="bottom"]': { animationName: slideUpAndFade() },
      '&[data-side="left"]': { animationName: slideRightAndFade() }
    }
  }
};
var toastAnimation = {
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "500ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    animationName: slideLeftAndFadeOut(),
    '&[data-state="open"]': {
      animationName: slideRightAndFade("-100%")
    },
    '&[data-swipe="move"]': {
      transform: "translateX(var(--radix-toast-swipe-move-x))"
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out"
    },
    '&[data-swipe="end"]': {
      animation: `${slideLeftAndFadeOut()} 100ms ease-out forwards`
    }
  }
};

// src/Tooltip/Tooltip.tsx
var TooltipBox = styled(BaseTooltip.Content, {
  fontFamily: "$sans",
  borderRadius: "$2",
  padding: "$2 $4",
  fontSize: "$xs",
  zIndex: 11,
  color: "$on_surface_high",
  backgroundColor: "$surface_bright",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade() },
      '&[data-side="right"]': { animationName: slideLeftAndFade() },
      '&[data-side="bottom"]': { animationName: slideUpAndFade() },
      '&[data-side="left"]': { animationName: slideRightAndFade() }
    }
  },
  variants: {
    outlined: {
      true: {
        backgroundColor: "$background_dim",
        border: "solid $space$px $border_bright"
      }
    }
  }
});
var TooltipTrigger = styled(BaseTooltip.Trigger, {
  fontFamily: "$sans"
});
var TooltipRoot = BaseTooltip.Root;
var Tooltip = ({
  children,
  title,
  triggerCss,
  boxCss,
  outlined = true,
  side = "bottom",
  align = "center",
  disabled = false,
  delayDuration = 200
}) => {
  const [open, setOpen] = useState3(false);
  return /* @__PURE__ */ React6.createElement(BaseTooltip.Provider, null, /* @__PURE__ */ React6.createElement(
    TooltipRoot,
    {
      delayDuration,
      open: open && !disabled,
      onOpenChange: setOpen
    },
    /* @__PURE__ */ React6.createElement(TooltipTrigger, { css: __spreadValues({}, triggerCss), asChild: true }, children),
    /* @__PURE__ */ React6.createElement(
      TooltipBox,
      {
        sideOffset: 10,
        side,
        align,
        outlined,
        css: __spreadValues({}, boxCss)
      },
      title
    )
  ));
};

// src/Select/Select.tsx
import React7 from "react";
import { ChevronDownIcon } from "@100mslive/react-icons";
var Root3 = styled("div", {
  color: "$on_primary_high",
  display: "inline-flex",
  position: "relative",
  outline: "none",
  overflow: "hidden",
  borderRadius: "$1",
  backgroundColor: "$surface_default",
  maxWidth: "100%"
});
var SelectRoot = styled("select", {
  h: "$16",
  fontSize: "$md",
  fontWeight: "500",
  lineHeight: "inherit",
  textTransform: "none",
  appearance: "none",
  color: "$on_secondary_high",
  padding: "5px",
  paddingLeft: "12px",
  paddingRight: "30px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "$secondary_default",
  "&:not([disabled]):focus-visible": {
    boxShadow: "0 0 0 3px $colors$primary_default"
  },
  "&[disabled]": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Arrow = styled("span", {
  color: "$on_secondary_high",
  width: "30px",
  height: "100%",
  position: "absolute",
  right: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  transition: "border .2s ease 0s"
});
var DefaultDownIcon = (_a7) => {
  var props = __objRest(_a7, []);
  return /* @__PURE__ */ React7.createElement(Arrow, __spreadValues({}, props), /* @__PURE__ */ React7.createElement(ChevronDownIcon, null));
};
var Select = {
  Root: Root3,
  DownIcon: Arrow,
  DefaultDownIcon,
  Select: SelectRoot
};

// src/Slider/Slider.tsx
import React8 from "react";
import * as BaseSlider from "@radix-ui/react-slider";
var Root5 = styled(BaseSlider.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "100%",
  '&[data-orientation="horizontal"]': {
    height: 20
  }
});
var Track2 = styled(BaseSlider.Track, {
  backgroundColor: "$surface_bright",
  position: "relative",
  flexGrow: 1,
  borderRadius: "$round",
  cursor: "pointer",
  '&[data-orientation="horizontal"]': { height: 3 }
});
var Range2 = styled(BaseSlider.Range, {
  position: "absolute",
  backgroundColor: "$primary_default",
  borderRadius: "$round",
  height: "100%"
});
var Thumb3 = styled(BaseSlider.Thumb, {
  all: "unset",
  display: "block",
  width: "$8",
  height: "$8",
  backgroundColor: "$primary_default",
  cursor: "pointer",
  boxShadow: `0 2px 10px $colors$surface_default`,
  borderRadius: 10,
  "&:hover": { backgroundColor: "$primary_default" },
  "&:focus": { boxShadow: "none" }
});
var Slider = (_a7) => {
  var _b7 = _a7, {
    showTooltip = true,
    thumbStyles
  } = _b7, props = __objRest(_b7, [
    "showTooltip",
    "thumbStyles"
  ]);
  var _a8;
  return /* @__PURE__ */ React8.createElement(Root5, __spreadValues({}, props), /* @__PURE__ */ React8.createElement(Track2, null, /* @__PURE__ */ React8.createElement(Range2, null)), showTooltip ? /* @__PURE__ */ React8.createElement(Tooltip, { title: String((_a8 = props.value) == null ? void 0 : _a8[0]) }, /* @__PURE__ */ React8.createElement(Thumb3, { css: thumbStyles })) : /* @__PURE__ */ React8.createElement(Thumb3, { css: thumbStyles }));
};

// src/Modal/Dialog.tsx
import React11, { useEffect as useEffect3, useRef as useRef2 } from "react";
import { Root as Root6 } from "@radix-ui/react-dialog";
import { styled as styled2 } from "@stitches/react";

// src/Modal/DialogContent.tsx
import React9 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CrossIcon } from "@100mslive/react-icons";
var DialogClose = styled(DialogPrimitive.Close, {
  backgroundColor: "transparent",
  padding: "0",
  margin: "0",
  border: "none",
  backgroundImage: "none"
});
var StyledDialogTrigger = styled(DialogPrimitive.Trigger, {
  appearance: "none !important"
  // Needed for safari it shows white overlay
});
var CustomDialogOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.5);",
  position: "absolute",
  inset: 0
});
var StyledDialogPortal = styled(DialogPrimitive.Portal, {});
var CustomDialogContent = styled(DialogPrimitive.Content, {
  color: "$on_surface_medium",
  backgroundColor: "$surface_dim",
  borderRadius: "8px",
  position: "absolute",
  top: "50%",
  left: "50%",
  maxHeight: "95%",
  overflowY: "auto",
  border: "$space$px solid $border_bright",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  transform: "translate(-50%, -50%)",
  zIndex: 999,
  padding: "$12",
  "@allowMotion": {
    '&[data-state="open"]': {
      animation: `${dialogOpen} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${dialogClose} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    }
  },
  "&:focus": { outline: "none" }
});
var DialogTitle = styled(DialogPrimitive.Title, {
  margin: 0
});
var DialogDescription = styled(DialogPrimitive.Description, {});
var DialogDefaultCloseIcon = (props) => /* @__PURE__ */ React9.createElement(DialogClose, { asChild: true }, /* @__PURE__ */ React9.createElement(IconButton, __spreadValues({}, props), /* @__PURE__ */ React9.createElement(CrossIcon, null)));

// src/hooks/useDialogContainerSelector.tsx
import { useContext } from "react";

// src/context/DialogContext.tsx
import React10, { createContext } from "react";
var DialogContainerContext = createContext("");
function DialogContainerProvider({
  children,
  dialogContainerSelector
}) {
  return /* @__PURE__ */ React10.createElement(DialogContainerContext.Provider, { value: dialogContainerSelector }, children);
}

// src/hooks/useDialogContainerSelector.tsx
function useDialogContainerSelector() {
  const dialogContainerSelector = useContext(DialogContainerContext);
  return dialogContainerSelector;
}

// src/Modal/Dialog.tsx
var StyledDialog = styled2(Root6, {});
var DialogRoot = (props) => {
  useEffect3(() => {
    return () => {
      if (document)
        setTimeout(() => document.body.style.pointerEvents = "auto", 0);
    };
  }, []);
  return /* @__PURE__ */ React11.createElement(StyledDialog, __spreadValues({}, props));
};
var CustomDialogPortal = ({
  children,
  container
}) => {
  const dialogContainerSelector = useDialogContainerSelector();
  const containerRef = useRef2(null);
  if (container) {
    containerRef.current = container;
  } else if (dialogContainerSelector && !containerRef.current) {
    containerRef.current = document.querySelector(
      dialogContainerSelector
    );
  } else if (!containerRef.current) {
    containerRef.current = document.body;
  }
  return /* @__PURE__ */ React11.createElement(StyledDialogPortal, { container: containerRef.current }, /* @__PURE__ */ React11.createElement(React11.Fragment, null, children));
};
var Dialog = {
  Root: DialogRoot,
  Trigger: StyledDialogTrigger,
  Overlay: CustomDialogOverlay,
  Content: CustomDialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
  DefaultClose: DialogDefaultCloseIcon,
  Portal: CustomDialogPortal
};

// src/Input/Input.tsx
import React12 from "react";
import { CopyIcon, EyeCloseIcon, EyeOpenIcon } from "@100mslive/react-icons";
var Input = styled("input", {
  fontFamily: "$sans",
  lineHeight: "inherit",
  backgroundColor: "$surface_default",
  borderRadius: "8px",
  outline: "none",
  border: "1px solid $border_default",
  padding: "0.5rem 0.75rem",
  minHeight: "30px",
  color: "$on_surface_high",
  fontSize: "$md",
  "&:focus": {
    boxShadow: "0 0 0 1px $colors$primary_default",
    border: "1px solid transparent"
  },
  "&::placeholder": {
    color: "$on_surface_medium"
  },
  variants: {
    error: {
      true: {
        "&:focus": {
          boxShadow: "0 0 0 3px $colors$alert_error_default"
        }
      }
    }
  }
});
var PasswordRoot = styled("div", {
  w: "100%",
  position: "relative",
  display: "flex"
});
var PasswordShowIcon = (_a7) => {
  var _b7 = _a7, { showPassword, css: css2 } = _b7, props = __objRest(_b7, ["showPassword", "css"]);
  return /* @__PURE__ */ React12.createElement(Flex, __spreadValues({ css: __spreadValues({}, css2) }, props), showPassword ? /* @__PURE__ */ React12.createElement(EyeOpenIcon, null) : /* @__PURE__ */ React12.createElement(EyeCloseIcon, null));
};
var PasswordCopyIcon = (_a7) => {
  var _b7 = _a7, { css: css2 } = _b7, props = __objRest(_b7, ["css"]);
  return /* @__PURE__ */ React12.createElement(Flex, __spreadValues({ css: __spreadValues({}, css2) }, props), /* @__PURE__ */ React12.createElement(CopyIcon, null));
};
var PasswordIcons = React12.forwardRef((_a7, ref) => {
  var _b7 = _a7, { css: css2 } = _b7, props = __objRest(_b7, ["css"]);
  return /* @__PURE__ */ React12.createElement(
    Flex,
    __spreadValues({
      css: __spreadValues({
        position: "absolute",
        top: 0,
        height: "100%",
        zIndex: 10,
        right: "$4",
        bg: "$surface_bright",
        alignItems: "center"
      }, css2),
      ref
    }, props),
    props.children
  );
});
var ReactInput = React12.forwardRef((_a7, ref) => {
  var _b7 = _a7, { showPassword = false, css: css2 } = _b7, props = __objRest(_b7, ["showPassword", "css"]);
  return /* @__PURE__ */ React12.createElement(
    Input,
    __spreadProps(__spreadValues({
      css: __spreadValues({ flexGrow: 1, width: "100%" }, css2),
      type: showPassword ? "text" : "password"
    }, props), {
      ref
    })
  );
});
var PasswordInput = {
  Root: PasswordRoot,
  Icons: PasswordIcons,
  Input: ReactInput,
  ShowIcon: PasswordShowIcon,
  CopyIcon: PasswordCopyIcon
};

// src/VideoTile/StyledVideoTile.tsx
var Root7 = styled("div", {
  padding: "0.75rem"
  // show videotile context menu on hover
  // [`&:hover .tile-menu`]: {
  //   display: 'inline-block',
  // },
});
var Container = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  borderRadius: "$2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "$background_default",
  variants: {
    transparentBg: {
      true: {
        background: "transparent"
      }
    },
    noRadius: {
      true: {
        borderRadius: 0
      }
    }
  }
});
var Overlay2 = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%"
});
var Info = styled("div", {
  color: "$on_primary_high",
  position: "absolute",
  bottom: "5px",
  left: "50%",
  fontSize: "$sm",
  transform: "translateX(-50%)",
  textAlign: "center",
  width: "80%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  fontFamily: "$sans"
});
var AttributeBox = styled("div", __spreadProps(__spreadValues({
  position: "absolute",
  top: "$4",
  color: "$on_secondary_high",
  bg: "$secondary_dim",
  borderRadius: "$round",
  width: "$14",
  height: "$14",
  mb: "5px"
}, flexCenter), {
  variants: {
    size: {
      small: {
        width: "$10",
        height: "$10",
        "& > svg": {
          width: "$8",
          height: "$8"
        }
      },
      medium: {
        width: "$13",
        height: "$13"
      }
    },
    position: {
      left: { left: "$4" },
      right: { right: "$4" }
    }
  },
  defaultVariants: {
    size: "medium",
    position: "left"
  }
}));
var AudioIndicator = styled(AttributeBox, {
  defaultVariants: { position: "right" }
});
var FullScreenButton = styled("button", {
  height: "$14",
  p: "$2 $4",
  color: "$on_surface_high",
  borderRadius: "$1",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "$2",
  right: "$2",
  zIndex: 5,
  "&:not([disabled]):focus": {
    outline: "none",
    boxShadow: "0 0 0 3px $colors$primary_bright"
  }
});
var AvatarContainer = styled(Box, __spreadProps(__spreadValues({}, flexCenter), {
  flexDirection: "column",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translateX(-50%) translateY(-50%)",
  width: "40%",
  height: "40%",
  "& > div": {
    maxHeight: "$20",
    height: "100%"
  }
}));
var StyledVideoTile = {
  Root: Root7,
  Container,
  Overlay: Overlay2,
  Info,
  AvatarContainer,
  AttributeBox,
  AudioIndicator,
  FullScreenButton
};

// src/VideoList/videoListUtils.tsx
var getLeft = (index, currentPageIndex) => {
  if (index === currentPageIndex) {
    return 0;
  }
  if (index + 1 === currentPageIndex) {
    return "-100%";
  }
  if (index - 1 === currentPageIndex) {
    return "100%";
  }
  if (index < currentPageIndex) {
    return "-200%";
  }
  return "200%";
};

// src/VideoList/StyledVideoList.tsx
var Root8 = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column"
});
var Container2 = styled("div", {
  height: "100%",
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  overflow: "hidden"
});
var View = styled("div", {
  height: "100%",
  width: "100%",
  position: "absolute",
  display: "flex",
  placeContent: "center",
  flexWrap: "wrap",
  alignItems: "center"
});
var StyledVideoList = {
  Root: Root8,
  Container: Container2,
  View
};

// src/Pagination/StyledPagination.tsx
var Root9 = styled("div", {
  height: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "& > * + *": {
    marginRight: "0",
    marginLeft: "0.5rem"
  }
});
var Chevron = styled("button", {
  color: "$on_surface_high",
  border: "none",
  "&:focus": {
    outline: "none"
  },
  "&[disabled]": {
    color: "$on_surface_low",
    cursor: "not-allowed"
  },
  backgroundColor: "transparent",
  display: "flex"
});
var Dots = styled("div", {
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginRight: "0",
    marginLeft: "0.5rem"
  }
});
var Dot = styled("button", {
  "&:focus": {
    outline: "none"
  },
  borderRadius: "9999px",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "$on_surface_low",
  padding: "0px",
  border: "none",
  cursor: "pointer",
  variants: {
    active: {
      true: {
        backgroundColor: "$on_surface_high"
      }
    }
  }
});
var StyledPagination = {
  Root: Root9,
  Chevron,
  Dots,
  Dot
};

// src/Dropdown/Dropdown.tsx
import {
  CheckboxItem,
  Content as Content3,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal as Portal2,
  Root as Root10,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger as Trigger3
} from "@radix-ui/react-dropdown-menu";
var DropdownRoot = styled(Root10, {});
var DropdownTrigger = styled(Trigger3, {
  cursor: "pointer",
  appearance: "none !important",
  '&[data-state="open"]': {
    backgroundColor: "$surface_bright"
  },
  "&:focus": {
    outline: "none"
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 3px $colors$primary_default"
  }
});
var DropdownTriggerItem = styled(SubTrigger, {
  w: "100%",
  color: "$on_surface_high",
  p: "$8",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    cursor: "pointer",
    bg: "$surface_brighter"
  },
  "&:focus-visible": {
    bg: "$surface_brighter",
    outline: "none"
  }
});
var DropdownItem = styled(Item, {
  color: "$on_surface_high",
  p: "$8",
  display: "flex",
  alignItems: "center",
  outline: "none",
  backgroundColor: "$surface_dim",
  "&:hover": {
    cursor: "pointer",
    bg: "$surface_bright"
  },
  "&:focus-visible": {
    bg: "$surface_bright"
  }
});
var DropdownItemSeparator = styled(Separator, {
  h: 1,
  backgroundColor: "$border_bright",
  m: "$4 $8"
});
var DropdownContent = styled(Content3, {
  w: "$80",
  maxHeight: "$64",
  r: "$1",
  py: "$4",
  backgroundColor: "$surface_dim",
  overflowY: "auto",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  zIndex: 20,
  fontFamily: "$sans"
});
var DropdownLabel = styled(Label, {
  display: "flex",
  alignItems: "center",
  h: "$12",
  w: "100%",
  p: "$8 $4"
});
var DropdownGroup = styled(Group, {});
var DropdownSubMenu = styled(Sub, {});
var DropdownSubMenuContent = styled(SubContent, {
  w: "$80",
  maxHeight: "$64",
  r: "$1",
  py: "$4",
  backgroundColor: "$surface_bright",
  overflowY: "auto",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  zIndex: 20
});
var DropdownCheckboxItem = styled(CheckboxItem, {
  color: "$on_surface_high",
  p: "$8",
  display: "flex",
  alignItems: "center",
  outline: "none",
  "&:hover": {
    cursor: "pointer",
    bg: "$surface_brighter"
  },
  "&:focus-visible": {
    bg: "$surface_brighter"
  },
  gap: "$2"
});
var DropdownItemIndicator = styled(ItemIndicator, {
  w: "$10",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
var Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  TriggerItem: DropdownTriggerItem,
  Content: DropdownContent,
  Portal: Portal2,
  SubMenu: DropdownSubMenu,
  SubMenuContent: DropdownSubMenuContent,
  Item: DropdownItem,
  Label: DropdownLabel,
  Group: DropdownGroup,
  ItemSeparator: DropdownItemSeparator,
  CheckboxItem: DropdownCheckboxItem,
  ItemIndicator: DropdownItemIndicator
};

// src/Video/Video.tsx
import React13 from "react";
import { useVideo } from "@100mslive/react-sdk";
var StyledVideo = styled("video", {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "$2",
  objectFit: "cover",
  background: "$background_default",
  variants: {
    mirror: {
      true: {
        transform: "scaleX(-1)"
      }
    },
    screenShare: {
      true: {
        objectFit: "contain"
      }
    },
    degraded: {
      // send the video behind when it's degraded so avatar can show on top of it. Video will be stuck frame in this case.
      // not hiding by using display none, because it will lead it to be detached as it will no longer be in view.
      true: {
        zIndex: -100
      }
    },
    noRadius: {
      true: {
        borderRadius: 0
      }
    }
  },
  defaultVariants: {
    mirror: false
  }
});
var Video = (_a7) => {
  var _b7 = _a7, {
    trackId,
    attach
  } = _b7, props = __objRest(_b7, [
    "trackId",
    "attach"
  ]);
  const { videoRef } = useVideo({ trackId, attach });
  return /* @__PURE__ */ React13.createElement(StyledVideo, __spreadValues({ ref: videoRef }, props));
};

// src/TileMenu/StyledMenuTile.tsx
import * as Popover from "@radix-ui/react-popover";
var Root12 = Popover.Root;
var StyledTrigger = styled(Popover.Trigger, __spreadProps(__spreadValues({
  position: "absolute",
  bottom: "$2",
  right: "$2",
  zIndex: 10,
  width: "$13",
  height: "$13",
  color: "$on_surface_high",
  borderRadius: "$2",
  backgroundColor: "$surface_bright",
  cursor: "pointer",
  border: "none"
}, flexCenter), {
  "&:not([disabled]):focus": {
    outline: "none",
    boxShadow: "0 0 0 3px $colors$primary_bright"
  }
}));
var StyledContent = styled(Popover.Content, __spreadValues({
  fontFamily: "$sans",
  backgroundColor: "$surface_dim",
  padding: "$5 0",
  display: "flex",
  flexDirection: "column",
  borderRadius: "$space$6",
  zIndex: 11,
  width: "$60"
}, popoverAnimation));
var styledItem = {
  fontSize: "$sm",
  color: "$on_surface_high",
  display: "flex",
  alignItems: "center",
  padding: "$4 $6",
  width: "100%",
  backgroundColor: "$menuBg"
};
var StyledItemButton = styled("button", __spreadProps(__spreadValues({}, styledItem), {
  height: "$14",
  border: "none",
  "&:hover": {
    backgroundColor: "$surface_brighter"
  },
  cursor: "pointer",
  // TODO: default focus applied cause issues with this style
  "&:focus": {
    outline: "none"
    // backgroundColor: '$grey3',
  },
  "& > * + *": {
    marginRight: "0",
    marginLeft: "$4"
  }
}));
var StyledVolumeItem = styled("div", __spreadProps(__spreadValues({}, styledItem), {
  alignItems: "start",
  flexDirection: "column",
  marginBottom: "0"
}));
var Flex2 = styled("div", {
  display: "flex",
  "& > * + *": {
    marginRight: "0",
    marginLeft: "$4"
  }
});
var RemoveMenuItem = styled(StyledItemButton, {
  color: "$alert_error_default",
  borderTop: "1px solid $border_bright"
});
var StyledMenuTile = {
  Root: Root12,
  Trigger: StyledTrigger,
  Content: StyledContent,
  ItemButton: StyledItemButton,
  VolumeItem: StyledVolumeItem,
  RemoveItem: RemoveMenuItem
};

// src/AudioLevel/useBorderAudioLevel.tsx
import { useCallback as useCallback2, useRef as useRef3 } from "react";
import { useAudioLevelStyles } from "@100mslive/react-sdk";
function useBorderAudioLevel(audioTrackId) {
  const { theme: theme2 } = useTheme();
  const color = theme2.colors.primary_default.value;
  const getStyle = useCallback2(
    (level) => {
      const style = {
        transition: "outline 0.4s ease-in-out"
      };
      style["outline"] = level ? `${sigmoid(level) * 4}px solid ${color}` : "0px solid transparent";
      return style;
    },
    [color]
  );
  const ref = useRef3(null);
  useAudioLevelStyles({
    trackId: audioTrackId,
    getStyle,
    ref
  });
  return ref;
}
var sigmoid = (z) => {
  return 1 / (1 + Math.exp(-z));
};

// src/AudioLevel/AudioLevel.tsx
import React14, { useEffect as useEffect4, useRef as useRef4 } from "react";
import { selectTrackAudioByID, useHMSVanillaStore } from "@100mslive/react-sdk";

// src/AudioLevel/audio-level.png
var audio_level_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAtUExURQAAAP///////////////////////////////////////////////////////6FIq5sAAAAOdFJOUwA/QJqbnJ2euLnc3d7+2IFKrQAAAa9JREFUaN7dmcFRxDAMRXNgW4AbV24ZSkgrlAAFUAqlpITtgT0QnB22BnY3iWXHSlYz5H/NoJNO8bP8JTlyVW1k923/MveYdnc623PuUe3jsux37tEDcN24eFR7HJb9TD2qvQ/LfqUexR7a41Xx7bDsMfWo2j+NlnpU7TsBiOKdAOqoeCcAUTwFYFK8pn0GgFLttWVxAEq1pwJo1Z4KoFV7KoBW7YEAT0uK729pfxuAZcX/3Fr2TwAx05cVDwWIu11RPBQg7lZ0XlR7JIDsdkXxCIDp5GXf2v0GBxBP3pTfAIB48qb83h7AWtlhANbKDgOwVnYYgLWywwCsn/u/AO5HMIqwcwOovdNwLESNG8BQioNfKa52YwBsakC04/MF9C1Rw4HdjhU1SCyKqOCvZCGLhXgMgKgGiUWRI9hr+aSG+bU8sP4LyliIxwW4xOI1j8pKZlB/Tjt794ANpKzdAzOgaOzdAzKiCVpmkACWM4MEIFVCyQzfQWXnPao9eA+rG+dxfXB8L1jNB4pN+bCfd4re59Gqoz9alflQ+zzb7ZROwTWlUziEIO8UZCs7hc1+AbiVW6XSE8knAAAAAElFTkSuQmCC";

// src/AudioLevel/AudioLevel.tsx
var positionValues = new Array(101).fill(0).reduce((acc, _, index) => {
  acc[index] = Math.round(index / 100 * 4) / 4;
  return acc;
}, {});
var barAnimation = keyframes({
  from: {
    maskSize: "4em .8em",
    "-webkit-mask-position-y": ".1em",
    maskPosition: "initial .1em"
  },
  "50%": {
    maskSize: "4em 1em",
    "-webkit-mask-position-y": 0,
    maskPosition: "initial 0"
  },
  to: {
    maskSize: "4em .8em",
    "-webkit-mask-position-y": ".1em",
    maskPosition: "initial 0.1em"
  }
});
var AudioBar = () => {
  return /* @__PURE__ */ React14.createElement(
    Box,
    {
      css: {
        width: ".25em",
        height: "1em",
        maskImage: `url(${audio_level_default})`,
        "-webkit-mask-repeat": "no-repeat",
        backgroundColor: "$on_primary_high",
        maskSize: "4em 1em"
      }
    }
  );
};
var AudioLevel = ({
  trackId,
  size
}) => {
  const ref = useRef4(null);
  const vanillaStore = useHMSVanillaStore();
  useEffect4(() => {
    const unsubscribe = vanillaStore.subscribe((audioLevel) => {
      if (ref.current) {
        let index = 0;
        for (const child of ref.current.children) {
          const positionX = `-${positionValues[audioLevel] * (index === 1 ? 2.5 : 1.25)}em`;
          child.style["-webkit-mask-position-x"] = positionX;
          child.style["mask-position"] = `${positionX} 0`;
          child.style["animation"] = positionValues[audioLevel] > 0 ? `${barAnimation} 0.6s steps(3,jump-none) 0s infinite` : "none";
          index++;
        }
      }
    }, selectTrackAudioByID(trackId));
    return unsubscribe;
  }, [vanillaStore, trackId]);
  return /* @__PURE__ */ React14.createElement(
    Flex,
    {
      ref,
      css: {
        fontSize: size === "small" ? "0.75rem" : "1rem",
        gap: size === "small" ? "$1" : "$2"
      }
    },
    /* @__PURE__ */ React14.createElement(AudioBar, null),
    /* @__PURE__ */ React14.createElement(AudioBar, null),
    /* @__PURE__ */ React14.createElement(AudioBar, null)
  );
};

// src/Popover/index.tsx
import {
  Arrow as Arrow2,
  Close as Close2,
  Content as Content5,
  Popover as Root13,
  Portal as Portal3,
  Trigger as Trigger5
} from "@radix-ui/react-popover";
var StyledContent2 = styled(Content5, __spreadValues({
  padding: "$6",
  borderRadius: "$2",
  backgroundColor: "$background_default",
  boxShadow: "$sm",
  zIndex: 12
}, popoverAnimation));
var StyledArrow = styled(Arrow2, __spreadValues({}, popoverAnimation));
var StyledTrigger2 = styled(Trigger5, {
  "&:hover": {
    cursor: "pointer"
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 3px $colors$primary_default"
  }
});
var Popover2 = {
  Root: Root13,
  Content: StyledContent2,
  Trigger: StyledTrigger2,
  Portal: Portal3,
  Arrow: StyledArrow,
  Close: Close2
};

// src/Stats/Stats.tsx
import React15, { Fragment } from "react";
import {
  selectConnectionQualityByPeerID,
  selectHMSStats as selectHMSStats2,
  simulcastMapping,
  useHMSStatsStore as useHMSStatsStore2,
  useHMSStore
} from "@100mslive/react-sdk";

// src/Stats/formatBytes.ts
var formatBytes = (bytes, unit = "B", decimals = 2) => {
  if (bytes === 0) {
    return `0 ${unit}`;
  }
  if (!bytes) {
    return "-";
  }
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"].map(
    (size) => size + unit
  );
  let i = Math.floor(Math.log(bytes) / Math.log(k));
  i === 0 && i++;
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

// src/Stats/StyledStats.tsx
var Root14 = styled("div", {
  backgroundColor: "rgba(0,0,0,0.75)",
  position: "absolute",
  top: "$3",
  left: "$3",
  zIndex: 7,
  borderRadius: "$2",
  padding: "$2",
  fontSize: "$xs",
  overflowY: "auto",
  maxHeight: "75%",
  maxWidth: "85%"
});
var Table = styled("table", {});
var Row = styled("tr", {
  width: "100%",
  "& > * + *": {
    px: "$4"
  },
  whiteSpace: "nowrap",
  textAlign: "left"
});
var Label2 = styled("td", {
  color: "$on_primary_high",
  fontWeight: "$regular"
});
var Value = styled("td", {
  color: "$on_primary_high"
});
var Gap = styled("tr", {
  height: "$4"
});
var Stats = {
  Root: Root14,
  Row,
  Label: Label2,
  Value,
  Table,
  Gap
};

// src/Stats/useQoE.ts
import { useRef as useRef5 } from "react";
import { usePrevious } from "react-use";
import {
  selectHMSStats,
  useHMSStatsStore
} from "@100mslive/react-sdk";
var EXPECTED_RESOLUTION = 1280 * 720;
var clip = (value, min_value, max_value) => {
  return Math.max(Math.min(value, max_value), min_value);
};
var useQoE = ({
  videoTrackID,
  audioTrackID,
  isLocal = false
}) => {
  const audioTrackStats = useHMSStatsStore(
    selectHMSStats.trackStatsByID(audioTrackID)
  );
  const videoTrackStats = useHMSStatsStore(
    selectHMSStats.trackStatsByID(videoTrackID)
  );
  const prevVideoTrackStats = usePrevious(videoTrackStats);
  const prevAudioTrackStats = usePrevious(audioTrackStats);
  const prevJitterBufferDelayMs = useRef5(0);
  if (isLocal || videoTrackID && !videoTrackStats || audioTrackID && !audioTrackStats) {
    return;
  }
  const resolutionNorm = ((videoTrackStats == null ? void 0 : videoTrackStats.frameWidth) || 0) * ((videoTrackStats == null ? void 0 : videoTrackStats.frameHeight) || 0) / EXPECTED_RESOLUTION;
  const framesDecodedInLastSec = (videoTrackStats == null ? void 0 : videoTrackStats.framesDecoded) && (prevVideoTrackStats == null ? void 0 : prevVideoTrackStats.framesDecoded) ? videoTrackStats.framesDecoded - prevVideoTrackStats.framesDecoded : 0;
  let freezeDurationNorm = 1 - (((videoTrackStats == null ? void 0 : videoTrackStats.totalFreezesDuration) || 0) - ((prevVideoTrackStats == null ? void 0 : prevVideoTrackStats.totalFreezesDuration) || 0));
  freezeDurationNorm = freezeDurationNorm < 0 ? 0.5 : freezeDurationNorm;
  freezeDurationNorm = framesDecodedInLastSec === 0 ? 0 : freezeDurationNorm;
  const fpsNorm = framesDecodedInLastSec / 30;
  const prevJBDelay = (prevVideoTrackStats == null ? void 0 : prevVideoTrackStats.jitterBufferDelay) || 0;
  const prevJBEmittedCount = (prevVideoTrackStats == null ? void 0 : prevVideoTrackStats.jitterBufferEmittedCount) || 0;
  const currentJBDelay = ((videoTrackStats == null ? void 0 : videoTrackStats.jitterBufferDelay) || 0) - prevJBDelay;
  const currentJBEmittedCount = ((videoTrackStats == null ? void 0 : videoTrackStats.jitterBufferEmittedCount) || 0) - prevJBEmittedCount;
  const jitterBufferDelayMs = currentJBEmittedCount > 0 ? currentJBDelay * 1e3 / currentJBEmittedCount : prevJitterBufferDelayMs.current;
  prevJitterBufferDelayMs.current = jitterBufferDelayMs;
  const delayNorm = 1 - Math.min(1, jitterBufferDelayMs / 2e3);
  const prevConcealedSamples = ((prevAudioTrackStats == null ? void 0 : prevAudioTrackStats.concealedSamples) || 0) - ((prevAudioTrackStats == null ? void 0 : prevAudioTrackStats.silentConcealedSamples) || 0);
  const currentConcealedSamples = ((audioTrackStats == null ? void 0 : audioTrackStats.concealedSamples) || 0) - ((audioTrackStats == null ? void 0 : audioTrackStats.silentConcealedSamples) || 0) - prevConcealedSamples;
  const audioConcealedNorm = 1 - currentConcealedSamples / 48e3;
  return (5 * __pow(clip(freezeDurationNorm, 0, 1), 3) * __pow(clip(resolutionNorm, 0, 1), 0.3) * __pow(clip(fpsNorm, 0, 1), 0.2) * __pow(clip(delayNorm, 0, 1), 0.5) * __pow(clip(audioConcealedNorm, 0, 1), 2)).toFixed(2);
};

// src/Stats/Stats.tsx
function VideoTileStats({
  videoTrackID,
  audioTrackID,
  peerID,
  isLocal = false
}) {
  var _a7, _b7, _c;
  const audioSelector = isLocal ? selectHMSStats2.localAudioTrackStatsByID : selectHMSStats2.trackStatsByID;
  const audioTrackStats = useHMSStatsStore2(audioSelector(audioTrackID));
  const localVideoTrackStats = useHMSStatsStore2(
    selectHMSStats2.localVideoTrackStatsByID(videoTrackID)
  );
  const remoteVideoTrackStats = useHMSStatsStore2(
    selectHMSStats2.trackStatsByID(videoTrackID)
  );
  const videoTrackStats = isLocal ? localVideoTrackStats == null ? void 0 : localVideoTrackStats[0] : remoteVideoTrackStats;
  const downlinkScore = (_a7 = useHMSStore(
    selectConnectionQualityByPeerID(peerID)
  )) == null ? void 0 : _a7.downlinkQuality;
  const availableOutgoingBitrate = useHMSStatsStore2(
    selectHMSStats2.availablePublishBitrate
  );
  const qoe = useQoE({ videoTrackID, audioTrackID, isLocal });
  if (!(audioTrackStats || videoTrackStats)) {
    return null;
  }
  return /* @__PURE__ */ React15.createElement(Stats.Root, null, /* @__PURE__ */ React15.createElement("table", null, /* @__PURE__ */ React15.createElement("tbody", null, isLocal ? /* @__PURE__ */ React15.createElement(Fragment, null, /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullishAndNot0(availableOutgoingBitrate),
      label: "AOBR",
      tooltip: "Available Outgoing Bitrate",
      value: formatBytes(availableOutgoingBitrate, "b/s")
    }
  ), localVideoTrackStats == null ? void 0 : localVideoTrackStats.map((stat) => {
    var _a8, _b8;
    if (!stat) {
      return null;
    }
    const layer = stat.rid ? simulcastMapping[stat.rid] : "";
    return /* @__PURE__ */ React15.createElement(Fragment, { key: `${stat.id}${stat.rid}` }, layer && /* @__PURE__ */ React15.createElement(StatsRow, { label: layer.toUpperCase(), value: "" }), /* @__PURE__ */ React15.createElement(
      StatsRow,
      {
        show: isNotNullishAndNot0(stat.frameWidth),
        label: "Width",
        value: (_a8 = stat.frameWidth) == null ? void 0 : _a8.toString()
      }
    ), /* @__PURE__ */ React15.createElement(
      StatsRow,
      {
        show: isNotNullishAndNot0(stat.frameHeight),
        label: "Height",
        value: (_b8 = stat.frameHeight) == null ? void 0 : _b8.toString()
      }
    ), /* @__PURE__ */ React15.createElement(
      StatsRow,
      {
        show: isNotNullishAndNot0(stat.framesPerSecond),
        label: "FPS",
        value: `${stat.framesPerSecond} ${isNotNullishAndNot0(stat.framesDropped) ? `(${stat.framesDropped} dropped)` : ""}`
      }
    ), /* @__PURE__ */ React15.createElement(
      StatsRow,
      {
        show: isNotNullish(stat.bitrate),
        label: "Bitrate(V)",
        value: formatBytes(stat.bitrate, "b/s")
      }
    ), /* @__PURE__ */ React15.createElement(Stats.Gap, null));
  })) : /* @__PURE__ */ React15.createElement(Fragment, null, /* @__PURE__ */ React15.createElement(StatsRow, { show: isNotNullish(qoe), label: "QoE", value: qoe }), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullishAndNot0(videoTrackStats == null ? void 0 : videoTrackStats.frameWidth),
      label: "Width",
      value: (_b7 = videoTrackStats == null ? void 0 : videoTrackStats.frameWidth) == null ? void 0 : _b7.toString()
    }
  ), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullishAndNot0(videoTrackStats == null ? void 0 : videoTrackStats.frameHeight),
      label: "Height",
      value: (_c = videoTrackStats == null ? void 0 : videoTrackStats.frameHeight) == null ? void 0 : _c.toString()
    }
  ), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullishAndNot0(videoTrackStats == null ? void 0 : videoTrackStats.framesPerSecond),
      label: "FPS",
      value: `${videoTrackStats == null ? void 0 : videoTrackStats.framesPerSecond} ${isNotNullishAndNot0(videoTrackStats == null ? void 0 : videoTrackStats.framesDropped) ? `(${videoTrackStats == null ? void 0 : videoTrackStats.framesDropped} dropped)` : ""}`
    }
  ), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullish(videoTrackStats == null ? void 0 : videoTrackStats.totalPausesDuration),
      label: "Pauses Duration",
      value: videoTrackStats == null ? void 0 : videoTrackStats.totalPausesDuration
    }
  ), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullish(videoTrackStats == null ? void 0 : videoTrackStats.totalFreezesDuration),
      label: "Freezes Duration",
      value: videoTrackStats == null ? void 0 : videoTrackStats.totalFreezesDuration
    }
  ), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullish(videoTrackStats == null ? void 0 : videoTrackStats.bitrate),
      label: "Bitrate(V)",
      value: formatBytes(videoTrackStats == null ? void 0 : videoTrackStats.bitrate, "b/s")
    }
  )), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullish(audioTrackStats == null ? void 0 : audioTrackStats.bitrate),
      label: "Bitrate(A)",
      value: formatBytes(audioTrackStats == null ? void 0 : audioTrackStats.bitrate, "b/s")
    }
  ), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullish(downlinkScore),
      label: "CQS",
      value: downlinkScore
    }
  ), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullish(videoTrackStats == null ? void 0 : videoTrackStats.codec),
      label: "Codec(V)",
      value: videoTrackStats == null ? void 0 : videoTrackStats.codec
    }
  ), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullish(audioTrackStats == null ? void 0 : audioTrackStats.codec),
      label: "Codec(A)",
      value: audioTrackStats == null ? void 0 : audioTrackStats.codec
    }
  ), /* @__PURE__ */ React15.createElement(
    PacketLostAndJitter,
    {
      audioTrackStats,
      videoTrackStats
    }
  ))));
}
var PacketLostAndJitter = ({
  audioTrackStats,
  videoTrackStats
}) => {
  var _a7, _b7;
  const isLocalPeer = (audioTrackStats == null ? void 0 : audioTrackStats.type.includes("outbound")) || (videoTrackStats == null ? void 0 : videoTrackStats.type.includes("outbound"));
  const audioStats = isLocalPeer ? audioTrackStats == null ? void 0 : audioTrackStats.remote : audioTrackStats;
  const videoStats = isLocalPeer ? videoTrackStats == null ? void 0 : videoTrackStats.remote : videoTrackStats;
  return /* @__PURE__ */ React15.createElement(React15.Fragment, null, /* @__PURE__ */ React15.createElement(TrackPacketsLostRow, { label: "Packet Loss(V)", stats: videoStats }), /* @__PURE__ */ React15.createElement(TrackPacketsLostRow, { label: "Packet Loss(A)", stats: audioStats }), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullish(videoStats == null ? void 0 : videoStats.jitter),
      label: "Jitter(V)",
      value: (_a7 = videoStats == null ? void 0 : videoStats.jitter) == null ? void 0 : _a7.toFixed(4)
    }
  ), /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullish(audioStats == null ? void 0 : audioStats.jitter),
      label: "Jitter(A)",
      value: (_b7 = audioStats == null ? void 0 : audioStats.jitter) == null ? void 0 : _b7.toFixed(4)
    }
  ));
};
var TrackPacketsLostRow = ({
  stats,
  label
}) => {
  const packetsLostRate = `${(stats == null ? void 0 : stats.packetsLostRate) ? stats.packetsLostRate.toFixed(2) : 0}/s`;
  return /* @__PURE__ */ React15.createElement(
    StatsRow,
    {
      show: isNotNullishAndNot0(stats == null ? void 0 : stats.packetsLost),
      label,
      value: `${stats == null ? void 0 : stats.packetsLost}(${packetsLostRate})`
    }
  );
};
var RawStatsRow = ({
  label = "",
  value = "",
  tooltip = "",
  show = true
}) => {
  const statsLabel = /* @__PURE__ */ React15.createElement(Stats.Label, null, label);
  return /* @__PURE__ */ React15.createElement(React15.Fragment, null, show ? /* @__PURE__ */ React15.createElement(Stats.Row, null, tooltip ? /* @__PURE__ */ React15.createElement(Tooltip, { side: "top", title: tooltip }, statsLabel) : statsLabel, value === "" ? /* @__PURE__ */ React15.createElement(Stats.Value, null) : /* @__PURE__ */ React15.createElement(Stats.Value, null, value)) : null);
};
var StatsRow = React15.memo(RawStatsRow);
function isNotNullishAndNot0(value) {
  return isNotNullish(value) && value !== 0;
}
function isNotNullish(value) {
  return value !== void 0 && value !== null;
}

// src/Checkbox/Checkbox.tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
var CheckboxRoot = styled(CheckboxPrimitive.Root, {
  all: "unset",
  border: "1px solid $primary_default",
  backgroundColor: "$on_primary_high",
  width: "$8",
  height: "$8",
  borderRadius: "$0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "none",
  outline: "none",
  cursor: "pointer",
  "&:focus": {
    boxShadow: "none",
    outline: "none"
  },
  '&[data-state="checked"]': {
    backgroundColor: "$primary_default"
  }
});
var CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: "$on_primary_high"
});
var Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator
};

// src/Label/Label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
var Label3 = styled(LabelPrimitive.Root, {
  fontFamily: "$sans",
  fontSize: "$md",
  color: "$on_primary_high"
});

// src/RadioGroup/RadioGroup.tsx
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
var RadioGroupRoot = styled(RadioGroupPrimitive.Root, {
  display: "flex",
  alignItems: "center"
});
var RadioGroupItem = styled(RadioGroupPrimitive.Item, {
  bg: "$on_primary_high",
  width: "$8",
  height: "$8",
  border: "1px solid $primary_default",
  cursor: "pointer",
  borderRadius: "$round",
  "&:focus": {
    boxShadow: "none",
    outline: "none"
  },
  '&[data-state="checked"]': {
    borderWidth: "$space$2",
    p: "$1"
  }
});
var RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
  bg: "$primary_default"
});
var RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
  Indicator: RadioGroupIndicator
};

// src/Toast/Toast.tsx
import React16 from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { CrossIcon as CrossIcon2 } from "@100mslive/react-icons";
var getToastVariant = (base) => {
  return {
    borderLeftColor: base,
    borderLeft: 0,
    "&:before": {
      position: "absolute",
      top: "-1px",
      left: "-$4",
      width: "$8",
      borderLeft: `solid $space$px ${base}`,
      borderTop: `solid $space$px ${base}`,
      borderBottom: `solid $space$px ${base}`,
      borderTopLeftRadius: "$3",
      borderBottomLeftRadius: "$3",
      bg: base,
      content: " ",
      height: "100%",
      zIndex: 10
    },
    "@sm": {
      "&:before": {
        content: "none"
      },
      border: `solid $space$px ${base}`
    }
  };
};
var ToastRoot = styled(ToastPrimitives.Root, __spreadProps(__spreadValues({
  r: "$3",
  bg: "$surface_default",
  p: "$10",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  fontFamily: "$sans",
  border: "solid $space$px $border_bright",
  overflow: "hidden"
}, toastAnimation), {
  "@sm": {
    p: "$8 $11"
  },
  variants: {
    variant: {
      standard: getToastVariant("$secondary_default"),
      warning: getToastVariant("$alert_warning"),
      error: getToastVariant("$alert_error_default"),
      success: getToastVariant("$alert_success")
    }
  },
  defaultVariants: {
    variant: "standard"
  }
}));
var ToastTitle = styled(ToastPrimitives.Title, {
  fontSize: "$md",
  color: "$on_surface_high",
  fontWeight: "$semiBold",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});
var ToastDescription = styled(ToastPrimitives.Description, {
  color: "$on_surface_medium"
});
var ToastClose = styled(ToastPrimitives.Close, {});
var ToastAction = styled(ToastPrimitives.Action, {
  cursor: "pointer",
  background: "none",
  border: "none"
});
var ToastViewport = styled(ToastPrimitives.Viewport, {
  position: "fixed",
  bottom: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  padding: "$8",
  gap: 10,
  width: 390,
  "@sm": {
    width: "100%",
    padding: "$6"
  },
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 1e3
});
var DefaultClose = ({
  css: css2
}) => {
  return /* @__PURE__ */ React16.createElement(ToastClose, { css: css2, asChild: true }, /* @__PURE__ */ React16.createElement(IconButton, null, /* @__PURE__ */ React16.createElement(CrossIcon2, null)));
};
var HMSToast = (_a7) => {
  var _b7 = _a7, {
    title,
    description,
    isClosable = true,
    icon,
    action,
    inlineAction = false
  } = _b7, props = __objRest(_b7, [
    "title",
    "description",
    "isClosable",
    "icon",
    "action",
    "inlineAction"
  ]);
  return /* @__PURE__ */ React16.createElement(React16.Fragment, null, /* @__PURE__ */ React16.createElement(ToastRoot, __spreadValues({}, props), /* @__PURE__ */ React16.createElement(ToastTitle, null, /* @__PURE__ */ React16.createElement(Flex, { align: "center", css: { gap: "$4", flex: "1 1 0", minWidth: 0 } }, icon ? /* @__PURE__ */ React16.createElement(Box, { css: { w: "$10", h: "$10", alignSelf: "start", mt: "$2" } }, icon) : null, /* @__PURE__ */ React16.createElement(
    Text,
    {
      variant: "sub1",
      css: { c: "inherit", wordBreak: "break-word" }
    },
    title
  )), isClosable ? /* @__PURE__ */ React16.createElement(DefaultClose, null) : null, !isClosable && inlineAction && action ? /* @__PURE__ */ React16.createElement(ToastAction, { altText: `${title}Action` }, action) : null), description ? /* @__PURE__ */ React16.createElement(ToastDescription, null, /* @__PURE__ */ React16.createElement(
    Text,
    {
      variant: "body1",
      css: { fontWeight: "$regular", c: "$on_surface_medium" }
    },
    description
  )) : null, !inlineAction && action ? /* @__PURE__ */ React16.createElement(ToastAction, { altText: `${title}Action`, css: { mt: "$10" } }, action) : null));
};
var Toast = {
  Provider: ToastPrimitives.Provider,
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Close: DefaultClose,
  Action: ToastAction,
  Viewport: ToastViewport,
  HMSToast
};

// src/Accordion/Accordion.tsx
import React17 from "react";
import * as BaseAccordion from "@radix-ui/react-accordion";
import { ChevronUpIcon } from "@100mslive/react-icons";
var StyledAccordion = styled(BaseAccordion.Root, {});
var StyledItem = styled(BaseAccordion.Item, {
  marginTop: "$px",
  display: "block",
  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: "$0",
    borderTopRightRadius: "$0"
  },
  "&:last-child": {
    borderBottomLeftRadius: "$4",
    borderBottomRightRadius: "$4"
  }
});
var StyledHeader = styled(BaseAccordion.Header, {
  all: "unset",
  display: "flex",
  fontFamily: "$sans"
});
var StyledTrigger3 = styled(BaseAccordion.Trigger, {
  all: "unset",
  fontFamily: "$sans",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "$md",
  lineHeight: "$md",
  color: "$on_surface_high"
});
var StyledContent3 = styled(BaseAccordion.Content, {
  display: "contents",
  fontSize: "$md",
  fontFamily: "$sans",
  color: "$on_surface_medium",
  '&[data-state="open"]': {
    animation: `${slideDown(
      "--radix-accordion-content-height"
    )} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
  },
  '&[data-state="closed"]': {
    animation: `${slideUp(
      "--radix-accordion-content-height"
    )} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
  }
});
var StyledChevron = styled(ChevronUpIcon, {
  color: "$on_primary_high",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=closed] &": { transform: "rotate(180deg)" }
});
var AccordionRoot = StyledAccordion;
var AccordionItem = StyledItem;
var AccordionHeader = React17.forwardRef((_a7, forwardedRef) => {
  var _b7 = _a7, { children, iconStyles, css: css2, chevronID } = _b7, props = __objRest(_b7, ["children", "iconStyles", "css", "chevronID"]);
  return /* @__PURE__ */ React17.createElement(StyledHeader, { css: css2 }, /* @__PURE__ */ React17.createElement(StyledTrigger3, __spreadProps(__spreadValues({}, props), { ref: forwardedRef }), children, /* @__PURE__ */ React17.createElement(StyledChevron, { "data-testid": chevronID, "aria-hidden": true, css: iconStyles })));
});
var AccordionContent = React17.forwardRef((_a7, forwardedRef) => {
  var _b7 = _a7, { children, contentStyles } = _b7, props = __objRest(_b7, ["children", "contentStyles"]);
  return /* @__PURE__ */ React17.createElement(StyledContent3, __spreadProps(__spreadValues({}, props), { ref: forwardedRef }), /* @__PURE__ */ React17.createElement(Box, { css: contentStyles }, children));
});

// src/Accordion/index.ts
var Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Content: AccordionContent,
  Header: AccordionHeader
};

// src/Fieldset/Fieldset.tsx
var StyledFieldset = styled("fieldset", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "none",
  backgroundColor: "transparent"
});
var Fieldset = StyledFieldset;

// src/Footer/Footer.tsx
var Root20 = styled(Flex, {
  justifyContent: "space-between",
  alignItems: "center",
  py: "$4",
  position: "relative",
  height: "100%",
  "@md": { flexWrap: "wrap", gap: "$4" }
});
var Left = styled(Flex, {
  alignItems: "center",
  position: "absolute",
  left: "$10",
  gap: "$8",
  "@md": {
    position: "unset",
    justifyContent: "center",
    w: "100%"
  }
});
var Center = styled(Flex, {
  w: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "$8"
});
var Right = styled(Flex, {
  alignItems: "center",
  position: "absolute",
  right: "$10",
  gap: "$8",
  "@md": {
    display: "none"
  }
});
var Footer = {
  Root: Root20,
  Left,
  Center,
  Right
};

// src/ReactSelect/index.ts
var ReactSelect_exports = {};
__export(ReactSelect_exports, {
  Select: () => Select2
});

// src/ReactSelect/ReactSelect.tsx
import * as SelectPrimitive from "@radix-ui/react-select";
var StyledRoot = styled(SelectPrimitive.Root, {});
var StyledTrigger4 = styled(SelectPrimitive.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$2",
  padding: "$8",
  lineHeight: "$px",
  gap: "$8",
  backgroundColor: "$secondary_default",
  color: "$on_primary_high",
  fontSize: "$8",
  cursor: "pointer",
  r: "$1"
});
var StyledContent4 = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "$surface_bright",
  r: "$1",
  h: "$80"
});
var StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: "$3"
});
var StyledItem2 = styled(SelectPrimitive.Item, {
  all: "unset",
  fontSize: "$7",
  r: "$1",
  display: "flex",
  p: "$4 $8",
  w: "$52",
  position: "relative",
  userSelect: "none",
  cursor: "pointer"
});
var StyledLabel = styled(SelectPrimitive.Label, {
  p: "$4 $8",
  lineHeight: "$10",
  color: "$on_primary_high"
});
var StyledSeparator = styled(SelectPrimitive.Separator, {
  height: "$px",
  backgroundColor: "$on_primary_high",
  margin: "$4",
  opacity: 0.4
});
var StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  right: "$8",
  width: "$8",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$on_primary_high"
});
var scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "$4",
  backgroundColor: "$surface_bright",
  color: "$on_primary_high",
  cursor: "default"
};
var StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);
var StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);
var Select2 = {
  Root: StyledRoot,
  Trigger: StyledTrigger4,
  Content: StyledContent4,
  Viewport: StyledViewport,
  Item: StyledItem2,
  Label: StyledLabel,
  Separator: StyledSeparator,
  ItemIndicator: StyledItemIndicator,
  ScrollUpButton: StyledScrollUpButton,
  ScrollDownButton: StyledScrollDownButton,
  Value: SelectPrimitive.Value,
  Icon: SelectPrimitive.Icon,
  ItemText: SelectPrimitive.ItemText,
  Group: SelectPrimitive.Group
};

// src/Tabs/Tabs.tsx
import * as TabsPrimitive from "@radix-ui/react-tabs";
var StyledTabsRoot = styled(TabsPrimitive.Root, {
  display: "flex"
});
var StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex"
});
var StyledTrigger5 = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "$sans",
  p: "$8",
  display: "flex",
  alignItems: "center",
  fontSize: "$sm",
  lineHeight: "$sm",
  color: "$on_surface_high",
  userSelect: "none",
  cursor: "pointer",
  '&[data-state="active"]': {
    bg: "$surface_brighter",
    r: "$1"
  }
});
var StyledContent5 = styled(TabsPrimitive.Content, {
  flex: "1 1 0",
  padding: "$10",
  outline: "none"
});
var Tabs = {
  Root: StyledTabsRoot,
  List: StyledList,
  Content: StyledContent5,
  Trigger: StyledTrigger5
};

// src/QRCode/QRCode.tsx
import React18 from "react";
import { QRCodeSVG } from "qrcode.react";
var QRCode = (props) => {
  return /* @__PURE__ */ React18.createElement(QRCodeSVG, __spreadValues({ style: { width: "100%", height: "100%" } }, props));
};

// src/Link/Link.tsx
import React19 from "react";
import * as icons from "@100mslive/react-icons";
var LinkComponent = styled("a", {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "$5",
  variants: {
    color: {
      highEmp: {
        color: "$on_surface_high",
        "&:hover": {
          color: "$on_surface_medium"
        }
      },
      primary: {
        color: "$primary_default",
        "&:hover": {
          color: "$primary_bright"
        }
      }
    }
  }
});
var Link = (_a7) => {
  var _b7 = _a7, {
    iconSide = "left",
    icon,
    color = "primary",
    children
  } = _b7, rest = __objRest(_b7, [
    "iconSide",
    "icon",
    "color",
    "children"
  ]);
  const Icon4 = icon ? icons[icon] : React19.Fragment;
  const renderedIcon = icon ? /* @__PURE__ */ React19.createElement(Flex, { as: "span" }, /* @__PURE__ */ React19.createElement(Icon4, { height: 13.33, width: 13.33 }), " ") : null;
  return /* @__PURE__ */ React19.createElement(LinkComponent, __spreadProps(__spreadValues({}, rest), { color }), iconSide === "left" && renderedIcon, /* @__PURE__ */ React19.createElement(Text, { as: "span", variant: "body2", css: { color: "inherit" } }, children), iconSide === "right" && renderedIcon);
};

// src/Collapsible/Collapsible.tsx
import { Content as Content9, Root as Root23, Trigger as Trigger8 } from "@radix-ui/react-collapsible";
var CollapsibleRoot = styled(Root23, {});
var CollapsibleTrigger = styled(Trigger8, {
  cursor: "pointer",
  appearance: "none !important",
  "&:focus": {
    outline: "none"
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 3px $colors$primary_default"
  }
});
var CollapsibleContent = styled(Content9, {
  w: "$80",
  r: "$1",
  overflowY: "auto",
  '&[data-state="open"]': {
    animation: `${slideDown(
      "--radix-collapsible-content-height"
    )} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
  },
  '&[data-state="closed"]': {
    animation: `${slideUp(
      "--radix-collapsible-content-height"
    )} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
  }
});
var Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent
};

// src/Prebuilt/App.tsx
import React188, { useEffect as useEffect79, useRef as useRef34 } from "react";
import { match as match16 } from "ts-pattern";
import {
  HMSReactiveStore,
  HMSRoomProvider,
  selectIsConnectedToRoom as selectIsConnectedToRoom13,
  useHMSActions as useHMSActions61,
  useHMSStore as useHMSStore99
} from "@100mslive/react-sdk";

// src/Prebuilt/components/AppData/AppData.tsx
import React23, { useEffect as useEffect6, useMemo as useMemo4, useRef as useRef7 } from "react";
import { useMedia } from "react-use";
import {
  HMSRoomState,
  selectFullAppData,
  selectHLSState as selectHLSState2,
  selectRoomState,
  selectRTMPState,
  useAVToggle,
  useHMSActions as useHMSActions4,
  useHMSStore as useHMSStore6,
  useRecordingStreaming as useRecordingStreaming2
} from "@100mslive/react-sdk";

// src/Prebuilt/components/Settings/LayoutSettings.tsx
import React21, { useCallback as useCallback4 } from "react";
import {
  selectIsLocalScreenShared,
  selectIsLocalVideoEnabled,
  useHMSActions as useHMSActions2,
  useHMSStore as useHMSStore3
} from "@100mslive/react-sdk";
import {
  GalleryIcon,
  PersonRectangleIcon,
  SidebarIcon
} from "@100mslive/react-icons";

// src/Prebuilt/components/Settings/SwitchWithLabel.tsx
import React20 from "react";
var SwitchWithLabel = ({
  label,
  icon,
  id,
  onChange,
  checked,
  hide = false
}) => {
  return /* @__PURE__ */ React20.createElement(
    Flex,
    {
      align: "center",
      css: {
        my: "$2",
        py: "$8",
        w: "100%",
        borderBottom: "1px solid $border_default",
        display: hide ? "none" : "flex"
      }
    },
    /* @__PURE__ */ React20.createElement(
      Label3,
      {
        htmlFor: id,
        css: {
          fontSize: "$md",
          fontWeight: "$semiBold",
          color: checked ? "$on_surface_high" : "$on_surface_low",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "$8",
          flex: "1 1 0"
        }
      },
      icon,
      label
    ),
    /* @__PURE__ */ React20.createElement(Switch, { id, checked, onCheckedChange: onChange })
  );
};
var SwitchWithLabel_default = SwitchWithLabel;

// src/Prebuilt/components/AppData/useUISettings.js
import { useCallback as useCallback3, useMemo as useMemo2 } from "react";
import {
  selectAppData,
  selectAppDataByPath,
  selectAudioTrackByPeerID,
  selectPermissions,
  selectPolls,
  selectSessionStore,
  selectTrackByID,
  selectVideoTrackByPeerID,
  useHMSActions,
  useHMSStore as useHMSStore2,
  useHMSVanillaStore as useHMSVanillaStore2
} from "@100mslive/react-sdk";

// src/Prebuilt/components/hooks/useUserPreferences.jsx
import { useState as useState4 } from "react";
import { useLocalStorage } from "react-use";
var UserPreferencesKeys = {
  PREVIEW: "preview",
  NOTIFICATIONS: "notifications",
  UI_SETTINGS: "uiSettings",
  RTMP_URLS: "rtmpUrls",
  USER_ID: "userId"
};
var defaultPreviewPreference = {
  name: "",
  isAudioMuted: false,
  isVideoMuted: false
};
var useUserPreferences = (key, defaultPreference) => {
  const [localStorageValue, setStorageValue] = useLocalStorage(
    key,
    defaultPreference
  );
  const [preference, setPreference] = useState4(
    localStorageValue || defaultPreference
  );
  const changePreference = (value) => {
    setPreference(value);
    setStorageValue(value);
  };
  return [preference, changePreference];
};

// src/Prebuilt/components/AppData/useUISettings.js
var useUISettings = (uiSettingKey) => {
  const uiSettings = useHMSStore2(
    selectAppDataByPath(APP_DATA.uiSettings, uiSettingKey)
  );
  return uiSettings;
};
var useSetUiSettings = (uiSettingKey) => {
  const value = useUISettings(uiSettingKey);
  const setValue = useSetAppData({
    key1: APP_DATA.uiSettings,
    key2: uiSettingKey
  });
  return [value, setValue];
};
var useAuthToken = () => {
  return useHMSStore2(selectAppData(APP_DATA.authToken));
};
var useUrlToEmbed = () => {
  var _a7;
  return (_a7 = useHMSStore2(selectAppData(APP_DATA.embedConfig))) == null ? void 0 : _a7.url;
};
var usePDFConfig = () => {
  return useHMSStore2(selectAppData(APP_DATA.pdfConfig));
};
var useResetPDFConfig = () => {
  const [, setPDFConfig] = useSetAppDataByKey(APP_DATA.pdfConfig);
  return useCallback3(() => setPDFConfig(), [setPDFConfig]);
};
var useResetEmbedConfig = () => {
  const [, setEmbedConfig] = useSetAppDataByKey(APP_DATA.embedConfig);
  return () => setEmbedConfig();
};
var usePinnedTrack = () => {
  var _a7, _b7;
  const pinnedTrackId = useHMSStore2(selectAppData(APP_DATA.pinnedTrackId));
  const spotlightPeerId = useHMSStore2(
    selectSessionStore("spotlight" /* SPOTLIGHT */)
  );
  const spotlightVideoTrackId = (_a7 = useHMSStore2(
    selectVideoTrackByPeerID(spotlightPeerId)
  )) == null ? void 0 : _a7.id;
  const spotlightAudioTrackId = (_b7 = useHMSStore2(
    selectAudioTrackByPeerID(spotlightPeerId)
  )) == null ? void 0 : _b7.id;
  return useHMSStore2(
    selectTrackByID(
      pinnedTrackId || spotlightVideoTrackId || spotlightAudioTrackId
    )
  );
};
var useSubscribedNotifications = (notificationKey) => {
  const notificationPreference = useHMSStore2(
    selectAppDataByPath(APP_DATA.subscribedNotifications, notificationKey)
  );
  return notificationPreference;
};
var useIsNotificationDisabled = () => {
  const notificationPreference = useHMSStore2(
    selectAppDataByPath(APP_DATA.disableNotifications)
  );
  return notificationPreference;
};
var useSetSubscribedNotifications = (notificationKey) => {
  const value = useSubscribedNotifications(notificationKey);
  const setValue = useSetAppData({
    key1: APP_DATA.subscribedNotifications,
    key2: notificationKey
  });
  return [value, setValue];
};
var useIsCaptionEnabled = () => {
  const isCaptionEnabled = useHMSStore2(selectAppDataByPath(APP_DATA.caption));
  return isCaptionEnabled;
};
var useSetIsCaptionEnabled = () => {
  const [value, setValue] = useSetAppDataByKey(APP_DATA.caption);
  return [value, setValue];
};
var useSubscribeChatSelector = (chatSelectorKey) => {
  const chatSelectorPreference = useHMSStore2(
    selectAppDataByPath(APP_DATA.chatSelector, chatSelectorKey)
  );
  return chatSelectorPreference;
};
var useSetSubscribedChatSelector = (chatSelectorKey) => {
  const value = useSubscribeChatSelector(chatSelectorKey);
  const setValue = useSetAppData({
    key1: APP_DATA.chatSelector,
    key2: chatSelectorKey
  });
  return [value, setValue];
};
var useSetAppDataByKey = (appDataKey) => {
  const value = useHMSStore2(selectAppData(appDataKey));
  const actions = useHMSActions();
  const setValue = useCallback3(
    (value2) => {
      actions.setAppData(appDataKey, value2);
    },
    [actions, appDataKey]
  );
  return [value, setValue];
};
var useSetAppData = ({ key1, key2 }) => {
  const actions = useHMSActions();
  const store = useHMSVanillaStore2();
  const [, setPreferences] = useUserPreferences(
    UserPreferencesKeys.UI_SETTINGS
  );
  const setValue = useCallback3(
    (value) => {
      if (!key1) {
        return;
      }
      actions.setAppData(
        key1,
        key2 ? {
          [key2]: value
        } : value,
        true
      );
      const appData = store.getState(selectAppData());
      setPreferences(__spreadProps(__spreadValues({}, appData.uiSettings), {
        [UI_SETTINGS.isAudioOnly]: void 0,
        subscribedNotifications: appData.subscribedNotifications
      }));
    },
    [actions, key1, key2, store, setPreferences]
  );
  return setValue;
};
var useShowPolls = () => {
  const permissions = useHMSStore2(selectPermissions);
  const polls = useHMSStore2(selectPolls);
  const showPolls = useMemo2(() => {
    return (permissions == null ? void 0 : permissions.pollWrite) || (permissions == null ? void 0 : permissions.pollRead) && (polls == null ? void 0 : polls.length) > 0;
  }, [permissions == null ? void 0 : permissions.pollRead, permissions == null ? void 0 : permissions.pollWrite, polls == null ? void 0 : polls.length]);
  return { showPolls };
};
var usePollViewState = () => {
  const [pollState, setPollState] = useSetAppDataByKey(APP_DATA.pollState);
  const setPollView = useCallback3(
    (view) => {
      setPollState({
        [POLL_STATE.pollInView]: pollState == null ? void 0 : pollState.pollInView,
        [POLL_STATE.view]: view
      });
    },
    [pollState == null ? void 0 : pollState.pollInView, setPollState]
  );
  return {
    setPollState,
    setPollView,
    pollInView: pollState == null ? void 0 : pollState.pollInView,
    view: pollState == null ? void 0 : pollState.view
  };
};
var useIsNoiseCancellationEnabled = () => {
  const isNoiseCancellationEnabled = useHMSStore2(
    selectAppDataByPath(APP_DATA.noiseCancellation)
  );
  return isNoiseCancellationEnabled;
};
var useSetNoiseCancellation = () => {
  const [isNoiseCancellationEnabled, setNoiseCancellationEnabled] = useSetAppDataByKey(APP_DATA.noiseCancellation);
  return [isNoiseCancellationEnabled, setNoiseCancellationEnabled];
};

// src/Prebuilt/components/Settings/common.ts
var settingOverflow = css({
  flex: "1 1 0",
  pr: "$12",
  mr: "-$12",
  overflowY: "auto"
});
var settingContent = css({
  display: "flex",
  flexDirection: "column",
  "&[hidden]": {
    display: "none"
  }
});

// src/Prebuilt/components/Settings/LayoutSettings.tsx
var LayoutMode = {
  SIDEBAR: "Sidebar",
  GALLERY: "Gallery",
  SPOTLIGHT: "Spotlight"
};
var LayoutModeIconMapping = {
  [LayoutMode.GALLERY]: /* @__PURE__ */ React21.createElement(GalleryIcon, null),
  [LayoutMode.SIDEBAR]: /* @__PURE__ */ React21.createElement(SidebarIcon, null),
  [LayoutMode.SPOTLIGHT]: /* @__PURE__ */ React21.createElement(PersonRectangleIcon, null)
};
var LayoutSettings = () => {
  const hmsActions = useHMSActions2();
  const isLocalVideoEnabled = useHMSStore3(selectIsLocalVideoEnabled);
  const isLocalScreenShared = useHMSStore3(selectIsLocalScreenShared);
  const [{ isAudioOnly, maxTileCount, mirrorLocalVideo }, setUISettings] = useSetUiSettings();
  const toggleIsAudioOnly = useCallback4(
    (isAudioOnlyModeOn) => __async(void 0, null, function* () {
      if (isAudioOnlyModeOn) {
        isLocalVideoEnabled && (yield hmsActions.setLocalVideoEnabled(false));
        isLocalScreenShared && (yield hmsActions.setScreenShareEnabled(false));
      }
      setUISettings({ [UI_SETTINGS.isAudioOnly]: isAudioOnlyModeOn });
    }),
    [hmsActions, isLocalVideoEnabled, isLocalScreenShared, setUISettings]
  );
  return /* @__PURE__ */ React21.createElement(Box, { className: settingOverflow() }, /* @__PURE__ */ React21.createElement(
    Flex,
    {
      align: "center",
      css: { w: "100%", my: "$2", py: "$8", "@md": { display: "none" } }
    },
    /* @__PURE__ */ React21.createElement(Text, { variant: "md", css: { fontWeight: "$semiBold" } }, "Tiles In View(", maxTileCount, ")"),
    /* @__PURE__ */ React21.createElement(Flex, { justify: "end", css: { flex: "1 1 0" } }, /* @__PURE__ */ React21.createElement(
      Slider,
      {
        step: 1,
        value: [maxTileCount],
        min: 1,
        max: 49,
        onValueChange: (e) => {
          setUISettings({ [UI_SETTINGS.maxTileCount]: e[0] });
        },
        css: { w: "70%" }
      }
    ))
  ), /* @__PURE__ */ React21.createElement(
    SwitchWithLabel_default,
    {
      label: "Audio Only Mode",
      id: "audioOnlyMode",
      checked: isAudioOnly,
      onChange: toggleIsAudioOnly
    }
  ), /* @__PURE__ */ React21.createElement(
    SwitchWithLabel_default,
    {
      label: "Mirror Local Video",
      id: "mirrorMode",
      checked: mirrorLocalVideo,
      onChange: (value) => {
        setUISettings({
          [UI_SETTINGS.mirrorLocalVideo]: value
        });
      }
    }
  ));
};

// src/Prebuilt/provider/roomLayoutProvider/hooks/useRoomLayoutScreen.ts
import { useMemo as useMemo3 } from "react";
import {
  selectHLSState,
  selectPeerCount,
  selectRoomStartTime,
  useHMSStore as useHMSStore4,
  useRecordingStreaming
} from "@100mslive/react-sdk";

// src/Prebuilt/provider/roomLayoutProvider/index.tsx
import React22 from "react";
import { isArray, mergeWith } from "lodash";

// src/Prebuilt/provider/roomLayoutProvider/hooks/useFetchRoomLayout.ts
import { useCallback as useCallback5, useEffect as useEffect5, useRef as useRef6, useState as useState5 } from "react";

// src/Prebuilt/provider/roomLayoutProvider/constants/index.ts
import { JoinForm_JoinBtnType } from "@100mslive/types-prebuilt/elements/join_form";
var defaultLayout = {
  id: "",
  role_id: "",
  template_id: "",
  app_id: "",
  typography: {
    font_family: "Inter"
  },
  themes: [],
  options: {},
  screens: {
    preview: {
      default: {
        elements: {
          preview_header: {
            title: "Get Started",
            sub_title: "Setup your audio and video before joining"
          },
          join_form: {
            join_btn_type: JoinForm_JoinBtnType.JOIN_BTN_TYPE_JOIN_ONLY,
            join_btn_label: "Join Now",
            go_live_btn_label: "Go Live"
          }
        }
      }
    },
    conferencing: {
      default: {
        elements: {
          chat: {
            public_chat_enabled: true,
            private_chat_enabled: true,
            chat_title: "Chat",
            allow_pinning_messages: true,
            message_placeholder: "Send a message...",
            roles_whitelist: [],
            real_time_controls: {
              can_disable_chat: true,
              can_block_user: true,
              can_hide_message: true
            }
          },
          participant_list: {},
          video_tile_layout: {
            grid: {
              enable_local_tile_inset: true,
              prominent_roles: [],
              enable_spotlighting_peer: true
            }
          },
          emoji_reactions: {}
        }
      }
    },
    leave: {}
  }
};

// src/Prebuilt/provider/roomLayoutProvider/hooks/useFetchRoomLayout.ts
var fetchWithRetry = (..._0) => __async(void 0, [..._0], function* (url = "", options = {}) {
  const MAX_RETRIES = 4;
  let error = Error("something went wrong");
  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      return yield fetch(url, options);
    } catch (err) {
      error = err;
    }
  }
  console.error("Fetch failed after max retries", { url, options });
  throw error;
});
var useFetchRoomLayout = ({
  endpoint = "",
  authToken = ""
}) => {
  const [layout, setLayout] = useState5(void 0);
  const layoutResp = useRef6();
  const originalLayout = useRef6();
  const isFetchInProgress = useRef6(false);
  const setOriginalLayout = useCallback5(
    () => setLayout(originalLayout.current),
    []
  );
  const updateRoomLayoutForRole = useCallback5((role) => {
    var _a7;
    if (!layoutResp.current) {
      return;
    }
    const [layout2] = (((_a7 = layoutResp.current) == null ? void 0 : _a7.data) || []).filter(
      (layout3) => layout3.role === role
    );
    if (layout2) {
      setLayout(layout2);
    }
  }, []);
  useEffect5(() => {
    (() => __async(void 0, null, function* () {
      var _a7, _b7;
      if (isFetchInProgress.current || !authToken) {
        return;
      }
      isFetchInProgress.current = true;
      try {
        const resp = yield fetchWithRetry(
          endpoint || "https://api.100ms.live/v2/layouts/ui",
          {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          }
        );
        layoutResp.current = yield resp.json();
      } catch (e) {
        console.error(
          "[Room Layout API]: Failed to fetch / process room layout. Resorting to default layout.",
          e
        );
        layoutResp.current = {
          data: [defaultLayout]
        };
      }
      let layoutForRole = (_b7 = (_a7 = layoutResp.current) == null ? void 0 : _a7.data) == null ? void 0 : _b7[0];
      if (!layoutForRole) {
        console.error(
          "[Room Layout API]: Unable to figure out room layout from API response. Resorting to default layout."
        );
        layoutForRole = defaultLayout;
      }
      const layout2 = layoutForRole;
      if (!originalLayout.current) {
        originalLayout.current = layout2;
      }
      setLayout(layout2);
      isFetchInProgress.current = false;
    }))();
  }, [authToken, endpoint]);
  return { layout, updateRoomLayoutForRole, setOriginalLayout };
};

// src/Prebuilt/provider/roomLayoutProvider/index.tsx
var RoomLayoutContext = React22.createContext(void 0);
function customizer(objValue, srcValue) {
  if (isArray(objValue) || isArray(srcValue)) {
    return srcValue;
  }
  return void 0;
}
var RoomLayoutProvider = ({ children, roomLayoutEndpoint, overrideLayout }) => {
  const authToken = useAuthToken();
  const { layout, updateRoomLayoutForRole, setOriginalLayout } = useFetchRoomLayout({
    authToken,
    endpoint: roomLayoutEndpoint
  });
  const mergedLayout = authToken && layout ? mergeWith(layout, overrideLayout, customizer) : layout;
  return /* @__PURE__ */ React22.createElement(
    RoomLayoutContext.Provider,
    {
      value: {
        layout: mergedLayout,
        updateRoomLayoutForRole,
        setOriginalLayout
      }
    },
    children
  );
};
var useRoomLayout = () => {
  var _a7;
  return (_a7 = React22.useContext(RoomLayoutContext)) == null ? void 0 : _a7.layout;
};
var useUpdateRoomLayout = () => {
  var _a7;
  return (_a7 = React22.useContext(RoomLayoutContext)) == null ? void 0 : _a7.updateRoomLayoutForRole;
};
var useSetOriginalLayout = () => {
  var _a7;
  return (_a7 = React22.useContext(RoomLayoutContext)) == null ? void 0 : _a7.setOriginalLayout;
};

// src/Prebuilt/common/utils.js
var getMetadata = (metadataString) => {
  try {
    return !metadataString ? {} : JSON.parse(metadataString);
  } catch (error) {
    return {};
  }
};
var isScreenshareSupported = () => {
  return typeof navigator.mediaDevices.getDisplayMedia !== "undefined";
};
var getFormattedCount = (num) => {
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2
  });
  const formattedNum = formatter.format(num);
  return formattedNum;
};
var formatTime = (timeInSeconds) => {
  timeInSeconds = Math.floor(timeInSeconds / 1e3);
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor(timeInSeconds % 3600 / 60);
  const seconds = timeInSeconds % 60;
  const hour = hours !== 0 ? `${hours < 10 ? "0" : ""}${hours}:` : "";
  return `${hour}${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
var compareArrays = (a, b) => {
  if (a.length !== b.length) return false;
  else {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};
var checkCorrectAnswer = (answer, localPeerResponse, type) => {
  if (type === "single-choice" /* SINGLE_CHOICE */) {
    return (answer == null ? void 0 : answer.option) === (localPeerResponse == null ? void 0 : localPeerResponse.option);
  } else if (type === "multiple-choice" /* MULTIPLE_CHOICE */) {
    return (answer == null ? void 0 : answer.options) && (localPeerResponse == null ? void 0 : localPeerResponse.options) && compareArrays(answer == null ? void 0 : answer.options, localPeerResponse == null ? void 0 : localPeerResponse.options);
  }
};
var isValidTextInput = (text, minLength = 1, maxLength = 1024) => {
  return text && text.length >= minLength && text.length <= maxLength;
};
var calculateAvatarAndAttribBoxSize = (calculatedWidth, calculatedHeight) => {
  if (!calculatedWidth || !calculatedHeight) {
    return [void 0, void 0];
  }
  let avatarSize = "large";
  if (calculatedWidth <= 150 || calculatedHeight <= 150) {
    avatarSize = "small";
  } else if (calculatedWidth <= 300 || calculatedHeight <= 300) {
    avatarSize = "medium";
  }
  let attribBoxSize = "medium";
  if (calculatedWidth <= 180 || calculatedHeight <= 180) {
    attribBoxSize = "small";
  }
  return [avatarSize, attribBoxSize];
};
var isMobileUserAgent = /Mobi|Android|iPhone/i.test(
  navigator.userAgent
);
var getPeerResponses = (questions, peerid, userid) => {
  return questions.map(
    (question) => {
      var _a7;
      return (_a7 = question.responses) == null ? void 0 : _a7.filter(
        (response) => {
          var _a8, _b7;
          return response && (((_a8 = response.peer) == null ? void 0 : _a8.peerid) === peerid || ((_b7 = response.peer) == null ? void 0 : _b7.userid) === userid) && !response.skipped;
        }
      );
    }
  );
};
var getIndexToShow = (responses) => {
  let lastAttemptedIndex = 0;
  Object.keys(responses).forEach((key) => {
    const keyNum = parseInt(key);
    if (keyNum > lastAttemptedIndex && responses[key]) {
      lastAttemptedIndex = keyNum;
    }
  });
  return lastAttemptedIndex + 1;
};

// src/Prebuilt/provider/roomLayoutProvider/hooks/useRoomLayoutScreen.ts
function useRoomLayoutScreen({
  screen
}) {
  var _a7;
  const roomLayout = useRoomLayout();
  const screenProps = (_a7 = roomLayout == null ? void 0 : roomLayout.screens) == null ? void 0 : _a7[screen];
  return screenProps;
}
function useRoomLayoutPreviewScreen() {
  var _a7;
  const screenProps = useRoomLayoutScreen({ screen: "preview" });
  const isPreviewScreenEnabled = !!screenProps && !(screenProps == null ? void 0 : screenProps.skip_preview_screen);
  let elements;
  let screenType;
  if (isPreviewScreenEnabled) {
    screenType = Object.keys(screenProps).filter(
      (key) => key !== "skip_preview_screen"
    )[0];
    elements = (_a7 = screenProps[screenType]) == null ? void 0 : _a7.elements;
  }
  return {
    isPreviewScreenEnabled,
    elements,
    screenType
  };
}
function useRoomLayoutConferencingScreen() {
  var _a7, _b7;
  const screenProps = useRoomLayoutScreen({ screen: "conferencing" }) || {};
  const screenType = Object.keys(screenProps)[0];
  const elements = (_a7 = screenProps[screenType]) == null ? void 0 : _a7.elements;
  const hideSections = ((_b7 = screenProps[screenType]) == null ? void 0 : _b7.hideSections) || [];
  return {
    hideSections,
    elements,
    screenType
  };
}
function useRoomLayoutLeaveScreen() {
  var _a7, _b7;
  const screenProps = useRoomLayoutScreen({ screen: "leave" });
  const isLeaveScreenEnabled = !!screenProps;
  return {
    isLeaveScreenEnabled,
    feedback: (_b7 = (_a7 = screenProps == null ? void 0 : screenProps.default) == null ? void 0 : _a7.elements) == null ? void 0 : _b7.feedback
  };
}
function useRoomLayoutHeader() {
  var _a7, _b7;
  const { elements } = useRoomLayoutConferencingScreen();
  const { isRecordingOn } = useRecordingStreaming();
  const peerCount = useHMSStore4(selectPeerCount);
  const sessionStartedAt = useHMSStore4(selectRoomStartTime);
  const hlsState = useHMSStore4(selectHLSState);
  const details = useMemo3(() => {
    var _a8;
    const details2 = [];
    if ((_a8 = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _a8["startedAt"]) {
      details2.push(`${getFormattedCount(peerCount)} watching`);
      details2.push(hlsState.variants[0]["startedAt"]);
    } else if (sessionStartedAt) {
      details2.push(sessionStartedAt);
    }
    if (isRecordingOn) {
      details2.push("Recording");
    }
    return details2;
  }, [hlsState == null ? void 0 : hlsState.variants, isRecordingOn, peerCount, sessionStartedAt]);
  return {
    title: ((_a7 = elements.header) == null ? void 0 : _a7.title) || "",
    description: ((_b7 = elements.header) == null ? void 0 : _b7.description) || "",
    details
  };
}

// src/Prebuilt/components/AppData/useSidepane.js
import { useCallback as useCallback6 } from "react";
import { match, P } from "ts-pattern";
import {
  selectAppData as selectAppData2,
  useHMSActions as useHMSActions3,
  useHMSStore as useHMSStore5,
  useHMSVanillaStore as useHMSVanillaStore3
} from "@100mslive/react-sdk";
var useIsSidepaneTypeOpen = (sidepaneType) => {
  if (!sidepaneType) {
    throw Error("Pass one of the side pane options");
  }
  return useHMSStore5(selectAppData2(APP_DATA.sidePane)) === sidepaneType;
};
var useSidepaneState = () => {
  const sidePane = useHMSStore5(selectAppData2(APP_DATA.sidePane));
  return sidePane;
};
var useSidepaneToggle = (sidepaneType) => {
  const hmsActions = useHMSActions3();
  const vanillaStore = useHMSVanillaStore3();
  const toggleSidepane = useCallback6(() => {
    const isOpen = vanillaStore.getState(selectAppData2(APP_DATA.sidePane)) === sidepaneType;
    hmsActions.setAppData(APP_DATA.sidePane, !isOpen ? sidepaneType : "");
  }, [vanillaStore, hmsActions, sidepaneType]);
  return toggleSidepane;
};
var usePollViewToggle = () => {
  const hmsActions = useHMSActions3();
  const { view, setPollState } = usePollViewState();
  const isOpen = useSidepaneState() === SIDE_PANE_OPTIONS.POLLS;
  const togglePollView = useCallback6(
    (id) => {
      match({ id, isOpen, view }).with(
        {
          id: P.string
        },
        () => {
          setPollState({
            [POLL_STATE.pollInView]: id,
            [POLL_STATE.view]: POLL_VIEWS.VOTE
          });
          hmsActions.setAppData(APP_DATA.sidePane, SIDE_PANE_OPTIONS.POLLS);
        }
      ).with(
        {
          isOpen: true,
          view: P.when((view2) => !!view2)
        },
        () => {
          setPollState({
            [POLL_STATE.pollInView]: void 0,
            [POLL_STATE.view]: null
          });
          hmsActions.setAppData(APP_DATA.sidePane, "");
        }
      ).otherwise(() => {
        setPollState({
          [POLL_STATE.pollInView]: void 0,
          [POLL_STATE.view]: POLL_VIEWS.CREATE_POLL_QUIZ
        });
        hmsActions.setAppData(APP_DATA.sidePane, SIDE_PANE_OPTIONS.POLLS);
      });
    },
    [hmsActions, view, setPollState, isOpen]
  );
  return togglePollView;
};
var useSidepaneReset = () => {
  const hmsActions = useHMSActions3();
  const resetSidepane = useCallback6(() => {
    hmsActions.setAppData(APP_DATA.sidePane, "");
    hmsActions.setAppData(APP_DATA.pollInView, "");
  }, [hmsActions]);
  return resetSidepane;
};

// src/Prebuilt/components/MoreSettings/constants.ts
var trackSourceOptions = [
  { label: "All Track Sources", value: "" },
  { label: "regular", value: "regular" },
  { label: "screen", value: "screen" },
  { label: "audioplaylist", value: "audioplaylist" },
  { label: "videoplaylist", value: "videoplaylist" }
];
var trackTypeOptions = [
  { label: "All Track Types", value: "" },
  { label: "audio", value: "audio" },
  { label: "video", value: "video" }
];
var DEFAULT_TILES_IN_VIEW = { MWEB: 4, DESKTOP: 9 };

// src/Prebuilt/components/AppData/AppData.tsx
var initialAppData = {
  [APP_DATA.uiSettings]: {
    [UI_SETTINGS.isAudioOnly]: false,
    [UI_SETTINGS.maxTileCount]: 9,
    [UI_SETTINGS.showStatsOnTiles]: false,
    [UI_SETTINGS.enableAmbientMusic]: false,
    [UI_SETTINGS.uiViewMode]: UI_MODE_GRID,
    [UI_SETTINGS.mirrorLocalVideo]: true,
    [UI_SETTINGS.layoutMode]: LayoutMode.GALLERY
  },
  [APP_DATA.subscribedNotifications]: {
    PEER_JOINED: false,
    PEER_LEFT: false,
    NEW_MESSAGE: true,
    ERROR: true,
    METADATA_UPDATED: true
  },
  [APP_DATA.chatOpen]: false,
  [APP_DATA.chatSelector]: {
    [CHAT_SELECTOR.ROLE]: "",
    [CHAT_SELECTOR.PEER]: {}
  },
  [APP_DATA.chatDraft]: "",
  [APP_DATA.sidePane]: "",
  [APP_DATA.sheet]: "",
  [APP_DATA.hlsStarted]: false,
  [APP_DATA.rtmpStarted]: false,
  [APP_DATA.recordingStarted]: false,
  [APP_DATA.dropdownList]: [],
  [APP_DATA.authToken]: "",
  [APP_DATA.minimiseInset]: false,
  [APP_DATA.activeScreensharePeerId]: "",
  [APP_DATA.disableNotifications]: false,
  [APP_DATA.loadingEffects]: false,
  [APP_DATA.background]: "none",
  [APP_DATA.pollState]: {
    [POLL_STATE.pollInView]: "",
    [POLL_STATE.view]: ""
  },
  // by default on because of on demand now, for beam disabled
  [APP_DATA.caption]: false,
  [APP_DATA.noiseCancellation]: false
};
var AppData = React23.memo(() => {
  var _a7, _b7, _c, _d;
  const hmsActions = useHMSActions4();
  const [preferences = {}] = useUserPreferences(
    UserPreferencesKeys.UI_SETTINGS
  );
  const appData = useHMSStore6(selectFullAppData);
  const { elements } = useRoomLayoutConferencingScreen();
  const toggleVB = useSidepaneToggle(SIDE_PANE_OPTIONS.VB);
  const { isLocalVideoEnabled } = useAVToggle();
  const sidepaneOpenedRef = useRef7(false);
  const [, setNoiseCancellationEnabled] = useSetNoiseCancellation();
  const isMobile = useMedia(config.media.md);
  useEffect6(() => {
    var _a8;
    if ((_a8 = elements == null ? void 0 : elements.noise_cancellation) == null ? void 0 : _a8.enabled_by_default) {
      setNoiseCancellationEnabled(true);
    }
  }, [
    (_a7 = elements == null ? void 0 : elements.noise_cancellation) == null ? void 0 : _a7.enabled_by_default,
    setNoiseCancellationEnabled
  ]);
  const defaultMediaURL = useMemo4(() => {
    var _a8;
    const media = ((_a8 = elements == null ? void 0 : elements.virtual_background) == null ? void 0 : _a8.background_media) || [];
    for (let i = 0; i < media.length; i++) {
      if (media[i].default && media[i].url) {
        return media[i].url;
      }
    }
    return "";
  }, [(_b7 = elements == null ? void 0 : elements.virtual_background) == null ? void 0 : _b7.background_media]);
  useEffect6(() => {
    hmsActions.initAppData(__spreadValues(__spreadValues({}, initialAppData), appData));
    hmsActions.setFrameworkInfo({
      type: "react-web",
      isPrebuilt: true,
      version: React23.version
    });
  }, [hmsActions]);
  useEffect6(() => {
    const uiSettings = preferences || {};
    const updatedSettings = __spreadProps(__spreadValues({}, uiSettings), {
      [UI_SETTINGS.isAudioOnly]: void 0,
      [UI_SETTINGS.uiViewMode]: uiSettings.uiViewMode || UI_MODE_GRID
    });
    hmsActions.setAppData(APP_DATA.uiSettings, updatedSettings, true);
  }, [hmsActions, preferences]);
  useEffect6(() => {
    var _a8, _b8;
    hmsActions.setAppData(
      APP_DATA.uiSettings,
      {
        [UI_SETTINGS.maxTileCount]: isMobile ? DEFAULT_TILES_IN_VIEW.MWEB : Number((_b8 = (_a8 = elements == null ? void 0 : elements.video_tile_layout) == null ? void 0 : _a8.grid) == null ? void 0 : _b8.tiles_in_view) || DEFAULT_TILES_IN_VIEW.DESKTOP
      },
      true
    );
  }, [hmsActions, isMobile, (_d = (_c = elements == null ? void 0 : elements.video_tile_layout) == null ? void 0 : _c.grid) == null ? void 0 : _d.tiles_in_view]);
  useEffect6(() => {
    if (!preferences.subscribedNotifications) {
      return;
    }
    hmsActions.setAppData(
      APP_DATA.subscribedNotifications,
      preferences.subscribedNotifications,
      true
    );
  }, [preferences.subscribedNotifications, hmsActions]);
  useEffect6(() => {
    if (defaultMediaURL && !sidepaneOpenedRef.current && isLocalVideoEnabled) {
      hmsActions.setAppData(APP_DATA.background, defaultMediaURL);
      sidepaneOpenedRef.current = true;
      toggleVB();
    }
  }, [hmsActions, toggleVB, isLocalVideoEnabled, defaultMediaURL]);
  return /* @__PURE__ */ React23.createElement(ResetStreamingStart, null);
});
var ResetStreamingStart = () => {
  const { isHLSRunning, isRTMPRunning, isBrowserRecordingOn } = useRecordingStreaming2();
  const hlsError = useHMSStore6(selectHLSState2).error;
  const rtmpError = useHMSStore6(selectRTMPState).error;
  const roomState = useHMSStore6(selectRoomState);
  const [hlsStarted, setHLSStarted] = useSetAppDataByKey(APP_DATA.hlsStarted);
  const [recordingStarted, setRecordingStarted] = useSetAppDataByKey(
    APP_DATA.recordingStarted
  );
  const [rtmpStarted, setRTMPStarted] = useSetAppDataByKey(
    APP_DATA.rtmpStarted
  );
  const toggleStreaming = useSidepaneToggle(SIDE_PANE_OPTIONS.STREAMING);
  const isStreamingOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.STREAMING);
  useEffect6(() => {
    if (isBrowserRecordingOn && recordingStarted) {
      setRecordingStarted(false);
    }
  }, [isBrowserRecordingOn, recordingStarted, setRecordingStarted]);
  useEffect6(() => {
    if (roomState === HMSRoomState.Disconnected) {
      setHLSStarted(false);
      setRecordingStarted(false);
      setRTMPStarted(false);
    }
  }, [roomState, setHLSStarted, setRTMPStarted, setRecordingStarted]);
  useEffect6(() => {
    if (isHLSRunning || hlsError) {
      if (hlsStarted) {
        setHLSStarted(false);
        if (isStreamingOpen) {
          toggleStreaming();
        }
      }
    }
  }, [
    isHLSRunning,
    hlsStarted,
    setHLSStarted,
    hlsError,
    isStreamingOpen,
    toggleStreaming
  ]);
  useEffect6(() => {
    if (isRTMPRunning || rtmpError || isBrowserRecordingOn) {
      if (rtmpStarted) {
        setRTMPStarted(false);
        if (isStreamingOpen) {
          toggleStreaming();
        }
      }
    }
  }, [
    isRTMPRunning,
    setRTMPStarted,
    rtmpStarted,
    rtmpError,
    isBrowserRecordingOn,
    isStreamingOpen,
    toggleStreaming
  ]);
  return null;
};

// src/Prebuilt/components/AuthToken.tsx
import React26, { useEffect as useEffect8, useRef as useRef8, useState as useState6 } from "react";
import { useSessionStorage } from "react-use";
import { match as match3 } from "ts-pattern";
import { v4 as uuid } from "uuid";
import { useHMSActions as useHMSActions6 } from "@100mslive/react-sdk";

// src/Prebuilt/AppContext.tsx
import React24, { useContext as useContext2 } from "react";
var HMSPrebuiltContext = React24.createContext({
  roomCode: "",
  userName: "",
  userId: "",
  containerSelector: DEFAULT_PORTAL_CONTAINER,
  endpoints: {},
  onLeave: void 0,
  onJoin: void 0
});
HMSPrebuiltContext.displayName = "HMSPrebuiltContext";
var useHMSPrebuiltContext = () => {
  const context = useContext2(HMSPrebuiltContext);
  if (!context) {
    throw Error(
      "Make sure HMSPrebuiltContext.Provider is present at the top level of your application"
    );
  }
  return context;
};

// src/Prebuilt/AppStateContext.tsx
import React25, { useContext as useContext3, useEffect as useEffect7 } from "react";
import { usePreviousDistinct } from "react-use";
import { match as match2, P as P2 } from "ts-pattern";
import {
  HMSRoomState as HMSRoomState2,
  selectRoomState as selectRoomState2,
  useHMSActions as useHMSActions5,
  useHMSStore as useHMSStore7
} from "@100mslive/react-sdk";

// src/Prebuilt/components/VirtualBackground/VBHandler.tsx
import {
  HMSVBPlugin,
  HMSVirtualBackgroundTypes
} from "@100mslive/hms-virtual-background/hmsvbplugin";
import { parsedUserAgent as parsedUserAgent2 } from "@100mslive/react-sdk";
var VBPlugin = class {
  constructor() {
    this.initialisePlugin = (effectsSDKKey, onInit) => __async(this, null, function* () {
      if (this.getVBObject()) {
        return;
      }
      if (effectsSDKKey) {
        try {
          const effects = yield import("@100mslive/hms-virtual-background/hmseffectsplugin");
          this.effectsPlugin = new effects.HMSEffectsPlugin(
            effectsSDKKey,
            onInit
          );
        } catch (error) {
          console.error(
            "Failed to initialise HMSEffectsPlugin:",
            error,
            "Using HMSVBPlugin"
          );
          this.hmsPlugin = new HMSVBPlugin(
            HMSVirtualBackgroundTypes.NONE,
            HMSVirtualBackgroundTypes.NONE
          );
        }
      } else {
        this.hmsPlugin = new HMSVBPlugin(
          HMSVirtualBackgroundTypes.NONE,
          HMSVirtualBackgroundTypes.NONE
        );
      }
    });
    this.getBackground = () => {
      var _a7, _b7;
      if (this.effectsPlugin) {
        return (_a7 = this.effectsPlugin) == null ? void 0 : _a7.getBackground();
      } else {
        const background = (_b7 = this.hmsPlugin) == null ? void 0 : _b7.getBackground();
        return (background == null ? void 0 : background.src) || background;
      }
    };
    this.getBlurAmount = () => {
      var _a7;
      if (this.effectsPlugin) {
        return this.effectsPlugin.getBlurAmount();
      } else {
        return ((_a7 = this.hmsPlugin) == null ? void 0 : _a7.getBackground()) === HMSVirtualBackgroundTypes.BLUR ? 1 : 0;
      }
    };
    this.getVBObject = () => {
      return this.effectsPlugin || this.hmsPlugin;
    };
    this.getName = () => {
      var _a7, _b7;
      return this.effectsPlugin ? (_a7 = this.effectsPlugin) == null ? void 0 : _a7.getName() : (_b7 = this.hmsPlugin) == null ? void 0 : _b7.getName();
    };
    this.setBlur = (blurPower) => __async(this, null, function* () {
      var _a7, _b7;
      if (this.effectsPlugin) {
        (_a7 = this.effectsPlugin) == null ? void 0 : _a7.setBlur(blurPower);
      } else {
        yield (_b7 = this.hmsPlugin) == null ? void 0 : _b7.setBackground(
          HMSVirtualBackgroundTypes.BLUR,
          HMSVirtualBackgroundTypes.BLUR
        );
      }
    });
    this.setBackground = (mediaURL) => __async(this, null, function* () {
      var _a7, _b7, _c;
      if (this.effectsPlugin) {
        (_a7 = this.effectsPlugin) == null ? void 0 : _a7.setBackground(mediaURL);
      } else {
        const img = document.createElement("img");
        let retries = 0;
        const MAX_RETRIES = 3;
        img.alt = "VB";
        img.src = mediaURL;
        try {
          yield (_b7 = this.hmsPlugin) == null ? void 0 : _b7.setBackground(
            img,
            HMSVirtualBackgroundTypes.IMAGE
          );
        } catch (e) {
          console.error(e);
          if (retries++ < MAX_RETRIES) {
            yield (_c = this.hmsPlugin) == null ? void 0 : _c.setBackground(
              img,
              HMSVirtualBackgroundTypes.IMAGE
            );
          }
        }
      }
    });
    this.setPreset = (preset) => __async(this, null, function* () {
      if (this.effectsPlugin) {
        yield this.effectsPlugin.setPreset(preset);
      }
    });
    this.getPreset = () => {
      var _a7;
      return ((_a7 = this.effectsPlugin) == null ? void 0 : _a7.getPreset()) || "";
    };
    this.removeEffects = () => __async(this, null, function* () {
      var _a7, _b7;
      if (this.effectsPlugin) {
        (_a7 = this.effectsPlugin) == null ? void 0 : _a7.removeEffects();
      } else {
        yield (_b7 = this.hmsPlugin) == null ? void 0 : _b7.setBackground(
          HMSVirtualBackgroundTypes.NONE,
          HMSVirtualBackgroundTypes.NONE
        );
      }
    });
    this.reset = () => {
      this.effectsPlugin = void 0;
      this.hmsPlugin = void 0;
    };
    this.isEffectsSupported = () => {
      var _a7, _b7;
      if (!isSafari) {
        return true;
      }
      const browserVersion = ((_b7 = (_a7 = parsedUserAgent2) == null ? void 0 : _a7.getBrowser()) == null ? void 0 : _b7.version) || "16";
      if (browserVersion && parseInt(browserVersion.split(".")[0]) < 17) {
        return false;
      }
      return true;
    };
  }
};
var VBHandler = new VBPlugin();

// src/Prebuilt/components/hooks/useRedirectToLeave.tsx
import { useCallback as useCallback7 } from "react";

// src/Prebuilt/components/PIP/PIPManager.ts
import * as workerTimers from "worker-timers";

// src/Prebuilt/components/PIP/pipUtils.js
var CANVAS_FILL_COLOR;
var CANVAS_STROKE_COLOR;
function setPIPCanvasColors() {
  if (!CANVAS_FILL_COLOR) {
    CANVAS_FILL_COLOR = window.getComputedStyle(document.documentElement).getPropertyValue("--hms-ui-colors-surface_bright");
  }
  if (!CANVAS_STROKE_COLOR) {
    CANVAS_STROKE_COLOR = window.getComputedStyle(document.documentElement).getPropertyValue("--hms-ui-colors-border_bright");
  }
}
function resetPIPCanvasColors() {
  CANVAS_FILL_COLOR = "";
  CANVAS_STROKE_COLOR = "";
}
function drawVideoElementsOnCanvas(videoElements, canvas) {
  let videoTiles = videoElements.filter(
    (videoElement) => videoElement.srcObject !== null
  );
  const ctx = canvas.getContext("2d");
  setPIPCanvasColors();
  ctx.fillStyle = CANVAS_FILL_COLOR;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (videoTiles.length === 0) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }
  fillGridTiles(videoTiles.slice(0, 4), ctx, canvas);
}
function dummyChangeInCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  setPIPCanvasColors();
  ctx.fillStyle = CANVAS_FILL_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function fillGridTiles(videoElements, ctx, canvas) {
  const offset = 8;
  canvas.width = 480;
  canvas.height = 320;
  ctx.fillStyle = CANVAS_FILL_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (videoElements.length > 0) {
    ctx.strokeStyle = CANVAS_STROKE_COLOR;
    ctx.lineWidth = offset / 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }
  if (videoElements.length === 1) {
    const video = videoElements[0];
    const { width, height } = getRenderDimensions(
      video,
      canvas.width - offset,
      canvas.height - offset
    );
    const xOffset = (canvas.width - width) / 2;
    const yOffset = (canvas.height - height) / 2;
    ctx.drawImage(video, xOffset, yOffset, width, height);
  }
  if (videoElements.length === 2) {
    videoElements.forEach((video, index) => {
      const { width, height } = getRenderDimensions(
        video,
        canvas.width / 2 - offset,
        // This will be the max available width for each tile
        canvas.height - offset
      );
      const xOffset = (canvas.width / 2 - width) / 2 + canvas.width / 2 * index;
      const yOffset = (canvas.height - height) / 2;
      ctx.drawImage(video, xOffset, yOffset, width, height);
    });
    const path = new Path2D();
    path.moveTo(canvas.width / 2, 0);
    path.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke(path);
  }
  if (videoElements.length === 3) {
    videoElements.forEach((video, index) => {
      const { width, height } = getRenderDimensions(
        video,
        canvas.width / 2 - offset,
        canvas.height / 2 - offset
      );
      const xOffset = index < 2 ? (canvas.width / 2 - width) / 2 + canvas.width / 2 * index : canvas.width / 2 - width / 2;
      const yOffset = (index < 2 ? 0 : canvas.height / 2) + (canvas.height / 2 - height) / 2;
      ctx.drawImage(video, xOffset, yOffset, width, height);
    });
    const path = new Path2D();
    path.moveTo(canvas.width / 2, 0);
    path.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke(path);
    path.moveTo(0, canvas.height / 2);
    path.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke(path);
  }
  if (videoElements.length === 4) {
    videoElements.forEach((video, index) => {
      const { width, height } = getRenderDimensions(
        video,
        canvas.width / 2 - offset,
        canvas.height / 2 - offset
      );
      const xOffset = (canvas.width / 2 - width) / 2 + canvas.width / 2 * (index % 2);
      const yOffset = (index < 2 ? 0 : canvas.height / 2) + (canvas.height / 2 - height) / 2;
      ctx.drawImage(video, xOffset, yOffset, width, height);
    });
    const path = new Path2D();
    path.moveTo(canvas.width / 2, 0);
    path.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke(path);
    path.moveTo(0, canvas.height / 2);
    path.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke(path);
  }
}
function getRenderDimensions(video, width, height) {
  let finalWidth = video.videoWidth / video.videoHeight * height;
  let finalHeight = height;
  if (finalWidth > width) {
    finalWidth = width;
    finalHeight = video.videoHeight / video.videoWidth * width;
  }
  return { width: finalWidth, height: finalHeight };
}

// src/Prebuilt/components/PIP/PIPManager.ts
var MAX_NUMBER_OF_TILES_IN_PIP = 4;
var DEFAULT_FPS = 30;
var DEFAULT_CANVAS_WIDTH = 480;
var DEFAULT_CANVAS_HEIGHT = 320;
var LEAVE_EVENT_NAME = "leavepictureinpicture";
var PipManager = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.canvas = null;
    this.pipVideo = null;
    this.hmsActions = null;
    this.timeoutRef = 0;
    this.videoElements = [];
    this.onStateChange = null;
    this.tracksToShow = [];
    this.state = "stopped" /* stopped */;
    this.stop = () => __async(this, null, function* () {
      var _a7, _b7;
      if (this.state === "stopped" /* stopped */) {
        return;
      }
      this.state = "stopping" /* stopping */;
      (_a7 = this.pipVideo) == null ? void 0 : _a7.removeEventListener(LEAVE_EVENT_NAME, this.stop);
      if (this.timeoutRef) {
        workerTimers.clearTimeout(this.timeoutRef);
        this.timeoutRef = 0;
      }
      if (this.isOn()) {
        this.exitPIP();
      }
      yield this.detachOldAttachNewTracks(this.tracksToShow, []);
      (_b7 = this.onStateChange) == null ? void 0 : _b7.call(this, false);
      this.callListeners(false);
      this.reset();
      this.state = "stopped" /* stopped */;
    });
    // ------- Private function --------------
    /**
     * @private {boolean} on - whether pip is on/off
     */
    this.callListeners = (on) => {
      this.listeners.forEach((listener) => listener == null ? void 0 : listener(on));
    };
    this.reset();
  }
  listenToStateChange(cb) {
    this.listeners.add(cb);
  }
  /**
   * @private
   */
  reset() {
    console.debug("resetting PIP state");
    resetPIPCanvasColors();
    this.canvas = null;
    this.pipVideo = null;
    this.timeoutRef = 0;
    this.hmsActions = null;
    this.videoElements = [];
    this.tracksToShow = [];
    this.onStateChange = null;
    this.state = "stopped" /* stopped */;
  }
  /**
   * check if PIP is supported in this browser env
   */
  isSupported() {
    return !!document.pictureInPictureEnabled && !isIOS && !(isMacOS && isSafari);
  }
  /**
   * check if pip is currently turned on
   */
  isOn() {
    return !!document.pictureInPictureElement;
  }
  /**
   * request browser to start pip and start the render loop updating the pip
   * video element with peer tracks.
   * @param hmsActions
   * @param onStateChangeFn {function(bool):void} callback called to notify change in pip state
   */
  start(hmsActions, onStateChangeFn) {
    return __async(this, null, function* () {
      var _a7, _b7;
      if (!this.isSupported()) {
        throw new Error("pip is not supported on this browser");
      }
      console.debug("starting PIP, current state", this.state);
      if (this.state === "started" /* started */) {
        yield this.stop();
      } else if (this.state === "starting" /* starting */) {
        return;
      }
      this.state = "starting" /* starting */;
      try {
        yield this.init(hmsActions, onStateChangeFn);
        (_a7 = this.pipVideo) == null ? void 0 : _a7.addEventListener(LEAVE_EVENT_NAME, this.stop);
        this.renderLoop();
        if (!this.isOn()) {
          yield this.requestPIP();
        }
        console.debug("pip started");
        this.state = "started" /* started */;
        (_b7 = this.onStateChange) == null ? void 0 : _b7.call(this, true);
        this.callListeners(true);
      } catch (err) {
        console.error("error in request pip", err);
        this.state = "stopped" /* stopped */;
      }
    });
  }
  /**
   * @param peers {Array} All Remote Peers present in call.
   * @param tracksMap {Object} map of track id to track
   * */
  updatePeersAndTracks(peers, tracksMap) {
    return __async(this, null, function* () {
      if (!this.canvas) {
        console.log("no canvas to render video to");
        return;
      }
      const newTracksToShowUnordered = this.pickTracksToShow(peers, tracksMap);
      const currentTracksShowing = this.tracksToShow;
      this.tracksToShow = this.orderNewTracksToShow(
        newTracksToShowUnordered,
        currentTracksShowing
      );
      try {
        yield this.detachOldAttachNewTracks(
          currentTracksShowing,
          this.tracksToShow,
          tracksMap
        );
      } catch (error) {
        console.error("error in detaching/attaching tracks", error);
      }
    });
  }
  /**
   * @private
   */
  init(hmsActions, onStateChangeFn) {
    return __async(this, null, function* () {
      yield this.initMediaElements();
      this.hmsActions = hmsActions;
      this.onStateChange = onStateChangeFn;
    });
  }
  initMediaElements() {
    return __async(this, null, function* () {
      if (!this.canvas) {
        const { canvas, pipVideo } = this.initializeCanvasAndVideoElement();
        this.canvas = canvas;
        this.pipVideo = pipVideo;
        this.videoElements = this.initializeVideoElements();
        const videoPlayPromise = this.pipVideo.play();
        dummyChangeInCanvas(this.canvas);
        yield videoPlayPromise;
      }
    });
  }
  initializeCanvasAndVideoElement() {
    const canvas = document.createElement("canvas");
    canvas.width = DEFAULT_CANVAS_WIDTH;
    canvas.height = DEFAULT_CANVAS_HEIGHT;
    const pipVideo = document.createElement("video");
    pipVideo.width = DEFAULT_CANVAS_WIDTH;
    pipVideo.height = DEFAULT_CANVAS_HEIGHT;
    pipVideo.muted = true;
    pipVideo.srcObject = canvas.captureStream();
    return { canvas, pipVideo };
  }
  initializeVideoElements() {
    const videoElements = [];
    for (let i = 0; i < MAX_NUMBER_OF_TILES_IN_PIP; i++) {
      const videoElement = document.createElement("video");
      videoElement.autoplay = true;
      videoElement.playsInline = true;
      videoElements.push(videoElement);
    }
    return videoElements;
  }
  /**
   * render loop is responsible for rendering the video elements on canvas/pip.
   * in each loop current video elements are stitched and painted on canvas
   */
  renderLoop() {
    const delay = 1e3 / DEFAULT_FPS;
    this.timeoutRef = workerTimers.setTimeout(() => {
      if (this.state === "stopping" /* stopping */ || this.state === "stopped" /* stopped */) {
        return;
      }
      if (this.state === "started" /* started */) {
        drawVideoElementsOnCanvas(this.videoElements, this.canvas);
      }
      this.renderLoop();
    }, delay);
  }
  requestPIP() {
    return __async(this, null, function* () {
      try {
        if (this.isOn()) {
          this.exitPIP();
        }
        if (!this.pipVideo) {
          return;
        }
        yield this.pipVideo.requestPictureInPicture();
      } catch (error) {
        console.error("error in requestpip", error, "state", this.state);
        throw error;
      }
    });
  }
  exitPIP() {
    document.exitPictureInPicture();
  }
  /**
   * Logic - pick only enabled video tracks
   * @param peers {Array<any>}
   * @param tracksMap {Record<string, any>}
   */
  pickTracksToShow(peers, tracksMap) {
    const tracksToShow = /* @__PURE__ */ new Set();
    for (const peer of peers) {
      if (tracksToShow.size === MAX_NUMBER_OF_TILES_IN_PIP) {
        break;
      } else if (peer.videoTrack && this.showTrack(tracksMap[peer.videoTrack])) {
        tracksToShow.add(peer.videoTrack);
      }
    }
    return Array.from(tracksToShow);
  }
  /**
   * there has to be a smart reordering of new tracks based on currently showing
   * ones to reduce unnecessary displacement. If someone was showing up both
   * earlier and now, it's a better UX to keep their position same instead
   * of letting it change.
   * The returned array is a shuffled version of newTracks with position of
   * tracks present in the old tracks intact.
   * eg. old = [1,5,9,3], new = [3,8,2,9], result = [8,2,9,3]
   * @param oldTracks {Array}
   * @param newTracks {Array}
   * @return {Array}
   */
  orderNewTracksToShow(newTracks, oldTracks) {
    const betterNewTracks = new Array(newTracks.length);
    const leftOvers = [];
    newTracks.forEach((track) => {
      const oldPosition = oldTracks.indexOf(track);
      if (oldPosition !== -1 && oldPosition < newTracks.length) {
        betterNewTracks[oldPosition] = track;
      } else {
        leftOvers.push(track);
      }
    });
    for (let i = 0; i < newTracks.length; i++) {
      if (!betterNewTracks[i]) {
        const newEntry = leftOvers.shift();
        if (newEntry) {
          betterNewTracks[i] = newEntry;
        }
      }
    }
    return Array.from(new Set(betterNewTracks));
  }
  showTrack(track) {
    return track && track.enabled && !track.degraded;
  }
  /**
   * call detach for tracks which no longer need to be shown and attach for
   * new ones which are to be shown now.
   * Note: oldTracks and newTracks are not necessarily of same length
   * @param oldTracks {Array<String>}
   * @param newTracks {Array<String>}
   * @param tracksMap {Record<String, any>}
   */
  // eslint-disable-next-line complexity
  detachOldAttachNewTracks(oldTracks, newTracks, tracksMap = null) {
    return __async(this, null, function* () {
      var _a7, _b7;
      const numTracks = Math.max(oldTracks.length, newTracks.length);
      for (let i = 0; i < numTracks; i++) {
        if (oldTracks[i] === newTracks[i]) {
          continue;
        } else if (oldTracks[i]) {
          if (!tracksMap || tracksMap[oldTracks[i]]) {
            yield (_a7 = this.hmsActions) == null ? void 0 : _a7.detachVideo(
              oldTracks[i],
              this.videoElements[i]
            );
          }
          if (this.videoElements[i]) {
            this.videoElements[i].srcObject = null;
          }
        }
        if (newTracks[i]) {
          yield (_b7 = this.hmsActions) == null ? void 0 : _b7.attachVideo(newTracks[i], this.videoElements[i]);
        }
      }
    });
  }
};
var PictureInPicture = new PipManager();

// src/Prebuilt/components/Toast/ToastManager.js
import { v4 } from "uuid";
var ToastManager = {
  toasts: /* @__PURE__ */ new Map(),
  listeners: /* @__PURE__ */ new Map(),
  addToast(toast) {
    const id = toast.id ? toast.id : v4();
    this.toasts.set(id, __spreadProps(__spreadValues({}, toast), { id }));
    this.onChange();
    return id;
  },
  clearAllToast() {
    this.toasts.clear();
    this.onChange();
  },
  removeToast(id) {
    this.toasts.delete(id);
    this.onChange();
  },
  replaceToast(id, toast) {
    if (this.isActive(id)) {
      this.toasts.set(id, __spreadValues(__spreadValues({}, this.toasts.get(id)), toast));
      this.onChange();
      return id;
    } else {
      return this.addToast(toast);
    }
  },
  addListener(cb) {
    this.listeners.set(cb, cb);
  },
  removeListener(cb) {
    this.listeners.delete(cb);
  },
  isActive(id) {
    return this.toasts.has(id);
  },
  onChange() {
    const toasts = Array.from(this.toasts.values());
    this.listeners.forEach((listener) => listener(toasts));
  }
};

// src/Prebuilt/components/hooks/useRedirectToLeave.tsx
var useRedirectToLeave = () => {
  const { onLeave } = useHMSPrebuiltContext();
  const redirect = useCallback7(
    (timeout = 0) => {
      setTimeout(() => {
        PictureInPicture.stop().catch(() => console.error("stopping pip"));
        ToastManager.clearAllToast();
        onLeave == null ? void 0 : onLeave();
      }, timeout);
    },
    [onLeave]
  );
  return { redirectToLeave: redirect };
};

// src/Prebuilt/AppStateContext.tsx
var AppStateContext = React25.createContext({
  rejoin: () => {
    console.log("Rejoin");
  }
});
AppStateContext.displayName = "AppStateContext";
var useHMSAppStateContext = () => {
  const context = useContext3(AppStateContext);
  if (!context) {
    throw Error(
      "Make sure AppStateContext.Provider is present at the top level of your application"
    );
  }
  return context;
};
var useAppStateManager = () => {
  const roomLayout = useRoomLayout();
  const setOriginalLayout = useSetOriginalLayout();
  const [activeState, setActiveState] = React25.useState();
  const roomState = useHMSStore7(selectRoomState2);
  const prevRoomState = usePreviousDistinct(roomState);
  const hmsActions = useHMSActions5();
  const { isLeaveScreenEnabled } = useRoomLayoutLeaveScreen();
  const { isPreviewScreenEnabled } = useRoomLayoutPreviewScreen();
  const { redirectToLeave } = useRedirectToLeave();
  const rejoin = () => {
    setOriginalLayout == null ? void 0 : setOriginalLayout();
    hmsActions.setAppData(APP_DATA.authToken, "");
    setActiveState(
      isPreviewScreenEnabled ? "preview" /* PREVIEW */ : "meeting" /* MEETING */
    );
  };
  useEffect7(() => {
    if (!roomLayout) {
      return;
    }
    match2([roomState, prevRoomState]).with(
      [HMSRoomState2.Connected, P2.any],
      () => setActiveState("meeting" /* MEETING */)
    ).with(
      [HMSRoomState2.Disconnecting, HMSRoomState2.Connected],
      [HMSRoomState2.Disconnecting, HMSRoomState2.Connecting],
      [HMSRoomState2.Disconnecting, HMSRoomState2.Reconnecting],
      [HMSRoomState2.Disconnected, HMSRoomState2.Connected],
      [HMSRoomState2.Disconnected, HMSRoomState2.Connecting],
      [HMSRoomState2.Disconnected, HMSRoomState2.Reconnecting],
      () => {
        setActiveState((prevState) => {
          return match2({
            isLeaveScreenEnabled,
            isPreviewScreenEnabled,
            prevState
          }).when(
            ({ isLeaveScreenEnabled: isLeaveScreenEnabled2, prevState: prevState2 }) => isLeaveScreenEnabled2 && prevState2 !== "leave" /* LEAVE */,
            () => "leave" /* LEAVE */
          ).with(
            { isPreviewScreenEnabled: true },
            () => "preview" /* PREVIEW */
          ).otherwise(() => "meeting" /* MEETING */);
        });
        VBHandler.reset();
        redirectToLeave(1e3);
      }
    ).with([HMSRoomState2.Disconnected, P2.nullish], () => {
      setActiveState(
        isPreviewScreenEnabled ? "preview" /* PREVIEW */ : "meeting" /* MEETING */
      );
    }).otherwise(() => {
    });
  }, [
    roomLayout,
    roomState,
    isLeaveScreenEnabled,
    isPreviewScreenEnabled,
    prevRoomState,
    redirectToLeave
  ]);
  return { activeState, rejoin };
};

// src/Prebuilt/images/transaction_error.svg
var transaction_error_default = 'data:image/svg+xml,<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M70 68.3333V26.6667C70 24.825 68.5083 23.3333 66.6667 23.3333H13.3333C11.4917 23.3333 10 24.825 10 26.6667V68.3333C10 70.175 11.4917 71.6667 13.3333 71.6667H66.6667C68.5083 71.6667 70 70.175 70 68.3333Z" fill="%23272A31"/>%0A<path d="M20 31.6667H60C61.8417 31.6667 63.3333 33.1583 63.3333 35C63.3333 36.8417 61.8417 38.3333 60 38.3333H20C18.1583 38.3333 16.6667 36.8417 16.6667 35C16.6667 33.1583 18.1583 31.6667 20 31.6667Z" fill="%238F9099"/>%0A<path d="M58.3333 36.6667V10C58.3333 9.08 57.5867 8.33334 56.6667 8.33334H55C55 9.25334 54.2533 10 53.3333 10C52.4133 10 51.6667 9.25334 51.6667 8.33334H48.3333C48.3333 9.25334 47.5867 10 46.6667 10C45.7467 10 45 9.25334 45 8.33334H41.6667C41.6667 9.25334 40.92 10 40 10C39.08 10 38.3333 9.25334 38.3333 8.33334H35C35 9.25334 34.2533 10 33.3333 10C32.4133 10 31.6667 9.25334 31.6667 8.33334H28.3333C28.3333 9.25334 27.5867 10 26.6667 10C25.7467 10 25 9.25334 25 8.33334H23.3333C22.4133 8.33334 21.6667 9.08 21.6667 10V36.6667H58.3333Z" fill="%23C74E5B"/>%0A<path d="M21.6667 43.3333H58.3333C60.175 43.3333 61.6667 44.825 61.6667 46.6667V50C61.6667 51.8417 60.175 53.3333 58.3333 53.3333H21.6667C19.825 53.3333 18.3333 51.8417 18.3333 50V46.6667C18.3333 44.825 19.825 43.3333 21.6667 43.3333Z" fill="%23C5C6D0"/>%0A<path d="M60 66.6667H55C54.08 66.6667 53.3333 65.92 53.3333 65V60C53.3333 59.08 54.08 58.3333 55 58.3333H60C60.92 58.3333 61.6667 59.08 61.6667 60V65C61.6667 65.92 60.92 66.6667 60 66.6667Z" fill="%23C5C6D0"/>%0A<path d="M25 66.6667H20C19.08 66.6667 18.3333 65.92 18.3333 65V60C18.3333 59.08 19.08 58.3333 20 58.3333H25C25.92 58.3333 26.6667 59.08 26.6667 60V65C26.6667 65.92 25.92 66.6667 25 66.6667ZM36.6667 66.6667H31.6667C30.7467 66.6667 30 65.92 30 65V60C30 59.08 30.7467 58.3333 31.6667 58.3333H36.6667C37.5867 58.3333 38.3333 59.08 38.3333 60V65C38.3333 65.92 37.5867 66.6667 36.6667 66.6667ZM48.3333 66.6667H43.3333C42.4133 66.6667 41.6667 65.92 41.6667 65V60C41.6667 59.08 42.4133 58.3333 43.3333 58.3333H48.3333C49.2533 58.3333 50 59.08 50 60V65C50 65.92 49.2533 66.6667 48.3333 66.6667Z" fill="%23C5C6D0"/>%0A<path d="M58.3333 35H21.6667V38.3333H58.3333V35Z" fill="%23C74E5B"/>%0A<path opacity="0.05" d="M45.3033 32.315C44.6383 32.315 44.01 32.0567 43.5367 31.585L40 28.0467L36.465 31.5817C35.9917 32.0533 35.365 32.3133 34.6967 32.3133C34.0283 32.3133 33.4 32.0533 32.9267 31.58L31.75 30.4033C31.2783 29.9333 31.0183 29.3033 31.0183 28.6333C31.0183 27.9667 31.2783 27.3383 31.75 26.8667L35.2867 23.3333L31.7517 19.7983C31.28 19.3283 31.02 18.7 31.02 18.0317C31.02 17.3617 31.28 16.7333 31.7517 16.2617L32.93 15.0833C33.4017 14.6117 34.0283 14.3517 34.6983 14.3517C35.3633 14.3517 35.9917 14.61 36.465 15.0817L40 18.62L43.535 15.0833C44.0083 14.6117 44.635 14.3517 45.3033 14.3517C45.9683 14.3517 46.5967 14.61 47.07 15.0817L48.25 16.2617C48.7217 16.7317 48.9817 17.3617 48.9817 18.0317C48.9817 18.6983 48.7217 19.3267 48.25 19.7983L44.7117 23.3333L48.2483 26.87C49.2217 27.84 49.2233 29.425 48.2517 30.4017L47.07 31.5833C46.5983 32.055 45.9717 32.315 45.3033 32.315Z" fill="black"/>%0A<path opacity="0.07" d="M45.3033 31.4817C44.8583 31.4817 44.44 31.3083 44.125 30.995L40 26.8683L35.875 30.9933C35.56 31.3083 35.1417 31.48 34.6967 31.48C34.25 31.48 33.8317 31.3067 33.5183 30.9917L32.34 29.8133C32.025 29.4983 31.8517 29.08 31.8517 28.6333C31.8517 28.1883 32.025 27.77 32.34 27.455L36.465 23.3333L32.34 19.2083C32.0267 18.895 31.8517 18.4767 31.8517 18.0317C31.8517 17.585 32.025 17.1667 32.34 16.8517L33.5183 15.6733C33.8317 15.36 34.25 15.1867 34.6967 15.1867C35.1417 15.1867 35.56 15.36 35.875 15.6733L40 19.7983L44.125 15.6717C44.44 15.3567 44.8583 15.185 45.3033 15.185C45.7483 15.185 46.1667 15.3583 46.4817 15.6717L47.66 16.8517C47.975 17.1667 48.1483 17.585 48.1483 18.0317C48.1483 18.4767 47.975 18.895 47.66 19.21L43.5333 23.3333L47.66 27.46C48.31 28.1067 48.31 29.1633 47.6617 29.815L46.4817 30.995C46.1667 31.3083 45.7483 31.4817 45.3033 31.4817Z" fill="black"/>%0A<path d="M42.3567 23.3333L47.0717 18.6183C47.3967 18.2933 47.3967 17.765 47.0717 17.44L45.8933 16.2617C45.5667 15.9367 45.04 15.9367 44.715 16.2617L40 20.9767L35.2867 16.2633C34.9617 15.9383 34.4333 15.9383 34.1083 16.2633L32.93 17.4417C32.605 17.7667 32.605 18.295 32.93 18.62L37.6433 23.3333L32.93 28.0467C32.605 28.3717 32.605 28.9 32.93 29.225L34.1083 30.4033C34.4333 30.7283 34.9617 30.7283 35.2867 30.4033L40 25.69L44.715 30.405C45.04 30.73 45.5683 30.73 45.8933 30.405L47.0717 29.2267C47.3967 28.9 47.3967 28.3733 47.0717 28.0483L42.3567 23.3333Z" fill="%23FFEDEC"/>%0A</svg>%0A';

// src/Prebuilt/components/AuthToken.tsx
var AuthToken = React26.memo(({ authTokenByRoomCodeEndpoint, defaultAuthToken, activeState }) => {
  const hmsActions = useHMSActions6();
  const { roomCode, userId } = useHMSPrebuiltContext();
  const [error, setError] = useState6({ title: "", body: "" });
  const authToken = defaultAuthToken;
  const [tokenInAppData, setAuthTokenInAppData] = useSetAppDataByKey(
    APP_DATA.authToken
  );
  const [savedUserId, setSavedUserId] = useSessionStorage(
    UserPreferencesKeys.USER_ID
  );
  const progressRef = useRef8(null);
  useEffect8(() => {
    if (authToken) {
      setAuthTokenInAppData(authToken);
      return;
    }
    if (tokenInAppData || progressRef.current || activeState === "leave" /* LEAVE */) {
      return;
    }
    if (!roomCode) {
      console.error("room code not provided");
      return;
    }
    let userIdForAuthToken = userId || savedUserId;
    if (!userIdForAuthToken) {
      userIdForAuthToken = uuid();
      setSavedUserId(userIdForAuthToken);
    }
    progressRef.current = true;
    hmsActions.getAuthTokenByRoomCode(
      { roomCode, userId: userIdForAuthToken },
      { endpoint: authTokenByRoomCodeEndpoint }
    ).then((token) => setAuthTokenInAppData(token)).catch((error2) => setError(convertError(error2))).finally(() => {
      progressRef.current = false;
    });
  }, [
    hmsActions,
    authToken,
    authTokenByRoomCodeEndpoint,
    setAuthTokenInAppData,
    roomCode,
    userId,
    savedUserId,
    tokenInAppData,
    setSavedUserId,
    activeState
  ]);
  if (error.title) {
    return /* @__PURE__ */ React26.createElement(Dialog.Root, { open: true }, /* @__PURE__ */ React26.createElement(
      Dialog.Content,
      {
        css: {
          maxWidth: "$100",
          boxSizing: "border-box",
          p: "$10 $12",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ React26.createElement("img", { src: transaction_error_default, height: 80, width: 80, alt: "Token Error" }),
      /* @__PURE__ */ React26.createElement(Text, { variant: "h4", css: { textAlign: "center", mb: "$4", mt: "$10" } }, error.title),
      /* @__PURE__ */ React26.createElement(Text, { css: { c: "$on_surface_medium", textAlign: "center" } }, error.body)
    ));
  }
  return null;
});
var convertError = (error) => {
  console.error("[error]", { error });
  console.warn(
    "If you think this is a mistake on our side, please reach out to us over Discord:",
    "https://discord.com/invite/kGdmszyzq2"
  );
  return match3([error.action, error.code]).with(["GET_TOKEN", 403], () => ({
    title: "Psst! This room is currently inactive.",
    body: "Please feel free to join another open room for more conversations. Thanks for stopping by!"
  })).with(["GET_TOKEN", 404], () => ({
    title: "Room code does not exist",
    body: "We could not find a room code corresponding to this link."
  })).with(["GET_TOKEN", 2003], () => ({
    title: "Endpoint is not reachable",
    body: `Endpoint is not reachable. ${error.description}.`
  })).otherwise(
    () => {
      var _a7;
      return (
        // @ts-ignore
        match3((_a7 = error.response) == null ? void 0 : _a7.status).with(404, () => ({
          title: "Room does not exist",
          body: "We could not find a room corresponding to this link."
        })).with(403, () => ({
          title: "Accessing room using this link format is disabled",
          body: "You can re-enable this from the developer section in Dashboard."
        })).otherwise(() => {
          console.error("Token API Error", error);
          return {
            title: "Error fetching token",
            body: "An error occurred while fetching the app token. Please look into logs for more details."
          };
        })
      );
    }
  );
};
var AuthToken_default = AuthToken;

// src/Prebuilt/components/ConferenceScreen.tsx
import React163, { useEffect as useEffect60, useRef as useRef31, useState as useState68 } from "react";
import { v4 as uuid3 } from "uuid";
import {
  HMSRoomState as HMSRoomState8,
  selectAppData as selectAppData13,
  selectIsConnectedToRoom as selectIsConnectedToRoom10,
  selectRoomState as selectRoomState8,
  useAwayNotifications as useAwayNotifications3,
  useHMSActions as useHMSActions52,
  useHMSStore as useHMSStore89
} from "@100mslive/react-sdk";

// src/Prebuilt/components/Footer/Footer.tsx
import React88, { useEffect as useEffect28 } from "react";
import { useMedia as useMedia15 } from "react-use";
import { Chat_ChatState } from "@100mslive/types-prebuilt/elements/chat";
import { selectLocalPeerRole as selectLocalPeerRole2, useHMSStore as useHMSStore48 } from "@100mslive/react-sdk";

// src/Prebuilt/components/AudioVideoToggle.tsx
import React34, { Fragment as Fragment3, useCallback as useCallback9, useEffect as useEffect12, useState as useState10 } from "react";
import { HMSKrispPlugin } from "@100mslive/hms-noise-cancellation";
import {
  DeviceType as DeviceType2,
  HMSRoomState as HMSRoomState3,
  selectIsLocalAudioPluginPresent,
  selectLocalAudioTrackID,
  selectLocalPeer,
  selectLocalVideoTrackID as selectLocalVideoTrackID2,
  selectRoom,
  selectRoomState as selectRoomState3,
  selectVideoTrackByID as selectVideoTrackByID2,
  useAVToggle as useAVToggle2,
  useDevices as useDevices2,
  useHMSActions as useHMSActions8,
  useHMSStore as useHMSStore9,
  useHMSVanillaStore as useHMSVanillaStore4
} from "@100mslive/react-sdk";
import {
  AudioLevelIcon,
  CameraFlipIcon,
  CheckIcon,
  MicOffIcon,
  MicOnIcon as MicOnIcon2,
  SettingsIcon as SettingsIcon2,
  SpeakerIcon as SpeakerIcon2,
  VideoOffIcon,
  VideoOnIcon as VideoOnIcon2
} from "@100mslive/react-icons";

// src/Prebuilt/components/IconButtonWithOptions/IconButtonWithOptions.tsx
import React27 from "react";
import { VerticalMenuIcon } from "@100mslive/react-icons";

// src/Prebuilt/IconButton.tsx
var IconButton2 = styled(IconButton, {
  width: "$14",
  height: "$14",
  border: "1px solid $border_bright",
  bg: "$background_dim",
  r: "$1",
  "&[disabled]": {
    opacity: 0.5,
    cursor: "not-allowed",
    backgroundColor: "$secondary_dim",
    color: "$on_primary_high"
  },
  variants: {
    active: {
      true: {
        color: "$on_surface_high",
        backgroundColor: "transparent"
      }
    }
  }
});
var IconButton_default = IconButton2;

// src/Prebuilt/components/IconButtonWithOptions/IconButtonWithOptions.tsx
var variants = {
  disabled: {
    true: {
      bg: "$surface_brighter"
    }
  },
  active: {
    false: {
      bg: "$secondary_dim"
    }
  }
};
var IconSection = styled(IconButton_default, {
  w: "unset",
  h: "$14",
  p: "$4",
  r: "$1",
  bg: "transparent",
  borderTopRightRadius: "0 !important",
  borderColor: "$border_bright",
  borderBottomRightRadius: "0 !important",
  position: "relative",
  "&:not([disabled]):focus-visible": {
    zIndex: 1
  },
  "@md": {
    mx: 0,
    borderTopRightRadius: "$1 !important",
    borderBottomRightRadius: "$1 !important"
  },
  variants: __spreadProps(__spreadValues({}, variants), {
    hideOptions: {
      true: {
        borderTopRightRadius: "$1 !important",
        borderBottomRightRadius: "$1 !important"
      }
    }
  })
});
var OptionsSection = styled(IconButton_default, {
  w: "unset",
  h: "$14",
  p: "$4 $2",
  r: "$1",
  borderTopLeftRadius: "0 !important",
  borderColor: "$border_bright",
  borderBottomLeftRadius: "0 !important",
  borderLeftWidth: "0 !important",
  position: "relative",
  "&:not([disabled]):focus-visible": {
    zIndex: 1
  },
  "@md": {
    display: "none"
  },
  variants
});
var Icon2 = styled(Flex, {
  alignItems: "center",
  justifyContent: "center",
  color: "$on_primary_high",
  variants: {
    disabled: {
      true: {
        color: "$on_surface_low"
      }
    },
    active: {
      true: {
        color: "$on_surface_high"
      }
    }
  }
});
var IconButtonWithOptions = ({
  disabled = false,
  onDisabledClick = () => {
    return;
  },
  testid = "",
  tooltipMessage = "",
  icon,
  children,
  active,
  hideOptions = false,
  onClick = () => {
    return;
  }
}) => {
  const commonProps = { disabled, active };
  return /* @__PURE__ */ React27.createElement(Flex, null, /* @__PURE__ */ React27.createElement(
    IconSection,
    __spreadProps(__spreadValues({
      "data-testid": testid
    }, commonProps), {
      onClick,
      hideOptions,
      className: "__cancel-drag-event"
    }),
    /* @__PURE__ */ React27.createElement(Tooltip, { disabled: !tooltipMessage, title: tooltipMessage }, /* @__PURE__ */ React27.createElement(Icon2, __spreadValues({}, commonProps), icon))
  ), !hideOptions && children ? /* @__PURE__ */ React27.createElement(Dropdown.Root, null, /* @__PURE__ */ React27.createElement(
    Dropdown.Trigger,
    {
      asChild: true,
      onPointerDown: (e) => {
        if (disabled) {
          e.preventDefault();
          onDisabledClick();
        }
      }
    },
    /* @__PURE__ */ React27.createElement(OptionsSection, __spreadValues({}, commonProps), /* @__PURE__ */ React27.createElement(Tooltip, { title: "View Options" }, /* @__PURE__ */ React27.createElement(Icon2, __spreadValues({}, commonProps), /* @__PURE__ */ React27.createElement(VerticalMenuIcon, null))))
  ), /* @__PURE__ */ React27.createElement(
    Dropdown.Content,
    {
      sideOffset: 5,
      alignOffset: -44,
      align: "start",
      side: "top",
      css: {
        w: 344,
        maxWidth: "100%",
        maxHeight: "unset",
        p: 0,
        border: "none",
        bg: "$surface_dim"
      }
    },
    children
  )) : null);
};

// src/Prebuilt/components/MoreSettings/ActionTile.jsx
import React28 from "react";
var ActionTileRoot = (_a7) => {
  var _b7 = _a7, {
    active,
    disabled = false,
    children,
    onClick
  } = _b7, props = __objRest(_b7, [
    "active",
    "disabled",
    "children",
    "onClick"
  ]);
  return /* @__PURE__ */ React28.createElement(
    Flex,
    __spreadProps(__spreadValues({}, props), {
      css: {
        flexDirection: "column",
        alignItems: "center",
        p: "$4 $2",
        position: "relative",
        bg: active ? "$surface_bright" : "",
        color: disabled ? "$on_surface_low" : "$on_surface_high",
        gap: "$4",
        r: "$1",
        "&:hover": {
          bg: "$surface_bright"
        }
      },
      onClick: () => {
        if (!disabled) {
          onClick();
        }
      }
    }),
    children
  );
};
var ActionTileCount = styled(Text, {
  position: "absolute",
  top: 0,
  right: 0,
  fontWeight: "$semiBold",
  color: "$on_surface_high",
  p: "$1 $2",
  minWidth: "$9",
  textAlign: "center",
  boxSizing: "border-box",
  bg: "$surface_bright",
  r: "$round",
  letterSpacing: "1.5px",
  fontSize: "$tiny !important",
  lineHeight: "$tiny !important"
});
var ActionTileTitle = styled(Text, {
  fontWeight: "$semiBold",
  color: "inherit",
  textAlign: "center",
  fontSize: "$xs !important"
});
var ActionTile = {
  Root: ActionTileRoot,
  Title: ActionTileTitle,
  Count: ActionTileCount
};

// src/Prebuilt/components/Settings/SettingsModal.jsx
import React33, { useCallback as useCallback8, useEffect as useEffect11, useState as useState9 } from "react";
import { useMedia as useMedia3 } from "react-use";
import {
  ChevronLeftIcon,
  CrossIcon as CrossIcon3,
  GridFourIcon,
  NotificationsIcon,
  SettingsIcon
} from "@100mslive/react-icons";

// src/Sheet/Sheet.tsx
import React29 from "react";
import * as DialogPrimitive2 from "@radix-ui/react-dialog";
var SheetRoot = styled(DialogPrimitive2.Root, {
  minHeight: "240px",
  maxWidth: "100%"
});
var SheetTrigger = styled(DialogPrimitive2.Trigger, {
  appearance: "none !important"
  // Needed for safari it shows white overlay
});
var StyledOverlay = styled(Dialog.Overlay, {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  '&[data-state="open"]': {
    animation: `${sheetFadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${sheetFadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
  }
});
var StyledContent6 = styled(DialogPrimitive2.Content, {
  color: "$on_surface_medium",
  backgroundColor: "$surface_default",
  borderTopLeftRadius: "$3",
  borderTopRightRadius: "$3",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  position: "fixed",
  zIndex: 22,
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  maxHeight: "96%",
  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: "transform",
  "&:focus": {
    outline: "none"
  },
  "@allowMotion": {
    '&[data-state="open"]': {
      animation: `${sheetSlideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${sheetSlideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
    }
  },
  "@ls": {
    maxWidth: "50%",
    margin: "0 auto"
  },
  variants: {
    side: {
      top: {
        $$transformValue: "translate3d(0,-100%,0)",
        bottom: "auto"
      },
      right: {
        $$transformValue: "translate3d(100%,0,0)",
        right: 0
      },
      bottom: {
        $$transformValue: "translate3d(0,100%,0)",
        bottom: 0,
        top: "auto"
      },
      left: {
        $$transformValue: "translate3d(-100%,0,0)",
        left: 0
      }
    }
  },
  defaultVariants: {
    side: "bottom"
  }
});
var SheetContent = React29.forwardRef((_a7, forwardedRef) => {
  var _b7 = _a7, { children, container } = _b7, props = __objRest(_b7, ["children", "container"]);
  return /* @__PURE__ */ React29.createElement(Dialog.Portal, { container }, /* @__PURE__ */ React29.createElement(StyledOverlay, null), /* @__PURE__ */ React29.createElement(StyledContent6, __spreadProps(__spreadValues({}, props), { ref: forwardedRef }), children));
});
var SheetClose = Dialog.Close;
var SheetTitle = styled(DialogPrimitive2.Title, {
  margin: 0
});
var SheetDescription = Dialog.Description;
var SheetDefaultCloseIcon = Dialog.DefaultClose;
var Sheet = {
  Root: SheetRoot,
  Trigger: SheetTrigger,
  Content: SheetContent,
  Description: SheetDescription,
  Title: SheetTitle,
  Close: SheetClose,
  DefaultClose: SheetDefaultCloseIcon
};

// src/Prebuilt/components/Settings/DeviceSettings.jsx
import React31, { Fragment as Fragment2, useEffect as useEffect10, useRef as useRef10, useState as useState8 } from "react";
import { useMedia as useMedia2 } from "react-use";
import {
  DeviceType,
  selectIsLocalVideoEnabled as selectIsLocalVideoEnabled2,
  selectLocalVideoTrackID,
  selectVideoTrackByID,
  useDevices,
  useHMSActions as useHMSActions7,
  useHMSStore as useHMSStore8
} from "@100mslive/react-sdk";
import { MicOnIcon, SpeakerIcon, VideoOnIcon } from "@100mslive/react-icons";

// src/Prebuilt/primitives/DropdownTrigger.jsx
import React30 from "react";
import { ChevronDownIcon as ChevronDownIcon2, ChevronUpIcon as ChevronUpIcon2 } from "@100mslive/react-icons";
var DialogDropdownTrigger = React30.forwardRef(
  ({ title, css: css2, open, icon, titleCSS = {} }, ref) => {
    return /* @__PURE__ */ React30.createElement(
      Dropdown.Trigger,
      {
        asChild: true,
        "data-testid": `${title}_selector`,
        css: __spreadValues({
          border: "1px solid $border_bright",
          bg: "$surface_bright",
          r: "$1",
          p: "$6 $9",
          zIndex: 10
        }, css2),
        ref
      },
      /* @__PURE__ */ React30.createElement(
        Flex,
        {
          css: {
            display: "flex",
            justifyContent: "space-between",
            color: "$on_surface_high",
            w: "100%"
          }
        },
        icon,
        /* @__PURE__ */ React30.createElement(
          Text,
          {
            css: __spreadValues(__spreadProps(__spreadValues({
              color: "inherit"
            }, textEllipsis("90%")), {
              flex: "1 1 0",
              mx: icon ? "$6" : "0"
            }), titleCSS)
          },
          title
        ),
        open ? /* @__PURE__ */ React30.createElement(ChevronUpIcon2, null) : /* @__PURE__ */ React30.createElement(ChevronDownIcon2, null)
      )
    );
  }
);

// src/Prebuilt/components/hooks/useAudioOutputTest.tsx
import { useEffect as useEffect9, useRef as useRef9, useState as useState7 } from "react";
var useAudioOutputTest = ({ deviceId }) => {
  const audioRef = useRef9(null);
  const [playing, setPlaying] = useState7(false);
  useEffect9(() => {
    if (audioRef.current && deviceId) {
      try {
        if (typeof audioRef.current.setSinkId !== "undefined") {
          audioRef.current.setSinkId(deviceId);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [deviceId]);
  return { playing, setPlaying, audioRef };
};

// src/Prebuilt/components/hooks/useDropdownSelection.jsx
var useDropdownSelection = () => {
  return "$surface_bright";
};

// src/Prebuilt/components/Settings/DeviceSettings.jsx
var Settings = ({ setHide }) => {
  var _a7;
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices();
  const { videoInput, audioInput, audioOutput } = allDevices;
  const videoTrackId = useHMSStore8(selectLocalVideoTrackID);
  const isVideoOn = useHMSStore8(selectIsLocalVideoEnabled2);
  const shouldShowAudioOutput = "setSinkId" in HTMLMediaElement.prototype;
  const mirrorLocalVideo = useUISettings(UI_SETTINGS.mirrorLocalVideo);
  const trackSelector = selectVideoTrackByID(videoTrackId);
  const hmsActions = useHMSActions7();
  const track = useHMSStore8(trackSelector);
  const isMobile = useMedia2(config.media.md);
  useEffect10(() => {
    if (isMobile) {
      hmsActions.refreshDevices();
    }
  }, [hmsActions, isMobile]);
  const audioOutputFiltered = (_a7 = audioOutput == null ? void 0 : audioOutput.filter((item) => !!item.label)) != null ? _a7 : [];
  if (!(videoInput == null ? void 0 : videoInput.length) && !(audioInput == null ? void 0 : audioInput.length) && !(audioOutputFiltered == null ? void 0 : audioOutputFiltered.length)) {
    setHide(true);
  }
  return /* @__PURE__ */ React31.createElement(Box, { className: settingOverflow() }, (videoInput == null ? void 0 : videoInput.length) ? /* @__PURE__ */ React31.createElement(Fragment2, null, isVideoOn && /* @__PURE__ */ React31.createElement(
    StyledVideoTile.Container,
    {
      css: {
        w: "90%",
        px: "$10",
        height: "$48",
        bg: "transparent",
        m: "$10 auto"
      }
    },
    /* @__PURE__ */ React31.createElement(
      Video,
      {
        trackId: videoTrackId,
        mirror: (track == null ? void 0 : track.facingMode) !== "environment" && mirrorLocalVideo
      }
    )
  ), /* @__PURE__ */ React31.createElement(
    DeviceSelector,
    {
      title: "Video",
      devices: videoInput,
      icon: /* @__PURE__ */ React31.createElement(VideoOnIcon, null),
      selection: selectedDeviceIDs.videoInput,
      onChange: (deviceId) => updateDevice({
        deviceId,
        deviceType: DeviceType.videoInput
      })
    }
  )) : null, (audioInput == null ? void 0 : audioInput.length) ? /* @__PURE__ */ React31.createElement(
    DeviceSelector,
    {
      title: shouldShowAudioOutput ? "Microphone" : "Audio",
      icon: /* @__PURE__ */ React31.createElement(MicOnIcon, null),
      devices: audioInput,
      selection: selectedDeviceIDs.audioInput,
      onChange: (deviceId) => updateDevice({
        deviceId,
        deviceType: DeviceType.audioInput
      })
    }
  ) : null, (audioOutputFiltered == null ? void 0 : audioOutputFiltered.length) && shouldShowAudioOutput ? /* @__PURE__ */ React31.createElement(
    DeviceSelector,
    {
      title: "Speaker",
      icon: /* @__PURE__ */ React31.createElement(SpeakerIcon, null),
      devices: audioOutput,
      selection: selectedDeviceIDs.audioOutput,
      onChange: (deviceId) => updateDevice({
        deviceId,
        deviceType: DeviceType.audioOutput
      })
    },
    /* @__PURE__ */ React31.createElement(TestAudio, { id: selectedDeviceIDs.audioOutput })
  ) : null);
};
var DeviceSelector = ({
  title,
  devices,
  selection,
  onChange,
  icon,
  children = null
}) => {
  var _a7, _b7;
  const [open, setOpen] = useState8(false);
  const selectionBg = useDropdownSelection();
  const ref = useRef10(null);
  return /* @__PURE__ */ React31.createElement(Box, { css: { mb: "$10" } }, /* @__PURE__ */ React31.createElement(Text, { css: { mb: "$4" } }, title), /* @__PURE__ */ React31.createElement(
    Flex,
    {
      align: "center",
      css: {
        gap: "$4",
        "@md": {
          flexDirection: children ? "column" : "row",
          alignItems: children ? "start" : "center"
        }
      }
    },
    /* @__PURE__ */ React31.createElement(
      Box,
      {
        css: {
          position: "relative",
          flex: "1 1 0",
          minWidth: 0,
          w: "100%",
          maxWidth: "100%",
          "@md": {
            mb: children ? "$8" : 0
          }
        }
      },
      /* @__PURE__ */ React31.createElement(Dropdown.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React31.createElement(
        DialogDropdownTrigger,
        {
          ref,
          icon,
          title: ((_a7 = devices.find(({ deviceId }) => deviceId === selection)) == null ? void 0 : _a7.label) || "Select device from list",
          open
        }
      ), /* @__PURE__ */ React31.createElement(Dropdown.Portal, null, /* @__PURE__ */ React31.createElement(
        Dropdown.Content,
        {
          align: "start",
          sideOffset: 8,
          css: { w: (_b7 = ref.current) == null ? void 0 : _b7.clientWidth, zIndex: 1001 }
        },
        devices.map((device) => {
          return /* @__PURE__ */ React31.createElement(
            Dropdown.Item,
            {
              key: device.label,
              onSelect: () => onChange(device.deviceId),
              css: {
                px: "$9",
                bg: device.deviceId === selection ? selectionBg : void 0
              }
            },
            device.label
          );
        })
      )))
    ),
    children
  ));
};
var TestAudio = ({ id }) => {
  const { playing, setPlaying, audioRef } = useAudioOutputTest({
    deviceId: id
  });
  return /* @__PURE__ */ React31.createElement(React31.Fragment, null, /* @__PURE__ */ React31.createElement(
    Button,
    {
      variant: "standard",
      css: {
        flexShrink: 0,
        p: "$6 $9",
        "@md": {
          w: "100%"
        }
      },
      onClick: () => {
        var _a7;
        return (_a7 = audioRef.current) == null ? void 0 : _a7.play();
      },
      disabled: playing
    },
    /* @__PURE__ */ React31.createElement(SpeakerIcon, null),
    "\xA0Test",
    " ",
    /* @__PURE__ */ React31.createElement(Text, { as: "span", css: { display: "none", "@md": { display: "inline" } } }, "\xA0 speaker")
  ), /* @__PURE__ */ React31.createElement(
    "audio",
    {
      ref: audioRef,
      src: TEST_AUDIO_URL,
      onEnded: () => setPlaying(false),
      onPlay: () => setPlaying(true),
      css: { display: "none" }
    }
  ));
};
var DeviceSettings_default = Settings;

// src/Prebuilt/components/Settings/NotificationSettings.tsx
import React32 from "react";
import {
  AlertOctagonIcon,
  HandIcon,
  PeopleAddIcon,
  PeopleRemoveIcon
} from "@100mslive/react-icons";
var NotificationItem = ({
  type,
  label,
  icon,
  checked
}) => {
  const [, setSubscribedNotifications] = useSetSubscribedNotifications(type);
  return /* @__PURE__ */ React32.createElement(
    SwitchWithLabel_default,
    {
      label,
      id: type,
      icon,
      checked,
      onChange: (value) => {
        setSubscribedNotifications(value);
      }
    }
  );
};
var NotificationSettings = () => {
  const subscribedNotifications = useSubscribedNotifications();
  return /* @__PURE__ */ React32.createElement(Box, { className: settingOverflow() }, /* @__PURE__ */ React32.createElement(
    NotificationItem,
    {
      label: "Peer Joined",
      type: SUBSCRIBED_NOTIFICATIONS.PEER_JOINED,
      icon: /* @__PURE__ */ React32.createElement(PeopleAddIcon, null),
      checked: subscribedNotifications.PEER_JOINED
    }
  ), /* @__PURE__ */ React32.createElement(
    NotificationItem,
    {
      label: "Peer Leave",
      type: SUBSCRIBED_NOTIFICATIONS.PEER_LEFT,
      icon: /* @__PURE__ */ React32.createElement(PeopleRemoveIcon, null),
      checked: subscribedNotifications.PEER_LEFT
    }
  ), /* @__PURE__ */ React32.createElement(
    NotificationItem,
    {
      label: "Hand Raised",
      type: SUBSCRIBED_NOTIFICATIONS.METADATA_UPDATED,
      icon: /* @__PURE__ */ React32.createElement(HandIcon, null),
      checked: subscribedNotifications.METADATA_UPDATED
    }
  ), /* @__PURE__ */ React32.createElement(
    NotificationItem,
    {
      label: "Error",
      type: SUBSCRIBED_NOTIFICATIONS.ERROR,
      icon: /* @__PURE__ */ React32.createElement(AlertOctagonIcon, null),
      checked: subscribedNotifications.ERROR
    }
  ));
};

// src/Prebuilt/components/Settings/SettingsModal.jsx
var settingsList = [
  {
    tabName: "devices",
    title: "Device Settings",
    icon: SettingsIcon,
    content: DeviceSettings_default
  },
  {
    tabName: "notifications",
    title: "Notifications",
    icon: NotificationsIcon,
    content: NotificationSettings
  },
  {
    tabName: "layout",
    title: "Layout",
    icon: GridFourIcon,
    content: LayoutSettings
  }
];
var SettingsModal = ({
  open,
  onOpenChange,
  screenType,
  children = /* @__PURE__ */ React33.createElement(React33.Fragment, null)
}) => {
  const mediaQueryLg = config.media.md;
  const isMobile = useMedia3(mediaQueryLg);
  const [showSetting, setShowSetting] = useState9(
    () => settingsList.reduce((obj, { tabName }) => __spreadProps(__spreadValues({}, obj), { [tabName]: true }), {})
  );
  const hideSettingByTabName = useCallback8(
    (key) => (hide) => setShowSetting((prev) => __spreadProps(__spreadValues({}, prev), { [key]: !hide })),
    [setShowSetting]
  );
  useEffect11(() => {
    if (screenType === "hls_live_streaming") {
      hideSettingByTabName("layout")(true);
    }
  }, [screenType, hideSettingByTabName]);
  const [selection, setSelection] = useState9(
    () => {
      var _a7;
      return (_a7 = Object.keys(showSetting).find((key) => showSetting[key])) != null ? _a7 : "";
    }
  );
  const resetSelection = useCallback8(() => {
    setSelection("");
  }, []);
  useEffect11(() => {
    var _a7;
    if (isMobile) {
      setSelection("");
    } else {
      const firstNotHiddenTabName = (_a7 = Object.keys(showSetting).find((key) => showSetting[key])) != null ? _a7 : "";
      setSelection(firstNotHiddenTabName);
    }
  }, [isMobile, showSetting]);
  return isMobile ? /* @__PURE__ */ React33.createElement(
    MobileSettingModal,
    {
      open,
      onOpenChange,
      selection,
      setSelection,
      showSetting,
      hideSettingByTabName,
      resetSelection
    },
    children
  ) : /* @__PURE__ */ React33.createElement(
    DesktopSettingModal,
    {
      open,
      onOpenChange,
      selection,
      setSelection,
      showSetting,
      hideSettingByTabName,
      resetSelection
    },
    children
  );
};
var MobileSettingModal = ({
  open,
  onOpenChange,
  selection,
  setSelection,
  showSetting,
  hideSettingByTabName,
  resetSelection,
  children = /* @__PURE__ */ React33.createElement(React33.Fragment, null)
}) => {
  return /* @__PURE__ */ React33.createElement(Sheet.Root, { open, onOpenChange }, /* @__PURE__ */ React33.createElement(Sheet.Trigger, { asChild: true }, children), /* @__PURE__ */ React33.createElement(
    Sheet.Content,
    {
      css: {
        bg: "$surface_dim",
        overflowY: "auto"
      }
    },
    /* @__PURE__ */ React33.createElement(Sheet.Title, { css: { py: "$10", px: "$8", alignItems: "center" } }, /* @__PURE__ */ React33.createElement(Flex, { direction: "row", justify: "between", css: { w: "100%" } }, !selection ? /* @__PURE__ */ React33.createElement(Text, { variant: "h6", css: { display: "flex" } }, "Settings") : /* @__PURE__ */ React33.createElement(Text, { variant: "h6", css: { display: "flex" } }, /* @__PURE__ */ React33.createElement(
      Box,
      {
        as: "span",
        css: { r: "$round", mr: "$2" },
        onClick: resetSelection
      },
      /* @__PURE__ */ React33.createElement(ChevronLeftIcon, null)
    ), (selection == null ? void 0 : selection.charAt(0).toUpperCase()) + selection.slice(1)), /* @__PURE__ */ React33.createElement(Sheet.Close, null, /* @__PURE__ */ React33.createElement(IconButton, { as: "div", "data-testid": "dialog_cross_icon" }, /* @__PURE__ */ React33.createElement(CrossIcon3, null))))),
    /* @__PURE__ */ React33.createElement(HorizontalDivider, null),
    !selection ? /* @__PURE__ */ React33.createElement(
      Flex,
      {
        direction: "column",
        css: {
          px: "$8",
          pb: "$8",
          overflowY: "auto"
        }
      },
      settingsList.filter(({ tabName }) => showSetting[tabName]).map(({ icon: Icon4, tabName, title }) => {
        return /* @__PURE__ */ React33.createElement(
          Box,
          {
            key: tabName,
            value: tabName,
            onClick: () => {
              setSelection(tabName);
            },
            as: "div",
            css: {
              all: "unset",
              fontFamily: "$sans",
              py: "$10",
              display: "flex",
              alignItems: "center",
              fontSize: "$sm",
              lineHeight: "$sm",
              color: "$on_surface_high",
              userSelect: "none",
              gap: "$8",
              cursor: "pointer",
              "&:hover": {
                bg: "$surface_brighter",
                r: "$1",
                gap: "$8",
                border: "none"
              },
              borderBottom: "1px solid $border_default"
            }
          },
          /* @__PURE__ */ React33.createElement(Icon4, null),
          title
        );
      })
    ) : /* @__PURE__ */ React33.createElement(
      Box,
      {
        direction: "column",
        css: {
          overflowY: "scroll",
          px: "$8",
          py: "$10",
          maxHeight: "70vh",
          overflowX: "hidden"
        }
      },
      settingsList.filter(
        ({ tabName }) => showSetting[tabName] && selection === tabName
      ).map(({ content: Content11, title, tabName }) => {
        return /* @__PURE__ */ React33.createElement(
          Content11,
          {
            key: title,
            setHide: hideSettingByTabName(tabName)
          }
        );
      })
    )
  ));
};
var DesktopSettingModal = ({
  open,
  onOpenChange,
  selection,
  setSelection,
  showSetting,
  hideSettingByTabName,
  resetSelection,
  children = /* @__PURE__ */ React33.createElement(React33.Fragment, null)
}) => {
  return /* @__PURE__ */ React33.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ React33.createElement(Dialog.Trigger, { asChild: true }, children), /* @__PURE__ */ React33.createElement(Dialog.Portal, null, /* @__PURE__ */ React33.createElement(Dialog.Overlay, null), /* @__PURE__ */ React33.createElement(
    Dialog.Content,
    {
      css: {
        w: "min(800px, 90%)",
        height: "min(656px, 90%)",
        p: 0,
        r: "$4"
      }
    },
    /* @__PURE__ */ React33.createElement(
      Tabs.Root,
      {
        value: selection,
        activationMode: "automatic",
        onValueChange: setSelection,
        css: { size: "100%", position: "relative" }
      },
      /* @__PURE__ */ React33.createElement(
        Tabs.List,
        {
          css: {
            w: "18.625rem",
            flexDirection: "column",
            bg: "$background_default",
            p: "$14 $10",
            borderTopLeftRadius: "$4",
            borderBottomLeftRadius: "$4"
          }
        },
        /* @__PURE__ */ React33.createElement(Text, { variant: "h5" }, "Settings "),
        /* @__PURE__ */ React33.createElement(
          Flex,
          {
            direction: "column",
            css: { mx: 0, overflowY: "auto", pt: "$10" }
          },
          settingsList.filter(({ tabName }) => showSetting[tabName]).map(({ icon: Icon4, tabName, title }) => {
            return /* @__PURE__ */ React33.createElement(
              Tabs.Trigger,
              {
                key: tabName,
                value: tabName,
                css: { gap: "$8" }
              },
              /* @__PURE__ */ React33.createElement(Icon4, null),
              title
            );
          })
        )
      ),
      selection && /* @__PURE__ */ React33.createElement(
        Flex,
        {
          direction: "column",
          css: {
            flex: "1 1 0",
            minWidth: 0,
            mr: "$4"
          }
        },
        settingsList.filter(({ tabName }) => showSetting[tabName]).map(({ content: Content11, title, tabName }) => {
          return /* @__PURE__ */ React33.createElement(
            Tabs.Content,
            {
              key: tabName,
              value: tabName,
              className: settingContent()
            },
            /* @__PURE__ */ React33.createElement(
              SettingsContentHeader,
              {
                onBack: resetSelection,
                isMobile: false
              },
              title
            ),
            /* @__PURE__ */ React33.createElement(Content11, { setHide: hideSettingByTabName(tabName) })
          );
        })
      )
    ),
    /* @__PURE__ */ React33.createElement(
      Dialog.Close,
      {
        css: { position: "absolute", right: "$10", top: "$10" }
      },
      /* @__PURE__ */ React33.createElement(IconButton, { as: "div", "data-testid": "dialog_cross_icon" }, /* @__PURE__ */ React33.createElement(CrossIcon3, null))
    )
  )));
};
var SettingsContentHeader = ({ children, isMobile, onBack }) => {
  return /* @__PURE__ */ React33.createElement(
    Text,
    {
      variant: "h6",
      css: { mb: "$12", display: "flex", alignItems: "center" }
    },
    isMobile && /* @__PURE__ */ React33.createElement(
      Box,
      {
        as: "span",
        css: { bg: "$surface_bright", mr: "$4", r: "$round", p: "$2" },
        onClick: onBack
      },
      /* @__PURE__ */ React33.createElement(ChevronLeftIcon, null)
    ),
    children
  );
};
var SettingsModal_default = SettingsModal;

// src/Prebuilt/components/AudioVideoToggle.tsx
var krispPlugin = new HMSKrispPlugin();
var Options = ({
  options,
  selectedDeviceId,
  onClick
}) => {
  return /* @__PURE__ */ React34.createElement(React34.Fragment, null, options == null ? void 0 : options.map((option) => /* @__PURE__ */ React34.createElement(
    Dropdown.Item,
    {
      key: option.label,
      css: {
        backgroundColor: "$surface_dim",
        p: "$4 $8",
        h: "$15",
        fontSize: "$xs",
        justifyContent: "space-between",
        color: selectedDeviceId === option.deviceId ? "$primary_bright" : ""
      },
      onClick: () => {
        onClick(option.deviceId);
      }
    },
    option.label,
    selectedDeviceId === option.deviceId ? /* @__PURE__ */ React34.createElement(CheckIcon, { width: 16, height: 16 }) : null
  )));
};
var OptionLabel = ({
  children,
  icon
}) => {
  return /* @__PURE__ */ React34.createElement(
    Dropdown.Label,
    {
      css: {
        h: "$16",
        p: "$4 $8",
        color: "$on_surface_medium",
        bg: "transparent",
        fontSize: "$xs",
        gap: "$4",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ React34.createElement(
      Flex,
      {
        css: {
          alignItems: "center",
          justifyContent: "center",
          "& svg": { size: "$8" }
        }
      },
      icon
    ),
    " ",
    children
  );
};
var useNoiseCancellationWithPlugin = () => {
  var _a7;
  const actions = useHMSActions8();
  const [inProgress, setInProgress] = useState10(false);
  const [, setNoiseCancellationEnabled] = useSetNoiseCancellation();
  const isEnabledForRoom = (_a7 = useHMSStore9(selectRoom)) == null ? void 0 : _a7.isNoiseCancellationEnabled;
  const setNoiseCancellationWithPlugin = useCallback9(
    (enabled) => __async(void 0, null, function* () {
      if (!isEnabledForRoom || inProgress) {
        return;
      }
      if (!krispPlugin.checkSupport().isSupported) {
        throw Error("Krisp plugin is not supported");
      }
      setInProgress(true);
      if (enabled) {
        yield actions.addPluginToAudioTrack(krispPlugin);
      } else {
        yield actions.removePluginFromAudioTrack(krispPlugin);
      }
      setNoiseCancellationEnabled(enabled);
      setInProgress(false);
    }),
    [actions, inProgress, isEnabledForRoom, setNoiseCancellationEnabled]
  );
  return {
    setNoiseCancellationWithPlugin,
    inProgress
  };
};
var NoiseCancellation = ({
  actionTile,
  iconOnly,
  setOpenOptionsSheet
}) => {
  const localPeerAudioTrackID = useHMSStore9(selectLocalAudioTrackID);
  const isNoiseCancellationEnabled = useIsNoiseCancellationEnabled();
  const { setNoiseCancellationWithPlugin, inProgress } = useNoiseCancellationWithPlugin();
  const room = useHMSStore9(selectRoom);
  const isKrispPluginAdded = useHMSStore9(
    selectIsLocalAudioPluginPresent(krispPlugin.getName())
  );
  if (!krispPlugin.isSupported() || !room.isNoiseCancellationEnabled || !localPeerAudioTrackID) {
    return null;
  }
  if (actionTile) {
    return /* @__PURE__ */ React34.createElement(
      ActionTile.Root,
      {
        active: isNoiseCancellationEnabled && isKrispPluginAdded,
        disable: inProgress,
        onClick: () => __async(void 0, null, function* () {
          yield setNoiseCancellationWithPlugin(!isNoiseCancellationEnabled);
          setOpenOptionsSheet == null ? void 0 : setOpenOptionsSheet(false);
        })
      },
      /* @__PURE__ */ React34.createElement(AudioLevelIcon, null),
      /* @__PURE__ */ React34.createElement(ActionTile.Title, null, isNoiseCancellationEnabled ? "Noise Reduced" : "Reduce Noise")
    );
  }
  if (iconOnly) {
    return /* @__PURE__ */ React34.createElement(
      Tooltip,
      {
        title: isNoiseCancellationEnabled ? "Noise Reduced" : "Reduce Noise"
      },
      /* @__PURE__ */ React34.createElement(
        IconButton_default,
        {
          onClick: () => __async(void 0, null, function* () {
            yield setNoiseCancellationWithPlugin(!isNoiseCancellationEnabled);
          }),
          disabled: inProgress,
          css: {
            bg: isNoiseCancellationEnabled && isKrispPluginAdded ? "$surface_brighter" : "$background_dim",
            borderColor: isNoiseCancellationEnabled && isKrispPluginAdded ? "$border_brighter" : "$border_bright"
          }
        },
        /* @__PURE__ */ React34.createElement(AudioLevelIcon, null)
      )
    );
  }
  return /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(Dropdown.ItemSeparator, { css: { mx: 0 } }), /* @__PURE__ */ React34.createElement(
    Dropdown.Item,
    {
      css: {
        p: "$4 $8",
        h: "$15",
        fontSize: "$xs",
        justifyContent: "space-between"
      },
      onClick: (e) => __async(void 0, null, function* () {
        e.preventDefault();
        yield setNoiseCancellationWithPlugin(!isNoiseCancellationEnabled);
      })
    },
    /* @__PURE__ */ React34.createElement(
      Text,
      {
        css: {
          display: "flex",
          alignItems: "center",
          gap: "$2",
          fontSize: "$xs",
          "& svg": { size: "$8" }
        }
      },
      /* @__PURE__ */ React34.createElement(AudioLevelIcon, null),
      "Reduce Noise"
    ),
    /* @__PURE__ */ React34.createElement(
      Switch,
      {
        id: "noise_cancellation",
        checked: isNoiseCancellationEnabled && isKrispPluginAdded,
        disabled: inProgress,
        onClick: (e) => e.stopPropagation(),
        onCheckedChange: (value) => __async(void 0, null, function* () {
          yield setNoiseCancellationWithPlugin(value);
        })
      }
    )
  ), /* @__PURE__ */ React34.createElement(Dropdown.ItemSeparator, { css: { mx: 0 } }));
};
var AudioOutputLabel = ({ deviceId }) => {
  const { playing, setPlaying, audioRef } = useAudioOutputTest({ deviceId });
  return /* @__PURE__ */ React34.createElement(OptionLabel, { icon: /* @__PURE__ */ React34.createElement(SpeakerIcon2, null) }, /* @__PURE__ */ React34.createElement(Box, { css: { flex: "1 1 0" } }, "Speakers"), /* @__PURE__ */ React34.createElement(
    Text,
    {
      variant: "xs",
      css: { color: "$primary_bright", "&:hover": { cursor: "pointer" } },
      onClick: () => __async(void 0, null, function* () {
        var _a7;
        if (playing) {
          return;
        }
        yield (_a7 = audioRef.current) == null ? void 0 : _a7.play();
      })
    },
    /* @__PURE__ */ React34.createElement(
      "audio",
      {
        ref: audioRef,
        src: TEST_AUDIO_URL,
        onEnded: () => setPlaying(false),
        onPlay: () => setPlaying(true),
        style: { display: "none" }
      }
    ),
    playing ? "Playing Sound..." : "Play Test Sound"
  ));
};
var AudioSettings = ({ onClick }) => {
  return /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
    Dropdown.Item,
    {
      css: {
        backgroundColor: "$surface_dim",
        p: "$4 $8",
        h: "$15",
        alignItems: "center",
        gap: "$2",
        fontSize: "$xs",
        "& svg": { size: "$8" }
      },
      onClick
    },
    /* @__PURE__ */ React34.createElement(SettingsIcon2, null),
    " Audio Settings"
  ));
};
var AudioVideoToggle = ({
  hideOptions = false
}) => {
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices2(
    (error) => {
      ToastManager.addToast({
        title: error.message,
        variant: "error",
        duration: 2e3
      });
    }
  );
  const { videoInput, audioInput, audioOutput } = allDevices;
  const localPeer = useHMSStore9(selectLocalPeer);
  const { isLocalVideoEnabled, isLocalAudioEnabled, toggleAudio, toggleVideo } = useAVToggle2();
  const actions = useHMSActions8();
  const vanillaStore = useHMSVanillaStore4();
  const videoTrackId = useHMSStore9(selectLocalVideoTrackID2);
  const localVideoTrack = useHMSStore9(selectVideoTrackByID2(videoTrackId));
  const roomState = useHMSStore9(selectRoomState3);
  const hasAudioDevices = Number(audioInput == null ? void 0 : audioInput.length) > 0;
  const hasVideoDevices = Number(videoInput == null ? void 0 : videoInput.length) > 0;
  const shouldShowAudioOutput = "setSinkId" in HTMLMediaElement.prototype && Number(audioOutput == null ? void 0 : audioOutput.length) > 0;
  const { screenType } = useRoomLayoutConferencingScreen();
  const [showSettings, setShowSettings] = useState10(false);
  const isKrispPluginAdded = useHMSStore9(
    selectIsLocalAudioPluginPresent(krispPlugin.getName())
  );
  const isNoiseCancellationEnabled = useIsNoiseCancellationEnabled();
  const { setNoiseCancellationWithPlugin, inProgress } = useNoiseCancellationWithPlugin();
  const showMuteIcon = !isLocalAudioEnabled || !toggleAudio;
  useEffect12(() => {
    (() => __async(void 0, null, function* () {
      var _a7;
      const isEnabledForRoom = (_a7 = vanillaStore.getState(selectRoom)) == null ? void 0 : _a7.isNoiseCancellationEnabled;
      if (isEnabledForRoom && isNoiseCancellationEnabled && !isKrispPluginAdded && !inProgress && (localPeer == null ? void 0 : localPeer.audioTrack)) {
        try {
          yield setNoiseCancellationWithPlugin(true);
          ToastManager.addToast({
            title: `Noise Reduction Enabled`,
            variant: "standard",
            duration: 2e3,
            icon: /* @__PURE__ */ React34.createElement(AudioLevelIcon, null)
          });
        } catch (error) {
          console.error(error);
        }
      }
    }))();
  }, [isNoiseCancellationEnabled, localPeer == null ? void 0 : localPeer.audioTrack, inProgress]);
  if (!toggleAudio && !toggleVideo) {
    return null;
  }
  return /* @__PURE__ */ React34.createElement(Fragment3, null, toggleAudio ? /* @__PURE__ */ React34.createElement(
    IconButtonWithOptions,
    {
      disabled: !toggleAudio,
      hideOptions: hideOptions || !hasAudioDevices,
      onDisabledClick: toggleAudio,
      testid: "audio_toggle_btn",
      tooltipMessage: `Turn ${isLocalAudioEnabled ? "off" : "on"} audio (${isMacOS ? "\u2318" : "ctrl"} + d)`,
      icon: !isLocalAudioEnabled ? /* @__PURE__ */ React34.createElement(MicOffIcon, null) : /* @__PURE__ */ React34.createElement(MicOnIcon2, null),
      active: isLocalAudioEnabled,
      onClick: toggleAudio,
      key: "toggleAudio"
    },
    /* @__PURE__ */ React34.createElement(Dropdown.Group, null, /* @__PURE__ */ React34.createElement(OptionLabel, { icon: /* @__PURE__ */ React34.createElement(MicOnIcon2, null) }, /* @__PURE__ */ React34.createElement(Box, { css: { flex: "1 1 0" } }, !shouldShowAudioOutput ? "Audio" : "Microphone"), !showMuteIcon && /* @__PURE__ */ React34.createElement(AudioLevel, { trackId: localPeer == null ? void 0 : localPeer.audioTrack })), /* @__PURE__ */ React34.createElement(
      Options,
      {
        options: audioInput,
        selectedDeviceId: selectedDeviceIDs.audioInput,
        onClick: (deviceId) => updateDevice({ deviceId, deviceType: DeviceType2.audioInput })
      }
    )),
    /* @__PURE__ */ React34.createElement(Dropdown.ItemSeparator, { css: { mx: 0 } }),
    shouldShowAudioOutput && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
      AudioOutputLabel,
      {
        deviceId: selectedDeviceIDs.audioOutput || ""
      }
    ), /* @__PURE__ */ React34.createElement(Dropdown.Group, null, /* @__PURE__ */ React34.createElement(
      Options,
      {
        options: audioOutput,
        selectedDeviceId: selectedDeviceIDs.audioOutput,
        onClick: (deviceId) => updateDevice({
          deviceId,
          deviceType: DeviceType2.audioOutput
        })
      }
    ))),
    /* @__PURE__ */ React34.createElement(NoiseCancellation, null),
    /* @__PURE__ */ React34.createElement(AudioSettings, { onClick: () => setShowSettings(true) })
  ) : null, toggleVideo ? /* @__PURE__ */ React34.createElement(
    IconButtonWithOptions,
    {
      disabled: !toggleVideo,
      hideOptions: hideOptions || !hasVideoDevices,
      onDisabledClick: toggleVideo,
      tooltipMessage: `Turn ${isLocalVideoEnabled ? "off" : "on"} video (${isMacOS ? "\u2318" : "ctrl"} + e)`,
      testid: "video_toggle_btn",
      icon: !isLocalVideoEnabled ? /* @__PURE__ */ React34.createElement(VideoOffIcon, null) : /* @__PURE__ */ React34.createElement(VideoOnIcon2, null),
      key: "toggleVideo",
      active: isLocalVideoEnabled,
      onClick: toggleVideo
    },
    /* @__PURE__ */ React34.createElement(
      Options,
      {
        options: videoInput,
        selectedDeviceId: selectedDeviceIDs.videoInput,
        onClick: (deviceId) => updateDevice({ deviceId, deviceType: DeviceType2.videoInput })
      }
    )
  ) : null, (localVideoTrack == null ? void 0 : localVideoTrack.facingMode) && roomState === HMSRoomState3.Preview && (isIOS || isAndroid) ? /* @__PURE__ */ React34.createElement(Tooltip, { title: "Switch Camera", key: "switchCamera" }, /* @__PURE__ */ React34.createElement(
    IconButton_default,
    {
      onClick: () => __async(void 0, null, function* () {
        try {
          yield actions.switchCamera();
        } catch (e) {
          ToastManager.addToast({
            title: `Error while flipping camera ${e.message || ""}`,
            variant: "error"
          });
        }
      })
    },
    /* @__PURE__ */ React34.createElement(CameraFlipIcon, null)
  )) : null, showSettings && /* @__PURE__ */ React34.createElement(
    SettingsModal_default,
    {
      open: showSettings,
      onOpenChange: () => setShowSettings(false),
      screenType
    }
  ));
};

// src/Prebuilt/components/CaptionIcon.tsx
import React35 from "react";
import {
  selectIsTranscriptionEnabled,
  useHMSStore as useHMSStore10
} from "@100mslive/react-sdk";
import { ClosedCaptionIcon, OpenCaptionIcon } from "@100mslive/react-icons";
var CaptionIcon = () => {
  const isCaptionPresent = useHMSStore10(selectIsTranscriptionEnabled);
  const [isCaption, setIsCaption] = useSetIsCaptionEnabled();
  const onClick = () => {
    setIsCaption(!isCaption);
  };
  if (!isCaptionPresent) {
    return null;
  }
  return /* @__PURE__ */ React35.createElement(
    Tooltip,
    {
      title: isCaption ? "Hide closed captions" : "Show closed captions"
    },
    /* @__PURE__ */ React35.createElement(IconButton_default, { "data-testid": "caption_btn", onClick }, isCaption ? /* @__PURE__ */ React35.createElement(ClosedCaptionIcon, { width: "20", height: "20px" }) : /* @__PURE__ */ React35.createElement(OpenCaptionIcon, { width: "20", height: "20px" }))
  );
};

// src/Prebuilt/components/EmojiReaction.jsx
import React37, { useState as useState12 } from "react";
import { useMedia as useMedia5 } from "react-use";
import data from "@emoji-mart/data/sets/14/apple.json";
import { init } from "emoji-mart";
import {
  selectAvailableRoleNames as selectAvailableRoleNames2,
  selectIsConnectedToRoom as selectIsConnectedToRoom2,
  selectLocalPeerID,
  useCustomEvent,
  useHMSStore as useHMSStore12
} from "@100mslive/react-sdk";
import { EmojiIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/Footer/EmojiCard.jsx
import React36 from "react";
var emojiReactionList = [
  [
    { emojiId: "+1" },
    { emojiId: "-1" },
    { emojiId: "wave" },
    { emojiId: "clap" },
    { emojiId: "fire" }
  ],
  [
    { emojiId: "tada" },
    { emojiId: "heart_eyes" },
    { emojiId: "joy" },
    { emojiId: "open_mouth" },
    { emojiId: "sob" }
  ]
];
var EmojiCard = ({ sendReaction }) => {
  return emojiReactionList.map((emojiLine, index) => /* @__PURE__ */ React36.createElement(Flex, { key: index, justify: "between", css: { mb: "$8" } }, emojiLine.map((emoji) => /* @__PURE__ */ React36.createElement(
    EmojiContainer,
    {
      key: emoji.emojiId,
      onClick: () => sendReaction(emoji.emojiId)
    },
    /* @__PURE__ */ React36.createElement("em-emoji", { id: emoji.emojiId, size: "100%", set: "apple" })
  ))));
};
var EmojiContainer = styled("span", {
  position: "relative",
  cursor: "pointer",
  width: "$16",
  height: "$16",
  p: "$4",
  "&:hover": {
    p: "7px",
    bg: "$surface_brighter",
    borderRadius: "$1"
  }
});

// src/Prebuilt/components/hooks/useDropdownList.ts
import { useEffect as useEffect13 } from "react";
var useDropdownList = ({
  name,
  open
}) => {
  const [dropdownList = [], setDropdownList] = useSetAppDataByKey(
    APP_DATA.dropdownList
  );
  useEffect13(() => {
    if (open) {
      if (!dropdownList.includes(name)) {
        setDropdownList([...dropdownList, name]);
      }
    } else {
      const index = dropdownList.indexOf(name);
      if (index >= 0) {
        const newDropdownList = [...dropdownList];
        newDropdownList.splice(index, 1);
        setDropdownList(newDropdownList);
      }
    }
  }, [open, name]);
};

// src/Prebuilt/common/hooks.ts
import { useCallback as useCallback10, useEffect as useEffect14, useMemo as useMemo5, useRef as useRef11, useState as useState11 } from "react";
import { useMedia as useMedia4 } from "react-use";
import { JoinForm_JoinBtnType as JoinForm_JoinBtnType2 } from "@100mslive/types-prebuilt/elements/join_form";
import {
  parsedUserAgent as parsedUserAgent3,
  selectAvailableRoleNames,
  selectIsAllowedToPublish,
  selectIsConnectedToRoom,
  selectLocalPeerRole,
  selectPeerCount as selectPeerCount2,
  selectPeerMetadata,
  selectPeers,
  selectPeersByRoles,
  selectRecordingState,
  selectRemotePeers,
  selectRolesMap,
  useHMSActions as useHMSActions9,
  useHMSStore as useHMSStore11,
  useHMSVanillaStore as useHMSVanillaStore5
} from "@100mslive/react-sdk";
var useFilteredRoles = () => {
  var _a7;
  const { elements } = useRoomLayoutConferencingScreen();
  return ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.roles_whitelist) || [];
};
var useDefaultChatSelection = () => {
  var _a7;
  const { elements } = useRoomLayoutConferencingScreen();
  const roles = useFilteredRoles();
  if ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.public_chat_enabled) {
    return CHAT_SELECTOR.EVERYONE;
  }
  if (roles.length > 0) {
    return roles[0];
  }
  return "";
};
var useShowStreamingUI = () => {
  var _a7, _b7, _c;
  const layout = useRoomLayout();
  const { join_form } = ((_c = (_b7 = (_a7 = layout == null ? void 0 : layout.screens) == null ? void 0 : _a7.preview) == null ? void 0 : _b7.default) == null ? void 0 : _c.elements) || {};
  return (join_form == null ? void 0 : join_form.join_btn_type) === JoinForm_JoinBtnType2.JOIN_BTN_TYPE_JOIN_AND_GO_LIVE;
};
var useParticipants = (params) => {
  var _a7;
  const isConnected = useHMSStore11(selectIsConnectedToRoom);
  const peerCount = useHMSStore11(selectPeerCount2);
  const availableRoles = useHMSStore11(selectAvailableRoleNames);
  let participantList = useHMSStore11(
    isConnected ? selectPeers : selectRemotePeers
  );
  const rolesWithParticipants = Array.from(
    new Set(participantList.map((peer) => peer.roleName))
  );
  const vanillaStore = useHMSVanillaStore5();
  if ((_a7 = params == null ? void 0 : params.metadata) == null ? void 0 : _a7.isHandRaised) {
    participantList = participantList.filter((peer) => {
      return vanillaStore.getState(selectPeerMetadata(peer.id)).isHandRaised;
    });
  }
  if ((params == null ? void 0 : params.role) && availableRoles.includes(params.role)) {
    participantList = participantList.filter(
      (peer) => peer.roleName === params.role
    );
  }
  if (params == null ? void 0 : params.search) {
    const search = params.search;
    participantList = participantList.filter(
      (peer) => peer.name.toLowerCase().includes(search)
    );
  }
  return {
    participants: participantList,
    isConnected,
    peerCount,
    rolesWithParticipants
  };
};
var useIsLandscape = () => {
  const isMobile = parsedUserAgent3.getDevice().type === "mobile";
  const isLandscape = useMedia4(config.media.ls);
  return isMobile && isLandscape;
};
var useLandscapeHLSStream = () => {
  const isLandscape = useIsLandscape();
  const { screenType } = useRoomLayoutConferencingScreen();
  return isLandscape && screenType === "hls_live_streaming";
};
var useMobileHLSStream = () => {
  const isMobile = useMedia4(config.media.md);
  const { screenType } = useRoomLayoutConferencingScreen();
  return isMobile && screenType === "hls_live_streaming";
};
var useKeyboardHandler = (isPaused, hlsPlayer) => {
  const handleKeyEvent = useCallback10(
    (event) => __async(void 0, null, function* () {
      switch (event.key) {
        case " ":
          if (isPaused) {
            yield hlsPlayer == null ? void 0 : hlsPlayer.play();
          } else {
            hlsPlayer == null ? void 0 : hlsPlayer.pause();
          }
          break;
        case "ArrowRight":
          hlsPlayer == null ? void 0 : hlsPlayer.seekTo((hlsPlayer == null ? void 0 : hlsPlayer.getVideoElement().currentTime) + 10);
          break;
        case "ArrowLeft":
          hlsPlayer == null ? void 0 : hlsPlayer.seekTo((hlsPlayer == null ? void 0 : hlsPlayer.getVideoElement().currentTime) - 10);
          break;
      }
    }),
    [hlsPlayer, isPaused]
  );
  return handleKeyEvent;
};
var useRecordingHandler = () => {
  const hmsActions = useHMSActions9();
  const recordingState = useHMSStore11(selectRecordingState);
  const [isRecordingLoading, setIsRecordingLoading] = useState11(false);
  const [recordingStarted, setRecordingState] = useSetAppDataByKey(
    APP_DATA.recordingStarted
  );
  useEffect14(() => {
    if (recordingState.browser.error && recordingStarted) {
      setRecordingState(false);
    }
  }, [recordingStarted, recordingState.browser.error, setRecordingState]);
  const startRecording = useCallback10(
    (resolution = null) => __async(void 0, null, function* () {
      try {
        setRecordingState(true);
        setIsRecordingLoading(true);
        yield hmsActions.startRTMPOrRecording({
          resolution: getResolution(resolution),
          record: true
        });
      } catch (error) {
        const err = error;
        if (err.message.includes("stream already running")) {
          ToastManager.addToast({
            title: "Recording already running",
            variant: "error"
          });
        } else {
          ToastManager.addToast({
            title: err.message,
            variant: "error"
          });
        }
        setRecordingState(false);
      }
      setIsRecordingLoading(false);
    }),
    [hmsActions, setRecordingState]
  );
  return {
    recordingStarted,
    startRecording,
    isRecordingLoading
  };
};
function getResolution(recordingResolution) {
  if (!recordingResolution) {
    return void 0;
  }
  const resolution = RTMP_RECORD_DEFAULT_RESOLUTION;
  if (recordingResolution.width) {
    resolution.width = recordingResolution.width;
  }
  if (recordingResolution.height) {
    resolution.height = recordingResolution.height;
  }
  return resolution;
}
function useWaitingRoomInfo() {
  const localPeerRole = useHMSStore11(selectLocalPeerRole);
  const { video, audio, screen } = useHMSStore11(selectIsAllowedToPublish);
  const isScreenShareAllowed = isScreenshareSupported();
  const roles = useHMSStore11(selectRolesMap);
  const peersByRoles = useHMSStore11(
    selectPeersByRoles((localPeerRole == null ? void 0 : localPeerRole.subscribeParams.subscribeToRoles) || [])
  );
  const isNotAllowedToPublish = !(video || audio || screen && isScreenShareAllowed);
  const isScreenOnlyPublishParams = screen && !(video || audio);
  const hasSubscribedRolePublishing = useMemo5(() => {
    return peersByRoles.some((peer) => {
      var _a7;
      if (peer.roleName && roles[peer.roleName] && !peer.isLocal) {
        return !!((_a7 = roles[peer.roleName].publishParams) == null ? void 0 : _a7.allowed.length);
      }
      return false;
    });
  }, [peersByRoles, roles]);
  return {
    isNotAllowedToPublish,
    isScreenOnlyPublishParams,
    hasSubscribedRolePublishing
  };
}

// src/Prebuilt/components/EmojiReaction.jsx
init({ data });
var EmojiReaction = ({ showCard = false }) => {
  const [open, setOpen] = useState12(false);
  const isConnected = useHMSStore12(selectIsConnectedToRoom2);
  const { elements } = useRoomLayoutConferencingScreen();
  useDropdownList({ open, name: "EmojiReaction" });
  const roles = useHMSStore12(selectAvailableRoleNames2);
  const localPeerId = useHMSStore12(selectLocalPeerID);
  const isMobile = useMedia5(config.media.md);
  const isLandscape = useMedia5(config.media.ls);
  const isMobileHLSStream = useMobileHLSStream();
  const isLandscapeStream = useLandscapeHLSStream();
  const { sendEvent } = useCustomEvent({
    type: EMOJI_REACTION_TYPE
  });
  const sendReaction = (emojiId) => __async(void 0, null, function* () {
    var _a7;
    const data3 = {
      type: EMOJI_REACTION_TYPE,
      emojiId,
      senderId: localPeerId
    };
    sendEvent(data3, { roleNames: roles });
    (_a7 = window.showFlyingEmoji) == null ? void 0 : _a7.call(window, { emojiId, senderId: localPeerId });
  });
  if (!isConnected || !elements.emoji_reactions) {
    return null;
  }
  if (showCard) {
    return /* @__PURE__ */ React37.createElement(EmojiCard, { sendReaction });
  }
  return /* @__PURE__ */ React37.createElement(Dropdown.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React37.createElement(Dropdown.Trigger, { asChild: true, "data-testid": "emoji_reaction_btn" }, /* @__PURE__ */ React37.createElement(
    IconButton_default,
    {
      css: isMobile || isLandscape ? {
        bg: "$surface_default",
        r: "$round",
        border: "1px solid $border_bright"
      } : {}
    },
    /* @__PURE__ */ React37.createElement(Tooltip, { title: "Emoji reaction" }, /* @__PURE__ */ React37.createElement(Box, null, /* @__PURE__ */ React37.createElement(EmojiIcon, null)))
  )), /* @__PURE__ */ React37.createElement(
    Dropdown.Content,
    {
      sideOffset: 5,
      align: isMobileHLSStream || isLandscapeStream ? "end" : "center",
      css: { p: "$8", bg: "$surface_default" }
    },
    /* @__PURE__ */ React37.createElement(EmojiCard, { sendReaction })
  ));
};

// src/Prebuilt/components/Interpreting/Int2En.tsx
import React38 from "react";
import {
  selectLocalPeerID as selectLocalPeerID2,
  useHMSActions as useHMSActions10,
  useHMSStore as useHMSStore13
} from "@100mslive/react-sdk";
var Int2EnButton = () => {
  const hmsActions = useHMSActions10();
  const localPeerId = useHMSStore13(selectLocalPeerID2);
  const changeRole = () => {
    hmsActions.changeRoleOfPeer(localPeerId, "interpreter-en", true);
  };
  return /* @__PURE__ */ React38.createElement(Tooltip, { key: "int2en", title: "Interpreting to English" }, /* @__PURE__ */ React38.createElement(IconButton_default, { onClick: changeRole }, /* @__PURE__ */ React38.createElement("div", { className: "text-xs text-slate-200 rounded-lg" }, "EN")));
};
var Int2En_default = Int2EnButton;

// src/Prebuilt/components/Interpreting/Int2Fr.tsx
import React39 from "react";
import {
  selectLocalPeerID as selectLocalPeerID3,
  useHMSActions as useHMSActions11,
  useHMSStore as useHMSStore14
} from "@100mslive/react-sdk";
var Int2FrButton = () => {
  const hmsActions = useHMSActions11();
  const localPeerId = useHMSStore14(selectLocalPeerID3);
  const changeRole = () => {
    hmsActions.changeRoleOfPeer(localPeerId, "interpreter-fr", true);
  };
  return /* @__PURE__ */ React39.createElement(Tooltip, { key: "int2fr", title: "Interpr\xE9tation vers le fran\xE7ais" }, /* @__PURE__ */ React39.createElement(IconButton_default, { onClick: changeRole, className: "w-auto" }, /* @__PURE__ */ React39.createElement("div", { className: "text-xs text-slate-200 rounded-lg" }, "FR")));
};
var Int2Fr_default = Int2FrButton;

// src/Prebuilt/components/Leave/LeaveRoom.tsx
import React45 from "react";
import { useMedia as useMedia6 } from "react-use";
import {
  selectHLSState as selectHLSState3,
  selectIsConnectedToRoom as selectIsConnectedToRoom5,
  selectPeersByCondition,
  selectPermissions as selectPermissions4,
  selectRolesMap as selectRolesMap2,
  useHMSActions as useHMSActions12,
  useHMSStore as useHMSStore17
} from "@100mslive/react-sdk";

// src/Prebuilt/components/Leave/DesktopLeaveRoom.tsx
import React43, { Fragment as Fragment4, useState as useState13 } from "react";
import {
  selectIsConnectedToRoom as selectIsConnectedToRoom3,
  selectPermissions as selectPermissions2,
  useHMSStore as useHMSStore15,
  useRecordingStreaming as useRecordingStreaming3
} from "@100mslive/react-sdk";
import { ExitIcon, StopIcon, VerticalMenuIcon as VerticalMenuIcon2 } from "@100mslive/react-icons";

// src/Prebuilt/components/Leave/EndSessionContent.tsx
import React40 from "react";
import { AlertTriangleIcon, CrossIcon as CrossIcon4 } from "@100mslive/react-icons";
var EndSessionContent = ({
  setShowEndStreamAlert,
  leaveRoom,
  isModal = false,
  isStreamingOn = false
}) => {
  return /* @__PURE__ */ React40.createElement(Box, null, /* @__PURE__ */ React40.createElement(
    Flex,
    {
      css: {
        color: "$alert_error_default",
        display: "flex",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ React40.createElement(AlertTriangleIcon, { style: { marginRight: "0.5rem" } }),
    /* @__PURE__ */ React40.createElement(Text, { variant: "lg", css: { color: "inherit", fontWeight: "$semiBold" } }, "End ", isStreamingOn ? "Stream" : "Session"),
    isModal ? null : /* @__PURE__ */ React40.createElement(
      Box,
      {
        css: { color: "$on_surface_high", ml: "auto" },
        onClick: () => setShowEndStreamAlert(false)
      },
      /* @__PURE__ */ React40.createElement(CrossIcon4, null)
    )
  ), /* @__PURE__ */ React40.createElement(
    Text,
    {
      variant: "sm",
      css: { color: "$on_surface_medium", mb: "$8", mt: "$4" }
    },
    "The ",
    isStreamingOn ? "stream" : "session",
    " will end for everyone. You can't undo this action."
  ), /* @__PURE__ */ React40.createElement(Flex, { align: "center", justify: "between", css: { w: "100%", gap: "$8" } }, /* @__PURE__ */ React40.createElement(
    Button,
    {
      outlined: true,
      variant: "standard",
      css: { w: "100%", "@md": { display: "none" } },
      onClick: () => setShowEndStreamAlert(false)
    },
    "Cancel"
  ), /* @__PURE__ */ React40.createElement(
    Button,
    {
      variant: "danger",
      css: { w: "100%" },
      onClick: () => __async(void 0, null, function* () {
        yield leaveRoom({ endStream: true });
        setShowEndStreamAlert(false);
      }),
      id: "stopStream",
      "data-testid": "stop_stream_btn"
    },
    "End ",
    isStreamingOn ? "Stream" : "Session"
  )));
};

// src/Prebuilt/components/Leave/LeaveAtoms.tsx
var LeaveIconButton = styled(IconButton, {
  color: "$on_primary_high",
  h: "$14",
  px: "$4",
  r: "$1",
  bg: "$alert_error_default",
  "&:not([disabled]):hover": {
    bg: "$alert_error_bright"
  },
  "&:not([disabled]):active": {
    bg: "$alert_error_default"
  },
  "@md": {
    mx: 0
  }
});
var MenuTriggerButton = styled(LeaveIconButton, {
  borderLeft: "1px solid $alert_error_dim",
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  px: "$2"
});

// src/Prebuilt/components/Leave/LeaveCard.tsx
import React41 from "react";
var LeaveCard = ({
  icon,
  title,
  subtitle,
  onClick,
  bg,
  titleColor,
  css: css2 = {}
}) => {
  return /* @__PURE__ */ React41.createElement(
    Flex,
    {
      css: __spreadValues({ p: "$10", flexGrow: 1, gap: "$8", bg }, css2),
      onClick
    },
    /* @__PURE__ */ React41.createElement(Box, { css: { color: titleColor } }, icon),
    /* @__PURE__ */ React41.createElement(Box, { css: { gap: "$2" } }, /* @__PURE__ */ React41.createElement(Text, { variant: "lg", css: { color: titleColor } }, title), /* @__PURE__ */ React41.createElement(Text, { variant: "sm", css: { c: "inherit" } }, subtitle))
  );
};

// src/Prebuilt/components/Leave/LeaveSessionContent.tsx
import React42 from "react";
import { AlertTriangleIcon as AlertTriangleIcon2, CrossIcon as CrossIcon5 } from "@100mslive/react-icons";
var LeaveSessionContent = ({
  setShowLeaveRoomAlert,
  leaveRoom,
  isModal = false
}) => {
  return /* @__PURE__ */ React42.createElement(Box, null, /* @__PURE__ */ React42.createElement(
    Flex,
    {
      css: {
        color: "$alert_error_default",
        display: "flex",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ React42.createElement(AlertTriangleIcon2, { style: { marginRight: "0.5rem" } }),
    /* @__PURE__ */ React42.createElement(Text, { variant: "lg", css: { color: "inherit", fontWeight: "$semiBold" } }, "Leave"),
    isModal ? null : /* @__PURE__ */ React42.createElement(
      Box,
      {
        css: { color: "$on_surface_high", ml: "auto" },
        onClick: () => setShowLeaveRoomAlert(false)
      },
      /* @__PURE__ */ React42.createElement(CrossIcon5, null)
    )
  ), /* @__PURE__ */ React42.createElement(Text, { variant: "sm", css: { color: "$on_surface_low", mb: "$8", mt: "$4" } }, "Others will continue after you leave. You can join the session again."), /* @__PURE__ */ React42.createElement(Flex, { align: "center", justify: "between", css: { w: "100%", gap: "$8" } }, /* @__PURE__ */ React42.createElement(
    Button,
    {
      outlined: true,
      variant: "standard",
      css: { w: "100%", "@md": { display: "none" } },
      onClick: () => setShowLeaveRoomAlert(false)
    },
    "Cancel"
  ), /* @__PURE__ */ React42.createElement(
    Button,
    {
      variant: "danger",
      css: { w: "100%" },
      onClick: () => __async(void 0, null, function* () {
        yield leaveRoom();
      }),
      id: "leaveRoom",
      "data-testid": "leave_room"
    },
    "Leave Session"
  )));
};

// src/Prebuilt/components/Leave/DesktopLeaveRoom.tsx
var DesktopLeaveRoom = ({
  leaveRoom,
  screenType,
  endRoom,
  container
}) => {
  const [open, setOpen] = useState13(false);
  const [showLeaveRoomAlert, setShowLeaveRoomAlert] = useState13(false);
  const [showEndStreamAlert, setShowEndStreamAlert] = useState13(false);
  const isConnected = useHMSStore15(selectIsConnectedToRoom3);
  const permissions = useHMSStore15(selectPermissions2);
  const { isStreamingOn } = useRecordingStreaming3();
  const showStream = screenType !== "hls_live_streaming" && isStreamingOn && (permissions == null ? void 0 : permissions.hlsStreaming);
  const showLeaveOptions = (permissions == null ? void 0 : permissions.hlsStreaming) && isStreamingOn || (permissions == null ? void 0 : permissions.endRoom);
  useDropdownList({
    open: open || showEndStreamAlert || showLeaveRoomAlert,
    name: "LeaveRoom"
  });
  if (!permissions || !isConnected) {
    return null;
  }
  return /* @__PURE__ */ React43.createElement(Fragment4, null, showLeaveOptions ? /* @__PURE__ */ React43.createElement(Flex, null, /* @__PURE__ */ React43.createElement(
    LeaveIconButton,
    {
      key: "LeaveRoom",
      "data-testid": "leave_room_btn",
      css: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      onClick: () => setShowLeaveRoomAlert(true)
    },
    /* @__PURE__ */ React43.createElement(Tooltip, { title: "Leave Room" }, /* @__PURE__ */ React43.createElement(Box, null, /* @__PURE__ */ React43.createElement(ExitIcon, { style: { transform: "rotate(180deg)" } })))
  ), /* @__PURE__ */ React43.createElement(Dropdown.Root, { open, onOpenChange: setOpen, modal: false }, /* @__PURE__ */ React43.createElement(
    Dropdown.Trigger,
    {
      asChild: true,
      css: {
        '&[data-state="open"]': {
          bg: "$alert_error_dim"
        }
      }
    },
    /* @__PURE__ */ React43.createElement(MenuTriggerButton, { "data-testid": "leave_end_dropdown_trigger" }, /* @__PURE__ */ React43.createElement(VerticalMenuIcon2, null))
  ), /* @__PURE__ */ React43.createElement(Dropdown.Portal, { container }, /* @__PURE__ */ React43.createElement(
    Dropdown.Content,
    {
      css: { p: 0, w: "$100" },
      alignOffset: -50,
      sideOffset: 10
    },
    /* @__PURE__ */ React43.createElement(
      Dropdown.Item,
      {
        css: {
          bg: "$surface_dim",
          color: "$on_surface_medium",
          "&:hover": {
            bg: "$surface_default",
            color: "$on_surface_high"
          },
          p: "0"
        },
        "data-testid": "just_leave_btn"
      },
      /* @__PURE__ */ React43.createElement(
        LeaveCard,
        {
          title: showStream ? "Leave Stream" : "Leave Session",
          subtitle: `Others will continue after you leave. You can join the ${showStream ? "stream" : "session"} again.`,
          bg: "",
          titleColor: "$on_surface_high",
          icon: /* @__PURE__ */ React43.createElement(
            ExitIcon,
            {
              height: 24,
              width: 24,
              style: { transform: "rotate(180deg)" }
            }
          ),
          onClick: () => __async(void 0, null, function* () {
            return yield leaveRoom();
          }),
          css: { p: "$8 $4" }
        }
      )
    ),
    /* @__PURE__ */ React43.createElement(
      Dropdown.Item,
      {
        css: {
          bg: "$alert_error_dim",
          color: "$alert_error_bright",
          "&:hover": {
            bg: "$alert_error_dim",
            color: "$alert_error_brighter"
          },
          p: "0"
        },
        "data-testid": "end_room_btn"
      },
      /* @__PURE__ */ React43.createElement(
        LeaveCard,
        {
          title: showStream ? "End Stream" : "End Session",
          subtitle: `The ${showStream ? "stream" : "session"} will end for everyone. You can't undo this action.`,
          bg: "",
          titleColor: "$alert_error_brighter",
          icon: /* @__PURE__ */ React43.createElement(StopIcon, { height: 24, width: 24 }),
          onClick: () => {
            setOpen(false);
            setShowEndStreamAlert(true);
          },
          css: { p: "$8 $4" }
        }
      )
    )
  )))) : /* @__PURE__ */ React43.createElement(
    LeaveIconButton,
    {
      onClick: () => {
        setShowLeaveRoomAlert(true);
      },
      key: "LeaveRoom",
      "data-testid": "leave_room_btn"
    },
    /* @__PURE__ */ React43.createElement(Tooltip, { title: "Leave Room" }, /* @__PURE__ */ React43.createElement(Box, null, /* @__PURE__ */ React43.createElement(ExitIcon, { style: { transform: "rotate(180deg)" } })))
  ), /* @__PURE__ */ React43.createElement(Dialog.Root, { open: showEndStreamAlert, modal: false }, /* @__PURE__ */ React43.createElement(Dialog.Portal, null, /* @__PURE__ */ React43.createElement(Dialog.Overlay, null), /* @__PURE__ */ React43.createElement(
    Dialog.Content,
    {
      css: { w: "min(420px, 90%)", p: "$8", bg: "$surface_dim" }
    },
    /* @__PURE__ */ React43.createElement(
      EndSessionContent,
      {
        setShowEndStreamAlert,
        leaveRoom: isStreamingOn ? () => leaveRoom({ endStream: true }) : endRoom,
        isStreamingOn,
        isModal: true
      }
    )
  ))), /* @__PURE__ */ React43.createElement(Dialog.Root, { open: showLeaveRoomAlert, modal: false }, /* @__PURE__ */ React43.createElement(Dialog.Portal, null, /* @__PURE__ */ React43.createElement(Dialog.Overlay, null), /* @__PURE__ */ React43.createElement(
    Dialog.Content,
    {
      css: { w: "min(420px, 90%)", p: "$8", bg: "$surface_dim" }
    },
    /* @__PURE__ */ React43.createElement(
      LeaveSessionContent,
      {
        setShowLeaveRoomAlert,
        leaveRoom,
        isModal: true
      }
    )
  ))));
};

// src/Prebuilt/components/Leave/MwebLeaveRoom.tsx
import React44, { Fragment as Fragment5, useState as useState14 } from "react";
import {
  selectIsConnectedToRoom as selectIsConnectedToRoom4,
  selectPermissions as selectPermissions3,
  useHMSStore as useHMSStore16,
  useRecordingStreaming as useRecordingStreaming4
} from "@100mslive/react-sdk";
import { CrossIcon as CrossIcon6, ExitIcon as ExitIcon2, StopIcon as StopIcon2 } from "@100mslive/react-icons";
var MwebLeaveRoom = ({
  leaveRoom,
  endRoom,
  container
}) => {
  const [open, setOpen] = useState14(false);
  const { screenType } = useRoomLayoutConferencingScreen();
  const [showLeaveRoomAlert, setShowLeaveRoomAlert] = useState14(false);
  const [showEndStreamAlert, setShowEndStreamAlert] = useState14(false);
  const isConnected = useHMSStore16(selectIsConnectedToRoom4);
  const permissions = useHMSStore16(selectPermissions3);
  const { isStreamingOn } = useRecordingStreaming4();
  const showStream = screenType !== "hls_live_streaming" && isStreamingOn && (permissions == null ? void 0 : permissions.hlsStreaming);
  const showLeaveOptions = (permissions == null ? void 0 : permissions.hlsStreaming) && isStreamingOn || (permissions == null ? void 0 : permissions.endRoom);
  useDropdownList({ open, name: "LeaveRoom" });
  if (!permissions || !isConnected) {
    return null;
  }
  return /* @__PURE__ */ React44.createElement(Fragment5, null, showLeaveOptions ? /* @__PURE__ */ React44.createElement(Sheet.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React44.createElement(Sheet.Trigger, { asChild: true }, /* @__PURE__ */ React44.createElement(
    LeaveButton,
    {
      onClick: () => {
        setOpen((open2) => !open2);
      }
    }
  )), /* @__PURE__ */ React44.createElement(Sheet.Content, { container }, /* @__PURE__ */ React44.createElement(
    LeaveCard,
    {
      title: showStream ? "Leave Stream" : "Leave Session",
      subtitle: `Others will continue after you leave. You can join the ${showStream ? "stream" : "session"} again.`,
      bg: "$surface_default",
      titleColor: "$on_surface_high",
      icon: /* @__PURE__ */ React44.createElement(
        ExitIcon2,
        {
          height: 24,
          width: 24,
          style: { transform: "rotate(180deg)" }
        }
      ),
      onClick: () => __async(void 0, null, function* () {
        return yield leaveRoom();
      }),
      css: {
        pt: 0,
        mt: "$10",
        color: "$on_surface_low",
        "&:hover": { color: "$on_surface_high" }
      }
    }
  ), /* @__PURE__ */ React44.createElement(
    LeaveCard,
    {
      title: showStream ? "End Stream" : "End Session",
      subtitle: `The will end the ${showStream ? "stream" : "session"} for everyone. You can't undo this action.`,
      bg: "$alert_error_dim",
      titleColor: "$alert_error_brighter",
      css: {
        color: "$alert_error_bright",
        "&:hover": { color: "$alert_error_brighter" }
      },
      icon: /* @__PURE__ */ React44.createElement(StopIcon2, { height: 24, width: 24 }),
      onClick: () => {
        setOpen(false);
        setShowEndStreamAlert(true);
      }
    }
  ))) : /* @__PURE__ */ React44.createElement(LeaveButton, { onClick: () => setShowLeaveRoomAlert(true) }), /* @__PURE__ */ React44.createElement(
    Sheet.Root,
    {
      open: showEndStreamAlert,
      onOpenChange: setShowEndStreamAlert
    },
    /* @__PURE__ */ React44.createElement(
      Sheet.Content,
      {
        css: { bg: "$surface_dim", p: "$10", pb: "$12" },
        container
      },
      /* @__PURE__ */ React44.createElement(
        EndSessionContent,
        {
          setShowEndStreamAlert,
          leaveRoom: isStreamingOn ? leaveRoom : endRoom,
          isStreamingOn
        }
      )
    )
  ), /* @__PURE__ */ React44.createElement(
    Sheet.Root,
    {
      open: showLeaveRoomAlert,
      onOpenChange: setShowLeaveRoomAlert
    },
    /* @__PURE__ */ React44.createElement(
      Sheet.Content,
      {
        css: { bg: "$surface_dim", p: "$10", pb: "$12" },
        container
      },
      /* @__PURE__ */ React44.createElement(
        LeaveSessionContent,
        {
          setShowLeaveRoomAlert,
          leaveRoom
        }
      )
    )
  ));
};
var LeaveButton = ({ onClick }) => {
  const isMobileHLSStream = useMobileHLSStream();
  const isLandscapeHLSStream = useLandscapeHLSStream();
  return isMobileHLSStream || isLandscapeHLSStream ? /* @__PURE__ */ React44.createElement(IconButton, { key: "LeaveRoom", "data-testid": "leave_room_btn", onClick }, /* @__PURE__ */ React44.createElement(Tooltip, { title: "Leave Room" }, /* @__PURE__ */ React44.createElement(Box, null, /* @__PURE__ */ React44.createElement(CrossIcon6, null)))) : /* @__PURE__ */ React44.createElement(
    LeaveIconButton,
    {
      key: "LeaveRoom",
      "data-testid": "leave_room_btn",
      css: {
        borderTopRightRadius: "$1",
        borderBottomRightRadius: "$1"
      },
      onClick
    },
    /* @__PURE__ */ React44.createElement(Tooltip, { title: "Leave Room" }, /* @__PURE__ */ React44.createElement(Box, null, /* @__PURE__ */ React44.createElement(ExitIcon2, { style: { transform: "rotate(180deg)" } })))
  );
};

// src/Prebuilt/components/Leave/LeaveRoom.tsx
var LeaveRoom = ({
  screenType,
  container
}) => {
  const isConnected = useHMSStore17(selectIsConnectedToRoom5);
  const permissions = useHMSStore17(selectPermissions4);
  const isMobile = useMedia6(config.media.md);
  const rolesMap = useHMSStore17(selectRolesMap2);
  const streamingPermissionRoles = Object.keys(rolesMap).filter((roleName) => {
    const roleObj = rolesMap[roleName];
    return roleObj.permissions.hlsStreaming;
  });
  const peersWithStreamingRights = useHMSStore17(
    selectPeersByCondition(
      (peer) => streamingPermissionRoles.includes(peer.roleName || "")
    )
  );
  const hlsState = useHMSStore17(selectHLSState3);
  const hmsActions = useHMSActions12();
  const isMobileHLSStream = useMobileHLSStream();
  const isLandscapeHLSStream = useLandscapeHLSStream();
  const stopStream = () => __async(void 0, null, function* () {
    try {
      if (permissions == null ? void 0 : permissions.hlsStreaming) {
        console.log("Stopping HLS stream");
        yield hmsActions.stopHLSStreaming();
        ToastManager.addToast({ title: "Stopping the stream" });
      }
    } catch (e) {
      console.error("Error stopping stream", e);
      ToastManager.addToast({
        title: "Error in stopping the stream",
        type: "error"
      });
    }
  });
  const endRoom = () => __async(void 0, null, function* () {
    yield hmsActions.endRoom(false, "End Room");
  });
  const leaveRoom = (..._0) => __async(void 0, [..._0], function* (options = { endStream: false }) {
    if (options.endStream || hlsState.running && peersWithStreamingRights.length === 1) {
      yield stopStream();
    }
    yield hmsActions.leave();
  });
  if (!permissions || !isConnected) {
    return null;
  }
  if (isMobileHLSStream || isLandscapeHLSStream) {
    return /* @__PURE__ */ React45.createElement(
      MwebLeaveRoom,
      {
        leaveRoom,
        endRoom,
        container
      }
    );
  }
  return isMobile ? /* @__PURE__ */ React45.createElement(
    MwebLeaveRoom,
    {
      leaveRoom,
      endRoom,
      container
    }
  ) : /* @__PURE__ */ React45.createElement(
    DesktopLeaveRoom,
    {
      leaveRoom,
      screenType,
      endRoom,
      container
    }
  );
};

// src/Prebuilt/components/MoreSettings/MoreSettings.tsx
import React70 from "react";
import { useMedia as useMedia13 } from "react-use";

// src/Prebuilt/components/MoreSettings/SplitComponents/DesktopOptions.tsx
import React65, { Fragment as Fragment7, useState as useState27 } from "react";
import { HMSHLSPlayer } from "@100mslive/hls-player";
import { match as match5 } from "ts-pattern";
import {
  HMSTranscriptionMode as HMSTranscriptionMode2,
  selectAppData as selectAppData3,
  selectIsTranscriptionAllowedByMode,
  selectIsTranscriptionEnabled as selectIsTranscriptionEnabled3,
  selectLocalPeerID as selectLocalPeerID8,
  useHMSActions as useHMSActions25,
  useHMSStore as useHMSStore30
} from "@100mslive/react-sdk";
import {
  BrbIcon,
  CheckIcon as CheckIcon4,
  HamburgerMenuIcon,
  InfoIcon as InfoIcon2,
  OpenCaptionIcon as OpenCaptionIcon2,
  PipIcon as PipIcon2,
  SettingsIcon as SettingsIcon3
} from "@100mslive/react-icons";

// src/Prebuilt/components/PIP/index.jsx
import React47 from "react";

// src/Prebuilt/components/PIP/PIPComponent.tsx
import React46, { useCallback as useCallback11, useEffect as useEffect15, useState as useState15 } from "react";
import {
  selectPeers as selectPeers2,
  selectTracksMap,
  useHMSActions as useHMSActions13,
  useHMSVanillaStore as useHMSVanillaStore6
} from "@100mslive/react-sdk";
import { PipIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/PIP/SetupMediaSession.js
import {
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled as selectIsLocalVideoEnabled3
} from "@100mslive/react-sdk";
var SetupMediaSession = class {
  constructor() {
    __publicField(this, "setup", (actions, store) => {
      this.actions = actions;
      this.store = store;
      this.initState();
      this.setUpHandlers();
    });
    __publicField(this, "initState", () => {
      var _a7, _b7, _c, _d;
      const isMicActive = this.store.getState(selectIsLocalAudioEnabled);
      const isCamActive = this.store.getState(selectIsLocalVideoEnabled3);
      (_b7 = (_a7 = navigator.mediaSession) == null ? void 0 : _a7.setMicrophoneActive) == null ? void 0 : _b7.call(_a7, isMicActive);
      (_d = (_c = navigator.mediaSession) == null ? void 0 : _c.setCameraActive) == null ? void 0 : _d.call(_c, isCamActive);
      this.store.subscribe((isMicActive2) => {
        var _a8, _b8;
        (_b8 = (_a8 = navigator.mediaSession) == null ? void 0 : _a8.setMicrophoneActive) == null ? void 0 : _b8.call(_a8, isMicActive2);
      }, selectIsLocalAudioEnabled);
      this.store.subscribe((isCamActive2) => {
        var _a8, _b8;
        (_b8 = (_a8 = navigator.mediaSession) == null ? void 0 : _a8.setCameraActive) == null ? void 0 : _b8.call(_a8, isCamActive2);
      }, selectIsLocalVideoEnabled3);
    });
    __publicField(this, "toggleMic", () => __async(this, null, function* () {
      console.log("toggle mic clicked in pip");
      const current = this.store.getState(selectIsLocalAudioEnabled);
      yield this.actions.setLocalAudioEnabled(!current);
    }));
    __publicField(this, "toggleCam", () => __async(this, null, function* () {
      console.log("toggle cam clicked in pip");
      const current = this.store.getState(selectIsLocalVideoEnabled3);
      yield this.actions.setLocalVideoEnabled(!current);
    }));
    __publicField(this, "leave", () => {
      console.log("leave called from pip");
      this.actions.leave();
    });
    __publicField(this, "setUpHandlers", () => {
      if (navigator.mediaSession) {
        try {
          navigator.mediaSession.setActionHandler(
            "togglemicrophone",
            this.toggleMic
          );
          navigator.mediaSession.setActionHandler("togglecamera", this.toggleCam);
          navigator.mediaSession.setActionHandler("hangup", this.leave);
        } catch (err) {
          console.error("error in setting media session handlers", err);
        }
      }
    });
  }
};
var MediaSession = new SetupMediaSession();

// src/Prebuilt/components/PIP/PIPComponent.tsx
var PIPComponent = ({ content = null }) => {
  const [isPipOn, setIsPipOn] = useState15(PictureInPicture.isOn());
  const hmsActions = useHMSActions13();
  const store = useHMSVanillaStore6();
  const onPipToggle = useCallback11(() => {
    if (!isPipOn) {
      PictureInPicture.start(hmsActions, setIsPipOn).catch(
        (err) => console.error("error in starting pip", err)
      );
      MediaSession.setup(hmsActions, store);
    } else {
      PictureInPicture.stop().catch(
        (err) => console.error("error in stopping pip", err)
      );
    }
  }, [hmsActions, isPipOn, store]);
  if (!PictureInPicture.isSupported()) {
    return null;
  }
  return /* @__PURE__ */ React46.createElement(React46.Fragment, null, content ? /* @__PURE__ */ React46.createElement(
    Flex,
    {
      css: { w: "100%" },
      onClick: () => onPipToggle(),
      "data-testid": "pip_btn"
    },
    content
  ) : /* @__PURE__ */ React46.createElement(
    Tooltip,
    {
      title: `${isPipOn ? "Deactivate" : "Activate"} picture in picture view`
    },
    /* @__PURE__ */ React46.createElement(
      IconButton_default,
      {
        active: !isPipOn,
        key: "pip",
        onClick: () => onPipToggle(),
        "data-testid": "pip_btn"
      },
      /* @__PURE__ */ React46.createElement(PipIcon, null)
    )
  ));
};
var ActivatedPIP = () => {
  const store = useHMSVanillaStore6();
  const pinnedTrack = usePinnedTrack();
  useEffect15(() => {
    function subscribeToStore() {
      return store.subscribe((tracksMap) => {
        let pipPeers = store.getState(selectPeers2);
        if (pinnedTrack) {
          pipPeers = pipPeers.filter((peer) => pinnedTrack.peerId === peer.id);
        }
        PictureInPicture.updatePeersAndTracks(pipPeers, tracksMap).catch(
          (err) => {
            console.error("error in updating pip", err);
          }
        );
      }, selectTracksMap);
    }
    let unsubscribe = PictureInPicture.isOn() ? subscribeToStore() : void 0;
    PictureInPicture.listenToStateChange((isOn) => {
      if (isOn) {
        if (!unsubscribe) {
          unsubscribe = subscribeToStore();
        }
      } else {
        unsubscribe == null ? void 0 : unsubscribe();
        unsubscribe = void 0;
      }
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
      unsubscribe = void 0;
    };
  }, [pinnedTrack, store]);
  return /* @__PURE__ */ React46.createElement(React46.Fragment, null);
};
var PIPComponent_default = PIPComponent;

// src/Prebuilt/components/PIP/index.jsx
var PIP = ({ content = null }) => {
  return /* @__PURE__ */ React47.createElement(PIPComponent_default, { content });
};

// src/Prebuilt/components/PIP/PIPChat.tsx
import React52, { useCallback as useCallback16, useEffect as useEffect18, useMemo as useMemo7, useState as useState19 } from "react";
import {
  selectHMSMessages as selectHMSMessages2,
  selectLocalPeerID as selectLocalPeerID5,
  selectPeerNameByID as selectPeerNameByID3,
  selectSessionStore as selectSessionStore6,
  selectUnreadHMSMessagesCount as selectUnreadHMSMessagesCount2,
  useHMSStore as useHMSStore22
} from "@100mslive/react-sdk";
import { SendIcon } from "@100mslive/react-icons";

// src/TextArea/TextArea.tsx
var TextArea = styled("textarea", {
  fontFamily: "$sans",
  lineHeight: "inherit",
  backgroundColor: "$surface_default",
  borderRadius: "8px",
  outline: "none",
  border: "1px solid $border_default",
  padding: "0.5rem 0.75rem",
  minHeight: "30px",
  color: "$on_surface_high",
  fontSize: "$md",
  "&:focus": {
    boxShadow: "0 0 0 1px $colors$primary_default",
    border: "1px solid transparent"
  },
  "&::placeholder": {
    color: "$on_surface_medium"
  },
  variants: {
    error: {
      true: {
        "&:focus": {
          boxShadow: "0 0 0 3px $colors$alert_error_default"
        }
      }
    }
  }
});

// src/Prebuilt/components/Chat/ChatBody.tsx
import React51, {
  Fragment as Fragment6,
  useCallback as useCallback15,
  useEffect as useEffect17,
  useLayoutEffect,
  useMemo as useMemo6,
  useRef as useRef12,
  useState as useState18
} from "react";
import { useMedia as useMedia8 } from "react-use";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";
import {
  selectHMSMessages,
  selectLocalPeerID as selectLocalPeerID4,
  selectLocalPeerName as selectLocalPeerName2,
  selectLocalPeerRoleName,
  selectPeerNameByID as selectPeerNameByID2,
  selectSessionStore as selectSessionStore5,
  selectUnreadHMSMessagesCount,
  useHMSActions as useHMSActions17,
  useHMSStore as useHMSStore21,
  useHMSVanillaStore as useHMSVanillaStore8
} from "@100mslive/react-sdk";
import { SolidPinIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/Chat/ChatActions.tsx
import React49, { useCallback as useCallback14, useState as useState16 } from "react";
import {
  selectLocalPeerName,
  selectPermissions as selectPermissions5,
  useHMSActions as useHMSActions16,
  useHMSStore as useHMSStore19
} from "@100mslive/react-sdk";
import {
  CopyIcon as CopyIcon2,
  CrossCircleIcon,
  CrossIcon as CrossIcon7,
  EyeCloseIcon as EyeCloseIcon2,
  PeopleRemoveIcon as PeopleRemoveIcon2,
  PinIcon,
  ReplyGroupIcon,
  ReplyIcon,
  VerticalMenuIcon as VerticalMenuIcon3
} from "@100mslive/react-icons";

// src/Prebuilt/components/Chat/MwebChatOption.tsx
import React48 from "react";
var MwebChatOption = ({
  icon,
  text,
  onClick,
  color = "$on_surface_high"
}) => {
  return /* @__PURE__ */ React48.createElement(
    Flex,
    {
      align: "center",
      css: { w: "100%", color, cursor: "pointer", gap: "$4", p: "$8" },
      onClick
    },
    icon,
    /* @__PURE__ */ React48.createElement(Text, { variant: "sm", css: { color, fontWeight: "$semiBold" } }, text)
  );
};

// src/Prebuilt/components/hooks/useChatBlacklist.ts
import { useCallback as useCallback12 } from "react";
import {
  selectLocalPeer as selectLocalPeer2,
  selectSessionStore as selectSessionStore2,
  useHMSActions as useHMSActions14,
  useHMSStore as useHMSStore18
} from "@100mslive/react-sdk";
var useChatBlacklist = (sessionStoreKey) => {
  const hmsActions = useHMSActions14();
  const blacklistedIDs = useHMSStore18(selectSessionStore2(sessionStoreKey));
  const blacklistItem = useCallback12(
    (blacklistID) => __async(void 0, null, function* () {
      yield hmsActions.sessionStore.set(sessionStoreKey, [...blacklistedIDs || [], blacklistID]).catch((err) => ToastManager.addToast({ title: err.description }));
    }),
    [hmsActions, sessionStoreKey, blacklistedIDs]
  );
  return { blacklistItem, blacklistedIDs };
};
var useIsPeerBlacklisted = ({
  local = false,
  peerCustomerUserId = ""
}) => {
  const localPeer = useHMSStore18(selectLocalPeer2);
  const blacklistedPeerIDs = useHMSStore18(selectSessionStore2("chatPeerBlacklist" /* CHAT_PEER_BLACKLIST */)) || [];
  return blacklistedPeerIDs == null ? void 0 : blacklistedPeerIDs.includes(
    local ? localPeer == null ? void 0 : localPeer.customerUserId : peerCustomerUserId
  );
};

// src/Prebuilt/components/hooks/usePinnedMessages.ts
import { useCallback as useCallback13 } from "react";
import {
  selectPeerNameByID,
  selectSessionStore as selectSessionStore3,
  useHMSActions as useHMSActions15,
  useHMSVanillaStore as useHMSVanillaStore7
} from "@100mslive/react-sdk";
var usePinnedMessages = () => {
  const hmsActions = useHMSActions15();
  const vanillaStore = useHMSVanillaStore7();
  const setPinnedMessages = useCallback13(
    (message, pinnedBy) => __async(void 0, null, function* () {
      const peerName = vanillaStore.getState(selectPeerNameByID(message == null ? void 0 : message.sender)) || (message == null ? void 0 : message.senderName);
      const newPinnedMessage = { text: "", id: message.id, pinnedBy };
      if (message && peerName) {
        newPinnedMessage["text"] = `${peerName}: ${message.message}`;
      } else if (message) {
        newPinnedMessage["text"] = message.message;
      }
      const pinnedMessages = vanillaStore.getState(
        selectSessionStore3("pinnedMessages" /* PINNED_MESSAGES */)
      ) || [];
      if (!(pinnedMessages == null ? void 0 : pinnedMessages.find(
        (pinnedMessage) => pinnedMessage.id === newPinnedMessage.id
      ))) {
        yield hmsActions.sessionStore.set(
          "pinnedMessages" /* PINNED_MESSAGES */,
          [...pinnedMessages, newPinnedMessage].slice(-3)
        ).catch((err) => ToastManager.addToast({ title: err.description }));
      }
    }),
    [hmsActions, vanillaStore]
  );
  const removePinnedMessage = useCallback13(
    (indexToRemove) => __async(void 0, null, function* () {
      const pinnedMessages = vanillaStore.getState(
        selectSessionStore3("pinnedMessages" /* PINNED_MESSAGES */)
      ) || [];
      if (pinnedMessages[indexToRemove]) {
        yield hmsActions.sessionStore.set(
          "pinnedMessages" /* PINNED_MESSAGES */,
          pinnedMessages.filter(
            (_, index) => index !== indexToRemove
          )
        ).catch((err) => ToastManager.addToast({ title: err.description }));
      }
    }),
    [hmsActions, vanillaStore]
  );
  const unpinBlacklistedMessages = useCallback13(
    (blacklistedMessageIDSet) => __async(void 0, null, function* () {
      const pinnedMessages = vanillaStore.getState(
        selectSessionStore3("pinnedMessages" /* PINNED_MESSAGES */)
      ) || [];
      const filteredPinnedMessages = pinnedMessages == null ? void 0 : pinnedMessages.filter(
        (pinnedMessage) => !(blacklistedMessageIDSet == null ? void 0 : blacklistedMessageIDSet.has(pinnedMessage.id))
      );
      yield hmsActions.sessionStore.set("pinnedMessages" /* PINNED_MESSAGES */, filteredPinnedMessages).catch((err) => ToastManager.addToast({ title: err.description }));
    }),
    [hmsActions, vanillaStore]
  );
  return { setPinnedMessages, removePinnedMessage, unpinBlacklistedMessages };
};

// src/Prebuilt/components/Chat/ChatActions.tsx
var iconStyle = { height: "1.125rem", width: "1.125rem" };
var tooltipBoxCSS = {
  fontSize: "$xs",
  backgroundColor: "$surface_default",
  p: "$1 $5",
  fontWeight: "$regular",
  borderRadius: "$3"
};
var ChatActions = ({
  showPinAction,
  onReply,
  onReplyGroup,
  showReply,
  message,
  sentByLocalPeer,
  isMobile,
  openSheet,
  setOpenSheet
}) => {
  var _a7, _b7;
  const { elements } = useRoomLayoutConferencingScreen();
  const { can_hide_message = false, can_block_user = false } = ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.real_time_controls) || {};
  const { roles_whitelist = [] } = (elements == null ? void 0 : elements.chat) || {};
  const [open, setOpen] = useState16(false);
  const actions = useHMSActions16();
  const canRemoveOthers = (_b7 = useHMSStore19(selectPermissions5)) == null ? void 0 : _b7.removeOthers;
  const { blacklistItem: blacklistPeer } = useChatBlacklist(
    "chatPeerBlacklist" /* CHAT_PEER_BLACKLIST */
  );
  const localPeerName = useHMSStore19(selectLocalPeerName);
  const { setPinnedMessages, unpinBlacklistedMessages } = usePinnedMessages();
  const {
    blacklistItem: blacklistMessage,
    blacklistedIDs: blacklistedMessageIDs
  } = useChatBlacklist("chatMessageBlacklist" /* CHAT_MESSAGE_BLACKLIST */);
  const isSenderBlocked = useIsPeerBlacklisted({
    peerCustomerUserId: message.senderUserId
  });
  const updatePinnedMessages = useCallback14(
    (messageID = "") => {
      const blacklistedMessageIDSet = /* @__PURE__ */ new Set([
        ...blacklistedMessageIDs || [],
        messageID
      ]);
      unpinBlacklistedMessages(blacklistedMessageIDSet);
    },
    [blacklistedMessageIDs, unpinBlacklistedMessages]
  );
  const copyMessageContent = useCallback14(() => {
    try {
      navigator == null ? void 0 : navigator.clipboard.writeText(message.message);
      ToastManager.addToast({
        title: "Message copied successfully"
      });
    } catch (e) {
      console.log(e);
      ToastManager.addToast({
        title: "Could not copy message"
      });
    }
  }, [message]);
  const options = {
    reply: {
      text: "Reply privately",
      tooltipText: "Reply privately",
      icon: /* @__PURE__ */ React49.createElement(ReplyIcon, { style: iconStyle }),
      onClick: onReply,
      show: showReply
    },
    replyGroup: {
      text: "Reply to group",
      tooltipText: "Reply to group",
      icon: /* @__PURE__ */ React49.createElement(ReplyGroupIcon, { style: iconStyle }),
      onClick: onReplyGroup,
      show: !!message.senderRole && roles_whitelist.includes(message.senderRole)
    },
    pin: {
      text: "Pin message",
      tooltipText: "Pin",
      icon: /* @__PURE__ */ React49.createElement(PinIcon, { style: iconStyle }),
      onClick: () => setPinnedMessages(message, localPeerName || ""),
      show: showPinAction
    },
    copy: {
      text: "Copy text",
      tooltipText: "Copy",
      icon: /* @__PURE__ */ React49.createElement(CopyIcon2, { style: iconStyle }),
      onClick: copyMessageContent,
      show: true
    },
    hide: {
      text: message.recipientPeer ? "Hide for both" : "Hide for everyone",
      icon: /* @__PURE__ */ React49.createElement(EyeCloseIcon2, { style: iconStyle }),
      onClick: () => __async(void 0, null, function* () {
        blacklistMessage(message.id);
        updatePinnedMessages(message.id);
      }),
      show: !!can_hide_message
    },
    block: {
      text: "Block from chat",
      icon: /* @__PURE__ */ React49.createElement(CrossCircleIcon, { style: iconStyle }),
      onClick: () => __async(void 0, null, function* () {
        if (message.senderUserId) {
          blacklistPeer(message.senderUserId);
        }
      }),
      color: "$alert_error_default",
      show: !!can_block_user && !sentByLocalPeer && !isSenderBlocked
    },
    remove: {
      text: "Remove participant",
      icon: /* @__PURE__ */ React49.createElement(PeopleRemoveIcon2, { style: iconStyle }),
      color: "$alert_error_default",
      show: !!canRemoveOthers && !sentByLocalPeer,
      onClick: () => __async(void 0, null, function* () {
        if (!message.sender) {
          return;
        }
        try {
          yield actions.removePeer(message.sender, "");
        } catch (error) {
          ToastManager.addToast({
            title: error.message,
            variant: "error"
          });
        }
      })
    }
  };
  if (isMobile) {
    return /* @__PURE__ */ React49.createElement(Sheet.Root, { open: openSheet, onOpenChange: setOpenSheet }, /* @__PURE__ */ React49.createElement(
      Sheet.Content,
      {
        css: { bg: "$surface_default", pb: "$14" },
        onClick: (e) => setOpenSheet(false, e)
      },
      /* @__PURE__ */ React49.createElement(
        Sheet.Title,
        {
          css: {
            display: "flex",
            color: "$on_surface_high",
            w: "100%",
            justifyContent: "space-between",
            mt: "$8",
            fontSize: "$md",
            px: "$10",
            pb: "$8",
            borderBottom: "1px solid $border_bright",
            alignItems: "center"
          }
        },
        "Message options",
        /* @__PURE__ */ React49.createElement(
          Sheet.Close,
          {
            css: { color: "$on_surface_high" },
            onClick: (e) => setOpenSheet(false, e)
          },
          /* @__PURE__ */ React49.createElement(CrossIcon7, null)
        )
      ),
      Object.keys(options).map((optionKey) => {
        const option = options[optionKey];
        return option.show ? /* @__PURE__ */ React49.createElement(
          MwebChatOption,
          {
            key: optionKey,
            text: option.text,
            icon: option.icon,
            onClick: option.onClick,
            color: option == null ? void 0 : option.color
          }
        ) : null;
      })
    ));
  }
  return /* @__PURE__ */ React49.createElement(
    Dropdown.Root,
    {
      open,
      onOpenChange: setOpen,
      css: { "@md": { display: "none" } }
    },
    /* @__PURE__ */ React49.createElement(
      Flex,
      {
        className: "chat_actions",
        css: {
          background: "$surface_bright",
          borderRadius: "$1",
          p: "$2",
          opacity: open ? 1 : 0,
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1,
          "@md": { opacity: 1 }
        }
      },
      options.reply.show ? /* @__PURE__ */ React49.createElement(Tooltip, { boxCss: tooltipBoxCSS, title: options.reply.tooltipText }, /* @__PURE__ */ React49.createElement(
        IconButton,
        {
          "data-testid": "reply_message_btn",
          onClick: options.reply.onClick
        },
        options.reply.icon
      )) : null,
      options.replyGroup.show ? /* @__PURE__ */ React49.createElement(
        Tooltip,
        {
          boxCss: tooltipBoxCSS,
          title: options.replyGroup.tooltipText
        },
        /* @__PURE__ */ React49.createElement(
          IconButton,
          {
            "data-testid": "reply_group_message_btn",
            onClick: options.replyGroup.onClick
          },
          options.replyGroup.icon
        )
      ) : null,
      options.pin.show ? /* @__PURE__ */ React49.createElement(Tooltip, { boxCss: tooltipBoxCSS, title: options.pin.tooltipText }, /* @__PURE__ */ React49.createElement(
        IconButton,
        {
          "data-testid": "pin_message_btn",
          onClick: options.pin.onClick
        },
        options.pin.icon
      )) : null,
      options.copy.show ? /* @__PURE__ */ React49.createElement(Tooltip, { boxCss: tooltipBoxCSS, title: options.copy.tooltipText }, /* @__PURE__ */ React49.createElement(
        IconButton,
        {
          onClick: options.copy.onClick,
          "data-testid": "copy_message_btn"
        },
        /* @__PURE__ */ React49.createElement(CopyIcon2, { style: iconStyle })
      )) : null,
      options.block.show || options.hide.show || options.remove.show ? /* @__PURE__ */ React49.createElement(Tooltip, { boxCss: tooltipBoxCSS, title: "More actions" }, /* @__PURE__ */ React49.createElement(Dropdown.Trigger, { asChild: true }, /* @__PURE__ */ React49.createElement(IconButton, null, /* @__PURE__ */ React49.createElement(VerticalMenuIcon3, { style: iconStyle })))) : null
    ),
    /* @__PURE__ */ React49.createElement(Dropdown.Portal, null, /* @__PURE__ */ React49.createElement(
      Dropdown.Content,
      {
        sideOffset: 5,
        align: "end",
        css: {
          width: "$48",
          backgroundColor: "$surface_bright",
          py: "$0",
          border: "1px solid $border_bright"
        }
      },
      options.hide.show ? /* @__PURE__ */ React49.createElement(
        Dropdown.Item,
        {
          "data-testid": "hide_message_btn",
          onClick: options.hide.onClick
        },
        options.hide.icon,
        /* @__PURE__ */ React49.createElement(Text, { variant: "sm", css: { ml: "$4", fontWeight: "$semiBold" } }, options.hide.text)
      ) : null,
      options.block.show ? /* @__PURE__ */ React49.createElement(
        Dropdown.Item,
        {
          "data-testid": "block_peer_btn",
          onClick: options.block.onClick,
          css: { color: options.block.color }
        },
        options.block.icon,
        /* @__PURE__ */ React49.createElement(
          Text,
          {
            variant: "sm",
            css: { ml: "$4", color: "inherit", fontWeight: "$semiBold" }
          },
          options.block.text
        )
      ) : null,
      options.remove.show ? /* @__PURE__ */ React49.createElement(
        Dropdown.Item,
        {
          "data-testid": "remove_peer_btn",
          onClick: options.remove.onClick,
          css: { color: options.remove.color }
        },
        options.remove.icon,
        /* @__PURE__ */ React49.createElement(
          Text,
          {
            variant: "sm",
            css: { ml: "$4", color: "inherit", fontWeight: "$semiBold" }
          },
          options.remove.text
        )
      ) : null
    ))
  );
};

// src/Prebuilt/components/Chat/EmptyChat.tsx
import React50 from "react";
import { useMedia as useMedia7 } from "react-use";

// src/Prebuilt/images/empty-chat.svg
var empty_chat_default = 'data:image/svg+xml,<svg width="184" height="133" viewBox="0 0 184 133" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M144.885 91.3998C145.318 91.023 145.861 90.7947 146.433 90.7483L146.446 90.7473L169.355 89.1614C169.702 89.1376 170.049 89.2101 170.358 89.3712C170.662 89.5305 170.918 89.7702 171.096 90.0642C171.098 90.0672 171.1 90.0703 171.102 90.0734L171.104 90.0766C171.281 90.3744 171.373 90.7154 171.369 91.062C171.365 91.4097 171.265 91.7496 171.08 92.044L158.85 111.504C158.539 111.986 158.081 112.356 157.544 112.56C157.007 112.764 156.419 112.791 155.866 112.636C155.313 112.482 154.823 112.155 154.469 111.703C154.115 111.25 153.915 110.697 153.898 110.123C153.898 110.109 153.898 110.094 153.898 110.08L153.996 100.307L145.347 95.7858C145.334 95.779 145.321 95.7721 145.308 95.7649C144.811 95.4785 144.417 95.0404 144.186 94.5146C143.955 93.9888 143.898 93.4029 144.024 92.8425C144.15 92.2821 144.451 91.7765 144.885 91.3998ZM167.441 91.0088L146.603 92.8952C146.49 92.9053 146.383 92.9508 146.298 93.0251C146.211 93.1005 146.151 93.2016 146.125 93.3137C146.1 93.4257 146.112 93.5429 146.158 93.6481C146.202 93.7484 146.276 93.8327 146.369 93.89L155.26 98.296L167.441 91.0088ZM156.32 100.171L168.547 92.8564L157.039 110.339C156.976 110.434 156.886 110.506 156.78 110.547C156.673 110.587 156.555 110.593 156.444 110.562C156.334 110.531 156.236 110.466 156.165 110.375C156.097 110.289 156.058 110.184 156.052 110.075L156.32 100.171Z" fill="%23444954"/>%0A<path d="M83.3248 35.4156C71.7182 47.1017 51.2098 75.5175 62.0292 95.6918C75.5536 120.91 140.453 79.2983 115.364 67.6657C90.2756 56.0331 65.8818 122.018 101.568 120.391C116.398 118.62 131.221 114.699 145.703 105.512" stroke="%23293042" stroke-width="2.25" stroke-dasharray="6 6"/>%0A<rect x="0.00256348" y="0.5" width="173.524" height="58.3398" rx="29.1699" fill="%23272A31"/>%0A<g opacity="0.4">%0A<rect x="24.7526" y="20.9312" width="111" height="4.5" rx="2.25" fill="%23444954"/>%0A</g>%0A<g opacity="0.4">%0A<rect x="38.2526" y="34.4312" width="110.25" height="4.5" rx="2.25" fill="%23444954"/>%0A</g>%0A<path d="M40.3918 71.5547L28.4246 55.0999L52.3589 55.0999L40.3918 71.5547Z" fill="%23272A31"/>%0A</svg>%0A';

// src/Prebuilt/components/Chat/EmptyChat.tsx
var EmptyChat = () => {
  var _a7;
  const { elements } = useRoomLayoutConferencingScreen();
  const isLocalPeerBlacklisted = useIsPeerBlacklisted({ local: true });
  const isMobile = useMedia7(config.media.md);
  const canSendMessages = elements.chat && (elements.chat.public_chat_enabled || elements.chat.private_chat_enabled || elements.chat.roles_whitelist && elements.chat.roles_whitelist.length) && !isLocalPeerBlacklisted;
  const isMobileHLSStream = useMobileHLSStream();
  const isLandscapeStream = useLandscapeHLSStream();
  const streaming = isMobileHLSStream || isLandscapeStream;
  if (isMobile && ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay) && !streaming) return /* @__PURE__ */ React50.createElement(React50.Fragment, null);
  return /* @__PURE__ */ React50.createElement(
    Flex,
    {
      css: {
        width: "100%",
        flex: "1 1 0",
        textAlign: "center",
        px: "$4"
      },
      align: "center",
      justify: "center"
    },
    /* @__PURE__ */ React50.createElement(Box, null, /* @__PURE__ */ React50.createElement(
      Box,
      {
        css: {
          m: "0 auto",
          mt: "$4",
          "@media (max-height: 575px)": { display: "none" }
        }
      },
      /* @__PURE__ */ React50.createElement(
        "img",
        {
          src: empty_chat_default,
          style: { display: "inline" },
          alt: "Empty Chat",
          height: 132,
          width: 185
        }
      )
    ), /* @__PURE__ */ React50.createElement(Text, { variant: "h5", css: { mt: "$8", c: "$on_surface_high" } }, canSendMessages ? "Start a conversation" : "No messages yet"), canSendMessages ? /* @__PURE__ */ React50.createElement(
      Text,
      {
        variant: "sm",
        css: {
          mt: "$4",
          maxWidth: "80%",
          textAlign: "center",
          mx: "auto",
          c: "$on_surface_medium"
        }
      },
      "There are no messages here yet. Start a conversation by sending a message."
    ) : null)
  );
};

// src/Prebuilt/components/hooks/usePinnedBy.tsx
import { useEffect as useEffect16, useState as useState17 } from "react";
import { selectSessionStore as selectSessionStore4, useHMSStore as useHMSStore20 } from "@100mslive/react-sdk";
var usePinnedBy = (messageId) => {
  const pinnedMessages = useHMSStore20(
    selectSessionStore4("pinnedMessages" /* PINNED_MESSAGES */)
  );
  const [pinnedBy, setPinnedBy] = useState17("");
  useEffect16(() => {
    let match17 = "";
    pinnedMessages == null ? void 0 : pinnedMessages.forEach((pinnedMessage) => {
      if (pinnedMessage.id === messageId) {
        match17 = pinnedMessage.pinnedBy;
      }
    });
    setPinnedBy(match17);
  }, [messageId, pinnedMessages]);
  return pinnedBy;
};

// src/Prebuilt/components/Chat/utils.ts
var formatTime2 = (date) => {
  if (!(date instanceof Date)) {
    return "";
  }
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const suffix = hours > 11 ? "PM" : "AM";
  return `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes} ${suffix}`;
};
var CHAT_MESSAGE_LIMIT = 2e3;

// src/Prebuilt/components/Chat/ChatBody.tsx
var rowHeights = {};
var listInstance = null;
function getRowHeight(index) {
  var _a7;
  return ((_a7 = rowHeights[index]) == null ? void 0 : _a7.size) || 72;
}
var setRowHeight = (index, id, size) => {
  var _a7, _b7;
  if (((_a7 = rowHeights[index]) == null ? void 0 : _a7.id) === id && ((_b7 = rowHeights[index]) == null ? void 0 : _b7.size) === size) {
    return;
  }
  listInstance == null ? void 0 : listInstance.resetAfterIndex(Math.max(index - 1, 0));
  Object.assign(rowHeights, { [index]: { size, id } });
};
var getMessageBackgroundColor = (messageType, selectedPeerID, selectedRole, isOverlay) => {
  if (messageType && !(selectedPeerID || selectedRole)) {
    return isOverlay ? "rgba(0, 0, 0, 0.64)" : "$surface_default";
  }
  return "";
};
var MessageTypeContainer = ({
  left,
  right
}) => {
  return /* @__PURE__ */ React51.createElement(
    Flex,
    {
      align: "center",
      css: {
        ml: "$2",
        mr: "$4",
        gap: "$space$2",
        flexWrap: "nowrap"
      }
    },
    left && /* @__PURE__ */ React51.createElement(
      Text,
      {
        variant: "xs",
        as: "span",
        css: {
          color: "$on_surface_medium",
          textTransform: "capitalize",
          fontWeight: "$regular",
          whiteSpace: "nowrap"
        }
      },
      left
    ),
    right && /* @__PURE__ */ React51.createElement(
      Text,
      {
        as: "span",
        variant: "overline",
        css: {
          color: "$on_surface_medium",
          fontWeight: "$regular",
          whiteSpace: "nowrap"
        }
      },
      right
    )
  );
};
var MessageType = ({
  roles,
  hasCurrentUserSent,
  receiver
}) => {
  const peerName = useHMSStore21(selectPeerNameByID2(receiver));
  const localPeerRoleName = useHMSStore21(selectLocalPeerRoleName);
  if (receiver) {
    return /* @__PURE__ */ React51.createElement(
      MessageTypeContainer,
      {
        left: hasCurrentUserSent ? `${peerName ? `to ${peerName}` : ""}` : "to You",
        right: "(DM)"
      }
    );
  }
  if (roles && roles.length) {
    return /* @__PURE__ */ React51.createElement(
      MessageTypeContainer,
      {
        left: `to ${hasCurrentUserSent ? roles[0] : localPeerRoleName}`,
        right: "(Group)"
      }
    );
  }
  return null;
};
var URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
var Link2 = styled("a", {
  color: "$primary_default",
  wordBreak: "break-word",
  "&:hover": {
    textDecoration: "underline"
  }
});
var AnnotisedMessage = ({
  message,
  length
}) => {
  if (!message) {
    return /* @__PURE__ */ React51.createElement(Fragment6, null);
  }
  return /* @__PURE__ */ React51.createElement(Fragment6, null, message.trim().split(/(\s)/).map(
    (part) => URL_REGEX.test(part) ? /* @__PURE__ */ React51.createElement(
      Link2,
      {
        href: part,
        key: part,
        target: "_blank",
        rel: "noopener noreferrer"
      },
      part.slice(0, length)
    ) : part.slice(0, length)
  ));
};
var getMessageType = ({
  roles,
  receiver
}) => {
  if (roles && roles.length > 0) {
    return "role";
  }
  return receiver ? "private" : "";
};
var SenderName = styled(Text, {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "100%",
  minWidth: 0,
  color: "$on_surface_high",
  fontWeight: "$semiBold"
});
var ChatMessage = React51.memo(
  ({
    index,
    style = {},
    message
  }) => {
    var _a7, _b7, _c;
    const { elements } = useRoomLayoutConferencingScreen();
    const rowRef = useRef12(null);
    const isMobile = useMedia8(config.media.md);
    const isPrivateChatEnabled = !!((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.private_chat_enabled);
    const isOverlay = ((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.is_overlay) && isMobile;
    const localPeerId = useHMSStore21(selectLocalPeerID4);
    const [selectedRole, setRoleSelector] = useSetSubscribedChatSelector(
      CHAT_SELECTOR.ROLE
    );
    const [selectedPeer, setPeerSelector] = useSetSubscribedChatSelector(
      CHAT_SELECTOR.PEER
    );
    const messageType = getMessageType({
      roles: message.recipientRoles,
      receiver: message.recipientPeer
    });
    const [openSheet, setOpenSheetBare] = useState18(false);
    const showPinAction = !!((_c = elements == null ? void 0 : elements.chat) == null ? void 0 : _c.allow_pinning_messages);
    const showReply = message.sender !== selectedPeer.id && message.sender !== localPeerId && isPrivateChatEnabled;
    useLayoutEffect(() => {
      if (rowRef.current) {
        setRowHeight(index, message.id, rowRef.current.clientHeight);
      }
    }, [index, message.id]);
    const setOpenSheet = (value, e) => {
      e == null ? void 0 : e.stopPropagation();
      setOpenSheetBare(value);
    };
    return /* @__PURE__ */ React51.createElement(
      Box,
      {
        css: {
          mb: "$5",
          pr: "$10",
          mt: "$4",
          "&:not(:hover} .chat_actions": { display: "none" },
          "&:hover .chat_actions": { display: "flex", opacity: 1 }
        },
        style
      },
      /* @__PURE__ */ React51.createElement(
        Flex,
        {
          ref: rowRef,
          align: "center",
          css: {
            flexWrap: "wrap",
            position: "relative",
            // Theme independent color, token should not be used for transparent chat
            background: getMessageBackgroundColor(
              messageType,
              selectedPeer.id,
              selectedRole,
              !!isOverlay
            ),
            r: "$1",
            p: "$4",
            userSelect: "none",
            "@md": {
              cursor: "pointer"
            },
            "&:hover": {
              background: "linear-gradient(277deg, $surface_default 0%, $surface_dim 60.87%)"
            }
          },
          "data-testid": "chat_msg",
          onClick: (e) => {
            if (isMobile) {
              setOpenSheet(true, e);
            }
          }
        },
        /* @__PURE__ */ React51.createElement(PinnedBy, { messageId: message.id, index, rowRef }),
        /* @__PURE__ */ React51.createElement(
          Text,
          {
            css: {
              color: isOverlay ? "#FFF" : "$on_surface_high",
              fontWeight: "$semiBold",
              display: "flex",
              alignItems: "center",
              alignSelf: "stretch",
              width: "100%"
            },
            as: "div"
          },
          /* @__PURE__ */ React51.createElement(
            Flex,
            {
              align: "baseline",
              css: {
                flexWrap: "nowrap",
                maxWidth: "calc(100% - 10ch)",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }
            },
            message.senderName === "You" || !message.senderName ? /* @__PURE__ */ React51.createElement(
              SenderName,
              {
                as: "span",
                variant: "sub2",
                css: {
                  color: isOverlay ? "#FFF" : "$on_surface_high",
                  fontWeight: "$semiBold"
                }
              },
              message.senderName || "Anonymous"
            ) : /* @__PURE__ */ React51.createElement(
              Tooltip,
              {
                title: message.senderName,
                side: "top",
                align: "start",
                boxCss: { zIndex: 50 }
              },
              /* @__PURE__ */ React51.createElement(
                SenderName,
                {
                  as: "span",
                  variant: "sub2",
                  css: {
                    color: isOverlay ? "#FFF" : "$on_surface_high",
                    fontWeight: "$semiBold"
                  }
                },
                message.sender === localPeerId ? `${message.senderName} (You)` : message.senderName
              )
            ),
            /* @__PURE__ */ React51.createElement(
              MessageType,
              {
                hasCurrentUserSent: message.sender === localPeerId,
                receiver: message.recipientPeer,
                roles: message.recipientRoles
              }
            )
          ),
          !isOverlay ? /* @__PURE__ */ React51.createElement(
            Text,
            {
              as: "span",
              variant: "caption",
              css: {
                color: "$on_surface_medium",
                flexShrink: 0,
                position: "absolute",
                right: 0,
                zIndex: 1,
                mr: "$4",
                p: "$2"
              }
            },
            formatTime2(message.time)
          ) : null,
          /* @__PURE__ */ React51.createElement(
            ChatActions,
            {
              showPinAction,
              message,
              sentByLocalPeer: message.sender === localPeerId,
              onReply: () => {
                setRoleSelector("");
                setPeerSelector({
                  id: message.sender,
                  name: message.senderName
                });
              },
              onReplyGroup: () => {
                if (message.senderRole) {
                  setRoleSelector(message.senderRole);
                  setPeerSelector({});
                }
              },
              showReply,
              isMobile,
              openSheet,
              setOpenSheet
            }
          )
        ),
        /* @__PURE__ */ React51.createElement(
          Text,
          {
            variant: "sm",
            css: {
              w: "100%",
              mt: "$2",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              userSelect: "all",
              color: isOverlay ? "#FFF" : "$on_surface_high"
            },
            onClick: (e) => {
              setOpenSheet(true, e);
            }
          },
          /* @__PURE__ */ React51.createElement(AnnotisedMessage, { message: message.message })
        )
      )
    );
  }
);
var MessageWrapper = React51.memo(
  ({
    index,
    style,
    data: data3
  }) => {
    return /* @__PURE__ */ React51.createElement(
      ChatMessage,
      {
        style,
        index,
        key: data3[index].id,
        message: data3[index]
      }
    );
  }
);
var VirtualizedChatMessages = React51.forwardRef(({ messages, scrollToBottom }, listRef) => {
  const hmsActions = useHMSActions17();
  const itemKey2 = useCallback15((index, data3) => {
    return data3[index].id;
  }, []);
  useEffect17(() => {
    requestAnimationFrame(() => scrollToBottom(1));
  }, [scrollToBottom]);
  return /* @__PURE__ */ React51.createElement(
    Box,
    {
      css: {
        mr: "-$10",
        h: "100%"
      }
    },
    /* @__PURE__ */ React51.createElement(
      AutoSizer,
      {
        style: {
          width: "90%"
        }
      },
      ({ height, width }) => /* @__PURE__ */ React51.createElement(
        VariableSizeList,
        {
          ref: (node) => {
            if (node) {
              listRef.current = node;
              listInstance = node;
            }
          },
          itemCount: messages.length,
          itemSize: getRowHeight,
          itemData: messages,
          width,
          height,
          style: {
            overflowX: "hidden"
          },
          itemKey: itemKey2,
          onItemsRendered: ({ visibleStartIndex, visibleStopIndex }) => {
            for (let i = visibleStartIndex; i <= visibleStopIndex; i++) {
              if (!messages[i].read) {
                hmsActions.setMessageRead(true, messages[i].id);
              }
            }
          }
        },
        MessageWrapper
      )
    )
  );
});
var ChatBody = React51.forwardRef(
  ({ scrollToBottom }, listRef) => {
    const messages = useHMSStore21(selectHMSMessages);
    const blacklistedMessageIDs = useHMSStore21(
      selectSessionStore5("chatMessageBlacklist" /* CHAT_MESSAGE_BLACKLIST */)
    );
    const filteredMessages = useMemo6(() => {
      const blacklistedMessageIDSet = new Set(blacklistedMessageIDs || []);
      return (messages == null ? void 0 : messages.filter(
        (message) => message.type === "chat" && !blacklistedMessageIDSet.has(message.id)
      )) || [];
    }, [blacklistedMessageIDs, messages]);
    const vanillaStore = useHMSVanillaStore8();
    const rerenderOnFirstMount = useRef12(false);
    useEffect17(() => {
      const unsubscribe = vanillaStore.subscribe(() => {
        if (!listRef.current) {
          return;
        }
        const outerElement = listRef.current._outerRef;
        if (outerElement && outerElement.clientHeight + outerElement.scrollTop + outerElement.offsetTop >= outerElement.scrollHeight) {
          requestAnimationFrame(() => scrollToBottom(1));
        }
      }, selectUnreadHMSMessagesCount);
      return unsubscribe;
    }, [vanillaStore, listRef, scrollToBottom]);
    useEffect17(() => {
      if (filteredMessages.length > 0 && (listRef == null ? void 0 : listRef.current) && !rerenderOnFirstMount.current) {
        rerenderOnFirstMount.current = true;
        listRef.current.resetAfterIndex(0);
      }
    }, [listRef, filteredMessages]);
    return filteredMessages.length === 0 ? /* @__PURE__ */ React51.createElement(EmptyChat, null) : /* @__PURE__ */ React51.createElement(
      VirtualizedChatMessages,
      {
        messages: filteredMessages,
        ref: listRef,
        scrollToBottom
      }
    );
  }
);
var PinnedBy = ({
  messageId,
  index,
  rowRef
}) => {
  const pinnedBy = usePinnedBy(messageId);
  const localPeerName = useHMSStore21(selectLocalPeerName2);
  useLayoutEffect(() => {
    if (rowRef == null ? void 0 : rowRef.current) {
      if (pinnedBy) {
        rowRef.current.style.background = "linear-gradient(277deg, var(--hms-ui-colors-surface_default) 0%, var(--hms-ui-colors-surface_dim) 60.87%)";
      } else {
        rowRef.current.style.background = "";
      }
      setRowHeight(index, messageId, rowRef == null ? void 0 : rowRef.current.clientHeight);
    }
  }, [index, messageId, pinnedBy, rowRef]);
  if (!pinnedBy) {
    return null;
  }
  return /* @__PURE__ */ React51.createElement(
    Flex,
    {
      align: "center",
      css: { gap: "$2", mb: "$2", color: "$on_surface_low" }
    },
    /* @__PURE__ */ React51.createElement(SolidPinIcon, { height: 12, width: 12 }),
    /* @__PURE__ */ React51.createElement(Text, { variant: "xs", css: { color: "inherit" } }, "Pinned by ", localPeerName === pinnedBy ? "you" : pinnedBy)
  );
};

// src/Prebuilt/components/PIP/PIPChat.tsx
var PIPChat = () => {
  var _a7, _b7, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const messages = useHMSStore22(selectHMSMessages2);
  const localPeerID = useHMSStore22(selectLocalPeerID5);
  const count = useHMSStore22(selectUnreadHMSMessagesCount2);
  const [unreadMessageCount, setUnreadMessageCount] = useState19(0);
  const getSenderName = useCallback16(
    (senderName, senderID) => {
      const slicedName = senderName.length > 10 ? senderName.slice(0, 10) + "..." : senderName;
      return slicedName + (senderID === localPeerID ? " (You)" : "");
    },
    [localPeerID]
  );
  useEffect18(() => {
    const timeoutId = setTimeout(() => {
      setUnreadMessageCount(count);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [count]);
  const blacklistedMessageIDs = useHMSStore22(
    selectSessionStore6("chatMessageBlacklist" /* CHAT_MESSAGE_BLACKLIST */)
  );
  const filteredMessages = useMemo7(() => {
    const blacklistedMessageIDSet = new Set(blacklistedMessageIDs || []);
    return (messages == null ? void 0 : messages.filter(
      (message) => message.type === "chat" && !blacklistedMessageIDSet.has(message.id)
    )) || [];
  }, [blacklistedMessageIDs, messages]);
  const { enabled: isChatEnabled = true, updatedBy: chatStateUpdatedBy = "" } = useHMSStore22(selectSessionStore6("chatState" /* CHAT_STATE */)) || {};
  const isLocalPeerBlacklisted = useIsPeerBlacklisted({ local: true });
  const { elements } = useRoomLayoutConferencingScreen();
  const message_placeholder = ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.message_placeholder) || "Send a message";
  const canSendChatMessages = !!((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.public_chat_enabled) || !!((_d = (_c = elements == null ? void 0 : elements.chat) == null ? void 0 : _c.roles_whitelist) == null ? void 0 : _d.length) || !!((_e = elements == null ? void 0 : elements.chat) == null ? void 0 : _e.private_chat_enabled);
  const getChatStatus = useCallback16(() => {
    if (isLocalPeerBlacklisted)
      return "You've been blocked from sending messages";
    if (!isChatEnabled)
      return `Chat has been paused by ${chatStateUpdatedBy.peerId === localPeerID ? "you" : chatStateUpdatedBy == null ? void 0 : chatStateUpdatedBy.userName}`;
    return message_placeholder;
  }, [
    chatStateUpdatedBy.peerId,
    chatStateUpdatedBy == null ? void 0 : chatStateUpdatedBy.userName,
    isChatEnabled,
    isLocalPeerBlacklisted,
    localPeerID,
    message_placeholder
  ]);
  return /* @__PURE__ */ React52.createElement("div", { style: { height: "100%" } }, /* @__PURE__ */ React52.createElement(
    Box,
    {
      id: "chat-container",
      css: {
        bg: "$surface_dim",
        overflowY: "auto",
        // Subtracting height of footer
        h: canSendChatMessages ? "calc(100% - 87px)" : "100%",
        position: "relative"
      }
    },
    unreadMessageCount ? /* @__PURE__ */ React52.createElement(
      Box,
      {
        id: "new-message-notif",
        style: {
          position: "fixed",
          bottom: "76px",
          right: "4px"
        }
      },
      /* @__PURE__ */ React52.createElement(
        Text,
        {
          variant: "xs",
          css: { cursor: "pointer" },
          style: {
            color: "white",
            background: "gray",
            padding: "4px",
            borderRadius: "4px"
          }
        },
        unreadMessageCount === 1 ? "New message" : `${unreadMessageCount} new messages`
      )
    ) : "",
    filteredMessages.length === 0 ? /* @__PURE__ */ React52.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ React52.createElement(Text, { variant: "h5", css: { mt: "$8", c: "$on_surface_high" } }, canSendChatMessages ? "Start a conversation" : "No messages yet"),
      canSendChatMessages ? /* @__PURE__ */ React52.createElement(
        Text,
        {
          variant: "sm",
          style: {
            maxWidth: "80%",
            textAlign: "center",
            marginTop: "4px"
          }
        },
        "There are no messages here yet. Start a conversation by sending a message."
      ) : ""
    ) : filteredMessages.map((message) => /* @__PURE__ */ React52.createElement(
      Box,
      {
        className: "pip-message",
        key: message.id,
        id: message.id,
        style: { padding: "8px 0.75rem" }
      },
      /* @__PURE__ */ React52.createElement(
        Flex,
        {
          style: {
            width: "100%",
            alignItems: "center",
            justifyContent: "between"
          }
        },
        /* @__PURE__ */ React52.createElement(
          Text,
          {
            style: {
              display: "flex",
              justifyContent: "between",
              width: "100%",
              alignItems: "center"
            },
            css: {
              color: "$on_surface_high",
              fontWeight: "$semiBold"
            }
          },
          /* @__PURE__ */ React52.createElement(
            Flex,
            {
              style: { flexGrow: 1, gap: "2px", alignItems: "center" }
            },
            message.senderName === "You" || !message.senderName ? /* @__PURE__ */ React52.createElement(
              Text,
              {
                as: "span",
                variant: "sub2",
                css: {
                  color: "$on_surface_high",
                  fontWeight: "$semiBold"
                }
              },
              message.senderName || "Anonymous"
            ) : /* @__PURE__ */ React52.createElement(
              Tooltip,
              {
                title: message.senderName,
                side: "top",
                align: "start"
              },
              /* @__PURE__ */ React52.createElement(
                Text,
                {
                  as: "span",
                  variant: "sub2",
                  css: {
                    color: "$on_surface_high",
                    fontWeight: "$semiBold"
                  }
                },
                getSenderName(message.senderName, message == null ? void 0 : message.sender)
              )
            ),
            /* @__PURE__ */ React52.createElement(
              MessageTitle,
              {
                localPeerID,
                recipientPeer: message.recipientPeer,
                recipientRoles: message.recipientRoles
              }
            )
          ),
          /* @__PURE__ */ React52.createElement(
            Text,
            {
              variant: "xs",
              css: {
                color: "$on_surface_medium",
                flexShrink: 0,
                p: "$2",
                whitespace: "nowrap"
              }
            },
            formatTime2(message.time)
          )
        )
      ),
      /* @__PURE__ */ React52.createElement(
        Text,
        {
          variant: "sm",
          css: {
            w: "100%",
            mt: "$2",
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
            userSelect: "all",
            color: "$on_surface_high"
          }
        },
        /* @__PURE__ */ React52.createElement(AnnotisedMessage, { message: message.message })
      )
    )),
    /* @__PURE__ */ React52.createElement(
      "div",
      {
        id: "marker",
        style: { height: filteredMessages.length ? "1px" : 0 }
      }
    )
  ), canSendChatMessages && /* @__PURE__ */ React52.createElement(Box, { css: { bg: "$surface_dim" } }, /* @__PURE__ */ React52.createElement(Flex, { css: { px: "$4", pb: "3px", gap: "$2", alignItems: "center" } }, /* @__PURE__ */ React52.createElement(Text, { variant: "caption" }, "To:"), /* @__PURE__ */ React52.createElement(
    Flex,
    {
      css: {
        bg: "$primary_bright",
        color: "$on_primary_high",
        r: "$2"
      }
    },
    /* @__PURE__ */ React52.createElement(
      "select",
      {
        id: "selector",
        style: {
          background: "inherit",
          color: "inherit",
          border: "none",
          outline: "none",
          borderRadius: "4px",
          padding: "0 2px"
        },
        defaultValue: ((_f = elements.chat) == null ? void 0 : _f.public_chat_enabled) ? "Everyone" : (_h = (_g = elements.chat) == null ? void 0 : _g.roles_whitelist) == null ? void 0 : _h[0]
      },
      (_j = (_i = elements.chat) == null ? void 0 : _i.roles_whitelist) == null ? void 0 : _j.map((role) => /* @__PURE__ */ React52.createElement("option", { key: role, value: role }, role)),
      ((_k = elements.chat) == null ? void 0 : _k.public_chat_enabled) ? /* @__PURE__ */ React52.createElement("option", { value: "Everyone" }, "Everyone") : ""
    )
  )), /* @__PURE__ */ React52.createElement(
    Flex,
    {
      align: "center",
      css: {
        bg: "$surface_default",
        minHeight: "$16",
        width: "100%",
        py: "$6",
        pl: "$4",
        boxSizing: "border-box",
        gap: "$2",
        r: "$2"
      }
    },
    /* @__PURE__ */ React52.createElement(
      TextArea,
      {
        id: "chat-input",
        maxLength: CHAT_MESSAGE_LIMIT,
        disabled: !isChatEnabled || isLocalPeerBlacklisted,
        rows: 1,
        css: {
          w: "100%",
          c: "$on_surface_high",
          p: "0.75rem 0.75rem !important",
          border: "none",
          resize: "none"
        },
        placeholder: getChatStatus(),
        required: true,
        autoComplete: "off",
        "aria-autocomplete": "none"
      }
    ),
    /* @__PURE__ */ React52.createElement(
      IconButton_default,
      {
        id: "send-btn",
        disabled: !isChatEnabled || isLocalPeerBlacklisted,
        title: getChatStatus(),
        css: {
          ml: "auto",
          height: "max-content",
          mr: "$4",
          "&:hover": { c: "$on_surface_medium" }
        },
        "data-testid": "send_msg_btn"
      },
      /* @__PURE__ */ React52.createElement(SendIcon, null)
    )
  )));
};
var MessageTitle = ({
  recipientPeer,
  recipientRoles,
  localPeerID
}) => {
  const peerName = useHMSStore22(selectPeerNameByID3(recipientPeer));
  return /* @__PURE__ */ React52.createElement(React52.Fragment, null, recipientRoles ? /* @__PURE__ */ React52.createElement(
    Text,
    {
      as: "span",
      variant: "sub2",
      css: { color: "$on_surface_high", fontWeight: "$semiBold" }
    },
    "to ",
    recipientRoles,
    " (Group)"
  ) : null, recipientPeer ? /* @__PURE__ */ React52.createElement(
    Text,
    {
      as: "span",
      variant: "sub2",
      css: { color: "$on_surface_high", fontWeight: "$semiBold" }
    },
    "to ",
    recipientPeer === localPeerID ? "You" : peerName,
    " (DM)"
  ) : null);
};

// src/Prebuilt/components/PIP/PIPChatOption.tsx
import React53 from "react";
import { ExternalLinkIcon } from "@100mslive/react-icons";
var PIPChatOption = ({
  openChat,
  showPIPChat
}) => {
  if (!showPIPChat) {
    return /* @__PURE__ */ React53.createElement(React53.Fragment, null);
  }
  return /* @__PURE__ */ React53.createElement(Dropdown.Item, { onClick: openChat, "data-testid": "pip_chat_btn" }, /* @__PURE__ */ React53.createElement(ExternalLinkIcon, null), /* @__PURE__ */ React53.createElement(Text, { variant: "sm", css: { ml: "$4", color: "$on_surface_high" } }, "Pop out Chat"));
};

// src/Prebuilt/components/PIP/PIPWindow.tsx
import { createPortal } from "react-dom";
var PIPWindow = ({ pipWindow, children }) => {
  pipWindow.document.body.style.margin = "0";
  pipWindow.document.body.style.overflow = "clip";
  return createPortal(children, pipWindow.document.body);
};

// src/Prebuilt/components/RoleChangeModal.tsx
import React54, { useRef as useRef13, useState as useState20 } from "react";
import { useMedia as useMedia9 } from "react-use";
import {
  selectAvailableRoleNames as selectAvailableRoleNames3,
  selectPeerByID,
  useHMSActions as useHMSActions18,
  useHMSStore as useHMSStore23
} from "@100mslive/react-sdk";
import {
  ChevronDownIcon as ChevronDownIcon3,
  ChevronUpIcon as ChevronUpIcon3,
  CrossIcon as CrossIcon8
} from "@100mslive/react-icons";
var HighlightTerm = ({ value }) => {
  return value ? /* @__PURE__ */ React54.createElement(Tooltip, { side: "top", title: value }, /* @__PURE__ */ React54.createElement(
    Text,
    {
      variant: "body2",
      css: {
        color: "$on_surface_medium",
        fontWeight: "$semiBold"
      }
    },
    "'",
    value.slice(0, 100),
    value.length > 100 ? "..." : "",
    "'"
  )) : /* @__PURE__ */ React54.createElement(React54.Fragment, null);
};
var RoleChangeContent = ({
  peer,
  onOpenChange,
  isMobile = false
}) => {
  var _a7;
  const roles = useHMSStore23(selectAvailableRoleNames3).filter(
    (role) => role !== (peer == null ? void 0 : peer.roleName) && role !== "__internal_recorder"
  );
  const [selectedRole, setRole] = useState20(
    ((_a7 = roles.filter((role) => role !== (peer == null ? void 0 : peer.roleName))) == null ? void 0 : _a7[0]) || (peer == null ? void 0 : peer.roleName)
  );
  const hmsActions = useHMSActions18();
  const [open, setOpen] = useState20(false);
  const triggerRef = useRef13();
  return /* @__PURE__ */ React54.createElement(React54.Fragment, null, /* @__PURE__ */ React54.createElement(Flex, { align: "center", justify: "between", css: { w: "100%" } }, /* @__PURE__ */ React54.createElement(Text, { as: "h6", variant: "h6" }, "Switch Role"), isMobile && /* @__PURE__ */ React54.createElement(CrossIcon8, { onClick: () => onOpenChange(false) })), /* @__PURE__ */ React54.createElement(Box, null, /* @__PURE__ */ React54.createElement(
    Text,
    {
      variant: "sm",
      css: {
        mt: "$4",
        mb: "$8",
        c: "$on_surface_medium",
        display: "flex",
        flexWrap: "wrap",
        columnGap: "4px"
      }
    },
    "Switch the role of",
    /* @__PURE__ */ React54.createElement(HighlightTerm, { value: peer.name }),
    "from ",
    /* @__PURE__ */ React54.createElement(HighlightTerm, { value: peer.roleName }),
    " to"
  )), /* @__PURE__ */ React54.createElement(
    Flex,
    {
      align: "center",
      css: {
        w: "100%",
        mb: "$10"
      }
    },
    /* @__PURE__ */ React54.createElement(
      Box,
      {
        css: {
          position: "relative",
          flex: "1 1 0",
          minWidth: 0
        }
      },
      /* @__PURE__ */ React54.createElement(
        Dropdown.Root,
        {
          open,
          onOpenChange: setOpen,
          css: { width: "100%" }
        },
        /* @__PURE__ */ React54.createElement(
          Dropdown.Trigger,
          {
            ref: triggerRef,
            "data-testid": "open_role_selection_dropdown",
            asChild: true,
            css: {
              bg: "$surface_default",
              r: "$1",
              p: "$6 $9"
            }
          },
          /* @__PURE__ */ React54.createElement(Flex, { align: "center", justify: "between", css: { width: "100%" } }, /* @__PURE__ */ React54.createElement(Text, null, selectedRole), open ? /* @__PURE__ */ React54.createElement(ChevronUpIcon3, null) : /* @__PURE__ */ React54.createElement(ChevronDownIcon3, null))
        ),
        /* @__PURE__ */ React54.createElement(
          Dropdown.Content,
          {
            align: "start",
            sideOffset: 8,
            css: { zIndex: 1e3, w: "100%" }
          },
          roles.map((role) => {
            var _a8;
            return /* @__PURE__ */ React54.createElement(
              Dropdown.Item,
              {
                "data-testid": role,
                key: role,
                onSelect: () => setRole(role),
                css: { w: `${(_a8 = triggerRef.current) == null ? void 0 : _a8.clientWidth}px` }
              },
              role
            );
          })
        )
      )
    )
  ), /* @__PURE__ */ React54.createElement(Flex, { justify: "center", align: "center", css: { width: "100%", gap: "$md" } }, !isMobile && /* @__PURE__ */ React54.createElement(
    Button,
    {
      variant: "standard",
      outlined: true,
      css: { width: "100%" },
      onClick: () => onOpenChange(false),
      "data-testid": "cancel_button"
    },
    "Cancel"
  ), /* @__PURE__ */ React54.createElement(
    Button,
    {
      "data-testid": "change_button",
      variant: "primary",
      css: { width: "100%" },
      onClick: () => __async(void 0, null, function* () {
        if (selectedRole) {
          yield hmsActions.changeRoleOfPeer(peer.id, selectedRole, true);
          onOpenChange(false);
        }
      })
    },
    "Switch Role"
  )));
};
var RoleChangeModal = ({
  peerId,
  onOpenChange
}) => {
  const peer = useHMSStore23(selectPeerByID(peerId));
  const isMobile = useMedia9(config.media.md);
  if (!peer) {
    return null;
  }
  if (isMobile) {
    return /* @__PURE__ */ React54.createElement(
      Sheet.Root,
      {
        open: true,
        onOpenChange,
        css: { borderRadius: "$0 $0 0 0" }
      },
      /* @__PURE__ */ React54.createElement(
        Sheet.Content,
        {
          css: {
            p: "$10 $8",
            background: "$surface_dim",
            border: "1px solid $border_default"
          }
        },
        /* @__PURE__ */ React54.createElement(RoleChangeContent, { peer, onOpenChange, isMobile: true })
      )
    );
  }
  return /* @__PURE__ */ React54.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React54.createElement(Dialog.Portal, null, /* @__PURE__ */ React54.createElement(Dialog.Overlay, null), /* @__PURE__ */ React54.createElement(
    Dialog.Content,
    {
      css: { width: "min(400px,80%)", p: "$10", overflow: "visible" }
    },
    /* @__PURE__ */ React54.createElement(RoleChangeContent, { peer, onOpenChange })
  )));
};

// src/Prebuilt/components/Settings/StartRecording.jsx
import React57, { useState as useState22 } from "react";
import {
  selectPermissions as selectPermissions6,
  useHMSActions as useHMSActions19,
  useHMSStore as useHMSStore24,
  useRecordingStreaming as useRecordingStreaming5
} from "@100mslive/react-sdk";
import { AlertTriangleIcon as AlertTriangleIcon3 } from "@100mslive/react-icons";

// src/Prebuilt/components/Streaming/ResolutionInput.jsx
import React56, { useCallback as useCallback17, useState as useState21 } from "react";
import { InfoIcon } from "@100mslive/react-icons";

// src/Prebuilt/primitives/DialogContent.jsx
import React55, { useRef as useRef14 } from "react";
import { CheckIcon as CheckIcon2, CloudUploadIcon, CrossIcon as CrossIcon9 } from "@100mslive/react-icons";
var DialogContent = (_a7) => {
  var _b7 = _a7, {
    Icon: Icon4,
    title,
    closeable = true,
    children,
    css: css2,
    iconCSS = {}
  } = _b7, props = __objRest(_b7, [
    "Icon",
    "title",
    "closeable",
    "children",
    "css",
    "iconCSS"
  ]);
  return /* @__PURE__ */ React55.createElement(Dialog.Portal, null, /* @__PURE__ */ React55.createElement(Dialog.Overlay, null), /* @__PURE__ */ React55.createElement(Dialog.Content, __spreadValues({ css: __spreadValues({ width: "min(600px, 100%)" }, css2) }, props), /* @__PURE__ */ React55.createElement(Dialog.Title, null, /* @__PURE__ */ React55.createElement(Flex, { justify: "between" }, /* @__PURE__ */ React55.createElement(Flex, { align: "center", css: { mb: "$1" } }, Icon4 ? /* @__PURE__ */ React55.createElement(
    Flex,
    {
      css: __spreadValues(__spreadValues({
        mr: "$2",
        color: "$on_primary_high"
      }, flexCenter), iconCSS)
    },
    /* @__PURE__ */ React55.createElement(Icon4, null)
  ) : null, /* @__PURE__ */ React55.createElement(Text, { variant: "h6", inline: true }, title)), closeable && /* @__PURE__ */ React55.createElement(Dialog.DefaultClose, { "data-testid": "dialoge_cross_icon" }))), /* @__PURE__ */ React55.createElement(HorizontalDivider, { css: { mt: "0.8rem" } }), /* @__PURE__ */ React55.createElement(Box, null, children)));
};
var ErrorDialog = (_a7) => {
  var _b7 = _a7, {
    open = true,
    onOpenChange,
    title,
    children
  } = _b7, props = __objRest(_b7, [
    "open",
    "onOpenChange",
    "title",
    "children"
  ]);
  return /* @__PURE__ */ React55.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ React55.createElement(
    DialogContent,
    __spreadValues({
      Icon: CrossIcon9,
      title,
      onInteractOutside: (e) => e.preventDefault(),
      onEscapeKeyDown: (e) => e.preventDefault(),
      onPointerDownOutside: (e) => e.preventDefault(),
      closeable: false,
      iconCSS: { color: "$alert_error_default" }
    }, props),
    /* @__PURE__ */ React55.createElement(Box, { css: { mt: "$lg" } }, children)
  ));
};
var RequestDialog = ({
  open = true,
  onOpenChange,
  title,
  body,
  actionText = "Accept",
  onAction,
  Icon: Icon4
}) => /* @__PURE__ */ React55.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ React55.createElement(Dialog.Portal, null, /* @__PURE__ */ React55.createElement(Dialog.Overlay, null), /* @__PURE__ */ React55.createElement(Dialog.Content, { css: { width: "min(400px,80%)", p: "$10" } }, /* @__PURE__ */ React55.createElement(
  Dialog.Title,
  {
    css: { p: 0, display: "flex", flexDirection: "row", gap: "$md" }
  },
  Icon4 ? Icon4 : null,
  /* @__PURE__ */ React55.createElement(Text, { variant: "h6" }, title)
), typeof body === "string" ? /* @__PURE__ */ React55.createElement(
  Text,
  {
    variant: "md",
    css: {
      fontWeight: 400,
      mt: "$4",
      mb: "$10",
      c: "$on_surface_medium"
    }
  },
  body
) : /* @__PURE__ */ React55.createElement(Box, { css: { mt: "$4", mb: "$10" } }, body), /* @__PURE__ */ React55.createElement(
  Flex,
  {
    justify: "center",
    align: "center",
    css: { width: "100%", gap: "$md" }
  },
  /* @__PURE__ */ React55.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ React55.createElement(Dialog.Close, { css: { width: "100%" } }, /* @__PURE__ */ React55.createElement(Button, { variant: "standard", outlined: true, css: { width: "100%" } }, "Cancel"))),
  /* @__PURE__ */ React55.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ React55.createElement(
    Button,
    {
      variant: "primary",
      css: { width: "100%" },
      onClick: onAction
    },
    actionText
  ))
))));
var DialogRow = ({
  children,
  breakSm = false,
  css: css2,
  justify = "between"
}) => {
  let finalCSS = {
    margin: "$10 0",
    w: "100%"
  };
  if (breakSm) {
    finalCSS["@sm"] = {
      flexDirection: "column",
      alignItems: "flex-start"
    };
  }
  if (css2) {
    finalCSS = Object.assign(finalCSS, css2);
  }
  return /* @__PURE__ */ React55.createElement(Flex, { align: "center", justify, css: finalCSS }, children);
};
var DialogCol = (_a7) => {
  var _b7 = _a7, {
    children,
    breakSm = false,
    css: css2,
    align = "center",
    justify = "between"
  } = _b7, props = __objRest(_b7, [
    "children",
    "breakSm",
    "css",
    "align",
    "justify"
  ]);
  let finalCSS = {
    margin: "$10 0",
    w: "100%"
  };
  if (breakSm) {
    finalCSS["@sm"] = {
      alignItems: "flex-start"
    };
  }
  if (css2) {
    finalCSS = Object.assign(finalCSS, css2);
  }
  return /* @__PURE__ */ React55.createElement(
    Flex,
    __spreadValues({
      direction: "column",
      align,
      justify,
      css: finalCSS
    }, props),
    children
  );
};
var DialogSelect = (_a7) => {
  var _b7 = _a7, {
    title,
    options,
    keyField,
    labelField,
    selected,
    onChange
  } = _b7, props = __objRest(_b7, [
    "title",
    "options",
    "keyField",
    "labelField",
    "selected",
    "onChange"
  ]);
  return /* @__PURE__ */ React55.createElement(DialogRow, { breakSm: true }, /* @__PURE__ */ React55.createElement(Label3, null, title), /* @__PURE__ */ React55.createElement(
    Select.Root,
    __spreadValues({
      "data-testid": `dialog_select_${title}`,
      css: { width: "70%", "@sm": { width: "100%" } }
    }, props),
    /* @__PURE__ */ React55.createElement(Select.DefaultDownIcon, null),
    /* @__PURE__ */ React55.createElement(
      Select.Select,
      {
        onChange: (e) => onChange(e.target.value),
        value: selected,
        css: { width: "100%" }
      },
      options.map((option) => {
        const id = keyField ? option[keyField] : option;
        const label = labelField ? option[labelField] : option;
        return /* @__PURE__ */ React55.createElement("option", { value: id, key: id }, label);
      })
    )
  ));
};
var DialogInputFile = (_a7) => {
  var _b7 = _a7, {
    value,
    onChange,
    placeholder,
    disabled,
    type
  } = _b7, props = __objRest(_b7, [
    "value",
    "onChange",
    "placeholder",
    "disabled",
    "type"
  ]);
  const inputRef = useRef14();
  return /* @__PURE__ */ React55.createElement(
    DialogCol,
    {
      breakSm: true,
      onClick: () => {
        var _a8;
        return (_a8 = inputRef.current) == null ? void 0 : _a8.click();
      },
      css: {
        justifyContent: "center",
        position: "relative",
        cursor: "pointer",
        py: "$12",
        border: "1px dashed $border_bright",
        r: "$1",
        height: "max(140px, 30%)",
        alignItems: "center",
        m: "$6 0"
      },
      gap: "8"
    },
    /* @__PURE__ */ React55.createElement(
      IconButton,
      {
        variant: "standard",
        css: {
          border: "none",
          background: "none",
          "&:hover": {
            border: "none",
            background: "none",
            bg: "transparent !important"
          }
        }
      },
      /* @__PURE__ */ React55.createElement(
        CloudUploadIcon,
        {
          style: {
            width: "3rem",
            height: "3rem"
          }
        }
      )
    ),
    /* @__PURE__ */ React55.createElement(Flex, { direction: "row" }, /* @__PURE__ */ React55.createElement(
      Input,
      __spreadValues({
        ref: inputRef,
        css: { width: "70%", "@sm": { width: "100%" } },
        value,
        onChange: (e) => onChange(e.target),
        placeholder,
        disabled,
        type,
        hidden: true
      }, props)
    ), /* @__PURE__ */ React55.createElement(
      IconButton,
      {
        variant: "standard",
        css: {
          background: "none",
          border: "none",
          textDecoration: "underline",
          "&:hover": {
            background: "none !important",
            border: "none !important"
          }
        }
      },
      /* @__PURE__ */ React55.createElement(Text, { variant: "md" }, placeholder)
    ))
  );
};

// src/Prebuilt/components/Streaming/ResolutionInput.jsx
var ResolutionInput = ({
  onResolutionChange,
  disabled,
  tooltipText,
  css: css2,
  testId
}) => {
  const [resolution, setResolution] = useState21(RTMP_RECORD_DEFAULT_RESOLUTION);
  const resolutionChangeHandler = useCallback17(
    (event) => {
      const { name, value } = event.target;
      let width = name === "resWidth" ? Number(value) : resolution.width;
      let height = name === "resHeight" ? Number(value) : resolution.height;
      if (width === 0) {
        width = null;
      }
      if (height === 0) {
        height = null;
      }
      const newResolution = {
        width: !isNaN(width) ? width : RTMP_RECORD_DEFAULT_RESOLUTION.width,
        height: !isNaN(height) ? height : RTMP_RECORD_DEFAULT_RESOLUTION.height
      };
      setResolution(newResolution);
    },
    [resolution]
  );
  return /* @__PURE__ */ React56.createElement(DialogRow, { breakSm: true, css: css2 }, /* @__PURE__ */ React56.createElement(Flex, { gap: 1 }, /* @__PURE__ */ React56.createElement(Label3, { css: { mb: "$8" } }, "Resolution"), tooltipText && /* @__PURE__ */ React56.createElement(Tooltip, { title: tooltipText }, /* @__PURE__ */ React56.createElement("div", null, /* @__PURE__ */ React56.createElement(InfoIcon, { color: "#B0C3DB" })))), /* @__PURE__ */ React56.createElement(
    Flex,
    {
      justify: "between",
      css: { width: !tooltipText ? "100%" : "70%", "@sm": { width: "100%" } },
      gap: 2,
      direction: "column"
    },
    /* @__PURE__ */ React56.createElement(Flex, { justify: "between", gap: 2 }, /* @__PURE__ */ React56.createElement(Flex, { direction: "column", css: { width: "50%" } }, /* @__PURE__ */ React56.createElement(Text, { variant: "xs" }, "Width"), /* @__PURE__ */ React56.createElement(
      Input,
      {
        "data-testid": `${testId}_width`,
        css: { width: "100%", mt: "$4" },
        name: "resWidth",
        value: resolution.width,
        onChange: resolutionChangeHandler,
        readOnly: disabled,
        min: RTMP_RECORD_RESOLUTION_MIN,
        max: RTMP_RECORD_RESOLUTION_MAX,
        onBlur: () => onResolutionChange(resolution),
        type: "number"
      }
    )), /* @__PURE__ */ React56.createElement(Flex, { direction: "column", css: { width: "50%" } }, /* @__PURE__ */ React56.createElement(Text, { variant: "xs" }, "Height"), /* @__PURE__ */ React56.createElement(
      Input,
      {
        "data-testid": `${testId}_height`,
        css: { width: "100%", mt: "$4" },
        name: "resHeight",
        value: resolution.height,
        onChange: resolutionChangeHandler,
        onBlur: () => onResolutionChange(resolution),
        readOnly: disabled,
        min: RTMP_RECORD_RESOLUTION_MIN,
        max: RTMP_RECORD_RESOLUTION_MAX,
        type: "number"
      }
    )))
  ));
};

// src/Prebuilt/components/Settings/StartRecording.jsx
var StartRecording = ({ open, onOpenChange }) => {
  const permissions = useHMSStore24(selectPermissions6);
  const [resolution, setResolution] = useState22(RTMP_RECORD_DEFAULT_RESOLUTION);
  const { startRecording, recordingStarted } = useRecordingHandler();
  const { isBrowserRecordingOn, isStreamingOn, isHLSRunning } = useRecordingStreaming5();
  const hmsActions = useHMSActions19();
  if (!(permissions == null ? void 0 : permissions.browserRecording) || isHLSRunning) {
    return null;
  }
  if (isBrowserRecordingOn) {
    return /* @__PURE__ */ React57.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ React57.createElement(Dialog.Portal, null, /* @__PURE__ */ React57.createElement(
      Dialog.Content,
      {
        css: {
          width: "min(400px,80%)",
          p: "$10",
          bg: "#201617"
        }
      },
      /* @__PURE__ */ React57.createElement(Dialog.Title, null, /* @__PURE__ */ React57.createElement(Flex, { gap: 2, css: { c: "$alert_error_default" } }, /* @__PURE__ */ React57.createElement(AlertTriangleIcon3, null), /* @__PURE__ */ React57.createElement(Text, { css: { c: "inherit" }, variant: "h6" }, "End Recording"))),
      /* @__PURE__ */ React57.createElement(Text, { variant: "sm", css: { c: "$on_surface_medium", my: "$8" } }, "Are you sure you want to end recording? You can\u2019t undo this action."),
      /* @__PURE__ */ React57.createElement(Flex, { justify: "end", css: { mt: "$12" } }, /* @__PURE__ */ React57.createElement(Dialog.Close, { asChild: true }, /* @__PURE__ */ React57.createElement(
        Button,
        {
          outlined: true,
          css: { borderColor: "$secondary_bright", mr: "$4" }
        },
        "Don't end"
      )), /* @__PURE__ */ React57.createElement(
        Button,
        {
          "data-testid": "stop_recording_confirm_mobile",
          variant: "danger",
          icon: true,
          onClick: () => __async(void 0, null, function* () {
            try {
              yield hmsActions.stopRTMPAndRecording();
            } catch (error) {
              ToastManager.addToast({
                title: error.message,
                variant: "error"
              });
            }
            onOpenChange(false);
          })
        },
        "End recording"
      ))
    )));
  }
  return /* @__PURE__ */ React57.createElement(Dialog.Root, { open, onOpenChange }, /* @__PURE__ */ React57.createElement(Dialog.Content, { css: { width: "min(400px,80%)", p: "$10" } }, /* @__PURE__ */ React57.createElement(Dialog.Title, null, /* @__PURE__ */ React57.createElement(Text, { variant: "h6" }, "Start Recording")), /* @__PURE__ */ React57.createElement(
    ResolutionInput,
    {
      testId: "recording_resolution_mobile",
      css: { flexDirection: "column", alignItems: "start" },
      onResolutionChange: setResolution
    }
  ), /* @__PURE__ */ React57.createElement(
    Button,
    {
      "data-testid": "start_recording_confirm_mobile",
      variant: "primary",
      icon: true,
      css: { ml: "auto" },
      type: "submit",
      disabled: recordingStarted || isStreamingOn,
      onClick: () => __async(void 0, null, function* () {
        yield startRecording(resolution);
        onOpenChange(false);
      })
    },
    "Start"
  )));
};
var StartRecording_default = StartRecording;

// src/Prebuilt/components/StatsForNerds.jsx
import React58, { useEffect as useEffect19, useMemo as useMemo8, useRef as useRef15, useState as useState23 } from "react";
import { match as match4, P as P3 } from "ts-pattern";
import {
  selectHMSStats as selectHMSStats3,
  selectLocalPeerID as selectLocalPeerID6,
  selectPeersMap,
  selectTracksMap as selectTracksMap2,
  useHMSStatsStore as useHMSStatsStore3,
  useHMSStore as useHMSStore25
} from "@100mslive/react-sdk";
var StatsForNerds = ({ onOpenChange }) => {
  var _a7;
  const tracksWithLabels = useTracksWithLabel();
  const statsOptions = useMemo8(
    () => [
      { id: "local-peer", label: "Local Peer Stats" },
      ...tracksWithLabels
    ],
    [tracksWithLabels]
  );
  const [selectedStat, setSelectedStat] = useState23(statsOptions[0]);
  const [showStatsOnTiles, setShowStatsOnTiles] = useSetUiSettings(
    UI_SETTINGS.showStatsOnTiles
  );
  const [open, setOpen] = useState23(false);
  const ref = useRef15();
  const selectionBg = useDropdownSelection();
  useEffect19(() => {
    if (selectedStat.id !== "local-peer" && !tracksWithLabels.find((track) => track.id === selectedStat.id)) {
      setSelectedStat("local-peer");
    }
  }, [tracksWithLabels, selectedStat]);
  return /* @__PURE__ */ React58.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React58.createElement(Dialog.Portal, null, /* @__PURE__ */ React58.createElement(Dialog.Overlay, null), /* @__PURE__ */ React58.createElement(
    Dialog.Content,
    {
      css: {
        width: "min(500px, 95%)",
        maxHeight: "100%",
        overflowY: "auto"
      }
    },
    /* @__PURE__ */ React58.createElement(Dialog.Title, { css: { p: "$4 0" } }, /* @__PURE__ */ React58.createElement(Flex, { justify: "between" }, /* @__PURE__ */ React58.createElement(Flex, { align: "center", css: { mb: "$1" } }, /* @__PURE__ */ React58.createElement(Text, { variant: "h6", inline: true }, "Stats For Nerds")), /* @__PURE__ */ React58.createElement(Dialog.DefaultClose, { "data-testid": "stats_dialog_close_icon" }))),
    /* @__PURE__ */ React58.createElement(HorizontalDivider, { css: { mt: "0.8rem" } }),
    /* @__PURE__ */ React58.createElement(Flex, { justify: "start", gap: 4, css: { m: "$10 0" } }, /* @__PURE__ */ React58.createElement(
      Switch,
      {
        checked: showStatsOnTiles,
        onCheckedChange: setShowStatsOnTiles
      }
    ), /* @__PURE__ */ React58.createElement(Text, { variant: "body2", css: { fontWeight: "$semiBold" } }, "Show Stats on Tiles")),
    /* @__PURE__ */ React58.createElement(
      Flex,
      {
        direction: "column",
        css: {
          mb: "$12",
          position: "relative",
          minWidth: 0
        }
      },
      /* @__PURE__ */ React58.createElement(Label3, { variant: "body2", css: { c: "$on_surface_high" } }, "Stats For"),
      /* @__PURE__ */ React58.createElement(
        Dropdown.Root,
        {
          "data-testid": "dialog_select_Stats For",
          open,
          onOpenChange: setOpen
        },
        /* @__PURE__ */ React58.createElement(
          DialogDropdownTrigger,
          {
            title: selectedStat.label || "Select Stats",
            css: { mt: "$4" },
            titleCSS: { mx: 0 },
            open,
            ref
          }
        ),
        /* @__PURE__ */ React58.createElement(Dropdown.Portal, null, /* @__PURE__ */ React58.createElement(
          Dropdown.Content,
          {
            align: "start",
            sideOffset: 8,
            css: { w: (_a7 = ref.current) == null ? void 0 : _a7.clientWidth, zIndex: 1e3 }
          },
          statsOptions.map((option) => {
            const isSelected = option.id === selectedStat.id && option.layer === selectedStat.layer;
            return /* @__PURE__ */ React58.createElement(
              Dropdown.Item,
              {
                key: `${option.id}-${option.layer || ""}`,
                onClick: () => {
                  setSelectedStat(option);
                },
                css: {
                  px: "$9",
                  bg: isSelected ? selectionBg : void 0,
                  c: isSelected ? "$on_primary_high" : "$on_primary_high"
                }
              },
              option.label
            );
          })
        ))
      )
    ),
    selectedStat.id === "local-peer" ? /* @__PURE__ */ React58.createElement(LocalPeerStats, null) : /* @__PURE__ */ React58.createElement(
      TrackStats,
      {
        trackID: selectedStat.id,
        layer: selectedStat.layer,
        local: selectedStat.local
      }
    )
  )));
};
var useTracksWithLabel = () => {
  const tracksMap = useHMSStore25(selectTracksMap2);
  const peersMap = useHMSStore25(selectPeersMap);
  const localPeerID = useHMSStore25(selectLocalPeerID6);
  const tracksWithLabels = useMemo8(
    () => Object.values(tracksMap).reduce((res, track) => {
      var _a7, _b7;
      const peerName = (_a7 = peersMap[track.peerId]) == null ? void 0 : _a7.name;
      const isLocalTrack = track.peerId === localPeerID;
      if (isLocalTrack && ((_b7 = track.layerDefinitions) == null ? void 0 : _b7.length)) {
        res = res.concat(
          track.layerDefinitions.map(({ layer }) => {
            return {
              id: track.id,
              layer,
              local: true,
              label: `${peerName} ${track.source} ${track.type} - ${layer}`
            };
          })
        );
        return res;
      }
      res.push({
        id: track.id,
        local: isLocalTrack,
        label: `${peerName} ${track.source} ${track.type}`
      });
      return res;
    }, []),
    [tracksMap, peersMap, localPeerID]
  );
  return tracksWithLabels;
};
var LocalPeerStats = () => {
  var _a7, _b7, _c, _d, _e, _f, _g, _h, _i;
  const stats = useHMSStatsStore3(selectHMSStats3.localPeerStats);
  if (!stats) {
    return null;
  }
  return /* @__PURE__ */ React58.createElement(Flex, { css: { flexWrap: "wrap", gap: "$10" } }, /* @__PURE__ */ React58.createElement(StatsRow2, { label: "Packets Lost", value: (_a7 = stats.subscribe) == null ? void 0 : _a7.packetsLost }), /* @__PURE__ */ React58.createElement(StatsRow2, { label: "Jitter", value: (_b7 = stats.subscribe) == null ? void 0 : _b7.jitter }), /* @__PURE__ */ React58.createElement(
    StatsRow2,
    {
      label: "Publish Bitrate",
      value: formatBytes((_c = stats.publish) == null ? void 0 : _c.bitrate, "b/s")
    }
  ), /* @__PURE__ */ React58.createElement(
    StatsRow2,
    {
      label: "Subscribe Bitrate",
      value: formatBytes((_d = stats.subscribe) == null ? void 0 : _d.bitrate, "b/s")
    }
  ), /* @__PURE__ */ React58.createElement(
    StatsRow2,
    {
      label: "Available Outgoing Bitrate",
      value: formatBytes((_e = stats.publish) == null ? void 0 : _e.availableOutgoingBitrate, "b/s")
    }
  ), /* @__PURE__ */ React58.createElement(
    StatsRow2,
    {
      label: "Total Bytes Sent",
      value: formatBytes((_f = stats.publish) == null ? void 0 : _f.bytesSent)
    }
  ), /* @__PURE__ */ React58.createElement(
    StatsRow2,
    {
      label: "Total Bytes Received",
      value: formatBytes((_g = stats.subscribe) == null ? void 0 : _g.bytesReceived)
    }
  ), /* @__PURE__ */ React58.createElement(
    StatsRow2,
    {
      label: "Round Trip Time",
      value: `${(((((_h = stats.publish) == null ? void 0 : _h.currentRoundTripTime) || 0) + (((_i = stats.subscribe) == null ? void 0 : _i.currentRoundTripTime) || 0)) / 2).toFixed(3) * 1e3} ms`
    }
  ));
};
var TrackStats = ({ trackID, layer, local }) => {
  var _a7;
  const selector = match4({ trackID, layer, local }).with(
    {
      layer: P3.when((layer2) => !!layer2)
    },
    () => selectHMSStats3.localVideoTrackStatsByLayer(layer)(trackID)
  ).with(
    { local: P3.when((local2) => !!local2) },
    () => selectHMSStats3.localAudioTrackStatsByID(trackID)
  ).otherwise(() => selectHMSStats3.trackStatsByID(trackID));
  const stats = useHMSStatsStore3(selector);
  if (!stats) {
    return null;
  }
  const inbound = stats.type.includes("inbound");
  return /* @__PURE__ */ React58.createElement(Flex, { css: { flexWrap: "wrap", gap: "$10" } }, /* @__PURE__ */ React58.createElement(StatsRow2, { label: "Type", value: stats.type + " " + stats.kind }), /* @__PURE__ */ React58.createElement(StatsRow2, { label: "Bitrate", value: formatBytes(stats.bitrate, "b/s") }), /* @__PURE__ */ React58.createElement(StatsRow2, { label: "Packets Lost", value: stats.packetsLost }), /* @__PURE__ */ React58.createElement(StatsRow2, { label: "Jitter", value: (_a7 = stats.jitter) == null ? void 0 : _a7.toFixed(3) }), /* @__PURE__ */ React58.createElement(
    StatsRow2,
    {
      label: inbound ? "Bytes Received" : "Bytes Sent",
      value: formatBytes(inbound ? stats.bytesReceived : stats.bytesSent)
    }
  ), stats.kind === "video" && /* @__PURE__ */ React58.createElement(React58.Fragment, null, /* @__PURE__ */ React58.createElement(StatsRow2, { label: "Framerate", value: stats.framesPerSecond }), !inbound && /* @__PURE__ */ React58.createElement(
    StatsRow2,
    {
      label: "Quality Limitation Reason",
      value: stats.qualityLimitationReason
    }
  )), /* @__PURE__ */ React58.createElement(
    StatsRow2,
    {
      label: "Round Trip Time",
      value: stats.roundTripTime ? `${(stats.roundTripTime * 1e3).toFixed(3)} ms` : "-"
    }
  ));
};
var StatsRow2 = React58.memo(({ label, value }) => /* @__PURE__ */ React58.createElement(Box, { css: { bg: "$surface_bright", w: "calc(50% - $6)", p: "$8", r: "$3" } }, /* @__PURE__ */ React58.createElement(
  Text,
  {
    variant: "overline",
    css: {
      fontWeight: "$semiBold",
      color: "$on_surface_medium",
      textTransform: "uppercase"
    }
  },
  label
), /* @__PURE__ */ React58.createElement(
  Text,
  {
    variant: "sub1",
    css: { fontWeight: "$semiBold", color: "$on_surface_high" }
  },
  value || "-"
)));

// src/Prebuilt/components/MoreSettings/BulkRoleChangeModal.jsx
import React59, { useCallback as useCallback18, useRef as useRef16, useState as useState24 } from "react";
import { useHMSActions as useHMSActions20 } from "@100mslive/react-sdk";
import {
  AlertTriangleIcon as AlertTriangleIcon4,
  ChangeRoleIcon,
  CheckIcon as CheckIcon3
} from "@100mslive/react-icons";
var BulkRoleChangeModal = ({ onOpenChange }) => {
  var _a7, _b7;
  const roles = useFilteredRoles();
  const hmsActions = useHMSActions20();
  const ref = useRef16(null);
  const roleRef = useRef16(null);
  const [selectedBulkRole, setBulkRole] = useState24([]);
  const [selectedRole, setRole] = useState24("");
  const [bulkRoleDialog, setBulkRoleDialog] = useState24(false);
  const [roleDialog, setRoleDialog] = useState24(false);
  const [errorMessage, setErrorMessage] = useState24("");
  const [isSubmiting, setIsSubmiting] = useState24(false);
  const changeBulkRole = useCallback18(() => __async(void 0, null, function* () {
    if (selectedBulkRole.length > 0 && selectedRole) {
      try {
        setIsSubmiting(true);
        yield hmsActions.changeRoleOfPeersWithRoles(
          selectedBulkRole,
          selectedRole
        );
        setIsSubmiting(false);
        setErrorMessage("");
        onOpenChange(false);
      } catch (err) {
        setErrorMessage((err == null ? void 0 : err.message) ? err == null ? void 0 : err.message : "Unknown error");
        setIsSubmiting(false);
      }
    }
  }), [selectedBulkRole, selectedRole, hmsActions, onOpenChange]);
  return /* @__PURE__ */ React59.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React59.createElement(DialogContent, { title: "Bulk Role Change", Icon: ChangeRoleIcon }, /* @__PURE__ */ React59.createElement(DialogRow, null, /* @__PURE__ */ React59.createElement(Text, null, "For Roles: "), /* @__PURE__ */ React59.createElement(
    Dropdown.Root,
    {
      open: bulkRoleDialog,
      onOpenChange: (value) => {
        if (value) {
          setBulkRoleDialog(value);
        }
      },
      modal: false
    },
    /* @__PURE__ */ React59.createElement(
      DialogDropdownTrigger,
      {
        ref,
        title: selectedBulkRole.length === 0 ? "Select Multiple Roles" : selectedBulkRole.toString(),
        css: {
          w: "70%",
          p: "$8"
        },
        open: bulkRoleDialog
      }
    ),
    /* @__PURE__ */ React59.createElement(
      Dropdown.Content,
      {
        css: { w: (_a7 = ref.current) == null ? void 0 : _a7.clientWidth, zIndex: 1e3 },
        onInteractOutside: () => {
          if (bulkRoleDialog) {
            setBulkRoleDialog(false);
          }
        }
      },
      roles && roles.map((role) => {
        return /* @__PURE__ */ React59.createElement(
          Dropdown.CheckboxItem,
          {
            key: role,
            checked: selectedBulkRole.includes(role),
            onCheckedChange: (value) => {
              setBulkRole((selection) => {
                return value ? [...selection, role] : selection.filter(
                  (selectedRole2) => selectedRole2 !== role
                );
              });
              setErrorMessage("");
            }
          },
          /* @__PURE__ */ React59.createElement(
            Checkbox.Root,
            {
              css: { margin: "$2" },
              checked: selectedBulkRole.includes(role)
            },
            /* @__PURE__ */ React59.createElement(Checkbox.Indicator, null, /* @__PURE__ */ React59.createElement(CheckIcon3, { width: 16, height: 16 }))
          ),
          role
        );
      })
    )
  )), /* @__PURE__ */ React59.createElement(DialogRow, null, /* @__PURE__ */ React59.createElement(Text, null, "To Role: "), /* @__PURE__ */ React59.createElement(
    Dropdown.Root,
    {
      open: roleDialog,
      onOpenChange: (value) => setRoleDialog(value)
    },
    /* @__PURE__ */ React59.createElement(
      DialogDropdownTrigger,
      {
        ref: roleRef,
        title: selectedRole || "Select Role",
        css: {
          w: "70%",
          p: "$8"
        },
        open: roleDialog
      }
    ),
    /* @__PURE__ */ React59.createElement(
      Dropdown.Content,
      {
        css: { w: (_b7 = roleRef.current) == null ? void 0 : _b7.clientWidth, zIndex: 1e3 }
      },
      roles && roles.map((role) => {
        return /* @__PURE__ */ React59.createElement(
          Dropdown.Item,
          {
            key: role,
            onSelect: () => {
              setRole(role);
              setErrorMessage("");
            }
          },
          role
        );
      })
    )
  )), /* @__PURE__ */ React59.createElement(DialogRow, null, errorMessage && /* @__PURE__ */ React59.createElement(
    Flex,
    {
      gap: 2,
      css: { c: "$alert_error_default", w: "70%", ml: "auto" }
    },
    /* @__PURE__ */ React59.createElement(AlertTriangleIcon4, null),
    /* @__PURE__ */ React59.createElement(Text, { css: { c: "inherit" } }, errorMessage)
  )), /* @__PURE__ */ React59.createElement(DialogRow, { justify: "end" }, /* @__PURE__ */ React59.createElement(
    Button,
    {
      variant: "primary",
      onClick: changeBulkRole,
      disabled: !(selectedRole && selectedBulkRole.length > 0)
    },
    isSubmiting && /* @__PURE__ */ React59.createElement(Loading, { css: { color: "$on_primary_medium" } }),
    "Apply"
  ))));
};

// src/Prebuilt/components/MoreSettings/CaptionModal.tsx
import React61 from "react";
import { useMedia as useMedia10 } from "react-use";

// src/Prebuilt/components/MoreSettings/CaptionContent.tsx
import React60 from "react";
import {
  HMSTranscriptionMode,
  selectIsTranscriptionEnabled as selectIsTranscriptionEnabled2,
  useHMSActions as useHMSActions21,
  useHMSStore as useHMSStore26
} from "@100mslive/react-sdk";
import { AlertTriangleIcon as AlertTriangleIcon5, CrossIcon as CrossIcon10 } from "@100mslive/react-icons";
var CaptionContent = ({
  isMobile,
  onExit
}) => {
  const DURATION = 2e3;
  const actions = useHMSActions21();
  const isTranscriptionEnabled = useHMSStore26(selectIsTranscriptionEnabled2);
  const [toastId, setToastId] = useSetAppDataByKey(CAPTION_TOAST.captionToast);
  const [isCaptionEnabled, setIsCaptionEnabled] = useSetIsCaptionEnabled();
  return /* @__PURE__ */ React60.createElement(React60.Fragment, null, /* @__PURE__ */ React60.createElement(
    Text,
    {
      variant: isMobile ? "md" : "lg",
      css: {
        color: "$on_surface_high",
        fontWeight: "$semiBold",
        display: "flex",
        "@md": { px: "$8" }
      }
    },
    isTranscriptionEnabled ? "Disable" : "Enable",
    " Closed Caption (CC) for this session?",
    /* @__PURE__ */ React60.createElement(
      Box,
      {
        css: {
          color: "inherit",
          ml: "auto",
          "&:hover": { color: "$on_surface_medium", cursor: "pointer" }
        },
        onClick: onExit
      },
      /* @__PURE__ */ React60.createElement(CrossIcon10, null)
    )
  ), !isMobile ? /* @__PURE__ */ React60.createElement(
    Text,
    {
      variant: "sm",
      css: { color: "$on_surface_medium", mt: "$4", "@md": { px: "$8" } }
    },
    "This will ",
    isTranscriptionEnabled ? "disable" : "enable",
    " Closed Captions for everyone in this room. You can\xA0",
    isTranscriptionEnabled ? "enable" : "disable",
    " it later."
  ) : null, /* @__PURE__ */ React60.createElement(
    Flex,
    {
      justify: "between",
      align: "center",
      css: {
        width: "100%",
        gap: "$md",
        mt: "$10",
        "@md": { px: "$4" }
      }
    },
    isMobile ? null : /* @__PURE__ */ React60.createElement(
      Button,
      {
        variant: "standard",
        css: { w: "100%" },
        outlined: true,
        onClick: onExit
      },
      "Cancel"
    ),
    /* @__PURE__ */ React60.createElement(
      Flex,
      {
        direction: "column",
        justify: "between",
        align: "center",
        css: {
          width: "100%",
          "@md": { px: "$4" }
        }
      },
      isMobile && isTranscriptionEnabled ? /* @__PURE__ */ React60.createElement(
        Button,
        {
          variant: "standard",
          css: { w: "100%", mb: "$4" },
          outlined: true,
          onClick: () => {
            setIsCaptionEnabled(!isCaptionEnabled);
            onExit();
          }
        },
        isCaptionEnabled ? "Hide For Me" : "Show For Me"
      ) : null,
      /* @__PURE__ */ React60.createElement(
        Button,
        {
          variant: isTranscriptionEnabled ? "danger" : "primary",
          css: { width: "100%" },
          "data-testid": "popup_change_btn",
          onClick: () => __async(void 0, null, function* () {
            try {
              if (isTranscriptionEnabled) {
                yield actions.stopTranscription({
                  mode: HMSTranscriptionMode.CAPTION
                });
                setIsCaptionEnabled(false);
                const id2 = ToastManager.replaceToast(toastId, {
                  title: `Disabling Closed Caption for everyone.`,
                  variant: "standard",
                  duration: DURATION,
                  icon: /* @__PURE__ */ React60.createElement(Loading, { color: "currentColor" })
                });
                setToastId(id2);
                onExit();
                return;
              }
              yield actions.startTranscription({
                mode: HMSTranscriptionMode.CAPTION
              });
              const id = ToastManager.replaceToast(toastId, {
                title: `Enabling Closed Caption for everyone.`,
                variant: "standard",
                duration: DURATION,
                icon: /* @__PURE__ */ React60.createElement(Loading, { color: "currentColor" })
              });
              setToastId(id);
            } catch (err) {
              const id = ToastManager.replaceToast(toastId, {
                title: `Failed to ${isTranscriptionEnabled ? "disable" : "enable"} closed caption`,
                variant: "error",
                icon: /* @__PURE__ */ React60.createElement(AlertTriangleIcon5, { style: { marginRight: "0.5rem" } })
              });
              setToastId(id);
            } finally {
              setIsCaptionEnabled(true);
            }
            onExit();
          })
        },
        isTranscriptionEnabled ? "Disable" : "Enable",
        " for Everyone"
      )
    )
  ), isMobile && /* @__PURE__ */ React60.createElement(
    Text,
    {
      variant: "sm",
      css: {
        color: "$on_surface_medium",
        pb: "$4",
        mb: "$8",
        "@md": { px: "$8", mt: "$4" }
      }
    },
    "This will ",
    isTranscriptionEnabled ? "disable" : "enable",
    " Closed Captions for everyone in this room. You can\xA0",
    isTranscriptionEnabled ? "enable" : "disable",
    " it later."
  ));
};

// src/Prebuilt/components/MoreSettings/CaptionModal.tsx
var CaptionModal = ({
  onOpenChange
}) => {
  const isMobile = useMedia10(config.media.md);
  const props = {
    isMobile,
    onExit: () => {
      onOpenChange(false);
    }
  };
  if (isMobile) {
    return /* @__PURE__ */ React61.createElement(Sheet.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React61.createElement(Sheet.Content, { css: { bg: "$surface_dim", p: "$8 0" } }, /* @__PURE__ */ React61.createElement(CaptionContent, __spreadValues({}, props))));
  }
  return /* @__PURE__ */ React61.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React61.createElement(Dialog.Portal, null, /* @__PURE__ */ React61.createElement(Dialog.Overlay, null), /* @__PURE__ */ React61.createElement(
    Dialog.Content,
    {
      css: { bg: "$surface_dim", width: "min(400px,80%)", p: "$10" }
    },
    /* @__PURE__ */ React61.createElement(CaptionContent, __spreadValues({}, props))
  )));
};

// src/Prebuilt/components/MoreSettings/FullScreenItem.tsx
import React62 from "react";
import { ExpandIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/hooks/useFullscreen.ts
import { useCallback as useCallback19, useEffect as useEffect20, useState as useState25 } from "react";
import screenfull from "screenfull";
var useFullscreen = () => {
  const [isFullScreenEnabled, setIsFullScreenEnabled] = useState25(
    screenfull.isFullscreen
  );
  const toggle = useCallback19(() => __async(void 0, null, function* () {
    if (!screenfull.isEnabled) {
      ToastManager.addToast({ title: "Fullscreen feature not supported" });
      return;
    }
    try {
      const container = document.querySelector(DEFAULT_PORTAL_CONTAINER);
      if (isFullScreenEnabled) {
        yield screenfull.exit();
      } else if (container) {
        yield screenfull.request(container);
      }
    } catch (err) {
      ToastManager.addToast({ title: err.message });
    }
  }), [isFullScreenEnabled]);
  useEffect20(() => {
    const onChange = () => {
      setIsFullScreenEnabled(screenfull.isFullscreen);
    };
    if (screenfull.isEnabled) {
      screenfull.on("change", onChange);
    }
    return () => {
      if (screenfull.isEnabled) {
        screenfull.off("change", onChange);
      }
    };
  }, []);
  return {
    allowed: screenfull.isEnabled,
    isFullscreen: isFullScreenEnabled,
    toggleFullscreen: toggle
  };
};

// src/Prebuilt/components/MoreSettings/FullScreenItem.tsx
var FullScreenItem = () => {
  const { allowed, isFullscreen, toggleFullscreen } = useFullscreen();
  if (!allowed) {
    return null;
  }
  return /* @__PURE__ */ React62.createElement(
    Dropdown.Item,
    {
      onClick: () => {
        toggleFullscreen();
      },
      "data-testid": "full_screen_btn"
    },
    /* @__PURE__ */ React62.createElement(ExpandIcon, null),
    /* @__PURE__ */ React62.createElement(Text, { variant: "sm", css: { ml: "$4" } }, isFullscreen ? "Exit " : "Go ", "Fullscreen")
  );
};

// src/Prebuilt/components/MoreSettings/MuteAllModal.tsx
import React64, { useCallback as useCallback20, useState as useState26 } from "react";
import {
  selectAvailableRoleNames as selectAvailableRoleNames4,
  useHMSActions as useHMSActions22,
  useHMSStore as useHMSStore28
} from "@100mslive/react-sdk";
import { MicOffIcon as MicOffIcon2 } from "@100mslive/react-icons";

// src/Prebuilt/components/MoreSettings/MuteAllContent.tsx
import React63 from "react";
import {
  selectPermissions as selectPermissions7,
  useHMSStore as useHMSStore27
} from "@100mslive/react-sdk";
var MuteAllContent = (props) => {
  const roles = props.roles || [];
  const permissions = useHMSStore27(selectPermissions7);
  return /* @__PURE__ */ React63.createElement(React63.Fragment, null, /* @__PURE__ */ React63.createElement(
    DialogSelect,
    {
      title: "Role",
      options: [
        { label: "All Roles", value: "" },
        ...roles.map((role) => ({ label: role, value: role }))
      ],
      selected: props.selectedRole,
      keyField: "value",
      labelField: "label",
      onChange: props.setRole
    }
  ), /* @__PURE__ */ React63.createElement(
    DialogSelect,
    {
      title: "Track type",
      options: trackTypeOptions,
      selected: props.trackType,
      onChange: props.setTrackType,
      keyField: "value",
      labelField: "label"
    }
  ), /* @__PURE__ */ React63.createElement(
    DialogSelect,
    {
      title: "Track source",
      options: trackSourceOptions,
      selected: props.selectedSource,
      onChange: props.setSource,
      keyField: "value",
      labelField: "label"
    }
  ), /* @__PURE__ */ React63.createElement(DialogRow, null, /* @__PURE__ */ React63.createElement(Text, { variant: "md" }, "Track status"), /* @__PURE__ */ React63.createElement(
    RadioGroup.Root,
    {
      value: String(props.enabled),
      onValueChange: (value) => props.setEnabled(value === "true")
    },
    (permissions == null ? void 0 : permissions.mute) && /* @__PURE__ */ React63.createElement(Flex, { align: "center", css: { mr: "$8" } }, /* @__PURE__ */ React63.createElement(
      RadioGroup.Item,
      {
        value: "false",
        id: "trackDisableRadio",
        css: { mr: "$4" }
      },
      /* @__PURE__ */ React63.createElement(RadioGroup.Indicator, null)
    ), /* @__PURE__ */ React63.createElement(Label3, { htmlFor: "trackDisableRadio" }, "Mute")),
    (permissions == null ? void 0 : permissions.unmute) && /* @__PURE__ */ React63.createElement(Flex, { align: "center", css: { cursor: "pointer" } }, /* @__PURE__ */ React63.createElement(
      RadioGroup.Item,
      {
        value: "true",
        id: "trackEnableRadio",
        css: { mr: "$4" }
      },
      /* @__PURE__ */ React63.createElement(RadioGroup.Indicator, null)
    ), /* @__PURE__ */ React63.createElement(Label3, { htmlFor: "trackEnableRadio" }, "Request Unmute"))
  )), /* @__PURE__ */ React63.createElement(DialogRow, { justify: "end" }, /* @__PURE__ */ React63.createElement(
    Button,
    {
      variant: "primary",
      onClick: props.muteAll,
      css: { w: (props == null ? void 0 : props.isMobile) ? "100%" : "" }
    },
    "Apply"
  )));
};

// src/Prebuilt/components/MoreSettings/MuteAllModal.tsx
var MuteAllModal = ({
  onOpenChange,
  isMobile = false
}) => {
  const roles = useHMSStore28(selectAvailableRoleNames4);
  const hmsActions = useHMSActions22();
  const [enabled, setEnabled] = useState26(false);
  const [trackType, setTrackType] = useState26();
  const [selectedRole, setRole] = useState26();
  const [selectedSource, setSource] = useState26();
  const muteAll = useCallback20(() => __async(void 0, null, function* () {
    yield hmsActions.setRemoteTracksEnabled({
      enabled,
      type: trackType,
      source: selectedSource,
      roles: selectedRole ? [selectedRole] : void 0
    });
    onOpenChange(false);
  }), [
    selectedRole,
    enabled,
    trackType,
    selectedSource,
    hmsActions,
    onOpenChange
  ]);
  const props = {
    muteAll,
    roles,
    enabled,
    setEnabled,
    trackType,
    setTrackType,
    selectedRole,
    setRole,
    selectedSource,
    setSource,
    isMobile
  };
  if (isMobile) {
    return /* @__PURE__ */ React64.createElement(Sheet.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React64.createElement(Sheet.Content, { css: { px: "$10" } }, /* @__PURE__ */ React64.createElement(MuteAllContent, __spreadValues({}, props))));
  }
  return /* @__PURE__ */ React64.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React64.createElement(DialogContent, { title: "Mute/Unmute Remote Tracks", Icon: MicOffIcon2 }, /* @__PURE__ */ React64.createElement(MuteAllContent, __spreadValues({}, props))));
};

// src/Prebuilt/components/hooks/useMetadata.tsx
import { useCallback as useCallback21 } from "react";
import {
  selectHasPeerHandRaised,
  selectLocalPeerID as selectLocalPeerID7,
  selectPeerMetadata as selectPeerMetadata2,
  useHMSActions as useHMSActions23,
  useHMSStore as useHMSStore29,
  useHMSVanillaStore as useHMSVanillaStore9
} from "@100mslive/react-sdk";
var useMyMetadata = () => {
  const hmsActions = useHMSActions23();
  const localPeerId = useHMSStore29(selectLocalPeerID7);
  const vanillaStore = useHMSVanillaStore9();
  const metaData = useHMSStore29(selectPeerMetadata2(localPeerId));
  const isHandRaised = useHMSStore29(selectHasPeerHandRaised(localPeerId));
  const update = (updatedFields) => __async(void 0, null, function* () {
    try {
      const currentMetadata = vanillaStore.getState(
        selectPeerMetadata2(localPeerId)
      );
      yield hmsActions.changeMetadata(
        Object.assign(currentMetadata, updatedFields)
      );
      return true;
    } catch (error) {
      console.error("failed to update metadata ", updatedFields);
    }
    return false;
  });
  const toggleHandRaise = useCallback21(() => __async(void 0, null, function* () {
    if (isHandRaised) {
      yield hmsActions.lowerLocalPeerHand();
      yield update({ handRaisedAt: void 0 });
    } else {
      yield hmsActions.raiseLocalPeerHand();
      yield update({ isBRBOn: false, handRaisedAt: Date.now() });
    }
  }), [isHandRaised]);
  const toggleBRB = useCallback21(() => __async(void 0, null, function* () {
    const newValue = !(metaData == null ? void 0 : metaData.isBRBOn);
    yield update({ isBRBOn: newValue });
    if (newValue) {
      yield hmsActions.lowerLocalPeerHand();
    }
  }), [metaData == null ? void 0 : metaData.isBRBOn]);
  return {
    isHandRaised,
    isBRBOn: !!(metaData == null ? void 0 : metaData.isBRBOn),
    metaData,
    updateMetaData: update,
    toggleHandRaise,
    toggleBRB
  };
};

// src/Prebuilt/components/PIP/usePIPChat.tsx
import { useEffect as useEffect21 } from "react";
import { useHMSActions as useHMSActions24 } from "@100mslive/react-sdk";

// src/Prebuilt/components/PIP/usePIPWindow.tsx
import { useContext as useContext4 } from "react";

// src/Prebuilt/components/PIP/context.ts
import { createContext as createContext2 } from "react";
var PIPContext = createContext2(void 0);

// src/Prebuilt/components/PIP/usePIPWindow.tsx
var usePIPWindow = () => {
  const context = useContext4(PIPContext);
  if (context === void 0) {
    throw new Error("usePIPWindow must be used within a PIPContext");
  }
  return context;
};

// src/Prebuilt/components/PIP/usePIPChat.tsx
var usePIPChat = () => {
  const hmsActions = useHMSActions24();
  const { isSupported, requestPipWindow, pipWindow, closePipWindow } = usePIPWindow();
  useEffect21(() => {
    if (document && pipWindow) {
      const style = document.createElement("style");
      style.id = "stitches";
      style.textContent = getCssText();
      pipWindow.document.head.appendChild(style);
    }
  }, [pipWindow]);
  useEffect21(() => {
    if (pipWindow) {
      const chatContainer = pipWindow.document.getElementById("chat-container");
      const selector = pipWindow.document.getElementById(
        "selector"
      );
      const sendBtn = pipWindow.document.getElementById("send-btn");
      const pipChatInput = pipWindow.document.getElementById(
        "chat-input"
      );
      const marker = pipWindow.document.getElementById("marker");
      marker == null ? void 0 : marker.scrollIntoView({ block: "end" });
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.id) {
              hmsActions.setMessageRead(true, entry.target.id);
            }
          });
        },
        {
          root: chatContainer,
          threshold: 0.8
        }
      );
      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.addedNodes.length > 0) {
            const newMessages = mutation.addedNodes;
            newMessages.forEach((message) => {
              const messageId = message == null ? void 0 : message.id;
              if (messageId === "new-message-notif") {
                message.addEventListener(
                  "click",
                  () => setTimeout(
                    () => marker == null ? void 0 : marker.scrollIntoView({
                      block: "end",
                      behavior: "smooth"
                    }),
                    0
                  )
                );
              } else if (messageId) observer.observe(message);
            });
          }
        });
      });
      mutationObserver.observe(chatContainer, {
        childList: true
      });
      const sendMessage = () => __async(void 0, null, function* () {
        const selection = (selector == null ? void 0 : selector.value) || "Everyone";
        if (selection === "Everyone") {
          yield hmsActions.sendBroadcastMessage(pipChatInput.value.trim());
        } else {
          yield hmsActions.sendGroupMessage(pipChatInput.value.trim(), [
            selection
          ]);
        }
        pipChatInput.value = "";
        setTimeout(
          () => marker == null ? void 0 : marker.scrollIntoView({ block: "end", behavior: "smooth" }),
          0
        );
      });
      if (sendBtn && hmsActions && pipChatInput) {
        const pipMessages = pipWindow.document.getElementsByClassName("pip-message");
        [...pipMessages].forEach((message) => {
          if (message.id) {
            hmsActions.setMessageRead(true, message.id);
          }
        });
        const sendOnEnter = (e) => {
          if (e.key === "Enter") sendMessage();
        };
        sendBtn.addEventListener("click", sendMessage);
        pipChatInput.addEventListener("keypress", sendOnEnter);
        return () => {
          sendBtn.removeEventListener("click", sendMessage);
          pipChatInput.removeEventListener("keypress", sendOnEnter);
          mutationObserver.disconnect();
          observer.disconnect();
        };
      }
    }
  }, [pipWindow, hmsActions]);
  useEffect21(() => {
    return () => {
      pipWindow && closePipWindow();
    };
  }, [closePipWindow, pipWindow]);
  return { isSupported, requestPipWindow, pipWindow };
};

// src/Prebuilt/components/MoreSettings/SplitComponents/DesktopOptions.tsx
var MODALS = {
  CHANGE_NAME: "changeName",
  SELF_ROLE_CHANGE: "selfRoleChange",
  MORE_SETTINGS: "moreSettings",
  START_RECORDING: "startRecording",
  DEVICE_SETTINGS: "deviceSettings",
  STATS_FOR_NERDS: "statsForNerds",
  BULK_ROLE_CHANGE: "bulkRoleChange",
  MUTE_ALL: "muteAll",
  EMBED_URL: "embedUrl",
  CAPTION: "caption"
};
var DesktopOptions = ({
  elements,
  screenType
}) => {
  const localPeerId = useHMSStore30(selectLocalPeerID8);
  const hmsActions = useHMSActions25();
  const enablHlsStats = useHMSStore30(selectAppData3(APP_DATA.hlsStats));
  const [openModals, setOpenModals] = useState27(/* @__PURE__ */ new Set());
  const { isBRBOn, toggleBRB } = useMyMetadata();
  const isPipOn = PictureInPicture.isOn();
  const isBRBEnabled = !!(elements == null ? void 0 : elements.brb);
  const isTranscriptionAllowed = useHMSStore30(
    selectIsTranscriptionAllowedByMode(HMSTranscriptionMode2.CAPTION)
  );
  const isTranscriptionEnabled = useHMSStore30(selectIsTranscriptionEnabled3);
  const { isSupported, pipWindow, requestPipWindow } = usePIPChat();
  const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
  const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
  const showPipChatOption = !!(elements == null ? void 0 : elements.chat) && isSupported && !pipWindow;
  useDropdownList({ open: openModals.size > 0, name: "MoreSettings" });
  const updateState = (modalName, value) => {
    setOpenModals((modals) => {
      const copy = new Set(modals);
      if (value) {
        copy.clear();
        copy.add(modalName);
      } else {
        copy.delete(modalName);
      }
      return copy;
    });
  };
  return /* @__PURE__ */ React65.createElement(Fragment7, null, isSupported && pipWindow ? /* @__PURE__ */ React65.createElement(PIPWindow, { pipWindow }, /* @__PURE__ */ React65.createElement(PIPChat, null)) : null, /* @__PURE__ */ React65.createElement(
    Dropdown.Root,
    {
      open: openModals.has(MODALS.MORE_SETTINGS),
      onOpenChange: (value) => updateState(MODALS.MORE_SETTINGS, value),
      modal: false
    },
    /* @__PURE__ */ React65.createElement(Tooltip, { title: "More options" }, /* @__PURE__ */ React65.createElement(Dropdown.Trigger, { asChild: true, "data-testid": "more_settings_btn" }, /* @__PURE__ */ React65.createElement(IconButton_default, null, /* @__PURE__ */ React65.createElement(HamburgerMenuIcon, null)))),
    /* @__PURE__ */ React65.createElement(
      Dropdown.Content,
      {
        sideOffset: 5,
        align: "end",
        css: {
          py: "$0",
          maxHeight: "unset",
          "@md": { w: "$64" },
          "div[role='separator']:first-child": {
            display: "none"
          }
        }
      },
      isBRBEnabled && screenType !== "hls_live_streaming" ? /* @__PURE__ */ React65.createElement(Dropdown.Item, { onClick: toggleBRB, "data-testid": "brb_btn" }, /* @__PURE__ */ React65.createElement(BrbIcon, null), /* @__PURE__ */ React65.createElement(Text, { variant: "sm", css: { ml: "$4", color: "$on_surface_high" } }, "Be Right Back"), /* @__PURE__ */ React65.createElement(
        Flex,
        {
          justify: "end",
          css: { color: "$on_surface_high", flexGrow: "1" }
        },
        isBRBOn ? /* @__PURE__ */ React65.createElement(CheckIcon4, null) : null
      )) : null,
      isTranscriptionAllowed ? /* @__PURE__ */ React65.createElement(
        Dropdown.Item,
        {
          "data-testid": "closed_caption_admin",
          onClick: () => {
            updateState(MODALS.CAPTION, true);
          }
        },
        /* @__PURE__ */ React65.createElement(OpenCaptionIcon2, null),
        /* @__PURE__ */ React65.createElement(Flex, { direction: "column", css: { flexGrow: "1" } }, /* @__PURE__ */ React65.createElement(
          Text,
          {
            variant: "sm",
            css: { ml: "$4", color: "$on_surface_high" }
          },
          "Closed Captions"
        ), /* @__PURE__ */ React65.createElement(
          Text,
          {
            variant: "caption",
            css: { ml: "$4", color: "$on_surface_medium" }
          },
          isTranscriptionEnabled ? "Enabled" : "Disabled"
        )),
        /* @__PURE__ */ React65.createElement(
          Switch,
          {
            id: "closed_caption_start_stop",
            checked: isTranscriptionEnabled,
            disabled: false
          }
        )
      ) : null,
      screenType !== "hls_live_streaming" ? /* @__PURE__ */ React65.createElement(Dropdown.Item, { css: { p: 0, "&:empty": { display: "none" } } }, /* @__PURE__ */ React65.createElement(
        PIP,
        {
          content: /* @__PURE__ */ React65.createElement(Flex, { css: { w: "100%", h: "100%", p: "$8" } }, /* @__PURE__ */ React65.createElement(PipIcon2, null), /* @__PURE__ */ React65.createElement(Text, { variant: "sm", css: { ml: "$4" } }, isPipOn ? "Disable" : "Enable", " Picture-in-Picture"))
        }
      )) : null,
      /* @__PURE__ */ React65.createElement(
        PIPChatOption,
        {
          showPIPChat: showPipChatOption,
          openChat: () => __async(void 0, null, function* () {
            isChatOpen && toggleChat();
            yield requestPipWindow(350, 500);
          })
        }
      ),
      /* @__PURE__ */ React65.createElement(FullScreenItem, null),
      /* @__PURE__ */ React65.createElement(Dropdown.ItemSeparator, { css: { mx: 0 } }),
      /* @__PURE__ */ React65.createElement(
        Dropdown.Item,
        {
          onClick: () => updateState(MODALS.DEVICE_SETTINGS, true),
          "data-testid": "device_settings_btn"
        },
        /* @__PURE__ */ React65.createElement(SettingsIcon3, null),
        /* @__PURE__ */ React65.createElement(Text, { variant: "sm", css: { ml: "$4" } }, "Settings")
      ),
      match5({ screenType, isSupported: HMSHLSPlayer.isSupported() }).with(
        { screenType: "hls_live_streaming", isSupported: false },
        () => null
      ).with(
        { screenType: "hls_live_streaming", isSupported: true },
        () => {
          return /* @__PURE__ */ React65.createElement(
            Dropdown.Item,
            {
              onClick: () => hmsActions.setAppData(APP_DATA.hlsStats, !enablHlsStats),
              "data-testid": "hls_stats"
            },
            /* @__PURE__ */ React65.createElement(
              Checkbox.Root,
              {
                css: { margin: "$2" },
                checked: enablHlsStats,
                onCheckedChange: () => hmsActions.setAppData(APP_DATA.hlsStats, !enablHlsStats)
              },
              /* @__PURE__ */ React65.createElement(Checkbox.Indicator, null, /* @__PURE__ */ React65.createElement(CheckIcon4, { width: 16, height: 16 }))
            ),
            /* @__PURE__ */ React65.createElement(Flex, { justify: "between", css: { width: "100%" } }, /* @__PURE__ */ React65.createElement(Text, { variant: "sm", css: { ml: "$4" } }, "Show HLS Stats"), /* @__PURE__ */ React65.createElement(Text, { variant: "sm", css: { ml: "$4" } }, `${isMacOS ? "\u2318" : "ctrl"} + ]`))
          );
        }
      ).otherwise(() => /* @__PURE__ */ React65.createElement(
        Dropdown.Item,
        {
          onClick: () => updateState(MODALS.STATS_FOR_NERDS, true),
          "data-testid": "stats_for_nerds_btn"
        },
        /* @__PURE__ */ React65.createElement(InfoIcon2, null),
        /* @__PURE__ */ React65.createElement(Text, { variant: "sm", css: { ml: "$4" } }, "Stats for Nerds")
      ))
    )
  ), openModals.has(MODALS.BULK_ROLE_CHANGE) && /* @__PURE__ */ React65.createElement(
    BulkRoleChangeModal,
    {
      onOpenChange: (value) => updateState(MODALS.BULK_ROLE_CHANGE, value)
    }
  ), openModals.has(MODALS.MUTE_ALL) && /* @__PURE__ */ React65.createElement(
    MuteAllModal,
    {
      onOpenChange: (value) => updateState(MODALS.MUTE_ALL, value)
    }
  ), openModals.has(MODALS.START_RECORDING) && /* @__PURE__ */ React65.createElement(
    StartRecording_default,
    {
      open: true,
      onOpenChange: (value) => updateState(MODALS.START_RECORDING, value)
    }
  ), openModals.has(MODALS.DEVICE_SETTINGS) && /* @__PURE__ */ React65.createElement(
    SettingsModal_default,
    {
      open: true,
      onOpenChange: (value) => updateState(MODALS.DEVICE_SETTINGS, value),
      screenType
    }
  ), openModals.has(MODALS.STATS_FOR_NERDS) && /* @__PURE__ */ React65.createElement(
    StatsForNerds,
    {
      open: true,
      onOpenChange: (value) => updateState(MODALS.STATS_FOR_NERDS, value)
    }
  ), openModals.has(MODALS.SELF_ROLE_CHANGE) && /* @__PURE__ */ React65.createElement(
    RoleChangeModal,
    {
      peerId: localPeerId,
      onOpenChange: (value) => updateState(MODALS.SELF_ROLE_CHANGE, value)
    }
  ), openModals.has(MODALS.CAPTION) && /* @__PURE__ */ React65.createElement(
    CaptionModal,
    {
      onOpenChange: (value) => updateState(MODALS.CAPTION, value)
    }
  ));
};

// src/Prebuilt/components/MoreSettings/SplitComponents/MwebOptions.tsx
import React69, { useRef as useRef18, useState as useState31 } from "react";
import { useClickAway } from "react-use";
import { match as match6 } from "ts-pattern";
import {
  HMSTranscriptionMode as HMSTranscriptionMode3,
  selectIsConnectedToRoom as selectIsConnectedToRoom7,
  selectIsLocalVideoEnabled as selectIsLocalVideoEnabled4,
  selectIsTranscriptionAllowedByMode as selectIsTranscriptionAllowedByMode2,
  selectIsTranscriptionEnabled as selectIsTranscriptionEnabled4,
  selectPeerCount as selectPeerCount3,
  selectPermissions as selectPermissions9,
  useHMSActions as useHMSActions29,
  useHMSStore as useHMSStore35,
  useRecordingStreaming as useRecordingStreaming7
} from "@100mslive/react-sdk";
import {
  BrbIcon as BrbIcon2,
  ClosedCaptionIcon as ClosedCaptionIcon2,
  CrossIcon as CrossIcon13,
  EmojiIcon as EmojiIcon2,
  HamburgerMenuIcon as HamburgerMenuIcon2,
  HandIcon as HandIcon2,
  HandRaiseSlashedIcon,
  InfoIcon as InfoIcon3,
  OpenCaptionIcon as OpenCaptionIcon3,
  PeopleIcon,
  QuizActiveIcon,
  QuizIcon,
  RecordIcon as RecordIcon2,
  SettingsIcon as SettingsIcon4,
  VirtualBackgroundIcon
} from "@100mslive/react-icons";

// src/Prebuilt/components/Header/StreamActions.tsx
import React66, { useCallback as useCallback22, useEffect as useEffect22, useRef as useRef17, useState as useState28 } from "react";
import { useMedia as useMedia11 } from "react-use";
import { HMSRecordingState } from "@100mslive/hms-video-store";
import {
  HMSRoomState as HMSRoomState4,
  selectHLSState as selectHLSState4,
  selectIsConnectedToRoom as selectIsConnectedToRoom6,
  selectPermissions as selectPermissions8,
  selectRecordingState as selectRecordingState2,
  selectRoomState as selectRoomState4,
  useHMSActions as useHMSActions26,
  useHMSStore as useHMSStore31,
  useRecordingStreaming as useRecordingStreaming6
} from "@100mslive/react-sdk";
import {
  AlertTriangleIcon as AlertTriangleIcon6,
  CrossIcon as CrossIcon11,
  PauseCircleIcon,
  RecordIcon
} from "@100mslive/react-icons";
var getRecordingText = ({
  isBrowserRecordingOn,
  isServerRecordingOn,
  isHLSRecordingOn
}, delimiter = ", ") => {
  if (!isBrowserRecordingOn && !isServerRecordingOn && !isHLSRecordingOn) {
    return "";
  }
  const title = [];
  if (isBrowserRecordingOn) {
    title.push("Browser");
  }
  if (isServerRecordingOn) {
    title.push("Server");
  }
  if (isHLSRecordingOn) {
    title.push("HLS");
  }
  return title.join(delimiter);
};
var LiveStatus = () => {
  var _a7;
  const { isHLSRunning, isRTMPRunning } = useRecordingStreaming6();
  const hlsState = useHMSStore31(selectHLSState4);
  const isMobile = useMedia11(config.media.md);
  const intervalRef = useRef17(null);
  const { screenType } = useRoomLayoutConferencingScreen();
  const [liveTime, setLiveTime] = useState28(0);
  const startTimer = useCallback22(() => {
    intervalRef.current = setInterval(() => {
      var _a8;
      const timeStamp = (_a8 = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _a8[screenType === "hls_live_streaming" ? "startedAt" : "initialisedAt"];
      if ((hlsState == null ? void 0 : hlsState.running) && timeStamp) {
        setLiveTime(Date.now() - timeStamp.getTime());
      }
    }, 1e3);
  }, [hlsState == null ? void 0 : hlsState.running, hlsState == null ? void 0 : hlsState.variants, screenType]);
  useEffect22(() => {
    if (hlsState == null ? void 0 : hlsState.running) {
      startTimer();
    }
    if (!(hlsState == null ? void 0 : hlsState.running) && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hlsState.running, isMobile, startTimer]);
  if (!isHLSRunning && !isRTMPRunning) {
    return null;
  }
  return /* @__PURE__ */ React66.createElement(
    Flex,
    {
      align: "center",
      gap: "1",
      css: {
        border: "1px solid $border_default",
        padding: "$4 $6 $4 $6",
        borderRadius: "$1"
      }
    },
    /* @__PURE__ */ React66.createElement(
      Box,
      {
        css: {
          w: "$4",
          h: "$4",
          r: "$round",
          bg: "$alert_error_default",
          mr: "$2"
        }
      }
    ),
    /* @__PURE__ */ React66.createElement(Flex, { align: "center", gap: "2" }, /* @__PURE__ */ React66.createElement(Text, { variant: !isMobile ? "button" : "body2" }, "LIVE"), /* @__PURE__ */ React66.createElement(Text, { variant: "caption" }, ((_a7 = hlsState == null ? void 0 : hlsState.variants) == null ? void 0 : _a7.length) > 0 && isHLSRunning ? formatTime(liveTime) : ""))
  );
};
var RecordingStatus = () => {
  const {
    isBrowserRecordingOn,
    isServerRecordingOn,
    isHLSRecordingOn,
    isRecordingOn
  } = useRecordingStreaming6();
  const permissions = useHMSStore31(selectPermissions8);
  const isMobile = useMedia11(config.media.md);
  if (!isRecordingOn || // if only browser recording is enabled, stop recording is shown
  // so no need to show this as it duplicates
  [
    permissions == null ? void 0 : permissions.browserRecording,
    !isServerRecordingOn,
    !isHLSRecordingOn,
    isBrowserRecordingOn
  ].every((value) => !!value)) {
    if (!(isMobile && isRecordingOn)) return null;
  }
  return /* @__PURE__ */ React66.createElement(
    Tooltip,
    {
      boxCss: { zIndex: 1 },
      title: getRecordingText({
        isBrowserRecordingOn,
        isServerRecordingOn,
        isHLSRecordingOn
      })
    },
    /* @__PURE__ */ React66.createElement(
      Flex,
      {
        css: {
          color: "$alert_error_default",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ React66.createElement(RecordIcon, { width: 24, height: 24 })
    )
  );
};
var RecordingPauseStatus = () => {
  const recording = useHMSStore31(selectRecordingState2);
  if (recording.hls && recording.hls.state === HMSRecordingState.PAUSED) {
    return /* @__PURE__ */ React66.createElement(
      Tooltip,
      {
        boxCss: { zIndex: 1 },
        title: getRecordingText({
          isBrowserRecordingOn: false,
          isServerRecordingOn: false,
          isHLSRecordingOn: true
        })
      },
      /* @__PURE__ */ React66.createElement(
        Flex,
        {
          css: {
            color: "$on_surface_high",
            alignItems: "center"
          }
        },
        /* @__PURE__ */ React66.createElement(PauseCircleIcon, { width: 24, height: 24 })
      )
    );
  }
  return null;
};
var StartRecording2 = () => {
  const permissions = useHMSStore31(selectPermissions8);
  const [open, setOpen] = useState28(false);
  const { startRecording, recordingStarted } = useRecordingHandler();
  const { isBrowserRecordingOn, isStreamingOn, isHLSRunning } = useRecordingStreaming6();
  const hmsActions = useHMSActions26();
  if (!(permissions == null ? void 0 : permissions.browserRecording) || isHLSRunning) {
    return null;
  }
  if (isBrowserRecordingOn) {
    return /* @__PURE__ */ React66.createElement(Popover2.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React66.createElement(Popover2.Trigger, { asChild: true }, /* @__PURE__ */ React66.createElement(
      Button,
      {
        variant: "danger",
        "data-testid": "stop_recording",
        icon: true,
        outlined: true,
        onClick: () => setOpen(true)
      },
      /* @__PURE__ */ React66.createElement(RecordIcon, null),
      /* @__PURE__ */ React66.createElement(
        Text,
        {
          as: "span",
          css: { "@md": { display: "none" }, color: "currentColor" }
        },
        "Stop Recording"
      )
    )), /* @__PURE__ */ React66.createElement(Popover2.Portal, null, /* @__PURE__ */ React66.createElement(Popover2.Content, { align: "end", sideOffset: 8, css: { w: "$64" } }, /* @__PURE__ */ React66.createElement(Text, { variant: "body1", css: { color: "$on_surface_medium" } }, "Are you sure you want to end the recording?"), /* @__PURE__ */ React66.createElement(
      Button,
      {
        "data-testid": "stop_recording_confirm",
        variant: "danger",
        icon: true,
        css: { ml: "auto" },
        onClick: () => __async(void 0, null, function* () {
          try {
            yield hmsActions.stopRTMPAndRecording();
          } catch (error) {
            const err = error;
            ToastManager.addToast({
              title: err.message,
              variant: "error"
            });
          }
          setOpen(false);
        })
      },
      "Stop"
    ))));
  }
  return /* @__PURE__ */ React66.createElement(
    Button,
    {
      "data-testid": "start_recording",
      variant: "standard",
      icon: true,
      disabled: recordingStarted || isStreamingOn,
      onClick: () => __async(void 0, null, function* () {
        yield startRecording();
      })
    },
    recordingStarted ? /* @__PURE__ */ React66.createElement(Loading, { size: 24, color: "currentColor" }) : /* @__PURE__ */ React66.createElement(RecordIcon, null),
    /* @__PURE__ */ React66.createElement(
      Text,
      {
        as: "span",
        css: { "@md": { display: "none" }, color: "currentColor" }
      },
      recordingStarted ? "Starting" : "Start",
      " Recording"
    )
  );
};
var StreamActions = () => {
  const isConnected = useHMSStore31(selectIsConnectedToRoom6);
  const isMobile = useMedia11(config.media.md);
  const roomState = useHMSStore31(selectRoomState4);
  return /* @__PURE__ */ React66.createElement(Flex, { align: "center", css: { gap: "$4" } }, !isMobile && /* @__PURE__ */ React66.createElement(Flex, { align: "center", css: { gap: "$4" } }, /* @__PURE__ */ React66.createElement(RecordingPauseStatus, null), /* @__PURE__ */ React66.createElement(RecordingStatus, null), roomState !== HMSRoomState4.Preview ? /* @__PURE__ */ React66.createElement(LiveStatus, null) : null), isConnected && !isMobile ? /* @__PURE__ */ React66.createElement(StartRecording2, null) : null);
};
var StopRecordingInSheet = ({
  onStopRecording,
  onClose
}) => {
  return /* @__PURE__ */ React66.createElement(Sheet.Root, { open: true }, /* @__PURE__ */ React66.createElement(Sheet.Content, null, /* @__PURE__ */ React66.createElement(Sheet.Title, { css: { p: "$10" } }, /* @__PURE__ */ React66.createElement(
    Flex,
    {
      direction: "row",
      justify: "between",
      css: { w: "100%", c: "$alert_error_default" }
    },
    /* @__PURE__ */ React66.createElement(Flex, { justify: "start", align: "center", gap: "3" }, /* @__PURE__ */ React66.createElement(AlertTriangleIcon6, null), /* @__PURE__ */ React66.createElement(Text, { variant: "h5", css: { c: "$alert_error_default" } }, "Stop Recording")),
    /* @__PURE__ */ React66.createElement(Sheet.Close, { css: { color: "white" }, onClick: onClose }, /* @__PURE__ */ React66.createElement(CrossIcon11, null))
  )), /* @__PURE__ */ React66.createElement(HorizontalDivider, null), /* @__PURE__ */ React66.createElement(
    Box,
    {
      as: "div",
      css: { p: "$10", overflowY: "scroll", maxHeight: "70vh" }
    },
    /* @__PURE__ */ React66.createElement(Text, { variant: "caption", css: { c: "$on_surface_medium", pb: "$8" } }, "Are you sure you want to stop recording? You can\u2019t undo this action."),
    /* @__PURE__ */ React66.createElement(
      Button,
      {
        variant: "danger",
        css: { width: "100%" },
        type: "submit",
        "data-testid": "popup_change_btn",
        onClick: onStopRecording
      },
      "Stop"
    )
  )));
};

// src/Prebuilt/components/MoreSettings/ChangeNameModal.tsx
import React68, { useState as useState29 } from "react";
import { useMedia as useMedia12 } from "react-use";
import {
  selectLocalPeerName as selectLocalPeerName3,
  useHMSActions as useHMSActions27,
  useHMSStore as useHMSStore32
} from "@100mslive/react-sdk";

// src/Prebuilt/components/MoreSettings/ChangeNameContent.tsx
import React67 from "react";
import { ChevronLeftIcon as ChevronLeftIcon2, CrossIcon as CrossIcon12 } from "@100mslive/react-icons";
var ChangeNameContent = ({
  changeName,
  setCurrentName,
  currentName,
  localPeerName,
  isMobile,
  onExit,
  onBackClick
}) => {
  return /* @__PURE__ */ React67.createElement(
    "form",
    {
      onSubmit: (e) => __async(void 0, null, function* () {
        e.preventDefault();
        yield changeName();
      })
    },
    /* @__PURE__ */ React67.createElement(
      Text,
      {
        variant: isMobile ? "md" : "lg",
        css: {
          color: "$on_surface_high",
          fontWeight: "$semiBold",
          display: "flex",
          pb: "$4",
          "@md": { px: "$8", borderBottom: "1px solid $border_default" }
        }
      },
      isMobile ? /* @__PURE__ */ React67.createElement(
        ChevronLeftIcon2,
        {
          onClick: onBackClick,
          style: { marginRight: "0.5rem" }
        }
      ) : null,
      "Change Name",
      /* @__PURE__ */ React67.createElement(
        Box,
        {
          css: {
            color: "inherit",
            ml: "auto",
            "&:hover": { color: "$on_surface_medium", cursor: "pointer" }
          },
          onClick: onExit
        },
        /* @__PURE__ */ React67.createElement(CrossIcon12, null)
      )
    ),
    /* @__PURE__ */ React67.createElement(
      Text,
      {
        variant: "sm",
        css: {
          color: "$on_surface_medium",
          pb: "$6",
          mb: "$8",
          "@md": { px: "$8", mt: "$4" }
        }
      },
      "Your name will be visible to other participants in the session."
    ),
    /* @__PURE__ */ React67.createElement(
      Flex,
      {
        justify: "center",
        align: "center",
        css: { my: "$8", w: "100%", "@md": { px: "$8" } }
      },
      /* @__PURE__ */ React67.createElement(
        Input,
        {
          css: { width: "100%", bg: "$surface_default" },
          value: currentName,
          type: isMobile ? "search" : "text",
          onChange: (e) => {
            setCurrentName(e.target.value);
          },
          autoComplete: "name",
          required: true,
          "data-testid": "change_name_field",
          onKeyDown: (e) => __async(void 0, null, function* () {
            if (e.key === "Enter" && currentName && currentName.trim().length > 0 && currentName !== localPeerName) {
              e.preventDefault();
              if (isMobile) {
                return;
              }
              changeName();
            }
          })
        }
      )
    ),
    /* @__PURE__ */ React67.createElement(
      Flex,
      {
        justify: "between",
        align: "center",
        css: {
          width: "100%",
          gap: "$md",
          mt: "$10",
          "@md": { px: "$4" }
        }
      },
      isMobile ? null : /* @__PURE__ */ React67.createElement(
        Button,
        {
          variant: "standard",
          css: { w: "100%" },
          outlined: true,
          type: "submit",
          disabled: !localPeerName,
          onClick: onExit
        },
        "Cancel"
      ),
      /* @__PURE__ */ React67.createElement(
        Button,
        {
          variant: "primary",
          css: { width: "100%" },
          type: "submit",
          disabled: !(currentName == null ? void 0 : currentName.trim()) || (currentName == null ? void 0 : currentName.trim()) === localPeerName,
          "data-testid": "popup_change_btn"
        },
        "Change"
      )
    )
  );
};

// src/Prebuilt/components/MoreSettings/ChangeNameModal.tsx
var ChangeNameModal = ({
  onOpenChange,
  openParentSheet = void 0
}) => {
  const [previewPreference, setPreviewPreference] = useUserPreferences(
    UserPreferencesKeys.PREVIEW
  );
  const hmsActions = useHMSActions27();
  const localPeerName = useHMSStore32(selectLocalPeerName3);
  const [currentName, setCurrentName] = useState29(localPeerName);
  const isMobile = useMedia12(config.media.md);
  const changeName = () => __async(void 0, null, function* () {
    const name = (currentName == null ? void 0 : currentName.trim()) || "";
    if (!name || name === localPeerName) {
      return;
    }
    try {
      yield hmsActions.changeName(name);
      setPreviewPreference(__spreadProps(__spreadValues({}, previewPreference || {}), {
        name
      }));
    } catch (error) {
      console.error("failed to update name", error);
      ToastManager.addToast({ title: error.message });
    } finally {
      onOpenChange(false);
    }
  });
  const props = {
    changeName,
    setCurrentName,
    currentName,
    localPeerName,
    isMobile,
    onExit: () => onOpenChange(false),
    onBackClick: () => {
      onOpenChange(false);
      openParentSheet == null ? void 0 : openParentSheet();
    }
  };
  if (isMobile) {
    return /* @__PURE__ */ React68.createElement(Sheet.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React68.createElement(Sheet.Content, { css: { bg: "$surface_dim", p: "$8 0" } }, /* @__PURE__ */ React68.createElement(ChangeNameContent, __spreadValues({}, props))));
  }
  return /* @__PURE__ */ React68.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React68.createElement(Dialog.Portal, null, /* @__PURE__ */ React68.createElement(Dialog.Overlay, null), /* @__PURE__ */ React68.createElement(
    Dialog.Content,
    {
      css: { bg: "$surface_dim", width: "min(400px,80%)", p: "$10" }
    },
    /* @__PURE__ */ React68.createElement(ChangeNameContent, __spreadValues({}, props))
  )));
};

// src/Prebuilt/components/AppData/useSheet.ts
import { useCallback as useCallback23 } from "react";
import {
  selectAppData as selectAppData4,
  useHMSActions as useHMSActions28,
  useHMSStore as useHMSStore33,
  useHMSVanillaStore as useHMSVanillaStore10
} from "@100mslive/react-sdk";
var useIsSheetTypeOpen = (sheetType) => {
  if (!sheetType) {
    throw Error("Pass one of the sheet options");
  }
  return useHMSStore33(selectAppData4(APP_DATA.sheet)) === sheetType;
};
var useSheetToggle = (sheetType) => {
  const hmsActions = useHMSActions28();
  const vanillaStore = useHMSVanillaStore10();
  const toggleSheet = useCallback23(() => {
    const isOpen = vanillaStore.getState(selectAppData4(APP_DATA.sheet)) === sheetType;
    hmsActions.setAppData(APP_DATA.sheet, !isOpen ? sheetType : "");
  }, [vanillaStore, hmsActions, sheetType]);
  return toggleSheet;
};

// src/Prebuilt/components/hooks/useUnreadPollQuizPresent.tsx
import { useEffect as useEffect23, useState as useState30 } from "react";
import { selectLocalPeerID as selectLocalPeerID9 } from "@100mslive/hms-video-store";
import {
  HMSNotificationTypes,
  useHMSNotifications,
  useHMSStore as useHMSStore34
} from "@100mslive/react-sdk";
var useUnreadPollQuizPresent = () => {
  const localPeerID = useHMSStore34(selectLocalPeerID9);
  const notification = useHMSNotifications(HMSNotificationTypes.POLL_STARTED);
  const [unreadPollQuiz, setUnreadPollQuiz] = useState30(false);
  useEffect23(() => {
    if (!notification) {
      return;
    }
    setUnreadPollQuiz(notification.data.startedBy !== localPeerID);
  }, [localPeerID, notification]);
  return { unreadPollQuiz, setUnreadPollQuiz };
};

// src/Prebuilt/components/MoreSettings/SplitComponents/MwebOptions.tsx
var MODALS2 = {
  CHANGE_NAME: "changeName",
  SELF_ROLE_CHANGE: "selfRoleChange",
  MORE_SETTINGS: "moreSettings",
  START_RECORDING: "startRecording",
  DEVICE_SETTINGS: "deviceSettings",
  STATS_FOR_NERDS: "statsForNerds",
  BULK_ROLE_CHANGE: "bulkRoleChange",
  MUTE_ALL: "muteAll",
  EMBED_URL: "embedUrl",
  CAPTION: "caption"
};
var MwebOptions = ({
  elements,
  screenType
}) => {
  const hmsActions = useHMSActions29();
  const permissions = useHMSStore35(selectPermissions9);
  const isConnected = useHMSStore35(selectIsConnectedToRoom7);
  const { isBrowserRecordingOn, isStreamingOn, isHLSRunning } = useRecordingStreaming7();
  const [openModals, setOpenModals] = useState31(/* @__PURE__ */ new Set());
  const [openOptionsSheet, setOpenOptionsSheet] = useState31(false);
  const [openSettingsSheet, setOpenSettingsSheet] = useState31(false);
  const [showEmojiCard, setShowEmojiCard] = useState31(false);
  const [showRecordingOn, setShowRecordingOn] = useState31(false);
  const toggleParticipants = useSidepaneToggle(SIDE_PANE_OPTIONS.PARTICIPANTS);
  const { showPolls } = useShowPolls();
  const togglePollView = usePollViewToggle();
  const peerCount = useHMSStore35(selectPeerCount3);
  const emojiCardRef = useRef18(null);
  const { isBRBOn, toggleBRB, isHandRaised, toggleHandRaise } = useMyMetadata();
  const { unreadPollQuiz, setUnreadPollQuiz } = useUnreadPollQuizPresent();
  const { title, description } = useRoomLayoutHeader();
  const toggleDetailsSheet = useSheetToggle(SHEET_OPTIONS.ROOM_DETAILS);
  const isMobileHLSStream = useMobileHLSStream();
  const isLandscapeHLSStream = useLandscapeHLSStream();
  const toggleVB = useSidepaneToggle(SIDE_PANE_OPTIONS.VB);
  const isLocalVideoEnabled = useHMSStore35(selectIsLocalVideoEnabled4);
  const { startRecording, isRecordingLoading } = useRecordingHandler();
  const isTranscriptionAllowed = useHMSStore35(
    selectIsTranscriptionAllowedByMode2(HMSTranscriptionMode3.CAPTION)
  );
  const isTranscriptionEnabled = useHMSStore35(selectIsTranscriptionEnabled4);
  const [isCaptionEnabled] = useSetIsCaptionEnabled();
  useDropdownList({
    open: openModals.size > 0 || openOptionsSheet || openSettingsSheet,
    name: "MoreSettings"
  });
  const updateState = (modalName, value) => {
    setOpenModals((modals) => {
      const copy = new Set(modals);
      if (value) {
        copy.add(modalName);
      } else {
        copy.delete(modalName);
      }
      return copy;
    });
  };
  useClickAway(emojiCardRef, () => setShowEmojiCard(false));
  return /* @__PURE__ */ React69.createElement(React69.Fragment, null, /* @__PURE__ */ React69.createElement(Sheet.Root, { open: openOptionsSheet, onOpenChange: setOpenOptionsSheet }, /* @__PURE__ */ React69.createElement(Tooltip, { title: "More options" }, /* @__PURE__ */ React69.createElement(Sheet.Trigger, { asChild: true, "data-testid": "more_settings_btn" }, /* @__PURE__ */ React69.createElement(
    IconButton_default,
    {
      css: {
        bg: isMobileHLSStream || isLandscapeHLSStream ? "$surface_default" : ""
      }
    },
    /* @__PURE__ */ React69.createElement(HamburgerMenuIcon2, null)
  ))), /* @__PURE__ */ React69.createElement(Sheet.Content, { css: { bg: "$surface_dim", pb: "$14" } }, /* @__PURE__ */ React69.createElement(
    Sheet.Title,
    {
      css: {
        display: "flex",
        color: "$on_surface_high",
        w: "100%",
        justifyContent: "space-between",
        fontSize: "$md",
        mt: "$8",
        px: "$10",
        pb: "$8",
        borderBottom: "1px solid $border_default",
        mb: "$8",
        alignItems: "center"
      }
    },
    "Options",
    /* @__PURE__ */ React69.createElement(Sheet.Close, null, /* @__PURE__ */ React69.createElement(Box, { css: { color: "$on_surface_high" } }, /* @__PURE__ */ React69.createElement(CrossIcon13, null)))
  ), /* @__PURE__ */ React69.createElement(
    Box,
    {
      css: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto",
        gridColumnGap: "$6",
        gridRowGap: "$8",
        px: "$9"
      }
    },
    (elements == null ? void 0 : elements.participant_list) && /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        onClick: () => {
          toggleParticipants();
          setOpenOptionsSheet(false);
        }
      },
      /* @__PURE__ */ React69.createElement(ActionTile.Count, null, getFormattedCount(peerCount)),
      /* @__PURE__ */ React69.createElement(PeopleIcon, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, "Participants")
    ),
    elements.hand_raise ? /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        active: isHandRaised,
        onClick: () => {
          toggleHandRaise();
          setOpenOptionsSheet(false);
        }
      },
      isHandRaised ? /* @__PURE__ */ React69.createElement(HandRaiseSlashedIcon, null) : /* @__PURE__ */ React69.createElement(HandIcon2, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, isHandRaised ? "Lower" : "Raise", " Hand")
    ) : null,
    /* @__PURE__ */ React69.createElement(
      NoiseCancellation,
      {
        setOpenOptionsSheet,
        actionTile: true
      }
    ),
    isTranscriptionAllowed ? /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        onClick: () => {
          setOpenOptionsSheet(false);
          updateState(MODALS2.CAPTION, true);
        }
      },
      isTranscriptionEnabled && isCaptionEnabled ? /* @__PURE__ */ React69.createElement(ClosedCaptionIcon2, null) : /* @__PURE__ */ React69.createElement(OpenCaptionIcon3, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, "Closed Caption")
    ) : null,
    isLocalVideoEnabled && !!(elements == null ? void 0 : elements.virtual_background) ? /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        onClick: () => {
          toggleVB();
          setOpenOptionsSheet(false);
        }
      },
      /* @__PURE__ */ React69.createElement(VirtualBackgroundIcon, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, "Virtual Background")
    ) : null,
    (elements == null ? void 0 : elements.emoji_reactions) && !(isLandscapeHLSStream || isMobileHLSStream) && /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        onClick: () => {
          setShowEmojiCard(true);
          setOpenOptionsSheet(false);
        }
      },
      /* @__PURE__ */ React69.createElement(EmojiIcon2, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, "Emoji Reactions")
    ),
    showPolls && /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        onClick: () => {
          togglePollView();
          setOpenOptionsSheet(false);
          setUnreadPollQuiz(false);
        }
      },
      unreadPollQuiz ? /* @__PURE__ */ React69.createElement(QuizActiveIcon, null) : /* @__PURE__ */ React69.createElement(QuizIcon, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, "Polls and Quizzes")
    ),
    (elements == null ? void 0 : elements.brb) && /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        active: isBRBOn,
        onClick: () => {
          toggleBRB();
          setOpenOptionsSheet(false);
        }
      },
      /* @__PURE__ */ React69.createElement(BrbIcon2, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, "Be Right Back")
    ),
    /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        onClick: () => {
          setOpenSettingsSheet(true);
          setOpenOptionsSheet(false);
        }
      },
      /* @__PURE__ */ React69.createElement(SettingsIcon4, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, "Settings")
    ),
    isConnected && (permissions == null ? void 0 : permissions.browserRecording) ? /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        disabled: isHLSRunning,
        onClick: () => __async(void 0, null, function* () {
          if (isRecordingLoading) {
            return;
          }
          if (isBrowserRecordingOn || isStreamingOn) {
            setOpenOptionsSheet(false);
            setShowRecordingOn(true);
          } else {
            yield startRecording();
            setOpenOptionsSheet(false);
          }
          if (isHLSRunning) {
            setOpenOptionsSheet(false);
          }
        })
      },
      isRecordingLoading ? /* @__PURE__ */ React69.createElement(Loading, null) : /* @__PURE__ */ React69.createElement(RecordIcon2, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, match6({ isBrowserRecordingOn, isRecordingLoading }).with(
        { isBrowserRecordingOn: true, isRecordingLoading: false },
        () => "Recording On"
      ).with(
        { isRecordingLoading: true },
        () => "Starting Recording"
      ).with(
        { isRecordingLoading: false },
        () => "Start Recording"
      ).otherwise(() => null))
    ) : null,
    title || description ? /* @__PURE__ */ React69.createElement(
      ActionTile.Root,
      {
        onClick: () => {
          setOpenOptionsSheet(false);
          toggleDetailsSheet();
        }
      },
      /* @__PURE__ */ React69.createElement(InfoIcon3, null),
      /* @__PURE__ */ React69.createElement(ActionTile.Title, null, "About Session")
    ) : null
  ))), /* @__PURE__ */ React69.createElement(
    SettingsModal_default,
    {
      open: openSettingsSheet,
      onOpenChange: setOpenSettingsSheet,
      screenType
    }
  ), openModals.has(MODALS2.MUTE_ALL) && /* @__PURE__ */ React69.createElement(
    MuteAllModal,
    {
      onOpenChange: (value) => updateState(MODALS2.MUTE_ALL, value),
      isMobile: true
    }
  ), openModals.has(MODALS2.CHANGE_NAME) && /* @__PURE__ */ React69.createElement(
    ChangeNameModal,
    {
      onOpenChange: (value) => updateState(MODALS2.CHANGE_NAME, value),
      openParentSheet: () => setOpenOptionsSheet(true)
    }
  ), openModals.has(MODALS2.CAPTION) && /* @__PURE__ */ React69.createElement(
    CaptionModal,
    {
      onOpenChange: (value) => updateState(MODALS2.CAPTION, value)
    }
  ), showEmojiCard && /* @__PURE__ */ React69.createElement(
    Box,
    {
      ref: emojiCardRef,
      css: {
        maxWidth: "100%",
        w: "100%",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "$18",
        bg: "$surface_default",
        zIndex: "10",
        p: "$8",
        pb: 0,
        r: "$1",
        mx: "$4"
      }
    },
    /* @__PURE__ */ React69.createElement(EmojiReaction, { showCard: true })
  ), showRecordingOn && /* @__PURE__ */ React69.createElement(
    StopRecordingInSheet,
    {
      onClose: () => setShowRecordingOn(false),
      onStopRecording: () => __async(void 0, null, function* () {
        try {
          yield hmsActions.stopRTMPAndRecording();
          setShowRecordingOn(false);
        } catch (error) {
          ToastManager.addToast({
            // @ts-ignore
            title: error.message,
            variant: "error"
          });
        }
      })
    }
  ));
};

// src/Prebuilt/components/MoreSettings/MoreSettings.tsx
var MoreSettings = ({
  elements,
  screenType
}) => {
  const isMobile = useMedia13(config.media.md);
  const isLandscapeHLSStream = useLandscapeHLSStream();
  return isMobile || isLandscapeHLSStream ? /* @__PURE__ */ React70.createElement(MwebOptions, { elements, screenType }) : /* @__PURE__ */ React70.createElement(DesktopOptions, { elements, screenType });
};

// src/Prebuilt/components/RaiseHand.tsx
import React71 from "react";
import { HandIcon as HandIcon3, HandRaiseSlashedIcon as HandRaiseSlashedIcon2 } from "@100mslive/react-icons";
var RaiseHand = ({ css: css2 }) => {
  const { isHandRaised, toggleHandRaise } = useMyMetadata();
  const { elements } = useRoomLayoutConferencingScreen();
  if (!elements.hand_raise) {
    return null;
  }
  return /* @__PURE__ */ React71.createElement(Tooltip, { title: isHandRaised ? "Lower hand" : "Raise hand" }, /* @__PURE__ */ React71.createElement(
    IconButton_default,
    {
      "data-testid": "hand_raise_btn",
      css: css2,
      active: !isHandRaised,
      onClick: () => __async(void 0, null, function* () {
        return yield toggleHandRaise();
      })
    },
    isHandRaised ? /* @__PURE__ */ React71.createElement(HandRaiseSlashedIcon2, null) : /* @__PURE__ */ React71.createElement(HandIcon3, null)
  ));
};

// src/Prebuilt/components/ScreenShareToggle.jsx
import React78, { Fragment as Fragment9 } from "react";
import {
  selectIsAllowedToPublish as selectIsAllowedToPublish2,
  useAwayNotifications,
  useHMSStore as useHMSStore36,
  useScreenShare as useScreenShare2
} from "@100mslive/react-sdk";
import { ShareScreenIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/pdfAnnotator/shareScreenOptions.jsx
import React77, { Fragment as Fragment8, useState as useState33 } from "react";
import { useScreenShare } from "@100mslive/react-sdk";
import { StarIcon, VerticalMenuIcon as VerticalMenuIcon4 } from "@100mslive/react-icons";

// src/Prebuilt/images/pdf-share.png
var pdf_share_default = "data:image/png;base64,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";

// src/Prebuilt/images/screen-share.png
var screen_share_default = "data:image/png;base64,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";

// src/Prebuilt/components/ShareMenuIcon.jsx
var ScreenShareButton = styled(IconButton_default, {
  h: "$14",
  px: "$8",
  r: "$1",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  "@md": {
    px: "$4",
    mx: 0
  }
});
var ShareMenuIcon = styled(ScreenShareButton, {
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  borderTopRightRadius: "$1",
  borderBottomRightRadius: "$1",
  borderLeftWidth: 0,
  w: "$4",
  "@md": {
    w: "unset",
    px: "$2"
  }
});

// src/Prebuilt/components/pdfAnnotator/pdfFileOptions.jsx
import React76, { useState as useState32 } from "react";

// src/Prebuilt/components/pdfAnnotator/pdfHeader.jsx
import React72 from "react";
var PDFHeader = () => {
  return /* @__PURE__ */ React72.createElement(
    DialogCol,
    {
      align: "start",
      css: {
        mt: 0,
        mb: "$6"
      }
    },
    /* @__PURE__ */ React72.createElement(Dialog.Title, { asChild: true }, /* @__PURE__ */ React72.createElement(Text, { as: "h6", variant: "h6" }, "Share PDF")),
    /* @__PURE__ */ React72.createElement(Dialog.Description, { asChild: true }, /* @__PURE__ */ React72.createElement(
      Text,
      {
        variant: "sm",
        css: {
          c: "$on_surface_medium"
        }
      },
      "Choose PDF you want to annotate and share"
    ))
  );
};

// src/Prebuilt/components/pdfAnnotator/submitPdf.jsx
import React73 from "react";
var SubmitPDF = ({ pdfFile, onOpenChange }) => {
  const [, setPDFConfig] = useSetAppDataByKey(APP_DATA.pdfConfig);
  return /* @__PURE__ */ React73.createElement(
    Flex,
    {
      direction: "row",
      css: {
        mb: "0",
        mt: "auto",
        gap: "$8"
      }
    },
    /* @__PURE__ */ React73.createElement(
      Button,
      {
        variant: "standard",
        outlined: true,
        type: "submit",
        onClick: () => {
          onOpenChange(false);
        },
        css: { w: "50%" }
      },
      "Cancel"
    ),
    /* @__PURE__ */ React73.createElement(
      Button,
      {
        variant: "primary",
        type: "submit",
        onClick: () => {
          if (pdfFile) {
            setPDFConfig(pdfFile);
            onOpenChange(false);
          }
        },
        disabled: !pdfFile,
        "data-testid": "share_pdf_btn",
        css: {
          w: "50%"
        }
      },
      "Start Sharing"
    )
  );
};

// src/Prebuilt/components/pdfAnnotator/uploadedFile.jsx
import React75 from "react";
import { TrashIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/pdfAnnotator/pdfInfo.jsx
import React74 from "react";
import { InfoIcon as InfoIcon4 } from "@100mslive/react-icons";
var PDFInfo = () => {
  return /* @__PURE__ */ React74.createElement(
    DialogRow,
    {
      css: {
        px: "$8",
        py: "$3",
        bg: "$surface_default",
        r: "$1",
        outline: "none",
        border: "1px solid $border_bright",
        minHeight: "$11"
      }
    },
    /* @__PURE__ */ React74.createElement(
      InfoIcon4,
      {
        width: "64px",
        height: "64px",
        style: {
          paddingRight: "16px"
        }
      }
    ),
    /* @__PURE__ */ React74.createElement(Text, { variant: "caption" }, "On the next screen, ensure you select \u201CThis Tab\u201D and click on share. Only the PDF viewer will be seen by other participants")
  );
};

// src/Prebuilt/components/pdfAnnotator/uploadedFile.jsx
var UploadedFile = ({ pdfFile, setPDFFile, onOpenChange }) => {
  const [fileName, ext] = pdfFile.name.split(".");
  return /* @__PURE__ */ React75.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React75.createElement(Dialog.Portal, null, /* @__PURE__ */ React75.createElement(Dialog.Overlay, null), /* @__PURE__ */ React75.createElement(
    Dialog.Content,
    {
      css: {
        w: "min(420px,80%)",
        overflow: "auto",
        p: "$10",
        bg: "$surface_dim"
      }
    },
    /* @__PURE__ */ React75.createElement(Flex, { direction: "column" }, /* @__PURE__ */ React75.createElement(PDFHeader, null), /* @__PURE__ */ React75.createElement(
      DialogRow,
      {
        css: {
          fontFamily: "$sans",
          bg: "$surface_bright",
          r: "$1",
          outline: "none",
          border: "1px solid $border_bright",
          p: "$4 $6",
          minHeight: "$11",
          c: "$on_primary_high",
          fs: "$md",
          w: "100%",
          "&:focus": {
            boxShadow: "0 0 0 1px $colors$primary_default",
            border: "1px solid transparent"
          },
          mb: 0,
          mt: "$6"
        }
      },
      /* @__PURE__ */ React75.createElement(Flex, { direction: "row", css: { flexGrow: "1", maxWidth: "88%" } }, /* @__PURE__ */ React75.createElement(
        Text,
        {
          css: {
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }
        },
        fileName
      ), /* @__PURE__ */ React75.createElement(Text, { css: { whiteSpace: "nowrap" } }, ".", ext)),
      /* @__PURE__ */ React75.createElement(
        TrashIcon,
        {
          onClick: () => setPDFFile(null),
          style: {
            cursor: "pointer"
          }
        }
      )
    ), /* @__PURE__ */ React75.createElement(PDFInfo, null), /* @__PURE__ */ React75.createElement(SubmitPDF, { pdfFile, onOpenChange }))
  )));
};

// src/Prebuilt/components/pdfAnnotator/pdfFileOptions.jsx
function PDFFileOptions({ onOpenChange }) {
  const [pdfFile, setPDFFile] = useState32(null);
  return !pdfFile ? /* @__PURE__ */ React76.createElement(Dialog.Root, { defaultOpen: true, onOpenChange }, /* @__PURE__ */ React76.createElement(Dialog.Portal, null, /* @__PURE__ */ React76.createElement(Dialog.Overlay, null), /* @__PURE__ */ React76.createElement(
    Dialog.Content,
    {
      css: {
        w: "min(420px,80%)",
        overflow: "auto",
        p: "$10",
        bg: "$surface_dim"
      }
    },
    /* @__PURE__ */ React76.createElement(Flex, { direction: "column" }, /* @__PURE__ */ React76.createElement(PDFHeader, null), /* @__PURE__ */ React76.createElement(
      DialogInputFile,
      {
        onChange: (target) => {
          setPDFFile(target.files[0]);
        },
        placeholder: "Click to upload",
        type: "file",
        accept: ".pdf"
      }
    ), /* @__PURE__ */ React76.createElement(SubmitPDF, { pdfFile, onOpenChange }))
  ))) : /* @__PURE__ */ React76.createElement(
    UploadedFile,
    {
      pdfFile,
      setPDFFile,
      onOpenChange
    }
  );
}

// src/Prebuilt/components/pdfAnnotator/shareScreenOptions.jsx
var MODALS3 = {
  SHARE: "share",
  SCREEN_SHARE: "screenShare",
  PDF_SHARE: "pdfShare"
};
function ShareScreenOptions() {
  const [openModals, setOpenModals] = useState33(/* @__PURE__ */ new Set());
  const { amIScreenSharing } = useScreenShare();
  const updateState = (modalName, value) => {
    setOpenModals((modals) => {
      const copy = new Set(modals);
      if (value) {
        copy.add(modalName);
      } else {
        copy.delete(modalName);
      }
      return copy;
    });
  };
  const { toggleScreenShare } = useScreenShare();
  return /* @__PURE__ */ React77.createElement(Fragment8, null, /* @__PURE__ */ React77.createElement(
    Dropdown.Root,
    {
      open: openModals.has(MODALS3.SHARE),
      onOpenChange: (value) => updateState(MODALS3.SHARE, value),
      modal: false
    },
    /* @__PURE__ */ React77.createElement(
      Dropdown.Trigger,
      {
        asChild: true,
        "data-testid": "sharing_btn",
        disabled: amIScreenSharing
      },
      /* @__PURE__ */ React77.createElement(ShareMenuIcon, { disabled: amIScreenSharing }, /* @__PURE__ */ React77.createElement(Tooltip, { title: "Share" }, /* @__PURE__ */ React77.createElement(Box, null, /* @__PURE__ */ React77.createElement(VerticalMenuIcon4, null))))
    ),
    /* @__PURE__ */ React77.createElement(
      Dropdown.Content,
      {
        sideOffset: 5,
        css: {
          w: "$96",
          maxHeight: "$96",
          p: 0,
          bg: "$surface_dim"
        }
      },
      /* @__PURE__ */ React77.createElement(
        Dropdown.Item,
        {
          css: {
            flexDirection: "column",
            alignItems: "flex-start",
            px: "$10",
            pt: "$10",
            pb: "$6",
            "&:hover": {
              bg: "transparent",
              cursor: "default"
            }
          }
        },
        /* @__PURE__ */ React77.createElement(Text, { variant: "h6" }, "Start Sharing"),
        /* @__PURE__ */ React77.createElement(Text, { variant: "sm" }, "Choose what you want to share")
      ),
      /* @__PURE__ */ React77.createElement(
        Dropdown.Item,
        {
          css: {
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "$8",
            px: "$10",
            pt: "$6",
            pb: "$10",
            "&:hover": {
              bg: "transparent",
              cursor: "default"
            }
          }
        },
        /* @__PURE__ */ React77.createElement(
          Flex,
          {
            direction: "column",
            align: "center",
            css: {
              gap: "$6"
            }
          },
          /* @__PURE__ */ React77.createElement(
            IconButton,
            {
              as: "div",
              onClick: toggleScreenShare,
              css: {
                p: "$6",
                display: "flex",
                justifyContent: "center",
                border: "1px solid $border_bright",
                r: "$2",
                bg: "$surface_brighter",
                pb: "0"
              }
            },
            /* @__PURE__ */ React77.createElement(
              "img",
              {
                src: screen_share_default,
                alt: "screen-share",
                width: "100%",
                height: "100%",
                style: {
                  borderTopLeftRadius: "0.5rem",
                  // TODO: create image component to solve for style hardcoding
                  borderTopRightRadius: "0.5rem"
                }
              }
            )
          ),
          /* @__PURE__ */ React77.createElement(Flex, { direction: "column", align: "center" }, /* @__PURE__ */ React77.createElement(Text, { variant: "body2" }, "Share Screen"), /* @__PURE__ */ React77.createElement(
            Text,
            {
              variant: "caption",
              css: {
                c: "$on_surface_low",
                textAlign: "center"
              }
            },
            "Share your tab, window or your entire screen"
          ))
        ),
        /* @__PURE__ */ React77.createElement(
          Flex,
          {
            direction: "column",
            align: "center",
            css: {
              gap: "$6"
            }
          },
          /* @__PURE__ */ React77.createElement(
            IconButton,
            {
              onClick: () => {
                updateState(MODALS3.PDF_SHARE, true);
              },
              disabled: amIScreenSharing,
              css: {
                p: "$6",
                display: "flex",
                justifyContent: "center",
                border: "$border_bright 1px solid",
                r: "$2",
                bg: "$surface_bright",
                pb: "0"
              }
            },
            /* @__PURE__ */ React77.createElement(
              "img",
              {
                src: pdf_share_default,
                alt: "pdf-share",
                width: "100%",
                height: "100%",
                style: {
                  borderTopLeftRadius: "0.5rem",
                  // TODO: create image component to solve for style hardcoding
                  borderTopRightRadius: "0.5rem"
                }
              }
            ),
            /* @__PURE__ */ React77.createElement(
              Flex,
              {
                direction: "row",
                align: "center",
                css: {
                  position: "absolute",
                  top: "35%",
                  left: "54%",
                  padding: "$2 $4",
                  r: "$2",
                  bg: "$primary_bright",
                  zIndex: "2",
                  gap: "$2"
                }
              },
              /* @__PURE__ */ React77.createElement(StarIcon, { height: 14, width: 14 }),
              /* @__PURE__ */ React77.createElement(
                Text,
                {
                  variant: "xs",
                  css: {
                    fontWeight: "$semiBold",
                    c: "$on_primary_high",
                    pr: "$4"
                  }
                },
                "New"
              )
            )
          ),
          /* @__PURE__ */ React77.createElement(Flex, { direction: "column", align: "center" }, /* @__PURE__ */ React77.createElement(Text, { variant: "body2" }, "Share PDF"), /* @__PURE__ */ React77.createElement(
            Text,
            {
              variant: "caption",
              css: {
                c: "$on_surface_low",
                textAlign: "center"
              }
            },
            "Annotate, draw shapes, and more over PDFs"
          ))
        )
      )
    )
  ), openModals.has(MODALS3.PDF_SHARE) && /* @__PURE__ */ React77.createElement(
    PDFFileOptions,
    {
      onOpenChange: (value) => updateState(MODALS3.PDF_SHARE, value)
    }
  ));
}

// src/Prebuilt/components/ScreenShareToggle.jsx
var ScreenshareToggle = ({ css: css2 = {} }) => {
  const isAllowedToPublish = useHMSStore36(selectIsAllowedToPublish2);
  const isAudioOnly = useUISettings(UI_SETTINGS.isAudioOnly);
  const {
    amIScreenSharing,
    screenShareVideoTrackId: video,
    toggleScreenShare
  } = useScreenShare2((error) => {
    ToastManager.addToast({
      title: error.message,
      variant: "error",
      duration: 2e3
    });
  });
  const { requestPermission } = useAwayNotifications();
  const isVideoScreenshare = amIScreenSharing && !!video;
  if (!isAllowedToPublish.screen || !isScreenshareSupported()) {
    return null;
  }
  return /* @__PURE__ */ React78.createElement(Fragment9, null, /* @__PURE__ */ React78.createElement(Flex, { direction: "row" }, /* @__PURE__ */ React78.createElement(
    ScreenShareButton,
    {
      variant: "standard",
      key: "ShareScreen",
      active: !isVideoScreenshare,
      css: css2,
      disabled: isAudioOnly,
      onClick: () => __async(void 0, null, function* () {
        yield toggleScreenShare();
        yield requestPermission();
      })
    },
    /* @__PURE__ */ React78.createElement(
      Tooltip,
      {
        title: `${!isVideoScreenshare ? "Start" : "Stop"} screen sharing`
      },
      /* @__PURE__ */ React78.createElement(Box, null, /* @__PURE__ */ React78.createElement(ShareScreenIcon, null))
    )
  ), /* @__PURE__ */ React78.createElement(ShareScreenOptions, null)));
};

// src/Prebuilt/components/VirtualBackground/VBToggle.tsx
import React79, { useEffect as useEffect24 } from "react";
import { HMSVirtualBackgroundTypes as HMSVirtualBackgroundTypes2 } from "@100mslive/hms-virtual-background/hmsvbplugin";
import {
  selectAppData as selectAppData5,
  selectIsEffectsEnabled,
  selectIsLocalVideoEnabled as selectIsLocalVideoEnabled5,
  selectIsVBEnabled,
  useAVToggle as useAVToggle3,
  useHMSActions as useHMSActions30,
  useHMSStore as useHMSStore37
} from "@100mslive/react-sdk";
import { VirtualBackgroundIcon as VirtualBackgroundIcon2 } from "@100mslive/react-icons";
var VBToggle = () => {
  const toggleVB = useSidepaneToggle(SIDE_PANE_OPTIONS.VB);
  const isVBOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.VB);
  const isVideoOn = useHMSStore37(selectIsLocalVideoEnabled5);
  const isVBEnabled = useHMSStore37(selectIsVBEnabled);
  const isEffectsEnabled = useHMSStore37(selectIsEffectsEnabled);
  const loadingEffects = useHMSStore37(selectAppData5(APP_DATA.loadingEffects));
  const hmsActions = useHMSActions30();
  const { toggleVideo } = useAVToggle3();
  useEffect24(() => {
    var _a7;
    if (!toggleVideo) {
      (_a7 = VBHandler) == null ? void 0 : _a7.reset();
      hmsActions.setAppData(
        APP_DATA.background,
        HMSVirtualBackgroundTypes2.NONE
      );
    }
  }, [hmsActions, toggleVideo]);
  if (!isVideoOn || !isEffectsEnabled && isSafari || !isVBEnabled) {
    return null;
  }
  return /* @__PURE__ */ React79.createElement(
    Tooltip,
    {
      side: "top",
      disabled: isVBOpen,
      title: "Configure Virtual Background"
    },
    /* @__PURE__ */ React79.createElement(
      IconButton_default,
      {
        active: !isVBOpen,
        onClick: toggleVB,
        "data-testid": "virtual_bg_btn"
      },
      loadingEffects ? /* @__PURE__ */ React79.createElement(Loading, { size: 18 }) : /* @__PURE__ */ React79.createElement(VirtualBackgroundIcon2, null)
    )
  );
};

// src/Prebuilt/components/Footer/ChatToggle.tsx
import React80 from "react";
import {
  selectUnreadHMSMessagesCount as selectUnreadHMSMessagesCount3,
  useHMSStore as useHMSStore38
} from "@100mslive/react-sdk";
import { ChatIcon } from "@100mslive/react-icons";
var ChatToggle = ({ onClick }) => {
  const countUnreadMessages = useHMSStore38(selectUnreadHMSMessagesCount3);
  const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
  const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
  return /* @__PURE__ */ React80.createElement(
    Box,
    {
      css: {
        position: "relative"
      }
    },
    /* @__PURE__ */ React80.createElement(Tooltip, { key: "chat", title: `${isChatOpen ? "Close" : "Open"} chat` }, /* @__PURE__ */ React80.createElement(
      IconButton_default,
      {
        onClick: () => onClick ? onClick() : toggleChat(),
        css: { bg: isChatOpen ? "$surface_brighter" : "" },
        "data-testid": "chat_btn"
      },
      /* @__PURE__ */ React80.createElement(ChatIcon, null)
    )),
    countUnreadMessages > 0 && /* @__PURE__ */ React80.createElement(
      Flex,
      {
        css: {
          height: "$8",
          p: "$4 4.5px",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "-$4",
          right: "-$4",
          borderRadius: "$space$14",
          background: "$primary_default"
        }
      },
      /* @__PURE__ */ React80.createElement(Text, { variant: "overline" }, countUnreadMessages > 99 ? "99+" : countUnreadMessages)
    )
  );
};

// src/Prebuilt/components/Footer/ParticipantList.tsx
import React85, { Fragment as Fragment10, useCallback as useCallback24, useState as useState36 } from "react";
import { useDebounce, useMedia as useMedia14 } from "react-use";
import {
  HMSPeerType as HMSPeerType2,
  selectAvailableRoleNames as selectAvailableRoleNames5,
  selectHandRaisedPeers,
  selectHasPeerHandRaised as selectHasPeerHandRaised2,
  selectIsLargeRoom as selectIsLargeRoom2,
  selectIsPeerAudioEnabled,
  selectLocalPeerID as selectLocalPeerID11,
  selectPeerCount as selectPeerCount4,
  selectPermissions as selectPermissions14,
  useHMSStore as useHMSStore46
} from "@100mslive/react-sdk";
import {
  AddIcon as AddIcon2,
  CallIcon,
  ChangeRoleIcon as ChangeRoleIcon2,
  CrossIcon as CrossIcon15,
  HandIcon as HandIcon4,
  MicOffIcon as MicOffIcon4,
  PeopleIcon as PeopleIcon2,
  PersonSettingsIcon,
  SearchIcon,
  VerticalMenuIcon as VerticalMenuIcon6
} from "@100mslive/react-icons";

// src/Prebuilt/components/Connection/ConnectionIndicator.tsx
import React81 from "react";
import {
  HMSPeerType,
  selectConnectionQualityByPeerID as selectConnectionQualityByPeerID2,
  selectPeerTypeByID,
  useHMSStore as useHMSStore39
} from "@100mslive/react-sdk";
import { PoorConnectivityIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/Connection/connectionQualityUtils.js
var connectionTooltip = {
  0: "Reconnecting",
  1: "Very Bad Connection",
  2: "Bad Connection",
  3: "Moderate Connection",
  4: "Good Connection",
  5: "Excellent Connection"
};
connectionTooltip[-1] = "Network Unknown";
var getTooltipText = (connectionScore) => {
  return connectionTooltip[connectionScore];
};
var getColor = (position, connectionScore, defaultColor, theme2) => {
  const shouldBeColored = position <= connectionScore;
  if (!shouldBeColored) {
    return defaultColor;
  }
  if (connectionScore >= 4) {
    return theme2.colors.alert_success;
  } else if (connectionScore >= 1) {
    return theme2.colors.alert_warning;
  }
  return defaultColor;
};

// src/Prebuilt/components/Connection/ConnectionIndicator.tsx
var Wrapper = styled("span", {
  width: "28px",
  height: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$round",
  variants: {
    isTile: {
      true: {
        width: "unset",
        height: "unset"
      }
    }
  }
});
var ConnectionIndicator = ({
  peerId,
  isTile = false,
  hideBg = false
}) => {
  var _a7;
  const downlinkQuality = (_a7 = useHMSStore39(
    selectConnectionQualityByPeerID2(peerId)
  )) == null ? void 0 : _a7.downlinkQuality;
  const peerType = useHMSStore39(selectPeerTypeByID(peerId));
  const { theme: theme2 } = useTheme();
  const defaultColor = theme2.colors.on_surface_low;
  if (downlinkQuality === -1 || downlinkQuality === void 0 || peerType === HMSPeerType.SIP) {
    return null;
  }
  if (downlinkQuality === 0) {
    return /* @__PURE__ */ React81.createElement(Tooltip, { side: "left", title: getTooltipText(downlinkQuality) }, /* @__PURE__ */ React81.createElement(
      Wrapper,
      {
        isTile,
        css: { color: "#ED4C5A" },
        "data-testid": "tile_network"
      },
      /* @__PURE__ */ React81.createElement(PoorConnectivityIcon, null)
    ));
  }
  const size = isTile ? 12 : 16;
  return /* @__PURE__ */ React81.createElement(Tooltip, { side: "left", title: getTooltipText(downlinkQuality) }, /* @__PURE__ */ React81.createElement(
    Wrapper,
    {
      isTile,
      "data-testid": "tile_network",
      css: { backgroundColor: hideBg ? "" : "$surface_bright" }
    },
    /* @__PURE__ */ React81.createElement(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 14 12",
        xmlns: "http://www.w3.org/2000/svg",
        xmlSpace: "preserve",
        style: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2
        }
      },
      /* @__PURE__ */ React81.createElement(
        "path",
        {
          d: "M6.875 0c2.549.035 4.679.902 6.445 2.648.366.362.45.796.216 1.096-.239.306-.714.34-1.142.072a2.28 2.28 0 0 1-.341-.271C9.24.862 4.924.775 1.992 3.346c-.284.249-.594.419-.983.393-.272-.019-.49-.135-.613-.388-.125-.261-.05-.498.114-.713.073-.092.156-.177.245-.254C2.516.804 4.591.039 6.875 0Z",
          fill: getColor(4, downlinkQuality, defaultColor, theme2),
          transform: "translate(-.333)"
        }
      ),
      /* @__PURE__ */ React81.createElement(
        "path",
        {
          d: "M7.056 2.964c1.756.035 3.208.7 4.499 1.763.162.134.277.315.354.512.098.251.114.503-.075.72-.193.222-.452.259-.725.198-.293-.066-.518-.247-.738-.443a4.859 4.859 0 0 0-6.198-.26c-.166.127-.318.271-.475.409-.242.211-.513.343-.843.317-.43-.034-.679-.397-.561-.81.062-.211.181-.4.345-.546 1.265-1.162 2.733-1.836 4.417-1.86Z",
          fill: getColor(3, downlinkQuality, defaultColor, theme2),
          transform: "translate(-.333)"
        }
      ),
      /* @__PURE__ */ React81.createElement(
        "path",
        {
          d: "M7.384,6.052C8.293,6.068 9.157,6.449 9.783,7.108C10.005,7.339 10.157,7.6 10.07,7.942C9.959,8.377 9.435,8.581 9.071,8.243C7.935,7.191 6.356,7.183 5.152,8.183C4.816,8.462 4.6,8.485 4.332,8.27C4.063,8.055 3.998,7.691 4.177,7.358C4.273,7.179 4.414,7.038 4.57,6.911C5.26,6.349 6.149,6.05 7.384,6.052L7.384,6.052Z",
          fill: getColor(2, downlinkQuality, defaultColor, theme2)
        }
      ),
      /* @__PURE__ */ React81.createElement(
        "path",
        {
          d: "M8.214,9.941C8.214,10.234 8.097,10.515 7.888,10.721C7.68,10.928 7.398,11.042 7.104,11.039C6.471,11.036 5.982,10.541 5.993,9.912C6.004,9.259 6.499,8.766 7.133,8.779C7.744,8.791 8.22,9.301 8.214,9.941Z",
          fill: getColor(1, downlinkQuality, defaultColor, theme2)
        }
      )
    )
  ));
};

// src/Prebuilt/components/RemoveParticipant.tsx
import React82 from "react";
import {
  selectLocalPeerID as selectLocalPeerID10,
  selectPermissions as selectPermissions10,
  useHMSActions as useHMSActions31,
  useHMSStore as useHMSStore40
} from "@100mslive/react-sdk";
import { PeopleRemoveIcon as PeopleRemoveIcon3 } from "@100mslive/react-icons";
var RemoveParticipant = ({ peerId }) => {
  var _a7;
  const canRemoveOthers = (_a7 = useHMSStore40(selectPermissions10)) == null ? void 0 : _a7.removeOthers;
  const localPeerId = useHMSStore40(selectLocalPeerID10);
  const actions = useHMSActions31();
  if (peerId === localPeerId || !canRemoveOthers) {
    return null;
  }
  return /* @__PURE__ */ React82.createElement(
    Dropdown.Item,
    {
      css: { color: "$alert_error_default", bg: "$surface_default" },
      onClick: () => __async(void 0, null, function* () {
        try {
          yield actions.removePeer(peerId, "");
        } catch (error) {
          const ex = error;
          ToastManager.addToast({ title: ex.message, variant: "error" });
        }
      })
    },
    /* @__PURE__ */ React82.createElement(PeopleRemoveIcon3, null),
    /* @__PURE__ */ React82.createElement(
      Text,
      {
        variant: "sm",
        css: { ml: "$4", color: "inherit", fontWeight: "$semiBold" }
      },
      "Remove Participant"
    )
  );
};

// src/Prebuilt/components/Footer/RoleAccordion.tsx
import React84, { useEffect as useEffect25 } from "react";
import { useMeasure } from "react-use";
import { FixedSizeList } from "react-window";
import {
  selectIsLargeRoom,
  useHMSStore as useHMSStore43,
  usePaginatedParticipants
} from "@100mslive/react-sdk";
import { AddIcon, ChevronRightIcon, CrossIcon as CrossIcon14 } from "@100mslive/react-icons";

// src/Prebuilt/components/Footer/RoleOptions.tsx
import React83, { useState as useState34 } from "react";
import { match as match7 } from "ts-pattern";
import {
  selectPermissions as selectPermissions11,
  selectRoleByRoleName,
  selectTracksMap as selectTracksMap3,
  useHMSActions as useHMSActions32,
  useHMSStore as useHMSStore41
} from "@100mslive/react-sdk";
import {
  MicOffIcon as MicOffIcon3,
  MicOnIcon as MicOnIcon3,
  PersonRectangleIcon as PersonRectangleIcon2,
  RemoveUserIcon,
  VerticalMenuIcon as VerticalMenuIcon5,
  VideoOffIcon as VideoOffIcon2,
  VideoOnIcon as VideoOnIcon3
} from "@100mslive/react-icons";
var dropdownItemCSS = {
  backgroundColor: "$surface_default",
  gap: "$4",
  p: "$8"
};
var optionTextCSS = {
  fontWeight: "$semiBold",
  color: "$on_surface_high",
  textTransform: "none",
  whiteSpace: "nowrap"
};
var DropdownWrapper = ({ children }) => {
  const [openOptions, setOpenOptions] = useState34(false);
  if (React83.Children.toArray(children).length === 0) {
    return null;
  }
  return /* @__PURE__ */ React83.createElement(Dropdown.Root, { open: openOptions, onOpenChange: setOpenOptions }, /* @__PURE__ */ React83.createElement(
    Dropdown.Trigger,
    {
      "data-testid": "role_group_options",
      onClick: (e) => e.stopPropagation(),
      className: "role_actions",
      asChild: true,
      css: {
        p: "$1",
        r: "$0",
        c: "$on_surface_high",
        visibility: openOptions ? "visible" : "hidden",
        "&:hover": {
          c: "$on_surface_medium"
        },
        "@md": {
          visibility: "visible"
        }
      }
    },
    /* @__PURE__ */ React83.createElement(Flex, null, /* @__PURE__ */ React83.createElement(VerticalMenuIcon5, null))
  ), /* @__PURE__ */ React83.createElement(
    Dropdown.Content,
    {
      onClick: (e) => e.stopPropagation(),
      css: { w: "max-content", bg: "$surface_default", py: 0 },
      align: "end"
    },
    children
  ));
};
var RoleOptions = ({
  roleName,
  peerList
}) => {
  const permissions = useHMSStore41(selectPermissions11);
  const hmsActions = useHMSActions32();
  const { elements } = useRoomLayoutConferencingScreen();
  const { on_stage_role, off_stage_roles = [] } = (elements == null ? void 0 : elements.on_stage_exp) || {};
  const canRemoveRoleFromStage = (permissions == null ? void 0 : permissions.changeRole) && roleName === on_stage_role;
  const role = useHMSStore41(selectRoleByRoleName(roleName));
  const tracks = useHMSStore41(selectTracksMap3);
  if (!role) {
    return null;
  }
  const canPublishAudio = role.publishParams.allowed.includes("audio");
  const canPublishVideo = role.publishParams.allowed.includes("video");
  let isVideoOnForSomePeers = false;
  let isAudioOnForSomePeers = false;
  peerList.forEach((peer) => {
    var _a7, _b7;
    if (peer.isLocal) {
      return;
    }
    const isAudioOn = !!peer.audioTrack && ((_a7 = tracks[peer.audioTrack]) == null ? void 0 : _a7.enabled);
    const isVideoOn = !!peer.videoTrack && ((_b7 = tracks[peer.videoTrack]) == null ? void 0 : _b7.enabled);
    isAudioOnForSomePeers = isAudioOnForSomePeers || isAudioOn;
    isVideoOnForSomePeers = isVideoOnForSomePeers || isVideoOn;
  });
  const setTrackEnabled = (type, enabled = false) => __async(void 0, null, function* () {
    try {
      yield hmsActions.setRemoteTracksEnabled({
        roles: [roleName],
        source: "regular",
        type,
        enabled
      });
    } catch (e) {
      console.error(e);
    }
  });
  const canRemoveRoleFromRoom = (permissions == null ? void 0 : permissions.removeOthers) && (on_stage_role === roleName || (off_stage_roles == null ? void 0 : off_stage_roles.includes(roleName)));
  if (peerList.length === 0 || // if only local peer is present no need to show any options
  peerList.length === 1 && peerList[0].isLocal || !role) {
    return null;
  }
  const removeAllFromStage = () => {
    peerList.forEach((peer) => {
      const prevRole = getMetadata(peer.metadata).prevRole;
      if (prevRole) {
        hmsActions.changeRoleOfPeer(peer.id, prevRole, true);
      }
    });
  };
  const removePeersFromRoom = () => __async(void 0, null, function* () {
    try {
      peerList.forEach((peer) => __async(void 0, null, function* () {
        yield hmsActions.removePeer(peer.id, "");
      }));
    } catch (e) {
      console.error(e);
    }
  });
  return /* @__PURE__ */ React83.createElement(DropdownWrapper, null, canRemoveRoleFromStage ? /* @__PURE__ */ React83.createElement(
    Dropdown.Item,
    {
      css: __spreadProps(__spreadValues({}, dropdownItemCSS), { borderBottom: "1px solid $border_bright" }),
      onClick: removeAllFromStage
    },
    /* @__PURE__ */ React83.createElement(PersonRectangleIcon2, null),
    /* @__PURE__ */ React83.createElement(Text, { variant: "sm", css: optionTextCSS }, "Remove all from Stage")
  ) : null, match7({
    canPublishAudio,
    isAudioOnForSomePeers,
    canMute: permissions == null ? void 0 : permissions.mute,
    canUnmute: permissions == null ? void 0 : permissions.unmute
  }).with(
    { canPublishAudio: true, isAudioOnForSomePeers: true, canMute: true },
    () => {
      return /* @__PURE__ */ React83.createElement(
        Dropdown.Item,
        {
          css: dropdownItemCSS,
          onClick: () => setTrackEnabled("audio", false)
        },
        /* @__PURE__ */ React83.createElement(MicOffIcon3, null),
        /* @__PURE__ */ React83.createElement(Text, { variant: "sm", css: optionTextCSS }, "Mute Audio for All")
      );
    }
  ).with(
    {
      canPublishAudio: true,
      isAudioOnForSomePeers: false,
      canUnmute: true
    },
    () => {
      return /* @__PURE__ */ React83.createElement(
        Dropdown.Item,
        {
          css: dropdownItemCSS,
          onClick: () => setTrackEnabled("audio", true)
        },
        /* @__PURE__ */ React83.createElement(MicOnIcon3, null),
        /* @__PURE__ */ React83.createElement(Text, { variant: "sm", css: optionTextCSS }, "Request to Unmute Audio for All")
      );
    }
  ).otherwise(() => null), match7({
    canPublishVideo,
    isVideoOnForSomePeers,
    canMute: permissions == null ? void 0 : permissions.mute,
    canUnmute: permissions == null ? void 0 : permissions.unmute
  }).with(
    { canPublishVideo: true, isVideoOnForSomePeers: true, canMute: true },
    () => {
      return /* @__PURE__ */ React83.createElement(
        Dropdown.Item,
        {
          css: dropdownItemCSS,
          onClick: () => setTrackEnabled("video", false)
        },
        /* @__PURE__ */ React83.createElement(VideoOffIcon2, null),
        /* @__PURE__ */ React83.createElement(Text, { variant: "sm", css: optionTextCSS }, "Mute Video for All")
      );
    }
  ).with(
    {
      canPublishVideo: true,
      isVideoOnForSomePeers: false,
      canUnmute: true
    },
    () => {
      return /* @__PURE__ */ React83.createElement(
        Dropdown.Item,
        {
          css: dropdownItemCSS,
          onClick: () => setTrackEnabled("video", true)
        },
        /* @__PURE__ */ React83.createElement(VideoOnIcon3, null),
        /* @__PURE__ */ React83.createElement(Text, { variant: "sm", css: optionTextCSS }, "Request to Unmute Video for All")
      );
    }
  ).otherwise(() => null), canRemoveRoleFromRoom ? /* @__PURE__ */ React83.createElement(
    Dropdown.Item,
    {
      css: __spreadProps(__spreadValues({}, dropdownItemCSS), {
        borderTop: "1px solid $border_bright",
        color: "$alert_error_default"
      }),
      onClick: removePeersFromRoom
    },
    /* @__PURE__ */ React83.createElement(RemoveUserIcon, null),
    /* @__PURE__ */ React83.createElement(Text, { variant: "sm", css: __spreadProps(__spreadValues({}, optionTextCSS), { color: "inherit" }) }, "Remove all from Room")
  ) : null);
};

// src/Prebuilt/components/hooks/useGroupOnStageActions.tsx
import { match as match8, P as P4 } from "ts-pattern";
import {
  selectPermissions as selectPermissions12,
  useHMSActions as useHMSActions33,
  useHMSStore as useHMSStore42
} from "@100mslive/react-sdk";
var useGroupOnStageActions = ({ peers }) => {
  var _a7;
  const hmsActions = useHMSActions33();
  const { elements } = useRoomLayoutConferencingScreen();
  const {
    bring_to_stage_label,
    remove_from_stage_label,
    on_stage_role,
    off_stage_roles = [],
    skip_preview_for_role_change = false
  } = elements.on_stage_exp || {};
  const canChangeRole = (_a7 = useHMSStore42(selectPermissions12)) == null ? void 0 : _a7.changeRole;
  const offStageRolePeers = peers.filter(
    (peer) => match8({ on_stage_role, bring_to_stage_label, roleName: peer.roleName }).with(
      {
        on_stage_role: P4.when((role) => !!role),
        bring_to_stage_label: P4.when((label) => !!label),
        roleName: P4.when((role) => !!role && off_stage_roles.includes(role))
      },
      () => true
    ).otherwise(() => false)
  );
  const lowerAllHands = () => __async(void 0, null, function* () {
    return Promise.all(
      peers.map((peer) => hmsActions.lowerRemotePeerHand(peer.id))
    );
  });
  const bringAllToStage = () => {
    if (!canChangeRole || !on_stage_role) {
      return;
    }
    return Promise.all(
      offStageRolePeers.map((peer) => {
        return hmsActions.changeRoleOfPeer(
          peer.id,
          on_stage_role,
          skip_preview_for_role_change
        ).then(() => {
          return skip_preview_for_role_change ? hmsActions.lowerRemotePeerHand(peer.id) : null;
        });
      })
    );
  };
  return {
    lowerAllHands,
    bringAllToStage,
    canBringToStage: canChangeRole && offStageRolePeers.length > 0,
    bring_to_stage_label,
    remove_from_stage_label
  };
};

// src/Prebuilt/components/Footer/RoleAccordion.tsx
var ROW_HEIGHT = 50;
var ITER_TIMER = 5e3;
function itemKey(index, data3) {
  var _a7;
  return (_a7 = data3.peerList[index]) == null ? void 0 : _a7.id;
}
var VirtualizedParticipantItem = React84.memo(
  ({
    index,
    data: data3,
    style
  }) => {
    return /* @__PURE__ */ React84.createElement(
      Participant,
      {
        key: data3.peerList[index].id,
        peer: data3.peerList[index],
        isHandRaisedAccordion: data3.isHandRaisedAccordion,
        isConnected: data3.isConnected,
        style
      }
    );
  }
);
var RoleAccordion = ({
  peerList = [],
  roleName,
  isConnected,
  filter,
  isHandRaisedAccordion = false,
  offStageRoles,
  onActive
}) => {
  const [ref, { width }] = useMeasure();
  const isLargeRoom = useHMSStore43(selectIsLargeRoom);
  const { peers, total, loadPeers } = usePaginatedParticipants({
    role: roleName,
    limit: 10
  });
  const isOffStageRole = roleName && offStageRoles.includes(roleName);
  let peersInAccordion = peerList;
  if (isOffStageRole && isLargeRoom) {
    peersInAccordion = peers;
    if (filter == null ? void 0 : filter.search) {
      peersInAccordion = peersInAccordion.filter(
        (peer) => peer.name.toLowerCase().includes(filter.search || "")
      );
    }
  }
  const {
    bringAllToStage,
    bring_to_stage_label,
    canBringToStage,
    lowerAllHands
  } = useGroupOnStageActions({
    peers: peersInAccordion
  });
  useEffect25(() => {
    if (!isOffStageRole || !isLargeRoom) {
      return;
    }
    loadPeers();
    const interval = setInterval(() => {
      loadPeers();
    }, ITER_TIMER);
    return () => clearInterval(interval);
  }, [isOffStageRole, isLargeRoom]);
  if (peersInAccordion.length === 0 || isHandRaisedAccordion && (filter == null ? void 0 : filter.search)) {
    return null;
  }
  const height = ROW_HEIGHT * peersInAccordion.length;
  const hasNext = total > peersInAccordion.length && !(filter == null ? void 0 : filter.search);
  return /* @__PURE__ */ React84.createElement(
    Accordion.Item,
    {
      value: roleName,
      css: { "&:hover .role_actions": { visibility: "visible" }, mb: "$8" },
      ref
    },
    /* @__PURE__ */ React84.createElement(
      Accordion.Header,
      {
        chevronID: `role_accordion_btn_${roleName}`,
        iconStyles: { c: "$on_surface_high" },
        css: {
          textTransform: "capitalize",
          p: "$6 $8",
          fontSize: "$sm",
          fontWeight: "$semiBold",
          c: "$on_surface_medium",
          borderRadius: "$1",
          border: "1px solid $border_default",
          '&[data-state="open"]': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }
        }
      },
      /* @__PURE__ */ React84.createElement(Flex, { justify: "between", align: "center", css: { flexGrow: 1, pr: "$6" } }, /* @__PURE__ */ React84.createElement(
        Text,
        {
          variant: "sm",
          css: {
            fontWeight: "$semiBold",
            textTransform: "capitalize",
            color: "$on_surface_medium"
          }
        },
        roleName,
        " ",
        `(${getFormattedCount(
          isLargeRoom && isOffStageRole ? total : peerList.length
        )})`
      ), /* @__PURE__ */ React84.createElement(RoleOptions, { roleName, peerList: peersInAccordion }))
    ),
    /* @__PURE__ */ React84.createElement(
      Accordion.Content,
      {
        contentStyles: {
          border: "1px solid $border_default",
          borderTop: "none"
        }
      },
      /* @__PURE__ */ React84.createElement(
        FixedSizeList,
        {
          itemSize: ROW_HEIGHT,
          itemData: {
            peerList: isHandRaisedAccordion ? peersInAccordion.sort((a, b) => {
              try {
                const aHandRaisedAt = JSON.parse(
                  a.metadata || "{}"
                ).handRaisedAt;
                const bHandRaisedAt = JSON.parse(
                  b.metadata || "{}"
                ).handRaisedAt;
                return aHandRaisedAt - bHandRaisedAt;
              } catch (err) {
                return 0;
              }
            }) : peersInAccordion,
            isConnected,
            isHandRaisedAccordion
          },
          itemKey,
          itemCount: peersInAccordion.length,
          width,
          height
        },
        VirtualizedParticipantItem
      ),
      (offStageRoles == null ? void 0 : offStageRoles.includes(roleName)) && hasNext ? /* @__PURE__ */ React84.createElement(
        Flex,
        {
          align: "center",
          justify: "end",
          css: {
            gap: "$1",
            cursor: "pointer",
            color: "$on_surface_high",
            p: "$6",
            borderTop: "1px solid $border_default"
          },
          onClick: () => onActive == null ? void 0 : onActive(roleName)
        },
        /* @__PURE__ */ React84.createElement(Text, { variant: "sm", css: { color: "inherit" } }, "View All"),
        /* @__PURE__ */ React84.createElement(ChevronRightIcon, null)
      ) : null,
      isHandRaisedAccordion && canBringToStage && /* @__PURE__ */ React84.createElement(React84.Fragment, null, /* @__PURE__ */ React84.createElement(HorizontalDivider, null), /* @__PURE__ */ React84.createElement(Flex, { css: { w: "100%", p: "$6", gap: "$4" }, justify: "center" }, /* @__PURE__ */ React84.createElement(
        Button,
        {
          variant: "standard",
          onClick: lowerAllHands,
          icon: true,
          css: { pl: "$2" }
        },
        /* @__PURE__ */ React84.createElement(CrossIcon14, null),
        " Lower all hands"
      ), /* @__PURE__ */ React84.createElement(Button, { onClick: bringAllToStage, icon: true, css: { pl: "$2" } }, /* @__PURE__ */ React84.createElement(AddIcon, null), " ", bring_to_stage_label)))
    )
  );
};

// src/Prebuilt/components/AppData/useSidepaneResetOnLayoutUpdate.tsx
import { useEffect as useEffect26 } from "react";
import { selectAppData as selectAppData6, useHMSStore as useHMSStore44 } from "@100mslive/react-sdk";
var useSidepaneResetOnLayoutUpdate = (layoutKey, sidepaneOption) => {
  const { elements } = useRoomLayoutConferencingScreen();
  const sidepane = useHMSStore44(selectAppData6(APP_DATA.sidePane));
  const resetSidePane = useSidepaneReset();
  useEffect26(() => {
    if (sidepane === sidepaneOption && !(elements == null ? void 0 : elements[layoutKey])) {
      resetSidePane();
    }
  }, [
    elements,
    elements == null ? void 0 : elements[layoutKey],
    resetSidePane,
    sidepane,
    layoutKey,
    sidepaneOption
  ]);
};

// src/Prebuilt/components/hooks/usePeerOnStageActions.tsx
import { useState as useState35 } from "react";
import {
  selectPeerMetadata as selectPeerMetadata3,
  selectPermissions as selectPermissions13,
  useHMSActions as useHMSActions34,
  useHMSStore as useHMSStore45
} from "@100mslive/react-sdk";
var usePeerOnStageActions = ({
  peerId,
  role
}) => {
  var _a7, _b7;
  const hmsActions = useHMSActions34();
  const { elements } = useRoomLayoutConferencingScreen();
  const {
    bring_to_stage_label,
    remove_from_stage_label,
    on_stage_role,
    off_stage_roles = [],
    skip_preview_for_role_change = false
  } = elements.on_stage_exp || {};
  const isInStage = role === on_stage_role;
  const canChangeRole = (_a7 = useHMSStore45(selectPermissions13)) == null ? void 0 : _a7.changeRole;
  const shouldShowStageRoleChange = canChangeRole && (isInStage && remove_from_stage_label || (off_stage_roles == null ? void 0 : off_stage_roles.includes(role)) && bring_to_stage_label);
  const prevRole = (_b7 = useHMSStore45(selectPeerMetadata3(peerId))) == null ? void 0 : _b7.prevRole;
  const [open, setOpen] = useState35(false);
  const lowerPeerHand = () => __async(void 0, null, function* () {
    yield hmsActions.lowerRemotePeerHand(peerId);
  });
  const handleStageAction = () => __async(void 0, null, function* () {
    if (isInStage) {
      prevRole && hmsActions.changeRoleOfPeer(peerId, prevRole, true);
    } else if (on_stage_role) {
      yield hmsActions.changeRoleOfPeer(
        peerId,
        on_stage_role,
        skip_preview_for_role_change
      );
      if (skip_preview_for_role_change) {
        yield lowerPeerHand();
      }
    }
    setOpen(false);
  });
  return {
    open,
    setOpen,
    lowerPeerHand,
    handleStageAction,
    shouldShowStageRoleChange,
    isInStage,
    bring_to_stage_label,
    remove_from_stage_label
  };
};

// src/Prebuilt/components/Footer/ParticipantList.tsx
var ParticipantList = ({
  offStageRoles = [],
  onActive
}) => {
  const [filter, setFilter] = useState36();
  const { participants, isConnected, peerCount } = useParticipants(filter);
  const isLargeRoom = useHMSStore46(selectIsLargeRoom2);
  const peersOrderedByRoles = {};
  const handRaisedPeers = useHMSStore46(selectHandRaisedPeers);
  participants.forEach((participant) => {
    if (participant.roleName) {
      if (peersOrderedByRoles[participant.roleName] === void 0) {
        peersOrderedByRoles[participant.roleName] = [];
      }
      peersOrderedByRoles[participant.roleName].push(participant);
    }
  });
  if (isLargeRoom) {
    offStageRoles.forEach((role) => {
      if (!peersOrderedByRoles[role]) {
        peersOrderedByRoles[role] = [];
      }
    });
  }
  useSidepaneResetOnLayoutUpdate(
    "participant_list",
    SIDE_PANE_OPTIONS.PARTICIPANTS
  );
  const onSearch = useCallback24((value) => {
    setFilter((filterValue) => {
      if (!filterValue) {
        filterValue = {};
      }
      filterValue.search = value.toLowerCase();
      return __spreadValues({}, filterValue);
    });
  }, []);
  if (peerCount === 0) {
    return null;
  }
  return /* @__PURE__ */ React85.createElement(Fragment10, null, /* @__PURE__ */ React85.createElement(
    Flex,
    {
      direction: "column",
      css: {
        size: "100%",
        gap: "$4"
      }
    },
    !(filter == null ? void 0 : filter.search) && participants.length === 0 ? null : /* @__PURE__ */ React85.createElement(ParticipantSearch, { onSearch, inSidePane: true }),
    /* @__PURE__ */ React85.createElement(
      VirtualizedParticipants,
      {
        peersOrderedByRoles,
        handRaisedList: handRaisedPeers,
        isConnected: !!isConnected,
        filter,
        offStageRoles,
        isLargeRoom,
        onActive
      },
      participants.length === 0 ? /* @__PURE__ */ React85.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          className: "emptyParticipants",
          css: { w: "100%", p: "$8 0", display: "none" }
        },
        /* @__PURE__ */ React85.createElement(Text, { variant: "sm" }, !filter ? "No participants" : "No matching participants")
      ) : null
    )
  ));
};
var ParticipantCount = () => {
  const peerCount = useHMSStore46(selectPeerCount4);
  const toggleSidepane = useSidepaneToggle(SIDE_PANE_OPTIONS.PARTICIPANTS);
  const isPeerListOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.PARTICIPANTS);
  if (peerCount === 0) {
    return null;
  }
  return /* @__PURE__ */ React85.createElement(
    IconButton_default,
    {
      css: {
        w: "auto",
        p: "$4",
        h: "auto",
        bg: isPeerListOpen ? "$surface_brighter" : ""
      },
      onClick: () => {
        if (peerCount > 0) {
          toggleSidepane();
        }
      },
      "data-testid": "participant_list"
    },
    /* @__PURE__ */ React85.createElement(PeopleIcon2, null),
    /* @__PURE__ */ React85.createElement(Text, { variant: "sm", css: { mx: "$4", c: "inherit" } }, getFormattedCount(peerCount))
  );
};
var Participant = ({
  peer,
  isConnected,
  isHandRaisedAccordion,
  style
}) => {
  const localPeerId = useHMSStore46(selectLocalPeerID11);
  return /* @__PURE__ */ React85.createElement(
    Flex,
    {
      key: peer.id,
      css: {
        w: "100%",
        p: "$4 $8",
        pr: "$6",
        h: "$16",
        "&:hover .participant_item": { display: "flex" }
      },
      align: "center",
      justify: "between",
      "data-testid": "participant_" + peer.name,
      style
    },
    /* @__PURE__ */ React85.createElement(
      Text,
      {
        variant: "sm",
        css: __spreadProps(__spreadValues({}, textEllipsis("100%")), {
          flex: "1 1 0",
          mr: "$8",
          fontWeight: "$semiBold",
          color: "$on_surface_high"
        })
      },
      peer.name,
      " ",
      localPeerId === peer.id ? "(You)" : ""
    ),
    isConnected && peer.roleName ? /* @__PURE__ */ React85.createElement(
      ParticipantActions,
      {
        peerId: peer.id,
        peerType: peer.type,
        role: peer.roleName,
        isHandRaisedAccordion
      }
    ) : null
  );
};
var VirtualizedParticipants = ({
  peersOrderedByRoles = {},
  isConnected,
  filter,
  handRaisedList = [],
  offStageRoles,
  isLargeRoom,
  onActive,
  children
}) => {
  return /* @__PURE__ */ React85.createElement(
    Flex,
    {
      direction: "column",
      css: {
        gap: "$8",
        overflowY: "auto",
        overflowX: "hidden",
        pr: "$10",
        mr: "-$10",
        flex: "1 1 0",
        "& > div:empty ~ .emptyParticipants": {
          display: "flex"
        }
      }
    },
    /* @__PURE__ */ React85.createElement(Accordion.Root, { type: isLargeRoom ? "single" : "multiple", collapsible: true }, handRaisedList.length > 0 ? /* @__PURE__ */ React85.createElement(
      RoleAccordion,
      {
        peerList: handRaisedList,
        roleName: "Hand Raised",
        filter,
        isConnected,
        isHandRaisedAccordion: true,
        offStageRoles
      }
    ) : null, Object.keys(peersOrderedByRoles).map((role) => /* @__PURE__ */ React85.createElement(
      RoleAccordion,
      {
        key: role,
        peerList: peersOrderedByRoles[role],
        roleName: role,
        isConnected,
        filter,
        offStageRoles,
        onActive
      }
    ))),
    children
  );
};
var ParticipantActions = React85.memo(
  ({
    peerId,
    peerType,
    role,
    isHandRaisedAccordion
  }) => {
    var _a7, _b7;
    const isHandRaised = useHMSStore46(selectHasPeerHandRaised2(peerId));
    const canChangeRole = (_a7 = useHMSStore46(selectPermissions14)) == null ? void 0 : _a7.changeRole;
    const canRemoveOthers = (_b7 = useHMSStore46(selectPermissions14)) == null ? void 0 : _b7.removeOthers;
    const { elements } = useRoomLayoutConferencingScreen();
    const { on_stage_exp } = elements || {};
    const shouldShowMoreActions = on_stage_exp && canChangeRole || canRemoveOthers;
    const isAudioMuted = !useHMSStore46(selectIsPeerAudioEnabled(peerId));
    return /* @__PURE__ */ React85.createElement(
      Flex,
      {
        align: "center",
        css: {
          flexShrink: 0,
          gap: "$8"
        }
      },
      isHandRaisedAccordion ? /* @__PURE__ */ React85.createElement(HandRaisedAccordionParticipantActions, { peerId, role }) : /* @__PURE__ */ React85.createElement(React85.Fragment, null, /* @__PURE__ */ React85.createElement(ConnectionIndicator, { peerId }), peerType === HMSPeerType2.SIP && /* @__PURE__ */ React85.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: {
            p: "$1",
            c: "$on_surface_high",
            bg: "$surface_bright",
            borderRadius: "$round"
          }
        },
        /* @__PURE__ */ React85.createElement(CallIcon, { width: 19, height: 19 })
      ), isHandRaised && /* @__PURE__ */ React85.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: {
            p: "$1",
            c: "$on_surface_high",
            bg: "$surface_bright",
            borderRadius: "$round"
          }
        },
        /* @__PURE__ */ React85.createElement(HandIcon4, { height: 19, width: 19 })
      ), isAudioMuted ? /* @__PURE__ */ React85.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: {
            p: "$2",
            c: "$on_surface_high",
            bg: "$surface_bright",
            borderRadius: "$round"
          }
        },
        /* @__PURE__ */ React85.createElement(MicOffIcon4, { height: 19, width: 19 })
      ) : null, shouldShowMoreActions ? /* @__PURE__ */ React85.createElement(ParticipantMoreActions, { peerId, role }) : null)
    );
  }
);
var quickActionStyle = { p: "$1", borderRadius: "$round" };
var HandRaisedAccordionParticipantActions = ({
  peerId,
  role
}) => {
  const {
    handleStageAction,
    lowerPeerHand,
    shouldShowStageRoleChange,
    isInStage
  } = usePeerOnStageActions({
    peerId,
    role
  });
  if (!shouldShowStageRoleChange) {
    return null;
  }
  return /* @__PURE__ */ React85.createElement(React85.Fragment, null, /* @__PURE__ */ React85.createElement(Button, { variant: "standard", css: quickActionStyle, onClick: lowerPeerHand }, /* @__PURE__ */ React85.createElement(CrossIcon15, { height: 18, width: 18 })), !isInStage && /* @__PURE__ */ React85.createElement(
    Button,
    {
      variant: "primary",
      onClick: handleStageAction,
      css: quickActionStyle
    },
    /* @__PURE__ */ React85.createElement(AddIcon2, { height: 18, width: 18 })
  ));
};
var ParticipantMoreActions = ({
  peerId,
  role
}) => {
  var _a7;
  const {
    open,
    setOpen,
    bring_to_stage_label,
    remove_from_stage_label,
    handleStageAction,
    isInStage,
    shouldShowStageRoleChange
  } = usePeerOnStageActions({ peerId, role });
  const canChangeRole = !!((_a7 = useHMSStore46(selectPermissions14)) == null ? void 0 : _a7.changeRole);
  const [openRoleChangeModal, setOpenRoleChangeModal] = useState36(false);
  const roles = useHMSStore46(selectAvailableRoleNames5);
  return /* @__PURE__ */ React85.createElement(React85.Fragment, null, /* @__PURE__ */ React85.createElement(
    Dropdown.Root,
    {
      open,
      onOpenChange: (value) => setOpen(value),
      modal: false
    },
    /* @__PURE__ */ React85.createElement(
      Dropdown.Trigger,
      {
        asChild: true,
        "data-testid": "participant_more_actions",
        className: "participant_item",
        css: {
          p: "$1",
          r: "$0",
          c: "$on_surface_high",
          display: open ? "flex" : "none",
          "&:hover": {
            bg: "$surface_bright"
          },
          "@md": {
            display: "flex"
          }
        },
        tabIndex: 0
      },
      /* @__PURE__ */ React85.createElement(Box, { css: { my: "auto" } }, /* @__PURE__ */ React85.createElement(VerticalMenuIcon6, null))
    ),
    /* @__PURE__ */ React85.createElement(Dropdown.Portal, null, /* @__PURE__ */ React85.createElement(
      Dropdown.Content,
      {
        align: "end",
        sideOffset: 8,
        css: { w: "$64", bg: "$surface_default" }
      },
      shouldShowStageRoleChange ? /* @__PURE__ */ React85.createElement(
        Dropdown.Item,
        {
          css: { bg: "$surface_default" },
          onClick: () => handleStageAction()
        },
        /* @__PURE__ */ React85.createElement(ChangeRoleIcon2, null),
        /* @__PURE__ */ React85.createElement(
          Text,
          {
            variant: "sm",
            css: {
              ml: "$4",
              fontWeight: "$semiBold",
              c: "$on_surface_high"
            }
          },
          isInStage ? remove_from_stage_label : bring_to_stage_label
        )
      ) : null,
      canChangeRole && roles.length > 1 ? /* @__PURE__ */ React85.createElement(
        Dropdown.Item,
        {
          css: { bg: "$surface_default" },
          onClick: () => setOpenRoleChangeModal(true)
        },
        /* @__PURE__ */ React85.createElement(PersonSettingsIcon, null),
        /* @__PURE__ */ React85.createElement(
          Text,
          {
            variant: "sm",
            css: {
              ml: "$4",
              fontWeight: "$semiBold",
              c: "$on_surface_high"
            }
          },
          "Switch Role"
        )
      ) : null,
      /* @__PURE__ */ React85.createElement(RemoveParticipant, { peerId })
    ))
  ), openRoleChangeModal && /* @__PURE__ */ React85.createElement(
    RoleChangeModal,
    {
      peerId,
      onOpenChange: setOpenRoleChangeModal
    }
  ));
};
var ParticipantSearch = ({
  onSearch,
  placeholder = "Search for participants",
  inSidePane = false
}) => {
  const [value, setValue] = React85.useState("");
  const isMobile = useMedia14(config.media.md);
  useDebounce(
    () => {
      onSearch(value);
    },
    300,
    [value, onSearch]
  );
  return /* @__PURE__ */ React85.createElement(
    Flex,
    {
      align: "center",
      css: {
        p: isMobile ? "0" : "$2 0",
        mb: "$2",
        position: "relative",
        color: "$on_surface_medium",
        mt: inSidePane ? "$4" : ""
      },
      onClick: (e) => e.stopPropagation()
    },
    /* @__PURE__ */ React85.createElement(SearchIcon, { style: { position: "absolute", left: "0.5rem" } }),
    /* @__PURE__ */ React85.createElement(
      Input,
      {
        type: "text",
        placeholder,
        css: {
          w: "100%",
          p: "$6",
          pl: "$14",
          bg: inSidePane ? "$surface_default" : "$surface_dim"
        },
        value,
        onKeyDown: (event) => {
          event.stopPropagation();
        },
        onChange: (event) => {
          setValue(event.currentTarget.value);
        },
        autoComplete: "off",
        "aria-autocomplete": "none"
      }
    )
  );
};

// src/Prebuilt/components/Footer/PollsToggle.tsx
import React86, { useEffect as useEffect27 } from "react";
import { QuizActiveIcon as QuizActiveIcon2, QuizIcon as QuizIcon2 } from "@100mslive/react-icons";
var PollsToggle = () => {
  const isPollsOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.POLLS);
  const togglePollView = usePollViewToggle();
  const { unreadPollQuiz, setUnreadPollQuiz } = useUnreadPollQuizPresent();
  useEffect27(() => {
    if (unreadPollQuiz && isPollsOpen) {
      setUnreadPollQuiz(false);
    }
  }, [isPollsOpen, unreadPollQuiz, setUnreadPollQuiz]);
  return /* @__PURE__ */ React86.createElement(
    Tooltip,
    {
      key: "polls",
      title: `${isPollsOpen ? "Close" : "Open"} polls and quizzes`
    },
    /* @__PURE__ */ React86.createElement(
      IconButton_default,
      {
        onClick: () => {
          togglePollView();
          setUnreadPollQuiz(false);
        },
        css: { bg: isPollsOpen ? "$surface_brighter" : "" },
        "data-testid": "polls_btn"
      },
      unreadPollQuiz ? /* @__PURE__ */ React86.createElement(QuizActiveIcon2, null) : /* @__PURE__ */ React86.createElement(QuizIcon2, null)
    )
  );
};

// src/Prebuilt/components/Footer/WhiteboardToggle.tsx
import React87 from "react";
import {
  selectPeerScreenSharing,
  useHMSStore as useHMSStore47,
  useWhiteboard
} from "@100mslive/react-sdk";
import { PencilDrawIcon } from "@100mslive/react-icons";
var WhiteboardToggle = () => {
  const { toggle, open, isOwner } = useWhiteboard();
  const peerSharing = useHMSStore47(selectPeerScreenSharing);
  const disabled = !!peerSharing || open && !isOwner;
  if (!toggle) {
    return null;
  }
  return /* @__PURE__ */ React87.createElement(
    Tooltip,
    {
      key: "whiteboard",
      title: peerSharing ? "Cannot open whiteboard when viewing a shared screen" : `${open ? "Close" : "Open"} Whiteboard`
    },
    /* @__PURE__ */ React87.createElement(
      IconButton_default,
      {
        onClick: () => __async(void 0, null, function* () {
          if (disabled) {
            return;
          }
          try {
            yield toggle();
          } catch (error) {
            ToastManager.addToast({
              title: error.message,
              variant: "error"
            });
          }
        }),
        active: !open,
        disabled,
        "data-testid": "whiteboard_btn"
      },
      /* @__PURE__ */ React87.createElement(PencilDrawIcon, null)
    )
  );
};

// src/Prebuilt/components/Footer/Footer.tsx
var Footer2 = ({
  screenType,
  elements
}) => {
  var _a7, _b7;
  const isMobile = useMedia15(config.media.md);
  const isOverlayChat = !!((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay);
  const openByDefault = ((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.initial_state) === Chat_ChatState.CHAT_STATE_OPEN;
  const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
  const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
  const { showPolls } = useShowPolls();
  const role = useHMSStore48(selectLocalPeerRole2);
  useEffect28(() => {
    if (!isChatOpen && openByDefault) {
      toggleChat();
    }
  }, [toggleChat, openByDefault]);
  return /* @__PURE__ */ React88.createElement(
    Footer.Root,
    {
      css: {
        flexWrap: "nowrap",
        "@md": {
          justifyContent: "center",
          gap: "$10",
          position: "relative",
          // To prevent it from showing over the sidepane if chat type is not overlay
          zIndex: isOverlayChat && isChatOpen ? 20 : 1
        }
      }
    },
    /* @__PURE__ */ React88.createElement(
      Footer.Left,
      {
        css: {
          "@md": {
            w: "unset",
            p: "0",
            gap: "$10"
          }
        }
      },
      isMobile ? /* @__PURE__ */ React88.createElement(LeaveRoom, { screenType }) : null,
      /* @__PURE__ */ React88.createElement(AudioVideoToggle, null),
      !isMobile && elements.virtual_background ? /* @__PURE__ */ React88.createElement(VBToggle, null) : null,
      (role == null ? void 0 : role.name) === "interpreter-en" || (role == null ? void 0 : role.name) === "interpreter-fr" ? /* @__PURE__ */ React88.createElement(React88.Fragment, null, /* @__PURE__ */ React88.createElement(Int2En_default, null), /* @__PURE__ */ React88.createElement(Int2Fr_default, null)) : null
    ),
    /* @__PURE__ */ React88.createElement(
      Footer.Center,
      {
        css: {
          "@md": {
            w: "unset",
            gap: "$10"
          }
        }
      },
      isMobile ? /* @__PURE__ */ React88.createElement(React88.Fragment, null, /* @__PURE__ */ React88.createElement(ScreenshareToggle, null), /* @__PURE__ */ React88.createElement(RaiseHand, null), (elements == null ? void 0 : elements.chat) && /* @__PURE__ */ React88.createElement(ChatToggle, null), /* @__PURE__ */ React88.createElement(MoreSettings, { elements, screenType })) : /* @__PURE__ */ React88.createElement(React88.Fragment, null, /* @__PURE__ */ React88.createElement(ScreenshareToggle, null), /* @__PURE__ */ React88.createElement(RaiseHand, null), screenType !== "hls_live_streaming" && /* @__PURE__ */ React88.createElement(CaptionIcon, null), (elements == null ? void 0 : elements.emoji_reactions) && /* @__PURE__ */ React88.createElement(EmojiReaction, null), /* @__PURE__ */ React88.createElement(LeaveRoom, { screenType }))
    ),
    /* @__PURE__ */ React88.createElement(Footer.Right, null, /* @__PURE__ */ React88.createElement(WhiteboardToggle, null), showPolls && /* @__PURE__ */ React88.createElement(PollsToggle, null), !isMobile && (elements == null ? void 0 : elements.chat) && /* @__PURE__ */ React88.createElement(ChatToggle, null), (elements == null ? void 0 : elements.participant_list) && /* @__PURE__ */ React88.createElement(ParticipantCount, null), /* @__PURE__ */ React88.createElement(MoreSettings, { elements, screenType }))
  );
};

// src/Prebuilt/components/Notifications/HLSFailureModal.tsx
import React89, { useCallback as useCallback25, useState as useState37 } from "react";
import {
  selectHLSState as selectHLSState5,
  useHMSActions as useHMSActions35,
  useHMSStore as useHMSStore49,
  useRecordingStreaming as useRecordingStreaming8
} from "@100mslive/react-sdk";
function HLSFailureModal() {
  const hlsError = useHMSStore49(selectHLSState5).error || false;
  const [openModal, setOpenModal] = useState37(!!hlsError);
  const hmsActions = useHMSActions35();
  const { isRTMPRunning } = useRecordingStreaming8();
  const [isHLSStarted, setHLSStarted] = useSetAppDataByKey(APP_DATA.hlsStarted);
  const startHLS = useCallback25(() => __async(this, null, function* () {
    try {
      if (isHLSStarted || isRTMPRunning) {
        return;
      }
      setHLSStarted(true);
      yield hmsActions.startHLSStreaming({});
    } catch (error) {
      console.error(error);
      setHLSStarted(false);
    }
  }), [hmsActions, isHLSStarted, setHLSStarted, isRTMPRunning]);
  return hlsError ? /* @__PURE__ */ React89.createElement(
    Dialog.Root,
    {
      open: openModal,
      onOpenChange: (value) => {
        if (!value) {
          setOpenModal(false);
        }
      }
    },
    /* @__PURE__ */ React89.createElement(Dialog.Portal, null, /* @__PURE__ */ React89.createElement(Dialog.Overlay, null), /* @__PURE__ */ React89.createElement(Dialog.Content, { css: { w: "min(360px, 90%)" } }, /* @__PURE__ */ React89.createElement(
      Dialog.Title,
      {
        css: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid $border_default",
          mt: "$4"
        }
      },
      /* @__PURE__ */ React89.createElement(Text, { variant: "h6", css: { fontWeight: "$semiBold" } }, "Failed to Go Live")
    ), /* @__PURE__ */ React89.createElement(Text, { variant: "sm", css: { mb: "$10", color: "$on_surface_medium" } }, "Something went wrong and your live broadcast failed. Please try again."), /* @__PURE__ */ React89.createElement(Flex, { align: "center", justify: "between", css: { w: "100%", gap: "$8" } }, /* @__PURE__ */ React89.createElement(
      Button,
      {
        outlined: true,
        variant: "standard",
        css: { w: "100%" },
        onClick: () => setOpenModal(false)
      },
      "Dismiss"
    ), /* @__PURE__ */ React89.createElement(Button, { css: { w: "100%" }, onClick: startHLS }, "Go Live"))))
  ) : null;
}

// src/Prebuilt/components/RoleChangeRequest/RoleChangeRequestModal.tsx
import React140, { useEffect as useEffect44 } from "react";
import {
  selectIsInPreview,
  selectLocalPeerName as selectLocalPeerName4,
  selectLocalPeerRoleName as selectLocalPeerRoleName4,
  selectRoleChangeRequest,
  useCustomEvent as useCustomEvent3,
  useHMSActions as useHMSActions48,
  useHMSStore as useHMSStore75
} from "@100mslive/react-sdk";

// src/Prebuilt/components/Preview/PreviewJoin.tsx
import React138, {
  Fragment as Fragment12,
  useCallback as useCallback33,
  useEffect as useEffect43,
  useMemo as useMemo15,
  useState as useState57
} from "react";
import { useMeasure as useMeasure4, useMedia as useMedia27 } from "react-use";
import {
  HMSRoomState as HMSRoomState6,
  selectAppData as selectAppData10,
  selectIsLocalVideoEnabled as selectIsLocalVideoEnabled7,
  selectIsVBEnabled as selectIsVBEnabled2,
  selectLocalPeer as selectLocalPeer9,
  selectRoomState as selectRoomState6,
  selectVideoTrackByID as selectVideoTrackByID5,
  useAVToggle as useAVToggle4,
  useAwayNotifications as useAwayNotifications2,
  useHMSStore as useHMSStore74,
  useParticipants as useParticipants2,
  usePreviewJoin,
  useRecordingStreaming as useRecordingStreaming11
} from "@100mslive/react-sdk";
import { MicOffIcon as MicOffIcon7, SettingsIcon as SettingsIcon6 } from "@100mslive/react-icons";

// src/Prebuilt/layouts/SidePane.tsx
import React134, { useEffect as useEffect42 } from "react";
import { useMedia as useMedia25 } from "react-use";
import { match as match12 } from "ts-pattern";
import {
  selectAppData as selectAppData9,
  selectVideoTrackByPeerID as selectVideoTrackByPeerID4,
  useHMSStore as useHMSStore73
} from "@100mslive/react-sdk";

// src/Prebuilt/components/Polls/Polls.tsx
import React111 from "react";

// src/Prebuilt/components/Polls/CreatePollQuiz/PollsQuizMenu.tsx
import React92, { useEffect as useEffect29, useMemo as useMemo9, useRef as useRef19, useState as useState38 } from "react";
import {
  selectLocalPeerRoleName as selectLocalPeerRoleName2,
  selectPermissions as selectPermissions16,
  selectPolls as selectPolls2,
  useHMSActions as useHMSActions36,
  useHMSStore as useHMSStore51
} from "@100mslive/react-sdk";
import { QuestionIcon, StatsIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/Streaming/Common.jsx
import React90 from "react";
import { selectPermissions as selectPermissions15, useHMSStore as useHMSStore50 } from "@100mslive/react-sdk";
import {
  ChevronLeftIcon as ChevronLeftIcon3,
  ChevronRightIcon as ChevronRightIcon2,
  CrossIcon as CrossIcon16,
  RecordIcon as RecordIcon3
} from "@100mslive/react-icons";
var ContentHeader = ({ onBack, onClose, title = "", content }) => {
  return /* @__PURE__ */ React90.createElement(
    Flex,
    {
      css: {
        w: "100%",
        py: "$8",
        px: "$10",
        cursor: "pointer",
        borderBottom: "1px solid $border_bright",
        mb: "$8"
      }
    },
    onBack ? /* @__PURE__ */ React90.createElement(
      Flex,
      {
        align: "center",
        css: {
          mr: "$8",
          color: "$on_surface_high"
        },
        onClick: onBack,
        "data-testid": "go_back"
      },
      /* @__PURE__ */ React90.createElement(ChevronLeftIcon3, null)
    ) : null,
    /* @__PURE__ */ React90.createElement(Box, { css: { flex: "1 1 0", display: "flex", alignItems: "center" } }, title ? /* @__PURE__ */ React90.createElement(
      Text,
      {
        variant: "tiny",
        css: {
          textTransform: "uppercase",
          fontWeight: "$semiBold",
          color: "$on_surface_medium"
        }
      },
      title
    ) : null, /* @__PURE__ */ React90.createElement(Text, { variant: "h6" }, content)),
    onClose ? /* @__PURE__ */ React90.createElement(
      IconButton,
      {
        onClick: onClose,
        css: { alignSelf: "flex-start" },
        "data-testid": "close_stream_section"
      },
      /* @__PURE__ */ React90.createElement(CrossIcon16, null)
    ) : null
  );
};
var Container3 = ({ children, rounded = false }) => {
  return /* @__PURE__ */ React90.createElement(
    Box,
    {
      css: {
        size: "100%",
        zIndex: 2,
        position: "absolute",
        top: 0,
        left: 0,
        bg: "$surface_dim",
        transform: "translateX(10%)",
        animation: `${slideLeftAndFade("10%")} 100ms ease-out forwards`,
        display: "flex",
        flexDirection: "column",
        borderRadius: rounded ? "$2" : "0"
      }
    },
    children
  );
};
var ErrorText = ({ error }) => {
  if (!error) {
    return null;
  }
  return /* @__PURE__ */ React90.createElement(Text, { variant: "sm", css: { my: "$4", color: "$alert_error_default" } }, error);
};

// src/Prebuilt/components/Polls/common/StatusIndicator.tsx
import React91 from "react";
var statusMap = {
  created: "DRAFT" /* DRAFT */,
  started: "LIVE" /* LIVE */,
  stopped: "ENDED" /* ENDED */
};
var StatusIndicator = ({ status }) => {
  if (!status) return null;
  return /* @__PURE__ */ React91.createElement(Flex, { align: "center" }, /* @__PURE__ */ React91.createElement(
    Flex,
    {
      css: {
        backgroundColor: statusMap[status] === "LIVE" /* LIVE */ ? "$alert_error_default" : "$secondary_default",
        p: "$2 $4",
        borderRadius: "$0"
      }
    },
    /* @__PURE__ */ React91.createElement(
      Text,
      {
        variant: "caption",
        css: {
          fontWeight: "$semiBold",
          color: "$on_primary_high"
        }
      },
      statusMap[status]
    )
  ));
};

// src/Prebuilt/components/Polls/CreatePollQuiz/PollsQuizMenu.tsx
var PollsQuizMenu = () => {
  const togglePollView = usePollViewToggle();
  const permissions = useHMSStore51(selectPermissions16);
  return /* @__PURE__ */ React92.createElement(Container3, { rounded: true }, /* @__PURE__ */ React92.createElement(ContentHeader, { content: "Polls and Quizzes", onClose: togglePollView }), /* @__PURE__ */ React92.createElement(
    Flex,
    {
      direction: "column",
      css: { px: "$10", pb: "$10", overflowY: "auto" }
    },
    (permissions == null ? void 0 : permissions.pollWrite) && /* @__PURE__ */ React92.createElement(AddMenu, null),
    /* @__PURE__ */ React92.createElement(PrevMenu, null)
  ));
};
function InteractionSelectionCard({
  title,
  icon,
  active,
  onClick
}) {
  const activeBorderStyle = active ? "$space$px solid $primary_default" : "$space$px solid $border_bright";
  return /* @__PURE__ */ React92.createElement(
    Flex,
    {
      onClick,
      css: {
        border: activeBorderStyle,
        p: "$4",
        r: "$2",
        w: "100%",
        cursor: "pointer"
      },
      align: "center"
    },
    /* @__PURE__ */ React92.createElement(
      Flex,
      {
        css: {
          border: activeBorderStyle,
          p: "$4",
          bg: "$surface_bright",
          c: "$on_surface_high",
          r: "$0"
        }
      },
      icon
    ),
    /* @__PURE__ */ React92.createElement(Text, { variant: "sub1", css: { ml: "$md" } }, title)
  );
}
var AddMenu = () => {
  const actions = useHMSActions36();
  const [title, setTitle] = useState38("");
  const localPeerRoleName = useHMSStore51(selectLocalPeerRoleName2);
  const [hideVoteCount, setHideVoteCount] = useState38(false);
  const [error, setError] = useState38();
  const [titleError, setTitleError] = useState38("");
  const { setPollState } = usePollViewState();
  const [interactionType, setInteractionType] = useState38("Poll" /* POLL */);
  const inputRef = useRef19(null);
  useEffect29(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [interactionType]);
  const handleCreate = (id) => {
    setPollState({
      [POLL_STATE.pollInView]: id,
      [POLL_STATE.view]: POLL_VIEWS.CREATE_QUESTIONS
    });
  };
  const validateTitle = useMemo9(() => {
    if (!isValidTextInput(title)) {
      if (title) {
        setTitleError("The title should have between 2-100 characters");
      }
      return true;
    } else {
      setTitleError("");
      return false;
    }
  }, [title]);
  return /* @__PURE__ */ React92.createElement(React92.Fragment, null, /* @__PURE__ */ React92.createElement(Text, { variant: "caption", css: { c: "$on_surface_medium", mb: "$md" } }, "Select the type you want to continue with"), /* @__PURE__ */ React92.createElement(Flex, { css: { w: "100%", gap: "$10", mb: "$md" } }, /* @__PURE__ */ React92.createElement(
    InteractionSelectionCard,
    {
      title: "Poll" /* POLL */,
      icon: /* @__PURE__ */ React92.createElement(StatsIcon, { width: 32, height: 32 }),
      onClick: () => setInteractionType("Poll" /* POLL */),
      active: interactionType === "Poll" /* POLL */
    }
  ), /* @__PURE__ */ React92.createElement(
    InteractionSelectionCard,
    {
      title: "Quiz" /* QUIZ */,
      icon: /* @__PURE__ */ React92.createElement(QuestionIcon, { width: 32, height: 32 }),
      onClick: () => setInteractionType("Quiz" /* QUIZ */),
      active: interactionType === "Quiz" /* QUIZ */
    }
  )), /* @__PURE__ */ React92.createElement(Flex, { direction: "column", css: { mb: "$10" } }, /* @__PURE__ */ React92.createElement(
    Text,
    {
      variant: "body2",
      css: { mb: "$4" }
    },
    `Name this ${interactionType.toLowerCase()}`
  ), /* @__PURE__ */ React92.createElement(
    Input,
    {
      ref: inputRef,
      type: "text",
      placeholder: "Enter a name to continue",
      value: title,
      onChange: (event) => setTitle(event.target.value.trimStart()),
      css: {
        backgroundColor: "$surface_bright",
        border: "1px solid $border_default"
      }
    }
  ), /* @__PURE__ */ React92.createElement(Flex, { align: "center", css: { mt: "$10" } }, /* @__PURE__ */ React92.createElement(
    Switch,
    {
      onCheckedChange: (value) => setHideVoteCount(value),
      css: { mr: "$6" }
    }
  ), /* @__PURE__ */ React92.createElement(Text, { variant: "body2", css: { c: "$on_surface_medium" } }, "Hide Vote Count")), /* @__PURE__ */ React92.createElement(
    Button,
    {
      variant: "primary",
      disabled: validateTitle,
      css: { mt: "$10" },
      onClick: () => __async(void 0, null, function* () {
        const id = Date.now().toString();
        yield actions.interactivityCenter.createPoll({
          id,
          title,
          anonymous: false,
          rolesThatCanViewResponses: hideVoteCount && localPeerRoleName ? [localPeerRoleName] : void 0,
          // @ts-ignore
          type: interactionType.toLowerCase()
        }).then(() => handleCreate(id)).catch((err) => setError(err.message));
      })
    },
    "Create ",
    interactionType
  ), /* @__PURE__ */ React92.createElement(ErrorText, { error: error || titleError })));
};
var PrevMenu = () => {
  const hmsActions = useHMSActions36();
  const polls = useHMSStore51(selectPolls2);
  const sortedPolls = useMemo9(
    () => {
      var _a7;
      return (_a7 = polls == null ? void 0 : polls.sort(
        (a, b) => {
          var _a8, _b7, _c, _d;
          return (((_b7 = (_a8 = b == null ? void 0 : b.createdAt) == null ? void 0 : _a8.getTime) == null ? void 0 : _b7.call(_a8)) || 0) - (((_d = (_c = a == null ? void 0 : a.createdAt) == null ? void 0 : _c.getTime) == null ? void 0 : _d.call(_c)) || 0);
        }
      )) == null ? void 0 : _a7.sort(
        (a, b) => ((b == null ? void 0 : b.state) === "started" ? 1 : 0) - ((a == null ? void 0 : a.state) === "started" ? 1 : 0)
      );
    },
    [polls]
  );
  const permissions = useHMSStore51(selectPermissions16);
  useEffect29(() => {
    const updatePolls = () => __async(void 0, null, function* () {
      yield hmsActions.interactivityCenter.getPolls();
    });
    updatePolls();
  }, [hmsActions.interactivityCenter]);
  return (polls == null ? void 0 : polls.length) ? /* @__PURE__ */ React92.createElement(
    Flex,
    {
      direction: "column",
      css: __spreadValues({
        width: "100%"
      }, (permissions == null ? void 0 : permissions.pollWrite) ? { borderTop: "$space$px solid $border_bright", paddingTop: "$10" } : {})
    },
    /* @__PURE__ */ React92.createElement(Text, { variant: "h6", css: { c: "$on_surface_high" } }, "Previous Polls and Quizzes"),
    /* @__PURE__ */ React92.createElement(Flex, { direction: "column", css: { gap: "$10", mt: "$8" } }, sortedPolls == null ? void 0 : sortedPolls.map((poll) => /* @__PURE__ */ React92.createElement(
      InteractionCard,
      {
        key: poll.id,
        id: poll.id,
        title: poll.title,
        status: poll.state
      }
    )))
  ) : null;
};
var InteractionCard = ({
  id,
  title,
  status
}) => {
  const { setPollState } = usePollViewState();
  return /* @__PURE__ */ React92.createElement(
    Flex,
    {
      direction: "column",
      css: { backgroundColor: "$surface_bright", borderRadius: "$1", p: "$8" }
    },
    /* @__PURE__ */ React92.createElement(Flex, { css: { w: "100%", justifyContent: "space-between", mb: "$sm" } }, /* @__PURE__ */ React92.createElement(
      Text,
      {
        variant: "sub1",
        css: { c: "$on_surface_high", fontWeight: "$semiBold" }
      },
      title
    ), /* @__PURE__ */ React92.createElement(StatusIndicator, { status })),
    /* @__PURE__ */ React92.createElement(Flex, { css: { w: "100%", gap: "$4" }, justify: "end" }, /* @__PURE__ */ React92.createElement(
      Button,
      {
        variant: "primary",
        onClick: () => setPollState({
          [POLL_STATE.pollInView]: id,
          [POLL_STATE.view]: status === "created" ? POLL_VIEWS.CREATE_QUESTIONS : POLL_VIEWS.VOTE
        })
      },
      "View"
    ))
  );
};

// src/Prebuilt/components/Polls/CreateQuestions/CreateQuestions.jsx
import React102, { useMemo as useMemo11, useState as useState40 } from "react";
import { v4 as uuid2 } from "uuid";
import {
  selectPollByID,
  useHMSActions as useHMSActions37,
  useHMSStore as useHMSStore52,
  useRecordingStreaming as useRecordingStreaming9
} from "@100mslive/react-sdk";
import { AddCircleIcon as AddCircleIcon2 } from "@100mslive/react-icons";

// src/Prebuilt/components/Polls/CreateQuestions/QuestionForm.tsx
import React100, { useCallback as useCallback26, useRef as useRef20, useState as useState39 } from "react";
import { AddCircleIcon, TrashIcon as TrashIcon3 } from "@100mslive/react-icons";

// src/Prebuilt/components/Polls/CreateQuestions/DeleteQuestionModal.tsx
import React93 from "react";
import { AlertTriangleIcon as AlertTriangleIcon7, CrossIcon as CrossIcon17 } from "@100mslive/react-icons";
var DeleteQuestionModal = ({
  open,
  setOpen,
  removeQuestion
}) => {
  return /* @__PURE__ */ React93.createElement(Dialog.Root, { open }, /* @__PURE__ */ React93.createElement(Dialog.Overlay, null), /* @__PURE__ */ React93.createElement(Dialog.Portal, null, /* @__PURE__ */ React93.createElement(Dialog.Content, { css: { p: "$10" } }, /* @__PURE__ */ React93.createElement(Box, null, /* @__PURE__ */ React93.createElement(
    Flex,
    {
      css: {
        color: "$alert_error_default",
        display: "flex",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ React93.createElement(AlertTriangleIcon7, { style: { marginRight: "0.5rem" } }),
    /* @__PURE__ */ React93.createElement(
      Text,
      {
        variant: "lg",
        css: { color: "inherit", fontWeight: "$semiBold" }
      },
      "Delete Question?"
    ),
    /* @__PURE__ */ React93.createElement(
      Box,
      {
        css: {
          ml: "auto",
          color: "$on_surface_medium",
          "&:hover": { color: "$on_surface_high", cursor: "pointer" }
        },
        onClick: () => setOpen(false)
      },
      /* @__PURE__ */ React93.createElement(CrossIcon17, null)
    )
  ), /* @__PURE__ */ React93.createElement(
    Text,
    {
      variant: "sm",
      css: { color: "$on_surface_medium", mb: "$8", mt: "$4" }
    },
    "The question will be deleted. You can't undo this action."
  ), /* @__PURE__ */ React93.createElement(Flex, { css: { w: "100%", mt: "$12", gap: "$md" } }, /* @__PURE__ */ React93.createElement(
    Button,
    {
      variant: "standard",
      outlined: true,
      onClick: () => setOpen(false),
      css: { w: "100%", fontSize: "$md", fontWeight: "$semiBold" }
    },
    "Cancel"
  ), /* @__PURE__ */ React93.createElement(
    Button,
    {
      css: { w: "100%", fontSize: "$md", fontWeight: "$semiBold" },
      variant: "danger",
      onClick: () => {
        removeQuestion();
        setOpen(false);
      }
    },
    "Delete"
  ))))));
};

// src/Prebuilt/components/Polls/common/Line.tsx
import React94 from "react";
var Line = () => /* @__PURE__ */ React94.createElement(
  Flex,
  {
    css: {
      w: "100%",
      borderBottom: "1px solid $border_bright",
      h: "1px",
      my: "$8"
    }
  }
);

// src/Prebuilt/components/Polls/common/MultipleChoiceOptions.jsx
import React98 from "react";
import { CheckCircleIcon, CheckIcon as CheckIcon5 } from "@100mslive/react-icons";

// src/Prebuilt/components/Polls/common/OptionInputWithDelete.tsx
import React95 from "react";
import { TrashIcon as TrashIcon2 } from "@100mslive/react-icons";
var OptionInputWithDelete = ({
  index,
  option,
  handleOptionTextChange,
  removeOption
}) => {
  return /* @__PURE__ */ React95.createElement(React95.Fragment, null, /* @__PURE__ */ React95.createElement(
    Input,
    {
      placeholder: `Option ${index + 1}`,
      css: {
        w: "100%",
        backgroundColor: "$surface_bright",
        border: "1px solid $border_bright"
      },
      value: (option == null ? void 0 : option.text) || "",
      key: index,
      onChange: (event) => handleOptionTextChange(index, event.target.value.trimStart()),
      maxLength: 250
    }
  ), /* @__PURE__ */ React95.createElement(
    IconButton_default,
    {
      onClick: () => removeOption(index),
      css: { bg: "transparent", border: "none" }
    },
    /* @__PURE__ */ React95.createElement(TrashIcon2, null)
  ));
};

// src/Prebuilt/components/Polls/common/VoteCount.tsx
import React96 from "react";
var VoteCount = ({ voteCount }) => {
  return /* @__PURE__ */ React96.createElement(Flex, { css: { alignItems: "center" } }, voteCount ? /* @__PURE__ */ React96.createElement(Text, { variant: "sm", css: { color: "$on_surface_medium" } }, voteCount, "\xA0", voteCount === 1 ? "vote" : "votes") : null);
};

// src/Prebuilt/components/Polls/common/VoteProgress.tsx
import React97 from "react";
var VoteProgress = ({
  option,
  totalResponses
}) => {
  const showProgress = typeof option.voteCount === "number" && typeof totalResponses === "number" && totalResponses > 0;
  const progressValue = 100 * (option.voteCount || 0) / totalResponses;
  return showProgress ? /* @__PURE__ */ React97.createElement(Progress.Root, { value: progressValue, css: { mt: "$4" } }, /* @__PURE__ */ React97.createElement(
    Progress.Content,
    {
      style: {
        transform: `translateX(-${100 - progressValue}%)`
      }
    }
  )) : null;
};

// src/Prebuilt/components/Polls/common/MultipleChoiceOptions.jsx
var MultipleChoiceOptions = ({
  questionIndex,
  options,
  canRespond,
  totalResponses,
  selectedOptions,
  setSelectedOptions,
  showVoteCount,
  isQuiz,
  correctOptionIndexes,
  localPeerResponse,
  isStopped
}) => {
  const handleCheckedChange = (checked, index) => {
    const newSelected = new Set(selectedOptions);
    if (checked) {
      newSelected.add(index);
    } else {
      newSelected.delete(index);
    }
    setSelectedOptions(newSelected);
  };
  return /* @__PURE__ */ React98.createElement(Flex, { direction: "column", css: { gap: "$md", w: "100%", mb: "$md" } }, options.map((option) => {
    var _a7;
    return /* @__PURE__ */ React98.createElement(
      Flex,
      {
        align: "center",
        key: `${questionIndex}-${option.index}`,
        css: { w: "100%", gap: "$4" }
      },
      !isStopped || !isQuiz ? /* @__PURE__ */ React98.createElement(
        Checkbox.Root,
        {
          id: `${questionIndex}-${option.index}`,
          disabled: !canRespond,
          checked: (_a7 = localPeerResponse == null ? void 0 : localPeerResponse.options) == null ? void 0 : _a7.includes(option.index),
          onCheckedChange: (checked) => handleCheckedChange(checked, option.index),
          css: {
            cursor: canRespond ? "pointer" : "not-allowed",
            flexShrink: 0
          }
        },
        /* @__PURE__ */ React98.createElement(Checkbox.Indicator, null, /* @__PURE__ */ React98.createElement(CheckIcon5, { width: 16, height: 16 }))
      ) : null,
      isStopped && (correctOptionIndexes == null ? void 0 : correctOptionIndexes.includes(option.index)) ? /* @__PURE__ */ React98.createElement(Flex, { align: "center", css: { color: "$on_surface_high" } }, /* @__PURE__ */ React98.createElement(CheckCircleIcon, { height: 20, width: 20 })) : null,
      /* @__PURE__ */ React98.createElement(Flex, { direction: "column", css: { flexGrow: "1" } }, /* @__PURE__ */ React98.createElement(Flex, { css: { w: "100%" } }, /* @__PURE__ */ React98.createElement(Text, { css: { display: "flex", flexGrow: "1" } }, /* @__PURE__ */ React98.createElement(Label3, { htmlFor: `${questionIndex}-${option.index}` }, option.text)), showVoteCount && /* @__PURE__ */ React98.createElement(VoteCount, { voteCount: option.voteCount })), showVoteCount && /* @__PURE__ */ React98.createElement(VoteProgress, { option, totalResponses })),
      isStopped && isQuiz && (localPeerResponse == null ? void 0 : localPeerResponse.options.includes(option.index)) ? /* @__PURE__ */ React98.createElement(
        Text,
        {
          variant: "sm",
          css: { color: "$on_surface_medium", maxWidth: "max-content" }
        },
        "Your Answer"
      ) : null
    );
  }));
};
var MultipleChoiceOptionInputs = ({
  isQuiz,
  options,
  selectAnswer,
  handleOptionTextChange,
  removeOption
}) => {
  return /* @__PURE__ */ React98.createElement(Flex, { direction: "column", css: { gap: "$md", w: "100%", mb: "$md" } }, options.map((option, index) => {
    return /* @__PURE__ */ React98.createElement(Flex, { align: "center", key: index, css: { w: "100%", gap: "$4" } }, isQuiz && /* @__PURE__ */ React98.createElement(
      Checkbox.Root,
      {
        onCheckedChange: (checked) => selectAnswer(checked, index),
        checked: option.isCorrectAnswer,
        css: {
          cursor: "pointer",
          width: "$9"
        }
      },
      /* @__PURE__ */ React98.createElement(Checkbox.Indicator, null, /* @__PURE__ */ React98.createElement(CheckIcon5, { width: 16, height: 16 }))
    ), /* @__PURE__ */ React98.createElement(
      OptionInputWithDelete,
      {
        index,
        option,
        handleOptionTextChange,
        removeOption
      }
    ));
  }));
};

// src/Prebuilt/components/Polls/common/SingleChoiceOptions.jsx
import React99 from "react";
import { CheckCircleIcon as CheckCircleIcon2 } from "@100mslive/react-icons";
var SingleChoiceOptions = ({
  questionIndex,
  options,
  canRespond,
  setAnswer,
  totalResponses,
  showVoteCount,
  correctOptionIndex,
  isStopped,
  isQuiz,
  localPeerResponse
}) => {
  return /* @__PURE__ */ React99.createElement(
    RadioGroup.Root,
    {
      value: localPeerResponse == null ? void 0 : localPeerResponse.option,
      onValueChange: (value) => setAnswer(value)
    },
    /* @__PURE__ */ React99.createElement(Flex, { direction: "column", css: { gap: "$md", w: "100%", mb: "$md" } }, options.map((option) => {
      return /* @__PURE__ */ React99.createElement(
        Flex,
        {
          align: "center",
          key: `${questionIndex}-${option.index}`,
          css: { w: "100%", gap: "$4" }
        },
        !isStopped || !isQuiz ? /* @__PURE__ */ React99.createElement(
          RadioGroup.Item,
          {
            css: {
              background: "none",
              h: "$9",
              w: "$9",
              border: "2px solid",
              borderColor: "$on_surface_high",
              display: "flex",
              flexShrink: 0,
              pt: "$1",
              justifyContent: "center",
              alignItems: "center",
              cursor: canRespond ? "pointer" : "not-allowed",
              '&[data-state="checked"]': {
                borderColor: "$primary_bright",
                borderWidth: "2px"
              }
            },
            disabled: !canRespond,
            value: option.index,
            id: `${questionIndex}-${option.index}`
          },
          /* @__PURE__ */ React99.createElement(
            RadioGroup.Indicator,
            {
              css: {
                h: "80%",
                w: "80%",
                background: "$primary_bright",
                borderRadius: "$round"
              }
            }
          )
        ) : null,
        isStopped && correctOptionIndex === option.index && isQuiz ? /* @__PURE__ */ React99.createElement(Flex, { css: { color: "$on_surface_high" } }, /* @__PURE__ */ React99.createElement(CheckCircleIcon2, { height: 20, width: 20 })) : null,
        /* @__PURE__ */ React99.createElement(Flex, { direction: "column", css: { flexGrow: "1" } }, /* @__PURE__ */ React99.createElement(Flex, { css: { w: "100%" } }, /* @__PURE__ */ React99.createElement(
          Text,
          {
            css: {
              display: "flex",
              flexGrow: "1",
              color: "$on_surface_high"
            }
          },
          /* @__PURE__ */ React99.createElement(
            Label3,
            {
              style: { color: "inherit" },
              htmlFor: `${questionIndex}-${option.index}`
            },
            option.text
          )
        ), showVoteCount && /* @__PURE__ */ React99.createElement(VoteCount, { voteCount: option.voteCount })), showVoteCount && /* @__PURE__ */ React99.createElement(
          VoteProgress,
          {
            option,
            totalResponses
          }
        )),
        isStopped && isQuiz && (localPeerResponse == null ? void 0 : localPeerResponse.option) === option.index ? /* @__PURE__ */ React99.createElement(
          Text,
          {
            variant: "sm",
            css: { color: "$on_surface_medium", maxWidth: "max-content" }
          },
          "Your Answer"
        ) : null
      );
    }))
  );
};
var SingleChoiceOptionInputs = ({
  isQuiz,
  options,
  selectAnswer,
  handleOptionTextChange,
  removeOption
}) => {
  const correctOptionIndex = options.findIndex(
    (option) => option.isCorrectAnswer
  );
  return /* @__PURE__ */ React99.createElement(RadioGroup.Root, { value: correctOptionIndex, onValueChange: selectAnswer }, /* @__PURE__ */ React99.createElement(Flex, { direction: "column", css: { gap: "$md", w: "100%", mb: "$md" } }, options.map((option, index) => {
    return /* @__PURE__ */ React99.createElement(
      Flex,
      {
        align: "center",
        key: `option-${index}`,
        css: { w: "100%", gap: "$4" }
      },
      isQuiz && /* @__PURE__ */ React99.createElement(
        RadioGroup.Item,
        {
          css: {
            background: "none",
            w: "$9",
            border: "2px solid",
            borderColor: "$on_surface_high",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            '&[data-state="checked"]': {
              borderColor: "$primary_bright",
              borderWidth: "2px"
            }
          },
          value: index
        },
        /* @__PURE__ */ React99.createElement(
          RadioGroup.Indicator,
          {
            css: {
              h: "80%",
              w: "80%",
              background: "$primary_bright",
              borderRadius: "$round"
            }
          }
        )
      ),
      /* @__PURE__ */ React99.createElement(
        OptionInputWithDelete,
        {
          index,
          option,
          handleOptionTextChange,
          removeOption
        }
      )
    );
  })));
};

// src/Prebuilt/components/Polls/CreateQuestions/QuestionForm.tsx
var QuestionForm = ({
  question,
  index,
  length,
  onSave,
  removeQuestion,
  isQuiz
}) => {
  var _a7;
  const ref = useRef20(null);
  const selectionBg = useDropdownSelection();
  const [openDelete, setOpenDelete] = useState39(false);
  const [open, setOpen] = useState39(false);
  const [type, setType] = useState39(
    question.type || "single-choice" /* SINGLE_CHOICE */
  );
  const [text, setText] = useState39(question.text);
  const [weight, setWeight] = useState39(isQuiz ? 10 : 1);
  const [options, setOptions] = useState39(
    (question == null ? void 0 : question.options) || [
      { text: "", isCorrectAnswer: false },
      { text: "", isCorrectAnswer: false }
    ]
  );
  const isValid = isValidQuestion({
    text,
    type,
    options,
    weight,
    isQuiz
  });
  const handleOptionTextChange = useCallback26(
    (index2, text2) => {
      setOptions((options2) => [
        ...options2.slice(0, index2),
        __spreadProps(__spreadValues({}, options2[index2]), { text: text2 }),
        ...options2.slice(index2 + 1)
      ]);
    },
    [setOptions]
  );
  const removeOption = useCallback26(
    (index2) => setOptions((options2) => {
      const newOptions = [...options2];
      newOptions.splice(index2, 1);
      return newOptions;
    }),
    [setOptions]
  );
  const selectSingleChoiceAnswer = useCallback26(
    (answerIndex) => {
      if (!isQuiz) {
        return;
      }
      setOptions(
        (options2) => options2.map((option, index2) => __spreadProps(__spreadValues({}, option), {
          isCorrectAnswer: index2 === answerIndex
        }))
      );
    },
    [setOptions, isQuiz]
  );
  const selectMultipleChoiceAnswer = useCallback26(
    (checked, index2) => {
      if (!isQuiz) {
        return;
      }
      setOptions((options2) => [
        ...options2.slice(0, index2),
        __spreadProps(__spreadValues({}, options2[index2]), { isCorrectAnswer: checked }),
        ...options2.slice(index2 + 1)
      ]);
    },
    [setOptions, isQuiz]
  );
  return /* @__PURE__ */ React100.createElement(React100.Fragment, null, /* @__PURE__ */ React100.createElement(
    Text,
    {
      variant: "overline",
      css: { c: "$on_surface_low", textTransform: "uppercase" }
    },
    "Question ",
    index + 1,
    " of ",
    length
  ), /* @__PURE__ */ React100.createElement(Text, { variant: "body2", css: { mt: "$4", mb: "$md" } }, "Question Type"), /* @__PURE__ */ React100.createElement(Dropdown.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React100.createElement(
    DialogDropdownTrigger,
    {
      ref,
      title: QUESTION_TYPE_TITLE[type],
      css: {
        backgroundColor: "$surface_bright",
        border: "1px solid $border_bright"
      },
      open
    }
  ), /* @__PURE__ */ React100.createElement(Dropdown.Portal, null, /* @__PURE__ */ React100.createElement(
    Dropdown.Content,
    {
      align: "start",
      sideOffset: 8,
      css: { w: (_a7 = ref.current) == null ? void 0 : _a7.clientWidth, zIndex: 1e3 }
    },
    Object.keys(QUESTION_TYPE_TITLE).map((value) => {
      return /* @__PURE__ */ React100.createElement(
        Dropdown.Item,
        {
          key: value,
          onSelect: () => setType(value),
          css: {
            px: "$9",
            bg: type === value ? selectionBg : void 0
          }
        },
        QUESTION_TYPE_TITLE[value]
      );
    })
  ))), /* @__PURE__ */ React100.createElement(
    TextArea,
    {
      maxLength: 1024,
      placeholder: "Ask a question",
      css: {
        mt: "$md",
        backgroundColor: "$surface_bright",
        border: "1px solid $border_bright",
        minHeight: "$14",
        resize: "vertical",
        maxHeight: "$32"
      },
      value: text,
      onChange: (event) => setText(event.target.value.trimStart())
    }
  ), /* @__PURE__ */ React100.createElement(
    Text,
    {
      variant: "xs",
      css: { color: "$on_surface_medium", textAlign: "end", mt: "$4" }
    },
    (text == null ? void 0 : text.length) || 0,
    "/1024"
  ), /* @__PURE__ */ React100.createElement(Line, null), type === "single-choice" /* SINGLE_CHOICE */ || type === "multiple-choice" /* MULTIPLE_CHOICE */ ? /* @__PURE__ */ React100.createElement(React100.Fragment, null, /* @__PURE__ */ React100.createElement(Text, { variant: "body2", css: { mb: "$6", c: "$on_surface_medium" } }, "Options"), isQuiz && /* @__PURE__ */ React100.createElement(Text, { variant: "xs", css: { c: "$on_surface_medium", mb: "$md" } }, type === "single-choice" /* SINGLE_CHOICE */ ? "Use the radio buttons to indicate the correct answer" : "Use the checkboxes to indicate the correct answer(s)"), type === "single-choice" /* SINGLE_CHOICE */ && /* @__PURE__ */ React100.createElement(
    SingleChoiceOptionInputs,
    {
      isQuiz,
      options,
      selectAnswer: selectSingleChoiceAnswer,
      handleOptionTextChange,
      removeOption
    }
  ), type === "multiple-choice" /* MULTIPLE_CHOICE */ && /* @__PURE__ */ React100.createElement(
    MultipleChoiceOptionInputs,
    {
      isQuiz,
      options,
      selectAnswer: selectMultipleChoiceAnswer,
      handleOptionTextChange,
      removeOption
    }
  ), (options == null ? void 0 : options.length) < 20 && /* @__PURE__ */ React100.createElement(
    Flex,
    {
      css: {
        c: "$on_surface_medium",
        cursor: "pointer",
        "&:hover": { c: "$on_surface_high" }
      },
      onClick: () => setOptions([...options, { text: "", isCorrectAnswer: false }])
    },
    /* @__PURE__ */ React100.createElement(AddCircleIcon, { style: { position: "relative", left: "-2px" } }),
    /* @__PURE__ */ React100.createElement(
      Text,
      {
        variant: "sm",
        css: {
          ml: "$4",
          c: "inherit"
        }
      },
      "Add an option"
    )
  ), /* @__PURE__ */ React100.createElement(Line, null), isQuiz ? /* @__PURE__ */ React100.createElement(React100.Fragment, null, /* @__PURE__ */ React100.createElement(
    Flex,
    {
      justify: "between",
      align: "center",
      css: { gap: "$6", w: "100%" }
    },
    /* @__PURE__ */ React100.createElement(Text, { variant: "sm", css: { color: "$on_surface_medium" } }, "Point Weightage"),
    /* @__PURE__ */ React100.createElement(
      Input,
      {
        type: "number",
        value: weight,
        min: 1,
        max: 999,
        onChange: (e) => setWeight(Math.min(Number(e.target.value), 999)),
        css: {
          backgroundColor: "$surface_bright",
          border: "1px solid $border_bright",
          maxWidth: "$20"
        }
      }
    )
  )) : null) : null, /* @__PURE__ */ React100.createElement(Flex, { justify: "end", align: "center", css: { mt: "$12", gap: "$8" } }, /* @__PURE__ */ React100.createElement(IconButton, { css: { border: "1px solid $border_bright" } }, /* @__PURE__ */ React100.createElement(TrashIcon3, { onClick: () => setOpenDelete(!open) })), /* @__PURE__ */ React100.createElement(
    Tooltip,
    {
      disabled: isValid,
      title: options.length < 2 ? "At least two options must be added" : `Please fill all the fields ${isQuiz ? "and mark the correct answer(s)" : ""} to continue`,
      boxCss: { maxWidth: "$40" }
    },
    /* @__PURE__ */ React100.createElement(
      Button,
      {
        variant: "standard",
        disabled: !isValid,
        onClick: () => {
          onSave({
            saved: true,
            text,
            type,
            options,
            skippable: false,
            draftID: question.draftID,
            weight
          });
        }
      },
      "Save"
    )
  )), /* @__PURE__ */ React100.createElement(
    DeleteQuestionModal,
    {
      open: openDelete,
      setOpen: setOpenDelete,
      removeQuestion
    }
  ));
};
var isValidQuestion = ({
  text,
  type,
  options,
  weight,
  isQuiz = false
}) => {
  if (!isValidTextInput(text) || !type) {
    return false;
  }
  const everyOptionHasText = options.length > 1 && options.every((option) => option && isValidTextInput(option.text, 1));
  const hasCorrectAnswer = options.some((option) => option.isCorrectAnswer);
  if (!isQuiz) {
    return everyOptionHasText;
  }
  if (isQuiz && weight < 1) {
    return false;
  }
  return everyOptionHasText && hasCorrectAnswer;
};

// src/Prebuilt/components/Polls/CreateQuestions/SavedQuestion.tsx
import React101, { useMemo as useMemo10 } from "react";
import { CheckCircleIcon as CheckCircleIcon3 } from "@100mslive/react-icons";
var SavedQuestion = ({
  question,
  index,
  length,
  convertToDraft
}) => {
  var _a7;
  const answerArray = useMemo10(() => {
    var _a8;
    const updatedAnswerArray = [];
    const { option, options } = (_a8 = question == null ? void 0 : question.answer) != null ? _a8 : {};
    if (option) {
      updatedAnswerArray.push(option);
    }
    if (options) {
      updatedAnswerArray.push(...options);
    }
    return updatedAnswerArray;
  }, [question == null ? void 0 : question.answer]);
  return /* @__PURE__ */ React101.createElement(React101.Fragment, null, /* @__PURE__ */ React101.createElement(
    Text,
    {
      variant: "overline",
      css: { c: "$on_surface_low", textTransform: "uppercase" }
    },
    "Question ",
    index + 1,
    " of ",
    length,
    ": ",
    QUESTION_TYPE_TITLE[question.type]
  ), /* @__PURE__ */ React101.createElement(Text, { variant: "body2", css: { mt: "$4", mb: "$md" } }, question.text), (_a7 = question.options) == null ? void 0 : _a7.map((option, index2) => /* @__PURE__ */ React101.createElement(
    Flex,
    {
      key: `${option.text}-${index2}`,
      css: { alignItems: "center", my: "$xs" }
    },
    /* @__PURE__ */ React101.createElement(Text, { variant: "body2", css: { c: "$on_surface_medium" } }, option.text),
    (answerArray.includes(index2 + 1) || option.isCorrectAnswer) && /* @__PURE__ */ React101.createElement(Flex, { css: { color: "$alert_success", mx: "$xs" } }, /* @__PURE__ */ React101.createElement(CheckCircleIcon3, { height: 24, width: 24 }))
  )), question.skippable ? /* @__PURE__ */ React101.createElement(Text, { variant: "sm", css: { color: "$on_surface_low", my: "$md" } }, "Not required to answer") : null, /* @__PURE__ */ React101.createElement(Flex, { justify: "end", css: { w: "100%", alignItems: "center" } }, /* @__PURE__ */ React101.createElement(
    Button,
    {
      variant: "standard",
      css: { fontWeight: "$semiBold" },
      onClick: () => convertToDraft(question.draftID)
    },
    "Edit"
  )));
};

// src/Prebuilt/components/Polls/CreateQuestions/CreateQuestions.jsx
var getEditableFormat = (questions) => {
  const editableQuestions = questions.map((question) => {
    return __spreadProps(__spreadValues({}, question), { saved: true, draftID: uuid2() });
  });
  return editableQuestions;
};
function CreateQuestions() {
  var _a7, _b7, _c, _d;
  const actions = useHMSActions37();
  const { isHLSRunning } = useRecordingStreaming9();
  const togglePollView = usePollViewToggle();
  const { pollInView: id, setPollView } = usePollViewState();
  const interaction = useHMSStore52(selectPollByID(id));
  const [questions, setQuestions] = useState40(
    ((_a7 = interaction.questions) == null ? void 0 : _a7.length) ? getEditableFormat(interaction.questions) : [{ draftID: uuid2() }]
  );
  const isValidPoll = useMemo11(
    () => questions.length > 0 && questions.every(isValidQuestion),
    [questions]
  );
  const launchPoll = () => __async(this, null, function* () {
    yield actions.interactivityCenter.startPoll(id);
    yield sendTimedMetadata(id);
    setPollView(POLL_VIEWS.VOTE);
  });
  const sendTimedMetadata = (poll_id) => __async(this, null, function* () {
    if (poll_id && isHLSRunning) {
      try {
        yield actions.sendHLSTimedMetadata([
          {
            payload: `poll:${poll_id}`,
            duration: 100
          }
        ]);
      } catch (e) {
        console.error(e);
      }
    }
  });
  const headingTitle = (interaction == null ? void 0 : interaction.type) ? ((_c = (_b7 = interaction == null ? void 0 : interaction.type) == null ? void 0 : _b7[0]) == null ? void 0 : _c.toUpperCase()) + ((_d = interaction == null ? void 0 : interaction.type) == null ? void 0 : _d.slice(1)) : "Polls and Quizzes";
  const isQuiz = (interaction == null ? void 0 : interaction.type) === "quiz";
  return /* @__PURE__ */ React102.createElement(Container3, { rounded: true }, /* @__PURE__ */ React102.createElement(
    ContentHeader,
    {
      content: headingTitle,
      onClose: togglePollView,
      onBack: () => setPollView(POLL_VIEWS.CREATE_POLL_QUIZ)
    }
  ), /* @__PURE__ */ React102.createElement(Flex, { direction: "column", css: { p: "$10", overflowY: "auto" } }, /* @__PURE__ */ React102.createElement(Flex, { direction: "column" }, questions.map((question, index) => /* @__PURE__ */ React102.createElement(
    QuestionCard,
    {
      key: question.draftID,
      question,
      index,
      length: questions.length,
      onSave: (questionParams) => __async(this, null, function* () {
        const updatedQuestions = [
          ...questions.slice(0, index),
          questionParams,
          ...questions.slice(index + 1)
        ];
        setQuestions(updatedQuestions);
        const validQuestions = updatedQuestions.filter(
          (question2) => isValidQuestion(question2)
        );
        yield actions.interactivityCenter.addQuestionsToPoll(
          id,
          validQuestions
        );
      }),
      isQuiz,
      removeQuestion: (questionID) => __async(this, null, function* () {
        const updatedQuestions = questions.filter(
          (questionFromSet) => questionID !== (questionFromSet == null ? void 0 : questionFromSet.draftID)
        );
        setQuestions(updatedQuestions);
        const validQuestions = updatedQuestions.filter(
          (question2) => isValidQuestion(question2)
        );
        yield actions.interactivityCenter.addQuestionsToPoll(
          id,
          validQuestions
        );
      }),
      convertToDraft: (questionID) => setQuestions((prev) => {
        const copyOfQuestions = [...prev];
        copyOfQuestions.forEach((question2) => {
          if (questionID && question2.draftID === questionID) {
            question2.saved = false;
          }
        });
        return copyOfQuestions;
      })
    }
  ))), /* @__PURE__ */ React102.createElement(
    Flex,
    {
      css: {
        c: "$on_surface_low",
        my: "$sm",
        cursor: "pointer",
        "&:hover": { c: "$on_surface_medium" }
      },
      onClick: () => setQuestions([...questions, { draftID: uuid2() }])
    },
    /* @__PURE__ */ React102.createElement(AddCircleIcon2, null),
    /* @__PURE__ */ React102.createElement(Text, { variant: "body1", css: { ml: "$md", c: "$inherit" } }, "Add another question")
  ), /* @__PURE__ */ React102.createElement(Flex, { css: { w: "100%" }, justify: "end" }, /* @__PURE__ */ React102.createElement(Button, { disabled: !isValidPoll, onClick: () => __async(this, null, function* () {
    return launchPoll();
  }) }, "Launch ", interaction == null ? void 0 : interaction.type))));
}
var QuestionCard = ({
  question,
  onSave,
  index,
  length,
  removeQuestion,
  isQuiz,
  convertToDraft
}) => {
  return /* @__PURE__ */ React102.createElement(
    Flex,
    {
      direction: "column",
      css: { p: "$md", bg: "$surface_default", r: "$1", mb: "$sm" }
    },
    question.saved ? /* @__PURE__ */ React102.createElement(
      SavedQuestion,
      {
        question,
        index,
        length,
        convertToDraft
      }
    ) : /* @__PURE__ */ React102.createElement(
      QuestionForm,
      {
        question,
        removeQuestion: () => removeQuestion(question.draftID),
        onSave: (params) => onSave(params),
        index,
        length,
        isQuiz
      }
    )
  );
};

// src/Prebuilt/components/Polls/Voting/LeaderboardSummary.tsx
import React106, { useState as useState42 } from "react";
import { selectPollByID as selectPollByID3, useHMSStore as useHMSStore55 } from "@100mslive/react-sdk";
import {
  ChevronLeftIcon as ChevronLeftIcon4,
  ChevronRightIcon as ChevronRightIcon3,
  CrossIcon as CrossIcon18
} from "@100mslive/react-icons";

// src/Prebuilt/components/Polls/Voting/LeaderboardEntry.tsx
import React103 from "react";
import {
  CheckCircleIcon as CheckCircleIcon4,
  ClockIcon,
  TrophyFilledIcon
} from "@100mslive/react-icons";

// src/Prebuilt/components/Polls/common/utils.ts
var getFormattedTime = (milliseconds, precise = true) => {
  if (!milliseconds) return "-";
  const totalSeconds = milliseconds / 1e3;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = totalSeconds % 60;
  let formattedTime = "";
  if (hours) {
    formattedTime += `${hours}h `;
  }
  if (minutes || hours) {
    formattedTime += `${minutes}m `;
  }
  if (!precise && (hours || minutes)) {
    return formattedTime;
  }
  formattedTime += `${precise ? seconds.toFixed(3) : Math.floor(seconds)}s`;
  return formattedTime;
};

// src/Prebuilt/components/Polls/Voting/LeaderboardEntry.tsx
var positionColorMap = {
  1: "#D69516",
  2: "#3E3E3E",
  3: "#583B0F"
};
var LeaderboardEntry = ({
  position,
  score,
  questionCount,
  correctResponses,
  userName,
  maxPossibleScore,
  duration
}) => {
  return /* @__PURE__ */ React103.createElement(Flex, { align: "center", justify: "between", css: { my: "$8" } }, /* @__PURE__ */ React103.createElement(Flex, { align: "center", css: { gap: "$6" } }, /* @__PURE__ */ React103.createElement(
    Flex,
    {
      align: "center",
      justify: "center",
      css: {
        backgroundColor: positionColorMap[position] || "",
        h: "$10",
        w: "$10",
        borderRadius: "$round",
        color: position > 3 ? "$on_surface_low" : "#FFF",
        fontSize: "$xs",
        fontWeight: "$semiBold"
      }
    },
    position
  ), /* @__PURE__ */ React103.createElement(Box, null, /* @__PURE__ */ React103.createElement(
    Text,
    {
      variant: "sm",
      css: { fontWeight: "$semiBold", color: "$on_surface_high" }
    },
    userName
  ), /* @__PURE__ */ React103.createElement(Text, { variant: "sm", css: { mt: "$1" } }, score, " / ", maxPossibleScore, " points"))), /* @__PURE__ */ React103.createElement(Flex, { align: "center", css: { gap: "$4", color: "$on_surface_medium" } }, position === 1 && score ? /* @__PURE__ */ React103.createElement(TrophyFilledIcon, { height: 16, width: 16 }) : null, questionCount ? /* @__PURE__ */ React103.createElement(React103.Fragment, null, /* @__PURE__ */ React103.createElement(CheckCircleIcon4, { height: 16, width: 16 }), /* @__PURE__ */ React103.createElement(Text, { variant: "xs" }, correctResponses, "/", questionCount)) : null, duration ? /* @__PURE__ */ React103.createElement(Flex, { align: "center", css: { gap: "$2", color: "$on_surface_medium" } }, /* @__PURE__ */ React103.createElement(ClockIcon, { height: 16, width: 16 }), /* @__PURE__ */ React103.createElement(Text, { variant: "xs" }, getFormattedTime(duration))) : null));
};

// src/Prebuilt/components/Polls/Voting/PeerParticipationSummary.tsx
import React105 from "react";
import { selectLocalPeerID as selectLocalPeerID12, useHMSStore as useHMSStore54 } from "@100mslive/react-sdk";

// src/Prebuilt/components/Polls/Voting/StatisticBox.tsx
import React104 from "react";
var StatisticBox = ({
  title,
  value = 0
}) => {
  if (!value && !(typeof value === "number")) {
    return /* @__PURE__ */ React104.createElement(React104.Fragment, null);
  }
  return /* @__PURE__ */ React104.createElement(
    Box,
    {
      css: {
        p: "$8",
        background: "$surface_default",
        borderRadius: "$1",
        w: "100%"
      }
    },
    /* @__PURE__ */ React104.createElement(
      Text,
      {
        variant: "tiny",
        css: {
          textTransform: "uppercase",
          color: "$on_surface_medium",
          fontWeight: "$semiBold",
          my: "$4"
        }
      },
      title
    ),
    /* @__PURE__ */ React104.createElement(Text, { css: { fontWeight: "$semiBold" } }, value)
  );
};

// src/Prebuilt/components/Polls/Voting/useQuizSummary.tsx
import { useEffect as useEffect30, useState as useState41 } from "react";
import {
  selectPollByID as selectPollByID2,
  useHMSActions as useHMSActions38,
  useHMSStore as useHMSStore53
} from "@100mslive/react-sdk";
var useQuizSummary = (quizID) => {
  const hmsActions = useHMSActions38();
  const quiz = useHMSStore53(selectPollByID2(quizID));
  const [quizLeaderboard, setQuizLeaderboard] = useState41();
  const summary = (quizLeaderboard == null ? void 0 : quizLeaderboard.summary) || {
    totalUsers: 0,
    votedUsers: 0,
    avgScore: 0,
    avgTime: 0,
    correctUsers: 0
  };
  const [calculations, setCalculations] = useState41({
    maxPossibleScore: 0,
    totalResponses: 0
  });
  useEffect30(() => {
    const fetchLeaderboardData = () => __async(void 0, null, function* () {
      var _a7;
      if (!quizLeaderboard && quiz && !(quiz == null ? void 0 : quiz.anonymous) && quiz.state === "stopped") {
        const leaderboardData = yield hmsActions.interactivityCenter.fetchLeaderboard(quiz.id, 0, 50);
        const { maxPossibleScore, totalResponses } = ((_a7 = quiz == null ? void 0 : quiz.questions) == null ? void 0 : _a7.reduce((accumulator, question) => {
          var _a8;
          accumulator.maxPossibleScore += question.weight || 0;
          accumulator.totalResponses += ((_a8 = question == null ? void 0 : question.responses) == null ? void 0 : _a8.length) || 0;
          return accumulator;
        }, calculations)) || calculations;
        setQuizLeaderboard(leaderboardData);
        setCalculations({ maxPossibleScore, totalResponses });
      }
    });
    fetchLeaderboardData();
  }, [quiz, hmsActions.interactivityCenter, quizLeaderboard, calculations]);
  return {
    quizLeaderboard,
    summary,
    maxPossibleScore: calculations.maxPossibleScore,
    totalResponses: calculations.totalResponses
  };
};

// src/Prebuilt/components/Polls/Voting/PeerParticipationSummary.tsx
var PeerParticipationSummary = ({ quiz }) => {
  const localPeerId = useHMSStore54(selectLocalPeerID12);
  const { quizLeaderboard, summary } = useQuizSummary(quiz.id);
  if (quiz.state !== "stopped") {
    return /* @__PURE__ */ React105.createElement(React105.Fragment, null);
  }
  const isLocalPeerQuizCreator = localPeerId === quiz.startedBy;
  const peerEntry = quizLeaderboard == null ? void 0 : quizLeaderboard.entries.find(
    (entry) => {
      var _a7;
      return ((_a7 = entry.peer) == null ? void 0 : _a7.peerid) === localPeerId;
    }
  );
  const boxes = isLocalPeerQuizCreator ? [
    {
      title: "Voted",
      value: `${summary.totalUsers ? (100 * summary.votedUsers / summary.totalUsers).toFixed(0) : 0}% (${summary.votedUsers}/${summary.totalUsers})`
    },
    {
      title: "Correct Answers",
      value: `${summary.totalUsers ? (100 * summary.correctUsers / summary.totalUsers).toFixed(0) : 0}% (${summary.correctUsers}/${summary.totalUsers})`
    },
    // Time in ms
    { title: "Avg. Time Taken", value: getFormattedTime(summary.avgTime) },
    {
      title: "Avg. Score",
      value: Number.isInteger(summary.avgScore) ? summary.avgScore : summary.avgScore.toFixed(2)
    }
  ] : [
    { title: "Your rank", value: (peerEntry == null ? void 0 : peerEntry.position) || "-" },
    { title: "Points", value: (peerEntry == null ? void 0 : peerEntry.score) || 0 },
    // Time in ms
    { title: "Time Taken", value: getFormattedTime(peerEntry == null ? void 0 : peerEntry.duration) },
    {
      title: "Correct Answers",
      value: (peerEntry == null ? void 0 : peerEntry.totalResponses) ? `${peerEntry == null ? void 0 : peerEntry.correctResponses}/${peerEntry.totalResponses}` : "-"
    }
  ];
  return /* @__PURE__ */ React105.createElement(Box, null, /* @__PURE__ */ React105.createElement(Text, { css: { fontWeight: "$semiBold", my: "$8" } }, "Participation Summary"), /* @__PURE__ */ React105.createElement(Box, { css: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "$4" } }, boxes.map((box) => /* @__PURE__ */ React105.createElement(StatisticBox, { key: box.title, title: box.title, value: box.value }))));
};

// src/Prebuilt/components/Polls/Voting/LeaderboardSummary.tsx
var LeaderboardSummary = ({ pollID }) => {
  var _a7, _b7;
  const quiz = useHMSStore55(selectPollByID3(pollID));
  const { quizLeaderboard, maxPossibleScore } = useQuizSummary(pollID);
  const [viewAllEntries, setViewAllEntries] = useState42(false);
  const { setPollView } = usePollViewState();
  const toggleSidepane = useSidepaneToggle();
  if (!quiz || !quizLeaderboard)
    return /* @__PURE__ */ React106.createElement(Flex, { align: "center", justify: "center", css: { size: "100%" } }, /* @__PURE__ */ React106.createElement(Loading, null));
  const questionCount = ((_a7 = quiz.questions) == null ? void 0 : _a7.length) || 0;
  return /* @__PURE__ */ React106.createElement(Container3, { rounded: true }, /* @__PURE__ */ React106.createElement(Flex, { direction: "column", css: { size: "100%", p: "$8" } }, /* @__PURE__ */ React106.createElement(
    Flex,
    {
      justify: "between",
      align: "center",
      css: { pb: "$6", borderBottom: "1px solid $border_bright", mb: "$8" }
    },
    /* @__PURE__ */ React106.createElement(Flex, { align: "center", css: { gap: "$4" } }, /* @__PURE__ */ React106.createElement(
      Flex,
      {
        css: {
          color: "$on_surface_medium",
          "&:hover": { color: "$on_surface_high", cursor: "pointer" }
        },
        onClick: () => setPollView(POLL_VIEWS.VOTE)
      },
      /* @__PURE__ */ React106.createElement(ChevronLeftIcon4, null)
    ), /* @__PURE__ */ React106.createElement(Text, { variant: "lg", css: { fontWeight: "$semiBold" } }, quiz.title), /* @__PURE__ */ React106.createElement(StatusIndicator, { status: quiz.state })),
    /* @__PURE__ */ React106.createElement(
      Flex,
      {
        css: {
          color: "$on_surface_medium",
          "&:hover": { color: "$on_surface_high", cursor: "pointer" }
        },
        onClick: toggleSidepane
      },
      /* @__PURE__ */ React106.createElement(CrossIcon18, null)
    )
  ), /* @__PURE__ */ React106.createElement(Box, { css: { overflowY: "auto", mr: "-$4", pr: "$4" } }, !viewAllEntries ? /* @__PURE__ */ React106.createElement(PeerParticipationSummary, { quiz }) : null, /* @__PURE__ */ React106.createElement(Text, { variant: "sm", css: { fontWeight: "$semiBold", mt: "$4" } }, "Leaderboard"), /* @__PURE__ */ React106.createElement(Text, { variant: "xs", css: { color: "$on_surface_medium" } }, "Based on score and time taken to cast the correct answer"), /* @__PURE__ */ React106.createElement(
    Box,
    {
      css: {
        mt: "$8",
        overflowY: "auto",
        flex: viewAllEntries ? "1 1 0" : "unset",
        mr: viewAllEntries ? "-$6" : "unset",
        px: viewAllEntries ? "0" : "$4",
        pr: viewAllEntries ? "$6" : "$4",
        backgroundColor: viewAllEntries ? "" : "$surface_default",
        borderRadius: "$1"
      }
    },
    (quizLeaderboard == null ? void 0 : quizLeaderboard.entries) && quizLeaderboard.entries.slice(0, viewAllEntries ? void 0 : 5).map((question) => /* @__PURE__ */ React106.createElement(
      LeaderboardEntry,
      {
        key: question.position,
        position: question.position,
        score: question.score,
        questionCount,
        correctResponses: question.correctResponses,
        userName: question.peer.username || "",
        maxPossibleScore,
        duration: question.duration
      }
    )),
    ((_b7 = quizLeaderboard == null ? void 0 : quizLeaderboard.entries) == null ? void 0 : _b7.length) > 5 && !viewAllEntries ? /* @__PURE__ */ React106.createElement(
      Flex,
      {
        align: "center",
        justify: "end",
        css: {
          w: "100%",
          borderTop: "1px solid $border_bright",
          cursor: "pointer",
          color: "$on_surface_high",
          p: "$6 $2"
        },
        onClick: () => setViewAllEntries(true)
      },
      /* @__PURE__ */ React106.createElement(Text, { variant: "sm" }, "View All"),
      " ",
      /* @__PURE__ */ React106.createElement(ChevronRightIcon3, null)
    ) : null
  ))));
};

// src/Prebuilt/components/Polls/Voting/Voting.tsx
import React110, { useEffect as useEffect33, useRef as useRef22, useState as useState45 } from "react";
import {
  selectLocalPeer as selectLocalPeer4,
  selectPeerNameByID as selectPeerNameByID4,
  selectPermissions as selectPermissions17,
  selectPollByID as selectPollByID4,
  useHMSActions as useHMSActions40,
  useHMSStore as useHMSStore57
} from "@100mslive/react-sdk";
import { ChevronLeftIcon as ChevronLeftIcon5, CrossIcon as CrossIcon19 } from "@100mslive/react-icons";

// src/Prebuilt/components/Polls/Voting/StandardVoting.tsx
import React108 from "react";

// src/Prebuilt/components/Polls/Voting/QuestionCard.jsx
import React107, {
  useCallback as useCallback27,
  useEffect as useEffect31,
  useMemo as useMemo12,
  useRef as useRef21,
  useState as useState43
} from "react";
import { match as match9 } from "ts-pattern";
import {
  selectLocalPeer as selectLocalPeer3,
  selectLocalPeerRoleName as selectLocalPeerRoleName3,
  useHMSActions as useHMSActions39,
  useHMSStore as useHMSStore56
} from "@100mslive/react-sdk";
import {
  CheckCircleIcon as CheckCircleIcon5,
  ChevronDownIcon as ChevronDownIcon4,
  CrossCircleIcon as CrossCircleIcon2
} from "@100mslive/react-icons";
var QuestionCard2 = ({
  pollID,
  isQuiz,
  startedBy,
  pollState,
  index,
  totalQuestions,
  result,
  type,
  text,
  options = [],
  answer,
  localPeerResponse,
  updateSavedResponses,
  rolesThatCanViewResponses
}) => {
  const actions = useHMSActions39();
  const localPeer = useHMSStore56(selectLocalPeer3);
  const isLocalPeerCreator = (localPeer == null ? void 0 : localPeer.id) === startedBy;
  const localPeerRoleName = useHMSStore56(selectLocalPeerRoleName3);
  const roleCanViewResponse = !rolesThatCanViewResponses || rolesThatCanViewResponses.length === 0 || rolesThatCanViewResponses.includes(localPeerRoleName || "");
  const [localPeerChoice, setLocalPeerChoice] = useState43(localPeerResponse);
  useEffect31(() => {
    setLocalPeerChoice(localPeerResponse);
  }, [localPeerResponse]);
  const showVoteCount = roleCanViewResponse && (localPeerChoice || isLocalPeerCreator && pollState === "stopped") && !isQuiz;
  const isLive = pollState === "started";
  const pollEnded = pollState === "stopped";
  const canRespond = isLive && !localPeerChoice;
  const startTime = useRef21(Date.now());
  const isCorrectAnswer = checkCorrectAnswer(answer, localPeerChoice, type);
  const [singleOptionAnswer, setSingleOptionAnswer] = useState43();
  const [multipleOptionAnswer, setMultipleOptionAnswer] = useState43(/* @__PURE__ */ new Set());
  const [showOptions, setShowOptions] = useState43(true);
  const respondedToQuiz = isQuiz && localPeerChoice && !localPeerChoice.skipped;
  const isValidVote = useMemo12(() => {
    if (type === "single-choice" /* SINGLE_CHOICE */) {
      return singleOptionAnswer !== void 0;
    } else if (type === "multiple-choice" /* MULTIPLE_CHOICE */) {
      return multipleOptionAnswer.size > 0;
    }
  }, [singleOptionAnswer, multipleOptionAnswer, type]);
  const handleVote = useCallback27(() => __async(void 0, null, function* () {
    if (!isValidVote) {
      return;
    }
    const submittedResponse = {
      questionIndex: index,
      option: singleOptionAnswer,
      options: Array.from(multipleOptionAnswer),
      duration: Date.now() - startTime.current
    };
    yield actions.interactivityCenter.addResponsesToPoll(pollID, [
      submittedResponse
    ]);
    updateSavedResponses((prev) => {
      const prevCopy = __spreadValues({}, prev);
      prevCopy[index] = {
        option: singleOptionAnswer,
        options: Array.from(multipleOptionAnswer)
      };
      return prevCopy;
    });
    startTime.current = Date.now();
  }), [
    isValidVote,
    index,
    singleOptionAnswer,
    multipleOptionAnswer,
    actions.interactivityCenter,
    pollID,
    updateSavedResponses
  ]);
  return /* @__PURE__ */ React107.createElement(
    Box,
    {
      css: {
        backgroundColor: "$surface_bright",
        borderRadius: "$1",
        p: "$md",
        mt: "$md",
        border: respondedToQuiz && !isLive ? `1px solid ${isCorrectAnswer ? "$alert_success" : "$alert_error_default"}` : "none"
      }
    },
    /* @__PURE__ */ React107.createElement(Flex, { align: "center", justify: "between" }, /* @__PURE__ */ React107.createElement(
      Text,
      {
        variant: "caption",
        css: {
          color: match9({ respondedToQuiz, isLive, isCorrectAnswer }).when(
            ({ respondedToQuiz: respondedToQuiz2, isLive: isLive2 }) => respondedToQuiz2 && !isLive2,
            ({ isCorrectAnswer: isCorrectAnswer2 }) => isCorrectAnswer2 ? "$alert_success" : "$alert_error_default"
          ).otherwise(() => "$on_surface_low"),
          fontWeight: "$semiBold",
          display: "flex",
          alignItems: "center",
          gap: "$4"
        }
      },
      match9({ respondedToQuiz, pollEnded, isCorrectAnswer }).when(
        ({ respondedToQuiz: respondedToQuiz2, pollEnded: pollEnded2 }) => respondedToQuiz2 && pollEnded2,
        ({ isCorrectAnswer: isCorrectAnswer2 }) => {
          return isCorrectAnswer2 ? /* @__PURE__ */ React107.createElement(CheckCircleIcon5, { height: 16, width: 16 }) : /* @__PURE__ */ React107.createElement(CrossCircleIcon2, { height: 16, width: 16 });
        }
      ).otherwise(() => null),
      "QUESTION ",
      index,
      " OF ",
      totalQuestions,
      ": ",
      type.toUpperCase()
    )),
    /* @__PURE__ */ React107.createElement(Flex, { justify: "between", css: { my: "$md" } }, /* @__PURE__ */ React107.createElement(Text, { css: { color: "$on_surface_high" } }, text), /* @__PURE__ */ React107.createElement(
      Box,
      {
        css: {
          color: "$on_surface_medium",
          "&:hover": { color: "$on_surface_high", cursor: "pointer" }
        },
        onClick: () => setShowOptions((prev) => !prev)
      },
      /* @__PURE__ */ React107.createElement(
        ChevronDownIcon4,
        {
          style: {
            transform: showOptions ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease"
          }
        }
      )
    )),
    /* @__PURE__ */ React107.createElement(
      Box,
      {
        css: {
          maxHeight: showOptions ? "$80" : "0",
          transition: "max-height 0.3s ease",
          overflowY: "auto",
          mb: "$4"
        }
      },
      type === "single-choice" /* SINGLE_CHOICE */ ? /* @__PURE__ */ React107.createElement(
        SingleChoiceOptions,
        {
          key: index,
          questionIndex: index,
          isQuiz,
          canRespond,
          correctOptionIndex: answer == null ? void 0 : answer.option,
          options,
          setAnswer: setSingleOptionAnswer,
          totalResponses: result == null ? void 0 : result.totalResponses,
          showVoteCount,
          localPeerResponse: localPeerChoice,
          isStopped: pollState === "stopped"
        }
      ) : null,
      type === "multiple-choice" /* MULTIPLE_CHOICE */ ? /* @__PURE__ */ React107.createElement(
        MultipleChoiceOptions,
        {
          questionIndex: index,
          isQuiz,
          canRespond,
          correctOptionIndexes: answer == null ? void 0 : answer.options,
          options,
          selectedOptions: multipleOptionAnswer,
          setSelectedOptions: setMultipleOptionAnswer,
          totalResponses: result == null ? void 0 : result.totalResponses,
          showVoteCount,
          localPeerResponse: localPeerChoice,
          isStopped: pollState === "stopped"
        }
      ) : null
    ),
    isLive && /* @__PURE__ */ React107.createElement(
      QuestionActions,
      {
        isValidVote,
        onVote: handleVote,
        response: localPeerChoice,
        isQuiz
      }
    )
  );
};
var QuestionActions = ({ isValidVote, response, isQuiz, onVote }) => {
  return /* @__PURE__ */ React107.createElement(Flex, { align: "center", justify: "end", css: { gap: "$4", w: "100%" } }, response ? /* @__PURE__ */ React107.createElement(Text, { css: { fontWeight: "$semiBold", color: "$on_surface_medium" } }, response.skipped ? "Skipped" : null, isQuiz && !response.skipped ? "Answered" : null, !isQuiz && !response.skipped ? "Voted" : null) : /* @__PURE__ */ React107.createElement(
    Button,
    {
      css: { p: "$xs $10", fontWeight: "$semiBold" },
      disabled: !isValidVote,
      onClick: onVote
    },
    isQuiz ? "Answer" : "Vote"
  ));
};

// src/Prebuilt/components/Polls/Voting/StandardVoting.tsx
var StandardView = ({
  poll,
  localPeerResponses,
  updateSavedResponses
}) => {
  var _a7;
  if (!(poll == null ? void 0 : poll.questions)) {
    return null;
  }
  const isQuiz = poll.type === "quiz";
  const isStopped = poll.state === "stopped";
  return /* @__PURE__ */ React108.createElement(React108.Fragment, null, isQuiz && isStopped ? /* @__PURE__ */ React108.createElement(PeerParticipationSummary, { quiz: poll }) : null, (_a7 = poll.questions) == null ? void 0 : _a7.map((question, index) => {
    var _a8;
    return /* @__PURE__ */ React108.createElement(
      QuestionCard2,
      {
        pollID: poll.id,
        isQuiz,
        startedBy: poll.startedBy,
        pollState: poll.state,
        key: `${question.text}-${index}`,
        index: question.index,
        text: question.text,
        type: question.type,
        result: question.result,
        totalQuestions: ((_a8 = poll.questions) == null ? void 0 : _a8.length) || 0,
        options: question.options,
        localPeerResponse: localPeerResponses == null ? void 0 : localPeerResponses[question.index],
        answer: question.answer,
        updateSavedResponses,
        rolesThatCanViewResponses: poll.rolesThatCanViewResponses
      }
    );
  }));
};

// src/Prebuilt/components/Polls/Voting/TimedVoting.tsx
import React109, { useEffect as useEffect32, useState as useState44 } from "react";
var TimedView = ({
  poll,
  localPeerResponses,
  updateSavedResponses
}) => {
  var _a7, _b7, _c;
  const [currentIndex, setCurrentIndex] = useState44(
    getIndexToShow(localPeerResponses)
  );
  const activeQuestion = (_a7 = poll.questions) == null ? void 0 : _a7.find(
    (question) => question.index === currentIndex
  );
  const attemptedAll = (((_b7 = poll.questions) == null ? void 0 : _b7.length) || 0) < currentIndex;
  useEffect32(() => {
    setCurrentIndex(getIndexToShow(localPeerResponses));
  }, [localPeerResponses]);
  if (!activeQuestion && !attemptedAll || !((_c = poll.questions) == null ? void 0 : _c.length)) {
    return null;
  }
  return /* @__PURE__ */ React109.createElement(React109.Fragment, null, poll.questions.map((question) => {
    var _a8;
    return attemptedAll || (activeQuestion == null ? void 0 : activeQuestion.index) === question.index ? /* @__PURE__ */ React109.createElement(
      QuestionCard2,
      {
        key: question.index,
        pollID: poll.id,
        isQuiz: poll.type === "quiz",
        startedBy: poll.startedBy,
        pollState: poll.state,
        index: question.index,
        text: question.text,
        type: question.type,
        result: question == null ? void 0 : question.result,
        totalQuestions: ((_a8 = poll.questions) == null ? void 0 : _a8.length) || 0,
        options: question.options,
        localPeerResponse: localPeerResponses == null ? void 0 : localPeerResponses[question.index],
        answer: question.answer,
        rolesThatCanViewResponses: poll.rolesThatCanViewResponses,
        updateSavedResponses
      }
    ) : null;
  }));
};

// src/Prebuilt/components/Polls/Voting/Voting.tsx
var Voting = ({
  id,
  toggleVoting
}) => {
  const actions = useHMSActions40();
  const poll = useHMSStore57(selectPollByID4(id));
  const pollCreatorName = useHMSStore57(selectPeerNameByID4(poll == null ? void 0 : poll.createdBy));
  const permissions = useHMSStore57(selectPermissions17);
  const canEndActivity = !!(permissions == null ? void 0 : permissions.pollWrite);
  const { setPollView } = usePollViewState();
  const showSingleView = (poll == null ? void 0 : poll.type) === "quiz" && poll.state === "started";
  const fetchedInitialResponses = useRef22(false);
  const [savedResponses, setSavedResponses] = useState45({});
  const localPeer = useHMSStore57(selectLocalPeer4);
  const localPeerId = localPeer == null ? void 0 : localPeer.id;
  const customerUserId = localPeer == null ? void 0 : localPeer.customerUserId;
  useEffect33(() => {
    fetchedInitialResponses.current = false;
    setSavedResponses({});
  }, [id, setSavedResponses]);
  useEffect33(() => {
    const getResponses = () => __async(void 0, null, function* () {
      if (poll && actions.interactivityCenter && !fetchedInitialResponses.current) {
        yield actions.interactivityCenter.getPollResponses(poll, true);
        fetchedInitialResponses.current = true;
      }
    });
    getResponses();
  }, [poll, actions.interactivityCenter]);
  useEffect33(() => {
    if (poll == null ? void 0 : poll.questions) {
      const localPeerResponses = getPeerResponses(
        poll.questions,
        localPeerId,
        customerUserId
      );
      localPeerResponses == null ? void 0 : localPeerResponses.forEach((response) => {
        if (response) {
          setSavedResponses((prev) => {
            var _a7, _b7, _c;
            const prevCopy = __spreadValues({}, prev);
            prevCopy[(_a7 = response[0]) == null ? void 0 : _a7.questionIndex] = {
              option: (_b7 = response[0]) == null ? void 0 : _b7.option,
              options: (_c = response[0]) == null ? void 0 : _c.options
            };
            return prevCopy;
          });
        }
      });
    }
  }, [localPeerId, poll == null ? void 0 : poll.questions, id, customerUserId]);
  if (!poll) {
    return null;
  }
  const canViewLeaderboard = poll.type === "quiz" && poll.state === "stopped" && !poll.anonymous;
  return /* @__PURE__ */ React110.createElement(Container3, { rounded: true }, /* @__PURE__ */ React110.createElement(
    Flex,
    {
      align: "center",
      css: {
        gap: "$4",
        py: "$6",
        px: "$8",
        my: "$4",
        w: "100%",
        color: "$on_surface_high",
        borderBottom: "1px solid $border_default"
      }
    },
    /* @__PURE__ */ React110.createElement(
      Flex,
      {
        onClick: () => setPollView(POLL_VIEWS.CREATE_POLL_QUIZ),
        css: {
          cursor: "pointer",
          c: "$on_surface_medium",
          "&:hover": { color: "$on_surface_high" }
        }
      },
      /* @__PURE__ */ React110.createElement(ChevronLeftIcon5, null)
    ),
    /* @__PURE__ */ React110.createElement(Text, { variant: "h6" }, poll.title),
    /* @__PURE__ */ React110.createElement(StatusIndicator, { status: poll.state }),
    /* @__PURE__ */ React110.createElement(
      Box,
      {
        css: {
          marginLeft: "auto",
          cursor: "pointer",
          "&:hover": { opacity: "0.8" },
          height: "fit-content"
        }
      },
      /* @__PURE__ */ React110.createElement(CrossIcon19, { onClick: toggleVoting })
    )
  ), /* @__PURE__ */ React110.createElement(
    Flex,
    {
      direction: "column",
      css: { p: "$8 $10", flex: "1 1 0", overflowY: "auto" }
    },
    poll.state === "started" ? /* @__PURE__ */ React110.createElement(Text, { css: { color: "$on_surface_medium", fontWeight: "$semiBold" } }, pollCreatorName || "Participant", " started a ", poll.type) : null,
    showSingleView ? /* @__PURE__ */ React110.createElement(
      TimedView,
      {
        poll,
        localPeerResponses: savedResponses,
        updateSavedResponses: setSavedResponses
      }
    ) : /* @__PURE__ */ React110.createElement(
      StandardView,
      {
        poll,
        localPeerResponses: savedResponses,
        updateSavedResponses: setSavedResponses
      }
    )
  ), /* @__PURE__ */ React110.createElement(
    Flex,
    {
      css: {
        w: "100%",
        justifyContent: "end",
        alignItems: "center",
        p: "$8",
        borderTop: "1px solid $border_bright"
      }
    },
    poll.state === "started" && canEndActivity && /* @__PURE__ */ React110.createElement(
      Button,
      {
        variant: "danger",
        css: { fontWeight: "$semiBold", w: "max-content" },
        onClick: () => actions.interactivityCenter.stopPoll(id)
      },
      "End ",
      poll.type
    ),
    canViewLeaderboard ? /* @__PURE__ */ React110.createElement(
      Button,
      {
        css: { fontWeight: "$semiBold", w: "max-content" },
        onClick: () => setPollView(POLL_VIEWS.RESULTS)
      },
      "View Leaderboard"
    ) : null
  ));
};

// src/Prebuilt/components/Polls/Polls.tsx
var Polls = () => {
  const togglePollView = usePollViewToggle();
  const { pollInView: pollID, view } = usePollViewState();
  if (view === POLL_VIEWS.CREATE_POLL_QUIZ) {
    return /* @__PURE__ */ React111.createElement(PollsQuizMenu, null);
  } else if (view === POLL_VIEWS.CREATE_QUESTIONS) {
    return /* @__PURE__ */ React111.createElement(CreateQuestions, null);
  } else if (view === POLL_VIEWS.VOTE) {
    return /* @__PURE__ */ React111.createElement(Voting, { toggleVoting: togglePollView, id: pollID });
  } else if (view === POLL_VIEWS.RESULTS) {
    return /* @__PURE__ */ React111.createElement(LeaderboardSummary, { pollID });
  } else {
    return null;
  }
};

// src/Prebuilt/components/RoomDetails/RoomDetailsPane.tsx
import React115 from "react";
import { CrossIcon as CrossIcon20 } from "@100mslive/react-icons";

// src/Prebuilt/components/Header/HeaderComponents.jsx
import React112, { useEffect as useEffect34, useState as useState46 } from "react";
import { selectDominantSpeaker, useHMSStore as useHMSStore58 } from "@100mslive/react-sdk";
import { VolumeOneIcon } from "@100mslive/react-icons";
var SpeakerTag = () => {
  const dominantSpeaker = useHMSStore58(selectDominantSpeaker);
  return dominantSpeaker && dominantSpeaker.name && /* @__PURE__ */ React112.createElement(
    Flex,
    {
      align: "center",
      justify: "center",
      css: {
        flex: "1 1 0",
        color: "$on_surface_high",
        "@md": { display: "none" }
      }
    },
    /* @__PURE__ */ React112.createElement(VolumeOneIcon, null),
    /* @__PURE__ */ React112.createElement(
      Text,
      {
        variant: "sm",
        css: __spreadProps(__spreadValues({}, textEllipsis(200)), { ml: "$2" }),
        title: dominantSpeaker.name
      },
      dominantSpeaker.name
    )
  );
};
var LogoImg = styled("img", {
  maxHeight: "$14",
  w: "auto",
  objectFit: "contain",
  "@md": {
    maxHeight: "$12"
  }
});
var Logo = () => {
  var _a7;
  const roomLayout = useRoomLayout();
  const logo = (_a7 = roomLayout == null ? void 0 : roomLayout.logo) == null ? void 0 : _a7.url;
  const [hideImage, setHideImage] = useState46(false);
  useEffect34(() => {
    if (hideImage) {
      setHideImage(false);
    }
  }, [logo]);
  return logo && !hideImage ? /* @__PURE__ */ React112.createElement(
    LogoImg,
    {
      src: logo,
      alt: "Brand Logo",
      onError: (e) => {
        e.target.onerror = null;
        setHideImage(true);
      }
    }
  ) : null;
};

// src/Prebuilt/components/RoomDetails/RoomDetailsRow.tsx
import React114 from "react";

// src/Prebuilt/components/RoomDetails/Duration.tsx
import React113, { useEffect as useEffect35, useState as useState47 } from "react";
var Duration = ({ timestamp }) => {
  const [elapsedTime, setElapsedTime] = useState47(
    getFormattedTime(Date.now() - timestamp.getTime(), false)
  );
  useEffect35(() => {
    const timerAdded = setInterval(() => {
      setElapsedTime(getFormattedTime(Date.now() - timestamp.getTime(), false));
    }, 1e3);
    return () => {
      clearInterval(timerAdded);
    };
  }, [timestamp]);
  return /* @__PURE__ */ React113.createElement(Flex, { css: { color: "$on_surface_medium" } }, /* @__PURE__ */ React113.createElement(Text, { variant: "xs", css: { color: "inherit" } }, "Started ", elapsedTime, " ago"));
};

// src/Prebuilt/components/RoomDetails/RoomDetailsRow.tsx
var RoomDetailsRow = ({ details }) => {
  return /* @__PURE__ */ React114.createElement(Flex, { align: "center", css: { w: "100%" } }, details.map((detail, index) => /* @__PURE__ */ React114.createElement(React114.Fragment, { key: detail.toString() }, index > 0 && /* @__PURE__ */ React114.createElement(
    Box,
    {
      css: {
        h: "$2",
        w: "$2",
        r: "$round",
        bg: "$on_surface_medium",
        m: "0 $2"
      }
    }
  ), typeof detail !== "string" ? /* @__PURE__ */ React114.createElement(Duration, { timestamp: detail }) : /* @__PURE__ */ React114.createElement(Text, { variant: "xs", css: { c: "$on_surface_medium" } }, detail))));
};

// src/Prebuilt/components/RoomDetails/RoomDetailsPane.tsx
var RoomDetailsPane = () => {
  const { description } = useRoomLayoutHeader();
  const isMwebHLSStream = useMobileHLSStream();
  return /* @__PURE__ */ React115.createElement(Box, { css: { flex: "1 1 0", position: "relative" } }, isMwebHLSStream ? /* @__PURE__ */ React115.createElement(Flex, { direction: "row", align: "center", gap: "2" }, /* @__PURE__ */ React115.createElement(Logo, null), /* @__PURE__ */ React115.createElement(ShowRoomDetailHeader, null)) : /* @__PURE__ */ React115.createElement(ShowRoomDetailHeader, null), /* @__PURE__ */ React115.createElement(Box, { css: { mt: "$10" } }, /* @__PURE__ */ React115.createElement(
    Text,
    {
      css: {
        color: "$on_surface_high",
        fontWeight: "$semiBold",
        display: isMwebHLSStream ? "none" : ""
      }
    },
    "Description"
  ), /* @__PURE__ */ React115.createElement(Text, { variant: "sm", css: { c: "$on_surface_medium" } }, description)));
};
var ShowRoomDetailHeader = () => {
  const { title, details } = useRoomLayoutHeader();
  const toggleDetailsPane = useSidepaneToggle(SIDE_PANE_OPTIONS.ROOM_DETAILS);
  const isMwebHLSStream = useMobileHLSStream();
  return /* @__PURE__ */ React115.createElement(
    Flex,
    {
      direction: "column",
      css: { position: "sticky", top: 0, bg: "$surface_dim" }
    },
    /* @__PURE__ */ React115.createElement(Flex, { justify: "between", align: "center", css: { w: "100%" } }, /* @__PURE__ */ React115.createElement(Text, { variant: "h6" }, title), !isMwebHLSStream && /* @__PURE__ */ React115.createElement(
      Flex,
      {
        onClick: toggleDetailsPane,
        css: {
          color: "$on_surface_high",
          cursor: "pointer",
          "&:hover": { opacity: "0.8" }
        }
      },
      /* @__PURE__ */ React115.createElement(CrossIcon20, null)
    )),
    /* @__PURE__ */ React115.createElement(RoomDetailsRow, { details })
  );
};

// src/Prebuilt/components/SidePaneTabs.tsx
import React126, { useEffect as useEffect40, useState as useState53 } from "react";
import { useMedia as useMedia21 } from "react-use";
import { match as match11 } from "ts-pattern";
import { selectPeerCount as selectPeerCount5, useHMSStore as useHMSStore67 } from "@100mslive/react-sdk";
import { CrossIcon as CrossIcon23 } from "@100mslive/react-icons";

// src/Prebuilt/components/Chat/Chat.tsx
import React123, { useCallback as useCallback31, useRef as useRef25 } from "react";
import { useMedia as useMedia20 } from "react-use";
import {
  selectSessionStore as selectSessionStore9,
  selectUnreadHMSMessagesCount as selectUnreadHMSMessagesCount5
} from "@100mslive/hms-video-store";
import { match as match10 } from "ts-pattern";
import {
  selectHMSMessagesCount,
  useHMSActions as useHMSActions44,
  useHMSStore as useHMSStore64,
  useHMSVanillaStore as useHMSVanillaStore11
} from "@100mslive/react-sdk";
import { ChevronDownIcon as ChevronDownIcon7 } from "@100mslive/react-icons";

// src/Prebuilt/components/Chat/ChatFooter.tsx
import React118, {
  useCallback as useCallback29,
  useEffect as useEffect37,
  useRef as useRef24,
  useState as useState50
} from "react";
import { useMedia as useMedia18 } from "react-use";
import data2 from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  selectLocalPeer as selectLocalPeer5,
  useHMSActions as useHMSActions42,
  useHMSStore as useHMSStore61
} from "@100mslive/react-sdk";
import {
  EmojiIcon as EmojiIcon3,
  PauseCircleIcon as PauseCircleIcon2,
  SendIcon as SendIcon2,
  VerticalMenuIcon as VerticalMenuIcon7
} from "@100mslive/react-icons";

// src/Prebuilt/components/Chat/ChatSelectorContainer.tsx
import React117, { useState as useState49 } from "react";
import { useMedia as useMedia17 } from "react-use";
import {
  ChevronDownIcon as ChevronDownIcon5,
  ChevronUpIcon as ChevronUpIcon4,
  CrossIcon as CrossIcon21,
  GroupIcon,
  PersonIcon as PersonIcon2
} from "@100mslive/react-icons";

// src/Prebuilt/components/Chat/ChatSelector.tsx
import React116, { useMemo as useMemo13, useState as useState48 } from "react";
import { useMedia as useMedia16 } from "react-use";
import {
  HMSPeerType as HMSPeerType3,
  selectMessagesUnreadCountByPeerID,
  selectMessagesUnreadCountByRole,
  selectRemotePeers as selectRemotePeers2,
  selectUnreadHMSMessagesCount as selectUnreadHMSMessagesCount4,
  useHMSStore as useHMSStore59
} from "@100mslive/react-sdk";
import { CheckIcon as CheckIcon6, PeopleIcon as PeopleIcon3 } from "@100mslive/react-icons";
var ChatDotIcon = () => {
  return /* @__PURE__ */ React116.createElement(Box, { css: { size: "$6", bg: "$primary_default", mx: "$2", r: "$round" } });
};
var SelectorItem = ({
  value,
  active,
  onClick,
  unreadCount,
  icon = void 0
}) => {
  const isMobile = useMedia16(config.media.md);
  const Root28 = !isMobile ? Dropdown.Item : (_a7) => {
    var _b7 = _a7, { children } = _b7, rest = __objRest(_b7, ["children"]);
    return /* @__PURE__ */ React116.createElement(Flex, __spreadProps(__spreadValues({}, rest), { css: __spreadValues({ p: "$6 $8" }, rest.css) }), children);
  };
  return /* @__PURE__ */ React116.createElement(
    Root28,
    {
      "data-testid": "chat_members",
      css: { align: "center", px: "$10", py: "$4", bg: "$surface_default" },
      onClick
    },
    /* @__PURE__ */ React116.createElement(
      Text,
      {
        variant: "sm",
        css: {
          display: "flex",
          alignItems: "center",
          gap: "$4",
          fontWeight: "$semiBold",
          color: "$on_surface_high"
        }
      },
      icon,
      value
    ),
    /* @__PURE__ */ React116.createElement(Flex, { align: "center", css: { ml: "auto", color: "$on_primary_high" } }, unreadCount > 0 && /* @__PURE__ */ React116.createElement(Tooltip, { title: `${unreadCount} unread` }, /* @__PURE__ */ React116.createElement(Box, { css: { mr: active ? "$3" : 0 } }, /* @__PURE__ */ React116.createElement(ChatDotIcon, null))), active && /* @__PURE__ */ React116.createElement(CheckIcon6, { width: 16, height: 16 }))
  );
};
var SelectorHeader = React116.memo(
  ({
    isHorizontalDivider = true,
    children
  }) => {
    return /* @__PURE__ */ React116.createElement(Box, { css: { flexShrink: 0 } }, isHorizontalDivider && /* @__PURE__ */ React116.createElement(HorizontalDivider, { space: 4 }), /* @__PURE__ */ React116.createElement(
      Text,
      {
        variant: "overline",
        css: {
          p: "$4 $10",
          fontWeight: "$semiBold",
          textTransform: "uppercase",
          color: "$on_surface_medium"
        }
      },
      children
    ));
  }
);
var Everyone = React116.memo(({ active }) => {
  const unreadCount = useHMSStore59(selectUnreadHMSMessagesCount4);
  const [, setPeerSelector] = useSetSubscribedChatSelector(CHAT_SELECTOR.PEER);
  const [, setRoleSelector] = useSetSubscribedChatSelector(CHAT_SELECTOR.ROLE);
  return /* @__PURE__ */ React116.createElement(
    SelectorItem,
    {
      value: "Everyone",
      icon: /* @__PURE__ */ React116.createElement(PeopleIcon3, null),
      active,
      unreadCount,
      onClick: () => {
        setPeerSelector({});
        setRoleSelector("");
      }
    }
  );
});
var RoleItem = React116.memo(
  ({ role, active }) => {
    const unreadCount = useHMSStore59(
      selectMessagesUnreadCountByRole(role)
    );
    const [, setPeerSelector] = useSetSubscribedChatSelector(
      CHAT_SELECTOR.PEER
    );
    const [, setRoleSelector] = useSetSubscribedChatSelector(
      CHAT_SELECTOR.ROLE
    );
    return /* @__PURE__ */ React116.createElement(
      SelectorItem,
      {
        value: role,
        active,
        unreadCount,
        onClick: () => {
          setPeerSelector({});
          setRoleSelector(role);
        }
      }
    );
  }
);
var PeerItem = ({
  peerId,
  name,
  active
}) => {
  const unreadCount = useHMSStore59(
    selectMessagesUnreadCountByPeerID(peerId)
  );
  const [, setPeerSelector] = useSetSubscribedChatSelector(CHAT_SELECTOR.PEER);
  const [, setRoleSelector] = useSetSubscribedChatSelector(CHAT_SELECTOR.ROLE);
  return /* @__PURE__ */ React116.createElement(
    SelectorItem,
    {
      value: name,
      active,
      unreadCount,
      onClick: () => {
        setPeerSelector({ id: peerId, name });
        setRoleSelector("");
      }
    }
  );
};
var VirtualizedSelectItemList = ({
  peers,
  selectedRole,
  selectedPeerId,
  searchValue,
  isPublicChatEnabled
}) => {
  const roles = useFilteredRoles();
  const filteredPeers = useMemo13(
    () => peers.filter(
      // search should be empty or search phrase should be included in name
      (peer) => (!searchValue || peer.name.toLowerCase().includes(searchValue.toLowerCase())) && peer.type !== HMSPeerType3.SIP
    ),
    [peers, searchValue]
  );
  const listItems = useMemo13(() => {
    let selectItems = [];
    if (isPublicChatEnabled && !searchValue) {
      selectItems = [/* @__PURE__ */ React116.createElement(Everyone, { active: !selectedRole && !selectedPeerId })];
    }
    if (roles.length > 0 && !searchValue) {
      selectItems.push(
        /* @__PURE__ */ React116.createElement(SelectorHeader, { isHorizontalDivider: isPublicChatEnabled }, "Roles")
      );
      roles.forEach(
        (userRole) => selectItems.push(
          /* @__PURE__ */ React116.createElement(
            RoleItem,
            {
              key: userRole,
              active: selectedRole === userRole,
              role: userRole
            }
          )
        )
      );
    }
    if (filteredPeers.length > 0) {
      selectItems.push(
        /* @__PURE__ */ React116.createElement(
          SelectorHeader,
          {
            isHorizontalDivider: isPublicChatEnabled || roles.length > 0
          },
          "Participants"
        )
      );
    }
    filteredPeers.forEach(
      (peer) => selectItems.push(
        /* @__PURE__ */ React116.createElement(
          PeerItem,
          {
            key: peer.id,
            name: peer.name,
            peerId: peer.id,
            active: peer.id === selectedPeerId
          }
        )
      )
    );
    return selectItems;
  }, [
    isPublicChatEnabled,
    searchValue,
    selectedRole,
    selectedPeerId,
    roles,
    filteredPeers
  ]);
  return /* @__PURE__ */ React116.createElement(
    Dropdown.Group,
    {
      css: { overflowY: "auto", maxHeight: "$64", bg: "$surface_default" }
    },
    listItems.map((item, index) => /* @__PURE__ */ React116.createElement(Box, { key: index }, item))
  );
};
var ChatSelector = ({
  role,
  peerId
}) => {
  var _a7, _b7;
  const { elements } = useRoomLayoutConferencingScreen();
  const peers = useHMSStore59(selectRemotePeers2);
  const [search, setSearch] = useState48("");
  const isPrivateChatEnabled = !!((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.private_chat_enabled);
  const isPublicChatEnabled = !!((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.public_chat_enabled);
  return /* @__PURE__ */ React116.createElement(React116.Fragment, null, peers.length > 0 && isPrivateChatEnabled && /* @__PURE__ */ React116.createElement(Box, { css: { px: "$4" } }, /* @__PURE__ */ React116.createElement(
    ParticipantSearch,
    {
      onSearch: setSearch,
      placeholder: "Search for participants"
    }
  )), /* @__PURE__ */ React116.createElement(
    VirtualizedSelectItemList,
    {
      selectedRole: role,
      selectedPeerId: peerId,
      peers: isPrivateChatEnabled ? peers : [],
      isPublicChatEnabled,
      searchValue: search
    }
  ));
};

// src/Prebuilt/components/Chat/ChatSelectorContainer.tsx
var ChatSelectorContainer = () => {
  var _a7, _b7;
  const [open, setOpen] = useState49(false);
  const isMobile = useMedia17(config.media.md);
  const { elements } = useRoomLayoutConferencingScreen();
  const isPrivateChatEnabled = !!((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.private_chat_enabled);
  const isPublicChatEnabled = !!((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.public_chat_enabled);
  const roles = useFilteredRoles();
  const selectedPeer = useSubscribeChatSelector(CHAT_SELECTOR.PEER);
  const selectedRole = useSubscribeChatSelector(CHAT_SELECTOR.ROLE);
  const defaultSelection = useDefaultChatSelection();
  const selection = selectedPeer.name || selectedRole || defaultSelection;
  if (!(isPrivateChatEnabled || isPublicChatEnabled || roles.length > 0) && !isPrivateChatEnabled && !selection) {
    return null;
  }
  return /* @__PURE__ */ React117.createElement(React117.Fragment, null, /* @__PURE__ */ React117.createElement(Flex, { align: "center", css: { mb: "$8", flex: "1 1 0", pl: "$2" } }, /* @__PURE__ */ React117.createElement(Text, { variant: "xs", css: { color: "$on_surface_medium" } }, selection ? "To" : "Choose Participant"), isMobile ? /* @__PURE__ */ React117.createElement(
    Flex,
    {
      align: "center",
      css: {
        c: "$on_surface_medium",
        border: "1px solid $border_bright",
        r: "$0",
        p: "$1 $2",
        ml: "$6"
      },
      gap: "1",
      onClick: (e) => {
        setOpen((value) => !value);
        e.stopPropagation();
      }
    },
    /* @__PURE__ */ React117.createElement(
      Text,
      {
        variant: "caption",
        css: {
          c: "$on_surface_high",
          pr: "$2",
          display: "flex",
          alignItems: "center",
          gap: "$1",
          textTransform: selection !== selectedPeer.name ? "capitalize" : void 0
        }
      },
      selection === CHAT_SELECTOR.EVERYONE ? /* @__PURE__ */ React117.createElement(GroupIcon, { width: 16, height: 16 }) : /* @__PURE__ */ React117.createElement(PersonIcon2, { width: 16, height: 16 }),
      selection || "Search"
    ),
    selection && (open ? /* @__PURE__ */ React117.createElement(ChevronUpIcon4, { width: 16, height: 16 }) : /* @__PURE__ */ React117.createElement(ChevronDownIcon5, { width: 16, height: 16 }))
  ) : /* @__PURE__ */ React117.createElement(Dropdown.Root, { open, onOpenChange: (value) => setOpen(value) }, /* @__PURE__ */ React117.createElement(
    Dropdown.Trigger,
    {
      asChild: true,
      "data-testid": "participant_list_filter",
      css: {
        background: "$primary_default",
        r: "$0",
        p: "$1 $2",
        ml: "$6"
      },
      tabIndex: 0
    },
    /* @__PURE__ */ React117.createElement(Flex, { align: "center", css: { c: "$on_surface_medium" }, gap: "1" }, /* @__PURE__ */ React117.createElement(
      Text,
      {
        variant: "caption",
        css: {
          c: "$on_surface_high",
          pr: "$2",
          display: "flex",
          alignItems: "center",
          gap: "$1",
          textTransform: selection !== selectedPeer.name ? "capitalize" : void 0
        }
      },
      selection === CHAT_SELECTOR.EVERYONE ? /* @__PURE__ */ React117.createElement(GroupIcon, { width: 16, height: 16 }) : /* @__PURE__ */ React117.createElement(PersonIcon2, { width: 16, height: 16 }),
      selection || "Search"
    ), selection && /* @__PURE__ */ React117.createElement(
      ChevronDownIcon5,
      {
        style: {
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 150ms ease"
        },
        width: 12,
        height: 12
      }
    ))
  ), /* @__PURE__ */ React117.createElement(
    Dropdown.Content,
    {
      css: {
        w: "$64",
        overflow: "hidden",
        maxHeight: "unset",
        bg: "$surface_default"
      },
      align: "start",
      sideOffset: 8
    },
    /* @__PURE__ */ React117.createElement(ChatSelector, { role: selectedRole, peerId: selectedPeer.id })
  ))), isMobile ? /* @__PURE__ */ React117.createElement(Sheet.Root, { open, onOpenChange: (value) => setOpen(value) }, /* @__PURE__ */ React117.createElement(Sheet.Content, { css: { pt: "$8" } }, /* @__PURE__ */ React117.createElement(
    Sheet.Title,
    {
      css: {
        display: "flex",
        w: "100%",
        justifyContent: "space-between",
        px: "$10",
        pb: "$4",
        mb: "$8",
        borderBottom: "1px solid $border_bright"
      }
    },
    /* @__PURE__ */ React117.createElement(
      Text,
      {
        css: { color: "$on_surface_medium", fontWeight: "$semiBold" }
      },
      "Chat with"
    ),
    /* @__PURE__ */ React117.createElement(Sheet.Close, { css: { color: "$on_surface_medium" } }, /* @__PURE__ */ React117.createElement(CrossIcon21, null))
  ), /* @__PURE__ */ React117.createElement(
    Box,
    {
      onClick: () => {
        setOpen(false);
      }
    },
    /* @__PURE__ */ React117.createElement(ChatSelector, { role: selectedRole, peerId: selectedPeer.id })
  ))) : null);
};

// src/Prebuilt/components/AppData/useChatState.js
import { useCallback as useCallback28 } from "react";
import {
  selectAppData as selectAppData7,
  useHMSActions as useHMSActions41,
  useHMSStore as useHMSStore60
} from "@100mslive/react-sdk";
var useChatDraftMessage = () => {
  const hmsActions = useHMSActions41();
  let chatDraftMessage = useHMSStore60(selectAppData7(APP_DATA.chatDraft));
  if (chatDraftMessage === void 0 || chatDraftMessage === null) {
    chatDraftMessage = "";
  }
  const setDraftMessage = useCallback28(
    (message) => {
      hmsActions.setAppData(APP_DATA.chatDraft, message, true);
    },
    [hmsActions]
  );
  return [chatDraftMessage, setDraftMessage];
};

// src/Prebuilt/components/Chat/useEmojiPickerStyles.js
import { useEffect as useEffect36, useRef as useRef23 } from "react";
var useEmojiPickerStyles = (showing) => {
  const ref = useRef23(null);
  useEffect36(() => {
    if (showing) {
      setTimeout(() => {
        var _a7, _b7;
        const root = (_b7 = (_a7 = ref.current) == null ? void 0 : _a7.querySelector("em-emoji-picker")) == null ? void 0 : _b7.shadowRoot;
        const style = document.createElement("style");
        style.textContent = `
          #root {
            --em-rgb-color: var(--hms-ui-colors-on_surface_high);
            --em-rgb-input: var(--hms-ui-colors-on_primary_high);
            --em-color-border: var(--hms-ui-colors-surface_bright);
            --color-b: var(--hms-ui-colors-on_surface_high);
            --rgb-background: transparent;
            color: var(--hms-ui-colors-on_surface_high);
            font-family: var(--hms-ui-fonts-sans);
          }
          .sticky {
            top: 0.25rem;
            background-color: var(--hms-ui-colors-surface_bright);
            margin-top: 0.5rem;
          }
        `;
        root == null ? void 0 : root.appendChild(style);
      }, 0);
    }
  }, [showing]);
  return ref;
};

// src/Prebuilt/components/Chat/ChatFooter.tsx
var TextArea2 = styled("textarea", {
  width: "100%",
  bg: "transparent",
  color: "$on_primary_high",
  resize: "none",
  lineHeight: "1rem",
  position: "relative",
  fontFamily: "$sans",
  fontSize: "100%",
  margin: 0,
  padding: 0,
  top: "$3",
  "&:focus": {
    boxShadow: "none",
    outline: "none"
  }
});
function EmojiPicker({ onSelect }) {
  const [showEmoji, setShowEmoji] = useState50(false);
  const ref = useEmojiPickerStyles(showEmoji);
  return /* @__PURE__ */ React118.createElement(Popover2.Root, { open: showEmoji, onOpenChange: setShowEmoji }, /* @__PURE__ */ React118.createElement(Popover2.Trigger, { asChild: true, css: { appearance: "none" } }, /* @__PURE__ */ React118.createElement(IconButton, { as: "div" }, /* @__PURE__ */ React118.createElement(EmojiIcon3, null))), /* @__PURE__ */ React118.createElement(Popover2.Portal, null, /* @__PURE__ */ React118.createElement(
    Popover2.Content,
    {
      alignOffset: -40,
      sideOffset: 16,
      align: "end",
      css: {
        p: 0
      }
    },
    /* @__PURE__ */ React118.createElement(
      Box,
      {
        css: {
          minWidth: 352,
          minHeight: 435
        },
        ref
      },
      /* @__PURE__ */ React118.createElement(
        Picker,
        {
          onEmojiSelect: onSelect,
          data: data2,
          previewPosition: "none",
          skinPosition: "search"
        }
      )
    )
  )));
}
var ChatFooter = ({
  onSend,
  children
}) => {
  var _a7, _b7, _c, _d, _e;
  const hmsActions = useHMSActions42();
  const inputRef = useRef24(null);
  const [draftMessage, setDraftMessage] = useChatDraftMessage();
  const isMobile = useMedia18(config.media.md);
  const { elements, screenType } = useRoomLayoutConferencingScreen();
  const message_placeholder = ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.message_placeholder) || "Send a message";
  const localPeer = useHMSStore61(selectLocalPeer5);
  const isOverlayChat = (_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.is_overlay;
  const canDisableChat = !!((_d = (_c = elements == null ? void 0 : elements.chat) == null ? void 0 : _c.real_time_controls) == null ? void 0 : _d.can_disable_chat);
  const selectedPeer = useSubscribeChatSelector(CHAT_SELECTOR.PEER);
  const [selectedRole, setRoleSelector] = useSetSubscribedChatSelector(
    CHAT_SELECTOR.ROLE
  );
  const defaultSelection = useDefaultChatSelection();
  const selection = selectedPeer.name || selectedRole || defaultSelection;
  const isLocalPeerBlacklisted = useIsPeerBlacklisted({ local: true });
  const isMwebHLSStream = useMobileHLSStream();
  const [messageLengthExceeded, setMessageLengthExceeded] = useState50(false);
  const isLandscapeHLSStream = useLandscapeHLSStream();
  useEffect37(() => {
    var _a8, _b8;
    if (!selectedPeer.id && !selectedRole && !["Everyone", ""].includes(defaultSelection)) {
      setRoleSelector(defaultSelection);
    } else {
      if (!(isMobile || isLandscapeHLSStream) && !((_a8 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a8.disable_autofocus)) {
        (_b8 = inputRef.current) == null ? void 0 : _b8.focus();
      }
    }
  }, [
    defaultSelection,
    selectedPeer,
    selectedRole,
    setRoleSelector,
    isMobile,
    isLandscapeHLSStream,
    elements == null ? void 0 : elements.chat
  ]);
  const resetInputHeight = useCallback29(() => {
    if (inputRef.current) {
      inputRef.current.style.height = `${Math.max(
        32,
        inputRef.current.value ? Math.min(inputRef.current.scrollHeight, 24 * 4) : 0
      )}px`;
    }
  }, []);
  const updateInputHeight = useCallback29(() => {
    if (inputRef.current) {
      inputRef.current.style.height = `${Math.max(
        32,
        Math.min(inputRef.current.scrollHeight, 24 * 4)
      )}px`;
    }
  }, []);
  const sendMessage = useCallback29(() => __async(void 0, null, function* () {
    var _a8;
    const message = (_a8 = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a8.value;
    if (!message || !message.trim().length) {
      return;
    }
    try {
      if (selectedRole) {
        yield hmsActions.sendGroupMessage(message, [selectedRole]);
      } else if (selectedPeer.id) {
        yield hmsActions.sendDirectMessage(message, selectedPeer.id);
      } else {
        yield hmsActions.sendBroadcastMessage(message);
      }
      inputRef.current.value = "";
      resetInputHeight();
      setTimeout(() => {
        onSend(1);
      }, 0);
    } catch (error) {
      const err = error;
      ToastManager.addToast({
        title: err.message.startsWith("Invalid peer") ? `${selectedPeer.name} is not in this room` : err.message
      });
    }
  }), [selectedRole, selectedPeer, hmsActions, onSend]);
  useEffect37(() => {
    const messageElement = inputRef.current;
    if (messageElement) {
      messageElement.value = draftMessage;
      updateInputHeight();
      setMessageLengthExceeded(draftMessage.length > CHAT_MESSAGE_LIMIT);
    }
  }, [draftMessage]);
  useEffect37(() => {
    const messageElement = inputRef.current;
    return () => {
      setDraftMessage((messageElement == null ? void 0 : messageElement.value) || "");
    };
  }, [setDraftMessage]);
  if (isLocalPeerBlacklisted) {
    return null;
  }
  return /* @__PURE__ */ React118.createElement(Box, { css: { position: "relative" } }, /* @__PURE__ */ React118.createElement(Flex, null, /* @__PURE__ */ React118.createElement(ChatSelectorContainer, null), canDisableChat && isMobile && isOverlayChat ? /* @__PURE__ */ React118.createElement(
    Flex,
    {
      align: "center",
      justify: "end",
      css: { mb: "$4" },
      onClick: (e) => e.stopPropagation()
    },
    /* @__PURE__ */ React118.createElement(Popover2.Root, null, /* @__PURE__ */ React118.createElement(Popover2.Trigger, { asChild: true }, /* @__PURE__ */ React118.createElement(IconButton, { css: { border: "1px solid $border_bright" } }, /* @__PURE__ */ React118.createElement(VerticalMenuIcon7, { height: "16", width: "16" }))), /* @__PURE__ */ React118.createElement(Popover2.Portal, null, /* @__PURE__ */ React118.createElement(
      Popover2.Content,
      {
        align: "end",
        side: "top",
        onClick: () => {
          const chatState = {
            enabled: false,
            updatedBy: {
              peerId: localPeer == null ? void 0 : localPeer.id,
              userId: localPeer == null ? void 0 : localPeer.customerUserId,
              userName: localPeer == null ? void 0 : localPeer.name
            },
            updatedAt: Date.now()
          };
          hmsActions.sessionStore.set(
            "chatState" /* CHAT_STATE */,
            chatState
          );
        },
        css: {
          backgroundColor: "$surface_default",
          display: "flex",
          alignItems: "center",
          gap: "$4",
          borderRadius: "$1",
          color: "$on_surface_high",
          cursor: "pointer",
          "&:hover": { backgroundColor: "$surface_dim" }
        }
      },
      /* @__PURE__ */ React118.createElement(PauseCircleIcon2, null),
      /* @__PURE__ */ React118.createElement(Text, { variant: "sm", css: { fontWeight: "$semiBold" } }, "Pause Chat")
    )))
  ) : null), selection && /* @__PURE__ */ React118.createElement(
    Flex,
    {
      align: ((_e = inputRef.current) == null ? void 0 : _e.scrollHeight) === 32 ? "center" : "end",
      css: { gap: "$4", w: "100%" }
    },
    /* @__PURE__ */ React118.createElement(
      Flex,
      {
        align: "end",
        css: __spreadValues({
          bg: isOverlayChat && isMobile ? "$surface_dim" : "$surface_default",
          minHeight: "$16",
          position: "relative",
          py: isOverlayChat && isMobile ? "$2" : "$6",
          pl: "$8",
          flexGrow: 1,
          r: "$1",
          "@md": {
            minHeight: "$14",
            boxSizing: "border-box"
          }
        }, isLandscapeHLSStream ? { minHeight: "$14", py: 0 } : {})
      },
      children,
      /* @__PURE__ */ React118.createElement(
        TextArea2,
        {
          maxLength: CHAT_MESSAGE_LIMIT + 10,
          css: {
            c: "$on_surface_high",
            "&:valid ~ .send-msg": { color: "$on_surface_high" },
            "& ~ .send-msg": { color: "$on_surface_low" },
            "&::placeholder": { color: "$on_surface_medium" },
            border: "none"
          },
          placeholder: message_placeholder,
          ref: inputRef,
          required: true,
          autoFocus: !(isMobile || isLandscapeHLSStream),
          onKeyPress: (event) => __async(void 0, null, function* () {
            if (event.key === "Enter") {
              if (!event.shiftKey && !messageLengthExceeded) {
                event.preventDefault();
                yield sendMessage();
              }
            }
          }),
          autoComplete: "off",
          "aria-autocomplete": "none",
          onChange: (e) => {
            updateInputHeight();
            setMessageLengthExceeded(
              e.target.value.length > CHAT_MESSAGE_LIMIT
            );
          },
          onBlur: resetInputHeight,
          onPaste: (e) => e.stopPropagation(),
          onCut: (e) => e.stopPropagation(),
          onCopy: (e) => e.stopPropagation()
        }
      ),
      !isMobile && !isLandscapeHLSStream ? /* @__PURE__ */ React118.createElement(
        EmojiPicker,
        {
          onSelect: (emoji) => {
            if (inputRef.current) {
              inputRef.current.value += ` ${emoji.native} `;
            }
          }
        }
      ) : null,
      /* @__PURE__ */ React118.createElement(
        IconButton,
        {
          className: "send-msg",
          onClick: sendMessage,
          disabled: messageLengthExceeded,
          css: {
            ml: "auto",
            height: "max-content",
            mr: "$4",
            "&:hover": { c: isMobile ? "" : "$on_surface_medium" }
          },
          "data-testid": "send_msg_btn"
        },
        /* @__PURE__ */ React118.createElement(SendIcon2, null)
      )
    ),
    (isMwebHLSStream || isLandscapeHLSStream) && /* @__PURE__ */ React118.createElement(React118.Fragment, null, /* @__PURE__ */ React118.createElement(
      Flex,
      {
        css: {
          alignItems: "center"
        },
        gap: "2"
      },
      /* @__PURE__ */ React118.createElement(RaiseHand, { css: { bg: "$surface_default" } }),
      /* @__PURE__ */ React118.createElement(MoreSettings, { elements, screenType })
    ))
  ), messageLengthExceeded && /* @__PURE__ */ React118.createElement(
    Text,
    {
      variant: "xs",
      css: {
        color: "$alert_error_default",
        fontWeight: "$semiBold",
        mt: "$1",
        ml: "$7"
      }
    },
    "Message cannot exceed 2000 characters"
  ));
};

// src/Prebuilt/components/Chat/ChatStates.tsx
import React119, { useCallback as useCallback30 } from "react";
import {
  selectLocalPeer as selectLocalPeer6,
  selectSessionStore as selectSessionStore7,
  useHMSActions as useHMSActions43,
  useHMSStore as useHMSStore62
} from "@100mslive/react-sdk";
var ChatPaused = () => {
  var _a7, _b7;
  const hmsActions = useHMSActions43();
  const { elements } = useRoomLayoutConferencingScreen();
  const can_disable_chat = !!((_b7 = (_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.real_time_controls) == null ? void 0 : _b7.can_disable_chat);
  const { enabled: isChatEnabled = true, updatedBy: chatStateUpdatedBy = "" } = useHMSStore62(selectSessionStore7("chatState" /* CHAT_STATE */)) || {};
  const localPeer = useHMSStore62(selectLocalPeer6);
  const unPauseChat = useCallback30(
    () => __async(void 0, null, function* () {
      return yield hmsActions.sessionStore.set("chatState" /* CHAT_STATE */, {
        enabled: true,
        updatedBy: {
          userName: localPeer == null ? void 0 : localPeer.name,
          userId: localPeer == null ? void 0 : localPeer.customerUserId,
          peerId: localPeer == null ? void 0 : localPeer.id
        },
        updatedAt: Date.now()
      });
    }),
    [hmsActions, localPeer]
  );
  return isChatEnabled ? null : /* @__PURE__ */ React119.createElement(
    Flex,
    {
      align: "center",
      justify: "between",
      css: {
        borderRadius: "$1",
        bg: "$surface_default",
        p: "$2 $4 $2 $8",
        w: "100%"
      }
    },
    /* @__PURE__ */ React119.createElement(Box, null, /* @__PURE__ */ React119.createElement(
      Text,
      {
        variant: "sm",
        css: { fontWeight: "$semiBold", color: "$on_surface_high" }
      },
      "Chat paused"
    ), /* @__PURE__ */ React119.createElement(
      Text,
      {
        variant: "xs",
        css: {
          color: "$on_surface_medium",
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      },
      "Chat has been paused by",
      " ",
      (chatStateUpdatedBy == null ? void 0 : chatStateUpdatedBy.peerId) === (localPeer == null ? void 0 : localPeer.id) ? "you" : chatStateUpdatedBy == null ? void 0 : chatStateUpdatedBy.userName
    )),
    can_disable_chat ? /* @__PURE__ */ React119.createElement(
      Button,
      {
        css: { fontWeight: "$semiBold", fontSize: "$sm", borderRadius: "$2" },
        onClick: unPauseChat
      },
      "Resume"
    ) : /* @__PURE__ */ React119.createElement(React119.Fragment, null)
  );
};
var ChatBlocked = () => {
  const isLocalPeerBlacklisted = useIsPeerBlacklisted({ local: true });
  if (!isLocalPeerBlacklisted) {
    return null;
  }
  return /* @__PURE__ */ React119.createElement(
    Flex,
    {
      align: "center",
      justify: "between",
      css: {
        borderRadius: "$1",
        bg: "$surface_default",
        p: "$4 $4 $4 $8",
        w: "100%"
      }
    },
    /* @__PURE__ */ React119.createElement(
      Text,
      {
        variant: "sm",
        css: { color: "$on_surface_medium", textAlign: "center", w: "100%" }
      },
      "You've been blocked from sending messages"
    )
  );
};

// src/Prebuilt/components/Chat/PinnedMessage.tsx
import React122, { useEffect as useEffect38, useState as useState51 } from "react";
import { useSwipeable } from "react-swipeable";
import { useMedia as useMedia19 } from "react-use";
import { selectSessionStore as selectSessionStore8, useHMSStore as useHMSStore63 } from "@100mslive/react-sdk";
import { PinIcon as PinIcon2, UnpinIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/Chat/ArrowNavigation.tsx
import React120 from "react";
import { ChevronDownIcon as ChevronDownIcon6, ChevronUpIcon as ChevronUpIcon5 } from "@100mslive/react-icons";
var ArrowNavigation = ({
  total,
  index,
  showPrevious,
  showNext
}) => {
  if (total < 2) {
    return null;
  }
  return /* @__PURE__ */ React120.createElement(Flex, { direction: "column", css: { gap: "$1" } }, /* @__PURE__ */ React120.createElement(
    Flex,
    {
      onClick: showPrevious,
      css: index === 0 ? { cursor: "not-allowed", color: "$on_surface_low" } : { cursor: "pointer", color: "$on_surface_medium" }
    },
    /* @__PURE__ */ React120.createElement(ChevronUpIcon5, { height: 20, width: 20 })
  ), /* @__PURE__ */ React120.createElement(
    Flex,
    {
      onClick: showNext,
      css: index === total - 1 ? { cursor: "not-allowed", color: "$on_surface_low" } : { cursor: "pointer", color: "$on_surface_medium" }
    },
    /* @__PURE__ */ React120.createElement(ChevronDownIcon6, { height: 20, width: 20 })
  ));
};

// src/Prebuilt/components/Chat/StickIndicator.tsx
import React121 from "react";
var StickIndicator = ({
  total,
  index
}) => {
  const sticksCount = Math.min(3, total);
  if (total < 2) {
    return null;
  }
  return /* @__PURE__ */ React121.createElement(Flex, { direction: "column", css: { gap: "$1" } }, [...Array(sticksCount)].map((_, i) => /* @__PURE__ */ React121.createElement(
    Box,
    {
      css: {
        borderLeft: "2px solid",
        height: "$4",
        borderColor: i === index ? "$on_surface_high" : "$on_surface_low"
      }
    }
  )));
};

// src/Prebuilt/components/Chat/PinnedMessage.tsx
var PINNED_MESSAGE_LENGTH = 75;
var PinnedMessage = () => {
  var _a7, _b7, _c, _d;
  const pinnedMessages = useHMSStore63(
    selectSessionStore8("pinnedMessages" /* PINNED_MESSAGES */)
  );
  const [pinnedMessageIndex, setPinnedMessageIndex] = useState51(0);
  const { removePinnedMessage } = usePinnedMessages();
  const isMobile = useMedia19(config.media.md);
  const { elements } = useRoomLayoutConferencingScreen();
  const canUnpinMessage = !!((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.allow_pinning_messages);
  const [hideOverflow, setHideOverflow] = useState51(true);
  const currentPinnedMessage = ((_b7 = pinnedMessages == null ? void 0 : pinnedMessages[pinnedMessageIndex]) == null ? void 0 : _b7.text) || "";
  const canOverflow = currentPinnedMessage.length > PINNED_MESSAGE_LENGTH;
  const showPreviousPinnedMessage = () => {
    const previousIndex = Math.max(pinnedMessageIndex - 1, 0);
    setHideOverflow(
      pinnedMessages[previousIndex].text.length > PINNED_MESSAGE_LENGTH
    );
    setPinnedMessageIndex(previousIndex);
  };
  const showNextPinnedMessage = () => {
    const nextIndex = Math.min(
      pinnedMessageIndex + 1,
      pinnedMessages.length - 1
    );
    setHideOverflow(
      pinnedMessages[nextIndex].text.length > PINNED_MESSAGE_LENGTH
    );
    setPinnedMessageIndex(nextIndex);
  };
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => showNextPinnedMessage(),
    onSwipedDown: () => showPreviousPinnedMessage()
  });
  useEffect38(() => {
    const count = (pinnedMessages == null ? void 0 : pinnedMessages.length) || 1;
    if (pinnedMessageIndex >= count) {
      setPinnedMessageIndex(count - 1);
    }
  }, [pinnedMessageIndex, pinnedMessages]);
  if (!pinnedMessages || pinnedMessages.length === 0) {
    return null;
  }
  return /* @__PURE__ */ React122.createElement(Flex, { align: "center", css: { w: "100%", gap: "$4" } }, !isMobile ? /* @__PURE__ */ React122.createElement(
    ArrowNavigation,
    {
      index: pinnedMessageIndex,
      total: pinnedMessages.length,
      showPrevious: showPreviousPinnedMessage,
      showNext: showNextPinnedMessage
    }
  ) : null, /* @__PURE__ */ React122.createElement(
    Flex,
    {
      css: {
        p: "$4",
        color: "$on_surface_high",
        bg: isMobile && ((_c = elements == null ? void 0 : elements.chat) == null ? void 0 : _c.is_overlay) ? "rgba(0, 0, 0, 0.64)" : "$surface_brighter",
        r: "$1",
        gap: "$4",
        mb: "$8",
        mt: "$8",
        flexGrow: 1,
        border: "1px solid $border_bright"
      },
      align: "center",
      justify: "between"
    },
    isMobile ? /* @__PURE__ */ React122.createElement(
      StickIndicator,
      {
        index: pinnedMessageIndex,
        total: pinnedMessages.length
      }
    ) : null,
    /* @__PURE__ */ React122.createElement(
      Box,
      {
        css: {
          w: "100%",
          maxHeight: "$18",
          overflowY: "auto",
          overflowX: "hidden",
          wordBreak: "break-word",
          "& p span": {
            color: "$primary_default"
          }
        }
      },
      /* @__PURE__ */ React122.createElement(
        Text,
        __spreadProps(__spreadValues({
          variant: "sm",
          css: { color: "$on_surface_high" }
        }, swipeHandlers), {
          title: (_d = pinnedMessages[pinnedMessageIndex]) == null ? void 0 : _d.text
        }),
        /* @__PURE__ */ React122.createElement(
          AnnotisedMessage,
          {
            message: currentPinnedMessage,
            length: hideOverflow ? PINNED_MESSAGE_LENGTH : currentPinnedMessage.length
          }
        ),
        canOverflow ? /* @__PURE__ */ React122.createElement(
          "span",
          {
            style: { cursor: "pointer" },
            onClick: () => setHideOverflow((prev) => !prev)
          },
          "\xA0",
          hideOverflow ? "... See more" : "Collapse"
        ) : null
      )
    ),
    canUnpinMessage ? /* @__PURE__ */ React122.createElement(
      Flex,
      {
        onClick: () => {
          removePinnedMessage(pinnedMessageIndex);
          setPinnedMessageIndex(Math.max(0, pinnedMessageIndex - 1));
        },
        css: {
          cursor: "pointer",
          color: "$on_surface_medium",
          "&:hover": { color: "$on_surface_high" },
          "&:hover .hide-on-hover": { display: "none !important" },
          "&:hover .show-on-hover": { display: "block !important" }
        },
        title: "Unpin Message"
      },
      /* @__PURE__ */ React122.createElement(
        UnpinIcon,
        {
          className: "show-on-hover",
          style: { display: "none" },
          height: 20,
          width: 20
        }
      ),
      /* @__PURE__ */ React122.createElement(
        PinIcon2,
        {
          className: "hide-on-hover",
          style: { display: "block" },
          height: 20,
          width: 20
        }
      )
    ) : null
  ));
};

// src/Prebuilt/components/Chat/Chat.tsx
var Chat = () => {
  var _a7, _b7;
  const { elements, screenType } = useRoomLayoutConferencingScreen();
  const listRef = useRef25(null);
  const hmsActions = useHMSActions44();
  const vanillaStore = useHMSVanillaStore11();
  const { enabled: isChatEnabled = true } = useHMSStore64(selectSessionStore9("chatState" /* CHAT_STATE */)) || {};
  const isMobile = useMedia20(config.media.md);
  const isMobileHLSStream = useMobileHLSStream();
  const isLandscapeStream = useLandscapeHLSStream();
  useSidepaneResetOnLayoutUpdate("chat", SIDE_PANE_OPTIONS.CHAT);
  const isLocalPeerBlacklisted = useIsPeerBlacklisted({ local: true });
  const scrollToBottom = useCallback31(
    (unreadCount = 0) => {
      var _a8;
      if (listRef.current && listRef.current.scrollToItem && unreadCount > 0) {
        const messagesCount = vanillaStore.getState(selectHMSMessagesCount);
        (_a8 = listRef.current) == null ? void 0 : _a8.scrollToItem(messagesCount, "end");
        requestAnimationFrame(() => {
          var _a9;
          (_a9 = listRef.current) == null ? void 0 : _a9.scrollToItem(messagesCount, "end");
        });
        hmsActions.setMessageRead(true);
      }
    },
    [hmsActions, vanillaStore]
  );
  const streaming = isMobileHLSStream || isLandscapeStream;
  return /* @__PURE__ */ React123.createElement(
    Flex,
    {
      direction: "column",
      justify: "end",
      css: {
        size: "100%",
        gap: "$4"
      }
    },
    isMobile && ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay) && !streaming ? null : /* @__PURE__ */ React123.createElement(PinnedMessage, null),
    /* @__PURE__ */ React123.createElement(ChatBody, { ref: listRef, scrollToBottom }),
    /* @__PURE__ */ React123.createElement(Flex, { align: "center", css: { w: "100%", gap: "$2" } }, /* @__PURE__ */ React123.createElement(ChatPaused, null), /* @__PURE__ */ React123.createElement(ChatBlocked, null), streaming && (!isChatEnabled || isLocalPeerBlacklisted) && /* @__PURE__ */ React123.createElement(React123.Fragment, null, /* @__PURE__ */ React123.createElement(RaiseHand, { css: { bg: "$surface_default" } }), /* @__PURE__ */ React123.createElement(MoreSettings, { elements, screenType }))),
    isMobile && ((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.is_overlay) && !streaming ? /* @__PURE__ */ React123.createElement(PinnedMessage, null) : null,
    isChatEnabled ? /* @__PURE__ */ React123.createElement(ChatFooter, { onSend: scrollToBottom }, /* @__PURE__ */ React123.createElement(
      NewMessageIndicator,
      {
        scrollToBottom,
        listRef
      }
    )) : null,
    streaming && /* @__PURE__ */ React123.createElement(
      Box,
      {
        css: __spreadValues({
          position: "absolute"
        }, match10({
          isLandscapeStream,
          isMobileHLSStream,
          isChatEnabled,
          isLocalPeerBlacklisted
        }).with(
          {
            isLandscapeStream: true,
            isChatEnabled: true
          },
          () => ({ bottom: "$19", right: "$10" })
        ).with(
          {
            isLandscapeStream: true,
            isChatEnabled: false
          },
          () => ({ bottom: "$20", right: "$10" })
        ).with(
          {
            isMobileHLSStream: true,
            isChatEnabled: false
          },
          () => ({ bottom: "$19", right: "$8" })
        ).with(
          {
            isMobileHLSStream: true,
            isChatEnabled: true,
            isLocalPeerBlacklisted: false
          },
          () => ({ bottom: "$17", right: "$8" })
        ).with(
          {
            isLandscapeStream: false,
            isChatEnabled: true,
            isLocalPeerBlacklisted: true
          },
          () => ({ bottom: "$18", right: "$8" })
        ).with(
          {
            isMobileHLSStream: true,
            isLocalPeerBlacklisted: true
          },
          () => ({ bottom: "$20", right: "$8" })
        ).otherwise(() => ({})))
      },
      /* @__PURE__ */ React123.createElement(EmojiReaction, null)
    )
  );
};
var NewMessageIndicator = ({
  scrollToBottom,
  listRef
}) => {
  const unreadCount = useHMSStore64(selectUnreadHMSMessagesCount5);
  if (!unreadCount || !listRef.current) {
    return null;
  }
  const outerElement = listRef.current._outerRef;
  if (outerElement && outerElement.clientHeight + outerElement.scrollTop + outerElement.offsetTop >= outerElement.scrollHeight) {
    return null;
  }
  return /* @__PURE__ */ React123.createElement(
    Flex,
    {
      justify: "center",
      css: {
        width: "100%",
        left: 0,
        bottom: "$28",
        position: "absolute"
      }
    },
    /* @__PURE__ */ React123.createElement(
      Button,
      {
        variant: "standard",
        onClick: () => {
          scrollToBottom(unreadCount);
        },
        icon: true,
        css: {
          p: "$3 $4",
          pl: "$6",
          "& > svg": { ml: "$4" },
          borderRadius: "$round",
          fontSize: "$xs",
          fontWeight: "$semiBold",
          c: "$on_secondary_high"
        }
      },
      "New ",
      unreadCount === 1 ? "message" : "messages",
      /* @__PURE__ */ React123.createElement(ChevronDownIcon7, { height: 16, width: 16 })
    )
  );
};

// src/Prebuilt/components/Footer/PaginatedParticipants.tsx
import React124, { useEffect as useEffect39, useState as useState52 } from "react";
import { useInView } from "react-intersection-observer";
import { useMeasure as useMeasure2 } from "react-use";
import { VariableSizeList as VariableSizeList2 } from "react-window";
import {
  selectIsConnectedToRoom as selectIsConnectedToRoom8,
  useHMSStore as useHMSStore65,
  usePaginatedParticipants as usePaginatedParticipants2
} from "@100mslive/react-sdk";
import { ChevronLeftIcon as ChevronLeftIcon6, CrossIcon as CrossIcon22 } from "@100mslive/react-icons";
var LoadMoreParticipants = ({
  hasNext,
  loadMore,
  style
}) => {
  const { ref, inView } = useInView();
  const [inProgress, setInProgress] = useState52(false);
  useEffect39(() => {
    if (hasNext && inView && !inProgress) {
      setInProgress(true);
      loadMore().catch(console.error).finally(() => setInProgress(false));
    }
  }, [hasNext, loadMore, inView, inProgress]);
  return /* @__PURE__ */ React124.createElement(Flex, { ref, style, align: "center", justify: "center" }, inProgress ? /* @__PURE__ */ React124.createElement(Loading, { size: 16 }) : null);
};
var VirtualizedParticipantItem2 = React124.memo(
  ({
    index,
    data: data3,
    style
  }) => {
    if (!data3.peerList[index]) {
      return /* @__PURE__ */ React124.createElement(
        LoadMoreParticipants,
        {
          hasNext: data3.hasNext,
          loadMore: data3.loadMorePeers,
          style
        }
      );
    }
    return /* @__PURE__ */ React124.createElement(
      Participant,
      {
        key: data3.peerList[index].id,
        peer: data3.peerList[index],
        isConnected: data3.isConnected,
        style
      }
    );
  }
);
var PaginatedParticipants = ({
  roleName,
  onBack
}) => {
  const { peers, total, hasNext, loadPeers, loadMorePeers } = usePaginatedParticipants2({ role: roleName, limit: 20 });
  const [search, setSearch] = useState52("");
  const filteredPeers = peers.filter(
    (p) => {
      var _a7;
      return (_a7 = p.name) == null ? void 0 : _a7.toLowerCase().includes(search == null ? void 0 : search.toLowerCase());
    }
  );
  const isConnected = useHMSStore65(selectIsConnectedToRoom8);
  const [ref, { width }] = useMeasure2();
  const height = ROW_HEIGHT * (filteredPeers.length + 1);
  const resetSidePane = useSidepaneReset();
  useEffect39(() => {
    loadPeers();
  }, []);
  return /* @__PURE__ */ React124.createElement(Flex, { ref, direction: "column", css: { size: "100%", gap: "$4" } }, /* @__PURE__ */ React124.createElement(Flex, { align: "center" }, /* @__PURE__ */ React124.createElement(
    Flex,
    {
      align: "center",
      css: { flex: "1 1 0", cursor: "pointer" },
      onClick: onBack
    },
    /* @__PURE__ */ React124.createElement(ChevronLeftIcon6, null),
    /* @__PURE__ */ React124.createElement(Text, { variant: "lg", css: { flex: "1 1 0" } }, "Participants")
  ), /* @__PURE__ */ React124.createElement(
    IconButton,
    {
      onClick: (e) => {
        e.stopPropagation();
        resetSidePane();
      },
      "data-testid": "close_sidepane"
    },
    /* @__PURE__ */ React124.createElement(CrossIcon22, null)
  )), /* @__PURE__ */ React124.createElement(
    ParticipantSearch,
    {
      onSearch: (search2) => setSearch(search2),
      placeholder: `Search for ${roleName}`
    }
  ), /* @__PURE__ */ React124.createElement(
    Flex,
    {
      direction: "column",
      css: {
        border: "1px solid $border_default",
        borderRadius: "$1",
        flex: "1 1 0"
      }
    },
    /* @__PURE__ */ React124.createElement(
      Flex,
      {
        align: "center",
        css: {
          height: ROW_HEIGHT,
          borderBottom: "1px solid $border_default",
          px: "$8"
        }
      },
      /* @__PURE__ */ React124.createElement(Text, { css: { fontSize: "$space$7" } }, roleName, "(", getFormattedCount(peers.length), "/", getFormattedCount(total), ")")
    ),
    /* @__PURE__ */ React124.createElement(
      Box,
      {
        css: {
          flex: "1 1 0",
          overflowY: "auto",
          overflowX: "hidden",
          mr: "-$10"
        }
      },
      /* @__PURE__ */ React124.createElement(
        VariableSizeList2,
        {
          itemSize: (index) => index === filteredPeers.length + 1 ? 16 : ROW_HEIGHT,
          itemData: {
            peerList: filteredPeers,
            hasNext: hasNext(),
            loadMorePeers,
            isConnected: isConnected === true
          },
          itemKey,
          itemCount: filteredPeers.length + 1,
          width,
          height
        },
        VirtualizedParticipantItem2
      )
    )
  ));
};

// src/Prebuilt/components/ChatSettings.tsx
import React125 from "react";
import {
  selectLocalPeer as selectLocalPeer7,
  selectSessionStore as selectSessionStore10,
  useHMSActions as useHMSActions45,
  useHMSStore as useHMSStore66
} from "@100mslive/react-sdk";
import { PauseCircleIcon as PauseCircleIcon3, SettingsIcon as SettingsIcon5 } from "@100mslive/react-icons";
var ChatSettings = () => {
  var _a7, _b7;
  const hmsActions = useHMSActions45();
  const localPeer = useHMSStore66(selectLocalPeer7);
  const { elements } = useRoomLayoutConferencingScreen();
  const canPauseChat = !!((_b7 = (_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.real_time_controls) == null ? void 0 : _b7.can_disable_chat);
  const { enabled: isChatEnabled = true } = useHMSStore66(selectSessionStore10("chatState" /* CHAT_STATE */)) || {};
  const showPause = canPauseChat && isChatEnabled;
  if (!showPause) {
    return null;
  }
  return /* @__PURE__ */ React125.createElement(Popover2.Root, null, /* @__PURE__ */ React125.createElement(Popover2.Trigger, { asChild: true, css: { px: "$4" } }, /* @__PURE__ */ React125.createElement(
    Flex,
    {
      align: "center",
      css: {
        color: "$on_surface_medium",
        "&:hover": { color: "$on_surface_high" },
        cursor: "pointer"
      }
    },
    /* @__PURE__ */ React125.createElement(SettingsIcon5, null)
  )), /* @__PURE__ */ React125.createElement(Popover2.Portal, null, /* @__PURE__ */ React125.createElement(
    Popover2.Content,
    {
      align: "end",
      side: "bottom",
      sideOffset: 2,
      onClick: () => {
        const chatState = {
          enabled: false,
          updatedBy: {
            peerId: localPeer == null ? void 0 : localPeer.id,
            userId: localPeer == null ? void 0 : localPeer.customerUserId,
            userName: localPeer == null ? void 0 : localPeer.name
          },
          updatedAt: Date.now()
        };
        hmsActions.sessionStore.set(
          "chatState" /* CHAT_STATE */,
          chatState
        );
      },
      css: {
        backgroundColor: "$surface_default",
        display: "flex",
        alignItems: "center",
        gap: "$4",
        borderRadius: "$1",
        color: "$on_surface_high",
        cursor: "pointer",
        "&:hover": { backgroundColor: "$surface_dim" }
      }
    },
    /* @__PURE__ */ React125.createElement(PauseCircleIcon3, null),
    /* @__PURE__ */ React125.createElement(Text, { variant: "sm", css: { fontWeight: "$semiBold" } }, "Pause Chat")
  )));
};

// src/Prebuilt/components/SidePaneTabs.tsx
var tabTriggerCSS = {
  color: "$on_surface_low",
  p: "$4",
  fontWeight: "$semiBold",
  fontSize: "$sm",
  w: "100%",
  justifyContent: "center",
  '&[data-state="active"]': {
    color: "$on_surface_high"
  }
};
var ParticipantCount2 = ({ count }) => {
  return count < 1e3 ? /* @__PURE__ */ React126.createElement("span", null, "(", count, ")") : /* @__PURE__ */ React126.createElement(Tooltip, { title: count }, /* @__PURE__ */ React126.createElement("span", null, "(", getFormattedCount(count), ")"));
};
var SidePaneTabs = React126.memo(({ active = SIDE_PANE_OPTIONS.CHAT, hideTab = false }) => {
  var _a7, _b7;
  const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
  const toggleParticipants = useSidepaneToggle(SIDE_PANE_OPTIONS.PARTICIPANTS);
  const resetSidePane = useSidepaneReset();
  const [activeTab, setActiveTab] = useState53(active);
  const [activeRole, setActiveRole] = useState53("");
  const peerCount = useHMSStore67(selectPeerCount5);
  const { elements, screenType } = useRoomLayoutConferencingScreen();
  const chat_title = ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.chat_title) || "Chat";
  const showChat = !!(elements == null ? void 0 : elements.chat);
  const showParticipants = !!(elements == null ? void 0 : elements.participant_list);
  const hideTabs = !(showChat && showParticipants) || hideTab;
  const isMobile = useMedia21(config.media.md);
  const isOverlayChat = !!((_b7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _b7.is_overlay) && isMobile;
  const { off_stage_roles = [] } = (elements == null ? void 0 : elements.on_stage_exp) || {};
  const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
  const showChatSettings = showChat && isChatOpen && (!isMobile || !isOverlayChat);
  useEffect40(() => {
    match11({ activeTab, showChat, showParticipants }).with(
      {
        activeTab: SIDE_PANE_OPTIONS.CHAT,
        showChat: false,
        showParticipants: true
      },
      () => {
        setActiveTab(SIDE_PANE_OPTIONS.PARTICIPANTS);
      }
    ).with(
      {
        activeTab: SIDE_PANE_OPTIONS.PARTICIPANTS,
        showChat: true,
        showParticipants: false
      },
      () => {
        setActiveTab(SIDE_PANE_OPTIONS.CHAT);
      }
    ).with({ showChat: false, showParticipants: false }, () => {
      resetSidePane();
    });
  }, [showChat, activeTab, showParticipants, resetSidePane]);
  useEffect40(() => {
    setActiveTab(active);
  }, [active]);
  if (activeRole) {
    return /* @__PURE__ */ React126.createElement(
      Flex,
      {
        direction: "column",
        css: {
          color: "$on_primary_high",
          h: "100%",
          transition: "margin 0.3s ease-in-out",
          position: "relative"
        }
      },
      /* @__PURE__ */ React126.createElement(
        Box,
        {
          css: {
            position: "absolute",
            left: 0,
            top: 0,
            size: "100%",
            zIndex: 21,
            bg: "$surface_dim"
          }
        },
        /* @__PURE__ */ React126.createElement(
          PaginatedParticipants,
          {
            roleName: activeRole,
            onBack: () => setActiveRole("")
          }
        )
      )
    );
  }
  return /* @__PURE__ */ React126.createElement(
    Flex,
    {
      direction: "column",
      css: {
        color: "$on_primary_high",
        h: "100%",
        transition: "margin 0.3s ease-in-out"
      }
    },
    match11({ isOverlayChat, isChatOpen, showChat, hideTabs }).with({ isOverlayChat: true, isChatOpen: true, showChat: true }, () => /* @__PURE__ */ React126.createElement(Chat, null)).with({ hideTabs: true }, () => {
      return /* @__PURE__ */ React126.createElement(React126.Fragment, null, /* @__PURE__ */ React126.createElement(
        Flex,
        {
          justify: "between",
          css: { w: "100%", "&:empty": { display: "none" } }
        },
        /* @__PURE__ */ React126.createElement(
          Text,
          {
            variant: "sm",
            css: {
              fontWeight: "$semiBold",
              p: "$4",
              c: "$on_surface_high",
              pr: "$12",
              "&:empty": { display: "none" }
            }
          },
          activeTab === SIDE_PANE_OPTIONS.CHAT ? screenType !== "hls_live_streaming" && chat_title : /* @__PURE__ */ React126.createElement("span", null, "Participants\xA0", /* @__PURE__ */ React126.createElement(ParticipantCount2, { count: peerCount }))
        ),
        /* @__PURE__ */ React126.createElement(Flex, null, showChatSettings ? /* @__PURE__ */ React126.createElement(ChatSettings, null) : null, isOverlayChat && isChatOpen ? null : /* @__PURE__ */ React126.createElement(
          IconButton,
          {
            css: {
              my: "$1",
              color: "$on_surface_medium",
              "&:hover": { color: "$on_surface_high" },
              "&:empty": { display: "none" }
            },
            onClick: (e) => {
              e.stopPropagation();
              if (activeTab === SIDE_PANE_OPTIONS.CHAT) {
                toggleChat();
              } else {
                toggleParticipants();
              }
            },
            "data-testid": "close_chat"
          },
          screenType === "hls_live_streaming" && isChatOpen ? null : /* @__PURE__ */ React126.createElement(CrossIcon23, null)
        ))
      ), activeTab === SIDE_PANE_OPTIONS.CHAT ? /* @__PURE__ */ React126.createElement(Chat, null) : /* @__PURE__ */ React126.createElement(
        ParticipantList,
        {
          offStageRoles: off_stage_roles,
          onActive: setActiveRole
        }
      ));
    }).otherwise(() => {
      return /* @__PURE__ */ React126.createElement(
        Tabs.Root,
        {
          value: activeTab,
          onValueChange: setActiveTab,
          css: {
            flexDirection: "column",
            size: "100%"
          }
        },
        /* @__PURE__ */ React126.createElement(Flex, { css: { w: "100%" } }, /* @__PURE__ */ React126.createElement(
          Tabs.List,
          {
            css: {
              flexGrow: 1,
              borderRadius: "$2",
              bg: "$surface_default"
            }
          },
          /* @__PURE__ */ React126.createElement(
            Tabs.Trigger,
            {
              value: SIDE_PANE_OPTIONS.CHAT,
              onClick: toggleChat,
              css: tabTriggerCSS
            },
            chat_title
          ),
          /* @__PURE__ */ React126.createElement(
            Tabs.Trigger,
            {
              value: SIDE_PANE_OPTIONS.PARTICIPANTS,
              onClick: toggleParticipants,
              css: tabTriggerCSS
            },
            "Participants\xA0",
            /* @__PURE__ */ React126.createElement(ParticipantCount2, { count: peerCount })
          )
        ), showChatSettings ? /* @__PURE__ */ React126.createElement(ChatSettings, null) : null, isOverlayChat && isChatOpen ? null : /* @__PURE__ */ React126.createElement(
          IconButton,
          {
            css: {
              my: "$1",
              color: "$on_surface_medium",
              "&:hover": { color: "$on_surface_high" }
            },
            onClick: (e) => {
              e.stopPropagation();
              if (activeTab === SIDE_PANE_OPTIONS.CHAT) {
                toggleChat();
              } else {
                toggleParticipants();
              }
            },
            "data-testid": "close_chat"
          },
          /* @__PURE__ */ React126.createElement(CrossIcon23, null)
        )),
        /* @__PURE__ */ React126.createElement(
          Tabs.Content,
          {
            value: SIDE_PANE_OPTIONS.PARTICIPANTS,
            css: { p: 0 }
          },
          /* @__PURE__ */ React126.createElement(
            ParticipantList,
            {
              offStageRoles: off_stage_roles,
              onActive: setActiveRole
            }
          )
        ),
        /* @__PURE__ */ React126.createElement(Tabs.Content, { value: SIDE_PANE_OPTIONS.CHAT, css: { p: 0 } }, /* @__PURE__ */ React126.createElement(Chat, null))
      );
    })
  );
});

// src/Prebuilt/components/VideoTile.tsx
import React130, { useCallback as useCallback32, useMemo as useMemo14, useState as useState55 } from "react";
import { useMeasure as useMeasure3 } from "react-use";
import {
  selectAudioTrackByPeerID as selectAudioTrackByPeerID2,
  selectHasPeerHandRaised as selectHasPeerHandRaised3,
  selectIsPeerAudioEnabled as selectIsPeerAudioEnabled2,
  selectLocalPeerID as selectLocalPeerID14,
  selectPeerMetadata as selectPeerMetadata4,
  selectPeerNameByID as selectPeerNameByID5,
  selectVideoTrackByID as selectVideoTrackByID3,
  selectVideoTrackByPeerID as selectVideoTrackByPeerID3,
  useHMSStore as useHMSStore71
} from "@100mslive/react-sdk";
import { BrbTileIcon, HandIcon as HandIcon5, MicOffIcon as MicOffIcon6 } from "@100mslive/react-icons";

// src/Prebuilt/components/Connection/TileConnection.tsx
import React127 from "react";
import {
  HMSPeerType as HMSPeerType4,
  selectPeerTypeByID as selectPeerTypeByID2,
  selectScreenShareByPeerID,
  selectSessionStore as selectSessionStore11,
  useHMSStore as useHMSStore68
} from "@100mslive/react-sdk";
import {
  CallIcon as CallIcon2,
  PinIcon as PinIcon3,
  ShareScreenIcon as ShareScreenIcon2,
  SpotlightIcon
} from "@100mslive/react-icons";
var TileConnection = ({
  name,
  peerId,
  hideLabel,
  width,
  pinned
}) => {
  const spotlighted = useHMSStore68(selectSessionStore11("spotlight" /* SPOTLIGHT */)) === peerId;
  const isPeerScreenSharing = !!useHMSStore68(selectScreenShareByPeerID(peerId));
  const peerType = useHMSStore68(selectPeerTypeByID2(peerId));
  return /* @__PURE__ */ React127.createElement(Wrapper2, null, !hideLabel ? /* @__PURE__ */ React127.createElement(React127.Fragment, null, name ? /* @__PURE__ */ React127.createElement(Flex, { align: "center" }, peerType === HMSPeerType4.SIP && /* @__PURE__ */ React127.createElement(IconWrapper, null, /* @__PURE__ */ React127.createElement(CallIcon2, { width: "15", height: "15" })), isPeerScreenSharing && /* @__PURE__ */ React127.createElement(IconWrapper, null, /* @__PURE__ */ React127.createElement(ShareScreenIcon2, { width: "15", height: "15" })), pinned && /* @__PURE__ */ React127.createElement(IconWrapper, null, /* @__PURE__ */ React127.createElement(PinIcon3, { width: "15", height: "15" })), spotlighted && /* @__PURE__ */ React127.createElement(IconWrapper, null, /* @__PURE__ */ React127.createElement(SpotlightIcon, { width: "15", height: "15" })), /* @__PURE__ */ React127.createElement(
    Text,
    {
      css: __spreadValues({
        c: "$on_surface_high",
        verticalAlign: "baseline"
      }, width ? textEllipsis(width - 60) : {}),
      variant: "xs"
    },
    name
  )) : null, /* @__PURE__ */ React127.createElement(ConnectionIndicator, { isTile: true, peerId, hideBg: true })) : null);
};
var IconWrapper = styled("div", {
  c: "$on_surface_high",
  ml: "$3",
  mt: "$1",
  display: "flex"
});
var Wrapper2 = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  bottom: "$2",
  left: "$2",
  backgroundColor: "$background_dim",
  borderRadius: "$1",
  maxWidth: "85%",
  zIndex: 1,
  "& p,span": {
    p: "$2 $3"
  }
});
var TileConnection_default = TileConnection;

// src/Prebuilt/components/TileMenu/TileMenu.tsx
import React129, { useState as useState54 } from "react";
import { useMedia as useMedia23 } from "react-use";
import {
  selectLocalPeerID as selectLocalPeerID13,
  selectPeerByID as selectPeerByID2,
  selectPermissions as selectPermissions19,
  selectTrackByID as selectTrackByID3,
  selectVideoTrackByPeerID as selectVideoTrackByPeerID2,
  useHMSStore as useHMSStore70,
  useRemoteAVToggle as useRemoteAVToggle2
} from "@100mslive/react-sdk";
import { CrossIcon as CrossIcon24, VerticalMenuIcon as VerticalMenuIcon8 } from "@100mslive/react-icons";

// src/Prebuilt/components/TileMenu/TileMenuContent.tsx
import React128, { Fragment as Fragment11 } from "react";
import { useMedia as useMedia22 } from "react-use";
import {
  selectAvailableRoleNames as selectAvailableRoleNames6,
  selectPermissions as selectPermissions18,
  selectSessionStore as selectSessionStore12,
  selectTrackByID as selectTrackByID2,
  useCustomEvent as useCustomEvent2,
  useHMSActions as useHMSActions46,
  useHMSStore as useHMSStore69,
  useRemoteAVToggle
} from "@100mslive/react-sdk";
import {
  MicOffIcon as MicOffIcon5,
  MicOnIcon as MicOnIcon4,
  PencilIcon,
  PersonSettingsIcon as PersonSettingsIcon2,
  PinIcon as PinIcon4,
  RemoveUserIcon as RemoveUserIcon2,
  ShareScreenIcon as ShareScreenIcon3,
  ShrinkIcon,
  SpeakerIcon as SpeakerIcon3,
  StarIcon as StarIcon2,
  VideoOffIcon as VideoOffIcon3,
  VideoOnIcon as VideoOnIcon4
} from "@100mslive/react-icons";

// src/Prebuilt/components/TileMenu/utils.ts
var getDragClassName = () => {
  return (navigator == null ? void 0 : navigator.maxTouchPoints) > 0 ? "__cancel-drag-event" : "";
};

// src/Prebuilt/components/TileMenu/TileMenuContent.tsx
var isSameTile = ({
  trackId,
  videoTrackID,
  audioTrackID
}) => !!trackId && (!!videoTrackID && videoTrackID === trackId || !!audioTrackID && audioTrackID === trackId);
var spacingCSS = {
  "@md": { my: "$8", fontWeight: "$semiBold", fontSize: "sm" }
};
var SpotlightActions = ({
  peerId,
  onSpotLightClick = () => {
    return;
  }
}) => {
  const hmsActions = useHMSActions46();
  const spotlightPeerId = useHMSStore69(
    selectSessionStore12("spotlight" /* SPOTLIGHT */)
  );
  const isTileSpotlighted = spotlightPeerId === peerId;
  const dragClassName = getDragClassName();
  const setSpotlightPeerId = (peerIdToSpotlight) => hmsActions.sessionStore.set("spotlight" /* SPOTLIGHT */, peerIdToSpotlight).catch(
    (err) => ToastManager.addToast({ title: err.description })
  );
  return /* @__PURE__ */ React128.createElement(
    StyledMenuTile.ItemButton,
    {
      className: dragClassName,
      css: spacingCSS,
      onClick: () => {
        if (isTileSpotlighted) {
          setSpotlightPeerId();
        } else {
          setSpotlightPeerId(peerId);
        }
        onSpotLightClick();
      }
    },
    /* @__PURE__ */ React128.createElement(StarIcon2, { height: 20, width: 20 }),
    /* @__PURE__ */ React128.createElement("span", null, isTileSpotlighted ? "Remove from Spotlight" : "Spotlight Tile for everyone")
  );
};
var PinActions = ({
  audioTrackID,
  videoTrackID
}) => {
  const [pinnedTrackId, setPinnedTrackId] = useSetAppDataByKey(
    APP_DATA.pinnedTrackId
  );
  const dragClassName = getDragClassName();
  const isTilePinned = isSameTile({
    trackId: pinnedTrackId,
    videoTrackID,
    audioTrackID
  });
  return /* @__PURE__ */ React128.createElement(React128.Fragment, null, /* @__PURE__ */ React128.createElement(
    StyledMenuTile.ItemButton,
    {
      className: dragClassName,
      css: spacingCSS,
      onClick: () => isTilePinned ? setPinnedTrackId() : setPinnedTrackId(videoTrackID || audioTrackID)
    },
    /* @__PURE__ */ React128.createElement(PinIcon4, { height: 20, width: 20 }),
    /* @__PURE__ */ React128.createElement("span", null, isTilePinned ? "Unpin" : "Pin", " Tile for myself")
  ));
};
var MinimiseInset = () => {
  const [minimised, setMinimised] = useSetAppDataByKey(APP_DATA.minimiseInset);
  const dragClassName = getDragClassName();
  return /* @__PURE__ */ React128.createElement(React128.Fragment, null, /* @__PURE__ */ React128.createElement(
    StyledMenuTile.ItemButton,
    {
      className: dragClassName,
      css: spacingCSS,
      onClick: () => setMinimised(!minimised)
    },
    /* @__PURE__ */ React128.createElement(ShrinkIcon, { height: 20, width: 20 }),
    /* @__PURE__ */ React128.createElement("span", null, minimised ? "Show" : "Minimise", " your video")
  ));
};
var SimulcastLayers = ({ trackId }) => {
  var _a7;
  const track = useHMSStore69(
    selectTrackByID2(trackId)
  );
  const actions = useHMSActions46();
  const bg = useDropdownSelection();
  if (!((_a7 = track == null ? void 0 : track.layerDefinitions) == null ? void 0 : _a7.length) || track.degraded || !track.enabled) {
    return null;
  }
  const currentLayer = track.layerDefinitions.find(
    (layer) => layer.layer === track.layer
  );
  const dragClassName = getDragClassName();
  return /* @__PURE__ */ React128.createElement(Fragment11, null, /* @__PURE__ */ React128.createElement(
    StyledMenuTile.ItemButton,
    {
      className: dragClassName,
      css: { color: "$on_surface_medium", cursor: "default" }
    },
    "Select maximum resolution"
  ), track.layerDefinitions.map((layer) => {
    return /* @__PURE__ */ React128.createElement(
      StyledMenuTile.ItemButton,
      {
        className: dragClassName,
        key: layer.layer,
        onClick: () => __async(void 0, null, function* () {
          yield actions.setPreferredLayer(trackId, layer.layer);
        }),
        css: {
          justifyContent: "space-between",
          bg: track.preferredLayer === layer.layer ? bg : void 0,
          "&:hover": {
            bg: track.preferredLayer === layer.layer ? bg : void 0
          }
        }
      },
      /* @__PURE__ */ React128.createElement(
        Text,
        {
          as: "span",
          css: {
            textTransform: "capitalize",
            mr: "$2",
            fontWeight: track.preferredLayer === layer.layer ? "$semiBold" : "$regular",
            color: track.preferredLayer === layer.layer ? "$on_primary_high" : "$on_surface_high"
          }
        },
        layer.layer
      ),
      /* @__PURE__ */ React128.createElement(
        Text,
        {
          as: "span",
          variant: "xs",
          css: {
            color: track.preferredLayer === layer.layer ? "$on_primary_high" : "$on_surface_high"
          }
        },
        layer.resolution.width,
        "x",
        layer.resolution.height
      )
    );
  }), /* @__PURE__ */ React128.createElement(StyledMenuTile.ItemButton, { className: dragClassName }, /* @__PURE__ */ React128.createElement(Text, { as: "span", variant: "xs", css: { color: "$on_surface_medium" } }, "Currently streaming:", /* @__PURE__ */ React128.createElement(
    Text,
    {
      as: "span",
      variant: "xs",
      css: {
        fontWeight: "$semiBold",
        textTransform: "capitalize",
        color: "$on_surface_medium",
        ml: "$2"
      }
    },
    currentLayer ? /* @__PURE__ */ React128.createElement(React128.Fragment, null, track.layer, " (", currentLayer.resolution.width, "x", currentLayer.resolution.height, ")") : "-"
  ))));
};
var TileMenuContent = ({
  videoTrackID,
  audioTrackID,
  isLocal,
  isScreenshare,
  showSpotlight,
  showPinAction,
  peerID,
  canMinimise,
  closeSheetOnClick = () => {
    return;
  },
  openNameChangeModal = () => {
    return;
  },
  openRoleChangeModal = () => {
    return;
  }
}) => {
  const actions = useHMSActions46();
  const dragClassName = getDragClassName();
  const permissions = useHMSStore69(selectPermissions18);
  const canChangeRole = !!(permissions == null ? void 0 : permissions.changeRole);
  const removeOthers = !!(permissions == null ? void 0 : permissions.removeOthers);
  const { userName } = useHMSPrebuiltContext();
  const roles = useHMSStore69(selectAvailableRoleNames6);
  const {
    isAudioEnabled,
    isVideoEnabled,
    setVolume,
    toggleAudio,
    toggleVideo,
    volume
  } = useRemoteAVToggle(audioTrackID, videoTrackID);
  const { sendEvent } = useCustomEvent2({
    type: REMOTE_STOP_SCREENSHARE_TYPE
  });
  const isMobile = useMedia22(config.media.md);
  if (isLocal) {
    return showPinAction || canMinimise || !userName || showSpotlight ? /* @__PURE__ */ React128.createElement(React128.Fragment, null, showPinAction && /* @__PURE__ */ React128.createElement(PinActions, { audioTrackID, videoTrackID }), showSpotlight && /* @__PURE__ */ React128.createElement(
      SpotlightActions,
      {
        peerId: peerID,
        onSpotLightClick: () => closeSheetOnClick()
      }
    ), canMinimise && /* @__PURE__ */ React128.createElement(MinimiseInset, null), !userName && /* @__PURE__ */ React128.createElement(
      StyledMenuTile.ItemButton,
      {
        className: dragClassName,
        onClick: () => {
          openNameChangeModal();
          closeSheetOnClick();
        }
      },
      /* @__PURE__ */ React128.createElement(PencilIcon, { height: 20, width: 20 }),
      /* @__PURE__ */ React128.createElement(
        Text,
        {
          variant: "sm",
          css: {
            "@md": { fontWeight: "$semiBold" },
            c: "$on_surface_high"
          }
        },
        "Change Name"
      )
    )) : null;
  }
  return /* @__PURE__ */ React128.createElement(React128.Fragment, null, toggleVideo ? /* @__PURE__ */ React128.createElement(
    StyledMenuTile.ItemButton,
    {
      className: dragClassName,
      css: spacingCSS,
      onClick: () => {
        toggleVideo();
        closeSheetOnClick();
      },
      "data-testid": isVideoEnabled ? "mute_video_participant_btn" : "unmute_video_participant_btn"
    },
    isVideoEnabled ? /* @__PURE__ */ React128.createElement(VideoOnIcon4, { height: 20, width: 20 }) : /* @__PURE__ */ React128.createElement(VideoOffIcon3, { height: 20, width: 20 }),
    /* @__PURE__ */ React128.createElement("span", null, isVideoEnabled ? "Mute Video" : "Request to Unmute Video")
  ) : null, toggleAudio ? /* @__PURE__ */ React128.createElement(
    StyledMenuTile.ItemButton,
    {
      css: spacingCSS,
      className: dragClassName,
      onClick: () => {
        toggleAudio();
        closeSheetOnClick();
      },
      "data-testid": isAudioEnabled ? "mute_audio_participant_btn" : "unmute_audio_participant_btn"
    },
    isAudioEnabled ? /* @__PURE__ */ React128.createElement(MicOnIcon4, { height: 20, width: 20 }) : /* @__PURE__ */ React128.createElement(MicOffIcon5, { height: 20, width: 20 }),
    /* @__PURE__ */ React128.createElement("span", null, isAudioEnabled ? "Mute Audio" : "Request to Unmute Audio")
  ) : null, canChangeRole && roles.length > 1 ? /* @__PURE__ */ React128.createElement(
    StyledMenuTile.ItemButton,
    {
      className: dragClassName,
      css: spacingCSS,
      onClick: () => {
        openRoleChangeModal();
        closeSheetOnClick();
      },
      "data-testid": "change_role_btn"
    },
    /* @__PURE__ */ React128.createElement(PersonSettingsIcon2, { height: 20, width: 20 }),
    /* @__PURE__ */ React128.createElement("span", null, "Switch Role")
  ) : null, audioTrackID ? /* @__PURE__ */ React128.createElement(
    StyledMenuTile.VolumeItem,
    {
      "data-testid": "participant_volume_slider",
      css: __spreadProps(__spreadValues({}, spacingCSS), { mb: "$0" })
    },
    /* @__PURE__ */ React128.createElement(Flex, { align: "center", gap: 1 }, /* @__PURE__ */ React128.createElement(SpeakerIcon3, { height: 20, width: 20 }), /* @__PURE__ */ React128.createElement(Box, { as: "span", css: { ml: "$4" } }, "Volume (", volume, ")")),
    /* @__PURE__ */ React128.createElement(
      Slider,
      {
        css: { my: "0.5rem" },
        step: 5,
        value: [typeof volume === "number" ? volume : 100],
        onValueChange: (e) => setVolume == null ? void 0 : setVolume(e[0])
      }
    )
  ) : null, showPinAction && /* @__PURE__ */ React128.createElement(React128.Fragment, null, /* @__PURE__ */ React128.createElement(PinActions, { audioTrackID, videoTrackID }), showSpotlight && /* @__PURE__ */ React128.createElement(
    SpotlightActions,
    {
      peerId: peerID,
      onSpotLightClick: () => closeSheetOnClick()
    }
  )), isMobile ? null : /* @__PURE__ */ React128.createElement(SimulcastLayers, { trackId: videoTrackID }), removeOthers ? /* @__PURE__ */ React128.createElement(
    StyledMenuTile.RemoveItem,
    {
      css: __spreadProps(__spreadValues({}, spacingCSS), { borderTop: "none" }),
      onClick: () => __async(void 0, null, function* () {
        try {
          yield actions.removePeer(peerID, "");
        } catch (error) {
        }
        closeSheetOnClick();
      }),
      "data-testid": "remove_participant_btn"
    },
    /* @__PURE__ */ React128.createElement(RemoveUserIcon2, { height: 20, width: 20 }),
    /* @__PURE__ */ React128.createElement("span", null, "Remove Participant")
  ) : null, removeOthers && isScreenshare ? /* @__PURE__ */ React128.createElement(
    StyledMenuTile.RemoveItem,
    {
      onClick: () => {
        sendEvent({});
        closeSheetOnClick();
      },
      css: spacingCSS
    },
    /* @__PURE__ */ React128.createElement(ShareScreenIcon3, { height: 20, width: 20 }),
    /* @__PURE__ */ React128.createElement("span", null, "Stop Screenshare")
  ) : null);
};

// src/Prebuilt/components/TileMenu/TileMenu.tsx
var TileMenu = ({
  audioTrackID,
  videoTrackID,
  peerID,
  isScreenshare = false,
  canMinimise,
  enableSpotlightingPeer = true
}) => {
  var _a7, _b7;
  const [open, setOpen] = useState54(false);
  const { theme: theme2 } = useTheme();
  const localPeerID = useHMSStore70(selectLocalPeerID13);
  const isLocal = localPeerID === peerID;
  const { removeOthers } = useHMSStore70(selectPermissions19) || {};
  const { setVolume, toggleAudio, toggleVideo } = useRemoteAVToggle2(
    audioTrackID,
    videoTrackID
  );
  const showSpotlight = enableSpotlightingPeer;
  const isPrimaryVideoTrack = ((_a7 = useHMSStore70(selectVideoTrackByPeerID2(peerID))) == null ? void 0 : _a7.id) === videoTrackID;
  const showPinAction = !!(audioTrackID || videoTrackID && isPrimaryVideoTrack);
  const track = useHMSStore70(selectTrackByID3(videoTrackID));
  const hideSimulcastLayers = !((_b7 = track == null ? void 0 : track.layerDefinitions) == null ? void 0 : _b7.length) || track.degraded || !track.enabled;
  const isMobile = useMedia23(config.media.md);
  const peer = useHMSStore70(selectPeerByID2(peerID));
  const [showNameChangeModal, setShowNameChangeModal] = useState54(false);
  const [showRoleChangeModal, setShowRoleChangeModal] = useState54(false);
  useDropdownList({ open, name: "TileMenu" });
  const dragClassName = getDragClassName();
  if (!(removeOthers || toggleAudio || toggleVideo || setVolume || showPinAction) && hideSimulcastLayers) {
    return null;
  }
  const openNameChangeModal = () => setShowNameChangeModal(true);
  const openRoleChangeModal = () => setShowRoleChangeModal(true);
  const props = {
    isLocal,
    isScreenshare,
    audioTrackID,
    videoTrackID,
    peerID,
    isPrimaryVideoTrack,
    showSpotlight,
    showPinAction,
    canMinimise,
    openNameChangeModal,
    openRoleChangeModal
  };
  return /* @__PURE__ */ React129.createElement(React129.Fragment, null, /* @__PURE__ */ React129.createElement(StyledMenuTile.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React129.createElement(
    StyledMenuTile.Trigger,
    {
      "data-testid": "participant_menu_btn",
      css: {
        bg: `${theme2.colors.background_dim.value}A3`,
        p: "$2",
        w: "unset",
        h: "unset"
      },
      onClick: (e) => e.stopPropagation(),
      className: dragClassName
    },
    /* @__PURE__ */ React129.createElement(VerticalMenuIcon8, { width: 20, height: 20 })
  ), isMobile ? /* @__PURE__ */ React129.createElement(Sheet.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React129.createElement(Sheet.Content, { css: { bg: "$surface_dim", pt: "$8" } }, /* @__PURE__ */ React129.createElement(
    Flex,
    {
      css: {
        color: "$on_surface_high",
        display: "flex",
        w: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        px: "$10",
        pb: "$8",
        borderBottom: "1px solid $border_default"
      }
    },
    /* @__PURE__ */ React129.createElement(Box, null, /* @__PURE__ */ React129.createElement(
      Text,
      {
        css: { color: "$on_surface_high", fontWeight: "$semiBold" }
      },
      peer == null ? void 0 : peer.name,
      isLocal ? ` (You)` : null
    ), (peer == null ? void 0 : peer.roleName) ? /* @__PURE__ */ React129.createElement(
      Text,
      {
        variant: "xs",
        css: { color: "$on_surface_low", mt: "$2" }
      },
      peer.roleName
    ) : null),
    /* @__PURE__ */ React129.createElement(Sheet.Close, { css: { color: "inherit" } }, /* @__PURE__ */ React129.createElement(CrossIcon24, null))
  ), /* @__PURE__ */ React129.createElement(
    Box,
    {
      css: {
        px: "$8",
        pb: "$8",
        maxHeight: "80vh",
        overflowY: "auto"
      }
    },
    /* @__PURE__ */ React129.createElement(
      TileMenuContent,
      __spreadProps(__spreadValues({}, props), {
        closeSheetOnClick: () => setOpen(false)
      })
    )
  ))) : /* @__PURE__ */ React129.createElement(
    StyledMenuTile.Content,
    {
      side: "top",
      align: "end",
      css: { maxHeight: "$80", overflowY: "auto" }
    },
    /* @__PURE__ */ React129.createElement(TileMenuContent, __spreadValues({}, props))
  )), showNameChangeModal && /* @__PURE__ */ React129.createElement(ChangeNameModal, { onOpenChange: setShowNameChangeModal }), showRoleChangeModal && /* @__PURE__ */ React129.createElement(
    RoleChangeModal,
    {
      peerId: peerID,
      onOpenChange: setShowRoleChangeModal
    }
  ));
};
var TileMenu_default = TileMenu;

// src/Prebuilt/components/peerTileUtils.jsx
var PEER_NAME_PLACEHOLDER = "peerName";
var labelMap = /* @__PURE__ */ new Map([
  [[true, "screen"].toString(), "Your Screen"],
  [[true, "regular"].toString(), `You (${PEER_NAME_PLACEHOLDER})`],
  [[false, "screen"].toString(), `${PEER_NAME_PLACEHOLDER}'s Screen`],
  [[false, "regular"].toString(), PEER_NAME_PLACEHOLDER],
  [[true, void 0].toString(), `You (${PEER_NAME_PLACEHOLDER})`],
  [[false, void 0].toString(), `${PEER_NAME_PLACEHOLDER}`]
]);
var getVideoTileLabel = ({ peerName, isLocal, track }) => {
  const isPeerPresent = peerName !== void 0;
  if (!isPeerPresent || !track) {
    return isPeerPresent ? labelMap.get([isLocal, void 0].toString()).replace(PEER_NAME_PLACEHOLDER, peerName) : "";
  }
  const isLocallyMuted = track.volume === 0;
  let label = labelMap.get([isLocal, track.source].toString());
  if (label) {
    label = label.replace(PEER_NAME_PLACEHOLDER, peerName);
  } else {
    label = `${peerName} ${track.source}`;
  }
  return `${label}${isLocallyMuted ? " (Muted for you)" : ""}`;
};

// src/Prebuilt/components/VideoTile.tsx
var PeerMetadata = ({
  peerId,
  size
}) => {
  const metaData = useHMSStore71(selectPeerMetadata4(peerId));
  const isBRB = (metaData == null ? void 0 : metaData.isBRBOn) || false;
  const isHandRaised = useHMSStore71(selectHasPeerHandRaised3(peerId));
  return /* @__PURE__ */ React130.createElement(React130.Fragment, null, isHandRaised ? /* @__PURE__ */ React130.createElement(
    StyledVideoTile.AttributeBox,
    {
      size,
      "data-testid": "raiseHand_icon_onTile"
    },
    /* @__PURE__ */ React130.createElement(HandIcon5, { width: 24, height: 24 })
  ) : null, isBRB ? /* @__PURE__ */ React130.createElement(StyledVideoTile.AttributeBox, { size, "data-testid": "brb_icon_onTile" }, /* @__PURE__ */ React130.createElement(BrbTileIcon, { width: 22, height: 22 })) : null);
};
var Tile = ({
  peerId = "",
  trackId = "",
  width,
  height,
  objectFit = "cover",
  canMinimise = false,
  isDragabble = false,
  rootCSS = {},
  containerCSS = {},
  enableSpotlightingPeer = true,
  hideParticipantNameOnTile = false,
  roundedVideoTile = true,
  hideAudioMuteOnTile = false,
  hideMetadataOnTile = false
}) => {
  const trackSelector = trackId ? selectVideoTrackByID3(trackId) : selectVideoTrackByPeerID3(peerId);
  const track = useHMSStore71(trackSelector);
  const peerName = useHMSStore71(selectPeerNameByID5(peerId));
  const audioTrack = useHMSStore71(selectAudioTrackByPeerID2(peerId));
  const localPeerID = useHMSStore71(selectLocalPeerID14);
  const isAudioOnly = useUISettings(UI_SETTINGS.isAudioOnly);
  const mirrorLocalVideo = useUISettings(UI_SETTINGS.mirrorLocalVideo);
  const showStatsOnTiles = useUISettings(UI_SETTINGS.showStatsOnTiles);
  const isAudioMuted = !useHMSStore71(selectIsPeerAudioEnabled2(peerId));
  const isVideoMuted = !(track == null ? void 0 : track.enabled);
  const [isMouseHovered, setIsMouseHovered] = useState55(false);
  const isVideoDegraded = track == null ? void 0 : track.degraded;
  const isLocal = localPeerID === peerId;
  const [pinnedTrackId] = useSetAppDataByKey(APP_DATA.pinnedTrackId);
  const pinned = isSameTile({
    trackId: pinnedTrackId,
    videoTrackID: track == null ? void 0 : track.id,
    audioTrackID: audioTrack == null ? void 0 : audioTrack.id
  });
  const label = getVideoTileLabel({
    peerName,
    track,
    isLocal
  });
  const onHoverHandler = useCallback32((event) => {
    setIsMouseHovered(event.type === "mouseenter");
  }, []);
  const [ref, { width: calculatedWidth, height: calculatedHeight }] = useMeasure3();
  const isTileBigEnoughToShowStats = calculatedHeight >= 180 && calculatedWidth >= 180;
  const [avatarSize, attribBoxSize] = useMemo14(
    () => calculateAvatarAndAttribBoxSize(calculatedWidth, calculatedHeight),
    [calculatedWidth, calculatedHeight]
  );
  return /* @__PURE__ */ React130.createElement(
    StyledVideoTile.Root,
    {
      ref,
      css: __spreadValues({
        width,
        height
      }, rootCSS),
      "data-testid": `participant_tile_${peerName}`
    },
    peerName !== void 0 ? /* @__PURE__ */ React130.createElement(
      StyledVideoTile.Container,
      {
        onMouseEnter: onHoverHandler,
        onMouseLeave: onHoverHandler,
        noRadius: !roundedVideoTile,
        css: containerCSS
      },
      showStatsOnTiles && isTileBigEnoughToShowStats ? /* @__PURE__ */ React130.createElement(
        VideoTileStats,
        {
          audioTrackID: audioTrack == null ? void 0 : audioTrack.id,
          videoTrackID: track == null ? void 0 : track.id,
          peerID: peerId,
          isLocal
        }
      ) : null,
      /* @__PURE__ */ React130.createElement(
        Video,
        {
          trackId: track == null ? void 0 : track.id,
          attach: isLocal ? void 0 : !isAudioOnly,
          mirror: mirrorLocalVideo && peerId === localPeerID && (track == null ? void 0 : track.source) === "regular" && (track == null ? void 0 : track.facingMode) !== "environment",
          noRadius: !roundedVideoTile,
          "data-testid": "participant_video_tile",
          css: {
            objectFit,
            filter: isVideoDegraded ? "blur($space$2)" : void 0,
            bg: "transparent"
          }
        }
      ),
      calculatedWidth > 0 && calculatedHeight > 0 ? /* @__PURE__ */ React130.createElement(React130.Fragment, null, isVideoMuted || !isLocal && isAudioOnly ? /* @__PURE__ */ React130.createElement(StyledVideoTile.AvatarContainer, null, /* @__PURE__ */ React130.createElement(
        Avatar,
        {
          name: peerName || "",
          "data-testid": "participant_avatar_icon",
          size: avatarSize
        }
      )) : null, !hideAudioMuteOnTile && isAudioMuted ? /* @__PURE__ */ React130.createElement(
        StyledVideoTile.AudioIndicator,
        {
          "data-testid": "participant_audio_mute_icon",
          size: attribBoxSize
        },
        /* @__PURE__ */ React130.createElement(MicOffIcon6, null)
      ) : null, !hideAudioMuteOnTile && !isAudioMuted ? /* @__PURE__ */ React130.createElement(StyledVideoTile.AudioIndicator, { size: attribBoxSize }, /* @__PURE__ */ React130.createElement(AudioLevel, { trackId: audioTrack == null ? void 0 : audioTrack.id, size: attribBoxSize })) : null, !hideMetadataOnTile && /* @__PURE__ */ React130.createElement(PeerMetadata, { peerId, size: attribBoxSize })) : null,
      isMouseHovered || isDragabble && navigator.maxTouchPoints > 0 ? /* @__PURE__ */ React130.createElement(
        TileMenu_default,
        {
          peerID: peerId,
          audioTrackID: (audioTrack == null ? void 0 : audioTrack.id) || "",
          videoTrackID: (track == null ? void 0 : track.id) || "",
          canMinimise,
          enableSpotlightingPeer
        }
      ) : null,
      /* @__PURE__ */ React130.createElement(
        TileConnection_default,
        {
          hideLabel: hideParticipantNameOnTile,
          name: label,
          peerId,
          width,
          pinned
        }
      )
    ) : null
  );
};
var VideoTile = React130.memo(Tile);
var VideoTile_default = VideoTile;

// src/Prebuilt/components/VirtualBackground/VBPicker.tsx
import React133, { useEffect as useEffect41, useRef as useRef26, useState as useState56 } from "react";
import { useMedia as useMedia24 } from "react-use";
import {
  selectAppData as selectAppData8,
  selectEffectsKey,
  selectIsEffectsEnabled as selectIsEffectsEnabled2,
  selectLocalPeerRole as selectLocalPeerRole3
} from "@100mslive/hms-video-store";
import {
  HMSVirtualBackgroundTypes as HMSVirtualBackgroundTypes4
} from "@100mslive/hms-virtual-background/hmsvbplugin";
import {
  HMSRoomState as HMSRoomState5,
  selectIsLargeRoom as selectIsLargeRoom3,
  selectIsLocalVideoEnabled as selectIsLocalVideoEnabled6,
  selectIsLocalVideoPluginPresent,
  selectLocalPeer as selectLocalPeer8,
  selectRoomState as selectRoomState5,
  selectVideoTrackByID as selectVideoTrackByID4,
  useHMSActions as useHMSActions47,
  useHMSStore as useHMSStore72
} from "@100mslive/react-sdk";
import {
  BlurPersonHighIcon,
  CrossCircleIcon as CrossCircleIcon3,
  CrossIcon as CrossIcon25
} from "@100mslive/react-icons";

// src/Prebuilt/components/VirtualBackground/VBCollection.tsx
import React132 from "react";
import { HMSVirtualBackgroundTypes as HMSVirtualBackgroundTypes3 } from "@100mslive/hms-virtual-background/hmsvbplugin";

// src/Prebuilt/components/VirtualBackground/VBOption.tsx
import React131 from "react";
var Root25 = ({
  onClick,
  mediaURL,
  isActive,
  children,
  testid = ""
}) => /* @__PURE__ */ React131.createElement(
  Flex,
  {
    "data-testid": testid,
    direction: "column",
    align: "center",
    css: __spreadValues({
      p: "$5",
      borderRadius: "$1",
      bg: "$surface_bright",
      border: `4px solid ${isActive ? "$primary_default" : "$surface_dim"}`,
      cursor: "pointer",
      "&:hover": { border: "4px solid $primary_dim" }
    }, mediaURL ? {
      height: "$20",
      backgroundImage: `url("${mediaURL}")`,
      backgroundSize: "cover"
    } : {}),
    onClick: () => __async(void 0, null, function* () {
      yield onClick == null ? void 0 : onClick();
    })
  },
  children
);
var Title4 = ({ children }) => {
  return children ? /* @__PURE__ */ React131.createElement(Text, { variant: "xs", css: { color: "$on_surface_medium" } }, children) : null;
};
var Icon3 = ({ children }) => {
  return children ? /* @__PURE__ */ React131.createElement(Box, { css: { color: "$on_surface_high" } }, children) : null;
};
var VBOption = {
  Root: Root25,
  Title: Title4,
  Icon: Icon3
};

// src/Prebuilt/components/VirtualBackground/VBCollection.tsx
var VBCollection = ({
  options,
  title,
  activeBackground = ""
}) => {
  if (options.length === 0) {
    return null;
  }
  return /* @__PURE__ */ React132.createElement(Box, { css: { mt: "$10" } }, /* @__PURE__ */ React132.createElement(
    Text,
    {
      variant: "sm",
      css: { color: "$on_surface_high", fontWeight: "$semiBold" }
    },
    title
  ), /* @__PURE__ */ React132.createElement(
    Box,
    {
      css: {
        py: "$4",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "$8"
      }
    },
    options.map(
      (option, index) => option.supported ? /* @__PURE__ */ React132.createElement(
        VBOption.Root,
        __spreadProps(__spreadValues({
          key: option.value,
          testid: option.value === HMSVirtualBackgroundTypes3.IMAGE ? `virtual_bg_option-${index}` : option.value
        }, option), {
          isActive: activeBackground === option.value
        }),
        /* @__PURE__ */ React132.createElement(VBOption.Icon, null, option == null ? void 0 : option.icon),
        /* @__PURE__ */ React132.createElement(VBOption.Title, null, option == null ? void 0 : option.title)
      ) : ""
    )
  ));
};

// src/Prebuilt/components/VirtualBackground/VBPicker.tsx
var iconDims = { height: "40px", width: "40px" };
var VBPicker = ({
  backgroundMedia = []
}) => {
  var _a7;
  const toggleVB = useSidepaneToggle(SIDE_PANE_OPTIONS.VB);
  const hmsActions = useHMSActions47();
  const localPeer = useHMSStore72(selectLocalPeer8);
  const role = useHMSStore72(selectLocalPeerRole3);
  const isVideoOn = useHMSStore72(selectIsLocalVideoEnabled6);
  const mirrorLocalVideo = useUISettings(UI_SETTINGS.mirrorLocalVideo);
  const trackSelector = selectVideoTrackByID4(localPeer == null ? void 0 : localPeer.videoTrack);
  const track = useHMSStore72(trackSelector);
  const [blurAmount, setBlurAmount] = useState56(
    VBHandler.getBlurAmount() || 0.5
  );
  const roomState = useHMSStore72(selectRoomState5);
  const isLargeRoom = useHMSStore72(selectIsLargeRoom3);
  const isEffectsSupported = VBHandler.isEffectsSupported();
  const isEffectsEnabled = useHMSStore72(selectIsEffectsEnabled2);
  const effectsKey = useHMSStore72(selectEffectsKey);
  const isMobile = useMedia24(config.media.md);
  const [loadingEffects, setLoadingEffects] = useSetAppDataByKey(
    APP_DATA.loadingEffects
  );
  const isPluginAdded = useHMSStore72(
    selectIsLocalVideoPluginPresent(((_a7 = VBHandler) == null ? void 0 : _a7.getName()) || "")
  );
  const background = useHMSStore72(selectAppData8(APP_DATA.background));
  const mediaList = backgroundMedia.map(
    (media) => media.url || ""
  );
  const pluginLoadingRef = useRef26(false);
  const inPreview = roomState === HMSRoomState5.Preview;
  const showVideoTile = isVideoOn && isLargeRoom && !inPreview;
  useEffect41(() => {
    const addHMSVBPlugin = () => __async(void 0, null, function* () {
      setLoadingEffects(false);
      if (!role) {
        return;
      }
      yield VBHandler.initialisePlugin();
      yield hmsActions.addPluginToVideoTrack(
        VBHandler.getVBObject(),
        Math.floor(role.publishParams.video.frameRate / 2)
      );
    });
    const initializeVirtualBackground = () => __async(void 0, null, function* () {
      if (!(track == null ? void 0 : track.id) || pluginLoadingRef.current || isPluginAdded) {
        return;
      }
      try {
        pluginLoadingRef.current = true;
        if (isEffectsEnabled && isEffectsSupported && effectsKey) {
          setLoadingEffects(true);
          yield VBHandler.initialisePlugin(effectsKey, () => {
            setLoadingEffects(false);
          });
          const vbInstance = VBHandler.getVBObject();
          if (vbInstance.getName() === "HMSEffects") {
            hmsActions.addPluginsToVideoStream([
              VBHandler.getVBObject()
            ]);
          } else {
            yield addHMSVBPlugin();
          }
        } else {
          yield addHMSVBPlugin();
        }
        const handleDefaultBackground = () => __async(void 0, null, function* () {
          switch (background) {
            case HMSVirtualBackgroundTypes4.NONE:
              break;
            case HMSVirtualBackgroundTypes4.BLUR:
              yield VBHandler.setBlur(blurAmount);
              break;
            default:
              yield VBHandler.setBackground(background);
          }
        });
        yield handleDefaultBackground();
      } catch (error) {
        console.error("Error initializing virtual background:", error);
        setLoadingEffects(false);
      }
    });
    initializeVirtualBackground();
  }, [
    hmsActions,
    role,
    isPluginAdded,
    isEffectsEnabled,
    isEffectsSupported,
    effectsKey,
    track == null ? void 0 : track.id,
    background,
    blurAmount,
    setLoadingEffects
  ]);
  useEffect41(() => {
    if (!isVideoOn) {
      toggleVB();
    }
    return () => setLoadingEffects(false);
  }, [isVideoOn, setLoadingEffects, toggleVB]);
  useSidepaneResetOnLayoutUpdate("virtual_background", SIDE_PANE_OPTIONS.VB);
  return /* @__PURE__ */ React133.createElement(Flex, { css: { pr: "$6", size: "100%" }, direction: "column" }, /* @__PURE__ */ React133.createElement(
    Flex,
    {
      align: "center",
      justify: "between",
      css: { w: "100%", background: "$surface_dim", pb: "$4" }
    },
    /* @__PURE__ */ React133.createElement(
      Text,
      {
        variant: "h6",
        css: {
          color: "$on_surface_high",
          display: "flex",
          alignItems: "center"
        }
      },
      "Virtual Background",
      " ",
      isMobile && loadingEffects ? /* @__PURE__ */ React133.createElement(Loading, { size: 18, style: { marginLeft: "0.5rem" } }) : ""
    ),
    /* @__PURE__ */ React133.createElement(
      Box,
      {
        css: {
          color: "$on_surface_high",
          "&:hover": { color: "$on_surface_medium" },
          cursor: "pointer"
        },
        onClick: toggleVB
      },
      /* @__PURE__ */ React133.createElement(CrossIcon25, null)
    )
  ), showVideoTile ? /* @__PURE__ */ React133.createElement(
    Video,
    {
      mirror: (track == null ? void 0 : track.facingMode) !== "environment" && mirrorLocalVideo,
      trackId: localPeer == null ? void 0 : localPeer.videoTrack,
      "data-testid": "preview_tile",
      css: { width: "100%", height: "16rem" }
    }
  ) : null, /* @__PURE__ */ React133.createElement(
    Box,
    {
      css: {
        mt: "$4",
        overflowY: "auto",
        flex: "1 1 0",
        mr: "-$10",
        pr: "$10"
      }
    },
    /* @__PURE__ */ React133.createElement(
      VBCollection,
      {
        title: "Effects",
        options: [
          {
            title: "No effect",
            icon: /* @__PURE__ */ React133.createElement(CrossCircleIcon3, { style: iconDims }),
            value: HMSVirtualBackgroundTypes4.NONE,
            onClick: () => __async(void 0, null, function* () {
              yield VBHandler.removeEffects();
              hmsActions.setAppData(
                APP_DATA.background,
                HMSVirtualBackgroundTypes4.NONE
              );
            }),
            supported: true
          },
          {
            title: "Blur",
            icon: /* @__PURE__ */ React133.createElement(BlurPersonHighIcon, { style: iconDims }),
            value: HMSVirtualBackgroundTypes4.BLUR,
            onClick: () => __async(void 0, null, function* () {
              var _a8;
              yield (_a8 = VBHandler) == null ? void 0 : _a8.setBlur(blurAmount);
              hmsActions.setAppData(
                APP_DATA.background,
                HMSVirtualBackgroundTypes4.BLUR
              );
            }),
            supported: isEffectsSupported && isEffectsEnabled
          }
        ],
        activeBackground: background
      }
    ),
    /* @__PURE__ */ React133.createElement(Flex, { direction: "column", css: { w: "100%", gap: "$8", mt: "$8" } }, background === HMSVirtualBackgroundTypes4.BLUR && isEffectsEnabled && effectsKey ? /* @__PURE__ */ React133.createElement(Box, null, /* @__PURE__ */ React133.createElement(
      Text,
      {
        variant: "sm",
        css: {
          color: "$on_surface_high",
          fontWeight: "$semiBold",
          mb: "$4"
        }
      },
      "Blur intensity"
    ), /* @__PURE__ */ React133.createElement(
      Flex,
      {
        css: {
          w: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "$4"
        }
      },
      /* @__PURE__ */ React133.createElement(
        Text,
        {
          variant: "caption",
          css: { fontWeight: "$medium", color: "$on_surface_medium" }
        },
        "Low"
      ),
      /* @__PURE__ */ React133.createElement(
        Slider,
        {
          showTooltip: false,
          value: [blurAmount],
          onValueChange: (e) => __async(void 0, null, function* () {
            setBlurAmount(e[0]);
            yield VBHandler.setBlur(e[0]);
          }),
          step: 0.1,
          min: 0.1,
          max: 1
        }
      ),
      /* @__PURE__ */ React133.createElement(
        Text,
        {
          variant: "caption",
          css: { fontWeight: "$medium", color: "$on_surface_medium" }
        },
        "High"
      )
    )) : null),
    /* @__PURE__ */ React133.createElement(
      VBCollection,
      {
        title: "Backgrounds",
        options: mediaList.map((mediaURL) => ({
          mediaURL,
          value: mediaURL,
          onClick: () => __async(void 0, null, function* () {
            var _a8;
            yield (_a8 = VBHandler) == null ? void 0 : _a8.setBackground(mediaURL);
            hmsActions.setAppData(APP_DATA.background, mediaURL);
          }),
          supported: true
        })),
        activeBackground: background
      }
    )
  ));
};

// src/Prebuilt/layouts/SidePane.tsx
var Wrapper3 = styled("div", {
  w: "$100",
  h: "100%",
  p: "$10",
  flex: "1 1 0",
  background: "$surface_dim",
  r: "$1",
  position: "relative",
  "@lg": {
    w: "100%",
    h: "100%",
    ml: 0,
    right: 0,
    position: "fixed",
    bottom: 0,
    borderRadius: 0,
    zIndex: 10
  },
  "@md": {
    p: "$6 $8",
    animation: `${translateAcross({
      yFrom: "100%"
    })} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
  },
  variants: {
    landscapeStream: {
      true: {
        "@lg": {
          position: "unset",
          minHeight: "100%"
        }
      }
    },
    mobileStream: {
      true: {
        "@md": {
          position: "unset"
        }
      }
    },
    overlayChat: {
      true: {
        "@lg": {
          maxHeight: "300px",
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 35.94%, rgba(0, 0, 0, 0.64) 100%)",
          position: "fixed",
          zIndex: 12,
          bottom: 0
        }
      }
    },
    roomDescription: {
      true: {
        overflowY: "auto"
      }
    },
    hideControls: {
      true: {}
    },
    virtualBackground: {
      true: {
        maxHeight: "100%",
        background: "$surface_dim"
      }
    }
  },
  compoundVariants: [
    {
      landscapeStream: true,
      overlayChat: true,
      css: {
        position: "unset",
        height: "100%",
        maxHeight: "unset",
        "@md": {
          pb: 0
        }
      }
    },
    {
      mobileStream: true,
      overlayChat: true,
      css: {
        position: "unset",
        height: "100%",
        maxHeight: "unset"
      }
    },
    {
      hideControls: false,
      overlayChat: true,
      css: {
        pb: "$17"
      }
    }
  ]
});
var SidePane = ({
  tileProps,
  hideControls = false
}) => {
  var _a7, _b7, _c, _d, _e, _f, _g;
  const isMobile = useMedia25(config.media.md);
  const sidepane = useHMSStore73(selectAppData9(APP_DATA.sidePane));
  const activeScreensharePeerId = useHMSStore73(
    selectAppData9(APP_DATA.activeScreensharePeerId)
  );
  const trackId = (_a7 = useHMSStore73(
    selectVideoTrackByPeerID4(activeScreensharePeerId)
  )) == null ? void 0 : _a7.id;
  const { elements } = useRoomLayoutConferencingScreen();
  const { elements: preview_elements } = useRoomLayoutPreviewScreen();
  const layoutMode = useUISettings(UI_SETTINGS.layoutMode);
  const isLandscapeHLSStream = useLandscapeHLSStream();
  const isMobileHLSStream = useMobileHLSStream();
  const backgroundMedia = ((_c = (_b7 = preview_elements == null ? void 0 : preview_elements.virtual_background) == null ? void 0 : _b7.background_media) == null ? void 0 : _c.length) ? (_d = preview_elements == null ? void 0 : preview_elements.virtual_background) == null ? void 0 : _d.background_media : ((_e = elements == null ? void 0 : elements.virtual_background) == null ? void 0 : _e.background_media) || [];
  const tileLayout = {
    hideParticipantNameOnTile: tileProps == null ? void 0 : tileProps.hide_participant_name_on_tile,
    roundedVideoTile: tileProps == null ? void 0 : tileProps.rounded_video_tile,
    hideAudioMuteOnTile: tileProps == null ? void 0 : tileProps.hide_audio_mute_on_tile,
    hideMetadataOnTile: tileProps == null ? void 0 : tileProps.hide_metadata_on_tile,
    objectFit: tileProps == null ? void 0 : tileProps.video_object_fit
  };
  const mwebStreamingChat = isMobile && sidepane === SIDE_PANE_OPTIONS.CHAT && ((_f = elements == null ? void 0 : elements.chat) == null ? void 0 : _f.is_overlay);
  const commonProps = {
    landscapeStream: isLandscapeHLSStream,
    mobileStream: isMobileHLSStream,
    hideControls,
    overlayChat: !!((_g = elements == null ? void 0 : elements.chat) == null ? void 0 : _g.is_overlay),
    roomDescription: sidepane === SIDE_PANE_OPTIONS.ROOM_DETAILS,
    virtualBackground: sidepane === SIDE_PANE_OPTIONS.VB
  };
  const SidepaneComponent = match12(sidepane).with(SIDE_PANE_OPTIONS.POLLS, () => /* @__PURE__ */ React134.createElement(
    Wrapper3,
    __spreadValues({
      css: {
        "@md": {
          borderTopLeftRadius: "$2",
          borderTopRightRadius: "$2"
        }
      }
    }, commonProps),
    /* @__PURE__ */ React134.createElement(Polls, null)
  )).with(SIDE_PANE_OPTIONS.VB, () => /* @__PURE__ */ React134.createElement(Wrapper3, __spreadValues({ css: { p: "$10 $6 $10 $10" } }, commonProps), /* @__PURE__ */ React134.createElement(VBPicker, { backgroundMedia }))).with(SIDE_PANE_OPTIONS.CHAT, SIDE_PANE_OPTIONS.PARTICIPANTS, () => /* @__PURE__ */ React134.createElement(Wrapper3, __spreadProps(__spreadValues({}, commonProps), { overlayChat: mwebStreamingChat }), /* @__PURE__ */ React134.createElement(
    SidePaneTabs,
    {
      active: sidepane,
      hideTab: isMobileHLSStream || isLandscapeHLSStream
    }
  ))).with(SIDE_PANE_OPTIONS.ROOM_DETAILS, () => /* @__PURE__ */ React134.createElement(Wrapper3, __spreadValues({}, commonProps), /* @__PURE__ */ React134.createElement(RoomDetailsPane, null))).otherwise(() => {
    return null;
  });
  const resetSidePane = useSidepaneReset();
  useEffect42(() => {
    return () => {
      resetSidePane();
    };
  }, [resetSidePane]);
  if (!SidepaneComponent && !trackId) {
    return null;
  }
  return /* @__PURE__ */ React134.createElement(
    Flex,
    {
      direction: "column",
      justify: "center",
      css: {
        w: match12({ isMobileHLSStream, isLandscapeHLSStream }).with({ isLandscapeHLSStream: true }, () => "340px").with({ isMobileHLSStream: true }, () => "100%").otherwise(() => "$100"),
        h: "100%",
        flexShrink: 0,
        gap: "$4",
        position: "relative",
        "&:empty": { display: "none" },
        "@md": {
          position: "absolute",
          zIndex: 12
        }
      }
    },
    trackId && layoutMode === LayoutMode.GALLERY && /* @__PURE__ */ React134.createElement(
      VideoTile_default,
      __spreadValues({
        peerId: activeScreensharePeerId,
        trackId,
        width: "100%",
        height: 225,
        rootCSS: { p: 0, alignSelf: "start", flexShrink: 0 }
      }, tileLayout)
    ),
    SidepaneComponent
  );
};
var SidePane_default = SidePane;

// src/Prebuilt/components/Chip.tsx
import React135 from "react";
var Chip = ({
  icon = /* @__PURE__ */ React135.createElement(React135.Fragment, null),
  content = "",
  backgroundColor = "$surface_default",
  textColor = "$on_surface_high",
  hideIfNoContent = false,
  onClick,
  css: css2 = {}
}) => {
  if (hideIfNoContent && !content) {
    return null;
  }
  return /* @__PURE__ */ React135.createElement(
    Flex,
    {
      align: "center",
      css: __spreadValues({
        backgroundColor,
        p: "$4 $6",
        gap: "$2",
        borderRadius: "$4"
      }, css2),
      onClick: () => onClick == null ? void 0 : onClick()
    },
    icon,
    /* @__PURE__ */ React135.createElement(Text, { variant: "sm", css: { fontWeight: "$semiBold", color: textColor } }, content)
  );
};
var Chip_default = Chip;

// src/Prebuilt/components/FullPageProgress.tsx
import React136 from "react";
var FullPageProgress = ({
  loaderColor = "$primary_default",
  text = "",
  css: css2 = {}
}) => /* @__PURE__ */ React136.createElement(
  Flex,
  {
    direction: "column",
    justify: "center",
    align: "center",
    css: __spreadValues({ size: "100%", color: loaderColor }, css2)
  },
  /* @__PURE__ */ React136.createElement(Loading, { color: "currentColor", size: 100 }),
  text ? /* @__PURE__ */ React136.createElement(Text, { css: { mt: "$10", color: "$on_surface_high" } }, text) : null
);
var FullPageProgress_default = FullPageProgress;

// src/Prebuilt/components/Preview/PreviewForm.tsx
import React137 from "react";
import { useMedia as useMedia26 } from "react-use";
import { JoinForm_JoinBtnType as JoinForm_JoinBtnType3 } from "@100mslive/types-prebuilt/elements/join_form";
import { useRecordingStreaming as useRecordingStreaming10 } from "@100mslive/react-sdk";
import { GoLiveIcon } from "@100mslive/react-icons";
var PreviewForm = ({
  name,
  disabled,
  onChange,
  onJoin,
  enableJoin,
  cannotPublishVideo = false,
  cannotPublishAudio = false
}) => {
  var _a7, _b7, _c;
  const formSubmit = (e) => {
    e.preventDefault();
  };
  const isMobile = useMedia26(config.media.md);
  const {
    isHLSRunning,
    isRTMPRunning,
    isHLSRecordingOn,
    isBrowserRecordingOn
  } = useRecordingStreaming10();
  const layout = useRoomLayout();
  const { join_form: joinForm = {} } = ((_c = (_b7 = (_a7 = layout == null ? void 0 : layout.screens) == null ? void 0 : _a7.preview) == null ? void 0 : _b7.default) == null ? void 0 : _c.elements) || {};
  const showGoLive = (joinForm == null ? void 0 : joinForm.join_btn_type) === JoinForm_JoinBtnType3.JOIN_BTN_TYPE_JOIN_AND_GO_LIVE && !isHLSRunning && !isRTMPRunning && !isHLSRecordingOn && !isBrowserRecordingOn;
  return /* @__PURE__ */ React137.createElement(
    Form,
    {
      css: {
        flexDirection: cannotPublishVideo ? "column" : "row",
        "@md": { flexDirection: "row" }
      },
      onSubmit: formSubmit
    },
    /* @__PURE__ */ React137.createElement(Flex, { align: "center", css: { gap: "$8", w: "100%" } }, /* @__PURE__ */ React137.createElement(
      Input,
      {
        required: true,
        id: "name",
        disabled,
        css: { w: "100%", boxSizing: "border-box" },
        value: name,
        onChange: (e) => onChange(e.target.value.trimStart()),
        placeholder: "Enter name",
        autoFocus: true,
        autoComplete: "name",
        onKeyDown: (e) => {
          if (e.key === "Enter" && name.trim().length > 0) {
            e.preventDefault();
            if (isMobile) {
              return;
            }
            onJoin();
          }
        }
      }
    ), cannotPublishAudio && cannotPublishVideo && !isMobile ? /* @__PURE__ */ React137.createElement(PreviewSettings, null) : null),
    /* @__PURE__ */ React137.createElement(
      Button,
      {
        type: "submit",
        icon: true,
        disabled: !name || !enableJoin,
        onClick: onJoin
      },
      showGoLive ? /* @__PURE__ */ React137.createElement(GoLiveIcon, { height: 18, width: 18 }) : null,
      showGoLive ? joinForm.go_live_btn_label : joinForm.join_btn_label
    )
  );
};
var Form = styled("form", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "$8",
  mt: "$10",
  mb: "$10",
  "@md": {
    gap: "$4"
  }
});
var PreviewForm_default = PreviewForm;

// src/Prebuilt/components/Preview/PreviewJoin.tsx
var getParticipantChipContent = (peerCount = 0) => {
  if (peerCount === 0) {
    return "You are the first to join";
  }
  const formattedNum = getFormattedCount(peerCount);
  return `${formattedNum} other${parseInt(formattedNum) === 1 ? "" : "s"} in the session`;
};
var useLocalTileAspectRatio = () => {
  const localPeer = useHMSStore74(selectLocalPeer9);
  const videoTrack = useHMSStore74(selectVideoTrackByID5(localPeer == null ? void 0 : localPeer.videoTrack));
  const isMobile = useMedia27(config.media.md);
  let aspectRatio = 0;
  if ((videoTrack == null ? void 0 : videoTrack.width) && (videoTrack == null ? void 0 : videoTrack.height)) {
    aspectRatio = videoTrack.width / videoTrack.height;
  } else {
    aspectRatio = isMobile ? 9 / 16 : 16 / 9;
  }
  return aspectRatio;
};
var PreviewJoin = ({
  skipPreview,
  initialName,
  asRole
}) => {
  const [previewPreference, setPreviewPreference] = useUserPreferences(
    UserPreferencesKeys.PREVIEW,
    defaultPreviewPreference
  );
  const { isStreamingOn } = useRecordingStreaming11();
  const authToken = useAuthToken();
  const [name, setName] = useState57(initialName || previewPreference.name);
  const { toggleAudio, toggleVideo } = useAVToggle4();
  const [previewError, setPreviewError] = useState57(false);
  const { endpoints } = useHMSPrebuiltContext();
  const { peerCount } = useParticipants2();
  const loadingEffects = useHMSStore74(selectAppData10(APP_DATA.loadingEffects));
  const { enableJoin, preview, join } = usePreviewJoin({
    name,
    token: authToken,
    initEndpoint: endpoints == null ? void 0 : endpoints.init,
    initialSettings: {
      isAudioMuted: skipPreview || previewPreference.isAudioMuted,
      isVideoMuted: skipPreview || previewPreference.isVideoMuted,
      speakerAutoSelectionBlacklist: ["Yeti Stereo Microphone"]
    },
    captureNetworkQualityInPreview: true,
    handleError: (_, method) => {
      if (method === "preview") {
        setPreviewError(true);
      }
    },
    asRole
  });
  const { requestPermission } = useAwayNotifications2();
  const roomState = useHMSStore74(selectRoomState6);
  const savePreferenceAndJoin = useCallback33(() => {
    setPreviewPreference({
      name
    });
    join();
  }, [join, name, setPreviewPreference]);
  const { elements = {} } = useRoomLayoutPreviewScreen();
  const { preview_header: previewHeader = {}, virtual_background } = elements || {};
  const aspectRatio = useLocalTileAspectRatio();
  useEffect43(() => {
    if (authToken) {
      if (skipPreview) {
        savePreferenceAndJoin();
      } else {
        preview().then(() => requestPermission());
      }
    }
  }, [authToken, skipPreview]);
  useEffect43(() => {
    if (initialName) {
      setName(initialName);
    }
  }, [initialName]);
  return roomState === HMSRoomState6.Preview ? /* @__PURE__ */ React138.createElement(Flex, { justify: "center", css: { size: "100%", position: "relative" } }, /* @__PURE__ */ React138.createElement(
    Container4,
    {
      css: {
        h: "100%",
        pt: "$6",
        "@md": { justifyContent: "space-between", pt: "$10" }
      }
    },
    toggleVideo ? null : /* @__PURE__ */ React138.createElement(Box, null),
    /* @__PURE__ */ React138.createElement(
      Flex,
      {
        direction: "column",
        justify: "center",
        css: { w: "100%", maxWidth: "600px", gap: "$8" }
      },
      /* @__PURE__ */ React138.createElement(Logo, null),
      /* @__PURE__ */ React138.createElement(
        Text,
        {
          variant: "h4",
          css: { wordBreak: "break-word", textAlign: "center" }
        },
        previewHeader.title
      ),
      /* @__PURE__ */ React138.createElement(
        Text,
        {
          css: {
            c: "$on_surface_medium",
            textAlign: "center",
            maxWidth: "100%",
            wordWrap: "break-word"
          },
          variant: "sm"
        },
        previewHeader.sub_title
      ),
      /* @__PURE__ */ React138.createElement(Flex, { justify: "center", css: { gap: "$4" } }, isStreamingOn ? /* @__PURE__ */ React138.createElement(
        Chip_default,
        {
          content: "LIVE",
          backgroundColor: "$alert_error_default",
          textColor: "#FFF",
          icon: /* @__PURE__ */ React138.createElement(
            Box,
            {
              css: {
                h: "$sm",
                w: "$sm",
                backgroundColor: "$on_primary_high",
                borderRadius: "$round"
              }
            }
          )
        }
      ) : null, /* @__PURE__ */ React138.createElement(
        Chip_default,
        {
          content: getParticipantChipContent(peerCount),
          hideIfNoContent: true
        }
      ))
    ),
    toggleVideo ? /* @__PURE__ */ React138.createElement(PreviewTile, { name, error: previewError }) : null,
    /* @__PURE__ */ React138.createElement(
      Box,
      {
        css: { w: "100%", maxWidth: `${Math.max(aspectRatio, 1) * 340}px` }
      },
      /* @__PURE__ */ React138.createElement(
        PreviewControls,
        {
          hideSettings: !toggleVideo && !toggleAudio,
          vbEnabled: !!virtual_background
        }
      ),
      /* @__PURE__ */ React138.createElement(
        PreviewForm_default,
        {
          name,
          disabled: !!initialName,
          onChange: setName,
          enableJoin: enableJoin && !loadingEffects,
          onJoin: savePreferenceAndJoin,
          cannotPublishVideo: !toggleVideo,
          cannotPublishAudio: !toggleAudio
        }
      )
    )
  ), /* @__PURE__ */ React138.createElement(
    Box,
    {
      css: {
        position: "absolute",
        right: "0",
        top: 0,
        height: "100%",
        overflow: "hidden"
      }
    },
    /* @__PURE__ */ React138.createElement(SidePane_default, null)
  )) : /* @__PURE__ */ React138.createElement(FullPageProgress_default, null);
};
var Container4 = styled("div", __spreadProps(__spreadValues({
  width: "100%"
}, flexCenter), {
  flexDirection: "column",
  px: "$10"
}));
var PreviewTile = ({
  name,
  error
}) => {
  const localPeer = useHMSStore74(selectLocalPeer9);
  const { isLocalAudioEnabled, toggleAudio } = useAVToggle4();
  const isVideoOn = useHMSStore74(selectIsLocalVideoEnabled7);
  const mirrorLocalVideo = useUISettings(UI_SETTINGS.mirrorLocalVideo);
  const trackSelector = selectVideoTrackByID5(localPeer == null ? void 0 : localPeer.videoTrack);
  const track = useHMSStore74(trackSelector);
  const showMuteIcon = !isLocalAudioEnabled || !toggleAudio;
  const aspectRatio = useLocalTileAspectRatio();
  const [ref, { width: calculatedWidth, height: calculatedHeight }] = useMeasure4();
  const [avatarSize, attribBoxSize] = useMemo15(
    () => calculateAvatarAndAttribBoxSize(calculatedWidth, calculatedHeight),
    [calculatedWidth, calculatedHeight]
  );
  return /* @__PURE__ */ React138.createElement(
    StyledVideoTile.Container,
    {
      ref,
      css: {
        bg: "$surface_default",
        aspectRatio,
        height: "min(340px, 70vh)",
        width: "auto",
        maxWidth: "600px",
        overflow: "clip",
        mt: "$10",
        "@md": {
          mt: 0,
          width: "min(220px, 70vw)",
          maxWidth: "100%",
          my: "$4"
        }
      }
    },
    localPeer ? /* @__PURE__ */ React138.createElement(React138.Fragment, null, /* @__PURE__ */ React138.createElement(TileConnection_default, { name: "", peerId: localPeer.id, hideLabel: false }), /* @__PURE__ */ React138.createElement(
      Video,
      {
        mirror: (track == null ? void 0 : track.facingMode) !== "environment" && mirrorLocalVideo,
        trackId: localPeer.videoTrack,
        "data-testid": "preview_tile"
      }
    ), !isVideoOn ? /* @__PURE__ */ React138.createElement(StyledVideoTile.AvatarContainer, null, /* @__PURE__ */ React138.createElement(
      Avatar,
      {
        name,
        "data-testid": "preview_avatar_tile",
        size: avatarSize
      }
    )) : null) : null,
    !localPeer && !error ? /* @__PURE__ */ React138.createElement(FullPageProgress_default, null) : null,
    showMuteIcon ? /* @__PURE__ */ React138.createElement(StyledVideoTile.AudioIndicator, { size: attribBoxSize }, /* @__PURE__ */ React138.createElement(MicOffIcon7, null)) : /* @__PURE__ */ React138.createElement(StyledVideoTile.AudioIndicator, { size: attribBoxSize }, /* @__PURE__ */ React138.createElement(AudioLevel, { trackId: localPeer == null ? void 0 : localPeer.audioTrack }))
  );
};
var PreviewControls = ({
  hideSettings,
  vbEnabled
}) => {
  const isMobile = useMedia27(config.media.md);
  const isVBEnabledForUser = useHMSStore74(selectIsVBEnabled2);
  return /* @__PURE__ */ React138.createElement(
    Flex,
    {
      justify: hideSettings && isMobile ? "center" : "between",
      css: {
        width: "100%",
        mt: "$6"
      }
    },
    /* @__PURE__ */ React138.createElement(Flex, { css: { gap: "$4" } }, /* @__PURE__ */ React138.createElement(AudioVideoToggle, null), vbEnabled && isVBEnabledForUser ? /* @__PURE__ */ React138.createElement(VBToggle, null) : null),
    /* @__PURE__ */ React138.createElement(Flex, { align: "center", gap: "1" }, isMobile && /* @__PURE__ */ React138.createElement(NoiseCancellation, { iconOnly: true }), !hideSettings ? /* @__PURE__ */ React138.createElement(PreviewSettings, null) : null)
  );
};
var PreviewSettings = React138.memo(() => {
  const [open, setOpen] = useState57(false);
  return /* @__PURE__ */ React138.createElement(Fragment12, null, /* @__PURE__ */ React138.createElement(
    IconButton_default,
    {
      "data-testid": "preview_setting_btn",
      css: { flexShrink: 0 },
      onClick: () => setOpen((value) => !value)
    },
    /* @__PURE__ */ React138.createElement(SettingsIcon6, null)
  ), open && /* @__PURE__ */ React138.createElement(SettingsModal_default, { open, onOpenChange: setOpen }));
});
var PreviewJoin_default = PreviewJoin;

// src/Prebuilt/components/RoleChangeRequest/RequestPrompt.tsx
import React139 from "react";
import { useMedia as useMedia28 } from "react-use";
var RequestPrompt = ({
  open = true,
  onOpenChange,
  title,
  body,
  actionText = "Accept",
  onAction,
  disableActions = false
}) => {
  const isMobile = useMedia28(config.media.md);
  if (isMobile) {
    return /* @__PURE__ */ React139.createElement(Sheet.Root, { open, onOpenChange }, /* @__PURE__ */ React139.createElement(Sheet.Content, { css: { py: "$8" } }, /* @__PURE__ */ React139.createElement(
      Text,
      {
        css: {
          fontWeight: "$semiBold",
          c: "$on_surface_high",
          "@md": { px: "$8" }
        }
      },
      title
    ), body, /* @__PURE__ */ React139.createElement(
      RequestActions,
      {
        actionText,
        onAction,
        disabled: disableActions
      }
    )));
  }
  return /* @__PURE__ */ React139.createElement(Dialog.Root, { open, modal: false, onOpenChange }, /* @__PURE__ */ React139.createElement(Dialog.Portal, null, /* @__PURE__ */ React139.createElement(
    Dialog.Content,
    {
      css: { p: "$10" },
      onInteractOutside: (e) => e.preventDefault()
    },
    /* @__PURE__ */ React139.createElement(
      Dialog.Title,
      {
        css: {
          p: 0,
          display: "flex",
          flexDirection: "row",
          gap: "$md",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ React139.createElement(Text, { variant: "h6" }, title)
    ),
    /* @__PURE__ */ React139.createElement(Box, { css: { mt: "$4", mb: "$10" } }, body),
    /* @__PURE__ */ React139.createElement(
      RequestActions,
      {
        actionText,
        onAction,
        disabled: disableActions
      }
    )
  )));
};
var RequestActions = ({
  onAction,
  actionText,
  disabled = false
}) => /* @__PURE__ */ React139.createElement(
  Flex,
  {
    justify: "center",
    align: "center",
    css: { width: "100%", gap: "$md", "@md": { mt: "$8", px: "$8" } }
  },
  /* @__PURE__ */ React139.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ React139.createElement(Dialog.Close, { css: { width: "100%", height: "100%" }, asChild: true }, /* @__PURE__ */ React139.createElement(
    Button,
    {
      variant: "standard",
      outlined: true,
      css: { width: "100%", p: "$4 $8" },
      disabled
    },
    "Decline"
  ))),
  /* @__PURE__ */ React139.createElement(Box, { css: { width: "50%" } }, /* @__PURE__ */ React139.createElement(
    Button,
    {
      variant: "primary",
      css: { width: "100%" },
      onClick: onAction,
      disabled
    },
    actionText
  ))
);

// src/Prebuilt/components/RoleChangeRequest/RoleChangeRequestModal.tsx
var RoleChangeRequestModal = () => {
  const hmsActions = useHMSActions48();
  const { updateMetaData } = useMyMetadata();
  const isPreview = useHMSStore75(selectIsInPreview);
  const currentRole = useHMSStore75(selectLocalPeerRoleName4);
  const roleChangeRequest = useHMSStore75(selectRoleChangeRequest);
  const name = useHMSStore75(selectLocalPeerName4);
  const { sendEvent } = useCustomEvent3({ type: ROLE_CHANGE_DECLINED });
  const { elements = {} } = useRoomLayoutPreviewScreen();
  const { virtual_background } = elements || {};
  useEffect44(() => {
    if (!(roleChangeRequest == null ? void 0 : roleChangeRequest.role)) {
      return;
    }
    (() => __async(void 0, null, function* () {
      yield hmsActions.preview({ asRole: roleChangeRequest.role.name });
    }))();
  }, [hmsActions, roleChangeRequest, currentRole, updateMetaData]);
  if (!(roleChangeRequest == null ? void 0 : roleChangeRequest.role)) {
    return null;
  }
  const body = /* @__PURE__ */ React140.createElement(React140.Fragment, null, /* @__PURE__ */ React140.createElement(
    Text,
    {
      variant: "xs",
      css: {
        c: "$on_surface_medium",
        textAlign: "center",
        "@md": {
          textAlign: "left",
          borderBottom: "1px solid $border_bright",
          pb: "$4",
          px: "$8"
        }
      }
    },
    "Setup your audio and video before joining"
  ), /* @__PURE__ */ React140.createElement(
    Flex,
    {
      align: "center",
      justify: "center",
      css: {
        "@sm": { width: "100%" },
        flexDirection: "column",
        mt: "$6",
        "@md": { px: "$8" }
      }
    },
    /* @__PURE__ */ React140.createElement(PreviewTile, { name: name || "" }),
    /* @__PURE__ */ React140.createElement(PreviewControls, { hideSettings: true, vbEnabled: !!virtual_background })
  ));
  return /* @__PURE__ */ React140.createElement(
    RequestPrompt,
    {
      title: "You're invited to join the stage",
      onOpenChange: (value) => __async(void 0, null, function* () {
        var _a7;
        if (!value) {
          hmsActions.rejectChangeRole(roleChangeRequest);
          sendEvent(
            __spreadProps(__spreadValues({}, roleChangeRequest), { peerName: name }),
            { peerId: (_a7 = roleChangeRequest.requestedBy) == null ? void 0 : _a7.id }
          );
          yield hmsActions.cancelMidCallPreview();
          yield hmsActions.lowerLocalPeerHand();
        }
      }),
      body,
      onAction: () => __async(void 0, null, function* () {
        yield hmsActions.acceptChangeRole(roleChangeRequest);
        yield updateMetaData({ prevRole: currentRole });
        yield hmsActions.lowerLocalPeerHand();
      }),
      actionText: "Accept",
      disableActions: !isPreview
    }
  );
};

// src/Prebuilt/layouts/VideoStreamingSection.tsx
import React159, { Suspense, useEffect as useEffect58, useState as useState67 } from "react";
import { useMedia as useMedia38 } from "react-use";
import { match as match13 } from "ts-pattern";
import {
  selectIsConnectedToRoom as selectIsConnectedToRoom9,
  selectIsLocalScreenShared as selectIsLocalScreenShared2,
  selectLocalPeerRoleName as selectLocalPeerRoleName6,
  useHMSActions as useHMSActions50,
  useHMSStore as useHMSStore86
} from "@100mslive/react-sdk";
import { PeopleAddIcon as PeopleAddIcon3, ShareScreenIcon as ShareScreenIcon5 } from "@100mslive/react-icons";

// src/Prebuilt/components/VideoLayouts/GridLayout.tsx
import React155, { useEffect as useEffect53, useMemo as useMemo20, useState as useState65 } from "react";
import {
  selectLocalPeerID as selectLocalPeerID16,
  selectLocalPeerRoleName as selectLocalPeerRoleName5,
  selectPeers as selectPeers3,
  selectPeerScreenSharing as selectPeerScreenSharing2,
  selectWhiteboard as selectWhiteboard2,
  useHMSStore as useHMSStore82,
  useHMSVanillaStore as useHMSVanillaStore13
} from "@100mslive/react-sdk";

// src/Prebuilt/components/VideoLayouts/EqualProminence.tsx
import React146, { useEffect as useEffect48, useState as useState59 } from "react";
import { useMedia as useMedia31 } from "react-use";
import { PeopleAddIcon as PeopleAddIcon2 } from "@100mslive/react-icons";

// src/Prebuilt/layouts/WaitingView.tsx
import React141 from "react";
var WaitingView = React141.memo(
  ({
    icon,
    title,
    subtitle
  }) => {
    return /* @__PURE__ */ React141.createElement(
      Flex,
      {
        align: "center",
        direction: "column",
        css: {
          textAlign: "center",
          margin: "auto",
          h: "100%",
          justifyContent: "center",
          gap: "$8"
        }
      },
      /* @__PURE__ */ React141.createElement(
        Box,
        {
          css: {
            backgroundColor: "$surface_default",
            display: "flex",
            alignItems: "center",
            gap: "$4",
            size: "$20",
            r: "$round",
            justifyContent: "center"
          }
        },
        icon
      ),
      /* @__PURE__ */ React141.createElement(
        Flex,
        {
          direction: "column",
          css: {
            p: "$1",
            gap: "$4"
          }
        },
        /* @__PURE__ */ React141.createElement(
          Text,
          {
            variant: "h4",
            css: { "@md": { fontSize: "$md", color: "$on_surface_high" } }
          },
          title
        ),
        /* @__PURE__ */ React141.createElement(
          Text,
          {
            variant: "body1",
            css: {
              fontWeight: "$regular",
              color: "$on_surface_medium",
              "@md": { fontSize: "$sm" }
            }
          },
          subtitle
        )
      )
    );
  }
);

// src/Prebuilt/components/InsetTile.tsx
import React143, { useEffect as useEffect45, useRef as useRef27 } from "react";
import Draggable from "react-draggable";
import { useMedia as useMedia29 } from "react-use";
import {
  selectIsAllowedToPublish as selectIsAllowedToPublish3,
  selectLocalPeer as selectLocalPeer10,
  selectPeerByID as selectPeerByID3,
  selectVideoTrackByID as selectVideoTrackByID6,
  useHMSStore as useHMSStore76
} from "@100mslive/react-sdk";
import { ExpandIcon as ExpandIcon2 } from "@100mslive/react-icons";

// src/Prebuilt/components/hooks/useVideoTileLayout.ts
import React142, { useContext as useContext5 } from "react";
var VideoTileContext = React142.createContext({
  enableSpotlightingPeer: true,
  hideParticipantNameOnTile: false,
  roundedVideoTile: true,
  hideAudioMuteOnTile: false,
  hideAudioLevelOnTile: false,
  objectFit: "contain",
  hideMetadataOnTile: false
});
var useVideoTileContext = () => {
  const context = useContext5(VideoTileContext);
  return context;
};

// src/Prebuilt/components/InsetTile.tsx
var MinimisedTile = ({
  setMinimised
}) => {
  return /* @__PURE__ */ React143.createElement(
    Flex,
    {
      align: "center",
      css: {
        gap: "$6",
        r: "$1",
        bg: "$surface_default",
        p: "$4",
        color: "$on_surface_high"
      }
    },
    /* @__PURE__ */ React143.createElement(AudioVideoToggle, { hideOptions: true }),
    /* @__PURE__ */ React143.createElement(Text, null, "You"),
    /* @__PURE__ */ React143.createElement(
      IconButton_default,
      {
        className: "__cancel-drag-event",
        onClick: () => setMinimised(false),
        css: { bg: "transparent", border: "transparent" }
      },
      /* @__PURE__ */ React143.createElement(ExpandIcon2, null)
    )
  );
};
var insetHeightPx = 180;
var insetMaxWidthPx = 240;
var defaultMobileAspectRatio = 9 / 16;
var desktopAspectRatio = 1 / defaultMobileAspectRatio;
var InsetTile = ({ peerId }) => {
  const isMobile = useMedia29(config.media.md);
  const isLandscape = useMedia29(config.media.ls);
  const selector = peerId ? selectPeerByID3(peerId) : selectLocalPeer10;
  const peer = useHMSStore76(selector);
  const [minimised, setMinimised] = useSetAppDataByKey(APP_DATA.minimiseInset);
  const videoTrack = useHMSStore76(selectVideoTrackByID6(peer == null ? void 0 : peer.videoTrack));
  const isAllowedToPublish = useHMSStore76(selectIsAllowedToPublish3);
  const videoTileProps = useVideoTileContext();
  let aspectRatio = isMobile ? defaultMobileAspectRatio : desktopAspectRatio;
  if ((videoTrack == null ? void 0 : videoTrack.width) && (videoTrack == null ? void 0 : videoTrack.height) && !isMobile) {
    aspectRatio = videoTrack.width / videoTrack.height;
  }
  let height = insetHeightPx;
  let width = height * aspectRatio;
  if (isLandscape && width > insetMaxWidthPx) {
    width = 240;
    height = width / aspectRatio;
  }
  const nodeRef = useRef27(null);
  useEffect45(() => {
    const node = nodeRef.current;
    if (!node || !window.ResizeObserver) {
      return;
    }
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === node.parentElement) {
          node.style.transform = `translate(0,0)`;
        }
      });
    });
    node.parentElement && resizeObserver.observe(node.parentElement);
    return () => {
      (node == null ? void 0 : node.parentElement) && (resizeObserver == null ? void 0 : resizeObserver.unobserve(node.parentElement));
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
    };
  }, []);
  if (!isAllowedToPublish.video && !isAllowedToPublish.audio) {
    return null;
  }
  return /* @__PURE__ */ React143.createElement(Draggable, { bounds: "parent", nodeRef, cancel: ".__cancel-drag-event" }, /* @__PURE__ */ React143.createElement(
    Box,
    {
      ref: nodeRef,
      css: __spreadValues({
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 10,
        boxShadow: "0 0 8px 0 rgba(0,0,0,0.3)",
        r: "$2"
      }, !minimised ? {
        aspectRatio,
        h: height
      } : {})
    },
    minimised ? /* @__PURE__ */ React143.createElement(MinimisedTile, { setMinimised }) : /* @__PURE__ */ React143.createElement(
      VideoTile_default,
      __spreadProps(__spreadValues({
        peerId: peer == null ? void 0 : peer.id,
        trackId: peer == null ? void 0 : peer.videoTrack,
        rootCSS: {
          size: "100%",
          padding: 0
        },
        width,
        height,
        containerCSS: { background: "$surface_default" },
        canMinimise: true,
        isDragabble: true
      }, videoTileProps), {
        hideParticipantNameOnTile: true
      })
    )
  ));
};

// src/Prebuilt/components/Pagination.tsx
import React144, { useEffect as useEffect46 } from "react";
import { ChevronLeftIcon as ChevronLeftIcon7, ChevronRightIcon as ChevronRightIcon4 } from "@100mslive/react-icons";
var Pagination = ({
  page,
  onPageChange,
  numPages
}) => {
  const disableLeft = page === 0;
  const disableRight = page === numPages - 1;
  const nextPage = (e) => {
    e.stopPropagation();
    onPageChange(Math.min(page + 1, numPages - 1));
  };
  const prevPage = (e) => {
    e.stopPropagation();
    onPageChange(Math.max(page - 1, 0));
  };
  useEffect46(() => {
    if (page >= numPages) {
      onPageChange(Math.max(0, numPages - 1));
    }
  }, [numPages, onPageChange, page]);
  if (numPages <= 1) {
    return null;
  }
  return /* @__PURE__ */ React144.createElement(StyledPagination.Root, { css: { flexShrink: 0 } }, /* @__PURE__ */ React144.createElement(StyledPagination.Chevron, { disabled: disableLeft, onClick: prevPage }, /* @__PURE__ */ React144.createElement(
    ChevronLeftIcon7,
    {
      width: 16,
      height: 16,
      style: { cursor: disableLeft ? "not-allowed" : "pointer" }
    }
  )), numPages <= 5 ? /* @__PURE__ */ React144.createElement(StyledPagination.Dots, null, [...Array(numPages)].map((_, i) => /* @__PURE__ */ React144.createElement(
    StyledPagination.Dot,
    {
      key: i,
      active: page === i,
      onClick: (e) => {
        e.stopPropagation();
        onPageChange(i);
      }
    }
  ))) : null, /* @__PURE__ */ React144.createElement(StyledPagination.Chevron, { disabled: disableRight, onClick: nextPage }, /* @__PURE__ */ React144.createElement(
    ChevronRightIcon4,
    {
      width: 16,
      height: 16,
      style: { cursor: disableRight ? "not-allowed" : "pointer" }
    }
  )));
};

// src/Prebuilt/components/VideoLayouts/Grid.tsx
import React145 from "react";
var Grid = React145.forwardRef(({ tiles, edgeToEdge }, ref) => {
  const videoTileProps = useVideoTileContext();
  return /* @__PURE__ */ React145.createElement(
    Box,
    {
      ref,
      css: {
        flex: "1 1 0",
        gap: "$4",
        display: "flex",
        placeContent: "center",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "row wrap",
        minHeight: 0,
        "@md": { gap: edgeToEdge ? 0 : "$4" }
      }
    },
    tiles == null ? void 0 : tiles.map((tile) => {
      var _a7, _b7, _c, _d;
      return /* @__PURE__ */ React145.createElement(
        VideoTile_default,
        __spreadValues({
          key: ((_a7 = tile.track) == null ? void 0 : _a7.id) || ((_b7 = tile.peer) == null ? void 0 : _b7.id),
          width: tile.width,
          height: tile.height,
          peerId: (_c = tile.peer) == null ? void 0 : _c.id,
          trackId: (_d = tile.track) == null ? void 0 : _d.id,
          rootCSS: { padding: 0 },
          objectFit: "contain"
        }, videoTileProps)
      );
    })
  );
});

// src/Prebuilt/components/hooks/useTileLayout.tsx
import { useEffect as useEffect47, useMemo as useMemo16, useState as useState58 } from "react";
import { useMeasure as useMeasure5, useMedia as useMedia30 } from "react-use";
import {
  getPeersWithTiles,
  selectTracksMap as selectTracksMap4,
  useHMSVanillaStore as useHMSVanillaStore12
} from "@100mslive/react-sdk";
var aspectRatioConfig = {
  default: [1 / 1, 4 / 3, 16 / 9],
  mobile: [1 / 1, 3 / 4, 9 / 16]
};
var usePagesWithTiles = ({
  peers,
  maxTileCount
}) => {
  const vanillaStore = useHMSVanillaStore12();
  const tracksMap = vanillaStore.getState(selectTracksMap4);
  const peersWithTiles = useMemo16(
    () => getPeersWithTiles(
      peers,
      tracksMap,
      () => false
    ),
    [peers, tracksMap]
  );
  const noOfPages = Math.ceil(peersWithTiles.length / maxTileCount);
  const pagesList = useMemo16(() => {
    let sliceStart = 0;
    let remaining = peersWithTiles.length;
    const list = [];
    for (let i = 0; i < noOfPages; i++) {
      const count = Math.min(remaining, maxTileCount);
      list.push(peersWithTiles.slice(sliceStart, sliceStart + count));
      remaining = remaining - count;
      sliceStart += count;
    }
    return list;
  }, [peersWithTiles, noOfPages, maxTileCount]);
  return pagesList;
};
var useTileLayout = ({
  pageList,
  maxTileCount,
  edgeToEdge = false
}) => {
  const vanillaStore = useHMSVanillaStore12();
  const [ref, { width, height }] = useMeasure5();
  const isMobile = useMedia30(config.media.lg);
  const [pagesWithTiles, setPagesWithTiles] = useState58([]);
  useEffect47(() => {
    if (width === 0 || height === 0) {
      return;
    }
    for (const page of pageList) {
      const noOfTilesInPage = page.length;
      let maxCols = noOfTilesInPage > 2 && noOfTilesInPage < 9 ? Math.ceil(noOfTilesInPage / 2) : Math.ceil(Math.sqrt(noOfTilesInPage));
      if (isMobile) {
        maxCols = noOfTilesInPage < 4 ? 1 : Math.min(maxCols, 2);
      }
      const maxRows = Math.ceil(noOfTilesInPage / maxCols);
      let index = 0;
      const matrix = new Array(maxRows).fill(null).map((_, i) => {
        const numCols = Math.min(maxCols, noOfTilesInPage - i * maxCols);
        const rowElements = [];
        for (let j = 0; j < numCols; j++) {
          if (index < page.length) {
            rowElements.push(page[index++]);
          }
        }
        return rowElements;
      });
      const gap = edgeToEdge && isMobile ? 0 : 8;
      const maxHeight = height - (maxRows - 1) * gap;
      const maxRowHeight = maxHeight / matrix.length;
      const aspectRatios = isMobile && (noOfTilesInPage === 1 || noOfTilesInPage > 3) ? aspectRatioConfig.mobile : aspectRatioConfig.default;
      for (const row of matrix) {
        let tileWidth = (width - (row.length - 1) * gap) / row.length;
        let tileHeight = 0;
        if (edgeToEdge) {
          tileHeight = maxRowHeight;
        } else {
          const calcHeights = aspectRatios.map((aR) => tileWidth / aR);
          for (const h of calcHeights) {
            if (h < maxRowHeight) {
              if (tileHeight < h) {
                tileHeight = h;
              }
            }
          }
          if (tileHeight === 0) {
            tileHeight = maxRowHeight;
            const calcWidths = aspectRatios.map((aR) => tileHeight * aR);
            tileWidth = 0;
            for (const w of calcWidths) {
              if (w < width) {
                if (tileWidth < w) {
                  tileWidth = w;
                }
              }
            }
          }
        }
        for (let i = 0; i < row.length; i++) {
          row[i].width = tileWidth;
          row[i].height = tileHeight;
        }
      }
    }
    setPagesWithTiles([...pageList]);
  }, [
    width,
    height,
    maxTileCount,
    pageList,
    vanillaStore,
    isMobile,
    edgeToEdge
  ]);
  return { pagesWithTiles, ref };
};

// src/Prebuilt/components/VideoLayouts/EqualProminence.tsx
function EqualProminence({
  isInsetEnabled = false,
  peers,
  onPageChange,
  onPageSize,
  edgeToEdge
}) {
  var _a7;
  const isMobile = useMedia31(config.media.md);
  let maxTileCount = useUISettings(UI_SETTINGS.maxTileCount);
  maxTileCount = isMobile ? Math.min(maxTileCount, 6) : maxTileCount;
  const pageList = usePagesWithTiles({
    peers,
    maxTileCount
  });
  const { ref, pagesWithTiles } = useTileLayout({
    pageList,
    maxTileCount,
    edgeToEdge
  });
  const [page, setPage] = useState59(0);
  const pageSize = ((_a7 = pagesWithTiles[0]) == null ? void 0 : _a7.length) || 0;
  useEffect48(() => {
    if (pageSize > 0) {
      onPageSize == null ? void 0 : onPageSize(pageSize);
    }
  }, [pageSize, onPageSize]);
  return /* @__PURE__ */ React146.createElement(
    Flex,
    {
      direction: "column",
      css: { flex: "1 1 0", h: "100%", position: "relative", minWidth: 0 }
    },
    /* @__PURE__ */ React146.createElement(Grid, { tiles: pagesWithTiles[page], ref, edgeToEdge }),
    !edgeToEdge && /* @__PURE__ */ React146.createElement(
      Pagination,
      {
        page,
        onPageChange: (page2) => {
          setPage(page2);
          onPageChange == null ? void 0 : onPageChange(page2);
        },
        numPages: pagesWithTiles.length
      }
    ),
    pageList.length === 0 ? /* @__PURE__ */ React146.createElement(
      WaitingView,
      {
        title: "You're the first to join",
        subtitle: "Sit back and relax till others join",
        icon: /* @__PURE__ */ React146.createElement(
          PeopleAddIcon2,
          {
            width: "56px",
            height: "56px",
            style: { color: "white" }
          }
        )
      }
    ) : null,
    isInsetEnabled && /* @__PURE__ */ React146.createElement(InsetTile, null)
  );
}

// src/Prebuilt/components/VideoLayouts/RoleProminence.tsx
import React149, { useEffect as useEffect50, useState as useState61 } from "react";
import { useMedia as useMedia33 } from "react-use";
import { selectLocalPeer as selectLocalPeer11, useHMSStore as useHMSStore78 } from "@100mslive/react-sdk";

// src/Prebuilt/components/SecondaryTiles.tsx
import React148, { useEffect as useEffect49, useRef as useRef28, useState as useState60 } from "react";
import { useMedia as useMedia32 } from "react-use";
import {
  selectAppData as selectAppData11,
  selectSessionStore as selectSessionStore13,
  selectTrackByID as selectTrackByID4,
  useHMSStore as useHMSStore77
} from "@100mslive/react-sdk";

// src/Prebuilt/components/VideoLayouts/ProminenceLayout.tsx
import React147 from "react";
var Root26 = ({
  children,
  edgeToEdge,
  hasSidebar
}) => {
  return /* @__PURE__ */ React147.createElement(
    Flex,
    {
      direction: hasSidebar ? "row" : "column",
      css: {
        h: "100%",
        flex: "1 1 0",
        minWidth: 0,
        gap: "$6",
        "@md": { gap: edgeToEdge ? 0 : "$6" }
      }
    },
    children
  );
};
var ProminentSection = ({
  children,
  css: css2 = {}
}) => {
  return /* @__PURE__ */ React147.createElement(
    Flex,
    {
      direction: "column",
      css: __spreadValues({ flex: "1 1 0", gap: "$2", minHeight: 0 }, css2)
    },
    children
  );
};
var SecondarySection = ({
  tiles,
  children,
  edgeToEdge,
  hasSidebar
}) => {
  const tileLayoutProps = useVideoTileContext();
  if (!(tiles == null ? void 0 : tiles.length)) {
    return null;
  }
  const gridStyles = hasSidebar ? {
    gridTemplateColumns: "1fr",
    gridTemplateRows: `repeat(${tiles.length}, minmax(0, 1fr))`,
    maxHeight: "100%",
    width: 240
  } : {
    gridTemplateRows: React147.Children.count(children) > 0 ? "136px auto" : "154px",
    gridTemplateColumns: `repeat(${tiles.length}, minmax(0, 1fr))`
  };
  return /* @__PURE__ */ React147.createElement(
    Box,
    {
      css: __spreadProps(__spreadValues({
        display: "grid",
        margin: "auto",
        gap: hasSidebar ? "$8" : "$2 $4",
        placeItems: "center"
      }, gridStyles), {
        "@md": { gap: edgeToEdge ? 0 : "$4" }
      })
    },
    tiles.map((tile) => {
      var _a7, _b7, _c, _d;
      return /* @__PURE__ */ React147.createElement(
        VideoTile_default,
        __spreadValues({
          key: ((_a7 = tile.track) == null ? void 0 : _a7.id) || ((_b7 = tile.peer) == null ? void 0 : _b7.id),
          peerId: (_c = tile.peer) == null ? void 0 : _c.id,
          trackId: (_d = tile.track) == null ? void 0 : _d.id,
          rootCSS: __spreadProps(__spreadValues({
            padding: 0,
            maxWidth: 240,
            aspectRatio: 16 / 9
          }, hasSidebar ? { w: "100%" } : { h: "100%" }), {
            "@md": { aspectRatio: 1 }
          }),
          objectFit: "contain"
        }, tileLayoutProps)
      );
    }),
    children && /* @__PURE__ */ React147.createElement(Box, { css: { gridColumn: hasSidebar ? 1 : `1/span ${tiles.length}` } }, children)
  );
};
var ProminenceLayout = {
  Root: Root26,
  ProminentSection,
  SecondarySection
};

// src/Prebuilt/components/SecondaryTiles.tsx
var SecondaryTiles = ({
  peers,
  onPageChange,
  onPageSize,
  edgeToEdge,
  hasSidebar
}) => {
  var _a7, _b7;
  const isMobile = useMedia32(config.media.md);
  const maxTileCount = isMobile ? 2 : 4;
  const [page, setPage] = useState60(0);
  const pinnedTrackId = useHMSStore77(selectAppData11(APP_DATA.pinnedTrackId));
  const spotlightPeerId = useHMSStore77(
    selectSessionStore13("spotlight" /* SPOTLIGHT */)
  );
  const activeScreensharePeerId = useHMSStore77(
    selectAppData11(APP_DATA.activeScreensharePeerId)
  );
  const pinnedPeer = (_a7 = useHMSStore77(selectTrackByID4(pinnedTrackId))) == null ? void 0 : _a7.peerId;
  const pageChangedAfterPinning = useRef28(false);
  const pagesWithTiles = usePagesWithTiles({
    peers: spotlightPeerId || pinnedPeer ? [...peers].sort((p1, p2) => {
      if (activeScreensharePeerId === p1.id) {
        return -1;
      }
      if (activeScreensharePeerId === p2.id) {
        return 1;
      }
      const peerIdList = [pinnedPeer, spotlightPeerId];
      if (peerIdList.includes(p1.id)) {
        return -1;
      }
      if (peerIdList.includes(p2.id)) {
        return 1;
      }
      return 0;
    }) : peers,
    maxTileCount
  });
  const pageSize = ((_b7 = pagesWithTiles[0]) == null ? void 0 : _b7.length) || 0;
  useEffect49(() => {
    var _a8;
    if (peers.length > 0 && !((_a8 = pagesWithTiles[page]) == null ? void 0 : _a8.length)) {
      setPage(Math.max(0, page - 1));
    }
  }, [peers, page, pagesWithTiles]);
  useEffect49(() => {
    if (pageSize > 0) {
      onPageSize == null ? void 0 : onPageSize(pageSize);
    }
  }, [pageSize, onPageSize]);
  useEffect49(() => {
    if ((pinnedPeer || spotlightPeerId) && page !== 0 && !pageChangedAfterPinning.current) {
      setPage(0);
      pageChangedAfterPinning.current = true;
    } else if (!pinnedPeer && !spotlightPeerId) {
      pageChangedAfterPinning.current = false;
    }
  }, [pinnedPeer, spotlightPeerId, page]);
  return /* @__PURE__ */ React148.createElement(
    ProminenceLayout.SecondarySection,
    {
      tiles: pagesWithTiles[page],
      edgeToEdge,
      hasSidebar
    },
    !edgeToEdge && /* @__PURE__ */ React148.createElement(
      Pagination,
      {
        page,
        onPageChange: (page2) => {
          setPage(page2);
          onPageChange == null ? void 0 : onPageChange(page2);
        },
        numPages: pagesWithTiles.length
      }
    )
  );
};

// src/Prebuilt/components/hooks/useRoleProminencePeers.tsx
import { useMemo as useMemo17 } from "react";
var useRoleProminencePeers = (prominentRoles, peers, isInsetEnabled) => {
  const pinnedTrack = usePinnedTrack();
  const [prominentPeers, secondaryPeers] = useMemo17(() => {
    return peers.reduce(
      (acc, peer) => {
        if (pinnedTrack) {
          if (pinnedTrack.peerId === peer.id) {
            acc[0].push(peer);
          } else if (!(isInsetEnabled && peer.isLocal)) {
            acc[1].push(peer);
          }
          return acc;
        }
        if (peer.isLocal && isInsetEnabled && !(prominentRoles == null ? void 0 : prominentRoles.includes(peer.roleName || ""))) {
          return acc;
        }
        if (prominentRoles == null ? void 0 : prominentRoles.includes(peer.roleName || "")) {
          acc[0].push(peer);
        } else {
          acc[1].push(peer);
        }
        return acc;
      },
      [[], []]
    );
  }, [peers, isInsetEnabled, prominentRoles, pinnedTrack]);
  return {
    prominentPeers,
    secondaryPeers
  };
};

// src/Prebuilt/components/VideoLayouts/RoleProminence.tsx
function RoleProminence({
  isInsetEnabled = false,
  prominentRoles = [],
  peers,
  onPageChange,
  onPageSize,
  edgeToEdge
}) {
  var _a7;
  const { prominentPeers, secondaryPeers } = useRoleProminencePeers(
    prominentRoles,
    peers,
    isInsetEnabled
  );
  const localPeer = useHMSStore78(selectLocalPeer11);
  const isMobile = useMedia33(config.media.md);
  let maxTileCount = useUISettings(UI_SETTINGS.maxTileCount);
  maxTileCount = isMobile ? 4 : maxTileCount;
  const pageList = usePagesWithTiles({
    peers: prominentPeers,
    maxTileCount
  });
  const { ref, pagesWithTiles } = useTileLayout({
    pageList,
    maxTileCount
  });
  const [page, setPage] = useState61(0);
  const pageSize = ((_a7 = pagesWithTiles[0]) == null ? void 0 : _a7.length) || 0;
  useEffect50(() => {
    if (pageSize > 0) {
      onPageSize == null ? void 0 : onPageSize(pageSize);
    }
  }, [pageSize, onPageSize]);
  return /* @__PURE__ */ React149.createElement(ProminenceLayout.Root, null, /* @__PURE__ */ React149.createElement(ProminenceLayout.ProminentSection, null, /* @__PURE__ */ React149.createElement(Grid, { ref, tiles: pagesWithTiles[page] })), !edgeToEdge && /* @__PURE__ */ React149.createElement(
    Pagination,
    {
      page,
      onPageChange: (page2) => {
        setPage(page2);
        onPageChange == null ? void 0 : onPageChange(page2);
      },
      numPages: pagesWithTiles.length
    }
  ), /* @__PURE__ */ React149.createElement(
    SecondaryTiles,
    {
      peers: secondaryPeers,
      isInsetEnabled,
      edgeToEdge
    }
  ), isInsetEnabled && localPeer && prominentPeers.length > 0 && !prominentPeers.includes(localPeer) && /* @__PURE__ */ React149.createElement(InsetTile, null));
}

// src/Prebuilt/components/VideoLayouts/ScreenshareLayout.tsx
import React153, { useEffect as useEffect51, useMemo as useMemo18, useState as useState64 } from "react";
import { useMedia as useMedia35 } from "react-use";
import { selectPeersScreenSharing, useHMSStore as useHMSStore80 } from "@100mslive/react-sdk";

// src/Prebuilt/components/ScreenshareTile.tsx
import React152, { useRef as useRef29, useState as useState63 } from "react";
import { useFullscreen as useFullscreen2, useMedia as useMedia34 } from "react-use";
import screenfull2 from "screenfull";
import {
  selectLocalPeerID as selectLocalPeerID15,
  selectPeerByID as selectPeerByID4,
  selectScreenShareAudioByPeerID,
  selectScreenShareByPeerID as selectScreenShareByPeerID2,
  useHMSStore as useHMSStore79
} from "@100mslive/react-sdk";
import { ExpandIcon as ExpandIcon3, ShrinkIcon as ShrinkIcon2 } from "@100mslive/react-icons";

// src/Prebuilt/components/LayoutModeSelector.tsx
import React150, { useCallback as useCallback34, useState as useState62 } from "react";
import {
  CheckIcon as CheckIcon7,
  ChevronDownIcon as ChevronDownIcon8,
  ChevronUpIcon as ChevronUpIcon6
} from "@100mslive/react-icons";
var LayoutModeSelector = () => {
  const [open, setOpen] = useState62(false);
  const [layoutMode, setLayoutMode] = useSetUiSettings(UI_SETTINGS.layoutMode);
  const updateLayoutMode = useCallback34(
    (value) => {
      setLayoutMode(value);
      setOpen(false);
    },
    [setLayoutMode, setOpen]
  );
  return /* @__PURE__ */ React150.createElement(Popover2.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React150.createElement(Popover2.Trigger, { asChild: true }, /* @__PURE__ */ React150.createElement(
    Flex,
    {
      align: "center",
      css: {
        gap: "$4",
        color: open ? "$on_surface_low" : "$on_surface_medium",
        r: "$1",
        p: "$2 $4",
        height: "100%"
      }
    },
    /* @__PURE__ */ React150.createElement(
      Flex,
      {
        align: "center",
        justify: "center",
        css: {
          color: "inherit",
          "& > svg": {
            w: "$9",
            h: "$9"
          }
        }
      },
      LayoutModeIconMapping[layoutMode]
    ),
    /* @__PURE__ */ React150.createElement(Text, { variant: "caption", css: { color: "inherit", lineHeight: "$sm" } }, layoutMode),
    open ? /* @__PURE__ */ React150.createElement(ChevronUpIcon6, { width: 16, height: 16 }) : /* @__PURE__ */ React150.createElement(ChevronDownIcon8, { width: 16, height: 16 })
  )), /* @__PURE__ */ React150.createElement(
    Popover2.Content,
    {
      css: {
        w: "10.75rem",
        r: "$1",
        py: "$4",
        px: 0,
        backgroundColor: "$surface_default",
        overflowY: "auto",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        fontFamily: "$sans",
        color: "$on_surface_high"
      },
      side: "bottom",
      sideOffset: 8,
      align: "end"
    },
    Object.keys(LayoutMode).map((key) => {
      const value = LayoutMode[key];
      return /* @__PURE__ */ React150.createElement(
        Flex,
        {
          key,
          onClick: () => updateLayoutMode(value),
          align: "center",
          css: {
            gap: "$4",
            borderBottom: "1px solid $border_bright",
            p: "$8",
            "&:hover": {
              cursor: "pointer",
              bg: "$surface_bright"
            },
            "&:focus-visible": {
              bg: "$surface_bright"
            }
          }
        },
        /* @__PURE__ */ React150.createElement(
          Flex,
          {
            align: "center",
            justify: "center",
            css: {
              color: "$on_surface_medium",
              "& > svg": {
                w: "$9",
                h: "$9"
              }
            }
          },
          LayoutModeIconMapping[value]
        ),
        /* @__PURE__ */ React150.createElement(Text, { variant: "caption", css: { lineHeight: "$sm" } }, value),
        value === layoutMode ? /* @__PURE__ */ React150.createElement(
          CheckIcon7,
          {
            width: 20,
            height: 20,
            style: { marginLeft: "auto" }
          }
        ) : null
      );
    })
  ));
};

// src/Prebuilt/components/ScreenshareDisplay.tsx
import React151 from "react";
import { useHMSActions as useHMSActions49 } from "@100mslive/react-sdk";
import { CrossIcon as CrossIcon26, ShareScreenIcon as ShareScreenIcon4 } from "@100mslive/react-icons";
var ScreenshareDisplay = () => {
  const hmsActions = useHMSActions49();
  return /* @__PURE__ */ React151.createElement(
    Flex,
    {
      direction: "column",
      align: "center",
      justify: "center",
      css: {
        size: "100%",
        bg: "$background_default",
        color: "$on_surface_high"
      }
    },
    /* @__PURE__ */ React151.createElement(ShareScreenIcon4, { width: 48, height: 48 }),
    /* @__PURE__ */ React151.createElement(Text, { variant: "h5", css: { m: "$8 0" } }, "You are sharing your screen"),
    /* @__PURE__ */ React151.createElement(
      Button,
      {
        variant: "danger",
        css: { fontWeight: "$semiBold" },
        onClick: () => __async(void 0, null, function* () {
          yield hmsActions.setScreenShareEnabled(false);
        }),
        "data-testid": "stop_screen_share_btn"
      },
      /* @__PURE__ */ React151.createElement(CrossIcon26, { width: 18, height: 18 }),
      "\xA0 Stop screen share"
    )
  );
};

// src/Prebuilt/components/ScreenshareTile.tsx
var labelStyles = {
  position: "unset",
  width: "100%",
  textAlign: "center",
  c: "$on_surface_high",
  transform: "none",
  flexShrink: 0
};
var Tile2 = ({
  peerId,
  width = "100%",
  height = "100%"
}) => {
  const isLocal = useHMSStore79(selectLocalPeerID15) === peerId;
  const track = useHMSStore79(selectScreenShareByPeerID2(peerId));
  const { theme: theme2 } = useTheme();
  const peer = useHMSStore79(selectPeerByID4(peerId));
  const isAudioOnly = useUISettings(UI_SETTINGS.isAudioOnly);
  const [isMouseHovered, setIsMouseHovered] = useState63(false);
  const isMobile = useMedia34(config.media.md);
  const showStatsOnTiles = useUISettings(UI_SETTINGS.showStatsOnTiles);
  const fullscreenRef = useRef29(null);
  const [fullscreen, setFullscreen] = useState63(false);
  const isFullscreen = useFullscreen2(fullscreenRef, fullscreen, {
    onClose: () => setFullscreen(false)
  });
  const isFullScreenSupported = screenfull2.isEnabled;
  const audioTrack = useHMSStore79(selectScreenShareAudioByPeerID(peer == null ? void 0 : peer.id));
  if (isLocal && (track == null ? void 0 : track.displaySurface) && !["browser", "window", "application"].includes(track.displaySurface)) {
    return /* @__PURE__ */ React152.createElement(ScreenshareDisplay, null);
  }
  if (!peer) {
    return null;
  }
  const label = getVideoTileLabel({
    peerName: peer == null ? void 0 : peer.name,
    isLocal: false,
    track
  });
  return /* @__PURE__ */ React152.createElement(
    StyledVideoTile.Root,
    {
      css: {
        width,
        height,
        p: 0,
        minHeight: 0
      },
      "data-testid": "screenshare_tile"
    },
    /* @__PURE__ */ React152.createElement(
      StyledVideoTile.Container,
      {
        transparentBg: true,
        ref: fullscreenRef,
        css: { flexDirection: "column", gap: "$2" },
        onMouseEnter: () => setIsMouseHovered(true),
        onMouseLeave: () => {
          setIsMouseHovered(false);
        }
      },
      showStatsOnTiles ? /* @__PURE__ */ React152.createElement(
        VideoTileStats,
        {
          audioTrackID: audioTrack == null ? void 0 : audioTrack.id,
          videoTrackID: track == null ? void 0 : track.id,
          peerID: peerId,
          isLocal
        }
      ) : null,
      isFullScreenSupported && isMouseHovered ? /* @__PURE__ */ React152.createElement(
        StyledVideoTile.FullScreenButton,
        {
          css: { bg: `${theme2.colors.background_dim.value}A3` },
          onClick: () => setFullscreen(!fullscreen)
        },
        isFullscreen ? /* @__PURE__ */ React152.createElement(ShrinkIcon2, null) : /* @__PURE__ */ React152.createElement(ExpandIcon3, null)
      ) : null,
      !isMobile && isMouseHovered && !isFullscreen && /* @__PURE__ */ React152.createElement(
        Box,
        {
          css: {
            position: "absolute",
            top: "$2",
            r: "$1",
            h: "$14",
            right: isFullScreenSupported ? "$17" : "$2",
            zIndex: 5,
            bg: `${theme2.colors.background_dim.value}A3`
          }
        },
        /* @__PURE__ */ React152.createElement(LayoutModeSelector, null)
      ),
      track ? /* @__PURE__ */ React152.createElement(
        Video,
        {
          screenShare: true,
          mirror: false,
          attach: !isAudioOnly,
          trackId: track.id,
          css: { minHeight: 0 }
        }
      ) : null,
      /* @__PURE__ */ React152.createElement(StyledVideoTile.Info, { css: labelStyles }, label),
      isMouseHovered && !peer.isLocal ? /* @__PURE__ */ React152.createElement(
        TileMenu_default,
        {
          isScreenshare: true,
          peerID: peer.id,
          audioTrackID: audioTrack == null ? void 0 : audioTrack.id,
          videoTrackID: track == null ? void 0 : track.id,
          enableSpotlightingPeer: false
        }
      ) : null
    )
  );
};
var ScreenshareTile = React152.memo(Tile2);
var ScreenshareTile_default = ScreenshareTile;

// src/Prebuilt/components/VideoLayouts/ScreenshareLayout.tsx
var ScreenshareLayout = ({
  peers,
  onPageChange,
  onPageSize,
  edgeToEdge
}) => {
  var _a7;
  const peersSharing = useHMSStore80(selectPeersScreenSharing);
  const [, setActiveScreenSharePeer] = useSetAppDataByKey(
    APP_DATA.activeScreensharePeerId
  );
  const [page, setPage] = useState64(0);
  const [layoutMode, setLayoutMode] = useSetUiSettings(UI_SETTINGS.layoutMode);
  const activeSharePeer = peersSharing[page];
  const isMobile = useMedia35(config.media.md);
  const hasSidebar = !isMobile && layoutMode === LayoutMode.SIDEBAR;
  const secondaryPeers = useMemo18(() => {
    if (layoutMode === LayoutMode.SPOTLIGHT) {
      return [];
    }
    if (isMobile || layoutMode === LayoutMode.SIDEBAR) {
      return activeSharePeer ? [
        activeSharePeer,
        ...peers.filter((p) => p.id !== (activeSharePeer == null ? void 0 : activeSharePeer.id))
      ] : peers;
    }
    return peers.filter((p) => p.id !== (activeSharePeer == null ? void 0 : activeSharePeer.id));
  }, [activeSharePeer, peers, isMobile, layoutMode]);
  useEffect51(() => {
    if (isMobile) {
      setLayoutMode(LayoutMode.GALLERY);
      return;
    }
    if (layoutMode === LayoutMode.SIDEBAR) {
      return;
    }
    setLayoutMode(LayoutMode.SIDEBAR);
    return () => {
      setLayoutMode(LayoutMode.GALLERY);
    };
  }, [isMobile]);
  useEffect51(() => {
    setActiveScreenSharePeer(activeSharePeer == null ? void 0 : activeSharePeer.id);
    return () => {
      setActiveScreenSharePeer("");
    };
  }, [activeSharePeer == null ? void 0 : activeSharePeer.id, setActiveScreenSharePeer]);
  return /* @__PURE__ */ React153.createElement(ProminenceLayout.Root, { edgeToEdge, hasSidebar }, /* @__PURE__ */ React153.createElement(ProminenceLayout.ProminentSection, null, /* @__PURE__ */ React153.createElement(ScreenshareTile_default, { peerId: (_a7 = peersSharing[page]) == null ? void 0 : _a7.id }), !edgeToEdge && /* @__PURE__ */ React153.createElement(
    Pagination,
    {
      page,
      onPageChange: setPage,
      numPages: peersSharing.length
    }
  )), /* @__PURE__ */ React153.createElement(
    SecondaryTiles,
    {
      peers: secondaryPeers,
      onPageChange,
      onPageSize,
      edgeToEdge,
      hasSidebar
    }
  ), layoutMode === LayoutMode.SPOTLIGHT && activeSharePeer && /* @__PURE__ */ React153.createElement(InsetTile, { peerId: activeSharePeer == null ? void 0 : activeSharePeer.id }));
};

// src/Prebuilt/components/VideoLayouts/WhiteboardLayout.tsx
import React154, { useEffect as useEffect52, useMemo as useMemo19 } from "react";
import { useMedia as useMedia36 } from "react-use";
import { Whiteboard } from "@100mslive/hms-whiteboard";
import {
  selectPeerByCondition,
  selectWhiteboard,
  useHMSStore as useHMSStore81,
  useWhiteboard as useWhiteboard2
} from "@100mslive/react-sdk";
var WhiteboardEmbed = () => {
  const isMobile = useMedia36(config.media.md);
  const { token, endpoint, zoomToContent } = useWhiteboard2(isMobile);
  if (!token) {
    return null;
  }
  return /* @__PURE__ */ React154.createElement(
    Box,
    {
      css: {
        mx: "$8",
        flex: "3 1 0",
        "@lg": {
          flex: "2 1 0",
          display: "flex",
          alignItems: "center"
        }
      }
    },
    /* @__PURE__ */ React154.createElement(Box, { css: { size: "100%" } }, /* @__PURE__ */ React154.createElement(
      Whiteboard,
      {
        token,
        endpoint: `https://${endpoint}`,
        zoomToContent
      }
    ))
  );
};
var WhiteboardLayout = ({
  peers,
  onPageChange,
  onPageSize,
  edgeToEdge
}) => {
  const whiteboard = useHMSStore81(selectWhiteboard);
  const whiteboardOwner = useHMSStore81(
    selectPeerByCondition((peer) => peer.customerUserId === (whiteboard == null ? void 0 : whiteboard.owner))
  );
  const [layoutMode, setLayoutMode] = useSetUiSettings(UI_SETTINGS.layoutMode);
  const isMobile = useMedia36(config.media.md);
  const hasSidebar = !isMobile && layoutMode === LayoutMode.SIDEBAR;
  const secondaryPeers = useMemo19(() => {
    if (layoutMode === LayoutMode.SPOTLIGHT) {
      return [];
    }
    if (isMobile || layoutMode === LayoutMode.SIDEBAR) {
      return whiteboardOwner ? [
        whiteboardOwner,
        ...peers.filter((p) => p.id !== (whiteboardOwner == null ? void 0 : whiteboardOwner.id))
      ] : peers;
    }
    return peers.filter((p) => p.id !== (whiteboardOwner == null ? void 0 : whiteboardOwner.id));
  }, [whiteboardOwner, peers, isMobile, layoutMode]);
  useEffect52(() => {
    if (isMobile) {
      setLayoutMode(LayoutMode.GALLERY);
      return;
    }
    if (layoutMode === LayoutMode.SIDEBAR) {
      return;
    }
    setLayoutMode(LayoutMode.SIDEBAR);
    return () => {
      setLayoutMode(LayoutMode.GALLERY);
    };
  }, [isMobile]);
  return /* @__PURE__ */ React154.createElement(ProminenceLayout.Root, { edgeToEdge, hasSidebar }, /* @__PURE__ */ React154.createElement(ProminenceLayout.ProminentSection, null, /* @__PURE__ */ React154.createElement(WhiteboardEmbed, null)), /* @__PURE__ */ React154.createElement(
    SecondaryTiles,
    {
      peers: secondaryPeers,
      onPageChange,
      onPageSize,
      edgeToEdge,
      hasSidebar
    }
  ), layoutMode === LayoutMode.SPOTLIGHT && whiteboardOwner && /* @__PURE__ */ React154.createElement(InsetTile, { peerId: whiteboardOwner == null ? void 0 : whiteboardOwner.id }));
};

// src/Prebuilt/common/PeersSorter.ts
import {
  selectDominantSpeaker as selectDominantSpeaker2
} from "@100mslive/react-sdk";
var PeersSorter = class {
  constructor(store) {
    this.storeUnsubscribe = void 0;
    this.setPeersAndTilesPerPage = ({
      peers,
      tilesPerPage
    }) => {
      this.speaker = void 0;
      this.tilesPerPage = tilesPerPage;
      const peerIds = new Set(peers.map((peer) => peer.id));
      this.peers.forEach((_, key) => {
        if (!peerIds.has(key)) {
          this.peers.delete(key);
        }
      });
      this.lruPeers = new Set(
        [...this.lruPeers].filter((peerId) => peerIds.has(peerId))
      );
      peers.forEach((peer) => {
        this.peers.set(peer.id, peer);
        if (this.lruPeers.size < tilesPerPage) {
          this.lruPeers.add(peer.id);
        }
      });
      if (!this.storeUnsubscribe) {
        this.storeUnsubscribe = this.store.subscribe(
          this.onDominantSpeakerChange,
          selectDominantSpeaker2
        );
      }
      this.moveSpeakerToFront(this.speaker);
    };
    this.onUpdate = (cb) => {
      this.listeners.add(cb);
    };
    this.stop = () => {
      var _a7;
      this.updateListeners();
      this.listeners.clear();
      (_a7 = this.storeUnsubscribe) == null ? void 0 : _a7.call(this);
      this.storeUnsubscribe = void 0;
      this.speaker = void 0;
    };
    this.moveSpeakerToFront = (speaker) => {
      if (!speaker) {
        this.maintainLruSize(this.tilesPerPage);
        this.updateListeners();
        return;
      }
      if (this.lruPeers.has(speaker.id) && this.lruPeers.size <= this.tilesPerPage) {
        this.updateListeners();
        return;
      }
      this.lruPeers.delete(speaker.id);
      this.maintainLruSize(this.tilesPerPage - 1);
      this.lruPeers = /* @__PURE__ */ new Set([speaker.id, ...this.lruPeers]);
      this.updateListeners();
    };
    this.onDominantSpeakerChange = (speaker) => {
      var _a7;
      if (!speaker || speaker.id === ((_a7 = this.speaker) == null ? void 0 : _a7.id)) {
        return;
      }
      if (!this.peers.has(speaker.id)) {
        return;
      }
      this.speaker = speaker;
      this.moveSpeakerToFront(speaker);
    };
    this.updateListeners = () => {
      const orderedPeers = [];
      this.lruPeers.forEach((key) => {
        const peer = this.peers.get(key);
        if (peer) {
          orderedPeers.push(peer);
        }
      });
      this.peers.forEach((peer) => {
        if (!this.lruPeers.has(peer.id) && peer) {
          orderedPeers.push(peer);
        }
      });
      this.listeners.forEach((listener) => listener == null ? void 0 : listener(orderedPeers));
    };
    this.maintainLruSize = (size) => {
      const lruPeerArray = Array.from(this.lruPeers);
      while (lruPeerArray.length > size && lruPeerArray.length) {
        lruPeerArray.pop();
      }
      this.lruPeers = new Set(lruPeerArray);
    };
    this.store = store;
    this.peers = /* @__PURE__ */ new Map();
    this.lruPeers = /* @__PURE__ */ new Set();
    this.speaker = void 0;
    this.listeners = /* @__PURE__ */ new Set();
  }
};
var PeersSorter_default = PeersSorter;

// src/Prebuilt/components/VideoLayouts/GridLayout.tsx
var GridLayout = ({
  enable_local_tile_inset: isInsetEnabled = false,
  prominent_roles: prominentRoles = [],
  enable_spotlighting_peer = false,
  hide_participant_name_on_tile = false,
  rounded_video_tile = true,
  hide_audio_mute_on_tile = false,
  video_object_fit = "contain",
  edge_to_edge = false,
  hide_metadata_on_tile = false
}) => {
  const peerSharing = useHMSStore82(selectPeerScreenSharing2);
  const whiteboard = useHMSStore82(selectWhiteboard2);
  const pinnedTrack = usePinnedTrack();
  const peers = useHMSStore82(selectPeers3);
  const localPeerRole = useHMSStore82(selectLocalPeerRoleName5);
  const localPeerID = useHMSStore82(selectLocalPeerID16);
  const [activeScreensharePeerId] = useSetAppDataByKey(
    APP_DATA.activeScreensharePeerId
  );
  const isRoleProminence = prominentRoles.length && peers.some(
    (peer) => peer.roleName && prominentRoles.includes(peer.roleName) && (peer.videoTrack || peer.audioTrack)
  ) || pinnedTrack;
  const updatedPeers = useMemo20(() => {
    if (activeScreensharePeerId || (whiteboard == null ? void 0 : whiteboard.open)) {
      return peers.filter(
        (peer) => peer.id !== activeScreensharePeerId || peer.customerUserId !== (whiteboard == null ? void 0 : whiteboard.owner)
      );
    }
    if (isInsetEnabled) {
      const isLocalPeerPinned = localPeerID === (pinnedTrack == null ? void 0 : pinnedTrack.peerId);
      if (localPeerRole && prominentRoles.includes(localPeerRole) || isLocalPeerPinned) {
        return peers;
      } else {
        return peers.filter((peer) => !peer.isLocal);
      }
    }
    return peers;
  }, [
    isInsetEnabled,
    whiteboard,
    activeScreensharePeerId,
    localPeerRole,
    localPeerID,
    prominentRoles,
    peers,
    pinnedTrack
  ]);
  const vanillaStore = useHMSVanillaStore13();
  const [sortedPeers, setSortedPeers] = useState65(updatedPeers);
  const peersSorter = useMemo20(
    () => new PeersSorter_default(vanillaStore),
    [vanillaStore]
  );
  const [pageSize, setPageSize] = useState65(0);
  const [mainPage, setMainPage] = useState65(0);
  const tileLayout = {
    enableSpotlightingPeer: enable_spotlighting_peer,
    hideParticipantNameOnTile: hide_participant_name_on_tile,
    roundedVideoTile: rounded_video_tile,
    hideAudioMuteOnTile: hide_audio_mute_on_tile,
    hideMetadataOnTile: hide_metadata_on_tile,
    objectFit: video_object_fit
  };
  useEffect53(() => {
    if (mainPage !== 0) {
      return;
    }
    peersSorter.setPeersAndTilesPerPage({
      peers: updatedPeers,
      tilesPerPage: pageSize
    });
    peersSorter.onUpdate(setSortedPeers);
  }, [mainPage, peersSorter, updatedPeers, pageSize]);
  if (peerSharing) {
    return /* @__PURE__ */ React155.createElement(VideoTileContext.Provider, { value: tileLayout }, /* @__PURE__ */ React155.createElement(
      ScreenshareLayout,
      {
        peers: sortedPeers,
        onPageSize: setPageSize,
        onPageChange: setMainPage,
        edgeToEdge: edge_to_edge
      }
    ));
  } else if (whiteboard == null ? void 0 : whiteboard.open) {
    return /* @__PURE__ */ React155.createElement(VideoTileContext.Provider, { value: tileLayout }, /* @__PURE__ */ React155.createElement(
      WhiteboardLayout,
      {
        peers: sortedPeers,
        onPageSize: setPageSize,
        onPageChange: setMainPage,
        edgeToEdge: edge_to_edge
      }
    ));
  } else if (isRoleProminence) {
    return /* @__PURE__ */ React155.createElement(VideoTileContext.Provider, { value: tileLayout }, /* @__PURE__ */ React155.createElement(
      RoleProminence,
      {
        peers: sortedPeers,
        onPageSize: setPageSize,
        onPageChange: setMainPage,
        prominentRoles,
        isInsetEnabled,
        edgeToEdge: edge_to_edge
      }
    ));
  }
  return /* @__PURE__ */ React155.createElement(VideoTileContext.Provider, { value: tileLayout }, /* @__PURE__ */ React155.createElement(
    EqualProminence,
    {
      peers: sortedPeers,
      onPageSize: setPageSize,
      onPageChange: setMainPage,
      isInsetEnabled,
      edgeToEdge: edge_to_edge
    }
  ));
};

// src/Prebuilt/layouts/EmbedView.jsx
import React156, { useEffect as useEffect54, useMemo as useMemo21 } from "react";
import {
  selectAppData as selectAppData12,
  selectPeers as selectPeers4,
  selectPeerScreenSharing as selectPeerScreenSharing3,
  useEmbedShare,
  useHMSStore as useHMSStore83
} from "@100mslive/react-sdk";
var EmbedView = () => {
  return /* @__PURE__ */ React156.createElement(EmbedScreenShareView, null, /* @__PURE__ */ React156.createElement(EmbedComponent, null));
};
var EmbedScreenShareView = ({ children }) => {
  const peers = useHMSStore83(selectPeers4);
  const peerPresenting = useHMSStore83(selectPeerScreenSharing3);
  const [, setActiveScreenSharePeer] = useSetAppDataByKey(
    APP_DATA.activeScreensharePeerId
  );
  const smallTilePeers = useMemo21(() => {
    const smallTilePeers2 = peers.filter(
      (peer) => peer.id !== (peerPresenting == null ? void 0 : peerPresenting.id)
    );
    return smallTilePeers2;
  }, [peers, peerPresenting]);
  useEffect54(() => {
    setActiveScreenSharePeer(peerPresenting == null ? void 0 : peerPresenting.id);
    return () => {
      setActiveScreenSharePeer("");
    };
  }, [peerPresenting == null ? void 0 : peerPresenting.id, setActiveScreenSharePeer]);
  return /* @__PURE__ */ React156.createElement(ProminenceLayout.Root, null, /* @__PURE__ */ React156.createElement(ProminenceLayout.ProminentSection, null, children), /* @__PURE__ */ React156.createElement(SecondaryTiles, { peers: smallTilePeers }));
};
var EmbedComponent = () => {
  const embedConfig = useHMSStore83(selectAppData12(APP_DATA.embedConfig));
  const resetConfig = useResetEmbedConfig();
  const { iframeRef, startEmbedShare, isEmbedShareInProgress } = useEmbedShare(resetConfig);
  useEffect54(() => {
    (() => __async(void 0, null, function* () {
      if (embedConfig && !isEmbedShareInProgress) {
        try {
          yield startEmbedShare(embedConfig);
        } catch (err) {
          resetConfig();
          ToastManager.addToast({
            title: `Error while sharing embed url ${err.message || ""}`,
            variant: "error"
          });
        }
      }
    }))();
  }, [isEmbedShareInProgress, embedConfig, startEmbedShare, resetConfig]);
  return /* @__PURE__ */ React156.createElement(
    Box,
    {
      css: {
        mx: "$8",
        flex: "3 1 0",
        "@lg": {
          flex: "2 1 0",
          display: "flex",
          alignItems: "center"
        }
      }
    },
    /* @__PURE__ */ React156.createElement(
      "iframe",
      {
        title: "Embed View",
        ref: iframeRef,
        style: {
          width: "100%",
          height: "100%",
          border: 0,
          borderRadius: "0.75rem"
        },
        allow: "autoplay; clipboard-write;",
        referrerPolicy: "no-referrer"
      }
    )
  );
};

// src/Prebuilt/layouts/PDFView.jsx
import React157, { useEffect as useEffect55 } from "react";
import { usePDFShare } from "@100mslive/react-sdk";
var PDFView = () => {
  const pdfConfig = usePDFConfig();
  const resetConfig = useResetPDFConfig();
  const { iframeRef, startPDFShare, isPDFShareInProgress } = usePDFShare(resetConfig);
  useEffect55(() => {
    return () => {
      resetConfig();
    };
  }, []);
  useEffect55(() => {
    (() => __async(void 0, null, function* () {
      try {
        if (!isPDFShareInProgress && pdfConfig) {
          yield startPDFShare(pdfConfig);
        }
      } catch (err) {
        resetConfig();
        ToastManager.addToast({
          title: `Error while sharing annotator ${err.message || ""}`,
          variant: "error"
        });
      }
    }))();
  }, [isPDFShareInProgress, pdfConfig, resetConfig, startPDFShare]);
  return /* @__PURE__ */ React157.createElement(EmbedScreenShareView, null, /* @__PURE__ */ React157.createElement(
    Box,
    {
      css: {
        mx: "$8",
        flex: "3 1 0",
        "@lg": {
          flex: "2 1 0",
          display: "flex",
          alignItems: "center"
        }
      }
    },
    /* @__PURE__ */ React157.createElement(
      "iframe",
      {
        title: "Embed View",
        ref: iframeRef,
        style: {
          width: "100%",
          height: "100%",
          border: 0,
          borderRadius: "0.75rem"
        },
        allow: "autoplay; clipboard-write;",
        referrerPolicy: "no-referrer"
      }
    )
  ));
};

// src/Prebuilt/plugins/CaptionsViewer.tsx
import React158, { useEffect as useEffect56, useRef as useRef30, useState as useState66 } from "react";
import Draggable2 from "react-draggable";
import { useMedia as useMedia37 } from "react-use";
import {
  selectIsTranscriptionEnabled as selectIsTranscriptionEnabled5,
  selectPeerNameByID as selectPeerNameByID6,
  useHMSStore as useHMSStore84,
  useTranscript
} from "@100mslive/react-sdk";
var SimpleQueue = class {
  constructor(capacity = 3, MAX_STORAGE_TIME = 5e3) {
    this.capacity = capacity;
    this.MAX_STORAGE_TIME = MAX_STORAGE_TIME;
    this.storage = [];
  }
  enqueue(data3) {
    var _a7;
    if (!data3.transcript.trim()) {
      return;
    }
    if (this.size() === this.capacity && this.storage[this.size() - 1].final) {
      this.dequeue(this.storage[this.size() - 1]);
    }
    if (this.size() === 0) {
      this.storage.push(data3);
      this.addTimeout(this.storage[this.size() - 1], data3.final);
      return;
    }
    if (this.size() > 0 && ((_a7 = this.storage[this.size() - 1]) == null ? void 0 : _a7.final) === true) {
      this.storage.push(data3);
      this.addTimeout(this.storage[this.size() - 1], data3.final);
      return;
    }
    this.storage[this.size() - 1].transcript = data3.transcript;
    this.storage[this.size() - 1].final = data3.final;
    this.storage[this.size() - 1].end = data3.end;
    this.addTimeout(this.storage[this.size() - 1], data3.final);
  }
  addTimeout(item, isFinal) {
    if (!isFinal) {
      return;
    }
    item.timeout = setTimeout(() => {
      this.dequeue(item);
    }, this.MAX_STORAGE_TIME);
  }
  dequeue(item) {
    const index = this.storage.indexOf(item);
    if (index === -1) {
      return void 0;
    }
    const removedItem = this.storage.splice(index, 1);
    if (removedItem.length <= 0) {
      return void 0;
    }
    this.clearTimeout(removedItem[0]);
    return item;
  }
  clearTimeout(item) {
    if (!item.timeout) {
      return;
    }
    clearTimeout(item.timeout);
  }
  peek() {
    if (this.size() <= 0) {
      return void 0;
    }
    return this.storage[0];
  }
  getTranscription() {
    let script = "";
    this.storage.forEach(
      (value) => script += value.transcript + " "
    );
    return script;
  }
  reset() {
    this.storage.length = 0;
  }
  size() {
    return this.storage.length;
  }
};
var Queue = class {
  constructor(capacity = 3) {
    this.capacity = capacity;
    this.storage = {};
  }
  enqueue(data3) {
    if (this.size() === this.capacity) {
      this.dequeue();
    }
    if (!this.storage[data3.peer_id]) {
      this.storage[data3.peer_id] = {
        peer_id: data3.peer_id,
        transcript: data3.transcript,
        final: data3.final,
        transcriptQueue: new SimpleQueue(),
        start: data3.start,
        end: data3.end
      };
      this.storage[data3.peer_id].transcriptQueue.enqueue(
        data3
      );
      return;
    }
    this.storage[data3.peer_id].transcriptQueue.enqueue(data3);
  }
  dequeue() {
    const key = Object.keys(this.storage).shift() || "";
    const captionData = this.storage[key];
    captionData.transcriptQueue.reset();
    delete this.storage[key];
    return captionData;
  }
  peek() {
    if (this.size() <= 0) return void 0;
    const key = Object.keys(this.storage).shift() || "";
    return this.storage[key];
  }
  findPeerData() {
    const keys = Object.keys(this.storage);
    const data3 = keys.map((key) => {
      const data4 = this.storage[key];
      const word = data4.transcriptQueue.getTranscription();
      return { [key]: word };
    });
    return data3;
  }
  size() {
    return Object.keys(this.storage).length;
  }
};
var CaptionMaintainerQueue = class {
  constructor() {
    this.captionData = new Queue();
  }
  push(data3 = []) {
    data3.forEach((value) => {
      this.captionData.enqueue(value);
    });
  }
};
var TranscriptView = ({
  peer_id,
  data: data3
}) => {
  const peerName = useHMSStore84(selectPeerNameByID6(peer_id)) || "Participant";
  data3 = data3.trim();
  if (!data3) return null;
  return /* @__PURE__ */ React158.createElement(
    Text,
    {
      variant: "body2",
      css: {
        fontWeight: "$normal"
      }
    },
    /* @__PURE__ */ React158.createElement("b", null, peerName, ": "),
    data3
  );
};
var CaptionsViewer = ({
  defaultPosition,
  setDefaultPosition
}) => {
  var _a7;
  const { elements, screenType } = useRoomLayoutConferencingScreen();
  const isMobile = useMedia37(config.media.md);
  const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
  const showCaptionAtTop = ((_a7 = elements == null ? void 0 : elements.chat) == null ? void 0 : _a7.is_overlay) && isChatOpen && isMobile;
  const [captionQueue] = useState66(
    new CaptionMaintainerQueue()
  );
  const [currentData, setCurrentData] = useState66(
    []
  );
  const isCaptionEnabled = useIsCaptionEnabled();
  const isTranscriptionEnabled = useHMSStore84(selectIsTranscriptionEnabled5);
  const nodeRef = useRef30(null);
  useEffect56(() => {
    const timeInterval = setInterval(() => {
      var _a8;
      if (!captionQueue) {
        return;
      }
      const data3 = (_a8 = captionQueue.captionData) == null ? void 0 : _a8.findPeerData();
      setCurrentData(data3);
    }, 1e3);
    return () => clearInterval(timeInterval);
  }, [captionQueue]);
  useTranscript({
    onTranscript: (data3) => {
      captionQueue && captionQueue.push(data3);
    }
  });
  const dataToShow = currentData.filter((data3) => {
    const key = Object.keys(data3)[0];
    if (data3[key]) {
      return true;
    }
    return false;
  });
  if (dataToShow.length <= 0 || screenType === "hls_live_streaming" || !isCaptionEnabled || !isTranscriptionEnabled) {
    return null;
  }
  return /* @__PURE__ */ React158.createElement(
    Draggable2,
    {
      bounds: "parent",
      nodeRef,
      defaultPosition,
      onStop: (_, data3) => {
        setDefaultPosition({ x: data3.lastX, y: data3.lastY });
      }
    },
    /* @__PURE__ */ React158.createElement(
      Box,
      {
        ref: nodeRef,
        css: {
          position: "absolute",
          w: isMobile ? "100%" : "40%",
          bottom: showCaptionAtTop ? "" : "0",
          top: showCaptionAtTop ? "0" : "",
          left: isMobile ? 0 : "50%",
          transform: isMobile ? "" : "translateX(-50%)",
          background: "#000000A3",
          overflow: "clip",
          zIndex: 10,
          height: "fit-content",
          r: "$1",
          p: "$6",
          transition: "bottom 0.3s ease-in-out",
          "&:empty": { display: "none" }
        }
      },
      /* @__PURE__ */ React158.createElement(Flex, { direction: "column" }, dataToShow.map((data3, index) => {
        const key = Object.keys(data3)[0];
        return /* @__PURE__ */ React158.createElement(TranscriptView, { key: index, peer_id: key, data: data3[key] });
      }))
    )
  );
};

// src/Prebuilt/components/hooks/useCloseScreenshareWhiteboard.tsx
import { useEffect as useEffect57 } from "react";
import {
  selectPeerScreenSharing as selectPeerScreenSharing4,
  useHMSStore as useHMSStore85,
  useWhiteboard as useWhiteboard3
} from "@100mslive/react-sdk";
var useCloseScreenshareWhiteboard = () => {
  const peerSharing = useHMSStore85(selectPeerScreenSharing4);
  const { isOwner: isWhiteboardOwner, toggle: toggleWhiteboard } = useWhiteboard3();
  useEffect57(() => {
    if (isWhiteboardOwner && peerSharing) {
      toggleWhiteboard == null ? void 0 : toggleWhiteboard();
    }
  }, [isWhiteboardOwner, toggleWhiteboard, peerSharing]);
};

// src/Prebuilt/layouts/VideoStreamingSection.tsx
var HLSView = React159.lazy(() => import("./HLSView-SYFVT5PO.js"));
var VideoStreamingSection = ({
  screenType,
  elements,
  hideControls = false
}) => {
  var _a7;
  const localPeerRoleName = useHMSStore86(selectLocalPeerRoleName6);
  const isConnected = useHMSStore86(selectIsConnectedToRoom9);
  const isSharingScreen = useHMSStore86(selectIsLocalScreenShared2);
  const hmsActions = useHMSActions50();
  const urlToIframe = useUrlToEmbed();
  const pdfAnnotatorActive = usePDFConfig();
  const isMobileHLSStream = useMobileHLSStream();
  const isLandscapeHLSStream = useLandscapeHLSStream();
  const isMobile = useMedia38(config.media.md);
  const [captionPosition, setCaptionPosition] = useState67({
    x: isMobile ? 0 : -200,
    y: 0
  });
  useCloseScreenshareWhiteboard();
  const {
    isNotAllowedToPublish,
    isScreenOnlyPublishParams,
    hasSubscribedRolePublishing
  } = useWaitingRoomInfo();
  useEffect58(() => {
    if (!isConnected) {
      return;
    }
    hmsActions.sessionStore.observe([
      "pinnedMessages" /* PINNED_MESSAGES */,
      "spotlight" /* SPOTLIGHT */,
      "chatState" /* CHAT_STATE */,
      "chatMessageBlacklist" /* CHAT_MESSAGE_BLACKLIST */,
      "chatPeerBlacklist" /* CHAT_PEER_BLACKLIST */
    ]);
  }, [isConnected, hmsActions]);
  if (!localPeerRoleName) {
    return null;
  }
  return /* @__PURE__ */ React159.createElement(Suspense, { fallback: /* @__PURE__ */ React159.createElement(FullPageProgress_default, null) }, /* @__PURE__ */ React159.createElement(
    Flex,
    {
      css: {
        size: "100%",
        position: "relative",
        gap: isMobileHLSStream || isLandscapeHLSStream ? "0" : "$4"
      },
      direction: match13({
        isLandscapeHLSStream,
        isMobileHLSStream
      }).with({ isLandscapeHLSStream: true }, () => "row").with({ isMobileHLSStream: true }, () => "column").otherwise(() => "row")
    },
    match13({
      screenType,
      isNotAllowedToPublish,
      isScreenOnlyPublishParams,
      hasSubscribedRolePublishing,
      isSharingScreen,
      pdfAnnotatorActive,
      urlToIframe
    }).with(
      {
        screenType: "hls_live_streaming"
      },
      () => /* @__PURE__ */ React159.createElement(HLSView, null)
    ).when(
      ({ isNotAllowedToPublish: isNotAllowedToPublish2, hasSubscribedRolePublishing: hasSubscribedRolePublishing2 }) => isNotAllowedToPublish2 && !hasSubscribedRolePublishing2,
      () => /* @__PURE__ */ React159.createElement(
        WaitingView,
        {
          title: "Waiting for Host to join",
          subtitle: "Sit back and relax",
          icon: /* @__PURE__ */ React159.createElement(
            PeopleAddIcon3,
            {
              width: "56px",
              height: "56px",
              style: { color: "white" }
            }
          )
        }
      )
    ).when(
      ({
        isScreenOnlyPublishParams: isScreenOnlyPublishParams2,
        isSharingScreen: isSharingScreen2,
        hasSubscribedRolePublishing: hasSubscribedRolePublishing2
      }) => isScreenOnlyPublishParams2 && !isSharingScreen2 && !hasSubscribedRolePublishing2,
      () => /* @__PURE__ */ React159.createElement(
        WaitingView,
        {
          title: "Ready to present",
          subtitle: "Select the Screenshare button to start presenting",
          icon: /* @__PURE__ */ React159.createElement(
            ShareScreenIcon5,
            {
              width: "56px",
              height: "56px",
              style: { color: "white" }
            }
          )
        }
      )
    ).when(
      ({ pdfAnnotatorActive: pdfAnnotatorActive2 }) => !!pdfAnnotatorActive2,
      () => /* @__PURE__ */ React159.createElement(PDFView, null)
    ).when(
      ({ urlToIframe: urlToIframe2 }) => !!urlToIframe2,
      () => /* @__PURE__ */ React159.createElement(EmbedView, null)
    ).otherwise(() => {
      var _a8;
      return /* @__PURE__ */ React159.createElement(
        GridLayout,
        __spreadValues({}, (_a8 = elements == null ? void 0 : elements.video_tile_layout) == null ? void 0 : _a8.grid)
      );
    }),
    /* @__PURE__ */ React159.createElement(
      CaptionsViewer,
      {
        setDefaultPosition: setCaptionPosition,
        defaultPosition: captionPosition
      }
    ),
    /* @__PURE__ */ React159.createElement(
      Box,
      {
        css: {
          flex: match13({ isLandscapeHLSStream, isMobileHLSStream }).with({ isLandscapeHLSStream: true }, () => "1  1 0").with({ isMobileHLSStream: true }, () => "2 1 0").otherwise(() => void 0),
          position: "relative",
          height: !isMobileHLSStream ? "100%" : void 0,
          maxHeight: "100%",
          "&:empty": { display: "none" },
          overflowY: "clip"
        }
      },
      /* @__PURE__ */ React159.createElement(
        SidePane_default,
        {
          screenType,
          tileProps: (_a7 = elements == null ? void 0 : elements.video_tile_layout) == null ? void 0 : _a7.grid,
          hideControls
        }
      )
    )
  ));
};

// src/Prebuilt/components/Header/Header.tsx
import React162 from "react";
import { useMedia as useMedia40 } from "react-use";
import {
  HMSRoomState as HMSRoomState7,
  selectRoomState as selectRoomState7,
  useHMSStore as useHMSStore88
} from "@100mslive/react-sdk";

// src/Prebuilt/components/Header/RoomDetailsHeader.tsx
import React160 from "react";
import { useMedia as useMedia39 } from "react-use";
import { ChevronRightIcon as ChevronRightIcon5 } from "@100mslive/react-icons";
var RoomDetailsHeader = () => {
  const { title, description } = useRoomLayoutHeader();
  const isMobile = useMedia39(config.media.md);
  const clipLength = 30;
  const toggleDetailsPane = useSidepaneToggle(SIDE_PANE_OPTIONS.ROOM_DETAILS);
  const toggleDetailsSheet = useSheetToggle(SHEET_OPTIONS.ROOM_DETAILS);
  if (!title && !description || isMobile && !title) {
    return null;
  }
  return /* @__PURE__ */ React160.createElement(
    Flex,
    {
      direction: isMobile ? "row" : "column",
      css: { ml: "$8", alignItems: isMobile ? "center" : "start" }
    },
    /* @__PURE__ */ React160.createElement(
      Text,
      {
        variant: "sm",
        css: { c: "$on_surface_high", fontWeight: "$semiBold" }
      },
      title
    ),
    !isMobile && /* @__PURE__ */ React160.createElement(Flex, { align: "end", css: { color: "$on_surface_high" } }, /* @__PURE__ */ React160.createElement(Text, { variant: "xs", css: { c: "$on_surface_medium" } }, description.slice(0, clipLength)), description.length > clipLength ? /* @__PURE__ */ React160.createElement(
      "span",
      {
        style: {
          fontWeight: "600",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1rem"
        },
        onClick: toggleDetailsPane
      },
      "\xA0...more"
    ) : null),
    isMobile && description ? /* @__PURE__ */ React160.createElement(Flex, { css: { color: "$on_surface_medium" } }, /* @__PURE__ */ React160.createElement(
      ChevronRightIcon5,
      {
        height: 16,
        width: 16,
        onClick: toggleDetailsSheet
      }
    )) : null
  );
};

// src/Prebuilt/components/Header/common.jsx
import React161 from "react";
import {
  DeviceType as DeviceType3,
  selectIsLocalVideoEnabled as selectIsLocalVideoEnabled8,
  selectLocalVideoTrackID as selectLocalVideoTrackID3,
  selectVideoTrackByID as selectVideoTrackByID7,
  useDevices as useDevices3,
  useHMSActions as useHMSActions51,
  useHMSStore as useHMSStore87
} from "@100mslive/react-sdk";
import {
  BluetoothIcon,
  CameraFlipIcon as CameraFlipIcon2,
  CheckIcon as CheckIcon8,
  CrossIcon as CrossIcon27,
  HeadphonesIcon,
  SpeakerIcon as SpeakerIcon4,
  TelePhoneIcon
} from "@100mslive/react-icons";
var CamaraFlipActions = () => {
  const actions = useHMSActions51();
  const { allDevices } = useDevices3();
  const { videoInput } = allDevices;
  const isVideoOn = useHMSStore87(selectIsLocalVideoEnabled8);
  const videoTrackId = useHMSStore87(selectLocalVideoTrackID3);
  const localVideoTrack = useHMSStore87(selectVideoTrackByID7(videoTrackId));
  if (!videoInput || !(videoInput == null ? void 0 : videoInput.length) || !(localVideoTrack == null ? void 0 : localVideoTrack.facingMode)) {
    return null;
  }
  return /* @__PURE__ */ React161.createElement(Box, null, /* @__PURE__ */ React161.createElement(
    IconButton_default,
    {
      disabled: !isVideoOn,
      onClick: () => __async(void 0, null, function* () {
        try {
          yield actions.switchCamera();
        } catch (e) {
          ToastManager.addToast({
            title: `Error while flipping camera ${e.message || ""}`,
            variant: "error"
          });
        }
      })
    },
    /* @__PURE__ */ React161.createElement(CameraFlipIcon2, null)
  ));
};
var AudioActions = () => {
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices3();
  const shouldShowAudioOutput = "setSinkId" in HTMLMediaElement.prototype;
  const { audioInput, audioOutput } = allDevices;
  let availableAudioDevices = audioInput;
  let selectedAudio = selectedDeviceIDs.audioInput;
  if (shouldShowAudioOutput) {
    availableAudioDevices = audioOutput;
    selectedAudio = selectedDeviceIDs.audioOutput;
  }
  const hmsActions = useHMSActions51();
  const audioFiltered = availableAudioDevices == null ? void 0 : availableAudioDevices.find((item) => !!item.label);
  const currentSelection = availableAudioDevices == null ? void 0 : availableAudioDevices.find(
    (item) => item.deviceId === selectedAudio
  );
  if (!audioFiltered) {
    return null;
  }
  let AudioIcon = /* @__PURE__ */ React161.createElement(SpeakerIcon4, null);
  if (currentSelection && currentSelection.label.toLowerCase().includes("bluetooth")) {
    AudioIcon = /* @__PURE__ */ React161.createElement(BluetoothIcon, null);
  } else if (currentSelection && currentSelection.label.toLowerCase().includes("wired")) {
    AudioIcon = /* @__PURE__ */ React161.createElement(HeadphonesIcon, null);
  } else if (currentSelection && currentSelection.label.toLowerCase().includes("earpiece")) {
    AudioIcon = /* @__PURE__ */ React161.createElement(TelePhoneIcon, null);
  }
  return /* @__PURE__ */ React161.createElement(
    AudioSelectionSheet,
    {
      audioDevices: availableAudioDevices,
      audioSelected: selectedAudio,
      onChange: (deviceId) => __async(void 0, null, function* () {
        try {
          yield updateDevice({
            deviceId,
            deviceType: shouldShowAudioOutput ? DeviceType3.audioOutput : DeviceType3.audioInput
          });
        } catch (e) {
          ToastManager.addToast({
            title: `Error while changing audio device ${e.message || ""}`,
            variant: "error"
          });
        }
      })
    },
    /* @__PURE__ */ React161.createElement(
      Box,
      {
        onClick: () => __async(void 0, null, function* () {
          yield hmsActions.refreshDevices();
        })
      },
      /* @__PURE__ */ React161.createElement(IconButton_default, null, AudioIcon, " ")
    )
  );
};
var AudioSelectionSheet = ({
  audioDevices,
  audioSelected,
  onChange,
  children
}) => {
  return /* @__PURE__ */ React161.createElement(Sheet.Root, null, /* @__PURE__ */ React161.createElement(Sheet.Trigger, { asChild: true }, children), /* @__PURE__ */ React161.createElement(Sheet.Content, null, /* @__PURE__ */ React161.createElement(Sheet.Title, { css: { py: "$10", px: "$8", alignItems: "center" } }, /* @__PURE__ */ React161.createElement(Flex, { direction: "row", justify: "between", css: { w: "100%" } }, /* @__PURE__ */ React161.createElement(Text, { variant: "h6", css: { display: "flex" } }, "Audio"), /* @__PURE__ */ React161.createElement(Sheet.Close, null, /* @__PURE__ */ React161.createElement(IconButton_default, { as: "div", "data-testid": "dialog_cross_icon" }, /* @__PURE__ */ React161.createElement(CrossIcon27, null))))), /* @__PURE__ */ React161.createElement(HorizontalDivider, null), /* @__PURE__ */ React161.createElement(
    Flex,
    {
      direction: "column",
      css: {
        px: "$8",
        maxHeight: "80vh",
        overflowY: "auto"
      }
    },
    audioDevices.map((audioDevice) => {
      return /* @__PURE__ */ React161.createElement(
        SelectWithLabel,
        {
          key: audioDevice.deviceId,
          label: audioDevice.label,
          id: audioDevice.deviceId,
          checked: audioDevice.deviceId === audioSelected,
          onChange: () => onChange(audioDevice.deviceId)
        }
      );
    })
  )));
};
var SelectWithLabel = ({ label, icon = /* @__PURE__ */ React161.createElement(React161.Fragment, null), checked, id, onChange }) => {
  return /* @__PURE__ */ React161.createElement(
    Flex,
    {
      align: "center",
      css: {
        my: "$2",
        py: "$8",
        w: "100%",
        borderBottom: "1px solid $border_default"
      },
      onClick: onChange
    },
    /* @__PURE__ */ React161.createElement(
      Label3,
      {
        htmlFor: id,
        css: {
          fontSize: "$md",
          fontWeight: "$semiBold",
          color: "$on_surface_high",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "$8",
          flex: "1 1 0"
        }
      },
      icon,
      label
    ),
    checked && /* @__PURE__ */ React161.createElement(CheckIcon8, { width: 24, height: 24 })
  );
};

// src/Prebuilt/components/Header/Header.tsx
var Header2 = () => {
  const roomState = useHMSStore88(selectRoomState7);
  const isMobile = useMedia40(config.media.md);
  if (roomState !== HMSRoomState7.Connected) {
    return /* @__PURE__ */ React162.createElement(React162.Fragment, null);
  }
  return /* @__PURE__ */ React162.createElement(
    Flex,
    {
      justify: "between",
      align: "center",
      css: { position: "relative", height: "100%" }
    },
    /* @__PURE__ */ React162.createElement(Flex, { align: "center", gap: "2", css: { position: "absolute", left: "$10" } }, /* @__PURE__ */ React162.createElement(Logo, null), /* @__PURE__ */ React162.createElement(RoomDetailsHeader, null), /* @__PURE__ */ React162.createElement(SpeakerTag, null), isMobile && /* @__PURE__ */ React162.createElement(Flex, { align: "center", css: { gap: "$4" } }, /* @__PURE__ */ React162.createElement(LiveStatus, null), /* @__PURE__ */ React162.createElement(RecordingStatus, null), /* @__PURE__ */ React162.createElement(RecordingPauseStatus, null))),
    /* @__PURE__ */ React162.createElement(
      Flex,
      {
        align: "center",
        css: {
          position: "absolute",
          right: "$10",
          gap: "$4"
        }
      },
      /* @__PURE__ */ React162.createElement(StreamActions, null),
      isMobile ? /* @__PURE__ */ React162.createElement(React162.Fragment, null, /* @__PURE__ */ React162.createElement(CamaraFlipActions, null), /* @__PURE__ */ React162.createElement(AudioActions, null)) : null
    )
  );
};

// src/Prebuilt/components/PreviousRoleInMetadata.tsx
import { useEffect as useEffect59 } from "react";
import {
  selectLocalPeerRoleName as selectLocalPeerRoleName7,
  useHMSVanillaStore as useHMSVanillaStore14
} from "@100mslive/react-sdk";
var PreviousRoleInMetadata = () => {
  const vanillaStore = useHMSVanillaStore14();
  const { updateMetaData } = useMyMetadata();
  useEffect59(() => {
    let previousRole = vanillaStore.getState(selectLocalPeerRoleName7);
    const unsubscribe = vanillaStore.subscribe((currentRole) => {
      if (previousRole !== currentRole && currentRole) {
        updateMetaData({ prevRole: previousRole });
        previousRole = currentRole;
      }
    }, selectLocalPeerRoleName7);
    return unsubscribe;
  }, [vanillaStore]);
  return null;
};

// src/Prebuilt/components/ConferenceScreen.tsx
var ConferenceScreen = () => {
  var _a7, _b7, _c, _d, _e, _f;
  const { userName, endpoints, onJoin: onJoinFunc } = useHMSPrebuiltContext();
  const screenProps = useRoomLayoutConferencingScreen();
  const { isPreviewScreenEnabled } = useRoomLayoutPreviewScreen();
  const roomState = useHMSStore89(selectRoomState8);
  const isConnectedToRoom = useHMSStore89(selectIsConnectedToRoom10);
  const hmsActions = useHMSActions52();
  const [hideControls, setHideControls] = useState68(false);
  const dropdownList = useHMSStore89(selectAppData13(APP_DATA.dropdownList));
  const authTokenInAppData = useAuthToken();
  const headerRef = useRef31(null);
  const footerRef = useRef31(null);
  const isMobileDevice = isAndroid || isIOS || isIPadOS;
  const dropdownListRef = useRef31();
  const [isHLSStarted] = useSetAppDataByKey(APP_DATA.hlsStarted);
  const { requestPermission } = useAwayNotifications3();
  const showChat = !!((_a7 = screenProps.elements) == null ? void 0 : _a7.chat);
  const autoRoomJoined = useRef31(isPreviewScreenEnabled);
  const isMobileHLSStream = useMobileHLSStream();
  const isLandscapeHLSStream = useLandscapeHLSStream();
  const isMwebHLSStream = isMobileHLSStream || isLandscapeHLSStream;
  const toggleControls = () => {
    var _a8;
    if (((_a8 = dropdownListRef.current) == null ? void 0 : _a8.length) === 0 && isMobileDevice && !isMwebHLSStream) {
      setHideControls((value) => !value);
    }
  };
  useEffect60(() => {
    let timeout;
    dropdownListRef.current = dropdownList || [];
    if (dropdownListRef.current && dropdownListRef.current.length === 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (dropdownListRef.current && dropdownListRef.current.length === 0) {
          setHideControls(isMobileDevice);
        }
      }, 5e3);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [dropdownList, hideControls, isMobileDevice]);
  useEffect60(() => {
    if (authTokenInAppData && !isConnectedToRoom && !isPreviewScreenEnabled && roomState !== HMSRoomState8.Connecting && !autoRoomJoined.current) {
      hmsActions.join({
        userName: userName || uuid3(),
        authToken: authTokenInAppData,
        initEndpoint: endpoints == null ? void 0 : endpoints.init,
        settings: {
          isAudioMuted: !isPreviewScreenEnabled,
          isVideoMuted: !isPreviewScreenEnabled,
          speakerAutoSelectionBlacklist: ["Yeti Stereo Microphone"]
        }
      }).then(() => requestPermission()).catch(console.error);
      autoRoomJoined.current = true;
    }
  }, [
    authTokenInAppData,
    endpoints == null ? void 0 : endpoints.init,
    hmsActions,
    isConnectedToRoom,
    isPreviewScreenEnabled,
    roomState,
    userName,
    requestPermission
  ]);
  useEffect60(() => {
    onJoinFunc == null ? void 0 : onJoinFunc();
    return () => {
      PictureInPicture.stop().catch(
        (error) => console.error("stopping pip", error.message)
      );
    };
  }, [onJoinFunc]);
  if (!isConnectedToRoom && ![HMSRoomState8.Reconnecting, HMSRoomState8.Disconnected].includes(roomState)) {
    return /* @__PURE__ */ React163.createElement(
      FullPageProgress_default,
      {
        text: roomState === HMSRoomState8.Connecting ? "Joining..." : ""
      }
    );
  }
  const hideControlsForStreaming = isMwebHLSStream ? true : hideControls;
  return /* @__PURE__ */ React163.createElement(React163.Fragment, null, isHLSStarted ? /* @__PURE__ */ React163.createElement(
    Box,
    {
      css: {
        position: "fixed",
        zIndex: 100,
        w: "100%",
        h: "100%",
        left: 0,
        top: 0
      }
    },
    /* @__PURE__ */ React163.createElement(
      FullPageProgress_default,
      {
        text: "Starting live stream...",
        css: { opacity: 0.8, bg: "$background_dim" }
      }
    )
  ) : null, /* @__PURE__ */ React163.createElement(Flex, { css: { size: "100%", overflow: "hidden" }, direction: "column" }, !(screenProps.hideSections.includes("header") || isMwebHLSStream) && /* @__PURE__ */ React163.createElement(
    Box,
    {
      ref: headerRef,
      css: {
        h: "$18",
        transition: "margin 0.3s ease-in-out",
        marginTop: hideControlsForStreaming ? `-${(_b7 = headerRef.current) == null ? void 0 : _b7.clientHeight}px` : "none",
        "@md": {
          h: "$17"
        }
      },
      "data-testid": "header"
    },
    /* @__PURE__ */ React163.createElement(Header2, null)
  ), /* @__PURE__ */ React163.createElement(
    Box,
    {
      css: {
        w: "100%",
        flex: "1 1 0",
        minHeight: 0,
        // @ts-ignore
        px: ((_e = (_d = (_c = screenProps == null ? void 0 : screenProps.elements) == null ? void 0 : _c.video_tile_layout) == null ? void 0 : _d.grid) == null ? void 0 : _e.edge_to_edge) ? 0 : "$10",
        // TODO: padding to be controlled by section/element
        paddingBottom: "env(safe-area-inset-bottom)",
        "@lg": {
          px: 0
        }
      },
      id: "conferencing",
      "data-testid": "conferencing",
      onClick: toggleControls
    },
    screenProps.elements ? /* @__PURE__ */ React163.createElement(
      VideoStreamingSection,
      {
        screenType: screenProps.screenType,
        elements: screenProps.elements,
        hideControls: hideControlsForStreaming
      }
    ) : null
  ), !screenProps.hideSections.includes("footer") && screenProps.elements && !isMwebHLSStream && /* @__PURE__ */ React163.createElement(
    Box,
    {
      ref: footerRef,
      css: {
        flexShrink: 0,
        maxHeight: "$24",
        transition: "margin 0.3s ease-in-out",
        bg: "$background_dim",
        marginBottom: hideControlsForStreaming ? `-${(_f = footerRef.current) == null ? void 0 : _f.clientHeight}px` : void 0,
        "@md": {
          maxHeight: "unset",
          bg: screenProps.screenType === "hls_live_streaming" ? "transparent" : "$background_dim"
        }
      },
      "data-testid": "footer"
    },
    /* @__PURE__ */ React163.createElement(
      Footer2,
      {
        elements: screenProps.elements,
        screenType: screenProps.screenType
      }
    )
  ), isMwebHLSStream && !showChat && /* @__PURE__ */ React163.createElement(
    Flex,
    {
      css: {
        alignItems: "center",
        pr: "$4",
        pb: "$4",
        position: "relative"
      },
      justify: "end",
      gap: "2"
    },
    /* @__PURE__ */ React163.createElement(RaiseHand, null),
    /* @__PURE__ */ React163.createElement(
      MoreSettings,
      {
        elements: screenProps.elements,
        screenType: screenProps.screenType
      }
    ),
    /* @__PURE__ */ React163.createElement(
      Box,
      {
        css: {
          position: "absolute",
          bottom: "100%",
          mb: "$4"
        }
      },
      /* @__PURE__ */ React163.createElement(EmojiReaction, null)
    )
  ), /* @__PURE__ */ React163.createElement(RoleChangeRequestModal, null), /* @__PURE__ */ React163.createElement(HLSFailureModal, null), /* @__PURE__ */ React163.createElement(ActivatedPIP, null), /* @__PURE__ */ React163.createElement(PreviousRoleInMetadata, null)));
};

// src/Prebuilt/components/ErrorBoundary.jsx
import React164, { Component } from "react";
import { CopyIcon as CopyIcon3 } from "@100mslive/react-icons";
var ErrorBoundary = class extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, isErrorCopied: false };
  }
  componentDidCatch(error, errorInfo) {
    console.error(`react error boundary - ${error.message}`, error, errorInfo);
    this.setState({
      error: error == null ? void 0 : error.message,
      errorInfo
    });
  }
  render() {
    if (this.state.errorInfo) {
      return /* @__PURE__ */ React164.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: {
            size: "100%",
            height: "100vh",
            width: "100%",
            color: "$on_primary_high",
            backgroundColor: "$background_default"
          }
        },
        /* @__PURE__ */ React164.createElement(
          Box,
          {
            css: {
              position: "relative",
              overflow: "hidden",
              r: "$3",
              height: "100%",
              width: "100%"
            }
          },
          /* @__PURE__ */ React164.createElement(
            Flex,
            {
              direction: "column",
              css: {
                position: "absolute",
                size: "100%",
                top: "33.33%",
                left: 0
              }
            },
            /* @__PURE__ */ React164.createElement("div", { style: { margin: "1.5rem", width: "100%" } }, /* @__PURE__ */ React164.createElement(Text, null, "Something went wrong"), /* @__PURE__ */ React164.createElement(Text, null, "Message: $", this.state.error), /* @__PURE__ */ React164.createElement("br", null), "Please reload to see if it works. If you think this is a mistake on our side, please reach out to us on", /* @__PURE__ */ React164.createElement(
              "a",
              {
                href: "https://discord.com/invite/kGdmszyzq2",
                target: "_blank",
                rel: "noreferrer"
              },
              "Discord"
            )),
            /* @__PURE__ */ React164.createElement(Flex, null, /* @__PURE__ */ React164.createElement(Tooltip, { title: "Reload page" }, /* @__PURE__ */ React164.createElement(
              Button,
              {
                onClick: () => {
                  window.location.reload();
                },
                css: { mx: "$8" },
                "data-testid": "join_again_btn"
              },
              "Reload"
            )), /* @__PURE__ */ React164.createElement(Tooltip, { title: "Copy error details to clipboard" }, /* @__PURE__ */ React164.createElement(
              Button,
              {
                onClick: () => {
                  const { error, errorInfo } = this.state;
                  navigator.clipboard.writeText(
                    JSON.stringify({
                      error,
                      errorInfo
                    })
                  );
                  this.setState({ isErrorCopied: true });
                },
                css: { mx: "$8" },
                "data-testid": "join_again_btn"
              },
              /* @__PURE__ */ React164.createElement(CopyIcon3, null),
              " ",
              this.state.isErrorCopied ? "Copied" : "Copy Details"
            ))),
            /* @__PURE__ */ React164.createElement("details", { style: { whiteSpace: "pre-wrap", margin: "1.5rem" } }, /* @__PURE__ */ React164.createElement(Text, null, this.state.error && this.state.error.toString()), /* @__PURE__ */ React164.createElement("br", null), /* @__PURE__ */ React164.createElement(Text, null, JSON.stringify(this.state.errorInfo)))
          )
        )
      );
    }
    return this.props.children;
  }
};

// src/Prebuilt/components/init/Init.jsx
import React165, { useEffect as useEffect62 } from "react";

// src/Prebuilt/services/FeatureFlags.jsx
import { useEffect as useEffect61 } from "react";
import { selectRoomID, useHMSStore as useHMSStore90 } from "@100mslive/react-sdk";
var FeatureFlags = class {
  static init(roomId) {
    if (!window.HMS) {
      window.HMS = {};
    }
    window.HMS.OPTIMISE_HLS_LATENCY = false;
    window.HMS.ALWAYS_REQUEST_PERMISSIONS = false;
    window.HMS.SHOW_NS = define_process_env_default.REACT_APP_ENV !== "prod";
    this.enableTranscription = define_process_env_default.REACT_APP_TRANSCRIPTION_ROOM_ID === roomId;
  }
  static showNS() {
    return window.HMS.SHOW_NS;
  }
  static optimiseHLSLatency() {
    return window.HMS.OPTIMISE_HLS_LATENCY;
  }
  static alwaysRequestPermissions() {
    return window.HMS.ALWAYS_REQUEST_PERMISSIONS;
  }
};
__publicField(FeatureFlags, "enableTranscription", define_process_env_default.REACT_APP_ENABLE_TRANSCRIPTION === "true");
__publicField(FeatureFlags, "enableStatsForNerds", define_process_env_default.REACT_APP_ENABLE_STATS_FOR_NERDS === "true");
__publicField(FeatureFlags, "enableWhiteboard", define_process_env_default.REACT_APP_ENABLE_WHITEBOARD && define_process_env_default.REACT_APP_PUSHER_APP_KEY && define_process_env_default.REACT_APP_PUSHER_AUTHENDPOINT);
function FeatureFlagsInit() {
  const roomId = useHMSStore90(selectRoomID);
  useEffect61(() => {
    if (roomId) {
      FeatureFlags.init(roomId);
    }
  }, [roomId]);
  return null;
}

// src/Prebuilt/components/init/Init.jsx
var Init = () => {
  const { toggleTheme } = useTheme();
  useEffect62(() => {
    window.toggleUiTheme = toggleTheme;
  }, [toggleTheme]);
  useEffect62(() => {
    function resetHeight() {
      var _a7;
      document.body.style.height = `${((_a7 = window.visualViewport) == null ? void 0 : _a7.height) || window.innerHeight}px`;
    }
    window.addEventListener("resize", resetHeight);
    resetHeight();
    return () => {
      window.removeEventListener("resize", resetHeight);
    };
  }, []);
  return /* @__PURE__ */ React165.createElement(FeatureFlagsInit, null);
};

// src/Prebuilt/components/Input/KeyboardInputManager.js
import { useEffect as useEffect63 } from "react";
import {
  selectAppData as selectAppData14,
  selectIsLocalAudioEnabled as selectIsLocalAudioEnabled2,
  selectIsLocalVideoEnabled as selectIsLocalVideoEnabled9,
  useHMSActions as useHMSActions53,
  useHMSVanillaStore as useHMSVanillaStore15
} from "@100mslive/react-sdk";
var isEvenListenersAttached = false;
var _actions, _store, _toggleAudio, _toggleVideo, _hideSidepane, _toggleStatsForNerds, _toggleHlsStats, _keyDownHandler, _bind, _unbind;
var KeyboardInputManager = class {
  constructor(store, actions) {
    __privateAdd(this, _actions);
    __privateAdd(this, _store);
    __privateAdd(this, _toggleAudio, () => __async(this, null, function* () {
      const enabled = __privateGet(this, _store).getState(selectIsLocalAudioEnabled2);
      yield __privateGet(this, _actions).setLocalAudioEnabled(!enabled);
    }));
    __privateAdd(this, _toggleVideo, () => __async(this, null, function* () {
      const enabled = __privateGet(this, _store).getState(selectIsLocalVideoEnabled9);
      yield __privateGet(this, _actions).setLocalVideoEnabled(!enabled);
    }));
    __privateAdd(this, _hideSidepane, () => {
      if (__privateGet(this, _store).getState(selectAppData14(APP_DATA.sidePane))) {
        __privateGet(this, _actions).setAppData(APP_DATA.sidePane, "");
      }
    });
    __privateAdd(this, _toggleStatsForNerds, () => {
      const uiSettings = __privateGet(this, _store).getState(selectAppData14(APP_DATA.uiSettings));
      const statsEnabled = uiSettings.showStatsOnTiles;
      __privateGet(this, _actions).setAppData(APP_DATA.uiSettings, __spreadProps(__spreadValues({}, uiSettings), {
        showStatsOnTiles: !statsEnabled
      }));
    });
    __privateAdd(this, _toggleHlsStats, () => {
      __privateGet(this, _actions).setAppData(
        APP_DATA.hlsStats,
        !__privateGet(this, _store).getState(selectAppData14(APP_DATA.hlsStats))
      );
    });
    // eslint-disable-next-line complexity
    __privateAdd(this, _keyDownHandler, (e) => __async(this, null, function* () {
      const CONTROL_KEY = isMacOS ? e.metaKey : e.ctrlKey;
      const D_KEY = e.key === "d" || e.key === "D";
      const E_KEY = e.key === "e" || e.key === "E";
      const SNF_KEY = e.key === "]" || e.key === "}";
      const SHORTCUT_TOGGLE_AUDIO = CONTROL_KEY && D_KEY;
      const SHORTCUT_TOGGLE_VIDEO = CONTROL_KEY && E_KEY;
      const SHORTCUT_SIDEPANE_CLOSE = e.key === "Escape";
      const SHORTCUT_STATS_FOR_NERDS = CONTROL_KEY && SNF_KEY;
      if (SHORTCUT_TOGGLE_AUDIO) {
        e.preventDefault();
        yield __privateGet(this, _toggleAudio).call(this);
      } else if (SHORTCUT_TOGGLE_VIDEO) {
        e.preventDefault();
        yield __privateGet(this, _toggleVideo).call(this);
      } else if (SHORTCUT_SIDEPANE_CLOSE) {
        __privateGet(this, _hideSidepane).call(this);
      } else if (SHORTCUT_STATS_FOR_NERDS) {
        __privateGet(this, _toggleHlsStats).call(this);
        __privateGet(this, _toggleStatsForNerds).call(this);
      }
    }));
    __privateAdd(this, _bind, () => {
      document.addEventListener("keydown", __privateGet(this, _keyDownHandler), false);
    });
    __privateAdd(this, _unbind, () => {
      document.removeEventListener("keydown", __privateGet(this, _keyDownHandler), false);
    });
    __publicField(this, "bindAllShortcuts", () => {
      if (!isEvenListenersAttached) {
        __privateGet(this, _bind).call(this);
        isEvenListenersAttached = true;
      }
    });
    __publicField(this, "unbindAllShortcuts", () => {
      if (isEvenListenersAttached) {
        __privateGet(this, _unbind).call(this);
        isEvenListenersAttached = false;
      }
    });
    __privateSet(this, _actions, actions);
    __privateSet(this, _store, store);
  }
};
_actions = new WeakMap();
_store = new WeakMap();
_toggleAudio = new WeakMap();
_toggleVideo = new WeakMap();
_hideSidepane = new WeakMap();
_toggleStatsForNerds = new WeakMap();
_toggleHlsStats = new WeakMap();
_keyDownHandler = new WeakMap();
_bind = new WeakMap();
_unbind = new WeakMap();
var KeyboardHandler = () => {
  const store = useHMSVanillaStore15();
  const actions = useHMSActions53();
  useEffect63(() => {
    const keyboardManager = new KeyboardInputManager(store, actions);
    keyboardManager.bindAllShortcuts();
    return keyboardManager.unbindAllShortcuts;
  }, [actions, store]);
  return null;
};

// src/Prebuilt/components/LeaveScreen.tsx
import React169 from "react";
import { ExitIcon as ExitIcon3 } from "@100mslive/react-icons";

// src/Prebuilt/components/EndCallFeedback/Feedback.tsx
import React168, { useState as useState70 } from "react";
import { useMedia as useMedia43 } from "react-use";

// src/Prebuilt/components/EndCallFeedback/FeedbackForm.tsx
import React166, { useState as useState69 } from "react";
import { useMedia as useMedia41 } from "react-use";
import { useHMSActions as useHMSActions54 } from "@100mslive/react-sdk";
import { CheckIcon as CheckIcon9, CrossIcon as CrossIcon28 } from "@100mslive/react-icons";
var FEEBACK_INDEX = {
  THANK_YOU: -10,
  INIT: -1
};
var FeedbackModal = ({
  ratings,
  index,
  setIndex
}) => {
  const isMobile = useMedia41(config.media.md);
  const onOpenChange = () => {
    setIndex(FEEBACK_INDEX.INIT);
  };
  const avoidDefaultDomBehavior = (e) => {
    e.preventDefault();
  };
  if (isMobile) {
    return /* @__PURE__ */ React166.createElement(
      Sheet.Root,
      {
        open: index !== FEEBACK_INDEX.INIT,
        onOpenChange
      },
      /* @__PURE__ */ React166.createElement(
        Sheet.Content,
        {
          css: { bg: "$surface_dim", p: "$10", overflowY: "auto" },
          onPointerDownOutside: avoidDefaultDomBehavior,
          onInteractOutside: avoidDefaultDomBehavior
        },
        /* @__PURE__ */ React166.createElement(
          FeedbackContent,
          {
            ratings,
            indexSelected: index,
            setIndex
          }
        )
      )
    );
  }
  return /* @__PURE__ */ React166.createElement(
    Dialog.Root,
    {
      open: index !== FEEBACK_INDEX.INIT,
      onOpenChange
    },
    /* @__PURE__ */ React166.createElement(Dialog.Portal, null, /* @__PURE__ */ React166.createElement(Dialog.Overlay, null), /* @__PURE__ */ React166.createElement(
      Dialog.Content,
      {
        css: { bg: "$surface_dim", width: "528px", p: "$12" },
        onPointerDownOutside: avoidDefaultDomBehavior,
        onInteractOutside: avoidDefaultDomBehavior
      },
      /* @__PURE__ */ React166.createElement(
        FeedbackContent,
        {
          ratings,
          indexSelected: index,
          setIndex
        }
      )
    ))
  );
};
var FeedbackContent = ({
  ratings,
  indexSelected,
  setIndex
}) => {
  const { feedback } = useRoomLayoutLeaveScreen();
  const { endpoints } = useHMSPrebuiltContext();
  const isMobile = useMedia41(config.media.md);
  const hmsActions = useHMSActions54();
  const [comment, setComment] = useState69("");
  const [selectedReasons, setSelectedReasons] = useState69(/* @__PURE__ */ new Set());
  const handleCheckedChange = (checked, index) => {
    const newSelected = new Set(selectedReasons);
    if (checked) {
      newSelected.add(index);
    } else {
      newSelected.delete(index);
    }
    setSelectedReasons(newSelected);
  };
  const submitFeedback = () => __async(void 0, null, function* () {
    if (indexSelected < 0 || ratings.length <= indexSelected) {
      return;
    }
    try {
      const reasons = [...selectedReasons].map(
        (value) => {
          var _a7, _b7;
          return ((_b7 = (_a7 = ratings[indexSelected]) == null ? void 0 : _a7.reasons) == null ? void 0 : _b7[value]) || "";
        }
      );
      yield hmsActions.submitSessionFeedback(
        {
          question: `${feedback == null ? void 0 : feedback.title} | ${ratings[indexSelected].question || ""}`,
          rating: ratings[indexSelected].value || 1,
          min_rating: 1,
          max_rating: ratings.length,
          reasons: selectedReasons.size === 0 ? [] : reasons,
          comment
        },
        endpoints == null ? void 0 : endpoints.event
      );
    } catch (e) {
      console.error(e);
    }
    setIndex(FEEBACK_INDEX.THANK_YOU);
  });
  return /* @__PURE__ */ React166.createElement(
    Flex,
    {
      css: {
        p: indexSelected === FEEBACK_INDEX.INIT ? "$12 !important" : "0",
        bg: "$surface_dim",
        r: "$3",
        gap: "$10"
      },
      direction: "column"
    },
    /* @__PURE__ */ React166.createElement(
      FeedbackHeader,
      {
        ratings,
        indexSelected,
        onEmojiClicked: (value) => {
          setSelectedReasons(/* @__PURE__ */ new Set());
          setIndex(value);
        }
      }
    ),
    /* @__PURE__ */ React166.createElement(
      FeedbackForm,
      {
        rating: ratings[indexSelected],
        comment,
        setComment,
        selectedReasons,
        handleCheckedChange
      }
    ),
    /* @__PURE__ */ React166.createElement(
      Button,
      {
        type: "submit",
        icon: true,
        css: {
          alignSelf: isMobile ? "" : "end"
        },
        onClick: submitFeedback
      },
      (feedback == null ? void 0 : feedback.submit_btn_label) || "Submit Feedback"
    )
  );
};
var FeedbackHeader = ({
  onEmojiClicked,
  ratings,
  indexSelected = FEEBACK_INDEX.INIT
}) => {
  const isMobile = useMedia41(config.media.md);
  const { feedback } = useRoomLayoutLeaveScreen();
  return /* @__PURE__ */ React166.createElement(React166.Fragment, null, /* @__PURE__ */ React166.createElement(Flex, { align: "center" }, /* @__PURE__ */ React166.createElement(
    Flex,
    {
      direction: "column",
      css: {
        flex: "1 1 0"
      }
    },
    /* @__PURE__ */ React166.createElement(
      Text,
      {
        variant: isMobile ? "h6" : "h5",
        css: {
          c: "$on_surface_high",
          fontStyle: "normal"
        }
      },
      (feedback == null ? void 0 : feedback.title) || "How was your experience?"
    ),
    /* @__PURE__ */ React166.createElement(
      Text,
      {
        variant: isMobile ? "body2" : "body1",
        css: {
          c: "$on_surface_medium",
          opacity: 0.9,
          fontWeight: "$regular"
        }
      },
      (feedback == null ? void 0 : feedback.sub_title) || "Your answers help us improve the quality."
    )
  ), indexSelected !== FEEBACK_INDEX.INIT ? /* @__PURE__ */ React166.createElement(
    CrossIcon28,
    {
      width: "24px",
      height: "24px",
      color: "white",
      onClick: () => onEmojiClicked(FEEBACK_INDEX.INIT)
    }
  ) : null), /* @__PURE__ */ React166.createElement(
    Flex,
    {
      justify: "between",
      css: {
        gap: "$17",
        c: "$on_surface_high",
        "@md": {
          gap: "0"
        }
      }
    },
    ratings.map((element, index) => {
      return /* @__PURE__ */ React166.createElement(
        Flex,
        {
          align: "center",
          direction: "column",
          css: {
            c: indexSelected === index || indexSelected === FEEBACK_INDEX.INIT ? "$on_surface_high" : "$on_surface_default",
            gap: "$4"
          },
          onClick: () => onEmojiClicked(index),
          key: `${index}`
        },
        /* @__PURE__ */ React166.createElement(
          Text,
          {
            css: {
              fontWeight: "$semiBold",
              fontSize: "$h4",
              pb: "$1",
              cursor: "pointer",
              opacity: indexSelected === index || indexSelected === FEEBACK_INDEX.INIT ? 1 : 0.2,
              "@md": {
                fontSize: "$h5"
              }
            }
          },
          element.emoji
        ),
        /* @__PURE__ */ React166.createElement(
          Text,
          {
            variant: isMobile ? "body2" : "body1",
            css: {
              c: indexSelected === index || indexSelected === FEEBACK_INDEX.INIT ? "$on_surface_medium" : "$on_surface_low",
              fontWeight: "$regular"
            }
          },
          element.label
        )
      );
    })
  ));
};
var FeedbackForm = ({
  rating,
  comment,
  setComment,
  selectedReasons,
  handleCheckedChange
}) => {
  const { feedback } = useRoomLayoutLeaveScreen();
  return /* @__PURE__ */ React166.createElement(React166.Fragment, null, rating.reasons && rating.reasons.length > 0 && /* @__PURE__ */ React166.createElement(
    Flex,
    {
      direction: "column",
      css: {
        gap: "$4"
      }
    },
    /* @__PURE__ */ React166.createElement(
      Text,
      {
        variant: "sub2",
        css: {
          c: "$on_surface_high",
          fontWeight: "$semiBold",
          fontSize: "$sm",
          px: "$2"
        }
      },
      rating.question || "What do you like/dislike here?"
    ),
    /* @__PURE__ */ React166.createElement(
      Flex,
      {
        css: {
          alignItems: "flex-start",
          alignSelf: "stretch",
          flexWrap: "wrap",
          gap: "$6",
          flex: "1 1 calc(25% - 12px)",
          "@md": {
            flex: "1 1 calc(50% - 12px)"
          },
          "@sm": {
            flex: "1 1 100%"
          }
        }
      },
      rating.reasons.map((option, index) => {
        return /* @__PURE__ */ React166.createElement(
          Flex,
          {
            align: "center",
            gap: "2",
            key: index,
            css: {
              border: "1px solid $border_bright",
              r: "$1",
              p: "$6"
            }
          },
          /* @__PURE__ */ React166.createElement(
            Checkbox.Root,
            {
              id: `${option}-${index}`,
              checked: selectedReasons.has(index),
              onCheckedChange: (checked) => handleCheckedChange(checked, index),
              css: {
                cursor: "pointer",
                flexShrink: 0,
                bg: "$on_secondary_low",
                border: "1px solid $border_bright"
              }
            },
            /* @__PURE__ */ React166.createElement(Checkbox.Indicator, null, /* @__PURE__ */ React166.createElement(CheckIcon9, { width: 12, height: 12 }))
          ),
          /* @__PURE__ */ React166.createElement(
            Label3,
            {
              htmlFor: `${option}-${index}`,
              css: {
                color: "$on_surface_high",
                fontSize: "$sm",
                fontWeight: "$regular",
                lineHeight: "20px"
              }
            },
            option
          )
        );
      })
    )
  ), (feedback == null ? void 0 : feedback.comment) && /* @__PURE__ */ React166.createElement(
    Flex,
    {
      direction: "column",
      css: {
        gap: "$4"
      }
    },
    /* @__PURE__ */ React166.createElement(
      Text,
      {
        variant: "body2",
        css: {
          c: "$on_surface_high",
          fontWeight: "$regular",
          fontSize: "$sm"
        }
      },
      (feedback == null ? void 0 : feedback.comment.label) || "Additional comments (optional)"
    ),
    /* @__PURE__ */ React166.createElement(
      TextArea,
      {
        maxLength: 1024,
        placeholder: (feedback == null ? void 0 : feedback.comment.placeholder) || "Tell us more...",
        css: {
          backgroundColor: "$surface_bright",
          border: "1px solid $border_bright",
          resize: "none",
          height: "$36",
          display: "flex"
        },
        value: comment,
        onChange: (event) => setComment(event.target.value.trimStart())
      }
    )
  ));
};

// src/Prebuilt/components/EndCallFeedback/ThankyouView.tsx
import React167 from "react";
import { useMedia as useMedia42 } from "react-use";
import { UserMusicIcon } from "@100mslive/react-icons";
var ThankyouView = () => {
  const isMobile = useMedia42(config.media.md);
  return /* @__PURE__ */ React167.createElement(
    Flex,
    {
      direction: isMobile ? "column" : "row",
      align: "center",
      css: {
        gap: "$10",
        border: "1px solid $border_default",
        borderRadius: !isMobile ? "$3" : "$3 $3 0 0",
        bg: "$surface_dim",
        w: !isMobile ? "528px" : "410px",
        p: "$12",
        pb: isMobile ? "$16" : "$12",
        "@md": {
          position: "absolute",
          bottom: "0"
        }
      }
    },
    /* @__PURE__ */ React167.createElement(UserMusicIcon, { width: "64px", height: "64px" }),
    /* @__PURE__ */ React167.createElement(Flex, { direction: "column", align: isMobile ? "center" : "start" }, /* @__PURE__ */ React167.createElement(Text, { variant: "h5" }, "Thank you for your feedback"), /* @__PURE__ */ React167.createElement(
      Text,
      {
        variant: "body1",
        css: {
          fontWeight: "$regular",
          fontSize: "$md",
          opacity: "0.9"
        }
      },
      "Your answers help us improve."
    ))
  );
};

// src/Prebuilt/components/EndCallFeedback/Feedback.tsx
var Feedback = () => {
  const { feedback } = useRoomLayoutLeaveScreen();
  const [index, setIndex] = useState70(FEEBACK_INDEX.INIT);
  const isMobile = useMedia43(config.media.md);
  if (!feedback) {
    return null;
  }
  const { ratings } = feedback;
  if (!ratings) {
    return null;
  }
  ratings.sort((a, b) => {
    if (!a.value || !b.value) {
      return 0;
    }
    return a.value - b.value;
  });
  if (index === FEEBACK_INDEX.THANK_YOU) {
    return /* @__PURE__ */ React168.createElement(
      Flex,
      {
        justify: "center",
        css: {
          pt: "$16"
        }
      },
      /* @__PURE__ */ React168.createElement(ThankyouView, null)
    );
  }
  return /* @__PURE__ */ React168.createElement(
    Flex,
    {
      justify: "center",
      css: {
        pt: "$16",
        w: isMobile ? "100%" : "528px"
      }
    },
    index === FEEBACK_INDEX.INIT ? /* @__PURE__ */ React168.createElement(
      Flex,
      {
        css: {
          p: isMobile ? "$10" : "$12",
          border: "1px solid $border_default",
          bg: "$surface_dim",
          borderRadius: !isMobile ? "$3" : "$3 $3 0 0",
          gap: "$10",
          "@md": {
            position: "absolute",
            bottom: "0",
            w: "100%"
          }
        },
        direction: "column"
      },
      /* @__PURE__ */ React168.createElement(FeedbackHeader, { ratings, onEmojiClicked: setIndex })
    ) : /* @__PURE__ */ React168.createElement(FeedbackModal, { ratings, index, setIndex })
  );
};

// src/Prebuilt/components/LeaveScreen.tsx
var LeaveScreen = () => {
  const { rejoin } = useHMSAppStateContext();
  const [previewPreference] = useUserPreferences(
    UserPreferencesKeys.PREVIEW,
    defaultPreviewPreference
  );
  return /* @__PURE__ */ React169.createElement(Flex, { direction: "column", css: { size: "100%" } }, /* @__PURE__ */ React169.createElement(Box, { css: { h: "$18", "@md": { h: "$17" } }, "data-testid": "header" }, /* @__PURE__ */ React169.createElement(Header2, null)), /* @__PURE__ */ React169.createElement(
    Flex,
    {
      justify: "center",
      direction: "column",
      align: "center",
      css: { bg: "$background_dim", flex: "1 1 0", position: "relative" }
    },
    /* @__PURE__ */ React169.createElement(Text, { variant: "h2", css: { fontWeight: "$semiBold" } }, "\u{1F44B}"),
    /* @__PURE__ */ React169.createElement(
      Text,
      {
        variant: "h4",
        css: {
          color: "$on_surface_high",
          fontWeight: "$semiBold",
          mt: "$12"
        }
      },
      "You left the room"
    ),
    /* @__PURE__ */ React169.createElement(
      Text,
      {
        variant: "body1",
        css: {
          color: "$on_surface_medium",
          mt: "$8",
          fontWeight: "$regular",
          textAlign: "center"
        }
      },
      "Have a nice day",
      previewPreference.name && /* @__PURE__ */ React169.createElement(Box, { as: "span", css: __spreadValues({}, textEllipsis(100)) }, ", ", previewPreference.name),
      "!"
    ),
    /* @__PURE__ */ React169.createElement(Flex, { css: { mt: "$14", gap: "$10", alignItems: "center" } }, /* @__PURE__ */ React169.createElement(
      Text,
      {
        variant: "body1",
        css: { color: "$on_surface_medium", fontWeight: "$regular" }
      },
      "Left by mistake?"
    ), /* @__PURE__ */ React169.createElement(
      Button,
      {
        onClick: () => {
          rejoin();
          ToastManager.clearAllToast();
        },
        "data-testid": "join_again_btn"
      },
      /* @__PURE__ */ React169.createElement(ExitIcon3, null),
      /* @__PURE__ */ React169.createElement(Text, { css: { ml: "$3", fontWeight: "$semiBold", color: "inherit" } }, "Rejoin")
    )),
    /* @__PURE__ */ React169.createElement(Feedback, null)
  ));
};

// src/Prebuilt/components/MwebLandscapePrompt.tsx
import React170, { useEffect as useEffect64, useState as useState71 } from "react";
import { useMedia as useMedia44 } from "react-use";
import { match as match14, P as P5 } from "ts-pattern";
import { RefreshIcon } from "@100mslive/react-icons";
var MwebLandscapePrompt = () => {
  const [showMwebLandscapePrompt, setShowMwebLandscapePrompt] = useState71(false);
  const isLandscape = useMedia44(config.media.ls);
  const isLandscapeHLSStream = useLandscapeHLSStream();
  useEffect64(() => {
    var _a7;
    if (!isMobileUserAgent) {
      setShowMwebLandscapePrompt(false);
      return;
    }
    if (!((_a7 = window.screen) == null ? void 0 : _a7.orientation)) {
      setShowMwebLandscapePrompt(isLandscape && !isLandscapeHLSStream);
      return;
    }
    const handleRotation = () => {
      const angle = window.screen.orientation.angle;
      const type = window.screen.orientation.type || "";
      setShowMwebLandscapePrompt(
        match14({ angle, isLandscapeHLSStream, isLandscape, type }).with({ isLandscapeHLSStream: true }, () => false).with(
          { angle: P5.when((angle2) => angle2 && angle2 >= 90) },
          ({ type: type2 }) => type2.includes("landscape")
        ).otherwise(() => isLandscape)
      );
    };
    handleRotation();
    window.screen.orientation.addEventListener("change", handleRotation);
    return () => {
      window.screen.orientation.removeEventListener("change", handleRotation);
    };
  }, [isLandscape, isLandscapeHLSStream]);
  if (isLandscapeHLSStream) {
    return null;
  }
  return /* @__PURE__ */ React170.createElement(
    Dialog.Root,
    {
      open: showMwebLandscapePrompt,
      onOpenChange: setShowMwebLandscapePrompt
    },
    /* @__PURE__ */ React170.createElement(Dialog.Portal, null, /* @__PURE__ */ React170.createElement(Dialog.Overlay, null), /* @__PURE__ */ React170.createElement(
      Dialog.Content,
      {
        css: { w: "min(420px, 90%)", p: "$8", bg: "$surface_dim" }
      },
      /* @__PURE__ */ React170.createElement(Box, null, /* @__PURE__ */ React170.createElement(
        Flex,
        {
          css: {
            color: "$primary_default",
            display: "flex",
            alignItems: "center"
          }
        },
        /* @__PURE__ */ React170.createElement(RefreshIcon, { style: { marginRight: "0.5rem" } }),
        /* @__PURE__ */ React170.createElement(
          Text,
          {
            variant: "lg",
            css: { color: "$on_surface_high", fontWeight: "$semiBold" }
          },
          "Please rotate your device"
        )
      ), /* @__PURE__ */ React170.createElement(
        Text,
        {
          variant: "sm",
          css: { color: "$on_surface_medium", mb: "$8", mt: "$4" }
        },
        "We do not support landscape mode as of now, please use the app in portrait mode for the best experience."
      ), /* @__PURE__ */ React170.createElement(
        Flex,
        {
          align: "center",
          justify: "between",
          css: { w: "100%", gap: "$8" }
        },
        /* @__PURE__ */ React170.createElement(
          Button,
          {
            outlined: true,
            variant: "standard",
            css: { w: "100%" },
            onClick: () => setShowMwebLandscapePrompt(false)
          },
          "Continue anyway"
        )
      ))
    ))
  );
};

// src/Prebuilt/components/Notifications/Notifications.tsx
import React179, { useCallback as useCallback36, useEffect as useEffect75 } from "react";
import {
  HMSNotificationTypes as HMSNotificationTypes11,
  HMSRoomState as HMSRoomState10,
  selectIsLocalScreenShared as selectIsLocalScreenShared4,
  selectLocalPeerID as selectLocalPeerID18,
  selectPeerNameByID as selectPeerNameByID7,
  selectRoomState as selectRoomState10,
  useAwayNotifications as useAwayNotifications5,
  useCustomEvent as useCustomEvent4,
  useHMSNotifications as useHMSNotifications11,
  useHMSStore as useHMSStore94,
  useHMSVanillaStore as useHMSVanillaStore17
} from "@100mslive/react-sdk";
import { GroupIcon as GroupIcon2 } from "@100mslive/react-icons";

// src/Prebuilt/components/Notifications/AutoplayBlockedModal.tsx
import React171 from "react";
import { useAutoplayError } from "@100mslive/react-sdk";
function AutoplayBlockedModal() {
  const { error, resetError, unblockAudio } = useAutoplayError();
  return /* @__PURE__ */ React171.createElement(
    Dialog.Root,
    {
      open: !!error,
      onOpenChange: (value) => {
        if (!value) {
          unblockAudio();
        }
        resetError();
      }
    },
    /* @__PURE__ */ React171.createElement(DialogContent, { title: "Permission Error", closeable: false }, /* @__PURE__ */ React171.createElement(DialogRow, null, /* @__PURE__ */ React171.createElement(Text, { variant: "md" }, "The browser wants us to get a confirmation for playing the Audio. Please allow audio to proceed.")), /* @__PURE__ */ React171.createElement(DialogRow, { justify: "end" }, /* @__PURE__ */ React171.createElement(
      Button,
      {
        variant: "primary",
        onClick: () => {
          unblockAudio();
          resetError();
        }
      },
      "Allow Audio"
    )))
  );
}

// src/Prebuilt/components/Notifications/ChatNotifications.tsx
import React172, { useEffect as useEffect65 } from "react";
import { v4 as uuid4 } from "uuid";
import {
  selectLocalPeerID as selectLocalPeerID17,
  selectSessionStore as selectSessionStore14,
  useHMSStore as useHMSStore91
} from "@100mslive/react-sdk";
import { ChatIcon as ChatIcon2, ChatUnreadIcon } from "@100mslive/react-icons";
var NOTIFICATION_TIME_DIFFERENCE = 5e3;
var ChatNotifications = () => {
  const chatState = useHMSStore91(
    selectSessionStore14("chatState" /* CHAT_STATE */)
  );
  const localPeerId = useHMSStore91(selectLocalPeerID17);
  useEffect65(() => {
    var _a7, _b7;
    if (!chatState || ((_a7 = chatState.updatedBy) == null ? void 0 : _a7.peerId) === localPeerId) {
      return;
    }
    const showToast = Date.now() - chatState.updatedAt < NOTIFICATION_TIME_DIFFERENCE;
    if (!showToast) {
      return;
    }
    const notification = {
      id: uuid4(),
      icon: chatState.enabled ? /* @__PURE__ */ React172.createElement(ChatUnreadIcon, null) : /* @__PURE__ */ React172.createElement(ChatIcon2, null),
      title: `Chat ${chatState.enabled ? "resumed" : "paused"} by ${(_b7 = chatState.updatedBy) == null ? void 0 : _b7.userName}`
    };
    ToastManager.addToast(notification);
  }, [chatState, localPeerId]);
  return /* @__PURE__ */ React172.createElement(React172.Fragment, null);
};

// src/Prebuilt/components/Notifications/HandRaisedNotifications.tsx
import { useEffect as useEffect66 } from "react";
import { useDebounce as useDebounce2 } from "react-use";
import {
  HMSNotificationTypes as HMSNotificationTypes2,
  HMSRoomState as HMSRoomState9,
  selectHandRaisedPeers as selectHandRaisedPeers2,
  selectHasPeerHandRaised as selectHasPeerHandRaised4,
  selectIsLocalScreenShared as selectIsLocalScreenShared3,
  selectPeerByID as selectPeerByID6,
  selectRoomState as selectRoomState9,
  useAwayNotifications as useAwayNotifications4,
  useHMSNotifications as useHMSNotifications2,
  useHMSStore as useHMSStore93,
  useHMSVanillaStore as useHMSVanillaStore16
} from "@100mslive/react-sdk";

// src/Prebuilt/components/Toast/ToastConfig.jsx
import React173, { useCallback as useCallback35 } from "react";
import {
  selectPeerByID as selectPeerByID5,
  useHMSActions as useHMSActions55,
  useHMSStore as useHMSStore92
} from "@100mslive/react-sdk";
import {
  ChatUnreadIcon as ChatUnreadIcon2,
  ConnectivityIcon,
  HandIcon as HandIcon6,
  PeopleAddIcon as PeopleAddIcon4,
  PeopleRemoveIcon as PeopleRemoveIcon4,
  PoorConnectivityIcon as PoorConnectivityIcon2
} from "@100mslive/react-icons";
var ChatAction = React173.forwardRef((_, ref) => {
  const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
  const isChatOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.CHAT);
  if (isChatOpen) {
    return null;
  }
  return /* @__PURE__ */ React173.createElement(
    Button,
    {
      outlined: true,
      as: "div",
      variant: "standard",
      css: { w: "max-content" },
      onClick: toggleChat,
      ref
    },
    "Open Chat"
  );
});
var HandRaiseAction = React173.forwardRef(
  ({ id = "", isSingleHandRaise = true }, ref) => {
    var _a7, _b7, _c;
    const hmsActions = useHMSActions55();
    const toggleSidepane = useSidepaneToggle(SIDE_PANE_OPTIONS.PARTICIPANTS);
    const isParticipantsOpen = useIsSidepaneTypeOpen(
      SIDE_PANE_OPTIONS.PARTICIPANTS
    );
    const peer = useHMSStore92(selectPeerByID5(id));
    const layout = useRoomLayout();
    const {
      bring_to_stage_label,
      on_stage_role,
      off_stage_roles = [],
      skip_preview_for_role_change = false
    } = ((_c = (_b7 = (_a7 = layout == null ? void 0 : layout.screens) == null ? void 0 : _a7.conferencing) == null ? void 0 : _b7.default) == null ? void 0 : _c.elements.on_stage_exp) || {};
    const onClickHandler = useCallback35(() => __async(void 0, null, function* () {
      if (isSingleHandRaise) {
        hmsActions.changeRoleOfPeer(
          id,
          on_stage_role,
          skip_preview_for_role_change
        );
        if (skip_preview_for_role_change) {
          yield hmsActions.lowerRemotePeerHand(id);
        }
      } else {
        !isParticipantsOpen && toggleSidepane();
      }
    }), [
      hmsActions,
      id,
      isParticipantsOpen,
      isSingleHandRaise,
      on_stage_role,
      toggleSidepane,
      skip_preview_for_role_change
    ]);
    if (isSingleHandRaise && (!peer || !off_stage_roles.includes(peer.roleName))) {
      return null;
    }
    return /* @__PURE__ */ React173.createElement(
      Button,
      {
        outlined: true,
        as: "div",
        variant: "standard",
        css: { w: "max-content" },
        onClick: onClickHandler,
        ref
      },
      isSingleHandRaise ? bring_to_stage_label : "View"
    );
  }
);
var ToastConfig = {
  PEER_JOINED: {
    single: function(notification) {
      var _a7;
      return {
        title: `${(_a7 = notification.data) == null ? void 0 : _a7.name} joined`,
        icon: /* @__PURE__ */ React173.createElement(PeopleAddIcon4, null)
      };
    },
    multiple: function(notifications) {
      return {
        title: `${notifications[notifications.length - 1].data.name} and ${notifications.length - 1} others joined`,
        icon: /* @__PURE__ */ React173.createElement(PeopleAddIcon4, null)
      };
    }
  },
  PEER_LEFT: {
    single: function(notification) {
      var _a7;
      return {
        title: `${(_a7 = notification.data) == null ? void 0 : _a7.name} left`,
        icon: /* @__PURE__ */ React173.createElement(PeopleRemoveIcon4, null)
      };
    },
    multiple: function(notifications) {
      return {
        title: `${notifications[notifications.length - 1].data.name} and ${notifications.length - 1} others left`,
        icon: /* @__PURE__ */ React173.createElement(PeopleRemoveIcon4, null)
      };
    }
  },
  RAISE_HAND: {
    single: (notification) => {
      var _a7;
      return {
        title: `${(_a7 = notification.data) == null ? void 0 : _a7.name} raised hand`,
        icon: /* @__PURE__ */ React173.createElement(HandIcon6, null)
      };
    },
    multiple: (notifications) => {
      var _a7;
      const count = new Set(
        notifications.map((notification) => {
          var _a8;
          return (_a8 = notification.data) == null ? void 0 : _a8.id;
        })
      ).size;
      return {
        title: `${(_a7 = notifications[notifications.length - 1].data) == null ? void 0 : _a7.name} ${count > 1 ? `and ${count} others` : ""} raised hand`,
        icon: /* @__PURE__ */ React173.createElement(HandIcon6, null)
      };
    }
  },
  RAISE_HAND_HLS: {
    single: (notification) => {
      var _a7, _b7;
      return {
        title: `${(_a7 = notification.data) == null ? void 0 : _a7.name} raised hand`,
        icon: /* @__PURE__ */ React173.createElement(HandIcon6, null),
        action: /* @__PURE__ */ React173.createElement(HandRaiseAction, { id: (_b7 = notification.data) == null ? void 0 : _b7.id })
      };
    },
    multiple: (notifications) => {
      var _a7;
      const count = new Set(
        notifications.map((notification) => {
          var _a8;
          return (_a8 = notification.data) == null ? void 0 : _a8.id;
        })
      ).size;
      return {
        title: `${(_a7 = notifications[notifications.length - 1].data) == null ? void 0 : _a7.name} ${count > 1 ? `and ${count} others` : ""} raised hand`,
        icon: /* @__PURE__ */ React173.createElement(HandIcon6, null),
        action: /* @__PURE__ */ React173.createElement(HandRaiseAction, { isSingleHandRaise: false })
      };
    }
  },
  NEW_MESSAGE: {
    single: (notification) => {
      var _a7;
      return {
        title: `New message from ${(_a7 = notification.data) == null ? void 0 : _a7.senderName}`,
        icon: /* @__PURE__ */ React173.createElement(ChatUnreadIcon2, null),
        action: /* @__PURE__ */ React173.createElement(ChatAction, null)
      };
    },
    multiple: (notifications) => {
      return {
        title: `${notifications.length} new messages`,
        icon: /* @__PURE__ */ React173.createElement(ChatUnreadIcon2, null),
        action: /* @__PURE__ */ React173.createElement(ChatAction, null)
      };
    }
  },
  RECONNECTED: {
    single: (online) => {
      return {
        title: `You are now ${online ? "online" : "connected"}`,
        icon: /* @__PURE__ */ React173.createElement(ConnectivityIcon, null),
        variant: "success",
        duration: 3e3
      };
    }
  },
  RECONNECTING: {
    single: (message) => {
      return {
        title: `You are offline for now. while we try to reconnect, please check
        your internet connection. ${message}.
      `,
        icon: /* @__PURE__ */ React173.createElement(PoorConnectivityIcon2, null),
        variant: "warning",
        duration: 3e4
      };
    }
  }
};

// src/Prebuilt/components/Toast/ToastBatcher.js
var ToastBatcher = {
  toastsType: /* @__PURE__ */ new Map(),
  toastCache: {},
  showToastInternal({ notification, duration, type }) {
    let notificationType = type;
    if (!type) {
      notificationType = notification.type;
    }
    const toastType = this.toastsType.has(notificationType);
    if (toastType) {
      let { notifications } = this.toastsType.get(notificationType);
      const { id } = this.toastsType.get(notificationType);
      notifications.push(notification);
      const toastObject = ToastConfig[notificationType].multiple(notifications);
      const toastId = ToastManager.replaceToast(id, __spreadProps(__spreadValues({}, toastObject), {
        duration
      }));
      this.toastsType.set(notificationType, {
        id: toastId,
        notifications,
        duration
      });
    } else {
      const toastObject = ToastConfig[notificationType].single(notification);
      const toastId = ToastManager.addToast(__spreadProps(__spreadValues({}, toastObject), {
        duration
      }));
      let notifications = [];
      notifications.push(notification);
      this.toastsType.set(notificationType, {
        id: toastId,
        notifications: [...notifications],
        duration
      });
    }
  },
  showToast({ notification, duration = 3e3, type }) {
    try {
      if (!this.toastCache[notification.id]) {
        this.showToastInternal({ notification, duration, type });
      }
      this.toastCache[notification.id] = true;
      if (Object.keys(this.toastCache).length > 100) {
        this.toastCache = {};
      }
    } catch (err) {
      console.debug("Notifications", err);
    }
  },
  syncUItoast(toastsDisplaying) {
    for (const [toastType, toastInfo] of this.toastsType.entries()) {
      if (!toastsDisplaying.find((toast) => toast.id === toastInfo.id)) {
        this.toastsType.delete(toastType);
      }
    }
  }
};
ToastManager.addListener(ToastBatcher.syncUItoast.bind(ToastBatcher));

// src/Prebuilt/components/Notifications/HandRaisedNotifications.tsx
var HandRaisedNotifications = () => {
  var _a7, _b7;
  const notification = useHMSNotifications2(
    HMSNotificationTypes2.HAND_RAISE_CHANGED
  );
  const roomState = useHMSStore93(selectRoomState9);
  const vanillaStore = useHMSVanillaStore16();
  const { on_stage_exp } = useRoomLayoutConferencingScreen().elements || {};
  const isSubscribing = !!useSubscribedNotifications(
    SUBSCRIBED_NOTIFICATIONS.METADATA_UPDATED
  );
  const amIScreenSharing = useHMSStore93(selectIsLocalScreenShared3);
  const { showNotification } = useAwayNotifications4();
  const logoURL = (_b7 = (_a7 = useRoomLayout()) == null ? void 0 : _a7.logo) == null ? void 0 : _b7.url;
  useEffect66(() => {
    var _a8;
    if (!(notification == null ? void 0 : notification.data)) {
      return;
    }
    if (roomState !== HMSRoomState9.Connected || notification.data.isLocal || !isSubscribing) {
      return;
    }
    const hasPeerHandRaised = vanillaStore.getState(
      selectHasPeerHandRaised4(notification.data.id)
    );
    const peer = vanillaStore.getState(selectPeerByID6(notification.data.id));
    if (hasPeerHandRaised) {
      const showCTA = (peer == null ? void 0 : peer.roleName) && ((_a8 = (on_stage_exp == null ? void 0 : on_stage_exp.off_stage_roles) || []) == null ? void 0 : _a8.includes(peer.roleName));
      ToastBatcher.showToast({
        notification,
        type: showCTA ? "RAISE_HAND_HLS" : "RAISE_HAND"
      });
      console.debug("Metadata updated", notification.data);
    }
  }, [isSubscribing, notification, on_stage_exp, roomState, vanillaStore]);
  useDebounce2(
    () => {
      if (!(notification == null ? void 0 : notification.data)) {
        return;
      }
      if (roomState !== HMSRoomState9.Connected || notification.data.isLocal || !isSubscribing) {
        return;
      }
      const hasPeerHandRaised = vanillaStore.getState(
        selectHasPeerHandRaised4(notification.data.id)
      );
      const peer = vanillaStore.getState(selectPeerByID6(notification.data.id));
      const handRaisedPeers = vanillaStore.getState(selectHandRaisedPeers2);
      if (amIScreenSharing && hasPeerHandRaised) {
        const title = `${peer == null ? void 0 : peer.name} ${handRaisedPeers.length > 1 ? `and ${handRaisedPeers.length - 1} others` : ""} raised hand`;
        showNotification(title, { icon: logoURL });
      }
    },
    1e3,
    [isSubscribing, notification, roomState, vanillaStore, amIScreenSharing]
  );
  return null;
};

// src/Prebuilt/components/Notifications/InitErrorModal.tsx
import React174, { useEffect as useEffect67, useState as useState72 } from "react";
import {
  HMSNotificationTypes as HMSNotificationTypes3,
  useHMSNotifications as useHMSNotifications3
} from "@100mslive/react-sdk";
var InitErrorModal = () => {
  const notification = useHMSNotifications3(HMSNotificationTypes3.ERROR);
  const [showModal, setShowModal] = useState72(false);
  const [info, setInfo] = useState72({ title: "Init Error", description: "" });
  useEffect67(() => {
    const data3 = notification == null ? void 0 : notification.data;
    if (!data3 || data3.action !== "INIT") {
      return;
    }
    let description;
    let title;
    if (data3.description.includes("role is invalid")) {
      description = "This role does not exist for the given room. Try again with a valid role.";
      title = "Invalid Role";
    } else if (data3.description.includes("room is not active")) {
      title = "Room is disabled";
      description = "This room is disabled and cannot be joined. To enable the room, use the 100ms dashboard or the API.";
    } else {
      description = data3.description;
      title = "Init Error";
    }
    setInfo({ title, description });
    setShowModal(true);
  }, [notification]);
  return /* @__PURE__ */ React174.createElement(
    ErrorDialog,
    {
      open: showModal,
      onOpenChange: setShowModal,
      title: info.title
    },
    /* @__PURE__ */ React174.createElement(Text, { variant: "sm", css: { wordBreak: "break-word" } }, info.description, " ", /* @__PURE__ */ React174.createElement("br", null), "Current URL - ", window.location.href)
  );
};

// src/Prebuilt/components/Notifications/PeerNotifications.tsx
import { useEffect as useEffect68 } from "react";
import {
  HMSNotificationTypes as HMSNotificationTypes4,
  useHMSNotifications as useHMSNotifications4
} from "@100mslive/react-sdk";
var notificationTypes = [
  HMSNotificationTypes4.PEER_JOINED,
  HMSNotificationTypes4.PEER_LEFT
];
var PeerNotifications = () => {
  const notification = useHMSNotifications4(notificationTypes);
  const isPeerJoinSubscribed = useSubscribedNotifications(
    SUBSCRIBED_NOTIFICATIONS.PEER_JOINED
  );
  const isPeerLeftSubscribed = useSubscribedNotifications(
    SUBSCRIBED_NOTIFICATIONS.PEER_LEFT
  );
  const [selectedPeer, setPeerSelector] = useSetSubscribedChatSelector(
    CHAT_SELECTOR.PEER
  );
  useEffect68(() => {
    if (!(notification == null ? void 0 : notification.data)) {
      return;
    }
    console.debug(`[${notification.type}]`, notification);
    switch (notification.type) {
      case HMSNotificationTypes4.PEER_JOINED:
        if (!isPeerJoinSubscribed) {
          return;
        }
        break;
      case HMSNotificationTypes4.PEER_LEFT:
        if (selectedPeer.id === notification.data.id) {
          setPeerSelector({});
        }
        if (!isPeerLeftSubscribed) {
          return;
        }
        break;
      default:
        return;
    }
    ToastBatcher.showToast({ notification });
  }, [
    notification,
    isPeerJoinSubscribed,
    isPeerLeftSubscribed,
    selectedPeer.id,
    setPeerSelector
  ]);
  return null;
};

// src/Prebuilt/components/Notifications/PermissionErrorModal.tsx
import React175, { useEffect as useEffect69, useState as useState73 } from "react";
import { useMedia as useMedia45 } from "react-use";
import {
  HMSNotificationTypes as HMSNotificationTypes5,
  useHMSNotifications as useHMSNotifications5
} from "@100mslive/react-sdk";

// src/Prebuilt/images/android-perm-1.png
var android_perm_1_default = "data:image/png;base64,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";

// src/Prebuilt/images/ios-perm-0.png
var ios_perm_0_default = "data:image/png;base64,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";

// src/Prebuilt/components/Notifications/PermissionErrorModal.tsx
function PermissionErrorNotificationModal() {
  const notification = useHMSNotifications5(HMSNotificationTypes5.ERROR);
  return /* @__PURE__ */ React175.createElement(PermissionErrorModal, { error: notification == null ? void 0 : notification.data });
}
var PermissionErrorModal = ({ error }) => {
  const [deviceType, setDeviceType] = useState73("");
  const [isSystemError, setIsSystemError] = useState73(false);
  const isMobile = useMedia45(config.media.md);
  useEffect69(() => {
    if (!error || (error == null ? void 0 : error.code) !== 3001 && (error == null ? void 0 : error.code) !== 3011 || (error == null ? void 0 : error.code) === 3001 && (error == null ? void 0 : error.message.includes("screen"))) {
      return;
    }
    const errorMessage = error == null ? void 0 : error.message;
    const hasAudio = errorMessage.includes("audio");
    const hasVideo = errorMessage.includes("video");
    const hasScreen = errorMessage.includes("screen");
    if (hasAudio && hasVideo) {
      setDeviceType("camera and microphone");
    } else if (hasAudio) {
      setDeviceType("microphone");
    } else if (hasVideo) {
      setDeviceType("camera");
    } else if (hasScreen) {
      setDeviceType("screen");
    }
    setIsSystemError(error.code === 3011);
  }, [error]);
  return deviceType ? /* @__PURE__ */ React175.createElement(Dialog.Root, { open: !!deviceType }, /* @__PURE__ */ React175.createElement(Dialog.Portal, null, /* @__PURE__ */ React175.createElement(Dialog.Overlay, null), /* @__PURE__ */ React175.createElement(
    Dialog.Content,
    {
      css: {
        w: "min(380px, 90%)",
        p: "$8",
        // overlay over Sheet.tsx
        zIndex: 23
      }
    },
    /* @__PURE__ */ React175.createElement(
      Dialog.Title,
      {
        css: {
          borderBottom: "1px solid $border_default"
        }
      },
      isMobile && isIOS ? /* @__PURE__ */ React175.createElement(
        "img",
        {
          style: { maxWidth: "100%", maxHeight: "100%" },
          src: ios_perm_0_default,
          alt: "iOS Permission flow"
        }
      ) : null,
      isMobile && isAndroid ? /* @__PURE__ */ React175.createElement(
        "img",
        {
          src: android_perm_1_default,
          style: { maxWidth: "100%", maxHeight: "100%" },
          alt: "Android Permission flow "
        }
      ) : null,
      /* @__PURE__ */ React175.createElement(Text, { variant: "h6" }, "We can't access your ", deviceType)
    ),
    /* @__PURE__ */ React175.createElement(
      Text,
      {
        variant: "sm",
        css: { pt: "$4", pb: "$10", color: "$on_surface_medium" }
      },
      isMobile && isIOS ? 'Enable permissions by reloading this page and clicking "Allow" on the pop-up, or change settings from the address bar.' : null,
      isMobile && isAndroid ? `To allow other users to see and hear you, click the blocked camera icon in your browser's address bar.` : null,
      !isMobile ? `Access to ${deviceType} is required. ` : null,
      isSystemError && !isMobile ? `Enable permissions for ${deviceType}${deviceType === "screen" ? "share" : ""} from sytem settings` : null,
      !isSystemError && !isMobile ? `Enable permissions for ${deviceType}${deviceType === "screen" ? "share" : ""} from address bar or browser settings.` : null
    ),
    isMobile && isIOS ? /* @__PURE__ */ React175.createElement(React175.Fragment, null, /* @__PURE__ */ React175.createElement(
      Button,
      {
        onClick: () => window.location.reload(),
        css: { w: "100%", mb: "$6" }
      },
      "Reload"
    ), /* @__PURE__ */ React175.createElement(
      Button,
      {
        outlined: true,
        variant: "standard",
        onClick: () => setDeviceType(""),
        css: { w: "100%" }
      },
      "Continue anyway"
    )) : null,
    isMobile && isAndroid ? /* @__PURE__ */ React175.createElement(React175.Fragment, null, /* @__PURE__ */ React175.createElement(
      Button,
      {
        onClick: () => setDeviceType(""),
        css: { w: "100%", mb: "$6" }
      },
      "I've allowed access"
    ), /* @__PURE__ */ React175.createElement(
      Button,
      {
        outlined: true,
        variant: "standard",
        onClick: () => setDeviceType(""),
        css: { w: "100%" }
      },
      "Continue anyway"
    )) : null,
    !isMobile ? /* @__PURE__ */ React175.createElement(Flex, { justify: "end", css: { w: "100%" } }, /* @__PURE__ */ React175.createElement(
      Button,
      {
        outlined: true,
        variant: "standard",
        onClick: () => setDeviceType("")
      },
      "Dismiss"
    )) : null
  ))) : null;
};

// src/Prebuilt/components/Notifications/ReconnectNotifications.tsx
import { useEffect as useEffect70, useRef as useRef32 } from "react";
import {
  HMSNotificationTypes as HMSNotificationTypes6,
  useHMSNotifications as useHMSNotifications6
} from "@100mslive/react-sdk";
var notificationTypes2 = [
  HMSNotificationTypes6.RECONNECTED,
  HMSNotificationTypes6.RECONNECTING,
  HMSNotificationTypes6.ERROR
];
var notificationId = null;
var ReconnectNotifications = () => {
  const notification = useHMSNotifications6(notificationTypes2);
  const prevErrorCode = useRef32(0);
  useEffect70(() => {
    var _a7, _b7;
    if (!notification) {
      return;
    }
    if (notification.type === HMSNotificationTypes6.RECONNECTED) {
      notificationId = ToastManager.replaceToast(
        notificationId,
        ToastConfig.RECONNECTED.single(
          [4005, 4006].includes(prevErrorCode.current)
        )
      );
    } else if (notification.type === HMSNotificationTypes6.RECONNECTING) {
      prevErrorCode.current = ((_a7 = notification.data) == null ? void 0 : _a7.code) || 0;
      notificationId = ToastManager.replaceToast(
        notificationId,
        ToastConfig.RECONNECTING.single((_b7 = notification.data) == null ? void 0 : _b7.message)
      );
    }
  }, [notification]);
  return null;
};

// src/Prebuilt/components/Notifications/TrackBulkUnmuteModal.tsx
import React176, { useEffect as useEffect71, useState as useState74 } from "react";
import {
  HMSNotificationTypes as HMSNotificationTypes7,
  useHMSActions as useHMSActions56,
  useHMSNotifications as useHMSNotifications7
} from "@100mslive/react-sdk";
import { MicOnIcon as MicOnIcon5 } from "@100mslive/react-icons";
var TrackBulkUnmuteModal = () => {
  const hmsActions = useHMSActions56();
  const [muteNotification, setMuteNotification] = useState74(null);
  const notification = useHMSNotifications7([
    HMSNotificationTypes7.CHANGE_MULTI_TRACK_STATE_REQUEST,
    HMSNotificationTypes7.ROOM_ENDED,
    HMSNotificationTypes7.REMOVED_FROM_ROOM
  ]);
  useEffect71(() => {
    switch (notification == null ? void 0 : notification.type) {
      case HMSNotificationTypes7.REMOVED_FROM_ROOM:
      case HMSNotificationTypes7.ROOM_ENDED:
        setMuteNotification(null);
        break;
      case HMSNotificationTypes7.CHANGE_MULTI_TRACK_STATE_REQUEST:
        if (notification == null ? void 0 : notification.data.enabled) {
          setMuteNotification(notification.data);
        }
        break;
      default:
        return;
    }
  }, [notification]);
  if (!muteNotification) {
    return null;
  }
  const { requestedBy: peer, tracks, enabled } = muteNotification;
  const types = new Set(tracks.map((track) => track.type));
  return /* @__PURE__ */ React176.createElement(
    RequestDialog,
    {
      title: "Unmute request",
      body: `${peer == null ? void 0 : peer.name} is requesting you to unmute your ${Array.from(
        types
      ).join(",")}`,
      onOpenChange: (value) => !value && setMuteNotification(null),
      onAction: () => {
        tracks.forEach((track) => {
          hmsActions.setEnabledTrack(track.id, enabled);
        });
        setMuteNotification(null);
      },
      Icon: MicOnIcon5
    }
  );
};

// src/Prebuilt/components/Notifications/TrackNotifications.tsx
import { useEffect as useEffect72 } from "react";
import {
  HMSNotificationTypes as HMSNotificationTypes8,
  useHMSNotifications as useHMSNotifications8
} from "@100mslive/react-sdk";
var notificationTypes3 = [
  HMSNotificationTypes8.TRACK_ADDED,
  HMSNotificationTypes8.TRACK_REMOVED,
  HMSNotificationTypes8.TRACK_MUTED,
  HMSNotificationTypes8.TRACK_UNMUTED
];
var TrackNotifications = () => {
  const notification = useHMSNotifications8(notificationTypes3);
  useEffect72(() => {
    if (notification) {
      console.debug(`[${notification.type}]`, notification);
    }
  }, [notification]);
  return null;
};

// src/Prebuilt/components/Notifications/TrackUnmuteModal.tsx
import React177, { useEffect as useEffect73, useState as useState75 } from "react";
import {
  HMSNotificationTypes as HMSNotificationTypes9,
  useHMSActions as useHMSActions57,
  useHMSNotifications as useHMSNotifications9
} from "@100mslive/react-sdk";
import { MicOnIcon as MicOnIcon6 } from "@100mslive/react-icons";
var TrackUnmuteModal = () => {
  const hmsActions = useHMSActions57();
  const notification = useHMSNotifications9([
    HMSNotificationTypes9.CHANGE_TRACK_STATE_REQUEST,
    HMSNotificationTypes9.ROOM_ENDED,
    HMSNotificationTypes9.REMOVED_FROM_ROOM
  ]);
  const [muteNotification, setMuteNotification] = useState75(null);
  useEffect73(() => {
    switch (notification == null ? void 0 : notification.type) {
      case HMSNotificationTypes9.REMOVED_FROM_ROOM:
      case HMSNotificationTypes9.ROOM_ENDED:
        setMuteNotification(null);
        break;
      case HMSNotificationTypes9.CHANGE_TRACK_STATE_REQUEST:
        if (notification == null ? void 0 : notification.data.enabled) {
          setMuteNotification(notification.data);
        }
        break;
      default:
        return;
    }
  }, [notification]);
  if (!muteNotification) {
    return null;
  }
  const { requestedBy: peer, track, enabled } = muteNotification;
  return /* @__PURE__ */ React177.createElement(
    RequestDialog,
    {
      title: `Unmute your ${track.type}?`,
      onOpenChange: (value) => !value && setMuteNotification(null),
      body: `${peer == null ? void 0 : peer.name}is requesting you to unmute your ${track == null ? void 0 : track.type}.`,
      onAction: () => {
        hmsActions.setEnabledTrack(track.id, enabled);
        setMuteNotification(null);
      },
      Icon: MicOnIcon6
    }
  );
};

// src/Prebuilt/components/Notifications/TranscriptionNotifications.tsx
import React178, { useEffect as useEffect74 } from "react";
import { match as match15 } from "ts-pattern";
import {
  HMSNotificationTypes as HMSNotificationTypes10,
  HMSTranscriptionState,
  useHMSNotifications as useHMSNotifications10
} from "@100mslive/react-sdk";
import {
  AlertTriangleIcon as AlertTriangleIcon8,
  ClosedCaptionIcon as ClosedCaptionIcon3,
  OpenCaptionIcon as OpenCaptionIcon4
} from "@100mslive/react-icons";
var TranscriptionNotifications = () => {
  const notification = useHMSNotifications10(
    HMSNotificationTypes10.TRANSCRIPTION_STATE_UPDATED
  );
  const [toastId, setToastId] = useSetAppDataByKey(CAPTION_TOAST.captionToast);
  useEffect74(() => {
    if (!(notification == null ? void 0 : notification.data)) {
      return;
    }
    console.debug(`[${notification.type}]`, notification);
    const transcriptionStates = notification.data;
    if (transcriptionStates.length > 0) {
      let id = "";
      match15({
        state: transcriptionStates[0].state,
        error: transcriptionStates[0].error
      }).when(
        ({ error }) => !!error,
        () => {
          id = ToastManager.replaceToast(toastId, {
            title: `Failed to enable Closed Caption`,
            variant: "error",
            icon: /* @__PURE__ */ React178.createElement(AlertTriangleIcon8, { style: { marginRight: "0.5rem" } })
          });
        }
      ).with({ state: HMSTranscriptionState.STARTED }, () => {
        id = ToastManager.replaceToast(toastId, {
          title: `Closed Captioning enabled for everyone`,
          variant: "standard",
          duration: 2e3,
          icon: /* @__PURE__ */ React178.createElement(ClosedCaptionIcon3, { style: { marginRight: "0.5rem" } })
        });
      }).with({ state: HMSTranscriptionState.STOPPED }, () => {
        id = ToastManager.replaceToast(toastId, {
          title: `Closed Captioning disabled for everyone`,
          variant: "standard",
          duration: 2e3,
          icon: /* @__PURE__ */ React178.createElement(OpenCaptionIcon4, { style: { marginRight: "0.5rem" } })
        });
      }).otherwise(() => null);
      setToastId(id);
    }
  }, [notification, setToastId]);
  return null;
};

// src/Prebuilt/components/Notifications/Notifications.tsx
var pollToastKey = {};
function Notifications() {
  var _a7, _b7;
  const localPeerID = useHMSStore94(selectLocalPeerID18);
  const notification = useHMSNotifications11();
  const subscribedNotifications = useSubscribedNotifications() || {};
  const roomState = useHMSStore94(selectRoomState10);
  const updateRoomLayoutForRole = useUpdateRoomLayout();
  const isNotificationDisabled = useIsNotificationDisabled();
  const screenProps = useRoomLayoutConferencingScreen();
  const vanillaStore = useHMSVanillaStore17();
  const togglePollView = usePollViewToggle();
  const { showNotification } = useAwayNotifications5();
  const amIScreenSharing = useHMSStore94(selectIsLocalScreenShared4);
  const logoURL = (_b7 = (_a7 = useRoomLayout()) == null ? void 0 : _a7.logo) == null ? void 0 : _b7.url;
  const { pipWindow } = usePIPWindow();
  const handleRoleChangeDenied = useCallback36(
    (request) => {
      ToastManager.addToast({
        title: `${request.peerName} denied your request to join the ${request.role.name} role`,
        variant: "error"
      });
    },
    []
  );
  useCustomEvent4({
    type: ROLE_CHANGE_DECLINED,
    onEvent: handleRoleChangeDenied
  });
  useEffect75(() => {
    var _a8, _b8, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
    if (!notification || isNotificationDisabled) {
      return;
    }
    switch (notification.type) {
      case HMSNotificationTypes11.NAME_UPDATED:
        console.log(
          notification.data.id + " changed their name to " + notification.data.name
        );
        break;
      case HMSNotificationTypes11.ERROR:
        if (((_a8 = notification.data) == null ? void 0 : _a8.isTerminal) && ((_b8 = notification.data) == null ? void 0 : _b8.action) !== "INIT") {
          if ([500, 6008].includes((_c = notification.data) == null ? void 0 : _c.code)) {
            ToastManager.addToast({
              title: `Error: ${(_d = notification.data) == null ? void 0 : _d.message}`
            });
          } else if (((_e = notification.data) == null ? void 0 : _e.message) === "role limit reached") {
            ToastManager.addToast({
              title: "The room is currently full, try joining later",
              close: true,
              icon: /* @__PURE__ */ React179.createElement(Box, { css: { color: "$alert_error_default" } }, /* @__PURE__ */ React179.createElement(GroupIcon2, null))
            });
          } else {
            ToastManager.addToast({
              title: ((_f = notification.data) == null ? void 0 : _f.message) || "We couldn\u2019t reconnect you. When you\u2019re back online, try joining the room.",
              close: false
            });
          }
          return;
        }
        if (((_g = notification.data) == null ? void 0 : _g.code) === 3008 || ((_h = notification.data) == null ? void 0 : _h.code) === 3001 || ((_i = notification.data) == null ? void 0 : _i.code) === 3011) {
          return;
        }
        if (((_j = notification.data) == null ? void 0 : _j.action) === "INIT") {
          return;
        }
        if (!subscribedNotifications.ERROR) return;
        ToastManager.addToast({
          title: `Error: ${(_k = notification.data) == null ? void 0 : _k.message} - ${(_l = notification.data) == null ? void 0 : _l.description}`
        });
        break;
      case HMSNotificationTypes11.ROLE_UPDATED: {
        if (((_m = notification.data) == null ? void 0 : _m.isLocal) && ((_n = notification.data) == null ? void 0 : _n.roleName)) {
          ToastManager.addToast({
            title: `You are now a ${notification.data.roleName}`
          });
          updateRoomLayoutForRole == null ? void 0 : updateRoomLayoutForRole(notification.data.roleName);
        }
        break;
      }
      case HMSNotificationTypes11.CHANGE_TRACK_STATE_REQUEST:
        const track = (_o = notification.data) == null ? void 0 : _o.track;
        if (!notification.data.enabled) {
          ToastManager.addToast({
            title: `Your ${track.source} ${track.type} was muted by
                ${(_p = notification.data.requestedBy) == null ? void 0 : _p.name}.`
          });
        }
        break;
      case HMSNotificationTypes11.REMOVED_FROM_ROOM:
      case HMSNotificationTypes11.ROOM_ENDED:
        ToastManager.addToast({
          title: `${notification.message}. 
              ${notification.data.reason && `Reason: ${notification.data.reason}`}`
        });
        break;
      case HMSNotificationTypes11.DEVICE_CHANGE_UPDATE:
        ToastManager.addToast({
          title: notification.message
        });
        break;
      case HMSNotificationTypes11.POLL_STARTED:
        if (notification.data.startedBy !== localPeerID && screenProps.screenType !== "hls_live_streaming") {
          const pollStartedBy = vanillaStore.getState(
            selectPeerNameByID7(notification.data.startedBy)
          ) || "Participant";
          const pollToastID = ToastManager.addToast({
            title: `${pollStartedBy} started a ${notification.data.type}: ${notification.data.title}`,
            action: /* @__PURE__ */ React179.createElement(
              Button,
              {
                onClick: () => togglePollView(notification.data.id),
                variant: "standard",
                css: {
                  backgroundColor: "$surface_bright",
                  fontWeight: "$semiBold",
                  color: "$on_surface_high",
                  p: "$xs $md"
                }
              },
              notification.data.type === "quiz" ? "Answer" : "Vote"
            ),
            duration: Infinity
          });
          pollToastKey[notification.data.id] = pollToastID;
        }
        break;
      case HMSNotificationTypes11.POLL_STOPPED:
        const pollID = notification == null ? void 0 : notification.data.id;
        if (pollID && (pollToastKey == null ? void 0 : pollToastKey[pollID])) {
          ToastManager.removeToast(pollToastKey == null ? void 0 : pollToastKey[notification.data.id]);
          delete pollToastKey[notification == null ? void 0 : notification.data.id];
        }
        break;
      case HMSNotificationTypes11.NEW_MESSAGE:
        if (amIScreenSharing && !((_q = notification.data) == null ? void 0 : _q.ignored) && !pipWindow) {
          showNotification(`New message from ${notification.data.senderName}`, {
            body: notification.data.message,
            icon: logoURL
          });
        }
        break;
      default:
        break;
    }
  }, [
    notification,
    subscribedNotifications.ERROR,
    subscribedNotifications.METADATA_UPDATED
  ]);
  if (isNotificationDisabled) {
    return null;
  }
  return /* @__PURE__ */ React179.createElement(React179.Fragment, null, /* @__PURE__ */ React179.createElement(TrackUnmuteModal, null), /* @__PURE__ */ React179.createElement(TrackBulkUnmuteModal, null), /* @__PURE__ */ React179.createElement(TrackNotifications, null), roomState === HMSRoomState10.Connected ? /* @__PURE__ */ React179.createElement(PeerNotifications, null) : null, /* @__PURE__ */ React179.createElement(ReconnectNotifications, null), /* @__PURE__ */ React179.createElement(AutoplayBlockedModal, null), /* @__PURE__ */ React179.createElement(PermissionErrorNotificationModal, null), /* @__PURE__ */ React179.createElement(InitErrorModal, null), /* @__PURE__ */ React179.createElement(ChatNotifications, null), /* @__PURE__ */ React179.createElement(HandRaisedNotifications, null), /* @__PURE__ */ React179.createElement(TranscriptionNotifications, null));
}

// src/Prebuilt/components/PIP/PIPProvider.tsx
import React180, { useCallback as useCallback37, useMemo as useMemo22, useState as useState76 } from "react";
var PIPProvider = ({ children }) => {
  const isSupported = "documentPictureInPicture" in window;
  const [pipWindow, setPipWindow] = useState76(null);
  const closePipWindow = useCallback37(() => {
    if (pipWindow != null) {
      pipWindow.close();
      setPipWindow(null);
    }
  }, [pipWindow]);
  const requestPipWindow = useCallback37(
    (width, height) => __async(void 0, null, function* () {
      if (pipWindow != null) {
        return;
      }
      const pip = yield window.documentPictureInPicture.requestWindow({
        width,
        height
      });
      pip.addEventListener("pagehide", () => {
        setPipWindow(null);
      });
      setPipWindow(pip);
    }),
    [pipWindow]
  );
  const value = useMemo22(() => {
    return {
      isSupported,
      pipWindow,
      requestPipWindow,
      closePipWindow
    };
  }, [closePipWindow, isSupported, pipWindow, requestPipWindow]);
  return /* @__PURE__ */ React180.createElement(PIPContext.Provider, { value }, children);
};

// src/Prebuilt/components/Preview/PreviewScreen.tsx
import React181 from "react";
import { useSearchParam } from "react-use";
var PreviewScreen = () => {
  var _a7, _b7, _c;
  const { isPreviewScreenEnabled } = useRoomLayoutPreviewScreen();
  const skipPreview = !isPreviewScreenEnabled;
  const previewAsRole = useSearchParam(QUERY_PARAM_PREVIEW_AS_ROLE);
  const { userName } = useHMSPrebuiltContext();
  const initialName = userName || (skipPreview ? "Beam" : "");
  const authToken = useAuthToken();
  const roomLayout = useRoomLayout();
  const { preview_header: previewHeader = {} } = ((_c = (_b7 = (_a7 = roomLayout == null ? void 0 : roomLayout.screens) == null ? void 0 : _a7.preview) == null ? void 0 : _b7.default) == null ? void 0 : _c.elements) || {};
  return /* @__PURE__ */ React181.createElement(Flex, { direction: "column", css: { size: "100%" } }, /* @__PURE__ */ React181.createElement(
    Flex,
    {
      css: {
        flex: "1 1 0",
        position: "relative",
        overflowY: "auto",
        color: "$primary_default"
      },
      justify: "center",
      align: "center"
    },
    authToken && Object.keys(previewHeader).length > 0 ? /* @__PURE__ */ React181.createElement(
      PreviewJoin_default,
      {
        initialName,
        skipPreview,
        asRole: previewAsRole != null ? previewAsRole : void 0
      }
    ) : /* @__PURE__ */ React181.createElement(FullPageProgress_default, null)
  ));
};

// src/Prebuilt/components/Toast/ToastContainer.jsx
import React183, { useEffect as useEffect76, useState as useState77 } from "react";
import { selectIsConnectedToRoom as selectIsConnectedToRoom11, useHMSStore as useHMSStore95 } from "@100mslive/react-sdk";

// src/Prebuilt/components/Toast/Toast.jsx
import React182 from "react";
var Toast2 = (_a7) => {
  var _b7 = _a7, {
    title,
    description,
    close = true,
    open,
    duration,
    onOpenChange,
    icon
  } = _b7, props = __objRest(_b7, [
    "title",
    "description",
    "close",
    "open",
    "duration",
    "onOpenChange",
    "icon"
  ]);
  return /* @__PURE__ */ React182.createElement(
    Toast.HMSToast,
    __spreadValues({
      title,
      description,
      open,
      isClosable: close,
      onOpenChange,
      duration: !close ? 6e5 : duration,
      icon
    }, props)
  );
};

// src/Prebuilt/components/Toast/ToastContainer.jsx
var ToastContainer = () => {
  const isConnected = useHMSStore95(selectIsConnectedToRoom11);
  const [toasts, setToast] = useState77([]);
  useEffect76(() => {
    ToastManager.addListener(setToast);
    return () => {
      ToastManager.removeListener(setToast);
    };
  }, []);
  return /* @__PURE__ */ React183.createElement(Toast.Provider, { swipeDirection: "left", duration: 3e3 }, toasts.slice(0, MAX_TOASTS).map((toast) => {
    return /* @__PURE__ */ React183.createElement(
      Toast2,
      __spreadProps(__spreadValues({
        key: toast.id
      }, toast), {
        onOpenChange: (value) => !value && ToastManager.removeToast(toast.id)
      })
    );
  }), /* @__PURE__ */ React183.createElement(
    Toast.Viewport,
    {
      css: __spreadValues({
        position: "absolute"
      }, !isConnected ? {} : { bottom: "$24" })
    }
  ));
};

// src/Prebuilt/layouts/Sheet.tsx
import React185 from "react";
import { selectAppData as selectAppData15, useHMSStore as useHMSStore96 } from "@100mslive/react-sdk";

// src/Prebuilt/components/RoomDetails/RoomDetailsSheet.tsx
import React184 from "react";
import { CrossIcon as CrossIcon29 } from "@100mslive/react-icons";
var RoomDetailsSheet = () => {
  const { title, description, details } = useRoomLayoutHeader();
  const toggleSheet = useSheetToggle(SHEET_OPTIONS.ROOM_DETAILS);
  const showRoomDetailsSheet = useIsSheetTypeOpen(SHEET_OPTIONS.ROOM_DETAILS);
  return /* @__PURE__ */ React184.createElement(Sheet.Root, { open: showRoomDetailsSheet, onOpenChange: toggleSheet }, /* @__PURE__ */ React184.createElement(Sheet.Content, { css: { py: "$8", pb: "$12" } }, /* @__PURE__ */ React184.createElement(
    Flex,
    {
      justify: "between",
      align: "center",
      css: {
        w: "100%",
        borderBottom: "1px solid $border_bright",
        pb: "$4",
        mb: "$4",
        px: "$8"
      }
    },
    /* @__PURE__ */ React184.createElement(Text, { css: { fontWeight: "$semiBold", color: "$on_surface_high" } }, "Description"),
    /* @__PURE__ */ React184.createElement(Sheet.Close, { css: { color: "$on_surface_high" } }, /* @__PURE__ */ React184.createElement(CrossIcon29, null))
  ), /* @__PURE__ */ React184.createElement(Flex, { align: "center", css: { w: "100%", gap: "$4", pb: "$8", px: "$8" } }, /* @__PURE__ */ React184.createElement(Logo, null), /* @__PURE__ */ React184.createElement(Box, null, /* @__PURE__ */ React184.createElement(
    Text,
    {
      variant: "sm",
      css: { c: "$on_secondary_high", fontWeight: "$semiBold" }
    },
    title
  ), /* @__PURE__ */ React184.createElement(RoomDetailsRow, { details }))), /* @__PURE__ */ React184.createElement(Text, { variant: "sm", css: { color: "$on_surface_medium", px: "$8" } }, description)));
};

// src/Prebuilt/layouts/Sheet.tsx
var Sheet2 = () => {
  const sheet = useHMSStore96(selectAppData15(APP_DATA.sheet));
  let ViewComponent;
  if (sheet === SHEET_OPTIONS.ROOM_DETAILS) {
    ViewComponent = /* @__PURE__ */ React185.createElement(RoomDetailsSheet, null);
  }
  return /* @__PURE__ */ React185.createElement(Box, null, ViewComponent);
};

// src/Prebuilt/plugins/FlyingEmoji.jsx
import React186, { useCallback as useCallback38, useEffect as useEffect77, useMemo as useMemo23, useState as useState78 } from "react";
import { useMedia as useMedia46 } from "react-use";
import {
  selectIsLargeRoom as selectIsLargeRoom4,
  selectLocalPeerID as selectLocalPeerID19,
  selectPeerNameByID as selectPeerNameByID8,
  useCustomEvent as useCustomEvent5,
  useHMSActions as useHMSActions58,
  useHMSStore as useHMSStore97,
  useHMSVanillaStore as useHMSVanillaStore18
} from "@100mslive/react-sdk";
var emojiCount = 1;
var flyAndFade = keyframes({
  "20%": { opacity: 1 },
  "100%": { bottom: "60%", opacity: 0 }
});
var wiggleLeftRight = keyframes({
  "0%": { marginLeft: "-50px" },
  "100%": { marginLeft: "50px" }
});
var wiggleRightLeft = keyframes({
  "0%": { marginLeft: "50px" },
  "100%": { marginLeft: "-50px" }
});
var getStartingPoints = (isMobile) => {
  let arr = [];
  const min = 5;
  const max = isMobile ? 30 : 20;
  const inc = isMobile ? 8 : 5;
  for (let i = min; i <= max; i += inc) {
    arr.push(i);
  }
  return arr;
};
function FlyingEmoji() {
  const localPeerId = useHMSStore97(selectLocalPeerID19);
  const vanillaStore = useHMSVanillaStore18();
  const hmsActions = useHMSActions58();
  const [emojis, setEmojis] = useState78([]);
  const isMobile = useMedia46(config.media.md);
  const isLargeRoom = useHMSStore97(selectIsLargeRoom4);
  const startingPoints = useMemo23(() => getStartingPoints(isMobile), [isMobile]);
  const showFlyingEmoji = useCallback38(
    (_0) => __async(this, [_0], function* ({ emojiId, senderId }) {
      if (!emojiId || !senderId || document.hidden) {
        return;
      }
      let senderPeerName = vanillaStore.getState(selectPeerNameByID8(senderId));
      if (!senderPeerName && isLargeRoom) {
        const sender = yield hmsActions.getPeer(senderId);
        senderPeerName = sender == null ? void 0 : sender.name;
      }
      const nameToShow = localPeerId === senderId ? "You" : senderPeerName;
      const startingPoint = startingPoints[emojiCount % startingPoints.length];
      const id = emojiCount++;
      setEmojis((emojis2) => {
        return [
          ...emojis2,
          {
            id,
            emojiId,
            senderName: nameToShow,
            startingPoint: `${startingPoint}%`,
            wiggleType: Math.random() < 0.5 ? 0 : 1
          }
        ];
      });
    }),
    [vanillaStore, isLargeRoom, localPeerId, startingPoints, hmsActions]
  );
  useCustomEvent5({
    type: EMOJI_REACTION_TYPE,
    onEvent: showFlyingEmoji
  });
  useEffect77(() => {
    window.showFlyingEmoji = showFlyingEmoji;
  }, [showFlyingEmoji]);
  return /* @__PURE__ */ React186.createElement(
    Box,
    {
      css: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 999
      }
    },
    emojis.map((emoji) => {
      return /* @__PURE__ */ React186.createElement(
        Flex,
        {
          key: emoji.id,
          css: {
            left: emoji.startingPoint,
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            animation: `${flyAndFade()} 5s forwards, ${emoji.wiggleType === 0 ? wiggleLeftRight() : wiggleRightLeft()} 1s ease-in-out infinite alternate`
          },
          onAnimationEnd: () => setEmojis(emojis.filter((item) => item.id !== emoji.id))
        },
        /* @__PURE__ */ React186.createElement(Box, null, /* @__PURE__ */ React186.createElement("em-emoji", { id: emoji.emojiId, size: "48px", set: "apple" })),
        emoji.senderName ? /* @__PURE__ */ React186.createElement(
          Box,
          {
            css: {
              width: "fit-content",
              padding: "$2 $4",
              background: "$surface_bright",
              borderRadius: "$1"
            }
          },
          /* @__PURE__ */ React186.createElement(
            Text,
            {
              css: {
                fontSize: "$space$6",
                lineHeight: "$xs",
                color: "$on_surface_high"
              }
            },
            emoji.senderName
          )
        ) : ""
      );
    })
  );
}

// src/Prebuilt/plugins/RemoteStopScreenshare.jsx
import React187, { useCallback as useCallback39 } from "react";
import { useCustomEvent as useCustomEvent6, useHMSActions as useHMSActions59 } from "@100mslive/react-sdk";
function RemoteStopScreenshare() {
  const actions = useHMSActions59();
  const onRemoteStopScreenshare = useCallback39(() => __async(this, null, function* () {
    yield actions.setScreenShareEnabled(false);
  }), [actions]);
  useCustomEvent6({
    type: REMOTE_STOP_SCREENSHARE_TYPE,
    onEvent: onRemoteStopScreenshare
  });
  return /* @__PURE__ */ React187.createElement(React187.Fragment, null);
}

// src/Prebuilt/components/hooks/useAutoStartStreaming.tsx
import { useCallback as useCallback40, useEffect as useEffect78, useRef as useRef33 } from "react";
import {
  selectIsConnectedToRoom as selectIsConnectedToRoom12,
  selectPermissions as selectPermissions20,
  useHMSActions as useHMSActions60,
  useHMSStore as useHMSStore98,
  useRecordingStreaming as useRecordingStreaming12
} from "@100mslive/react-sdk";
var useAutoStartStreaming = () => {
  const [isHLSStarted, setHLSStarted] = useSetAppDataByKey(APP_DATA.hlsStarted);
  const permissions = useHMSStore98(selectPermissions20);
  const showStreamingUI = useShowStreamingUI();
  const hmsActions = useHMSActions60();
  const isConnected = useHMSStore98(selectIsConnectedToRoom12);
  const {
    isHLSRunning,
    isRTMPRunning,
    isHLSRecordingOn,
    isBrowserRecordingOn
  } = useRecordingStreaming12();
  const streamStartedRef = useRef33(false);
  const startHLS = useCallback40(() => __async(void 0, null, function* () {
    try {
      if (isHLSStarted || !showStreamingUI || isHLSRunning || isRTMPRunning || isHLSRecordingOn || isBrowserRecordingOn) {
        return;
      }
      setHLSStarted(true);
      streamStartedRef.current = true;
      yield hmsActions.startHLSStreaming();
    } catch (error) {
      console.error(error);
      streamStartedRef.current = false;
      setHLSStarted(false);
    }
  }), [
    hmsActions,
    isHLSRunning,
    isHLSStarted,
    setHLSStarted,
    showStreamingUI,
    isRTMPRunning,
    isHLSRecordingOn,
    isBrowserRecordingOn
  ]);
  useEffect78(() => {
    if (!isHLSStarted && !isHLSRunning) {
      streamStartedRef.current = false;
    }
  }, [isHLSStarted, isHLSRunning]);
  useEffect78(() => {
    if (!isConnected || streamStartedRef.current || !(permissions == null ? void 0 : permissions.hlsStreaming)) {
      return;
    }
    startHLS();
  }, [isConnected]);
};

// src/Prebuilt/App.tsx
var HMSPrebuilt = React188.forwardRef(
  ({
    roomCode = "",
    authToken = "",
    containerSelector = DEFAULT_PORTAL_CONTAINER,
    logo,
    typography,
    themes,
    options: { userName = "", userId = "", endpoints } = {},
    screens,
    leaveOnUnload = true,
    onLeave,
    onJoin
  }, ref) => {
    var _a7, _b7, _c, _d;
    const reactiveStore = useRef34();
    const [hydrated, setHydrated] = React188.useState(false);
    useEffect79(() => {
      setHydrated(true);
      const hms = new HMSReactiveStore();
      const hmsStore = hms.getStore();
      const hmsActions = hms.getActions();
      const hmsNotifications = hms.getNotifications();
      const hmsStats = hms.getStats();
      hms.triggerOnSubscribe();
      reactiveStore.current = {
        hmsActions,
        hmsStats,
        hmsStore,
        hmsNotifications
      };
    }, []);
    useEffect79(() => {
      if (!ref || !reactiveStore.current) {
        return;
      }
      ref.current = __spreadValues({}, reactiveStore.current);
    }, [ref]);
    useEffect79(() => {
      return () => {
        var _a8;
        VBHandler.reset();
        (_a8 = reactiveStore == null ? void 0 : reactiveStore.current) == null ? void 0 : _a8.hmsActions.leave();
      };
    }, []);
    const endpointsObj = endpoints;
    const tokenByRoomCodeEndpoint = (endpointsObj == null ? void 0 : endpointsObj.tokenByRoomCode) || "";
    const initEndpoint = (endpointsObj == null ? void 0 : endpointsObj.init) || "";
    const eventEndpoint = (endpointsObj == null ? void 0 : endpointsObj.event) || "";
    const roomLayoutEndpoint = (endpointsObj == null ? void 0 : endpointsObj.roomLayout) || "";
    const overrideLayout = {
      logo,
      themes,
      typography,
      screens
    };
    if (!roomCode && !authToken) {
      console.error(`
          HMSPrebuilt can be initialised by providing: 
          either "roomCode" or "authToken".
          Please check if you are providing the above values for initialising prebuilt.
        `);
      throw Error("Incorrect initializing params for HMSPrebuilt component");
    }
    if (!hydrated) {
      return null;
    }
    globalStyles();
    return /* @__PURE__ */ React188.createElement(ErrorBoundary, null, /* @__PURE__ */ React188.createElement(
      HMSPrebuiltContext.Provider,
      {
        value: {
          roomCode,
          containerSelector,
          onLeave,
          onJoin,
          userName,
          userId,
          endpoints: {
            tokenByRoomCode: tokenByRoomCodeEndpoint,
            init: initEndpoint,
            roomLayout: roomLayoutEndpoint,
            event: eventEndpoint
          }
        }
      },
      /* @__PURE__ */ React188.createElement(
        HMSRoomProvider,
        {
          isHMSStatsOn: FeatureFlags.enableStatsForNerds,
          actions: (_a7 = reactiveStore.current) == null ? void 0 : _a7.hmsActions,
          store: (_b7 = reactiveStore.current) == null ? void 0 : _b7.hmsStore,
          notifications: (_c = reactiveStore.current) == null ? void 0 : _c.hmsNotifications,
          stats: (_d = reactiveStore.current) == null ? void 0 : _d.hmsStats,
          leaveOnUnload
        },
        /* @__PURE__ */ React188.createElement(
          RoomLayoutProvider,
          {
            roomLayoutEndpoint,
            overrideLayout
          },
          /* @__PURE__ */ React188.createElement(RoomLayoutContext.Consumer, null, (data3) => {
            var _a8;
            const layout = data3 == null ? void 0 : data3.layout;
            const theme2 = ((_a8 = layout == null ? void 0 : layout.themes) == null ? void 0 : _a8[0]) || {};
            const { typography: typography2 } = layout || {};
            let fontFamily = ["sans-serif"];
            if (typography2 == null ? void 0 : typography2.font_family) {
              fontFamily = [`${typography2 == null ? void 0 : typography2.font_family}`, ...fontFamily];
            }
            return /* @__PURE__ */ React188.createElement(
              HMSThemeProvider,
              {
                themeType: `${theme2.name}-${Date.now()}`,
                theme: {
                  //@ts-ignore: Prebuilt theme to match stiches theme
                  colors: theme2.palette,
                  fonts: {
                    //@ts-ignore: font list to match token types of stiches
                    sans: fontFamily
                  }
                }
              },
              /* @__PURE__ */ React188.createElement(PIPProvider, null, /* @__PURE__ */ React188.createElement(Init, null), /* @__PURE__ */ React188.createElement(
                DialogContainerProvider,
                {
                  dialogContainerSelector: containerSelector
                },
                /* @__PURE__ */ React188.createElement(
                  Box,
                  {
                    className: DEFAULT_PORTAL_CONTAINER.slice(1),
                    css: {
                      bg: "$background_dim",
                      size: "100%",
                      lineHeight: "1.5",
                      "-webkit-text-size-adjust": "100%",
                      position: "relative"
                    }
                  },
                  /* @__PURE__ */ React188.createElement(
                    AppRoutes,
                    {
                      authTokenByRoomCodeEndpoint: tokenByRoomCodeEndpoint,
                      defaultAuthToken: authToken
                    }
                  )
                )
              ))
            );
          })
        )
      )
    ));
  }
);
HMSPrebuilt.displayName = "HMSPrebuilt";
var AppStates = ({ activeState }) => {
  const { isPreviewScreenEnabled } = useRoomLayoutPreviewScreen();
  const { isLeaveScreenEnabled } = useRoomLayoutLeaveScreen();
  useAutoStartStreaming();
  return match16({ activeState, isPreviewScreenEnabled, isLeaveScreenEnabled }).with(
    { activeState: "preview" /* PREVIEW */, isPreviewScreenEnabled: true },
    () => /* @__PURE__ */ React188.createElement(PreviewScreen, null)
  ).with(
    { activeState: "leave" /* LEAVE */, isLeaveScreenEnabled: true },
    () => /* @__PURE__ */ React188.createElement(LeaveScreen, null)
  ).otherwise(() => /* @__PURE__ */ React188.createElement(ConferenceScreen, null));
};
var BackSwipe = () => {
  const isConnectedToRoom = useHMSStore99(selectIsConnectedToRoom13);
  const hmsActions = useHMSActions61();
  useEffect79(() => {
    const onRouteLeave = () => __async(void 0, null, function* () {
      if (isConnectedToRoom) {
        yield hmsActions.leave();
      }
    });
    window.addEventListener("popstate", onRouteLeave);
    return () => {
      window.removeEventListener("popstate", onRouteLeave);
    };
  }, [hmsActions, isConnectedToRoom]);
  return null;
};
function AppRoutes({
  authTokenByRoomCodeEndpoint,
  defaultAuthToken
}) {
  const roomLayout = useRoomLayout();
  const isNotificationsDisabled = useIsNotificationDisabled();
  const { activeState, rejoin } = useAppStateManager();
  return /* @__PURE__ */ React188.createElement(AppStateContext.Provider, { value: { rejoin } }, /* @__PURE__ */ React188.createElement(React188.Fragment, null, activeState !== "leave" /* LEAVE */ && /* @__PURE__ */ React188.createElement(AppData, null), /* @__PURE__ */ React188.createElement(ToastContainer, null), /* @__PURE__ */ React188.createElement(Notifications, null), /* @__PURE__ */ React188.createElement(MwebLandscapePrompt, null), /* @__PURE__ */ React188.createElement(Sheet2, null), /* @__PURE__ */ React188.createElement(BackSwipe, null), !isNotificationsDisabled && /* @__PURE__ */ React188.createElement(FlyingEmoji, null), /* @__PURE__ */ React188.createElement(RemoteStopScreenshare, null), /* @__PURE__ */ React188.createElement(KeyboardHandler, null), /* @__PURE__ */ React188.createElement(
    AuthToken_default,
    {
      authTokenByRoomCodeEndpoint,
      defaultAuthToken,
      activeState
    }
  ), roomLayout && activeState && /* @__PURE__ */ React188.createElement(AppStates, { activeState })));
}

// src/Progress/index.tsx
import { Indicator as Indicator3, Root as Root27 } from "@radix-ui/react-progress";
var StyledIndicator = styled(Indicator3, {
  h: "$4",
  backgroundColor: "$primary_default"
});
var StyledRoot2 = styled(Root27, {
  w: "100%",
  h: "$4",
  borderRadius: "$round",
  backgroundColor: "$secondary_dim",
  overflow: "hidden"
});
var Progress = {
  Root: StyledRoot2,
  Content: StyledIndicator
};

// src/Diagnostics/Diagnostics.tsx
import React196, { useCallback as useCallback42, useRef as useRef36, useState as useState84 } from "react";
import { HMSRoomProvider as HMSRoomProvider2, useHMSActions as useHMSActions63 } from "@100mslive/react-sdk";
import {
  CheckCircleIcon as CheckCircleIcon7,
  ConnectivityIcon as ConnectivityIcon2,
  CrossCircleIcon as CrossCircleIcon5,
  GlobeIcon,
  MicOnIcon as MicOnIcon8,
  VideoOnIcon as VideoOnIcon6
} from "@100mslive/react-icons";

// src/Diagnostics/AudioTest.tsx
import React192, { useCallback as useCallback41, useEffect as useEffect80, useState as useState80 } from "react";
import {
  selectDevices,
  selectLocalAudioTrackID as selectLocalAudioTrackID2,
  selectLocalMediaSettings,
  selectTrackAudioByID as selectTrackAudioByID2,
  useHMSActions as useHMSActions62,
  useHMSStore as useHMSStore100
} from "@100mslive/react-sdk";
import { MicOnIcon as MicOnIcon7, SpeakerIcon as SpeakerIcon5, StopIcon as StopIcon3 } from "@100mslive/react-icons";

// src/Diagnostics/components.tsx
import React190 from "react";

// src/Diagnostics/DiagnosticsContext.ts
import React189, { useContext as useContext6 } from "react";
var DiagnosticsStep = /* @__PURE__ */ ((DiagnosticsStep2) => {
  DiagnosticsStep2[DiagnosticsStep2["BROWSER"] = 0] = "BROWSER";
  DiagnosticsStep2[DiagnosticsStep2["VIDEO"] = 1] = "VIDEO";
  DiagnosticsStep2[DiagnosticsStep2["AUDIO"] = 2] = "AUDIO";
  DiagnosticsStep2[DiagnosticsStep2["CONNECTIVITY"] = 3] = "CONNECTIVITY";
  return DiagnosticsStep2;
})(DiagnosticsStep || {});
var initialSteps = {
  [0 /* BROWSER */]: { name: "Browser Support" },
  [1 /* VIDEO */]: { name: "Test Video" },
  [2 /* AUDIO */]: { name: "Test Audio" },
  [3 /* CONNECTIVITY */]: { name: "Connection Quality" }
};
var DiagnosticsContext = React189.createContext({
  activeStepIndex: 0,
  setActiveStep: () => {
    return;
  },
  steps: initialSteps,
  updateStep: () => {
    return;
  }
});
var useDiagnostics = () => {
  const context = useContext6(DiagnosticsContext);
  const activeStep = context.steps[context.activeStepIndex];
  return __spreadProps(__spreadValues({}, context), { activeStep });
};

// src/Diagnostics/components.tsx
var TestContainer = ({
  css: css2,
  children
}) => {
  return /* @__PURE__ */ React190.createElement(Box, { css: __spreadValues({ p: "$10" }, css2) }, children);
};
var TestFooter = ({
  error,
  ctaText,
  children
}) => {
  const {
    hmsDiagnostics,
    activeStepIndex: activeStep,
    setActiveStep
  } = useDiagnostics();
  const onNextStep = () => {
    if (activeStep === 2 /* AUDIO */) {
      hmsDiagnostics == null ? void 0 : hmsDiagnostics.stopMicCheck();
    } else if (activeStep === 1 /* VIDEO */) {
      hmsDiagnostics == null ? void 0 : hmsDiagnostics.stopCameraCheck();
    } else if (activeStep === 3 /* CONNECTIVITY */) {
      hmsDiagnostics == null ? void 0 : hmsDiagnostics.stopConnectivityCheck();
    }
    setActiveStep((step) => step + 1);
  };
  return /* @__PURE__ */ React190.createElement(
    Flex,
    {
      css: {
        py: "$8",
        px: "$10",
        background: "$background_dim",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid $border_default",
        fontSize: "$sm",
        borderBottomLeftRadius: "$1",
        borderBottomRightRadius: "$1",
        lineHeight: "$sm",
        zIndex: 1001,
        "@lg": { flexDirection: "column", gap: "$8" }
      }
    },
    /* @__PURE__ */ React190.createElement(Box, null, error && /* @__PURE__ */ React190.createElement(Text, { css: { c: "$alert_error_default" } }, "Error: ", error.message)),
    children ? children : /* @__PURE__ */ React190.createElement(
      Flex,
      {
        align: "center",
        css: { gap: "$8", "@lg": { flexDirection: "column" } }
      },
      /* @__PURE__ */ React190.createElement(Text, { css: { c: "$on_primary_medium" } }, ctaText),
      /* @__PURE__ */ React190.createElement(Flex, { align: "center", gap: "4" }, /* @__PURE__ */ React190.createElement(Button, { onClick: onNextStep, variant: "standard", outlined: true }, "Skip"), /* @__PURE__ */ React190.createElement(Button, { disabled: !!error, onClick: onNextStep }, "Yes"))
    )
  );
};

// src/Diagnostics/DeviceSelector.jsx
import React191, { useRef as useRef35, useState as useState79 } from "react";
import PropTypes from "prop-types";
var DeviceSelector2 = ({
  title,
  devices,
  selection,
  onChange,
  icon,
  children = null
}) => {
  var _a7, _b7;
  const [open, setOpen] = useState79(false);
  const ref = useRef35(null);
  return /* @__PURE__ */ React191.createElement(Box, { css: { mb: "$6" } }, /* @__PURE__ */ React191.createElement(Text, { css: { mb: "$4" } }, title), /* @__PURE__ */ React191.createElement(
    Flex,
    {
      align: "center",
      css: {
        gap: "$4",
        "@md": {
          flexDirection: children ? "column" : "row",
          alignItems: children ? "start" : "center"
        }
      }
    },
    /* @__PURE__ */ React191.createElement(Dropdown.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React191.createElement(
      DialogDropdownTrigger,
      {
        ref,
        icon,
        title: ((_a7 = devices.find(({ deviceId }) => deviceId === selection)) == null ? void 0 : _a7.label) || "Select device from list",
        open
      }
    ), /* @__PURE__ */ React191.createElement(Dropdown.Portal, null, /* @__PURE__ */ React191.createElement(
      Dropdown.Content,
      {
        align: "start",
        sideOffset: 8,
        css: {
          w: (
            // @ts-ignore
            (_b7 = ref.current) == null ? void 0 : _b7.clientWidth
          ),
          zIndex: 1001
        }
      },
      devices.map((device) => {
        return /* @__PURE__ */ React191.createElement(
          Dropdown.Item,
          {
            key: device.label,
            onSelect: () => onChange(device.deviceId),
            css: {
              px: "$9"
            }
          },
          device.label
        );
      })
    ))),
    children
  ));
};
DeviceSelector2.propTypes = {
  title: PropTypes.string.isRequired,
  devices: PropTypes.array.isRequired,
  selection: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node
};

// src/Diagnostics/AudioTest.tsx
var SelectContainer = ({ children }) => /* @__PURE__ */ React192.createElement(Box, { css: { w: "calc(50% - 0.75rem)", "@lg": { w: "100%" } } }, children);
var MicTest = ({ setError }) => {
  var _a7, _b7;
  const { hmsDiagnostics } = useDiagnostics();
  const devices = useHMSStore100(selectDevices);
  const [isRecording, setIsRecording] = useState80(false);
  const [selectedMic, setSelectedMic] = useState80(
    ((_a7 = devices.audioInput[0]) == null ? void 0 : _a7.deviceId) || "default"
  );
  const trackID = useHMSStore100(selectLocalAudioTrackID2);
  const audioLevel = useHMSStore100(selectTrackAudioByID2(trackID));
  const { audioOutputDeviceId } = useHMSStore100(selectLocalMediaSettings);
  const { playing, setPlaying, audioRef } = useAudioOutputTest({
    deviceId: audioOutputDeviceId || ((_b7 = devices.audioOutput[0]) == null ? void 0 : _b7.deviceId)
  });
  return /* @__PURE__ */ React192.createElement(SelectContainer, null, /* @__PURE__ */ React192.createElement(
    DeviceSelector2,
    {
      title: "Microphone (Input)",
      devices: devices.audioInput,
      selection: selectedMic,
      icon: /* @__PURE__ */ React192.createElement(MicOnIcon7, null),
      onChange: (deviceId) => {
        setError(void 0);
        setSelectedMic(deviceId);
        hmsDiagnostics == null ? void 0 : hmsDiagnostics.stopMicCheck();
      }
    }
  ), /* @__PURE__ */ React192.createElement(Flex, { css: { gap: "$6", alignItems: "center" } }, /* @__PURE__ */ React192.createElement(
    Button,
    {
      variant: "standard",
      icon: true,
      onClick: () => {
        isRecording ? hmsDiagnostics == null ? void 0 : hmsDiagnostics.stopMicCheck() : hmsDiagnostics == null ? void 0 : hmsDiagnostics.startMicCheck({
          inputDevice: selectedMic,
          onError: (err) => {
            setError(err);
          },
          onStop: () => {
            setIsRecording(false);
          }
        }).then(() => {
          setIsRecording(true);
        });
      },
      disabled: devices.audioInput.length === 0 || playing
    },
    isRecording ? /* @__PURE__ */ React192.createElement(StopIcon3, null) : /* @__PURE__ */ React192.createElement(MicOnIcon7, null),
    isRecording ? "Stop Recording" : "Record"
  ), /* @__PURE__ */ React192.createElement(
    Button,
    {
      icon: true,
      variant: "standard",
      outlined: (hmsDiagnostics == null ? void 0 : hmsDiagnostics.getRecordedAudio()) === TEST_AUDIO_URL,
      onClick: () => {
        if (audioRef.current) {
          audioRef.current.src = (hmsDiagnostics == null ? void 0 : hmsDiagnostics.getRecordedAudio()) || "";
          audioRef.current.play();
        }
      },
      disabled: playing || (hmsDiagnostics == null ? void 0 : hmsDiagnostics.getRecordedAudio()) === TEST_AUDIO_URL
    },
    /* @__PURE__ */ React192.createElement(SpeakerIcon5, null),
    playing ? "Playing..." : "Playback"
  ), /* @__PURE__ */ React192.createElement(
    "audio",
    {
      ref: audioRef,
      onEnded: () => setPlaying(false),
      onPlay: () => setPlaying(true),
      style: { display: "none" }
    }
  )), /* @__PURE__ */ React192.createElement(
    Flex,
    {
      align: "center",
      css: {
        mt: "$4",
        maxWidth: "10rem",
        opacity: isRecording ? "1" : "0",
        gap: "$4"
      }
    },
    /* @__PURE__ */ React192.createElement(Text, null, /* @__PURE__ */ React192.createElement(MicOnIcon7, null)),
    /* @__PURE__ */ React192.createElement(Progress.Root, { value: audioLevel, css: { h: "$2" } }, /* @__PURE__ */ React192.createElement(
      Progress.Content,
      {
        style: {
          transform: `translateX(-${100 - audioLevel}%)`,
          transition: "transform 0.3s"
        }
      }
    ))
  ));
};
var SpeakerTest = () => {
  var _a7;
  const actions = useHMSActions62();
  const devices = useHMSStore100(selectDevices);
  const { audioOutputDeviceId } = useHMSStore100(selectLocalMediaSettings);
  if (devices.audioOutput.length === 0) {
    return /* @__PURE__ */ React192.createElement(React192.Fragment, null);
  }
  return /* @__PURE__ */ React192.createElement(SelectContainer, null, /* @__PURE__ */ React192.createElement(
    DeviceSelector2,
    {
      title: "Speaker (Output)",
      devices: devices.audioOutput,
      selection: audioOutputDeviceId || ((_a7 = devices.audioOutput[0]) == null ? void 0 : _a7.deviceId),
      icon: /* @__PURE__ */ React192.createElement(SpeakerIcon5, null),
      onChange: (deviceId) => {
        actions.setAudioOutputDevice(deviceId);
      }
    }
  ));
};
var AudioTest = () => {
  const { hmsDiagnostics, updateStep } = useDiagnostics();
  const [error, setErrorAlone] = useState80();
  const setError = useCallback41(
    (err) => {
      updateStep(2 /* AUDIO */, { hasFailed: !!err });
      setErrorAlone(err);
    },
    [updateStep, setErrorAlone]
  );
  useEffect80(() => {
    hmsDiagnostics == null ? void 0 : hmsDiagnostics.requestPermission({ audio: true }).catch((error2) => setError(error2));
  }, [hmsDiagnostics, setError]);
  return /* @__PURE__ */ React192.createElement(React192.Fragment, null, /* @__PURE__ */ React192.createElement(TestContainer, null, /* @__PURE__ */ React192.createElement(Text, { variant: "body2", css: { c: "$on_primary_medium" } }, "Record a 10 second audio clip and play it back to check that your microphone and speaker are working. If they aren't, make sure your volume is turned up, try a different speaker or microphone, or check your bluetooth settings."), /* @__PURE__ */ React192.createElement(
    Flex,
    {
      css: {
        mt: "$10",
        gap: "$10",
        "@lg": {
          flexDirection: "column",
          gap: "$8"
        }
      }
    },
    /* @__PURE__ */ React192.createElement(MicTest, { setError }),
    /* @__PURE__ */ React192.createElement(SpeakerTest, null)
  )), /* @__PURE__ */ React192.createElement(TestFooter, { error, ctaText: "Does your audio sound good?" }), /* @__PURE__ */ React192.createElement(PermissionErrorModal, { error }));
};

// src/Diagnostics/BrowserTest.tsx
import React193, { useEffect as useEffect81, useState as useState81 } from "react";
import { parsedUserAgent as parsedUserAgent4 } from "@100mslive/react-sdk";
var CMS_MEDIA_SERVER = "https://storage.googleapis.com/100ms-cms-prod/";
var operatingSystemIconInfo = {
  tizen: {
    key: "tizen",
    val: "Tizen",
    icon: `${CMS_MEDIA_SERVER}cms/Tizen_b99350214e/Tizen_b99350214e.svg`
  },
  "mac os": {
    key: "macos",
    val: "Mac OS",
    icon: `${CMS_MEDIA_SERVER}cms/mac_OS_804456afd8/mac_OS_804456afd8.png`
  },
  windows: {
    key: "windows",
    val: "Windows",
    icon: `${CMS_MEDIA_SERVER}cms/Windows_fdfe6749b6/Windows_fdfe6749b6.svg`
  },
  linux: {
    key: "linux",
    val: "Linux",
    icon: `${CMS_MEDIA_SERVER}cms/Linux_31f8353a2e/Linux_31f8353a2e.svg`
  },
  chromium: {
    key: "chromium",
    val: "Chromium",
    icon: `${CMS_MEDIA_SERVER}cms/Chromium_3df17710bd/Chromium_3df17710bd.svg`
  },
  ubuntu: {
    key: "ubuntu",
    val: "Ubuntu",
    icon: `${CMS_MEDIA_SERVER}cms/Ubuntu_966dd923c5/Ubuntu_966dd923c5.svg`
  },
  ios: {
    key: "ios",
    val: "iOS",
    icon: `${CMS_MEDIA_SERVER}cms/i_OS_3cdc9d9b71/i_OS_3cdc9d9b71.svg`
  },
  android: {
    key: "android",
    val: "Android",
    icon: `${CMS_MEDIA_SERVER}cms/Android_49dcfdc934/Android_49dcfdc934.svg`
  }
};
var browserTypeIconInfo = {
  brave: {
    key: "brave",
    val: "Brave",
    icon: `${CMS_MEDIA_SERVER}cms/Brave_7e66131f09/Brave_7e66131f09.svg`
  },
  chrome: {
    key: "chrome",
    val: "Chrome",
    icon: `${CMS_MEDIA_SERVER}cms/Chrome_7bf77fbdd7/Chrome_7bf77fbdd7.svg`
  },
  firefox: {
    key: "firefox",
    val: "Firefox",
    icon: `${CMS_MEDIA_SERVER}cms/Firefox_30f3976fb8/Firefox_30f3976fb8.svg`
  },
  safari: {
    key: "safari",
    val: "Safari",
    icon: `${CMS_MEDIA_SERVER}cms/Safari_254e74ed94/Safari_254e74ed94.svg`
  },
  "mobile safari": {
    key: "safari",
    val: "Safari",
    icon: `${CMS_MEDIA_SERVER}cms/Safari_254e74ed94/Safari_254e74ed94.svg`
  },
  edge: {
    key: "edge",
    val: "Edge",
    icon: `${CMS_MEDIA_SERVER}cms/Edge_23add4a83f/Edge_23add4a83f.svg`
  },
  opera: {
    key: "opera",
    val: "Opera",
    icon: `${CMS_MEDIA_SERVER}cms/Opera_0f3bf4eb19/Opera_0f3bf4eb19.svg`
  }
};
var CheckDetails = ({
  title,
  value,
  iconURL
}) => /* @__PURE__ */ React193.createElement(
  Box,
  {
    css: {
      w: "100%",
      my: "$10",
      p: "$10",
      r: "$1",
      bg: "$surface_default",
      "@lg": { w: "auto" }
    }
  },
  /* @__PURE__ */ React193.createElement(Text, { css: { c: "$on_primary_medium", mb: "$6" } }, title),
  /* @__PURE__ */ React193.createElement(Flex, { align: "center" }, iconURL && /* @__PURE__ */ React193.createElement(
    Box,
    {
      css: { size: "2rem", r: "$round", bg: "$surface_brighter", mr: "$4" }
    },
    /* @__PURE__ */ React193.createElement(
      "img",
      {
        style: { objectFit: "contain", width: "2rem" },
        src: iconURL,
        alt: value
      }
    )
  ), /* @__PURE__ */ React193.createElement(Text, null, value))
);
var BrowserTest = () => {
  var _a7, _b7, _c, _d;
  const { hmsDiagnostics, updateStep } = useDiagnostics();
  const [error, setError] = useState81();
  useEffect81(() => {
    try {
      hmsDiagnostics == null ? void 0 : hmsDiagnostics.checkBrowserSupport();
    } catch (err) {
      updateStep(0 /* BROWSER */, { hasFailed: true });
      setError(err);
    }
  }, [hmsDiagnostics, updateStep]);
  return /* @__PURE__ */ React193.createElement(React193.Fragment, null, /* @__PURE__ */ React193.createElement(
    TestContainer,
    {
      css: { display: "flex", gap: "$8", "@lg": { display: "block" } }
    },
    /* @__PURE__ */ React193.createElement(
      CheckDetails,
      {
        title: "Browser",
        iconURL: parsedUserAgent4.getBrowser().name && ((_b7 = browserTypeIconInfo[(_a7 = parsedUserAgent4.getBrowser().name) == null ? void 0 : _a7.toLowerCase()]) == null ? void 0 : _b7.icon),
        value: `${parsedUserAgent4.getBrowser().name} ${parsedUserAgent4.getBrowser().version}`
      }
    ),
    /* @__PURE__ */ React193.createElement(
      CheckDetails,
      {
        title: "Operating system",
        iconURL: parsedUserAgent4.getOS().name && ((_d = operatingSystemIconInfo[(_c = parsedUserAgent4.getOS().name) == null ? void 0 : _c.toLowerCase()]) == null ? void 0 : _d.icon),
        value: `${parsedUserAgent4.getOS().name} ${parsedUserAgent4.getOS().version}`
      }
    )
  ), /* @__PURE__ */ React193.createElement(TestFooter, { error, ctaText: "Is your device information correct?" }));
};

// src/Diagnostics/ConnectivityTest.tsx
import React194, { useState as useState82 } from "react";
import {
  ConnectivityState
} from "@100mslive/react-sdk";
import {
  CheckCircleIcon as CheckCircleIcon6,
  CrossCircleIcon as CrossCircleIcon4,
  EyeCloseIcon as EyeCloseIcon3,
  EyeOpenIcon as EyeOpenIcon2,
  LinkIcon
} from "@100mslive/react-icons";
var Regions = {
  in: "India",
  eu: "Europe",
  us: "United States"
};
var ConnectivityStateMessage = {
  [ConnectivityState.STARTING]: "Fetching Init",
  [ConnectivityState.INIT_FETCHED]: "Connecting to signal server",
  [ConnectivityState.SIGNAL_CONNECTED]: "Establishing ICE connection",
  [ConnectivityState.ICE_ESTABLISHED]: "Capturing Media",
  [ConnectivityState.MEDIA_CAPTURED]: "Publishing Media",
  [ConnectivityState.MEDIA_PUBLISHED]: "Finishing Up",
  [ConnectivityState.COMPLETED]: "Completed"
};
var ConnectivityTestStepResult = ({
  title,
  status = "Connected",
  success,
  children
}) => {
  const [hideDetails, setHideDetails] = useState82(true);
  return /* @__PURE__ */ React194.createElement(Box, { css: { my: "$10", p: "$10", r: "$1", bg: "$surface_bright" } }, /* @__PURE__ */ React194.createElement(Text, { css: { c: "$on_primary_medium", mb: "$6" } }, title), success ? /* @__PURE__ */ React194.createElement(Flex, null, /* @__PURE__ */ React194.createElement(Text, { css: { c: "$alert_success" } }, /* @__PURE__ */ React194.createElement(CheckCircleIcon6, { width: "1.5rem", height: "1.5rem" })), /* @__PURE__ */ React194.createElement(Text, { variant: "lg", css: { ml: "$4" } }, status)) : /* @__PURE__ */ React194.createElement(Flex, null, /* @__PURE__ */ React194.createElement(Text, { css: { c: "$alert_error_bright" } }, /* @__PURE__ */ React194.createElement(CrossCircleIcon4, { width: "1.5rem", height: "1.5rem" })), /* @__PURE__ */ React194.createElement(Text, { variant: "lg", css: { ml: "$4" } }, "Failed")), /* @__PURE__ */ React194.createElement(
    Flex,
    {
      onClick: () => setHideDetails(!hideDetails),
      align: "center",
      gap: "2",
      css: {
        color: "$primary_bright"
      }
    },
    hideDetails ? /* @__PURE__ */ React194.createElement(EyeOpenIcon2, null) : /* @__PURE__ */ React194.createElement(EyeCloseIcon3, null),
    /* @__PURE__ */ React194.createElement(
      Text,
      {
        variant: "caption",
        css: {
          color: "$primary_bright"
        }
      },
      hideDetails ? "View" : "Hide",
      " detailed information"
    )
  ), !hideDetails ? /* @__PURE__ */ React194.createElement(Box, null, children) : null);
};
var DetailedInfo = ({
  title,
  value,
  Icon: Icon4
}) => {
  return /* @__PURE__ */ React194.createElement(Box, { css: { flex: "50%", mt: "$6" } }, /* @__PURE__ */ React194.createElement(
    Text,
    {
      variant: "caption",
      css: { fontWeight: "$semiBold", c: "$on_primary_medium" }
    },
    title
  ), /* @__PURE__ */ React194.createElement(Flex, { css: { mt: "$xs", alignItems: "flex-start" } }, Icon4 && /* @__PURE__ */ React194.createElement(Text, { css: { mr: "$4" } }, /* @__PURE__ */ React194.createElement(Icon4, { width: "1rem", height: "1rem" })), /* @__PURE__ */ React194.createElement(Text, { variant: "caption" }, value)));
};
var MediaServerResult = ({
  result
}) => {
  var _a7, _b7, _c, _d;
  return /* @__PURE__ */ React194.createElement(
    ConnectivityTestStepResult,
    {
      title: "Media server connection test",
      success: (result == null ? void 0 : result.isPublishICEConnected) && result.isSubscribeICEConnected
    },
    /* @__PURE__ */ React194.createElement(Flex, { css: { flexWrap: "wrap" } }, /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Media Captured",
        value: ((_a7 = result == null ? void 0 : result.stats) == null ? void 0 : _a7.audio.bytesSent) ? "Yes" : "No",
        Icon: ((_b7 = result == null ? void 0 : result.stats) == null ? void 0 : _b7.audio.bytesSent) ? CheckCircleIcon6 : CrossCircleIcon4
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Media Published",
        value: ((_c = result == null ? void 0 : result.stats) == null ? void 0 : _c.audio.bitrateSent) ? "Yes" : "No",
        Icon: ((_d = result == null ? void 0 : result.stats) == null ? void 0 : _d.audio.bytesSent) ? CheckCircleIcon6 : CrossCircleIcon4
      }
    ), (result == null ? void 0 : result.connectionQualityScore) ? /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Connection Quality Score (CQS)",
        value: `${result.connectionQualityScore.toFixed(2)} (out of 5)`
      }
    ) : null)
  );
};
var SignallingResult = ({
  result
}) => {
  return /* @__PURE__ */ React194.createElement(
    ConnectivityTestStepResult,
    {
      title: "Signalling server connection test",
      success: result == null ? void 0 : result.isConnected
    },
    /* @__PURE__ */ React194.createElement(Flex, { css: { flexWrap: "wrap" } }, /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Signalling Gateway",
        value: (result == null ? void 0 : result.isConnected) ? "Reachable" : "Unreachable",
        Icon: (result == null ? void 0 : result.isConnected) ? CheckCircleIcon6 : CrossCircleIcon4
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Websocket URL",
        value: (result == null ? void 0 : result.websocketUrl) || "N/A",
        Icon: LinkIcon
      }
    ))
  );
};
var AudioStats = ({ stats }) => {
  return /* @__PURE__ */ React194.createElement(
    ConnectivityTestStepResult,
    {
      title: "Audio",
      status: "Received",
      success: !!(stats == null ? void 0 : stats.bytesSent)
    },
    stats && /* @__PURE__ */ React194.createElement(Flex, { css: { flexWrap: "wrap" } }, /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Bytes Sent",
        value: formatBytes(stats.bytesSent)
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Bytes Received",
        value: formatBytes(stats.bytesReceived)
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Packets Received",
        value: stats.packetsReceived.toString()
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Packets Lost",
        value: stats.packetsLost.toString()
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Bitrate Sent",
        value: formatBytes(stats.bitrateSent, "b/s")
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Bitrate Received",
        value: formatBytes(stats.bitrateReceived, "b/s")
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Round Trip Time",
        value: `${stats.roundTripTime} ms`
      }
    ))
  );
};
var VideoStats = ({ stats }) => {
  return /* @__PURE__ */ React194.createElement(
    ConnectivityTestStepResult,
    {
      title: "Video",
      status: "Received",
      success: !!(stats == null ? void 0 : stats.bytesSent)
    },
    stats && /* @__PURE__ */ React194.createElement(Flex, { css: { flexWrap: "wrap" } }, /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Bytes Sent",
        value: formatBytes(stats.bytesSent)
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Bytes Received",
        value: formatBytes(stats.bytesReceived)
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Packets Received",
        value: stats.packetsReceived.toString()
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Packets Lost",
        value: stats.packetsLost.toString()
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Bitrate Sent",
        value: formatBytes(stats.bitrateSent, "b/s")
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Bitrate Received",
        value: formatBytes(stats.bitrateReceived, "b/s")
      }
    ), /* @__PURE__ */ React194.createElement(
      DetailedInfo,
      {
        title: "Round Trip Time",
        value: `${stats.roundTripTime} ms`
      }
    ))
  );
};
var Footer3 = ({
  error,
  result,
  restart
}) => {
  return /* @__PURE__ */ React194.createElement(TestFooter, { error }, /* @__PURE__ */ React194.createElement(Flex, { css: { gap: "$8", "@lg": { flexDirection: "column" } } }, /* @__PURE__ */ React194.createElement(Button, { variant: "standard", onClick: restart }, "Restart Test"), /* @__PURE__ */ React194.createElement(
    Button,
    {
      disabled: !result,
      onClick: () => result && downloadJson(result, "hms_diagnostics_results")
    },
    "Download Test Report"
  )));
};
var ConnectivityTestReport = ({
  error,
  result,
  progress,
  startTest
}) => {
  var _a7, _b7, _c, _d;
  if (error) {
    return /* @__PURE__ */ React194.createElement(React194.Fragment, null, /* @__PURE__ */ React194.createElement(TestContainer, { css: { textAlign: "center" } }, /* @__PURE__ */ React194.createElement(Text, { css: { c: "$alert_error_default", mb: "$4" } }, /* @__PURE__ */ React194.createElement(CrossCircleIcon4, null)), /* @__PURE__ */ React194.createElement(Text, { variant: "h6" }, "Connectivity Test Failed"), /* @__PURE__ */ React194.createElement(Text, { variant: "body2", css: { c: "$on_primary_medium" } }, error.message)), /* @__PURE__ */ React194.createElement(Footer3, { restart: startTest, error }));
  }
  if (result) {
    console.log(result);
    return /* @__PURE__ */ React194.createElement(React194.Fragment, null, /* @__PURE__ */ React194.createElement(TestContainer, null, /* @__PURE__ */ React194.createElement(Text, { css: { c: "$on_primary_medium" } }, "Connectivity test has been completed."), /* @__PURE__ */ React194.createElement(SignallingResult, { result: result == null ? void 0 : result.signallingReport }), /* @__PURE__ */ React194.createElement(MediaServerResult, { result: result == null ? void 0 : result.mediaServerReport }), /* @__PURE__ */ React194.createElement(AudioStats, { stats: (_b7 = (_a7 = result == null ? void 0 : result.mediaServerReport) == null ? void 0 : _a7.stats) == null ? void 0 : _b7.audio }), /* @__PURE__ */ React194.createElement(VideoStats, { stats: (_d = (_c = result == null ? void 0 : result.mediaServerReport) == null ? void 0 : _c.stats) == null ? void 0 : _d.video })), /* @__PURE__ */ React194.createElement(Footer3, { result, restart: startTest, error }));
  }
  if (progress !== void 0) {
    return /* @__PURE__ */ React194.createElement(TestContainer, { css: { textAlign: "center" } }, /* @__PURE__ */ React194.createElement(
      Text,
      {
        css: {
          c: "$primary_bright",
          display: "flex",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ React194.createElement(Loading, { size: "3.5rem", color: "currentColor" })
    ), /* @__PURE__ */ React194.createElement(Text, { variant: "h6", css: { mt: "$8" } }, "Checking your connection..."), /* @__PURE__ */ React194.createElement(
      Text,
      {
        variant: "body2",
        css: { c: "$on_primary_medium", mt: "$4" }
      },
      `${ConnectivityStateMessage[progress]}...`
    ));
  }
  return null;
};
var RegionSelector = ({
  region,
  setRegion,
  startTest
}) => {
  return /* @__PURE__ */ React194.createElement(TestContainer, { css: { borderBottom: "1px solid $border_default" } }, /* @__PURE__ */ React194.createElement(Text, { variant: "body1" }, "Select a region"), /* @__PURE__ */ React194.createElement(Text, { variant: "body2", css: { c: "$on_secondary_low" } }, "Select the closest region for best results"), /* @__PURE__ */ React194.createElement(
    Flex,
    {
      justify: "between",
      css: {
        mt: "$md",
        "@lg": {
          flexDirection: "column",
          gap: "$8"
        }
      }
    },
    /* @__PURE__ */ React194.createElement(
      Flex,
      {
        css: {
          gap: "$4",
          "@lg": {
            flexDirection: "column"
          }
        }
      },
      Object.entries(Regions).map(([key, value]) => /* @__PURE__ */ React194.createElement(
        Button,
        {
          key,
          outlined: region !== key,
          variant: region === key ? "primary" : "standard",
          css: region === key ? { bg: "$primary_dim" } : {},
          onClick: () => setRegion(key)
        },
        value
      ))
    ),
    /* @__PURE__ */ React194.createElement(Flex, { css: { "@lg": { flexDirection: "column" } } }, /* @__PURE__ */ React194.createElement(Button, { variant: "primary", onClick: startTest, disabled: !startTest }, startTest ? "Start Test" : "Testing..."))
  ));
};
var ConnectivityTest = () => {
  const { hmsDiagnostics, updateStep } = useDiagnostics();
  const [region, setRegion] = useState82(
    Object.keys(Regions)[0]
  );
  const [error, setError] = useState82();
  const [progress, setProgress] = useState82();
  const [result, setResult] = useState82();
  const startTest = () => {
    updateStep(3 /* CONNECTIVITY */, {
      hasFailed: false,
      isCompleted: false
    });
    setError(void 0);
    setResult(void 0);
    hmsDiagnostics == null ? void 0 : hmsDiagnostics.startConnectivityCheck(
      (state) => {
        setProgress(state);
      },
      (result2) => {
        updateStep(3 /* CONNECTIVITY */, { isCompleted: true });
        setResult(result2);
      },
      region
    ).catch((error2) => {
      updateStep(3 /* CONNECTIVITY */, { hasFailed: true });
      setError(error2);
    });
  };
  return /* @__PURE__ */ React194.createElement(React194.Fragment, null, /* @__PURE__ */ React194.createElement(
    RegionSelector,
    {
      region,
      setRegion,
      startTest: progress === void 0 || progress === ConnectivityState.COMPLETED ? startTest : void 0
    }
  ), /* @__PURE__ */ React194.createElement(
    ConnectivityTestReport,
    {
      error,
      result,
      progress,
      startTest
    }
  ));
};
var downloadJson = (obj, fileName) => {
  const a = document.createElement("a");
  const file = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json"
  });
  a.href = URL.createObjectURL(file);
  a.download = `${fileName}.json`;
  a.click();
};

// src/Diagnostics/VideoTest.tsx
import React195, { useEffect as useEffect82, useState as useState83 } from "react";
import {
  selectDevices as selectDevices2,
  selectLocalMediaSettings as selectLocalMediaSettings2,
  selectLocalVideoTrackID as selectLocalVideoTrackID4,
  useHMSStore as useHMSStore101
} from "@100mslive/react-sdk";
import { VideoOnIcon as VideoOnIcon5 } from "@100mslive/react-icons";
var VideoTest = () => {
  const { hmsDiagnostics, updateStep } = useDiagnostics();
  const allDevices = useHMSStore101(selectDevices2);
  const { videoInput } = allDevices;
  const trackID = useHMSStore101(selectLocalVideoTrackID4);
  const sdkSelectedDevices = useHMSStore101(selectLocalMediaSettings2);
  const [error, setError] = useState83();
  useEffect82(() => {
    hmsDiagnostics == null ? void 0 : hmsDiagnostics.startCameraCheck().catch((err) => {
      updateStep(1 /* VIDEO */, { hasFailed: true });
      setError(err);
    });
  }, [hmsDiagnostics, updateStep]);
  return /* @__PURE__ */ React195.createElement(React195.Fragment, null, /* @__PURE__ */ React195.createElement(
    TestContainer,
    {
      css: {
        display: "flex",
        "@lg": { flexDirection: "column", alignItems: "center" }
      }
    },
    trackID && /* @__PURE__ */ React195.createElement(
      StyledVideoTile.Container,
      {
        css: {
          width: "90%",
          aspectRatio: "16/9",
          mr: "$10",
          "@lg": { mr: 0, mb: "$10", aspectRatio: "1/1" }
        }
      },
      /* @__PURE__ */ React195.createElement(Video, { mirror: true, trackId: trackID })
    ),
    /* @__PURE__ */ React195.createElement(Flex, { direction: "column", css: { w: "100%" } }, /* @__PURE__ */ React195.createElement(Text, { variant: "body2", css: { c: "$on_primary_medium", mb: "$10" } }, "Move in front of your camera to make sure it's working. If you don't see your video, try changing the selected camera. If the camera isn't part of your computer, check your settings to make sure your system recognizes it."), /* @__PURE__ */ React195.createElement(
      DeviceSelector2,
      {
        title: "Video",
        devices: videoInput || [],
        icon: /* @__PURE__ */ React195.createElement(VideoOnIcon5, null),
        selection: sdkSelectedDevices.videoInputDeviceId,
        onChange: (deviceId) => __async(void 0, null, function* () {
          hmsDiagnostics == null ? void 0 : hmsDiagnostics.stopCameraCheck();
          hmsDiagnostics == null ? void 0 : hmsDiagnostics.startCameraCheck(deviceId);
        })
      }
    ))
  ), /* @__PURE__ */ React195.createElement(TestFooter, { error, ctaText: "Does your video look good?" }), /* @__PURE__ */ React195.createElement(PermissionErrorModal, { error }));
};

// src/Diagnostics/Diagnostics.tsx
var DiagnosticsStepIcon = {
  [1 /* VIDEO */]: /* @__PURE__ */ React196.createElement(VideoOnIcon6, { width: "2rem", height: "2rem" }),
  [2 /* AUDIO */]: /* @__PURE__ */ React196.createElement(MicOnIcon8, { width: "2rem", height: "2rem" }),
  [0 /* BROWSER */]: /* @__PURE__ */ React196.createElement(GlobeIcon, { width: "2rem", height: "2rem" }),
  [3 /* CONNECTIVITY */]: /* @__PURE__ */ React196.createElement(ConnectivityIcon2, { width: "2rem", height: "2rem" })
};
var Container5 = ({ children }) => /* @__PURE__ */ React196.createElement(
  Box,
  {
    css: {
      px: "120px",
      pt: "120px",
      pb: "24px",
      bg: "$background_dim",
      lineHeight: "1.5",
      "-webkit-text-size-adjust": "100%",
      position: "relative",
      h: "100%",
      "@lg": {
        p: "$12"
      },
      overflowY: "auto",
      boxSizing: "border-box",
      "& *": {
        boxSizing: "border-box"
      },
      "::-webkit-scrollbar-track": {
        WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
        backgroundColor: "transparent"
      },
      "::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        backgroundColor: "transparent"
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#657080",
        borderRadius: "5px"
      }
    }
  },
  children
);
var DiagnosticsStepTest = () => {
  const { activeStepIndex } = useDiagnostics();
  let TestComponent = () => /* @__PURE__ */ React196.createElement(React196.Fragment, null);
  if (activeStepIndex === 2 /* AUDIO */) {
    TestComponent = AudioTest;
  } else if (activeStepIndex === 1 /* VIDEO */) {
    TestComponent = VideoTest;
  } else if (activeStepIndex === 0 /* BROWSER */) {
    TestComponent = BrowserTest;
  } else if (activeStepIndex === 3 /* CONNECTIVITY */) {
    TestComponent = ConnectivityTest;
  }
  return /* @__PURE__ */ React196.createElement(TestComponent, { key: activeStepIndex });
};
var DiagnosticsStepHeader = () => {
  const { activeStepIndex, activeStep } = useDiagnostics();
  return /* @__PURE__ */ React196.createElement(
    Flex,
    {
      css: {
        py: "$8",
        px: "$10",
        alignItems: "center",
        borderBottom: "1px solid $border_default"
      }
    },
    /* @__PURE__ */ React196.createElement(Text, { css: { c: "$primary_bright", mt: "$xs" } }, DiagnosticsStepIcon[activeStepIndex]),
    /* @__PURE__ */ React196.createElement(Text, { css: { fontSize: "$h6", ml: "$9" } }, activeStep.name)
  );
};
var DiagnosticsStepContainer = () => {
  return /* @__PURE__ */ React196.createElement(
    Box,
    {
      css: {
        border: "1px solid $border_default",
        r: "$1",
        w: "75%",
        maxWidth: "65rem",
        "@lg": { w: "100%" }
      }
    },
    /* @__PURE__ */ React196.createElement(DiagnosticsStepHeader, null),
    /* @__PURE__ */ React196.createElement(DiagnosticsStepTest, null)
  );
};
var DiagnosticsStepsList = () => {
  const { activeStepIndex, activeStep, steps } = useDiagnostics();
  return /* @__PURE__ */ React196.createElement(Box, { css: { w: "25%", "@lg": { display: "none" } } }, Object.keys(DiagnosticsStep).filter((key) => !isNaN(Number(key))).map((key) => {
    const keyIndex = Number(key);
    const step = steps[keyIndex];
    const isStepCompleted = activeStepIndex > keyIndex || activeStep.isCompleted;
    let color = "$on_primary_low";
    let icon = /* @__PURE__ */ React196.createElement(Text, { css: { c: color, fontSize: "1.75rem" } }, "\u2022");
    if (activeStepIndex === keyIndex) {
      color = "$on_primary_high";
      icon = /* @__PURE__ */ React196.createElement(Text, { css: { c: color, fontSize: "1.75rem" } }, "\u2022");
    }
    if (isStepCompleted) {
      color = "$primary_bright";
      icon = /* @__PURE__ */ React196.createElement(CheckCircleIcon7, { width: "1rem", height: "1rem" });
    }
    if (step.hasFailed) {
      color = "$alert_error_default";
      icon = /* @__PURE__ */ React196.createElement(CrossCircleIcon5, { width: "1rem", height: "1rem" });
    }
    return /* @__PURE__ */ React196.createElement(
      Flex,
      {
        key,
        css: { mb: "$10", c: color, gap: "$4", alignItems: "center" }
      },
      icon,
      /* @__PURE__ */ React196.createElement(Text, { css: { c: color } }, step.name)
    );
  }));
};
var DiagnosticsProvider = () => {
  const actions = useHMSActions63();
  const [activeStep, setActiveStep] = useState84(0);
  const [steps, setSteps] = useState84(initialSteps);
  const diagnosticsRef = useRef36(actions.initDiagnostics());
  const updateStep = useCallback42(
    (step, value) => {
      setSteps((prevSteps) => __spreadProps(__spreadValues({}, prevSteps), {
        [step]: __spreadValues(__spreadValues({}, prevSteps[step]), value)
      }));
    },
    []
  );
  return /* @__PURE__ */ React196.createElement(
    DiagnosticsContext.Provider,
    {
      value: {
        hmsDiagnostics: diagnosticsRef.current,
        activeStepIndex: activeStep,
        setActiveStep,
        steps,
        updateStep
      }
    },
    /* @__PURE__ */ React196.createElement(Container5, null, /* @__PURE__ */ React196.createElement(Text, { variant: "h4" }, "Pre-call Test"), /* @__PURE__ */ React196.createElement(Text, { variant: "md", css: { c: "$on_primary_medium" } }, "Make sure your devices and network are good to go, let's get started."), /* @__PURE__ */ React196.createElement(Flex, { css: { direction: "column", mt: "$12", justifyItems: "center" } }, /* @__PURE__ */ React196.createElement(DiagnosticsStepsList, null), /* @__PURE__ */ React196.createElement(DiagnosticsStepContainer, null)))
  );
};
var Diagnostics = () => {
  return /* @__PURE__ */ React196.createElement(HMSRoomProvider2, null, /* @__PURE__ */ React196.createElement(HMSThemeProvider, { themeType: "default" }, /* @__PURE__ */ React196.createElement(DiagnosticsProvider, null)));
};

export {
  __spreadValues,
  __spreadProps,
  __objRest,
  __async,
  EMOJI_REACTION_TYPE,
  APP_DATA,
  SIDE_PANE_OPTIONS,
  POLL_STATE,
  POLL_VIEWS,
  theme,
  createThemeBase,
  styled,
  globalCss,
  keyframes,
  css,
  getCssText,
  config,
  globalStyles,
  createTheme,
  ThemeTypes,
  ThemeContext,
  HMSThemeProvider,
  useTheme,
  Flex,
  Box,
  Loading,
  flexCenter,
  textEllipsis,
  Button,
  Text,
  IconButton,
  StyledAvatar,
  Avatar,
  VerticalDivider,
  HorizontalDivider,
  Switch,
  slideLeftAndFade,
  Tooltip,
  Select,
  Slider,
  DialogContainerContext,
  DialogContainerProvider,
  Dialog,
  Input,
  PasswordInput,
  StyledVideoTile,
  getLeft,
  StyledVideoList,
  StyledPagination,
  Dropdown,
  StyledVideo,
  Video,
  StyledMenuTile,
  useBorderAudioLevel,
  AudioLevel,
  Popover2 as Popover,
  formatBytes,
  VideoTileStats,
  Checkbox,
  Label3 as Label,
  RadioGroup,
  Toast,
  Accordion,
  Fieldset,
  Footer,
  ReactSelect_exports,
  Tabs,
  QRCode,
  Link,
  Collapsible,
  useRoomLayoutConferencingScreen,
  useRoomLayoutHeader,
  useIsSidepaneTypeOpen,
  useSidepaneToggle,
  ToastManager,
  IconButton_default,
  Sheet,
  useIsLandscape,
  useKeyboardHandler,
  LeaveRoom,
  TextArea,
  DialogContent,
  DialogRow,
  ChatToggle,
  Logo,
  RoomDetailsRow,
  WaitingView,
  HMSPrebuilt,
  Progress,
  Diagnostics
};
//# sourceMappingURL=chunk-MG6VEVK5.js.map
