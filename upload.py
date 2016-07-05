#!/usr/bin/env python
#coding: utf8

import cgitb
cgitb.enable()

import cgi, os

def Download(item):
  name = os.path.basename(item.filename)
  path = os.path.join('/home/{USER}/Exchange', name)
  if os.path.exists(path):
    return 'Fail for %s, caused by name conflicts' % name
  with open(path, 'w') as out:
    out.write(item.file.read())
    os.chmod(path, 0x777)
  return 'Successful for %s!' % name

print 'Content-Type: text/html\n\n'
form = cgi.FieldStorage()
files = form['file']

if isinstance(files, list):
  for item in files:
    print Download(item) + '<br />'
else:
  print Download(files) + '<br />'
