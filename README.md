# mern_stack
MongoDB, Express, React, NodeJS full-stack development

## env setup
### Installing NodeJS 
```
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc 
nnvm install v14.5.0
nvm use v14.5.0
node --version
```
### Installing MongoDB
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
### Setup authentication for MongoDB instance
```
## setup mongodb authentication
mongo
use db_name_to_use
db.createUser(
  {
    user: "username_to_use",
    pwd: "pwd_to_use",
    roles: [{role: "readWrite", db: "db_to_use"}]
  }
)

## restart mongodb
sudo systemctl restart mongod
```

### Setup mern_stack
```
git clone https://github.com/yjoung-7874/mern_stack
npm i
## monitoring using dev script
## (package.json : nodemon ./server/server.js --exec babel-node)
npm run dev
```
