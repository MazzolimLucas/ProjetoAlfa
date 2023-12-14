package com.example.db_storm.Service;

import com.example.db_storm.Ferramentas.UploadFoto;
import com.example.db_storm.Model.Foto;
import com.example.db_storm.Repository.FotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class FotoService {

    FotoRepository fotoRepository;

    @Autowired
    public FotoService(FotoRepository fotoRepository){
        this.fotoRepository = fotoRepository;
    }

    public List<Foto> getFotos(){
        return  fotoRepository.findAll();
    }

    public Foto getFoto(Integer id){
        return fotoRepository.findById(id).orElse(null);
    }

    public String uploadFoto(MultipartFile fotoRecebida) throws IOException {
        Foto foto = fotoRepository.save(Foto.builder().nome_foto(fotoRecebida.getOriginalFilename())
                .foto(UploadFoto.comprimirImagem(fotoRecebida.getBytes())).build());
        if (foto != null) {
            return "Arquivo salvo com sucesso! Nome: " + fotoRecebida.getOriginalFilename();
        }
        return null;
    }

    public byte[] baixarFoto(Integer id){
        Optional<Foto> fotoComprimida = fotoRepository.findById(id);
        byte[] fotoDescomprimida = UploadFoto.decomprimirImagem(fotoComprimida.get().getFoto());
        return fotoDescomprimida;
    }

    public void deleteFoto(Integer id){
        fotoRepository.deleteById(id);
    }


}
