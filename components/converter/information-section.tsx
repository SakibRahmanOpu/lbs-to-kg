import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InformationSectionProps {
  title: string;
  content: React.ReactNode;
}

export default function InformationSection({
  title,
  content
}: InformationSectionProps) {
  return (
    <Card className="shadow-sm mb-8">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          {content}
        </div>
      </CardContent>
    </Card>
  );
}