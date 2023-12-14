package com.example.db_storm.Controller;

import com.example.db_storm.Model.Vendedor;
import com.example.db_storm.Service.VendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Vendedores")
public class VendedorController {

    VendedorService vendedorService;

    @Autowired
    public  VendedorController(VendedorService vendedorService){
        this.vendedorService = vendedorService;
    }

    @GetMapping
    public List<Vendedor> getVendedores(){
        return vendedorService.getVendedores();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vendedor> getVendedor(@PathVariable Integer id){
        Vendedor vendedor = vendedorService.getVendedor(id);
        if(vendedor != null){
            return ResponseEntity.ok(vendedor);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public Vendedor setVendedor(@RequestBody Vendedor vendedor){
        return vendedorService.saveVendedor(vendedor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vendedor> putVendedor(@PathVariable Integer id,@RequestBody Vendedor vendedorAtualizado){
        Vendedor vendedor = vendedorService.getVendedor(id);
        if(vendedor != null){
            vendedor.setEmail_vendedor(vendedorAtualizado.getEmail_vendedor());
            vendedor.setNome_vendedor(vendedorAtualizado.getNome_vendedor());
            vendedor.setProdutos(vendedorAtualizado.getProdutos());
            vendedor.setSenha_vendedor(vendedorAtualizado.getSenha_vendedor());
            return ResponseEntity.ok(vendedor);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVendedor(@PathVariable Integer id){
        vendedorService.deleteVendedor(id);
        return  ResponseEntity.noContent().build();
    }

}
