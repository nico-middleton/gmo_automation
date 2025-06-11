#!/bin/bash

# Set PATH for Node
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

# Set date
DATE=$(date +%-m-%-d)
FILE="/Users/nico/Desktop/gmo_automation/gmo_review_${DATE}.csv"
SCRIPT="/Users/nico/Desktop/gmo_automation/send_email.scpt"

# Run Node script to generate CSV
/opt/homebrew/bin/node /Users/nico/Desktop/gmo_automation/client_review_automation.js

# Send the email via AppleScript
/usr/bin/osascript "$SCRIPT" "$FILE"
