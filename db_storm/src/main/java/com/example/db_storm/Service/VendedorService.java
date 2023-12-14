package com.example.db_storm.Service;

import com.example.db_storm.Model.Produto;
import com.example.db_storm.Model.Vendedor;
import com.example.db_storm.Repository.ProdutoRepository;
import com.example.db_storm.Repository.VendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendedorService {

    VendedorRepository vendedorRepository;

    @Autowired
    public VendedorService(VendedorRepository vendedorRepository){
        this.vendedorRepository = vendedorRepository;
    }

    public Vendedor getVendedor(Integer id){
        return vendedorRepository.findById(id).orElse(null);
    }

    public List<Vendedor> getVendedores(){
        return  vendedorRepository.findAll();
    }

    public Vendedor saveVendedor(Vendedor vendedor){
        return vendedorRepository.save(vendedor);
    }

    public void deleteVendedor(Integer id){
        vendedorRepository.deleteById(id);
    }

}
