function decimalToBinary(num) {
  // Handle the case when the input is 0
  if (num === 0) {
    return '0';
  }

  let binary = '';
  
  // Convert the decimal number to binary using repeated division by 2
  while (num > 0) {
    const remainder = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
  }
  
  return binary;
}

// Export the function so it can be used in other scripts
window.decimalToBinary = decimalToBinary;
