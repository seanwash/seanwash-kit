/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PB_URL: string;
	readonly PB_ADMIN_EMAIL: string;
	readonly PB_ADMIN_PASSWORD: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
