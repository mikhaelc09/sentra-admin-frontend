import React, { useState, useEffect } from "react";
import {
  Box,
  H4,
  H5,
  FormGroup,
  Label,
  Input,
  ValueGroup,
  Button,
  CurrencyInput
} from "@adminjs/design-system";
import { ApiClient, useNotice } from "adminjs";
import { toFormData } from "axios";

const api = new ApiClient();

const Penggajian = (props) => {
  const [gajiPokok, setGajiPokok] = useState(0);
  const [tunjanganJabatan, setTunjanganJabatan] = useState(0)
  const [tunjanganPerusahaan, setTunjanganPerusahaan] = useState(0)
  const [BPJSKesehatan, setBPJSKesehatan] = useState(0)
  const [PPH21, setPPH21] = useState(0)

  const [jumlahUangMakan, setJumlahUangMakan] = useState(0)
  const [nominalUangMakan, setNominalUangMakan] = useState(0)
  const [subtotalUangMakan, setSubtotalUangMakan] = useState(0)

  const [jumlahUangTransportasi, setJumlahUangTransportasi] = useState(0)
  const [nominalUangTransportasi, setNominalUangTransportasi] = useState(0)
  const [subtotalUangTransportasi, setSubtotalUangTransportasi] = useState(0)

  const [jumlahFeeLembur, setJumlahFeeLembur] = useState(0)
  const [nominalFeeLembur, setNominalFeeLembur] = useState(0)
  const [subtotalFeeLembur, setSubtotalFeeLembur] = useState(0)

  const [jumlahFeeMCU, setJumlahFeeMCU] = useState(0)
  const [nominalFeeMCU, setNominalFeeMCU] = useState(0)
  const [subtotalFeeMCU, setSubtotalFeeMCU] = useState(0)

  const [jumlahPotongan, setJumlahPotongan] = useState(0)
  const [nominalPotongan, setNominalPotongan] = useState(0)
  const [subtotalPotongan, setSubtotalPotongan] = useState(0)

  const [totalGaji, setTotalGaji] = useState(0)
  const [header_id, setHeader_id] = useState(-1)
  const [karyawan, setKaryawan] = useState({})
  const [bulanGaji, setBulanGaji] = useState(new Date())

  useEffect(() => {
    api
      .resourceAction({
        resourceId: "Penggajian",
        actionName: "detail",
      })
      .then((response) => {
        setHeader_id(response.data.record.populated.header_id);
        setKaryawan(response.data.record.populated.karyawan);
        setBulanGaji(new Date(response.data.record.populated.detail[0].created_at))
        const data = response.data.record.populated.detail;
        setGajiPokok(val(data, "Gaji Pokok"))
        setTunjanganJabatan(val(data, "Tunjangan Jabatan"))
        setTunjanganPerusahaan(val(data, "Tunjangan Perusahaan"))
        setBPJSKesehatan(val(data, "BPJS Kesehatan"))
        setPPH21(val(data, "Pajak PPH21"))
        
        setJumlahUangMakan(val(data, "Uang Makan", "jumlah"))
        setNominalUangMakan(val(data, "Uang Makan", "nominal"))

        setJumlahUangTransportasi(val(data, "Uang Transportasi", "jumlah"))
        setNominalUangTransportasi(val(data, "Uang Transportasi", "nominal"))

        setJumlahFeeLembur(val(data, "Fee Lembur", "jumlah"))
        setNominalFeeLembur(val(data, "Fee Lembur", "nominal"))

        setJumlahFeeMCU(val(data, "Fee MCU", "jumlah"))
        setNominalFeeMCU(val(data, "Fee MCU", "nominal"))

        setJumlahPotongan(val(data, "Potongan", "jumlah"))
        setNominalPotongan(val(data, "Potongan", "nominal"))
      });
  }, []);

  useEffect(() => {
    setSubtotalUangMakan(jumlahUangMakan * nominalUangMakan ?? 0)
  }, [jumlahUangMakan, nominalUangMakan])

  useEffect(() => {
    setSubtotalUangTransportasi(jumlahUangTransportasi * nominalUangTransportasi ?? 0)
  }, [jumlahUangTransportasi, nominalUangTransportasi])

  useEffect(() => {
    setSubtotalFeeLembur(jumlahFeeLembur * nominalFeeLembur ?? 0)
  }, [jumlahFeeLembur, nominalFeeLembur])

  useEffect(() => {
    setSubtotalFeeMCU(jumlahFeeMCU * nominalFeeMCU ?? 0)
  }, [jumlahFeeMCU, nominalFeeMCU])

  useEffect(() => {
    setSubtotalPotongan(jumlahPotongan * nominalPotongan ?? 0)
  }, [jumlahPotongan, nominalPotongan])

  useEffect(() => {
    setTotalGaji(gajiPokok
      + tunjanganJabatan
      + tunjanganPerusahaan
      + subtotalUangMakan
      + subtotalUangTransportasi
      + subtotalFeeLembur
      + subtotalFeeMCU
      + BPJSKesehatan
      + subtotalPotongan
      - PPH21)
  })

  const notice = useNotice();

  const val = (d, n, p="subtotal") => {
    return d.find(x=>x.judul===n)[p]
  }

  const rp = (n) => {
    return "Rp "+n.toLocaleString("id-ID")
  }

  const handleUpdate = () => {
    api
      .resourceAction({
        resourceId: "Penggajian",
        actionName: "detail",
        method: "POST",
        data:toFormData({
          totalGaji: totalGaji,
          uangMakan: {
            jumlah: jumlahUangMakan,
            nominal: nominalUangMakan,
            subtotal: subtotalUangMakan,
          },
          uangTransportasi: {
            jumlah: jumlahUangTransportasi,
            nominal: nominalUangTransportasi,
            subtotal: subtotalUangTransportasi,
          },
          feeLembur: {
            jumlah: jumlahFeeLembur,
            nominal: nominalFeeLembur,
            subtotal: subtotalFeeLembur,
          },
          feeMCU: {
            jumlah: jumlahFeeMCU,
            nominal: nominalFeeMCU,
            subtotal: subtotalFeeMCU,
          },
          potongan:{
            jumlah: jumlahPotongan,
            nominal: nominalPotongan,
            subtotal: subtotalPotongan,
          },
          PPH21: PPH21 * -1,
          header_id
        })
      })
      .then((response) => {
        if(response.data == "OK"){
          notice({message: "Berhasil update"})
        }
      })
  }

  return (
    <Box variant="white">
      <H4 fontWeight="bold">Gaji {karyawan.nama} Bulan {bulanGaji.getMonth()} Tahun {bulanGaji.getFullYear()}</H4>

      <ValueGroup label="Gaji Pokok" value={rp(gajiPokok)}/>
      <ValueGroup label="Tunjangan Jabatan" value={rp(tunjanganJabatan)}/>
      <ValueGroup label="Tunjangan Perusahaan" value={rp(tunjanganPerusahaan)}/>

      <FormGroup>
        <Label>Uang Makan</Label>
        <Box flex={true} alignItems={"baseline"} flexDirection="row">
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(nominalUangMakan)}</Label>
          <Label fontSize={16} mx={4}> X </Label>
          <Input mx={4} variant="sm" value={jumlahUangMakan} onChange={(e) => {
            const val = e.target.value === "" ? 0 : e.target.value
            setJumlahUangMakan(val)
          }}/>
          <Label fontSize={16} mx={4}> = </Label>
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(subtotalUangMakan)}</Label>
        </Box>
      </FormGroup>

      <FormGroup>
        <Label>Uang Transportasi</Label>
        <Box flex={true} alignItems={"baseline"} flexDirection="row">
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(nominalUangTransportasi)}</Label>
          <Label fontSize={16} mx={4}> X </Label>
          <Input mx={4} variant="sm" value={jumlahUangTransportasi} onChange={(e) => {
            const val = e.target.value === "" ? 0 : e.target.value
            setJumlahUangTransportasi(val)
          }}/>
          <Label fontSize={16} mx={4}> = </Label>
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(subtotalUangTransportasi)}</Label>
        </Box>
      </FormGroup>

      <FormGroup>
        <Label>Fee Lembur</Label>
        <Box flex={true} alignItems={"baseline"} flexDirection="row">
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(nominalFeeLembur)}</Label>
          <Label fontSize={16} mx={4}> X </Label>
          <Input mx={4} variant="sm" value={jumlahFeeLembur} onChange={(e) => {
            const val = e.target.value === "" ? 0 : e.target.value
            setJumlahFeeLembur(val)
          }}/>
          <Label fontSize={16} mx={4}> = </Label>
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(subtotalFeeLembur)}</Label>
        </Box>
      </FormGroup>

      <FormGroup>
        <Label>Fee MCU</Label>
        <Box flex={true} alignItems={"baseline"} flexDirection="row">
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(nominalFeeMCU)}</Label>
          <Label fontSize={16} mx={4}> X </Label>
          <Input mx={4} variant="sm" value={jumlahFeeMCU} onChange={(e) => {
            const val = e.target.value === "" ? 0 : e.target.value
            setJumlahFeeMCU(val)
          }}/>
          <Label fontSize={16} mx={4}> = </Label>
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(subtotalFeeMCU)}</Label>
        </Box>
      </FormGroup>

      <H4 fontWeight="bold">Potongan</H4>

      <FormGroup>
        <Label>Potongan Gaji</Label>
        <Box flex={true} alignItems={"baseline"} flexDirection="row">
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(nominalPotongan)}</Label>
          <Label fontSize={16} mx={4}> X </Label>
          <Input mx={4} variant="sm" value={jumlahPotongan} onChange={(e) => {
            const val = e.target.value === "" ? 0 : e.target.value
            setJumlahPotongan(val)
          }}/>
          <Label fontSize={16} mx={4}> = </Label>
          <Label fontSize={16} mx={4} fontWeight="bold">{rp(subtotalPotongan)}</Label>
        </Box>
      </FormGroup>

      <ValueGroup label="BPJS Kesehatan" value={rp(BPJSKesehatan)}/>
      <Label>Pajak PPH 21</Label>
      <CurrencyInput value={PPH21} onChange={(e) => {
            const val = e.target.value === "" ? 0 : e.target.value
            setPPH21(parseInt(val.toString().replaceAll(",", "")))
          }}/>

      <H5 textAlign="right" fontWeight="bold">
        Total Gaji: {rp(totalGaji)}
      </H5>

      <Box flex={true} justifyContent="center">
        <Button align="center" onClick={handleUpdate}>Update</Button>
      </Box>
    </Box>
  );
};

export default Penggajian;
