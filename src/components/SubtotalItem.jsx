import { FormGroup, Label, Box, Input, CurrencyInput } from "@adminjs/design-system";
import { Controller } from "react-hook-form";

const SubtotalItem = ({ data, item, control, handleQuantityChange }) => {
  return (
    data && 
    <FormGroup>
      <Label variant="semibold">{data.judul}</Label>
      <Box flex={true} alignItems="baseline" flexDirection="row">
        <CurrencyInput value={data.nominal} borderless="true" prefix="Rp " />
        <Label fontSize={20} mx={20}>
          {" "}
          x{" "}
        </Label>
        <Controller
          name={item + ".jumlah"}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                value={value}
                type="number"
                onChange={(e) => {
                  onChange(e);
                  handleQuantityChange(item, data.nominal * e.target.value);
                }}
                onBlur={onBlur}
              />
            );
          }}
        />
        <Label fontSize={20} mx={20}>
          {" "}
          ={" "}
        </Label>
        <Controller
          name={item + ".subtotal"}
          control={control}
          render={({ field: { value } }) => {
            return <CurrencyInput value={value} borderless="true" prefix="Rp " />;
          }}
        />
      </Box>
    </FormGroup>
  );
};

export default SubtotalItem;
