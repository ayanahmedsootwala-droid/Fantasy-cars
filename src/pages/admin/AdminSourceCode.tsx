import { AdminLayout } from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code2, ExternalLink, FolderTree, Wrench } from 'lucide-react';

export default function AdminSourceCode() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-xl font-semibold">
              <Code2 className="h-5 w-5" />
              Source Code
            </h1>
            <p className="text-sm text-muted-foreground">
              Internal developer area for repository, build, and deployment details.
            </p>
          </div>
          <Badge variant="secondary" className="w-fit">
            Placeholder Page
          </Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Developer Tools</CardTitle>
            <CardDescription>
              This route was referenced by the admin navigation, but its page component was missing.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-secondary/30 p-4">
              <FolderTree className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                Use this section for future source browsing, changelog visibility, deployment notes, or build
                metadata surfaced inside the admin panel.
              </p>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-secondary/30 p-4">
              <Wrench className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                The page is intentionally minimal so the application can build and the `/admin/source-code`
                route remains valid until a fuller feature is implemented.
              </p>
            </div>

            <Button asChild variant="outline">
              <a href="/" target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Public Site
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
