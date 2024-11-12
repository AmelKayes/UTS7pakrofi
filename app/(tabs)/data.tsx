import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProductHistory = () => {
  // Data produk dengan 20 item
  const productRecords = [
    { name: 'Produk A', price: 'Rp 50.000', stock: '100' },
    { name: 'Produk B', price: 'Rp 30.000', stock: '150' },
    { name: 'Produk C', price: 'Rp 75.000', stock: '50' },
    { name: 'Produk D', price: 'Rp 40.000', stock: '200' },
    { name: 'Produk E', price: 'Rp 25.000', stock: '75' },
    { name: 'Produk F', price: 'Rp 60.000', stock: '120' },
    { name: 'Produk G', price: 'Rp 80.000', stock: '90' },
    { name: 'Produk H', price: 'Rp 55.000', stock: '300' },
    { name: 'Produk I', price: 'Rp 45.000', stock: '60' },
    { name: 'Produk J', price: 'Rp 35.000', stock: '150' },
    { name: 'Produk K', price: 'Rp 70.000', stock: '180' },
    { name: 'Produk L', price: 'Rp 90.000', stock: '110' },
    { name: 'Produk M', price: 'Rp 65.000', stock: '85' },
    { name: 'Produk N', price: 'Rp 20.000', stock: '250' },
    { name: 'Produk O', price: 'Rp 85.000', stock: '140' },
    { name: 'Produk P', price: 'Rp 95.000', stock: '50' },
    { name: 'Produk Q', price: 'Rp 55.000', stock: '220' },
    { name: 'Produk R', price: 'Rp 100.000', stock: '60' },
    { name: 'Produk S', price: 'Rp 110.000', stock: '180' },
    { name: 'Produk T', price: 'Rp 120.000', stock: '170' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Riwayat Produk</Text>
      <Text style={styles.description}>
        Berikut adalah daftar produk yang telah diinput. Anda dapat melihat nama, harga, dan stok produk.
      </Text>

      {/* Render each product record */}
      {productRecords.map((product, index) => (
        <View key={index} style={styles.record}>
          <Text style={styles.recordName}>{product.name}</Text>
          <Text style={styles.recordPrice}>{product.price}</Text>
          <Text style={styles.recordStock}>{product.stock} Stok</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f3f4f6', // Latar belakang abu-abu muda yang serasi dengan halaman input
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a148c', // Warna ungu konsisten dengan halaman input
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  record: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recordName: {
    fontSize: 14,
    color: '#4a148c', // Warna ungu untuk nama produk
    fontWeight: '600',
  },
  recordPrice: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  recordStock: {
    fontSize: 14,
    color: '#d81b60', // Warna merah muda untuk menonjolkan stok
    fontWeight: '500',
  },
});

export default ProductHistory;
