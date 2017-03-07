'use strict';

//core
import assert = require('assert');

//npm
const colors = require('colors/safe');


function makeToString (val: string) {
  return function () {
    return val;
  }
}


/*

 Readme: These events always pertain. If we use tap, we still go through these events.

 With the example of TAP in mind - tap output would get parsed, it would trigger one of these events,
 then the events would trigger the tap reporter (or non-tap reporter).

 So it could go:

 tap output from child process => suman-events => tap-output
 -or-
 tap output from child process => suman-events => suman std output

*/

const events : ISumanEvents = Object.freeze({

  // runner events
  TEST_FILE_CHILD_PROCESS_EXITED:  {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('TEST_FILE_CHILD_PROCESS_EXITED')
  } as ISumanEvent,

  RUNNER_EXIT_CODE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_EXIT_CODE')
  } as ISumanEvent,

  RUNNER_EXIT_SIGNAL: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_EXIT_SIGNAL')
  } as ISumanEvent,

  RUNNER_HIT_DIRECTORY_BUT_NOT_RECURSIVE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_HIT_DIRECTORY_BUT_NOT_RECURSIVE')
  } as ISumanEvent,

  RUNNER_EXIT_CODE_IS_ZERO: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_EXIT_CODE_IS_ZERO')
  } as ISumanEvent,

  RUNNER_TEST_PATHS_CONFIRMATION: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_TEST_PATHS_CONFIRMATION')
  } as ISumanEvent,

  RUNNER_RESULTS_TABLE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_RESULTS_TABLE')
  } as ISumanEvent,

  RUNNER_RESULTS_TABLE_SORTED_BY_MILLIS: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_RESULTS_TABLE_SORTED_BY_MILLIS')
  } as ISumanEvent,

  RUNNER_OVERALL_RESULTS_TABLE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_OVERALL_RESULTS_TABLE')
  } as ISumanEvent,

  RUNNER_STARTED: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_STARTED')
  } as ISumanEvent,

  RUNNER_ENDED: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_ENDED')
  } as ISumanEvent,

  RUNNER_EXIT_CODE_GREATER_THAN_ZERO: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_EXIT_CODE_GREATER_THAN_ZERO')
  } as ISumanEvent,

  RUNNER_INITIAL_SET: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_INITIAL_SET')
  } as ISumanEvent,

  RUNNER_OVERALL_SET: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_OVERALL_SET')
  } as ISumanEvent,

  RUNNER_ASCII_LOGO: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('RUNNER_ASCII_LOGO')
  } as ISumanEvent,

  // perennial events
  USING_SERVER_MARKED_BY_HOSTNAME: {
    explanation: 'Using server marked by hostname, matched with a property on your "servers" property in your config.',
    toString: makeToString('USING_SERVER_MARKED_BY_HOSTNAME')
  } as ISumanEvent,
  USING_FALLBACK_SERVER: {
    explanation: 'Using fallback server which is hardcoded in the suman project, with localhost and port 6969.',
    toString: makeToString('USING_FALLBACK_SERVER')
  } as ISumanEvent,

  USING_DEFAULT_SERVER: {
    explanation: 'Using default server marked by "*default" on your servers property in your suman.conf.js file.',
    toString: makeToString('USING_DEFAULT_SERVER')
  } as ISumanEvent,

  TEST_CASE_STUBBED: {
    explanation: 'Test case is stubbed.',
    toString: makeToString('TEST_CASE_STUBBED')
  } as ISumanEvent,

  TEST_CASE_SKIPPED: {
    explanation: 'Test case is skipped.',
    toString: makeToString('TEST_CASE_SKIPPED')
  } as ISumanEvent,

  TEST_CASE_PASS: {
    explanation: 'Test case has passed successfully.',
    toString: makeToString('TEST_CASE_PASS')
  } as ISumanEvent,

  TEST_CASE_FAIL: {
    explanation: 'Test case has failed.',
    toString: makeToString('TEST_CASE_FAIL')
  } as ISumanEvent,

  TEST_CASE_END: {
    explanation: 'Test case has ended (use TEST_CASE_PASS, TEST_CASE_STUBBED, etc, for specific status).',
    toString: makeToString('TEST_CASE_END')
  } as ISumanEvent,

  FILENAME_DOES_NOT_MATCH_NONE: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FILENAME_DOES_NOT_MATCH_NONE')
  } as ISumanEvent,

  FILENAME_DOES_NOT_MATCH_ALL: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FILENAME_DOES_NOT_MATCH_ALL')
  } as ISumanEvent,

  FILENAME_DOES_NOT_MATCH_ANY: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FILENAME_DOES_NOT_MATCH_ANY')
  } as ISumanEvent,

  SUITE_SKIPPED: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('SUITE_SKIPPED')
  } as ISumanEvent,

  SUITE_END: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('SUITE_END')
  } as ISumanEvent,

  TEST_END: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('TEST_END')
  } as ISumanEvent,

  TAP_COMPLETE: {
    explanation: 'TAP output is complete',
    toString: makeToString('TAP_COMPLETE')
  } as ISumanEvent,

  FILE_IS_NOT_DOT_JS: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FILE_IS_NOT_DOT_JS')
  } as ISumanEvent,

  FATAL_TEST_ERROR: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('FATAL_TEST_ERROR')
  } as ISumanEvent,

  USING_STANDARD_REPORTER: {
    explanation: 'runner is started, fires before any test child processes are started.',
    toString: makeToString('USING_STANDARD_REPORTER')
  } as ISumanEvent,

  ERRORS_ONLY_OPTION:{
    explanation: 'Errors-only option is set to true.',
    toString: makeToString('ERRORS_ONLY_OPTION')
  } as ISumanEvent,

  SUMAN_VERSION:{
    explanation: 'The Suman version which is actually running on your system.',
    toString: makeToString('SUMAN_VERSION')
  } as ISumanEvent,

  NODE_VERSION:{
    explanation: 'The Node.js version running in your environment.',
    toString: makeToString('NODE_VERSION')
  } as ISumanEvent

});


// validate all of the above
Object.keys(events).forEach(function (k: string) {

  const ev : ISumanEvent = events[ k ];
  const toStr = String(ev);
  assert(ev.explanation.length > 20, colors.red(' => Please provide a more detailed explanation for the event (' + k + ').'));

  if (toStr !== k) {
    throw new Error(colors.red(' => Suman implementation error => toString() on events object is' +
      ' not expected value for key => "' + k + '",\ntoString() val is => ' + toStr));
  }
});


export = events;

