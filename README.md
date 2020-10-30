# arma3-life-discord-bot
Creates a discord bot that can view various types of information for your life's database on arma 3.

## Features
- Retrieve information on a specific player

## Commands
- +help [screenshot](https://i.gyazo.com/fcd667de22ee93aa5f0df994022fb02c.png)
- +info (playerid/steam64id) [screenshot](https://i.gyazo.com/cc4e9f03408f4944a6284fec65e60b31.png)

## Requirements
- [Node.JS](https://nodejs.dev/)
- NPM - Installed by default with Node.JS
- [Discord Bot Token](https://discord.com/developers/applications)
- [a3ldb](https://www.npmjs.com/package/arma3-life-db)

## Configuration
### Package
Add this to the top of your file
```javascript
const a3l_discord_bot = require("arma3-life-discord-bot")
```

### Bot setup
Add this to your code.<br />
Token can be found on [discord.com](https://discord.com/developers/applications) under your application's bot section.<br />
Make sure you have [a3ldb](https://www.npmjs.com/package/arma3-life-db) configured so the bot can connect to your database!
```javascript
a3l_discord_bot.Config({
    Token: "your token"
})
```

## Functions
### a3l_discord_bot.Config(Config)
- This function configs the bot and starts it up. <br />
- You must pass an object as a parameter adn the values must be strings.
#### Object Values
- "Token" (string) - The token found under your application's bot section on [discord.com](https://discord.com/developers/applications)

## To-Do List
- Hardcode command to update cash,bank,levels,arrest, and blacklist on player
- Hardcode command to view total money,vehicles,houses, and gangs