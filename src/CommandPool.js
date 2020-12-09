const levenshtein = require('js-levenshtein');

class CommandPool {

    constructor() {
    }

    /**
     * @var {Map<string, Command>} swimmers - the commands in the pool
     */
    swimmers = new Map()

    /**
     * @author Jviguy
     *
     * @param {string} name
     */
    RemoveSwimmer(name) {
        delete (this.swimmers[name])
    }

    /**
     * @author Jviguy
     *
     * @param {string} name
     * @param {Command} swimmer
     * @param {boolean} safely
     */
    AddSwimmer(name, swimmer, safely = false){
        if (safely && this.SwimmerExists(name)) {
            return;
        }
        this.swimmers.set(name,swimmer);
    }

    /**
     * @author Jviguy
     *
     * @param {Map<string, Command>} s
     * @constructor
     */
    AddSwimmers(s) {
        for (const [name, swimmer] of s.entries()) {
            this.AddSwimmer(name,swimmer)
        }
    }


    /**
     * @author Jviguy
     *
     * @param {string} name
     * @constructor
     *
     * @returns {boolean}
     */
    SwimmerExists(name) {
        return this.swimmers.has(name)
    }

    /**
     * @author Jviguy
     *
     * @param {string} name
     * @param {boolean} safely
     * @return {Command | null}
     * @constructor
     */
    GetSwimmer(name, safely = true) {
        if (!this.SwimmerExists(name)) {
            return null;
        }
        return this.swimmers.get(name)
    }

    /**
     * @author Jviguy
     *
     * @param {string} cname
     * @constructor
     *
     * @returns {string}
     */
    FindClosest(cname) {
        /**
         * @type {string[]}
         */
        let array = []
        /**
         * @type {number[]}
         */
        let x = []
        for (const [name] of this.swimmers.entries()) {
            array.push(name)
        }
        array.forEach((name,k) => {
            x[k] = levenshtein(cname, name)
        })
        let y = [...x]
        y.sort()
        return array[x.indexOf(y[0])]
    }
}


module.exports = CommandPool