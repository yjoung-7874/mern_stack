# mern_stack
MongoDB, Express, React, NodeJS full-stack development

## env setup
### - installing NodeJS 
```
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc 
nnvm install v14.5.0
nvm use v14.5.0
node --version
```
### - installing MongoDB
by following - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
```
## installing MongoDB
sudo apt-get install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
## setting up init system (systemd) 
sudo systemctl start mongod
sudo systemctl enable mongod
```
