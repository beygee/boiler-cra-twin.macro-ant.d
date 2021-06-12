import tw, { styled } from 'twin.macro'
import { Result } from 'antd'

function App() {
  return (
    <Section>
      <Result status="success" title="Successfully installed" />
    </Section>
  )
}

const Section = styled.section`
  ${tw`w-screen h-screen flex items-center justify-center`}
`

export default App
