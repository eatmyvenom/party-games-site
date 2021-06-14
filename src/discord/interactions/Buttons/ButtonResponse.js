module.exports = class ButtonResponse {
    content = "";
    embeds = [];
    newButtons = [];
    
    constructor(content, embeds, newButtons) {
        this.content = content;
        this.embeds = embeds;
        this.newButtons = newButtons;
    }

    toDiscord() {
        return {
            embeds : this.embeds,
            components : [ this.newButtons ]
        }
    }
}