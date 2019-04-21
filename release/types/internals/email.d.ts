/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Contact email, entity class.
 */
export declare class Email extends Class.Null {
    /**
     * Type.
     */
    type: Types.Priority;
    /**
     * Address.
     */
    address: string;
}
