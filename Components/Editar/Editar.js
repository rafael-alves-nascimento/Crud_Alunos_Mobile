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

function Editar() {
  const [modalVisible, setModalVisible] = useState(false);
  const [matricula, setMatricula] = useState(null);
  const [Nome, setNome] = useState(null);
  const [Turma, setTurma] = useState(null);
  const [Nota, setNota] = useState(null);
  console.log(matricula);

  const EditarAluno = () => {

    if (matricula != null && Nome != null && Turma != null && Nota != null){
        api.put(matricula, {
            Nome: Nome,
            matricula: matricula,
            Turma: Turma,
            Nota: Nota,
        })
        .then(({ data }) => {
            console.log(data);
            alert("Informações alteradas no banco");
        });
    }else{
        alert('Por favor preencha todos os campos')
    }
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

              <Text style={styles.Cadastro}>Matricula:</Text>
              <TextInput
                style={styles.input}
                placeholder="Matricula"
                keyboardType={"phone-pad"}
                onChangeText={(dados) => setMatricula(dados)}
              />
              <Text style={styles.Cadastro}>Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                keyboardType={"phone-pad"}
                onChangeText={(dados) => setNome(dados)}
              />
              <Text style={styles.Cadastro}>Turma:</Text>
              <TextInput
                style={styles.input}
                placeholder="Turma"
                keyboardType={"phone-pad"}
                onChangeText={(dados) => setTurma(dados)}
              />
              <Text style={styles.Cadastro}>Nota:</Text>
              <TextInput
                style={styles.input}
                placeholder="Nota"
                keyboardType={"phone-pad"}
                onChangeText={(dados) => setNota(dados)}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#ff69b4",
                  width: 150,
                  height: 30,
                  margin: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  borderColor: "#000",
                }}
                onPress={() => EditarAluno()}
              >
                <Text style={{ color: "#fff" }}>Editar Aluno</Text>
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
        <Text style={styles.textStyle}>Editar</Text>
      </Pressable>
    </View>
  );
}

export default Editar;

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Cadastro: {
    margin: 10,
  },
  texto: {},
  input: {
    height: 20,
    borderWidth: 2,
    borderColor: "#fff",
    textTransform: "none",
  },
});
