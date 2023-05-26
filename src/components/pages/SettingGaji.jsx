import { useState, useEffect } from "react";
import {
  Box,
  Button,
  CurrencyInput,
  Label,
  Header,
} from "@adminjs/design-system";
import { ApiClient, useNotice } from "adminjs";
import axios from "axios";

const api = new ApiClient();

const SettingGaji = () => {
  const [gajiPokok, setGajiPokok] = useState(0);
  const [tunjanganPerusahaan, setTunjanganPerusahaan] = useState(0);
  const [uangMakan, setUangMakan] = useState(0);
  const [uangTransportasi, setUangTransportasi] = useState(0);
  const [feeLembur, setFeeLembur] = useState(0);
  const [BPJSKesehatan, setBPJSKesehatan] = useState(0);

  const notice = useNotice();

  useEffect(() => {
    api.getPage({ pageName: "SettingGaji" }).then((response) => {
      setGajiPokok(response.data.gajiPokok);
      setTunjanganPerusahaan(response.data.tunjanganPerusahaan);
      setUangMakan(response.data.uangMakan);
      setUangTransportasi(response.data.uangTransportasi);
      setFeeLembur(response.data.feeLembur);
      setBPJSKesehatan(response.data.BPJSKesehatan);
      console.log(response.data);
    });
  }, []);

  const handleSave = async () => {  
    if(gajiPokok == 0 || tunjanganPerusahaan == 0 || uangMakan == 0 || uangTransportasi == 0 || feeLembur == 0 || BPJSKesehatan == 0){  
        notice({message: "Data tidak boleh kosong", type: "error"})
        return;
    }
    const response = await axios.put("/api/setting", {
        gajiPokok, tunjanganPerusahaan, uangMakan, uangTransportasi, feeLembur, BPJSKesehatan
    })
    console.log(response);
    notice({message: "Data berhasil disimpan", type: "success"})
  }

  return (
    <Box variant="white">
      <Header>Setting Gaji</Header>
      <Box variant="container">
        <Box pb="xl">
          <Label>Gaji Pokok</Label>
          <CurrencyInput
           required={true}
            value={gajiPokok}
            intlConfig={{ locale: "id-ID", currency: "IDR" }}
            onValueChange={(value) => {
              setGajiPokok(value);
            }}
            onBlur={(e) => {
                if(e.target.value == ""){
                    setGajiPokok(0)
                }
            }}
          />
        </Box>
        <Box pb="xl">
          <Label>Tunjangan Perusahaan</Label>
          <CurrencyInput
           required={true}
            value={tunjanganPerusahaan}
            intlConfig={{ locale: "id-ID", currency: "IDR" }}
            onValueChange={(value) => {
              setTunjanganPerusahaan(value);
            }}
            onBlur={(e) => {
                if(e.target.value == ""){
                    setTunjanganPerusahaan(0)
                }
            }}
          />
        </Box>
        <Box pb="xl">
          <Label>Uang Makan</Label>
          <CurrencyInput
           required={true}
            value={uangMakan}
            intlConfig={{ locale: "id-ID", currency: "IDR" }}
            onValueChange={(value) => {
              setUangMakan(value);
            }}
            onBlur={(e) => {
                if(e.target.value == ""){
                    setUangMakan(0)
                }
            }}
          />
        </Box>
        <Box pb="xl">
          <Label>Uang Transportasi</Label>
          <CurrencyInput
           required={true}
            value={uangTransportasi}
            intlConfig={{ locale: "id-ID", currency: "IDR" }}
            onValueChange={(value) => {
              setUangTransportasi(value);
            }}
            onBlur={(e) => {
                if(e.target.value == ""){
                    setUangTransportasi(0)
                }
            }}
          />
        </Box>
        <Box pb="xl">
          <Label>Fee Lembur</Label>
          <CurrencyInput
           required={true}
            value={feeLembur}
            intlConfig={{ locale: "id-ID", currency: "IDR" }}
            onValueChange={(value) => {
              setFeeLembur(value);
            }}
            onBlur={(e) => {
                if(e.target.value == ""){
                    setFeeLembur(0)
                }
            }}
          />
        </Box>
        <Box pb="xl">
          <Label>BPJS Kesehatan</Label>
          <CurrencyInput
           required={true}
            value={BPJSKesehatan}
            intlConfig={{ locale: "id-ID", currency: "IDR" }}
            onValueChange={(value) => {
              setBPJSKesehatan(value);
            }}
            onBlur={(e) => {
                if(e.target.value == ""){
                    setBPJSKesehatan(0)
                }
            }}
          />
        </Box>
        <Box flex={true} justifyContent="center">
          <Button size="lg" variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingGaji;
