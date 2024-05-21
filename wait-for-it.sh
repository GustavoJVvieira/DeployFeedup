#!/usr/bin/env bash
# wait-for-it.sh

set -e

host="$1"
shift
cmd="$@"

until nc -z "$host" 5432; do
  echo "Waiting for $host:5432..."
  sleep 1
done

>&2 echo "$host:5432 is up - executing command"
exec $cmd