#!/bin/bash

PROJECT='SoGive'
TARGET='heppner.soda.sh'
SSHCOMMAND="ssh winterwell@$TARGET"
TARGETDIR='/home/winterwell/SoGive'
GITSHORTHAND="git --git-dir=$TARGETDIR/.git/ --work-tree=$TARGETDIR"

printf "\nTelling the server to update it's $PROJECT git repo\n"
printf "\t> Garbage Collecting...\n"
$SSHCOMMAND "$GITSHORTHAND gc --prune=now"
printf "\t> Pulling Origin...\n"
$SSHCOMMAND "$GITSHORTHAND pull origin master"
printf "\t> Resetting Files to version held on github\n"
$SSHCOMMAND "$GITSHORTHAND reset --hard FETCH_HEAD"

printf "\t> Optimising Images...\n"
$SSHCOMMAND "optipng $TARGETDIR/webroot/img/*.png"
$SSHCOMMAND "jpegoptim $TARGETDIR/webroot/img/*.jpg"
$SSHCOMMAND "jpegoptim $TARGETDIR/webroot/img/*.jpeg"

printf "\t> Setting permissions on the image files\n"
$SSHCOMMAND "chmod 766 $TARGETDIR/webroot/img/*.png"
$SSHCOMMAND "chmod 766 $TARGETDIR/webroot/img/*.jpg"
$SSHCOMMAND "chmod 766 $TARGETDIR/webroot/img/*.jpeg"

printf "\y> Converting Markdown to HTML...\n"
$SSHCOMMAND 'wget -cO - "https://www.winterwell.com/software/downloads/jerbil-all.jar" >> /home/winterwell/jerbil/jerbil-all.jar'
$SSHCOMMAND "cd /home/winterwell/jerbil/ && java -cp jerbil-all.jar Jerbil $TARGETDIR"

printf "\n$PROJECT Website has now been updated\n"