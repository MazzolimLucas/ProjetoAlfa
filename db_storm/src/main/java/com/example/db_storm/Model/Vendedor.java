package com.example.db_storm.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "vendedores")
public class Vendedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_vendedor;
    private String nome_vendedor;
    private String email_vendedor;

    private String senha_vendedor;

    @OneToMany(mappedBy = "vendedor")
    @JsonIgnore
    private List<Produto> produtos;

    public int getId_vendedor() {
        return id_vendedor;
    }

    public void setId_vendedor(int id_vendedor) {
        this.id_vendedor = id_vendedor;
    }

    public String getNome_vendedor() {
        return nome_vendedor;
    }

    public void setNome_vendedor(String nome_vendedor) {
        this.nome_vendedor = nome_vendedor;
    }

    public String getEmail_vendedor() {
        return email_vendedor;
    }

    public void setEmail_vendedor(String email_vendedor) {
        this.email_vendedor = email_vendedor;
    }

    public String getSenha_vendedor() {
        return senha_vendedor;
    }

    public void setSenha_vendedor(String senha_vendedor) {
        this.senha_vendedor = senha_vendedor;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}
