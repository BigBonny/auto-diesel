const [, , command, ...args] = process.argv;

process.argv = [process.execPath, "next", command, ...args];

require("next/dist/bin/next");
