import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants/index';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={BACKGROUNDIMAGE} 
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find your dream</Text>
          <Text style={styles.titleText}>property here</Text>
          
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>Explore the best selection of</Text>
            <Text style={styles.titleSubText}>properties that suit your needs</Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Link href="/join" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Join Now</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </Link>
          
          
          <Link href="/(home)" asChild>
            <TouchableOpacity style={[styles.buttonSecondary, { marginTop: 10 }]}>
              <Text style={styles.buttonSecondaryText}>Go to Home Tabs</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.buttonGroupSubText}>
          <Text style={styles.titleSubText}>Or continue with</Text>
        </View>
      </ImageBackground>
    </View>
  );
}