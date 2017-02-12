/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export abstract class AnimationStyleNormalizer {
  abstract normalizePropertyName(propertyName: string, errors: string[]): string;
  abstract normalizeStyleValue(
      userProvidedProperty: string, normalizedProperty: string, value: string|number,
      errors: string[]): string;
}

export class NoOpAnimationStyleNormalizer {
  normalizePropertyName(propertyName: string, errors: string[]): string { return propertyName; }

  normalizeStyleValue(
      userProvidedProperty: string, normalizedProperty: string, value: string|number,
      errors: string[]): string {
    return <any>value;
  }
}
