import { Router } from "expo-router";

export function handleBack(router: Router) {
  const canBack = router.canGoBack();
  if (canBack) {
    router.back();
  } else {
    router.replace("/" as any);
  }
}
