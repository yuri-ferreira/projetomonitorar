#!/bin/bash

discordkey=""
log="/var/log/monitoramento.log"
data=$(date "+%d-%m %H:%M:%S")

if systemctl is-active nginx > /dev/null; then
  mensagem="$data : Site está no ar"
else
  mensagem="$data : Site está fora do ar"

  curl -H "Content-Type: application/json" \
     -X POST \
     -d "{\"content\":\"$mensagem\"}" \
     "$discordkey"
fi

echo "$mensagem" | tee -a "$log"

