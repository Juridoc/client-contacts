/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

import * as Types from '../types';

/**
 * Contact email, entity class.
 */
@RestDB.Schema.Entity('contacts/email')
@Class.Describe()
export class Email extends Class.Null {
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
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.Required()
  @RestDB.Schema.String(1)
  @Class.Public()
  public address!: string;
}
