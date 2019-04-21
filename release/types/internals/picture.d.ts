/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Picture creation request.
 */
export declare class Picture extends Class.Null {
    /**
     * MIME type.
     */
    mime: string;
    /**
     * File name.
     */
    name: string;
    /**
     * File data.
     */
    data: Array<number>;
}
