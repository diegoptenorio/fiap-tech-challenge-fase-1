export type Status = "initial" | "loading" | "success" | "error";

export interface RequestInit {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: BodyInit | null;
    params?: Record<string, string | number | boolean | undefined>;
}

export interface UseFetchOptions {
    auto?: boolean;
    url?: string;
    options?: RequestInit;
}
