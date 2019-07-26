module.exports = {
  async getHouses(req, res) {
    const db = req.app.get("db");
    const houses = await db.get_houses();
    res.status(200).send(houses);
  },
  async addHouse(req, res) {
    const db = req.app.get("db");
    const { name, address, city, state, zip } = req.body;

    await db.add_house({ name, address, city, state, zip });
    res.sendStatus(200);
  },

  deleteHouse(req, res) {
    const db = req.app.get("db");
    db.delete_house(req.params.id).then(() => res.sendStatus(200));
  }
};
