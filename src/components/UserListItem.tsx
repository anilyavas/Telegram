import { View, Text, StyleSheet } from 'react-native';

const UserListItem = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{user.full_name}</Text>
    </View>
  );
};

export default UserListItem;
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  user: {
    fontWeight: '600',
  },
});
