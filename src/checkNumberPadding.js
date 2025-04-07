"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNumberPadding = checkNumberPadding;
function checkNumberPadding(intStrs) {
    const entries = [];
    for (const str of intStrs) {
        if (!/^\d+$/.test(str))
            continue;
        const numPart = str.replace(/^0+/, "") || "0";
        const padLen = str.length - numPart.length;
        entries.push({ str, numPart, padLen });
    }
    if (entries.length === 0)
        return 0;
    const padLengths = new Set(entries.map(e => e.padLen));
    const allPadded = entries.every(e => e.padLen > 0);
    const allUnpadded = entries.every(e => e.padLen === 0);
    if (padLengths.size === 1 && allPadded) {
        const [padLen] = Array.from(padLengths);
        const minExpectedLength = Math.max(...entries.map(e => e.numPart.length + e.padLen));
        return minExpectedLength;
    }
    if (allUnpadded) {
        return 1;
    }
    if (padLengths.size > 1) {
        return -1;
    }
    const minLen = Math.min(...entries.map(e => e.str.length));
    return -minLen;
}
