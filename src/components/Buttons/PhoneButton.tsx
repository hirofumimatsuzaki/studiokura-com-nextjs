import { Button } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

interface Props {
  text?: string
  mr?: number
  mt?: number
  size?: string
  color?: string
  bg?: string
  hoverbg?: string
  borderRadius?: number
  hasIcon?: boolean
}

const PhoneButton: React.FC<Props> = ({
  text,
  mr,
  mt,
  size,
  color,
  bg,
  hoverbg,
  borderRadius,
  hasIcon
}) => {
  return (
    <Button
      mr={mr}
      mt={mt}
      size={size}
      as={'a'}
      href={'tel:092-325-1773'}
      borderRadius={borderRadius}
      fontWeight={600}
      color={color}
      bg={bg}
      _hover={{
        bg: hoverbg
      }}
    >
      {hasIcon && (
        <>
          <PhoneIcon />
          &nbsp;
        </>
      )}
      {text}
    </Button>
  )
}
export { PhoneButton }

PhoneButton.defaultProps = {
  text: '092-325-1773',
  mr: 0,
  mt: 0,
  size: 'md',
  color: 'text',
  bg: 'gray.100',
  hoverbg: 'gray.200',
  borderRadius: 4,
  hasIcon: true
}