/**
 * Created by alvaro on 12/11/16.
 */
window.require = window.top.require;
window.process = window.top.process;
window.__dirname = window.top.__dirname;
require = window.require;

process.env.debug = true;
require("module").globalPaths.push("node_modules");