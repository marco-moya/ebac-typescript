function calculateAge(birthdate: string): number {
  const today = new Date();
  const birth = new Date(birthdate + "T00:00:00");
  let age = today.getFullYear() - birth.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const monthOfBirth = birth.getMonth() + 1;
  
  if (currentMonth < monthOfBirth || (currentMonth === monthOfBirth && today.getDate() < birth.getDate())) {
      age--;
  }
  
  return age;
}

// Ejemplo de uso
const birthdate = '1990-05-15';
const age = calculateAge(birthdate);
console.log(`La edad es: ${age}`);
