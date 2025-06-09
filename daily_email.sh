#!/bin/bash

DATE=$(date +%-m-%-d)
FILE="/Users/nico/Desktop/gmo_automation/gmo_review_${DATE}.csv"
SCRIPT="/Users/nico/Desktop/gmo_automation/send_email"

/usr/bin/osascript "$SCRIPT" "$FILE"
