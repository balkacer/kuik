"use strict";
exports.__esModule = true;
var Stadistics = /** @class */ (function () {
    function Stadistics() {
    }
    Stadistics.prototype.sumatoryOf = function (data) {
        var result = 0;
        data.forEach(function (num) {
            result += num;
        });
        return result;
    };
    Stadistics.prototype.medianOf = function (data) {
        var sorted = data.slice().sort(function (a, b) { return a - b; });
        var middle = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
            return [sorted[middle - 1], sorted[middle]];
        }
        return sorted[middle];
    };
    Stadistics.prototype.averageOf = function (data, notRounded) {
        var dataLength = data.length;
        var sumatoria = this.sumatoryOf(data);
        if (notRounded)
            return (sumatoria / dataLength);
        return Math.round(sumatoria / dataLength);
    };
    return Stadistics;
}());
exports["default"] = Stadistics;
