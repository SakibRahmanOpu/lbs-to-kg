'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import InformationSection from '@/components/converter/information-section';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UnitInput from '@/components/converter/unit-input';
import { Button } from '@/components/ui/button';

// Example of how to add another converter using the same components

export default function CelsiusToFahrenheit() {
  const [celsius, setCelsius] = useState<string>('');
  const [fahrenheit, setFahrenheit] = useState<string>('');
  const [activeInput, setActiveInput] = useState<'celsius' | 'fahrenheit'>(
    'celsius'
  );

  // Convert celsius to fahrenheit
  const convertCelsiusToFahrenheit = () => {
    if (celsius === '') {
      setFahrenheit('');
      return;
    }

    const celsiusValue = parseFloat(celsius);
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  // Convert fahrenheit to celsius
  const convertFahrenheitToCelsius = () => {
    if (fahrenheit === '') {
      setCelsius('');
      return;
    }

    const fahrenheitValue = parseFloat(fahrenheit);
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    setCelsius(celsiusValue.toFixed(2));
  };

  // Handle celsius input change
  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    setActiveInput('celsius');
  };

  // Handle fahrenheit input change
  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    setActiveInput('fahrenheit');
  };

  // Handle convert button click
  const handleConvert = () => {
    if (activeInput === 'celsius') {
      convertCelsiusToFahrenheit();
    } else {
      convertFahrenheitToCelsius();
    }
  };

  // Handle clear button click
  const handleClear = () => {
    setCelsius('');
    setFahrenheit('');
  };

  // Auto-convert when either input changes
  useState(() => {
    if (activeInput === 'celsius' && celsius !== '') {
      convertCelsiusToFahrenheit();
    } else if (activeInput === 'fahrenheit' && fahrenheit !== '') {
      convertFahrenheitToCelsius();
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/temperature">
                Temperature Conversion
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-muted-foreground">
                Convert Celsius to Fahrenheit
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="text-2xl font-bold mb-6">
          Convert Celsius to Fahrenheit
        </h1>

        {/* Converter Section */}
        <div className="mb-10">
          <Card className="w-full max-w-2xl mx-auto shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl text-center">
                Convert °C to °F
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Please provide values below to convert Celsius (°C) to
                Fahrenheit (°F), or vice versa.
              </p>

              <div className="space-y-4">
                <UnitInput
                  label="From"
                  value={celsius}
                  unitName="°C"
                  onChange={handleCelsiusChange}
                  onFocus={() => setActiveInput('celsius')}
                />

                <UnitInput
                  label="To"
                  value={fahrenheit}
                  unitName="°F"
                  onChange={handleFahrenheitChange}
                  onFocus={() => setActiveInput('fahrenheit')}
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
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Information Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InformationSection
            title="Celsius"
            content={
              <>
                <p className="mb-2">
                  <strong>Definition:</strong> Celsius (symbol: °C) is a
                  temperature scale used by the International System of Units
                  (SI).
                </p>
                <p className="mb-2">
                  The Celsius scale was originally defined by the freezing point
                  of water (0°C) and the boiling point of water (100°C) at
                  standard atmospheric pressure.
                </p>
                <p>
                  Celsius is used worldwide for most temperature measurements in
                  scientific, medical, and everyday contexts. It's the standard
                  temperature scale in most countries except the United States.
                </p>
              </>
            }
          />

          <InformationSection
            title="Fahrenheit"
            content={
              <>
                <p className="mb-2">
                  <strong>Definition:</strong> Fahrenheit (symbol: °F) is a
                  temperature scale based on one proposed by physicist Daniel
                  Gabriel Fahrenheit in 1724.
                </p>
                <p className="mb-2">
                  In this scale, the freezing point of water is 32°F and the
                  boiling point is 212°F at standard atmospheric pressure.
                </p>
                <p>
                  The Fahrenheit scale is primarily used in the United States
                  and its territories for weather, cooking, and other everyday
                  temperature measurements. It's also occasionally used in the
                  United Kingdom for body temperature.
                </p>
              </>
            }
          />
        </div>
      </main>

      <footer className="bg-gray-100 border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} LbsToKg.org - All rights reserved
          </p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:underline">
              About Us
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
