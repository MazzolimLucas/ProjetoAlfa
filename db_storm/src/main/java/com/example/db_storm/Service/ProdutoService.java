package com.example.db_storm.Service;

import com.example.db_storm.Model.Produto;
import com.example.db_storm.Repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public Produto getProduto(Integer id){
        return produtoRepository.findById(id).orElse(null);
    }

    public List<Produto> getProdutos(){
        return produtoRepository.findAll();
    }

    public Produto saveProduto(Produto produto){
        return produtoRepository.save(produto);
    }

    public void deleteProduto(Integer id){
        produtoRepository.deleteById(id);
    }



}
