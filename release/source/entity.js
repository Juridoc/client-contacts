"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiCore = require("@juridoc/client-core");
const Internals = require("./internals");
const Types = require("./types");
/**
 * Contact entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Get the primary personal or professional phone number.
     */
    get phone() {
        var _a, _b, _c;
        return (_b = (_a = this.professional) === null || _a === void 0 ? void 0 : _a.phone) !== null && _b !== void 0 ? _b : (_c = this.personal) === null || _c === void 0 ? void 0 : _c.phone;
    }
    /**
     * Get the primary personal or professional email address.
     */
    get email() {
        var _a, _b, _c;
        return (_b = (_a = this.professional) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : (_c = this.personal) === null || _c === void 0 ? void 0 : _c.email;
    }
    /**
     * Get the primary personal or professional address.
     */
    get address() {
        var _a, _b, _c;
        return (_b = (_a = this.professional) === null || _a === void 0 ? void 0 : _a.address) !== null && _b !== void 0 ? _b : (_c = this.personal) === null || _c === void 0 ? void 0 : _c.address;
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "accountId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "profileId", void 0);
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "pictureId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "grantsIdList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "updatedAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration([...Object.values(Types.System), ...Object.values(Types.Common)]),
    Class.Public()
], Entity.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Entity.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "language", void 0);
__decorate([
    RestDB.Schema.Object(Internals.Personal),
    Class.Public()
], Entity.prototype, "personal", void 0);
__decorate([
    RestDB.Schema.Object(Internals.Professional),
    Class.Public()
], Entity.prototype, "professional", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "phone", null);
__decorate([
    Class.Public()
], Entity.prototype, "email", null);
__decorate([
    Class.Public()
], Entity.prototype, "address", null);
Entity = __decorate([
    RestDB.Schema.Entity('contacts'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map