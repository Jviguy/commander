"use strict";

class Command {

    /**
     * @type CommandContext
     */
    static context

    /**
     * @author Jviguy
     *
     * @abstract
     *
     * @param {CommandContext} ctx - the command context to be executed with
     */
    async Execute(ctx){}
}

module.exports = Command