"use strict";

class CommandContext {

    /**
     * @type TextChannel|DMChannel|NewsChannel
     */
    Channel

    /**
     * @type User
     */
    Author

    /**
     * @type string[]
     */
    Args

    /**
     * @type Guild
     */
    OriginGuild

    /**
     * @type Message
     */
    OriginMessage

    /**
     *
     * @param {TextChannel | DMChannel | NewsChannel} channel
     * @param {User} author
     * @param {string[]} args
     * @param {Guild} guild
     * @param {Message} message
     */
    constructor(channel, author, args, guild, message) {
        this.Channel = channel;
        this.Author = author;
        this.Args = args
        this.OriginGuild = guild;
        this.OriginMessage = message;
    }


}

module.exports = CommandContext