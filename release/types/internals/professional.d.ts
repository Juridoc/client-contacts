/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiCore from '@juridoc/client-core';
import { Phone } from './phone';
import { Email } from './email';
import { Address } from './address';
/**
 * Professional contact, entity class.
 */
export declare class Professional extends Class.Null {
    /**
     * Company name.
     */
    company?: string;
    /**
     * Company denomination.
     */
    denomination?: string;
    /**
     * Id number.
     */
    idNumber?: ApiCore.Entities.Field;
    /**
     * VAT number.
     */
    vatNumber?: ApiCore.Entities.Field;
    /**
     * Capital.
     */
    capital?: number;
    /**
     * Company type.
     */
    type?: string;
    /**
     * Company size.
     */
    size?: string;
    /**
     * Professional position.
     */
    position?: string;
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
}
