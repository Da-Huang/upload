#!/usr/bin/env bash

CURRENT_PATH=`realpath $0 | xargs dirname`

sed -i "s/{USER}/$USER/g" conf/exchange.conf upload.py
mkdir ~/Exchange
sudo chmod 777 ~/Exchange

sudo apt-get install apache2 libapache2-mod-python
sudo cp -r CURRENT_PATH /usr/share

cd /usr/share/upload

sudo rm /etc/apache2/sites-available/exchange.conf
sudo rm /etc/apache2/sites-available/upload.conf
sudo ln -s /usr/share/upload/conf/*.conf /etc/apache2/sites-available

sudo a2ensite exchange upload
sudo a2enmod cgid
sudo service apache2 restart
