#!/usr/bin/env bash

sudo a2dissite -q exchange upload
sudo service apache2 reload
sudo unlink /etc/apache2/sites-available/exchange.conf
sudo unlink /etc/apache2/sites-available/upload.conf
sudo rm -rf /usr/share/upload
