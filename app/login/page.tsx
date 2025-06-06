import { LoginForm } from "@/components/auth/login-form";
import { Logo } from "@/components/logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 w-full">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <Logo className="h-12 w-12" />
          <h1 className="text-2xl font-bold">Nexus</h1>
          <p className="text-muted-foreground">
            Parental Control & Usage Monitor
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
