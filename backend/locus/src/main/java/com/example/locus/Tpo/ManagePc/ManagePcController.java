package com.example.locus.Tpo.ManagePc;

import com.example.locus.Tpo.ManagePc.Dto.CreatePcRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManagePcController {

    ManagePcService managePcService;

    @Autowired
    public ManagePcController(ManagePcService managePcService){
        this.managePcService = managePcService;
    }

    @PostMapping("/api/tpo/createPc")
    public boolean createPc(@RequestBody CreatePcRequest createPcRequest){
       return managePcService.createPc(createPcRequest);
    }

    @GetMapping("/api/tpo/deletePc")
    public boolean deletePc(@RequestParam(name = "username") String pcUsername){
        return managePcService.deletePc(pcUsername);
    }
}