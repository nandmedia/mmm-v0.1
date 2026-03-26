// Message format
module.exports = {
    createMessage(type, payload, sender) {
        return {
            id: Date.now(),
            type, // "chat"  "file"
            sender,
            payload,
            timestamps: new Date().toISOString()
        };
    }
};