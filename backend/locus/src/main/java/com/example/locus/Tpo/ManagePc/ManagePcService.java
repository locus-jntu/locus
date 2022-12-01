package com.example.locus.Tpo.ManagePc;

import com.example.locus.Tpo.ManagePc.Dto.CreatePcRequest;

public interface ManagePcService {
    boolean deletePc(String pcId);
    boolean createPc(CreatePcRequest createPcRequest);
}
