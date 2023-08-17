#!/bin/bash

TEMPLATE=$(cat index.html)
JS=$(cat index.js)

echo "var newContent = \`$TEMPLATE\`;$JS" > startup.js
