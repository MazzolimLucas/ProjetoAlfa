package com.example.db_storm.Controller;

import com.example.db_storm.Model.Foto;
import com.example.db_storm.Service.FotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Fotos")
public class FotoController {

    FotoService fotoRepository;

    @Autowired
    public FotoController(FotoService fotoRepository){
        this.fotoRepository = fotoRepository;
    }

    @GetMapping
    public List<Foto> getFotos(){
        return fotoRepository.getFotos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> BaixarImagem(@PathVariable Integer id){
        byte[] foto = fotoRepository.baixarFoto(id);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png"))
                .body(foto);
    }

    @PostMapping
    public ResponseEntity<?> UploadImagem(@RequestParam("Fotos") MultipartFile imagem) throws IOException {
        String uploadImagem = fotoRepository.uploadFoto(imagem);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImagem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Foto> putFoto(@PathVariable Integer id, @RequestBody Foto fotoAtualizada){
        Foto foto = fotoRepository.getFoto(id);
        if(foto != null){
            foto.setFoto(fotoAtualizada.getFoto());
            foto.setNome_foto(fotoAtualizada.getNome_foto());
            return ResponseEntity.ok(foto);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFoto(@PathVariable Integer id){
        fotoRepository.deleteFoto(id);
        return ResponseEntity.noContent().build();
    }
}
