import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from './styles'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>My trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          libero et metus gravida venenatis. Cras nec arcu ac metus ultricies
          tincidunt. Nulla facilisi. Nullam ut felis nec nulla ultricies
          condimentum. Nulla facilisi. Nullam ut felis nec nulla ultricies
          condimentum. Nulla facilisi.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
