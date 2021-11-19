import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    footer: {
      marginHorizontal: 50,
      marginBottom: 15,
      width: "85%",
      fontSize: "11px",
      borderTop: '1px solid black',
      paddingBottom: "30px",
      paddingTop: "10px",
      static: {
        display: 'flex',
        width: "85%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid black',
        paddingTop: 15,
        marginHorizontal: 50,
        fontSize: 7
      }
    }
  });

  const Footer = () => {
      return (
        <View fixed>
          <View style={styles.footer}>
            <Text>Kontrolmyndighed: DK-ØKO-100</Text>
          </View>
          <View style={styles.footer.static}>
            <Text>Råhandel ApS - Bognæsvej 4 - 4000 Roskilde - CVR-nr.: 37405906</Text>
            <Text>Tlf.: 92 45 01 05 - Mail: bogholderi@raahandel.dk - Web: www.rahandel.dk</Text>
            <Text>Bank: Merkur Andelskasse - Kontonr.:8401 / 1294893 - IBAN-nr.: DK3384010001294893 - SWIFT-kode: MEKUDK21</Text>
          </View>
        </View>
      )
  }


  export default Footer