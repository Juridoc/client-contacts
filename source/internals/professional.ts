/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiCore from '@juridoc/client-core';

import * as Types from '../types';

import { Phone } from './phone';
import { Email } from './email';
import { Address } from './address';

/**
 * Professional contact, entity class.
 */
@RestDB.Schema.Entity('contacts/professional')
@Class.Describe()
export class Professional extends Class.Null {
  /**
   * Company name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public company?: string;

  /**
   * Company denomination.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public denomination?: string;

  /**
   * Id number.
   */
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public idNumber?: ApiCore.Entities.Field;

  /**
   * VAT number.
   */
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public vatNumber?: ApiCore.Entities.Field;

  /**
   * Capital.
   */
  @RestDB.Schema.Number()
  @Class.Public()
  public capital?: number;

  /**
   * Company type.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public type?: string;

  /**
   * Company size.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public size?: string;

  /**
   * Professional position.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public position?: string;

  /**
   * Phone list.
   */
  @RestDB.Schema.Array(Phone)
  @Class.Public()
  public phoneList?: Phone[];

  /**
   * Email list.
   */
  @RestDB.Schema.Array(Email)
  @Class.Public()
  public emailList?: Email[];

  /**
   * Address list.
   */
  @RestDB.Schema.Array(Address)
  @Class.Public()
  public addressList?: Address[];

  /**
   * Get the primary phone number.
   */
  @Class.Public()
  public get phone(): string | undefined {
    return this.phoneList?.find((phone) => phone.type === Types.Priority.Primary)?.number;
  }

  /**
   * Get the primary email address.
   */
  @Class.Public()
  public get email(): string | undefined {
    return this.emailList?.find((email) => email.type === Types.Priority.Primary)?.address;
  }

  /**
   * Get the primary address.
   */
  @Class.Public()
  public get address(): Address | undefined {
    return this.addressList?.find((address) => address.type === Types.Priority.Primary);
  }
}
