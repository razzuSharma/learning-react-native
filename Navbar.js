import React, { useState } from "react";
import {
  ScrollView,
  RefreshControl,
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
} from "react-native";

function Navbar() {
  const [value, setValue] = useState(0);
  const [item, setItem] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setValue(0)
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  function onPressLearnMore() {
    setValue(value + 10);
    if (value >= 50) {
      setItem(true);
    } else {
      return;
    }
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ margin: 50 }}>
        <Text>{value} </Text>
        <Button
          onPress={onPressLearnMore}
          title="Click Me"
          color="#f194ff"
          disabled={item}
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => {
            setValue(0);
          }}
          title="Reset"
          color="red"
          accessibilityLabel="Learn more about this purple button"
          style={{ margin: 15 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navbar;
