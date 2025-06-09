# GMO Automation
## How the files work:
client_review_automation.js: Pulls data from MongoDB, formats and saves as a csv file in the format *gmo_review_M-D.csv*

daily_email.sh: Grabs file from desktop and runs the send_email script with it as an argument

send_email: Creates an Outlook email, attaches file, and sends email

com.nico.dailyemail.plist.py: schedules daily_email script to run every day and once when loaded. *note: this is saved as a python file for commenting purposes, this file should be saved as a plist in /Library/LaunchAgents

## There are two parts to the automation. 

**1: Saving the file**

Using *cron*:

open crontab editor: crontab -e 

run the script every day at 10:30am: 30 10 * * * /opt/homebrew/bin/node /Users/nico/Desktop/gmo_automation/client_review_automation.js >> /Users/nico/Desktop/gmo_automation/cron.log 2>&1

verify crontab is active: crontab -l

*Must have homebrew, Mongosh, and MongoDB via npm installed*

**2: Sending the email**

Using *Launchr (Mac)*

load the task: launchctl load ~/Library/LaunchAgents/com.nico.dailyemail.plist

confirm it's active: launchctl list | grep com.nico.dailyemail OR launchctl list com.nico.dailyemail

stop the task: launchctl unload ~/Library/LaunchAgents/com.nico.dailyemail.plist
