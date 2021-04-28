let messages = []
let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
      },
    update: (req, res) => {
        const {text} = req.body;
        const newID = req.params.id;
        const index = messages.findIndex(message => message.id == newID);
        messages[index] = {
          id: messages[index].id,
          text: text || messages[index].text,
          time: messages[index].time
        };
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const {id} = req.params
        messages = messages.filter((element) => element.id !== +id)
        res.status(200).send(messages)
    }
}