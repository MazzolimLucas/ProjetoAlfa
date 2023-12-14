package com.example.db_storm.Ferramentas;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.ByteArrayOutputStream;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

public class UploadFoto {

    public static byte[] comprimirImagem(byte[] foto){
        Deflater deflater = new Deflater();
        deflater.setLevel(Deflater.BEST_COMPRESSION);
        deflater.setInput(foto);
        deflater.finish();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(foto.length);
        byte[] tmp = new byte[4 * 1024];
        while(!deflater.finished()){
            int size = deflater.deflate(tmp);
            outputStream.write(tmp, 0, size);
        }
        try{
            outputStream.close();
        } catch (Exception ignored){}
        return outputStream.toByteArray();
    }

    public static byte[] decomprimirImagem(byte[] foto){
        Inflater inflater = new Inflater();
        inflater.setInput(foto);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(foto.length);
        byte[] tmp = new byte[4 * 1024];
        try{
            while(!inflater.finished()){
                int count = inflater.inflate(tmp);
                outputStream.write(tmp, 0, count);
            }
            outputStream.close();
        } catch (Exception ignored){}
        return outputStream.toByteArray();
    }

}

