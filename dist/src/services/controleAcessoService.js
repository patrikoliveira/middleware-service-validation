"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var permissoesApi_1 = __importDefault(require("../clients/permissoesApi"));
var funcionamentoBBCEApi_1 = __importDefault(require("../clients/funcionamentoBBCEApi"));
var utils_1 = require("../utils/utils");
var userError_1 = require("../errors/userError");
var funcionamentoErrors_1 = require("../errors/funcionamentoErrors");
var ControleAcessoService = /** @class */ (function () {
    function ControleAcessoService(permissoesApi, funcionamentoBBCEAPI) {
        this.permissoesApi = permissoesApi;
        this.funcionamentoBBCEAPI = funcionamentoBBCEAPI;
    }
    ControleAcessoService.prototype.buscaServicosPermitidos = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var permissoesUsuario, servicosPermitidos, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.permissoesApi.getPermissionsUser(userId)];
                    case 1:
                        permissoesUsuario = _a.sent();
                        servicosPermitidos = permissoesUsuario.servicos.reduce(function (userServices, servico) {
                            if (servico.permitido) {
                                userServices.push(servico.id);
                            }
                            return userServices;
                        }, []);
                        return [2 /*return*/, servicosPermitidos];
                    case 2:
                        error_1 = _a.sent();
                        // para qualquer erro desconhecido relacionado à busca de permissões
                        // por usuário, a exceção UserPermissionNotFound será levantada
                        throw new userError_1.PermissoesNaoEncontradas();
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ControleAcessoService.prototype.validaAcessoServico = function (userId, escopoValidacao) {
        return __awaiter(this, void 0, void 0, function () {
            var servicosPermitidos, sevicosValidados;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buscaServicosPermitidos(userId)];
                    case 1:
                        servicosPermitidos = _a.sent();
                        sevicosValidados = escopoValidacao.filter(function (escopo) { return servicosPermitidos.includes(escopo); });
                        if (!sevicosValidados.length) {
                            throw new userError_1.UsuarioNaoAutorizado();
                        }
                        return [2 /*return*/, sevicosValidados];
                }
            });
        });
    };
    // -----------------------------------------------------------
    // Valida acesso do usuário pelos dias/horários parametrizados
    // -----------------------------------------------------------
    ControleAcessoService.prototype.validaFucionamentoFeriado = function (feriados, data) {
        var diaAtual = utils_1.getDateFormatFromDate(data);
        var feriadoAtual = feriados.find(function (feriado) { return feriado.data === diaAtual; });
        if (feriadoAtual && !utils_1.isDateInIntervalTime(data, feriadoAtual.horarioAbertura, feriadoAtual.horarioFechamento)) {
            throw new funcionamentoErrors_1.FuncionamentoFeriadoError();
        }
        return feriadoAtual;
    };
    ControleAcessoService.prototype.validaFuncionamentoHorario = function (horariosFuncionamento, data) {
        var diaAtual = utils_1.getDayOfTheWeekFromDate(data);
        var horarioFuncionamentoDiaAtual = horariosFuncionamento.find(function (horarioFuncionamento) { return horarioFuncionamento.diaSemana === diaAtual; });
        if (horarioFuncionamentoDiaAtual &&
            utils_1.isDateInIntervalTime(data, horarioFuncionamentoDiaAtual.horarioAbertura, horarioFuncionamentoDiaAtual.horarioFechamento)) {
        }
        else {
            throw new funcionamentoErrors_1.FuncionamentoHorarioError();
        }
    };
    ControleAcessoService.prototype.controlaPermissaoHorarios = function (data, userId, escopoValidacao) {
        return __awaiter(this, void 0, void 0, function () {
            var sevicosValidados, error_2, funcionamentoBBCE, feriado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sevicosValidados = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.validaAcessoServico(userId, escopoValidacao)];
                    case 2:
                        sevicosValidados = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!!sevicosValidados.length) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.funcionamentoBBCEAPI.getFuncionamentoBBCE()];
                    case 5:
                        funcionamentoBBCE = _a.sent();
                        feriado = this.validaFucionamentoFeriado(funcionamentoBBCE.feriados, data);
                        if (!feriado) {
                            // caso nenhum feriado for validado, os dias úteis da semana devem ser validadas
                            this.validaFuncionamentoHorario(funcionamentoBBCE.horariosFuncionamento, data);
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ControleAcessoService = __decorate([
        typedi_1.Service("controleAcessoService"),
        __param(0, typedi_1.Inject("permissaoAPI")),
        __param(1, typedi_1.Inject("funcionamentoBBCEAPI")),
        __metadata("design:paramtypes", [permissoesApi_1.default,
            funcionamentoBBCEApi_1.default])
    ], ControleAcessoService);
    return ControleAcessoService;
}());
exports.default = ControleAcessoService;
//# sourceMappingURL=controleAcessoService.js.map