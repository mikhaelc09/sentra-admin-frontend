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
  CurrencyInput,
  Section,
} from "@adminjs/design-system";
import { ApiClient, useNotice } from "adminjs";
import { toFormData } from "axios";
import SubtotalItem from "../SubtotalItem";
import LainItem from "../LainItem";

const api = new ApiClient();

const Penggajian = (props) => {
  const [gajiPokok, setGajiPokok] = useState(0);
  const [tunjanganJabatan, setTunjanganJabatan] = useState(0);
  const [tunjanganPerusahaan, setTunjanganPerusahaan] = useState(0);
  const [BPJSKesehatan, setBPJSKesehatan] = useState(0);
  const [PPH21, setPPH21] = useState(0);

  const [uangMakan, setUangMakan] = useState({
    jumlah: 0,
    nominal: 10000,
    subtotal: 0,
  });

  const [uangTransportasi, setUangTransportasi] = useState({
    jumlah: 0,
    nominal: 0,
    subtotal: 0,
  });

  const [feeLembur, setFeeLembur] = useState({
    jumlah: 0,
    nominal: 0,
    subtotal: 0,
  });

  const [feeMCU, setFeeMCU] = useState({
    jumlah: 0,
    nominal: 0,
    subtotal: 0,
  });

  const [potongan, setPotongan] = useState({
    jumlah: 0,
    nominal: 0,
    subtotal: 0,
  });

  const [gajiLainLain, setGajiLainLain] = useState([]);
  const [potonganLainLain, setPotonganLainLain] = useState([]);

  const [totalGaji, setTotalGaji] = useState(0);
  const [header_id, setHeader_id] = useState(-1);
  const [karyawan, setKaryawan] = useState({});
  const [bulanGaji, setBulanGaji] = useState(new Date());

  useEffect(() => {
    api
      .resourceAction({
        resourceId: "Penggajian",
        actionName: "detail",
      })
      .then((response) => {
        setHeader_id(response.data.record.populated.header_id);
        setKaryawan(response.data.record.populated.karyawan);
        setBulanGaji(
          new Date(response.data.record.populated.detail[0].created_at)
        );
        const data = response.data.record.populated.detail;
        setGajiPokok(val(data, "Gaji Pokok"));
        setTunjanganJabatan(val(data, "Tunjangan Jabatan"));
        setTunjanganPerusahaan(val(data, "Tunjangan Perusahaan"));
        setBPJSKesehatan(val(data, "BPJS Kesehatan"));
        setPPH21(val(data, "Pajak PPH21"));

        setUangMakan({
          jumlah: val(data, "Uang Makan", "jumlah"),
          nominal: val(data, "Uang Makan", "nominal"),
          subtotal: val(data, "Uang Makan", "subtotal"),
        })

        setUangTransportasi({
          jumlah: val(data, "Uang Transportasi", "jumlah"),
          nominal: val(data, "Uang Transportasi", "nominal"),
          subtotal: val(data, "Uang Transportasi", "subtotal"),
        })

        setFeeLembur({
          jumlah: val(data, "Fee Lembur", "jumlah"),
          nominal: val(data, "Fee Lembur", "nominal"),
          subtotal: val(data, "Fee Lembur", "subtotal"),
        })

        setFeeMCU({
          jumlah: val(data, "Fee MCU", "jumlah"),
          nominal: val(data, "Fee MCU", "nominal"),
          subtotal: val(data, "Fee MCU", "subtotal"),
        })

        setPotongan({
          jumlah: val(data, "Potongan", "jumlah"),
          nominal: val(data, "Potongan", "nominal"),
          subtotal: val(data, "Potongan", "subtotal"),
        })
      });
  }, []);

  const notice = useNotice();

  const val = (d, n, p = "subtotal") => {
    return d.find((x) => x.judul === n)[p];
  };

  const rp = (n) => {
    return "Rp " + n.toLocaleString("id-ID");
  };

  const handleUpdate = () => {
    api
      .resourceAction({
        resourceId: "Penggajian",
        actionName: "detail",
        method: "POST",
        data: toFormData({
          totalGaji: totalGaji,
          PPH21: PPH21 * -1,
          header_id,
        }),
      })
      .then((response) => {
        if (response.data == "OK") {
          notice({ message: "Berhasil update" });
        }
      });
  };

  return (
    <Box variant="white">
      <H4>
        Gaji {karyawan.nama} Bulan {bulanGaji.getMonth()} Tahun{" "}
        {bulanGaji.getFullYear()}
      </H4>

      <Section>
        <ValueGroup
          label="Gaji Pokok"
          value={rp(gajiPokok)}
          fontWeight="semibold"
        />
        <ValueGroup
          label="Tunjangan Jabatan"
          value={rp(tunjanganJabatan)}
          fontWeight="semibold"
        />
        <ValueGroup
          label="Tunjangan Perusahaan"
          value={rp(tunjanganPerusahaan)}
          fontWeight="semibold"
        />
        <SubtotalItem
          label="Uang Makan"
          item={uangMakan}
          setter={setUangMakan}
        />
        <SubtotalItem
          label="Uang Transportasi"
          item={uangTransportasi}
          setter={setUangTransportasi}
        />
        <SubtotalItem
          label="Fee Lembur"
          item={feeLembur}
          setter={setFeeLembur}
        />
        <SubtotalItem label="Fee MCU" item={feeMCU} setter={setFeeMCU} />
        <Label>Lain lain</Label>
        {gajiLainLain.map((item, index) => {
          return (
            <LainItem item={item} key={index} setter={setGajiLainLain} index={index} />
          );
        })}
        <Button
          onClick={() => {
            setGajiLainLain((prev) => [
              ...prev,
              { judul: "bonus", nominal: 0, keterangan: "" },
            ]);
          }}
        >
          Add More
        </Button>
      </Section>

      <Section>
        <SubtotalItem label="Potongan" item={potongan} setter={setPotongan} />
        <ValueGroup label="BPJS Kesehatan" value={rp(BPJSKesehatan)} />
        
        <Label>Lain lain</Label>
        {potonganLainLain.map((item, index) => {
          return (
            <LainItem item={item} key={index} setter={setPotonganLainLain} index={index} />
          );
        })}
        <Button
          onClick={() => {
            setPotonganLainLain((prev) => [
              ...prev,
              { judul: "potongan", nominal: 0, keterangan: "" },
            ]);
          }}
        >
          Add More
        </Button>

        <Label>Pajak PPH 21</Label>
        <CurrencyInput
          value={PPH21}
          onChange={(e) => {
            const val = e.target.value === "" ? 0 : e.target.value;
            setPPH21(parseInt(val.toString().replaceAll(",", "")));
          }}
        />
      </Section>

      <H5 textAlign="right" fontWeight="semibold">
        Total Gaji: {rp(totalGaji)}
      </H5>

      <Box flex={true} justifyContent="center">
        <Button align="center" onClick={handleUpdate}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Penggajian;
