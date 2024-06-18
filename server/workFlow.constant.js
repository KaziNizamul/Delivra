const WORKFLOW_CONSTANT = {
  EMAIL: {
    FAILED_TO_SEND_EMAIL: 'Failed to send Email',
    EMAIL_SENT_SUCCESSFULLY: 'Email sent successfully',
    LAST_CALL_REMAINDER: `Last call. Don\'t forget to register for tomorrow\'s webinar`,
  },
  SMS: {
    FAILED_TO_SEND_SMS: 'Failed to send SMS',
    SMS_SENT_SUCCESSFULLY: 'SMS sent successfully',
    REMINDER_MSG: `Hi, Marcy! \n The Webinar starts tomorrow at 11 AM. Will we see you there? \n Here is your link https://wbnr.com`,
  },
  WORKFLOW_TEST_PASSED: 'Workflow successfully tested',
};

module.exports = { WORKFLOW_CONSTANT };
