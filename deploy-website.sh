#!/usr/bin/env bash
set -euo pipefail

# End-to-end deploy:
# 1) Build static export from website3
# 2) Copy export output into website-deploy
# 3) Push website-deploy content to target GitHub Pages repository

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="${PROJECT_ROOT:-$SCRIPT_DIR}"
APP_DIR="${APP_DIR:-$PROJECT_ROOT/website3}"
OUT_DIR="${OUT_DIR:-$APP_DIR/out}"
DEPLOY_DIR="${DEPLOY_DIR:-$PROJECT_ROOT/website-deploy}"
TARGET_REPO_URL="${TARGET_REPO_URL:-https://github.com/gokaycetinn/Website.git}"
COMMIT_MESSAGE="${COMMIT_MESSAGE:-Deploy website3 to GitHub Pages}"

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: required command not found: $1"
    exit 1
  fi
}

require_cmd git
require_cmd rsync
require_cmd npm
require_cmd mktemp

if [[ ! -d "$APP_DIR" ]]; then
  echo "Error: app directory not found: $APP_DIR"
  exit 1
fi

echo "Installing locked dependencies in website3..."
cd "$APP_DIR"
npm ci

echo "Building static export from website3..."
npm run build

if [[ ! -d "$OUT_DIR" ]]; then
  echo "Error: static export output not found: $OUT_DIR"
  exit 1
fi

mkdir -p "$DEPLOY_DIR"
echo "Syncing build output to website-deploy..."
rsync -av --delete "$OUT_DIR/" "$DEPLOY_DIR/"

# GitHub Pages sometimes mishandles paths with Jekyll processing.
touch "$DEPLOY_DIR/.nojekyll"

echo "Preparing temporary clone for push..."
WORK_DIR="$(mktemp -d "${TMPDIR:-/tmp}/website-deploy-push.XXXXXX")"
cleanup() {
  rm -rf -- "$WORK_DIR"
}
trap cleanup EXIT
git clone "$TARGET_REPO_URL" "$WORK_DIR"

echo "Syncing website-deploy to target repository root..."
rsync -av --delete --exclude='.git/' "$DEPLOY_DIR/" "$WORK_DIR/"

cd "$WORK_DIR"
git add -A

if git diff --cached --quiet; then
  echo "No changes to commit. Repository is already up to date."
  exit 0
fi

echo "Creating commit: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$CURRENT_BRANCH" == "HEAD" ]]; then
  echo "Error: detached HEAD state. Cannot determine push branch."
  exit 1
fi

echo "Pushing to origin/$CURRENT_BRANCH"
git push origin "$CURRENT_BRANCH"

echo "Done."
echo "Site should be available at: https://gokaycetinn.github.io/Website/"

# Bu script şunları otomatik yapıyor:
# website3 içinde bağımlılıkları kuruyor
# Next.js static export build alıyor
# Çıktıyı website-deploy klasörüne senkronluyor
# website-deploy içeriğini hedef repoya pushluyor
# Sonunda yayın adresini yazdırıyor:
# https://gokaycetinn.github.io/Website/

# Çalıştırma:
# Proje köküne geç
# cd /Users/gokay/Desktop/Gokay/react-site

# Scripti çalıştır
# ./deploy-website.sh
