const React = require('react')
const { Box, Button, H2, H5, Illustration, IllustrationProps, Text } = require('@adminjs/design-system')
const { styled } = require('@adminjs/design-system/styled-components')

const { useTranslation } = require('../../hooks/index.js')

const pageHeaderHeight = 284
const pageHeaderPaddingY = 74
const pageHeaderPaddingX = 250

module.exports = {
    DashboardHeader : () => {
    const { translateMessage } = useTranslation()
        return (
            <Box position="relative" overflow="hidden" data-css="default-dashboard">
            <Box
                position="absolute"
                top={50}
                left={-10}
                opacity={[0.2, 0.4, 1]}
                animate
            >
                <Illustration variant="Rocket" />
            </Box>
            <Box
                position="absolute"
                top={-70}
                right={-15}
                opacity={[0.2, 0.4, 1]}
                animate
            >
                <Illustration variant="Moon" />
            </Box>
            <Box
                bg="grey100"
                height={pageHeaderHeight}
                py={pageHeaderPaddingY}
                px={['default', 'lg', pageHeaderPaddingX]}
            >
                <Text textAlign="center" color="white">
                <H2>{translateMessage('welcomeOnBoard_title')}</H2>
                <Text opacity={0.8}>
                    {translateMessage('welcomeOnBoard_subtitle')}
                </Text>
                </Text>
            </Box>
            </Box>
        )
    },
    Dashboard : () => {
        const { translateMessage, translateButton } = useTranslation()
      
        return (
          <Box>
            <DashboardHeader />
            <Box
              mt={['xl', 'xl', '-100px']}
              mb="xl"
              mx={[0, 0, 0, 'auto']}
              px={['default', 'lg', 'xxl', '0']}
              position="relative"
              flex
              flexDirection="row"
              flexWrap="wrap"
              width={[1, 1, 1, 1024]}
            >
              <Card width={1} m="lg">
                <Text textAlign="center">
                  <Illustration variant="AdminJSLogo" />
                  <H5>{translateMessage('needMoreSolutions_title')}</H5>
                  <Text>{translateMessage('needMoreSolutions_subtitle')}</Text>
                  <Text mt="xxl">
                    <Button
                      as="a"
                      variant="contained"
                      href="https://share.hsforms.com/1IedvmEz6RH2orhcL6g2UHA8oc5a"
                      target="_blank"
                    >
                      {translateButton('contactUs')}
                    </Button>
                  </Text>
                </Text>
              </Card>
            </Box>
          </Box>
        )
      }
}

// type BoxType = {
//   variant: string;
//   title: string;
//   subtitle: string;
//   href: string;
// }

const boxes = ({ translateMessage })=> [{
  variant: 'Planet',
  title: translateMessage('addingResources_title'),
  subtitle: translateMessage('addingResources_subtitle'),
  href: 'https://adminjs.co/tutorial-passing-resources.html',
}, {
  variant: 'DocumentCheck',
  title: translateMessage('customizeResources_title'),
  subtitle: translateMessage('customizeResources_subtitle'),
  href: 'https://adminjs.co/tutorial-customizing-resources.html',
}, {
  variant: 'DocumentSearch',
  title: translateMessage('customizeActions_title'),
  subtitle: translateMessage('customizeActions_subtitle'),
  href: 'https://adminjs.co/tutorial-actions.html',
}, {
  variant: 'FlagInCog',
  title: translateMessage('writeOwnComponents_title'),
  subtitle: translateMessage('writeOwnComponents_subtitle'),
  href: 'https://adminjs.co/tutorial-writing-react-components.html',
}, {
  variant: 'Folders',
  title: translateMessage('customDashboard_title'),
  subtitle: translateMessage('customDashboard_subtitle'),
  href: 'https://adminjs.co/tutorial-custom-dashboard.html',
}, {
  variant: 'Astronaut',
  title: translateMessage('roleBasedAccess_title'),
  subtitle: translateMessage('roleBasedAccess_subtitle'),
  href: 'https://adminjs.co/tutorial-rbac.html',
}]

const Card = styled(Box)`
  display: ${({ flex })=> (flex ? 'flex' : 'block')};
  color: ${({ theme }) => theme.colors.grey100};
  height: 100%;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.space.md};
  transition: all 0.1s ease-in;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary100};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`

Card.defaultProps = {
  variant: 'container',
  boxShadow: 'card',
}