package com.example.db_storm.Model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "produtos")
@Data

public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_produto;
    private String nome_produto;
    private String categoria_produto;
    private BigInteger preco_produto;
    private String descricaoCurta_produto;
    private String descricaoLonga_produto;
    private int quantidade_produto;

    @ManyToOne
    @JoinColumn(name = "id_vendedor")
    private Vendedor vendedor;

    @OneToMany(mappedBy = "produto")
    @JsonIgnore
    private List<Foto> fotosProduto;

    @ManyToMany
    @JoinTable(
            name = "carrinho",
            joinColumns = {@JoinColumn(name = "id_produto", referencedColumnName = "id_produto")},
            inverseJoinColumns = {@JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario")}
    )

    @JsonIgnore
    private List<Usuario> usuarios = new ArrayList<>();

}
