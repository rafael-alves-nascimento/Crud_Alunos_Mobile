import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import api from "./Api/api";
import Excluir from "./Components/Excluir/excluir";
import Cadastrar from "./Components/Cadastrar/Cadastrar";
import Editar from "./Components/Editar/Editar";

export default function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    api.get("").then(({ data }) => {
      setDados(data);
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 25 }}>Alunos Cadastrados</Text>
        <Image
          style={{ width: 70, height: 70, margin: 10 }}
          source={require("./assets/Escola.png")}
        />
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Matricula</DataTable.Title>
            <DataTable.Title>Nome</DataTable.Title>
            <DataTable.Title>Turma</DataTable.Title>
            <DataTable.Title>Nota</DataTable.Title>
          </DataTable.Header>

          {dados.map((alunos) => (
            <DataTable.Row>
              <DataTable.Cell>{alunos.matricula}</DataTable.Cell>
              <DataTable.Cell>{alunos.Nome}</DataTable.Cell>
              <DataTable.Cell>{alunos.Turma}</DataTable.Cell>
              <DataTable.Cell>{alunos.Nota}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
        <View style={styles.modal}>
          <Excluir/>
          <Cadastrar />
          <Editar />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "aqua",
    padding: 10,
    width: 170,
    margin: 20,
    borderRadius: 10,
  },
  modal: {
    display: "flex",
    flexDirection: "row",
  },
});
