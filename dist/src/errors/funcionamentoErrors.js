"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-classes-per-file */
var FuncionamentoFeriadoError = /** @class */ (function (_super) {
    __extends(FuncionamentoFeriadoError, _super);
    function FuncionamentoFeriadoError() {
        return _super.call(this, FuncionamentoFeriadoError.mensagemErro) || this;
    }
    FuncionamentoFeriadoError.mensagemErro = "Operação não disponível para data atual (feriado).";
    return FuncionamentoFeriadoError;
}(Error));
exports.FuncionamentoFeriadoError = FuncionamentoFeriadoError;
var FuncionamentoHorarioError = /** @class */ (function (_super) {
    __extends(FuncionamentoHorarioError, _super);
    function FuncionamentoHorarioError() {
        return _super.call(this, FuncionamentoHorarioError.mensagemErro) || this;
    }
    FuncionamentoHorarioError.mensagemErro = "Operação não permitida para o horário atual.";
    return FuncionamentoHorarioError;
}(Error));
exports.FuncionamentoHorarioError = FuncionamentoHorarioError;
//# sourceMappingURL=funcionamentoErrors.js.map