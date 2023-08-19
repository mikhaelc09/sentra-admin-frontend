import { FormGroup, Label, Box, Input } from "@adminjs/design-system";

const SubtotalItem = ({item, setter, label, index}) => {

  const rp = (n) => {
    return "Rp "+n.toLocaleString("id-ID")
  }

  return (
    <FormGroup>
      <Label>{label}</Label>
      <Box flex={true} alignItems={"baseline"} flexDirection="row">
      <Input
          mx={4}
          type='text'
          variant="sm"
          value={item.judul}
          placeholder='Judul'
          onChange={(e) => {
            setter((prev) => {
              return prev.map((el, i) => {
                if (i === index) {
                  return {
                    ...el,
                    judul: e.target.value,
                  };
                } 
                return el;
              })
            });
          }}
        />
        <Input
          mx={4}
          type='number'
          variant="sm"
          value={item.nominal}
          placeholder='Nominal'
          onChange={(e) => {
            const val = e.target.value === "" ? 0 : e.target.value;
            setter((prev) => {
              return prev.map((el, i) => {
                if (i === index) {
                  return {
                    ...el,
                    nominal: e.target.value,
                  };
                } 
                return el;
              })
            });
          }}
        />
        <Input
          mx={4}
          type='text'
          variant="sm"
          value={item.keterangan}
          placeholder='Keterangan'
          onChange={(e) => {
            setter((prev) => {
              return prev.map((el, i) => {
                if (i === index) {
                  return {
                    ...el,
                    keterangan: e.target.value,
                  };
                } 
                return el;
              })
            });
          }}
        />
      </Box>
    </FormGroup>
  );
};

export default SubtotalItem;
