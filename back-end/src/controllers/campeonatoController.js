import {campeonato} from "../models/Campeonatos.js";

class CampeonatoController {

  static async listarCampeonatos(req, res){
    try {
      const listaCampeonatos = await campeonato.find({});
      res.status(200).json(listaCampeonatos);
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição`});
    }
  }

  static async listarCampeonatoPorId(req, res){
    try {
      const id = req.params.id;
      const campeonatoEncontrado = await campeonato.findById(id);
      res.status(200).json(campeonatoEncontrado);
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição do campeonato`});
    }
  }

  static async cadastrarCampeonato (req, res){
    try{
      const novoCampeonato = await campeonato.create(req.body);
      res.status(201).json({message: "Criado com sucesso", campeonato: novoCampeonato});
    } catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao cadastrar campeonato`});
    }
  }

  static async atualizarCampeonato(req, res){
    try {
      const id = req.params.id;
      await campeonato.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "campeonato atualizado"});
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na atualização do campeonato`});
    }
  }

  static async excluirCampeonato(req, res){
    try {
      const id = req.params.id;
      await campeonato.findByIdAndDelete(id);
      res.status(200).json({message: "campeonato deletado"});
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na exclusão do campeonato`});
    }
  }

};

export default CampeonatoController;