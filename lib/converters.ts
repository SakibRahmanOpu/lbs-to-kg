// Conversion utilities for different unit types

// Weight conversion factors
export const weightConversions = {
  // Pound to Kilogram: 1 lb = 0.453592 kg
  lbsToKg: (lbs: number): number => lbs * 0.453592,
  
  // Kilogram to Pound: 1 kg = 2.20462 lbs
  kgToLbs: (kg: number): number => kg * 2.20462,
};

// Function to format number with specified decimal places
export const formatNumber = (num: number, decimals: number = 6): string => {
  return num.toFixed(decimals);
};

// Validation function to check if input is a valid number
export const isValidNumber = (value: string): boolean => {
  if (value === '' || value === null) return true;
  return !isNaN(parseFloat(value)) && isFinite(Number(value));
};

// Generate conversion table data for common values
export const generateConversionTable = (
  values: number[],
  conversionFn: (val: number) => number,
  decimals: number = 7
): { input: string; output: string }[] => {
  return values.map((value) => ({
    input: value.toString(),
    output: formatNumber(conversionFn(value), decimals),
  }));
};