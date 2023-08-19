import { FormGroup, Label, Box, Input } from "@adminjs/design-system";

const SubtotalItem = ({item, setter, label}) => {

  const rp = (n) => {
    return "Rp "+n.toLocaleString("id-ID")
  }

  return (
    <FormGroup>
      <Label>{label}</Label>
      <Box flex={true} alignItems={"baseline"} flexDirection="row">
        <Label fontSize={16} mx={4} fontWeight="semibold">
          {rp(item.nominal)}
        </Label>
        <Label fontSize={16} mx={4}>
          {" "}
          X{" "}
        </Label>
        <Input
          mx={4}
          type='number'
          variant="sm"
          value={item.jumlah}
          onChange={(e) => {
            const val = e.target.value === "" ? 0 : e.target.value;
            setter(() => {
              return {
                ...item,
                jumlah: val,
                subtotal: val * item.nominal,
              };
            });
          }}
        />
        <Label fontSize={16} mx={4}>
          {" "}
          ={" "}
        </Label>
        <Label fontSize={16} mx={4} fontWeight="semibold">
          {rp(item.subtotal)}
        </Label>
      </Box>
    </FormGroup>
  );
};

export default SubtotalItem;
