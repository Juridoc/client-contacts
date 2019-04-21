/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Contact phone, entity class.
 */
@RestDB.Schema.Entity('contacts/phone')
@Class.Describe()
export class Phone extends Class.Null {
  /**
   * Type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Priority))
  @Class.Public()
  public type!: Types.Priority;

  /**
   * Address.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(1)
  @Class.Public()
  public number!: string;
}
