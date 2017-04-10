declare namespace ev {
    type TSumanToString = () => string;
    interface ISumanEvent extends String {
        explanation: string;
        toString: TSumanToString;
    }
    interface ISumanEvents {
        [key: string]: any;
        TEST_FILE_CHILD_PROCESS_EXITED: ISumanEvent;
        RUNNER_EXIT_CODE: ISumanEvent;
        RUNNER_EXIT_SIGNAL: ISumanEvent;
        RUNNER_HIT_DIRECTORY_BUT_NOT_RECURSIVE: ISumanEvent;
        RUNNER_EXIT_CODE_IS_ZERO: ISumanEvent;
        RUNNER_TEST_PATHS_CONFIRMATION: ISumanEvent;
        RUNNER_RESULTS_TABLE: ISumanEvent;
        RUNNER_RESULTS_TABLE_SORTED_BY_MILLIS: ISumanEvent;
        RUNNER_OVERALL_RESULTS_TABLE: ISumanEvent;
        RUNNER_STARTED: ISumanEvent;
        RUNNER_ENDED: ISumanEvent;
        RUNNER_EXIT_CODE_GREATER_THAN_ZERO: ISumanEvent;
        RUNNER_INITIAL_SET: ISumanEvent;
        RUNNER_OVERALL_SET: ISumanEvent;
        RUNNER_ASCII_LOGO: ISumanEvent;
        USING_SERVER_MARKED_BY_HOSTNAME: ISumanEvent;
        USING_FALLBACK_SERVER: ISumanEvent;
        USING_DEFAULT_SERVER: ISumanEvent;
        TEST_CASE_STUBBED: ISumanEvent;
        TEST_CASE_SKIPPED: ISumanEvent;
        TEST_CASE_PASS: ISumanEvent;
        TEST_CASE_FAIL: ISumanEvent;
        TEST_CASE_END: ISumanEvent;
        FILENAME_DOES_NOT_MATCH_NONE: ISumanEvent;
        FILENAME_DOES_NOT_MATCH_ALL: ISumanEvent;
        FILENAME_DOES_NOT_MATCH_ANY: ISumanEvent;
        SUITE_SKIPPED: ISumanEvent;
        SUITE_END: ISumanEvent;
        TEST_END: ISumanEvent;
        TAP_COMPLETE: ISumanEvent;
        FILE_IS_NOT_DOT_JS: ISumanEvent;
        FATAL_TEST_ERROR: ISumanEvent;
        USING_STANDARD_REPORTER: ISumanEvent;
        ERRORS_ONLY_OPTION: ISumanEvent;
        SUMAN_VERSION: ISumanEvent;
        NODE_VERSION: ISumanEvent;
    }
}
declare let ev: ev.ISumanEvents;
export = ev;
