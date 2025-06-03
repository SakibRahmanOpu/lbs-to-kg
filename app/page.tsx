'use client';

import { useState, useEffect, useCallback } from 'react';

import { Weight, ArrowLeftRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UnitInput from '@/components/converter/unit-input';
import InformationSection from '@/components/converter/information-section';
import ConversionTable from '@/components/converter/conversion-table';
import { generateConversionTable, weightConversions } from '@/lib/converters';
import { metadata } from './page-metadata';

export default function Home() {
  const [pounds, setPounds] = useState<string>('');
  const [kilograms, setKilograms] = useState<string>('');
  const [activeInput, setActiveInput] = useState<'pounds' | 'kilograms'>(
    'pounds'
  );
  const [isReversed, setIsReversed] = useState(false);

  // Convert pounds to kilograms
  const convertPoundsToKilograms = useCallback(() => {
    if (pounds === '') {
      setKilograms('');
      return;
    }

    const poundsValue = parseFloat(pounds);
    const kgValue = weightConversions.lbsToKg(poundsValue);
    setKilograms(kgValue.toFixed(7));
  }, [pounds]);

  // Convert kilograms to pounds
  const convertKilogramsToPounds = useCallback(() => {
    if (kilograms === '') {
      setPounds('');
      return;
    }

    const kgValue = parseFloat(kilograms);
    const poundsValue = weightConversions.kgToLbs(kgValue);
    setPounds(poundsValue.toFixed(7));
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

  // Handle switch button click
  const handleSwitch = () => {
    setIsReversed(!isReversed);
    setActiveInput(isReversed ? 'pounds' : 'kilograms');
    // Swap values
    const tempPounds = pounds;
    setPounds(kilograms);
    setKilograms(tempPounds);
  };

  // Auto-convert when either input changes
  useEffect(() => {
    if (activeInput === 'pounds') {
      if (pounds === '') {
        setKilograms('');
      } else {
        convertPoundsToKilograms();
      }
    } else if (activeInput === 'kilograms') {
      if (kilograms === '') {
        setPounds('');
      } else {
        convertKilogramsToPounds();
      }
    }
  }, [
    pounds,
    kilograms,
    activeInput,
    convertPoundsToKilograms,
    convertKilogramsToPounds,
  ]);

  // Helper for result text
  const showResult = () => {
    if (!isReversed && pounds !== '' && kilograms !== '') {
      return `Result: ${pounds} pound${
        parseFloat(pounds) === 1 ? '' : 's'
      } = ${kilograms} kilogram${parseFloat(kilograms) === 1 ? '' : 's'}`;
    }
    if (isReversed && kilograms !== '' && pounds !== '') {
      return `Result: ${kilograms} kilogram${
        parseFloat(kilograms) === 1 ? '' : 's'
      } = ${pounds} pound${parseFloat(pounds) === 1 ? '' : 's'}`;
    }
    // If both inputs are empty, clear the result
    if ((pounds === '' && !isReversed) || (kilograms === '' && isReversed)) {
      return '';
    }
    // If input is empty, output is also empty
    return '';
  };

  // Generate conversion table data
  const commonValues = [0.01, 0.1, 1, 2, 3, 5, 10, 20, 50, 100, 1000];
  const tableData = generateConversionTable(
    commonValues,
    isReversed ? weightConversions.kgToLbs : weightConversions.lbsToKg
  );

  const pageTitle = isReversed ? 'kg to lbs' : 'lbs to kg';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleSwitch}
          >
            <ArrowLeftRight className="h-4 w-4" />
            Switch Units
          </Button>
        </div>

        {/* Converter Section */}
        <div className="mb-10">
          <Card className="w-full max-w-2xl mx-auto shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl text-center">{pageTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Please provide values below to convert{' '}
                {isReversed
                  ? 'kilogram (kg) to pound (lbs)'
                  : 'pound (lbs) to kilogram (kg)'}
                , or vice versa.
              </p>

              <div className="space-y-4">
                <UnitInput
                  label="From"
                  value={isReversed ? kilograms : pounds}
                  unitName={isReversed ? 'kilogram' : 'pound'}
                  onChange={
                    isReversed ? handleKilogramsChange : handlePoundsChange
                  }
                  onFocus={() =>
                    setActiveInput(isReversed ? 'kilograms' : 'pounds')
                  }
                />

                <UnitInput
                  label="To"
                  value={isReversed ? pounds : kilograms}
                  unitName={isReversed ? 'pound' : 'kilogram'}
                  onChange={
                    isReversed ? handlePoundsChange : handleKilogramsChange
                  }
                  onFocus={() =>
                    setActiveInput(isReversed ? 'pounds' : 'kilograms')
                  }
                />

                <div className="flex space-x-4 mt-6">
                  <Button
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                    onClick={handleConvert}
                  >
                    Convert
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={handleClear}
                  >
                    Clear
                  </Button>
                </div>
                {/* Live result text */}
                {showResult() && (
                  <div className="mt-4 text-center text-base font-medium text-emerald-700 bg-emerald-50 rounded p-2">
                    {showResult()}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Information Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InformationSection
            title={isReversed ? 'Kilogram' : 'Pound'}
            content={
              <>
                <p className="mb-2">
                  <strong>Definition:</strong>{' '}
                  {isReversed
                    ? 'A kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI).'
                    : 'A pound (symbol: lb) is a unit of mass used in the imperial and US customary systems of measurement.'}
                </p>
                <p className="mb-2">
                  {isReversed
                    ? 'Originally defined as the mass of one liter of water at its freezing point, the kilogram is now defined in terms of the Planck constant. Since 2019, it has been defined by setting the value of the Planck constant exactly to 6.62607015×10⁻³⁴ joule-second.'
                    : 'The international avoirdupois pound is defined as exactly 0.45359237 kilograms. The avoirdupois pound is equivalent to 16 avoirdupois ounces.'}
                </p>
                <p>
                  {isReversed
                    ? 'The kilogram is used globally in nearly all fields and applications, with the exception of countries like the United States, where the pound is still commonly used for certain measurements.'
                    : 'The pound is widely used in the United States for measuring body weight and in various commercial and everyday applications. In the UK, pounds are often used alongside kilograms for body weight and certain retail items.'}
                </p>
              </>
            }
          />

          <InformationSection
            title={isReversed ? 'Pound' : 'Kilogram'}
            content={
              <>
                <p className="mb-2">
                  <strong>Definition:</strong>{' '}
                  {!isReversed
                    ? 'A kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI).'
                    : 'A pound (symbol: lb) is a unit of mass used in the imperial and US customary systems of measurement.'}
                </p>
                <p className="mb-2">
                  {!isReversed
                    ? 'Originally defined as the mass of one liter of water at its freezing point, the kilogram is now defined in terms of the Planck constant. Since 2019, it has been defined by setting the value of the Planck constant exactly to 6.62607015×10⁻³⁴ joule-second.'
                    : 'The international avoirdupois pound is defined as exactly 0.45359237 kilograms. The avoirdupois pound is equivalent to 16 avoirdupois ounces.'}
                </p>
                <p>
                  {!isReversed
                    ? 'The kilogram is used globally in nearly all fields and applications, with the exception of countries like the United States, where the pound is still commonly used for certain measurements.'
                    : 'The pound is widely used in the United States for measuring body weight and in various commercial and everyday applications. In the UK, pounds are often used alongside kilograms for body weight and certain retail items.'}
                </p>
              </>
            }
          />
        </div>

        {/* Conversion Table */}
        <div className="mb-10">
          <ConversionTable
            title={
              isReversed
                ? 'Kilogram to Pound Conversion Table'
                : 'Pound to Kilogram Conversion Table'
            }
            leftHeader={isReversed ? 'Kilogram [kg]' : 'Pound [lbs]'}
            rightHeader={isReversed ? 'Pound [lbs]' : 'Kilogram [kg]'}
            data={tableData}
          />
        </div>
      </main>
    </div>
  );
}
