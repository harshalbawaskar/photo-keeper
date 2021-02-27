import { UIRouter } from "@uirouter/core";

export const uiRouterConfigFn = (router: UIRouter) => {
    // Configure the initial state
    // If the browser URL doesn't matches any state when the router starts,
    // go to the `users` state by default.
    router.urlService.rules.initial({ state: "users" });
};