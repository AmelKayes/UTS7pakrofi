import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4a148c', // Ungu gelap untuk tab aktif
        tabBarInactiveTintColor: '#7b1fa2', // Ungu yang lebih muda untuk tab tidak aktif
        tabBarStyle: {
          backgroundColor: '#e1bee7', // Ungu muda untuk latar belakang tab bar
        },
      }}
    >
      <Tabs.Screen
        name="input"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="create-outline" size={size} color={color} /> // Ikon input
          ),
          tabBarLabel: 'Input',
        }}
      />
      <Tabs.Screen
        name="data"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="folder-outline" size={size} color={color} /> // Ikon data
          ),
          tabBarLabel: 'Data',
        }}
      />
      <Tabs.Screen
        name="transaksi"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} /> // Ikon transaksi
          ),
          tabBarLabel: 'Transaksi',
        }}
      />
    </Tabs>
  );
};
