const a3ldb = require("arma3-life-db")
//Setup connection to database
a3ldb.Config({
    IP: "127.0.0.1",
    Port: "3306",
    Database: "maldenlife",
    User: "testy",
    Pass: "123321"
})

//Your local code should be = const a3l_discord_bot = require("arma3-life-discord-bot")
const a3l_discord_bot = require("../lib/index")
//Start up discord bot
a3l_discord_bot.Config({
    Token: "your token"
})