'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UnitInput from './unit-input';
import { weightConversions, formatNumber } from '@/lib/converters';

export default function ConverterSection() {
  const [pounds, setPounds] = useState<string>('');
  const [kilograms, setKilograms] = useState<string>('');
  const [activeInput, setActiveInput] = useState<'pounds' | 'kilograms'>(
    'pounds'
  );

  // Convert pounds to kilograms
  const convertPoundsToKilograms = useCallback(() => {
    if (pounds === '') {
      setKilograms('');
      return;
    }

    const poundsValue = parseFloat(pounds);
    const kgValue = weightConversions.lbsToKg(poundsValue);
    setKilograms(formatNumber(kgValue, 7));
  }, [pounds]);

  // Convert kilograms to pounds
  const convertKilogramsToPounds = useCallback(() => {
    if (kilograms === '') {
      setPounds('');
      return;
    }

    const kgValue = parseFloat(kilograms);
    const poundsValue = weightConversions.kgToLbs(kgValue);
    setPounds(formatNumber(poundsValue, 7));
  }, [kilograms]);

  // Handle pounds input change
  const handlePoundsChange = (value: string) => {
    setPounds(value);
    setActiveInput('pounds');
  };

  // Handle kilograms input change
  const handleKilogramsChange = (value: string) => {
    setKilograms(value);
    setActiveInput('kilograms');
  };

  // Handle convert button click
  const handleConvert = () => {
    if (activeInput === 'pounds') {
      convertPoundsToKilograms();
    } else {
      convertKilogramsToPounds();
    }
  };

  // Handle clear button click
  const handleClear = () => {
    setPounds('');
    setKilograms('');
  };

  // Auto-convert when either input changes
  useEffect(() => {
    if (activeInput === 'pounds' && pounds !== '') {
      convertPoundsToKilograms();
    }
  }, [pounds, activeInput, convertPoundsToKilograms]);

  useEffect(() => {
    if (activeInput === 'kilograms' && kilograms !== '') {
      convertKilogramsToPounds();
    }
  }, [kilograms, activeInput, convertKilogramsToPounds]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md">
      <CardHeader className="bg-gray-50 border-b">
        <CardTitle className="text-xl text-center">Convert lbs to kg</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-4">
          Please provide values below to convert pound (lbs) to kilogram (kg),
          or vice versa.
        </p>

        <div className="space-y-4">
          <UnitInput
            label="From"
            value={pounds}
            unitName="pound"
            onChange={handlePoundsChange}
            onFocus={() => setActiveInput('pounds')}
          />

          <UnitInput
            label="To"
            value={kilograms}
            unitName="kilogram"
            onChange={handleKilogramsChange}
            onFocus={() => setActiveInput('kilograms')}
          />

          <div className="flex space-x-4 mt-6">
            <Button
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={handleConvert}
            >
              Convert
            </Button>
            <Button variant="outline" className="flex-1" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
