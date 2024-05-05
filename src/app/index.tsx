import { Redirect } from 'expo-router';

const HomeScreen = () => {
  return <Redirect href={'/(home)/(tabs)'} />;
};

export default HomeScreen;
