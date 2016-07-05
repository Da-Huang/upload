#!/usr/bin/env bash

sudo rm -r /usr/share/upload
sudo a2dissite exchange upload
sudo rm /etc/apache2/sites-available/exchange.conf
sudo rm /etc/apache2/sites-available/upload.conf
