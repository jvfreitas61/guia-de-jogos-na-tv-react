import { campeonato } from "../models/Campeonatos.js";
import jogo from "../models/Jogos.js";

class JogoController {

  static async listarJogos(req, res) {

  try {

    const filtro = {};

    const { campeonato, fase, dia } = req.query;

    // filtro por campeonato
    if (campeonato) {
      filtro.campeonato = campeonato;
    }

    // filtro por fase
    if (fase) {
      filtro.fase = fase;
    }

    // filtro por dia
    if (dia === "hoje") {

      const hoje = new Date();
      hoje.setHours(0,0,0,0);

      const amanha = new Date(hoje);
      amanha.setDate(hoje.getDate() + 1);

      filtro.data = {
        $gte: hoje,
        $lt: amanha
      };

    }

    if (dia === "amanha") {

      const amanha = new Date();
      amanha.setHours(0,0,0,0);
      amanha.setDate(amanha.getDate() + 1);

      const depois = new Date(amanha);
      depois.setDate(amanha.getDate() + 1);

      filtro.data = {
        $gte: amanha,
        $lt: depois
      };

    }

    const jogos = await jogo
      .find(filtro)
      .sort({ data: 1, hora: 1 });

    res.status(200).json(jogos);

  } catch (erro) {

    res.status(500).json({
      message: erro.message
    });

  }

}

  /*static async listarJogos(req, res){
    try {
      const listaJogos = await jogo.find({}).sort({data: 1});
      res.status(200).json(listaJogos);
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição`});
    }
  }

  static async listarJogoPorId(req, res){
    try {
      const id = req.params.id;
      const jogoEncontrado = await jogo.findById(id);
      res.status(200).json(jogoEncontrado);
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição do jogo`});
    }
  }

  static async jogosHoje(req, res){
    try{
      const hoje = new Date();
      hoje.setHours(0,0,0,0);

      const amanha = new Date(hoje);
      amanha.setDate(hoje.getDate() + 1);

      const jogosHoje = await jogo.find({
        data: {
          $gte: hoje,
          $lt: amanha
        }
      }).sort({data: 1 });

      res.status(200).json(jogosHoje);
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição`});
    }
  }

  static async jogosAmanha(req, res) {
    try{
      const hoje = new Date();
      hoje.setHours(0,0,0,0);
    
      const amanha = new Date(hoje);
      amanha.setDate(hoje.getDate() + 1);
    
      const depois = new Date(amanha);
      depois.setDate(amanha.getDate() + 1);
    
      const jogosAmanha = await jogo.find({
        data: {
          $gte: amanha,
          $lt: depois
        }
      }).sort({ data: 1 });
    
      res.status(200).json(jogosAmanha);

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requisição`});
    }
}*/

  /*static async cadastrarJogo (req, res){
    const novoJogo = req.body;
    try{
      const campeonatoEncontrado = await campeonato.findById(novoJogo.campeonato);
      const jogoCompleto = { ...novoJogo, campeonato: { ...campeonatoEncontrado._doc }};
      const jogoCriado = await jogo.create(jogoCompleto);
      res.status(201).json({message: "Criado com sucesso", jogo: jogoCriado});
    } catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao cadastrar jogo`});
    }
  }*/

  static async cadastrarJogo (req, res){
    try{
      const novoJogo = req.body;
      const jogoCriado = await jogo.create(novoJogo);
      res.status(201).json({message: "Criado com sucesso", jogo: jogoCriado});
    } catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao cadastrar jogo`});
    }
  }

  static async atualizarJogo(req, res){
    if(req.body.campeonato){
      const campeonatoEncontrado = await campeonato.findById(req.body.campeonato);
      req.body.campeonato = { ...campeonatoEncontrado._doc }
    };
    try {
      const id = req.params.id;
      const jogoAtualizado = await jogo.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "jogo atualizado", jogo: jogoAtualizado});
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na atualização do jogo`});
    }
  }

  /*static async atualizarJogo(req, res){
    try {
      const id = req.params.id;
      await jogo.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "jogo atualizado"});
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na atualização do jogo`});
    }
  }*/

  static async excluirJogo(req, res){
    try {
      const id = req.params.id;
      await jogo.findByIdAndDelete(id);
      res.status(200).json({message: "jogo deletado"});
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na exclusão do jogo`});
    }
  }

};

export default JogoController;