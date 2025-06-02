'use client';

import { ChangeEvent, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { isValidNumber } from '@/lib/converters';

interface UnitInputProps {
  label: string;
  value: string;
  unitName: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
}

export default function UnitInput({
  label,
  value,
  unitName,
  onChange,
  onFocus,
}: UnitInputProps) {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (newValue === '' || isValidNumber(newValue)) {
      setError(null);
      onChange(newValue);
    } else {
      setError('Please enter a valid number');
    }
  };

  useEffect(() => {
    // Clear error if value is reset externally
    if (value === '') {
      setError(null);
    }
  }, [value]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <Label htmlFor={unitName} className="text-sm font-medium">
          {label}:
        </Label>
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
      <div className="relative">
        <Input
          id={unitName}
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          className={`w-full p-2 rounded-md border ${
            error ? 'border-destructive' : 'border-input'
          }`}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <span className="text-sm text-muted-foreground">{unitName}</span>
        </div>
      </div>
    </div>
  );
}