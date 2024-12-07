import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Registrati</CardTitle>
        <CardDescription>
          Inserisci le informazioni per creare un account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Conferma la Password</Label>
            <Input id="confirm-password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Registrati
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Hai già un account?{" "}
          <Link href="/auth/signin" className="underline">
            Accedi
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
