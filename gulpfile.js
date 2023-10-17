/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS SASS GULPFILE
----------------------------------------
*/

const uswds = require("@uswds/compile");

uswds.settings.version = 3;

exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.init = uswds.init;
exports.copyAssets = uswds.copyAssets;
exports.updateUswds = uswds.updateUswds;
