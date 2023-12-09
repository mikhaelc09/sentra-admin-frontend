import React, { useState, useEffect } from "react";
import {
  Box,
  H4,
  H5,
  Label,
  Button,
  CurrencyInput,
  Section,
  Header,
} from "@adminjs/design-system";
import { ApiClient, useNotice } from "adminjs";
import { toFormData } from "axios";
import SubtotalItem from "../SubtotalItem";
import LainItem from "../LainItem";
import { useForm, Controller } from "react-hook-form";
import TotalItem from "../TotalItem";
import EditableTotalItem from "../EditableTotalItem";

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

  const [gajiLainLain, setGajiLainLain] = useState([]);
  const [potonganLainLain, setPotonganLainLain] = useState([]);

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
        register("total");
        detail.forEach((r) => {
          const key = r.judul.split(" ").join("");
          register(key + ".judul", { value: r.judul });
          register(key + ".jumlah", { value: r.jumlah });
          register(key + ".nominal", { value: r.nominal });
          register(key + ".subtotal", { value: r.subtotal });
        });
        updateTotal();
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
    updateTotal();
    console.log(getValues());
  };

  const updateTotal = () => {
    let total = 0;
    Object.keys(getValues()).forEach((x) => {
      const value = getValues()[x];
      if (value != undefined && value.subtotal != undefined) {
        total += value.subtotal;
      }
    });
    setValue("total", total);
  };

  const handleUpdate = () => {
    api
      .resourceAction({
        resourceId: "Penggajian",
        actionName: "detail",
        method: "POST",
        data: toFormData({
          // totalGaji: totalGaji,
          // PPH21: PPH21 * -1,
          // header_id,
          // gajiPokok,
          // tunjanganJabatan,
          // tunjanganPerusahaan,
          // BPJSKesehatan,
          // uangMakan,
          // uangTransportasi,
          // feeLembur,
          // feeMCU,
          // potongan,
          // gajiLainLain,
          // potonganLainLain,
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
              return data && <TotalItem key={index} data={data} />;
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
              register("$GajiLain." + gajiLainLain.length);
            }}
          >
            Add More
          </Button>
        </Section>

        <Section>
          <H4>Potongan</H4>
          <EditableTotalItem
            data={getValues()["Potongan"]}
            item={"Potongan"}
            control={control}
            handleQuantityChange={handleQuantityChange}
          />

          <EditableTotalItem
            data={getValues()["BPJSKesehatan"]}
            item={"BPJSKesehatan"}
            control={control}
            handleQuantityChange={handleQuantityChange}
          />

          <EditableTotalItem
            data={getValues()["PajakPPH21"]}
            item={"PajakPPH21"}
            control={control}
            handleQuantityChange={handleQuantityChange}
          />

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
        </Section>

        <H5 fontWeight="semibold">Total Gaji</H5>
        <Controller
          name={"total"}
          control={control}
          render={({ field: { value } }) => {
            return (
              <CurrencyInput
                value={value}
                size="lg"
                prefix="Rp "
                borderless="true"
              />
            );
          }}
        />

        <Box flex={true} justifyContent="center">
          <Button align="center" onClick={handleSubmit(handleUpdate)}>
            Update
          </Button>
        </Box>
    </Box>
  );
};

export default Penggajian;
