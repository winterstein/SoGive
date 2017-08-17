#!/bin/bash

PROJECT='SoGive'
TARGET='heppner.soda.sh'
SSHCOMMAND="ssh winterwell@$TARGET"
TARGETDIR='/home/winterwell/SoGive'
GITSHORTHAND="git --git-dir=$TARGETDIR/.git/ --work-tree=$TARGETDIR"

echo -e "Telling the server to update it's $PROJECT git repo"
echo -e "> Garbage Collecting..."
$SSHCOMMAND "$GITSHORTHAND gc --prune=now"
echo -e "> Pulling Origin..."
$SSHCOMMAND "$GITSHORTHAND pull origin master"
echo -e "> Resetting Files to version held on github"
$SSHCOMMAND "$GITSHORTHAND reset --hard FETCH_HEAD"
echo -e ""

echo -e "> Optimising Images..."
$SSHCOMMAND "optipng $TARGETDIR/webroot/img/*.png"
$SSHCOMMAND "jpegoptim $TARGETDIR/webroot/img/*.jpg"
$SSHCOMMAND "jpegoptim $TARGETDIR/webroot/img/*.jpeg"
echo -e ""

echo -e "> Converting Markdown to HTML..."
$SSHCOMMAND "cd /home/winterwell/jerbil/ && java -cp jerbil.jar:lib/* Jerbil $TARGETDIR"
echo -e ""

echo -e "$PROJECT Website has now been updated"