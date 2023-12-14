package com.example.db_storm.Controller;

import com.example.db_storm.Model.Produto;
import com.example.db_storm.Model.Usuario;
import com.example.db_storm.Service.ProdutoService;
import com.example.db_storm.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService){this.usuarioService = usuarioService;}

    @GetMapping
    public List<Usuario> getAllUsuarios(){
        return usuarioService.getAllUsuarios();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable int id){
        Usuario usuario = usuarioService.getUsuario(id);
        if(usuario != null){
            return ResponseEntity.ok(usuario);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public Usuario setUsuario(@RequestBody Usuario usuario){
        return usuarioService.saveUsuario(usuario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> putProduto(@PathVariable Integer id,@RequestBody Usuario usuarioAtualizado){
        Usuario usuario = usuarioService.getUsuario(id);
        if(usuario != null){
            return ResponseEntity.ok(usuario);
        }
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduto(@PathVariable Integer id){
        usuarioService.deleteUsuario(id);
        return ResponseEntity.noContent().build();
    }

}
