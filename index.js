'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var process = require('suman-browser-polyfills/modules/process');
var global = require('suman-browser-polyfills/modules/global');
var assert = require("assert");
var chalk = require("chalk");
var makeToString = function (val) {
    return function () {
        return val;
    };
};
exports.events = Object.freeze({
    TEST_FILE_CHILD_PROCESS_EXITED: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('TEST_FILE_CHILD_PROCESS_EXITED')
    },
    SUMAN_CONTEXT_BLOCK: {
        explanation: "this event is called when a Suman test block has started executing it's test cases and hooks.",
        toString: makeToString('SUMAN_CONTEXT_BLOCK')
    },
    RUNNER_EXIT_CODE: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_EXIT_CODE')
    },
    RUNNER_EXIT_SIGNAL: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_EXIT_SIGNAL')
    },
    RUNNER_HIT_DIRECTORY_BUT_NOT_RECURSIVE: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_HIT_DIRECTORY_BUT_NOT_RECURSIVE')
    },
    RUNNER_EXIT_CODE_IS_ZERO: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_EXIT_CODE_IS_ZERO')
    },
    RUNNER_TEST_PATHS_CONFIRMATION: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_TEST_PATHS_CONFIRMATION')
    },
    STANDARD_TABLE: {
        explanation: 'this is the standard table that is outputted for a single node process.',
        toString: makeToString('STANDARD_TABLE')
    },
    RUNNER_RESULTS_TABLE: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_RESULTS_TABLE')
    },
    RUNNER_RESULTS_TABLE_SORTED_BY_MILLIS: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_RESULTS_TABLE_SORTED_BY_MILLIS')
    },
    RUNNER_OVERALL_RESULTS_TABLE: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_OVERALL_RESULTS_TABLE')
    },
    RUNNER_SAYS_FILE_HAS_JUST_STARTED_RUNNING: {
        explanation: 'Runner has just launched this supposed test file as a child process.',
        toString: makeToString('RUNNER_SAYS_FILE_HAS_JUST_STARTED_RUNNING')
    },
    RUNNER_STARTED: {
        explanation: 'Runner has started; this event fires before any test child processes are started.',
        toString: makeToString('RUNNER_STARTED')
    },
    RUNNER_ENDED: {
        explanation: 'Runner has ended; this event fires after all child processes have exited.',
        toString: makeToString('RUNNER_ENDED')
    },
    RUNNER_EXIT_CODE_GREATER_THAN_ZERO: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_EXIT_CODE_GREATER_THAN_ZERO')
    },
    RUNNER_INITIAL_SET: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_INITIAL_SET')
    },
    RUNNER_OVERALL_SET: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_OVERALL_SET')
    },
    RUNNER_ASCII_LOGO: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('RUNNER_ASCII_LOGO')
    },
    USING_SERVER_MARKED_BY_HOSTNAME: {
        explanation: 'Using server marked by hostname, matched with a property on your "servers" property in your config.',
        toString: makeToString('USING_SERVER_MARKED_BY_HOSTNAME')
    },
    USING_FALLBACK_SERVER: {
        explanation: 'Using fallback server which is hardcoded in the suman project, with localhost and port 6969.',
        toString: makeToString('USING_FALLBACK_SERVER')
    },
    USING_DEFAULT_SERVER: {
        explanation: 'Using default server marked by "*default" on your servers property in your suman.conf.js file.',
        toString: makeToString('USING_DEFAULT_SERVER')
    },
    TEST_CASE_STUBBED: {
        explanation: 'Test case is stubbed.',
        toString: makeToString('TEST_CASE_STUBBED')
    },
    TEST_CASE_SKIPPED: {
        explanation: 'Test case is skipped.',
        toString: makeToString('TEST_CASE_SKIPPED')
    },
    TEST_CASE_PASS: {
        explanation: 'Test case has passed successfully.',
        toString: makeToString('TEST_CASE_PASS')
    },
    TEST_CASE_FAIL: {
        explanation: 'Test case has failed.',
        toString: makeToString('TEST_CASE_FAIL')
    },
    TEST_CASE_END: {
        explanation: 'Test case has ended (use TEST_CASE_PASS, TEST_CASE_STUBBED, etc, for specific status).',
        toString: makeToString('TEST_CASE_END')
    },
    FILENAME_DOES_NOT_MATCH_NONE: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('FILENAME_DOES_NOT_MATCH_NONE')
    },
    FILENAME_DOES_NOT_MATCH_ALL: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('FILENAME_DOES_NOT_MATCH_ALL')
    },
    FILENAME_DOES_NOT_MATCH_ANY: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('FILENAME_DOES_NOT_MATCH_ANY')
    },
    SUITE_SKIPPED: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('SUITE_SKIPPED')
    },
    SUITE_END: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('SUITE_END')
    },
    TEST_END: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('TEST_END')
    },
    TAP_COMPLETE: {
        explanation: 'TAP output is complete',
        toString: makeToString('TAP_COMPLETE')
    },
    FILE_IS_NOT_DOT_JS: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('FILE_IS_NOT_DOT_JS')
    },
    FATAL_TEST_ERROR: {
        explanation: 'runner is started, fires before any test child processes are started.',
        toString: makeToString('FATAL_TEST_ERROR')
    },
    USING_STANDARD_REPORTER: {
        explanation: 'A notification that suman is using the standard reporter.',
        toString: makeToString('USING_STANDARD_REPORTER')
    },
    USING_SQLITE_REPORTER: {
        explanation: 'A notification that suman is using the SQLite reporter.',
        toString: makeToString('USING_SQLITE_REPORTER')
    },
    ERRORS_ONLY_OPTION: {
        explanation: 'Errors-only option is set to true.',
        toString: makeToString('ERRORS_ONLY_OPTION')
    },
    SUMAN_VERSION: {
        explanation: 'The Suman version which is actually running on your system.',
        toString: makeToString('SUMAN_VERSION')
    },
    NODE_VERSION: {
        explanation: 'The Node.js version running in your environment.',
        toString: makeToString('NODE_VERSION')
    },
    META_TEST_ENDED: {
        explanation: 'An event that respresents the very end of a test, for testing Suman itself.',
        toString: makeToString('META_TEST_ENDED')
    },
});
Object.keys(exports.events).forEach(function (k) {
    var e = exports.events[k];
    var toStr = String(e);
    assert(e.explanation.length > 20, chalk.red(' => Please provide a more detailed explanation for the event (' + k + ').'));
    if (toStr !== k) {
        throw new Error(chalk.red(' => Suman implementation error => toString() on events object is' +
            ' not expected value for key => "' + k + '",\ntoString() val is => ' + toStr));
    }
});
