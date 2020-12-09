'use strict';

const CommandContext = require("./CommandContext.js")

class CommandUtils {

    /**
     * @var {RegExp} CommandRegex - the best command prompt regex i could find
     *
     * @type {RegExp} CommandRegex the best command prompt regex i could find lmao
     */
    static CommandRegex = new RegExp(/("[^"]+"|[^\s"]+)/gm)

    /**
     * @author Jviguy
     *
     * @param {string} strippedcmd - the string of arguments!
     *
     * @constructor
     *
     * @returns {string[]}
     */
    static ParseCommandArguments(strippedcmd)
    {
        /**
         * @var {string[]} r - the return array
         */
        let r = [];
        /**
         * @var { RegExpExecArray | null} m - the returned value from executing the regex
         */
        let m;

        while ((m = CommandUtils.CommandRegex.exec(strippedcmd)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === CommandUtils.CommandRegex.lastIndex) {
                CommandUtils.CommandRegex.lastIndex++;
            }
            r.push(m[0])
        }
        return r
    }

    /**
     * @author Jviguy
     *
     * @param {Message} msg
     * @param {string} prefix
     *
     * @constructor
     *
     * @returns { CommandContext, string }
     */
    static StringToCommandContext(msg,prefix) {
        let strippedcmd = msg.content.slice(prefix.length).trim()
        let args = CommandUtils.ParseCommandArguments(strippedcmd)
        args.shift()
        return new CommandContext(msg.channel,msg.author,args,msg.guild,msg)
    }

    /**
     *
     * @param {string} str
     * @param {string} prefix
     *
     * @constructor
     *
     * @returns {string}
     */
    static GetCommandName(str,prefix) {
        let strippedcmd = str.slice(prefix.length).trim()
        let args = CommandUtils.ParseCommandArguments(strippedcmd)
        return args.shift()
    }
}

module.exports = CommandUtils