import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ProductInput = () => {
  // State untuk input fields
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductStock, setNewProductStock] = useState('');

  // Fungsi untuk menambahkan produk
  const addProductRecord = () => {
    if (newProductName && newProductPrice && newProductStock) {
      // Logika untuk menambahkan produk baru, bisa disesuaikan dengan backend atau state lainnya
      console.log('Produk ditambahkan:', {
        name: newProductName,
        price: newProductPrice,
        stock: newProductStock,
      });

      // Reset input fields setelah data ditambahkan
      setNewProductName('');
      setNewProductPrice('');
      setNewProductStock('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Data Produk</Text>

      {/* Form untuk input produk */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nama Produk"
          value={newProductName}
          onChangeText={setNewProductName}
        />
        <TextInput
          style={styles.input}
          placeholder="Harga (mis. Rp 100.000)"
          value={newProductPrice}
          onChangeText={setNewProductPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Stok"
          keyboardType="numeric"
          value={newProductStock}
          onChangeText={setNewProductStock}
        />
        <Button title="Tambah Produk" onPress={addProductRecord} color="#4a148c" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f4f6', // Latar belakang abu-abu muda untuk kesan modern
    justifyContent: 'center', // Posisikan konten di tengah
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a148c', // Warna ungu untuk judul
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default ProductInput;
