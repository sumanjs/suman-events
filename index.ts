'use strict';

//polyfills
const process = require('suman-browser-polyfills/modules/process');
const global = require('suman-browser-polyfills/modules/global');

//core
import assert = require('assert');

//npm
const colors = require('colors/safe');

//////////////////////////////////////////

namespace ev {

  export type TSumanToString = () => string;

  export interface ISumanEvent extends String {
    explanation: string,
    toString: TSumanToString
  }

  export interface ISumanEvents {

    TEST_FILE_CHILD_PROCESS_EXITED: ISumanEvent,
    RUNNER_EXIT_CODE: ISumanEvent,
    RUNNER_EXIT_SIGNAL: ISumanEvent,
    RUNNER_HIT_DIRECTORY_BUT_NOT_RECURSIVE: ISumanEvent;
    RUNNER_EXIT_CODE_IS_ZERO: ISumanEvent,
    RUNNER_TEST_PATHS_CONFIRMATION: ISumanEvent,
    RUNNER_RESULTS_TABLE: ISumanEvent,
    RUNNER_RESULTS_TABLE_SORTED_BY_MILLIS: ISumanEvent,
    RUNNER_OVERALL_RESULTS_TABLE: ISumanEvent,
    RUNNER_STARTED: ISumanEvent,
    RUNNER_ENDED: ISumanEvent,
    RUNNER_EXIT_CODE_GREATER_THAN_ZERO: ISumanEvent,
    RUNNER_INITIAL_SET: ISumanEvent,
    RUNNER_OVERALL_SET: ISumanEvent,
    RUNNER_ASCII_LOGO: ISumanEvent,
    USING_SERVER_MARKED_BY_HOSTNAME: ISumanEvent,
    USING_FALLBACK_SERVER: ISumanEvent,
    USING_DEFAULT_SERVER: ISumanEvent,
    TEST_CASE_STUBBED: ISumanEvent,
    TEST_CASE_SKIPPED: ISumanEvent,
    TEST_CASE_PASS: ISumanEvent,
    TEST_CASE_FAIL: ISumanEvent,
    TEST_CASE_END: ISumanEvent,
    FILENAME_DOES_NOT_MATCH_NONE: ISumanEvent,
    FILENAME_DOES_NOT_MATCH_ALL: ISumanEvent,
    FILENAME_DOES_NOT_MATCH_ANY: ISumanEvent,
    SUITE_SKIPPED: ISumanEvent,
    SUITE_END: ISumanEvent,
    TEST_END: ISumanEvent,
    TAP_COMPLETE: ISumanEvent,
    FILE_IS_NOT_DOT_JS: ISumanEvent,
    FATAL_TEST_ERROR: ISumanEvent,
    USING_STANDARD_REPORTER: ISumanEvent,
    ERRORS_ONLY_OPTION: ISumanEvent,
    SUMAN_VERSION: ISumanEvent,
    NODE_VERSION: ISumanEvent

  }

}


///////////////////////////////////////////////

function makeToString(val: string) {
  return function () {
    return val;
  }
}

/*

 Readme: These events always pertain. If we use TAP, we still go through these events.

 With the example of TAP in mind - tap output would get parsed, it would trigger one of these events,
 then the events would trigger the tap reporter (or non-tap reporter).

 So it could go:

 tap output from child process => suman-events => tap-output
 -or-
 tap output from child process => suman-events => suman std output

 */

let ev: ev.ISumanEvents = Object.freeze({

  // runner events
  TEST_FILE_CHILD_PROCESS_EXITED: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('TEST_FILE_CHILD_PROCESS_EXITED')
  } as ev.ISumanEvent,

  RUNNER_EXIT_CODE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_EXIT_CODE')
  } as ev.ISumanEvent,

  RUNNER_EXIT_SIGNAL: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_EXIT_SIGNAL')
  } as ev.ISumanEvent,

  RUNNER_HIT_DIRECTORY_BUT_NOT_RECURSIVE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_HIT_DIRECTORY_BUT_NOT_RECURSIVE')
  } as ev.ISumanEvent,

  RUNNER_EXIT_CODE_IS_ZERO: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_EXIT_CODE_IS_ZERO')
  } as ev.ISumanEvent,

  RUNNER_TEST_PATHS_CONFIRMATION: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_TEST_PATHS_CONFIRMATION')
  } as ev.ISumanEvent,

  RUNNER_RESULTS_TABLE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_RESULTS_TABLE')
  } as ev.ISumanEvent,

  RUNNER_RESULTS_TABLE_SORTED_BY_MILLIS: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_RESULTS_TABLE_SORTED_BY_MILLIS')
  } as ev.ISumanEvent,

  RUNNER_OVERALL_RESULTS_TABLE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_OVERALL_RESULTS_TABLE')
  } as ev.ISumanEvent,

  RUNNER_STARTED: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_STARTED')
  } as ev.ISumanEvent,

  RUNNER_ENDED: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_ENDED')
  } as ev.ISumanEvent,

  RUNNER_EXIT_CODE_GREATER_THAN_ZERO: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_EXIT_CODE_GREATER_THAN_ZERO')
  } as ev.ISumanEvent,

  RUNNER_INITIAL_SET: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_INITIAL_SET')
  } as ev.ISumanEvent,

  RUNNER_OVERALL_SET: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_OVERALL_SET')
  } as ev.ISumanEvent,

  RUNNER_ASCII_LOGO: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_ASCII_LOGO')
  } as ev.ISumanEvent,

  // perennial events
  USING_SERVER_MARKED_BY_HOSTNAME: {
    explanation: 'Using server marked by hostname, matched with a property on your "servers" property in your config.',
    toString: makeToString('USING_SERVER_MARKED_BY_HOSTNAME')
  } as ev.ISumanEvent,
  USING_FALLBACK_SERVER: {
    explanation: 'Using fallback server which is hardcoded in the suman project, with localhost and port 6969.',
    toString: makeToString('USING_FALLBACK_SERVER')
  } as ev.ISumanEvent,

  USING_DEFAULT_SERVER: {
    explanation: 'Using default server marked by "*default" on your servers property in your suman.conf.js file.',
    toString: makeToString('USING_DEFAULT_SERVER')
  } as ev.ISumanEvent,

  TEST_CASE_STUBBED: {
    explanation: 'Test case is stubbed.',
    toString: makeToString('TEST_CASE_STUBBED')
  } as ev.ISumanEvent,

  TEST_CASE_SKIPPED: {
    explanation: 'Test case is skipped.',
    toString: makeToString('TEST_CASE_SKIPPED')
  } as ev.ISumanEvent,

  TEST_CASE_PASS: {
    explanation: 'Test case has passed successfully.',
    toString: makeToString('TEST_CASE_PASS')
  } as ev.ISumanEvent,

  TEST_CASE_FAIL: {
    explanation: 'Test case has failed.',
    toString: makeToString('TEST_CASE_FAIL')
  } as ev.ISumanEvent,

  TEST_CASE_END: {
    explanation: 'Test case has ended (use TEST_CASE_PASS, TEST_CASE_STUBBED, etc, for specific status).',
    toString: makeToString('TEST_CASE_END')
  } as ev.ISumanEvent,

  FILENAME_DOES_NOT_MATCH_NONE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FILENAME_DOES_NOT_MATCH_NONE')
  } as ev.ISumanEvent,

  FILENAME_DOES_NOT_MATCH_ALL: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FILENAME_DOES_NOT_MATCH_ALL')
  } as ev.ISumanEvent,

  FILENAME_DOES_NOT_MATCH_ANY: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FILENAME_DOES_NOT_MATCH_ANY')
  } as ev.ISumanEvent,

  SUITE_SKIPPED: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('SUITE_SKIPPED')
  } as ev.ISumanEvent,

  SUITE_END: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('SUITE_END')
  } as ev.ISumanEvent,

  TEST_END: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('TEST_END')
  } as ev.ISumanEvent,

  TAP_COMPLETE: {
    explanation: 'TAP output is complete',
    toString: makeToString('TAP_COMPLETE')
  } as ev.ISumanEvent,

  FILE_IS_NOT_DOT_JS: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FILE_IS_NOT_DOT_JS')
  } as ev.ISumanEvent,

  FATAL_TEST_ERROR: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FATAL_TEST_ERROR')
  } as ev.ISumanEvent,

  USING_STANDARD_REPORTER: {
    explanation: 'A notification that suman is using the standard reporter.',
    toString: makeToString('USING_STANDARD_REPORTER')
  } as ev.ISumanEvent,

  USING_SQLITE_REPORTER: {
    explanation: 'A notification that suman is using the SQLite reporter.',
    toString: makeToString('USING_SQLITE_REPORTER')
  } as ev.ISumanEvent,

  ERRORS_ONLY_OPTION: {
    explanation: 'Errors-only option is set to true.',
    toString: makeToString('ERRORS_ONLY_OPTION')
  } as ev.ISumanEvent,

  SUMAN_VERSION: {
    explanation: 'The Suman version which is actually running on your system.',
    toString: makeToString('SUMAN_VERSION')
  } as ev.ISumanEvent,

  NODE_VERSION: {
    explanation: 'The Node.js version running in your environment.',
    toString: makeToString('NODE_VERSION')
  } as ev.ISumanEvent

});


// validate all of the above
Object.keys(ev).forEach(function (k: string) {

  const ev: ev.ISumanEvent = ev[k];
  const toStr = String(ev);
  assert(ev.explanation.length > 20, colors.red(' => Please provide a more detailed explanation for the event (' + k + ').'));

  if (toStr !== k) {
    throw new Error(colors.red(' => Suman implementation error => toString() on events object is' +
      ' not expected value for key => "' + k + '",\ntoString() val is => ' + toStr));
  }
});


export = ev;

