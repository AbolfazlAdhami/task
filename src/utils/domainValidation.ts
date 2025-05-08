export function isValidDomain(input: string): boolean {
  const trimmed = input.trim();
  if (!trimmed) return false;

  // Basic domain regex (doesn't check for protocol or path)
  const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;
  return domainRegex.test(trimmed);
}
