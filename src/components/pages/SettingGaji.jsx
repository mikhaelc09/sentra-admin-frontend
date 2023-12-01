import { useEffect } from "react";
import { Box, Button, Label, Header, Input } from "@adminjs/design-system";
import { ApiClient, useNotice } from "adminjs";
import axios from "axios";
import { useForm } from "react-hook-form";

const api = new ApiClient();

const SettingGaji = () => {
  const labelsPair = [
    { label: "Uang Makan", reg: "uangMakan" },
    { label: "Uang Transportasi", reg: "uangTransportasi" },
    { label: "Fee Lembur", reg: "feeLembur" },
    { label: "Fee MCU", reg: "feeMCU" },
    { label: "BPJS Kesehatan", reg: "BPJSKesehatan" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const notice = useNotice();

  useEffect(() => {
    api.getPage({ pageName: "SettingGaji" }).then((response) => {
      labelsPair.forEach((i) => {
        setValue(i.reg, response.data[i.reg]);
      });
    });
  }, []);

  const handleSave = async (data) => {
    const response = await axios.put("/api/setting", { ...data });
    console.log(response);
    notice({ message: "Data berhasil disimpan", type: "success" });
  };

  return (
    <Box variant="white">
      <Header>Setting Gaji</Header>
      <Box variant="container">
        {labelsPair.map((i) => {
          return (
            <Box pb="xl" key={i.reg}>
              <Label>{i.label}</Label>
              <Input
                size="lg"
                type="number"
                style={{ width: "100%" }}
                {...register(i.reg, {
                  required: {
                    value: true,
                    message: `Field ${i.label} wajib diisi`,
                  },
                  min: {
                    value: 1000,
                    message: `field ${i.label} minimal bernilai 1000`,
                  },
                })}
              />
              {errors[i.reg] && (
                <span style={{ color: "red" }}>{errors[i.reg].message}</span>
              )}
            </Box>
          );
        })}
        <Box flex={true} justifyContent="center">
          <Button
            size="lg"
            variant="primary"
            onClick={handleSubmit(handleSave)}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingGaji;
