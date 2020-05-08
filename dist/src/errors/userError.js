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
var PermissoesNaoEncontradas = /** @class */ (function (_super) {
    __extends(PermissoesNaoEncontradas, _super);
    function PermissoesNaoEncontradas() {
        return _super.call(this, PermissoesNaoEncontradas.mensagemErro) || this;
    }
    PermissoesNaoEncontradas.mensagemErro = "Permissões do usuário não encontrado no banco de dados.";
    return PermissoesNaoEncontradas;
}(Error));
exports.PermissoesNaoEncontradas = PermissoesNaoEncontradas;
var UsuarioNaoAutorizado = /** @class */ (function (_super) {
    __extends(UsuarioNaoAutorizado, _super);
    function UsuarioNaoAutorizado() {
        return _super.call(this, UsuarioNaoAutorizado.mensagemErro) || this;
    }
    UsuarioNaoAutorizado.mensagemErro = "Usuário não está autorizado para realizar esta operação.";
    return UsuarioNaoAutorizado;
}(Error));
exports.UsuarioNaoAutorizado = UsuarioNaoAutorizado;
//# sourceMappingURL=userError.js.map