import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_join';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants/index';
import { useState } from 'react';

export default function SignInScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Link href="/">
          <Text>Back</Text>
        </Link>
        <Image source={HEROLOGOGREEN} />
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput 
            style={styles.formControl}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#4285F4' }]}>
          <Image source={GOOGLELOGO} />
          <Text style={[styles.secondaryButtonText, { color: '#4285F4' }]}>
            Sign in with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#3B5998' }]}>
          <Image source={FACEBOOKLOGO} />
          <Text style={[styles.secondaryButtonText, { color: '#3B5998' }]}>
            Sign in with Facebook
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don't have an account? </Text>
        <Link href="/join" asChild>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}>Join now</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}