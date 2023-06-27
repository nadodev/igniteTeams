import Loading from '@components/Loading';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import NewGroup from '@screens/NewGroup';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import themes from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={themes}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
