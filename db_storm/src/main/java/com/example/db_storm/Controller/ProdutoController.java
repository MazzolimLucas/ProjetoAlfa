package com.example.db_storm.Controller;

import com.example.db_storm.Model.Produto;
import com.example.db_storm.Service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Produtos")
public class ProdutoController {

    ProdutoService produtoService;

    @Autowired
    public ProdutoController(ProdutoService produtoService){
        this.produtoService = produtoService;
    }

    @GetMapping
    public List<Produto> getProdutos(){
        return  produtoService.getProdutos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> getProduto(@PathVariable  Integer id){
        Produto produto = produtoService.getProduto(id);
        if(produto != null){
            return ResponseEntity.ok(produto);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public Produto setProduto(@RequestBody Produto produto){
        produtoService.saveProduto(produto);
        return produto;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> updateProduto(@PathVariable Integer id, @RequestBody Produto produtoAtualizado){
        Produto produto = produtoService.getProduto(id);
        if(produto != null){
            produto.setNome_produto(produtoAtualizado.getNome_produto());
            produto.setQuantidade_produto(produtoAtualizado.getQuantidade_produto());
            produto.setDescricaoCurta_produto(produtoAtualizado.getDescricaoCurta_produto());
            produto.setDescricaoLonga_produto(produtoAtualizado.getDescricaoLonga_produto());
            produto.setFotosProduto(produtoAtualizado.getFotosProduto());
            produto.setPreco_produto(produtoAtualizado.getPreco_produto());
            produto.setCategoria_produto(produtoAtualizado.getCategoria_produto());
            produto.setVendedor(produtoAtualizado.getVendedor());
            produto.setUsuarios(produtoAtualizado.getUsuarios());
            produtoService.saveProduto(produto);
            return  ResponseEntity.ok(produto);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public void deleteProduto(@PathVariable Integer id){
        produtoService.deleteProduto(id);
    }

}
