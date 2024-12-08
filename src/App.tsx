import './App.css';
import { ButtonStl, BtnCont } from './styles/BtnStyles';
import { Text, Headline } from './styles/TextStyles';
import { Box } from './styles/BoxStyles';
import { Image } from './ImageStyles';

function App() {
  return (
    <div className="App">
      <Box>
        <Image src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eBFzmjfM7Jp9PBq6f1bU-mjKD9HL-tlwg9gEW-RomNvMWrtoZNB0d0pvQAey1JIC5RJ5qULN6JGZR4I2aOZ12QsMXoM4H4szVeSWJ24REo~5tUms4xSWC4m6Q5k4znQ9XeB7WKJzlf9LiPH3q6fTNL0aXP9V3w5zzBUf3UmC~bpfGoJI8xnBdJgEmakprv19u-Ve71K7PgTGtYKZ4wgkuG4OmbPqPkowO91GON-1a0dLg4fY3WY9BNOu2ywkkYR8Y~90CAisM33UR2sMTkxG9030jQtQAxjZmiVFOtAyKq40g81sP3csJwYAnh-9aPaqSVCes042~b-JzoHvKF8l1A__"/>
        <Headline>Headline</Headline>
        <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
        <BtnCont>
        <ButtonStl bkGrCol = {"#4E71FE"}
          btnCol = {"white"}
          brStl = {"none"}>See more
        </ButtonStl>
        <ButtonStl bkGrCol = {"transparent"}
          btnCol = {"#4E71FE"}
          brCol = {"#4E71FE"}>Save
        </ButtonStl>
        </BtnCont>
      </Box>
    </div>
  );
}

export default App;