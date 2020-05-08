"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IFuncionamentoBBCEApi_1 = require("../clients/IFuncionamentoBBCEApi");
function removeUndefinedKey(filter) {
    filter = filter || {};
    Object.keys(filter).forEach(function (key) {
        /* eslint-disable */
        // @ts-ignore
        if (filter[key] === undefined) {
            // @ts-ignore
            delete filter[key];
        }
        /* eslint-enable */
    });
    return filter;
}
exports.removeUndefinedKey = removeUndefinedKey;
function getDateFormatFromDate(date) {
    var day = date.getDate().toString().padStart(2, "0");
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var year = date.getFullYear().toString();
    return year + "-" + month + "-" + day;
}
exports.getDateFormatFromDate = getDateFormatFromDate;
function isDateInIntervalTime(date, startTime, endTime) {
    var newStartDate = new Date(date);
    var newEndDate = new Date(date);
    var splittedTime = startTime.split(":");
    newStartDate.setHours(Number(splittedTime[0]), Number(splittedTime[1]));
    splittedTime = endTime.split(":");
    newEndDate.setHours(Number(splittedTime[0]), Number(splittedTime[1]));
    return newStartDate <= date && date <= newEndDate;
}
exports.isDateInIntervalTime = isDateInIntervalTime;
function getDayOfTheWeekFromDate(date) {
    var numberDayRelationship = {
        0: IFuncionamentoBBCEApi_1.DiaSemanaEnum.Domingo,
        1: IFuncionamentoBBCEApi_1.DiaSemanaEnum.Segunda,
        2: IFuncionamentoBBCEApi_1.DiaSemanaEnum.Terca,
        3: IFuncionamentoBBCEApi_1.DiaSemanaEnum.Quarta,
        4: IFuncionamentoBBCEApi_1.DiaSemanaEnum.Quinta,
        5: IFuncionamentoBBCEApi_1.DiaSemanaEnum.Sexta,
        6: IFuncionamentoBBCEApi_1.DiaSemanaEnum.Sabado,
    };
    return numberDayRelationship[date.getDay()];
}
exports.getDayOfTheWeekFromDate = getDayOfTheWeekFromDate;
//# sourceMappingURL=utils.js.map