package com.example.db_storm.Service;

import com.example.db_storm.Model.Usuario;
import com.example.db_storm.Repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository){this.usuarioRepository = usuarioRepository;}

    public List<Usuario> getAllUsuarios(){
        return usuarioRepository.findAll();
    }

    public Usuario saveUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    public Usuario getUsuario(Integer id){
        return usuarioRepository.findById(id).orElse(null);
    }

    public void deleteUsuario(Integer id){
        usuarioRepository.deleteById(id);
    }


}
