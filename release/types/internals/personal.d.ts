/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiCore from '@juridoc/client-core';
import { Phone } from './phone';
import { Email } from './email';
import { Address } from './address';
/**
 * Personal contact, entity class.
 */
export declare class Personal extends Class.Null {
    /**
     * Name prefix.
     */
    prefix?: string;
    /**
     * First name.
     */
    firstName?: string;
    /**
     * Last name.
     */
    lastName?: string;
    /**
     * Gender option.
     */
    gender?: string;
    /**
     * Birth date.
     */
    birthDate?: Date;
    /**
     * Id number.
     */
    idNumber?: ApiCore.Entities.Field;
    /**
     * VAT number.
     */
    vatNumber?: ApiCore.Entities.Field;
    /**
     * Passport number.
     */
    passportNumber?: string;
    /**
     * Marital status.
     */
    maritalStatus?: string;
    /**
     * Marital regime option.
     */
    maritalRegime?: string;
    /**
     * Nationality.
     */
    nationality?: string;
    /**
     * Profession.
     */
    profession?: string;
    /**
     * Phone list.
     */
    phoneList?: Phone[];
    /**
     * Email list.
     */
    emailList?: Email[];
    /**
     * Address list.
     */
    addressList?: Address[];
    /**
     * Get the primary phone number.
     */
    get phone(): string | undefined;
    /**
     * Get the primary email address.
     */
    get email(): string | undefined;
    /**
     * Get the primary address.
     */
    get address(): Address | undefined;
    /**
     * Get the full name.
     */
    get fullName(): string | undefined;
}
