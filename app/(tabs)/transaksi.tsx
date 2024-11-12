import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Transaksi = () => {
  // State untuk menyimpan transaksi yang baru
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [transactionHistory, setTransactionHistory] = useState([]);

  // Fungsi untuk menambahkan transaksi ke riwayat
  const addTransaction = () => {
    if (product && price && quantity) {
      const newTransaction = {
        product,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        total: parseFloat(price) * parseInt(quantity),
      };
      setTransactionHistory([newTransaction, ...transactionHistory]);
      setProduct('');
      setPrice('');
      setQuantity('');
    } else {
      alert('Isi semua data transaksi!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Kasir */}
      <View style={styles.cashier}>
        <Text style={styles.title}>Kasir</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama Produk"
          value={product}
          onChangeText={setProduct}
        />
        <TextInput
          style={styles.input}
          placeholder="Harga"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Jumlah"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />
        <Button title="Tambah Transaksi" onPress={addTransaction} color="#4a148c" />
      </View>

      {/* Riwayat Transaksi */}
      <ScrollView contentContainerStyle={styles.historyContainer}>
        <Text style={styles.title}>Riwayat Transaksi</Text>
        {transactionHistory.length === 0 ? (
          <Text style={styles.noTransactions}>Belum ada transaksi</Text>
        ) : (
          transactionHistory.map((transaction, index) => (
            <View key={index} style={styles.transactionCard}>
              <Text style={styles.transactionText}>Produk: {transaction.product}</Text>
              <Text style={styles.transactionText}>Harga: Rp {transaction.price}</Text>
              <Text style={styles.transactionText}>Jumlah: {transaction.quantity}</Text>
              <Text style={styles.transactionText}>Total: Rp {transaction.total}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e1bee7', // Warna latar belakang yang sama dengan halaman input
  },
  cashier: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a148c', // Warna ungu konsisten
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  historyContainer: {
    paddingBottom: 20,
  },
  noTransactions: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginTop: 20,
  },
  transactionCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  transactionText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});

export default Transaksi;
