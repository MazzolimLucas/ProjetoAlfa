package com.example.db_storm.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Foto")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class Foto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_foto;
    private String nome_foto;

    @Lob
    @Column(name = "foto", length = 50000000)
    private byte[] foto;

    @ManyToOne
    @JoinColumn(name = "id_produto")
    private Produto produto;

}
