#!/bin/bash
# Deploy script - run on VPS after git pull
# Usage: ./deploy.sh [branch]

BRANCH=${1:-main}
APP_DIR="/home/Ecom"
PM2="$HOME/.nvm/versions/node/v22.22.0/bin/pm2"

set -e

echo "==> Pulling latest changes (branch: $BRANCH)..."
cd "$APP_DIR"
git fetch origin
git checkout "$BRANCH"
git pull origin "$BRANCH"

echo "==> Restarting PM2 process..."
if $PM2 describe ecom > /dev/null 2>&1; then
    $PM2 restart ecom
else
    $PM2 start start.sh --name ecom
fi

$PM2 save
echo "==> Deploy done."
$PM2 logs ecom --lines 5 --nostream
