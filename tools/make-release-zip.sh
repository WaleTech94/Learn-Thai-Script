#!/usr/bin/env sh
set -eu

ROOT=$(git rev-parse --show-toplevel)
VERSION=v6.0.0
OUT_DIR="$ROOT/dist"
OUT="$OUT_DIR/aan-thai-$VERSION-source.zip"

cd "$ROOT"
mkdir -p "$OUT_DIR"

if ! git diff --quiet || ! git diff --cached --quiet; then
  printf '%s\n' "warning: tracked working-tree changes are not included; git archive packages HEAD." >&2
fi

git archive --format=zip --output="$OUT" HEAD
printf 'wrote %s\n' "$OUT"
