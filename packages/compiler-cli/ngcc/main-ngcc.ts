#!/usr/bin/env node
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as path from 'canonical-path';
import * as yargs from 'yargs';

import {mainNgcc} from './src/main';
import {EntryPointJsonProperty} from './src/packages/entry_point';

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);
  const options =
      yargs
          .option('s', {
            alias: 'source',
            describe: 'A path to the root folder to compile.',
            default: './node_modules'
          })
          .option('f', {alias: 'formats', hidden: true, array: true})
          .option('p', {
            alias: 'properties',
            array: true,
            describe:
                'An array of names of properties in package.json (e.g. `module` or `es2015`)\n' +
                'These properties should hold a path to a bundle-format to compile.\n' +
                'If provided, only the specified properties are considered for processing.\n' +
                'If not provided, all the supported format properties (e.g. fesm2015, fesm5, es2015, esm2015, esm5, main, module) in the package.json are considered.'
          })
          .option('t', {
            alias: 'target',
            describe: 'A path to a root folder where the compiled files will be written.',
            defaultDescription: 'The `source` folder.'
          })
          .help()
          .parse(args);

  if (options['f'] && options['f'].length) {
    console.error(
        'The formats option (-f/--formats) has been removed. Consider the properties option (-p/--properties) instead.');
    process.exit(1);
  }
  const baseSourcePath: string = path.resolve(options['s']);
  const propertiesToConsider: EntryPointJsonProperty[] = options['p'];
  const baseTargetPath: string = options['t'];
  try {
    mainNgcc({baseSourcePath, propertiesToConsider, baseTargetPath});
    process.exitCode = 0;
  } catch (e) {
    console.error(e.stack || e.message);
    process.exitCode = 1;
  }
}
