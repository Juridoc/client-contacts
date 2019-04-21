/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiCore from '@juridoc/client-core';
import * as Internals from './internals';
import * as Types from './types';
/**
 * Contact entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Contact Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Picture Id.
     */
    pictureId?: string;
    /**
     * List of sharing grants.
     */
    grantsIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Contact type.
     */
    type: Types.AnyType;
    /**
     * Contact name.
     */
    name: ApiCore.Entities.Field;
    /**
     * Contact language.
     */
    language: string;
    /**
     * Personal details.
     */
    personal?: Internals.Personal;
    /**
     * Professional details.
     */
    professional?: Internals.Professional;
    /**
     * Get the primary personal or professional phone number.
     */
    get phone(): string | undefined;
    /**
     * Get the primary personal or professional email address.
     */
    get email(): string | undefined;
    /**
     * Get the primary personal or professional address.
     */
    get address(): Internals.Address | undefined;
}
