#!/usr/bin/env bash

CURRENT_PATH=`realpath $0 | xargs dirname`
REAL_USER=`echo ~ | xargs basename`

sed -i "s/{USER}/$REAL_USER/g" conf/exchange.conf upload.py
mkdir -p ~/Exchange
sudo chmod 777 ~/Exchange

sudo apt-get install apache2 libapache2-mod-python
sudo cp -r $CURRENT_PATH /usr/share

cd /usr/share/upload

sudo rm -f /etc/apache2/sites-available/exchange.conf
sudo ln -s /usr/share/upload/conf/exchange.conf /etc/apache2/sites-available
sudo rm -f /etc/apache2/sites-available/upload.conf
sudo ln -s /usr/share/upload/conf/upload.conf /etc/apache2/sites-available

sudo a2ensite -q exchange upload
sudo a2enmod cgid
sudo service apache2 restart
