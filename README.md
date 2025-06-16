# GMO Automation
## How the files work:

daily_task.sh: runs the node (client_review_automation.js) script and applescript (send_email.scpt)

client_review_automation.js: runs the mongodb query and saves it as a csv file

send_email.scpt: sends the csv file via outlook

com.nico.dailytask.plist (saved in ~/Library/LaunchAgents/): schedules task, runs it every day at set time except for weekends and Tuesdays

## Loading task via Launchr

loads task: launchctl load ~/Library/LaunchAgents/com.nico.dailytask.plist

unloads task: launchctl unload ~/Library/LaunchAgents/com.nico.dailytask.plist

check if task is active: launchctl list | grep dailytask

**Note: after making a change to plist file, unload and reload task for the change to make effect.**
