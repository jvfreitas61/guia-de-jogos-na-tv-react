import { campeonato } from "../models/Campeonatos.js";
import jogo from "../models/Jogos.js";

class JogoController {

  static async listarJogos(req, res){
    try {
      const listaJogos = await jogo.find({});
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