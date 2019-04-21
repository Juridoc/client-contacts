/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiCore from '@juridoc/client-core';
import * as Types from '../types';
/**
 * Contact address, entity class.
 */
export declare class Address extends Class.Null {
    /**
     * Type.
     */
    type: Types.Priority;
    /**
     * Local.
     */
    local?: string;
    /**
     * Number.
     */
    number?: string;
    /**
     * Complement.
     */
    complement?: string;
    /**
     * Neighborhood.
     */
    neighborhood?: string;
    /**
     * City.
     */
    city?: ApiCore.Entities.Field;
    /**
     * State.
     */
    state?: ApiCore.Entities.Field;
    /**
     * Country.
     */
    country?: string;
    /**
     * ZIP.
     */
    zip?: ApiCore.Entities.Field;
}
