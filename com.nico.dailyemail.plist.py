'''
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.nico.dailyemail</string>

    <key>ProgramArguments</key>
    <array>
        <string>/Users/nico/Desktop/gmo_automation/daily_email.sh</string>
    </array>

    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>14</integer>
        <key>Minute</key>
        <integer>10</integer>
    </dict>

    <key>StandardOutPath</key>
    <string>/Users/nico/Library/Logs/daily_email.out</string>

    <key>StandardErrorPath</key>
    <string>/Users/nico/Library/Logs/daily_email.err</string>

    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>

'''