package com.example.db_storm.Repository;

import com.example.db_storm.Model.Foto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FotoRepository extends JpaRepository<Foto, Integer> {
}
