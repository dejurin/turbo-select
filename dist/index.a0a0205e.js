// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8mHMB":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f0f8820ba0a0205e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8XOLj":[function(require,module,exports) {
/**
 * TurboSelect Component
 *
 * @file TurboSelect.tsx
 * @module TurboSelect
 * @author https://github.com/dejurin
 * @see {@link https://github.com/dejurin/turbo-select}
 *
 *
 * @version 0.5.0
 *
 * @license
 * MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stylesCss = require("./styles.css");
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _preactTransitioning = require("preact-transitioning");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _preactCustomElement = require("preact-custom-element");
var _preactCustomElementDefault = parcelHelpers.interopDefault(_preactCustomElement);
var _click = require("./hooks/click");
/**
 * Interpolates the template string with values from the item object.
 *
 * @param {string} template - The template string with placeholders like {label} and {value}.
 * @param {TurboSelectData} item - The item object containing label and value.
 * @returns {string} - The interpolated string with the values from item.
 */ const interpolateTemplate = (template, item)=>{
    if (!item.label && !item.value) return "";
    return template.replace("{label}", item.label).replace("{value}", item.value);
};
/**
 * A lightweight, 12kb (gzip) select component with no dependencies, support for icons, seamless search functionality, and full a11y (accessibility) support, designed for an intuitive user experience.
 *
 * @example
 * <TurboSelect
 *   data='[
 *     {"label": "Apple", "value": "apple"},
 *     {"label": "Orange", "value": "orange"},
 *     {"label": "Banana", "value": "banana"}
 *   ]'
 *   selected="orange"
 *   label="Select a fruit"
 *   searchLabel="Search for a fruit..."
 *   noResults="No fruits found."
 *   loadingLabel="Loading fruits...">
 * </TurboSelect>
 *
 * @param {string} data - A JSON string containing the options
 * @param {string} selected - The value of the initially selected option
 * @param {string} [template="{label}"] - The template string used to display the selected option and template for the dropdown list item
 * @param {string} [selectLabel=Select an option] - The label for the select dropdown
 * @param {string} [searchLabel=Search...] - The placeholder text for the search input
 * @param {string} [loadingLabel=Loading...] - The message displayed while options are loading
 * @param {string} [noResults=No results found.] - The message displayed when no search results are found
 */ const TurboSelect = ({ data, selected, selectLabel = "Select an option", loadingLabel = "Loading...", searchLabel = "Search...", noResults = "No results found.", template = "{label}" })=>{
    const [dataList, setDataList] = (0, _hooks.useState)([]);
    const [selectedValue, setSelectedValue] = (0, _hooks.useState)(selected);
    const [isOpen, setIsOpen] = (0, _hooks.useState)(false);
    const [searchTerm, setSearchTerm] = (0, _hooks.useState)("");
    const [highlightedIndex, setHighlightedIndex] = (0, _hooks.useState)(-1);
    const [mounted, setMounted] = (0, _hooks.useState)(false);
    const searchInputRef = (0, _hooks.useRef)(null);
    const ref = (0, _hooks.useRef)(null);
    const handleKeyDown = (e)=>{
        switch(e.key){
            case "ArrowDown":
                e.preventDefault();
                setHighlightedIndex((prevIndex)=>prevIndex === filteredDataList.length - 1 ? 0 : prevIndex + 1);
                break;
            case "ArrowUp":
                e.preventDefault();
                setHighlightedIndex((prevIndex)=>prevIndex === 0 ? filteredDataList.length - 1 : prevIndex - 1);
                break;
            case "Enter":
                e.preventDefault();
                if (highlightedIndex >= 0) handleSelect(filteredDataList[highlightedIndex].value);
                break;
            case "Escape":
                handleClose();
                break;
        }
    };
    // Parse the data prop on mount
    (0, _hooks.useEffect)(()=>{
        if (data) try {
            const parsedData = JSON.parse(data);
            setDataList(parsedData);
        } catch (e) {
            console.error("Error parsing data:", e);
        }
    }, [
        data
    ]);
    // Focus on search input when dropdown opens
    (0, _hooks.useEffect)(()=>{
        if (isOpen && searchInputRef.current) searchInputRef.current.focus();
        return ()=>{
            if (searchInputRef.current) searchInputRef.current.blur();
        };
    }, [
        isOpen
    ]);
    (0, _hooks.useEffect)(()=>{
        setTimeout(()=>{
            setMounted(true);
        }, 1);
    });
    (0, _hooks.useEffect)(()=>{
        if (selected) setSelectedValue(selected);
    }, [
        selected
    ]);
    // Filter data based on search term
    const filteredDataList = (0, _hooks.useMemo)(()=>dataList.filter((item)=>item.label.toLowerCase().includes(searchTerm.toLowerCase())), [
        dataList,
        searchTerm
    ]);
    const handleClose = ()=>{
        setIsOpen(false);
        setSearchTerm("");
        setHighlightedIndex(-1);
    };
    const handleSelect = (value)=>{
        const selectedItem = dataList.find((item)=>item.value === value);
        if (selectedItem) {
            setSelectedValue(value);
            handleClose();
            const event = new CustomEvent("select", {
                detail: {
                    ...selectedItem
                },
                bubbles: true,
                composed: true
            });
            ref.current?.dispatchEvent(event);
            ref.current?.setAttribute("selected", value);
        }
    };
    (0, _click.useClickOutside)(ref, handleClose);
    return /*#__PURE__*/ (0, _preact.h)((0, _preact.Fragment), {
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 190,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("div", {
        class: "turbo-select",
        ref: ref,
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 191,
            columnNumber: 7
        },
        __self: undefined
    }, !isOpen ? /*#__PURE__*/ (0, _preact.h)("button", {
        type: "button",
        onClick: ()=>setIsOpen(!isOpen),
        class: (0, _clsxDefault.default)("button", {
            "bg-gray-200": !isOpen
        }),
        "aria-haspopup": "listbox",
        "aria-expanded": isOpen,
        "aria-labelledby": "listbox-label",
        "aria-activedescendant": highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined,
        onKeyDown: handleKeyDown,
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 193,
            columnNumber: 11
        },
        __self: undefined
    }, mounted ? /*#__PURE__*/ (0, _preact.h)("div", {
        class: "flex items-center",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 204,
            columnNumber: 15
        },
        __self: undefined
    }, (()=>{
        const selectedItem = dataList.find((item)=>item.value === selectedValue);
        return selectedItem?.img ? /*#__PURE__*/ (0, _preact.h)("img", {
            class: "img",
            src: selectedItem.img,
            alt: selectedItem.label,
            __source: {
                fileName: "src/turbo-select.tsx",
                lineNumber: 208,
                columnNumber: 21
            },
            __self: undefined
        }) : /*#__PURE__*/ (0, _preact.h)((0, _preact.Fragment), null);
    })(), /*#__PURE__*/ (0, _preact.h)("span", {
        class: "title",
        dangerouslySetInnerHTML: {
            __html: interpolateTemplate(template, dataList.find((item)=>item.value === selectedValue) || {
                value: "",
                label: ""
            }) || selectLabel
        },
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 213,
            columnNumber: 17
        },
        __self: undefined
    })) : /*#__PURE__*/ (0, _preact.h)("div", {
        role: "status",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 228,
            columnNumber: 15
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("svg", {
        "aria-hidden": "true",
        key: "spinner-icon",
        class: "spinner",
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 229,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("path", {
        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        fill: "currentColor",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 237,
            columnNumber: 19
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _preact.h)("path", {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 241,
            columnNumber: 19
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _preact.h)("span", {
        class: "sr-only",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 246,
            columnNumber: 17
        },
        __self: undefined
    }, loadingLabel)), /*#__PURE__*/ (0, _preact.h)("span", {
        class: "caret",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 249,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("svg", {
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 250,
            columnNumber: 15
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("path", {
        "fill-rule": "evenodd",
        d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
        "clip-rule": "evenodd",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 251,
            columnNumber: 17
        },
        __self: undefined
    })))) : /*#__PURE__*/ (0, _preact.h)("input", {
        ref: searchInputRef,
        "aria-label": searchLabel,
        value: searchTerm,
        onInput: (e)=>setSearchTerm(e.target.value),
        placeholder: searchLabel,
        onKeyDown: handleKeyDown,
        class: "input",
        type: "search",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 260,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _preact.h)((0, _preactTransitioning.StyleTransition), {
        in: isOpen,
        duration: 300,
        styles: {
            enter: {
                opacity: 0
            },
            enterActive: {
                opacity: 1
            },
            exit: {
                opacity: 1
            },
            exitActive: {
                opacity: 0
            }
        },
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 271,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("ul", {
        class: (0, _clsxDefault.default)("listbox"),
        style: {
            transition: "opacity 300ms"
        },
        tabIndex: -1,
        role: "listbox",
        "aria-labelledby": "listbox-label",
        onKeyDown: handleKeyDown,
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 281,
            columnNumber: 11
        },
        __self: undefined
    }, filteredDataList.length > 0 ? filteredDataList.map((item, index)=>/*#__PURE__*/ (0, _preact.h)("li", {
            key: index,
            onClick: ()=>handleSelect(item.value),
            role: "option",
            tabIndex: 0,
            id: `option-${index}`,
            "aria-selected": highlightedIndex === index,
            class: (0, _clsxDefault.default)("option", {
                "option-highlighted": highlightedIndex === index
            }),
            __source: {
                fileName: "src/turbo-select.tsx",
                lineNumber: 291,
                columnNumber: 17
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _preact.h)("div", {
            class: "flex items-center",
            __source: {
                fileName: "src/turbo-select.tsx",
                lineNumber: 302,
                columnNumber: 19
            },
            __self: undefined
        }, item.img && /*#__PURE__*/ (0, _preact.h)("img", {
            class: "img",
            src: item.img,
            alt: item.label,
            __source: {
                fileName: "src/turbo-select.tsx",
                lineNumber: 303,
                columnNumber: 34
            },
            __self: undefined
        }), /*#__PURE__*/ (0, _preact.h)("span", {
            class: "title",
            dangerouslySetInnerHTML: {
                __html: interpolateTemplate(template, {
                    label: item.label,
                    value: item.value
                })
            },
            __source: {
                fileName: "src/turbo-select.tsx",
                lineNumber: 304,
                columnNumber: 21
            },
            __self: undefined
        })), selectedValue === item.value && /*#__PURE__*/ (0, _preact.h)("span", {
            class: "checked",
            __source: {
                fileName: "src/turbo-select.tsx",
                lineNumber: 315,
                columnNumber: 21
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _preact.h)("svg", {
            class: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
            __source: {
                fileName: "src/turbo-select.tsx",
                lineNumber: 316,
                columnNumber: 23
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _preact.h)("path", {
            "fill-rule": "evenodd",
            d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
            "clip-rule": "evenodd",
            __source: {
                fileName: "src/turbo-select.tsx",
                lineNumber: 322,
                columnNumber: 25
            },
            __self: undefined
        }))))) : /*#__PURE__*/ (0, _preact.h)("li", {
        class: "not-found",
        "aria-disabled": "true",
        __source: {
            fileName: "src/turbo-select.tsx",
            lineNumber: 333,
            columnNumber: 15
        },
        __self: undefined
    }, noResults)))));
};
exports.default = TurboSelect;
(0, _preactCustomElementDefault.default)(TurboSelect, "turbo-select", [
    "data",
    "selected",
    "selectLabel",
    "searchLabel",
    "loadingLabel",
    "noResults",
    "template"
], {
    shadow: false
});

},{"./styles.css":"lW6qc","preact":"gD7X7","preact/hooks":"eHQFl","preact-transitioning":"dgAiB","clsx":"epS4M","preact-custom-element":"g4ZpB","./hooks/click":"JUmBF","@parcel/transformer-js/src/esmodule-helpers.js":"7dysn"}],"lW6qc":[function() {},{}],"gD7X7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>k);
parcelHelpers.export(exports, "Fragment", ()=>b);
parcelHelpers.export(exports, "cloneElement", ()=>E);
parcelHelpers.export(exports, "createContext", ()=>G);
parcelHelpers.export(exports, "createElement", ()=>_);
parcelHelpers.export(exports, "createRef", ()=>m);
parcelHelpers.export(exports, "h", ()=>_);
parcelHelpers.export(exports, "hydrate", ()=>D);
parcelHelpers.export(exports, "isValidElement", ()=>t);
parcelHelpers.export(exports, "options", ()=>l);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "toChildArray", ()=>H);
var n, l, u, t, i, o, r, f, e, c, s, a, h = {}, v = [], p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, y = Array.isArray;
function d(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function w(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function _(l, u, t) {
    var i, o, r, f = {};
    for(r in u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(r in l.defaultProps)void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return g(l, f, i, o, null);
}
function g(n, t, i, o, r) {
    var f = {
        type: n,
        props: t,
        key: i,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == r ? ++u : r,
        __i: -1,
        __u: 0
    };
    return null == r && null != l.vnode && l.vnode(f), f;
}
function m() {
    return {
        current: null
    };
}
function b(n) {
    return n.children;
}
function k(n, l) {
    this.props = n, this.context = l;
}
function x(n, l) {
    if (null == l) return n.__ ? x(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? x(n) : null;
}
function C(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return C(n);
    }
}
function M(n) {
    (!n.__d && (n.__d = !0) && i.push(n) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
}
function P() {
    var n, u, t, o, r, e, c, s;
    for(i.sort(f); n = i.shift();)n.__d && (u = i.length, o = void 0, e = (r = (t = n).__v).__e, c = [], s = [], t.__P && ((o = d({}, r)).__v = r.__v + 1, l.vnode && l.vnode(o), O(t.__P, o, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [
        e
    ] : null, c, null == e ? x(r) : e, !!(32 & r.__u), s), o.__v = r.__v, o.__.__k[o.__i] = o, j(c, o, s), o.__e != e && C(o)), i.length > u && i.sort(f));
    P.__r = 0;
}
function S(n, l, u, t, i, o, r, f, e, c, s) {
    var a, p, y, d, w, _ = t && t.__k || v, g = l.length;
    for(u.__d = e, $(u, l, _), e = u.__d, a = 0; a < g; a++)null != (y = u.__k[a]) && (p = -1 === y.__i ? h : _[y.__i] || h, y.__i = a, O(n, y, p, i, o, r, f, e, c, s), d = y.__e, y.ref && p.ref != y.ref && (p.ref && N(p.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), 65536 & y.__u || p.__k === y.__k ? e = I(y, e, n) : "function" == typeof y.type && void 0 !== y.__d ? e = y.__d : d && (e = d.nextSibling), y.__d = void 0, y.__u &= -196609);
    u.__d = e, u.__e = w;
}
function $(n, l, u) {
    var t, i, o, r, f, e = l.length, c = u.length, s = c, a = 0;
    for(n.__k = [], t = 0; t < e; t++)null != (i = l[t]) && "boolean" != typeof i && "function" != typeof i ? (r = t + a, (i = n.__k[t] = "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? g(null, i, null, null, null) : y(i) ? g(b, {
        children: i
    }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? g(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = n, i.__b = n.__b + 1, o = null, -1 !== (f = i.__i = L(i, u, r, s)) && (s--, (o = u[f]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == f && a--, "function" != typeof i.type && (i.__u |= 65536)) : f !== r && (f == r - 1 ? a-- : f == r + 1 ? a++ : (f > r ? a-- : a++, i.__u |= 65536))) : i = n.__k[t] = null;
    if (s) for(t = 0; t < c; t++)null != (o = u[t]) && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = x(o)), V(o, o));
}
function I(n, l, u) {
    var t, i;
    if ("function" == typeof n.type) {
        for(t = n.__k, i = 0; t && i < t.length; i++)t[i] && (t[i].__ = n, l = I(t[i], l, u));
        return l;
    }
    n.__e != l && (l && n.type && !u.contains(l) && (l = x(n)), u.insertBefore(n.__e, l || null), l = n.__e);
    do l = l && l.nextSibling;
    while (null != l && 8 === l.nodeType);
    return l;
}
function H(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (y(n) ? n.some(function(n) {
        H(n, l);
    }) : l.push(n)), l;
}
function L(n, l, u, t) {
    var i = n.key, o = n.type, r = u - 1, f = u + 1, e = l[u];
    if (null === e || e && i == e.key && o === e.type && 0 == (131072 & e.__u)) return u;
    if (t > (null != e && 0 == (131072 & e.__u) ? 1 : 0)) for(; r >= 0 || f < l.length;){
        if (r >= 0) {
            if ((e = l[r]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return r;
            r--;
        }
        if (f < l.length) {
            if ((e = l[f]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return f;
            f++;
        }
    }
    return -1;
}
function T(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || p.test(l) ? u : u + "px";
}
function A(n, l, u, t, i) {
    var o;
    n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || T(n.style, l, "");
            if (u) for(l in u)t && u[l] === t[l] || T(n.style, l, u[l]);
        }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, "$1")), l = l.toLowerCase() in n || "onFocusOut" === l || "onFocusIn" === l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = e, n.addEventListener(l, o ? s : c, o)) : n.removeEventListener(l, o ? s : c, o);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
    }
}
function F(n) {
    return function(u) {
        if (this.l) {
            var t = this.l[u.type + n];
            if (null == u.t) u.t = e++;
            else if (u.t < t.u) return;
            return t(l.event ? l.event(u) : u);
        }
    };
}
function O(n, u, t, i, o, r, f, e, c, s) {
    var a, h, v, p, w, _, g, m, x, C, M, P, $, I, H, L, T = u.type;
    if (void 0 !== u.constructor) return null;
    128 & t.__u && (c = !!(32 & t.__u), r = [
        e = u.__e = t.__e
    ]), (a = l.__b) && a(u);
    n: if ("function" == typeof T) try {
        if (m = u.props, x = "prototype" in T && T.prototype.render, C = (a = T.contextType) && i[a.__c], M = a ? C ? C.props.value : a.__ : i, t.__c ? g = (h = u.__c = t.__c).__ = h.__E : (x ? u.__c = h = new T(m, M) : (u.__c = h = new k(m, M), h.constructor = T, h.render = q), C && C.sub(h), h.props = m, h.state || (h.state = {}), h.context = M, h.__n = i, v = h.__d = !0, h.__h = [], h._sb = []), x && null == h.__s && (h.__s = h.state), x && null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = d({}, h.__s)), d(h.__s, T.getDerivedStateFromProps(m, h.__s))), p = h.props, w = h.state, h.__v = u, v) x && null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), x && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (x && null == T.getDerivedStateFromProps && m !== p && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, M), !h.__e && (null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, M) || u.__v === t.__v)) {
                for(u.__v !== t.__v && (h.props = m, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
                    n && (n.__ = u);
                }), P = 0; P < h._sb.length; P++)h.__h.push(h._sb[P]);
                h._sb = [], h.__h.length && f.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, M), x && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(p, w, _);
            });
        }
        if (h.context = M, h.props = m, h.__P = n, h.__e = !1, $ = l.__r, I = 0, x) {
            for(h.state = h.__s, h.__d = !1, $ && $(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
            h._sb = [];
        } else do h.__d = !1, $ && $(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        while (h.__d && ++I < 25);
        h.state = h.__s, null != h.getChildContext && (i = d(d({}, i), h.getChildContext())), x && !v && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(p, w)), S(n, y(L = null != a && a.type === b && null == a.key ? a.props.children : a) ? L : [
            L
        ], u, t, i, o, r, f, e, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && f.push(h), g && (h.__E = h.__ = null);
    } catch (n) {
        if (u.__v = null, c || null != r) {
            for(u.__u |= c ? 160 : 32; e && 8 === e.nodeType && e.nextSibling;)e = e.nextSibling;
            r[r.indexOf(e)] = null, u.__e = e;
        } else u.__e = t.__e, u.__k = t.__k;
        l.__e(n, u, t);
    }
    else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = z(t.__e, u, t, i, o, r, f, c, s);
    (a = l.diffed) && a(u);
}
function j(n, u, t) {
    u.__d = void 0;
    for(var i = 0; i < t.length; i++)N(t[i], t[++i], t[++i]);
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function z(u, t, i, o, r, f, e, c, s) {
    var a, v, p, d, _, g, m, b = i.props, k = t.props, C = t.type;
    if ("svg" === C ? r = "http://www.w3.org/2000/svg" : "math" === C ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), null != f) {
        for(a = 0; a < f.length; a++)if ((_ = f[a]) && "setAttribute" in _ == !!C && (C ? _.localName === C : 3 === _.nodeType)) {
            u = _, f[a] = null;
            break;
        }
    }
    if (null == u) {
        if (null === C) return document.createTextNode(k);
        u = document.createElementNS(r, C, k.is && k), c && (l.__m && l.__m(t, f), c = !1), f = null;
    }
    if (null === C) b === k || c && u.data === k || (u.data = k);
    else {
        if (f = f && n.call(u.childNodes), b = i.props || h, !c && null != f) for(b = {}, a = 0; a < u.attributes.length; a++)b[(_ = u.attributes[a]).name] = _.value;
        for(a in b)if (_ = b[a], "children" == a) ;
        else if ("dangerouslySetInnerHTML" == a) p = _;
        else if (!(a in k)) {
            if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
            A(u, a, null, _, r);
        }
        for(a in k)_ = k[a], "children" == a ? d = _ : "dangerouslySetInnerHTML" == a ? v = _ : "value" == a ? g = _ : "checked" == a ? m = _ : c && "function" != typeof _ || b[a] === _ || A(u, a, _, b[a], r);
        if (v) c || p && (v.__html === p.__html || v.__html === u.innerHTML) || (u.innerHTML = v.__html), t.__k = [];
        else if (p && (u.innerHTML = ""), S(u, y(d) ? d : [
            d
        ], t, i, o, "foreignObject" === C ? "http://www.w3.org/1999/xhtml" : r, f, e, f ? f[0] : i.__k && x(i, 0), c, s), null != f) for(a = f.length; a--;)w(f[a]);
        c || (a = "value", "progress" === C && null == g ? u.removeAttribute("value") : void 0 !== g && (g !== u[a] || "progress" === C && !g || "option" === C && g !== b[a]) && A(u, a, g, b[a], r), a = "checked", void 0 !== m && m !== u[a] && A(u, a, m, b[a], r));
    }
    return u;
}
function N(n, u, t) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == u || (n.__u = n(u));
        } else n.current = u;
    } catch (n) {
        l.__e(n, t);
    }
}
function V(n, u, t) {
    var i, o;
    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || N(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(o = 0; o < i.length; o++)i[o] && V(i[o], u, t || "function" != typeof n.type);
    t || w(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function q(n, l, u) {
    return this.constructor(n, u);
}
function B(u, t, i) {
    var o, r, f, e;
    l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], O(t, u = (!o && i || t).__k = _(b, null, [
        u
    ]), r || h, h, t.namespaceURI, !o && i ? [
        i
    ] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), j(f, u, e);
}
function D(n, l) {
    B(n, l, D);
}
function E(l, u, t) {
    var i, o, r, f, e = d({}, l.props);
    for(r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];
    return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), g(l.type, e, i || l.key, o || l.ref, null);
}
function G(n, l) {
    var u = {
        __c: l = "__cC" + a++,
        __: n,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n) {
            var u, t;
            return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function() {
                return t;
            }, this.componentWillUnmount = function() {
                u = null;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some(function(n) {
                    n.__e = !0, M(n);
                });
            }, this.sub = function(n) {
                u.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u && u.splice(u.indexOf(n), 1), l && l.call(n);
                };
            }), n.children;
        }
    };
    return u.Provider.__ = u.Consumer.contextType = u;
}
n = v.slice, l = {
    __e: function(n, l, u, t) {
        for(var i, o, r; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, t = function(n) {
    return null != n && null == n.constructor;
}, k.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n && (n = n(d({}, u), this.props)), n && d(u, n), null != n && this.__v && (l && this._sb.push(l), M(this));
}, k.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), M(this));
}, k.prototype.render = b, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, P.__r = 0, e = 0, c = F(!1), s = F(!0), a = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"7dysn"}],"7dysn":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eHQFl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallback", ()=>q);
parcelHelpers.export(exports, "useContext", ()=>x);
parcelHelpers.export(exports, "useDebugValue", ()=>P);
parcelHelpers.export(exports, "useEffect", ()=>y);
parcelHelpers.export(exports, "useErrorBoundary", ()=>b);
parcelHelpers.export(exports, "useId", ()=>g);
parcelHelpers.export(exports, "useImperativeHandle", ()=>F);
parcelHelpers.export(exports, "useLayoutEffect", ()=>_);
parcelHelpers.export(exports, "useMemo", ()=>T);
parcelHelpers.export(exports, "useReducer", ()=>p);
parcelHelpers.export(exports, "useRef", ()=>A);
parcelHelpers.export(exports, "useState", ()=>h);
var _preact = require("preact");
var t, r, u, i, o = 0, f = [], c = (0, _preact.options), e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function d(n, t) {
    c.__h && c.__h(r, n, o || t), o = 0;
    var u = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({}), u.__[n];
}
function h(n) {
    return o = 1, p(D, n);
}
function p(n, u, i) {
    var o = d(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : D(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = r, !r.u)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return !!n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = !1;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
        };
        r.u = !0;
        var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
        r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function y(n, u) {
    var i = d(t++, 3);
    !c.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__H.__h.push(i));
}
function _(n, u) {
    var i = d(t++, 4);
    !c.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__h.push(i));
}
function A(n) {
    return o = 5, T(function() {
        return {
            current: n
        };
    }, []);
}
function F(n, t, r) {
    o = 6, _(function() {
        return "function" == typeof n ? (n(t()), function() {
            return n(null);
        }) : n ? (n.current = t(), function() {
            return n.current = null;
        }) : void 0;
    }, null == r ? r : r.concat(n));
}
function T(n, r) {
    var u = d(t++, 7);
    return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function q(n, t) {
    return o = 8, T(function() {
        return n;
    }, t);
}
function x(n) {
    var u = r.context[n.__c], i = d(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function P(n, t) {
    c.useDebugValue && c.useDebugValue(t ? t(n) : n);
}
function b(n) {
    var u = d(t++, 10), i = h();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function g() {
    var n = d(t++, 11);
    if (!n.__) {
        for(var u = r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function j() {
    for(var n; n = f.shift();)if (n.__P && n.__H) try {
        n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
    } catch (t) {
        n.__H.__h = [], c.__e(t, n.__v);
    }
}
c.__b = function(n) {
    r = null, e && e(n);
}, c.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t);
}, c.__r = function(n) {
    a && a(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
    })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, c.diffed = function(n) {
    v && v(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function(n) {
        n.i && (n.__H = n.i), n.i = void 0;
    })), u = r = null;
}, c.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(z), n.__h = n.__h.filter(function(n) {
                return !n.__ || B(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], c.__e(r, n.__v);
        }
    }), l && l(n, t);
}, c.unmount = function(n) {
    m && m(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            z(n);
        } catch (n) {
            t = n;
        }
    }), r.__H = void 0, t && c.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
    var t, r = function() {
        clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    k && (t = requestAnimationFrame(r));
}
function z(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function C(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function D(n, t) {
    return "function" == typeof t ? t(n) : t;
}

},{"preact":"gD7X7","@parcel/transformer-js/src/esmodule-helpers.js":"7dysn"}],"dgAiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSTransition", ()=>_);
parcelHelpers.export(exports, "StyleTransition", ()=>X);
parcelHelpers.export(exports, "Transition", ()=>f);
parcelHelpers.export(exports, "TransitionGroup", ()=>v);
var _preact = require("preact");
var _preactMergeRefs = require("preact-merge-refs");
var _hooks = require("preact/hooks");
var a, c, T;
!function(r) {
    r.APPEAR = "appear", r.APPEAR_ACTIVE = "appearActive", r.APPEAR_DONE = "appearDone", r.ENTER = "enter", r.ENTER_ACTIVE = "enterActive", r.ENTER_DONE = "enterDone", r.EXIT = "exit", r.EXIT_ACTIVE = "exitActive", r.EXIT_DONE = "exitDone";
}(c || (c = {})), function(r) {
    r.ENTER = "onEnter", r.ENTERING = "onEntering", r.ENTERED = "onEntered", r.EXIT = "onExit", r.EXITING = "onExiting", r.EXITED = "onExited";
}(T || (T = {}));
var A = ((a = {})[c.APPEAR] = [
    T.ENTER,
    c.APPEAR_ACTIVE
], a[c.APPEAR_ACTIVE] = [
    T.ENTERING,
    c.APPEAR_DONE,
    !0
], a[c.APPEAR_DONE] = [
    T.ENTERED
], a[c.ENTER] = [
    T.ENTER,
    c.ENTER_ACTIVE
], a[c.ENTER_ACTIVE] = [
    T.ENTERING,
    c.ENTER_DONE,
    !0
], a[c.ENTER_DONE] = [
    T.ENTERED
], a[c.EXIT] = [
    T.EXIT,
    c.EXIT_ACTIVE
], a[c.EXIT_ACTIVE] = [
    T.EXITING,
    c.EXIT_DONE,
    !0
], a[c.EXIT_DONE] = [
    T.EXITED
], a), f = function(e) {
    var a = e.children, T = e.in, f = void 0 !== T && T, s = e.appear, N = void 0 !== s && s, l = e.enter, I = void 0 === l || l, v = e.exit, p = void 0 === v || v, R = e.duration, d = void 0 === R ? 500 : R, P = e.alwaysMounted, _ = void 0 !== P && P, D = e.addEndListener, X = (0, _hooks.useRef)(), O = (0, _hooks.useRef)(), h = !1, C = (0, _hooks.useState)(function() {
        return h = !0, f ? N ? c.APPEAR : c.APPEAR_DONE : c.EXIT_DONE;
    }), m = C[0], x = C[1];
    (0, _hooks.useEffect)(function() {
        var r, n = window, t = n.setTimeout, E = n.clearTimeout, i = A[m], o = i[1], u = i[2];
        return null == (r = e[i[0]]) || r.call(e, X.current), o && (u ? D ? D(X.current, function() {
            return x(o);
        }) : O.current = t(x, d, o) : x(o)), function() {
            E(O.current);
        };
    }, [
        m,
        d
    ]), (0, _hooks.useLayoutEffect)(function() {
        h || x(f ? I ? c.ENTER : c.ENTER_DONE : p ? c.EXIT : c.EXIT_DONE);
    }, [
        f
    ]);
    var V = (0, _hooks.useMemo)(function() {
        var r = {};
        return Object.values(c).forEach(function(e) {
            r[e] = m === e;
        }), r;
    }, [
        m
    ]);
    if (!_ && m === c.EXIT_DONE) return null;
    var y = a(V, m);
    return (0, _preact.cloneElement)(y, {
        ref: (0, _preactMergeRefs.mergeRefs)([
            X,
            y.ref
        ])
    });
};
function s() {
    return s = Object.assign ? Object.assign.bind() : function(r) {
        for(var e = 1; e < arguments.length; e++){
            var n = arguments[e];
            for(var t in n)Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t]);
        }
        return r;
    }, s.apply(this, arguments);
}
function N(r, e) {
    if (null == r) return {};
    var n, t, E = {}, i = Object.keys(r);
    for(t = 0; t < i.length; t++)e.indexOf(n = i[t]) >= 0 || (E[n] = r[n]);
    return E;
}
var l, I = function(r, e, n) {
    var t = r.props[e];
    return void 0 === t ? n : t;
}, v = function(e) {
    var n = e.children, E = e.appear, i = void 0 !== E && E, o = e.enter, u = void 0 === o || o, a = e.exit, c = void 0 === a || a, T = e.duration, A = void 0 === T ? 500 : T, f = Array.isArray(n) ? n : [
        n
    ], N = (0, _hooks.useRef)(!0), l = (0, _hooks.useRef)([]), v = [], p = [], R = function(e, n) {
        if (e) {
            var t = (0, _preact.cloneElement)(e, s({
                enter: u,
                exit: c,
                duration: A
            }, e.props, {
                in: !n,
                appear: N.current ? I(e, "appear", i) : I(e, "enter", u)
            }));
            v.push({
                visibleChild: t,
                removeTimeout: n
            }), p.push(t);
        }
    }, d = 0;
    l.current.forEach(function(r) {
        var e, n = r.visibleChild, t = r.removeTimeout, E = n.key, i = f.findIndex(function(r) {
            return r.key === E;
        });
        if (i < 0) t ? R(n, t) : c && !1 !== n.props.exit && R(n, (e = n, setTimeout(function() {
            var r = l.current, n = r.findIndex(function(r) {
                return r.visibleChild.key === e.key;
            });
            n > -1 && r.splice(n, 1);
        }, I(e, "duration", A))));
        else {
            t && clearTimeout(t);
            for(var o = d; o <= i; o++)R(f[o], null);
        }
        d = Math.max(d, i + 1);
    });
    for(var P = d; P < f.length; P++)R(f[P], null);
    return l.current = v, N.current = !1, p;
}, p = [
    "children",
    "classNames"
], R = ((l = {})[c.APPEAR] = "-appear", l[c.APPEAR_ACTIVE] = "-appear-active", l[c.APPEAR_DONE] = "-appear-done", l[c.ENTER] = "-enter", l[c.ENTER_ACTIVE] = "-enter-active", l[c.ENTER_DONE] = "-enter-done", l[c.EXIT] = "-exit", l[c.EXIT_ACTIVE] = "-exit-active", l[c.EXIT_DONE] = "-exit-done", l), d = function() {
    return [].slice.call(arguments).filter(function(r) {
        return !!r;
    }).join(" ");
}, P = function(r, e) {
    return "string" == typeof e ? "" + e + R[r] : e[r];
}, _ = function(n) {
    var t = n.children, E = n.classNames, i = N(n, p);
    return (0, _preact.createElement)(f, i, function(e, n) {
        var i = t.props.className, o = (0, _hooks.useMemo)(function() {
            return d(i, function(r, e) {
                var n = P(r, e);
                switch(r){
                    case c.APPEAR_ACTIVE:
                        return d(P(c.APPEAR, e), n);
                    case c.ENTER_ACTIVE:
                        return d(P(c.ENTER, e), n);
                    case c.EXIT_ACTIVE:
                        return d(P(c.EXIT, e), n);
                    default:
                        return n;
                }
            }(n, E));
        }, [
            i,
            E,
            n
        ]);
        return (0, _preact.cloneElement)(t, {
            className: o
        });
    });
}, D = [
    "children",
    "styles"
], X = function(n) {
    var t = n.children, E = n.styles, i = N(n, D);
    return (0, _preact.createElement)(f, i, function(e, n) {
        var i = t.props.style, o = (0, _hooks.useMemo)(function() {
            return s({}, function(r, e) {
                var n = e[r];
                switch(r){
                    case c.APPEAR_ACTIVE:
                        return s({}, e[c.APPEAR], n);
                    case c.ENTER_ACTIVE:
                        return s({}, e[c.ENTER], n);
                    case c.EXIT_ACTIVE:
                        return s({}, e[c.EXIT], n);
                    default:
                        return n;
                }
            }(n, E), i);
        }, [
            i,
            E,
            n
        ]);
        return (0, _preact.cloneElement)(t, {
            style: o
        });
    });
};

},{"preact":"gD7X7","preact-merge-refs":"i9Nfd","preact/hooks":"eHQFl","@parcel/transformer-js/src/esmodule-helpers.js":"7dysn"}],"i9Nfd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeRefs", ()=>n);
function n(n) {
    return function(t) {
        n.forEach(function(n) {
            "function" == typeof n ? n(t) : null != n && (n.current = t);
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"7dysn"}],"epS4M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clsx", ()=>clsx);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) {
        if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
        } else for(f in e)e[f] && (n && (n += " "), n += f);
    }
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
exports.default = clsx;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"7dysn"}],"g4ZpB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(t, e, n, o) {
        function r() {
            var e = Reflect.construct(HTMLElement, [], r);
            return e._vdomComponent = t, e._root = o && o.shadow ? e.attachShadow({
                mode: o.mode || "open"
            }) : e, e;
        }
        return (r.prototype = Object.create(HTMLElement.prototype)).constructor = r, r.prototype.connectedCallback = s, r.prototype.attributeChangedCallback = l, r.prototype.disconnectedCallback = u, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), r.observedAttributes = n, n.forEach(function(t) {
            Object.defineProperty(r.prototype, t, {
                get: function() {
                    return this._vdom.props[t];
                },
                set: function(e) {
                    this._vdom ? this.attributeChangedCallback(t, null, e) : (this._props || (this._props = {}), this._props[t] = e, this.connectedCallback());
                    var n = typeof e;
                    null != e && "string" !== n && "boolean" !== n && "number" !== n || this.setAttribute(t, e);
                }
            });
        }), customElements.define(e || t.tagName || t.displayName || t.name, r);
    });
var _preact = require("preact");
function r() {
    return (r = Object.assign ? Object.assign.bind() : function(t) {
        for(var e = 1; e < arguments.length; e++){
            var n = arguments[e];
            for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
    }).apply(this, arguments);
}
var i = [
    "context",
    "children"
];
function a(t) {
    this.getChildContext = function() {
        return t.context;
    };
    var e = t.children, n = function(t, e) {
        if (null == t) return {};
        var n, o, r = {}, i = Object.keys(t);
        for(o = 0; o < i.length; o++)e.indexOf(n = i[o]) >= 0 || (r[n] = t[n]);
        return r;
    }(t, i);
    return (0, _preact.cloneElement)(e, n);
}
function s() {
    var o = new CustomEvent("_preact", {
        detail: {},
        bubbles: !0,
        cancelable: !0
    });
    this.dispatchEvent(o), this._vdom = (0, _preact.h)(a, r({}, this._props, {
        context: o.detail.context
    }), function e(n, o) {
        if (3 === n.nodeType) return n.data;
        if (1 !== n.nodeType) return null;
        var r = [], i = {}, a = 0, s = n.attributes, l = n.childNodes;
        for(a = s.length; a--;)"slot" !== s[a].name && (i[s[a].name] = s[a].value, i[c(s[a].name)] = s[a].value);
        for(a = l.length; a--;){
            var u = e(l[a], null), d = l[a].slot;
            d ? i[d] = (0, _preact.h)(p, {
                name: d
            }, u) : r[a] = u;
        }
        var h = o ? (0, _preact.h)(p, null, r) : r;
        return (0, _preact.h)(o || n.nodeName.toLowerCase(), i, h);
    }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? (0, _preact.hydrate) : (0, _preact.render))(this._vdom, this._root);
}
function c(t) {
    return t.replace(/-(\w)/g, function(t, e) {
        return e ? e.toUpperCase() : "";
    });
}
function l(t, e, r) {
    if (this._vdom) {
        var i = {};
        i[t] = r = null == r ? void 0 : r, i[c(t)] = r, this._vdom = (0, _preact.cloneElement)(this._vdom, i), (0, _preact.render)(this._vdom, this._root);
    }
}
function u() {
    (0, _preact.render)(this._vdom = null, this._root);
}
function p(e, n) {
    var o = this;
    return (0, _preact.h)("slot", r({}, e, {
        ref: function(t) {
            t ? (o.ref = t, o._listener || (o._listener = function(t) {
                t.stopPropagation(), t.detail.context = n;
            }, t.addEventListener("_preact", o._listener))) : o.ref.removeEventListener("_preact", o._listener);
        }
    }));
}

},{"preact":"gD7X7","@parcel/transformer-js/src/esmodule-helpers.js":"7dysn"}],"JUmBF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useClickOutside", ()=>useClickOutside);
var _hooks = require("preact/hooks");
const useClickOutside = (ref, onClickOut)=>{
    (0, _hooks.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (!ref.current) return;
            const path = event.composedPath();
            if (!path.includes(ref.current)) onClickOut();
        };
        // Add the event listener for clicks
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            // Cleanup event listener on unmount
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        ref,
        onClickOut
    ]);
};

},{"preact/hooks":"eHQFl","@parcel/transformer-js/src/esmodule-helpers.js":"7dysn"}]},["8mHMB","8XOLj"], "8XOLj", "parcelRequire6251")

//# sourceMappingURL=index.a0a0205e.js.map
