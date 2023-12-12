import { Box, Input, Icon, CurrencyInput } from "@adminjs/design-system";
import { Controller } from "react-hook-form";

const LainItem = ({ name, index, removeItem, valueHandler, control }) => {
  return (
    <Box
      flex={true}
      flexDirection="row"
      alignItems="center"
      style={{ gap: "12px" }}
    >
      <Box
        flex={true}
        style={{ gap: "12px", flexGrow: 1 }}
        flexDirection="column"
      >
        <Box
          flex={true}
          alignItems="center"
          style={{ gap: "12px" }}
          flexDirection="row"
        >
          <Controller
            control={control}
            name={`${name}.${index}.judul`}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                style={{
                  width: "100%",
                }}
                onChange={(e) => {
                  let prefix = "$G";
                  if (name.indexOf("Potongan") > -1) prefix = "$P";
                  if (e.target.value == prefix) pass;
                  if (e.target.value == "")
                    e.target.value = `${prefix}_${e.target.value}`;
                  onChange(e);
                  valueHandler(name, index, e.target.value, "judul");
                }}
              />
            )}
          />
          <Controller
            control={control}
            name={`${name}.${index}.keterangan`}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="keterangan"
                value={value}
                style={{
                  width: "100%",
                }}
                onChange={(e) => {
                  onChange(e);
                  valueHandler(name, index, e.target.value, "keterangan");
                }}
              />
            )}
          />
        </Box>
        <Box
          flex={true}
          alignItems="center"
          style={{ gap: "12px" }}
          flexDirection="row"
        >
          <Controller
            control={control}
            name={`${name}.${index}.jumlah`}
            render={({ field: { onChange, value } }) => (
              <Input
                type="number"
                value={value}
                onChange={(e) => {
                  onChange(e);
                  valueHandler(name, index, parseInt(e.target.value), "jumlah");
                }}
              />
            )}
          />
          X
          <Controller
            control={control}
            name={`${name}.${index}.nominal`}
            render={({ field: { onChange, value } }) => (
              <CurrencyInput
                defaultValue={value}
                prefix="Rp "
                onValueChange={(value) => {
                  const newValue = parseInt(value ?? 0);
                  onChange(newValue);
                  valueHandler(name, index, newValue, "nominal");
                }}
              />
            )}
          />
          =
          <Controller
            control={control}
            name={`${name}.${index}.subtotal`}
            render={({ field: { value } }) => (
              <CurrencyInput value={value} borderless="true" prefix="Rp " />
            )}
          />
        </Box>
      </Box>
      <Icon
        color="red"
        icon="X"
        size={24}
        style={{
          cursor: "pointer",
          flexGrow: "0",
        }}
        onClick={() => {
          console.log(index);
          removeItem(index);
        }}
      />
    </Box>
  );
};

export default LainItem;
