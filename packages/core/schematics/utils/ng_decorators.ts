/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as ts from 'typescript';
import {getCallDecoratorImport} from './typescript/decorators';

export type CallExpressionDecorator = ts.Decorator & {
  expression: ts.CallExpression;
};

export interface NgDecorator {
  name: string;
  node: CallExpressionDecorator;
}

/**
 * Gets all decorators which are imported from an Angular package (e.g. "@angular/core")
 * from a list of decorators.
 */
export function getAngularDecorators(
    typeChecker: ts.TypeChecker, decorators: ReadonlyArray<ts.Decorator>): NgDecorator[] {
  return decorators.map(node => ({node, importData: getCallDecoratorImport(typeChecker, node)}))
      .filter(({importData}) => importData && importData.importModule.startsWith('@angular/'))
      .map(
          ({node, importData}) =>
              ({node: node as CallExpressionDecorator, name: importData !.name}));
}
