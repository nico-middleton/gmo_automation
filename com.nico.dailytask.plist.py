'''
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.nico.dailytask</string>

    <key>ProgramArguments</key>
    <array>
        <string>/Users/nico/Desktop/gmo_automation/daily_task.sh</string>
    </array>

<key>StartCalendarInterval</key>
<array>
        <dict>
            <key>Hour</key>
            <integer>15</integer>
            <key>Minute</key>
            <integer>15</integer>
            <key>Weekday</key>
            <integer>2</integer> <!-- Monday -->
    </dict>
    <dict>
        <key>Hour</key>
        <integer>15</integer>
        <key>Minute</key>
        <integer>15</integer>
        <key>Weekday</key>
        <integer>4</integer> <!-- Wednesday -->
    </dict>
    <dict>
        <key>Hour</key>
        <integer>15</integer>
        <key>Minute</key>
        <integer>15</integer>
        <key>Weekday</key>
        <integer>5</integer> <!-- Thursday -->
    </dict>
    <dict>
        <key>Hour</key>
        <integer>15</integer>
        <key>Minute</key>
        <integer>15</integer>
        <key>Weekday</key>
        <integer>6</integer> <!-- Friday -->
    </dict>
</array>


    <key>StandardOutPath</key>
    <string>/Users/nico/Library/Logs/daily_task.out</string>

    <key>StandardErrorPath</key>
    <string>/Users/nico/Library/Logs/daily_task.err</string>

    <key>RunAtLoad</key>
    <false/>
</dict>
</plist>

'''