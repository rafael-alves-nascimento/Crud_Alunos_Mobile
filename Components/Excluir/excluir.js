import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import api from "../../Api/api";

function Excluir() {
  const [modalVisible, setModalVisible] = useState(false);
  const [matricula, setMatricula] = useState("");

  console.log(matricula)

  const DeletarAluno = () => {
    api.delete(matricula).then(({ data }) => {
      console.log(data);
      alert("Aluno deletado do banco");
    });
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.container}>

              <Text style={styles.Cadastro}>
                Insira o numero da matricula :
              </Text>
              <TextInput
                name="deletar_matricula"
                style={styles.input}
                placeholder="Matricula"
                keyboardType={"phone-pad"}
                onChangeText={(dados) => setMatricula(dados)}
              />
              <TouchableOpacity
                style={{backgroundColor:"#ff69b4",width:150,height:30,margin:20,display:"flex",alignItems:'center',justifyContent:'center',borderRadius:10,borderColor:'#000'}}
                onPress={() => DeletarAluno()}
              >
            <Text style={{ color: "#fff" }}>Excluir Aluno</Text>
              </TouchableOpacity>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Excluir</Text>
      </Pressable>
    </View>
  );
}

export default Excluir;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor:"#000",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 20,
  },
  buttonOpen: {
    backgroundColor: "#ff69b4",
  },
  buttonClose: {
    backgroundColor: "#ff69b4",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container: {
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
  },
  Cadastro: {
      margin: 10,

  },
  texto: {},
  input: {
      height: 20,
      borderWidth:2,
      borderColor:"#fff",
      textTransform:'none',
  },
});
