#!/usr/bin/env bash
set -euo pipefail

UTM_DIR="$HOME/Library/Containers/com.utmapp.UTM/Data/Documents"

if [ ! -d "$UTM_DIR" ]; then
  echo "❌ UTM VM directory not found: $UTM_DIR"
  exit 1
fi

echo "📦 Checking UTM VM sizes under: $UTM_DIR"
echo

# Collect sizes and sort
du -sh "$UTM_DIR"/*.utm 2>/dev/null | sort -hr | awk '
BEGIN {
  printf "%-40s %10s\n", "VM Name", "Size"
  print "---------------------------------------- ----------"
}
{
  size=$1
  sub(/.*\//, "", $2)
  name=$2
  printf "%-40s %10s\n", name, size
}'