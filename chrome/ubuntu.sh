#!/bin/bash
#vsh termina
CONTAINER_NAME="sought-foal"
USER_NAME="user"
USER_PASS="user"

lxc launch ubuntu:18.04 $CONTAINER_NAME -s default

sleep 5

lxc exec $CONTAINER_NAME -- bash -c "useradd -m $USER_NAME && echo '$USER_NAME:$USER_PASS' | chpasswd && usermod -aG sudo $USER_NAME"

lxc exec $CONTAINER_NAME -- su - $USER_NAME
