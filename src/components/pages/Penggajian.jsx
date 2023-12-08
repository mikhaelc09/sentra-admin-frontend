import React, { useState, useEffect } from "react";
import {
  Box,
  H4,
  H5,
  Label,
  ValueGroup,
  Button,
  CurrencyInput,
  Section,
  Header,
  FormGroup,
  Input,
} from "@adminjs/design-system";
import { ApiClient, useNotice } from "adminjs";
import { toFormData } from "axios";
import SubtotalItem from "../SubtotalItem";
import LainItem from "../LainItem";
import { useForm, Controller } from "react-hook-form";

const api = new ApiClient();

const Penggajian = (props) => {
  const notice = useNotice();
  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const [gajiPokok, setGajiPokok] = useState(0);
  const [tunjanganJabatan, setTunjanganJabatan] = useState(0);
  const [tunjanganPerusahaan, setTunjanganPerusahaan] = useState(0);
  const [BPJSKesehatan, setBPJSKesehatan] = useState(0);
  const [PPH21, setPPH21] = useState(0);

  const [, uangMakan, setUangMakan] = useState({
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
        const record = response.data.record;
        /**
         * View Details state
         */
        setBulanGaji(new Date(record.populated.detail[0].created_at));
        setKaryawan(record.populated.karyawan);

        /**
         * Form Field Values
         */
        setValue("header_id", record.populated.header_id);
        const detail = response.data.record.populated.detail;
        setValue('total', 0)
        detail.forEach((r) => {
          const key = r.judul.split(" ").join("");
          register(key + ".judul", { value: r.judul });
          register(key + ".jumlah", { value: r.jumlah });
          register(key + ".nominal", { value: r.nominal });
          register(key + ".subtotal", { value: r.subtotal });
        });
        Object.keys(getValues()).forEach((x) => {
          const value = getValues()[x]
          if(value != undefined && value.subtotal != undefined){
            setValue('total', getValues()['total'] + value.subtotal)
          }
        });
        //REF: https://codesandbox.io/s/focused-montalcini-ehbp3?file=/src/App.tsx

        // const gajiLain = data.filter((item) => item.judul.includes("bonus"));
        // setGajiLainLain(gajiLain.map(({ judul, nominal, keterangan }) => {
        //   return { judul, nominal, keterangan }
        // }))
        // const potonganLain = data.filter((item) => item.judul.includes("potongan"));
        // setPotonganLainLain(potonganLain.map(({ judul, nominal, keterangan }) => {
        //   return { judul, nominal, keterangan }
        // }))
      });
  }, []);

  const handleQuantityChange = (field, value) => {
    setValue(`${field}.subtotal`, value);
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
          gajiPokok,
          tunjanganJabatan,
          tunjanganPerusahaan,
          BPJSKesehatan,
          uangMakan,
          uangTransportasi,
          feeLembur,
          feeMCU,
          potongan,
          gajiLainLain,
          potonganLainLain,
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
      <Header>
        Gaji {karyawan.nama} Bulan {bulanGaji.getMonth()} Tahun{" "}
        {bulanGaji.getFullYear()}
      </Header>

      <Section>
        <H4>Gaji</H4>
        {["GajiPokok", "TunjanganJabatan", "TunjanganPerusahaan"].map(
          (item, index) => {
            const data = getValues()[item];
            return (
              data && (
                <FormGroup key={index}>
                  <Label variant="semibold">{data.judul}</Label>
                  <CurrencyInput
                    value={data.nominal}
                    borderless="true"
                    prefix="Rp "
                  />
                </FormGroup>
              )
            );
          }
        )}

        {["UangMakan", "UangTransportasi", "FeeLembur", "FeeMCU"].map(
          (item, index) => {
            const data = getValues()[item];
            return (
              <SubtotalItem
                key={index}
                data={data}
                item={item}
                control={control}
                handleQuantityChange={handleQuantityChange}
              />
            );
          }
        )}

        <Label>Lain lain</Label>
        {gajiLainLain.map((item, index) => {
          return (
            <LainItem
              item={item}
              key={index}
              setter={setGajiLainLain}
              index={index}
            />
          );
        })}
        <Button
          onClick={() => {
            register("GajiLain.");
          }}
        >
          Add More
        </Button>
      </Section>

      <Section>
        <H4>Potongan</H4>
        <SubtotalItem
          data={getValues()["Potongan"]}
          item={"Potongan"}
          control={control}
          handleQuantityChange={handleQuantityChange}
        />

        <ValueGroup label="BPJS Kesehatan" value={rp(BPJSKesehatan)} />

        <Label>Lain lain</Label>
        {potonganLainLain.map((item, index) => {
          return (
            <LainItem
              item={item}
              key={index}
              setter={setPotonganLainLain}
              index={index}
            />
          );
        })}
        <Button
          onClick={() => {
            setPotonganLainLain((prev) => [
              ...prev,
              {
                judul: `potongan ${prev.length + 1}`,
                nominal: 0,
                keterangan: "",
              },
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

      <H5 fontWeight="semibold">Total Gaji</H5>
      <Controller
        name={"total"}
        control={control}
        render={({ field: { value } }) => {
          return <CurrencyInput value={value} onClick={()=>{}} prefix="Rp " borderless="true" />;
        }}
      />

      <Box flex={true} justifyContent="center">
        <Button align="center" onClick={handleUpdate}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Penggajian;
