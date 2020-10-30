const { Client, MessageEmbed } = require('discord.js')
const a3ldb = require("arma3-life-db")
const moment = require("moment")
module.exports.Config = (Config) => {
    try {
        return new Promise((resolve, reject) => {
            if (typeof Config !== "object") resolve("Config must be an object and the key values must be strings.")
            else {
                const client = new Client()

                client.on('message', async message => {
                    //+info command
                    if (/\+info\s+\d+/.test(message)) {
                        const regex = /\+info\s+(\d+)/.exec(message)
                        const pid = regex[1].toString()
                        const Name = await a3ldb.Get.Custom("players", "name", "pid", pid)
                        if (/No info found for.+/.test(Name)) {
                            const embed = new MessageEmbed()
                                .setTitle(`User not found`)
                                .setColor(0xff0000)
                                .setDescription("Couldn't find user in database.")
                            // Send the embed to the same channel as the message
                            message.channel.send(embed)
                        }
                        else {
                            const UID = await a3ldb.Get.Custom("players", "uid", "pid", pid)
                            const Money = await a3ldb.Get.Custom("players", "cash", "pid", pid) + await a3ldb.Get.Custom("players", "bankacc", "pid", pid)
                            const Cop_Level = await a3ldb.Get.Custom("players", "coplevel", "pid", pid)
                            const Medic_Level = await a3ldb.Get.Custom("players", "mediclevel", "pid", pid)
                            const Donator_Level = await a3ldb.Get.Custom("players", "donorlevel", "pid", pid)
                            const First_Joined = await moment(await a3ldb.Get.Custom("players", "insert_time", "pid", pid)).format('YYYY-MM-DD hh:mmA')
                            const Last_Joined = await moment(await a3ldb.Get.Custom("players", "last_seen", "pid", pid)).format('YYYY-MM-DD hh:mmA')
                            const Arrested = await a3ldb.Get.Custom("players", "arrested", "pid", pid)
                            let isArrested = false
                            if (Arrested === 1) isArrested = true
                            const Blacklisted = await a3ldb.Get.Custom("players", "blacklist", "pid", pid)
                            let isBlacklisted = false
                            if (Blacklisted === 1) isBlacklisted = true
                            const embed = new MessageEmbed()
                                .setTitle(`${Name}'s Infomation`)
                                .setColor(0x00FFFF)
                                .setDescription(`Database UID: ${UID}
                                    Steam64ID: ${pid}
                                    Total Money: $${Money.toLocaleString()}
                                    Cop Level: ${Cop_Level}
                                    Medic Level: ${Medic_Level}
                                    Donator Level: ${Donator_Level}
                                    Arrested: ${isArrested}
                                    Blacklisted: ${isBlacklisted}
                                    First Joined: ${First_Joined}
                                    Last Joined: ${Last_Joined}`)
                            // Send the embed to the same channel as the message
                            message.channel.send(embed)
                        }
                    }
                    //+help command
                    else if (/\+help/.test(message)) {
                        const embed = new MessageEmbed()
                            .setTitle(`Bots's Help Information`)
                            .setColor(0xeeff00)
                            .setDescription(`List of commands: +help
                                Player Info: +info (playerid/steam64id)`)
                        // Send the embed to the same channel as the message
                        message.channel.send(embed)
                    }
                })
    
                client.login(Config.Token)
            }
        })
    } catch (error) {
        throw error
    }
}