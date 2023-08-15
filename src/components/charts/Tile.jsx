import { Box, Badge, H6 } from '@adminjs/design-system'

const Tile = ({ title, subtitle, badge, badgeVariant }) => {
  return (
    <Box
      flex
      flexDirection="row"
      my={4}
      alignItems="center"
      justifyContent={"space-between"}
      variant="grey"
    >
      <Box flex flexDirection="column" mr={4}>
        <H6>{ title }</H6>
        <text>
          { subtitle }
        </text>
      </Box>
      <Box>
        {badge && <Badge variant={ badgeVariant }>
          { badge }
        </Badge>}
      </Box>
    </Box>
  );
};

export default Tile