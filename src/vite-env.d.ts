/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BRAND_NAME: string
  readonly VITE_CITY: string
  readonly VITE_PHONE: string
  readonly VITE_PHONE_DISPLAY: string
  readonly VITE_VIBER: string
  readonly VITE_WHATSAPP: string
  readonly VITE_EMAIL: string
  readonly VITE_COVERAGE: string
  readonly VITE_RESPONSE_TIME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
