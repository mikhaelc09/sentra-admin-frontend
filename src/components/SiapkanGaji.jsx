import React, { useEffect, useState } from "react";
import {
  H5,
  DrawerContent,
  CheckBox,
  Label,
  Box,
  Button,
} from "@adminjs/design-system";
import { ActionHeader, ApiClient, useNotice } from "adminjs";
import { toFormData } from "axios";
import { useNavigate } from 'react-router-dom'

const api = new ApiClient();

const SiapkanGaji = (props) => {
  const [checkList, setCheckList] = useState();
  const [all, setAll] = useState(false);
  const navigate = useNavigate()
  const notice = useNotice();

  useEffect(() => {
    api
      .resourceAction({
        resourceId: "Penggajian",
        actionName: "SiapkanGajiBulanan",
        method: "GET",
      })
      .then((response) => {
        setCheckList(
          response.data.karyawan.map((karyawan) => {
            return { ...karyawan, checked: false };
          })
        );
      });
  }, []);
  
    const handleSubmit = () => {
      let karyawan = checkList.filter((karyawan) => karyawan.checked).map((karyawan) => karyawan.nik)
      karyawan = JSON.stringify(karyawan)
      api.resourceAction({
        resourceId: "Penggajian",
        actionName: "SiapkanGajiBulanan",
        method: "POST",
        data: toFormData({
          karyawan
        })
      }).then((response) => {
        if(response.data.msg==="Success"){
          notice({message:`Berhasil menyiapkan gaji untuk ${response.data.counter} karyawan`})
          navigate('/admin/resources/Penggajian')
        }
      })
    }

  const handleCheckAll = (e) => {
    setAll((prev) => !prev);
    setCheckList(
      checkList.map((karyawan) => {
        return { ...karyawan, checked: !all };
      })
    );
  };

  const handleCheck = (e, nik) => {
    setCheckList(
      checkList.map((karyawan) => {
        if (karyawan.nik === nik) {
          return { ...karyawan, checked: !e.target.checked };
        }
        return karyawan;
      })
    );
  };

  return (
    <DrawerContent>
      <ActionHeader {...props} omitActions={true} />
      <H5>Centang untuk merancang penggajian bulan ini</H5>
      <Box marginBottom={24} overflowY="scroll" height={500}>
        <Box padding={8}>
          <CheckBox
            id="ALL"
            size="lg"
            checked={all}
            onChange={handleCheckAll}
          />
          <Label inline htmlFor="ALL" size="lg">
            Check All
          </Label>
        </Box>
        {!checkList && <H5>Loading...</H5>}
        {checkList &&
          checkList.map((karyawan) => {
            return (
              <Box padding={8}>
                <CheckBox
                  id={karyawan.nik}
                  size="lg"
                  checked={karyawan.checked}
                  onChange={(e) => handleCheck(e, karyawan.nik)}
                />
                <Label inline htmlFor={karyawan.nik} size="lg">
                  {karyawan.nama}
                </Label>
              </Box>
            );
          })}
      </Box>
      <Button
        size="lg"
        variant="primary"
        onClick={handleSubmit}
      >
        Siapkan Gaji
      </Button>
    </DrawerContent>
  );
};

export default SiapkanGaji;
