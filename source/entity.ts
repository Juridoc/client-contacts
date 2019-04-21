/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiCore from '@juridoc/client-core';

import * as Internals from './internals';
import * as Types from './types';

/**
 * Contact entity class.
 */
@RestDB.Schema.Entity('contacts')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Contact Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Picture Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public pictureId?: string;

  /**
   * List of sharing grants.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Contact type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration([...Object.values(Types.System), ...Object.values(Types.Common)])
  @Class.Public()
  public type!: Types.AnyType;

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
  public personal?: Internals.Personal;

  /**
   * Professional details.
   */
  @RestDB.Schema.Object(Internals.Professional)
  @Class.Public()
  public professional?: Internals.Professional;

  /**
   * Get the primary personal or professional phone number.
   */
  @Class.Public()
  public get phone(): string | undefined {
    return this.professional?.phone ?? this.personal?.phone;
  }

  /**
   * Get the primary personal or professional email address.
   */
  @Class.Public()
  public get email(): string | undefined {
    return this.professional?.email ?? this.personal?.email;
  }

  /**
   * Get the primary personal or professional address.
   */
  @Class.Public()
  public get address(): Internals.Address | undefined {
    return this.professional?.address ?? this.personal?.address;
  }
}
