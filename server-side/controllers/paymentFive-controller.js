const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    try {
        const data = await knex("user").select("*");
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    index
  };