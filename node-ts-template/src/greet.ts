export interface GreetOptions {
  name: string;
  excited?: boolean;
}

export function greet({ name, excited = false }: GreetOptions): string {
  const trimmed = name.trim() || "world";
  return `Hello, ${trimmed}${excited ? "!" : "."}`;
}
