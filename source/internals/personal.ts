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
 * Personal contact, entity class.
 */
@RestDB.Schema.Entity('contacts/personal')
@Class.Describe()
export class Personal extends Class.Null {
  /**
   * Name prefix.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public prefix?: string;

  /**
   * First name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public firstName?: string;

  /**
   * Last name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public lastName?: string;

  /**
   * Gender option.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public gender?: string;

  /**
   * Birth date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public birthDate?: Date;

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
   * Passport number.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public passportNumber?: string;

  /**
   * Marital status.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public maritalStatus?: string;

  /**
   * Marital regime option.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public maritalRegime?: string;

  /**
   * Nationality.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public nationality?: string;

  /**
   * Profession.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public profession?: string;

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

  /**
   * Get the full name.
   */
  @Class.Public()
  public get fullName(): string | undefined {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    } else if (this.firstName) {
      return `${this.firstName}`;
    } else if (this.lastName) {
      return `${this.lastName}`;
    }
    return void 0;
  }
}
