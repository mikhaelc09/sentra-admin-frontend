import { FormGroup, Label, CurrencyInput } from '@adminjs/design-system'

const TotalItem = ({data}) => {
  return (
    <FormGroup>
      <Label variant="semibold">{data.judul}</Label>
      <CurrencyInput value={data.nominal} borderless="true" prefix="Rp " />
    </FormGroup>
  );
};

export default TotalItem;
