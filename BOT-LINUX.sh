#!/bin/sh

echo "1. INSTALL"
echo "2. FIX"
echo "3. START"
echo "Pick one (start is default): "
read INPUT

case $INPUT in
  1) 
    echo "Installing... "
    npm i
    ;;
  2)
    echo "Audit fix..."
    npm audit fix --force
    ;;
  3)
    echo "Starting..."
    node index.js
    ;;
  *)
    node index.js
    ;;
esac
done
