#!/usr/bin/env python
#coding: utf8

import cgitb
cgitb.enable()

import cgi, os
def download(item):
  name = os.path.basename(item.filename)
  path = os.path.join('/home/dhuang/Exchange', name)
  if os.path.exists(path): return 'fail for %s, caused by name conflicts' % name
  out = open(path, 'w')
  out.write(item.file.read())
  out.close()
  os.chmod(path, 0x777)
  return 'successful for %s!' % name

print 'Content-Type: text/html\n\n'
form = cgi.FieldStorage()
files = form['files']

if isinstance(files, list):
  for item in files: print download(item) + '<br/>'
else: print download(files) + '<br/>'
