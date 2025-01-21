# Funções usadas no javascript

- modules
- generics
- funções prototype
- object
- array
- methods em js

## Comandos

- ts-node prototype/index.ts

## Modules

Modules é uma forma de organizar o código, dividindo-o em partes menores e reutilizáveis. Cada módulo pode conter funcionalidades específicas e ser exportado/importado entre outros módulos, permitindo maior modularidade, reutilização e manutenção do código.

### Exemplo React Native

```
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { add, subtract, multiply } from './math';  // Importando as funções

const App = () => {
  const sum = add(5, 3);
  const difference = subtract(5, 3);
  const product = multiply(5, 3);

  return (
    <View style={styles.container}>
      <Text>Sum: {sum}</Text>
      <Text>Difference: {difference}</Text>
      <Text>Product: {product}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
```

## Generics

Generics no TypeScript são uma maneira de escrever funções ou classes que podem trabalhar com qualquer tipo de dado (como números, strings, objetos etc.), sem perder a segurança de tipos. Isso é extremamente útil quando você precisa de funções que operam com diferentes tipos de dados, mas sem precisar criar uma nova função para cada tipo. O TypeScript assegura que você está utilizando os tipos de maneira consistente, evitando erros comuns que poderiam ocorrer ao usar tipos como any. Ou seja, você pode escrever código mais flexível e reutilizável, garantindo que os tipos sejam corretos durante a execução do programa.

### Exemplo React Native

```
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Componente genérico que recebe um tipo T para garantir que o tipo de dado seja consistente
interface ListItemProps<T> {
  data: T;
}

function ListItem<T>({ data }: ListItemProps<T>) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ListItem;
```

## Funções Prototype

O prototype é onde podemos adicionar métodos e propriedades que serão compartilhados por todas as instâncias de um objeto criado pela função construtora.

### Exemplo React Native

```
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface CarroProps {
  marca: string;
  modelo: string;
}

const Carro: React.FC<CarroProps> = ({ marca, modelo }) => {
  const [mensagem, setMensagem] = useState<string>('');

  const ligarCarro = () => {
    setMensagem(`${marca} ${modelo} está ligado!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Marca: {marca}</Text>
      <Text style={styles.text}>Modelo: {modelo}</Text>

      <Button title="Ligar Carro" onPress={ligarCarro} />

      {mensagem && <Text style={styles.mensagem}>{mensagem}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    margin: 5,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Carro marca="Fusca" modelo="1975" />
    </View>
  );
};

export default App;
```

## Object/Array

**Object** é usado para representar qualquer valor que não seja um tipo primitivo (string, number, boolean, null, undefined, symbol, etc.). Ele é útil para armazenar valores em uma estrutura de chave-valor.

**Array** é usado para armazenar uma lista de elementos do mesmo tipo. Ele pode ser definido de duas formas:

- Usando a sintaxe Array<T>, onde T é o tipo dos elementos da lista.
- Usando a sintaxe T[], que é uma forma mais compacta e comum de declarar arrays.

### Exemplo React Native

```
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface User {
  nome: string;
  idade: number;
  sobrenome: string;
}

const App = () => {
  const [user, setUser] = useState<User>({ nome: '', idade: 0, sobrenome: '' });

  const [users, setUsers] = useState<User[]>([]);

  const addUser = () => {
    if (user.nome && user.idade && user.sobrenome) {
      setUsers([...users, user]);
      setUser({ nome: '', idade: 0, sobrenome: '' });
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={user.nome}
        onChangeText={(text) => setUser({ ...user, nome: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={user.sobrenome}
        onChangeText={(text) => setUser({ ...user, sobrenome: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={String(user.idade)}
        onChangeText={(text) => setUser({ ...user, idade: Number(text) })}
        keyboardType="numeric"
      />

      <Button title="Adicionar Usuário" onPress={addUser} />

      <View style={styles.usersList}>
        {users.map((user, index) => (
          <Text key={index} style={styles.userItem}>
            {user.nome} {user.sobrenome} - {user.idade} anos
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  usersList: {
    marginTop: 20,
    width: '100%',
  },
  userItem: {
    fontSize: 16,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default App;
```

## Methods em JS

Methods são funções que estão associadas a um objeto ou uma classe. Elas são definidas dentro de uma classe ou de um objeto e podem ser chamadas para realizar ações ou retornar valores.

### Exemplo React Native

```
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class CounterApp extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>Contador: {this.state.count}</Text>
        <Button title="Incrementar" onPress={this.incrementCount} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CounterApp;
```
