import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Leonardo',
      sobrenome: 'Vardiero',
      email: 'leovardiero@gmail.com',
      data_nascimento: '1995-11-28',
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
