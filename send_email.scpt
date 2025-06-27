on run argv
    set theFile to (POSIX file (item 1 of argv)) as «class furl»
    set theSubject to "GMO Client Review [Automation Test]"
    set theBody to "Attached is the GMO Client Review csv file."

    set theRecipients to {"nico.middleton@cleandns.email", "richard.hansen@cleandns.email"}

    tell application "Microsoft Outlook"
        set newMessage to make new outgoing message with properties {subject:theSubject, content:theBody}

        repeat with recipientEmail in theRecipients
            make new recipient at newMessage with properties {email address:{name:"", address:recipientEmail}}
        end repeat

        make new attachment at newMessage with properties {file:theFile}
        send newMessage
    end tell
end run
