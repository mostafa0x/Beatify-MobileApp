import { Router } from "expo-router";

export function handleSerach(value: string, router: Router) {
  if (!value && !router) throw "SomeThing is Error";
  router.push({ pathname: "/SearchScreen" as any, params: { q: value } });
}
