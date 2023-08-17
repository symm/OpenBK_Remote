#!/bin/bash

TEMPLATE=$(cat template.html)
JS=$(cat template.js)

echo "var newContent = \`$TEMPLATE\`;$JS" > dist/startup.js
