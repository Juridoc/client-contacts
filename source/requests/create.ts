/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiCore from '@juridoc/client-core';

import * as Internals from '../internals';

/**
 * Contact creation request.
 */
@RestDB.Schema.Entity('contacts')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Contact name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public name!: ApiCore.Entities.Field;

  /**
   * Contact language.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public language!: string;

  /**
   * Personal details.
   */
  @RestDB.Schema.Object(Internals.Personal)
  @Class.Public()
  public personal?: Internals.PersonalType;

  /**
   * Professional details.
   */
  @RestDB.Schema.Object(Internals.Professional)
  @Class.Public()
  public professional?: Internals.ProfessionalType;
}
