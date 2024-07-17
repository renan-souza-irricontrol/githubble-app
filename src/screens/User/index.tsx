import { Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { styles } from "./style";

type RouteParams = {
  githubUser: {
    avatar_url: string;
  };
};

export function User() {
  const route = useRoute();

  const { githubUser } = route.params as RouteParams;

  return (
    <View style={styles.container}>
      <Text style={styles.projectName}>{githubUser.avatar_url}</Text>
    </View>
  );
}
