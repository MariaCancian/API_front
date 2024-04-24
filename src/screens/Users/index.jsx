import { TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const getUsers = async () => {
    try{
      const response = await axios.get(`${apiURL}/users`);
      setUsers(response.data.users);
    }catch(error){
      console.error(error)
    }
  };

  useEffect(()=>{
    getUsers();
  }, []);

  console.log("usuarios", users);
  return(
    <View>
      <Title title={'Pag usuarios'}/>

  {users? (
    users.map((user)=>{
  return (
    <View key={user.id} style={styles.container}>
      <Title title={user.name} />
      <Title title={user.email} />
    </View>
  );
})
):(
  <Title title="carregando.."/>
)
}
<TouchableOpacity onPress={getUsers} style={styles.button}>
  <Text style={styles}
</TouchableOpacity>
</View>
  )
}
