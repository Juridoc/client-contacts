/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiCore from '@juridoc/client-core';
import * as Internals from '../internals';
/**
 * Contact update request.
 */
export declare class Update extends Class.Null {
    /**
     * Picture entity.
     */
    picture?: Internals.Picture;
    /**
     * Contact name.
     */
    name?: ApiCore.Entities.Field;
    /**
     * Contact language.
     */
    language?: string;
    /**
     * Personal details.
     */
    personal?: Internals.PersonalType;
    /**
     * Professional details.
     */
    professional?: Internals.ProfessionalType;
}
