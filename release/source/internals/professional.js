"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiCore = require("@juridoc/client-core");
const Types = require("../types");
const phone_1 = require("./phone");
const email_1 = require("./email");
const address_1 = require("./address");
/**
 * Professional contact, entity class.
 */
let Professional = class Professional extends Class.Null {
    /**
     * Get the primary phone number.
     */
    get phone() {
        var _a, _b;
        return (_b = (_a = this.phoneList) === null || _a === void 0 ? void 0 : _a.find((phone) => phone.type === Types.Priority.Primary)) === null || _b === void 0 ? void 0 : _b.number;
    }
    /**
     * Get the primary email address.
     */
    get email() {
        var _a, _b;
        return (_b = (_a = this.emailList) === null || _a === void 0 ? void 0 : _a.find((email) => email.type === Types.Priority.Primary)) === null || _b === void 0 ? void 0 : _b.address;
    }
    /**
     * Get the primary address.
     */
    get address() {
        var _a;
        return (_a = this.addressList) === null || _a === void 0 ? void 0 : _a.find((address) => address.type === Types.Priority.Primary);
    }
};
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Professional.prototype, "company", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Professional.prototype, "denomination", void 0);
__decorate([
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Professional.prototype, "idNumber", void 0);
__decorate([
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Professional.prototype, "vatNumber", void 0);
__decorate([
    RestDB.Schema.Number(),
    Class.Public()
], Professional.prototype, "capital", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Professional.prototype, "type", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Professional.prototype, "size", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Professional.prototype, "position", void 0);
__decorate([
    RestDB.Schema.Array(phone_1.Phone),
    Class.Public()
], Professional.prototype, "phoneList", void 0);
__decorate([
    RestDB.Schema.Array(email_1.Email),
    Class.Public()
], Professional.prototype, "emailList", void 0);
__decorate([
    RestDB.Schema.Array(address_1.Address),
    Class.Public()
], Professional.prototype, "addressList", void 0);
__decorate([
    Class.Public()
], Professional.prototype, "phone", null);
__decorate([
    Class.Public()
], Professional.prototype, "email", null);
__decorate([
    Class.Public()
], Professional.prototype, "address", null);
Professional = __decorate([
    RestDB.Schema.Entity('contacts/professional'),
    Class.Describe()
], Professional);
exports.Professional = Professional;
//# sourceMappingURL=professional.js.map