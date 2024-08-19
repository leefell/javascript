import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Fulano",
      sobrenome: "França",
      email: "fulano@example.com",
      idade: 19,
      peso: 66,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
