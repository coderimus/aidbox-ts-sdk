// `types: []` keeps Node globals out of these sources, so `process` is read off `globalThis` rather than imported.
const env = (
	globalThis as typeof globalThis & {
		process?: { env?: Record<string, string | undefined> };
	}
).process?.env;

const port = env?.AIDBOX_PORT ?? "8080";

/** Address of the Aidbox instance the integration tests run against. */
export const baseUrl = env?.AIDBOX_BASE_URL ?? `http://localhost:${port}`;
