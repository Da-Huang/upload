#!/usr/bin/env bash

CURRENT_PATH=`realpath $0 | xargs dirname`

#sudo apt-get install apache2 libapache2-mod-python

sed -i "s/{USER}/$USER/g" conf/exchange.conf upload.py

sudo rm /etc/apache2/sites-available/exchange.conf
sudo rm /etc/apache2/sites-available/upload.conf
sudo ln -s $CURRENT_PATH/conf/*.conf /etc/apache2/sites-available

#sudo a2ensite exchange upload
#sudo a2enmod cgid
#sudo service apache2 restart
