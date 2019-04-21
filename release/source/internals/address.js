"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiCore = require("@juridoc/client-core");
const Types = require("../types");
/**
 * Contact address, entity class.
 */
let Address = class Address extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Priority)),
    Class.Public()
], Address.prototype, "type", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Address.prototype, "local", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Address.prototype, "number", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Address.prototype, "complement", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Address.prototype, "neighborhood", void 0);
__decorate([
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Address.prototype, "city", void 0);
__decorate([
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Address.prototype, "state", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Address.prototype, "country", void 0);
__decorate([
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Address.prototype, "zip", void 0);
Address = __decorate([
    RestDB.Schema.Entity('contacts/address'),
    Class.Describe()
], Address);
exports.Address = Address;
//# sourceMappingURL=address.js.map