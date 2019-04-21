/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiCore from '@juridoc/client-core';

import * as Types from '../types';

/**
 * Contact address, entity class.
 */
@RestDB.Schema.Entity('contacts/address')
@Class.Describe()
export class Address extends Class.Null {
  /**
   * Type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Priority))
  @Class.Public()
  public type!: Types.Priority;

  /**
   * Local.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public local?: string;

  /**
   * Number.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public number?: string;

  /**
   * Complement.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public complement?: string;

  /**
   * Neighborhood.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public neighborhood?: string;

  /**
   * City.
   */
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public city?: ApiCore.Entities.Field;

  /**
   * State.
   */
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public state?: ApiCore.Entities.Field;

  /**
   * Country.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public country?: string;

  /**
   * ZIP.
   */
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public zip?: ApiCore.Entities.Field;
}
