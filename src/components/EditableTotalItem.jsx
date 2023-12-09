import { FormGroup, Label, CurrencyInput } from "@adminjs/design-system";
import { Controller } from "react-hook-form";

const EditableTotalItem = ({ data, control, item, handleQuantityChange }) => {
  return (
    data && (
      <FormGroup>
        <Label variant="semibold">{data.judul}</Label>
        <Controller
          name={item + ".nominal"}
          isDirty={true}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <CurrencyInput
                defaultValue={value}
                prefix="Rp "
                onValueChange={(value) => {
                  const newValue = parseInt(value ?? 0)
                  onChange(newValue);
                  handleQuantityChange(item, newValue * -1);
                }}
                allowNegativeValue="true"
                onBlur={onBlur}
              />
            );
          }}
        />
      </FormGroup>
    )
  );
};

export default EditableTotalItem;
