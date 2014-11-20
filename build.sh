#!/bin/bash

key=$1
port=4000

if [ $#  -ne  0 ]
then
  curl "http://api.meetup.com/Storrs-Web-Development-Meetup?key=${key}" | json2yaml > _config.yml;
  cat _config.more.yml >> _config.yml;
fi

if [ $(uname -s) == "Darwin" ]
then
  open=open
else
  open=xdg-open
fi

jekyll build;
$open http://localhost:$port/;
(cd _site && python -m SimpleHTTPServer $port);
