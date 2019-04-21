/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import { Personal } from './personal';
import { Professional } from './professional';

export { Email } from './email';
export { Phone } from './phone';
export { Picture } from './picture';
export { Address } from './address';
export { Personal };
export { Professional };

/**
 * Personal type.
 */
export type PersonalType = Omit<Personal, 'phone' | 'email' | 'address' | 'fullName'>;

/**
 * Professional type.
 */
export type ProfessionalType = Omit<Professional, 'phone' | 'email' | 'address'>;
