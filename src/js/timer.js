console.log("Hello World !!!")

class Timer{
    #id =null;

    constructor(date, node) {
        this.date = date;
        this.node = node;
    };

    start = () => {
        if (this.isActive()) { return; }
        const timer = setInterval(() => {
            this.#id = timer;
            // get distance
            const distance = this.#getDistance();
            if (distance < 0) {
                this.stop();
            // add some text
                this.#addTextToNode("Expired !");
                return;
            }
            // format distance
            this.#addTextToNode(this.#formatDistance(distance));
            // add distance to node
        }, 1000);
        
     };
    
    stop = () => { 
        if (this.isActive()) {
            clearInterval(this.#id);
            this.#id = null;
        }
    };

    isActive = () => !!this.#id;
    // !this.#id=>true
    // !!this.#id=> false - null в булевому це false
    // !- використовують щоб перетворити у булеве значення

    #getDistance = () => {
        const currentDate = Date.now();
        return this.date.getTime() - currentDate;
    };

    #addTextToNode = (text) => { 
        this.node.textContent = text;
    };

    #formatDistance = (distance) => { 
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
};

export default Timer;