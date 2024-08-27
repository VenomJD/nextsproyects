import bcrypt from 'bcrypt';

const saltRounds = 10; // Número de rondas de generación de salt

async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error('Error hasheando la contraseña:', error);
    throw error;
  }
}

async function verifyPassword(plainPassword, hashedPassword) {
    try {
      const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
      return isMatch; // true si la contraseña coincide, false en caso contrario
    } catch (error) {
      console.error('Error verificando la contraseña:', error);
      throw error;
    }
  }

