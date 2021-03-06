import styled from 'styled-components'
import { media } from 'src/media'

const DATA = [
  {
    title: `easy \n to use`,
    text: `No need to develop \n the habit`,
    icon: `/assets/stars.svg`,
  },
  {
    title: `Freemium \n Option`,
    text: `Can be \n used free \n of charge`,
    icon: `/assets/wallet.svg`,
  },
  {
    title: `Adjustable settings`,
    text: `Include what's needed`,
    icon: `/assets/moon.svg`,
  },
]
const Root = styled.div`
  font-family: var(--fonts-second);
  padding: 96px 0;

  ${media.laptop`
    padding: 68px 0;
  `}

  ${media.tablet`
    padding: 48px 0;
  `}
`

const Title = styled.h2`
  margin: 0 auto;
  max-width: 700px;
  font-weight: 500;
  font-size: 56px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-black);

  ${media.laptop`
    max-width: 600px;
    font-size: 62px;
    line-height: 64px;
  `}

  ${media.tablet`
    max-width: 320px;
    font-size: 42px;
    line-height: 44px;
  `}
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 48px;

  ${media.laptop`
    gap: 24px;
  `}

  ${media.tablet`
    gap: 20px;
    margin-top: 34px;
  `}
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 265px;
  height: 400px;
  padding: 24px;
  background: var(--color-ground-100);
  border-radius: 34px;

  ${media.laptop`
    width: 324px;
    height: 324px;
  `}

  ${media.tablet`
    max-width: 320px;
    height: 320px;
  `}
`

const CardBlack = styled(Card)`
  background: var(--color-black);
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CardText = styled.p`
  font-size: 34px;
  line-height: 38px;
  text-transform: uppercase;
  white-space: pre-line;
  color: var(--color-black);

  ${media.laptop`
    white-space: normal;
  `}

  ${media.tablet`
    font-size: 28px;
    line-height: 32px;
  `}
`

const CardTextWhite = styled(CardText)`
  color: var(--color-white);
`

const CardTextGrey = styled(CardText)`
  color: var(--color-ground-700);
`

const Space = styled.div`
  height: 8px;

  ${media.tablet`
    height: 4px;
  `}
`

export const Benefits: React.FC = () => {
  return (
    <Root>
      <Title>Try a new way to feel better with Breathhh</Title>
      <Cards>
        {DATA.map((item, index) => {
          return (
            <Card key={index}>
              <TextWrapper>
                <CardText>{item.title}</CardText>
                <Space />
                <CardTextGrey>{item.text}</CardTextGrey>
              </TextWrapper>
              <img width="34" height="34" src={item.icon} alt="avatar" />
            </Card>
          )
        })}
        <CardBlack>
          <TextWrapper>
            <CardTextWhite>Private {`\n`} and secure</CardTextWhite>
            <Space />
            <CardTextGrey>Reliable storage and protection</CardTextGrey>
          </TextWrapper>
          <img width="34" height="34" src="/assets/lock.svg" alt="avatar" />
        </CardBlack>
      </Cards>
    </Root>
  )
}
