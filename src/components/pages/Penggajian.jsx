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
import SubtotalItem from "../SubtotalItem";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import TotalItem from "../TotalItem";
import EditableTotalItem from "../EditableTotalItem";
import LainItem from "../LainItem";

const api = new ApiClient();

const Penggajian = () => {
  const notice = useNotice();
  const { control, register, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      GajiLainLain: [],
      PotonganLainLain: [],
    },
  });

  const {
    fields: gajiLainLain,
    append: appendGaji,
    remove: removeGaji,
  } = useFieldArray({
    control,
    name: "GajiLainLain",
  });
  const {
    fields: potonganLainLain,
    append: appendPotongan,
    remove: removePotongan,
  } = useFieldArray({
    control,
    name: "PotonganLainLain",
  });

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
        setValue(
          "GajiLainLain",
          detail
            .filter((x) => x.judul.indexOf("$G") > -1)
            .map((x) => {
              return {
                judul: x.judul,
                jumlah: x.jumlah,
                nominal: x.nominal,
                subtotal: x.subtotal,
              };
            })
        );
        setValue(
          "PotonganLainLain",
          detail
            .filter((x) => x.judul.indexOf("$P") > -1)
            .map((x) => {
              return {
                judul: x.judul,
                jumlah: x.jumlah,
                nominal: x.nominal,
                subtotal: x.subtotal,
              };
            })
        );
        detail
          .filter(
            (x) => x.judul.indexOf("$G") == -1 && x.judul.indexOf("$P") == -1
          )
          .forEach((r) => {
            const key = r.judul.split(" ").join("");
            register(key + ".judul", { value: r.judul });
            register(key + ".jumlah", { value: r.jumlah });
            register(key + ".nominal", { value: r.nominal });
            register(key + ".subtotal", { value: r.subtotal });
          });
        updateTotal();
      });
  }, []);

  const handleQuantityChange = (field, value) => {
    setValue(`${field}.subtotal`, value);
    updateTotal();
  };

  const handleLainChange = (field, index, value, fieldType) => {
    setValue(`${field}.${fieldType}`, value);
    const newSubtotal =
      parseInt(getValues()[field][index]["jumlah"]) *
      parseInt(getValues()[field][index]["nominal"]);
    setValue(`${field}.${index}.subtotal`, newSubtotal);
    updateTotal();
  };

  const updateTotal = () => {
    const listGaji = [
      "GajiPokok",
      "TunjanganJabatan",
      "TunjanganPerusahaan",
      "UangMakan",
      "UangTransportasi",
      "FeeLembur",
      "FeeMCU",
    ];
    const listPotongan = ["Potongan", "BPJSKesehatan", "PajakPPH21"];
    let total = 0;
    Object.keys(getValues()).forEach((x) => {
      const value = getValues()[x];
      if (value != undefined && value.subtotal != undefined) {
        if (listGaji.indexOf(value.judul)) {
          total += value.subtotal;
        } else if (listPotongan.indexOf(value.judul)) {
          total -= value.subtotal;
        }
      } else if (x == "GajiLainLain") {
        const totalLain = value.reduce((a, b) => a + b.subtotal, 0);
        total += totalLain;
      } else if (x == "PotonganLainLain") {
        const totalLain = value.reduce((a, b) => a + b.subtotal, 0);
        total -= totalLain;
      }
    });
    setValue("total", total);
  };

  const handleUpdate = (data) => {
    api
      .resourceAction({
        resourceId: "Penggajian",
        actionName: "detail",
        method: "POST",
        data: data,
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
                key={`Gaji Harian ${index}`}
                data={data}
                item={item}
                control={control}
                handleQuantityChange={handleQuantityChange}
              />
            );
          }
        )}

        <Label>Lain lain</Label>
        <Box
          flex={true}
          style={{ gap: "12px", marginBottom: "12px" }}
          flexDirection="column"
        >
          {gajiLainLain &&
            gajiLainLain.map((item, index) => {
              return (
                <LainItem
                  key={`Gaji Lain Lain${index}`}
                  name="GajiLainLain"
                  control={control}
                  index={index}
                  removeItem={removeGaji}
                  valueHandler={handleLainChange}
                />
              );
            })}
        </Box>
        <Button
          onClick={() => {
            appendGaji({
              judul: `$G_GajiLainLain${gajiLainLain.length + 1}`,
              jumlah: 1,
              nominal: 10000,
              subtotal: 10000,
              keterangan: "",
            });
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
        <Box
          flex={true}
          style={{ gap: "12px", marginBottom: "12px" }}
          flexDirection="column"
        >
          {potonganLainLain &&
            potonganLainLain.map((item, index) => {
              return (
                <LainItem
                  key={`Potongan Lain Lain ${index}`}
                  name="PotonganLainLain"
                  control={control}
                  index={index}
                  removeItem={removePotongan}
                  valueHandler={handleLainChange}
                />
              );
            })}
        </Box>
        <Button
          onClick={() => {
            appendPotongan({
              judul: `$P_PotonganLainLain${potonganLainLain.length + 1}`,
              jumlah: 1,
              nominal: 10000,
              subtotal: 10000,
              keterangan: "",
            });
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
