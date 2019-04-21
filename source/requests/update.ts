/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiCore from '@juridoc/client-core';

import * as Internals from '../internals';

/**
 * Contact update request.
 */
@RestDB.Schema.Entity('contacts/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Picture entity.
   */
  @RestDB.Schema.Object(Internals.Picture)
  @Class.Public()
  public picture?: Internals.Picture;

  /**
   * Contact name.
   */
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public name?: ApiCore.Entities.Field;

  /**
   * Contact language.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public language?: string;

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
