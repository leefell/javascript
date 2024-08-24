class FotoController {
  async store(req, res) {
    try {
      res.json(req.file);
    } catch (e) {
      res.json("Não foi possível enviar a foto.");
    }
  }
}

export default new FotoController();
